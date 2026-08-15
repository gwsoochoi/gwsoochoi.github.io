import type { TimelineGroup, YearSpan } from "./types";

// 그룹 이름은 기술 연표의 Backend·Web과 같은 축이라 같이 영문으로 둔다.
const GROUP_LABEL = "Industry";

// 커리어를 형태별로 본 연표. 구간은 career.ts의 재직 기간에서 뽑았고, 한 해에 둘 이상이
// 겹치는 것이 정상이다 — 예를 들어 2023년은 카부쿠(스타트업)와 PPB(프리랜서)를 같이 했다.
//
//   SI/SE      2013.06~2015.05 라이트브레인 · 2015.06~2018.05 자이로소프트
//              2019.07~2020.12 아크로스로드 · 2024.06~2024.09 리브게이트
//   일본어 학교  2018 (도쿄 이주) — 이 해는 학교가 전부라 다른 줄이 전부 비어 있다.
//              자이로소프트가 2018.05까지지만 그 해의 주된 이력은 학교로 본다.
//   스타트업    2021.01~2024.12 카부쿠스타일
//   프리랜서    2023.01~2023.12 PPB · 2024.06~09 리브게이트 · 2025.01~ GREATEARTH
//              (카부쿠는 fulltime-to-freelance지만 전환 시점 기록이 없어 스타트업으로만 센다)
//   개인 프로덕트 2025.01~ PONGE · SayDraw
//
// 이름은 로케일마다 다르므로 여기서는 번역 키만 들고, 화면에서 messages를 붙인다.
const tracks: { key: string; spans: YearSpan[] }[] = [
  { key: "si", spans: [[2013, 2017], [2019, 2020], [2024, 2024]] },
  { key: "school", spans: [[2018, 2018]] },
  { key: "startup", spans: [[2021, 2024]] },
  { key: "freelance", spans: [[2023]] },
  { key: "personal", spans: [[2025]] },
];

/** 번역기를 받아 화면에 바로 쓸 한 그룹으로 만든다. */
export function getCareerTrackGroup(label: (key: string) => string): TimelineGroup {
  return {
    label: GROUP_LABEL,
    rows: tracks.map((track) => ({ name: label(track.key), spans: track.spans })),
  };
}
