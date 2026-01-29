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
        title: "Revenue-generating Mobile/Web App Development",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/" },
        items: [
          "Running personal projects, overseeing all areas except UI/UX design",
          "Pursuing maximum productivity with AI (Claude, Cursor, etc.)",
        ],
        projects: [
          {
            title: "v1.0 ~ v2.0: LGBTQ Community App",
            status: "",
            items: [
              "Development started January 2024",
              "Launched on App Store and Google Play Store in July 2024",
              "Surpassed 700 users",
              "Flutter (iOS/Android) + Rails API + GCP",
            ],
            tags: ["Flutter", "Ruby on Rails", "GCP", "Firebase"],
          },
          {
            title: "v3.0: Renewal as LGBTQ Community & Lifestyle Information App",
            status: "In progress",
            items: [
              "Mobile: Enhancing existing app features",
              "Cost reduction and optimization with GCP + Supabase integration",
              "Preparing for global market entry with AI translation features",
            ],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
          {
            title: "v3.1: Full-scale Monetization",
            status: "Planned",
            items: [
              "Introduction of ad revenue model",
              "Premium feature monetization",
              "Launch of web-based adult content service (React)",
            ],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
        ],
        scope: {
          label: "Scope:",
          value: "Planning → Development → Infrastructure → Store Review → Operations → Marketing",
        },
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
