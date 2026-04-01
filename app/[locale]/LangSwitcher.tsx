"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  ko: "🇰🇷 한국어",
  ja: "🇯🇵 日本語",
  en: "🇺🇸 English",
};

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
      className="rounded border border-border bg-background px-2 py-1 text-sm text-foreground outline-none"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l}>
          {labels[l]}
        </option>
      ))}
    </select>
  );
}
