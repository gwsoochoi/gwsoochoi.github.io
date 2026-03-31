import { getDictionary, locales, type Lang } from "@/lib/dictionaries";
import HtmlLang from "./HtmlLang";
import LangSwitcher from "./LangSwitcher";


export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const dict = getDictionary(lang);

  return (
    <div className="min-h-screen bg-background">
      <HtmlLang lang={lang} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* 언어 전환 */}
        <nav className="mb-8 flex justify-end">
          <LangSwitcher current={lang} />
        </nav>

        {/* 프로필 / 소개 */}
        <header className="mb-12">
          <div className="flex items-start gap-6">
            <img
              src="/profile.jpg"
              alt={dict.profile.imageAlt}
              className="h-28 w-28 shrink-0 rounded-full object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                {dict.profile.name}
              </h1>
              <p className="mt-2 text-xl text-accent">{dict.profile.role}</p>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            {dict.profile.bio.join(" ")}
            {" "}
            {dict.profile.bioSub}
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
              gwsoochoi@gmail.com
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
              {dict.profile.location}
            </span>
          </div>
        </header>

        {/* 경력 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            {dict.career.title}{" "}
            <span className="text-lg font-normal text-muted">
              {dict.career.totalYears}
            </span>
          </h2>

          {dict.career.stages.map((stage, idx) => (
            <div key={stage.number} className={idx < dict.career.stages.length - 1 ? "mb-8" : ""}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {stage.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {stage.title}{" "}
                  {stage.duration && (
                    <span className="font-normal text-muted">
                      {stage.duration}
                    </span>
                  )}
                  {stage.appInfo?.period && (
                    <span className="font-normal text-muted">
                      ({stage.appInfo.period})
                    </span>
                  )}
                </h3>
              </div>

              <div className="ml-3.5 border-l-2 border-accent/30 pl-7">
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
                      <a
                        href={stage.appInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent hover:underline"
                      >
                        {stage.appInfo.name}
                      </a>
                    </p>
                  </div>
                )}

                {/* motivation */}
                {stage.motivation && (
                  <div className="mb-4">
                    {stage.motivation.map((line) => (
                      <p key={line} className="text-sm font-bold leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {/* service overview */}
                {stage.serviceOverview && (
                  <div className="mb-4">
                    <ul className="space-y-1.5">
                      {stage.serviceOverview.map((item) => (
                        <li key={item} className="flex items-start text-sm leading-relaxed text-muted">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* features table */}
                {stage.features && (
                  <div className="mb-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody>
                        {stage.features.map((f) => (
                          <tr key={f.name} className="border-b border-border last:border-0">
                            <td className="py-1.5 pr-4 font-medium text-foreground whitespace-nowrap">
                              {f.name}
                            </td>
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
                        {stage.techStack.map((t) => (
                          <tr key={t.layer} className="border-b border-border last:border-0">
                            <td className="py-1.5 pr-4 w-28 font-medium text-foreground whitespace-nowrap">
                              {t.layer}
                            </td>
                            <td className="py-1.5 text-muted">{t.tech}</td>
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
                        {stage.timeline.map((t, i, arr) => (
                          <tr key={`${t.period}-${i}`} className={`border-b border-border last:border-0${i > 0 && t.period.slice(0, 4) !== arr[i - 1].period.slice(0, 4) ? " border-t-2 border-t-border" : ""}`}>
                            <td className="py-1.5 pr-4 w-28 font-medium text-foreground whitespace-nowrap align-top">
                              {t.period}
                            </td>
                            <td className="py-1.5 text-muted">
                              {t.description ? (
                                <details>
                                  <summary className="cursor-pointer list-none flex items-center gap-1 [&::-webkit-details-marker]:hidden">
                                    <svg className="w-3.5 h-3.5 shrink-0 transition-transform [[open]>summary>&]:rotate-90" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                    <span>{t.milestone}</span>
                                  </summary>
                                  <div className="mt-1 text-xs text-muted/80">
                                    {(() => {
                                      const groups: { label?: string; items: string[] }[] = [];
                                      let cur: { label?: string; items: string[] } = { items: [] };
                                      for (const d of t.description) {
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
                                <div>{t.milestone}</div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* company & service */}
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
                        <a
                          href={stage.service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-accent hover:underline"
                        >
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
                    <ul className="space-y-1.5">
                      {stage.overview.map((item) => (
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
                )}

                {/* locations (stage 1) */}
                {"locations" in stage && stage.locations && (
                  <div className="space-y-5">
                    {stage.locations.map((loc) => (
                      <div key={loc.name}>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-foreground">
                            {loc.name}
                          </h4>
                          <span className="text-sm text-muted">
                            {loc.duration}
                          </span>
                        </div>
                        <ul className="mt-2 space-y-1.5">
                          {loc.items.map((item) => (
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
                    ))}
                  </div>
                )}

                {/* items (stage 2) */}
                {"items" in stage && stage.items && !("projects" in stage) && (
                    <ul className="space-y-1.5">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm leading-relaxed text-muted"
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                )}

                {stage.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stage.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* items + projects (stage 3) */}
                {"projects" in stage && stage.items && (
                  <>
                    <ul className="mb-5 space-y-1.5">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm leading-relaxed text-muted"
                        >
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {stage.projects?.map((project) => (
                      <div
                        key={project.title}
                        className="mb-4 rounded-lg border border-border p-4"
                      >
                        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
                          <h4 className="font-semibold text-foreground">
                            {project.title}
                            {project.status && (
                              <span className="ml-2 text-sm font-normal text-muted">
                                {project.status}
                              </span>
                            )}
                          </h4>
                        </div>
                        <ul className="mt-3 space-y-1.5">
                          {project.items.map((item) => (
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
                          {project.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-500"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    {stage.scope && (
                      <p className="text-sm text-muted">
                        <span className="font-medium text-foreground">
                          {stage.scope.label}
                        </span>{" "}
                        {stage.scope.value}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* 언어 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            {dict.languages.title}
          </h2>
          <div className="grid gap-3">
            {dict.languages.items.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline gap-3 rounded-lg border border-border px-4 py-3"
              >
                <h3 className="shrink-0 text-sm font-semibold uppercase tracking-wider text-accent w-40">
                  {lang.name}
                </h3>
                <span className="text-sm text-muted">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 개발 성향 */}
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            {dict.philosophy.title}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            {dict.philosophy.subtitle}
          </p>
          <ul className="space-y-1.5">
            {dict.philosophy.items.map((item) => (
              <li
                key={item}
                className="flex items-start text-sm leading-relaxed text-muted"
              >
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 기술 스택 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            {dict.skills.title}
          </h2>
          <div className="grid gap-3">
            {dict.skills.sections.map((section) => (
              <div key={section.label} className="flex items-baseline gap-3">
                <span className="shrink-0 text-sm font-semibold text-muted w-40">
                  {section.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-sm text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-border pt-8 text-center text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
