import { useEffect, useRef, useState } from "react";
import ServiceLayout from "../../components/ServiceLayout";
import Pill from "../../components/Pill";
import Timeline from "../../components/Timeline";
import CardGrid from "../../components/CardGrid";
import Accordion from "../../components/Accordion";
import StatCard from "../../components/StatCard";
// Optional: icons (if you have lucide-react installed). If not, comment these out or run: npm i lucide-react
import { ShieldCheck, LineChart, Sparkles, Layers, Gauge, Zap } from "lucide-react";

/**
 * Lightweight IntersectionObserver-based reveal for fade/slide-in on scroll.
 * No external dependency; works great with Tailwind.
 */
function Reveal({
  children,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(14px)",
      }}
    >
      {children}
    </div>
  );
}

export default function Audit() {
  return (
    <ServiceLayout
      title="Loyalty Program Audit"
      subtitle="A fast, structured diagnostic of mechanics, value exchange, CX, data, and governance to identify ROI opportunities and risks."
      graphic={
        <img
          src="/assets/audit.svg"
          alt="audit graphic"
          className="w-full max-w-sm mx-auto opacity-90"
        />
      }
    >
      {/* Highlights — quick credibility chips */}
      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            <Pill>Economics &amp; margin aware</Pill>
            <Pill>Omnichannel CX scan</Pill>
            <Pill>Fraud &amp; abuse review</Pill>
            <Pill>Data &amp; KPI health</Pill>
          </div>
        </section>
      </Reveal>

      {/* Scope matrix — what we assess, with icon chips */}
      <Reveal delay={100}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Scope we cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Layers size={16} />,
                title: "Mechanics & Rules",
                desc: "Points, tiers, earn/burn, vouchers, expiries, stacking.",
              },
              {
                icon: <Sparkles size={16} />,
                title: "Engagement",
                desc: "Journeys, triggers, missions, VIP, seasonal boosters.",
              },
              {
                icon: <ShieldCheck size={16} />,
                title: "Controls",
                desc: "Fraud, velocity caps, partner exchange, liability guardrails.",
              },
              {
                icon: <LineChart size={16} />,
                title: "Measurement",
                desc: "KPI book, baselines, holdouts, attribution, dashboards.",
              },
              {
                icon: <Gauge size={16} />,
                title: "Economics",
                desc: "Accrual cost, breakage, cannibalization, margin impact.",
              },
              {
                icon: <Zap size={16} />,
                title: "Ops & Tooling",
                desc: "Data flows, governance, SLAs, operating cadence.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white"
              >
                <div className="rounded-[14px] bg-white/80 backdrop-blur-sm border border-neutral-100 p-5 h-full">
                  <div className="inline-flex items-center gap-2 text-neutral-700">
                    <div className="h-8 w-8 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div className="font-semibold">{s.title}</div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Approach timeline — unchanged structure, upgraded motion */}
      <Reveal delay={150}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <Timeline
            items={[
              {
                title: "Kickoff",
                desc: "Stakeholder interviews, data access, and scope confirmation.",
              },
              {
                title: "Deep-dive",
                desc: "Mechanics, CX, fraud, and analytics review across tools and channels.",
              },
              {
                title: "Synthesis",
                desc: "Prioritize opportunities by impact/effort with business cases.",
              },
              {
                title: "Plan",
                desc: "90-day roadmap with owners, risks, and measurement baselines.",
              },
            ]}
          />
        </section>
      </Reveal>

      {/* Where this shines — problem patterns we fix */}
      <Reveal delay={200}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where this shines</h2>
          <CardGrid
            items={[
              {
                title: "Cashback fatigue",
                content: <>Move towards tiered value without margin shock.</>,
              },
              {
                title: "Low redemption",
                content: <>Increase perceived value &amp; fix redemption friction.</>,
              },
              {
                title: "Leakage",
                content: <>Tighten rules, caps, and detection against abuse.</>,
              },
              {
                title: "Flat engagement",
                content: <>Rebuild lifecycle triggers and offer architecture.</>,
              },
            ]}
          />
        </section>
      </Reveal>

      {/* What you get — deliverables, with richer copy */}
      <Reveal delay={250}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <Accordion
            items={[
              {
                title: "Scorecard",
                body:
                  "RAG status across mechanics, CX, fraud, data, and governance — with annotated screenshots where relevant.",
              },
              {
                title: "Opportunity set",
                body:
                  "Top wins with quantified impact and complexity — includes quick wins vs. structural changes.",
              },
              {
                title: "90-day plan",
                body:
                  "Roadmap with owners, checkpoints, risk log, and comms cadence. Designed to be actioned the next day.",
              },
              {
                title: "Measurement pack",
                body:
                  "Baseline dashboard spec, KPI dictionary, holdout recommendations, and a simple governance rubric.",
              },
            ]}
          />
        </section>
      </Reveal>

{/* Example artifacts + Stats — now full-width horizontal */}
<Reveal delay={300}>
  <section className="space-y-8">
    <h2 className="text-2xl font-semibold">Example artifacts</h2>

    {/* Horizontal scrollable section on smaller screens */}
    <div className="flex flex-wrap justify-between gap-6 w-full">
      {[
        {
          t: "Leak map",
          d: "Where economics and UX leak value — mapped to concrete fixes.",
        },
        {
          t: "Offer architecture",
          d: "A clear framework for guardrails, stacking, and expiries.",
        },
        {
          t: "Tier simulation",
          d: "Projected climb/keep rates and margin impact by cohort.",
        },
      ].map((x) => (
        <div
          key={x.t}
          className="flex-1 min-w-[260px] rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="font-semibold text-lg">{x.t}</div>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{x.d}</p>
        </div>
      ))}
    </div>

    {/* Stats in horizontal row */}
    <div className="flex flex-wrap justify-between items-stretch gap-6 w-full mt-8">
      {[
        { label: "Time to insights", value: "2 weeks", hint: "Typical timeline" },
        { label: "Opportunities", value: "10–20", hint: "Prioritized list" },
        { label: "Churn risk ↓", value: "10–25%", hint: "After fixes (example)" },
        { label: "Repeat rate ↑", value: "+5–15%", hint: "After quick wins (example)" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="flex-1 min-w-[200px] rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-neutral-200 p-6 text-center hover:shadow-lg transition-all duration-300"
        >
          <div className="text-3xl font-bold text-black">{stat.value}</div>
          <div className="text-sm font-medium text-neutral-700 mt-1">{stat.label}</div>
          <div className="text-xs text-neutral-500 mt-1">{stat.hint}</div>
        </div>
      ))}
    </div>
  </section>
</Reveal>

{/* CTA */}
<Reveal delay={400}>
  <section className="mt-12">
    <div className="rounded-3xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
      <div className="rounded-[18px] bg-white/85 backdrop-blur-sm border border-neutral-100 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Ready for a diagnostic?</h3>
          <p className="text-neutral-600 mt-2 max-w-xl">
            Start with a 2-week Audit. You’ll get a scorecard, prioritized wins, and a 90-day plan to act immediately.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-semibold border border-black hover:bg-neutral-900 transition-all duration-200"
        >
          Talk to us →
        </a>
      </div>
    </div>
  </section>
</Reveal>
    </ServiceLayout>
  );
}
