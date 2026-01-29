"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const supportedLangs = ["ko", "ja", "en"] as const;

function detectLang(): string {
  const browserLang = navigator.language.toLowerCase();
  // 정확한 매치 (ko, ja, en)
  if (supportedLangs.includes(browserLang as (typeof supportedLangs)[number])) {
    return browserLang;
  }
  // 2자리 코드 매치 (ko-KR → ko, ja-JP → ja, en-US → en)
  const short = browserLang.split("-")[0];
  if (supportedLangs.includes(short as (typeof supportedLangs)[number])) {
    return short;
  }
  return "ko";
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLang()}`);
  }, [router]);

  return null;
}
