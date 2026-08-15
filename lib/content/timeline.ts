import type { TimelineRow, YearSpan } from "./types";

/** 타임라인 시작 연도. 첫 실무(2013.06 라이트브레인) 기준. */
export const TIMELINE_START = 2013;

/** 타임라인 가로축. 시작 연도부터 올해까지. */
export function getTimelineYears(): number[] {
  const end = new Date().getFullYear();
  return Array.from({ length: end - TIMELINE_START + 1 }, (_, i) => TIMELINE_START + i);
}

function spanCovers(span: YearSpan, year: number, lastYear: number): boolean {
  const [start, end] = span;
  return year >= start && year <= (end ?? lastYear);
}

export function rowCoversYear(row: TimelineRow, year: number, lastYear: number): boolean {
  return row.spans.some((span) => spanCovers(span, year, lastYear));
}

/** 구간 합계 연수. 구간이 겹쳐도 한 해는 한 번만 센다. */
export function countRowYears(row: TimelineRow, years: number[]): number {
  const lastYear = years[years.length - 1];
  return years.filter((year) => rowCoversYear(row, year, lastYear)).length;
}
