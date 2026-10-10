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

// Larry's call 2026-10-10: no prices, holds or fees on the public site, because
// they differ by venue and country. The tiles stay in code, off.
export const SHOW_PRICING = false;
