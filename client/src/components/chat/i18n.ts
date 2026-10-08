// Juice speaks English and Spanish. English copy is the source of truth
// (flows.ts, strings used in the widget); Spanish is a lookup keyed by the
// exact English string in i18n.es.ts. Anything missing falls back to
// English, so a new line never breaks the Spanish version, it just shows
// up untranslated until it's added.
import { ES } from "./i18n.es";
import { POLICY } from "./flows";

export type Lang = "en" | "es";

const LANG_KEY = "ucu-chat-lang";

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch {
    // ignore
  }
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/es/")) return "es";
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("es")) return "es";
  }
  return "en";
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // ignore
  }
}

/**
 * Translate one English string and fill in the policy numbers
 * ({lostFee}, {lostDays}). Per-chat placeholders like {firstName} survive.
 */
export function tr(lang: Lang, text: string): string {
  const out = lang === "en" ? text : ES[text] ?? text;
  return out.replace(/\{lostFee\}/g, POLICY.lostFee).replace(/\{lostDays\}/g, POLICY.lostDays);
}

/** Locale tag for date formatting. */
export function localeOf(lang: Lang): string {
  return lang === "es" ? "es" : "en-US";
}
