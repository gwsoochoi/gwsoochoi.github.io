import type { Dictionary } from "./ko";

const en: Dictionary = {
  meta: {
    title: "Gwangsoo Choi | Resume",
    description: "Resume of Gwangsoo Choi - Software Engineer",
  },
  profile: {
    name: "Gwangsoo Choi",
    role: "Software Engineer",
    imageAlt: "Gwangsoo Choi profile photo",
    bio: [
      "Korean developer based in Tokyo.",
      "Currently developing revenue-generating apps independently, from planning to operations.",
      "Pursuing maximum productivity through AI utilization.",
    ],
    bioSub: "Also available for mid-to-long term freelance full-stack engineering contracts.",
    location: "Tokyo / Shibuya",
  },
  career: {
    title: "Career",
    totalYears: "9+ years of experience",
    stages: [
      {
        number: 1,
        title: "SI/SE",
        duration: "— 6 years",
        locations: [
          {
            name: "Seoul",
            duration: "5 years",
            items: [
              "Large-scale financial and public sector system development",
              "Java Spring backend development",
            ],
          },
          {
            name: "Tokyo",
            duration: "1 year",
            items: [
              "Backend system development for government operations under NTT DATA",
            ],
          },
        ],
      },
      {
        number: 2,
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
          "Integration with numerous domestic and international accommodations, and flight booking systems",
        ],
        items: [
          "Rails API server design and development",
          "Coin-based booking system development",
          "Subscription payment integration",
          "Accommodation OTA API integration",
          "GCP infrastructure operations, on-call response (incident + customer support)",
          "Agile development in a small team",
        ],
        tags: ["Ruby on Rails", "GCP", "API Integration", "Payment System"],
      },
      {
        number: 3,
        title: "Revenue-Generating Mobile/Web App Development",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQ Lifestyle Platform",
        motivation: [
          "As a gay man, I'm building a service to solve LGBTQ community's information fragmentation through DX, aiming to complete everything from planning to monetization on my own.",
        ],
        serviceOverview: [
          "Platform combining LGBTQ-friendly place information + community + chat",
          "Mobile app (iOS/Android) + Web app simultaneously operated",
          "6 languages supported, AI translation feature",
        ],
        features: [
          { name: "PonGe", description: "LGBTQ-friendly place registration/search/bookmark (location-based)" },
          { name: "Board", description: "Community posts, likes, comments" },
          { name: "Real-time Chat", description: "1:1 chat (Supabase Realtime)" },
          { name: "Subscription/Payment", description: "Mobile IAP + Web Stripe integration" },
          { name: "Admin", description: "Dashboard, user/content/report management" },
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Web", tech: "React, Zustand, TanStack Query" },
          { layer: "Backend", tech: "Ruby on Rails 8.0" },
          { layer: "Infra", tech: "GCP (Cloud Run, Cloud Build, Cloud Tasks)" },
          { layer: "Database", tech: "Supabase (Auth, DB, Realtime)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM, Analytics)" },
          { layer: "Payment", tech: "App Store IAP, Google Play IAP, Stripe" },
        ],
        timeline: [
          { period: "2025.01", milestone: "Development started" },
          { period: "2025.07", milestone: "App Store / Play Store launch, 700+ users" },
          { period: "2025.12", milestone: "Version 3.0 mobile app renewal" },
          { period: "2026.03", milestone: "Monetization started (ads, premium subscription)" },
        ],
        scope: {
          label: "Scope:",
          value: "Planning → Development → Infrastructure → Store review → Operations → Marketing (all areas except UI/UX design)",
        },
        tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "Stripe", "AI"],
      },
    ],
  },
  skills: {
    title: "Tech Stack",
    groups: [
      {
        category: "Backend",
        items: ["Java Spring", "Ruby on Rails", "REST API"],
      },
      {
        category: "Frontend & Mobile",
        items: ["Flutter", "React", "Next.js", "TypeScript"],
      },
      {
        category: "Infra & Cloud",
        items: ["GCP", "Supabase", "Docker", "GitHub Actions"],
      },
      {
        category: "Others",
        items: ["AI Utilization (Claude, Cursor)"],
      },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default en;
