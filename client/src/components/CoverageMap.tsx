import mapUrl from "@assets/coverage-map.svg";

/**
 * General-area coverage map for the Locations page.
 *
 * This list is kept by hand on purpose. The page must not call the station
 * feed: that would put every station, and so the station count, in the
 * visitor's browser. Add or remove a state here when the footprint changes.
 *
 * Positions are percentages of the map drawing (attached_assets/coverage-map.svg,
 * viewBox -3.5 -9 982.6 707.6). The drawing highlights the same states, so a
 * change here usually needs the drawing regenerated too.
 */
type LabelSide = "left" | "right" | "center";

interface Area {
  name: string;
  note?: string;
  /** Centre of the glow. */
  left: number;
  top: number;
  /** Glow width as a percentage of the map width. */
  size: number;
  /** Small dots inside the glow. The first one is drawn larger. */
  dots: [number, number][];
  label: { left: number; top: number; side: LabelSide };
  delay: number;
}

const AREAS: Area[] = [
  {
    name: "Michigan",
    note: "Home base",
    left: 72.93,
    top: 30.53,
    size: 17,
    dots: [
      [72.93, 30.53],
      [72.72, 29.76],
      [72.4, 29.01],
    ],
    label: { left: 72.93, top: 30.53, side: "right" },
    delay: 0,
  },
  {
    name: "Indiana",
    left: 67.25,
    top: 33.08,
    size: 10.5,
    dots: [
      [67.64, 33.69],
      [67.22, 32.21],
      [66.9, 33.34],
    ],
    label: { left: 68.7, top: 42.4, side: "center" },
    delay: -1.2,
  },
  {
    name: "Tennessee",
    left: 68.2,
    top: 51.65,
    size: 10.5,
    dots: [
      [68.02, 51.49],
      [68.43, 51.84],
    ],
    label: { left: 68.2, top: 51.65, side: "right" },
    delay: -2.4,
  },
  {
    name: "Florida",
    left: 84.1,
    top: 82,
    size: 10.5,
    dots: [
      [84.2, 82.11],
      [84.0, 81.5],
    ],
    label: { left: 84.1, top: 82, side: "left" },
    delay: -3.1,
  },
  {
    name: "California",
    left: 9.15,
    top: 52.6,
    size: 10.5,
    dots: [[9.15, 52.6]],
    label: { left: 6.3, top: 40.2, side: "center" },
    delay: -0.6,
  },
  {
    name: "Arizona",
    left: 20.44,
    top: 57.76,
    size: 10.5,
    dots: [[20.44, 57.76]],
    label: { left: 21.6, top: 48.2, side: "center" },
    delay: -1.5,
  },
  {
    name: "Texas",
    left: 47.89,
    top: 68.58,
    size: 10.5,
    dots: [[47.89, 68.58]],
    label: { left: 47.89, top: 68.58, side: "left" },
    delay: -2.8,
  },
  {
    name: "Colombia",
    left: 11.1,
    top: 75.82,
    size: 9,
    dots: [[11.1, 75.82]],
    label: { left: 11.1, top: 75.82, side: "right" },
    delay: -1.9,
  },
];

/** Order used for the line of names under the map. */
const NAMES = [
  "Michigan",
  "Indiana",
  "Tennessee",
  "Florida",
  "Texas",
  "Arizona",
  "California",
  "Colombia",
];

/** Curved lines between areas, in the drawing's own coordinates. */
const ARCS = [
  "M713.1,207.1 Q373.2,178.6 86.4,363.2",
  "M713.1,207.1 Q656.4,270.6 664.9,355.3",
  "M713.1,207.1 Q826.9,371.8 823.9,572.0",
  "M713.1,207.1 Q678.2,197.4 661.1,229.4",
  "M664.9,355.3 Q783.4,435.0 823.9,572.0",
  "M661.1,229.4 Q637.8,293.1 664.9,355.3",
  "M823.9,572.0 Q455.8,693.4 105.6,527.5",
  "M86.4,363.2 Q152.8,348.2 197.3,399.7",
  "M197.3,399.7 Q320.0,481.2 467.1,476.3",
  "M467.1,476.3 Q546.6,384.2 664.9,355.3",
  "M467.1,476.3 Q632.1,574.1 823.9,572.0",
  "M713.1,207.1 Q622.4,371.2 467.1,476.3",
];
const ARC_DELAYS = [0, -0.7, -1.3, -0.4, -1.1, -2.2, -1.6, -1.9, -0.9, -2.4, -0.2, -1.5];

const GLOW =
  "radial-gradient(circle, rgba(13,102,165,0.78) 0%, rgba(17,131,212,0.5) 18%, rgba(17,131,212,0.2) 42%, rgba(17,131,212,0) 70%)";

const LABEL_TRANSFORM: Record<LabelSide, string> = {
  right: "translate(26px, -50%)",
  left: "translate(calc(-100% - 24px), -50%)",
  center: "translate(-50%, -50%)",
};

const STYLES = `
@keyframes ucu-cov-pulse{0%{transform:translate(-50%,-50%) scale(.15);opacity:.9}70%{opacity:.18}100%{transform:translate(-50%,-50%) scale(1);opacity:0}}
@keyframes ucu-cov-breathe{0%,100%{opacity:.72}50%{opacity:1}}
@keyframes ucu-cov-flow{to{stroke-dashoffset:-52}}
.ucu-cov-ring{animation:ucu-cov-pulse 3.4s cubic-bezier(.2,.8,.2,1) infinite}
.ucu-cov-glow{animation:ucu-cov-breathe 4.6s ease-in-out infinite}
.ucu-cov-arc{fill:none;stroke:#1183d4;stroke-opacity:.4;stroke-width:1.1}
.ucu-cov-flow{fill:none;stroke:#0d66a5;stroke-width:2;stroke-linecap:round;stroke-dasharray:3 23;animation:ucu-cov-flow 2.6s linear infinite}
.ucu-cov-label{text-shadow:0 0 2px #fff,0 0 6px #fff,0 0 10px #fff}
@media (prefers-reduced-motion:reduce){.ucu-cov-ring{animation:none;opacity:0}.ucu-cov-glow{animation:none;opacity:1}.ucu-cov-flow{animation:none;opacity:0}}
`;

export default function CoverageMap() {
  return (
    <div
      className="bg-white rounded-3xl border border-gray-200 shadow-sm p-3 sm:p-7"
      data-testid="coverage-map"
    >
      <style>{STYLES}</style>

      <div className="relative w-full" style={{ aspectRatio: "982.6 / 707.6" }}>
        <img
          src={mapUrl}
          alt="Map of the United States with Michigan, Indiana, Tennessee, Florida, Texas, Arizona and California highlighted, and an inset of Colombia, showing where U Charge Up operates"
          className="absolute inset-0 w-full h-full block"
        />

        <svg
          viewBox="-3.5 -9 982.6 707.6"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full overflow-visible"
        >
          {ARCS.map((d) => (
            <path key={`a-${d}`} className="ucu-cov-arc" d={d} />
          ))}
          {ARCS.map((d, i) => (
            <path
              key={`f-${d}`}
              className="ucu-cov-flow"
              style={{ animationDelay: `${ARC_DELAYS[i]}s` }}
              d={d}
            />
          ))}
        </svg>

        {AREAS.map((area) => (
          <div key={area.name}>
            <div
              aria-hidden="true"
              className="ucu-cov-glow absolute rounded-full"
              style={{
                left: `${area.left}%`,
                top: `${area.top}%`,
                width: `${area.size}%`,
                aspectRatio: "1",
                transform: "translate(-50%, -50%)",
                background: GLOW,
                animationDelay: `${area.delay}s`,
              }}
            />
            <div
              aria-hidden="true"
              className="ucu-cov-ring absolute rounded-full box-border"
              style={{
                left: `${area.left}%`,
                top: `${area.top}%`,
                width: `${area.size}%`,
                aspectRatio: "1",
                border: "1.5px solid rgba(17,131,212,0.75)",
                animationDelay: `${area.delay + 0.4}s`,
              }}
            />
            {area.dots.map(([left, top], i) => (
              <div
                key={`${left}-${top}`}
                aria-hidden="true"
                className="absolute rounded-full box-border"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: i === 0 ? 9 : 7,
                  height: i === 0 ? 9 : 7,
                  transform: "translate(-50%, -50%)",
                  background: "#0d66a5",
                  border: "1.5px solid #ffffff",
                  boxShadow: "0 0 8px 1px rgba(17,131,212,0.7)",
                }}
              />
            ))}
            <div
              className="ucu-cov-label hidden sm:block absolute whitespace-nowrap"
              style={{
                left: `${area.label.left}%`,
                top: `${area.label.top}%`,
                transform: LABEL_TRANSFORM[area.label.side],
                textAlign: area.label.side === "left" ? "right" : area.label.side,
              }}
            >
              <div className="text-[15px] leading-5 font-bold text-gray-900">
                {area.name}
              </div>
              {area.note && (
                <div className="text-xs font-semibold text-gray-700">
                  {area.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 pt-4 px-2 border-t border-gray-200 text-center text-[15px] leading-7 font-semibold text-gray-700">
        {NAMES.join(" · ")}
      </p>
    </div>
  );
}
