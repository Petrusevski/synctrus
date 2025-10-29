// src/components/lms/CourseCard.tsx
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function CourseCard({
  to, title, subtitle, level, est, emoji, pct
}: { to: string; title: string; subtitle: string; level: string; est: string; emoji?: string; pct: number; }) {
  return (
    <Link to={to} className="group block rounded-2xl border border-black/10 p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wide text-neutral-500">{level}</span>
        <span className="text-xs text-neutral-500">{est}</span>
      </div>
      <h3 className="text-xl font-semibold">{emoji ? `${emoji} ` : ""}{title}</h3>
      <p className="text-neutral-600 mt-2">{subtitle}</p>
      <div className="mt-4">
        <ProgressBar pct={pct} />
        <div className="text-xs text-neutral-500 mt-1">{pct}% complete</div>
      </div>
    </Link>
  );
}
