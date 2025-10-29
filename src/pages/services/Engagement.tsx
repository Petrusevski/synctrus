import ServiceLayout from "../../components/ServiceLayout";
import Pill from "../../components/Pill";
import Timeline from "../../components/Timeline";
import CardGrid from "../../components/CardGrid";
import Accordion from "../../components/Accordion";
import StatCard from "../../components/StatCard";
import Reveal from "../../components/Reveal";

export default function Engagement() {
  return (
    <ServiceLayout
      title="Engagement Strategy"
      subtitle="Lifecycle journeys, trigger maps, and offer architecture that actually lift frequency and basket — not just send more messages."
      graphic={
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-amber-100/50 via-yellow-100/30 to-transparent blur-2xl -z-10" />
          <img
            src="/src/assets/engagement.svg"
            alt="engagement graphic"
            className="w-full max-w-sm mx-auto opacity-90"
          />
        </div>
      }
    >
      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <div className="flex flex-wrap gap-2">
            <Pill>Lifecycle segmentation</Pill>
            <Pill>Trigger mapping</Pill>
            <Pill>Offer guardrails</Pill>
            <Pill>Cadence &amp; fatigue control</Pill>
            <Pill>Personalization</Pill>
            <Pill>Multichannel orchestration</Pill>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <Timeline
            items={[
              { title: "Foundation", desc: "Segments, eligibility, suppression, and KPI mapping." },
              { title: "Journeys", desc: "Welcome, activation, win-back, seasonal missions, VIP care." },
              { title: "Offers", desc: "Guardrails, throttling, and experiment cells." },
              { title: "Enablement", desc: "Templates, briefs, QA checklist, and ops handover." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Where this shines</h2>
          <CardGrid
            items={[
              { title: "Activation", content: <>New members complete first earn → first redeem fast.</> },
              { title: "Win-back", content: <>Reactivation streams for lapsed cohorts with guardrails.</> },
              { title: "VIP care", content: <>Service benefits and surprise-and-delight tied to value.</> },
              { title: "Store traffic", content: <>Receipt and geofence triggers with local offers.</> },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={160}>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Artifacts you’ll receive</h2>
          <Accordion
            items={[
              { title: "Trigger Matrix", body: "Events, filters, throttles, channels, and success metrics." },
              { title: "Offer Catalog", body: "Payout logic with caps, stacking, and fraud checks." },
              { title: "Creative Templates", body: "Briefs, content modules, and design starters." },
              { title: "Test Plan", body: "Sequenced tests with holdouts and readout schedules." },
            ]}
          />
        </section>
      </Reveal>

      <Reveal delay={200}>
        <section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Open rate" value="+5–12pp" hint="Optimization examples" />
            <StatCard label="Churn" value="↓ 10–22%" hint="Targeted cohorts" />
            <StatCard label="Frequency" value="+8–18%" hint="Missions & journeys" />
            <StatCard label="Time to live" value="3–5 weeks" hint="Typical deployment" />
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  );
}
