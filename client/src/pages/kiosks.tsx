import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Check,
  CreditCard,
  Eye,
  MonitorPlay,
  RotateCcw,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { openChat } from "@/components/chat/api";
import floorKioskRender from "@assets/24 Unit UCU_1752157185779.png";
import countertopPhoto from "@assets/DC5363E4-2F69-42A5-9C85-D87A3C070281_1757034151691.jpeg";
import floorKioskPhoto from "@assets/IMG_3172_1775147417498.jpeg";
import batteryPhoto from "@assets/IMG_0205_1757034192238.jpeg";

const MODELS = [
  {
    image: countertopPhoto,
    alt: "A U Charge Up countertop kiosk on a bar",
    tag: "Countertop",
    title: "Small footprint, big convenience",
    text: "Holds 8 batteries and has its own screen and card reader. It sits on a bar, a front desk or a host stand and needs no floor space.",
    fits: ["Bars and restaurants", "Hotel front desks", "Suites and lounges"],
  },
  {
    image: floorKioskPhoto,
    alt: "A U Charge Up floor standing kiosk on a show floor",
    tag: "Floor standing",
    title: "Made for the crowd",
    text: "Holds 24 to 32 batteries under a tall display that guides the rental and carries your message. Built for concourses, lobbies and event floors.",
    fits: ["Stadiums and arenas", "Hospitals", "Casinos and events"],
  },
];

const FEATURES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: CreditCard,
    title: "Tap or scan to pay",
    text: "Guests tap a card or phone on the reader, or scan the code with the app. No cash and no staff needed.",
  },
  {
    icon: Zap,
    title: "Ready at a glance",
    text: "Lights on each slot show which batteries are charged and ready to go.",
  },
  {
    icon: MonitorPlay,
    title: "A screen that works for you",
    text: "The display walks guests through the rental and can show your venue, your sponsors and your promotions.",
  },
  {
    icon: Wifi,
    title: "Always connected",
    text: "A built in cellular connection means there is no Wi-Fi to set up. All it needs is a power outlet.",
  },
  {
    icon: Eye,
    title: "Watched remotely",
    text: "We monitor every station from our operations console and service it when it needs attention.",
  },
  {
    icon: RotateCcw,
    title: "Return anywhere",
    text: "A battery rented at one station can go back to any other U Charge Up station.",
  },
];

const BATTERY_POINTS = [
  "Built in cables, so there is nothing else to carry",
  "Small enough for a pocket or a bag",
  "Return it to any U Charge Up station when you are done",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)]">
      {children}
    </p>
  );
}

export default function KiosksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid gap-8 lg:gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="flex flex-col items-start gap-5">
              <Eyebrow>Our kiosks</Eyebrow>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight text-gray-900">
                Charging Stations Built for Busy Places
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
                From a compact countertop unit to a floor standing station with
                a big screen, every U Charge Up® kiosk is self serve, cashless
                and looked after by us.
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                <Button
                  size="lg"
                  className="bg-brand-dark-blue hover:bg-brand-blue text-white font-semibold"
                  onClick={() => openChat("partner")}
                  data-testid="kiosks-become-partner"
                >
                  Become a Partner
                </Button>
                <Link href="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[hsl(205,85%,35%)] text-[hsl(205,85%,35%)] hover:bg-gray-50 font-semibold"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={floorKioskRender}
                alt="A U Charge Up floor standing kiosk with a display, card reader and battery slots"
                className="w-full max-w-sm h-72 md:h-[520px] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>The lineup</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A size for every space
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2">
              {MODELS.map((model) => (
                <motion.div
                  key={model.tag}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
                >
                  <img
                    src={model.image}
                    alt={model.alt}
                    className="w-full h-52 md:h-80 object-cover"
                  />
                  <div className="p-5 md:p-7 flex flex-col items-start gap-2.5 md:gap-3">
                    <Eyebrow>{model.tag}</Eyebrow>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{model.text}</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {model.fits.map((fit) => (
                        <span
                          key={fit}
                          className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-[13px] font-medium text-gray-700"
                        >
                          {fit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>Inside every kiosk</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Simple for guests, effortless for you
              </h2>
            </motion.div>
            <div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 flex gap-4 items-start"
                >
                  <span className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center flex-none">
                    <Icon className="w-[22px] h-[22px] text-[hsl(205,85%,35%)]" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <motion.div {...fadeUp} className="flex justify-center">
              <img
                src={batteryPhoto}
                alt="A hand holding a U Charge Up power bank on a golf course"
                className="w-full max-w-md h-64 md:h-[460px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col gap-4">
              <Eyebrow>The battery</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Power that goes where you go
              </h2>
              <p className="text-lg text-gray-600">
                A pocket size power bank with the cables built in. Charge
                while you walk, watch or wait.
              </p>
              <ul className="space-y-2.5 mt-1">
                {BATTERY_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="w-[22px] h-[22px] flex-none mt-0.5 text-[hsl(205,85%,35%)]" />
                    <span className="text-[17px] text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            <motion.div
              {...fadeUp}
              className="bg-brand-dark-blue rounded-3xl p-7 md:p-14 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex-1 min-w-[260px]">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2.5">
                  Want a station at your venue?
                </h2>
                <p className="text-lg text-white/90">
                  We install it, stock it and look after it. Tell us about
                  your space and we will be in touch.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[hsl(205,85%,35%)] font-semibold"
                  onClick={() => openChat("partner")}
                  data-testid="kiosks-become-partner-bottom"
                >
                  Become a Partner
                </Button>
                <Link href="/for-venues">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(205,85%,35%)] font-semibold"
                  >
                    For Venues
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
