import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoverageMap from "@/components/CoverageMap";
import { Button } from "@/components/ui/button";
import { handleAppDownload } from "@/utils/appDownload";
import { openChat } from "@/components/chat/api";

const STATS = [
  { value: "2", label: "Countries" },
  { value: "7", label: "States" },
];

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
      >
        <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
              <p className="text-sm font-bold tracking-widest uppercase text-[hsl(205,85%,35%)] mb-4">
                Where to find us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Power Up, Coast to Coast
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                U Charge Up® stations are in stadiums, hospitals, casinos,
                hotels and restaurants across seven states and in Colombia.
                Open the app to find the one closest to you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[140px] bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-4"
                  >
                    <div className="text-4xl font-bold text-[hsl(205,85%,45%)] leading-none">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm font-semibold text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <CoverageMap />

            <div className="mt-12 text-center">
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

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to charge?
                  </h2>
                  <p className="text-gray-600">
                    The app shows the stations near you and how many chargers
                    are ready.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                  onClick={handleAppDownload}
                  data-testid="locations-download-app"
                >
                  Download App
                </Button>
              </div>

              <div className="bg-brand-dark-blue rounded-2xl p-8 flex flex-col items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Want a station at your venue?
                  </h2>
                  <p className="text-white/90">
                    Keep your guests charged and in the moment. Tell us about
                    your space and we will be in touch.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[hsl(205,85%,35%)] font-semibold"
                  onClick={() => openChat("partner")}
                  data-testid="locations-become-partner"
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
