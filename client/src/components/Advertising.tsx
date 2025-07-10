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

        

        
      </div>
    </section>
  );
}