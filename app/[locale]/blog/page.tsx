import Link from "next/link";
import { ArrowLeft, MoveRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, isSupportedLocale } from "@/lib/i18n";
import { getBlogPosts } from "@/lib/site-content";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    title: `${dict.blog.title} | Sirojiddin`,
    description: dict.meta.description
  };
}

export default async function BlogIndexPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const posts = getBlogPosts(locale);

  return (
    <main className="container-shell py-16 sm:py-20">
      <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        {dict.nav[0].label}
      </Link>

      <div className="mt-8 max-w-3xl">
        <span className="section-label">{dict.blog.label}</span>
        <h1 className="font-[var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          {dict.blog.title}
        </h1>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="card p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-accent">
              <span>{post.category}</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-4 font-[var(--font-display)] text-2xl text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
            <div className="mt-5 text-xs uppercase tracking-[0.18em] text-muted">{post.date}</div>
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white transition hover:text-accent"
            >
              {dict.blog.readMore}
              <MoveRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
