export interface Stage {
  number: number;
  employmentType?: "freelance" | "fulltime";
  title: string;
  duration: string;
  company?: string;
  companyUrl?: string;
  tags?: string[];
  appInfo?: { name: string; url: string; period?: string };
  appDescription?: string;
  serviceOverview?: string[];
  locations?: { name: string; duration: string; items: string[]; url?: string; tags?: string[]; employmentType?: "freelance" | "fulltime" | "fulltime-to-freelance"; insights?: { achievements: string[]; learnings: string[] }; subProjects?: { name: string; items: string[]; tags?: string[]; insights?: { achievements: string[]; learnings: string[] } }[] }[];
  items?: string[];
  scope?: { label: string; value: string };
  insights?: { achievements: string[]; learnings: string[] };
}

export interface ServiceOverviewSection {
  label?: string;
  content: string[];
  collapsible: boolean;
}

/** 홈 대표 프로젝트 카드의 단일 정본 */
export interface ProjectCase {
  slug: string;
  name: string;
  platforms: string;
  version?: string;
  featured?: boolean;
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  summary: string;
  status: string;
}

/** 연표 구간. [시작 연도, 종료 연도] — 종료를 비우면 현재까지 이어진다. */
export type YearSpan = [number, number?];

/** 연표 한 줄. 기술 하나, 또는 커리어 형태 하나. */
export interface TimelineRow {
  name: string;
  spans: YearSpan[];
}

export interface TimelineGroup {
  label?: string;
  rows: TimelineRow[];
}
