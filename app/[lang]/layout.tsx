import { getDictionary, locales, type Lang } from "@/lib/dictionaries";
import type { Metadata } from "next";
import HtmlLang from "./HtmlLang";
import Header from "./Header";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const dict = getDictionary(lang);

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} nav={dict.nav} />
      <main>{children}</main>
      <footer className="mx-auto max-w-3xl border-t border-border px-6 py-8 text-center text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {dict.footer.copyright}
        </p>
      </footer>
    </>
  );
}
