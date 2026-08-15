"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const flags: Record<string, string> = {
  ko: "🇰🇷",
  ja: "🇯🇵",
  en: "🇺🇸",
};

const names: Record<string, string> = {
  ko: "한국어",
  ja: "日本語",
  en: "English",
};

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          aria-label={names[l]}
          aria-current={l === locale ? "true" : undefined}
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-base leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            l === locale
              ? "border-accent"
              : "border-border opacity-45 hover:opacity-100"
          }`}
        >
          {flags[l]}
        </button>
      ))}
    </div>
  );
}
