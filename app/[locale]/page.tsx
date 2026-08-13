import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import { getLanguageItems } from "@/lib/content/languages";
import { getProjectCases } from "@/lib/content/projects";
import { getSkillsSections } from "@/lib/content/skills";
import { getLocaleStaticParams } from "@/lib/i18n";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import CareerSections from "./CareerSections";
import ProfilePhotos from "./ProfilePhotos";
import ProjectCard from "./ProjectCard";

const EMAIL = "gwsoochoi@gmail.com";
const PROFILE_PHOTOS = ["/profile-main.jpg", "/profile-sub.jpg"];

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

/** label · value 정보 그리드 (기본 정보 · 가동 조건 공용) */
function InfoGrid({
  rows,
}: {
  rows: { label: string; value: string | string[]; wide?: boolean }[];
}) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
      {rows.map((row) => (
        <div
          key={row.label}
          className={`border-t border-border py-3 ${row.wide ? "sm:col-span-2" : ""}`}
        >
          <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
            {row.label}
          </dt>
          <dd className="text-sm leading-relaxed text-foreground">
            {Array.isArray(row.value)
              ? row.value.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))
              : row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
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

  // 한 줄에 안 들어가는 값은 wide로 깔아 행 높이를 고르게 유지한다.
  const basicRows = [
    { label: t("basic.name_label"), value: t("profile.name") },
    { label: t("basic.birth_label"), value: t("basic.birth_value") },
    { label: t("basic.residence_label"), value: t("basic.residence_value") },
    { label: t("basic.language_label"), value: languageItems.join(", ") },
    {
      label: t("basic.hobby_label"),
      value: [t("basic.hobby_weight"), t("basic.hobby_crossfit")],
      wide: true,
    },
    {
      label: `${t("basic.education_label")} · ${t("basic.military_label")}`,
      value: [
        `${t("background.education_name")} (${t("background.education_period")})`,
        `${t("background.military_summary")} (${t("background.military_period")})`,
      ],
      wide: true,
    },
  ];

  const skillRows = skillsSections.map((section) => ({
    label: section.label,
    value: section.tags.join(", "),
    wide: true,
  }));

  const availabilityRows = [
    { label: t("availability.workstyle_label"), value: t("availability.workstyle_value") },
    { label: t("availability.start_label"), value: t("availability.start_value") },
    { label: t("availability.location_label"), value: t("availability.location_value") },
    { label: t("availability.contract_label"), value: t("availability.contract_value") },
  ];

  const capabilities = [1, 2, 3, 4].map((n) => ({
    title: t(`capabilities.item${n}_title`),
    desc: t(`capabilities.item${n}_desc`),
  }));

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      {/* ── 기본 정보 ── */}
      <section className="pb-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
          {t("basic.title")}
        </h1>
        <div className="grid gap-6 sm:grid-cols-[280px_1fr] sm:gap-8">
          <ProfilePhotos photos={PROFILE_PHOTOS} alt={t("profile.imageAlt")} />
          <InfoGrid rows={basicRows} />
        </div>
      </section>

      {/* ── 기술 스택 ── */}
      <section className="border-t-2 border-muted/30 py-10">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          {t("skills.title")}
        </h2>
        <InfoGrid rows={skillRows} />
      </section>

      {/* ── 가동 조건 ── */}
      <section className="border-t-2 border-muted/30 py-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-bold text-foreground">
            {t("availability.title")}
          </h2>
          <span className="rounded-md bg-tag-bg px-2 py-0.5 text-xs text-tag-text">
            {t("availability.badge")}
          </span>
        </div>
        <InfoGrid rows={availabilityRows} />
      </section>

      {/* ── 맡길 수 있는 업무 ── */}
      <section className="border-t-2 border-muted/30 py-10">
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
      <section id="work" className="border-t-2 border-muted/30 py-10">
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

      {/* ── 경력 ── */}
      <CareerSections locale={locale} />

      {/* ── 연락 ── */}
      <section className="border-t-2 border-muted/30 pt-10">
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
