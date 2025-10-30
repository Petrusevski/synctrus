import ServiceLayout from "../../components/ServiceLayout";
import Pill from "../../components/Pill";
import Timeline from "../../components/Timeline";
import CardGrid from "../../components/CardGrid";
import Accordion from "../../components/Accordion";
import StatCard from "../../components/StatCard";
import Reveal from "../../components/Reveal";

export default function Redesign() {
  return (
    <ServiceLayout
      title="Program (Re)Design"
      subtitle="Tiers, earn-&-burn, boosters, and partners — engineered for brand fit, margin, and momentum."
      graphic={
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-8 rounded-full blur-3xl bg-gradient-to-t from-yellow-100/50 via-amber-100/40 to-transparent -z-10 animate-pulse-slow" />
          <img
            src="/assets/redesign.svg"
            alt="redesign graphic"
            className="w-full max-w-sm mx-auto opacity-90"
          />
        </div>
      }
    >
      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            <Pill>Tier architecture</Pill>
            <Pill>Earn/burn economics</Pill>
            <Pill>Voucher framework</Pill>
            <Pill>Partner ecosystem</Pill>
            <Pill>Breakage modeling</Pill>
            <Pill>Experience design</Pill>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <Timeline
            items={[
              { title: "Discovery", desc: "Data + CX + brand synthesis; define constraints & opportunity." },
              { title: "Design", desc: "Rules engine, thresholds, boosters, and member experiences." },
              { title: "Simulation", desc: "Stress-test economics vs. margin; cohort liability modeling." },
              { title: "Blueprint", desc: "Ops, governance, and rollout plan with experiments." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where this shines</h2>
          <CardGrid
            items={[
              { title: "From cashback to tiers", content: <>Migrate to value-based tiers with boosters.</> },
              { title: "Over-earning", content: <>Cap leakage while keeping NPS healthy.</> },
              { title: "Frequency lift", content: <>Seasonal missions and habit builders.</> },
              { title: "Partners", content: <>Co-brand benefits without burning margin.</> },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Artifacts you’ll receive</h2>
          <Accordion
            items={[
              { title: "ProgramSpec", body: "Rules JSON, state diagrams, and customer flows." },
              { title: "Journey Maps", body: "Onboarding, earn, redeem, and tier movement." },
              { title: "Ops Playbook", body: "Eligibility, exceptions, governance, and SLAs." },
              { title: "Rollout Plan", body: "Phased experiments with success gates and KPIs." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Tier adoption" value="60–80%" hint="Members in tiers (example)" />
            <StatCard label="ROI window" value="2–6×" hint="Within 6 months (example)" />
            <StatCard label="Avg basket" value="+10–30%" hint="Expected uplift (example)" />
            <StatCard label="Liability" value="↓ 5–15%" hint="Optimized expiries (example)" />
          </div>
        </section>
      </Reveal>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity:.55; transform: scale(1); }
          50% { opacity:.9; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 7s ease-in-out infinite; }
      `}</style>
    </ServiceLayout>
  );
}
