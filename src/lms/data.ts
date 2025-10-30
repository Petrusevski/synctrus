// src/lms/data.ts
// Data model + complete sample content for the Academy.
// Keeps your original article imports and fills in a full, working catalog.

import { evolutionOfLoyalty } from "./articles/evolution-of-loyalty";
import loyaltyEconomics101 from "./articles/loyalty-economics-101";
import programDesignFramework from "./articles/program-design-framework";
import programTypes from "./articles/program-types";

// ---------- Types ----------
export type QuizQ = {
  id: string;
  q: string;
  options: string[];
  answerIndex: number; // index into options[]
  explain?: string;
};

export type Lesson = {
  slug: string;
  title: string;
  duration: string; // e.g. "14 min"
  kind?: "video" | "article";
  videoUrl?: string;
  content?: string; // markdown/html string from imported articles or inline
  quiz?: QuizQ[];
};

export type Course = {
  slug: string;           // url slug
  level: "Foundations" | "Intermediate" | "Advanced";
  title: string;
  subtitle: string;
  est: string;            // e.g. "2.5 hrs"
  heroEmoji: string;      // fun emoji for cards
  outcomes: string[];
  syllabus: Lesson[];
};

// ---------- Catalog ----------
export const courses: Course[] = [
  {
    slug: "loyalty-foundations",
    level: "Foundations",
    title: "Loyalty Foundations",
    subtitle: "Purpose, psychology, and economics of loyalty.",
    est: "2.5 hrs",
    heroEmoji: "🎓",
    outcomes: [
      "Explain loyalty program types & when each fits best.",
      "Understand value exchange, breakage, liability & margins.",
      "Identify data signals that predict retention and churn.",
      "Map the member journey from onboarding to advocacy."
    ],
    syllabus: [
      {
        slug: "what-is-loyalty",
        title: "What Is Loyalty?",
        duration: "10 min",
        kind: "article",
        content: evolutionOfLoyalty
      },
      {
        slug: "loyalty-economics",
        title: "Loyalty Economics 101",
        duration: "18 min",
        kind: "article",
        content: loyaltyEconomics101,
        quiz: [
          {
            id: "econ-q1",
            q: "Which statement about breakage is MOST accurate?",
            options: [
              "Breakage always increases program liability.",
              "Breakage has no effect on margins.",
              "Breakage can improve margins but lower perceived value if too high.",
              "Breakage makes accounting impossible."
            ],
            answerIndex: 2,
            explain:
              "Moderate breakage can improve unit economics, but excessive breakage hurts trust and perceived value."
          },
          {
            id: "econ-q2",
            q: "Points liability on the balance sheet primarily reflects:",
            options: [
              "The marketing budget.",
              "The expected cost of future redemptions.",
              "Gross profit from last quarter.",
              "Total ARPU including VAT."
            ],
            answerIndex: 1
          }
        ]
      },
      
      {
                slug: "program-types",
        title: "Program Types: Cashback, Tiers & Points",
        duration: "22 min",
        kind: "article",
        content: programTypes,

                quiz: [
          {
            id: "program-q1",
            q: "Which statement about breakage is MOST accurate?",
            options: [
              "Breakage always increases program liability",
              "Breakage has no effect on margins",
              "Moderate breakage can improve margins but too much lowers perceived value",
              "Breakage makes accounting impossible"
            ],
            answerIndex: 2
          },
          {
            id: "program-q2",
            q: "What should be defined BEFORE choosing mechanics (like points vs cashback)?",
            options: [
              "MarTech vendor short list",
              "Value exchange & business outcomes",
              "Push template design",
              "Coupon color palette"
            ],
            answerIndex: 1
          },
          {
            id: "program-q3",
            q: "A safe re-engagement trigger should include:",
            options: [
              "No cooldowns",
              "A global daily frequency cap",
              "Issuing points twice per event",
              "Ignoring opt-out state"
            ],
            answerIndex: 1
          },
          {
            id: "program-q4",
            q: "In a tiered program, which of the following is a common error?",
            options: [
              "Clearly communicated tier thresholds",
              "Mix of transactional and experiential benefits",
              "Soft landing when a member drops tier",
              "Too many tiers making progression feel unreachable"
            ],
            answerIndex: 3
          }]
      },
      {
        slug: "kpis-metrics",
        title: "KPIs & North-Star Metrics",
        duration: "16 min",
        kind: "article",
        content:
          "Define NSM (e.g., redeeming active members), track AOV, frequency, LTV/CAC, time-to-first-benefit, and tier mix."
      }
    ]
  },

  {
    slug: "program-design",
    level: "Intermediate",
    title: "Program Design & Architecture",
    subtitle: "From value model to rules, tiers, and rewards marketplace.",
    est: "3 hrs",
    heroEmoji: "🧩",
    outcomes: [
      "Translate brand strategy into a loyalty value model.",
      "Design earn/burn rules, tiers, and partner constructs.",
      "Balance attractiveness vs. unit economics.",
      "Produce an implementation-ready spec."
    ],
    syllabus: [
      {
        slug: "design-framework",
        title: "Design Framework",
        duration: "20 min",
        kind: "article",
        content: programDesignFramework,
        quiz: [
          {
            id: "design-q1",
            q: "What should be defined BEFORE choosing mechanics?",
            options: [
              "MarTech vendor short list",
              "Value exchange & business outcomes",
              "Push template design",
              "Coupon color palette"
            ],
            answerIndex: 1
          }
        ]
      },
      {
        slug: "earn-rules",
        title: "Earn Rules & Multipliers",
        duration: "18 min",
        kind: "article",
        content:
          "Base earn rates, category multipliers, welcome/anniversary bonuses, and guardrails vs. margin."
      },
      {
        slug: "burn-rules",
        title: "Burn Rules & Perceived Value",
        duration: "16 min",
        kind: "article",
        content:
          "Point value ladders, dynamic catalogs, instant vs. delayed gratification, and anchoring redemptions."
      },
      {
        slug: "tiers",
        title: "Tiers, Status, and Benefits",
        duration: "22 min",
        kind: "article",
        content:
          "Qualification models (spend, frequency, mix), soft benefits (priority support, events), and re-qualification logic.",
        quiz: [
          {
            id: "tiers-q1",
            q: "A healthy tier design should primarily:",
            options: [
              "Maximize elite share instantly",
              "Create progression with meaningful differentiation",
              "Be identical across all markets",
              "Eliminate re-qualification"
            ],
            answerIndex: 1
          }
        ]
      },
      {
        slug: "partners",
        title: "Partners & Coalitions",
        duration: "15 min",
        kind: "article",
        content:
          "Co-brands, shared points, settlement basics, data sharing, and partner QA practices."
      },
      {
        slug: "fraud-guardrails",
        title: "Fraud & Guardrails",
        duration: "24 min",
        kind: "article",
        content:
          "Velocity limits, device signals, geo checks, anomaly alerts, and human-in-the-loop policies."
      }
    ]
  },

  {
    slug: "ops-analytics",
    level: "Advanced",
    title: "Operations, Automation & Analytics",
    subtitle: "Journeys, segmentation, experimentation, and reporting.",
    est: "3.5 hrs",
    heroEmoji: "📊",
    outcomes: [
      "Operationalize journeys and triggers safely at scale.",
      "Build segmentation that compounds LTV.",
      "Run clean A/B tests with guardrails.",
      "Instrument reporting for action, not vanity."
    ],
    syllabus: [
      {
        slug: "ops-foundations",
        title: "Ops Foundations & SLAs",
        duration: "14 min",
        kind: "article",
        content:
          "Incident classes, SLAs for issuance/redemption, error budgets, runbooks, and release hygiene."
      },
      {
        slug: "segmentation-triggers",
        title: "Segmentation & Triggers",
        duration: "18 min",
        kind: "article",
        content:
          "Lifecycle segments, RFM+ recency decay, VIP/at-risk detection, event triggers, and cooldown logic.",
        quiz: [
          {
            id: "seg-q1",
            q: "A safe re-engagement trigger should include:",
            options: [
              "No cooldowns",
              "A global daily frequency cap",
              "Issuing points twice per event",
              "Ignoring opt-out state"
            ],
            answerIndex: 1
          }
        ]
      },
      {
        slug: "journeys",
        title: "Journeys that Compound",
        duration: "22 min",
        kind: "article",
        content:
          "Onboarding, first-value, win-back, VIP recognition, and seasonal arcs that ladder to core behaviors."
      },
      {
        slug: "experimentation",
        title: "Experimentation & Causality",
        duration: "20 min",
        kind: "article",
        content:
          "Holdouts, CUPED, stratification, novelty effects, and regression-to-mean—so you don’t ship false wins."
      },
      {
        slug: "reporting",
        title: "Reporting That Drives Action",
        duration: "16 min",
        kind: "article",
        content:
          "From dashboards to decisions: leading vs. lagging indicators, operator views, and exec scorecards."
      }
    ]
  }
];

export default courses;
