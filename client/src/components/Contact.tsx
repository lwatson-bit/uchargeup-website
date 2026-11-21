import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Instagram,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { openChat } from "@/components/chat/api";

// The contact form was replaced by the site chat (Juice) on 2026-10-07: it
// asks for the same details one at a time and emails support@ with the
// transcript attached. This page routes people to the right chat path.
const CHOICES: {
  icon: LucideIcon;
  title: string;
  text: string;
  button: string;
  flow: "support" | "partner" | "event";
  testId: string;
  primary?: boolean;
}[] = [
  {
    icon: MessageCircle,
    title: "I need help with a rental",
    text: "A battery that will not release, a question about a charge, or anything else with your rental.",
    button: "Chat With Us",
    flow: "support",
    testId: "contact-chat-button",
    primary: true,
  },
  {
    icon: Building2,
    title: "I have a venue",
    text: "Bring a station to your stadium, hospital, hotel, restaurant or bar.",
    button: "Become a Partner",
    flow: "partner",
    testId: "contact-partner-button",
  },
  {
    icon: CalendarDays,
    title: "I am planning an event",
    text: "Festivals, tournaments, conventions and corporate events of any size.",
    button: "Book an Event",
    flow: "event",
    testId: "contact-event-button",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-16 bg-white">
      <div className="bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-8 md:pb-12 text-center"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-brand-blue mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.06] tracking-tight text-gray-900">
            How Can We Help?
          </h1>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Pick what fits and we will get you to the right person. A real
            person follows up by email.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid gap-3 md:gap-4 md:grid-cols-3">
          {CHOICES.map(({ icon: Icon, title, text, button, flow, testId, primary }) => (
            <motion.div
              key={flow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-7 flex flex-col items-start justify-between gap-4"
            >
              <div className="flex flex-col items-start gap-3">
                <span className="w-12 h-12 rounded-2xl bg-brand-tint flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </span>
                <h2 className="text-xl md:text-[22px] font-bold text-gray-900">
                  {title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{text}</p>
              </div>
              <Button
                size="lg"
                variant={primary ? "default" : "outline"}
                className={
                  primary
                    ? "bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold shadow-none border-0"
                    : "border-2 border-brand-blue text-brand-blue hover:bg-gray-50 font-semibold"
                }
                onClick={() => openChat(flow)}
                data-testid={testId}
              >
                {button}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Email
            </h3>
            <a
              href="mailto:support@uchargeup.com"
              className="text-[17px] text-brand-blue hover:text-brand-dark-blue underline"
            >
              support@uchargeup.com
            </a>
            <p className="mt-1.5 text-sm text-gray-600">
              For support, partnerships, press and investor inquiries. We
              respond during normal business hours.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Based in
            </h3>
            <p className="text-[17px] text-gray-900">Detroit, Michigan</p>
            <p className="mt-1.5 text-sm text-gray-600">
              Serving venues and events coast to coast.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Follow us
            </h3>
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/uchargeup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[17px] text-brand-blue hover:text-brand-dark-blue"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a
                href="https://x.com/uchargeup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[17px] text-brand-blue hover:text-brand-dark-blue"
              >
                <FaXTwitter className="w-5 h-5" aria-hidden="true" />
                X
              </a>
            </div>
            <p className="mt-1.5 text-sm text-gray-600">@uchargeup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
