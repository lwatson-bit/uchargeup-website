import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import venueImage from "@assets/IMG_0268_1757034173508.jpeg";
import eventImage from "@assets/IMG_1128_1757034121090.jpeg";

const CARDS = [
  {
    image: venueImage,
    alt: "U Charge Up stations outside a tournament fan shop",
    eyebrow: "For venues",
    title: "Keep your guests charged, and keep them longer",
    text: "We install, stock and look after the station. Your guests stay powered and in the moment.",
    href: "/for-venues",
    button: "For Venues",
  },
  {
    image: eventImage,
    alt: "A U Charge Up station at an outdoor festival",
    eyebrow: "For events",
    title: "Festivals, tournaments and conferences",
    text: "We deliver the stations, set them up and pack them out. More than 200 events a year count on us.",
    href: "/events",
    button: "Events",
  },
];

/** Homepage section that points businesses at the For Venues and Events pages. */
export default function ForBusiness() {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-7 md:mb-9"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)] mb-3.5">
            For business
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bring U Charge Up to your crowd
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-44 md:h-64 object-cover"
              />
              <div className="p-5 md:p-7 flex flex-col items-start gap-2.5 md:gap-3">
                <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)]">
                  {card.eyebrow}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
                <Link href={card.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="mt-1.5 border-2 border-[hsl(205,85%,35%)] text-[hsl(205,85%,35%)] hover:bg-gray-50 font-semibold"
                  >
                    {card.button}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
