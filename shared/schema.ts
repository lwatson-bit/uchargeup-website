import { z } from "zod";
import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

// Database table for contact submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact form validation schema
export const contactSchema = createInsertSchema(contacts, {
  name: (schema) => schema.trim().min(1, "Name is required").max(100, "Name is too long"),
  email: (schema) => schema.trim().email("Enter a valid email address"),
  subject: (schema) => schema.trim().min(1, "Subject is required"),
  message: (schema) =>
    schema
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(5000, "Message is too long"),
}).omit({
  id: true,
  createdAt: true,
});

export type ContactForm = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Extends the stored-contact shape with anti-spam signals that never get
// saved or emailed: `website` is a honeypot field left blank by real
// visitors but often auto-filled by bots, and `startedAt` (client render
// time, ms) lets the server reject submissions that arrive too fast for a
// human to have actually filled the form out. `website` must always parse
// successfully (any string, or missing) — it's not meant to reject bad
// input, it's meant to reach the isBot check downstream so a filled-in
// honeypot gets a fake success response instead of a validation error.
export const contactSubmitSchema = contactSchema.extend({
  website: z.string().optional(),
  startedAt: z.number(),
});

export type ContactSubmit = z.infer<typeof contactSubmitSchema>;
