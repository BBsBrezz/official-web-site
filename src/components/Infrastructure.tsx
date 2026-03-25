"use client";

import { useTranslations } from "next-intl";

const statKeys = ["s1", "s2", "s3", "s4"] as const;
const itemKeys = ["i1", "i2", "i3", "i4"] as const;

export default function Infrastructure() {
  const t = useTranslations("infrastructure");

  return (
    <section id="infrastructure" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            {t("sectionTag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            {t("title")}<span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("description")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {statKeys.map((key) => (
            <div key={key} className="glass-card rounded-xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{t(`stats.${key}.value`)}</div>
              <div className="text-gray-400 text-sm">{t(`stats.${key}.label`)}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {itemKeys.map((key) => (
            <div key={key} className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-3">{t(`items.${key}.title`)}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t(`items.${key}.desc`)}</p>
              <div className="flex flex-wrap gap-2">
                {t(`items.${key}.badges`).split(",").map((badge: string) => (
                  <span key={badge} className="px-3 py-1.5 text-xs text-gray-300 border border-white/10 rounded-full bg-white/5">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-gradient rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t("ctaTitle")}</h3>
            <p className="text-gray-400">{t("ctaDesc")}</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-primary text-[#0b1120] font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            {t("ctaButton")}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 8h8M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
