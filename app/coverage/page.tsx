import Link from "next/link";
import { COVERAGE_TYPES } from "../../data/coverage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Health Insurance Coverage Types | PrivateHealthInsurance.co.nz",
  description: "Explore all types of private health insurance coverage in New Zealand — from hospital and surgical to cancer care, specialists, and more.",
};

export default function CoveragePage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Health Insurance Coverage Types</h1>
          <p className="text-lg text-gray-400">Understand what each type of coverage protects and find the right mix for your needs.</p>
        </div>
      </section>

      {/* Coverage Cards Grid */}
      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_TYPES.map((coverage) => (
              <Link key={coverage.slug} href={`/coverage/${coverage.slug}`}>
                <div className="group bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-sky-500 transition-all cursor-pointer h-full">
                  <div className="text-4xl mb-3">{coverage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{coverage.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{coverage.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sky-400 font-semibold">From {coverage.from}/month</span>
                    <span className="text-gray-500 group-hover:text-sky-400 transition-colors">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 border-t border-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Compare?</h2>
          <p className="text-gray-400 mb-8">Get a free quote from our licensed advisers within 24 hours.</p>
          <Link href="/contact" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
