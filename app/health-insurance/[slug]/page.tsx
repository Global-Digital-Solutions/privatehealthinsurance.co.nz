import { PROVIDERS } from "../../../data/site";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";

export function generateStaticParams() {
  return PROVIDERS.map((provider) => ({
    slug: provider.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  return {
    title: `${provider?.name} Health Insurance | PrivateHealthInsurance.co.nz`,
    description: `Compare ${provider?.name} health insurance with other major NZ providers. See ratings, pricing, features and customer reviews.`,
  };
}

const providerDetails: Record<
  string,
  {
    tagline: string;
    description: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    coverage: string[];
  }
> = {
  "southern-cross": {
    tagline: "New Zealand's Most Trusted Health Insurer",
    description: "Southern Cross Health Society is New Zealand's largest health insurer, with a not-for-profit structure that means member benefits come first. Covering over 900,000 New Zealanders, they offer comprehensive policies and strong brand reputation.",
    pros: [
      "Largest NZ health insurer with 900,000+ members",
      "Not-for-profit structure — surplus returns to members",
      "Comprehensive policy options including premium cover",
      "Strong financial stability and claims history",
      "Established brand with community trust since 1964",
      "Wide network of private hospitals and specialists",
    ],
    cons: [
      "Often slightly higher premiums than some competitors",
      "Digital experience lags slightly behind newer competitors",
      "Less flexibility in customising policy structures",
      "Premium increases can be higher than others",
    ],
    bestFor: ["Families seeking comprehensive cover", "Those who value not-for-profit structure", "Kiwis wanting established brand security", "Comprehensive policy seekers"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Day-to-Day Cover", "Mental Health Support"],
  },
  nib: {
    tagline: "Competitive Premiums, Digital-First Approach",
    description: "nib is an ASX-listed health insurer that has grown rapidly in New Zealand with a focus on competitive premiums and digital innovation. Known for clear policies and user-friendly digital tools, they're particularly popular with younger New Zealanders.",
    pros: [
      "Highly competitive premiums, especially for young adults",
      "Excellent digital app and online experience",
      "Clear, easy-to-understand policy wording",
      "Fast claims process",
      "Great value for hospital-only cover",
      "Growing market presence in NZ",
    ],
    cons: [
      "Listed company — shareholder focus rather than member-first",
      "Less established in NZ than Southern Cross",
      "Fewer community ties",
      "May have more restrictive underwriting",
    ],
    bestFor: ["Tech-savvy younger members", "Value seekers", "Those wanting simple hospital cover", "Digital-first approach seekers"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Day-to-Day Cover", "Income Protection"],
  },
  aia: {
    tagline: "Asia Pacific's Largest Insurer + Wellness",
    description: "AIA is part of Asia Pacific's largest life insurance group. Their distinctive AIA Vitality wellness programme rewards active, healthy lifestyles with discounts and perks, making it unique in the NZ market.",
    pros: [
      "Unique AIA Vitality programme (up to 15% discounts)",
      "Competitive premiums for active members",
      "Strong global backing and financial stability",
      "Good digital tools and mobile app",
      "Rewards for healthy lifestyle choices",
      "International medical cover options",
    ],
    cons: [
      "Higher base premiums without Vitality engagement",
      "Vitality requires ongoing participation",
      "More complex product structure",
      "Privacy concerns for some with health data sharing",
    ],
    bestFor: ["Health-conscious, active individuals", "Tech-savvy members", "Those who enjoy wellness tracking", "Discount-motivated buyers"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Vitality Wellness Programme", "Income Protection"],
  },
  "partners-life": {
    tagline: "New Zealand-Owned, Comprehensive Coverage",
    description: "Partners Life is a New Zealand-owned insurer founded in 2011. They're known for comprehensive policy wordings, strong adviser relationships, and flexibility in cover customisation.",
    pros: [
      "Comprehensive policy wordings — fewer grey areas",
      "Strong adviser relationships and support",
      "New Zealand-owned and operated",
      "Good claims service reputation",
      "Flexible policy customisation",
      "Growing range of cover options",
    ],
    cons: [
      "Less digital innovation than larger competitors",
      "Smaller company than global insurers",
      "Premiums can be higher for some profiles",
      "Fewer community ties than Southern Cross",
    ],
    bestFor: ["Those wanting comprehensive coverage", "Adviser-supported buyers", "NZ-owned preference seekers", "Complex health scenarios"],
    coverage: ["Hospital & Surgical", "Specialists & Diagnostics", "Cancer Care", "Income Protection", "Business Health"],
  },
};

export default function ProviderPage({ params }: { params: { slug: string } }) {
  const provider = PROVIDERS.find((p) => p.slug === params.slug);
  const details = providerDetails[params.slug];

  if (!provider || !details) {
    return <div className="text-center py-20">Provider not found</div>;
  }

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-6xl">{provider.icon}</div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{provider.name}</h1>
              <p className="text-xl text-sky-400">{details.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="bg-gray-800 border-b border-gray-700 py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">{provider.rating}/5</div>
              <p className="text-gray-400 text-sm">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">{provider.from}</div>
              <p className="text-gray-400 text-sm">Starting Price</p>
            </div>
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-lg ${provider.badgeColor} text-white font-semibold text-sm mb-2`}>{provider.badge}</div>
              <p className="text-gray-400 text-sm">Recognition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">NZ Wide</div>
              <p className="text-gray-400 text-sm">Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">About {provider.name}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{details.description}</p>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Strengths</h3>
                <ul className="space-y-2">
                  {details.pros.map((pro, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-4">Considerations</h3>
                <ul className="space-y-2">
                  {details.cons.map((con, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-amber-400 flex-shrink-0">−</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-12">
              <h3 className="text-lg font-bold text-sky-400 mb-4">Best For</h3>
              <ul className="space-y-2">
                {details.bestFor.map((item, idx) => (
                  <li key={idx} className="text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>

            {/* Coverage Options */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Coverage Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.coverage.map((coverage, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <p className="text-white font-semibold">{coverage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 h-fit sticky top-4">
            <h2 className="text-2xl font-bold text-white mb-4">Get a Quote</h2>
            <p className="text-gray-400 text-sm mb-6">Get a personalised {provider.name} health insurance quote from a licensed adviser.</p>
            <QuoteForm />
            <p className="text-gray-500 text-xs mt-6 text-center">Free service • No obligation • Response within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="bg-gray-800 border-t border-gray-700 py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Compare {provider.name} with Other Providers</h2>
          <p className="text-gray-400 mb-8">See how {provider.name} stacks up against Southern Cross, nib, AIA, and Partners Life.</p>
          <a href="/compare" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View Full Comparison
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
