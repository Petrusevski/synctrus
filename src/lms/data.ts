// src/lms/data.ts
// Data model + complete sample content for the Academy.
// Keeps your original article imports and fills in a full, working catalog.

import { evolutionOfLoyalty } from "./articles/evolution-of-loyalty";
import loyaltyEconomics101 from "./articles/loyalty-economics-101";
import programDesignFramework from "./articles/program-design-framework";
import programTypes from "./articles/program-types";
import kpisNorthStarMetrics from "./articles/kpis-north-star-metrics"
import earnRules from "./articles/earn-rules-and-multipliers";
import burnRules from "./articles/burn-rules-and-perceived-value"
import tiersStatusAndBenefits from "./articles/tiers-status-and-benefits";
import partnersAndCoalitions from "./articles/partners-and-coalitions";
import fraudAndGuardrails from "./articles/fraud-and-guardrails";
import opsFoundationsAndSLAs from "./articles/ops-foundations-and-slas";
import segmentationAndTriggers from "./articles/segmentation-and-triggers";
import journeysThatCompound from "./articles/journeys-that-compound";
import experimentationAndCausality from "./articles/experimentation-and-causality";
import reportingThatDrivesAction from "./articles/reporting-that-drives-action";
import { article as journeyMapping } from "./articles/journey-mapping";


// ---------- Types ----------
export type QuizQ = {
  id: string;
  q: string;
  options: string[];
  correct: number; // index into options[]
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
            correct: 2,
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
            correct: 1
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
            correct: 2
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
            correct: 1
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
            correct: 1
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
            correct: 3
          }]
      },
      {
        slug: "kpis-metrics",
        title: "KPIs & North-Star Metrics",
        duration: "16 min",
        kind: "article",
        content: kpisNorthStarMetrics,
        quiz: [
  {
    id: "kpi-q1",
    q: "What is the most effective North-Star Metric (NSM) for a loyalty program?",
    options: [
      "Total number of members enrolled",
      "Redeeming Active Members (RAM)",
      "Email open rate",
      "App downloads"
    ],
    correct: 1
  },
  {
    id: "kpi-q2",
    q: "Which KPI best measures the 'habit' strength of a member base?",
    options: [
      "Frequency of purchase",
      "Total issued points",
      "Social media followers",
      "Referral code usage"
    ],
    correct: 0
  },
  {
    id: "kpi-q3",
    q: "Why is Time-to-First-Benefit important in loyalty programs?",
    options: [
      "It indicates how fast members receive value and begin forming habits",
      "It measures the time between two redemptions",
      "It tracks when members reach elite tier",
      "It helps forecast annual liability"
    ],
    correct: 0
  },
  {
    id: "kpi-q4",
    q: "What does a healthy tier mix generally look like?",
    options: [
      "Equal number of members in each tier",
      "Mostly elite members with few new ones",
      "A pyramid shape — broad base, narrow elite top",
      "Constantly shifting membership proportions"
    ],
    correct: 2
  },
  {
    id: "kpi-q5",
    q: "Which common mistake weakens KPI frameworks?",
    options: [
      "Tracking both leading and lagging indicators",
      "Adjusting KPIs quarterly based on learnings",
      "Using too many metrics without clear ownership",
      "Aligning all teams around one NSM"
    ],
    correct: 2
  }
]
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
            correct: 1
          }
        ]
      },
      {
        slug: "earn-rules",
        title: "Earn Rules & Multipliers",
        duration: "18 min",
        kind: "article",
        content: earnRules,
        quiz: [
          {
            id: "earnrules-q1",
            q: "What is the primary purpose of category and behavior multipliers?",
            options: [
              "To increase overall program liability",
      "To reward desired behaviors or steer spend toward target categories",
      "To simplify accounting and reporting",
      "To eliminate the need for base earn rates"
    ],
    correct: 1
  },
  {
    id: "earnrules-q2",
    q: "Which of the following is an example of an event-based bonus?",
    options: [
      "Double points on fresh produce every Friday",
      "Reduced earn rate on discounted items",
      "Birthday bonus or anniversary reward",
      "1 point per €1 spent baseline rule"
    ],
    correct: 2
  },
  {
    id: "earnrules-q3",
    q: "What is a common guardrail for maintaining margin control?",
    options: [
      "Offering unlimited multipliers",
      "Setting a reward budget as a % of total sales",
      "Ignoring low-margin product categories",
      "Eliminating bonus events altogether"
    ],
    correct: 1
  },
  {
    id: "earnrules-q4",
    q: "Why should earn rules remain simple and transparent?",
    options: [
      "Complexity increases emotional value",
      "Transparency lowers engagement",
      "Simple mechanics improve comprehension and trust among members",
      "Hidden mechanics prevent gaming"
    ],
    correct: 2
  },
  {
    id: "earnrules-q5",
    q: "Which brand effectively uses multipliers to influence behavior rather than just spend?",
    options: [
      "Sephora Beauty Insider",
      "Starbucks Rewards",
      "Amazon Prime",
      "H&M Club"
    ],
    correct: 1
  }
]

      },
      {
        slug: "burn-rules",
        title: "Burn Rules & Perceived Value",
        duration: "16 min",
        kind: "article",
        content: burnRules,
        quiz: [
  {
    id: "burnrules-q1",
    q: "What is the main goal of a point value ladder?",
    options: [
      "To make point conversions more complex",
      "To structure redemption levels and build aspiration",
      "To reduce breakage",
      "To hide the real cost of rewards"
    ],
    correct: 1
  },
  {
    id: "burnrules-q2",
    q: "Why are dynamic catalogs effective in modern loyalty programs?",
    options: [
      "They increase liability through frequent catalog updates",
      "They prevent redemptions from being too predictable",
      "They keep rewards relevant and encourage repeat engagement",
      "They make redemption mechanics more complicated"
    ],
    correct: 2
  },
  {
    id: "burnrules-q3",
    q: "What’s the key difference between instant and delayed gratification?",
    options: [
      "Instant rewards are emotional; delayed rewards are transactional",
      "Instant rewards offer quick value, delayed ones build long-term motivation",
      "Delayed rewards are cheaper to fund than instant ones",
      "Instant rewards always reduce profitability"
    ],
    correct: 1
  },
  {
    id: "burnrules-q4",
    q: "What psychological principle does 'anchoring' use in redemption design?",
    options: [
      "Reciprocity",
      "Loss aversion",
      "Reference pricing to shape perceived value",
      "Scarcity"
    ],
    correct: 2
  },
  {
    id: "burnrules-q5",
    q: "Which best describes a healthy redemption rate for a mature loyalty program?",
    options: [
      "10–20%",
      "25–35%",
      "40–60%",
      "Over 80%"
    ],
    correct: 2
  }
]

      },
      {
        slug: "tiers",
        title: "Tiers, Status, and Benefits",
        duration: "22 min",
        kind: "article",
        content:
          tiersStatusAndBenefits,
        quiz: [
  {
    id: "tiers-q1",
    q: "What is the main purpose of tier structures in loyalty programs?",
    options: [
      "To limit reward access to high spenders only",
      "To introduce progression and recognition that motivate engagement",
      "To reduce the number of active members",
      "To simplify reward accounting"
    ],
    correct: 1
  },
  {
    id: "tiers-q2",
    q: "Which qualification model best fits brands with short purchase cycles like cafés or gyms?",
    options: [
      "Spend-based",
      "Frequency-based",
      "Engagement-based",
      "Mix model"
    ],
    correct: 1
  },
  {
    id: "tiers-q3",
    q: "What is a 'soft benefit' in loyalty program design?",
    options: [
      "A limited-time discount on select items",
      "An emotional or experiential reward like VIP events or priority service",
      "An extra earn rate bonus on purchases",
      "A promotional voucher issued quarterly"
    ],
    correct: 1
  },
  {
    id: "tiers-q4",
    q: "What does 'soft landing' mean in re-qualification logic?",
    options: [
      "Members are automatically upgraded each year",
      "Members drop one level instead of losing all status",
      "Tiers reset every six months",
      "Expired members are removed from the program"
    ],
    correct: 1
  },
  {
    id: "tiers-q5",
    q: "Why are tier names and visuals important?",
    options: [
      "They make technical reporting easier",
      "They reduce backend complexity",
      "They reinforce aspiration and recognition through symbolism",
      "They determine tax classification of rewards"
    ],
    correct: 2
  }
]

      },
      {
        slug: "partners",
        title: "Partners & Coalitions",
        duration: "15 min",
        kind: "article",
        content:
          partnersAndCoalitions,
          quiz: [
  {
    id: "partners-q1",
    q: "What is the primary purpose of introducing partners into a loyalty program?",
    options: [
      "To reduce member engagement opportunities",
      "To expand earn and burn occasions across complementary brands",
      "To remove control from the core brand",
      "To simplify program accounting"
    ],
    correct: 1
  },
  {
    id: "partners-q2",
    q: "Which partnership model allows members to earn at partner locations but redeem only with the core brand?",
    options: [
      "Burn Partner",
      "Co-brand",
      "Earn Partner",
      "Full Coalition"
    ],
    correct: 2
  },
  {
    id: "partners-q3",
    q: "What does financial settlement ensure in a coalition program?",
    options: [
      "That members cannot transfer points between brands",
      "That points issued and redeemed are properly reconciled among partners",
      "That marketing campaigns are aligned across regions",
      "That partner data is shared publicly"
    ],
    correct: 1
  },
  {
    id: "partners-q4",
    q: "What is a key rule for data sharing between coalition partners?",
    options: [
      "Use shared member email addresses for tracking",
      "Allow all partners access to complete purchase history",
      "Share only pseudonymized, purpose-limited transaction data",
      "Exchange all CRM databases regularly"
    ],
    correct: 2
  },
  {
    id: "partners-q5",
    q: "Why is partner QA essential?",
    options: [
      "To control how often members redeem points",
      "To ensure partner experiences maintain program reputation and quality",
      "To limit coalition growth",
      "To standardize all partners’ marketing colors"
    ],
    correct: 1
  }
]


      },
      {
        slug: "fraud-guardrails",
        title: "Fraud & Guardrails",
        duration: "24 min",
        kind: "article",
        content:
          fraudAndGuardrails,
          quiz: [
  {
    id: "fraud-q1",
    q: "What is the main goal of guardrails in loyalty programs?",
    options: [
      "To limit customer participation",
      "To detect and prevent fraudulent activity without harming genuine members",
      "To replace marketing campaigns",
      "To increase redemption costs"
    ],
    correct: 1
  },
  {
    id: "fraud-q2",
    q: "Which type of fraud involves creating fake accounts to trigger referral bonuses?",
    options: [
      "Account takeover",
      "Velocity abuse",
      "Referral abuse",
      "Employee misuse"
    ],
    correct: 2
  },
  {
    id: "fraud-q3",
    q: "What is a 'velocity limit' used for?",
    options: [
      "To cap how often a member can perform specific actions in a time period",
      "To limit redemption value by currency",
      "To track customer location in real time",
      "To manage advertising spend"
    ],
    correct: 0
  },
  {
    id: "fraud-q4",
    q: "What is a key benefit of human-in-the-loop review systems?",
    options: [
      "They remove the need for AI-based anomaly detection",
      "They ensure fair handling of flagged cases and reduce false positives",
      "They automate redemptions for verified users",
      "They allow partners to self-approve settlements"
    ],
    correct: 1
  },
  {
    id: "fraud-q5",
    q: "Which layer of a control framework focuses on detecting patterns like device farms or coordinated abuse?",
    options: [
      "Front-end controls",
      "Mid-layer behavioral AI",
      "Back-office review",
      "Settlement reconciliation"
    ],
    correct: 1
  }
]

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
        content: opsFoundationsAndSLAs,
        quiz: [
  {
    id: "ops-q1",
    q: "What is the purpose of defining incident classes in loyalty operations?",
    options: [
      "To assign blame during outages",
      "To categorize issues by impact and set clear response expectations",
      "To track marketing campaign performance",
      "To delay escalations for non-urgent issues"
    ],
    correct: 1
  },
  {
    id: "ops-q2",
    q: "What does an error budget represent?",
    options: [
      "Total allowed server costs per month",
      "Acceptable downtime or transaction failure before reviews or freezes",
      "Extra marketing budget for incident recovery",
      "Reserved engineering capacity for urgent fixes"
    ],
    correct: 1
  },
  {
    id: "ops-q3",
    q: "Which of the following is an example of release hygiene?",
    options: [
      "Deploying during peak campaigns to test scalability",
      "Skipping testing for minor UI fixes",
      "Maintaining change logs and rollback plans for every deployment",
      "Allowing ad-hoc releases from local environments"
    ],
    correct: 2
  },
  {
    id: "ops-q4",
    q: "Why are runbooks and playbooks essential?",
    options: [
      "They define incident responses and ensure repeatable recovery steps",
      "They replace monitoring systems",
      "They track partner settlements",
      "They are used for member onboarding"
    ],
    correct: 0
  },
  {
    id: "ops-q5",
    q: "What SLA target typically applies to redemption transactions?",
    options: [
      "99.5% success rate across all channels",
      "50% within one hour",
      "Uptime target of 80%",
      "5% failure budget per day"
    ],
    correct: 0
  }
]
    
      
      },
      {
        slug: "segmentation-triggers",
        title: "Segmentation & Triggers",
        duration: "18 min",
        kind: "article",
        content:
          segmentationAndTriggers,
        quiz: [
  {
    id: "segmentation-q1",
    q: "What is the main advantage of lifecycle segmentation?",
    options: [
      "It targets customers purely by spend amount",
      "It enables stage-specific communication that matches customer intent",
      "It replaces RFM scoring",
      "It reduces the need for CRM tools"
    ],
    correct: 1
  },
  {
    id: "segmentation-q2",
    q: "In RFM+ models, what does the '+' typically include beyond recency, frequency, and monetary value?",
    options: [
      "Inventory stock levels",
      "Engagement and redemption ratio metrics",
      "Customer location data",
      "Marketing channel performance"
    ],
    correct: 1
  },
  {
    id: "segmentation-q3",
    q: "What is the main purpose of cooldown logic?",
    options: [
      "To increase messaging frequency for better recall",
      "To prevent over-communication and maintain member trust",
      "To delay campaign execution until month-end",
      "To batch notifications for reporting efficiency"
    ],
    correct: 1
  },
  {
    id: "segmentation-q4",
    q: "Which of the following best represents an event trigger?",
    options: [
      "Member’s birthday → send reward email",
      "All members receive a weekly newsletter",
      "Quarterly KPI report generation",
      "Manual redemption data export"
    ],
    correct: 0
  },
  {
    id: "segmentation-q5",
    q: "How does 'VIP & At-Risk' detection help in loyalty automation?",
    options: [
      "It identifies high-value and disengaging members for tailored action",
      "It calculates transaction costs",
      "It segments members by demographic only",
      "It reduces partner settlement delays"
    ],
    correct: 0
  }
]

      },
      {
        slug: "journeys",
        title: "Journeys that Compound",
        duration: "22 min",
        kind: "article",
        content:
journeysThatCompound,
quiz: [
  {
    id: "journeys-q1",
    q: "What defines a compounding journey in loyalty automation?",
    options: [
      "A one-off campaign with multiple discounts",
      "A sequence of automated interactions that reinforce each other to deepen loyalty",
      "A standalone push notification campaign",
      "Any campaign that offers double points"
    ],
    correct: 1
  },
  {
    id: "journeys-q2",
    q: "Which journey type focuses on converting new joiners into active users?",
    options: [
      "Win-Back",
      "Onboarding",
      "Seasonal Arc",
      "VIP Recognition"
    ],
    correct: 1
  },
  {
    id: "journeys-q3",
    q: "What is 'behavioral laddering'?",
    options: [
      "A KPI framework for reporting campaign revenue",
      "The practice of stacking actions so each one builds toward a long-term goal",
      "A gamification mechanic unrelated to automation",
      "The process of randomly sequencing messages"
    ],
    correct: 1
  },
  {
    id: "journeys-q4",
    q: "Why should segments in journey orchestration be mutually exclusive?",
    options: [
      "To simplify reporting",
      "To prevent the same member from receiving conflicting automations",
      "To maximize campaign volume",
      "To ensure redundancy in targeting"
    ],
    correct: 1
  },
  {
    id: "journeys-q5",
    q: "Which brand’s loyalty design is a real-world example of compounding journeys?",
    options: [
      "Nike Membership",
      "TikTok Pro Creators",
      "Spotify Premium",
      "Netflix Basic"
    ],
    correct: 0
  }
]
      },
      {
        slug: "experimentation",
        title: "Experimentation & Causality",
        duration: "20 min",
        kind: "article",
        content:
experimentationAndCausality,

quiz: [
  {
    id: "exp-q1",
    q: "What is the main reason to include a holdout group in a campaign?",
    options: [
      "To maximize reach",
      "To establish a baseline and measure true incremental lift",
      "To test different creative versions",
      "To reduce sample size"
    ],
    correct: 1
  },
  {
    id: "exp-q2",
    q: "What does CUPED help you achieve in experiments?",
    options: [
      "Faster message delivery",
      "Variance reduction and improved test precision",
      "Better randomization",
      "Higher novelty impact"
    ],
    correct: 1
  },
  {
    id: "exp-q3",
    q: "Why is stratified randomization used?",
    options: [
      "To keep segment sizes unpredictable",
      "To ensure balanced representation across key member types",
      "To reduce campaign costs",
      "To simplify A/B test setup"
    ],
    correct: 1
  },
  {
    id: "exp-q4",
    q: "What is a common mistake that leads to false wins?",
    options: [
      "Running control groups too long",
      "Not accounting for novelty effects and regression-to-mean",
      "Choosing high-confidence metrics",
      "Testing multiple hypotheses"
    ],
    correct: 1
  },
  {
    id: "exp-q5",
    q: "Which best describes 'practical significance'?",
    options: [
      "The probability results occurred by chance",
      "Whether the effect size is large enough to matter economically",
      "A measure of novelty response",
      "The number of participants in the test"
    ],
    correct: 1
  }
]
},
      {
        slug: "reporting",
        title: "Reporting That Drives Action",
        duration: "16 min",
        kind: "article",
        content:
reportingThatDrivesAction,
quiz: [
  {
    id: "reporting-q1",
    q: "What’s the primary difference between leading and lagging indicators?",
    options: [
      "Leading indicators measure past results; lagging indicators predict future ones",
      "Leading indicators predict outcomes; lagging indicators confirm results after they occur",
      "Lagging indicators are used only for finance teams",
      "They are interchangeable terms for trend metrics"
    ],
    correct: 1
  },
  {
    id: "reporting-q2",
    q: "Why should dashboards be tailored by audience?",
    options: [
      "Because different roles need different levels of visibility and decision context",
      "To limit access to executives only",
      "To reduce the number of charts on screen",
      "To simplify visual design"
    ],
    correct: 0
  },
  {
    id: "reporting-q3",
    q: "What makes a report 'action-oriented'?",
    options: [
      "It includes decorative visuals",
      "It contains targets, trends, and accountability for next steps",
      "It tracks vanity metrics like total emails sent",
      "It hides threshold alerts to avoid noise"
    ],
    correct: 1
  },
  {
    id: "reporting-q4",
    q: "Which cadence is ideal for executive scorecards?",
    options: [
      "Daily",
      "Weekly",
      "Monthly",
      "Quarterly"
    ],
    correct: 2
  },
  {
    id: "reporting-q5",
    q: "What’s the risk of tracking too many metrics?",
    options: [
      "Higher infrastructure cost",
      "Noise and lack of decision clarity",
      "Lower dashboard refresh rate",
      "More automation work"
    ],
    correct: 1
  }
]

      }
    ]
  },
 {
  slug: "build-customer-journeys",
  level: "Intermediate",
  title: "Build Customer Journeys",
  subtitle: "Design automated, personalized journeys that guide customers from onboarding to retention.",
  est: "1.2 hrs",
  heroEmoji: "🧭",
  outcomes: [
    "Master lifecycle mapping and customer segmentation",
    "Build multi-channel engagement flows",
    "Detect churn signals and reactivation opportunities"
  ],
  syllabus: [
    {
      slug: "journey-mapping",
      title: "Journey Mapping & Lifecycle Design",
      duration: "14 min",
      kind: "article"
    },
    {
      slug: "behavioral-triggers",
      title: "Behavioral Triggers & Frequency Caps",
      duration: "12 min",
      kind: "article"
    },
    {
      slug: "journey-orchestration",
      title: "Multi-Channel Journey Orchestration",
      duration: "15 min",
      kind: "article"
    },
    {
      slug: "winback-flows",
      title: "Reactivation & Win-Back Flows",
      duration: "10 min",
      kind: "article"
    },
    {
      slug: "journey-measurement",
      title: "Measuring Journey Performance",
      duration: "12 min",
      kind: "article"
    }
  ]
},
{
  slug: "loyalty-automations",
  level: "Advanced",
  title: "Loyalty Automations",
  subtitle: "Turn loyalty rules into living automations with workflows, triggers, and multi-channel logic.",
  est: "1.1 hrs",
  heroEmoji: "⚙️",
  outcomes: [
    "Automate earn & burn logic across systems",
    "Implement Make.com and n8n loyalty blueprints",
    "Add fraud prevention and smart throttling layers"
  ],
  syllabus: [
    {
      slug: "make-blueprints",
      title: "Make.com Loyalty Blueprints",
      duration: "13 min",
      kind: "article"
    },
    {
      slug: "n8n-loyalty",
      title: "n8n Loyalty Journeys",
      duration: "14 min",
      kind: "article"
    },
    {
      slug: "crm-pos-integration",
      title: "CRM & POS Integration Layer",
      duration: "11 min",
      kind: "article"
    },
    {
      slug: "fraud-detection",
      title: "Fraud Detection & Velocity Checks",
      duration: "10 min",
      kind: "article"
    },
    {
      slug: "scheduling-throttling",
      title: "Advanced Scheduling & Throttling",
      duration: "12 min",
      kind: "article"
    }
  ]
},
{
  slug: "ai-loyalty-programs",
  level: "Advanced",
  title: "AI for Loyalty Programs",
  subtitle: "Use machine learning and AI agents to personalize, predict, and optimize loyalty engagement.",
  est: "1.3 hrs",
  heroEmoji: "🤖",
  outcomes: [
    "Understand predictive segmentation and churn modeling",
    "Deliver AI-driven offer personalization",
    "Integrate Context-as-a-Service for loyalty assistants"
  ],
  syllabus: [
    {
      slug: "predictive-segmentation",
      title: "Predictive Segmentation Models",
      duration: "14 min",
      kind: "article"
    },
    {
      slug: "dynamic-rewards",
      title: "Dynamic Reward Recommendations",
      duration: "13 min",
      kind: "article"
    },
    {
      slug: "ltv-forecasting",
      title: "LTV Prediction & Cohort Forecasting",
      duration: "11 min",
      kind: "article"
    },
    {
      slug: "ai-copy",
      title: "AI-Assisted Content & Copy",
      duration: "10 min",
      kind: "article"
    },
    {
      slug: "caas-loyalty",
      title: "Context-as-a-Service for Loyalty Agents",
      duration: "12 min",
      kind: "article"
    }
  ]
}

];

export default courses;
