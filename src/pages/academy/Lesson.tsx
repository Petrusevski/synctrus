// src/pages/academy/Lesson.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { courses } from "../../lms/data";
import { isCompleted, toggleComplete } from "../../lms/progress";
import Quiz from "../../components/lms/Quiz";

export default function Lesson() {
  const nav = useNavigate();
  const { courseSlug, lessonSlug } = useParams();

  const course = courses.find((c) => c.slug === courseSlug);
  const lesson = course?.syllabus.find((l) => l.slug === lessonSlug);
  if (!course || !lesson) {
    return <main className="px-6 py-16">Lesson not found.</main>;
  }

  const thisIndex = course.syllabus.findIndex((l) => l.slug === lesson.slug);
  const prev = course.syllabus[thisIndex - 1];
  const next = course.syllabus[thisIndex + 1];

  const total = course.syllabus.length;
  const doneCount = course.syllabus.filter((l) =>
    isCompleted(course.slug, l.slug)
  ).length;
  const overallPct = Math.round((doneCount / total) * 100);
  const done = isCompleted(course.slug, lesson.slug);

  const goNext = () => {
    if (next) nav(`/academy/course/${course.slug}/lesson/${next.slug}`);
    else nav(`/academy/course/${course.slug}`);
  };
  const goPrev = () => {
    if (prev) nav(`/academy/course/${course.slug}/lesson/${prev.slug}`);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        {/* Header + meta */}
        <Reveal>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Link to="/academy" className="hover:underline">Academy</Link>
            <span aria-hidden>›</span>
            <Link to={`/academy/course/${course.slug}`} className="hover:underline">
              {course.title}
            </Link>
          </div>

          <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {lesson.title}
              </h1>
              <div className="mt-2 text-sm text-neutral-600">
                {lesson.duration} • {lesson.kind === "video" ? "Video" : "Article"}
                {done && <span className="ml-2 text-emerald-700">• Completed</span>}
              </div>
            </div>

            {/* Overall course progress */}
            <div className="w-full md:w-80">
              <div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
                <span>Course progress</span>
                <span>{overallPct}%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-500"
                  style={{ width: `${overallPct}%` }}
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_320px]">
          {/* Article column */}
          <div>
            <Reveal delay={60}>
              {lesson.kind === "video" && lesson.videoUrl && (
                <div className="mb-8 aspect-video overflow-hidden rounded-2xl border border-black/10">
                  <iframe
                    className="h-full w-full"
                    src={lesson.videoUrl}
                    title={lesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {lesson.content && (
                <article
                  className="lesson-prose mt-2"  /* <- fixed typo: 'lesson-prose' */
                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                />
              )}
            </Reveal>

            {/* Quiz */}
            {lesson.quiz && lesson.quiz.length > 0 && (
              <>
                <Reveal delay={80}>
                  <div className="my-10 h-px w-full bg-neutral-200" />
                  <h2 className="text-xl font-semibold mb-3">Quick check</h2>
                </Reveal>
                <Reveal delay={100}>
                  <div className="rounded-2xl border border-black/10 p-4 md:p-5">
                    <Quiz qs={lesson.quiz} onResult={() => {}} />
                  </div>
                </Reveal>
              </>
            )}

            {/* Bottom nav */}
            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {prev && (
                  <button
                    onClick={goPrev}
                    className="rounded-full px-4 py-2 text-sm border border-black/10 hover:bg-neutral-50"
                  >
                    ‹ Previous
                  </button>
                )}
                {next ? (
                  <button
                    onClick={goNext}
                    className="rounded-full px-4 py-2 text-sm bg-black text-white hover:opacity-90"
                  >
                    Next lesson ›
                  </button>
                ) : (
                  <Link
                    to={`/academy/course/${course.slug}`}
                    className="rounded-full px-4 py-2 text-sm border border-black/10 hover:bg-neutral-50"
                  >
                    Back to course
                  </Link>
                )}
                <button
                  onClick={() => toggleComplete(course.slug, lesson.slug)}
                  className={`ml-auto rounded-full px-4 py-2 text-sm ${
                    done
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-neutral-800 text-white hover:opacity-90"
                  }`}
                >
                  {done ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
              </div>
            </Reveal>
          </div>

          {/* Sticky syllabus rail */}
          <Reveal delay={80}>
            <aside className="md:sticky md:top-10 h-fit rounded-2xl border border-black/10 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Lesson outline</h3>
                <span className="text-xs text-neutral-500">
                  {doneCount}/{total} done
                </span>
              </div>
              <ol className="mt-3 space-y-1">
                {course.syllabus.map((l, i) => {
                  const active = l.slug === lesson.slug;
                  const completed = isCompleted(course.slug, l.slug);
                  return (
                    <li key={l.slug}>
                      <Link
                        to={`/academy/course/${course.slug}/lesson/${l.slug}`}
                        className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition ${
                          active
                            ? "bg-black text-white"
                            : "hover:bg-neutral-50 text-neutral-800"
                        }`}
                      >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 bg-white text-[10px]">
                          {i + 1}
                        </span>
                        <span className="truncate">{l.title}</span>
                        {completed && (
                          <span className="ml-auto text-[10px] rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
                            done
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
