import { motion } from "framer-motion";
import eightUnitImage from "@assets/8 Unit UCU_1752157185780.png";

const POINTS = [
  {
    title: "Our mission",
    text: "Keep people connected with easy access to portable power.",
  },
  {
    title: "Our network",
    text: "Stadiums, hospitals, hotels and festivals, coast to coast and growing.",
  },
  {
    title: "Our impact",
    text: "One shared battery serves many people, so fewer get bought and thrown away.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
              Power on the go, simplified
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              U Charge Up was founded with a simple mission: no one should have
              to worry about a dying phone while they are out living their
              life. Grab a battery when you need one and return it when you
              are done.
            </p>

            <dl className="mt-7 space-y-4">
              {POINTS.map((point) => (
                <div key={point.title} className="border-l-2 border-gray-200 pl-4">
                  <dt className="text-base font-semibold text-gray-900">
                    {point.title}
                  </dt>
                  <dd className="mt-0.5 text-gray-600">{point.text}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Product picture: desktop only, it adds a full screen of scrolling on phones */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={eightUnitImage}
              alt="U Charge Up compact battery rental kiosk"
              className="w-full max-w-md rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
