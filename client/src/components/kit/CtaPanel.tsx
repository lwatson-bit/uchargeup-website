import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The contained light panel that closes a page. Never full-bleed, never holds the logo. */
export function CtaPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-brand-100 bg-brand-50 px-6 py-10 text-center md:px-14 md:py-14",
        className,
      )}
    >
      {children}
    </div>
  );
}
