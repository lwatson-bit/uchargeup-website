import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationsMap from "@/components/LocationsMap";
import { Button } from "@/components/ui/button";
import { handleAppDownload } from "@/utils/appDownload";

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Find a Charging Station
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Live battery availability at every U Charge Up® location — the
                same real-time network our app uses. Rent at one location,
                return at any other.
              </p>
            </div>

            <LocationsMap />

            <div className="mt-12 text-center bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to charge?
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Download the U Charge Up app to rent a battery at any of these
                locations in seconds.
              </p>
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                onClick={handleAppDownload}
                data-testid="locations-download-app"
              >
                Download App
              </Button>
            </div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
