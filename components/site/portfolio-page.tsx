import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MoveRight,
  Settings2,
  ShieldCheck,
  Store
} from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { locales, type Dictionary, type Locale } from "@/lib/i18n";
import { getBlogPosts, siteConfig } from "@/lib/site-content";

const languageNames: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN"
};

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.7 3.3a1.8 1.8 0 0 0-1.86-.3L3.15 9.44c-1.2.46-1.18 1.15-.22 1.44l4.28 1.34 1.65 5.08c.2.56.1.79.68.79.45 0 .65-.2.9-.45l2.06-2 4.28 3.16c.79.44 1.36.21 1.56-.73l2.82-13.3c.3-1.16-.44-1.69-.46-1.47ZM8.05 11.91l9.66-6.1c.48-.29.92-.13.56.19l-7.97 7.2-.31 3.36-1.94-4.65Z" />
    </svg>
  );
}

export function PortfolioPage({
  locale,
  dict
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const featuredPosts = getBlogPosts(locale).slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: `https://sirojiddin.uz/${locale}`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ"
        },
        sameAs: [siteConfig.telegram, siteConfig.instagram, siteConfig.linkedin],
        jobTitle: "Entrepreneur",
        knowsAbout: [
          "Accounting",
          "Business Management",
          "Sales",
          "Sewing Machine Technology",
          "Entrepreneurship",
          "Trading"
        ]
      },
      {
        "@type": "WebSite",
        name: "Sirojiddin Portfolio",
        url: `https://sirojiddin.uz/${locale}`
      }
    ]
  };

  return (
    <main className="relative overflow-hidden">
      <Script
        id={`structured-data-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[size:56px_56px] opacity-[0.05]"
        aria-hidden
      />

      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
        <div className="container-shell flex items-center justify-between py-4">
          <Link href={`/${locale}`} className="font-[var(--font-display)] text-lg tracking-[0.24em] text-white">
            SIROJIDDIN
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {dict.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              title="Telegram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted transition hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10 hover:text-[#229ED9]"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
            <div className="flex items-center gap-2 rounded-full border border-line bg-white/[0.03] p-1">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={`rounded-full px-3 py-1.5 text-xs tracking-[0.2em] transition ${
                    item === locale ? "bg-accent text-black" : "text-muted hover:text-white"
                  }`}
                >
                  {languageNames[item]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="container-shell relative pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-4xl">
            <span className="section-label">{dict.hero.badge}</span>
            <h1 className="headline-balance max-w-4xl font-[var(--font-display)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                {dict.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
              >
                {dict.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <Store className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-[var(--font-display)] text-lg text-white">{dict.hero.pillars[0].title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.hero.pillars[0].description}</p>
              </div>
              <div className="card p-5">
                <Settings2 className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-[var(--font-display)] text-lg text-white">{dict.hero.pillars[1].title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.hero.pillars[1].description}</p>
              </div>
              <div className="card p-5">
                <ChartNoAxesCombined className="h-5 w-5 text-accent" />
                <h3 className="mt-4 font-[var(--font-display)] text-lg text-white">{dict.hero.pillars[2].title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.hero.pillars[2].description}</p>
              </div>
            </div>
          </div>

          <div className="card p-6 shadow-glow">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">Personal Brand</span>
              <Globe2 className="h-4 w-4 text-accent" />
            </div>
            <p className="font-[var(--font-display)] text-2xl leading-snug text-white">
              From local trade to global systems.
            </p>
            <div className="mt-8 grid gap-4">
              {dict.hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-black/20 p-4">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-shell pt-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-label">{dict.about.label}</span>
            <h2 className="headline-balance font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
              {dict.about.title}
            </h2>
          </div>
          <div className="card p-7 sm:p-8">
            <p className="text-base leading-8 text-muted sm:text-lg">{dict.about.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {dict.about.values.map((value) => (
                <div key={value} className="rounded-2xl border border-line bg-white/[0.02] px-4 py-4 text-sm text-white">
                  {value}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-accent/15 bg-accent/5 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-[var(--font-display)] text-lg text-white">{dict.about.positioningTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{dict.about.positioningDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pt-24">
        <span className="section-label">{dict.skills.label}</span>
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="headline-balance max-w-2xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
            {dict.skills.title}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {dict.skills.items.map((item) => (
            <article key={item.name} className="card p-6">
              <h3 className="font-[var(--font-display)] text-xl text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="container-shell pt-24">
        <span className="section-label">{dict.timeline.label}</span>
        <h2 className="headline-balance max-w-3xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          {dict.timeline.title}
        </h2>
        <div className="mt-10 space-y-4">
          {dict.timeline.items.map((item, index) => (
            <article key={item.title} className="card grid gap-4 p-6 sm:grid-cols-[80px_1fr_auto] sm:items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-xl text-white">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{item.description}</p>
              </div>
              <div className="text-sm uppercase tracking-[0.22em] text-accent">{item.period}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="container-shell pt-24">
        <span className="section-label">{dict.projects.label}</span>
        <h2 className="headline-balance max-w-3xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
          {dict.projects.title}
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {dict.projects.items.map((item) => (
            <article key={item.title} className="card p-7">
              <span className="text-xs uppercase tracking-[0.26em] text-accent">{item.tag}</span>
              <h3 className="mt-5 font-[var(--font-display)] text-2xl text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              <div className="mt-8 h-40 rounded-2xl border border-line bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-accent/10" />
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pt-24">
        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="section-label">{dict.achievements.label}</span>
            <h2 className="headline-balance font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
              {dict.achievements.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.achievements.items.map((item) => (
              <article key={item.label} className="card p-6">
                <div className="font-[var(--font-display)] text-4xl text-white">{item.value}</div>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pt-24">
        <div className="card p-8 sm:p-10 lg:p-12">
          <span className="section-label">{dict.vision.label}</span>
          <h2 className="headline-balance max-w-3xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
            {dict.vision.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {dict.vision.description}
          </p>
        </div>
      </section>

      <section className="container-shell pt-24">
        <span className="section-label">{dict.blog.label}</span>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="headline-balance max-w-3xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
            {dict.blog.title}
          </h2>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-white transition hover:text-accent"
          >
            {dict.blog.readMore}
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="card block p-6 transition hover:border-accent/30"
            >
              <span className="text-xs uppercase tracking-[0.24em] text-accent">{post.category}</span>
              <h3 className="mt-4 font-[var(--font-display)] text-xl text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{post.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                {dict.blog.readMore}
                <MoveRight className="h-4 w-4" />
              </div>
              <div className="mt-6 h-24 rounded-2xl border border-line bg-gradient-to-r from-white/[0.03] to-accent/10" />
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="container-shell py-24">
        <div className="card grid gap-8 p-8 shadow-glow sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <span className="section-label">{dict.contact.label}</span>
            <h2 className="headline-balance max-w-2xl font-[var(--font-display)] text-3xl font-semibold text-white sm:text-4xl">
              {dict.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {dict.contact.description}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-between rounded-2xl border border-line bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.06]"
            >
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-accent">Email</div>
                <div className="mt-1 text-white">{siteConfig.email}</div>
              </div>
              <Mail className="h-5 w-5 text-accent" />
            </a>
            <ContactForm locale={locale} />
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.telegram}
                className="inline-flex items-center justify-center rounded-full border border-line bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                {dict.contact.secondary}
              </a>
              <a
                href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center rounded-full border border-line bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted">
              <a href={siteConfig.instagram} className="rounded-full border border-line p-3 transition hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.linkedin} className="rounded-full border border-line p-3 transition hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <div className="text-sm">{siteConfig.location}</div>
            </div>
          </div>
        </div>

        <footer className="pt-10 text-center text-sm uppercase tracking-[0.22em] text-muted">
          {dict.footer}
        </footer>
      </section>
    </main>
  );
}
