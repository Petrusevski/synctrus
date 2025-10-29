// src/components/lms/Quiz.tsx
import { useState } from "react";
import type { QuizQ } from "../../lms/data";

export default function Quiz({ qs, onResult }: { qs: QuizQ[]; onResult?: (score:number)=>void }) {
  const [sel, setSel] = useState<Record<string, number>>({});
  const score = qs.reduce((acc, q)=> acc + ((sel[q.id]===q.answerIndex)?1:0), 0);
  return (
    <div className="mt-8 space-y-6">
      {qs.map(q => (
        <div key={q.id} className="rounded-xl border border-black/10 p-4">
          <div className="font-medium mb-2">{q.q}</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {q.options.map((opt, i) => (
              <button key={i}
                onClick={()=>setSel(s=>({...s, [q.id]: i}))}
                className={`rounded-lg border px-3 py-2 text-left ${sel[q.id]===i?'border-amber-500 bg-amber-50':'border-black/10 hover:border-black/20'}`}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600">Score: {score}/{qs.length}</div>
        <button
          onClick={()=>onResult?.(score)}
          className="rounded-full bg-black text-white text-sm px-4 py-2 hover:opacity-90">
          Submit
        </button>
      </div>
    </div>
  );
}
