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
import {journeyMapping} from "./articles/journey-mapping";
import {behavioralTriggers} from "./articles/behavioral-triggers";
import {multiChannelJourney} from "./articles/multi-channel-journey";
import {reactivationWinback} from "./articles/reactivation-winback";
import { measuringJourneyPerformance } from "./articles/measuring-journey-performance";
import { makeLoyaltyBlueprints } from "./articles/make-loyalty-blueprints";
import { n8nLoyaltyJourneys } from "./articles/n8n-loyalty-journeys";
import { crmPosIntegrationLayer } from "./articles/crm-pos-integration-layer";
import { fraudDetectionVelocity } from "./articles/fraud-detection-velocity"; 
import { advancedSchedulingThrottling } from "./articles/advanced-scheduling-throttling"; 
import { predictiveSegmentationModels } from "./articles/predictive-segmentation-models"; 
import { dynamicRewardRecommendations } from "./articles/dynamic-reward-recommendations";
import { ltvPredictionCohortForecasting } from "./articles/ltv-prediction-cohort-forecasting";  
import { aiAssistedContentCopy } from "./articles/ai-assisted-content-copy";    
import { caasForLoyaltyAgents } from "./articles/caas-for-loyalty-agents";  

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
  content?: any; // markdown/html string from imported articles or inline
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
        content: evolutionOfLoyalty,
        quiz: [
  {
    id: "eol-q1",
    q: "What was the earliest form of loyalty marketing mentioned in the article?",
    options: [
      "Digital wallets and apps",
      "Physical stamps given by retailers for future discounts",
      "Tiered memberships with bonus points",
      "Credit card cashback programs"
    ],
    correct: 1
  },
  {
    id: "eol-q2",
    q: "What is the key difference between transactional and emotional loyalty?",
    options: [
      "Transactional loyalty focuses on emotional connection, while emotional loyalty is purely financial",
      "Transactional loyalty is driven by tangible benefits, while emotional loyalty is driven by identity and belonging",
      "Both are identical in motivation but differ in duration",
      "Emotional loyalty is easier to copy than transactional"
    ],
    correct: 1
  },
  {
    id: "eol-q3",
    q: "According to the article, what defines context-based loyalty in the post-COVID era?",
    options: [
      "Price-based competition through deeper discounts",
      "Contextual relevance, seamless omnichannel earning, and micro-rewards",
      "Elimination of emotional engagement from programs",
      "Focusing only on online redemption behavior"
    ],
    correct: 1
  },
  {
    id: "eol-q4",
    q: "Which metric reflects the health of a program’s reward economy?",
    options: [
      "Customer Lifetime Value (CLV)",
      "Retention Rate",
      "Earn/Burn Ratio",
      "Incremental Uplift"
    ],
    correct: 2
  },
  {
    id: "eol-q5",
    q: "What psychological principle supports the use of 'variable rewards'?",
    options: [
      "Predictable patterns reduce surprise",
      "Randomized surprises trigger dopamine and sustain engagement",
      "Constant repetition improves recall",
      "Reducing communication frequency improves loyalty"
    ],
    correct: 1
  },
  {
    id: "eol-q6",
    q: "Which of the following is listed as a common reason loyalty programs fail?",
    options: [
      "Too much communication with members",
      "Neglecting data feedback and not iterating based on metrics",
      "Rewarding only emotional behaviors",
      "Low breakage rates"
    ],
    correct: 1
  },
  {
    id: "eol-q7",
    q: "Modern loyalty technology platforms primarily serve what purpose?",
    options: [
      "Issuing coupons manually to selected customers",
      "Acting as engagement middleware with real-time wallets, triggers, and APIs",
      "Reducing data collection from multiple channels",
      "Automating only payment processing"
    ],
    correct: 1
  },
  {
    id: "eol-q8",
    q: "According to the final takeaway, loyalty has evolved into what kind of business engine?",
    options: [
      "A promotional expense center",
      "A short-term marketing tactic",
      "A strategic growth engine combining economics, behavioral design, and technology",
      "A social media engagement tool"
    ],
    correct: 2
  }
]

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
      kind: "article",
      content: journeyMapping,
      quiz: [
    {
      id: "jm-q1",
      q: "What is the primary goal of journey mapping in loyalty?",
      options: [
        "To schedule more campaigns per month",
        "To visualize customer stages, emotions, and transitions so you can design the right interventions",
        "To maximize discount depth at each touchpoint",
        "To replace segmentation with a single lifecycle metric"
      ],
      correct: 1
    },
    {
      id: "jm-q2",
      q: "Which BEST defines a lifecycle stage transition?",
      options: [
        "A change in campaign name",
        "A shift in customer intent or behavior that crosses a data threshold (e.g., first purchase, 30 days inactive)",
        "The time of day a user opens emails",
        "When a budget is approved"
      ],
      correct: 1
    },
    {
      id: "jm-q3",
      q: "Why pair each stage with a success metric AND an emotional intent?",
      options: [
        "It simplifies dashboards by removing KPIs",
        "It ensures creative and offers are chosen by brand guidelines only",
        "It aligns design choices to both business outcomes and what the customer is trying to achieve",
        "It guarantees higher discounts"
      ],
      correct: 2
    },
    {
      id: "jm-q4",
      q: "What’s the smartest next step after mapping the lifecycle?",
      options: [
        "Launch every idea at once to learn faster",
        "Identify high-leverage triggers for one or two stages and ship minimal interventions you can measure",
        "Freeze the map for a year to maintain consistency",
        "Turn off churn prevention to avoid noise"
      ],
      correct: 1
    }
  ]
},

    {
      slug: "behavioral-triggers",
      title: "Behavioral Triggers & Frequency Caps",
      duration: "12 min",
      kind: "article",
      content: behavioralTriggers,
      quiz: [
  {
    id: "bt-q1",
    q: "What is the primary purpose of behavioral triggers?",
    options: [
      "To schedule messages on fixed calendar dates",
      "To react in real time to meaningful customer actions",
      "To increase discount depth automatically",
      "To replace segmentation with a single metric"
    ],
    correct: 1
  },
  {
    id: "bt-q2",
    q: "Which statement best describes frequency capping?",
    options: [
      "It limits how many points a member can earn per month",
      "It refreshes message templates in the CMS",
      "It limits how many messages a customer receives within a time window",
      "It sets the maximum number of loyalty tiers"
    ],
    correct: 2
  },
  {
    id: "bt-q3",
    q: "“Send only one abandoned-cart reminder per cart event.” This is an example of which cap type?",
    options: [
      "Channel-level cap",
      "Campaign-level cap",
      "Global cap",
      "Budget cap"
    ],
    correct: 1
  },
  {
    id: "bt-q4",
    q: "Which is a recommended best practice when combining triggers and caps?",
    options: [
      "Send onboarding offers to all users regardless of stage",
      "Include a cooldown window between triggered messages",
      "Ignore engagement decay to avoid bias",
      "Disable caps during promotions"
    ],
    correct: 1
  },
  {
    id: "bt-q5",
    q: "Your global cap is 3 communications per 7 days. A customer already received 2 emails and 1 push this week. Should today’s abandoned-cart SMS fire?",
    options: [
      "Yes — only channel-level caps matter here",
      "No — it should be blocked by the global cap",
      "Yes — triggers always override caps",
      "Only if the cart value is above average order value"
    ],
    correct: 1
  },
  {
    id: "bt-q6",
    q: "Which set contains useful fatigue indicators for cap tuning?",
    options: [
      "Unsubscribe rate, opt-out rate, growing inactivity",
      "Cost per mille (CPM), creative production hours",
      "SKU count, inventory turnover",
      "Store footfall, shelf share"
    ],
    correct: 0
  }
]

        },
    {
      slug: "journey-orchestration",
      title: "Multi-Channel Journey Orchestration",
      duration: "15 min",
      kind: "article",
      content: multiChannelJourney,
      quiz: [{
    id: "mcjo-q1",
    q: "What is the key difference between multi-channel presence and multi-channel orchestration?",
    options: [
      "Presence means being on several channels; orchestration means coordinating them into one experience",
      "Orchestration refers to sending more messages across every channel",
      "Presence is used only for paid media; orchestration is for loyalty programs",
      "They are identical terms used interchangeably"
    ],
    correct: 0
  },
  {
    id: "mcjo-q2",
    q: "Which of the following is an example of proper orchestration?",
    options: [
      "Sending an email and push notification at the same time for the same offer",
      "Pausing an email follow-up when a push notification was already opened",
      "Running two campaigns targeting the same segment from different teams",
      "Delivering identical creatives through all channels"
    ],
    correct: 1
  },
  {
    id: "mcjo-q3",
    q: "Which channel is BEST suited for timely transactional confirmations?",
    options: [
      "Paid media",
      "Email newsletters",
      "SMS or WhatsApp",
      "In-store displays"
    ],
    correct: 2
  },
  {
    id: "mcjo-q4",
    q: "What is the purpose of a 'centralized profile' in journey orchestration?",
    options: [
      "To track only loyalty points",
      "To store isolated data for each campaign",
      "To unify all channel interactions for consistent decisioning",
      "To manage product inventory"
    ],
    correct: 2
  },
  {
    id: "mcjo-q5",
    q: "How can teams prevent channel conflicts during campaigns?",
    options: [
      "Send all promotions simultaneously to ensure reach",
      "Use frequency caps and prioritization logic across channels",
      "Allow each department to manage its own contact list independently",
      "Turn off suppression rules during peak seasons"
    ],
    correct: 1
  },
  {
    id: "mcjo-q6",
    q: "What metric helps measure how one channel supports another in conversions?",
    options: [
      "Assist behavior",
      "Open rate",
      "Net promoter score",
      "Click-through rate"
    ],
    correct: 0
  }]
    },
    {
      slug: "winback-flows",
      title: "Reactivation & Win-Back Flows",
      duration: "10 min",
      kind: "article",
      content: reactivationWinback,
      quiz: [
  {
    id: "rwf-q1",
    q: "What is the main purpose of a reactivation flow?",
    options: [
      "To acquire new customers through referrals",
      "To detect and re-engage dormant customers before they churn completely",
      "To increase loyalty tier progression for active members",
      "To replace manual campaign management"
    ],
    correct: 1
  },
  {
    id: "rwf-q2",
    q: "What determines when a customer is considered 'at-risk'?",
    options: [
      "A universal 30-day inactivity rule for all industries",
      "The customer’s average order value",
      "Time since last purchase or engagement relative to the business’s normal cycle",
      "Whether the customer has redeemed a voucher recently"
    ],
    correct: 2
  },
  {
    id: "rwf-q3",
    q: "Which of the following is NOT typically part of a reactivation flow?",
    options: [
      "Friendly reminder message",
      "Incentive offer or discount",
      "Survey for feedback",
      "Onboarding tutorial for new customers"
    ],
    correct: 3
  },
  {
    id: "rwf-q4",
    q: "How should messaging differ between reactivation and win-back campaigns?",
    options: [
      "Win-back messaging should feel empathetic and value-driven, not purely promotional",
      "Reactivation should only focus on discounts",
      "Both should use identical scripts for consistency",
      "Win-back should use stronger urgency than reactivation"
    ],
    correct: 0
  },
  {
    id: "rwf-q5",
    q: "Which metric best measures how effective your reactivation journey is at retaining customers long-term?",
    options: [
      "Open rate",
      "Click-through rate",
      "Retention post-winback (active after 30–60 days)",
      "Cost per impression"
    ],
    correct: 2
  },
  {
    id: "rwf-q6",
    q: "What is a key best practice for preventing over-messaging during reactivation?",
    options: [
      "Run all channels simultaneously for maximum reach",
      "Suppress users from future flows once they re-engage",
      "Send repeated reminders until conversion",
      "Ignore activity across other channels"
    ],
    correct: 1
  },
  {
    id: "rwf-q7",
    q: "In the telecom case study, what percentage of users reactivated within two weeks?",
    options: [
      "11%",
      "28%",
      "45%",
      "60%"
    ],
    correct: 1
  }
]

    },
    {
      slug: "journey-measurement",
      title: "Measuring Journey Performance",
      duration: "12 min",
      kind: "article",
      content: measuringJourneyPerformance,
      quiz: [
  {
    id: "mjp-q1",
    q: "Why is measuring journey performance essential?",
    options: [
      "It helps decide which creative design looks best",
      "It reveals which touchpoints drive results and validates business impact",
      "It ensures all channels send messages simultaneously",
      "It replaces the need for A/B testing"
    ],
    correct: 1
  },
  {
    id: "mjp-q2",
    q: "Which metric measures how many users complete the intended action?",
    options: [
      "Engagement Rate",
      "Conversion Rate",
      "Attrition Rate",
      "Click Frequency"
    ],
    correct: 1
  },
  {
    id: "mjp-q3",
    q: "What is the purpose of using a control group in journey measurement?",
    options: [
      "To exclude low-value users from journeys",
      "To identify the natural behavior baseline and calculate incremental uplift",
      "To send higher incentives to the test group",
      "To balance messaging frequency across channels"
    ],
    correct: 1
  },
  {
    id: "mjp-q4",
    q: "Which of the following is NOT a common pitfall in measuring journeys?",
    options: [
      "Tracking vanity metrics only",
      "Including control groups to validate impact",
      "Ignoring long-term retention metrics",
      "Focusing only on single-channel results"
    ],
    correct: 1
  },
  {
    id: "mjp-q5",
    q: "What did the retail case study show after introducing a post-purchase journey?",
    options: [
      "Customers unsubscribed more frequently",
      "No measurable change in performance",
      "21% higher repurchase rate and 12% higher average order value",
      "Reduced engagement with personalized messages"
    ],
    correct: 2
  },
  {
    id: "mjp-q6",
    q: "Which practice turns data measurement into continuous improvement?",
    options: [
      "Automating message repetition without testing",
      "Reviewing metrics annually",
      "Feeding insights back into design through optimization and A/B testing",
      "Disabling underperforming journeys completely"
    ],
    correct: 2
  }
]

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
      kind: "article",
      content: makeLoyaltyBlueprints,
      quiz: [
  {
    id: "mclb-q1",
    q: "What is a Make.com blueprint?",
    options: [
      "A detailed loyalty program document",
      "A pre-configured automation scenario template that defines how data flows between apps",
      "A visual mockup of a mobile app",
      "An offline configuration file for CRM systems"
    ],
    correct: 1
  },
  {
    id: "mclb-q2",
    q: "Which of the following automations is an example of a loyalty blueprint?",
    options: [
      "Issuing points automatically after a completed purchase",
      "Manually exporting user lists from CRM",
      "Scheduling weekly team meetings",
      "Designing tier visuals in Canva"
    ],
    correct: 0
  },
  {
    id: "mclb-q3",
    q: "In Make.com, what is the purpose of a Router module?",
    options: [
      "To connect loyalty apps with accounting systems",
      "To handle conditional branching and decide next actions based on rules",
      "To store reward data in Google Sheets",
      "To generate voucher codes"
    ],
    correct: 1
  },
  {
    id: "mclb-q4",
    q: "Which step comes first in the Tier Upgrade blueprint example?",
    options: [
      "Send a congratulatory email",
      "Update CRM record",
      "Trigger when total points exceed 5,000",
      "Issue a bonus voucher"
    ],
    correct: 2
  },
  {
    id: "mclb-q5",
    q: "Why should you add error branches in Make.com automations?",
    options: [
      "To pause all modules until reviewed manually",
      "To manage failed API calls or missing data gracefully",
      "To speed up the flow by skipping validation",
      "To automatically delete user data"
    ],
    correct: 1
  },
  {
    id: "mclb-q6",
    q: "Which of these is a key benefit of using Make.com for loyalty programs?",
    options: [
      "It replaces all CRM systems",
      "It allows quick, no-code automation and reusable workflows across tools",
      "It eliminates the need for data validation",
      "It focuses only on SMS campaigns"
    ],
    correct: 1
  }
]

    },
    {
      slug: "n8n-loyalty",
      title: "n8n Loyalty Journeys",
      duration: "14 min",
      kind: "article",
      content: n8nLoyaltyJourneys,
      quiz: [
  {
    id: "n8n-q1",
    q: "What is the main advantage of using n8n for loyalty automations?",
    options: [
      "It offers prebuilt design templates only",
      "It provides open-source flexibility, scripting control, and data ownership",
      "It requires no configuration or API management",
      "It only works with CRM systems"
    ],
    correct: 1
  },
  {
    id: "n8n-q2",
    q: "Which node is used in n8n to start a loyalty journey when an external event occurs?",
    options: [
      "Function Node",
      "Webhook Trigger Node",
      "Switch Node",
      "HTTP Request Node"
    ],
    correct: 1
  },
  {
    id: "n8n-q3",
    q: "In the Tier Upgrade workflow, which condition triggers the Gold tier assignment?",
    options: [
      "Customer has been inactive for 30 days",
      "Customer’s total points exceed 5000",
      "Customer redeems a voucher",
      "Customer joins via referral"
    ],
    correct: 1
  },
  {
    id: "n8n-q4",
    q: "How does n8n differ from Make.com in hosting and customization?",
    options: [
      "n8n is self-hosted and allows scripting; Make.com is cloud-based and template-driven",
      "Both are identical in architecture",
      "n8n runs only on mobile; Make.com runs on desktop",
      "Make.com provides more code-level customization than n8n"
    ],
    correct: 0
  },
  {
    id: "n8n-q5",
    q: "What is the purpose of using environment variables in n8n?",
    options: [
      "To make workflows public and shareable",
      "To securely store and reuse API keys or tokens",
      "To track campaign performance",
      "To trigger reward issuance"
    ],
    correct: 1
  },
  {
    id: "n8n-q6",
    q: "What happens in the Voucher Issuance workflow when a spend threshold is met?",
    options: [
      "A unique voucher code is generated and sent through API to the wallet system",
      "A report is manually exported to the marketing team",
      "Points are automatically reset to zero",
      "No automation is triggered"
    ],
    correct: 0
  },
  {
    id: "n8n-q7",
    q: "Which feature makes n8n ideal for advanced loyalty journeys?",
    options: [
      "It limits the number of workflow executions per day",
      "It allows full scripting and custom logic via Function Nodes",
      "It only supports visual drag-and-drop configuration",
      "It operates offline without internet access"
    ],
    correct: 1
  }
]

    },
    {
      slug: "crm-pos-integration",
      title: "CRM & POS Integration Layer",
      duration: "11 min",
      kind: "article",
      content: crmPosIntegrationLayer,
      quiz: [
  {
    id: "cpi-q1",
    q: "What is the primary purpose of the CRM & POS integration layer?",
    options: [
      "Designing email templates",
      "Translating POS/e-commerce transactions into loyalty events and keeping systems in sync",
      "Replacing the CRM",
      "Managing store inventory levels"
    ],
    correct: 1
  },
  {
    id: "cpi-q2",
    q: "Which set contains durable identifiers recommended in the lesson?",
    options: [
      "First name, last name, city",
      "Email only",
      "crm_customer_id, pos_receipt_id + store_id, sku/product_id",
      "Facebook ID and device model"
    ],
    correct: 2
  },
  {
    id: "cpi-q3",
    q: "How should a RETURN/VOID from the POS be mapped in the loyalty system?",
    options: [
      "As a new earn event with zero points",
      "Ignore the event to prevent balance changes",
      "As a REVERSAL that deducts points and may reverse vouchers",
      "As a marketing engagement"
    ],
    correct: 2
  },
  {
    id: "cpi-q4",
    q: "Which statement about real-time vs batch is accurate?",
    options: [
      "Real-time is mandatory for all retailers",
      "Batch eliminates the need for reconciliation",
      "Hybrid often uses real-time for earn/burn and batch for analytics/backfill",
      "Batch is faster than real-time for wallet updates"
    ],
    correct: 2
  },
  {
    id: "cpi-q5",
    q: "What is the goal of idempotency keys in the integration layer?",
    options: [
      "To encrypt PII for GDPR compliance",
      "To prevent double posting of the same transaction",
      "To prioritize VIP customers",
      "To speed up the POS UI"
    ],
    correct: 1
  },
  {
    id: "cpi-q6",
    q: "Which is a recommended fraud/policy control from the lesson?",
    options: [
      "Awarding extra points for all discounted items",
      "Velocity limits on redemptions per user/device/store",
      "Disabling SKU exclusions for simplicity",
      "Ignoring store_id to unify reporting"
    ],
    correct: 1
  },
  {
    id: "cpi-q7",
    q: "Where should consent state primarily live and be propagated from?",
    options: [
      "At the POS receipt only",
      "In the CRM profile, then shared with the integration layer",
      "Only in the analytics warehouse",
      "Within the mobile app cache"
    ],
    correct: 1
  }
]

    },
    {
      slug: "fraud-detection",
      title: "Fraud Detection & Velocity Checks",
      duration: "10 min",
      kind: "article",
      content: fraudDetectionVelocity,
quiz: [
  {
    id: "fdv-q1",
    q: "What is the main purpose of velocity checks in loyalty systems?",
    options: [
      "To accelerate point accrual for top customers",
      "To monitor action frequency within a timeframe and detect abnormal spikes",
      "To generate marketing reports faster",
      "To schedule more campaigns automatically"
    ],
    correct: 1
  },
  {
    id: "fdv-q2",
    q: "Which of the following is NOT a common type of loyalty fraud?",
    options: [
      "Receipt re-uploads",
      "Referral abuse through fake accounts",
      "Tier progression for active members",
      "Employee overrides"
    ],
    correct: 2
  },
  {
    id: "fdv-q3",
    q: "What’s an example of a value-based fraud rule?",
    options: [
      "User redeems more than twice their average order value within one day",
      "Customer updates email preferences twice a week",
      "Customer logs into multiple channels daily",
      "Customer opens promotional emails too frequently"
    ],
    correct: 0
  },
  {
    id: "fdv-q4",
    q: "How can loyalty systems differentiate genuine high-activity customers from fraudsters?",
    options: [
      "By disabling all velocity limits",
      "By applying tier-based thresholds and combining frequency with value metrics",
      "By limiting all users equally",
      "By deleting activity logs after each redemption"
    ],
    correct: 1
  },
  {
    id: "fdv-q5",
    q: "Which component typically stores recent event counts for velocity evaluation?",
    options: [
      "CRM database",
      "Velocity store (e.g., Redis, Firestore)",
      "POS terminal memory",
      "Cloud storage backup"
    ],
    correct: 1
  },
  {
    id: "fdv-q6",
    q: "What’s a recommended practice to manage flagged transactions?",
    options: [
      "Immediately delete them from history",
      "Log and queue them for manual fraud review or auto-suspension",
      "Ignore minor flags to improve customer satisfaction",
      "Block all redemptions system-wide"
    ],
    correct: 1
  },
  {
    id: "fdv-q7",
    q: "What is the balance between real-time and post-event fraud monitoring?",
    options: [
      "Use only post-event because it’s simpler",
      "Real-time prevents damage instantly, while post-event detects patterns over time",
      "Both are redundant and only one is needed",
      "Real-time is used only for email marketing"
    ],
    correct: 1
  }
]
    
    },
    {
      slug: "scheduling-throttling",
      title: "Advanced Scheduling & Throttling",
      duration: "12 min",
      kind: "article",
      content: advancedSchedulingThrottling,
      quiz: [
  {
    id: "ast-q1",
    q: "What is the purpose of throttling in loyalty automation systems?",
    options: [
      "To speed up all executions for better performance",
      "To limit execution rate and protect APIs from overloads or failures",
      "To increase the number of concurrent API calls",
      "To bypass vendor rate limits automatically"
    ],
    correct: 1
  },
  {
    id: "ast-q2",
    q: "Which of the following is an example of event-based scheduling?",
    options: [
      "Running tier evaluation every Monday at 9:00 AM",
      "Triggering a reward issuance when a customer completes a purchase",
      "Running a nightly batch to expire points",
      "Syncing vouchers from partners every 4 hours"
    ],
    correct: 1
  },
  {
    id: "ast-q3",
    q: "What issue does throttling help prevent?",
    options: [
      "Duplicate vouchers",
      "API rate-limit errors and failed transactions",
      "Delayed campaign creation",
      "Customer churn"
    ],
    correct: 1
  },
  {
    id: "ast-q4",
    q: "Which technique distributes workload evenly over time?",
    options: [
      "Token bucket rate limiting",
      "Batch execution",
      "Message queues such as RabbitMQ or Kafka",
      "Manual retry handling"
    ],
    correct: 2
  },
  {
    id: "ast-q5",
    q: "Why is time-zone awareness important in scheduling?",
    options: [
      "To reduce API latency",
      "To ensure messages are sent at relevant local times",
      "To simplify data aggregation",
      "To avoid duplicate journeys"
    ],
    correct: 1
  },
  {
    id: "ast-q6",
    q: "Which best practice helps maintain flow stability during high-volume campaigns?",
    options: [
      "Run all automation flows at the same time",
      "Use adaptive throttling and prioritize transactional flows",
      "Disable all throttling to speed up processing",
      "Increase message concurrency beyond limits"
    ],
    correct: 1
  }
]

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
      kind: "article",
      content: predictiveSegmentationModels,
      quiz: [
  {
    id: "psm-q1",
    q: "What is the main advantage of predictive segmentation over traditional rule-based segmentation?",
    options: [
      "It uses static demographic filters for consistency",
      "It predicts future behavior and adapts dynamically to changes",
      "It replaces data collection entirely",
      "It groups customers randomly to test promotions"
    ],
    correct: 1
  },
  {
    id: "psm-q2",
    q: "Which model estimates how likely a member is to stop engaging or purchasing?",
    options: [
      "Next Purchase Propensity",
      "Churn Prediction",
      "Offer Response Model",
      "Tier Progression Model"
    ],
    correct: 1
  },
  {
    id: "psm-q3",
    q: "What is RFM segmentation based on?",
    options: [
      "Reach, Frequency, and Marketing budget",
      "Recency, Frequency, and Monetary value",
      "Revenue, Fulfillment, and Membership type",
      "Retention, Feedback, and Metrics"
    ],
    correct: 1
  },
  {
    id: "psm-q4",
    q: "What is the final step in the model training workflow before CRM activation?",
    options: [
      "Feature Engineering",
      "Model Selection",
      "Validation and Performance Measurement",
      "Data Cleaning"
    ],
    correct: 2
  },
  {
    id: "psm-q5",
    q: "How are predictive scores typically used in CRM systems?",
    options: [
      "Stored for analytics but not used operationally",
      "Manually reviewed by customer support teams",
      "Used to trigger journeys and create dynamic target groups",
      "Displayed to customers on dashboards"
    ],
    correct: 2
  },
  {
    id: "psm-q6",
    q: "Which ethical principle should guide predictive segmentation?",
    options: [
      "Include as many personal features as possible for accuracy",
      "Avoid sensitive data and monitor for bias in model outputs",
      "Never retrain models once deployed",
      "Focus only on short-term sales outcomes"
    ],
    correct: 1
  },
  {
    id: "psm-q7",
    q: "In the churn risk example, how were high-risk members handled?",
    options: [
      "Removed from the database",
      "Offered bonus points and targeted retention campaigns",
      "Excluded from future offers",
      "Automatically downgraded tiers"
    ],
    correct: 1
  }
]

    },
    {
      slug: "dynamic-rewards",
      title: "Dynamic Reward Recommendations",
      duration: "13 min",
      kind: "article",
      content: dynamicRewardRecommendations,
      quiz: [
  {
    id: "drr-q1",
    q: "What is the primary goal of dynamic reward recommendations?",
    options: [
      "To send the same rewards to all customers equally",
      "To match the right reward to the right member at the right time using AI",
      "To reduce the number of available rewards in catalogs",
      "To randomly assign vouchers for testing purposes"
    ],
    correct: 1
  },
  {
    id: "drr-q2",
    q: "Which data types are commonly used for AI-driven reward personalization?",
    options: [
      "Only demographic and location data",
      "Purchase history, engagement logs, loyalty metrics, and contextual data",
      "Reward supplier pricing sheets",
      "Anonymous aggregated web traffic data only"
    ],
    correct: 1
  },
  {
    id: "drr-q3",
    q: "Which AI technique recommends rewards based on similarities between users?",
    options: [
      "Collaborative Filtering",
      "Content-Based Filtering",
      "Neural Style Transfer",
      "Manual Clustering"
    ],
    correct: 0
  },
  {
    id: "drr-q4",
    q: "What is a key advantage of hybrid recommendation models?",
    options: [
      "They use both collaborative and content-based methods for higher accuracy",
      "They eliminate the need for customer data",
      "They prioritize brand rewards automatically",
      "They work without machine learning algorithms"
    ],
    correct: 0
  },
  {
    id: "drr-q5",
    q: "How do feedback loops improve recommendation systems?",
    options: [
      "By removing customer preferences from datasets",
      "By learning from redemption and engagement data to refine future suggestions",
      "By manually updating catalogs weekly",
      "By freezing recommendations once deployed"
    ],
    correct: 1
  },
  {
    id: "drr-q6",
    q: "Which business factor must AI reward systems balance with personalization?",
    options: [
      "Inventory space",
      "Reward economics — cost vs. uplift and margin",
      "Team size",
      "System storage capacity"
    ],
    correct: 1
  },
  {
    id: "drr-q7",
    q: "What ethical practice should accompany AI reward personalization?",
    options: [
      "Hide AI decision logic from customers",
      "Target only top-spending members",
      "Allow opt-out and monitor bias across segments",
      "Focus purely on sales growth"
    ],
    correct: 2
  }
]

    },
    {
      slug: "ltv-forecasting",
      title: "LTV Prediction & Cohort Forecasting",
      duration: "11 min",
      kind: "article",
      content: ltvPredictionCohortForecasting,quiz: [
  {
    id: "ltv-q1",
    q: "What does Customer Lifetime Value (LTV) represent?",
    options: [
      "The number of purchases a customer made in the past month",
      "The total projected revenue a customer will generate over their relationship with the brand",
      "The difference between marketing cost and sales revenue",
      "The cost of acquiring a new customer"
    ],
    correct: 1
  },
  {
    id: "ltv-q2",
    q: "Why is predicting LTV important in loyalty management?",
    options: [
      "It identifies the highest long-term ROI members and informs retention strategies",
      "It measures only short-term campaign performance",
      "It replaces segmentation completely",
      "It calculates monthly cash flow for accounting purposes"
    ],
    correct: 0
  },
  {
    id: "ltv-q3",
    q: "What is a cohort in cohort forecasting?",
    options: [
      "A random selection of customers",
      "A group of customers who joined or purchased within the same time period or event",
      "Only VIP members",
      "Inactive members filtered out from the database"
    ],
    correct: 1
  },
  {
    id: "ltv-q4",
    q: "Which model adds a time dimension to predict how long customers remain active?",
    options: [
      "RFM-based regression",
      "Survival analysis",
      "Neural style transfer",
      "Content-based filtering"
    ],
    correct: 1
  },
  {
    id: "ltv-q5",
    q: "How can cohort forecasting improve marketing decisions?",
    options: [
      "By comparing the long-term value of customers acquired from different campaigns",
      "By showing which campaign creatives look best",
      "By testing voucher code formats",
      "By ranking staff performance in stores"
    ],
    correct: 0
  },
  {
    id: "ltv-q6",
    q: "Which of the following is a best practice for LTV modeling?",
    options: [
      "Keep models static after first deployment",
      "Retrain models quarterly and include cost per reward for net LTV accuracy",
      "Ignore reward cost to simplify computation",
      "Exclude engagement metrics to focus only on sales"
    ],
    correct: 1
  },
  {
    id: "ltv-q7",
    q: "Which key visualization best represents cohort forecasting?",
    options: [
      "A heatmap showing active percentage per cohort over time",
      "A word cloud of campaign names",
      "A stacked bar chart of product SKUs",
      "A pie chart of device usage"
    ],
    correct: 0
  }
]

    },
    {
      slug: "ai-copy",
      title: "AI-Assisted Content & Copy",
      duration: "10 min",
      kind: "article",
      content: aiAssistedContentCopy,
      quiz: [
  {
    id: "aicc-q1",
    q: "What is the main purpose of AI-assisted content in loyalty programs?",
    options: [
      "To replace human copywriters entirely",
      "To help create personalized, scalable, and consistent communication",
      "To automate only transactional receipts",
      "To translate loyalty terms into legal contracts"
    ],
    correct: 1
  },
  {
    id: "aicc-q2",
    q: "Which loyalty use case best fits AI-generated copy?",
    options: [
      "Manual reward catalog entry",
      "Dynamic tier-upgrade notifications and personalized push messages",
      "Printing plastic loyalty cards",
      "Tracking stock levels"
    ],
    correct: 1
  },
  {
    id: "aicc-q3",
    q: "What is a best practice when engineering prompts for AI copy?",
    options: [
      "Keep prompts generic and unspecific",
      "Include goal, format, tone, and context clearly",
      "Avoid mentioning the audience",
      "Rely entirely on default model tone"
    ],
    correct: 1
  },
  {
    id: "aicc-q4",
    q: "What ethical rule should guide AI content generation?",
    options: [
      "Skip review if the output looks fluent",
      "Over-personalize for maximum click-through",
      "Always include human review for factual and brand compliance",
      "Hide the use of AI from marketing managers"
    ],
    correct: 2
  },
  {
    id: "aicc-q5",
    q: "Which KPI helps evaluate AI-generated message performance?",
    options: [
      "API latency",
      "Open rate and redemption uplift compared to control",
      "Number of templates stored",
      "Server CPU usage"
    ],
    correct: 1
  },
  {
    id: "aicc-q6",
    q: "How does AI integrate into loyalty communication workflows?",
    options: [
      "Through campaign builders and automation tools that send data to AI APIs",
      "By manually exporting text to spreadsheets",
      "By writing directly into HTML email code without checks",
      "By replacing CRM entirely"
    ],
    correct: 0
  }
]
  
    },
    {
      slug: "caas-loyalty",
      title: "Context-as-a-Service for Loyalty Agents",
      duration: "12 min",
      kind: "article",
      content: caasForLoyaltyAgents,
      quiz: [
  {
    id: "caas-q1",
    q: "What problem does a Context-as-a-Service (CaaS) layer primarily solve for loyalty agents?",
    options: [
      "Designing email templates automatically",
      "Supplying trusted, up-to-date rules and data so agents answer and act correctly",
      "Replacing the CRM entirely",
      "Scheduling all campaigns on a calendar"
    ],
    correct: 1
  },
  {
    id: "caas-q2",
    q: "Which item is NOT a core element of a context pack?",
    options: [
      "Policies and rule cards",
      "Few-shot examples for edge cases",
      "Version notes and changelogs",
      "High-resolution product photos only"
    ],
    correct: 3
  },
  {
    id: "caas-q3",
    q: "In the example flow, which step ensures legal use of personal data?",
    options: [
      "Applying consent checks and PII masking in the guardrails",
      "Ranking rewards by popularity",
      "Issuing vouchers automatically",
      "Publishing packs without review"
    ],
    correct: 0
  },
  {
    id: "caas-q4",
    q: "What is the role of the tool catalog in CaaS?",
    options: [
      "It stores historical dashboards",
      "It declares which actions an agent may call (e.g., getBalance, issueVoucher) under policy",
      "It compresses documents before indexing",
      "It replaces retrieval with direct database queries"
    ],
    correct: 1
  },
  {
    id: "caas-q5",
    q: "Which retrieval pattern is most suitable for checking SKU exclusions for a redemption?",
    options: [
      "Member-centric retrieval",
      "Rules retrieval by region/tier/category",
      "Offer matching with graph edges",
      "Time-weighted freshness only"
    ],
    correct: 1
  },
  {
    id: "caas-q6",
    q: "Which metric BEST demonstrates the business value of CaaS?",
    options: [
      "Number of files in the knowledge base",
      "Policy violations prevented and answer accuracy with citations",
      "Model parameter count",
      "Data warehouse storage size"
    ],
    correct: 1
  },
  {
    id: "caas-q7",
    q: "What operational practice helps prevent regressions when updating packs?",
    options: [
      "Skipping reviews to move fast",
      "Canary releases with automated evaluations and instant rollback",
      "Publishing all changes directly to production",
      "Relying only on manual spot checks"
    ],
    correct: 1
  }
]

    }
  ]
}

];

export default courses;
