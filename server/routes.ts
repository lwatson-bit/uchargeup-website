import type { Express } from "express";
import { createServer, type Server } from "http";
import chatHandoff from "../api/chat-handoff";
import chatAsk from "../api/chat-ask";

export async function registerRoutes(app: Express): Promise<Server> {
  // Local dev and Replit run the same Vercel function handlers through
  // Express, so there is one copy of the chat logic. Express's req/res carry
  // everything the handlers use (body, method, status().json(), setHeader).
  // app.all so a GET reaches the handler's own 405, as it does on Vercel.
  app.all("/api/chat-handoff", (req, res) => void chatHandoff(req as any, res as any));
  app.all("/api/chat-ask", (req, res) => void chatAsk(req as any, res as any));

  const httpServer = createServer(app);
  return httpServer;
}
