import { useEffect } from "react";
import { useLocation } from "wouter";
import { metaFor, SITE_URL } from "@/lib/routeMeta";

function setMeta(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

/** Keeps the browser tab title and the page's meta tags in step with the current page. */
export function useRouteMeta() {
  const [location] = useLocation();

  // A new page should open at its top. Without this the browser keeps the old
  // scroll position, so a button low on one page opened the next page at its footer.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const meta = metaFor(location);
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:url"]', SITE_URL + (location === "/" ? "" : location));
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [location]);
}
