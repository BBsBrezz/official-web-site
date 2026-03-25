"use client";

import { useTranslations } from "next-intl";

const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6"] as const;
const featureEmojis = ["📺", "⚡", "🔄", "📊", "💰", "🔒"];
const useCaseKeys = ["u1", "u2", "u3", "u4"] as const;
const useCaseEmojis = ["🛒", "🎮", "📚", "🎤"];

export default function LiveStreaming() {
  const t = useTranslations("livestream");

  return (
    <section id="livestream" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            {t("sectionTag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            {t("title")}<span className="text-primary">{t("titleHighlight")}</span>{t("titleEnd")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t("description")}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-[#0b1120] font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
          >
            {t("cta")}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 7h8M8 3l4 4-4 4" />
            </svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div
              className="h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80')",
              }}
            />
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 live-pulse" />
                <div>
                  <div className="text-white font-semibold text-sm">{t("statusOnline")}</div>
                  <div className="text-gray-400 text-xs">{t("statusViewers")}</div>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="text-primary font-bold">99.9%</div>
                  <div className="text-gray-500 text-xs">{t("stability")}</div>
                </div>
                <div className="text-right">
                  <div className="text-accent font-bold">480ms</div>
                  <div className="text-gray-500 text-xs">{t("latency")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featureKeys.map((key, i) => (
              <div key={key} className="glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-lg icon-bg-orange flex items-center justify-center mb-3 text-lg">
                  {featureEmojis[i]}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1.5">{t(`features.${key}.title`)}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{t(`features.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {useCaseKeys.map((key, i) => (
            <div key={key} className="glass-card rounded-2xl p-6 text-center bg-gradient-to-b from-white/[0.03] to-transparent">
              <div className="w-12 h-12 rounded-full icon-bg-orange flex items-center justify-center mx-auto mb-4 text-xl">
                {useCaseEmojis[i]}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{t(`useCases.${key}.value`)}</div>
              <div className="text-gray-400 text-sm">{t(`useCases.${key}.label`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
