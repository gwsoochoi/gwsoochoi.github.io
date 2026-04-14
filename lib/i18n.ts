import { routing } from "@/i18n/routing";

export function getLocaleStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
