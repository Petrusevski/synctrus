import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import { Card, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import {
  Trophy,
  Layers,
  Gift,
  ShieldCheck,
  Sparkles,
  LineChart,
  GraduationCap,
  BookOpen,
  Rocket,
} from "lucide-react";
import EngagementModes from "../components/EngagementModes";
import Reveal from "../components/Reveal";

export default function Home() {
  const services = [
    {
      title: "Loyalty Audit",
      desc: "A 2-week diagnostic across mechanics, CX, data, and fraud to surface quick wins and structural fixes.",
      href: "/services/audit",
    },
    {
      title: "Program (Re)Design",
      desc: "Design or overhaul mechanics: tiers, earn & burn, boosters, and partner value aligned to margin.",
      href: "/services/redesign",
    },
    {
      title: "Engagement Strategy",
      desc: "Lifecycle journeys and offer architecture across channels to drive frequency and basket size.",
      href: "/services/engagement",
    },
  ];

  const mechanics = [
    {
      icon: <Trophy size={18} />,
      title: "Points & Earn Rules",
      desc: "Accrual by spend, SKU, or behavior — modeled against margin and liability.",
    },
    {
      icon: <Layers size={18} />,
      title: "Tiers & Progression",
      desc: "Value-based tiers and progress-to-benefit that motivate without overpaying.",
    },
    {
      icon: <Gift size={18} />,
      title: "Rewards & Vouchers",
      desc: "Redemption that feels rewarding while keeping breakage and cannibalization in check.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Guardrails & Fraud",
      desc: "Velocity checks, expiries, partner caps — controls baked into the blueprint.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Gamification & Boosters",
      desc: "Missions, streaks, moments, and seasonal mechanics that drive short-term lift without fatigue.",
    },
    {
      icon: <LineChart size={18} />,
      title: "Measurement & Lift",
      desc: "Holdouts, switchbacks, and KPI books to prove what works and scale it.",
    },
  ];

  const outcomes = [
    { t: "Fashion retail", d: "Tier redesign lifted repeat rate +14% with only +1.6% promo spend." },
    { t: "Grocery", d: "Receipt-triggered missions drove +9% frequency in 8 weeks." },
    { t: "Pharmacy", d: "Expiries and breakage optimization reduced liability by 12%." },
  ];

  const process = [
    {
      t: "Diagnostic Sprint",
      d: "Fixed price, 2 weeks. You get a scorecard, prioritized opportunities, and a 90-day plan.",
    },
    {
      t: "Build & Validate",
      d: "We design & simulate economics, then pilot with clear success gates.",
    },
    {
      t: "Operate & Scale",
      d: "We transfer the playbook and help you scale through enablement.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <Reveal>
        <Hero />
      </Reveal>

      {/* What we do */}
      <Reveal>
        <Section>
          <Heading
            kicker="What we do"
            title="Practical, ROI-first loyalty consulting"
            subtitle="We fix underperforming programs and design new ones your customers (and finance teams) will love."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((c, i) => (
              <Reveal key={i} delay={80 * i}>
                <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
                  <div className="rounded-[14px] bg-white/80 backdrop-blur-sm border border-neutral-100 h-full">
                    <Card className="shadow-none h-full">
                      <CardBody className="h-full flex flex-col">
                        <h3 className="font-semibold text-lg">{c.title}</h3>
                        <p className="text-sm text-neutral-600 mt-1 flex-grow">{c.desc}</p>
                        <div className="mt-4">
                          <Button to={c.href} variant="ghost">
                            Learn more
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Loyalty Mechanics */}
      <Reveal delay={100}>
        <Section className="bg-neutral-50">
          <Heading
            kicker="Framework"
            title="The loyalty mechanics we work with"
            subtitle="We don’t force a template. We model mechanics against your economics, audience, and operations — then test for real lift."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mechanics.map((m, i) => (
              <Reveal key={m.title} delay={80 * i}>
                <div className="group rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white transition-all duration-300 hover:shadow-xl">
                  <div className="rounded-[14px] bg-white/80 backdrop-blur-sm border border-neutral-100 p-6 h-full">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700 mb-3">
                      {m.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{m.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80 * mechanics.length}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {[
                "Margin & liability modeling",
                "Customer cohort simulation",
                "Behavior & segmentation fit",
                "Operational feasibility",
              ].map((chip, i) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm text-neutral-700"
                  style={{ transitionDelay: `${40 * i}ms` }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>
      </Reveal>

      {/* Proof — outcomes */}
      <Reveal delay={120}>
        <Section>
          <Heading
            kicker="Proof"
            title="Selected outcomes"
            subtitle="Every engagement ships with a 90-day plan, owners, and a measurement path."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((x, i) => (
              <Reveal key={x.t} delay={80 * i}>
                <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
                  <div className="rounded-[14px] bg-white/80 backdrop-blur-sm border border-neutral-100">
                    <Card className="shadow-none">
                      <CardBody>
                        <div className="text-sm text-neutral-500">{x.t}</div>
                        <div className="font-semibold mt-1">{x.d}</div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* How we work — process */}
      <Reveal delay={140}>
        <Section className="bg-neutral-50">
          <Heading kicker="How we work" title="Simple, transparent engagement" />
          <div className="grid md:grid-cols-3 gap-6">
            {process.map((x, i) => (
              <Reveal key={x.t} delay={80 * i}>
                <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
                  <div className="rounded-[14px] bg-white/80 backdrop-blur-sm border border-neutral-100 h-full">
                    <Card className="shadow-none h-full">
                      <CardBody>
                        <h3 className="font-semibold text-lg">{x.t}</h3>
                        <p className="text-sm text-neutral-600 mt-1">{x.d}</p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={80 * process.length + 80}>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                Start the diagnostic
              </Button>
            </div>
          </Reveal>
        </Section>
      </Reveal>

      {/* ---------- ACADEMY SPOTLIGHT (new) ---------- */}
      <Reveal delay={160}>
        <section className="relative isolate overflow-hidden">
          {/* glow + gradient background */}
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-gradient-to-br from-fuchsia-500 via-rose-400 to-amber-300 opacity-90" />
            <div className="pointer-events-none absolute -inset-20 blur-3xl opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,.6),transparent_60%)] animate-pulse" />
          </div>

          <Section className="text-white">
            <Heading
              kicker="Academy"
              title="Level up your loyalty craft"
              subtitle="Free, practical lessons on mechanics, architecture, automation, and analytics — built from real implementations."
            />

            {/* Feature stripes */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <GraduationCap className="h-5 w-5" />,
                  t: "Loyalty Foundations",
                  d: "Program types, economics, and KPIs to pick the right model for your margin and audience.",
                },
                {
                  icon: <BookOpen className="h-5 w-5" />,
                  t: "Program Design & Architecture",
                  d: "Earn & burn rules, tiers, partners, and guardrails — built for scale and control.",
                },
                {
                  icon: <Rocket className="h-5 w-5" />,
                  t: "Ops, Automation & Analytics",
                  d: "Journeys that compound, experimentation, and reporting that drives action.",
                },
              ].map((x, i) => (
                <div
                  key={x.t}
                  className="rounded-2xl p-[1px] bg-white/20 hover:bg-white/30 transition"
                  style={{ transitionDelay: `${60 * i}ms` }}
                >
                  <div className="rounded-[14px] bg-white/10 backdrop-blur p-6 h-full">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/20 text-white border border-white/30 mb-3">
                      {x.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{x.t}</h3>
                    <p className="text-sm text-white/90 mt-1">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/academy" variant="primary" className="!bg-black !border-white hover:!bg-white/10">
                Explore the Academy
              </Button>
              <Button to="/academy" variant="primary" className="!text-white !border-white/70 hover:!bg-white/10">
                See the curriculum
              </Button>
            </div>
          </Section>
        </section>
      </Reveal>
      {/* ---------- /ACADEMY SPOTLIGHT ---------- */}

      {/* Engagement Modes */}
      <Reveal delay={200}>
        <EngagementModes />
      </Reveal>
    </main>
  );
}
