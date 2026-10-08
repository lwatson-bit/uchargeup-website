// The scripted conversation Juice follows. Every node is data: what Juice
// says, which buttons (chips) appear, and which single question (input) is
// asked. Copy lives here so it can be tuned without touching the widget.
//
// House rules baked into the wording (from the support playbook):
//  - never promise a refund, a dollar amount (other than the usual $20 hold)
//    or a reply time
//  - never ask for a full card number, only the last four
//  - never argue or ask a customer to prove anything
//  - lost / replacement-fee questions go straight to a person, with no fee
//    rule or timeline stated

export type Category = "rental" | "transaction" | "partner" | "other";

/**
 * Lost / stolen policy as Juice quotes it, in the owner's words: "after 3
 * days, a $129 replacement fee, which is the lost or stolen fee, applies".
 * Daily maximums vary by venue, so copy never explains how charges add up.
 * (For reference: $129 is the all-in total, e.g. $40 + $40 + $40 + $9 at a
 * $40 venue; it is never added on top of the rental charges.) Copy uses {lostFee} and
 * {lostDays}; i18n.tr() fills them in for both languages. When the policy
 * changes, change it here, in the FACTS block of api/chat-ask.ts, and in
 * Terms of Service section 3.5 (English and Spanish pages).
 */
export const POLICY = { lostFee: "$129", lostDays: "3" };

export type Field =
  | "name"
  | "email"
  | "phone"
  | "venue"
  | "rentalDate"
  | "rentalTime"
  | "cardLast4"
  | "business"
  | "venueType"
  | "message";

export interface Chip {
  label: string;
  next: string;
  /** Field values to record when this chip is chosen. */
  set?: Partial<Record<Field, string>>;
  /** Overrides the issue line shown in the summary and the email. */
  issue?: string;
  category?: Category;
}

export type InputKind = "text" | "email" | "last4" | "date" | "textarea";

export interface InputSpec {
  kind: InputKind;
  field: Field;
  placeholder?: string;
  optional?: boolean;
  /** Optional only when the handoff is in one of these categories. */
  optionalWhen?: Category[];
  skipLabel?: string;
  next: string;
  /** Quick answers shown above the input (e.g. Today / Yesterday). */
  chips?: Chip[];
}

export interface FlowLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FlowNode {
  id: string;
  /** One entry per chat bubble. {firstName} and {reference} are filled in. */
  say: string[];
  /** Used instead of `say` when the previous question was skipped because
   *  Juice already knew the answer (so "Thanks, Sam" isn't repeated). */
  altSay?: string[];
  chips?: Chip[];
  input?: InputSpec;
  links?: FlowLink[];
  /** Entering this node sets the handoff category / issue. */
  category?: Category;
  issue?: string;
  /** Jump straight on to another node after speaking. */
  next?: string;
  /** Skip this node when the field already has a value. */
  skipIf?: Field;
  kind?: "summary" | "send" | "sent" | "happy";
  /** Typed text is answered by the assistant instead of treated as an answer. */
  freeText?: boolean;
  /** Sent to the assistant (not shown) ahead of the first thing typed on this
   *  node, so a one-word reply like "Ford Field" arrives with its question. */
  aiPrompt?: string;
}

export const APP_LINKS: FlowLink[] = [
  { label: "Find a kiosk", href: "/locations" },
  // "__app" is resolved at render time to the App Store or Google Play
  // link for the visitor's device (utils/appDownload.ts).
  { label: "Get the app", href: "__app", external: true },
];

export const WELCOME_CHIPS: Chip[] = [
  { label: "🔋 Trouble with a rental", next: "rental" },
  { label: "💳 Question about a charge", next: "charge" },
  { label: "🤝 Partner with us", next: "p_intro" },
  { label: "💬 Something else", next: "o_intro" },
];

const HAPPY_CHIP: Chip = { label: "✅ That worked", next: "happy" };
/** Mid-conversation return to the menu (no re-greeting). */
const BACK_CHIP: Chip = { label: "Back to the start", next: "again" };
const MORE_CHIP: Chip = { label: "Something else", next: "again" };
/** After a handoff was sent: wipes the thread and greets again. */
const NEW_CHAT_CHIP: Chip = { label: "Start a new chat", next: "__restart" };

export const FIELD_LABELS: Record<Field, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  venue: "Where",
  rentalDate: "Date",
  rentalTime: "Time",
  cardLast4: "Card ending in",
  business: "Business",
  venueType: "Type of venue",
  message: "Notes",
};

const nodes: FlowNode[] = [
  {
    id: "welcome",
    say: ["Hi! I'm Juice, the U Charge Up helper. What can I do for you?"],
    chips: WELCOME_CHIPS,
    freeText: true,
  },
  {
    id: "happy",
    kind: "happy",
    say: ["Great! Anything else I can help with?"],
    chips: WELCOME_CHIPS,
    freeText: true,
  },
  {
    id: "again",
    say: ["Sure, what else can I help with?"],
    chips: WELCOME_CHIPS,
    freeText: true,
  },
  {
    id: "later",
    say: ["Sounds good. If it's still showing as active later, come back and tap Send the details."],
    chips: WELCOME_CHIPS,
    freeText: true,
  },

  // ---------------------------------------------------------------- rental
  {
    id: "rental",
    category: "rental",
    say: ["Let's get you charged up. What's going on?"],
    chips: [
      { label: "Battery didn't come out", next: "r_noeject" },
      { label: "Battery won't charge my phone", next: "r_dead" },
      { label: "How do I return it?", next: "r_return" },
      { label: "Returned it, still shows active", next: "r_active" },
      { label: "App won't scan or start", next: "r_scan" },
      { label: "I lost the battery", next: "r_lost" },
      { label: "Where's the nearest kiosk?", next: "r_nearest" },
      { label: "How do I rent one?", next: "r_howto" },
    ],
    freeText: true,
  },
  {
    id: "r_noeject",
    say: [
      "Sorry about that, let's get you a battery. Two quick things to try:",
      "1. Tap or scan once more at the same kiosk. A slot can stick on the first try.\n2. If nothing comes out, try a different kiosk at the venue. Any U Charge Up kiosk works.",
    ],
    chips: [
      HAPPY_CHIP,
      {
        label: "I got charged anyway",
        next: "s_intro",
        issue: "Charged but no battery came out",
        category: "transaction",
      },
      {
        label: "❌ Still nothing",
        next: "s_intro_rental",
        issue: "Battery didn't come out",
        category: "rental",
      },
      MORE_CHIP,
    ],
  },
  {
    id: "r_dead",
    say: [
      "That's no good. Return it to any kiosk and grab a fresh one, the swap only takes a second.",
      "If the dead one cost you rental time, send us the details and we'll take a look.",
    ],
    chips: [
      { label: "✅ All set", next: "happy" },
      {
        label: "Send the details",
        next: "s_intro",
        issue: "Battery wouldn't charge my phone",
        category: "transaction",
      },
      MORE_CHIP,
    ],
  },
  {
    id: "r_return",
    say: [
      "Push the battery firmly into any empty slot at any U Charge Up kiosk until the kiosk accepts it. The rental clock stops the moment the kiosk registers the return.",
      "It doesn't have to be the kiosk you started at. If a kiosk is full, the app shows the nearest one with open slots.",
    ],
    links: APP_LINKS,
    chips: [
      { label: "✅ Got it", next: "happy" },
      { label: "Returned it, still shows active", next: "r_active" },
      MORE_CHIP,
    ],
  },
  {
    id: "r_active",
    say: [
      "That can happen when a kiosk is briefly offline. The return usually registers on its own once it reconnects.",
      "If it's still showing as active after a few hours, send us the details and a person will look into it.",
    ],
    chips: [
      {
        label: "Send the details",
        next: "s_intro",
        issue: "Returned but still showing as active",
        category: "transaction",
      },
      { label: "I'll check back later", next: "later" },
      MORE_CHIP,
    ],
  },
  {
    id: "r_scan",
    say: [
      "A couple of ways around that:",
      "• Type in the station number printed under the QR code instead of scanning.\n• Or skip the app and tap your credit or debit card on the kiosk's reader.",
    ],
    links: APP_LINKS,
    chips: [
      HAPPY_CHIP,
      {
        label: "❌ Still stuck",
        next: "s_intro_rental",
        issue: "App won't scan or start a rental",
        category: "rental",
      },
      MORE_CHIP,
    ],
  },
  {
    id: "r_lost",
    say: [
      "Sorry to hear that. If a battery isn't returned after {lostDays} days, a {lostFee} replacement fee applies. That's our lost or stolen fee, and the battery is yours to keep.",
      "Have a question about your charge? Send us the details and a person on our team will take a look.",
    ],
    chips: [
      {
        label: "Send the details",
        next: "s_intro_rental",
        issue: "Lost battery",
        category: "transaction",
      },
      { label: "✅ That answers it", next: "happy" },
      BACK_CHIP,
    ],
  },
  {
    id: "r_nearest",
    say: [
      "Every U Charge Up kiosk is on the map, and the app shows which ones have batteries available right now.",
    ],
    links: APP_LINKS,
    chips: [{ label: "✅ Thanks", next: "happy" }, BACK_CHIP],
  },
  {
    id: "r_howto",
    say: [
      "Easy. Three steps:",
      "1. At the kiosk, scan the QR code with your phone or tap your credit or debit card on the reader.\n2. Grab the battery that pops out and charge with the built-in cables, wherever you go.\n3. Done? Push it into an empty slot at any U Charge Up kiosk until it clicks in.",
      "A temporary hold, usually $20, goes on your card when you start and drops off after you return the battery.",
    ],
    links: APP_LINKS,
    chips: [
      { label: "✅ That's all I needed", next: "happy" },
      { label: "I have another question", next: "again" },
    ],
  },

  // ---------------------------------------------------------------- charge
  {
    id: "charge",
    category: "transaction",
    say: ["Happy to help with that. Which one sounds right?"],
    chips: [
      { label: "What's the hold (usually $20)?", next: "c_hold" },
      { label: "What does a rental cost?", next: "c_price" },
      { label: "Charged more than expected", next: "s_intro", issue: "Charged more than expected" },
      { label: "Lost or stolen fee ({lostFee})", next: "c_fee" },
      { label: "I want a refund", next: "s_intro", issue: "Refund request" },
      { label: "Something else about a charge", next: "s_intro", issue: "Question about a charge" },
    ],
    freeText: true,
  },
  {
    id: "c_hold",
    say: [
      "When you start a rental we place a temporary hold on your card, usually $20, to secure the battery. It's a hold, not a charge.",
      "When you return the battery the hold is released and only your actual rental fee is charged. Your bank decides how fast the hold disappears, usually 1 to 10 business days.",
    ],
    chips: [
      { label: "✅ That answers it", next: "happy" },
      { label: "I still have a question", next: "s_intro", issue: "Question about the hold" },
    ],
  },

  {
    id: "c_price",
    say: [
      "Prices are set by each venue. Type the name of the venue and I'll look it up.",
      "The app also shows the price before you rent.",
    ],
    aiPrompt: '[The visitor tapped "What does a rental cost?" and was asked which venue. Their answer follows.]',
    links: APP_LINKS,
    chips: [BACK_CHIP],
    freeText: true,
  },

  {
    id: "c_fee",
    say: [
      "That's our lost or stolen fee. If a battery isn't returned after {lostDays} days, a {lostFee} replacement fee applies, and the battery is yours to keep.",
      "If you think it shouldn't apply to your rental, send us the details and a person will take a look.",
    ],
    chips: [
      { label: "Send the details", next: "s_intro", issue: "Lost or stolen fee question" },
      { label: "✅ That answers it", next: "happy" },
    ],
  },

  // ------------------------------------------------- support handoff form
  {
    id: "s_intro",
    category: "transaction",
    say: [
      "Let us take a look at the transaction and we'll get this sorted out for you. I just need a few details so a person on our team can find it.",
    ],
    next: "s_name",
  },
  {
    id: "s_intro_rental",
    say: ["Got it, let's get a person on this. A few quick details first."],
    next: "s_name",
  },
  {
    id: "s_name",
    say: ["What's your name?"],
    input: { kind: "text", field: "name", placeholder: "Your name", next: "s_where" },
    skipIf: "name",
    next: "s_where",
  },
  {
    id: "s_where",
    say: ["Thanks, {firstName}. Where were you when this happened? The venue or the city is fine."],
    altSay: ["Where were you when this happened? The venue or the city is fine."],
    input: { kind: "text", field: "venue", placeholder: "Venue or city", next: "s_date" },
  },
  {
    id: "s_date",
    say: ["And what day was that?"],
    input: {
      kind: "date",
      field: "rentalDate",
      next: "s_time",
      chips: [
        { label: "Today", next: "s_time", set: { rentalDate: "__today" } },
        { label: "Yesterday", next: "s_time", set: { rentalDate: "__yesterday" } },
      ],
    },
  },
  {
    id: "s_time",
    say: ["Roughly what time? Tap Not sure if you don't remember."],
    input: {
      kind: "text",
      field: "rentalTime",
      placeholder: "e.g. around 8pm",
      optional: true,
      skipLabel: "Not sure",
      next: "s_last4",
    },
  },
  {
    id: "s_last4",
    say: ["To find your rental, what are the last 4 digits of the card you used?"],
    input: {
      kind: "last4",
      field: "cardLast4",
      placeholder: "Last 4 digits",
      next: "s_email",
      // A kiosk problem may have happened before any card was tapped.
      optionalWhen: ["rental"],
      skipLabel: "I didn't use a card",
    },
  },
  {
    id: "s_email",
    say: ["Perfect. What's the best email for a person to reply to you?"],
    input: { kind: "email", field: "email", placeholder: "you@example.com", next: "s_more" },
    skipIf: "email",
    next: "s_more",
  },
  {
    id: "s_more",
    say: ["Anything else we should know?"],
    input: {
      kind: "textarea",
      field: "message",
      placeholder: "Optional",
      optional: true,
      skipLabel: "Skip",
      next: "s_summary",
    },
  },
  {
    id: "s_summary",
    kind: "summary",
    say: ["Here's what I'll send to our team:"],
    chips: [
      { label: "Send to our team", next: "s_send" },
      { label: "Start over", next: "__restart" },
    ],
  },
  { id: "s_send", kind: "send", say: [], next: "sent" },
  {
    id: "sent",
    kind: "sent",
    say: [
      "Sent! Your reference is {reference}.",
      "A real person will email you back from support@uchargeup.com.",
    ],
    chips: [NEW_CHAT_CHIP],
  },

  // --------------------------------------------------------------- partner
  {
    id: "p_intro",
    category: "partner",
    issue: "Wants a kiosk at their venue",
    say: ["That's great to hear! Let me grab a few details so the right person can reach out."],
    next: "p_name",
  },
  {
    id: "p_name",
    say: ["What's your name?"],
    input: { kind: "text", field: "name", placeholder: "Your name", next: "p_business" },
    skipIf: "name",
    next: "p_business",
  },
  {
    id: "p_business",
    say: ["Nice to meet you, {firstName}. What's the business called, and what city is it in?"],
    altSay: ["What's the business called, and what city is it in?"],
    input: {
      kind: "text",
      field: "business",
      placeholder: "Business name, city",
      next: "p_type",
    },
  },
  {
    id: "p_type",
    say: ["What kind of place is it?"],
    chips: [
      { label: "Bar / restaurant", next: "p_email", set: { venueType: "Bar / restaurant" } },
      { label: "Hotel", next: "p_email", set: { venueType: "Hotel" } },
      { label: "Stadium / arena", next: "p_email", set: { venueType: "Stadium / arena" } },
      { label: "Casino", next: "p_email", set: { venueType: "Casino" } },
      { label: "Event space", next: "p_email", set: { venueType: "Event space" } },
      { label: "Other", next: "p_email", set: { venueType: "Other" } },
    ],
  },
  {
    id: "p_email",
    say: ["Best email to reach you?"],
    input: { kind: "email", field: "email", placeholder: "you@example.com", next: "p_phone" },
  },
  {
    id: "p_phone",
    say: ["And a phone number, if you'd rather talk?"],
    input: {
      kind: "text",
      field: "phone",
      placeholder: "Optional",
      optional: true,
      skipLabel: "Skip",
      next: "p_more",
    },
  },
  {
    id: "p_more",
    say: ["Anything else you'd like us to know?"],
    input: {
      kind: "textarea",
      field: "message",
      placeholder: "Optional",
      optional: true,
      skipLabel: "Skip",
      next: "p_summary",
    },
  },
  {
    id: "p_summary",
    kind: "summary",
    say: ["Here's what I'll pass along:"],
    chips: [
      { label: "Send it", next: "p_send" },
      { label: "Start over", next: "__restart" },
    ],
  },
  { id: "p_send", kind: "send", say: [], next: "p_sent" },
  {
    id: "p_sent",
    kind: "sent",
    say: ["Thanks, {firstName}! We'll be in touch soon.", "Your reference is {reference}, in case you need it."],
    chips: [NEW_CHAT_CHIP],
  },

  // ----------------------------------------------------------------- other
  {
    id: "o_intro",
    category: "other",
    issue: "General message",
    say: ["Sure thing. What's your name?"],
    input: { kind: "text", field: "name", placeholder: "Your name", next: "o_email" },
  },
  {
    // Reached when a typed question can't be answered automatically: the
    // text is already stored as the message, so only name and email are asked.
    id: "o_human",
    category: "other",
    issue: "Typed question for a person",
    say: ["I'll make sure a person sees that. What's your name?"],
    input: { kind: "text", field: "name", placeholder: "Your name", next: "o_email" },
  },
  {
    id: "o_email",
    say: ["Thanks, {firstName}. What's the best email to reply to you?"],
    altSay: ["What's the best email to reply to you?"],
    input: { kind: "email", field: "email", placeholder: "you@example.com", next: "o_message" },
  },
  {
    id: "o_message",
    say: ["What can we help with?"],
    input: { kind: "textarea", field: "message", placeholder: "Tell us what's up", next: "o_summary" },
    skipIf: "message",
    next: "o_summary",
  },
  {
    id: "o_summary",
    kind: "summary",
    say: ["Here's what I'll send:"],
    chips: [
      { label: "Send to our team", next: "o_send" },
      { label: "Start over", next: "__restart" },
    ],
  },
  { id: "o_send", kind: "send", say: [], next: "sent" },
];

export const FLOW: Record<string, FlowNode> = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function getNode(id: string): FlowNode {
  const node = FLOW[id];
  if (!node) throw new Error(`Unknown chat node: ${id}`);
  return node;
}

/** Which fields each summary shows, in order. */
export const SUMMARY_FIELDS: Record<Category, Field[]> = {
  rental: ["name", "venue", "rentalDate", "rentalTime", "cardLast4", "email", "message"],
  transaction: ["name", "venue", "rentalDate", "rentalTime", "cardLast4", "email", "message"],
  partner: ["name", "business", "venueType", "email", "phone", "message"],
  other: ["name", "email", "message"],
};

/** Node to jump back to when a summary row's Edit is pressed. */
export const EDIT_NODES: Record<Category, Partial<Record<Field, string>>> = {
  rental: {
    name: "s_name",
    venue: "s_where",
    rentalDate: "s_date",
    rentalTime: "s_time",
    cardLast4: "s_last4",
    email: "s_email",
    message: "s_more",
  },
  transaction: {
    name: "s_name",
    venue: "s_where",
    rentalDate: "s_date",
    rentalTime: "s_time",
    cardLast4: "s_last4",
    email: "s_email",
    message: "s_more",
  },
  partner: {
    name: "p_name",
    business: "p_business",
    venueType: "p_type",
    email: "p_email",
    phone: "p_phone",
    message: "p_more",
  },
  other: { name: "o_intro", email: "o_email", message: "o_message" },
};
