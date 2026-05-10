import { PROVIDERS } from "../../data/site";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

export const metadata = {
  title: "Compare Private Health Insurance Providers | PrivateHealthInsurance.co.nz",
  description: "Compare Southern Cross, nib, AIA, and Partners Life side-by-side. See ratings, pricing, and features to find the best NZ health insurer for you.",
};

export default function ComparePage() {
  const features = [
    { name: "Hospital & Surgical", southern: true, nib: true, aia: true, partners: true },
    { name: "Specialists & Diagnostics", southern: true, nib: true, aia: true, partners: true },
    { name: "Cancer Cover (with Non-Pharmac)", southern: true, nib: true, aia: true, partners: true },
    { name: "Day-to-Day Cover", southern: true, nib: true, aia: true, partners: true },
    { name: "Income Protection", southern: false, nib: true, aia: true, partners: true },
    { name: "Wellness Programme", southern: false, nib: false, aia: true, partners: false },
    { name: "Digital App", southern: true, nib: true, aia: true, partners: true },
    { name: "24/7 Support", southern: true, nib: true, aia: true, partners: true },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Compare Health Insurance Providers</h1>
          <p className="text-lg text-gray-400">See how New Zealand's major health insurers stack up on price, features, and coverage.</p>
        </div>
      </section>

      {/* Provider Overview Cards */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {PROVIDERS.map((provider) => (
              <div key={provider.slug} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="text-4xl mb-4">{provider.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{provider.name}</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating</span>
                    <span className="text-yellow-400 font-semibold">{provider.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">From</span>
                    <span className="text-sky-400 font-semibold">{provider.from}/month</span>
                  </div>
                  <div className={`mt-3 px-3 py-1 rounded text-white text-xs font-semibold text-center ${provider.badgeColor}`}>
                    {provider.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">Southern Cross</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">nib</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">AIA</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">Partners Life</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                    <td className="text-center py-4 px-4">{feature.southern ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.nib ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.aia ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                    <td className="text-center py-4 px-4">{feature.partners ? <span className="text-green-400 font-bold">✓</span> : <span className="text-gray-600">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Provider Details */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Provider Profiles</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Southern Cross Health Society</h3>
              <p className="text-gray-400 mb-4">New Zealand's largest health insurer with over 900,000 members. Not-for-profit structure means focus on member benefits rather than shareholder returns.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Market Share:</span> <span className="text-white font-semibold">~60%</span></div>
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">1964</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Not-for-profit</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Families, Comprehensive</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">nib</h3>
              <p className="text-gray-400 mb-4">ASX-listed health insurer known for competitive pricing and digital-first approach. Strong growth in NZ market particularly among younger members.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Market Share:</span> <span className="text-white font-semibold">~15%</span></div>
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">2000</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Listed Company</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Value, Digital Natives</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AIA</h3>
              <p className="text-gray-400 mb-4">Part of Asia's largest life insurance group. Distinctive AIA Vitality wellness programme offers premium discounts for active, healthy lifestyles.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Market Share:</span> <span className="text-white font-semibold">~12%</span></div>
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">1919 (Global)</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Listed Company</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Health-Conscious, Wellness</span></div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Partners Life</h3>
              <p className="text-gray-400 mb-4">New Zealand-owned insurer founded in 2011. Known for comprehensive policy wordings and strong adviser relationships.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Market Share:</span> <span className="text-white font-semibold">~8%</span></div>
                <div><span className="text-gray-500">Established:</span> <span className="text-white font-semibold">2011</span></div>
                <div><span className="text-gray-500">Structure:</span> <span className="text-white font-semibold">Private Company</span></div>
                <div><span className="text-gray-500">Best For:</span> <span className="text-white font-semibold">Comprehensive Cover, NZ-Owned</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-900 to-sky-800 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let Us Compare For You</h2>
              <p className="text-sky-100 mb-4">Our licensed advisers will compare all four providers for your specific situation and find the best value.</p>
              <ul className="space-y-2 text-sky-100 text-sm">
                <li>✓ Free comparison service</li>
                <li>✓ Quotes within 24 hours</li>
                <li>✓ No obligation</li>
                <li>✓ Licensed advisers</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-5 rounded-lg p-8 border border-sky-400 border-opacity-30">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
