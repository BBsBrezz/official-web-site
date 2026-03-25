"use client";

import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("partners");

  return (
    <section id="partners" className="py-24 md:py-32">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* BytePlus */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/70 tracking-wider">✦ BytePlus</span>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-4">
                {t("byteplus.badge")}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">{t("byteplus.name")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t("byteplus.desc")}</p>
              <div className="flex flex-wrap gap-2">
                {t("byteplus.features").split(",").map((feat: string) => (
                  <span key={feat} className="px-3 py-1.5 text-xs text-gray-300 border border-white/10 rounded-full bg-white/5">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cloudflare */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/70 tracking-wider">☁ Cloudflare</span>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full mb-4">
                {t("cloudflare.badge")}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">{t("cloudflare.name")}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t("cloudflare.desc")}</p>
              <div className="flex flex-wrap gap-2">
                {t("cloudflare.features").split(",").map((feat: string) => (
                  <span key={feat} className="px-3 py-1.5 text-xs text-gray-300 border border-white/10 rounded-full bg-white/5">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {(["b1", "b2", "b3", "b4"] as const).map((key) => (
            <div key={key} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-300">{t(`benefits.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
