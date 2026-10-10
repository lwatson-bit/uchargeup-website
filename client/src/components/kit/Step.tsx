import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { IconChip } from "./IconChip";

interface StepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

/** A numbered step: icon chip and two-digit label, then title and body, left-aligned. */
export function Step({ number, icon, title, children }: StepProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <IconChip icon={icon} />
        <span className="font-display text-[13px] font-semibold tracking-[0.1em] text-brand-600">{number}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink md:text-[22px]">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}
