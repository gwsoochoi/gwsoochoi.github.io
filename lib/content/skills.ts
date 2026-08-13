import type { SkillSection } from "./types";

// 두 대표 사례(SayDraw · PONGE)와 최근 실무에서 설명할 수 있는 항목만 노출한다.
const sections: SkillSection[] = [
  { label: "Backend", tags: ["Ruby on Rails", "Java Spring"] },
  { label: "Mobile", tags: ["Swift", "SwiftUI", "PencilKit", "Kotlin", "Jetpack Compose"] },
  { label: "Web", tags: ["TypeScript", "React", "Next.js", "Vite"] },
  { label: "Database", tags: ["MySQL", "PostgreSQL", "PostGIS"] },
  { label: "Cloud", tags: ["Supabase", "GCP Cloud Run/Tasks", "Cloudflare R2", "Docker"] },
  { label: "Product Operations", tags: ["APNs", "FCM", "StoreKit/IAP", "GitHub Actions", "Sentry"] },
  { label: "AI", tags: ["Claude Code", "Codex"] },
];

export function getSkillsSections(): SkillSection[] {
  return sections;
}
