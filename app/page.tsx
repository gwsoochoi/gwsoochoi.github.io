const skills = [
  {
    category: "Backend",
    items: ["Java Spring", "Ruby on Rails", "REST API"],
  },
  {
    category: "Frontend & Mobile",
    items: ["Flutter", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Infra & Cloud",
    items: ["GCP", "Supabase", "Docker", "GitHub Actions"],
  },
  {
    category: "기타",
    items: ["AI 활용 (Claude, Cursor)", "Agile/Scrum", "앱 스토어 운영"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* 프로필 / 소개 */}
        <header className="mb-12">
          <div className="flex items-start gap-6">
            <img
              src="/profile.jpg"
              alt="최광수 프로필 사진"
              className="h-28 w-28 shrink-0 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                최광수
              </h1>
              <p className="mt-2 text-xl text-accent">소프트웨어 엔지니어</p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            실무 9년 이상의 소프트웨어 엔지니어. SI/SE에서 대규모 시스템
            개발로 기반을 다지고, 스타트업에서 풀스택 역량을 키웠으며, 현재는
            수익형 앱을 기획부터 운영까지 1인 개발하고 있습니다. AI를 활용한
            생산성 극대화를 추구합니다.
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
              서울 / 도쿄
            </span>
          </div>
        </header>

        {/* 경력 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            경력 <span className="text-lg font-normal text-muted">실무 9년+</span>
          </h2>

          {/* 1단계: SI/SE */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                1
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                SI/SE <span className="font-normal text-muted">— 6년</span>
              </h3>
            </div>

            <div className="ml-3.5 space-y-5 border-l-2 border-accent/30 pl-7">
              {/* 서울 */}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">서울</h4>
                  <span className="text-sm text-muted">5년</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex items-start text-sm leading-relaxed text-muted">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    금융/공공 대규모 시스템 개발
                  </li>
                  <li className="flex items-start text-sm leading-relaxed text-muted">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    Java Spring 백엔드 개발
                  </li>
                </ul>
              </div>

              {/* 도쿄 */}
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">도쿄</h4>
                  <span className="text-sm text-muted">1년</span>
                </div>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex items-start text-sm leading-relaxed text-muted">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    NTT DATA 산하 행정업무 처리 백엔드 시스템 개발
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2단계: 스타트업 */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                2
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                스타트업{" "}
                <span className="font-normal text-muted">— 3년 / 도쿄</span>
              </h3>
            </div>

            <div className="ml-3.5 border-l-2 border-accent/30 pl-7">
              <ul className="space-y-1.5">
                {[
                  "신규 서비스 런칭부터 운영까지 풀스택 담당",
                  "Rails API 서버 설계/개발",
                  "GCP 인프라 운영",
                  "소규모 팀 애자일 개발",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-sm leading-relaxed text-muted"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3단계: 수익형 앱 개발 */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                3
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                수익형 앱 개발{" "}
                <span className="font-normal text-muted">— 현재 진행 중</span>
              </h3>
            </div>

            <div className="ml-3.5 border-l-2 border-accent/30 pl-7">
              <ul className="mb-5 space-y-1.5">
                {[
                  "개인 프로젝트를 UI/UX 디자인 외 모든 영역 총괄",
                  "AI(Claude, Cursor 등)를 활용한 생산성 극대화 추구",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start text-sm leading-relaxed text-muted"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* 프로젝트 1 */}
              <div className="mb-4 rounded-lg border border-border p-4">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h4 className="font-semibold text-foreground">
                    프로젝트 1: LGBTQ 커뮤니티 앱
                    <span className="ml-2 text-sm font-normal text-muted">
                      v1.0 ~ v2.0
                    </span>
                  </h4>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "2024년 1월 개발 시작",
                    "유저 수 700명 돌파",
                    "Flutter (iOS/Android) + Rails API + GCP",
                    "수익화: 광고 + 프리미엄 기능 (준비 중)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-sm leading-relaxed text-muted"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Flutter", "Rails", "GCP"].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 프로젝트 2 */}
              <div className="mb-4 rounded-lg border border-border p-4">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                  <h4 className="font-semibold text-foreground">
                    프로젝트 2: v3.0 확장
                    <span className="ml-2 text-sm font-normal text-muted">
                      현재 진행 중
                    </span>
                  </h4>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "모바일: 기존 앱 기능 개선",
                    "Web 버전 신규 추가 (React)",
                    "GCP + Supabase 결합으로 비용 절감 및 경량화",
                    "AI 번역 기능 추가로 글로벌 시장 진출 준비",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-sm leading-relaxed text-muted"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Flutter", "React", "GCP", "Supabase", "AI"].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 담당 범위 */}
              <p className="text-sm text-muted">
                <span className="font-medium text-foreground">담당 범위:</span>{" "}
                기획 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅
              </p>
            </div>
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
