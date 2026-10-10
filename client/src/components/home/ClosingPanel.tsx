import { MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { CtaPanel } from "@/components/kit/CtaPanel";
import { AppBadges } from "@/components/kit/AppBadges";
import { FadeUp } from "@/components/kit/FadeUp";
import { openChat } from "@/components/chat/api";

export default function ClosingPanel() {
  return (
    <Section className="pt-4 md:pt-8">
      <FadeUp>
        <CtaPanel>
          <h2 className="font-display text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-ink md:text-4xl">
            Low battery? There's a kiosk nearby.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
            Find the nearest U Charge Up kiosk and tap your card, or get the app to see live
            availability and keep track of your rental.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/locations">
                <MapPin />
                Find a kiosk
              </Link>
            </Button>
            <AppBadges className="justify-center" />
          </div>
          <p className="mt-8 text-sm text-slate-700">
            Have a venue or an event?{" "}
            <button
              type="button"
              onClick={() => openChat("partner")}
              className="font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              Become a partner
            </button>
          </p>
          <p className="mt-3 text-sm text-slate-600">
            By renting you agree to our{" "}
            <Link href="/terms-of-service" className="underline underline-offset-4 hover:text-brand-600">
              Terms of Service
            </Link>
            .
          </p>
        </CtaPanel>
      </FadeUp>
    </Section>
  );
}
