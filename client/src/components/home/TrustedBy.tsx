import { Eyebrow } from "@/components/kit/Eyebrow";
import { LogoWall } from "@/components/kit/LogoWall";
import { PARTNERS } from "@/data/partners";
import { NETWORK_LINE } from "@/data/venues";

export default function TrustedBy() {
  return (
    <section className="border-t border-line bg-white py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Trusted by</Eyebrow>
          <p className="mt-2 font-display text-xl font-semibold text-ink md:text-2xl">
            Found at the places Detroit gathers
          </p>
        </div>
        <div className="mt-8">
          <LogoWall partners={PARTNERS} />
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">{NETWORK_LINE}</p>
      </div>
    </section>
  );
}
