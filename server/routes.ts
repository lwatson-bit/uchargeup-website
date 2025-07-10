import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { MemStorage } from "./storage";

const storage = new MemStorage();

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - save to database
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // Save contact to storage
      const savedContact = await storage.createContact(contactData);
      console.log("Contact form submission saved:", savedContact);
      
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

  // Admin endpoint to view all contacts
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
