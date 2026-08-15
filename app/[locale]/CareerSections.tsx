import { getTranslations } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import type { CSSProperties } from "react";
import BulletList from "./BulletList";
import ChevronIcon from "./ChevronIcon";
import CollapseControls from "./CollapseControls";
import Reveal from "./Reveal";

/**
 * 성과 박스.
 *
 * `insights.learnings`는 데이터에 남아 있지만 화면에 걸지 않는다. "~ 체득 / ~ 노하우 습득"
 * 류의 자기평가는 읽는 쪽에서 검증할 방법이 없어 성과의 밀도만 떨어뜨린다.
 */
function Insights({
  insights,
  achievementsLabel,
  className,
}: {
  insights: { achievements: string[] };
  achievementsLabel: string;
  className: string;
}) {
  if (insights.achievements.length === 0) return null;

  return (
    <div className={`rounded-lg border border-border bg-muted/5 ${className}`}>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
        {achievementsLabel}
      </p>
      <BulletList items={insights.achievements} />
    </div>
  );
}

function EmploymentBadge({ label, freelance }: { label: string; freelance: boolean }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
        freelance ? "bg-accent/15 text-accent" : "bg-muted/20 text-muted"
      }`}
    >
      {label}
    </span>
  );
}

export default async function CareerSections({ locale }: { locale: string }) {
  const t = await getTranslations();
  const stages = getCareerStages(locale);
  const achievementsLabel = t("career.achievements");

  return (
    // 자체 패널이 아니라 홈 패널 안의 한 블록이다. 간격은 page.tsx의 BLOCK과 같은 값.
    <section id="career" className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("career.title")}
        </h2>

        <CollapseControls
          expandAll={t("timeline.expand_all")}
          collapseAll={t("timeline.collapse_all")}
        >
        {/* 카드가 아니라 밑줄 목록이다. 경계선은 각 항목의 아래쪽 하나뿐. */}
        <Reveal className="border-t border-border">
          {stages.map((stage, idx) => {
            const isCurrent = idx === 0;

            return (
              <details
                key={stage.number}
                open={isCurrent}
                style={{ "--i": idx } as CSSProperties}
                className="reveal-item group block border-b border-border"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                  <ChevronIcon className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
                </summary>

                <div className="pb-6">
                  {stage.company && (
                    <p className="mb-4 font-medium text-foreground">
                      {stage.companyUrl ? (
                        <a href={stage.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                          {stage.company}
                        </a>
                      ) : (
                        stage.company
                      )}
                    </p>
                  )}

                  {stage.scope && (
                    <p className="mb-4 text-sm text-muted">
                      <span className="font-medium text-foreground">{stage.scope.label}</span>{" "}
                      {stage.scope.value}
                    </p>
                  )}

                  {stage.locations && (
                    <div className="space-y-4">
                      {stage.locations.map((loc) => (
                        <div key={loc.name} className="rounded-lg border border-border p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-medium text-foreground">
                                {loc.url ? (
                                  <a href={loc.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                    {loc.name}
                                  </a>
                                ) : (
                                  loc.name
                                )}
                              </h4>
                              {loc.employmentType && (
                                <EmploymentBadge
                                  label={
                                    loc.employmentType === "fulltime-to-freelance"
                                      ? `${t("career.fulltime")} → ${t("career.freelance")}`
                                      : t(`career.${loc.employmentType}`)
                                  }
                                  freelance={loc.employmentType === "freelance"}
                                />
                              )}
                            </div>
                            <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                              {loc.duration}
                            </span>
                          </div>

                          <div className="mt-3">
                            <BulletList items={loc.items} />
                          </div>

                          {loc.subProjects && (
                            <div className="mt-4 space-y-3">
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                                {t("career.key_projects")}
                              </p>
                              {loc.subProjects.map((sp) => (
                                <div key={sp.name} className="rounded-lg border border-border p-3">
                                  <h5 className="text-sm font-semibold text-foreground">{sp.name}</h5>
                                  <div className="mt-1.5">
                                    <BulletList items={sp.items} />
                                  </div>
                                  {/* 10년 전 SI 서브 프로젝트의 성과·태그는 걸지 않는다.
                                      무엇을 만들었는지(items)까지가 이 깊이에서 읽히는 정보다. */}
                                </div>
                              ))}
                            </div>
                          )}

                          {loc.insights && (
                            <Insights
                              insights={loc.insights}
                              achievementsLabel={achievementsLabel}
                              className="mt-3 p-3"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {stage.items && <BulletList items={stage.items} />}

                  {/* 기술 태그는 걸지 않는다. 바로 위 기술 연표가 같은 목록을 연도까지
                      붙여 보여주므로, 여기 있으면 같은 정보를 두 번 읽게 된다. */}

                  {stage.insights && !stage.locations && (
                    <Insights
                      insights={stage.insights}
                      achievementsLabel={achievementsLabel}
                      className="mt-4 p-4"
                    />
                  )}
                </div>
              </details>
            );
          })}
        </Reveal>
        </CollapseControls>
    </section>
  );
}
