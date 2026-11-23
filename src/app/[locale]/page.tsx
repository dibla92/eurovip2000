import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuoteForm from "../quote-form";
import SiteHeader from "./site-header";
import WhatsAppWidget from "./whatsapp-widget";
import { getTranslations, isLocale } from "../translations";

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
      languages: {
        it: "/it",
        en: "/en",
      },
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

export default async function Home({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getTranslations(locale);
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
    provider: {
      "@type": "Organization",
      name: "Eurovip 2000",
    },
    areaServed: {
      "@type": "Country",
      name: "Italy",
    },
    description: t.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <a className="skip-link" href="#contenuto">
        {t.skip}
      </a>
      <SiteHeader
        locale={locale}
        copy={{
          homeLabel: t.homeLabel,
          navLabel: t.navLabel,
          nav: t.nav,
          languageLabel: t.languageLabel,
          quoteCta: t.quoteCta,
        }}
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
              <a className="button button-gold" href="#preventivo">
                {t.quoteFree}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link text-link-light" href="#servizi">
                {t.discoverServices} <span aria-hidden="true">↓</span>
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

        <section className="intro-section section-pad" id="chi-siamo">
          <div className="page-width intro-grid">
            <div className="section-label">
              <span className="eyebrow">{t.aboutLabel}</span>
              <span className="label-rule" />
            </div>
            <div className="intro-copy">
              <p className="eyebrow eyebrow-olive">{t.aboutEyebrow}</p>
              <h2>
                <SplitHeading text={t.aboutTitle} />
              </h2>
              <div className="intro-text-columns">
                {t.aboutCopy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a className="text-link" href="#preventivo">
                {t.aboutLink} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="intro-image-wrap">
              <Image
                src="/images/driver-journey.jpg"
                alt={t.journeyImageAlt}
                width={1000}
                height={667}
                sizes="(max-width: 760px) 100vw, 36vw"
                className="intro-image"
              />
              <span className="image-note">{t.stockImage}</span>
            </div>
          </div>
        </section>

        <section
          className="experience-section section-pad"
          id="esperienza"
          aria-labelledby="experience-title"
        >
          <div className="page-width">
            <div className="experience-heading">
              <div>
                <p className="eyebrow eyebrow-olive">{t.experienceEyebrow}</p>
                <h2 id="experience-title">
                  <SplitHeading text={t.experienceTitle} />
                </h2>
              </div>
              <p>{t.experienceIntro}</p>
            </div>
            <div className="experience-grid">
              <div>
                <div className="experience-metrics">
                  {t.metrics.map((metric) => (
                    <article className="metric-card" key={metric}>
                      <span className="metric-value">XX+</span>
                      <h3>{metric}</h3>
                    </article>
                  ))}
                </div>
                <p className="metric-note">{t.metricNote}</p>
              </div>
              <article className="client-note">
                <p className="eyebrow eyebrow-light">{t.clientEyebrow}</p>
                <h3>
                  <SplitHeading text={t.clientTitle} />
                </h3>
                <p>{t.clientCopy}</p>
                <a className="text-link text-link-light" href="#preventivo">
                  {t.businessLink}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="fleet-section section-pad" id="flotta">
          <div className="page-width">
            <div className="fleet-heading">
              <div>
                <p className="eyebrow eyebrow-light">{t.fleetLabel}</p>
                <h2>
                  <SplitHeading text={t.fleetTitle} />
                </h2>
              </div>
              <p>{t.fleetIntro}</p>
            </div>
            <div className="fleet-grid">
              {t.fleet.map((vehicle, index) => (
                <article className="fleet-card" key={vehicle.title}>
                  <span className="fleet-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className={`fleet-illustration fleet-illustration-${["sedan", "comfort", "van"][index]}`}
                  >
                    <span className="vehicle-shape" aria-hidden="true" />
                    <span className="fleet-tag">{t.fleetTag}</span>
                  </div>
                  <h3>{vehicle.title}</h3>
                  <p>{vehicle.description}</p>
                </article>
              ))}
            </div>
            <p className="fleet-disclaimer">{t.fleetDisclaimer}</p>
          </div>
        </section>

        <section className="services-section section-pad" id="servizi">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-olive">{t.servicesLabel}</p>
                <h2>
                  <SplitHeading text={t.servicesTitle} />
                </h2>
              </div>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="services-grid">
              {t.services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="service-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="transfers-section section-pad" id="transfer">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-olive">{t.transferLabel}</p>
                <h2>
                  <SplitHeading text={t.transferTitle} />
                </h2>
              </div>
              <p>{t.transferIntro}</p>
            </div>
            <div className="transfer-grid">
              {t.transfers.map((transfer, index) => (
                <a
                  className="transfer-card"
                  href={`https://wa.me/393924044611?text=${encodeURIComponent(transfer.message)}`}
                  key={transfer.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.transferCta}: ${transfer.title}`}
                >
                  <span className="transfer-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="transfer-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.description}</p>
                  <span className="transfer-cta">
                    {t.transferCta} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              ))}
            </div>
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
            <a className="button button-outline" href="#preventivo">
              {t.nationalCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="steps-section section-pad">
          <div className="page-width steps-layout">
            <div className="steps-intro">
              <p className="eyebrow eyebrow-olive">{t.stepsEyebrow}</p>
              <h2>
                <SplitHeading text={t.stepsTitle} />
              </h2>
              <p>{t.stepsIntro}</p>
            </div>
            <ol className="steps-list">
              {t.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="quote-section section-pad" id="preventivo">
          <div className="page-width quote-layout">
            <div className="quote-intro">
              <p className="eyebrow eyebrow-light">{t.quoteLabel}</p>
              <h2>
                <SplitHeading text={t.quoteTitle} />
              </h2>
              <p>{t.quoteIntro}</p>
              <div className="quote-aside">
                <span className="quote-aside-mark" aria-hidden="true">
                  ✳
                </span>
                <span>
                  {t.noCommitment}
                  <br />
                  {t.quoteFreeCopy}
                </span>
              </div>
            </div>
            <QuoteForm locale={locale} />
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="page-width faq-layout">
            <div>
              <p className="eyebrow eyebrow-olive">{t.faqLabel}</p>
              <h2>
                <SplitHeading text={t.faqTitle} />
              </h2>
            </div>
            <div className="faq-list">
              {t.faq.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>
                    {item.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width">
          <div className="footer-main">
            <a className="brand brand-footer" href="#inizio">
              <span className="brand-mark" aria-hidden="true">
                E
              </span>
              <span className="brand-name">
                EUROVIP <span>2000</span>
              </span>
            </a>
            <p>
              <SplitHeading text={t.footerTagline} />
            </p>
            <a className="footer-cta" href="#preventivo">
              {t.quoteCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Eurovip 2000</span>
            <span>
              {t.footerNotice}
            </span>
            <a href="#inizio">{t.backToTop}</a>
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
