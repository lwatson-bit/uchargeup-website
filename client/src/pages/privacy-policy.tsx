import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-gray-500 mb-12">Last Updated: December 11, 2025</p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-8">
                  U Charge Up, Inc. ("U Charge Up," "we," "our," or "us") provides mobile applications and charging kiosk services that allow users to rent portable power banks and manage their rentals. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile app, website, and kiosks (collectively, the "Services").
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  By using the Services, you agree to the practices described in this Privacy Policy.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">A. Information You Provide</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Account Information:</strong> Phone number, email address (if provided), and profile details.</li>
                    <li><strong>Payment Information:</strong> Processed securely by our third-party payment provider (Stripe). We do not store full credit card numbers on our servers.</li>
                    <li><strong>Support Requests:</strong> Any information you submit when contacting customer support.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">B. Information Collected Automatically</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Device Information:</strong> Device model, operating system, browser type, and app version.</li>
                    <li><strong>Usage Information:</strong> How you interact with the app and kiosks, including rental history and return location.</li>
                    <li><strong>Location Information:</strong>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Precise location when you grant permission — used solely to help you find nearby U Charge Up kiosks.</li>
                        <li>You may disable location services at any time in your device settings.</li>
                      </ul>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">C. Information From Third Parties</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Payment Processor Data (Stripe):</strong> For payment status, refunds, and fraud prevention.</li>
                    <li><strong>Analytics Providers:</strong> Aggregated usage data to help improve app performance and reliability.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Provide and operate the U Charge Up Services</li>
                    <li>Process rentals, returns, deposits, and payments</li>
                    <li>Improve app performance, kiosk functionality, and user experience</li>
                    <li>Detect and prevent fraud or misuse</li>
                    <li>Communicate with you regarding your account, rentals, updates, or support inquiries</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                  <p className="font-semibold text-brand-blue">We do not sell your personal data.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Share Your Information</h2>
                  <p className="mb-4">We may share information only with:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Service Providers:</strong> Payment processing (Stripe), backend hosting, analytics, customer support tools.</li>
                    <li><strong>Business Partners:</strong> Only when necessary to operate kiosks within locations that host U Charge Up equipment (e.g., confirming device return or resolving disputes).</li>
                    <li><strong>Law Enforcement:</strong> If required by applicable law, legal process, or to protect our rights.</li>
                  </ul>
                  <p className="font-semibold">We do not share personal information for advertising networks or data brokers.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookies & Tracking Technologies</h2>
                  <p className="mb-4">Our website may use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Maintain your session</li>
                    <li>Analyze website performance</li>
                    <li>Improve user experience</li>
                  </ul>
                  <p>Our mobile app uses analytics tools that collect anonymized usage data. We do not use cross-app tracking for advertising.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
                  <p className="mb-4">We retain information only as long as necessary to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Operate your account</li>
                    <li>Provide rental history</li>
                    <li>Meet legal, tax, and operational requirements</li>
                  </ul>
                  <p>When data is no longer needed, we securely delete or anonymize it.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Security</h2>
                  <p className="mb-4">
                    We take reasonable technical and organizational measures to protect your information, including encryption, secure payment processing, and restricted access.
                  </p>
                  <p>While we work hard to safeguard your data, no method of transmission is 100% secure.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your Choices</h2>
                  <p className="mb-4">You may:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Disable location access</li>
                    <li>Request deletion of your account</li>
                    <li>Update your contact information</li>
                    <li>Opt out of marketing communications (if applicable)</li>
                  </ul>
                  <p>To request changes, contact us at <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">support@uchargeup.com</a>.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
                  <p>
                    Our Services are not intended for children under 13. We do not knowingly collect data from children under 13. If we learn that such data was collected, we will delete it promptly.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Users</h2>
                  <p>
                    The Services are operated in the United States. If you access the app from outside the U.S., you consent to the transfer of your information to the United States.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. The updated version will be posted on our website with the "Last Updated" date.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
                  <p className="mb-4">If you have questions or requests regarding this Privacy Policy, please contact us:</p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-2">U Charge Up, Inc.</p>
                    <p className="mb-1">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a href="https://www.uchargeup.com" className="text-brand-blue hover:underline">
                        https://www.uchargeup.com
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
