import Reveal from "../../components/Reveal";
import CourseCard from "../../components/lms/CourseCard";
import { courses } from "../../lms/data";
import { coursePct } from "../../lms/progress";

export default function AcademyHome() {
const advancedTracks = [
  {
    title: "Build Customer Journeys",
    emoji: "🧭",
    description:
      "Design automated, personalized journeys that guide customers from onboarding to retention.",
    subcourses: [
      { title: "Journey Mapping & Lifecycle Design", slug: "journey-mapping" },
      { title: "Behavioral Triggers & Frequency Caps", slug: "behavioral-triggers" },
      { title: "Multi-Channel Journey Orchestration", slug: "journey-orchestration" },
      { title: "Reactivation & Win-Back Flows", slug: "winback-flows" },
      { title: "Measuring Journey Performance", slug: "journey-measurement" },
    ],
  },
  {
    title: "Loyalty Automations",
    emoji: "⚙️",
    description:
      "Turn loyalty rules into living automations with workflows, triggers, and multi-channel logic.",
    subcourses: [
      { title: "Make.com Loyalty Blueprints", slug: "make-blueprints" },
      { title: "n8n Loyalty Journeys", slug: "n8n-loyalty" },
      { title: "CRM & POS Integration Layer", slug: "crm-pos-integration" },
      { title: "Fraud Detection & Velocity Checks", slug: "fraud-detection" },
      { title: "Advanced Scheduling & Throttling", slug: "scheduling-throttling" },
    ],
  },
  {
    title: "AI for Loyalty Programs",
    emoji: "🤖",
    description:
      "Use machine learning and AI agents to personalize, predict, and optimize loyalty engagement.",
    subcourses: [
      { title: "Predictive Segmentation Models", slug: "predictive-segmentation" },
      { title: "Dynamic Reward Recommendations", slug: "dynamic-rewards" },
      { title: "LTV Prediction & Cohort Forecasting", slug: "ltv-forecasting" },
      { title: "AI-Assisted Content & Copy", slug: "ai-copy" },
      { title: "Context-as-a-Service for Loyalty Agents", slug: "caas-loyalty" },
    ],
  },
];

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="kicker">Synctrus Academy</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Learn Loyalty — from basics to advanced strategy
            </h1>
            <p className="text-neutral-600 mt-4">
              Short, practical modules built from real programs we’ve shipped.
              Track progress, take quizzes, and earn completion badges.
            </p>
          </div>
        </Reveal>

        {/* Core courses grid */}
        <Reveal delay={80}>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {courses.map((c) => (
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
