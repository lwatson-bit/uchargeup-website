// Vercel serverless version of the contact endpoint.
// The Express version in server/routes.ts still serves local dev and Replit;
// unlike there, the email send is awaited here because a serverless function
// may be frozen as soon as the response is sent.
import type { VercelRequest, VercelResponse } from "@vercel/node";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { contactSchema } from "../shared/schema";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const contact = contactSchema.parse(req.body);

    // The notification email is the only durable record of a submission,
    // so log the full payload for recovery from Vercel function logs.
    console.log("Contact form submission:", JSON.stringify(contact));

    if (!process.env.SENDGRID_API_KEY) {
      console.log("No SendGrid API key provided - skipping email notification");
    } else {
      await sgMail.send({
        to: "support@uchargeup.com",
        from: "support@uchargeup.com", // This must be verified in SendGrid
        subject: `New Contact Form Submission: ${contact.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0066cc;">New Contact Form Submission</h2>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
              <p><strong>Name:</strong> ${contact.name}</p>
              <p><strong>Email:</strong> ${contact.email}</p>
              ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ""}
              <p><strong>Subject:</strong> ${contact.subject}</p>
            </div>

            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${contact.message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>This email was sent from your U Charge Up contact form.</p>
            </div>
          </div>
        `,
      });
      console.log("Email notification sent successfully");
    }

    return res.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Contact form validation error:", JSON.stringify(error.errors));
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    }
    console.error(
      "Contact form error:",
      error instanceof Error ? error.stack ?? error.message : String(error),
    );
    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }
}
