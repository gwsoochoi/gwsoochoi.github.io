import type { Dictionary } from "./ko";

const careerYears = new Date().getFullYear() - 2013 - 1;

const en: Dictionary = {
  meta: {
    title: "Gwangsoo Choi | Resume",
    description: "Resume of Gwangsoo Choi - Product Builder ・ Software Engineer",
  },
  profile: {
    name: "Gwangsoo Choi",
    role: "Product Builder ・ Software Engineer",
    imageAlt: "Gwangsoo Choi profile photo",
    bio: [
      `Tokyo-based software engineer with ${careerYears} years of experience.`,
      "From financial/public SI to a subscription travel startup — now building and running a mobile app solo, end to end.",
      "I use AI heavily to go beyond coding into planning, design, and marketing, aiming to build a one-person unicorn.",
      "I track signups and churn with Firebase Analytics, monitor DAU and content metrics on an Admin dashboard, and catch errors with Sentry — decisions are based on numbers.",
    ],
    bioSub: "Also available for mid-to-long term freelance full-stack engineering contracts.",
    location: "Tokyo / Shibuya",
  },
  career: {
    title: "Career",
    totalYears: "",
    stages: [
      {
        number: 1,
        title: "AI Fitness App Development",
        duration: "",
        appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
        appDescription: "AI-powered progressive fitness app",
        motivation: [
          "A service that pairs daily weight training logs with AI to suggest workout programs tailored to each user.",
          "Built on what I learned from PONGE — planning, design, and development all done solo with AI.",
        ],
        tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP Cloud Run", "Docker", "Terraform", "Supabase Auth/DB", "Cloudflare R2", "Firebase FCM", "Git", "GitHub", "RSpec"],
        timeline: [
          {
            period: "2026-04",
            milestone: "Version 1.0.0 Google Play / App Store simultaneous launch planned",
            description: [
              "Daily weight training log and history management",
              "AI-based personalized workout program recommendations",
              "Progressive overload tracking and growth visualization",
            ],
          },
          { period: "2026-04", milestone: "Development started" },
        ],
        scope: {
          label: "Scope:",
          value: "Planning → Design → Development → Infrastructure → Store review → Operations (fully AI-assisted solo development)",
        },
      },
      {
        number: 2,
        title: "LGBTQ Lifestyle Platform Development",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "Location-Based Community · Events · Business Connection Platform",
        motivation: [
          "Bringing scattered LGBTQ community info into one place — running the full service solo, from planning to monetization.",
          "Solo-building and operating an iOS/Android app and Admin WebApp with 6-language support, AI auto-translation, and real-time map-based social features.",
        ],
        tags: ["Flutter", "React", "Ruby on Rails", "GCP Cloud Run/Build/Tasks", "Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"],
        timeline: [
          {
            period: "2026-03",
            milestone: "Version 3.4.0 ~ 3.5.0 release",
            description: [
              "## v3.5.0",
              "Launched Workout Check-in feature — rank system to drive repeat visits",
              "Built a banner CMS so promotions can run without a marketing team",
              "Optimized UX per platform (iOS/Android) and organized shared components",
              "## v3.4.0",
              "Shouting — real-time map messaging to improve nearby user discovery rate",
              "Event linking and clustering for easier content discovery",
              "Inquiry chat + push notifications to streamline customer support",
            ],
          },
          {
            period: "2026-02",
            milestone: "Version 3.2.3 release",
            description: [
              "Added anonymous posting, mentions, and AI auto-translation to strengthen community features",
              "Distance display and tag filters so users find relevant content faster",
              "Dark mode and accessibility support for more usage environments",
            ],
          },
          {
            period: "2026-01",
            milestone: "Version 3.0.0 release (app renewal)",
            description: [
              "Designed store registration → approval flow to lay the groundwork for B2B revenue",
              "6-language support + AI auto-translation so international users can jump right in",
              "Community board, interest tags, and 1:1 messaging to round out user engagement",
              "## Admin WebApp",
              "Built an admin dashboard to manage users, content, and reports in one place",
              "Set up On-call response workflow based on logging and monitoring",
            ],
          },
          {
            period: "2025-09",
            milestone: "Version 2.0.0 release",
            description: [
              "Redesigned the entire UX flow to reduce drop-off",
              "Simplified the information structure and tuned the UI for multiple devices",
            ],
          },
          {
            period: "2025-07",
            milestone: "Version 1.0.0 first release, 700+ users",
            description: [
              "Built core features: location-based discovery, group participation, and group chat",
              "Launched on iOS and Android at the same time, hit 700+ users right after release",
            ],
          },
          { period: "2025-01", milestone: "Development started" },
        ],
        scope: {
          label: "Scope:",
          value: "Planning → Development → Infrastructure → Store review → Operations → Marketing (all areas except UI/UX design)",
        },
      },
      {
        number: 3,
        title: "Startup",
        duration: "— 3 years / Tokyo",
        company: "KabuKuStyle Inc. (2021~2024)",
        service: {
          description: "Subscription travel platform HafH — Backend development",
          url: "https://www.hafh.com/",
          name: "HafH",
        },
        overview: [
          "A subscription travel service — users earn coins monthly and use them to book hotels and flights",
          "Connects multiple domestic and international accommodation and flight booking systems",
        ],
        items: [
          "Built the coin-based booking and payment system (Stripe subscription integration)",
          "Connected multiple OTA (accommodation) APIs for real-time inventory and pricing sync",
          "Designed and developed the Rails API server, ran GCP infrastructure",
          "On-call incident response and customer escalation handling",
          "Involved in the full cycle from planning to deployment in a small agile team",
        ],
        tags: ["React", "Ruby on Rails", "MySQL", "Git", "GitHub", "RSpec", "etc."],
      },
      {
        number: 4,
        title: "SE (Tokyo)",
        duration: "— 1 year",
        company: "Government operations backend development under NTT DATA (Japanese work environment)",
        tags: ["JSP", "Java Spring", "Oracle", "etc."],
      },
      {
        number: 5,
        title: "Japanese Language School",
        duration: "— 2018.06 ~ 2019.06",
        company: "Japan International University Japanese Language School (Tokyo)",
        companyUrl: "https://www.jpschool.ac.jp/",
      },
      {
        number: 6,
        title: "SI/SE (Seoul)",
        duration: "— 5 years (first job from 2013.06)",
        items: [
          "Large-scale financial and public sector system development (Java Spring)",
          "High-volume transaction processing and reliability-focused backend development",
        ],
        tags: ["JSP", "Java Spring", "Oracle", "etc."],
      },
      {
        number: 7,
        title: "LG Electronics (Part-time)",
        duration: "— 2009.02 ~ 2010.02 (during university leave)",
        company: "Web Storage NAS Dev Team — Tester",
      },
      {
        number: 8,
        title: "Military Service",
        duration: "— 2008.01 ~ 2010.01",
      },
      {
        number: 9,
        title: "University (Bachelor's)",
        duration: "— 2006.03 ~ 2013.02 (incl. leave)",
        company: "Namseoul University — Dept. of Multimedia, Computer Programming",
        companyUrl: "https://nsu.ac.kr/?m1=home",
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "Korean", level: "Native" },
      { name: "Japanese", level: "Business · Daily (residing since 2018.06, JLPT N2)" },
      { name: "English", level: "Daily" },
    ],
  },
  philosophy: {
    title: "Development Philosophy",
    subtitle: "I shaped my own development principles through real startup work, then built and shipped production services solo — from zero to architecture, implementation, infra, and deployment.",
    items: [
      "Split layers with Clean Architecture (Controller → Service → Repository) so each part has a clear job.",
      "Business logic goes into Service Objects with the Result pattern; validation in Form Objects, complex queries in Query Objects.",
      "Shared behavior (translation, location, etc.) lives in Concerns — written once, reused everywhere.",
      "In Flutter, state is immutable via Riverpod + Freezed, and each feature is split into data / domain / presentation layers.",
      "Tests are written with RSpec (unit, integration, system) and code style stays consistent with RuboCop Omakase.",
      "I lean on AI to move faster, keep code quality high, and catch bugs early.",
    ],
  },
  skills: {
    title: "Tech Stack",
    sections: [
      { label: "Backend", tags: ["Java Spring", "Ruby on Rails", "FastAPI", "Python"] },
      { label: "Frontend & Mobile", tags: ["Flutter", "React", "Next.js", "TypeScript", "Vite"] },
      { label: "Database", tags: ["PostgreSQL", "PostGIS", "Oracle", "MySQL"] },
      { label: "Cloud & Infra", tags: ["GCP Cloud Run/Build/Tasks", "Docker", "Terraform"] },
      { label: "CI/CD", tags: ["GitHub Actions", "Git", "GitHub"] },
      { label: "BaaS", tags: ["Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Firestore/Analytics"] },
      { label: "Auth & Payment", tags: ["Google/Apple/Kakao/Line OAuth", "Stripe", "In-App Purchase"] },
      { label: "Monitoring", tags: ["Sentry"] },
      { label: "AI", tags: ["Claude", "Codex", "Gemini", "Cursor"] },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default en;
