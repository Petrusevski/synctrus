import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";

const services = [
  {
    title: "Loyalty Audit",
    description: "Diagnose leaks, economics, and hidden friction.",
    tags: ["Economics", "CX", "Fraud", "Data"],
    link: "/services/audit",
    icon: "🔎",
  },
  {
    title: "Program Redesign",
    description: "Turn legacy earn & burn into long-term engagement.",
    tags: ["Tiers", "Earn/Burn", "Vouchers", "Partners"],
    link: "/services/redesign",
    icon: "🧩",
  },
  {
    title: "Engagement Strategy",
    description: "Design journeys, triggers, and campaigns that retain.",
    tags: ["Journeys", "Triggers", "Offers", "Guardrails"],
    link: "/services/engagement",
    icon: "🎯",
  },
  {
    title: "Measurement & Analytics",
    description: "Prove impact and create a single source of truth.",
    tags: ["KPIs", "Experiments", "Dashboards", "Ops cadence"],
    link: "/services/analytics",
    icon: "📈",
  },
];

export default function Services() {
  return (
    <>
      {/* =========================
          Expertise (cards)
      ========================== */}
      <Reveal>
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">Our Expertise</h1>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
              We architect loyalty ecosystems — from audit to analytics — to make customer engagement
              profitable, measurable, and brand-authentic.
            </p>

            {/* XL = 4 in a line, LG = 2×2, equal height */}
            <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <ServiceCard
                    title={s.title}
                    description={s.description}
                    tags={s.tags}
                    link={s.link}
                    icon={s.icon}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================================
          Workflow Animation: Campaign Lifecycle
      ======================================= */}
      <Reveal>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center mb-12">
              <p className="uppercase tracking-widest text-xs font-semibold text-neutral-500">
                How we design campaigns
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Trigger → Logic → Value → Communication → Measurement
              </h2>
              <p className="text-neutral-600 mt-3 max-w-3xl mx-auto">
                We translate objectives into a testable journey: define the event, evaluate rules,
                assign points or tier movement, issue rewards, orchestrate comms, and prove lift with a
                clean readout.
              </p>
            </div>

            {/* Flow rail */}
            <div className="relative">
              {/* animated gradient rail (desktop) */}
              <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] rounded-full overflow-hidden">
                <div className="h-full w-full bg-[linear-gradient(90deg,#fde68a_0%,#fbbf24_50%,#fde68a_100%)] bg-[length:200%_100%] animate-flowGradient opacity-70" />
              </div>

              {/* Steps */}
              <div className="grid md:grid-cols-6 gap-6 relative">
                {[
                  { icon: "⏱️", title: "Trigger", text: "Purchase, app event, visit, or CRM segment enters." },
                  { icon: "🧠", title: "Rules", text: "Eligibility & guardrails (min spend, SKU, cooldown, fraud checks)." },
                  { icon: "🏅", title: "Value", text: "Assign points or progress; evaluate tier upgrade criteria." },
                  { icon: "🎁", title: "Reward", text: "Voucher or benefit with expiries, caps, and stacking rules." },
                  { icon: "📣", title: "Comms", text: "Orchestrate email/SMS/app pushes with personalization & holdouts." },
                  { icon: "📏", title: "Measure", text: "Holdouts, uplift, margin impact; decision gates to scale." },
                ].map((s, i) => (
                  <Reveal key={s.title} delay={i * 100}>
                    <div className="relative">
                      {/* connector dot for mobile */}
                      <div className="md:hidden absolute -top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-amber-500/70" />
                      <div className="rounded-xl border border-neutral-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{s.icon}</span>
                          <h3 className="font-semibold">{s.title}</h3>
                        </div>
                        <p className="text-sm text-neutral-600 mt-2">{s.text}</p>
                        {/* micro pulse */}
                        <span className="absolute -top-2 -right-2 h-3 w-3 rounded-full bg-amber-400/70 shadow-[0_0_0_0_rgba(251,191,36,0.5)] animate-pingLight" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* traveling node over the rail (desktop) */}
              <span className="hidden md:block absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-amber-500 shadow-lg animate-travelNode" />
            </div>
          </div>
        </section>
      </Reveal>

      {/* ======================================
          Animated KPI Dashboard: Active Tracking
      ======================================= */}
      <Reveal>
        <section className="bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest text-xs font-semibold text-neutral-500">
                Live performance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">We actively track what matters</h2>
              <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">
                Six core KPIs with clear thresholds and weekly readouts. Your team gets a single source
                of truth and actions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Repeat Purchase Rate", value: "38%", delta: "+4.1%", path: "M2,18 C6,10 12,12 18,6 22,4 26,8 30,5" },
                { label: "Active Members (30d)", value: "124k", delta: "+3.2%", path: "M2,18 C8,16 12,10 18,12 24,14 26,8 30,10" },
                { label: "Redemption Rate", value: "21%", delta: "+1.8%", path: "M2,18 C6,14 10,16 16,10 22,6 26,8 30,6" },
                { label: "Avg. Discount Cost", value: "2.3%", delta: "-0.2%", path: "M2,10 C8,12 12,14 18,12 24,10 26,12 30,14" },
                { label: "Tier Migration (↑)", value: "12%", delta: "+2.6%", path: "M2,18 C8,10 12,14 18,8 24,6 26,10 30,7" },
                { label: "CLV Lift vs. Holdout", value: "+9.5%", delta: "+0.7%", path: "M2,18 C6,16 12,12 18,9 24,12 26,10 30,8" },
              ].map((kpi, i) => (
                <Reveal key={kpi.label} delay={i * 100}>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-neutral-600">{kpi.label}</h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          kpi.delta.startsWith("-")
                            ? "border-emerald-200 text-emerald-700 bg-emerald-50"
                            : "border-amber-200 text-amber-800 bg-amber-50"
                        }`}
                      >
                        {kpi.delta}
                      </span>
                    </div>
                    <div className="mt-2 flex items-end gap-3">
                      <div className="text-3xl font-semibold tracking-tight">{kpi.value}</div>
                      <span className="text-xs text-neutral-500 mb-1">vs last period</span>
                    </div>

                    {/* Sparkline */}
                    <svg
                      viewBox="0 0 32 20"
                      className="mt-4 h-14 w-full overflow-visible"
                      fill="none"
                      stroke="currentColor"
                    >
                      {/* baseline */}
                      <path d="M2,18 L30,18" stroke="#e5e7eb" strokeWidth="1" />
                      {/* animated line */}
                      <path
                        d={kpi.path}
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className="animate-drawPath"
                        style={{ strokeDasharray: 120, strokeDashoffset: 120 }}
                      />
                    </svg>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/services/analytics"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900 transition-colors"
              >
                Explore Measurement & Analytics →
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Local CSS for animations (kept here to avoid touching global config) */}
      <style>{`
        /* flowing gradient across the rail */
        @keyframes flowGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-flowGradient { animation: flowGradient 4s linear infinite; }

        /* traveling node across the rail */
        @keyframes travelNode {
          0% { left: 0%; }
          100% { left: calc(100% - 1rem); } /* 1rem = node width */
        }
        .animate-travelNode { animation: travelNode 6s ease-in-out infinite alternate; }

        /* soft ping for each step */
        @keyframes pingLight {
          0% { box-shadow: 0 0 0 0 rgba(251,191,36,0.45); transform: scale(1); opacity: .8; }
          70% { box-shadow: 0 0 0 10px rgba(251,191,36,0); transform: scale(1.15); opacity: 0; }
          100% { box-shadow: 0 0 0 0 rgba(251,191,36,0); transform: scale(1); opacity: 0; }
        }
        .animate-pingLight { animation: pingLight 2.2s ease-out infinite; }

        /* draw the sparkline path */
        @keyframes drawPath {
          to { stroke-dashoffset: 0; }
        }
        .animate-drawPath {
          animation: drawPath 1.4s ease-out forwards;
        }
      `}</style>
    </>
  );
}
