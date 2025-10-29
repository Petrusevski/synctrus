// src/lms/progress.ts
export type Progress = Record<string, { // courseSlug
  completed: string[];                   // lesson slugs
}>;

const KEY = "synctrus_lms_progress";

export function getProgress(): Progress {
  try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
  catch { return {}; }
}
export function toggleComplete(courseSlug: string, lessonSlug: string) {
  const p = getProgress();
  const set = new Set(p[courseSlug]?.completed ?? []);
  set.has(lessonSlug) ? set.delete(lessonSlug) : set.add(lessonSlug);
  p[courseSlug] = { completed: Array.from(set) };
  localStorage.setItem(KEY, JSON.stringify(p));
  return p;
}
export function isCompleted(courseSlug: string, lessonSlug: string) {
  return getProgress()[courseSlug]?.completed?.includes(lessonSlug);
}
export function coursePct(courseSlug: string, totalLessons: number) {
  const done = getProgress()[courseSlug]?.completed?.length ?? 0;
  return Math.round((done / Math.max(1, totalLessons)) * 100);
}
