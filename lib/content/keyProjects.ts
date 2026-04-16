import type { KeyProject } from "./types";

const data: Record<string, KeyProject[]> = {
  ko: [
    {
      name: "PONGE",
      description: "LGBTQ+ 위치 기반 커뮤니티 · 이벤트 · 비즈니스 연결 플랫폼",
      role: "프로젝트 오너 · 풀스택 엔지니어 (2인 체제)",
      url: "https://pon-ge.com/",
      tags: ["Rails", "Flutter", "React", "Supabase", "GCP", "Stripe"],
    },
    {
      name: "HafH",
      description: "구독형 여행 플랫폼 — 월정액으로 전 세계 숙소를 이용하는 서비스",
      role: "백엔드 엔지니어 (애자일 팀)",
      url: "https://www.hafh.com/",
      tags: ["Rails", "React", "MySQL", "GCP"],
    },
    {
      name: "Minerva",
      description: "투자정보 제공 플랫폼",
      role: "PL · 백엔드 엔지니어 (3인 체제)",
      tags: ["Rails", "React", "MySQL", "AWS"],
    },
  ],
  ja: [
    {
      name: "PONGE",
      description: "LGBTQ+向け位置情報コミュニティ・イベント・ビジネス接続プラットフォーム",
      role: "プロジェクトオーナー・フルスタックエンジニア（2人体制）",
      url: "https://pon-ge.com/",
      tags: ["Rails", "Flutter", "React", "Supabase", "GCP", "Stripe"],
    },
    {
      name: "HafH",
      description: "サブスク型旅行プラットフォーム — 月額定額で世界中の宿泊施設を利用するサービス",
      role: "バックエンドエンジニア（アジャイルチーム）",
      url: "https://www.hafh.com/",
      tags: ["Rails", "React", "MySQL", "GCP"],
    },
    {
      name: "Minerva",
      description: "投資情報提供プラットフォーム",
      role: "PL・バックエンドエンジニア（3人体制）",
      tags: ["Rails", "React", "MySQL", "AWS"],
    },
  ],
  en: [
    {
      name: "PONGE",
      description: "LGBTQ+ location-based community, events & business connection platform",
      role: "Project Owner · Full-Stack Engineer (2-person team)",
      url: "https://pon-ge.com/",
      tags: ["Rails", "Flutter", "React", "Supabase", "GCP", "Stripe"],
    },
    {
      name: "HafH",
      description: "Subscription travel platform — stay at accommodations worldwide for a flat monthly fee",
      role: "Backend Engineer (Agile team)",
      url: "https://www.hafh.com/",
      tags: ["Rails", "React", "MySQL", "GCP"],
    },
    {
      name: "Minerva",
      description: "Investment information platform",
      role: "PL · Backend Engineer (3-person team)",
      tags: ["Rails", "React", "MySQL", "AWS"],
    },
  ],
};

export function getKeyProjects(locale: string): KeyProject[] {
  return data[locale] ?? data.ja;
}
