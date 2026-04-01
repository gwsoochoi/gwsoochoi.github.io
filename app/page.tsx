"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";

function detectLocale(): string {
  const browserLang = navigator.language.toLowerCase();
  const locales = routing.locales as readonly string[];
  if (locales.includes(browserLang)) return browserLang;
  const short = browserLang.split("-")[0];
  if (locales.includes(short)) return short;
  return routing.defaultLocale;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return null;
}
