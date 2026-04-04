import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-500 mb-12">Effective Date: April 4, 2026</p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-12">
                  Welcome to U Charge Up. By renting and using a portable charger from any U Charge Up kiosk, you agree to the following Terms of Service.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Service Overview</h2>
                  <p>
                    U Charge Up provides portable charging batteries for temporary use. Customers may rent a battery from any kiosk and return it to any U Charge Up location.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Rental Charges</h2>
                  <p className="mb-4">
                    Rental fees are billed based on usage time and may vary by location. By initiating a rental, you agree to the pricing displayed on the kiosk screen at the time of transaction.
                  </p>
                  <p>
                    A maximum daily charge of <strong>$40 per rental</strong> will apply.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Authorization</h2>
                  <p>
                    At the start of each rental, a temporary authorization hold may be placed on your payment method. This hold is not a final charge and will be adjusted based on your actual usage and return of the battery.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Returns</h2>
                  <p className="mb-4">
                    Batteries must be returned to a U Charge Up kiosk within the rental period. Customers may return batteries to any available kiosk location.
                  </p>
                  <p>
                    Failure to properly dock and return the battery may result in continued rental charges or a replacement fee.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Replacement Fee (Unreturned Batteries)</h2>
                  <p className="mb-4">
                    If a battery is not returned within <strong>72 hours</strong> of the initial rental time, it will be considered unreturned.
                  </p>
                  <p className="mb-4">
                    At that time, a replacement fee of <strong className="text-gray-900">$129</strong> will be charged to the payment method on file.
                  </p>
                  <p>
                    Once a replacement fee has been charged, the battery is considered purchased and is no longer eligible for return or refund.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsibility for Equipment</h2>
                  <p className="mb-4">
                    Customers are responsible for the battery during the rental period. Batteries should be used for their intended purpose only and handled with reasonable care.
                  </p>
                  <p>
                    U Charge Up reserves the right to charge for damage, misuse, or tampering beyond normal wear and tear.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Refunds and Disputes</h2>
                  <p>
                    If you believe you were charged in error, please contact us at{" "}
                    <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                      support@uchargeup.com
                    </a>{" "}
                    within a reasonable timeframe. We will review all requests and work to resolve valid concerns.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
                  <p>
                    U Charge Up does not guarantee uninterrupted service or kiosk availability. Availability may vary by location and time.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, U Charge Up shall not be liable for any indirect, incidental, or consequential damages arising from the use of its services or equipment.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                  <p>
                    U Charge Up reserves the right to update or modify these Terms of Service at any time. Continued use of the service constitutes acceptance of any updated terms.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Acceptance of Terms</h2>
                  <p>
                    By completing a transaction at a U Charge Up kiosk, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-2">Questions?</p>
                    <p>
                      Contact us at{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}
