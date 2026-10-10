import { useEffect } from "react";
import { useLocation } from "wouter";

/** wouter keeps the old scroll position across routes; reset it unless the
 *  new URL carries a hash the browser should land on. */
export default function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);
  return null;
}
