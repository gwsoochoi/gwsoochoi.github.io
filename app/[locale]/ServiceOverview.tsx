import { parseServiceOverview } from "@/lib/content/parseOverview";
import ChevronIcon from "./ChevronIcon";

/** "## label" 구분자로 나뉜 서비스 설명. 버전 섹션은 접힌 상태로 렌더링한다. */
export default function ServiceOverview({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-3">
      {parseServiceOverview(lines).map((section, i) => {
        const content = section.content.map((c) => {
          const parts = c.split(" / ");
          if (parts.length > 1) {
            return (
              <ul key={c} className="space-y-1">
                {parts.map((p, j) => (
                  <li key={j} className="flex items-start text-sm leading-relaxed text-muted">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                    {p.trim()}
                  </li>
                ))}
              </ul>
            );
          }
          return <p key={c} className="text-sm leading-relaxed text-muted">{c}</p>;
        });

        if (section.collapsible) {
          return (
            <details key={i} className="group/ver">
              <summary className="mb-1 flex cursor-pointer list-none items-center gap-1 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <ChevronIcon className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-open/ver:rotate-90" />
                {section.label}
              </summary>
              <div className="ml-5">{content}</div>
            </details>
          );
        }

        return (
          <div key={i}>
            {section.label && (
              <p className="mb-1 text-sm font-semibold text-foreground">{section.label}</p>
            )}
            {content}
          </div>
        );
      })}
    </div>
  );
}
