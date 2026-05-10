import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Thank You | PrivateHealthInsurance.co.nz",
  description: "Thank you for your quote request. We'll be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <>
      <NavBar />

      <section className="min-h-screen flex items-center justify-center py-20 px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Thank You!</h1>
            <p className="text-xl text-gray-400">Your quote request has been received.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">What Happens Next</h2>
            <div className="space-y-4 text-gray-300 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="font-semibold text-white mb-1">We Review Your Details</p>
                  <p className="text-sm">Our licensed advisers will review your information and health insurance needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="font-semibold text-white mb-1">We Compare Providers</p>
                  <p className="text-sm">We'll compare quotes from Southern Cross, nib, AIA, and Partners Life for your specific situation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <p className="font-semibold text-white mb-1">We Contact You</p>
                  <p className="text-sm">One of our team will be in touch within 24 hours with recommendations and quotes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <p className="font-semibold text-white mb-1">You Decide</p>
                  <p className="text-sm">Take your time, ask questions, and decide what's best for you. No pressure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 mb-8 text-left">
            <h3 className="text-lg font-bold text-white mb-4">Common Questions</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white mb-1">How long before I hear from you?</p>
                <p className="text-gray-400 text-sm">Most quote requests are responded to within 24 hours. Weekday requests are typically handled faster.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Do I have to buy insurance?</p>
                <p className="text-gray-400 text-sm">No. We provide information and recommendations. You're completely free to take your time deciding or not buy at all.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Will there be any cost to me?</p>
                <p className="text-gray-400 text-sm">Our service is completely free. We're paid by the insurance providers, not by you.</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">In the meantime, explore our guides and comparisons:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700">
                Read Our Guides
              </Link>
              <Link href="/compare" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors">
                Compare Providers
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-4">Have questions? Get in touch:</p>
            <a href="mailto:hello@cover4you.co.nz" className="text-sky-400 hover:text-sky-300 font-semibold">
              hello@cover4you.co.nz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
