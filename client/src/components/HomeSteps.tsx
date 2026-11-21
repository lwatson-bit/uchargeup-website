import { motion } from "framer-motion";
import { QrCode, Zap, RotateCcw, type LucideIcon } from "lucide-react";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: QrCode,
    title: "Start your rental",
    text: "Scan the code on the station or tap your card on the reader, then grab your battery.",
  },
  {
    icon: Zap,
    title: "Charge on the go",
    text: "Built in cables fit your phone. Keep moving, no outlet needed.",
  },
  {
    icon: RotateCcw,
    title: "Return anywhere",
    text: "Done charging? Drop the battery at any U Charge Up station.",
  },
];

/** Homepage version of the three rental steps. The full page lives at /how-it-works. */
export default function HomeSteps() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)] mb-3.5">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Charged up in three easy steps
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-7 flex md:flex-col items-start gap-4 md:gap-3.5"
            >
              <span className="w-12 h-12 md:w-[52px] md:h-[52px] rounded-2xl bg-sky-50 flex items-center justify-center flex-none">
                <Icon className="w-6 h-6 md:w-[26px] md:h-[26px] text-[hsl(205,85%,35%)]" />
              </span>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-wider uppercase text-gray-600">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-lg md:text-xl font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mt-1.5 md:mt-2.5 text-gray-600 leading-relaxed">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
