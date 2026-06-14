import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sirojiddin.uz"),
  title: "Sirojiddin | Entrepreneur Portfolio",
  description:
    "Premium personal portfolio for Sirojiddin: business operator, technical trader, and entrepreneur.",
  openGraph: {
    title: "Sirojiddin | Entrepreneur Portfolio",
    description:
      "From local trade to global systems: a personal brand website focused on business, discipline, and growth.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirojiddin | Entrepreneur Portfolio",
    description:
      "From local trade to global systems: a personal brand website focused on business, discipline, and growth."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
