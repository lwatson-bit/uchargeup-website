import { MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { SectionHeader } from "@/components/kit/SectionHeader";
import { FactChip } from "@/components/kit/FactChip";
import { FadeUp } from "@/components/kit/FadeUp";
import { FEATURED_VENUES } from "@/data/venues";

const VENUE_TYPES = ["Stadiums", "Casinos", "Hospitals", "Restaurants", "Festivals", "Golf events"];

export default function FindAKiosk() {
  return (
    <Section id="locations">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <FadeUp className="lg:col-span-5">
          <SectionHeader
            eyebrow="Locations"
            title="There's a kiosk where you already are."
            lead="More than 60 kiosks with live availability on the map. Rent at one and return at any other."
          />
          <ul className="mt-6 flex flex-wrap gap-2">
            {VENUE_TYPES.map((t) => (
              <FactChip key={t}>{t}</FactChip>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/locations">
                <MapPin />
                Find a kiosk near me
              </Link>
            </Button>
          </div>
        </FadeUp>

        <FadeUp className="lg:col-span-7" delay={0.05}>
          <div className="rounded-3xl border border-brand-100 bg-brand-50 p-5 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-base font-semibold text-ink">On the map</p>
              <Link href="/locations" className="text-sm font-medium text-brand-600 underline-offset-4 hover:underline">
                See live availability
              </Link>
            </div>
            <ul className="-mx-5 mt-4 flex snap-x gap-4 overflow-x-auto px-5 pb-1 md:mx-0 md:grid md:overflow-visible md:px-0">
              {FEATURED_VENUES.map((v) => (
                <li
                  key={v.name}
                  className="flex min-w-[82%] snap-start items-start gap-4 rounded-2xl border border-line bg-white p-5 md:min-w-0"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">{v.name}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{v.address}</p>
                    <p className="mt-2 inline-flex rounded-full bg-surface-1 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      {v.kind}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
