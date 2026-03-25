"use client";

import { useTranslations } from "next-intl";

const infoIcons = ["✉", "✈️", "📍", "🕘"];
const infoKeys = ["email", "phone", "address", "hours"] as const;
const serviceOptionKeys = [
  "cdnByteplus", "cdnCloudflare", "livestream", "infra", "web", "security", "other",
] as const;

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 md:py-32">
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {infoKeys.map((key, i) => {
                const link = t.has(`info.${key}.link`) ? t(`info.${key}.link`) : null;
                return (
                  <div key={key} className="glass-card rounded-xl p-5">
                    <div className="text-xl mb-2">{infoIcons[i]}</div>
                    <div className="text-gray-400 text-xs mb-1">{t(`info.${key}.label`)}</div>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm hover:text-primary transition-colors underline underline-offset-2">
                        {t(`info.${key}.value`)}
                      </a>
                    ) : (
                      <div className="text-white font-medium text-sm">{t(`info.${key}.value`)}</div>
                    )}
                  </div>
                );
              })}
            </div>
            <div
              className="h-64 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80')",
              }}
            />
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">
                  {t("form.name")} <span className="text-red-400">{t("form.required")}</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder={t("form.namePlaceholder")}
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">{t("form.company")}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder={t("form.companyPlaceholder")}
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">
                  {t("form.email")} <span className="text-red-400">{t("form.required")}</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">{t("form.phone")}</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-colors text-sm"
                  placeholder={t("form.phonePlaceholder")}
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">
                  {t("form.service")} <span className="text-red-400">{t("form.required")}</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 outline-none focus:border-primary/50 transition-colors text-sm appearance-none"
                >
                  <option value="">{t("form.servicePlaceholder")}</option>
                  {serviceOptionKeys.map((key) => (
                    <option key={key} value={key}>{t(`form.serviceOptions.${key}`)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1.5 block">{t("form.message")}</label>
                <textarea
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-[#0b1120] font-semibold rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-base mt-2"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
