// src/components/lms/ProgressBar.tsx
export default function ProgressBar({ pct }: { pct: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-neutral-200">
      <div className="h-2 rounded-full bg-amber-500 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}
