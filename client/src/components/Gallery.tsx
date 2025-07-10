import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import eightUnitImage from "@assets/8 Unit UCU_1752157185780.png";
import twentyFourUnitImage from "@assets/24 Unit UCU_1752157185779.png";
import largeKioskImage from "@assets/Large 24 UCU_1752157170473.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: twentyFourUnitImage,
      title: "Shopping Mall Installation",
      description: "High-traffic retail location"
    },
    {
      src: eightUnitImage,
      title: "Airport Terminal",
      description: "Travel hub deployment"
    },
    {
      src: largeKioskImage,
      title: "University Campus",
      description: "Educational facility"
    },
    {
      src: twentyFourUnitImage,
      title: "Restaurant Location",
      description: "Food service venue"
    },
    {
      src: eightUnitImage,
      title: "Corporate Office",
      description: "Business district location"
    },
    {
      src: largeKioskImage,
      title: "Hotel Lobby",
      description: "Hospitality venue"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">Kiosk Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our kiosks in action at various locations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg border-0 bg-transparent">
                    <div className="p-0">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
                      />
                      <div className="p-4 bg-white rounded-b-lg">
                        <h3 className="font-semibold text-brand-text">{image.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-white font-semibold text-xl">{image.title}</h3>
                      <p className="text-white/80">{image.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
