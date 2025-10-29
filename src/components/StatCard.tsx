export default function StatCard({label, value, hint}:{label:string; value:string; hint?:string}) {
  return (
    <div className="rounded-2xl border border-gray-200/70 bg-white/80 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
      {hint && <div className="text-xs text-gray-500 mt-1">{hint}</div>}
    </div>
  );
}
