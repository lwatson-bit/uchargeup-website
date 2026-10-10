import { useEffect, useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { detectDeviceType, handleAppDownload } from "@/utils/appDownload";
import { AppBadges } from "./AppBadges";

/** "Get the app": on a phone it opens the matching store directly; on a desktop
 *  it opens a small popover with both stores, so Google Play is never hidden. */
export function AppDownloadButton({ children = "Get the app", ...button }: ButtonProps) {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => setDesktop(detectDeviceType() === "desktop"), []);

  if (!desktop) {
    return (
      <Button {...button} onClick={handleAppDownload}>
        {children}
      </Button>
    );
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button {...button}>{children}</Button>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-auto rounded-2xl border-line p-3 shadow-lg">
        <p className="mb-2 px-1 text-xs font-medium text-slate-500">Free on iOS and Android</p>
        <AppBadges direction="column" />
      </PopoverContent>
    </Popover>
  );
}
