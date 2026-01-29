const experiences = [
  {
    company: "ABC 테크놀로지",
    role: "시니어 프론트엔드 엔지니어",
    period: "2022.03 - 현재",
    description: [
      "React/Next.js 기반 B2B SaaS 플랫폼 프론트엔드 개발 리드",
      "디자인 시스템 구축으로 UI 개발 생산성 40% 향상",
      "CI/CD 파이프라인 구축 및 배포 자동화",
      "주니어 개발자 멘토링 및 코드 리뷰 프로세스 정립",
    ],
  },
  {
    company: "XYZ 소프트웨어",
    role: "프론트엔드 엔지니어",
    period: "2019.07 - 2022.02",
    description: [
      "TypeScript 마이그레이션 주도 (JavaScript → TypeScript)",
      "웹 성능 최적화로 LCP 3.2초 → 1.1초 개선",
      "REST API 연동 및 상태 관리 설계 (Redux, React Query)",
      "사내 어드민 대시보드 신규 개발",
    ],
  },
  {
    company: "스타트업 DEF",
    role: "주니어 웹 개발자",
    period: "2017.09 - 2019.06",
    description: [
      "React SPA 기반 이커머스 웹 애플리케이션 개발",
      "반응형 웹 디자인 구현 및 크로스 브라우저 호환성 확보",
      "RESTful API 설계 및 Node.js 백엔드 개발 참여",
    ],
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    category: "상태 관리 & 데이터",
    items: ["Redux", "Zustand", "React Query", "GraphQL"],
  },
  {
    category: "도구 & 인프라",
    items: ["Git", "GitHub Actions", "Docker", "Webpack", "Vite", "Jest"],
  },
  {
    category: "기타",
    items: ["Figma", "Agile/Scrum", "기술 문서 작성", "코드 리뷰"],
  },
];

const projects = [
  {
    name: "사내 디자인 시스템",
    period: "2023",
    description:
      "Storybook 기반 컴포넌트 라이브러리 설계 및 구축. 30+ 재사용 가능한 UI 컴포넌트를 개발하여 팀 전체 개발 생산성 향상.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
  },
  {
    name: "실시간 대시보드",
    period: "2022",
    description:
      "WebSocket 기반 실시간 데이터 모니터링 대시보드. 수천 건의 데이터를 실시간으로 시각화하여 운영 효율성 개선.",
    tech: ["Next.js", "D3.js", "WebSocket", "React Query"],
  },
  {
    name: "이커머스 플랫폼 리뉴얼",
    period: "2020",
    description:
      "레거시 jQuery 프로젝트를 React SPA로 전면 리뉴얼. 페이지 로딩 속도 60% 개선 및 전환율 25% 증가.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* 프로필 / 소개 */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            최광수
          </h1>
          <p className="mt-2 text-xl text-accent">소프트웨어 엔지니어</p>
          <p className="mt-4 leading-relaxed text-muted">
            7년차 소프트웨어 엔지니어로 React/Next.js 기반 웹 프론트엔드
            개발을 전문으로 합니다. 사용자 경험 최적화와 개발 생산성 향상에
            관심이 많으며, 팀과 함께 성장하는 것을 중요하게 생각합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              email@example.com
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              github.com/gwsoochoi
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              서울, 대한민국
            </span>
          </div>
        </header>

        {/* 경력 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">경력</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border-l-2 border-accent pl-6"
              >
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="mt-1 text-sm text-muted sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.description.map((desc) => (
                    <li
                      key={desc}
                      className="flex items-start text-sm leading-relaxed text-muted"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            기술 스택
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-border p-4"
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-accent-light px-2.5 py-1 text-sm text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 프로젝트 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            프로젝트
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-border p-5"
              >
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="text-sm text-muted">{project.period}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">학력</h2>
          <div className="border-l-2 border-accent pl-6">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  컴퓨터공학과 학사
                </h3>
                <p className="text-accent">OO대학교</p>
              </div>
              <span className="mt-1 text-sm text-muted sm:mt-0">
                2013.03 - 2017.08
              </span>
            </div>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-border pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} 최광수. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
