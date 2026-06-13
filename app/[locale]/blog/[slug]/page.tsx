import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary, isSupportedLocale, locales } from "@/lib/i18n";
import { getBlogPost, getBlogPosts } from "@/lib/site-content";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      locale,
      slug: post.slug
    }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const post = getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Sirojiddin`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container-shell py-16 sm:py-20">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {dict.blog.label}
      </Link>

      <article className="mx-auto mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent">
          <span>{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold text-white sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">{post.excerpt}</p>

        <div className="mt-10 h-56 rounded-[2rem] border border-line bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-accent/10" />

        <div className="mt-10 space-y-6 text-base leading-8 text-muted">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
