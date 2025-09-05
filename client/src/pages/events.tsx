import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";

export default function Events() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white pt-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Portable Charging Stations
              <br />
              <span className="text-3xl md:text-5xl text-brand-blue">Events & Festivals</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
              U Charge Up is the nation's leading provider of innovative, self-service charging 
              solutions for events, festivals, trade shows, sporting events, and many more. 
              Our all-in-one portable charging stations keep guests and attendees connected 
              anywhere, anytime, enhancing their experience while on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => window.location.href = '/#contact'}
                size="lg"
                className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
              >
                BOOK YOUR NEXT EVENT
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
                onClick={() => window.location.href = '/#contact'}
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating battery bank visual */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -15 }}
            animate={{ opacity: 0.8, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-48 h-72 bg-gradient-to-b from-brand-blue to-brand-dark-blue rounded-3xl shadow-2xl relative"
          >
            {/* Battery bank design elements */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-center">
              <div className="text-2xl font-bold mb-2">Rent</div>
              <div className="text-xl mb-2">Charge</div>
              <div className="text-xl">Return</div>
            </div>
            
            {/* QR Code placeholder */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-8 gap-0.5">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Perfect for Any Event
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From music festivals to corporate events, our portable charging solutions keep your attendees powered up and engaged.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Music Festivals</h3>
              <p className="text-gray-600">
                Keep festival-goers connected throughout multi-day events with reliable charging solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Corporate Events</h3>
              <p className="text-gray-600">
                Professional charging solutions for conferences, trade shows, and corporate gatherings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdoor Venues</h3>
              <p className="text-gray-600">
                Perfect for sporting events, outdoor concerts, and any venue where power access is limited.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple Event Setup
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle everything from delivery to pickup, making it easy to provide charging solutions at your event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Your Event</h3>
              <p className="text-gray-600">
                Contact us with your event details and we'll provide a custom quote and setup plan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">We Setup & Deliver</h3>
              <p className="text-gray-600">
                Our team delivers and sets up charging stations at your venue before the event starts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Guests Enjoy</h3>
              <p className="text-gray-600">
                Your attendees stay connected and engaged throughout your event with convenient charging access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Ready to Power Your Next Event?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600">
              Contact our events team today to discuss your charging needs and get a custom quote for your event.
            </p>
            
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-brand-blue text-white hover:bg-brand-dark-blue px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/#contact'}
              >
                GET STARTED TODAY
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}