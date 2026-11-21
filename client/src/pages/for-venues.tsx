import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BarChart3,
  Check,
  MonitorPlay,
  RefreshCcw,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { openChat } from "@/components/chat/api";
import kioskImage from "@assets/IMG_3172_1775147417498.jpeg";
import fordFieldLogo from "@assets/Ford_field_stadium_logo_1752165222960.png";
import fourWindsLogo from "@assets/Four-winds_1752165222960.png";
import henryFordHealthLogo from "@assets/henry-ford-health-logo.webp";
import virginLogo from "@assets/Virgin-logo_1772042074981.png";
import rocketClassicLogo from "@assets/Logo-2025RocketClassic-PresentingSponsorLogo-CMYK-8639137248_Horz-Color (7)_1752165222960.png";

// Henry Ford Health is kept away from Ford Field so the two Ford logos never sit side by side.
const TRUSTED_BY = [
  { name: "Ford Field", logo: fordFieldLogo },
  { name: "Four Winds Casinos", logo: fourWindsLogo },
  { name: "Henry Ford Health", logo: henryFordHealthLogo },
  { name: "Virgin Hotels Nashville", logo: virginLogo },
  { name: "Rocket Classic", logo: rocketClassicLogo },
];

// Published research only. No U Charge Up figures belong on this page.
const FACTS = [
  {
    value: "9 in 10",
    text: "people say they feel anxious when their phone battery runs low.",
    source: "LG survey of 2,000 US smartphone users, 2016",
  },
  {
    value: "1 in 3",
    text: "say they would drop everything and head home to charge.",
    source: "LG survey of 2,000 US smartphone users, 2016",
  },
  {
    value: "More time",
    text: "means more spend. Guests who stay longer buy more.",
    source: "Path Intelligence with MIT, shopping centre study, 2007",
  },
];

const BENEFITS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wrench,
    title: "We handle everything",
    text: "We install the station, keep it stocked and service it. Your team does not have to touch it.",
  },
  {
    icon: Smartphone,
    title: "Self serve in seconds",
    text: "Guests scan the code or tap a card, grab a battery and go. No staff time and no outlet hunting.",
  },
  {
    icon: RefreshCcw,
    title: "Return anywhere",
    text: "A battery rented at your venue can go back to any U Charge Up station, so guests are never stuck with it.",
  },
  {
    icon: MonitorPlay,
    title: "Your message on screen",
    text: "Stations with a display can carry your venue, your sponsors and your promotions.",
  },
  {
    icon: BarChart3,
    title: "Clear reporting",
    text: "A simple monthly report shows how your stations are doing.",
  },
  {
    icon: Check,
    title: "Flexible partnership",
    text: "Revenue share and sponsorship options built around your space and your crowd.",
  },
];

const STEPS = [
  {
    title: "Tell us about your space",
    text: "Share your venue, your foot traffic and where a station could go.",
  },
  {
    title: "We install and stock it",
    text: "We pick the right size station, set it up and keep it full.",
  },
  {
    title: "Guests stay charged",
    text: "Your guests rent in seconds. You get the reporting and the happier crowd.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-bold tracking-widest uppercase text-brand-blue">
      {children}
    </p>
  );
}

export default function ForVenuesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="flex flex-col items-start gap-5">
              <Eyebrow>For venues</Eyebrow>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight text-gray-900">
                Keep Your Guests Charged. Keep Them Longer.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
                U Charge Up® puts a self serve charging station in your venue.
                We install it, stock it and look after it, so your guests stay
                powered and in the moment.
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                  onClick={() => openChat("partner")}
                  data-testid="venues-become-partner"
                >
                  Become a Partner
                </Button>
                <Link href="/locations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-blue text-brand-blue hover:bg-gray-50 font-semibold"
                  >
                    See Where We Are
                  </Button>
                </Link>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-700">
                In stadiums, hospitals, casinos, hotels and restaurants, coast
                to coast.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={kioskImage}
                alt="A U Charge Up charging station on a show floor"
                className="w-full max-w-sm h-[520px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Trusted by
            </span>
            {TRUSTED_BY.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="max-w-24 max-h-12 object-contain"
              />
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-9">
              <Eyebrow>Why charging matters</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A dying phone ends the night early
              </h2>
              <p className="text-lg text-gray-600">
                Tickets, payment, the ride home and the photos all live on the
                phone. When the battery drops, guests stop spending and start
                looking for the door.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {FACTS.map((fact) => (
                <motion.div
                  key={fact.value}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col gap-3"
                >
                  <div className="text-5xl font-bold leading-none tracking-tight text-brand-blue">
                    {fact.value}
                  </div>
                  <p className="text-[17px] leading-relaxed font-semibold text-gray-900">
                    {fact.text}
                  </p>
                  <p className="text-[13px] text-gray-600">{fact.source}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-9 text-lg font-semibold text-gray-900">
              A charged guest stays for the next round, the second half and the
              encore.
            </p>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-9">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A guest amenity that runs itself
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex gap-4 items-start"
                >
                  <span className="w-11 h-11 rounded-xl bg-brand-tint flex items-center justify-center flex-none">
                    <Icon className="w-[22px] h-[22px] text-brand-blue" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5">
                      {title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-gray-600">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-9">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Up and running in three steps
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  className="flex flex-col items-start gap-2.5"
                >
                  <span className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-[17px] font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
            <motion.figure
              {...fadeUp}
              className="rounded-3xl p-7 md:p-14 flex flex-col gap-5"
              style={{ background: "#1b4a69" }}
            >
              <p className="text-sm font-bold tracking-widest uppercase text-brand-pale">
                Venue spotlight: Parlay Detroit
              </p>
              <blockquote className="max-w-4xl text-2xl md:text-3xl font-semibold leading-snug text-white">
                “Nobody wants to leave in the middle of the game because their
                phone is dying. With U Charge Up at the host stand,
                our guests grab a battery, stay in their seats and order
                another round.”
              </blockquote>
              <figcaption>
                <div className="text-base font-bold text-white">
                  Parlay Detroit
                </div>
                <div className="text-[13px] text-brand-pale mt-1">
                  Parlay Detroit's owner is also an owner in U Charge Up.
                </div>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 md:pb-24">
            <motion.div
              {...fadeUp}
              className="bg-brand-blue rounded-3xl p-7 md:p-14 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex-1 min-w-[260px]">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2.5">
                  Want a station at your venue?
                </h2>
                <p className="text-lg text-white/90">
                  Tell us about your space and we will be in touch. Planning a
                  festival or a one day event? We do those too.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-brand-blue font-semibold"
                  onClick={() => openChat("partner")}
                  data-testid="venues-become-partner-bottom"
                >
                  Become a Partner
                </Button>
                <Link href="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold"
                  >
                    Events
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
