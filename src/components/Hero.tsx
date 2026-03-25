"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 hero-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-sm font-medium">{t("badge")}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-2">
          <span className="text-white">{t("title1")}</span>
          <br />
          <span className="text-primary">{t("title2")}</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 font-medium mt-4 mb-6">
          {t("subtitle")}
        </p>
        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-10">
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-[#0b1120] font-semibold rounded-full hover:bg-primary-dark transition-colors text-base"
          >
            {t("ctaPrimary")}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 8h8M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors text-base"
          >
            {t("ctaSecondary")}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 4v8M4 9l4 4 4-4" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 text-gray-500 text-sm">
          <span>{t("scrollDown")}</span>
          <svg className="mt-2 animate-bounce" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 4v12M5 11l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
