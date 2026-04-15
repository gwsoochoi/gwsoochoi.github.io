export interface Project {
  title: string;
  status: string;
  items: string[];
  tags: string[];
}

export interface Stage {
  number: number;
  employmentType?: "freelance" | "fulltime";
  title: string;
  duration: string;
  company?: string;
  companyUrl?: string;
  service?: { description: string; url: string; name: string };
  overview?: string[];
  tags?: string[];
  appInfo?: { name: string; url: string; period?: string };
  appDescription?: string;
  motivation?: string[];
  serviceOverview?: string[];
  features?: { name: string; description: string }[];
  techStack?: { layer: string; tech: string }[];
  timeline?: { period: string; milestone: string; description?: string[] }[];
  locations?: { name: string; duration: string; items: string[]; url?: string; tags?: string[]; employmentType?: "freelance" | "fulltime" | "fulltime-to-freelance"; insights?: { achievements: string[]; learnings: string[] }; subProjects?: { name: string; items: string[]; tags?: string[]; insights?: { achievements: string[]; learnings: string[] } }[] }[];
  items?: string[];
  projects?: Project[];
  scope?: { label: string; value: string };
  insights?: { achievements: string[]; learnings: string[] };
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SkillSection {
  label: string;
  tags: string[];
}
