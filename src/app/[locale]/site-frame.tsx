import type { ReactNode } from "react";
import WhatsAppWidget from "./whatsapp-widget";
import SiteHeader from "./site-header";
import { getTranslations, type Locale } from "../translations";
import { getLocalizedPath, type PageKey } from "../site-routing";

export default function SiteFrame({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: PageKey;
  children: ReactNode;
}) {
  const t = getTranslations(locale);
  const quotePath = getLocalizedPath(locale, "quote");
  const aboutPath = getLocalizedPath(locale, "about");
  const contactsPath = getLocalizedPath(locale, "contacts");

  return (
    <>
      <a className="skip-link" href="#contenuto">
        {t.skip}
      </a>
      <SiteHeader
        locale={locale}
        page={page}
        copy={{
          homeLabel: t.homeLabel,
          navLabel: t.navLabel,
          nav: t.nav,
          languageLabel: t.languageLabel,
          quoteCta: t.quoteCta,
        }}
        paths={{
          home: getLocalizedPath(locale, "home"),
          about: aboutPath,
          experience: `${aboutPath}#esperienza`,
          fleet: getLocalizedPath(locale, "fleet"),
          services: getLocalizedPath(locale, "services"),
          faq: getLocalizedPath(locale, "faq"),
          contacts: contactsPath,
          quote: quotePath,
          italian: getLocalizedPath("it", page),
          english: getLocalizedPath("en", page),
        }}
      />
      {children}
      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-main">
            <a className="brand brand-footer" href={getLocalizedPath(locale, "home")}>
              <span className="brand-mark" aria-hidden="true">
                E
              </span>
              <span className="brand-name">
                EUROVIP <span>2000</span>
              </span>
            </a>
            <p>{t.footerTagline.replace("|", " ")}</p>
            <a className="footer-cta" href={quotePath}>
              {t.quoteCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Eurovip 2000</span>
            <span>{t.footerNotice}</span>
            <a href={contactsPath}>{t.nav.contacts}</a>
            <a href={getLocalizedPath(locale, "home")}>{t.backToTop}</a>
          </div>
        </div>
      </footer>
      <WhatsAppWidget
        chatLabel={t.whatsappLabel}
        closeLabel={t.whatsappClose}
        reopenLabel={t.whatsappReopen}
      />
    </>
  );
}
