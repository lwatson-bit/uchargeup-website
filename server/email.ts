import sgMail from '@sendgrid/mail';
import type { ContactForm } from '@shared/schema';

// Set up SendGrid (only if API key is provided)
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendNotificationEmail(contact: ContactForm): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('No SendGrid API key provided - skipping email notification');
    return false;
  }

  try {
    const msg = {
      to: 'support@uchargeup.com',
      from: 'support@uchargeup.com', // This must be verified in SendGrid
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
            <p>This email was sent from your U Charge Up contact form. You can view all submissions in your admin dashboard.</p>
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}