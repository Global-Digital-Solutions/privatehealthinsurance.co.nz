export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  keyBenefits: string[];
  from: string;
}

export const COVERAGE_TYPES: CoverageType[] = [
  {
    slug: "hospital-surgical",
    title: "Hospital & Surgical",
    icon: "🏥",
    shortDesc: "Skip public waiting lists for planned surgery and specialist hospital care.",
    description: "Hospital and surgical cover is the most important type of private health insurance in New Zealand. It covers the cost of planned surgery, specialist consultations, and hospital stays — so you can skip public waiting lists and get treated on your schedule.",
    keyBenefits: ["Planned surgery cover", "Private hospital room", "Specialist consultations", "Anaesthetist fees", "Skip public waiting lists"],
    from: "$60",
  },
  {
    slug: "comprehensive-health",
    title: "Comprehensive Health",
    icon: "💊",
    shortDesc: "Full cover including hospital, specialists, everyday health, and more.",
    description: "Comprehensive health insurance bundles hospital cover with everyday medical benefits — GP visits, prescription drugs, dental, optical, and more. It's the most complete health insurance option available in NZ.",
    keyBenefits: ["Hospital & surgical", "GP visits", "Prescriptions", "Dental & optical", "Mental health support"],
    from: "$120",
  },
  {
    slug: "cancer-care",
    title: "Cancer Care",
    icon: "🎗️",
    shortDesc: "Access to the latest cancer treatments and non-Pharmac drugs.",
    description: "Cancer cover gives you access to the latest treatments — including non-Pharmac drugs that can cost tens of thousands of dollars. With cancer affecting 1 in 3 New Zealanders, this is critical cover.",
    keyBenefits: ["Chemotherapy & radiation", "Non-Pharmac drugs", "Specialist oncologist", "Clinical trials", "Support services"],
    from: "$25",
  },
  {
    slug: "specialist-diagnostics",
    title: "Specialist & Diagnostics",
    icon: "🔬",
    shortDesc: "Fast access to specialists and diagnostic tests without the public wait.",
    description: "Specialist and diagnostics cover funds private specialist consultations, MRI scans, CT scans, X-rays, and other diagnostic procedures — giving you fast answers and peace of mind.",
    keyBenefits: ["Private specialist access", "MRI & CT scans", "X-rays & ultrasounds", "Lab tests", "Fast appointments"],
    from: "$35",
  },
  {
    slug: "day-to-day-cover",
    title: "Day-to-Day Cover",
    icon: "📋",
    shortDesc: "Claim back everyday health costs like GP visits and prescriptions.",
    description: "Day-to-day or everyday health cover reimburses routine medical expenses — GP visits, prescriptions, dental, optical, and physiotherapy. Helps reduce the financial burden of regular healthcare.",
    keyBenefits: ["GP consultation rebates", "Prescription subsidies", "Physio & osteopath", "Dental check-ups", "Optical allowance"],
    from: "$30",
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    icon: "💼",
    shortDesc: "Replace your income if illness or injury stops you from working.",
    description: "Income protection insurance pays a monthly benefit — typically 75% of your salary — if you're unable to work due to illness or injury. Essential for self-employed Kiwis and those without sick leave.",
    keyBenefits: ["Up to 75% of income", "Monthly benefit payments", "Illness & injury cover", "Waiting period options", "Long-term cover available"],
    from: "$45",
  },
  {
    slug: "business-health",
    title: "Business Health",
    icon: "🏢",
    shortDesc: "Group health insurance for your team — a tax-effective employee benefit.",
    description: "Group business health insurance covers your employees and their families. It's a valuable staff benefit that improves retention and productivity — and premiums are often tax-deductible.",
    keyBenefits: ["Group discounts available", "Employee wellness", "Tax-deductible premiums", "Customisable cover levels", "Quick claims process"],
    from: "$55",
  },
  {
    slug: "life-insurance",
    title: "Life Insurance",
    icon: "🛡️",
    shortDesc: "Protect your family's financial future if the worst happens.",
    description: "Life insurance provides a lump sum payment to your family if you pass away. Combined with health insurance, it gives your loved ones financial security when they need it most.",
    keyBenefits: ["Lump sum on death", "Terminal illness benefit", "Trauma cover add-on", "Fixed or level premiums", "Family protection"],
    from: "$20",
  },
];

export const FOR_YOU_SEGMENTS = [
  { slug: "individuals", title: "Individuals", icon: "👤", desc: "Tailored cover for your personal health needs and budget." },
  { slug: "families", title: "Families", icon: "👨‍👩‍👧‍👦", desc: "Protect your whole family with a single comprehensive policy." },
  { slug: "seniors", title: "Seniors", icon: "🧓", desc: "Specialist cover for over-65s — no age-out surprises." },
  { slug: "self-employed", title: "Self-Employed", icon: "💼", desc: "Income protection and health cover when sick leave isn't an option." },
  { slug: "business-owners", title: "Business Owners", icon: "🏢", desc: "Group health plans that attract and retain great staff." },
  { slug: "new-to-nz", title: "New to NZ", icon: "🇳🇿", desc: "Understand the NZ health system and get covered fast." },
];
