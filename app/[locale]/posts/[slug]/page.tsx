import { routing } from "@/i18n/routing";
import { getAllSlugs, getPost } from "@/lib/posts";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import PostBody from "./PostBody";

export function generateStaticParams() {
  const slugs = getAllSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-6 pb-16">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {post.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-tag-bg px-2.5 py-1 text-sm text-tag-text"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <PostBody content={post.content} />
    </article>
  );
}
