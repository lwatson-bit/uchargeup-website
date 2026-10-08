// Vercel serverless endpoint behind the site chat (Juice). Takes the details
// the visitor gave plus the transcript and emails them to support@ so a
// person takes over. The email is the only durable record, so the full
// (card-masked) payload is logged whenever the email cannot go out. Same
// Gmail transport and bot checks as the old contact form.
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

// trim() guards against stray whitespace from pasting; Google displays app
// passwords with spaces in them, so strip those too
const GMAIL_USER = (process.env.GMAIL_USER || "").trim();
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || "").replace(/\s+/g, "");
const SUPPORT_EMAIL = "support@uchargeup.com";

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      })
    : null;

const short = z.string().trim().max(200);
const fieldsSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  phone: short.optional(),
  venue: short.optional(),
  rentalDate: z.string().trim().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/).optional(),
  rentalTime: short.optional(),
  cardLast4: z.string().trim().regex(/^\d{4}$/, "Last four digits only").optional(),
  business: short.optional(),
  venueType: short.optional(),
  message: z.string().trim().max(2000).optional(),
});

const handoffSchema = z.object({
  category: z.enum(["rental", "transaction", "partner", "other"]),
  issue: z.string().trim().max(200).default(""),
  fields: fieldsSchema,
  transcript: z
    .array(
      z.object({
        role: z.enum(["bot", "user"]),
        text: z.string().max(2000),
        at: z.number(),
      }),
    )
    .max(120)
    .default([]),
  // Anti-spam signals, never emailed: `website` is a honeypot humans leave
  // blank; `startedAt` (client load time, ms) catches submissions faster
  // than a person could have chatted.
  website: z.string().optional(),
  startedAt: z.number(),
  lang: z.enum(["en", "es"]).default("en"),
});

// A real handoff follows a chat, so "too fast" only counts as a bot when the
// transcript is also nearly empty.
const MIN_FILL_TIME_MS = 2000;
const MIN_USER_LINES_FOR_FAST = 3;

// Best-effort per-IP rate limit, kept inline (the api/ functions take no
// relative imports). Serverless caveat: the Map lives in one warm function
// instance, so this bounds abuse per instance rather than guaranteeing a
// global cap. Pruned on every call so it cannot grow without bound.
const HANDOFF_MAX = 20;
const HANDOFF_WINDOW_MS = 10 * 60_000;
const hitsByIp = new Map<string, number[]>();

function clientIp(req: VercelRequest): string {
  const fwd = req.headers["x-forwarded-for"];
  const first = (Array.isArray(fwd) ? fwd[0] : fwd || "").split(",")[0].trim();
  return first || req.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip: string, now = Date.now()): boolean {
  // forEach rather than for..of: this tsconfig has no target, so Map iteration
  // fails type-checking; deleting inside forEach is safe for a Map.
  hitsByIp.forEach((stamps, key) => {
    const kept = stamps.filter((t) => now - t < HANDOFF_WINDOW_MS);
    if (kept.length === 0) hitsByIp.delete(key);
    else hitsByIp.set(key, kept);
  });
  const stamps = hitsByIp.get(ip) ?? [];
  if (stamps.length >= HANDOFF_MAX) return true;
  stamps.push(now);
  hitsByIp.set(ip, stamps);
  return false;
}

const CATEGORY_LABEL: Record<z.infer<typeof handoffSchema>["category"], string> = {
  rental: "Rental trouble",
  transaction: "Transaction question",
  partner: "Partner inquiry",
  other: "Message",
};

const FIELD_LABEL: Record<keyof z.infer<typeof fieldsSchema>, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  venue: "Where",
  rentalDate: "Rental date",
  rentalTime: "Time",
  cardLast4: "Card ending in",
  business: "Business",
  venueType: "Type of venue",
  message: "Notes",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Any run of 13 to 19 digits (single spaces or dashes allowed between them)
// is treated as a card number and reduced to first four + last four, so a
// pasted PAN never reaches the email or the logs.
const CARD_RUN = /\d(?:[ -]?\d){12,18}/g;
function maskCards(text: string): string {
  return text.replace(CARD_RUN, (run) => {
    const digits = run.replace(/\D/g, "");
    return `${digits.slice(0, 4)} •••• •••• ${digits.slice(-4)}`;
  });
}

function makeReference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const salt = Math.random().toString(36).toUpperCase().slice(2, 4);
  return `UCU-${stamp}${salt}`;
}

function formatWhen(at: number): string {
  const d = new Date(at);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/Detroit" });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    console.warn("Chat handoff: rate limit tripped for", ip);
    return res.status(429).json({ success: false, message: "Too many requests. Please wait a few minutes and try again." });
  }

  try {
    const submission = handoffSchema.parse(req.body);
    const { website, startedAt, ...raw } = submission;

    const reference = makeReference();

    // Bots fill the honeypot or arrive faster than a human could chat.
    // Report success without emailing so the bot has no signal to adapt on.
    const userLines = raw.transcript.filter((line) => line.role === "user").length;
    const tooFast = Date.now() - startedAt < MIN_FILL_TIME_MS && userLines < MIN_USER_LINES_FOR_FAST;
    const spamReason = website ? "honeypot" : tooFast ? "too fast" : null;
    if (spamReason) {
      console.log("Chat handoff flagged as spam, discarding:", spamReason, ip);
      return res.json({ success: true, reference });
    }

    // Everything rendered or logged from here on is the masked copy.
    const handoff = {
      ...raw,
      fields: { ...raw.fields, message: raw.fields.message === undefined ? undefined : maskCards(raw.fields.message) },
      transcript: raw.transcript.map((line) => ({ ...line, text: maskCards(line.text) })),
    };
    const f = handoff.fields;
    const fieldsPresent = (Object.keys(f) as (keyof typeof f)[]).filter((key) => f[key] !== undefined && f[key] !== "");

    console.log(
      "Chat handoff:",
      JSON.stringify({ reference, category: handoff.category, issue: handoff.issue, lang: handoff.lang, fieldsPresent }),
    );

    const label = CATEGORY_LABEL[handoff.category];
    const detail = handoff.category === "partner" ? f.business || f.name : f.venue || f.name;
    const subject = `[Chat] ${label}${handoff.lang === "es" ? " (ES)" : ""} – ${detail} (${reference})`;

    const rows = (Object.keys(FIELD_LABEL) as (keyof typeof FIELD_LABEL)[])
      .filter((key) => f[key])
      .map(
        (key) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap;vertical-align:top;">${FIELD_LABEL[key]}</td><td style="padding:6px 0;color:#111;white-space:pre-wrap;">${escapeHtml(String(f[key]))}</td></tr>`,
      )
      .join("") +
      (handoff.lang === "es"
        ? `<tr><td style="padding:6px 12px 6px 0;color:#666;white-space:nowrap;vertical-align:top;">Language</td><td style="padding:6px 0;color:#111;">${escapeHtml("Español")}</td></tr>`
        : "");

    const transcript = handoff.transcript
      .map(
        (line) =>
          `<p style="margin:6px 0;"><span style="color:#888;font-size:12px;">${formatWhen(line.at)}</span> <strong style="color:${line.role === "bot" ? "#317AA4" : "#111"};">${line.role === "bot" ? "Juice" : escapeHtml(f.name)}:</strong> <span style="white-space:pre-wrap;">${escapeHtml(line.text)}</span></p>`,
      )
      .join("");

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color:#111;">
        <h2 style="color:#317AA4; margin-bottom:4px;">New chat handoff · ${escapeHtml(label)}</h2>
        <p style="margin-top:0;color:#666;">Reference <strong>${reference}</strong>${handoff.issue ? ` · ${escapeHtml(handoff.issue)}` : ""}</p>

        <div style="background:#f8f9fa; padding:16px 20px; border-radius:8px; margin:20px 0;">
          <table style="border-collapse:collapse; font-size:14px;">${rows}</table>
        </div>

        ${
          transcript
            ? `<div style="background:#fff; padding:16px 20px; border-left:4px solid #317AA4; margin:20px 0; font-size:14px;">
          <h3 style="margin-top:0;color:#333;">Transcript</h3>${transcript}
        </div>`
            : ""
        }

        <div style="margin-top:30px; padding-top:20px; border-top:1px solid #eee; color:#666; font-size:13px;">
          <p>Sent by Juice, the uchargeup.com chat. Reply to this email to answer ${escapeHtml(f.name)} directly.</p>
        </div>
      </div>
    `;

    if (!transporter) {
      // No email can go out, so the log is the only record of this handoff.
      console.log("No Gmail credentials provided - skipping email notification", reference, JSON.stringify(handoff));
      if (process.env.NODE_ENV !== "development") {
        return res.status(500).json({ success: false, message: "Failed to send" });
      }
      console.log(html);
      return res.json({ success: true, reference });
    }

    try {
      await transporter.sendMail({
        from: `"U Charge Up Website" <${GMAIL_USER}>`,
        to: SUPPORT_EMAIL,
        replyTo: f.email,
        subject,
        html,
      });
    } catch (error) {
      // The email failed, so keep the full (masked) payload in the log before
      // the generic 500 path takes over.
      console.error("Chat handoff email failed:", reference, JSON.stringify(handoff));
      throw error;
    }
    console.log("Email notification sent successfully", reference);

    return res.json({ success: true, reference });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Chat handoff validation error:", JSON.stringify(error.errors));
      return res.status(400).json({
        success: false,
        message: "Some of the details didn't look right. Mind checking them?",
        errors: error.errors,
      });
    }
    console.error("Chat handoff error:", error instanceof Error ? error.stack ?? error.message : String(error));
    return res.status(500).json({ success: false, message: "Failed to send" });
  }
}
