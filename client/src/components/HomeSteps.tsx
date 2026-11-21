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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
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
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 flex flex-col items-start gap-3.5"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-[52px] h-[52px] rounded-2xl bg-sky-50 flex items-center justify-center">
                  <Icon className="w-[26px] h-[26px] text-[hsl(205,85%,35%)]" />
                </span>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
