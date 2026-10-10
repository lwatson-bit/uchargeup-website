import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
}

/** Every subpage opens with this: eyebrow, the page's one H1, a lead, optional buttons. */
export function PageHeader({ eyebrow, title, lead, actions }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 md:pt-20 lg:px-8">
      <div className="max-w-3xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">{lead}</p>}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
      </div>
    </div>
  );
}
