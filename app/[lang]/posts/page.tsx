import { getDictionary, locales, type Lang } from "@/lib/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {dict.posts.title}
      </h1>
      <p className="mt-8 text-center text-muted">{dict.posts.empty}</p>
    </div>
  );
}
