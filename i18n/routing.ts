import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "ja", "en"],
  defaultLocale: "ja",
});

export type Locale = (typeof routing.locales)[number];
