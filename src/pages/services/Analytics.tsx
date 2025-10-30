import ServiceLayout from "../../components/ServiceLayout";
import Pill from "../../components/Pill";
import Timeline from "../../components/Timeline";
import CardGrid from "../../components/CardGrid";
import Accordion from "../../components/Accordion";
import StatCard from "../../components/StatCard";
import Reveal from "../../components/Reveal";

export default function Analytics() {
  return (
    <ServiceLayout
      title="Measurement & Analytics"
      subtitle="North-star metrics, clean readouts, and experimentation — so decisions move from opinion to evidence."
      graphic={
        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-tr from-amber-200/40 via-yellow-200/25 to-transparent -z-10 animate-pulse-slow" />
          <img
            src="/assets/analytics.svg"
            alt="analytics graphic"
            className="w-full max-w-sm mx-auto opacity-90"
          />
        </div>
      }
    >
      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            <Pill>KPI framework</Pill>
            <Pill>Holdouts &amp; experiments</Pill>
            <Pill>Incrementality modeling</Pill>
            <Pill>Fraud &amp; anomaly detection</Pill>
            <Pill>Attribution guardrails</Pill>
            <Pill>Finance alignment</Pill>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <Timeline
            items={[
              { title: "Define", desc: "Metrics dictionary, calc logic, and north-stars aligned with finance." },
              { title: "Design", desc: "Test plans, holdouts, switchbacks, and attribution approach." },
              { title: "Build", desc: "Dashboards, anomaly alerts, and automated reporting." },
              { title: "Operate", desc: "Weekly cadence: insights → decisions → next tests." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where this shines</h2>
          <CardGrid
            items={[
              { title: "Uplift proof", content: <>Tier migration experiment with holdouts.</> },
              { title: "Voucher control", content: <>Detect cannibalization & set sane caps.</> },
              { title: "Earn vs margin", content: <>Tune accrual to contribution, not spend.</> },
              { title: "Fraud watch", content: <>Velocity spikes, device risk, cohort anomalies.</> },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Artifacts you’ll receive</h2>
          <Accordion
            items={[
              { title: "Metrics Book", body: "Definitions, formulas, and ownership — your single source of truth." },
              { title: "Experiment Library", body: "Reusable designs: holdouts, GEO tests, and switchbacks." },
              { title: "Dashboard Specs", body: "BI-agnostic requirements, mockups, and alert thresholds." },
              { title: "Ops Cadence", body: "Runbook with agendas, who-does-what, and decision gates." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Decision speed" value="↑ 2–3×" hint="From weekly to daily" />
            <StatCard label="Lift clarity" value="Yes / No" hint="Pass/fail at a glance" />
            <StatCard label="Waste" value="↓ 10–20%" hint="Guardrails & caps" />
            <StatCard label="Visibility" value="100%" hint="One source of truth" />
          </div>
        </section>
      </Reveal>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity:.55; transform: scale(1); }
          50% { opacity:.85; transform: scale(1.04); }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </ServiceLayout>
  );
}
