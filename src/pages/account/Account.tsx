import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

type Achievement = {
  id: string;
  user_id: string;
  key: string;
  title: string;
  icon: string;
  description?: string | null;
  meta?: any;
  earned_at: string;
};

type Progress = {
  course_slug: string;
  pct: number;
  updated_at: string;
};

type Submission = {
  id: string;
  case_slug: string;
  status: string;
  score: number | null;
  created_at: string;
};

export default function Account() {
  const { user, profile } = useAuth();
  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url ?? "");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // derived quick stats
  const stats = useMemo(() => {
    const courses50 = progress.filter(p => p.pct >= 50).length;
    const courses100 = progress.filter(p => p.pct >= 100).length;
    const casesSubmitted = submissions.length;
    const casesAccepted = submissions.filter(s => s.status === "accepted").length;
    return { courses50, courses100, casesSubmitted, casesAccepted };
  }, [progress, submissions]);

  useEffect(() => {
    setFullName(profile?.full_name ?? "");
    setAvatarUrl(profile?.avatar_url ?? "");
  }, [profile]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data: ach } = await supabase
        .from("academy_achievements")
        .select("*")
        .order("earned_at", { ascending: false });

      const { data: prog } = await supabase
        .from("academy_course_progress")
        .select("*")
        .order("updated_at", { ascending: false });

      const { data: subs } = await supabase
        .from("academy_case_submissions")
        .select("id, case_slug, status, score, created_at")
        .order("created_at", { ascending: false });

      setAchievements((ach as Achievement[]) || []);
      setProgress((prog as any as Progress[]) || []);
      setSubmissions((subs as any as Submission[]) || []);

      // auto-award baseline achievements based on data
      await maybeAwardAchievements(user.id, (prog as any) || [], (subs as any) || []);
    })();
  }, [user]);

  async function save() {
    if (!user) return;
    setBusy(true); setMsg(null);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, avatar_url: avatarUrl })
      .eq("id", user.id);
    setBusy(false);
    setMsg(error ? error.message : "Saved!");
  }

  async function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!user) return;
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true); setMsg(null);
    const filePath = `${user.id}/${Date.now()}_${file.name}`;
    // Make sure you created a public "avatars" bucket in Supabase Storage
    const { error: upErr } = await supabase.storage.from("avatars").upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });
    if (upErr) {
      setBusy(false); setMsg(upErr.message); return;
    }
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    const url = data.publicUrl;
    setAvatarUrl(url);
    const { error: updErr } = await supabase.from("profiles").update({ avatar_url: url }).eq("id", user.id);
    setBusy(false);
    setMsg(updErr ? updErr.message : "Avatar updated!");
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      {/* Profile card */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Account</h1>

        <div className="grid md:grid-cols-[160px,1fr] gap-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-28 w-28 rounded-full bg-neutral-100 border overflow-hidden grid place-content-center">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
              ) : (
                <span className="text-3xl">👤</span>
              )}
            </div>
            <label className="text-sm">
              <span className="inline-block rounded-xl border px-3 py-2 cursor-pointer hover:bg-neutral-50">
                Upload avatar
              </span>
              <input type="file" accept="image/*" className="hidden" onChange={onAvatarChange} />
            </label>
          </div>

          {/* Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-600">Email</label>
              <div className="rounded-xl border px-4 py-3 bg-neutral-50">{user?.email}</div>
            </div>
            <div>
              <label className="block text-sm text-neutral-600">Full name</label>
              <input
                className="w-full rounded-xl border px-4 py-3"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                className="rounded-xl bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-50"
                onClick={save}
                disabled={busy}
              >
                {busy ? "Saving…" : "Save"}
              </button>
              {msg && <p className="text-sm text-neutral-700 self-center">{msg}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <Stat label="Courses ≥ 50%" value={String(stats.courses50)} />
        <Stat label="Courses completed" value={String(stats.courses100)} />
        <Stat label="Case studies submitted" value={String(stats.casesSubmitted)} />
        <Stat label="Case studies accepted" value={String(stats.casesAccepted)} />
      </div>

      {/* Course progress */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm mt-6">
        <h2 className="text-xl font-semibold mb-3">Your courses</h2>
        {progress.length === 0 ? (
          <p className="text-neutral-600">No progress yet. Start a course from the Academy.</p>
        ) : (
          <div className="grid gap-3">
            {progress.map((p) => (
              <div key={p.course_slug} className="rounded-xl border p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{titleForCourse(p.course_slug)}</div>
                  <div className="text-sm text-neutral-600">Updated {new Date(p.updated_at).toLocaleDateString()}</div>
                </div>
                <ProgressBar pct={p.pct} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Case submissions */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm mt-6">
        <h2 className="text-xl font-semibold mb-3">Case studies</h2>
        {submissions.length === 0 ? (
          <p className="text-neutral-600">You haven’t submitted any case solutions yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2 pr-4">Case</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Score</th>
                  <th className="py-2 pr-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-b last:border-0">
                    <td className="py-2 pr-4">{titleForCase(s.case_slug)}</td>
                    <td className="py-2 pr-4">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-1">{s.status}</span>
                    </td>
                    <td className="py-2 pr-4">{s.score ?? "—"}</td>
                    <td className="py-2 pr-4">{new Date(s.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Achievements */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <button
            className="text-sm underline"
            onClick={async () => user && (await maybeAwardAchievements(user.id, progress, submissions), await refreshAchievements())}
          >
            Refresh
          </button>
        </div>

        {achievements.length === 0 ? (
          <p className="text-neutral-600">No badges yet. Progress through courses and submit case studies to earn them.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map(a => (
              <div key={a.id} className="rounded-xl border p-4 bg-neutral-50">
                <div className="text-2xl">{a.icon}</div>
                <div className="font-semibold mt-1">{a.title}</div>
                <div className="text-sm text-neutral-700">{a.description}</div>
                <div className="text-xs text-neutral-500 mt-1">
                  Earned {new Date(a.earned_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );

  async function refreshAchievements() {
    const { data } = await supabase
      .from("academy_achievements")
      .select("*")
      .order("earned_at", { ascending: false });
    setAchievements((data as Achievement[]) || []);
  }

  // Minimal title helpers—adjust to your course/case slugs
  function titleForCourse(slug: string) {
    const map: Record<string, string> = {
      "journey-mapping": "Journey Mapping & Lifecycle Design",
      "behavioral-triggers": "Behavioral Triggers & Frequency Caps",
      "journey-orchestration": "Multi-Channel Journey Orchestration",
      "winback-flows": "Reactivation & Win-Back Flows",
      "journey-measurement": "Measuring Journey Performance",
      // add other slugs you use
    };
    return map[slug] || slug;
  }
  function titleForCase(slug: string) {
    const map: Record<string, string> = {
      "retail-fashion-tier-stall": "Tier Stall in Fashion Retail",
      "telco-cashback-forgotten": "Forgotten Cashback in Telco",
      "hospitality-upgrade-apathy": "Upgrade Apathy in Hospitality",
      "sports-offseason-cliff": "Off-Season Engagement Cliff",
      "beauty-cross-branch-friction": "Cross-Branch Friction in Beauty",
    };
    return map[slug] || slug;
  }

async function maybeAwardAchievements(
  userId: string,
  prog: Progress[],
  subs: Submission[]
) {
  // Build desired badges
  const wants: Array<{ key: string; title: string; icon: string; description?: string }> = [];

  if (subs.length >= 1) {
    wants.push({
      key: "first_case",
      title: "First Case Submitted",
      icon: "📝",
      description: "Submitted your first case-study solution.",
    });
  }
  if (subs.length >= 3) {
    wants.push({
      key: "three_cases",
      title: "Case Contributor",
      icon: "📊",
      description: "Submitted three or more case-study solutions.",
    });
  }
  if (prog.some((p) => p.pct >= 50)) {
    wants.push({
      key: "course_50pct",
      title: "Halfway There",
      icon: "🏁",
      description: "Reached 50% progress in a course.",
    });
  }
  if (prog.some((p) => p.pct >= 100)) {
    wants.push({
      key: "course_complete",
      title: "Course Completed",
      icon: "🎓",
      description: "Completed a course.",
    });
  }

  if (wants.length === 0) return;

  // Idempotent write: requires UNIQUE (user_id, key) on academy_achievements
  const rows = wants.map((w) => ({
    user_id: userId,
    key: w.key,
    title: w.title,
    icon: w.icon,
    description: w.description ?? null,
  }));

  // Prefer upsert over insert + catch
  const { error } = await supabase
    .from("academy_achievements")
    .upsert(rows, { onConflict: "user_id,key" });

  if (error) {
    console.error("Failed to upsert achievements:", error.message);
    return;
  }

  await refreshAchievements();
}

}

/* ---------- Small UI helpers ---------- */
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="text-xs text-neutral-600">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="h-3 rounded-full bg-neutral-100 overflow-hidden">
      <div
        className="h-3 rounded-full transition-all"
        style={{ width: `${pct}%`, background: "linear-gradient(90deg,#6366f1,#22d3ee)" }}
      />
    </div>
  );
}
