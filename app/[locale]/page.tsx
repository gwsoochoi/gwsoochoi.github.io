import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import { getLanguageItems } from "@/lib/content/languages";
import { getProjectCases } from "@/lib/content/projects";
import { getSkillsSections } from "@/lib/content/skills";
import { getLocaleStaticParams } from "@/lib/i18n";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import CareerSections from "./CareerSections";
import ProfileAvatar from "./ProfileAvatar";
import ProjectCard from "./ProjectCard";
import TechTag from "./TechTag";

const EMAIL = "gwsoochoi@gmail.com";

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

/** 하단 연락 섹션의 CTA 묶음 */
function CtaRow({
  contactLabel,
  resumeLabel,
}: {
  contactLabel: string;
  resumeLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        {contactLabel}
      </a>
      <a
        href="#career"
        className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-muted"
      >
        {resumeLabel}
      </a>
    </div>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const languageItems = getLanguageItems(locale);
  const skillsSections = getSkillsSections();
  const projects = getProjectCases(locale);

  // 서비스 상세는 career.ts의 appInfo 항목이 정본. 경력 섹션과 중복 노출하지 않고 카드에서만 편다.
  const overviews = new Map(
    getCareerStages(locale)
      .filter((stage) => stage.appInfo && stage.serviceOverview)
      .map((stage) => [stage.appInfo!.name, stage.serviceOverview!])
  );

  const availabilityRows = [
    { label: t("availability.workstyle_label"), value: t("availability.workstyle_value") },
    { label: t("availability.start_label"), value: t("availability.start_value") },
    { label: t("availability.location_label"), value: t("availability.location_value") },
    { label: t("availability.contract_label"), value: t("availability.contract_value") },
    {
      label: t("availability.language_label"),
      value: languageItems.map((item) => `${item.name} ${item.level}`).join(" / "),
      wide: true,
    },
  ];

  const capabilities = [1, 2, 3, 4].map((n) => ({
    title: t(`capabilities.item${n}_title`),
    desc: t(`capabilities.item${n}_desc`),
  }));

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      {/* ── Hero ── */}
      <section className="pb-10">
        <div className="flex items-center gap-6">
          <div className="flex shrink-0 items-center py-2">
            <ProfileAvatar alt={t("profile.imageAlt")} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t("profile.name")}
          </h1>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted">
          {t("hero.subtitle")}
        </p>
      </section>

      {/* ── 가동 조건 ── */}
      <section className="border-t border-border py-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            {t("availability.title")}
          </h2>
          <span className="rounded-md bg-tag-bg px-2 py-0.5 text-xs text-tag-text">
            {t("availability.badge")}
          </span>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
          {availabilityRows.map((row) => (
            <div
              key={row.label}
              className={`border-t border-border py-3 ${row.wide ? "sm:col-span-2" : ""}`}
            >
              <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                {row.label}
              </dt>
              <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── 맡길 수 있는 업무 ── */}
      <section className="border-t border-border py-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          {t("capabilities.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
          {capabilities.map((item) => (
            <div key={item.title} className="border-t border-border py-4">
              <h3 className="mb-1.5 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 대표 프로젝트 ── */}
      <section id="work" className="border-t border-border py-10">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("work.title")}
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              overview={overviews.get(project.name)}
            />
          ))}
        </div>
      </section>

      {/* ── 기술 스택 ── */}
      <section className="border-t border-border py-10">
        <h2 className="mb-6 text-2xl font-bold text-foreground">
          {t("skills.title")}
        </h2>
        <div className="space-y-5">
          {skillsSections.map((section) => (
            <div key={section.label}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                {section.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {section.tags.map((tag) => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 경력 · 학력 ── */}
      <CareerSections locale={locale} />

      {/* ── 연락 ── */}
      <section className="border-t border-border pt-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          {t("contact.title")}
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted">{t("contact.desc")}</p>
        <CtaRow
          contactLabel={t("hero.cta_contact")}
          resumeLabel={t("hero.cta_resume")}
        />
      </section>
    </div>
  );
}
