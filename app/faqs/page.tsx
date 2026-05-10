import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "FAQs | Private Health Insurance NZ",
  description: "Frequently asked questions about private health insurance in New Zealand. Get answers to your health insurance questions.",
};

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "Why should I get private health insurance in New Zealand?",
        a: "Private health insurance helps you skip public waiting lists, which can stretch to 6-24 months for elective surgery. It gives you choice of specialist, access to non-Pharmac drugs, faster diagnosis, and peace of mind. Particularly valuable if you need planned surgery, are diagnosed with cancer, or want choice of provider.",
      },
      {
        q: "Do I need private health insurance if I have ACC cover?",
        a: "ACC covers accidental injuries only. It doesn't cover illnesses like cancer, heart disease, diabetes, or other medical conditions. Private health insurance covers these illness-related conditions that ACC excludes. Ideally, you want both layers of protection.",
      },
      {
        q: "What's the difference between public and private healthcare in New Zealand?",
        a: "Public healthcare is free (tax-funded) but has long waiting lists. You get treated when the system has capacity. Private healthcare means you choose when and where to be treated, which specialist treats you, and you don't wait on public lists. Private health insurance helps you access private treatment.",
      },
    ],
  },
  {
    category: "Costs & Premiums",
    items: [
      {
        q: "How much does private health insurance cost in New Zealand?",
        a: "Hospital-only cover costs from $60-$100/month for someone in their 20s, up to $200-$400/month for someone over 65. Comprehensive cover (including specialists, day-to-day, cancer) typically costs $120-$200/month for younger people. Premiums depend on your age, health, excess chosen, and provider.",
      },
      {
        q: "What's an excess and how does it affect my premiums?",
        a: "An excess is the amount you pay out-of-pocket before insurance kicks in. Higher excess = lower premiums. For example, a $1,000 excess typically costs 25-30% less than a $250 excess. Choose an excess you could comfortably pay from savings.",
      },
      {
        q: "Do premiums increase every year?",
        a: "Yes. All NZ health insurers increase premiums annually by around 5-10%, driven by healthcare inflation, claims frequency, and ageing membership. Southern Cross typically increases on 1 April each year.",
      },
    ],
  },
  {
    category: "Coverage & Claims",
    items: [
      {
        q: "What does private health insurance actually cover?",
        a: "Hospital cover pays for planned surgery, hospital stays, specialist fees, and anaesthetist costs. Comprehensive policies add specialists, diagnostics (MRI, CT scans), cancer treatment, and day-to-day benefits (GP visits, prescriptions, dental, optical). Non-Pharmac drugs are covered by premium policies.",
      },
      {
        q: "Will my pre-existing conditions be covered?",
        a: "It depends. Most insurers will either exclude pre-existing conditions, apply a waiting period, or accept you with a premium loading. Some use 'moratorium underwriting' where conditions you've had in the past 5 years are excluded for 2-5 years. Work with an adviser to understand your options.",
      },
      {
        q: "Are there waiting periods before I can claim?",
        a: "Yes. Most policies have a 2-3 month general waiting period for new conditions. Some conditions (mental health, dental, maternity) have longer waiting periods of 6 months to 2 years. Accidents are usually covered immediately.",
      },
      {
        q: "What about mental health cover?",
        a: "Mental health cover is increasingly included in comprehensive policies. It typically covers psychiatric consultations and sometimes psychological therapy. Check the specific limits as some policies cap the number of sessions or annual spending.",
      },
    ],
  },
  {
    category: "Choosing a Provider",
    items: [
      {
        q: "Which NZ health insurer is best?",
        a: "There's no 'best' — it depends on your situation. Southern Cross suits families wanting comprehensive cover. nib suits value seekers wanting simple hospital cover. AIA suits health-conscious people wanting wellness rewards. Partners Life suits those wanting comprehensive wordings. Get quotes from all four.",
      },
      {
        q: "Should I switch health insurers?",
        a: "Switching can save money if you've had premium increases, but check the risks. When switching, request a 'transfer of cover' option to preserve your no-claims history and avoid new exclusions. Don't cancel your old policy until the new one is confirmed.",
      },
      {
        q: "What's the difference between Southern Cross, nib, AIA, and Partners Life?",
        a: "Southern Cross is NZ's largest (not-for-profit, strong brand, comprehensive cover but slightly higher premiums). nib offers competitive value and digital-first experience. AIA has Vitality wellness programme with premium discounts. Partners Life is NZ-owned with comprehensive policy wordings.",
      },
    ],
  },
  {
    category: "Special Situations",
    items: [
      {
        q: "Can I get health insurance as a senior (over 65)?",
        a: "Yes, but premiums increase significantly with age. All major insurers cover seniors, though some have age-out provisions (typically 75 or 80). Getting insurance young and maintaining it is the best strategy. Check for age provisions before buying.",
      },
      {
        q: "What health insurance should self-employed people get?",
        a: "Self-employed Kiwis need both health insurance and income protection since there's no sick leave safety net. Income protection covers 75% of income if you can't work. Income protection premiums may be tax-deductible. Combine with hospital cover for complete protection.",
      },
      {
        q: "Should I insure my children?",
        a: "Yes. Children's cover is cheap ($0-$30/month per child) and valuable. Getting insurance young protects future insurability — conditions developed in childhood won't become pre-existing exclusions as an adult. Most parents add kids to their policy.",
      },
      {
        q: "Can I get business health insurance for my employees?",
        a: "Yes. Group health policies offer employee discounts (5-15% vs individual rates) and are valuable staff benefits. Premiums are tax-deductible as a business expense. Review annually to stay competitive.",
      },
    ],
  },
  {
    category: "Health & Underwriting",
    items: [
      {
        q: "Will I be rejected for health insurance because of my health?",
        a: "Unlikely. Most insurers use medical underwriting — they'll either accept you with full cover, exclude specific conditions, accept with a premium loading, or use moratorium underwriting. Very few people are outright rejected. An adviser can help navigate this.",
      },
      {
        q: "What's the difference between Pharmac-funded and non-Pharmac drugs?",
        a: "Pharmac-funded drugs are subsidised by the government — you pay $5 per prescription. Non-Pharmac drugs aren't funded by Pharmac and can cost $50,000-$300,000/year (e.g., cancer immunotherapy drugs). Health insurance with non-Pharmac cover protects against these massive costs.",
      },
      {
        q: "How important is cancer cover?",
        a: "Very important. 1 in 3 New Zealanders get diagnosed with cancer. Public funding covers Pharmac-funded treatments, but newer cancer drugs often aren't funded by Pharmac. Non-Pharmac drug cover in your health insurance can be worth $100,000+ for treatment costs.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Find answers to common questions about private health insurance in New Zealand.</p>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {faqs.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-2xl lg:text-3xl font-bold text-sky-400 mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.items.map((faq, fIdx) => (
                    <details key={fIdx} className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-sky-500 transition-colors">
                      <summary className="px-6 py-4 cursor-pointer font-semibold text-white flex items-center justify-between">
                        {faq.q}
                        <span className="group-open:rotate-180 transition-transform flex-shrink-0 ml-4">▼</span>
                      </summary>
                      <div className="px-6 pb-4 text-gray-300 border-t border-gray-700 pt-4">{faq.a}</div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions? */}
      <section className="bg-gray-800 border-t border-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8">Our licensed advisers are happy to answer any questions about health insurance. Reach out — no obligation.</p>
          <Link href="/contact" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
