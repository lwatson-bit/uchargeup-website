import { Link } from "wouter";
import { Zap } from "lucide-react";
import gridUrl from "@assets/city-grid.svg";
import { Button } from "@/components/ui/button";
import { handleAppDownload } from "@/utils/appDownload";

/**
 * "Where to find us" band for the Locations page.
 *
 * Deliberately general: the street map is a drawn texture, not a real place,
 * and the pins are decoration. Nothing here is loaded from the station feed,
 * and the copy carries no station, state or country counts.
 */
const STATS = [
  { value: "Coast to Coast", label: "Across the U.S." },
  { value: "International", label: "U.S. and abroad" },
  { value: "200+", label: "Annual Events" },
];

/** left %, top %, large ring, animation delay in seconds */
const PINS: [number, number, boolean, number][] = [
  [58, 16, true, 0],
  [70, 30, false, -0.8],
  [64, 42, false, -1.7],
  [62, 52, true, -2.3],
  [78, 56, false, -0.4],
  [88, 40, true, -1.2],
  [84, 14, false, -2.8],
  [94, 22, false, -2.0],
  [47, 60, false, -1.0],
  [71, 64, false, -3.0],
  [93, 62, true, -0.6],
  [57, 66, false, -1.9],
];

const STYLES = `
@keyframes ucu-band-pulse{0%{transform:translate(-50%,-50%) scale(.2);opacity:.9}75%{opacity:.12}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}
.ucu-band-ring{transform:translate(-50%,-50%) scale(.2);animation:ucu-band-pulse 3.2s cubic-bezier(.2,.8,.2,1) infinite}
@media (prefers-reduced-motion:reduce){.ucu-band-ring{animation:none;opacity:0}}
`;

export default function LocationsBand() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #25628a 0%, #3078a2 55%, #4a97c4 100%)",
      }}
      data-testid="locations-band"
    >
      <style>{STYLES}</style>

      <img
        src={gridUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(37,98,138,0.96) 0%, rgba(37,98,138,0.82) 24%, rgba(37,98,138,0) 52%)",
        }}
      />

      <div aria-hidden="true" className="absolute inset-0 opacity-30 md:opacity-100">
        {PINS.map(([left, top, large, delay]) => {
          const size = large ? 150 : 104;
          return (
            <div key={`${left}-${top}`}>
              {[0, 1.6].map((offset) => (
                <div
                  key={offset}
                  className="ucu-band-ring absolute rounded-full box-border"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: size,
                    height: size,
                    border: "1.5px solid rgba(255,255,255,0.85)",
                    animationDelay: `${delay - offset}s`,
                  }}
                />
              ))}
              <div
                className="absolute rounded-full bg-white flex items-center justify-center"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: 26,
                  height: 26,
                  transform: "translate(-50%, -50%)",
                  boxShadow:
                    "0 0 0 6px rgba(255,255,255,0.22), 0 6px 18px rgba(6,40,74,0.35)",
                }}
              >
                <Zap className="w-3.5 h-3.5 text-brand-blue" fill="currentColor" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-10 md:pb-12 flex flex-col gap-14 md:gap-32">
        <div className="max-w-xl flex flex-col items-start gap-5">
          <p className="text-sm font-bold tracking-widest uppercase text-brand-pale">
            Where to find us
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
            Power Up Wherever You Go
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Stadiums, hospitals, casinos, hotels and restaurants. Open the app
            and it takes you to the station closest to you.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Button
              size="lg"
              className="h-[52px] px-7 bg-white hover:bg-gray-100 text-brand-dark-blue text-base font-bold"
              onClick={handleAppDownload}
              data-testid="locations-download-app"
            >
              Download App
            </Button>
            <Link href="/for-venues">
              <Button
                size="lg"
                variant="outline"
                className="h-[52px] px-7 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark-blue text-base font-bold"
                data-testid="locations-become-partner"
              >
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl px-6 py-5 border border-white/30 backdrop-blur-sm"
              style={{ background: "rgba(22,61,87,0.5)" }}
            >
              <div className="text-3xl lg:text-[40px] font-bold leading-tight tracking-tight text-white">
                {stat.value}
              </div>
              <div className="mt-1.5 text-base font-semibold text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
