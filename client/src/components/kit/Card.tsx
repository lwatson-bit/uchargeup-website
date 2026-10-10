import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The site's one card: white, hairline border, 16px radius, quiet hover. */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-150 hover:border-brand-100 hover:shadow-sm md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
