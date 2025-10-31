import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "../../../components/Reveal";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

type Submission = {
  diagnosis: string;
  interventions: string;
  experiment: string;
  kpis: string;
  risks: string;
};

const SLUG = "retail-fashion-tier-stall";
const STORAGE_KEY = `case:${SLUG}:draft`;

export default function RetailFashionTierStall() {
  const { user } = useAuth();
  const nav = useNavigate();

  const [draft, setDraft] = useState<Submission>({
    diagnosis: "",
    interventions: "",
    experiment: "",
    kpis: "",
    risks: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<null | { type: "success" | "error"; text: string }>(null);
  const [result, setResult] = useState<null | { score?: number; status?: string; feedback?: string }>(null);

  // Load/save draft to localStorage so students don’t lose work
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setDraft(JSON.parse(saved));
      } catch {}
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  const baseline = useMemo(
    () => ({
      // Baseline snapshot (fictional but realistic for fashion retail)
      members: 180_000,
      tierMix: [
        { name: "Entry", pct: 62 },
        { name: "Mid", pct: 32 },
        { name: "Top", pct: 6 },
      ],
      // Conversion within 90 days after signup
      upgrade90d: {
        entry_to_mid: 12.5,
        mid_to_top: 1.1,
      },
      // Commerce behaviors (last rolling 90d)
      repeatPurchaseRate: 28.0,
      medianOrderValue: 41.5,
      discountAttachRate: 64.0, // % of orders using a discount/promo
      // Engagement
      emailOpen: 23.0,
      pushOpen: 8.2,
      walletActive: 11.0, // % who opened any wallet/pass in last 30d
      redeemRate: 19.0, // % of earners who redeemed in last 60d
      // Fraud/abuse signals
      anomalyRefundPct: 3.2,
      highVelocityEarnersPct: 0.7,
    }),
    []
  );

  const targets = useMemo(
    () => ({
      // 12-week post-intervention targets
      tierUpgrades: {
        entry_to_mid: 16.0, // +3.5pp
        mid_to_top: 2.5, // +1.4pp
      },
      repeatPurchaseRate: 33.0, // +5pp
      redeemRate: 26.0, // +7pp
      arpuLift: 6.0, // %
      guardrails: {
        grossMarginDeltaMax: -1.0, // not worse than -1pp
        abuseNotWorseThan: "+0.3pp",
      },
    }),
    []
  );

  function saveDraft() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setNotice({ type: "success", text: "Draft saved locally." });
    setTimeout(() => setNotice(null), 1500);
  }

  function clearDraft() {
    localStorage.removeItem(STORAGE_KEY);
    setDraft({ diagnosis: "", interventions: "", experiment: "", kpis: "", risks: "" });
    setNotice({ type: "success", text: "Draft cleared." });
    setTimeout(() => setNotice(null), 1500);
  }

  async function submit() {
    if (!user) {
      setNotice({ type: "error", text: "Please sign in to submit your solution." });
      setTimeout(() => {
        setNotice(null);
        nav(`/auth/sign-in?next=${encodeURIComponent(location.pathname)}`);
      }, 800);
      return;
    }

    // very light validation
    const fields = Object.values(draft).map((v) => (v || "").trim()).filter(Boolean);
    if (fields.length < 3) {
      setNotice({ type: "error", text: "Please provide at least three sections before submitting." });
      setTimeout(() => setNotice(null), 2000);
      return;
    }

    setSubmitting(true);
    setNotice(null);
    setResult(null);

    try {
      // 1) Insert submission
      const { data, error } = await supabase
        .from("academy_case_submissions")
        .insert([
          {
            user_id: user.id,
            case_slug: SLUG,
            answers: draft,
            status: "submitted",
          },
        ])
        .select("id")
        .single();

      if (error) throw error;

      // 2) Trigger grading (Supabase Edge Function)
      const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/evaluate-case`;
      const res = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submission_id: data.id }),
      });

      const json = await res.json();

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error || "Evaluation failed.");
      }

      setResult({
        score: json.score,
        status: json.status,
        feedback: json.feedback_text,
      });

      // optional: clear local draft after successful submit
      clearDraft();
      setNotice({ type: "success", text: "Submitted! Your answer was graded." });
    } catch (err: any) {
      console.error(err);
      setNotice({ type: "error", text: err.message || "Submission failed." });
    } finally {
      setSubmitting(false);
      setTimeout(() => setNotice(null), 4000);
    }
  }

  return (
    <main className="relative">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <Reveal>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <Link
                to="/academy"
                className="text-sm text-neutral-600 hover:text-neutral-800"
              >
                ← Back to Academy
              </Link>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-12 w-12 grid place-content-center rounded-xl bg-neutral-50 border text-2xl">
                  🧥
                </div>
                <div>
                  <p className="kicker">Industry Case Study</p>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Tier Stall in Fashion Retail
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
                      Retail Fashion
                    </span>
                    <span className="rounded-full bg-indigo-50 text-indigo-700 px-2.5 py-1 text-xs">
                      Intermediate
                    </span>
                    <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs">
                      Targets: Tier Upgrades · Repeat Rate · ARPU
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block self-start rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 text-sm font-medium">
              Estimated effort: 60–90 min
            </div>
          </div>
        </Reveal>
      </section>

      {/* Problem + Context */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <Reveal delay={60}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Problem Summary</h2>
            <p className="text-neutral-700">
              Members rarely progress beyond mid-tier despite frequent campaigns. Upgrade
              rates are flat and repeat purchase velocity dips after month 2. Discounts
              are heavily used, yet redemption and status-moment UX feel muted.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl border bg-neutral-50 p-4">
                <h3 className="text-sm font-semibold mb-2">Baseline Snapshot (90d)</h3>
                <ul className="text-sm text-neutral-800 space-y-1">
                  <li>Members: <b>{baseline.members.toLocaleString()}</b></li>
                  <li>
                    Tier mix:{" "}
                    <b>
                      Entry {baseline.tierMix[0].pct}% · Mid {baseline.tierMix[1].pct}% ·
                      Top {baseline.tierMix[2].pct}%
                    </b>
                  </li>
                  <li>
                    Upgrade 90d: Entry→Mid <b>{baseline.upgrade90d.entry_to_mid}%</b> ·
                    Mid→Top <b>{baseline.upgrade90d.mid_to_top}%</b>
                  </li>
                  <li>Repeat Purchase Rate: <b>{baseline.repeatPurchaseRate}%</b></li>
                  <li>Median Order Value: <b>€{baseline.medianOrderValue}</b></li>
                  <li>Discount Attach Rate: <b>{baseline.discountAttachRate}%</b></li>
                </ul>
              </div>
              <div className="rounded-xl border bg-neutral-50 p-4">
                <h3 className="text-sm font-semibold mb-2">Engagement & Guardrails</h3>
                <ul className="text-sm text-neutral-800 space-y-1">
                  <li>Email Open: <b>{baseline.emailOpen}%</b></li>
                  <li>Push Open: <b>{baseline.pushOpen}%</b></li>
                  <li>Wallet Active (30d): <b>{baseline.walletActive}%</b></li>
                  <li>Redeem Rate (60d): <b>{baseline.redeemRate}%</b></li>
                  <li>Anomaly Refunds: <b>{baseline.anomalyRefundPct}%</b></li>
                  <li>High-velocity earners: <b>{baseline.highVelocityEarnersPct}%</b></li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border bg-white p-4 mt-6">
              <h3 className="text-sm font-semibold mb-2">Constraints</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-800 space-y-1">
                <li>No change to base earn rate this quarter.</li>
                <li>Budget caps: promos must be margin-aware; no more than 1pp gross margin delta.</li>
                <li>POS integration is live; in-app wallet and email/push are available.</li>
                <li>Top-tier inventory for experiential rewards is limited.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Targets */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <Reveal delay={80}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">12-Week Targets</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Stat label="Entry→Mid Upgrade" value={`${targets.tierUpgrades.entry_to_mid}%`} caption={`Baseline ${baseline.upgrade90d.entry_to_mid}%`} />
              <Stat label="Mid→Top Upgrade" value={`${targets.tierUpgrades.mid_to_top}%`} caption={`Baseline ${baseline.upgrade90d.mid_to_top}%`} />
              <Stat label="Repeat Purchase Rate" value={`${targets.repeatPurchaseRate}%`} caption={`Baseline ${baseline.repeatPurchaseRate}%`} />
              <Stat label="Redeem Rate" value={`${targets.redeemRate}%`} caption={`Baseline ${baseline.redeemRate}%`} />
              <Stat label="ARPU Lift" value={`${targets.arpuLift}%`} caption="vs control" />
              <Guardrail label="Gross margin delta ≥" value={`${targets.guardrails.grossMarginDeltaMax}pp`} />
              <Guardrail label="Abuse not worse than" value={targets.guardrails.abuseNotWorseThan} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Your Task / Prompts */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <Reveal delay={100}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Your Task</h2>
            <ol className="list-decimal pl-5 text-neutral-800 space-y-2">
              <li>
                <b>Diagnose the stall:</b> identify behavioral + mechanic causes (e.g., poor status salience, delayed gratification,
                discount cannibalization, weak milestone design, late onboarding nudges).
              </li>
              <li>
                <b>Propose two interventions:</b> e.g., dynamic tier XP + milestone perks, status moments, time-boxed boosts,
                AI-driven “next best action” nudges tied to SKU affinity/price sensitivity.
              </li>
              <li>
                <b>Design a minimal experiment:</b> audience, control/variant(s), sample size logic, duration, and success metrics.
              </li>
              <li>
                <b>Define KPI plan:</b> exact metrics, how measured, expected ranges, and dashboards.
              </li>
              <li>
                <b>List risks & fraud controls:</b> velocity caps, edge-case handling, abuse detection signals.
              </li>
            </ol>

            <details className="rounded-xl border bg-neutral-50 p-4 mt-5">
              <summary className="cursor-pointer text-sm font-medium">Hint & context</summary>
              <p className="text-sm text-neutral-700 mt-2">
                Consider <i>milestone-based boosts</i> within first 60 days to create early wins,
                surface <i>status ceremonies</i> (e.g., “Level-Up” moments, surprise perks),
                and use <i>AI-nudges</i> for SKU/price affinity. Keep guardrails (margin, abuse)
                visible in the UX so promos don’t become the default behavior.
              </p>
            </details>
          </div>
        </Reveal>
      </section>

      {/* Rubric */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <Reveal delay={120}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Rubric (How You’ll Be Scored)</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Root-cause clarity",
                "Mechanic↔behavior fit",
                "KPI linkage",
                "Testability",
                "Risk/fraud controls",
                "Operational feasibility",
                "Margin awareness",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-neutral-50 border px-3 py-1 text-xs text-neutral-700"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Submission Form */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <Reveal delay={140}>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Submit Your Solution</h2>

            {notice && (
              <div
                className={`mb-4 rounded-xl border px-4 py-3 text-sm ${
                  notice.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-rose-200 bg-rose-50 text-rose-800"
                }`}
              >
                {notice.text}
              </div>
            )}

            {result && (
              <div className="mb-4 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-900 px-4 py-3 text-sm">
                <div className="font-semibold">
                  Result: {result.status?.toUpperCase() || "REVIEWED"} — {result.score ?? "—"}/100
                </div>
                {result.feedback && <div className="mt-1">{result.feedback}</div>}
              </div>
            )}

            <Field
              label="1) Diagnosis (root causes)"
              value={draft.diagnosis}
              onChange={(v) => setDraft((d) => ({ ...d, diagnosis: v }))}
              placeholder="What behaviors and mechanic issues are driving the stall?"
            />
            <Field
              label="2) Interventions (two concrete mechanics/journeys)"
              value={draft.interventions}
              onChange={(v) => setDraft((d) => ({ ...d, interventions: v }))}
              placeholder="Describe your two best interventions and why they’ll work."
            />
            <Field
              label="3) Minimal experiment plan"
              value={draft.experiment}
              onChange={(v) => setDraft((d) => ({ ...d, experiment: v }))}
              placeholder="Audience, control/variants, metrics, power, duration."
            />
            <Field
              label="4) KPI plan"
              value={draft.kpis}
              onChange={(v) => setDraft((d) => ({ ...d, kpis: v }))}
              placeholder="Exact metrics, attribution, dashboards, expected ranges."
            />
            <Field
              label="5) Risks & fraud controls"
              value={draft.risks}
              onChange={(v) => setDraft((d) => ({ ...d, risks: v }))}
              placeholder="Velocity caps, anomaly checks, misuse prevention."
            />

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                onClick={saveDraft}
                type="button"
                disabled={submitting}
              >
                Save draft
              </button>
              <button
                className="rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700 disabled:opacity-60"
                onClick={submit}
                type="button"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Submit solution"}
              </button>
              <button
                className="rounded-xl bg-neutral-100 text-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-200"
                onClick={clearDraft}
                type="button"
                disabled={submitting}
              >
                Clear
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* ---------- Small UI helpers ---------- */

function Stat({ label, value, caption }: { label: string; value: string; caption?: string }) {
  return (
    <div className="rounded-xl border bg-neutral-50 p-4">
      <p className="text-xs text-neutral-600">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
      {caption ? <p className="text-xs text-neutral-600 mt-1">{caption}</p> : null}
    </div>
  );
}

function Guardrail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <p className="text-xs text-neutral-600">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        className="w-full min-h-[110px] rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
