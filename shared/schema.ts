import { z } from "zod";

// Simple contact form schema without database
export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  subject: z.string().min(1, "Subject is required")
});

export type ContactForm = z.infer<typeof contactSchema>;
