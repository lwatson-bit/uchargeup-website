import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "wouter";
import eventImage1 from "@assets/IMG_1128_1757034121090.jpeg";
import eventImage2 from "@assets/DC5363E4-2F69-42A5-9C85-D87A3C070281_1757034151691.jpeg";
import eventImage3 from "@assets/IMG_0268_1757034173508.jpeg";
import eventImage4 from "@assets/IMG_0205_1757034192238.jpeg";
import eventImage5 from "@assets/IMG_1735_1757034259783.jpeg";

export default function Events() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Events & Festivals</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Portable Charging Solutions for Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your event attendees connected with our innovative, self-service charging solutions. 
            Perfect for festivals, trade shows, sporting events, and more.
          </p>
        </motion.div>

        {/* Featured Event Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                alt="U Charge Up charging stations at event" 
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

        {/* Event Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Music Festivals</h3>
            <p className="text-gray-600">
              Keep festival-goers connected throughout multi-day events with reliable charging solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Corporate Events</h3>
            <p className="text-gray-600">
              Professional charging solutions for conferences, trade shows, and corporate gatherings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Outdoor Venues</h3>
            <p className="text-gray-600">
              Perfect for sporting events, outdoor concerts, and any venue where power access is limited.
            </p>
          </motion.div>
        </div>

        {/* How Events Work */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Simple Event Setup
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We handle everything from delivery to pickup, making it easy to provide charging solutions at your event.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Book Your Event</h4>
                    <p className="text-gray-600 text-sm">Get a custom quote and setup plan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">We Setup & Deliver</h4>
                    <p className="text-gray-600 text-sm">Professional installation before your event</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Guests Enjoy</h4>
                    <p className="text-gray-600 text-sm">Attendees stay connected throughout your event</p>
                  </div>
                </div>
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
                  src={eventImage4} 
                  alt="Professional charging station setup" 
                  className="w-full h-80 object-center object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
                data-testid="book-event-button"
              >
                Book Your Event Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}