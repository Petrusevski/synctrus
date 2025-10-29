import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { Card, CardBody } from "../components/ui/Card";
import {
  Target, LineChart, Bot, ShieldCheck, Sparkles, Layers, Users2, Clock, ArrowUpRight
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-neutral-50">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="uppercase tracking-wider text-[12px] text-neutral-500 font-semibold mb-3">
              About us
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              We turn loyalty into a profit centre.
            </h1>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl">
              Synctrus is a boutique consultancy focused on designing, fixing, and measuring
              loyalty programs that customers love and CFOs can defend. We combine brand, data, and
              unit economics to create engagement that actually moves the P&amp;L.
            </p>
            <div className="mt-8 flex gap-3">
              <Button to="/contact" variant="primary" size="lg">Talk to us</Button>
              <Button to="/case-studies" variant="ghost" size="lg">See case studies</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Creds + Stats */}
      <Section>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Years in loyalty", value: "15+" },
            { label: "Industries served", value: "8" },
            { label: "Markets", value: "12" },
            { label: "Avg. ROI window", value: "2–6x" },
          ].map((s) => (
            <Card key={s.label}><CardBody className="text-center">
              <div className="text-4xl font-extrabold">{s.value}</div>
              <div className="text-sm text-neutral-600 mt-1">{s.label}</div>
            </CardBody></Card>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-neutral-50">
        <Heading kicker="Principles" title="How we think" subtitle="Four rules keep our work sharp, measurable, and brand-authentic." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Principle icon={<Target size={18} />} title="Outcomes over output"
            text="We anchor everything in business outcomes: repeat rate, frequency, AOV, and contribution margin." />
          <Principle icon={<LineChart size={18} />} title="Economics first"
            text="Rules and tiers are modeled before they’re designed. If the math doesn’t work, the UX won’t matter." />
          <Principle icon={<ShieldCheck size={18} />} title="Guardrails built-in"
            text="Breakage, expiries, and fraud controls are part of the blueprint, not an afterthought." />
          <Principle icon={<Sparkles size={18} />} title="Less but better"
            text="We prefer simple mechanics customers understand in one glance and remember in one week." />
        </div>
      </Section>

      {/* Approach strip */}
      <Section>
        <Heading kicker="Approach" title="From diagnosis to scale" />
        <div className="grid md:grid-cols-3 gap-6">
          <Approach
            icon={<Layers size={18} />}
            title="1) Diagnostic Sprint"
            text="Two weeks to benchmark your program, surface quick wins, and ship a 90-day plan with owners."
            chips={["Scorecard", "Leak map", "90-day plan"]}
          />
          <Approach
            icon={<Bot size={18} />}
            title="2) (Re)Design"
            text="We model and design mechanics, journeys, offers, and guardrails — then prepare a pilot with success gates."
            chips={["Rules", "Simulations", "Pilot plan"]}
          />
          <Approach
            icon={<LineChart size={18} />}
            title="3) Operate & Measure"
            text="Set up dashboards, experimentation, and weekly cadence to continuously improve performance."
            chips={["KPI book", "Holdouts", "Dashboards"]}
          />
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-neutral-50">
        <Heading kicker="Journey" title="Where we’ve been" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 md:left-1/2" />
          <ul className="space-y-10">
            {[
              { year: "2012", title: "First retail tiered program", text: "Launched a value-based tier system with targeted boosters." },
              { year: "2016", title: "Multi-partner coalition", text: "Designed benefits and accrual across co-brands without margin burn." },
              { year: "2019", title: "Attribution at scale", text: "Introduced holdouts and switchback tests across CRM journeys." },
              { year: "2023", title: "Fraud & liability controls", text: "Cut leakage with smart expiries, limits, and anomaly detection." },
            ].map((m, i) => (
              <li key={m.year} className="md:grid md:grid-cols-2 md:gap-12 items-start">
                <div className={`md:text-right ${i % 2 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
                    <Clock size={14} /> {m.year}
                  </div>
                  <h3 className="text-lg font-semibold mt-1">{m.title}</h3>
                </div>
                <div className={`mt-2 md:mt-0 ${i % 2 ? "md:order-1" : ""}`}>
                  <p className="text-neutral-600">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Leadership snapshot */}
      <Section>
        <Heading kicker="Team" title="Small, senior, hands-on" subtitle="You work with the principals — not layers of account management." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "N. Petrusevski", r: "Principal, Strategy", bio: "15y in loyalty & CRM across retail, fashion, grocery.", k: ["Program design", "Economics", "CX"] },
            { n: "A. Kolega", r: "Principal, Data", bio: "Experimentation, incrementality, and BI enablement.", k: ["Attribution", "Holdouts", "Dashboards"] },
            { n: "M. Stojan", r: "Principal, Delivery", bio: "Journeys, offers, and partner operations at scale.", k: ["Journeys", "Ops cadence", "Rollouts"] },
          ].map((t) => (
            <Card key={t.n}>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-neutral-100 flex items-center justify-center font-semibold">
                    {t.n.split(" ").map((x) => x[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-sm text-neutral-500">{t.r}</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-3">{t.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.k.map((c) => (
                    <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-neutral-50 border border-neutral-200">
                      {c}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Logos / social proof (placeholder SVGs) */}
      <Section className="bg-neutral-50">
        <Heading kicker="Trust" title="Brands & categories" subtitle="Fashion, grocery, pharmacy, convenience, beauty, and more." />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E", "Brand F"].map((b) => (
            <div key={b} className="h-10 rounded-md bg-neutral-100 border border-neutral-200 flex items-center justify-center text-xs text-neutral-500">
              {b}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Card>
          <CardBody className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to make loyalty pay back?</h3>
              <p className="text-neutral-600 mt-1">
                Start with a 2-week Diagnostic Sprint — you’ll get a scorecard, quick wins, and a 90-day plan.
              </p>
            </div>
            <Button to="/contact" variant="primary" className="whitespace-nowrap">
              Start the diagnostic <ArrowUpRight size={18} className="ml-1" />
            </Button>
          </CardBody>
        </Card>
      </Section>
    </main>
  );
}

/** ——— Local tiny components ——— */

function Principle({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
      <div className="rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100 p-6 h-full">
        <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1">{text}</p>
      </div>
    </div>
  );
}

function Approach({
  icon, title, text, chips,
}: { icon: React.ReactNode; title: string; text: string; chips: string[] }) {
  return (
    <div className="group h-full">
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
        <div className="rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100 p-6 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-700">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mt-3">{title}</h3>
          <p className="text-sm text-neutral-600 mt-1">{text}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="px-2.5 py-1 text-xs rounded-full bg-neutral-50 border border-neutral-200">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
