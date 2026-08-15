import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCareerStages } from "@/lib/content/career";
import { getLanguageItems } from "@/lib/content/languages";
import { getProjectCases } from "@/lib/content/projects";
import { getSkillsSections } from "@/lib/content/skills";
import { getTimelineYears } from "@/lib/content/timeline";
import { getCareerTrackGroup } from "@/lib/content/tracks";
import { getLocaleStaticParams } from "@/lib/i18n";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import CareerSections from "./CareerSections";
import LangSwitcher from "./LangSwitcher";
import Reveal from "./Reveal";
import ProfilePhotos from "./ProfilePhotos";
import ProjectCard from "./ProjectCard";
import YearTimeline from "./YearTimeline";

const EMAIL = "gwsoochoi@gmail.com";
const PROFILE_PHOTOS = ["/profile-main.jpg"];

// 끄면 기본 정보 표가 폭을 전부 쓴다.
const SHOW_PROFILE_PHOTOS = true;

// 경력까지만 보고 있어서 그 아래 블록은 내려 둔다. 검토가 끝나면 true로 되돌린다.
const SHOW_OTHER_SECTIONS = false;

// 홈은 패널 하나다. 블록 사이는 선이 아니라 여백으로만 끊는다 — 드롭다운 목록이 이미
// 밑줄을 잔뜩 쓰고 있어 섹션 선까지 더하면 가로줄만 남는다. CareerSections도 같은 값을 쓴다.
const BLOCK = "mt-16";

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
  rows: { label: string; value: ReactNode | string[]; wide?: boolean }[];
}) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
      {rows.map((row, index) => (
        <div
          key={row.label}
          style={{ "--i": index } as CSSProperties}
          className={`reveal-item border-t border-border py-3 ${row.wide ? "sm:col-span-2" : ""}`}
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

/** lucide.dev의 `mail` 아이콘. 하나 쓰자고 패키지를 넣지 않고 패스만 옮겼다. */
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
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
  const timelineYears = getTimelineYears();
  const projects = getProjectCases(locale);

  // 서비스 상세는 career.ts의 appInfo 항목이 정본. 경력 섹션과 중복 노출하지 않고 카드에서만 편다.
  const overviews = new Map(
    getCareerStages(locale)
      .filter((stage) => stage.appInfo && stage.serviceOverview)
      .map((stage) => [stage.appInfo!.name, stage.serviceOverview!])
  );

  // 두 줄짜리 값끼리 마지막 행에 나란히 둔다 — 학력·병역이 왼쪽, 취미가 오른쪽.
  const basicRows = [
    { label: t("basic.name_label"), value: t("profile.name") },
    { label: t("basic.birth_label"), value: t("basic.birth_value") },
    { label: t("basic.residence_label"), value: t("basic.residence_value") },
    { label: t("basic.language_label"), value: languageItems.join(", ") },
    {
      label: `${t("basic.education_label")} · ${t("basic.military_label")}`,
      value: [t("background.education_name"), t("background.military_summary")],
    },
    {
      label: t("basic.hobby_label"),
      value: [t("basic.hobby_weight"), t("basic.hobby_crossfit")],
    },
    {
      label: t("basic.contact_label"),
      value: (
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          <MailIcon />
          {EMAIL}
        </a>
      ),
      wide: true,
    },
  ];

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
    <div className="mx-auto max-w-3xl px-6">
      {/* ── 기본 정보 + 기술 스택 (한 패널) ── */}
      <section className="panel">
        {/* 헤더를 없앴다. 언어 전환은 이 줄 오른쪽 끝의 원형 국기가 맡는다. */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t("basic.title")}
          </h1>
          <LangSwitcher />
        </div>
        {/* 3열: 사진이 첫 열, 기본 정보 표가 나머지 두 열. */}
        <div className={`grid gap-6 ${SHOW_PROFILE_PHOTOS ? "sm:grid-cols-3 sm:gap-8" : ""}`}>
          {SHOW_PROFILE_PHOTOS && (
            <ProfilePhotos photos={PROFILE_PHOTOS} alt={t("profile.imageAlt")} />
          )}
          <Reveal className={SHOW_PROFILE_PHOTOS ? "sm:col-span-2" : ""}>
            <InfoGrid rows={basicRows} />
          </Reveal>
        </div>

        <div className={BLOCK}>
          <h2 className="text-2xl font-bold text-foreground">{t("skills.title")}</h2>
          <p className="mb-6 text-xs tabular-nums text-muted">
            {timelineYears[0]} — {timelineYears[timelineYears.length - 1]}
          </p>
          {/* 업계 이력이 맨 위. 어떤 판에서 쌓은 기술인지가 아래 스택의 맥락이 된다. */}
          <YearTimeline
            groups={[
              getCareerTrackGroup((key) => t(`tracks.${key}`)),
              ...getSkillsSections(),
            ]}
          />
        </div>

        {/* ── 경력 ── */}
        <CareerSections locale={locale} />

        {/* ── 하고 싶은 말 ── */}
        <section className={BLOCK}>
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            {t("statement.title")}
          </h2>
          <Reveal className="space-y-3">
            {[t("statement.p1"), t("statement.p2"), t("statement.p3")].map((p, index) => (
              <p
                key={p}
                style={{ "--i": index } as CSSProperties}
                className="reveal-item text-sm leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </section>

        {SHOW_OTHER_SECTIONS && (
          <>
        {/* ── 대표 프로젝트 ── */}
        <section id="work" className={BLOCK}>
          <h2 className="mb-6 text-2xl font-bold text-foreground">{t("work.title")}</h2>
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

        {/* ── 맡길 수 있는 업무 ── */}
        <section className={BLOCK}>
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

        {/* ── 가동 조건 ── */}
        <section className={BLOCK}>
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

        {/* ── 연락 ── */}
        <section className={BLOCK}>
          <h2 className="mb-3 text-2xl font-bold text-foreground">{t("contact.title")}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">{t("contact.desc")}</p>
          <CtaRow
            contactLabel={t("hero.cta_contact")}
            resumeLabel={t("hero.cta_resume")}
          />
        </section>
          </>
        )}
      </section>
    </div>
  );
}
