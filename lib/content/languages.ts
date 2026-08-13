const languages: Record<string, string[]> = {
  ko: ["한국어", "일본어", "영어"],
  ja: ["韓国語", "日本語", "英語"],
  en: ["Korean", "Japanese", "English"],
};

export function getLanguageItems(locale: string): string[] {
  return languages[locale] ?? languages.ja;
}
