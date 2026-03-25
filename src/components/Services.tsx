"use client";

import { useTranslations } from "next-intl";

const serviceKeys = ["cdn", "livestream", "infra", "web", "security", "storage"] as const;

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 md:py-32">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key) => (
            <div
              key={key}
              className="glass-card rounded-2xl p-8 transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-primary/60 text-xs font-medium tracking-wider uppercase">
                {t(`items.${key}.tag`)}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-primary transition-colors">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t(`items.${key}.desc`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {t(`items.${key}.badges`).split(",").map((badge: string) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 text-xs text-gray-300 border border-white/10 rounded-full bg-white/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
