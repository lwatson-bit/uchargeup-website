import type { ContactForm } from '@shared/schema';

// trim() guards against stray whitespace/newlines from pasting the key
const RESEND_API_KEY = (process.env.RESEND_API_KEY || '').trim();

export async function sendNotificationEmail(contact: ContactForm): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.log('No Resend API key provided - skipping email notification');
    return false;
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'U Charge Up Website <support@uchargeup.com>',
        to: ['support@uchargeup.com'],
        reply_to: contact.email,
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
      }),
    });

    if (!resp.ok) {
      throw new Error(`Resend ${resp.status}: ${await resp.text()}`);
    }
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}
