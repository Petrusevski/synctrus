import { ReactNode } from "react";

type Metric = { label: string; value: string; hint?: string };
type Study = {
  id: string;
  title: string;
  industry: string;
  period: string;
  summary: string;
  problem: string;
  approach: string[];
  impact: Metric[];
  testimonial?: { quote: string; author: string; role?: string };
  href?: string; // optional link to PDF/detail
  image?: ReactNode; // optional visual
};

export default function CaseStudyCard({ study }: { study: Study }) {
  return (
    <article className="group h-full">
      {/* gradient frame */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-amber-200 via-neutral-200 to-white">
        <div className="h-full rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
          {/* visual */}
          <div className="p-6 pb-0">
            {study.image ? (
              <div className="h-36 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                {study.image}
              </div>
            ) : (
              <div className="h-36 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-400 text-sm">
                {study.industry}
              </div>
            )}
          </div>

          {/* body */}
          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-neutral-500">{study.industry}</span>
              <span className="text-xs text-neutral-500">{study.period}</span>
            </div>

            <h3 className="text-lg font-semibold leading-snug">{study.title}</h3>
            <p className="text-sm text-neutral-600">{study.summary}</p>

            {/* problem / approach */}
            <div className="grid gap-3">
              <Block title="Problem">
                <p className="text-sm text-neutral-700">{study.problem}</p>
              </Block>
              <Block title="Approach">
                <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5">
                  {study.approach.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </Block>
            </div>

            {/* impact metrics */}
            <div className="grid grid-cols-2 gap-3">
              {study.impact.map((m, i) => (
                <div key={i} className="rounded-xl border border-neutral-200 p-3">
                  <div className="text-2xl font-extrabold">{m.value}</div>
                  <div className="text-xs text-neutral-600">{m.label}</div>
                  {m.hint && <div className="text-[11px] text-neutral-500 mt-0.5">{m.hint}</div>}
                </div>
              ))}
            </div>

            {/* testimonial */}
            {study.testimonial && (
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                <p className="text-sm italic text-neutral-700">“{study.testimonial.quote}”</p>
                <div className="mt-1 text-xs text-neutral-500">
                  — {study.testimonial.author}{study.testimonial.role ? `, ${study.testimonial.role}` : ""}
                </div>
              </div>
            )}

            {/* footer */}
            <div className="pt-2">
              <a
                href={study.href ?? "#"}
                className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-600"
              >
                View details <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{title}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}
