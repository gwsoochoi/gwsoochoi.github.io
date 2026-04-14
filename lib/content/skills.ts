import type { SkillSection } from "./types";

const sections: SkillSection[] = [
  { label: "Backend", tags: ["Java Spring", "Ruby on Rails"] },
  { label: "Frontend & Mobile", tags: ["Flutter", "React", "Next.js", "TypeScript", "Vite"] },
  { label: "Database", tags: ["PostgreSQL", "PostGIS", "Oracle", "MySQL"] },
  { label: "Cloud & Infra", tags: ["GCP Cloud Run/Build/Tasks", "Docker", "Terraform"] },
  { label: "CI/CD", tags: ["GitHub Actions", "Git", "GitHub"] },
  { label: "BaaS", tags: ["Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Firestore/Analytics"] },
  { label: "Auth & Payment", tags: ["Google/Apple/Kakao/Line OAuth", "Stripe", "In-App Purchase"] },
  { label: "Monitoring", tags: ["Sentry"] },
  { label: "AI", tags: ["Claude", "Gemini"] },
];

export function getSkillsSections(): SkillSection[] {
  return sections;
}
