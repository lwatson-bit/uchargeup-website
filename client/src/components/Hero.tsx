import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Battery, Zap, MapPin, Leaf } from "lucide-react";
import kioskImage from "@assets/Large 24 UCU_1752157170473.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <Battery className="w-4 h-4 mr-1" />
                Portable Power On Demand
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Stay Connected, Stay In The Moment
            </h1>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Rent portable batteries at any of our partner locations. Return them anywhere in our network. Never worry about running out of power again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                onClick={() => scrollToSection("how-it-works")}
              >
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold"
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-brand-blue" />
                Fast charging
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-brand-blue" />
                Multiple locations
              </div>
              <div className="flex items-center">
                <Leaf className="w-4 h-4 mr-2 text-brand-blue" />
                Eco-friendly
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src={kioskImage} 
                alt="U Charge Up battery rental kiosk" 
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
