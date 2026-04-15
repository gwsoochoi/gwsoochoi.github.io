import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import { getLocaleStaticParams } from "@/lib/i18n";
import TechTag from "../TechTag";
import BulletList from "../BulletList";
import ChevronIcon from "../ChevronIcon";

export const generateStaticParams = getLocaleStaticParams;

function calcYearsFromPeriod(period: string): number {
  const match = period.match(/(\d{4})\.(\d{2})/);
  if (!match) return 0;
  const start = new Date(parseInt(match[1]), parseInt(match[2]) - 1);
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  return Math.floor(months / 12);
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const stages = getCareerStages(locale);
  const careerYears = new Date().getFullYear() - 2013 - 1;

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      {/* ── 경력 ── */}
      <section className="mb-12">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          {t("career.title", { years: careerYears })}
        </h2>

        <div className="space-y-4">
          {stages.map((stage, idx) => {
            const isCurrent = idx < 1;

            // 기간 텍스트 결정
            const periodText = stage.appInfo?.period
              ? (() => {
                  const years = calcYearsFromPeriod(stage.appInfo!.period!);
                  return years > 0
                    ? `${t("career.approx_years", { years })} (${stage.appInfo!.period})`
                    : `(${stage.appInfo!.period})`;
                })()
              : stage.duration?.match(/\(([^)]+)\)/)?.[1] || "";

            return (
              <details
                key={stage.number}
                open={isCurrent}
                className={`group rounded-lg border p-5 transition-colors ${isCurrent ? "border-accent/30 bg-accent/5" : "border-border"}`}
              >
                {/* 헤더: 타이틀 + 뱃지 + 기간 */}
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {stage.title}
                    </h3>
                    {isCurrent && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                        {t("career.now")}
                      </span>
                    )}
                    {stage.employmentType && (
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                        stage.employmentType === "freelance"
                          ? "bg-accent/15 text-accent"
                          : "bg-muted/20 text-muted"
                      }`}>
                        {t(`career.${stage.employmentType}`)}
                      </span>
                    )}
                    <ChevronIcon className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
                  </div>
                  {periodText && (
                    <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                      {periodText}
                    </span>
                  )}
                </summary>

                {/* 본문 */}
                <div className="mt-4">
                  {/* company + app info */}
                  {stage.appInfo && stage.appDescription && (
                    <div className="mb-4">
                      {stage.company && (
                        <p className="font-medium text-foreground">
                          {stage.companyUrl ? (
                            <a href={stage.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{stage.company}</a>
                          ) : stage.company}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-muted">
                        {stage.appDescription}{" "}
                        {stage.appInfo.url ? (
                          <a href={stage.appInfo.url} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                            {stage.appInfo.name}
                          </a>
                        ) : (
                          <span className="font-medium text-foreground">{stage.appInfo.name}</span>
                        )}
                      </p>
                    </div>
                  )}

                  {/* motivation */}
                  {stage.motivation && (
                    <div className="mb-4 rounded-lg border border-accent/20 bg-accent/5 p-4">
                      {stage.motivation.map((line) => (
                        <p key={line} className="text-sm leading-relaxed text-foreground">{line}</p>
                      ))}
                    </div>
                  )}

                  {/* scope */}
                  {stage.scope && !("projects" in stage) && (
                    <div className="mb-4">
                      <p className="text-sm text-muted">
                        <span className="font-medium text-foreground">{stage.scope.label}</span>{" "}
                        {stage.scope.value}
                      </p>
                    </div>
                  )}

                  {/* service overview */}
                  {stage.serviceOverview && (
                    <div className="mb-4 space-y-3">
                      {(() => {
                        const groups: { label?: string; content: string[] }[] = [];
                        let cur: { label?: string; content: string[] } = { content: [] };
                        for (const line of stage.serviceOverview) {
                          if (line.startsWith("## ")) {
                            if (cur.content.length || cur.label) groups.push(cur);
                            cur = { label: line.slice(3), content: [] };
                          } else {
                            cur.content.push(line);
                          }
                        }
                        if (cur.content.length || cur.label) groups.push(cur);
                        const isVersion = (label?: string) => label && /^v\d|^개발 시작|^開発開始|^Development Started/i.test(label);
                        const renderContent = (content: string[]) => content.map((c) => {
                          const parts = c.split(" / ");
                          if (parts.length > 1) {
                            return (
                              <ul key={c} className="space-y-1">
                                {parts.map((p, j) => (
                                  <li key={j} className="flex items-start text-sm leading-relaxed text-muted">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                                    {p.trim()}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          return <p key={c} className="text-sm leading-relaxed text-muted">{c}</p>;
                        });
                        return groups.map((g, i) => {
                          if (isVersion(g.label)) {
                            return (
                              <details key={i} className="group/ver">
                                <summary className="mb-1 flex cursor-pointer list-none items-center gap-1 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                                  <ChevronIcon className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-open/ver:rotate-90" />
                                  {g.label}
                                </summary>
                                <div className="ml-5">{renderContent(g.content)}</div>
                              </details>
                            );
                          }
                          return (
                            <div key={i}>
                              {g.label && (
                                <p className="mb-1 text-sm font-semibold text-foreground">{g.label}</p>
                              )}
                              {renderContent(g.content)}
                            </div>
                          );
                        });
                      })()}
                    </div>
                  )}

                  {/* features table */}
                  {stage.features && (
                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          {stage.features.map((f) => (
                            <tr key={f.name} className="border-b border-border last:border-0">
                              <td className="py-1.5 pr-4 font-medium text-foreground whitespace-nowrap">{f.name}</td>
                              <td className="py-1.5 text-muted">{f.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* tech stack table */}
                  {stage.techStack && (
                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          {stage.techStack.map((ts) => (
                            <tr key={ts.layer} className="border-b border-border last:border-0">
                              <td className="py-1.5 pr-4 w-28 font-medium text-foreground whitespace-nowrap">{ts.layer}</td>
                              <td className="py-1.5 text-muted">{ts.tech}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* timeline */}
                  {stage.timeline && (
                    <div className="mb-4 overflow-x-auto">
                      <table className="w-full text-sm">
                        <tbody>
                          {stage.timeline.map((tl, i, arr) => (
                            <tr key={`${tl.period}-${i}`} className={`border-b border-border last:border-0${i > 0 && tl.period.slice(0, 4) !== arr[i - 1].period.slice(0, 4) ? " border-t-2 border-t-border" : ""}`}>
                              <td className="py-1.5 pr-4 w-28 font-medium text-foreground whitespace-nowrap align-top">{tl.period}</td>
                              <td className="py-1.5 text-muted">
                                {tl.description ? (
                                  <details>
                                    <summary className="cursor-pointer list-none flex items-center gap-1 [&::-webkit-details-marker]:hidden">
                                      <ChevronIcon className="w-3.5 h-3.5 shrink-0 transition-transform [[open]>summary>&]:rotate-90" />
                                      <span>{tl.milestone}</span>
                                    </summary>
                                    <div className="mt-1 text-xs text-muted/80">
                                      {(() => {
                                        const groups: { label?: string; items: string[] }[] = [];
                                        let cur: { label?: string; items: string[] } = { items: [] };
                                        for (const d of tl.description) {
                                          if (d.startsWith("## ")) {
                                            if (cur.items.length) groups.push(cur);
                                            cur = { label: d.slice(3), items: [] };
                                          } else {
                                            cur.items.push(d);
                                          }
                                        }
                                        if (cur.items.length || cur.label) groups.push(cur);
                                        return groups.map((g, gi) => (
                                          <div key={gi}>
                                            {g.label && <p className="font-medium mt-2 mb-0.5 text-muted">{g.label}</p>}
                                            {g.items.length > 0 && (
                                              <ul className="ml-5 list-disc">
                                                {g.items.map((item, j) => <li key={j}>{item}</li>)}
                                              </ul>
                                            )}
                                          </div>
                                        ));
                                      })()}
                                    </div>
                                  </details>
                                ) : (
                                  <div>{tl.milestone}</div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* company & service (appInfo 없는 경우) */}
                  {stage.company && !stage.appInfo && (
                    <div className="mb-4">
                      <p className="font-medium text-foreground">
                        {stage.companyUrl ? (
                          <a href={stage.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{stage.company}</a>
                        ) : stage.company}
                      </p>
                      {stage.service && (
                        <p className="mt-1 text-sm text-muted">
                          {stage.service.description.split(stage.service.name)[0]}
                          <a href={stage.service.url} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
                            {stage.service.name}
                          </a>
                          {stage.service.description.split(stage.service.name).slice(1).join(stage.service.name)}
                        </p>
                      )}
                    </div>
                  )}

                  {/* overview */}
                  {stage.overview && (
                    <div className="mb-4">
                      <BulletList items={stage.overview} />
                    </div>
                  )}

                  {/* locations */}
                  {"locations" in stage && stage.locations && (
                    <div className="space-y-4">
                      {stage.locations.map((loc) => (
                        <div key={loc.name} className="rounded-lg border border-border p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-medium text-foreground">
                                {loc.url ? (
                                  <a href={loc.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{loc.name}</a>
                                ) : loc.name}
                              </h4>
                              {loc.employmentType && (
                                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                                  loc.employmentType === "freelance"
                                    ? "bg-accent/15 text-accent"
                                    : "bg-muted/20 text-muted"
                                }`}>
                                  {loc.employmentType === "fulltime-to-freelance"
                                    ? `${t("career.fulltime")} → ${t("career.freelance")}`
                                    : t(`career.${loc.employmentType}`)}
                                </span>
                              )}
                            </div>
                            <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                              {loc.duration}
                            </span>
                          </div>

                          <div className="mt-3">
                            <BulletList items={loc.items} />
                          </div>

                          {loc.tags && !loc.subProjects && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {loc.tags.map((tag) => (
                                <TechTag key={tag}>{tag}</TechTag>
                              ))}
                            </div>
                          )}

                          {loc.subProjects && (
                            <div className="mt-4 space-y-3">
                              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{t("career.key_projects")}</p>
                              {loc.subProjects.map((sp) => (
                                <div key={sp.name} className="rounded-lg border border-border p-3">
                                  <h5 className="text-sm font-semibold text-foreground">{sp.name}</h5>
                                  <div className="mt-1.5">
                                    <BulletList items={sp.items} />
                                  </div>
                                  {sp.tags && (
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      {sp.tags.map((tag) => (
                                        <TechTag key={tag}>{tag}</TechTag>
                                      ))}
                                    </div>
                                  )}
                                  {sp.insights && (
                                    <div className="mt-2 rounded-lg border border-border bg-muted/5 p-2.5 space-y-2">
                                      {sp.insights.achievements.length > 0 && (
                                        <div>
                                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">{t("career.achievements")}</p>
                                          <BulletList items={sp.insights.achievements} />
                                        </div>
                                      )}
                                      {sp.insights.learnings.length > 0 && (
                                        <div>
                                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{t("career.learnings")}</p>
                                          <BulletList items={sp.insights.learnings} />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {loc.tags && (
                                <div className="flex flex-wrap gap-1.5">
                                  {loc.tags.map((tag) => (
                                    <TechTag key={tag}>{tag}</TechTag>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          {loc.insights && (
                            <div className="mt-3 rounded-lg border border-border bg-muted/5 p-3 space-y-3">
                              {loc.insights.achievements.length > 0 && (
                                <div>
                                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent">{t("career.achievements")}</p>
                                  <BulletList items={loc.insights.achievements} />
                                </div>
                              )}
                              {loc.insights.learnings.length > 0 && (
                                <div>
                                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">{t("career.learnings")}</p>
                                  <BulletList items={loc.insights.learnings} />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* items */}
                  {"items" in stage && stage.items && !("projects" in stage) && (
                    <BulletList items={stage.items} />
                  )}

                  {stage.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stage.tags.map((tag) => (
                        <TechTag key={tag}>{tag}</TechTag>
                      ))}
                    </div>
                  )}

                  {/* insights (stage level) */}
                  {stage.insights && !("locations" in stage) && (
                    <div className="mt-4 rounded-lg border border-border bg-muted/5 p-4 space-y-3">
                      {stage.insights.achievements.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent">{t("career.achievements")}</p>
                          <BulletList items={stage.insights.achievements} />
                        </div>
                      )}
                      {stage.insights.learnings.length > 0 && (
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">{t("career.learnings")}</p>
                          <BulletList items={stage.insights.learnings} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* items + projects */}
                  {"projects" in stage && stage.items && (
                    <>
                      <div className="mb-5">
                        <BulletList items={stage.items} />
                      </div>

                      {stage.projects?.map((project) => (
                        <div key={project.title} className="mb-4 rounded-lg border border-border p-4">
                          <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                            <h4 className="font-semibold text-foreground">
                              {project.title}
                              {project.status && (
                                <span className="ml-2 text-sm font-normal text-muted">{project.status}</span>
                              )}
                            </h4>
                          </div>
                          <div className="mt-3">
                            <BulletList items={project.items} />
                          </div>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <TechTag key={tag}>{tag}</TechTag>
                            ))}
                          </div>
                        </div>
                      ))}

                      {stage.scope && (
                        <p className="text-sm text-muted">
                          <span className="font-medium text-foreground">{stage.scope.label}</span>{" "}
                          {stage.scope.value}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ── 학력 & 병역 ── */}
      <section className="mb-12">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          {t("background.section_title")}
        </h2>

        {/* 학력 */}
        <div className="mb-8">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            {t("background.sub_education")}
          </h3>
          <div className="space-y-4">
            {/* 남서울대학교 */}
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-medium text-foreground">
                  <a href={t("background.educationUrl")} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {t("background.education_name")}
                  </a>
                </h4>
                <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                  {t("background.education_period")}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{t("background.education_note")}</p>
            </div>

            {/* 일본어학교 */}
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-medium text-foreground">
                  <a href={t("background.languageSchoolUrl")} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {t("background.language_school_name")}
                  </a>
                </h4>
                <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                  {t("background.language_school_period")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 병역 */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            {t("background.sub_military")}
          </h3>
          <div className="rounded-lg border border-border p-4">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium text-foreground">
                {t("background.military_name")}
              </h4>
              <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                {t("background.military_period")}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{t("background.military_detail")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
