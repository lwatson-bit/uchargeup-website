import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import eventImage1 from "@assets/IMG_1128_1757034121090.jpeg";
import eventImage2 from "@assets/DC5363E4-2F69-42A5-9C85-D87A3C070281_1757034151691.jpeg";
import eventImage3 from "@assets/IMG_0268_1757034173508.jpeg";
import eventImage4 from "@assets/IMG_0205_1757034192238.jpeg";
import eventImage5 from "@assets/IMG_1735_1757034259783.jpeg";

export default function Events() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-12 flex items-center">
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
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
                >
                  BOOK YOUR NEXT EVENT
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
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

      {/* Featured Event Images */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              See U Charge Up® in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real events, real solutions. Check out our charging stations powering events across the country.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={eventImage1} 
                  alt="U Charge Up® charging stations at event" 
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Live Event Setup</h3>
                <p className="text-sm text-gray-200">Charging stations in action</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={eventImage2} 
                  alt="Event charging solution" 
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Festival Ready</h3>
                <p className="text-sm text-gray-200">Multi-day event support</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={eventImage3} 
                  alt="Professional event setup" 
                  className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Professional Setup</h3>
                <p className="text-sm text-gray-200">Corporate events & conferences</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={eventImage4} 
                  alt="Professional charging station setup" 
                  className="w-full h-80 object-center object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={eventImage5} 
                  alt="Event charging solutions" 
                  className="w-full h-80 object-center object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-14 bg-gray-50">
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
      <section id="contact" className="py-16 bg-gray-50">
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
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-blue text-white hover:bg-brand-dark-blue px-8 py-4 text-lg font-semibold"
                >
                  GET STARTED TODAY
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </motion.main>
      <Footer />
    </div>
  );
}