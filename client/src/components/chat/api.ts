import { apiRequest } from "@/lib/queryClient";
import type { Category, Field } from "./flows";
import type { Lang } from "./i18n";

export interface TranscriptLine {
  role: "bot" | "user";
  text: string;
  at: number;
}

export interface HandoffPayload {
  category: Category;
  issue: string;
  fields: Partial<Record<Field, string>>;
  transcript: TranscriptLine[];
  website: string;
  startedAt: number;
  lang: Lang;
}

export type AssistantAction = "transaction" | "rental" | "partner" | "human" | "none";

export interface AssistantTurn {
  role: "user" | "assistant";
  content: string;
}

export interface AssistantReply {
  enabled: boolean;
  reply?: string;
  action?: AssistantAction;
}

export async function postHandoff(payload: HandoffPayload): Promise<{ reference: string }> {
  const res = await apiRequest("POST", "/api/chat-handoff", payload);
  const body = (await res.json()) as { success: boolean; reference?: string; message?: string };
  if (!body.success || !body.reference) {
    throw new Error(body.message || "Could not send");
  }
  return { reference: body.reference };
}

export async function askAssistant(
  messages: AssistantTurn[],
  startedAt: number,
  lang: Lang,
): Promise<AssistantReply> {
  const res = await apiRequest("POST", "/api/chat-ask", { messages, startedAt, website: "", lang });
  return (await res.json()) as AssistantReply;
}

/** Fires the widget open from anywhere on the site (Contact page, partner CTA). */
export function openChat(flow?: "support" | "partner") {
  window.dispatchEvent(new CustomEvent("ucu-chat:open", { detail: { flow } }));
}
