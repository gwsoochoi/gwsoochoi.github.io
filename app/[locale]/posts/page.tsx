import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllPosts } from "@/lib/posts";
import { getLocaleStaticParams } from "@/lib/i18n";
import Link from "next/link";
import TechTag from "../TechTag";

export const generateStaticParams = getLocaleStaticParams;

export default async function PostsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("posts");
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      <h1 className="text-2xl font-bold text-foreground">
        {t("title")}
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted">{t("empty")}</p>
      ) : (
        <ul className="mt-6 divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${locale}/posts/${post.slug}`}
                className="group block py-5"
              >
                <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <time dateTime={post.date}>{post.date}</time>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <TechTag key={tag}>{tag}</TechTag>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
