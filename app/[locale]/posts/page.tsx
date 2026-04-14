import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
                        <span
                          key={tag}
                          className="rounded-md border border-tag-text bg-tag-bg px-2.5 py-1 text-sm text-tag-text"
                        >
                          {tag}
                        </span>
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
