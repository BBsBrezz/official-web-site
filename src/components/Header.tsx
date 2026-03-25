"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  zh: "中文",
  en: "EN",
  ja: "日本語",
};

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "#hero" },
    { label: t("services"), href: "#services" },
    { label: t("partners"), href: "#partners" },
    { label: t("livestream"), href: "#livestream" },
    { label: t("infrastructure"), href: "#infrastructure" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "zh" | "en" | "ja" });
    setLangOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="12" cy="20" r="6" fill="#2dd4bf" opacity="0.8" />
            <circle cx="24" cy="20" r="6" fill="#06b6d4" opacity="0.8" />
            <circle cx="18" cy="12" r="6" fill="#14b8a6" opacity="0.9" />
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-300 border border-white/10 rounded-full hover:border-white/25 transition-colors"
            >
              {localeLabels[locale]}
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-[#1a2332] border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[100px]">
                {routing.locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      loc === locale
                        ? "text-primary bg-primary/10"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {localeLabels[loc]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary text-[#0b1120] font-semibold text-sm rounded-full hover:bg-primary-dark transition-colors"
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0b1120]/95 backdrop-blur-md border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 py-2">
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { switchLocale(loc); setMobileOpen(false); }}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                    loc === locale
                      ? "text-primary border-primary/30 bg-primary/10"
                      : "text-gray-400 border-white/10 hover:border-white/25"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-2 px-6 py-2.5 bg-primary text-[#0b1120] font-semibold text-sm rounded-full text-center hover:bg-primary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
