// src/pages/academy/Lesson.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import Reveal from "../../components/Reveal";
import { courses } from "../../lms/data";
import { isCompleted, toggleComplete } from "../../lms/progress";
import Quiz from "../../components/lms/Quiz";

export default function Lesson() {
  const nav = useNavigate();
  const { courseSlug, lessonSlug } = useParams();
  const course = courses.find(c => c.slug === courseSlug);
  const lesson = course?.syllabus.find(l => l.slug === lessonSlug);

  if (!course || !lesson) return <main className="px-6 py-16">Lesson not found.</main>;

  const done = isCompleted(course.slug, lesson.slug);

  const goNext = () => {
    const idx = course.syllabus.findIndex(l => l.slug === lesson.slug);
    const next = course.syllabus[idx+1];
    if (next) nav(`/academy/course/${course.slug}/lesson/${next.slug}`);
    else nav(`/academy/course/${course.slug}`);
  };

  return (
    <main>
      <section className="mx-auto max-w-4xl px-6 py-10">
        <Reveal>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Link to="/academy" className="hover:underline">Academy</Link>
            <span>›</span>
            <Link to={`/academy/course/${course.slug}`} className="hover:underline">{course.title}</Link>
          </div>
          <h1 className="text-3xl font-bold mt-2">{lesson.title}</h1>
          <div className="text-sm text-neutral-500">{lesson.duration} • {lesson.kind === "video" ? "Video" : "Article"}</div>
        </Reveal>

        <Reveal delay={80}>
          {lesson.kind === "video" && lesson.videoUrl && (
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-black/10">
              <iframe
                className="w-full h-full"
                src={lesson.videoUrl}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {lesson.content && (
            <article className="prose max-w-none mt-6 prose-p:leading-relaxed">
              {lesson.content.split("\n").map((p, i)=>(
                <p key={i}>{p}</p>
              ))}
            </article>
          )}
        </Reveal>

        {lesson.quiz && lesson.quiz.length > 0 && (
          <Reveal delay={120}>
            <Quiz qs={lesson.quiz} onResult={()=>{/* you can toast score here */}} />
          </Reveal>
        )}

        <Reveal delay={160}>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={()=>toggleComplete(course.slug, lesson.slug)}
              className={`rounded-full px-4 py-2 text-sm ${done ? "bg-emerald-600 text-white" : "bg-black text-white hover:opacity-90"}`}>
              {done ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={goNext} className="rounded-full px-4 py-2 text-sm border border-black/10 hover:bg-neutral-50">
              Next lesson
            </button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
