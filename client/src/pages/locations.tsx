import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationsBand from "@/components/LocationsBand";

const VENUE_TYPES = [
  "Stadiums",
  "Hospitals",
  "Casinos",
  "Hotels",
  "Restaurants and bars",
  "Gyms",
  "Event venues",
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-16"
      >
        <LocationsBand />

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <p className="text-sm font-semibold text-gray-600 mb-4">
              You will find us in
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {VENUE_TYPES.map((type) => (
                <span
                  key={type}
                  className="px-3.5 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
