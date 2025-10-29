// src/pages/academy/AcademyHome.tsx
import Reveal from "../../components/Reveal";
import CourseCard from "../../components/lms/CourseCard";
import { courses } from "../../lms/data";
import { coursePct } from "../../lms/progress";

export default function AcademyHome() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="kicker">Synctrus Academy</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Learn Loyalty — from basics to advanced strategy</h1>
            <p className="text-neutral-600 mt-4">Short, practical modules built from real programs we’ve shipped. Track progress, take quizzes, and earn completion badges.</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {courses.map(c => (
              <CourseCard
                key={c.slug}
                to={`/academy/course/${c.slug}`}
                title={c.title}
                subtitle={c.subtitle}
                level={c.level}
                est={c.est}
                emoji={c.heroEmoji}
                pct={coursePct(c.slug, c.syllabus.length)}
              />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
