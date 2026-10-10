import type { ReactNode } from "react";

interface StatTileProps {
  numeral: string;
  title: string;
  children: ReactNode;
}

/** A white card with a big display numeral, for pricing facts and model counts. */
export function StatTile({ numeral, title, children }: StatTileProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <p className="font-display text-[32px] font-bold leading-none tracking-tight text-brand-600 tabular-nums md:text-[40px]">
        {numeral}
      </p>
      <p className="mt-3 font-semibold text-ink">{title}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}
