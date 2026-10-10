import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** A small rounded fact: optional brand icon plus a short label. Render inside a <ul>. */
export function FactChip({ icon: Icon, children }: { icon?: LucideIcon; children: ReactNode }) {
  return (
    <li className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line bg-white px-3 text-sm text-slate-700">
      {Icon && <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />}
      {children}
    </li>
  );
}
