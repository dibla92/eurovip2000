"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "../translations";

type HeaderCopy = {
  homeLabel: string;
  navLabel: string;
  nav: {
    about: string;
    experience: string;
    fleet: string;
    services: string;
    faq: string;
  };
  languageLabel: string;
  quoteCta: string;
};

export default function SiteHeader({
  locale,
  copy,
}: {
  locale: Locale;
  copy: HeaderCopy;
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

  return (
    <header
      className="site-header"
      data-hidden={hidden}
      ref={headerRef}
    >
      <div className="header-inner">
        <a className="brand" href="#inizio" aria-label={copy.homeLabel}>
          <span className="brand-mark" aria-hidden="true">
            E
          </span>
          <span className="brand-name">
            EUROVIP <span>2000</span>
          </span>
        </a>
        <nav className="main-nav" aria-label={copy.navLabel}>
          <a href="#chi-siamo">{copy.nav.about}</a>
          <a href="#esperienza">{copy.nav.experience}</a>
          <a href="#flotta">{copy.nav.fleet}</a>
          <a href="#servizi">{copy.nav.services}</a>
          <a href="#faq">{copy.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <nav className="language-switch" aria-label={copy.languageLabel}>
            <Link
              href="/it#inizio"
              lang="it"
              aria-current={locale === "it" ? "page" : undefined}
              aria-label="Italiano"
            >
              <span aria-hidden="true">🇮🇹</span> IT
            </Link>
            <Link
              href="/en#inizio"
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
              aria-label="English"
            >
              <span aria-hidden="true">🇬🇧</span> EN
            </Link>
          </nav>
          <a className="header-cta" href="#preventivo">
            {copy.quoteCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
