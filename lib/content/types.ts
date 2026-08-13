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

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SkillSection {
  label: string;
  tags: string[];
}
