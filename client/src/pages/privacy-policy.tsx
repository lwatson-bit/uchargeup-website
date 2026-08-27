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
              <p className="text-gray-500 mb-2">Last Updated: August 27, 2026</p>
              <p className="text-gray-500 mb-12">
                <a href="/es/privacy-policy" className="text-brand-blue hover:underline">
                  Español
                </a>
              </p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-8">
                  U Charge Up, Inc. ("U Charge Up," "we," "our," or "us") provides mobile applications and charging kiosk services that allow users to rent portable power banks and manage their rentals. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile app, website, and kiosks (collectively, the "Services").
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  By using the Services, you agree to the practices described in this Privacy Policy.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information we collect</h2>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">A. Information you provide</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Account information:</strong> phone number and/or email address; name if you add it to your profile; profile photo if you upload one.</li>
                    <li><strong>Sign-in providers:</strong> if you sign in with Apple, Google, or Facebook, we receive your name, email address (or Apple's private relay address), and an account identifier from that provider. We never receive your password.</li>
                    <li><strong>Payment information:</strong> processed securely by our third-party payment provider (Stripe, and where offered, Apple Pay and Google Pay). Your full card number goes directly to the payment processor and is never stored on our servers; we keep only a tokenized reference, the card brand, and the last four digits so you can recognize your saved card.</li>
                    <li><strong>Support requests:</strong> messages and any photos you choose to attach when contacting customer support.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">B. Information collected automatically</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Location:</strong> your device's precise location, with your permission and only while you are using the app, to show nearby U Charge Up kiosks. We do not collect location in the background. You may disable location services at any time in your device settings.</li>
                    <li><strong>Rental activity:</strong> which kiosks you rent from and return to, rental times, and amounts charged.</li>
                    <li><strong>Device information:</strong> device model, operating system, browser type, app version, language, and identifiers needed for push notifications.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">C. Camera and photos</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>The camera is used only to scan kiosk QR codes. Photo library access is used only when you choose to attach photos to a support request. Images are not collected for any other purpose.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">D. Information from third parties</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Payment processor data (Stripe):</strong> payment status, refunds, and fraud prevention signals.</li>
                    <li><strong>Analytics providers:</strong> aggregated usage data to help improve app performance and reliability.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How we use your information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>provide and operate the Services: start and end rentals, dispense power banks, process payments, and manage deposits and passes;</li>
                    <li>show you nearby kiosks and availability;</li>
                    <li>communicate with you: verification codes, rental receipts, service notifications, and responses to support requests;</li>
                    <li>detect and prevent fraud or misuse, enforce our Terms of Service, and collect amounts owed;</li>
                    <li>improve app performance, kiosk functionality, and user experience;</li>
                    <li>comply with legal obligations.</li>
                  </ul>
                  <p className="font-semibold text-brand-blue">We do not sell your personal data, and we do not use your information for third-party advertising.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How we share your information</h2>
                  <p className="mb-4">We may share information only with:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Payment processors</strong> (Stripe; Apple Pay / Google Pay where used) — to process your payments.</li>
                    <li><strong>Service providers</strong> that operate parts of the Services for us: cloud hosting, Google Maps (kiosk maps), Firebase (sign-in and push notifications), and customer-support tooling. These providers may process your information only to provide their services to us.</li>
                    <li><strong>Venue partners:</strong> venues that host our kiosks receive aggregate usage statistics (for example, rentals per day at their venue) and operational information needed to confirm returns or resolve disputes. They do not receive your contact information.</li>
                    <li><strong>Law enforcement:</strong> if required by applicable law or legal process, or to protect the rights, safety, or property of U Charge Up, our users, or the public.</li>
                    <li><strong>Business transfers:</strong> if we are involved in a merger, acquisition, or asset sale, information may be transferred with reasonable protections.</li>
                  </ul>
                  <p className="font-semibold">We do not share personal information with advertising networks or data brokers.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookies and tracking technologies</h2>
                  <p>
                    Our website may use cookies and similar technologies to maintain your session, analyze website performance, and improve user experience. Our mobile app uses analytics tools that collect anonymized usage data. We do not use cross-app tracking for advertising.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data retention</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Account information is kept while your account is active.</li>
                    <li>Rental and payment records are kept as required for accounting, tax, and dispute-resolution purposes (up to 7 years), even after account deletion.</li>
                    <li>Support conversations are retained for up to 2 years.</li>
                    <li>When you delete your account in the App (Settings → Delete Account), your account is permanently deactivated, your saved payment methods are removed, and your account identifier is unlinked from the app. Rental and payment records associated with the account are retained only as described above.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data security</h2>
                  <p>
                    We protect your information with encryption in transit, access controls, and payment tokenization. No system is perfectly secure; if we learn of a breach affecting your personal information, we will notify you as required by law.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your rights and choices</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Access, correction, deletion:</strong> you can view and edit your profile in the App and delete your account in Settings → Delete Account, or contact us at{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>
                      .
                    </li>
                    <li><strong>Location:</strong> you can turn off location permission in your device settings; the map and nearby-kiosk features will not work without it.</li>
                    <li><strong>Push notifications:</strong> you can disable them in your device settings.</li>
                    <li><strong>Marketing:</strong> we send marketing messages only where permitted, and you can opt out at any time.</li>
                  </ul>
                  <p className="mb-4">
                    <strong>United States residents:</strong> depending on your state, you may have additional rights under state privacy laws (such as access, deletion, and portability). Contact us to exercise them; we will not discriminate against you for doing so.
                  </p>
                  <p>
                    <strong>Colombia residents:</strong> we process personal data in accordance with Ley 1581 de 2012 and its implementing decrees (habeas data). You have the right to know, update, rectify, and delete your personal data, and to revoke consent, by writing to{" "}
                    <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                      support@uchargeup.com
                    </a>
                    . Requests are handled within the terms established by Colombian law.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's privacy</h2>
                  <p>
                    The Services are not directed to children under 13 (or the minimum age in your jurisdiction), and we do not knowingly collect their information. If you believe a child has provided us information, contact us and we will delete it.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International users</h2>
                  <p>
                    We are based in the United States and process data on servers located in the United States. If you use the Services from another country (including Colombia), your information will be transferred to and processed in the United States under protections consistent with this Policy.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to this Privacy Policy</h2>
                  <p>
                    We may update this Policy from time to time. Material changes will be announced in the App or by email before they take effect. The current version is always available in the App and at{" "}
                    <a href="https://uchargeup.com/privacy-policy" className="text-brand-blue hover:underline">
                      uchargeup.com/privacy-policy
                    </a>
                    .
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact us</h2>
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
                        uchargeup.com
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
