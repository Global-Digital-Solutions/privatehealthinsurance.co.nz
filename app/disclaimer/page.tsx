import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Disclaimer | PrivateHealthInsurance.co.nz",
  description: "Important disclaimer regarding the information and advice provided on this website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <NavBar />

      <section className="bg-gray-900 border-b border-gray-800 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-gray-400">Last updated: 2026-04-20</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">General Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The information contained on this website is provided for informational and educational purposes only. It is not intended to be professional advice. You should not rely solely on the information contained on this website for any decision or action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Not Professional Advice</h2>
              <p className="text-gray-300 leading-relaxed">
                Nothing on this website constitutes financial, legal, or insurance advice. While we provide information about health insurance products and services, the specific advice you receive from our advisers is personalised based on your circumstances and should be considered professional advice. You should seek independent professional advice before making any decisions based on information on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Accuracy of Information</h2>
              <p className="text-gray-300 leading-relaxed">
                While we endeavour to ensure the accuracy of information on this website, we do not warrant that all information is accurate, complete, or current. Health insurance products and pricing change frequently. Rates, terms, conditions, and features are subject to change. You should confirm all details directly with insurance providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">No Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                We are not liable for any loss or damage resulting from your reliance on information on this website, including but not limited to indirect, consequential, or incidental damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Third-Party Links</h2>
              <p className="text-gray-300 leading-relaxed">
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Use of external links is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Health Insurance Specific</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The following disclaimers apply specifically to health insurance information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>All health insurance policies have exclusions, waiting periods, and conditions. Read your policy documents carefully.</li>
                <li>Medical underwriting applies to all policies. Your individual circumstances will determine your eligibility and premiums.</li>
                <li>Pre-existing conditions may be excluded or subject to longer waiting periods.</li>
                <li>Information about health insurance products is based on current product offerings as of the publication date.</li>
                <li>Quotes provided are estimates based on information you provide and are subject to verification and underwriting.</li>
                <li>Premium increases occur annually at the insurer's discretion.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">No Endorsement</h2>
              <p className="text-gray-300 leading-relaxed">
                Mention of any health insurer, provider, or product does not constitute an endorsement. We aim to provide balanced, independent information to help you make informed decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Changes to Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Your continued use of this website constitutes your acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this disclaimer or our information, please contact us at:
              </p>
              <p className="text-gray-300 mt-4">
                Email: <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300">hello@cover4you.co.nz</a>
              </p>
            </div>

            <div className="bg-amber-900 bg-opacity-30 border border-amber-700 rounded-lg p-6 mt-8">
              <p className="text-amber-200">
                <strong>Important:</strong> Always read your health insurance policy documents carefully. Policy terms, exclusions, and conditions are set out in your official policy document, not on this website. In the event of any conflict between information on this website and your policy documents, your policy documents take precedence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
