import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Sans_JP, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const fontMap: Record<string, string> = {
  zh: "var(--font-noto-tc)",
  en: "var(--font-inter)",
  ja: "var(--font-noto-jp)",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta: Record<string, { title: string; description: string }> = {
    zh: {
      title: "企業級網站平台建設 | CDN · 直播 · 基礎設施代管",
      description:
        "專業網站平台建設公司，提供 CDN 加速、直播平台搭建與基礎設施代管一站式解決方案。",
    },
    en: {
      title: "Enterprise Web Platform Solutions | CDN · Streaming · Hosting",
      description:
        "Professional web platform company offering CDN, live streaming, and infrastructure hosting solutions. Official BytePlus & Cloudflare partner.",
    },
    ja: {
      title: "エンタープライズWebプラットフォーム | CDN · 配信 · インフラ",
      description:
        "CDNアクセラレーション、ライブ配信、インフラホスティングをワンストップで提供。BytePlus・Cloudflare公式パートナー。",
    },
  };
  return meta[locale] || meta.zh;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${notoSansTC.variable} ${notoSansJP.variable} ${inter.variable} antialiased`}
      style={{ fontFamily: fontMap[locale] || fontMap.zh }}
    >
      <body className="min-h-screen">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
