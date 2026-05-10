import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | PrivateHealthInsurance.co.nz",
  description: "Learn about Cover4You Group, our licensed advisers, and how we help New Zealanders find the right private health insurance.",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Cover4You</h1>
          <p className="text-lg text-gray-400">Helping New Zealanders navigate private health insurance with independent advice and transparent comparisons.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                PrivateHealthInsurance.co.nz is part of the Cover4You Group, a licensed health insurance advisory service dedicated to helping New Zealanders make informed decisions about private health insurance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe every Kiwi deserves access to honest, independent advice about health insurance options — free of charge and without pressure.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-sky-400 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-sky-400 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">Independence</p>
                    <p className="text-gray-400 text-sm">We compare all major providers with no bias.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">Transparency</p>
                    <p className="text-gray-400 text-sm">Clear information, honest recommendations.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">Expertise</p>
                    <p className="text-gray-400 text-sm">Licensed advisers with deep industry knowledge.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-white">Your Interest First</p>
                    <p className="text-gray-400 text-sm">We're paid by providers, not you.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-800 border-y border-gray-700 py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">How the Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">You Contact Us</h3>
              <p className="text-gray-400 text-sm">Fill out our simple form with your details and what you're looking for.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">We Analyse</h3>
              <p className="text-gray-400 text-sm">Our advisers review your situation and compare all major providers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">We Recommend</h3>
              <p className="text-gray-400 text-sm">Receive personalised recommendations with quotes from multiple providers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">You Decide</h3>
              <p className="text-gray-400 text-sm">Take your time, ask questions, and decide what's best for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisers Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Licensed Advisers</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Our team are licensed health insurance professionals with extensive experience in New Zealand's health insurance market. They understand the complexities of different policies, the nuances of health underwriting, and most importantly, how to find the right cover for your specific situation.
          </p>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-sky-400 mb-4">Qualifications & Standards</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-sky-400">✓</span>
                <span>Licensed financial advisers with years of health insurance experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">✓</span>
                <span>Continuously updated training on health insurance products and regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">✓</span>
                <span>Bound by professional conduct standards and ethical requirements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">✓</span>
                <span>Access to current product information from all major health insurers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-400">✓</span>
                <span>Experience with complex health scenarios and pre-existing conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Providers We Work With */}
      <section className="bg-gray-800 py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">We Compare All Major Providers</h2>
          <p className="text-gray-400 text-center mb-12">When you contact us, we compare quotes from all major NZ health insurers:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-white mb-2">Southern Cross Health Society</h3>
              <p className="text-gray-400 text-sm">New Zealand's largest health insurer with comprehensive cover options and strong brand reputation.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-lg font-bold text-white mb-2">nib</h3>
              <p className="text-gray-400 text-sm">Competitive premiums and digital-first approach, particularly popular with younger New Zealanders.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-lg font-bold text-white mb-2">AIA</h3>
              <p className="text-gray-400 text-sm">Global insurer with unique AIA Vitality wellness programme offering premium discounts.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">Partners Life</h3>
              <p className="text-gray-400 text-sm">New Zealand-owned insurer known for comprehensive policy wordings and strong adviser support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Transparent Model</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-sky-400 mb-3">How We Make Money</h3>
              <p className="text-gray-300">When you take out a health insurance policy, the insurer pays us a commission. You pay nothing — our commission is built into the provider's standard pricing.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-sky-400 mb-3">No Pressure to Buy</h3>
              <p className="text-gray-300">We provide information and recommendations, but you're free to take your time deciding, compare elsewhere, or not buy at all. We're here to help, not to pressure you.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-sky-400 mb-3">Why Independent Advice Matters</h3>
              <p className="text-gray-300">Insurance companies employ sales teams with sales targets. We're independent advisers with no targets — our only goal is helping you find the right cover at the right price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Your Options?</h2>
          <p className="text-sky-100 mb-8">Get a free, independent comparison of health insurance options for your situation.</p>
          <Link href="/contact" className="inline-block bg-white hover:bg-gray-100 text-sky-900 font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact an Adviser
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
