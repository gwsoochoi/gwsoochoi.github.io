import ko, { type Dictionary } from "./ko";
import ja from "./ja";
import en from "./en";

export type Lang = "ko" | "ja" | "en";

export const locales: Lang[] = ["ko", "ja", "en"];

const dictionaries: Record<Lang, Dictionary> = { ko, ja, en };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries.ko;
}

export type { Dictionary };
