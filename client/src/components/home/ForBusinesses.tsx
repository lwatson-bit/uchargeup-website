import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { SectionHeader } from "@/components/kit/SectionHeader";
import { Card } from "@/components/kit/Card";
import { FadeUp } from "@/components/kit/FadeUp";
import { openChat } from "@/components/chat/api";
import kiosk8 from "@assets/web/kiosk-8.webp";
import eventPhoto from "@assets/web/event-0205.webp";

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-[15px] text-slate-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={2.25} aria-hidden="true" />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ForBusinesses() {
  return (
    <Section tone="mist" id="venues">
      <FadeUp>
        <SectionHeader
          eyebrow="For businesses"
          title="Put a kiosk in your venue, or power your next event."
          lead="We install, restock and maintain every kiosk. Your guests stay longer and stay reachable."
        />
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <FadeUp>
          <Card className="flex h-full flex-col">
            <div className="flex h-56 items-center justify-center rounded-xl bg-brand-50 p-6">
              <img
                src={kiosk8}
                alt="U Charge Up tabletop kiosk holding 8 portable chargers"
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">A kiosk for your venue</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line px-4 py-3">
                <p className="font-display text-2xl font-bold text-brand-600">8</p>
                <p className="text-sm text-slate-600">Tabletop: bar top, host stand, waiting room</p>
              </div>
              <div className="rounded-xl border border-line px-4 py-3">
                <p className="font-display text-2xl font-bold text-brand-600">24</p>
                <p className="text-sm text-slate-600">Floor: concourse, casino floor, hospital lobby</p>
              </div>
            </div>
            <Checks
              items={[
                "Installed and maintained by us",
                "Guests tap a card; no app required",
                "Your promotions on the kiosk screen",
              ]}
            />
            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
              <Button onClick={() => openChat("partner")}>Talk to us about a kiosk</Button>
              <Button asChild variant="ghost">
                <Link href="/kiosks">
                  Compare kiosk models
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Card>
        </FadeUp>

        <FadeUp delay={0.05}>
          <Card className="flex h-full flex-col">
            <img
              src={eventPhoto}
              alt="U Charge Up charging station at an event"
              loading="lazy"
              decoding="async"
              className="h-56 w-full rounded-xl object-cover ring-1 ring-black/5"
            />
            <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">Charging for your event</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Portable charging stations for festivals, games, trade shows and corporate events,
              delivered, set up and collected by our team.
            </p>
            <Checks
              items={[
                "Delivery, setup and pickup included",
                "Scales from one station to a fleet",
                "Branded screens for your sponsors",
              ]}
            />
            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
              <Button onClick={() => openChat("partner")}>Get an event quote</Button>
              <Button asChild variant="ghost">
                <Link href="/events">
                  See past events
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Card>
        </FadeUp>
      </div>
    </Section>
  );
}
