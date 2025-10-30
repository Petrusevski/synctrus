// src/data/caseStudies.ts
export type Impact = { label: string; value: string; hint?: string };

export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  period: string;
  summary: string;
  problem: string;
  approach: string[];
  impact: Impact[];
  testimonial?: { quote: string; author: string; role?: string };
  image: string;       // public path
  body?: string;       // rich HTML for the detail page
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fashion-tier-lift",
    title: "Fashion retail — tier redesign lifts repeat rate",
    industry: "Fashion",
    period: "Q1–Q2",
    summary:
      "Value-based tiers with boosters replaced legacy cashback. Clear earn/keep logic and seasonal missions.",
    problem:
      "Stagnant repeat rate, high promo cost, and confusing rules leading to low perceived value.",
    approach: [
      "Simulated new tiers vs. margin and liability",
      "Introduced progress-to-benefit and seasonal missions",
      "Guardrails on voucher stacking & expiries",
    ],
    impact: [
      { label: "Repeat rate", value: "+14%", hint: "12-week window" },
      { label: "Promo spend", value: "+1.6%", hint: "no deep discounting" },
      { label: "Liability", value: "↓12%" },
      { label: "NPS", value: "+6" },
    ],
    testimonial: {
      quote:
        "Finally a program our customers understand — and finance loves.",
      author: "CMO",
      role: "Fashion Retail",
    },
    image: "/assets/case-studies/fashion-tier-lift.jpg",
    body: `
      <h2>Context</h2>
      <p>Legacy cashback trained discount-seeking behavior. Tiers were unclear and benefits felt random.</p>
      <h2>What we changed</h2>
      <ul>
        <li>Modeled tiers on value behaviors (new categories, frequency, AOV)</li>
        <li>Added seasonal missions and low-cost experiential perks</li>
        <li>Introduced expiry cadence and soft-landing rules</li>
      </ul>
      <h2>Why it worked</h2>
      <p>Members saw clear progress, finance saw controlled cost, and CX got a stable playbook.</p>
    `,
  },
  // ... keep your other 8 studies, each with image and (optional) body:
  {
    id: "grocery-missions",
    title: "Grocery — receipt missions drive frequency",
    industry: "Grocery",
    period: "8 weeks",
    summary:
      "Receipt-triggered challenges and boosters aligned to categories, with holdout-based measurement.",
    problem: "High weekly traffic variance and low category penetration.",
    approach: [
      "Receipt parsing → category challenges",
      "Switchback test for incrementality",
      "Offer architecture with gentle guardrails",
    ],
    impact: [
      { label: "Frequency", value: "+9%" },
      { label: "Cat. penetration", value: "+11%" },
      { label: "Waste", value: "↓8%" },
      { label: "Decision speed", value: "↑2x", hint: "with KPI book" },
    ],
    image: "/assets/case-studies/grocery-missions.jpg",
    body: `
      <h2>Context</h2>
      <p>Basket variability hid true category gaps. We needed proof of incremental lift.</p>
      <h2>Approach</h2>
      <ul>
        <li>Auto-categorized receipts to trigger contextual missions</li>
        <li>Used switchback design for causal read</li>
        <li>Cap rewards to protect margin</li>
      </ul>
      <h2>Outcome</h2>
      <p>Clear category growth without overpaying for non-incremental baskets.</p>
    `,
  },
  // Pharmacy
  {
    id: "pharmacy-liability",
    title: "Pharmacy — expiries & fraud controls cut liability",
    industry: "Pharmacy",
    period: "Quarter",
    summary:
      "Smart expiries, velocity checks, and partner rule caps reduced liability without hurting NPS.",
    problem: "Ballooning point liability and suspicious earning patterns.",
    approach: [
      "Velocity & anomaly detection",
      "Expiry policies tuned to behavior segments",
      "Partner accrual caps & fair-value exchange",
    ],
    impact: [
      { label: "Liability", value: "↓15%" },
      { label: "Over-earning", value: "↓24%" },
      { label: "NPS", value: "—", hint: "no negative change" },
      { label: "Ops time", value: "↓30%" },
    ],
    image: "/assets/case-studies/pharmacy-liability.jpg",
  },
  // Beauty
  {
    id: "beauty-vip",
    title: "Beauty — VIP refresh boosts AOV",
    industry: "Beauty",
    period: "6 weeks",
    summary:
      "VIP perks reshaped around service experiences; introduced ‘annual moment’ and curated partner benefits.",
    problem:
      "VIP program cannibalized revenue with blanket discounts.",
    approach: [
      "Perk redesign to experiential benefits",
      "One ‘annual moment’ with brand-aligned gift",
      "Partner value via non-margin perks",
    ],
    impact: [
      { label: "AOV", value: "+7%" },
      { label: "VIP churn", value: "↓10%" },
      { label: "Margin impact", value: "Neutral" },
      { label: "Upsell attach", value: "+12%" },
    ],
    image: "/assets/case-studies/beauty-vip.jpg",
  },
  // Hospitality
  {
    id: "hospitality-tiers",
    title: "Hospitality — experiential tiers drive emotional loyalty",
    industry: "Hospitality",
    period: "Quarter",
    summary:
      "Transformed transactional points into experience-based milestones with hidden elite perks.",
    problem:
      "Low differentiation between tiers; members chasing discounts only.",
    approach: [
      "Introduced 'Hidden Tier' accessible by invitation only",
      "Rewarded reviews, referrals, and social proof",
      "Predictive upgrades for surprise-and-delight",
    ],
    impact: [
      { label: "Direct bookings", value: "+22%" },
      { label: "Referral rate", value: "+15%" },
      { label: "Tier satisfaction", value: "+9 NPS" },
    ],
    image: "/assets/case-studies/hospitality-tiers.jpg",
  },
  // Telecom
  {
    id: "telco-tier-engagement",
    title: "Telco — data-driven engagement prevents churn",
    industry: "Telecom",
    period: "Quarter",
    summary:
      "Predictive churn scoring triggers personalized retention missions and cross-service rewards.",
    problem:
      "High churn among mid-tier prepaid users; weak cross-sell to home services.",
    approach: [
      "Churn model to identify at-risk users",
      "Retention missions (on-time payment streak → bonus GB)",
      "Bundle-tied tier rewards (mobile + broadband)",
    ],
    impact: [
      { label: "Churn", value: "↓11%" },
      { label: "Cross-service adoption", value: "+17%" },
      { label: "Retention cost", value: "↓8%" },
    ],
    image: "/assets/case-studies/telco-tier-engagement.jpg",
  },
  // Fitness
  {
    id: "fitness-gamified",
    title: "Fitness — gamified rewards increase active days",
    industry: "Fitness",
    period: "12 weeks",
    summary:
      "Weekly challenges and ‘streak boosters’ gamified attendance; top tiers got local partner perks.",
    problem:
      "Members commit to yearly plans but go inactive after month two.",
    approach: [
      "Streak tracking and social leaderboard",
      "‘Move Tokens’ redeemable at partners",
      "Top 1% VIP access to retreat events",
    ],
    impact: [
      { label: "Active users", value: "+28%" },
      { label: "Retention after 90d", value: "+19%" },
      { label: "Partnership value", value: "+11%" },
    ],
    image: "/assets/case-studies/fitness-gamified.jpg",
  },
  // Airlines
  {
    id: "airlines-experience",
    title: "Airlines — emotional loyalty beyond miles",
    industry: "Airlines",
    period: "H1",
    summary:
      "Transformed legacy miles into 'experience credits' tied to journey moments.",
    problem:
      "Mileage fatigue and weak tier differentiation.",
    approach: [
      "Experience credits tied to trip completion & reviews",
      "Surprise lounge invites and personal notes",
      "Tier challenges with milestone unlocks",
    ],
    impact: [
      { label: "Tier progression", value: "+18%" },
      { label: "Emotional NPS", value: "+12%" },
      { label: "Program advocacy", value: "+15%" },
    ],
    image: "/assets/case-studies/airlines-experience.jpg",
  },
  // Supermarkets
  {
    id: "supermarket-family",
    title: "Supermarket — family accounts drive shared engagement",
    industry: "Supermarkets",
    period: "2 months",
    summary:
      "Shared wallets and family missions combine receipts and collective rewards.",
    problem:
      "Low basket frequency among households despite high individual spenders.",
    approach: [
      "Family-linked accounts with pooled points",
      "Group missions (e.g. shop-together weekends)",
      "Collective progress badges & leaderboards",
    ],
    impact: [
      { label: "Household frequency", value: "+13%" },
      { label: "Basket size", value: "+10%" },
      { label: "Program engagement", value: "+22%" },
    ],
    image: "/assets/case-studies/supermarket-family.jpg",
  },
];
