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
      "From financial/public SI to a subscription travel startup, now independently building and operating a mobile app end-to-end.",
      "Leveraging AI to expand beyond development into infrastructure, design, and marketing — working toward building a one-person unicorn.",
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
        appDescription: "AI-Powered Progressive Body Transformation Solution",
        motivation: [
          "A service that combines daily weight training logs with AI to deliver personalized, progressive body transformation programs.",
          "Leveraging know-how and optimized methodologies from PONGE, this is a fully AI-assisted solo product — from planning and design to development.",
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
          "Solving LGBTQ community's information fragmentation through DX — independently operating the full service from planning to monetization.",
          "Solo-developing and operating an iOS/Android app and Admin WebApp with 6-language support, AI auto-translation, and real-time map-based social features.",
        ],
        tags: ["Flutter", "React", "Ruby on Rails", "GCP Cloud Run/Build/Tasks", "Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"],
        timeline: [
          {
            period: "2026-03",
            milestone: "Version 3.4.0 ~ 3.5.0 release",
            description: [
              "## v3.5.0",
              "Launched Workout Check-in feature — rank system to boost user retention",
              "Built banner CMS enabling self-serve promotions without a marketing team",
              "Platform-specific native UX optimization and common component consolidation",
              "## v3.4.0",
              "Shouting — real-time map messaging to improve nearby user discovery rate",
              "Event linking and clustering to increase content consumption",
              "Inquiry chat + push notifications to automate customer support",
            ],
          },
          {
            period: "2026-02",
            milestone: "Version 3.2.3 release",
            description: [
              "Enhanced community core features: anonymous posting, mentions, and AI auto-translation",
              "Improved content discovery conversion with distance display and tag filtering",
              "Dark mode and accessibility improvements for diverse usage environments",
            ],
          },
          {
            period: "2026-01",
            milestone: "Version 3.0.0 release (app renewal)",
            description: [
              "Designed business onboarding flow (store registration → approval) for B2B revenue model",
              "6-language multilingual support + AI auto-translation for global user accessibility",
              "Community board, interest tags, and 1:1 messaging to complete user engagement structure",
              "## Admin WebApp",
              "Built admin dashboard for integrated user, content, and report management",
              "Designed and operated On-call response process based on logging and monitoring",
            ],
          },
          {
            period: "2025-09",
            milestone: "Version 2.0.0 release",
            description: [
              "Full UX flow redesign to reduce user churn rate",
              "Simplified information architecture and multi-device UI optimization",
            ],
          },
          {
            period: "2025-07",
            milestone: "Version 1.0.0 first release, 700+ users",
            description: [
              "Designed and built core features: location-based discovery, group participation, and group chat",
              "Simultaneous iOS/Android launch, acquired 700+ users shortly after release",
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
          "A subscription-based travel service where users earn coins monthly to book hotels and flights",
          "Integrated operations with numerous domestic/international accommodations and flight booking systems",
        ],
        items: [
          "Designed and implemented coin-based booking and payment system (Stripe subscription integration)",
          "Integrated multiple OTA (accommodation) APIs for real-time inventory and pricing sync",
          "Designed and developed Rails API server, operated GCP-based infrastructure",
          "On-call incident response and customer escalation handling",
          "End-to-end involvement from feature planning to deployment in a small agile team",
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
