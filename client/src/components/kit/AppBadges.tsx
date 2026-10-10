import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { APP_STORE_URLS, detectDeviceType } from "@/utils/appDownload";
import { cn } from "@/lib/utils";

interface AppBadgesProps {
  direction?: "row" | "column";
  className?: string;
}

// Store buttons as real links. These are plain site buttons with the platform
// icons, not the official App Store / Google Play badge artwork; swapping in
// the official badges (Apple Marketing Resources, Google Play Brand
// Guidelines) is pending the owner's go-ahead. The device-matched store is
// listed first.
export function AppBadges({ direction = "row", className }: AppBadgesProps) {
  const ios = {
    href: APP_STORE_URLS.ios,
    icon: FaApple,
    small: "Download on the",
    big: "App Store",
    label: "Download the U Charge Up app on the App Store",
  };
  const android = {
    href: APP_STORE_URLS.android,
    icon: FaGooglePlay,
    small: "Get it on",
    big: "Google Play",
    label: "Get the U Charge Up app on Google Play",
  };
  const order = detectDeviceType() === "android" ? [android, ios] : [ios, android];

  return (
    <div className={cn("flex gap-3", direction === "column" ? "flex-col" : "flex-row flex-wrap", className)}>
      {order.map(({ href, icon: Icon, small, big, label }) => (
        <a
          key={big}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="inline-flex h-12 items-center gap-2.5 rounded-xl bg-ink px-4 text-white transition-colors hover:bg-[#1b2b40]"
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
          <span className="flex flex-col text-left leading-none">
            <span className="text-[10px] font-medium opacity-80">{small}</span>
            <span className="mt-0.5 text-[15px] font-semibold">{big}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
