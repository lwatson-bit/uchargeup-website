import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, MapPin, Clock } from "lucide-react";

export default function CallToAction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected, Stay In The Moment
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied users who rely on U Charge Up for their portable charging needs. Download our app today to find the nearest rental location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold bg-transparent shadow-none"
            >
              Download Our App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue font-semibold bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Become a Partner
            </Button>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Available on iOS & Android
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Multiple locations
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 availability
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}