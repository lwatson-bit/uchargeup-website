import type { Partner } from "@/data/partners";

/** A static, accessible wall of partner logos on equal white tiles. Partner
 *  logos sit muted until hover; our own logo is never treated this way. */
export function LogoWall({ partners }: { partners: Partner[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Venues and events that use U Charge Up">
      {partners.map((p) => (
        <li
          key={p.name}
          className="flex h-20 items-center justify-center rounded-xl border border-line bg-white px-5"
        >
          <img
            src={p.logo}
            alt={p.name}
            loading="lazy"
            decoding="async"
            className="max-h-10 w-auto max-w-[120px] object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}
