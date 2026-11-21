import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Check,
  CreditCard,
  QrCode,
  RotateCcw,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { handleAppDownload } from "@/utils/appDownload";
import batteryPhoto from "@assets/IMG_0205_1757034192238.jpeg";

const STEPS: { icon: LucideIcon; title: string; text: string; tip: string }[] = [
  {
    icon: QrCode,
    title: "Start your rental",
    text: "Scan the code on the station with the app, or tap your card or phone on the reader. A charged battery pops out.",
    tip: "The price is on the screen before you confirm.",
  },
  {
    icon: Zap,
    title: "Charge on the go",
    text: "Plug in with the built in cable and get back to the game, the show or the meeting. No outlet and no waiting around.",
    tip: "Take it anywhere. No need to stay near the station.",
  },
  {
    icon: RotateCcw,
    title: "Return anywhere",
    text: "Slide the battery into an open slot at any U Charge Up station. It does not have to be the one you started at.",
    tip: "Your rental ends the moment it clicks in.",
  },
];

const WAYS: {
  icon: LucideIcon;
  tag: string;
  title: string;
  text: string;
  points: string[];
}[] = [
  {
    icon: Smartphone,
    tag: "With the app",
    title: "Scan to rent",
    text: "Open the U Charge Up app and scan the code on the station.",
    points: [
      "See the stations near you",
      "See how many batteries are ready",
      "Keep track of your rental and your receipts",
    ],
  },
  {
    icon: CreditCard,
    tag: "No app needed",
    title: "Tap to pay",
    text: "Tap your card or phone on the reader, on stations that have one.",
    points: [
      "Works with contactless cards",
      "Works with Apple Pay and Google Pay",
      "Nothing to download or sign up for",
    ],
  },
];

// No prices here on purpose: the station and the app show the price before a rental starts.
const ANSWERS = [
  {
    q: "How much does it cost?",
    a: "The price is shown on the station screen and in the app before you confirm, so there are no surprises.",
  },
  {
    q: "Will it fit my phone?",
    a: "Yes. Each battery has built in cables for iPhone and Android phones.",
  },
  {
    q: "Where can I return it?",
    a: "At any U Charge Up station with an open slot. The app shows the ones near you.",
  },
  {
    q: "Why do I see a hold on my card?",
    a: "Your bank may show a temporary hold when you start a rental. You are charged for your rental once the battery is back.",
  },
  {
    q: "What if I forget to return it?",
    a: "Batteries that are not returned are charged a replacement fee. The details are in the app and in our Terms of Service.",
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
    <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)]">
      {children}
    </p>
  );
}

export default function HowItWorksPage() {
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
              <Eyebrow>How it works</Eyebrow>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight text-gray-900">
                Low Battery? Grab a Charger.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
                Grab a portable charger from any U Charge Up® station, take it
                with you, and drop it at any other station when you are done.
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                <Button
                  size="lg"
                  className="bg-brand-dark-blue hover:bg-brand-blue text-white font-semibold"
                  onClick={handleAppDownload}
                  data-testid="how-download-app"
                >
                  Download App
                </Button>
                <Link href="/locations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[hsl(205,85%,35%)] text-[hsl(205,85%,35%)] hover:bg-gray-50 font-semibold"
                  >
                    Where to Find Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={batteryPhoto}
                alt="A hand holding a U Charge Up power bank on a golf course"
                className="w-full max-w-md h-64 md:h-[480px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>Three steps</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Rent in three simple steps
              </h2>
            </motion.div>
            <div className="grid gap-3 md:gap-4 md:grid-cols-3">
              {STEPS.map(({ icon: Icon, title, text, tip }, index) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-7 flex flex-col items-start gap-3"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 h-11 rounded-full bg-brand-dark-blue text-white flex items-center justify-center text-lg font-bold flex-none">
                      {index + 1}
                    </span>
                    <span className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center flex-none">
                      <Icon className="w-6 h-6 text-[hsl(205,85%,35%)]" />
                    </span>
                  </div>
                  <h3 className="text-xl md:text-[22px] font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                  <p className="w-full pt-3 border-t border-gray-200 text-sm font-medium text-gray-700">
                    {tip}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>Two ways to rent</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Use the app, or just tap
              </h2>
            </motion.div>
            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
              {WAYS.map(({ icon: Icon, tag, title, text, points }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-7 flex flex-col items-start gap-3"
                >
                  <span className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[hsl(205,85%,35%)]" />
                  </span>
                  <Eyebrow>{tag}</Eyebrow>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{text}</p>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="w-5 h-5 flex-none mt-0.5 text-[hsl(205,85%,35%)]" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-5 md:mb-7">
              <Eyebrow>Good to know</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Quick answers
              </h2>
            </motion.div>
            <dl className="border-b border-gray-200">
              {ANSWERS.map((item) => (
                <div
                  key={item.q}
                  className="py-4 md:py-5 border-t border-gray-200 grid gap-1.5 md:gap-8 md:grid-cols-[1fr_2fr]"
                >
                  <dt className="text-lg font-bold text-gray-900">{item.q}</dt>
                  <dd className="text-gray-600 leading-relaxed">{item.a}</dd>
                </div>
              ))}
              <div className="py-4 md:py-5 border-t border-gray-200 grid gap-1.5 md:gap-8 md:grid-cols-[1fr_2fr]">
                <dt className="text-lg font-bold text-gray-900">Need a hand?</dt>
                <dd className="text-gray-600 leading-relaxed">
                  Chat with Juice, our helper, on any page of this site, or
                  email{" "}
                  <a
                    href="mailto:support@uchargeup.com"
                    className="underline text-[hsl(205,85%,35%)] hover:text-gray-900"
                  >
                    support@uchargeup.com
                  </a>
                  .
                </dd>
              </div>
            </dl>
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
                  Ready to charge?
                </h2>
                <p className="text-lg text-white/90">
                  Download the app and it takes you to the station closest to
                  you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[hsl(205,85%,35%)] font-semibold"
                  onClick={handleAppDownload}
                  data-testid="how-download-app-bottom"
                >
                  Download App
                </Button>
                <Link href="/locations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(205,85%,35%)] font-semibold"
                  >
                    Where to Find Us
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
