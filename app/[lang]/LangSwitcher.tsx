"use client";

import { useRouter } from "next/navigation";
import { type Lang, locales } from "@/lib/dictionaries";

const labels: Record<Lang, string> = {
  ko: "🇰🇷 한국어",
  ja: "🇯🇵 日本語",
  en: "🇺🇸 English",
};

export default function LangSwitcher({ current }: { current: Lang }) {
  const router = useRouter();

  return (
    <select
      value={current}
      onChange={(e) => router.push(`/${e.target.value}`)}
      className="rounded border border-border bg-background px-2 py-1 text-sm text-foreground outline-none"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {labels[l]}
        </option>
      ))}
    </select>
  );
}
