import type { ServiceOverviewSection, TimelineDescriptionSection } from "./types";

const VERSION_PATTERN = /^v\d|^개발 시작|^開発開始|^Development Started/i;

/**
 * serviceOverview 문자열 배열을 구조화된 섹션 배열로 변환한다.
 * "## " prefix가 있으면 새 섹션의 label로 처리하고,
 * 버전 패턴에 매칭되는 label은 collapsible: true로 표시한다.
 */
export function parseServiceOverview(lines: string[]): ServiceOverviewSection[] {
  const sections: ServiceOverviewSection[] = [];
  let current: ServiceOverviewSection = { content: [], collapsible: false };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current.content.length || current.label) {
        sections.push(current);
      }
      const label = line.slice(3);
      current = {
        label,
        content: [],
        collapsible: VERSION_PATTERN.test(label),
      };
    } else {
      current.content.push(line);
    }
  }

  if (current.content.length || current.label) {
    sections.push(current);
  }

  return sections;
}

/**
 * timeline description 문자열 배열을 구조화된 섹션 배열로 변환한다.
 */
export function parseTimelineDescription(lines: string[]): TimelineDescriptionSection[] {
  const sections: TimelineDescriptionSection[] = [];
  let current: TimelineDescriptionSection = { items: [] };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current.items.length) {
        sections.push(current);
      }
      current = { label: line.slice(3), items: [] };
    } else {
      current.items.push(line);
    }
  }

  if (current.items.length || current.label) {
    sections.push(current);
  }

  return sections;
}
