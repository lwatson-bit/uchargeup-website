import { useEffect } from "react";

const SITE = "https://uchargeup.com";
const SUFFIX = " | U Charge Up";

interface Head {
  title: string;
  description?: string;
  path: string;
}

function upsert(selector: string, create: () => HTMLElement): HTMLElement {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute("content", value);
}

/** Per-route title, description, canonical and share tags for the SPA. */
export function useHead({ title, description, path }: Head) {
  useEffect(() => {
    const fullTitle = title.endsWith("U Charge Up") ? title : title + SUFFIX;
    const url = SITE + (path === "/" ? "" : path);
    document.title = fullTitle;
    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("property", "og:url", url);
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}
