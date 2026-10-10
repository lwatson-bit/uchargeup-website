import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StageCard {
  icon: LucideIcon;
  label: string;
}

interface ProductStageProps {
  src: string;
  alt: string;
  /** small white cards floating over the stage; the second one hides on phones */
  cards?: StageCard[];
  className?: string;
}

/** A kiosk render staged like a product shot: light panel, floor shadow, no texture. */
export function ProductStage({ src, alt, cards = [], className }: ProductStageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand-100 bg-brand-50 px-8 pb-6 pt-8 md:px-12 md:pb-8 md:pt-12",
        className,
      )}
    >
      <div className="relative mx-auto flex h-[380px] items-end justify-center md:h-[520px]">
        <div
          aria-hidden="true"
          className="absolute inset-x-[22%] bottom-1 h-6 rounded-[100%] bg-ink/15 blur-xl"
        />
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          className="relative z-[1] h-full w-auto max-w-full object-contain [filter:drop-shadow(0_24px_32px_rgb(15_27_42_/_0.18))]"
        />
      </div>
      {cards.map(({ icon: Icon, label }, i) => (
        <div
          key={label}
          className={cn(
            "absolute z-[2] flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm font-medium text-ink shadow-sm",
            i === 0 ? "left-4 top-6 md:left-8 md:top-10" : "bottom-10 right-4 hidden sm:flex md:right-8 md:bottom-16",
          )}
        >
          <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  );
}
