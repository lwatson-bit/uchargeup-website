import { motion } from "framer-motion";
import { Monitor, Users, MapPin, TrendingUp, Target, Eye } from "lucide-react";

export default function Advertising() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-cyan-500" />,
      title: "Digital Screen Advertising",
      description: "High-resolution displays on every kiosk for maximum visibility and engagement"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Captive Audience",
      description: "Reach customers during their charging session when they're most attentive"
    },
    {
      icon: <MapPin className="w-8 h-8 text-cyan-500" />,
      title: "Strategic Locations",
      description: "Premium placement in high-traffic areas like airports, hotels, and events"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-500" />,
      title: "Real-Time Analytics",
      description: "Track impressions, engagement, and campaign performance in real-time"
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: "Targeted Campaigns",
      description: "Location-based targeting to reach your ideal customers at the right time"
    },
    {
      icon: <Eye className="w-8 h-8 text-cyan-500" />,
      title: "High Visibility",
      description: "Eye-level placement ensures your message gets noticed by every user"
    }
  ];

  return (
    <section id="advertising" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advertise on Our
            <span className="text-cyan-500"> Digital Kiosks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your marketing strategy with premium digital advertising on our charging kiosks. 
            Reach customers when they're most engaged and in high-traffic locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Advertise with Us?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join leading brands who trust U Charge Up for their digital advertising needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Advertising Info
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View Our Locations
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose U Charge Up for Digital Advertising?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
              <p className="text-gray-600">Always-on visibility</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">100+</div>
              <p className="text-gray-600">Premium locations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">1M+</div>
              <p className="text-gray-600">Monthly impressions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">95%</div>
              <p className="text-gray-600">User engagement rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}