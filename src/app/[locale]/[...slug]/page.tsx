import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuoteForm from "../../quote-form";
import {
  getTranslations,
  isLocale,
  type Locale,
} from "../../translations";
import {
  getLocalizedPath,
  getStaticLocalizedPaths,
  resolvePageKey,
  transferIds,
  type PageKey,
  type TransferId,
} from "../../site-routing";
import SiteFrame from "../site-frame";

type RouteParams = PageProps<"/[locale]/[...slug]">;

export function generateStaticParams() {
  return getStaticLocalizedPaths();
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const page = resolvePageKey(locale, slug);
  if (!page || page === "home") notFound();

  const t = getTranslations(locale);
  const meta = getPageMeta(t, page);
  const alternates = {
    it: getLocalizedPath("it", page),
    en: getLocalizedPath("en", page),
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getLocalizedPath(locale, page),
      languages: alternates,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "it" ? "it_IT" : "en_GB",
      siteName: "Eurovip 2000",
      type: "website",
    },
  };
}

function getPageMeta(t: ReturnType<typeof getTranslations>, page: PageKey) {
  if (page === "home") {
    return { title: t.metaTitle, description: t.metaDescription };
  }

  const transferId = getTransferId(page);
  if (transferId) return t.pageMeta.transfers[transferId];

  if (
    page === "about" ||
    page === "fleet" ||
    page === "services" ||
    page === "quote" ||
    page === "faq" ||
    page === "contacts"
  ) {
    return t.pageMeta[page];
  }

  throw new Error(`Missing metadata for page: ${page}`);
}

function getTransferId(page: PageKey): TransferId | null {
  for (const id of transferIds) {
    if (page === `transfer:${id}`) return id;
  }
  return null;
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

function ContactsPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const whatsappUrl = "https://wa.me/393924044611";

  return (
    <main id="contenuto">
      <section className="contacts-section section-pad">
        <div className="page-width">
          <div className="contacts-heading">
            <p className="eyebrow eyebrow-olive">{t.contactsEyebrow}</p>
            <h1>
              <SplitHeading text={t.contactsTitle} />
            </h1>
            <p>{t.contactsIntro}</p>
          </div>
          <div className="contacts-grid">
            <a className="contact-card" href="tel:+393924044611">
              <span className="contact-card-label">{t.contactPhoneLabel}</span>
              <strong>+39 392 404 4611</strong>
              <span>{t.contactPhoneAction} ↗</span>
            </a>
            <a
              className="contact-card"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="contact-card-label">
                {t.contactWhatsAppLabel}
              </span>
              <strong>+39 392 404 4611</strong>
              <span>{t.contactWhatsAppAction} ↗</span>
            </a>
            <div className="contact-card contact-card-pending">
              <span className="contact-card-label">{t.contactEmailLabel}</span>
              <strong>{t.contactEmailPending}</strong>
              <span>{t.contactDetailsPending}</span>
            </div>
          </div>
          <div className="contacts-bottom">
            <p>
              <span className="contact-card-label">
                {t.contactCoverageLabel}
              </span>
              <strong>{t.contactCoverage}</strong>
            </p>
            <a className="text-link" href={getLocalizedPath(locale, "quote")}>
              {t.contactQuoteCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const quotePath = getLocalizedPath(locale, "quote");

  return (
    <main id="contenuto">
      <section className="intro-section section-pad" id="chi-siamo">
        <div className="page-width intro-grid">
          <div className="section-label">
            <span className="eyebrow">{t.aboutPageEyebrow}</span>
            <span className="label-rule" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow eyebrow-olive">{t.aboutEyebrow}</p>
            <h1>
              <SplitHeading text={t.aboutPageTitle} />
            </h1>
            <div className="intro-text-columns">
              <p>{t.aboutPageIntro}</p>
              {t.aboutCopy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a className="text-link" href={quotePath}>
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
              <a className="text-link text-link-light" href={quotePath}>
                {t.businessLink} <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function FleetPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <main id="contenuto">
      <section className="fleet-section section-pad">
        <div className="page-width">
          <div className="fleet-heading">
            <div>
              <p className="eyebrow eyebrow-light">{t.fleetLabel}</p>
              <h1>
                <SplitHeading text={t.fleetTitle} />
              </h1>
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
                <h2>{vehicle.title}</h2>
                <p>{vehicle.description}</p>
              </article>
            ))}
          </div>
          <p className="fleet-disclaimer">{t.fleetDisclaimer}</p>
        </div>
      </section>
    </main>
  );
}

function ServicesPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <main id="contenuto">
      <section className="services-section section-pad">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-olive">{t.servicesLabel}</p>
              <h1>
                <SplitHeading text={t.servicesTitle} />
              </h1>
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
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
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
            {t.transfers.map((transfer, index) => (
              <a
                className="transfer-card"
                href={getLocalizedPath(locale, `transfer:${transfer.id}`)}
                key={transfer.id}
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
                  {t.transferDetailsCta} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function QuotePage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <main id="contenuto">
      <section className="steps-section section-pad">
        <div className="page-width steps-layout">
          <div className="steps-intro">
            <p className="eyebrow eyebrow-olive">{t.stepsEyebrow}</p>
            <h1>
              <SplitHeading text={t.stepsTitle} />
            </h1>
            <p>{t.stepsIntro}</p>
          </div>
          <ol className="steps-list">
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{step.title}</h2>
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

    </main>
  );
}

function FAQPage({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <main id="contenuto">
      <section className="faq-section section-pad" id="faq">
        <div className="page-width faq-layout">
          <div>
            <p className="eyebrow eyebrow-olive">{t.faqLabel}</p>
            <h1>
              <SplitHeading text={t.faqTitle} />
            </h1>
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
  );
}

function TransferPage({
  locale,
  id,
}: {
  locale: Locale;
  id: TransferId;
}) {
  const t = getTranslations(locale);
  const transfer = t.transfers.find((item) => item.id === id);
  const details = t.transferDetails[id];

  if (!transfer) notFound();
  const quotePath = getLocalizedPath(locale, "quote");
  const whatsappUrl = `https://wa.me/393924044611?text=${encodeURIComponent(transfer.message)}`;

  return (
    <main id="contenuto">
      <section className="transfer-detail section-pad">
        <div className="page-width transfer-detail-grid">
          <div className="transfer-detail-copy">
            <p className="eyebrow eyebrow-olive">{details.eyebrow}</p>
            <h1>
              <SplitHeading text={details.title} />
            </h1>
            <p className="transfer-detail-lead">{details.description}</p>
            <div className="transfer-detail-actions">
              <a
                className="button button-gold"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.transferCta} <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={quotePath}>
                {t.quoteCta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="transfer-detail-image">
            <Image
              src="/images/hero-chauffeur.jpg"
              alt={t.heroAlt}
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
              className="national-photo"
            />
          </div>
        </div>
      </section>

      <section className="transfer-detail-info section-pad">
        <div className="page-width transfer-info-grid">
          <div>
            <p className="eyebrow eyebrow-olive">{transfer.title}</p>
            <h2>
              <SplitHeading text={details.planningTitle} />
            </h2>
          </div>
          <div className="transfer-info-copy">
            {details.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul>
              {details.planningItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageContent({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  if (page === "about") return <AboutPage locale={locale} />;
  if (page === "fleet") return <FleetPage locale={locale} />;
  if (page === "services") return <ServicesPage locale={locale} />;
  if (page === "quote") return <QuotePage locale={locale} />;
  if (page === "faq") return <FAQPage locale={locale} />;
  if (page === "contacts") return <ContactsPage locale={locale} />;

  const transferId = getTransferId(page);
  return transferId ? <TransferPage locale={locale} id={transferId} /> : null;
}

export default async function LocalizedPage({ params }: RouteParams) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const page = resolvePageKey(locale, slug);
  if (!page || page === "home") notFound();

  return (
    <SiteFrame locale={locale} page={page}>
      <PageContent locale={locale} page={page} />
    </SiteFrame>
  );
}
