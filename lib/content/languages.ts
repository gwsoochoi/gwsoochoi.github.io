import type { LanguageItem } from "./types";

const languages: Record<string, LanguageItem[]> = {
  ko: [
    { name: "한국어", level: "모국어" },
    { name: "일본어", level: "비즈니스 · 일상 (2018.06~ 재류 중, JLPT N2)" },
    { name: "영어", level: "일상" },
  ],
  ja: [
    { name: "韓国語", level: "母国語" },
    { name: "日本語", level: "ビジネス・日常（2018.06〜 在留中、JLPT N2）" },
    { name: "英語", level: "日常" },
  ],
  en: [
    { name: "Korean", level: "Native" },
    { name: "Japanese", level: "Business · Daily (residing since 2018.06, JLPT N2)" },
    { name: "English", level: "Daily" },
  ],
};

export function getLanguageItems(locale: string): LanguageItem[] {
  return languages[locale] ?? languages.ja;
}
