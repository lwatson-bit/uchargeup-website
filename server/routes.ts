import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { MemStorage } from "./storage";
import { sendNotificationEmail } from "./email";

const storage = new MemStorage();

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - save to database and send email notification
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
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
      console.error("Contact form error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
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
