import { FOR_YOU_SEGMENTS } from "../../../data/coverage";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import QuoteForm from "../../components/QuoteForm";

export function generateStaticParams() {
  return FOR_YOU_SEGMENTS.map((segment) => ({
    slug: segment.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const segment = FOR_YOU_SEGMENTS.find((s) => s.slug === slug);
  return {
    title: `${segment?.title} Health Insurance | PrivateHealthInsurance.co.nz`,
    description: segment?.desc,
  };
}

const segmentContent: Record<string, { title: string; intro: string; keyPoints: string[]; recommendations: string[] }> = {
  individuals: {
    title: "Health Insurance for Individuals",
    intro: "As an individual, private health insurance gives you personal control over your healthcare decisions and access to treatment on your timeline.",
    keyPoints: [
      "Choose your excess to match your budget and risk tolerance",
      "Start with hospital and surgical cover — the most cost-effective foundation",
      "Add cancer cover to protect against catastrophic costs",
      "Consider day-to-day cover if you have frequent GP visits or prescriptions",
    ],
    recommendations: [
      "Hospital & Surgical: Essential starting point",
      "Specialists & Diagnostics: Valuable for fast diagnosis",
      "Cancer Cover: Critical given 1 in 3 Kiwis get cancer",
      "Consider higher excess ($500-$1,000) to reduce premiums",
    ],
  },
  families: {
    title: "Health Insurance for Families",
    intro: "Protect your whole family with comprehensive private health insurance. Family policies offer discounts and ensure everyone has access to quality private healthcare.",
    keyPoints: [
      "Children's cover is very affordable — often free or under $20/month",
      "Family discounts typically save 5-15% vs individual policies",
      "Hospital cover is essential for all family members",
      "Review cover annually as your family circumstances change",
    ],
    recommendations: [
      "Hospital & Surgical: Essential for all family members",
      "Specialists: Valuable when children develop conditions",
      "Cancer Cover: Protects the entire family",
      "Take advantage of free or low-cost children's premiums",
    ],
  },
  seniors: {
    title: "Health Insurance for Seniors",
    intro: "For over-65s, private health insurance provides access to faster diagnosis and treatment at a time when health needs typically increase.",
    keyPoints: [
      "Premiums increase significantly with age — starting early is best",
      "Check for age-out provisions in your policy",
      "Joint replacements and eye surgery often justify the cost",
      "Maintain cover to avoid new exclusions when applying later",
    ],
    recommendations: [
      "Hospital & Surgical: Critical for orthopaedic and eye surgery",
      "Specialists & Diagnostics: Fast diagnosis is valuable at any age",
      "Cancer Cover: Increasingly important with age",
      "Consider higher excess to manage premium increases",
    ],
  },
  "self-employed": {
    title: "Health Insurance for Self-Employed",
    intro: "Without employer sick leave, self-employed Kiwis need both health insurance and income protection to manage the financial impact of illness or injury.",
    keyPoints: [
      "Income protection insurance replaces 75% of your income if you can't work",
      "Hospital cover ensures illness doesn't force you into public waiting lists",
      "Income protection premiums may be tax-deductible for self-employed",
      "Quick access to specialists means quicker diagnosis and return to work",
    ],
    recommendations: [
      "Hospital & Surgical: Essential when there's no sick leave safety net",
      "Income Protection: Critical — covers 75% of income during illness",
      "Specialists & Diagnostics: Fast access minimises time off work",
      "Combination of health + income protection is ideal",
    ],
  },
  "business-owners": {
    title: "Health Insurance for Business Owners",
    intro: "Group health insurance for your team is a valuable staff benefit that improves retention and productivity — and premiums are often tax-deductible.",
    keyPoints: [
      "Group health policies offer employee discounts vs individual rates",
      "Improves staff retention and morale",
      "Business premiums are tax-deductible as an employee benefit",
      "Covers employees and their families",
    ],
    recommendations: [
      "Hospital & Surgical: Foundation group benefit",
      "Comprehensive Cover: Shows employees you value their wellbeing",
      "Negotiate group discounts with providers",
      "Review annually to ensure competitiveness",
    ],
  },
  "new-to-nz": {
    title: "Health Insurance for New Immigrants",
    intro: "Moving to New Zealand? Understanding the NZ health system and getting private health insurance early ensures you're protected from day one.",
    keyPoints: [
      "NZ has a public health system, but waiting lists can be long",
      "As a new resident, you have immediate access to public healthcare",
      "Private insurance gives you choice and faster access",
      "Getting insurance early prevents pre-existing exclusions",
    ],
    recommendations: [
      "Hospital & Surgical: Start with this essential cover",
      "Specialists & Diagnostics: Valuable for fast diagnosis",
      "Consider comprehensive cover to understand all options",
      "Apply early to avoid future exclusions for conditions developed after arrival",
    ],
  },
};

export default async function ForYouPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const segment = FOR_YOU_SEGMENTS.find((s) => s.slug === slug);
  const content = segmentContent[slug];

  if (!segment || !content) {
    return <div className="text-center py-20">Segment not found</div>;
  }

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{segment.icon}</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">{content.title}</h1>
          </div>
          <p className="text-lg text-gray-400">{content.intro}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Why It Matters</h2>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Key Considerations</h3>
              <ul className="space-y-3">
                {content.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-sky-400 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sky-400 mb-4">Our Recommendations</h3>
              <ul className="space-y-3">
                {content.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-sky-400 flex-shrink-0">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote Form Sidebar */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 h-fit">
            <h2 className="text-2xl font-bold text-white mb-6">Get Your Quote</h2>
            <p className="text-gray-400 text-sm mb-6">Get a personalised quote for {segment.title.toLowerCase()} health insurance.</p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 py-16 lg:py-20 px-4 lg:px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-lg font-semibold text-white mb-2">Free Service</h3>
              <p className="text-gray-400 text-sm">Our service is completely free. Advisers are paid by providers, not you.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Independent</h3>
              <p className="text-gray-400 text-sm">We compare all major providers — Southern Cross, nib, AIA, Partners Life.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Quotes</h3>
              <p className="text-gray-400 text-sm">Get a personalised quote within 24 hours. No waiting around.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
