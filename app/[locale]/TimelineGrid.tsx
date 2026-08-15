"use client";

import { useState } from "react";
import ChevronIcon from "./ChevronIcon";
import CollapseControls from "./CollapseControls";
import Reveal from "./Reveal";

/** 서버에서 계산해 넘겨받는 한 줄. `on`은 연도축과 길이가 같다. */
export interface GridRow {
  name: string;
  on: boolean[];
  total: number;
}

export interface GridGroup {
  label?: string;
  rows: GridRow[];
}

/** 축 라벨은 오른쪽(올해)부터 3년 간격. 칸 폭이 좁아 매년 적으면 겹친다. */
const LABEL_STEP = 3;

// 칸 수가 올해에 따라 바뀌므로 grid 대신 flex다. `repeat(var(--n), …)`은
// Chrome이 반복 횟수의 var()를 지원하지 않아 선언째로 무효가 된다.
// 칸은 고정 크기다. 폭을 나눠 가지면 행이 30개인 기술 연표에서 칸이 커져
// 세로가 화면을 넘고, 연도축 정렬도 로케일마다 흔들린다.
const ROW = "flex items-center gap-1 rounded sm:gap-1.5";
const LABEL = "w-[5.5rem] shrink-0 sm:w-40";
const CELL = "h-2.5 w-2.5 shrink-0 sm:h-3.5 sm:w-3.5";
const TOTAL = "ml-2 w-8 shrink-0 text-right sm:w-11";

/** 축 라벨이 붙는 열. 그 열의 빈 칸을 한 단계 진하게 깔아 3년짜리 눈금으로 쓴다. */
const isTick = (index: number, length: number) => (length - 1 - index) % LABEL_STEP === 0;

export default function TimelineGrid({
  groups,
  years,
  yearsSuffix,
  legendNone,
  legendUsed,
  expandAll,
  collapseAll,
}: {
  groups: GridGroup[];
  years: number[];
  yearsSuffix: string;
  legendNone: string;
  legendUsed: string;
  expandAll: string;
  collapseAll: string;
}) {
  // 커서가 얹힌 연도의 순번. 그 해에 걸치지 않는 줄은 흐려진다.
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // 화면에 들어온 뒤에 칸이 차오른다.
    <Reveal
      // 칸마다 핸들러를 달면 200개가 넘는다. 사용 칸만 data 속성을 갖고, 위임으로 읽는다.
      onMouseOver={(event) => {
        const cell = (event.target as HTMLElement).closest<HTMLElement>("[data-on-year]");
        setHovered(cell ? Number(cell.dataset.onYear) : null);
      }}
      onMouseLeave={() => setHovered(null)}
    >
      <CollapseControls expandAll={expandAll} collapseAll={collapseAll}>
      {/* 연도 축 */}
      <div className={`${ROW} mb-1.5`}>
        <span className={LABEL} />
        {years.map((year, index) => {
          const isHovered = hovered === index;
          return (
            <span
              key={year}
              className={`${CELL} text-[9px] leading-none transition-colors ${
                isHovered ? "font-bold text-accent" : "text-muted"
              }`}
            >
              {isHovered || isTick(index, years.length) ? `'${String(year).slice(2)}` : ""}
            </span>
          );
        })}
        <span className={TOTAL} />
      </div>

      {/* 그룹마다 밑줄 드롭다운. 경력 목록과 같은 UI다. */}
      <div className="border-t border-border">
        {groups.map((group, groupIndex) => (
          <details
            key={group.label ?? groupIndex}
            open={groupIndex === 0}
            className="group border-b border-border"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-2.5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-accent/80">
                {group.label}
              </h3>
              <ChevronIcon className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-open:rotate-90" />
            </summary>
            <div className="space-y-1 pb-3">
              {group.rows.map((row) => {
                // 커서가 얹힌 해에 이 줄이 걸쳐 있으면 그대로, 아니면 흐리게.
                const dim = hovered !== null && !row.on[hovered];
                return (
                  <div
                    key={row.name}
                    // 커서가 얹힌 줄 자체도 옅게 깔아 준다. 30줄에서 가로로 눈이 미끄러지지 않는다.
                    className={`${ROW} transition-opacity duration-150 hover:bg-muted/10 ${
                      dim ? "opacity-25" : ""
                    }`}
                  >
                    <span
                      className={`${LABEL} truncate text-[11px] transition-colors sm:text-xs ${
                        hovered !== null && !dim ? "text-accent" : "text-foreground"
                      }`}
                      title={row.name}
                    >
                      {row.name}
                    </span>
                    {row.on.map((on, index) => (
                      <span
                        key={years[index]}
                        aria-hidden
                        data-on-year={on ? index : undefined}
                        // --i는 연도 순번. 칸이 왼쪽부터 차례로 차오르는 지연값이 된다.
                        style={on ? ({ "--i": index } as React.CSSProperties) : undefined}
                        className={`${CELL} rounded-[2px] ${
                          on ? "tl-on bg-accent" : isTick(index, years.length) ? "bg-border" : "bg-border/50"
                        } ${hovered === index ? "ring-1 ring-accent/70" : ""}`}
                      />
                    ))}
                    <span className={`${TOTAL} text-[11px] font-medium tabular-nums text-foreground/70`}>
                      {row.total}
                      {yearsSuffix}
                    </span>
                  </div>
                );
              })}
            </div>
          </details>
        ))}
      </div>
      </CollapseControls>

      <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted">
        <span>{legendNone}</span>
        <span aria-hidden className="h-2.5 w-2.5 rounded-[2px] bg-border/60" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-[2px] bg-accent" />
        <span>{legendUsed}</span>
      </div>
    </Reveal>
  );
}
