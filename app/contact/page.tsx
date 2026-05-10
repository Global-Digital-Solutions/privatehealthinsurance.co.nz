import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "Contact Us | PrivateHealthInsurance.co.nz",
  description: "Get in touch with our licensed health insurance advisers. Free quotes, no obligation. Response within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-400">Our licensed advisers are here to help with your health insurance needs. No pressure, no obligation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Request a Quote</h2>
            <p className="text-gray-400 mb-8">Fill out the form below and one of our advisers will be in touch within 24 hours with a personalised quote.</p>
            <QuoteForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Contact Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a href="mailto:hello@cover4you.co.nz" className="text-white font-semibold hover:text-sky-400 transition-colors">
                    hello@cover4you.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Website</p>
                  <a href="https://privatehealthinsurance.co.nz" className="text-white font-semibold hover:text-sky-400 transition-colors">
                    privatehealthinsurance.co.nz
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Why Contact Us</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span>
                  <span>Free health insurance comparison service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span>
                  <span>Compare all major NZ providers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span>
                  <span>Licensed advisers with years of experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span>
                  <span>No obligation — explore options guilt-free</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400">✓</span>
                  <span>Personalised advice for your situation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-sky-900 to-sky-800 rounded-lg p-8 border border-sky-700">
              <h3 className="text-lg font-bold text-white mb-3">About Cover4You</h3>
              <p className="text-sky-100 text-sm mb-4">PrivateHealthInsurance.co.nz is part of the Cover4You Group, a licensed health insurance advisory service.</p>
              <p className="text-sky-100 text-sm">Our advisers are licensed professionals committed to helping New Zealanders find the right health insurance at the right price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Is your service really free?</h3>
              <p className="text-gray-300">Yes. We're paid by the insurance providers when you take out a policy. You pay nothing — the insurer covers our commission.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">How long does it take to get a quote?</h3>
              <p className="text-gray-300">Most quotes are provided within 24 hours. Simple quotes may be faster. We'll confirm timing when we contact you.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Do I have to buy insurance?</h3>
              <p className="text-gray-300">Absolutely not. We're here to provide information and quotes. You're free to take your time deciding, or not buy at all.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">What information do you need?</h3>
              <p className="text-gray-300">Basic details like your age, health status, and what type of cover you're interested in. Medical underwriting happens after you decide to proceed.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Can you help with pre-existing conditions?</h3>
              <p className="text-gray-300">Yes. We work with all providers and understand how they handle pre-existing conditions. We'll help you find the best options for your situation.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Will you pressure me to buy?</h3>
              <p className="text-gray-300">No. We provide information and recommendations, but the decision is entirely yours. We're here to help, not to sell.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-800 py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why New Zealanders Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-semibold text-white mb-2">Licensed Advisers</h3>
              <p className="text-gray-400 text-sm">Our team are licensed health insurance professionals with years of experience.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Truly Independent</h3>
              <p className="text-gray-400 text-sm">We compare all major providers — no bias towards any particular insurer.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Your Best Interest</h3>
              <p className="text-gray-400 text-sm">We focus on finding you the right cover at the right price for your situation.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
