import type { Mood } from "./useChat";

// Juice: the U-mark logo (blue U, four battery bars) turned into a character
// with eyes peeking over the rim, eyebrows, blush, mitten hands and sneakers.
// Geometry is traced from the 1080px logo scaled to 100 units. All movement
// is CSS (see the .ucu-mascot rules in index.css) keyed off data-mood, so
// the SVG itself stays static and cheap to re-render.

export const JUICE_COLORS = {
  blue: "#317AA4",
  blueDark: "#245F80",
  bars: ["#7ED957", "#99ED75", "#FF6E6E", "#F80303"],
  blush: "#FF6E6E",
};

interface Props {
  mood: Mood;
  size?: number;
  className?: string;
  /** Short label for screen readers; empty hides it. */
  title?: string;
}

export default function ChatMascot({ mood, size = 64, className, title = "Juice, the U Charge Up helper" }: Props) {
  const { blue, blueDark, bars, blush } = JUICE_COLORS;
  return (
    <svg
      className={["ucu-mascot", className].filter(Boolean).join(" ")}
      data-mood={mood}
      width={size}
      height={size * (134 / 136)}
      viewBox="-18 -18 136 134"
      role="img"
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body group: bob, lean, jump */}
      <g className="ucu-body">
        {/* Legs with sneakers */}
        <g className="ucu-leg ucu-leg-left">
          <line x1="31" y1="90" x2="31" y2="102" stroke={blue} strokeWidth="6" strokeLinecap="round" />
          <rect x="21" y="100" width="19" height="8.5" rx="4" fill={blueDark} />
          <rect x="21" y="106" width="19" height="2.8" rx="1.4" fill="#e9eff4" />
          <circle cx="34" cy="103" r="1.2" fill="#ffffff" opacity="0.6" />
        </g>
        <g className="ucu-leg ucu-leg-right">
          <line x1="69" y1="90" x2="69" y2="102" stroke={blue} strokeWidth="6" strokeLinecap="round" />
          <rect x="60" y="100" width="19" height="8.5" rx="4" fill={blueDark} />
          <rect x="60" y="106" width="19" height="2.8" rx="1.4" fill="#e9eff4" />
          <circle cx="66" cy="103" r="1.2" fill="#ffffff" opacity="0.6" />
        </g>

        {/* White inside so the face reads on any background */}
        <path d="M 12 0 V 70 Q 12 84.5 26.5 84.5 H 73.5 Q 88 84.5 88 70 V 0 Z" fill="#ffffff" />

        {/* The U */}
        <path
          d="M 7.6 0 V 70 Q 7.6 88.9 26.5 88.9 H 73.5 Q 92.4 88.9 92.4 70 V 0"
          fill="none"
          stroke={blue}
          strokeWidth="8.8"
        />

        {/* Battery bars, bottom (red) to top (green) */}
        <g className="ucu-bars">
          <rect className="ucu-bar ucu-bar-4" x="23" y="67.5" width="54" height="9" fill={bars[3]} />
          <rect className="ucu-bar ucu-bar-3" x="23" y="51" width="54" height="9" fill={bars[2]} />
          <rect className="ucu-bar ucu-bar-2" x="23" y="34" width="54" height="9" fill={bars[1]} />
          <rect className="ucu-bar ucu-bar-1" x="23" y="17.5" width="54" height="9" fill={bars[0]} />
        </g>

        {/* Arms sit in front of the body so a raised hand or a hand on the chin stays visible */}
        <g className="ucu-arm ucu-arm-left">
          <line x1="7" y1="42" x2="-6" y2="58" stroke={blue} strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="-8" cy="61" r="5.6" fill={blue} />
          <circle cx="-12.5" cy="58.5" r="2.4" fill={blue} />
          <circle cx="-9.5" cy="59" r="1.4" fill="#ffffff" opacity="0.5" />
        </g>
        <g className="ucu-arm ucu-arm-right">
          <line x1="93" y1="42" x2="106" y2="58" stroke={blue} strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="108" cy="61" r="5.6" fill={blue} />
          <circle cx="112.5" cy="58.5" r="2.4" fill={blue} />
          <circle cx="106.5" cy="59" r="1.4" fill="#ffffff" opacity="0.5" />
        </g>

        {/* Face: eyes peek over the rim of the U */}
        <g className="ucu-face">
          <ellipse className="ucu-blush" cx="30" cy="12" rx="3.6" ry="1.9" fill={blush} opacity="0.5" />
          <ellipse className="ucu-blush" cx="70" cy="12" rx="3.6" ry="1.9" fill={blush} opacity="0.5" />

          <g className="ucu-brow ucu-brow-left">
            <path d="M 33.5 -5.5 Q 39 -9 44.5 -5.5" fill="none" stroke={blue} strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="ucu-brow ucu-brow-right">
            <path d="M 55.5 -5.5 Q 61 -9 66.5 -5.5" fill="none" stroke={blue} strokeWidth="2" strokeLinecap="round" />
          </g>

          <g className="ucu-eyes">
            <circle cx="39" cy="4" r="6" fill="#ffffff" stroke={blue} strokeWidth="1.6" />
            <circle cx="61" cy="4" r="6" fill="#ffffff" stroke={blue} strokeWidth="1.6" />
            <g className="ucu-pupils">
              <circle cx="39.6" cy="4.6" r="3" fill={blueDark} />
              <circle cx="61.6" cy="4.6" r="3" fill={blueDark} />
              <circle cx="38.4" cy="3.2" r="1.1" fill="#ffffff" />
              <circle cx="60.4" cy="3.2" r="1.1" fill="#ffffff" />
            </g>
          </g>

          <path
            className="ucu-mouth"
            d="M 44.5 11.5 Q 50 15.5 55.5 11.5"
            fill="none"
            stroke={blue}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
