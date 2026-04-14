import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLanguageItems } from "@/lib/content/languages";
import { getSkillsSections } from "@/lib/content/skills";
import { getLocaleStaticParams } from "@/lib/i18n";
import ContactButton from "./ContactButton";
import TechTag from "./TechTag";

export const generateStaticParams = getLocaleStaticParams;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const careerYears = new Date().getFullYear() - 2013 - 1;
  const tokyoYears = new Date().getFullYear() - 2018;
  const languageItems = getLanguageItems(locale);
  const skillsSections = getSkillsSections();

  const hashtags = [
    t("hero.tag_career", { careerYears }),
    t("hero.tag_tokyo", { tokyoYears }),
    t("hero.tag_fullstack"),
    t("hero.tag_languages"),
    t("hero.tag_ai"),
    t("hero.tag_solo"),
  ];

  const strengths = [
    {
      title: t("highlights.solo_title"),
      desc: t("highlights.solo_desc"),
      metrics: [t("highlights.solo_metric1"), t("highlights.solo_metric2")],
    },
    {
      title: t("highlights.ai_title"),
      desc: t("highlights.ai_desc"),
      metrics: [t("highlights.ai_metric1"), t("highlights.ai_metric2")],
    },
    {
      title: t("highlights.tech_title"),
      desc: t("highlights.tech_desc"),
      metrics: [t("highlights.tech_metric1"), t("highlights.tech_metric2")],
    },
  ];

  const projects = [
    {
      title: t("projects.ponge_title"),
      subtitle: t("projects.ponge_subtitle"),
      desc: t("projects.ponge_desc"),
      tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase"],
      url: "https://pon-ge.com/",
      period: "2025.01~",
      live: true,
    },
    {
      title: t("projects.hafh_title"),
      subtitle: t("projects.hafh_subtitle"),
      desc: t("projects.hafh_desc"),
      tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe"],
      url: "https://www.hafh.com/",
      period: "2021.01 ~ 2024.12",
      live: false,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      {/* ── Hero ── */}
      <section className="pb-12">
        <div className="flex items-stretch gap-6">
          <div className="flex shrink-0 items-center py-2">
            <img
              src="/profile.jpg"
              alt={t("profile.imageAlt")}
              className="h-32 w-32 rounded-lg object-cover ring-2 ring-accent/30 ring-offset-2 ring-offset-background"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {t("profile.name")}
            </h1>
            <p className="mt-0.5 text-sm font-medium text-accent">{t("profile.role")}</p>
            <div className="mt-1.5 space-y-0">
              <p className="text-[11px] leading-relaxed text-muted">
                <a href={t("background.educationUrl")} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline transition-colors">
                  {t("background.education")}
                </a>
              </p>
              <p className="text-[11px] leading-relaxed text-muted">
                <a href={t("background.languageSchoolUrl")} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline transition-colors">
                  {t("background.language_school")}
                </a>
              </p>
              <p className="text-[11px] leading-relaxed text-muted">{t("background.military")}</p>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0">
              {languageItems.map((item) => (
                <p key={item.name} className="text-[11px] leading-relaxed text-muted">
                  <span className="font-medium text-foreground">{item.name}</span> {item.level}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 text-base font-medium text-foreground">
          {t("hero.tagline")}
        </p>

        {/* 해시태그 */}
        <div className="mt-6 flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted/10 px-2 py-[2.9px] text-[13.2px] text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 기술 스택 태그 */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {skillsSections.flatMap((section) => section.tags).map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>

        {/* 자기소개 */}
        <div className="mt-6">
          <p className="text-sm leading-relaxed text-muted">
            {t("profile.bio0", { tokyoYears, careerYears })}{" "}
            {t("profile.bio1")}{" "}
            {t("profile.bio2")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t("profile.bio3")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t("profile.bio4")}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 flex gap-3">
          <a
            href={`/${locale}/resume`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("hero.cta_resume")}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
          <ContactButton />
        </div>
      </section>

      {/* ── Core Strengths — 3 카드 ── */}
      <section className="border-t border-border pt-12 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("highlights.title")}
        </h2>
        <div className="grid gap-4">
          {strengths.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-accent/20 bg-accent/5 p-5"
            >
              <div>
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.metrics.map((m) => (
                    <span key={m} className="rounded-md bg-muted/10 px-2 py-[2.9px] text-[13.2px] text-muted">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="border-t border-border pt-12 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("projects.title")}
        </h2>
        <div className="space-y-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-lg border p-5 transition-colors ${p.live ? "border-accent/30 bg-accent/5" : "border-border hover:border-accent/30"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          {p.title}
                          <svg className="ml-1 inline h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ) : p.title}
                    </h3>
                    {p.live && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                        live
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-accent">{p.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-xs text-tag-text">
                  {p.period}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>

              {/* 기술 태그 */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
