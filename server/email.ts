import nodemailer from 'nodemailer';
import type { ContactForm } from '@shared/schema';

// trim() guards against stray whitespace from pasting; Google displays app
// passwords with spaces in them, so strip those too
const GMAIL_USER = (process.env.GMAIL_USER || '').trim();
const GMAIL_APP_PASSWORD = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

const transporter =
  GMAIL_USER && GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      })
    : null;

export async function sendNotificationEmail(contact: ContactForm): Promise<boolean> {
  if (!transporter) {
    console.log('No Gmail credentials provided - skipping email notification');
    return false;
  }

  try {
    await transporter.sendMail({
      from: `"U Charge Up Website" <${GMAIL_USER}>`,
      to: 'support@uchargeup.com',
      replyTo: contact.email,
      subject: `New Contact Form Submission: ${contact.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc;">New Contact Form Submission</h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details</h3>
            <p><strong>Name:</strong> ${contact.name}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
            ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
            <p><strong>Subject:</strong> ${contact.subject}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${contact.message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This email was sent from your U Charge Up contact form. Reply to respond directly to the sender.</p>
          </div>
        </div>
      `,
    });
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}
