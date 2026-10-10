import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  /** white sections alternate with "mist" (#F6F8FA) so two gray blocks never touch */
  tone?: "white" | "mist";
  className?: string;
  children: ReactNode;
}

/** One section rhythm for the whole site: py-16 md:py-24 and the 1280px container. */
export function Section({ id, tone = "white", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", tone === "mist" ? "bg-surface-1" : "bg-white", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
