import { motion } from "framer-motion";

/** Short About strip for the homepage. The detail lives on the menu pages. */
export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Power on the go, simplified
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          U Charge Up was founded with a simple mission: no one should have to
          worry about a dying phone while they are out living their life. Our
          stations are in stadiums, hospitals, hotels and festivals, coast to
          coast.
        </p>
      </motion.div>
    </section>
  );
}
