import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSubmitSchema } from "@shared/schema";
import { z } from "zod";
import { MemStorage } from "./storage";
import { sendNotificationEmail } from "./email";

const storage = new MemStorage();

const MIN_FILL_TIME_MS = 2000;

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - save to database and send email notification
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = contactSubmitSchema.parse(req.body);
      const { website, startedAt, ...contactData } = submission;

      // Bots either fill the honeypot or submit faster than a human can
      // type. Report success without saving/emailing so the bot has no
      // signal to adapt on.
      const isBot = !!website || Date.now() - startedAt < MIN_FILL_TIME_MS;
      if (isBot) {
        console.log("Contact form submission flagged as spam, discarding:", contactData);
        return res.json({
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        });
      }

      // Save contact to storage
      const savedContact = await storage.createContact(contactData);
      console.log("Contact form submission saved:", savedContact);

      // Send email notification (non-blocking)
      sendNotificationEmail(contactData).catch(error => {
        console.error("Email notification failed:", error);
      });

      res.json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon."
      });
    } catch (error) {
      // Logging the raw ZodError/Error object crashes Node's console.error
      // (util.inspect chokes on it under Node 24) - stringify explicitly.
      if (error instanceof z.ZodError) {
        console.error("Contact form validation error:", JSON.stringify(error.errors));
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error(
          "Contact form error:",
          error instanceof Error ? error.stack ?? error.message : String(error)
        );
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });



  const httpServer = createServer(app);
  return httpServer;
}
