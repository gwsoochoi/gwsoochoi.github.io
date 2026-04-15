"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LangSwitcher from "./LangSwitcher";

const navItems = [
  { key: "about" as const, href: "" },
  { key: "resume" as const, href: "/resume" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-end px-6 py-4">
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-1">
            {navItems.map(({ key, href }) => {
              const fullHref = `/${locale}${href}`;
              const isActive =
                href === ""
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.startsWith(fullHref);

              return (
                <Link
                  key={key}
                  href={fullHref}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
