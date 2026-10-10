import { CreditCard, MapPin, RotateCcw, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { Eyebrow } from "@/components/kit/Eyebrow";
import { FactChip } from "@/components/kit/FactChip";
import { ProductStage } from "@/components/kit/ProductStage";
import { AppDownloadButton } from "@/components/kit/AppDownloadButton";
import kiosk24 from "@assets/web/kiosk-24.webp";

export default function Hero() {
  return (
    <Section className="pb-12 pt-10 md:pb-16 md:pt-16 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Eyebrow>Phone charging kiosks · Detroit</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl lg:text-6xl">
            Stay Connected. Stay In The Moment.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate-600 md:text-xl">
            Rent a portable charger from any U Charge Up kiosk, charge while you keep going, and
            drop it at any kiosk in the network. Tap your card or scan with the app.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/locations">
                <MapPin />
                Find a kiosk
              </Link>
            </Button>
            <AppDownloadButton size="lg" variant="secondary" />
          </div>

          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-slate-600">
            No app needed to rent. You see the rate before you start.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            <FactChip icon={CreditCard}>Tap your card</FactChip>
            <FactChip icon={RotateCcw}>Return to any kiosk</FactChip>
            <FactChip icon={ShieldCheck}>Detroit-based, MBE certified</FactChip>
          </ul>
        </div>

        <div className="lg:col-span-6">
          <ProductStage
            src={kiosk24}
            alt="U Charge Up floor kiosk holding 24 portable chargers"
            cards={[
              { icon: CreditCard, label: "Tap to rent. No app needed." },
              { icon: RotateCcw, label: "Return to any kiosk" },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
