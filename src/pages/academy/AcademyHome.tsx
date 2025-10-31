import { useMemo, useState } from "react";
import Reveal from "../../components/Reveal";
import CourseCard from "../../components/lms/CourseCard";
import { courses } from "../../lms/data";
import { coursePct } from "../../lms/progress";

export default function AcademyHome() {
  // (Kept for future use / parity with your original file)
  const advancedTracks = [
    {
      title: "Build Customer Journeys",
      emoji: "🧭",
      description:
        "Design automated, personalized journeys that guide customers from onboarding to retention.",
      subcourses: [
        { title: "Journey Mapping & Lifecycle Design", slug: "journey-mapping" },
        { title: "Behavioral Triggers & Frequency Caps", slug: "behavioral-triggers" },
        { title: "Multi-Channel Journey Orchestration", slug: "journey-orchestration" },
        { title: "Reactivation & Win-Back Flows", slug: "winback-flows" },
        { title: "Measuring Journey Performance", slug: "journey-measurement" },
      ],
    },
    {
      title: "Loyalty Automations",
      emoji: "⚙️",
      description:
        "Turn loyalty rules into living automations with workflows, triggers, and multi-channel logic.",
      subcourses: [
        { title: "Make.com Loyalty Blueprints", slug: "make-blueprints" },
        { title: "n8n Loyalty Journeys", slug: "n8n-loyalty" },
        { title: "CRM & POS Integration Layer", slug: "crm-pos-integration" },
        { title: "Fraud Detection & Velocity Checks", slug: "fraud-detection" },
        { title: "Advanced Scheduling & Throttling", slug: "scheduling-throttling" },
      ],
    },
    {
      title: "AI for Loyalty Programs",
      emoji: "🤖",
      description:
        "Use machine learning and AI agents to personalize, predict, and optimize loyalty engagement.",
      subcourses: [
        { title: "Predictive Segmentation Models", slug: "predictive-segmentation" },
        { title: "Dynamic Reward Recommendations", slug: "dynamic-rewards" },
        { title: "LTV Prediction & Cohort Forecasting", slug: "ltv-forecasting" },
        { title: "AI-Assisted Content & Copy", slug: "ai-copy" },
        { title: "Context-as-a-Service for Loyalty Agents", slug: "caas-loyalty" },
      ],
    },
  ];

  // -------------------------
  // Case Studies Data & State
  // -------------------------
  const caseStudies = [
    {
      slug: "retail-fashion-tier-stall",
      emoji: "🧥",
      title: "Tier Stall in Fashion Retail",
      industry: "Retail Fashion",
      difficulty: "Intermediate",
      problem:
        "Members rarely progress beyond mid-tier despite frequent campaigns. Upgrade rates are flat and repeat purchase velocity dips after month 2.",
      kpis: ["Tier Upgrades", "Repeat Rate", "ARPU"],
      prompts: [
        "Diagnose root causes behind tier stagnation (customer behavior + mechanic design).",
        "Propose two interventions (e.g., dynamic tier XP, milestone perks).",
        "Define a minimal experiment and the success metrics you’d track."
      ],
      rubric: [
        "Root-cause clarity",
        "Mechanic–behavior fit",
        "KPI linkage",
        "Testability",
        "Risk & fraud controls"
      ],
      hint:
        "Consider milestone-based boosts (first 60 days) + AI-driven next-best-action nudges tied to SKU affinity and price sensitivity."
    },
    {
      slug: "telco-cashback-forgotten",
      emoji: "📶",
      title: "Forgotten Cashback in Telco",
      industry: "Telecom",
      difficulty: "Beginner",
      problem:
        "Cashback accrues on bill payments but redemption is minimal; customers forget or cannot see value.",
      kpis: ["Redemption Rate", "MAU", "Churn Risk"],
      prompts: [
        "Map a reminder orchestration across channels (push, SMS, email, wallet).",
        "Recommend a small ‘use-it-or-lose-it’ mechanic or gamified streak.",
        "How will you prevent abuse and cap incentives?"
      ],
      rubric: ["Journey design", "Channel fit", "Behavioral nudges", "Safeguards"],
      hint:
        "Time-bound boosters and wallet balance previews at login can create urgency. Try lock/unlock mini-quests to surface value."
    },
    {
      slug: "hospitality-upgrade-apathy",
      emoji: "🏨",
      title: "Upgrade Apathy in Hospitality",
      industry: "Hospitality",
      difficulty: "Advanced",
      problem:
        "Guests collect points but do not redeem for upgrades or experiences; emotional loyalty is weak.",
      kpis: ["Redemption Rate", "NPS", "Repeat Bookings"],
      prompts: [
        "Design an ‘experience graph’ that matches profiles to surprise & delight perks.",
        "Propose a redemption UX that emphasizes status moments.",
        "How will you attribute uplift to the mechanic (experiment plan)?"
      ],
      rubric: ["Emotional design", "UX framing", "Attribution plan", "ROI logic"],
      hint:
        "Bundle micro-perks with status ceremonies (early check-in, lounge tokens). Highlight social proof and ‘belonging’ cues."
    },
    {
      slug: "sports-offseason-cliff",
      emoji: "⚽",
      title: "Off-Season Engagement Cliff",
      industry: "Sports Club",
      difficulty: "Intermediate",
      problem:
        "Engagement spikes on match days but collapses off-season; membership renewals soften.",
      kpis: ["DAU/WAU", "Renewal Rate", "Content CTR"],
      prompts: [
        "Craft an off-season content cadence with challenges and lore.",
        "Add partner offers without diluting club identity.",
        "Which fan segments get what missions and why?"
      ],
      rubric: ["Seasonality solve", "Partner alignment", "Segmentation logic"],
      hint:
        "Use trivia ladders, archive moments, academy reports, and fantasy-style mini-leagues to keep rituals alive."
    },
    {
      slug: "beauty-cross-branch-friction",
      emoji: "💅",
      title: "Cross-Branch Friction in Beauty",
      industry: "Beauty & Wellness",
      difficulty: "Beginner",
      problem:
        "Customers’ points and vouchers are inconsistent across branches; redemption UX is confusing at POS.",
      kpis: ["Redemption Success", "Cross-Branch Usage", "CSAT"],
      prompts: [
        "Propose a unified ID and wallet view tied to CRM + POS.",
        "Define a simple earn/burn policy all branches can follow.",
        "Outline a pilot plan for 2 branches with rollout criteria."
      ],
      rubric: ["Data unification", "Policy clarity", "Pilot pragmatism"],
      hint:
        "Start with a single member ID (QR/Wallet pass), shared voucher ledger, and branch-agnostic limits to reduce edge cases."
    }
  ];

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const industries = useMemo(
    () => Array.from(new Set(caseStudies.map((c) => c.industry))),
    []
  );

  const filteredCases = useMemo(() => {
    return caseStudies.filter((c) => {
      const matchSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.problem.toLowerCase().includes(search.toLowerCase());
      const matchIndustry = !industry || c.industry === industry;
      const matchDifficulty = !difficulty || c.difficulty === difficulty;
      return matchSearch && matchIndustry && matchDifficulty;
    });
  }, [search, industry, difficulty]);

  function onSubmit(slug: string) {
    // Placeholder: hook to a modal or route
    // e.g., navigate(`/academy/case-studies/${slug}/submit`);
    alert(`Submit flow coming soon for: ${slug}`);
  }

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="kicker">Synctrus Academy</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Learn Loyalty — from basics to advanced strategy
            </h1>
            <p className="text-neutral-600 mt-4">
              Short, practical modules built from real programs we’ve shipped.
              Track progress, take quizzes, and earn completion badges.
            </p>
          </div>
        </Reveal>

        {/* Core courses grid */}
        <Reveal delay={80}>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {courses.map((c) => (
              <CourseCard
                key={c.slug}
                to={`/academy/course/${c.slug}`}
                title={c.title}
                subtitle={c.subtitle}
                level={c.level}
                est={c.est}
                emoji={c.heroEmoji}
                pct={coursePct(c.slug, c.syllabus.length)}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Case Studies Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t mt-0">
        <Reveal>
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Industry Case Studies
              </h2>
              <p className="text-neutral-600 mt-3">
                Apply what you’ve learned to diagnose real loyalty problems and design
                solutions. Filter by industry, pick a difficulty, and submit your best thinking.
              </p>
            </div>
            <div className="hidden md:block self-start rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 text-sm font-medium">
              New cases every month
            </div>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={60}>
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            <input
              type="text"
              placeholder="Search case title or problem…"
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">All industries</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            <select
              className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="">All difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            {filteredCases.map((cs) => (
              <article
                key={cs.slug}
                className="group relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Accent hover bar */}
                <span className="absolute inset-x-0 -top-0.5 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition" />

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 grid place-content-center rounded-xl bg-neutral-50 border text-xl">
                    {cs.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-lg truncate">{cs.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
                        {cs.industry}
                      </span>
                      <span className="rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1 text-xs">
                        {cs.difficulty}
                      </span>
                      {cs.kpis?.length ? (
                        <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs">
                          Targets: {cs.kpis.join(" · ")}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <p className="text-neutral-700 line-clamp-3 mb-4">{cs.problem}</p>

                {/* Critical Thinking Mechanics */}
                <div className="space-y-3">
                  <div className="rounded-xl bg-neutral-50 border px-3 py-3">
                    <p className="text-sm font-medium mb-1">Your Task</p>
                    <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
                      {cs.prompts.map((p: string, i: number) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Rubric */}
                  <div className="rounded-xl bg-neutral-50 border px-3 py-3">
                    <p className="text-sm font-medium mb-1">Rubric (how you’ll be scored)</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.rubric.map((r: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-white border px-2.5 py-1 text-xs text-neutral-700"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hint (collapsible) */}
                  <details className="rounded-xl bg-white border px-3 py-3 hover:bg-neutral-50 transition">
                    <summary className="cursor-pointer text-sm font-medium">Hint & context</summary>
                    <p className="text-sm text-neutral-700 mt-2">{cs.hint}</p>
                  </details>
                </div>

                {/* Footer actions */}
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={`/academy/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                  >
                    Open Case <span aria-hidden>→</span>
                  </a>
                  <button
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700"
                    onClick={() => onSubmit(cs.slug)}
                  >
                    Submit Solution
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
