"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PageKey } from "../site-routing";
import type { Locale } from "../translations";

type HeaderCopy = {
  homeLabel: string;
  navLabel: string;
  nav: {
    home: string;
    about: string;
    fleet: string;
    services: string;
    faq: string;
    contacts: string;
  };
  languageLabel: string;
  quoteCta: string;
};

export default function SiteHeader({
  locale,
  page,
  copy,
  paths,
}: {
  locale: Locale;
  page: PageKey;
  copy: HeaderCopy;
  paths: {
    home: string;
    about: string;
    fleet: string;
    services: string;
    faq: string;
    contacts: string;
    quote: string;
    italian: string;
    english: string;
  };
}) {
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;

    function updateVisibility() {
      const currentY = window.scrollY;
      const focusedHeaderItem =
        headerRef.current?.contains(document.activeElement) ?? false;

      if (currentY < 80 || focusedHeaderItem) {
        setHidden(false);
      } else if (currentY > previousY + 5) {
        setHidden(true);
      } else if (currentY < previousY - 5) {
        setHidden(false);
      }

      previousY = currentY;
    }

    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const activeNavItem =
    page === "about"
      ? "about"
      : page === "fleet"
        ? "fleet"
        : page === "services" || page.startsWith("transfer:")
          ? "services"
          : page === "faq"
            ? "faq"
            : page === "contacts"
              ? "contacts"
              : null;

  return (
    <header
      className="site-header"
      data-hidden={hidden}
      ref={headerRef}
    >
      <div className="header-inner">
        <a className="brand" href={paths.home} aria-label={copy.homeLabel}>
          <span className="brand-mark" aria-hidden="true">
            E
          </span>
          <span className="brand-name">
            EUROVIP <span>2000</span>
          </span>
        </a>
        <nav className="main-nav" aria-label={copy.navLabel}>
          <a href={paths.home}>{copy.nav.home}</a>
          <a
            href={paths.about}
            aria-current={activeNavItem === "about" ? "page" : undefined}
          >
            {copy.nav.about}
          </a>
          <a href={paths.fleet} aria-current={activeNavItem === "fleet" ? "page" : undefined}>
            {copy.nav.fleet}
          </a>
          <a
            href={paths.services}
            aria-current={activeNavItem === "services" ? "page" : undefined}
          >
            {copy.nav.services}
          </a>
          <a href={paths.faq} aria-current={activeNavItem === "faq" ? "page" : undefined}>
            {copy.nav.faq}
          </a>
          <a
            href={paths.contacts}
            aria-current={activeNavItem === "contacts" ? "page" : undefined}
          >
            {copy.nav.contacts}
          </a>
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={copy.languageLabel}>
            <Link
              href={paths.italian}
              lang="it"
              aria-current={locale === "it" ? "page" : undefined}
              aria-label="Italiano"
            >
              <span aria-hidden="true">🇮🇹</span> IT
            </Link>
            <Link
              href={paths.english}
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
              aria-label="English"
            >
              <span aria-hidden="true">🇬🇧</span> EN
            </Link>
          </nav>
          <a className="header-cta" href={paths.quote}>
            {copy.quoteCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
