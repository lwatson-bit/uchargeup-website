import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import ChatMascot from "@/components/chat/ChatMascot";
import { openChat } from "@/components/chat/api";

// The contact form was replaced by the site chat (Juice) on 2026-10-07: it
// asks for the same details one at a time and emails support@ with the
// transcript attached. This page now just points people at it.
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouble with a rental, a question about a charge, or a venue that could use a kiosk? Start a chat and a real person follows up by email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chat card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <ChatMascot mood="idle" size={96} title="" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Chat with Juice</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Quick answers for rental hiccups, and a short set of questions when a person needs to look at a charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-none border-0"
                onClick={() => openChat("support")}
                data-testid="contact-chat-button"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold"
                onClick={() => openChat("partner")}
                data-testid="contact-partner-button"
              >
                I have a venue
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Prefer email?{" "}
              <a href="mailto:support@uchargeup.com" className="text-brand-600 hover:text-brand-700 underline">
                support@uchargeup.com
              </a>
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Email</h3>
              <div className="flex items-center">
                <Mail className="text-brand-600 w-5 h-5 mr-3" />
                <a href="mailto:support@uchargeup.com" className="text-brand-600 hover:text-brand-700 transition-colors duration-200">
                  support@uchargeup.com
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-2">We'll respond as quickly as possible</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Follow Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Instagram className="text-brand-600 w-5 h-5 mr-3" />
                  <a href="https://instagram.com/uchargeup" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors duration-200">
                    @uchargeup
                  </a>
                </div>
                <div className="flex items-center">
                  <FaXTwitter className="text-brand-600 w-5 h-5 mr-3" aria-hidden="true" />
                  <a href="https://x.com/uchargeup" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 transition-colors duration-200">
                    @uchargeup
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Follow us for updates and news about new locations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
