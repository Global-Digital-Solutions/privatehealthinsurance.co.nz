import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | PrivateHealthInsurance.co.nz",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />

      <section className="bg-gray-900 border-b border-gray-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: 2026-04-20</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">1. About Us</h2>
              <p className="text-gray-300 leading-relaxed">
                PrivateHealthInsurance.co.nz is operated by Cover4You Group, a licensed health insurance advisory service. We are committed to protecting your privacy and ensuring you have a positive experience on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">2. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">When you request a quote or contact us, we may collect:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Your name, email address, and phone number</li>
                <li>Your age and health information relevant to your insurance needs</li>
                <li>Your address and employment status</li>
                <li>Information about your preferred coverage and budget</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Provide you with personalised health insurance quotes</li>
                <li>Contact you with recommendations and information about your request</li>
                <li>Respond to your enquiries and questions</li>
                <li>Improve our services and website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">4. Sharing Your Information</h2>
              <p className="text-gray-300 leading-relaxed">
                To provide quotes, we share relevant information with health insurance providers (Southern Cross, nib, AIA, Partners Life). We only share information necessary for your quote request. We do not sell your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">5. Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, and disclosure. Your information is stored securely and accessed only by authorised staff members.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">6. Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies to improve your experience. These are small files stored on your device. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">7. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at hello@cover4you.co.nz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We encourage you to review this policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">9. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="text-gray-300 mt-4">
                Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300">hello@cover4you.co.nz</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
