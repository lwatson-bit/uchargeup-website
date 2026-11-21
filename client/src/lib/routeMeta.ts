/**
 * Browser tab title and link share text for each page.
 *
 * Used in two places, so keep it free of imports:
 *  - the app sets the tab title as people move between pages (useRouteMeta);
 *  - the build writes one HTML file per page with these values baked in
 *    (vite.config.ts), because link previews in texts, LinkedIn and Slack
 *    read the HTML without running the app.
 *
 * Keep the wording general: no station, state or country counts.
 */
export interface RouteMeta {
  title: string;
  description: string;
}

export const SITE_URL = "https://uchargeup.com";

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "U Charge Up - Portable Battery Bank Rental Solutions",
    description:
      "Rent a portable phone charger from a U Charge Up station and return it at any other. Find us at stadiums, hospitals, hotels, restaurants and events, coast to coast.",
  },
  "/how-it-works": {
    title: "How It Works | U Charge Up",
    description:
      "Rent a portable charger in three steps: scan or tap, charge on the go, and return it to any U Charge Up station.",
  },
  "/kiosks": {
    title: "Our Kiosks | U Charge Up",
    description:
      "Self serve phone charging stations for busy places, from compact countertop units to floor standing kiosks with a big screen.",
  },
  "/locations": {
    title: "Locations | U Charge Up",
    description:
      "Find U Charge Up in stadiums, hospitals, casinos, hotels and restaurants, coast to coast. Open the app to find the station closest to you.",
  },
  "/for-venues": {
    title: "For Venues | U Charge Up",
    description:
      "Keep your guests charged and keep them longer. We install, stock and look after a self serve charging station in your venue.",
  },
  "/events": {
    title: "Events | U Charge Up",
    description:
      "Phone charging stations for festivals, tournaments and conferences. We deliver, set up and pack out.",
  },
  "/contact": {
    title: "Contact | U Charge Up",
    description:
      "Questions, support or partnerships. Chat with us or email support@uchargeup.com.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | U Charge Up",
    description: "How U Charge Up collects, uses and protects your information.",
  },
  "/terms-of-service": {
    title: "Terms of Service | U Charge Up",
    description: "The terms that apply when you use U Charge Up stations and the app.",
  },
  "/es/privacy-policy": {
    title: "Política de Privacidad | U Charge Up",
    description: "Cómo U Charge Up recopila, usa y protege su información.",
  },
  "/es/terms-of-service": {
    title: "Términos de Servicio | U Charge Up",
    description: "Los términos que aplican al usar las estaciones y la aplicación de U Charge Up.",
  },
};

/** Meta for a path, falling back to the homepage values for unknown pages. */
export function metaFor(pathname: string): RouteMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTE_META[path] ?? ROUTE_META["/"];
}
