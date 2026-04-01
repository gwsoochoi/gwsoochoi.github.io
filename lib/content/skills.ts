import type { SkillSection } from "./types";

const skills: Record<string, SkillSection[]> = {
  ko: [
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
  ja: [
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
  en: [
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
};

export function getSkillsSections(locale: string): SkillSection[] {
  return skills[locale] ?? skills.ja;
}
