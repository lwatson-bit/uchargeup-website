import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission - just validate and respond
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact and respond successfully
      console.log("Contact form submission:", contactData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon." 
      });
    } catch (error) {
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
