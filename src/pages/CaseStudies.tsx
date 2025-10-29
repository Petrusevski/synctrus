import { useMemo, useState } from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import Container from "../components/ui/Container";

type Study = Parameters<typeof CaseStudyCard>[0]["study"];

const STUDIES: Study[] = [
  {
    id: "fashion-tier-lift",
    title: "Fashion retail — tier redesign lifts repeat rate",
    industry: "Fashion",
    period: "Q1–Q2",
    summary: "Value-based tiers with boosters replaced legacy cashback. Clear earn/keep logic and seasonal missions.",
    problem: "Stagnant repeat rate, high promo cost, and confusing rules leading to low perceived value.",
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
    testimonial: { quote: "Finally a program our customers understand — and finance loves.", author: "CMO", role: "Fashion Retail" },
  },
  {
    id: "grocery-missions",
    title: "Grocery — receipt missions drive frequency",
    industry: "Grocery",
    period: "8 weeks",
    summary: "Receipt-triggered challenges and boosters aligned to categories, with holdout-based measurement.",
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
    testimonial: { quote: "The ops cadence made results obvious in week 2.", author: "Head of CRM", role: "Grocery" },
  },
  {
    id: "pharmacy-liability",
    title: "Pharmacy — expiries & fraud controls cut liability",
    industry: "Pharmacy",
    period: "Quarter",
    summary: "Smart expiries, velocity checks, and partner rule caps reduced liability without hurting NPS.",
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
  },
  {
    id: "beauty-vip",
    title: "Beauty — VIP refresh boosts AOV",
    industry: "Beauty",
    period: "6 weeks",
    summary: "VIP perks reshaped around service experiences; introduced ‘annual moment’ and curated partner benefits.",
    problem: "VIP program cannibalized revenue with blanket discounts.",
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
  },
];

const FILTERS = ["All", "Fashion", "Grocery", "Pharmacy", "Beauty"];

export default function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? STUDIES : STUDIES.filter(s => s.industry === filter)),
    [filter]
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-neutral-50">
        <Container className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4">Case Studies</h1>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto">
            A few snapshots of how we design, fix, and prove loyalty impact. Each engagement ships with a 90-day plan and a measurement path.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full border text-sm transition ${
                  filter === f
                    ? "bg-black text-white border-black"
                    : "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section>
        <Container className="py-12">
          {/* xl: 4 in a row, lg: 2×2 square, equal heights */}
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
            {visible.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50">
        <Container className="py-16">
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
            <div className="rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">Want a result like these?</h2>
                <p className="text-neutral-600 mt-1">
                  Start with a 2-week Diagnostic Sprint. You’ll get a scorecard, quick wins, and a 90-day plan.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900"
              >
                Talk to us →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
