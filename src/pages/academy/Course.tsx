// src/pages/academy/Course.tsx
import { useParams, Link } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { courses } from "../../lms/data";
import { coursePct, isCompleted } from "../../lms/progress";
import ProgressBar from "../../components/lms/ProgressBar";

export default function Course() {
  const { courseSlug } = useParams();
  const course = courses.find(c => c.slug === courseSlug);
  if (!course) return <main className="px-6 py-16">Course not found.</main>;

  const pct = coursePct(course.slug, course.syllabus.length);

  return (
    <main>
      <section className="mx-auto max-w-5xl px-6 py-14">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <p className="kicker">{course.level}</p>
              <h1 className="text-3xl md:text-4xl font-bold">{course.heroEmoji} {course.title}</h1>
              <p className="text-neutral-600 mt-2">{course.subtitle}</p>
            </div>
            <div className="w-48">
              <ProgressBar pct={pct} />
              <div className="text-xs text-neutral-500 mt-1">{pct}% complete</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 rounded-2xl border border-black/10 p-6 bg-white/60">
            <h2 className="text-xl font-semibold">You’ll be able to</h2>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {course.outcomes.map((o,i)=>(
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <span className="text-neutral-700">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-3">Lessons</h2>
            <div className="divide-y border rounded-2xl border-black/10 bg-white/60">
              {course.syllabus.map(lesson => {
                const done = isCompleted(course.slug, lesson.slug);
                return (
                  <Link
                    key={lesson.slug}
                    to={`/academy/course/${course.slug}/lesson/${lesson.slug}`}
                    className="flex items-center justify-between p-4 hover:bg-neutral-50">
                    <div>
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-xs text-neutral-500">{lesson.duration} • {lesson.kind === "video" ? "Video" : "Article"}</div>
                    </div>
                    <div className={`text-xs rounded-full px-2 py-1 ${done ? "bg-emerald-100 text-emerald-700" : "bg-neutral-100 text-neutral-600"}`}>
                      {done ? "Completed" : "Start"}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
