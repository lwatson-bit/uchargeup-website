// The rental policy numbers the site shows, shared with the Juice chat so the
// two can never drift. The Terms of Service (sections 3.2 to 3.5) are the
// source; the chat's house rule is to say "typically $20" for the hold, never
// a bare promise, because the hold differs at a few venues.
import { POLICY as CHAT_POLICY } from "@/components/chat/flows";

export const POLICY = {
  ...CHAT_POLICY, // lostFee "$129", lostDays "3"
  holdAmount: "$20",
  holdQualifier: "typically",
} as const;

// Flip to false to take the "What it costs" tiles off the site without
// touching the sections.
export const SHOW_PRICING = true;
