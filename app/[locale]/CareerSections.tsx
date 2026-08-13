import { getTranslations } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import { getCareerYears } from "@/lib/constants";
import TechTag from "./TechTag";
import BulletList from "./BulletList";
import ChevronIcon from "./ChevronIcon";

/** 성과 · 배운 점 박스 */
function Insights({
  insights,
  achievementsLabel,
  learningsLabel,
  className,
}: {
  insights: { achievements: string[]; learnings: string[] };
  achievementsLabel: string;
  learningsLabel: string;
  className: string;
}) {
  return (
    <div className={`rounded-lg border border-border bg-muted/5 space-y-3 ${className}`}>
      {insights.achievements.length > 0 && (
        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {achievementsLabel}
          </p>
          <BulletList items={insights.achievements} />
        </div>
      )}
      {insights.learnings.length > 0 && (
        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            {learningsLabel}
          </p>
          <BulletList items={insights.learnings} />
        </div>
      )}
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
  const careerYears = getCareerYears();
  const achievementsLabel = t("career.achievements");
  const learningsLabel = t("career.learnings");

  return (
    <>
      {/* ── 경력 ── */}
      <section id="career" className="border-t border-border py-10">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("career.title", { years: careerYears })}
        </h2>

        <div className="space-y-4">
          {stages.map((stage, idx) => {
            const isCurrent = idx === 0;
            const rawPeriod =
              stage.appInfo?.period ?? stage.duration?.match(/\(([^)]+)\)/)?.[1] ?? "";
            const periodText = rawPeriod.endsWith("~")
              ? `${rawPeriod} ${t("career.now")}`
              : rawPeriod;

            return (
              <details
                key={stage.number}
                open={isCurrent}
                className={`group rounded-lg border p-5 transition-colors ${isCurrent ? "border-accent/30 bg-accent/5" : "border-border"}`}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex flex-1 flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                    {stage.employmentType && (
                      <EmploymentBadge
                        label={t(`career.${stage.employmentType}`)}
                        freelance={stage.employmentType === "freelance"}
                      />
                    )}
                    <ChevronIcon className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90" />
                  </div>
                  {periodText && (
                    <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                      {periodText}
                    </span>
                  )}
                </summary>

                <div className="mt-4">
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
                                  {sp.tags && (
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                      {sp.tags.map((tag) => (
                                        <TechTag key={tag}>{tag}</TechTag>
                                      ))}
                                    </div>
                                  )}
                                  {sp.insights && (
                                    <Insights
                                      insights={sp.insights}
                                      achievementsLabel={achievementsLabel}
                                      learningsLabel={learningsLabel}
                                      className="mt-2 p-2.5"
                                    />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {loc.tags && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {loc.tags.map((tag) => (
                                <TechTag key={tag}>{tag}</TechTag>
                              ))}
                            </div>
                          )}

                          {loc.insights && (
                            <Insights
                              insights={loc.insights}
                              achievementsLabel={achievementsLabel}
                              learningsLabel={learningsLabel}
                              className="mt-3 p-3"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {stage.items && <BulletList items={stage.items} />}

                  {stage.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {stage.tags.map((tag) => (
                        <TechTag key={tag}>{tag}</TechTag>
                      ))}
                    </div>
                  )}

                  {stage.insights && !stage.locations && (
                    <Insights
                      insights={stage.insights}
                      achievementsLabel={achievementsLabel}
                      learningsLabel={learningsLabel}
                      className="mt-4 p-4"
                    />
                  )}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ── 학력 & 병역 ── */}
      <section className="border-t border-border py-10">
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
    </>
  );
}
