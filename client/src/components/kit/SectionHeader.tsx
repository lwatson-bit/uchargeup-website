import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Eyebrow + H2 + optional lead. Left-aligned by default; centered only for short intros. */
export function SectionHeader({ eyebrow, title, lead, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-ink md:text-4xl lg:text-[40px]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl">{lead}</p>}
    </div>
  );
}
