import { notFound } from "next/navigation";

import { PortfolioPage } from "@/components/site/portfolio-page";
import { getDictionary, isSupportedLocale } from "@/lib/i18n";

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return <PortfolioPage locale={locale} dict={dict} />;
}
