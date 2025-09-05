import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
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
        {/* Header with Hero Image */}
        <div className="relative mb-16">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <img 
              src={eventImage1} 
              alt="U Charge Up at event" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white px-4"
              >
                <div className="mb-2">
                  <span className="text-sm font-medium uppercase tracking-wide">Events & Festivals</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  Portable Charging Solutions for Events
                </h2>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your event attendees connected with our innovative, self-service charging solutions. 
              Perfect for festivals, trade shows, sporting events, and more.
            </p>
          </motion.div>
        </div>

        {/* Event Types with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img 
                src={eventImage2} 
                alt="Music festival charging station" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-20"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
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
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img 
                src={eventImage3} 
                alt="Corporate event charging station" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-20"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
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
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img 
                src={eventImage4} 
                alt="Outdoor venue charging station" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-20"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Outdoor Venues</h3>
            <p className="text-gray-600">
              Perfect for sporting events, outdoor concerts, and any venue where power access is limited.
            </p>
          </motion.div>
        </div>

        {/* How Events Work */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Simple Event Setup
              </h3>
              <p className="text-lg text-gray-600">
                We handle everything from delivery to pickup, making it easy to provide charging solutions at your event.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={eventImage5} 
                  alt="Charging station setup at event" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
              <h4 className="text-lg font-semibold mb-3">Book Your Event</h4>
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
              <h4 className="text-lg font-semibold mb-3">We Setup & Deliver</h4>
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
              <h4 className="text-lg font-semibold mb-3">Guests Enjoy</h4>
              <p className="text-gray-600">
                Your attendees stay connected and engaged throughout your event with convenient charging access.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-brand-blue hover:bg-brand-dark-blue text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
            >
              Book Your Event Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}