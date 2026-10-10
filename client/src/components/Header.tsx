import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { AppDownloadButton } from "@/components/kit/AppDownloadButton";
import { handleAppDownload } from "@/utils/appDownload";
import { openChat } from "@/components/chat/api";
import { cn } from "@/lib/utils";
import logoPath from "@assets/web/logo.png";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/locations", label: "Locations" },
  { href: "/kiosks", label: "For venues" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  // Close the phone menu whenever the route changes.
  useEffect(() => setOpen(false), [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-600 focus:shadow-md"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* The logo: original colors on white, no hover change, no chip. */}
          <Link href="/" aria-label="U Charge Up home" className="flex shrink-0 items-center rounded-md">
            <img
              src={logoPath}
              alt="U Charge Up"
              width={794}
              height={173}
              className="h-8 w-auto md:h-9"
              data-testid="logo-home-link"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {NAV.map((item) => {
              const active = location === item.href || location.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm font-medium text-slate-700 transition-colors hover:text-ink",
                    active &&
                      "text-brand-600 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-brand-500 hover:text-brand-600",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/locations">
                <MapPin />
                Find a kiosk
              </Link>
            </Button>
            <AppDownloadButton size="sm" />
          </div>

          {/* Phone: the person in a venue wants the map first. */}
          <div className="flex items-center gap-2 md:hidden">
            <Button asChild size="sm">
              <Link href="/locations">Find a kiosk</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 text-ink hover:bg-surface-1"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              {open ? <X className="!size-6" /> : <Menu className="!size-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
            className="border-t border-line bg-white px-4 pb-4 pt-2 md:hidden"
          >
            {NAV.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex h-12 items-center rounded-xl px-3 text-base font-medium text-slate-700",
                    active && "bg-brand-50 text-brand-600",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
              <Button
                onClick={() => {
                  setOpen(false);
                  handleAppDownload();
                }}
              >
                Get the app
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setOpen(false);
                  openChat("partner");
                }}
              >
                Talk to us about a kiosk
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
