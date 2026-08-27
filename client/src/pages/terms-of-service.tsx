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
              <p className="text-gray-500 mb-2">Effective Date: August 27, 2026</p>
              <p className="text-gray-500 mb-12">
                <a href="/es/terms-of-service" className="text-brand-blue hover:underline">
                  Español
                </a>
              </p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-12">
                  These Terms of Service ("Terms") are a binding agreement between you and U Charge Up, Inc. ("U Charge Up," "we," "us"). They govern your use of the U Charge Up mobile application (the "App"), our charging kiosks, and our portable power bank rental service (together, the "Service"). By creating an account or renting a power bank, you agree to these Terms and to our Privacy Policy.
                </p>
                <p className="text-lg leading-relaxed mb-12">
                  If you do not agree, do not use the Service.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The Service</h2>
                  <p>
                    U Charge Up rents portable phone-charging power banks from self-service kiosks located at participating venues. You scan the QR code on a kiosk with the App, the kiosk dispenses a power bank, and you return it to any available U Charge Up kiosk when you are done.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility and your account</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>You must be at least 18 years old (or the age of majority where you live) to create an account and rent.</li>
                    <li>You must provide accurate contact information and keep it current. Your account is personal to you; do not share your login or let others rent on your account.</li>
                    <li>
                      You are responsible for all activity on your account. Tell us immediately at{" "}
                      <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                        support@uchargeup.com
                      </a>{" "}
                      if you believe your account has been compromised.
                    </li>
                    <li>You may delete your account at any time in the App (Settings → Delete Account). Outstanding rentals and unpaid charges must be resolved first.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Rental terms</h2>
                  <p className="mb-4">
                    <strong>3.1 Starting a rental.</strong> A rental begins when the kiosk dispenses a power bank to you and ends when the power bank is fully re-inserted into a U Charge Up kiosk and accepted by the kiosk.
                  </p>
                  <p className="mb-4">
                    <strong>3.2 Pricing.</strong> Rental rates are shown in the App before you confirm each rental and may vary by venue (for example, a rate per 30 minutes with a daily maximum). The price shown at the start of your rental is the price that applies to it.
                  </p>
                  <p className="mb-4">
                    <strong>3.3 Deposit hold.</strong> When you begin a rental we place a temporary authorization (hold) on your payment method — typically <strong>US $20</strong> — to secure the power bank. This is a hold, not a charge. When you return the power bank on time, the hold is released and only your actual rental fee is charged. Release timing after that depends on your bank, typically 1–10 business days.
                  </p>
                  <p className="mb-4">
                    <strong>3.4 Returning.</strong> Return the power bank by pushing it firmly into an empty slot at any U Charge Up kiosk until the kiosk accepts it. The rental clock stops only when the kiosk registers the return. If a kiosk is full or unavailable, use the App to find the nearest alternative kiosk.
                  </p>
                  <p className="mb-4">
                    <strong>3.5 Late returns, non-returns, and lost power banks.</strong> If a power bank is not returned within <strong>30 days</strong>, or if you report it lost or stolen, the rental is treated as a purchase of the power bank and we will charge the replacement fee shown in the App — currently <strong className="text-gray-900">US $129</strong> — plus accrued rental fees up to the applicable cap, using your payment method on file. After the replacement fee is charged, the power bank is yours and no further rental fees accrue.
                  </p>
                  <p>
                    <strong>3.6 Damaged equipment.</strong> You are responsible for damage to a power bank beyond normal wear while it is rented to you (for example, water damage or a cut cable). We may charge up to the replacement fee in Section 3.5 for a power bank returned damaged beyond reasonable use.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Unlimited Pass</h2>
                  <p className="mb-4">
                    <strong>4.1 What it is.</strong> The Unlimited Pass is a prepaid pass that makes rentals free at covered kiosks for a fixed period (for example, a 1-day or 3-day pass). Covered locations, pass prices, and durations are shown in the App before you buy.
                  </p>
                  <p className="mb-4">
                    <strong>4.2 How it works.</strong> While your pass is active, rentals you start at covered kiosks incur no rental fee. You may have one power bank out at a time; swap as often as you like. The deposit hold in Section 3.3 still applies to each rental, and the late/lost/damage provisions in Sections 3.5–3.6 still apply in full — a pass covers rental fees only, not lost or damaged equipment.
                  </p>
                  <p className="mb-4">
                    <strong>4.3 Validity.</strong> A pass starts when purchased and expires at the end of its stated period. A rental started before expiry is covered; a rental started after expiry is charged at normal rates. Passes are non-transferable.
                  </p>
                  <p>
                    <strong>4.4 Refunds.</strong> Pass purchases are non-refundable once the pass period has started, except where required by law or where we fail to provide the Service (see Section 6).
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments</h2>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Payments are processed by third-party payment processors (currently Stripe, and where offered, Apple Pay and Google Pay). We do not store your full card number.</li>
                    <li>You authorize us to charge your saved payment method for rental fees, pass purchases, replacement fees, and other amounts you incur under these Terms, including after a rental ends (for example, a late-return fee).</li>
                    <li>If a charge fails, we may retry it and may suspend your ability to rent until outstanding amounts are paid.</li>
                    <li>Prices are shown in the currency stated in the App. Your card issuer may apply foreign-transaction fees; those are not charged by us.</li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refunds and service problems</h2>
                  <p>
                    If a kiosk fails to dispense a power bank, dispenses a defective one (for example, it will not charge your phone), or fails to register a return through no fault of yours, contact us at{" "}
                    <a href="mailto:support@uchargeup.com" className="text-brand-blue hover:underline">
                      support@uchargeup.com
                    </a>
                    . We will correct the charge — including refunding rental fees or releasing deposit holds — where our Service did not work as described. Refunds are issued to the original payment method.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Acceptable use</h2>
                  <p className="mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>damage, disassemble, or tamper with power banks or kiosks;</li>
                    <li>use the Service for any unlawful purpose;</li>
                    <li>interfere with the App's operation or attempt to access it by any means other than the App itself;</li>
                    <li>resell rentals or passes.</li>
                  </ul>
                  <p>We may suspend or terminate accounts that violate these Terms, with any outstanding charges surviving termination.</p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. The App</h2>
                  <p>
                    We grant you a personal, non-exclusive, revocable license to use the App to access the Service. The App, our brand, and our content are our property or that of our licensors. The App requires location, camera, and network permissions to function fully; you may decline permissions, but parts of the Service may not work.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers</h2>
                  <p>
                    The Service is provided "as is" and "as available." Power bank availability at any kiosk is not guaranteed. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We are not responsible for damage to your device caused by misuse of a power bank contrary to its markings or instructions.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of liability</h2>
                  <p>
                    To the fullest extent permitted by law: (a) our total liability for any claim arising out of or relating to the Service is limited to the greater of US $100 or the amounts you paid us in the 12 months before the claim; and (b) we are not liable for indirect, incidental, special, consequential, or punitive damages, or lost profits or data. Some jurisdictions do not allow certain limitations; in those places, these limits apply to the extent permitted.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnity</h2>
                  <p>
                    You will indemnify and hold us harmless from claims and expenses (including reasonable attorneys' fees) arising from your misuse of the Service or violation of these Terms.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing law and disputes</h2>
                  <p className="mb-4">
                    These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-law rules. Disputes will be resolved in the state or federal courts located in Wayne County, Michigan, and you consent to their jurisdiction.
                  </p>
                  <p>
                    <strong>Consumers outside the United States.</strong> If you use the Service in a country whose laws grant you mandatory consumer protections (including Colombia's Estatuto del Consumidor, Ley 1480 de 2011), nothing in these Terms limits those rights, and you may also have recourse to your local consumer-protection authorities and courts.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes</h2>
                  <p>
                    We may update these Terms from time to time. If we make material changes we will notify you in the App or by email before they take effect. Continued use of the Service after the effective date constitutes acceptance. The current version is always available in the App and at{" "}
                    <a href="https://uchargeup.com/terms-of-service" className="text-brand-blue hover:underline">
                      uchargeup.com/terms-of-service
                    </a>
                    .
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Contact</h2>
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
