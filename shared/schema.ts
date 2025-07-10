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
export const contactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export type ContactForm = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;
