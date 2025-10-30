import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/ui/Container";
import { CASE_STUDIES } from "../../data/caseStudies";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = useMemo(
    () => CASE_STUDIES.find((s) => s.id === id),
    [id]
  );

  if (!study) {
    return (
      <main>
        <Container className="py-16">
          <h1 className="text-2xl font-semibold">Not found</h1>
          <p className="mt-2">
            We couldn’t locate that case study.{" "}
            <Link to="/case-studies" className="underline">
              Go back
            </Link>
            .
          </p>
        </Container>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Banner */}
      <div className="w-full aspect-[21/9] overflow-hidden bg-neutral-100">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
      </div>

      <section>
        <Container className="py-10">
          <div className="text-xs uppercase tracking-wide text-neutral-500">
            {study.industry} • {study.period}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">
            {study.title}
          </h1>
          <p className="mt-3 text-neutral-700 max-w-3xl">{study.summary}</p>

          {/* Problem → Approach → Impact */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-neutral-200 p-5">
              <h2 className="text-lg font-semibold">Problem</h2>
              <p className="text-neutral-700 mt-2">{study.problem}</p>
            </div>

            <div className="rounded-xl border border-neutral-200 p-5">
              <h2 className="text-lg font-semibold">Our Approach</h2>
              <ul className="list-disc list-inside text-neutral-700 mt-2 space-y-1">
                {study.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-200 p-5">
              <h2 className="text-lg font-semibold">Impact</h2>
              <ul className="mt-2 space-y-2">
                {study.impact.map((i) => (
                  <li
                    key={i.label}
                    className="rounded-md border border-neutral-200 px-3 py-2 flex items-center justify-between"
                    title={i.hint || ""}
                  >
                    <span className="text-neutral-600">{i.label}</span>
                    <span className="font-semibold">{i.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rich story body (optional) */}
          {study.body && (
            <article
              className="prose prose-neutral mt-10 max-w-none"
              dangerouslySetInnerHTML={{ __html: study.body }}
            />
          )}

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold border border-black hover:bg-neutral-900"
            >
              Talk to us about a similar challenge →
            </a>
          </div>

          <div className="mt-8">
            <Link to="/case-studies" className="text-sm underline">
              ← Back to Case Studies
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
