import { ArrowRight, BatteryCharging, CreditCard, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { SectionHeader } from "@/components/kit/SectionHeader";
import { Step } from "@/components/kit/Step";
import { StatTile } from "@/components/kit/StatTile";
import { FadeUp } from "@/components/kit/FadeUp";
import { POLICY, SHOW_PRICING } from "@/lib/policy";

export default function HowItWorksStrip() {
  return (
    <Section tone="mist" id="how-it-works">
      <FadeUp>
        <SectionHeader
          eyebrow="How it works"
          title="Tap. Charge. Return anywhere."
          lead="Three moves, no account to set up. Most people are charging within a minute of reaching the kiosk."
        />
      </FadeUp>

      <FadeUp className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8" delay={0.05}>
        <Step number="01" icon={CreditCard} title="Tap or scan">
          Tap your credit or debit card on the kiosk reader, or scan the QR code in the U Charge
          Up app. A charged battery is released.
        </Step>
        <Step number="02" icon={BatteryCharging} title="Charge on the go">
          The cables are built into the battery, so there is nothing to carry but your phone. No
          outlet, no waiting.
        </Step>
        <Step number="03" icon={RotateCcw} title="Return to any kiosk">
          Done? Slide the battery into any open slot at any U Charge Up kiosk until it clicks. That
          ends the rental.
        </Step>
      </FadeUp>

      {SHOW_PRICING && (
        <FadeUp className="mt-16" delay={0.05}>
          <h3 className="font-display text-xl font-semibold text-ink md:text-[22px]">What it costs</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <StatTile numeral="Per 30 min" title="Billed by time">
              The rate shows on the kiosk and in the app before you start, with a daily maximum.
              Rates vary by venue.
            </StatTile>
            <StatTile numeral={`${POLICY.holdQualifier[0].toUpperCase()}${POLICY.holdQualifier.slice(1)} ${POLICY.holdAmount}`} title="Temporary hold">
              Placed when you start and released when you return. It is a hold, not a charge, and
              your bank may take a few business days to clear it.
            </StatTile>
            <StatTile numeral={`${POLICY.lostDays} days`} title="Return window">
              Not back after {POLICY.lostDays} days? A {POLICY.lostFee} replacement fee applies (the
              lost or stolen fee), and rental fees already charged count toward it.
            </StatTile>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            The full details are in our{" "}
            <Link href="/terms-of-service" className="font-medium text-brand-600 underline-offset-4 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </FadeUp>
      )}

      <div className="mt-10">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/how-it-works">
            Full guide and FAQ
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
