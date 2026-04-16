import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLanguageItems } from "@/lib/content/languages";
import { getSkillsSections } from "@/lib/content/skills";
import { getLocaleStaticParams } from "@/lib/i18n";
import { routing } from "@/i18n/routing";
import { getCareerYears, getTokyoYears } from "@/lib/constants";
import type { Metadata } from "next";
import ContactButton from "./ContactButton";
import TechTag from "./TechTag";

export const generateStaticParams = getLocaleStaticParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}`;
  }
  return {
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const careerYears = getCareerYears();
  const tokyoYears = getTokyoYears();
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
              {languageItems.map((item) => (
                <p key={item.name} className="text-[11px] leading-relaxed text-muted">
                  <span className="font-medium text-foreground">{item.name}</span> {item.level}
                </p>
              ))}
              <p className="text-[11px] leading-relaxed text-muted">
                <span className="font-medium text-foreground">{t("profile.hobby_label")}</span> {t("profile.hobby_value")}
              </p>
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

        {/* 자기소개 + 핵심 강점 통합 */}
        <div className="mt-6 space-y-4">
          <p className="text-sm leading-relaxed text-muted">
            {t("profile.bio0", { tokyoYears, careerYears })}{" "}
            {t("profile.bio1")}
          </p>

          <div>
            <h3 className="mb-1.5 text-sm font-bold text-foreground">{t("highlights.ai_title")}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {t("profile.bio2")}
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-sm font-bold text-foreground">{t("highlights.solo_title")}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {t("profile.bio3")}
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-sm font-bold text-foreground">{t("highlights.tech_title")}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {t("profile.bio4")}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex gap-3">
          <a
            href={`/${locale}/resume`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t("hero.cta_resume")}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
          <ContactButton />
        </div>
      </section>

      {/* ── 기술 스택 ── */}
      <section className="border-t border-border pt-4 pb-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("skills.title")}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {skillsSections.flatMap((section) => section.tags).map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>
      </section>

    </div>
  );
}
