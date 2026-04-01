import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getLanguageItems } from "@/lib/content/languages";
import { getSkillsSections } from "@/lib/content/skills";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
  const skillsSections = getSkillsSections(locale);

  const bio = [
    t("profile.bio0", { tokyoYears, careerYears }),
    t("profile.bio1"),
    t("profile.bio2"),
    t("profile.bio3"),
  ].join(" ");

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      {/* 프로필 카드 */}
      <div className="flex items-start gap-6">
        <img
          src="/profile.jpg"
          alt={t("profile.imageAlt")}
          className="h-28 w-28 shrink-0 rounded-lg object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {t("profile.name")}
          </h1>
          <p className="mt-2 text-xl text-accent">{t("profile.role")}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              gwsoochoi@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t("profile.location")}
            </span>
          </div>
        </div>
      </div>

      {/* 소개 */}
      <section className="mt-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          {t("about.greeting")}
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          {bio} {t("profile.bioSub")}
        </p>
      </section>

      {/* 개발 성향 */}
      <section className="mt-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          {t("philosophy.title")}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted">
          {t("philosophy.subtitle")}
        </p>
      </section>

      {/* 언어 */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("languages.title")}
        </h2>
        <div className="grid gap-3">
          {languageItems.map((item) => (
            <div key={item.name} className="flex items-baseline gap-3">
              <span className="shrink-0 text-sm font-semibold text-muted w-40">
                {item.name}
              </span>
              <span className="text-sm text-muted">{item.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-foreground">{t("skills.title")}</h2>
        <div className="grid gap-3">
          {skillsSections.map((section) => (
            <div key={section.label} className="flex items-baseline gap-3">
              <span className="shrink-0 text-sm font-semibold text-muted w-40">
                {section.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
