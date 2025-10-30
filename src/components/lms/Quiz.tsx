// src/components/lms/Quiz.tsx
import { useMemo, useState } from "react";

// Keep in sync with src/lms/data.ts
export type QuizItem = {
  q: string;
  options: string[];
  correct: number; // index in options
  explain?: string;
};

export default function Quiz({
  qs,
  onResult,
}: {
  qs: QuizItem[];
  onResult?: (score: number, total: number) => void;
}) {
  // Simple deterministic hash so keys stay stable even if order doesn't change
  const hash = (s: string) =>
    Array.from(s).reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0);

  const [answers, setAnswers] = useState<Record<number, number | null>>(
    () => Object.fromEntries(qs.map((_, i) => [i, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      Object.entries(answers).reduce((acc, [i, val]) => {
        const idx = Number(i);
        return acc + (val === qs[idx].correct ? 1 : 0);
      }, 0),
    [answers, qs]
  );

  const allAnswered = useMemo(
    () => Object.values(answers).every((v) => v !== null),
    [answers]
  );

  const submit = () => {
    setSubmitted(true);
    onResult?.(score, qs.length);
  };

  return (
    <div className="space-y-6">
      {qs.map((item, qi) => {
        const qKey = `q-${qi}-${hash(item.q)}`;
        return (
          <div
            key={qKey}
            className="rounded-xl border border-black/10 p-4 md:p-5"
          >
            <div className="font-medium mb-3">
              {qi + 1}. {item.q}
            </div>

            <div className="space-y-2">
              {item.options.map((opt, oi) => {
                const optKey = `opt-${qi}-${oi}-${hash(opt)}`;
                const inputId = `quiz-${qKey}-${oi}`;
                const chosen = answers[qi];

                // Visual feedback after submit
                const isCorrect = submitted && oi === item.correct;
                const isWrong =
                  submitted && chosen === oi && oi !== item.correct;

                return (
                  <label
                    key={optKey}
                    htmlFor={inputId}
                    className={[
                      "flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition",
                      isCorrect
                        ? "border-emerald-400 bg-emerald-50"
                        : isWrong
                        ? "border-red-300 bg-red-50"
                        : "border-black/10 hover:bg-neutral-50",
                    ].join(" ")}
                  >
                    <input
                      id={inputId}
                      name={`quiz-${qKey}`}
                      type="radio"
                      className="mt-0.5"
                      checked={answers[qi] === oi}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [qi]: oi }))
                      }
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                );
              })}
            </div>

            {submitted && item.explain && (
              <div className="mt-3 rounded-lg bg-neutral-50 border border-black/10 p-3 text-sm text-neutral-700">
                <span className="font-semibold">Why: </span>
                {item.explain}
              </div>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={submit}
          disabled={!allAnswered}
          className="rounded-full px-4 py-2 text-sm text-white disabled:opacity-40 bg-black hover:opacity-90"
        >
          {submitted ? "Recalculate" : "Submit"}
        </button>
        {submitted && (
          <div className="text-sm text-neutral-700">
            Score:{" "}
            <span className="font-semibold">
              {score} / {qs.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
