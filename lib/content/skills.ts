import type { TimelineGroup } from "./types";

// 사용 구간은 career.ts의 재직 기간에서 그대로 뽑았다. 여기 값을 고칠 일이 생기면
// 먼저 career.ts를 보고, 두 곳이 어긋나면 career.ts가 정본이다.
//
//   2013.06~2015.05 라이트브레인 · 2015.06~2018.05 자이로소프트 · 2019.07~2020.12 아크로스로드
//     → Java Spring / JSP / JavaScript / Oracle
//     2018은 일본어 학교 해라 비운다. 그 해의 주된 이력이 학교이므로 기술 줄도 끊긴다.
//   2021.01~2024.12 카부쿠스타일 · 2023 PPB → Ruby on Rails / React / MySQL / GCP
//   2024.06~2024.09 리브게이트 → Java Spring(재등장), PostgreSQL
//   2025.01~ PONGE · SayDraw → 모바일 네이티브 · Supabase · 운영 도구 전반
//
// 각 섹션의 행은 시작 연도 오름차순이다. 표가 왼쪽 위에서 오른쪽 아래로 흐른다.
const sections: TimelineGroup[] = [
  {
    label: "Backend",
    rows: [
      { name: "Java Spring", spans: [[2013, 2017], [2019, 2020], [2024, 2024]] },
      { name: "Ruby on Rails", spans: [[2021]] },
    ],
  },
  {
    label: "Web",
    rows: [
      // HTML만 지금까지 이어진다. JSP·JavaScript는 SI 시절로 끊긴다.
      { name: "HTML", spans: [[2013, 2017], [2019]] },
      { name: "JSP", spans: [[2013, 2017], [2019, 2020]] },
      { name: "JavaScript", spans: [[2013, 2017], [2019, 2020]] },
      { name: "React", spans: [[2021]] },
      { name: "TypeScript", spans: [[2025]] },
      { name: "Next.js", spans: [[2026]] },
    ],
  },
  {
    // PONGE는 Flutter로 시작해 네이티브로 갈아탔다(career.ts insights). 전환 시점은
    // 앱 리뉴얼인 v3.0.0(2026.01)으로 잡았다 — 그 전 릴리스는 Flutter 한 벌이었다.
    label: "Mobile",
    rows: [
      { name: "Flutter", spans: [[2025, 2025]] },
      { name: "Swift", spans: [[2026]] },
      { name: "Kotlin", spans: [[2026]] },
    ],
  },
  {
    label: "Database",
    rows: [
      { name: "Oracle", spans: [[2013, 2017], [2019, 2020]] },
      { name: "MySQL", spans: [[2021, 2024]] },
      { name: "PostgreSQL", spans: [[2024]] },
      { name: "PostGIS", spans: [[2024]] },
    ],
  },
  {
    label: "Cloud",
    rows: [
      { name: "Google Cloud Platform", spans: [[2021]] },
      { name: "Supabase", spans: [[2025]] },
      { name: "Cloudflare R2", spans: [[2025]] },
      { name: "Docker", spans: [[2025]] },
    ],
  },
  {
    // 스타트업(카부쿠, 2021.01~)에서 쓰기 시작해 지금까지 끊긴 적이 없다.
    label: "Product Operations",
    rows: [
      { name: "Git", spans: [[2021]] },
      { name: "GitHub Actions", spans: [[2021]] },
    ],
  },
  {
    // career.ts의 담당 범위가 "기획 → UI/UX 디자인 → 개발"이라 PONGE 시작(2025)부터 Figma를
    // 잡았다. 나머지 둘은 2026 도입으로 가정 — 근거가 될 기록이 저장소에 없다.
    label: "Design",
    rows: [
      { name: "Figma", spans: [[2025]] },
      { name: "Claude Design", spans: [[2026]] },
      { name: "GPT Image 2", spans: [[2026]] },
    ],
  },
  {
    label: "AI",
    rows: [
      { name: "Claude Code", spans: [[2025]] },
      { name: "Codex", spans: [[2026]] },
    ],
  },
];

export function getSkillsSections(): TimelineGroup[] {
  return sections;
}
