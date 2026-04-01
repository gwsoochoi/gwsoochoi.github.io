import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import HtmlLang from "./HtmlLang";
import Header from "./Header";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlLang />
      <Header />
      <main>{children}</main>
      <footer className="mx-auto max-w-3xl border-t border-border px-6 py-8 text-center text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          {(messages as Record<string, Record<string, string>>).footer.copyright}
        </p>
      </footer>
    </NextIntlClientProvider>
  );
}
