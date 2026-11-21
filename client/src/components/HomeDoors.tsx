import { Link } from "wouter";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

/**
 * The homepage's three "doors". Each one names an audience in a line and
 * sends them to the page that has the detail, so the homepage does not
 * repeat what the menu pages already say.
 */
const DOORS: { icon: LucideIcon; title: string; text: string; href: string; link: string }[] = [
  {
    icon: BatteryCharging,
    title: "Rent a Charger",
    text: "Scan or tap, charge on the go, return it anywhere.",
    href: "/how-it-works",
    link: "How it works",
  },
  {
    icon: Building2,
    title: "For Venues",
    text: "A self serve station for your guests, looked after by us.",
    href: "/for-venues",
    link: "Bring it to your venue",
  },
  {
    icon: CalendarDays,
    title: "Events",
    text: "Festivals, tournaments and conventions, set up and packed out.",
    href: "/events",
    link: "Book an event",
  },
];

export default function HomeDoors() {
  return (
    <section className="py-12 md:py-16 bg-white" data-testid="home-doors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:gap-4 md:grid-cols-3">
          {DOORS.map(({ icon: Icon, title, text, href, link }) => (
            // No scroll triggered fade here on purpose: these are the page's main
            // links and must never sit invisible waiting for an animation.
            <div key={href}>
              <Link
                href={href}
                className="group h-full bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-7 flex md:flex-col items-start gap-4 md:gap-3.5 transition-colors duration-200 hover:border-brand-blue"
              >
                  <span className="w-12 h-12 rounded-2xl bg-brand-tint flex items-center justify-center flex-none">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </span>
                  <span className="flex-1 min-w-0 flex flex-col gap-1.5">
                    <span className="text-lg md:text-xl font-bold text-gray-900">
                      {title}
                    </span>
                    <span className="text-gray-600 leading-relaxed">{text}</span>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                      {link}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
