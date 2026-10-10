import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** 48px rounded square, brand-50 fill, outlined brand icon. */
export function IconChip({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500", className)}
    >
      <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
    </span>
  );
}
