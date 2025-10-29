import { Link } from "react-router-dom";
import { Users2, Briefcase, Gauge, LineChart, ShieldCheck, Rocket } from "lucide-react";

type ChipProps = { children: React.ReactNode };
const Chip = ({ children }: ChipProps) => (
  <span className="px-2.5 py-1 text-xs rounded-full bg-neutral-50 border border-neutral-200">
    {children}
  </span>
);

export default function EngagementModes() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-semibold tracking-wider text-neutral-500">Engagement models</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Operate for you or co-pilot with your team</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-3">
            Choose the model that fits your stage: end-to-end ownership or embedded specialists focused on your KPIs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Operate for you */}
          <article className="group rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
            <div className="rounded-[14px] bg-white/85 backdrop-blur-sm border border-neutral-100 p-6 md:p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-xl font-semibold">Operate for you</h3>
              </div>
              <p className="text-neutral-600 mt-3">
                Full program ownership: we design, run, and report — you get a single accountable partner for outcomes.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>Program P&L</Chip>
                <Chip>Offer calendar</Chip>
                <Chip>Journeys & triggers</Chip>
                <Chip>Fraud & guardrails</Chip>
                <Chip>Exec reporting</Chip>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><Rocket size={16} className="mt-0.5"/> Fast start with a 90-day plan and weekly ops cadence</li>
                <li className="flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5"/> Clear SLAs, approvals, and risk controls</li>
                <li className="flex items-start gap-2"><LineChart size={16} className="mt-0.5"/> KPI book & dashboards included</li>
              </ul>

              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900">
                  Talk about full ownership →
                </Link>
              </div>
            </div>
          </article>

          {/* Co-pilot / Embedded */}
          <article className="group rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
            <div className="rounded-[14px] bg-white/85 backdrop-blur-sm border border-neutral-100 p-6 md:p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700">
                  <Users2 size={18} />
                </div>
                <h3 className="text-xl font-semibold">Co-pilot with your team</h3>
              </div>
              <p className="text-neutral-600 mt-3">
                We embed with Product/CRM/Analytics as senior hands to accelerate delivery and de-risk big bets.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>Tier redesign</Chip>
                <Chip>Offer architecture</Chip>
                <Chip>Experimentation</Chip>
                <Chip>Dashboard enablement</Chip>
                <Chip>Vendor orchestration</Chip>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><Gauge size={16} className="mt-0.5"/> Shared KPIs and weekly checkpoints</li>
                <li className="flex items-start gap-2"><ShieldCheck size={16} className="mt-0.5"/> Works with your tools and approval flow</li>
                <li className="flex items-start gap-2"><LineChart size={16} className="mt-0.5"/> Knowledge transfer, playbooks, docs</li>
              </ul>

              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center rounded-xl bg-white text-black px-5 py-3 font-semibold border border-neutral-300 hover:bg-neutral-50">
                  Explore an embedded setup →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
