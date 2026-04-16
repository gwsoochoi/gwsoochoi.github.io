// 경력 시작 연도 (2013년, 첫 1년 제외)
const CAREER_START_YEAR = 2013;
const CAREER_OFFSET = 1;

// 도쿄 거주 시작 연도
const TOKYO_START_YEAR = 2018;

export function getCareerYears(): number {
  return new Date().getFullYear() - CAREER_START_YEAR - CAREER_OFFSET;
}

export function getTokyoYears(): number {
  return new Date().getFullYear() - TOKYO_START_YEAR;
}
