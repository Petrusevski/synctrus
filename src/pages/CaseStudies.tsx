// src/pages/CaseStudies.tsx
import { useMemo, useState } from "react";
import Container from "../components/ui/Container";
import { CASE_STUDIES } from "../data/caseStudies";
import { Link } from "react-router-dom";

const FILTERS = [
  "All",
  "Fashion",
  "Grocery",
  "Pharmacy",
  "Beauty",
  "Hospitality",
  "Telecom",
  "Fitness",
  "Airlines",
  "Supermarkets",
];

export default function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? CASE_STUDIES
        : CASE_STUDIES.filter((s) => s.industry === filter),
    [filter]
  );

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-neutral-50">
        <Container className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4">
            Case Studies
          </h1>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto">
            See how loyalty drives measurable impact across industries — and where we plug in to make it smarter, faster, and more human.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 rounded-full border text-sm transition ${
                  filter === f
                    ? "bg-black text-white border-black"
                    : "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section>
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((s) => (
              <article
                key={s.id}
                className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-lg transition h-full"
              >
                {/* Image (fixed aspect) */}
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Body (uniform height via flex) */}
                <div className="p-5 flex flex-col h-[320px]">
                  <div className="text-xs uppercase tracking-wide text-neutral-500">
                    {s.industry} • {s.period}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold line-clamp-2">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                    {s.summary}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    {s.impact.slice(0, 2).map((i) => (
                      <div
                        key={i.label}
                        className="rounded-md border border-neutral-200 px-2 py-1 text-neutral-700"
                        title={i.hint || ""}
                      >
                        <span className="font-medium">{i.label}:</span>{" "}
                        <span>{i.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Push CTA to bottom */}
                  <div className="mt-auto pt-4">
                    <Link
                      to={`/case-studies/${s.id}`}
                      className="inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2 font-semibold border border-black hover:bg-neutral-900"
                    >
                      More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50">
        <Container className="py-16">
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-200 via-amber-100 to-white">
            <div className="rounded-[14px] bg-white/80 backdrop-blur-sm shadow-sm border border-neutral-100 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Want to unlock your loyalty potential?
                </h2>
                <p className="text-neutral-600 mt-1">
                  We help brands translate mechanics into measurable value — from audit to redesign to automation.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900"
              >
                Talk to us →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
