import { PageShell } from "@/components/kit/PageShell";
import { useHead } from "@/hooks/useHead";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import HowItWorksStrip from "@/components/home/HowItWorksStrip";
import FindAKiosk from "@/components/home/FindAKiosk";
import ForBusinesses from "@/components/home/ForBusinesses";
import BuiltInDetroit from "@/components/home/BuiltInDetroit";
import ClosingPanel from "@/components/home/ClosingPanel";

export default function Home() {
  useHead({
    title: "U Charge Up - Portable Phone Charger Rental Kiosks",
    description:
      "Rent a phone charger from a U Charge Up kiosk at Ford Field, Four Winds Casinos and venues across metro Detroit. Tap your card or scan in the app, charge on the go, return to any kiosk.",
    path: "/",
  });

  return (
    <PageShell>
      <Hero />
      <TrustedBy />
      <HowItWorksStrip />
      <FindAKiosk />
      <ForBusinesses />
      <BuiltInDetroit />
      <ClosingPanel />
    </PageShell>
  );
}
