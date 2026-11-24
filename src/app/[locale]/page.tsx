import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFrame from "./site-frame";
import { getTranslations, isLocale } from "../translations";
import { getLocalizedPath } from "../site-routing";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getTranslations(locale);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: { it: "/it", en: "/en" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      locale: locale === "it" ? "it_IT" : "en_GB",
      siteName: "Eurovip 2000",
      type: "website",
    },
  };
}

function SplitHeading({ text }: { text: string }) {
  const [firstLine, secondLine] = text.split("|");
  return (
    <>
      {firstLine}
      <br />
      <em>{secondLine}</em>
    </>
  );
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getTranslations(locale);
  const servicesPath = getLocalizedPath(locale, "services");
  const quotePath = getLocalizedPath(locale, "quote");
  const featuredTransfers = t.transfers.slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      locale === "it"
        ? "Servizio di noleggio con conducente"
        : "Private chauffeur service",
    serviceType:
      locale === "it"
        ? "Noleggio con conducente (NCC)"
        : "Chauffeur service",
    provider: { "@type": "Organization", name: "Eurovip 2000" },
    areaServed: { "@type": "Country", name: "Italy" },
    description: t.metaDescription,
  };

  return (
    <SiteFrame locale={locale} page="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main id="contenuto">
        <section className="hero" id="inizio" aria-labelledby="hero-title">
          <div className="hero-image">
            <Image
              src="/images/hero-chauffeur.jpg"
              alt={t.heroAlt}
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="hero-photo"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content page-width">
            <p className="eyebrow eyebrow-light">
              {t.heroEyebrow} <span /> {t.nationalTag}
            </p>
            <h1 id="hero-title">
              <SplitHeading text={t.heroTitle} />
            </h1>
            <p className="hero-copy">{t.heroCopy}</p>
            <div className="hero-actions">
              <a className="button button-gold" href={quotePath}>
                {t.quoteFree} <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link text-link-light" href={servicesPath}>
                {t.discoverServices} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-notes" aria-label={t.heroNotesLabel}>
              {t.heroNotes.map((note) => (
                <span key={note}>{note}</span>
              ))}
            </div>
          </div>
          <div className="hero-caption">
            <span>01 — 04</span>
            <span>{t.heroCaption}</span>
          </div>
        </section>

        <section className="services-section home-services-section section-pad">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-olive">{t.servicesLabel}</p>
                <h2>
                  <SplitHeading text={t.homeServicesTitle} />
                </h2>
              </div>
              <a className="text-link" href={servicesPath}>
                {t.homeAllServices} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ul className="home-services-list">
              {t.services.map((service, index) => (
                <li className="home-service-item" key={service.title}>
                  <span className="home-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="transfers-section section-pad">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-olive">{t.transferLabel}</p>
                <h2>
                  <SplitHeading text={t.homeTransfersTitle} />
                </h2>
              </div>
              <p>{t.homeTransfersIntro}</p>
            </div>
            <div className="transfer-grid">
              {featuredTransfers.map((transfer, index) => (
                <a
                  className="transfer-card"
                  href={getLocalizedPath(locale, `transfer:${transfer.id}`)}
                  key={transfer.id}
                >
                  <span className="transfer-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* <span className="transfer-arrow" aria-hidden="true">
                    ↗
                  </span> */}
                  <h3>{transfer.title}</h3>
                  <p>{transfer.description}</p>
                  <span className="transfer-cta">
                    {t.transferDetailsCta} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
            <a className="text-link home-more-transfers" href={servicesPath}>
              {t.homeAllServices} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="national-section">
          <div className="national-image" aria-hidden="true">
            <Image
              src="/images/hero-chauffeur.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className="national-photo"
            />
          </div>
          <div className="national-copy">
            <p className="eyebrow eyebrow-light">{t.nationalEyebrow}</p>
            <h2>
              <SplitHeading text={t.nationalTitle} />
            </h2>
            <p>{t.nationalCopy}</p>
            <a className="button button-outline" href={quotePath}>
              {t.homeQuoteLink} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
