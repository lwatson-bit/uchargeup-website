import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Briefcase,
  Check,
  Music,
  Presentation,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { openChat } from "@/components/chat/api";
import conventionPhoto from "@assets/IMG_1735_1757034259783.jpeg";
import tournamentPhoto from "@assets/IMG_0268_1757034173508.jpeg";
import festivalPhoto from "@assets/IMG_1128_1757034121090.jpeg";

const SEEN_AT = ["Rocket Classic", "Afro Future Detroit", "Detroit Auto Show"];

const EVENT_KINDS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Music,
    title: "Festivals and concerts",
    text: "Multi day crowds, long sets and phones that never stop filming.",
  },
  {
    icon: Trophy,
    title: "Tournaments and game days",
    text: "Fans on their feet all day, far from any outlet.",
  },
  {
    icon: Presentation,
    title: "Conventions and trade shows",
    text: "Attendees and exhibitors who live on their phones from open to close.",
  },
  {
    icon: Briefcase,
    title: "Corporate and private events",
    text: "A polished guest amenity for conferences, galas and receptions.",
  },
];

// The festival photo is positioned low on purpose: it keeps the kiosk screen,
// which shows a price, out of the frame. The site carries no prices.
const PHOTOS = [
  {
    image: tournamentPhoto,
    alt: "U Charge Up stations outside a tournament fan shop",
    title: "Tournaments",
    text: "Stations at the fan shop, ready before the gates open",
    position: "center",
  },
  {
    image: festivalPhoto,
    alt: "A U Charge Up station at an outdoor festival",
    title: "Festivals",
    text: "Set up on site and running all weekend",
    position: "center 78%",
  },
];

const STEPS = [
  {
    title: "Tell us about your event",
    text: "Dates, venue and expected crowd. We send back a plan and a quote.",
  },
  {
    title: "We deliver and set up",
    text: "Stations arrive charged and are in place before your doors open.",
  },
  {
    title: "We pack out",
    text: "When the event ends, we collect everything. Nothing for your team to do.",
  },
];

const INCLUDED = [
  "Stations sized to your crowd, countertop or floor standing",
  "Your event or your sponsor on every screen",
  "Delivery, set up and pick up by our team",
  "Guests rent in seconds and return to any station",
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

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid gap-8 lg:gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
            <div className="flex flex-col items-start gap-5">
              <Eyebrow>Events</Eyebrow>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight text-gray-900">
                Keep Your Crowd Charged
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-xl">
                Self serve charging stations for festivals, tournaments,
                conventions and corporate events. We deliver, set up and pack
                out, so your guests stay in the moment.
              </p>
              <div className="flex flex-wrap gap-3 mt-1">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                  onClick={() => openChat("event")}
                  data-testid="events-book"
                >
                  Book an Event
                </Button>
                <Link href="/kiosks">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-brand-blue text-brand-blue hover:bg-gray-50 font-semibold"
                  >
                    See Our Kiosks
                  </Button>
                </Link>
              </div>
              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-4xl font-bold tracking-tight text-brand-blue">
                  200+
                </span>
                <span className="text-base font-semibold text-gray-700">
                  events powered every year
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={conventionPhoto}
                alt="U Charge Up stations and team at a convention"
                className="w-full max-w-md h-72 md:h-[500px] object-cover object-[center_35%] rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-2.5">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Seen at
            </span>
            {SEEN_AT.map((name) => (
              <span key={name} className="text-[17px] font-bold text-gray-600">
                {name}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>Who we serve</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Built for every kind of event
              </h2>
            </motion.div>
            <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EVENT_KINDS.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 flex sm:flex-col items-start gap-4 sm:gap-3"
                >
                  <span className="w-12 h-12 rounded-2xl bg-brand-tint flex items-center justify-center flex-none">
                    <Icon className="w-6 h-6 text-brand-blue" />
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

        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <motion.div {...fadeUp} className="max-w-2xl flex flex-col gap-3.5 mb-7 md:mb-9">
              <Eyebrow>In action</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Real events, real crowds
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2">
              {PHOTOS.map((photo) => (
                <motion.figure
                  key={photo.title}
                  {...fadeUp}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full h-56 md:h-[340px] object-cover"
                    style={{ objectPosition: photo.position }}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pt-10 pb-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-lg font-bold text-white">
                      {photo.title}
                    </div>
                    <div className="text-sm text-gray-200">{photo.text}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid gap-10 lg:gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <motion.div {...fadeUp} className="flex flex-col gap-3.5 mb-7 md:mb-9">
                <Eyebrow>How it works</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  We handle it from load in to load out
                </h2>
              </motion.div>
              <div className="grid gap-6 md:gap-7 sm:grid-cols-3">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={step.title}
                    {...fadeUp}
                    className="flex sm:flex-col items-start gap-4 sm:gap-2.5"
                  >
                    <span className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center text-lg font-bold flex-none">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              {...fadeUp}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-7 self-start"
            >
              <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3.5">
                What you get
              </h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-[22px] h-[22px] flex-none mt-0.5 text-brand-blue" />
                    <span className="text-[17px] text-gray-700">{item}</span>
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
              className="bg-brand-blue rounded-3xl p-7 md:p-14 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex-1 min-w-[260px]">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2.5">
                  Planning an event?
                </h2>
                <p className="text-lg text-white/90">
                  Tell us the date and the crowd size and we will put a plan
                  together.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-brand-dark-blue font-semibold"
                  onClick={() => openChat("event")}
                  data-testid="events-book-bottom"
                >
                  Book an Event
                </Button>
                <Link href="/for-venues">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark-blue font-semibold"
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
