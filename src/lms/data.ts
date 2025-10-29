// src/lms/data.ts
export type QuizQ = { id: string; q: string; options: string[]; answerIndex: number; };
export type Lesson = {
  slug: string; title: string; duration: string; kind?: "video"|"article";
  videoUrl?: string; content?: string; quiz?: QuizQ[];
};
export type Course = {
  slug: string; level: "Foundations" | "Intermediate" | "Advanced";
  title: string; subtitle: string; est: string; heroEmoji?: string;
  outcomes: string[]; syllabus: Lesson[];
};

export const courses: Course[] = [
  {
    slug: "loyalty-foundations",
    level: "Foundations",
    title: "Loyalty Foundations",
    subtitle: "Purpose, psychology, and economics of loyalty.",
    est: "2.5 hrs",
    heroEmoji: "🎓",
    outcomes: [
      "Explain loyalty program types & when to use each",
      "Calculate basic earn/burn & breakage",
      "Map a simple journey (join → earn → redeem)"
    ],
    syllabus: [
      {
        slug: "evolution-of-loyalty",
        title: "Evolution of Loyalty",
        duration: "18 min",
        kind: "article",
        content:
`From stamps to ecosystems. Emotional vs transactional loyalty.
Key terms: earn, burn, tiers, breakage, liability.`,
        quiz: [
          { id: "q1", q: "Which is an example of transactional loyalty?",
            options: ["Exclusive club access", "Cashback on purchase", "Brand community"], answerIndex: 1 }
        ]
      },
      {
        slug: "program-types",
        title: "Program Types (points, tiers, cashback)",
        duration: "22 min",
        kind: "video",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        quiz: [
          { id: "q2", q: "Tiers are best when:", options: [
            "You want status & experiential perks",
            "You only offer % discounts",
            "You cannot identify customers"
          ], answerIndex: 0 }
        ]
      },
      {
        slug: "loyalty-economics",
        title: "Loyalty Economics 101",
        duration: "28 min",
        kind: "article",
        content:
`Earn/burn ratios, funding & margin, breakage, payback period.
Mini-exercise: compute ROI on a simple café program.`,
      }
    ]
  },
  {
    slug: "mechanics-operations",
    level: "Intermediate",
    title: "Mechanics & Operations",
    subtitle: "Design, segment, automate, and measure.",
    est: "3 hrs",
    heroEmoji: "⚙️",
    outcomes: [
      "Design rules & thresholds",
      "Create lifecycle journeys with triggers",
      "Read KPIs and run holdouts"
    ],
    syllabus: [
      { slug: "design-framework", title: "Program Design Framework", duration: "24 min", kind: "article",
        content: "Goals → constraints → rules → experiences. Guardrails & governance." },
      { slug: "segmentation-triggers", title: "Segmentation & Triggers", duration: "26 min", kind: "article",
        content: "RFM, behavior, suppression lists, fatigue control, personalisation." },
      { slug: "kpis-experiments", title: "KPIs & Experiments", duration: "27 min", kind: "article",
        content: "Cohorts, incrementality, voucher cannibalisation, readout cadence." },
    ]
  },
  {
    slug: "advanced-strategy",
    level: "Advanced",
    title: "Advanced Strategy",
    subtitle: "CLV modeling, partner ecosystems, and fraud control.",
    est: "3.5 hrs",
    heroEmoji: "🚀",
    outcomes: [
      "Model CLV & forecast churn",
      "Design partner ecosystems",
      "Set anti-fraud velocity checks"
    ],
    syllabus: [
      { slug: "clv-modeling", title: "CLV & Forecasting", duration: "32 min", kind: "article",
        content: "Simplified CLV; segment targeting; moving from averages to cohorts." },
      { slug: "partners-coalitions", title: "Partners & Coalitions", duration: "21 min", kind: "article",
        content: "Co-brands, shared points, settlement basics, data sharing." },
      { slug: "fraud-guardrails", title: "Fraud & Guardrails", duration: "24 min", kind: "article",
        content: "Velocity limits, device signals, geo checks, anomaly alerts." },
    ]
  }
];
