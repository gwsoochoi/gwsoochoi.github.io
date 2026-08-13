import { getTranslations } from "next-intl/server";
import type { ProjectCase } from "@/lib/content/types";
import ChevronIcon from "./ChevronIcon";
import ServiceOverview from "./ServiceOverview";

export default async function ProjectCard({
  project,
  overview,
}: {
  project: ProjectCase;
  overview?: string[];
}) {
  const t = await getTranslations("work");

  // 스토어 이름은 고유명이라 locale 공통
  const links = [
    { url: project.url, label: t("link_service") },
    { url: project.appStoreUrl, label: "App Store" },
    { url: project.playStoreUrl, label: "Google Play" },
  ].filter((link): link is { url: string; label: string } => Boolean(link.url));

  return (
    <article className="rounded-lg border border-border p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
        <span
          className={`rounded-md px-2 py-0.5 text-[11px] ${
            project.featured ? "bg-tag-bg text-tag-text" : "bg-muted/10 text-muted"
          }`}
        >
          {project.platforms}
        </span>
      </div>

      <p className="mt-1.5 text-xs leading-relaxed text-muted">
        {project.version ? `${project.version} · ${project.status}` : project.status}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      {overview && (
        <details className="group mt-3 border-t border-border pt-3">
          <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-accent [&::-webkit-details-marker]:hidden">
            <ChevronIcon className="h-3.5 w-3.5 shrink-0 transition-transform group-open:rotate-90" />
            {t("detail")}
          </summary>
          <div className="mt-3">
            <ServiceOverview lines={overview} />
          </div>
        </details>
      )}

      {links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-3">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
