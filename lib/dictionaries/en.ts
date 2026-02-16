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
    totalYears: "",
    stages: [
      {
        number: 1,
        title: "University (Bachelor's)",
        duration: "— 4 years",
        company: "Dept. of Multimedia — Computer Programming",
        companyUrl: "https://mm.nsu.ac.kr/?m1=page%25&menu_id=744%25",
        service: {
          description: "Namseoul University",
          url: "https://nsu.ac.kr/?m1=home",
          name: "Namseoul University",
        },
      },
      {
        number: 2,
        title: "Military Service",
        duration: "— 2 years",
      },
      {
        number: 3,
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
        number: 4,
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
        number: 5,
        title: "Revenue-Generating Mobile/Web App Development",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQ Lifestyle Platform",
        motivation: [
          "As a gay man, I'm building a service to solve LGBTQ community's information fragmentation through DX, aiming to complete everything from planning to monetization on my own.",
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Web", tech: "React, Zustand, TanStack Query" },
          { layer: "Backend", tech: "Ruby on Rails 8.0" },
          { layer: "Infra", tech: "GCP (Cloud Run, Cloud Build, Cloud Tasks)" },
          { layer: "Database", tech: "Supabase (Auth, DB, Realtime)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM, Analytics)" },

        ],
        timeline: [
          { period: "2025-01", milestone: "Development started" },
          {
            period: "2025-07",
            milestone: "Version 1.0.0 first release, 700+ users",
            description: [
              "Designed map/location-based community and group information registration and discovery structure",
              "Designed and implemented participation management workflow including join requests, approval/rejection",
              "Designed and implemented group chat feature for real-time group communication",
              "Improved user engagement and group activation by combining location-based discovery with community interaction",
            ],
          },
          {
            period: "2025-09",
            milestone: "Version 2.0.0 release",
            description: [
              "Redesigned core user flows (discovery, participation, communication) for a user-friendly structure",
              "Simplified information architecture and navigation for improved usability",
              "Improved interface consistency and readability with accessibility standards",
              "Optimized UI for various device environments",
              "Reduced user churn and improved service usability through UX enhancements",
            ],
          },

          {
            period: "2026-01",
            milestone: "Version 3.0.0 release (app renewal & user guide design)",
            description: [
              "Designed business onboarding flow: store search → owner application → admin approval",
              "Designed service/event browsing and user-to-user 1:1 messaging structure",
              "Established community board policies and UX (categories, comments, image upload limits, AI content filter)",
              "Designed profile-based interest tag system to enhance user matching and expression",
              "Designed multilingual support structure for Korean/Japanese/English/Chinese (Simplified & Traditional)/Thai",
              "Applied AI auto-translation for posts, profiles, and service information",
              "## Admin WebApp",
              "Designed and implemented admin dashboard for integrated user/content/data management",
              "Automated operational functions including user status management, content management, and report handling",
              "Designed and operated On-call response process based on logging and monitoring",
            ],
          },
          {
            period: "2026-02",
            milestone: "Version 3.2.3 release",
            description: [
              "Added anonymous posting and commenting",
              "Added @mention in comments",
              "Improved auto-translation for posts and profiles",
              "Nearby items now show distance with tag filtering",
              "Added \"See more\" for nearby items",
              "Improved post management in My Page",
              "Enabled text selection and copy",
              "Improved location-based sorting accuracy",
              "Dark mode UI improvements",
              "Performance improvements and bug fixes",
            ],
          },

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
