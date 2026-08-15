import { getTranslations } from "next-intl/server";
import { countRowYears, getTimelineYears, rowCoversYear } from "@/lib/content/timeline";
import type { TimelineGroup } from "@/lib/content/types";
import TimelineGrid from "./TimelineGrid";

/**
 * 연도 × 항목 연표. 기술 스택과 커리어 형태가 같은 축을 공유한다.
 *
 * 구간 계산은 여기(서버)에서 끝내고, 클라이언트에는 연도별 on/off 배열만 넘긴다.
 */
export default async function YearTimeline({ groups }: { groups: TimelineGroup[] }) {
  const t = await getTranslations("timeline");
  const years = getTimelineYears();
  const lastYear = years[years.length - 1];

  return (
    <TimelineGrid
      years={years}
      yearsSuffix={t("years_suffix")}
      legendNone={t("legend_none")}
      legendUsed={t("legend_used")}
      expandAll={t("expand_all")}
      collapseAll={t("collapse_all")}
      groups={groups.map((group) => ({
        label: group.label,
        rows: group.rows.map((row) => ({
          name: row.name,
          on: years.map((year) => rowCoversYear(row, year, lastYear)),
          total: countRowYears(row, years),
        })),
      }))}
    />
  );
}
