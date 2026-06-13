import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { blogPosts } from "@/lib/site-content";

const baseUrl = "https://sirojiddin.uz";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: "2026-06-04"
  }));

  const posts = locales.flatMap((locale) =>
    blogPosts[locale].map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.date
    }))
  );

  const blogIndexes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/blog`,
    lastModified: "2026-06-04"
  }));

  return [...pages, ...blogIndexes, ...posts];
}
