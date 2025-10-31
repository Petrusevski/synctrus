// src/lms/academyStore.ts
import { supabase } from "@/lib/supabase";

export async function upsertCourseProgress(userId: string, courseSlug: string, pct: number) {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  const { error } = await supabase
    .from("academy_course_progress")
    .upsert({ user_id: userId, course_slug: courseSlug, pct: clamped });
  if (error) throw error;
  return clamped;
}

export type CaseAnswers = Record<string, any>;

export async function submitCase(userId: string, caseSlug: string, answers: CaseAnswers) {
  const { data, error } = await supabase
    .from("academy_case_submissions")
    .insert({ user_id: userId, case_slug: caseSlug, answers, status: "submitted" })
    .select("id")
    .single();
  if (error) throw error;
  return data.id as string;
}

/** Optional: award badges on the fly (idempotent via UNIQUE (user_id, key)) */
export async function maybeAward(userId: string, opts: {
  hasFirstCase?: boolean;
  hasThreeCases?: boolean;
  hasCourse50?: boolean;
  hasCourse100?: boolean;
}) {
  const wants: Array<{ key: string; title: string; icon: string; description?: string }> = [];
  if (opts.hasFirstCase) wants.push({ key: "first_case", title: "First Case Submitted", icon: "📝", description: "Submitted your first case-study solution." });
  if (opts.hasThreeCases) wants.push({ key: "three_cases", title: "Case Contributor", icon: "📊", description: "Submitted three or more case-study solutions." });
  if (opts.hasCourse50) wants.push({ key: "course_50pct", title: "Halfway There", icon: "🏁", description: "Reached 50% progress in a course." });
  if (opts.hasCourse100) wants.push({ key: "course_complete", title: "🎓", icon: "🎓", description: "Completed a course." });
  if (!wants.length) return;

  const rows = wants.map(w => ({ user_id: userId, key: w.key, title: w.title, icon: w.icon, description: w.description ?? null }));
  const { error } = await supabase.from("academy_achievements").upsert(rows, { onConflict: "user_id,key" });
  if (error) throw error;
}
