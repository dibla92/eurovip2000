const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eurovip2000.it";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;

const services = [
  {
    number: "01",
    title: "Transfer aeroportuali",
    description:
      "Raggiungi aeroporti, stazioni e terminal con un trasferimento privato organizzato secondo i tuoi orari.",
  },
  {
    number: "02",
    title: "Viaggi di lavoro",
    description:
      "Un servizio riservato per appuntamenti, trasferte e spostamenti business, con il comfort che meriti.",
  },
  {
    number: "03",
    title: "Eventi e occasioni speciali",
    description:
      "Arriva con stile a cerimonie, serate ed eventi. Pensiamo al viaggio, tu goditi il momento.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "EuroVIP2000",
  url: siteUrl,
  description:
    "Servizio di noleggio con conducente e chauffeur per trasferimenti privati, aeroporti, viaggi di lavoro ed eventi.",
  serviceType: ["Noleggio con conducente", "Chauffeur service"],
  availableLanguage: "Italian",
  ...(contactEmail ? { email: contactEmail } : {}),
  ...(contactPhone ? { telephone: contactPhone } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="site-header">
        <a className="brand" href="#" aria-label="EuroVIP2000, pagina iniziale">
          <span className="brand-mark" aria-hidden="true">
            E
          </span>
          <span>
            <strong>EUROVIP</strong>
            <small>2000 · NCC & CHAUFFEUR</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navigazione principale">
          <a href="#servizi">Servizi</a>
          <a href="#esperienza">L’esperienza</a>
        </nav>
        <a className="header-link" href="#contatti">
          Contattaci <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> IL TUO VIAGGIO, AL TUO RITMO</p>
            <h1 id="hero-title">
              La strada giusta
              <br />
              <em>è quella con te.</em>
            </h1>
            <p className="hero-description">
              Noleggio con conducente per chi vuole viaggiare con più comfort,
              puntualità e libertà. Dalla partenza all’arrivo, ci sei solo tu.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#servizi">
                Scopri i servizi <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#esperienza">
                Il nostro modo di viaggiare <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>Servizio privato · Cura in ogni dettaglio</span>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-glow" />
            <div className="art-label">EUROVIP <span>2000</span></div>
            <div className="road road-back" />
            <div className="car">
              <div className="car-roof" />
              <div className="car-body" />
              <div className="car-window" />
              <div className="car-wheel wheel-front" />
              <div className="car-wheel wheel-back" />
              <div className="car-light" />
            </div>
            <div className="road road-front" />
            <div className="art-caption">
              <span>VIAGGIA BENE.</span>
              <span>ARRIVA MEGLIO.</span>
            </div>
            <span className="art-index">01 / 03</span>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <span>PRIVATE MOBILITY</span>
            <span className="aside-line" />
            <span>NCC SERVICE</span>
          </div>
        </section>

        <section className="intro-strip" aria-label="Il servizio">
          <p>Il tempo è tuo.</p>
          <span aria-hidden="true">✳</span>
          <p>Il viaggio è nostro.</p>
          <span aria-hidden="true">✳</span>
          <p>Arriva come vuoi.</p>
        </section>

        <section className="services section-wrap" id="servizi">
          <div className="section-heading">
            <div>
              <p className="eyebrow">UN SERVIZIO, TANTE DESTINAZIONI</p>
              <h2>Ogni viaggio<br /><em>ha il suo perché.</em></h2>
            </div>
            <p className="section-summary">
              Che sia un impegno di lavoro o un’occasione da ricordare, trovi
              una soluzione NCC pensata intorno alle tue esigenze.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon" aria-hidden="true">
                  {service.number === "01" ? "↗" : service.number === "02" ? "⌁" : "✳"}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contatti" aria-label={`Informazioni: ${service.title}`}>
                  Scopri di più <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="esperienza">
          <div className="experience-mark" aria-hidden="true">E</div>
          <div className="experience-copy">
            <p className="eyebrow">IL VALORE DI UN VIAGGIO FATTO BENE</p>
            <h2>Non è solo<br /><em>arrivare.</em></h2>
            <p>
              È partire senza pensieri. Avere spazio per sé, sapere che ogni
              dettaglio è stato considerato e potersi godere il tragitto.
              Questo è il modo EuroVIP2000 di intendere il noleggio con
              conducente.
            </p>
            <a className="button button-light" href="#contatti">
              Parliamo del tuo viaggio <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="experience-details">
            <div>
              <span className="detail-number">01</span>
              <p><strong>La tua agenda</strong><br />Orari e itinerari pensati per te.</p>
            </div>
            <div>
              <span className="detail-number">02</span>
              <p><strong>Il tuo spazio</strong><br />Privacy e comfort lungo il percorso.</p>
            </div>
            <div>
              <span className="detail-number">03</span>
              <p><strong>La tua serenità</strong><br />Un servizio attento, dall’inizio alla fine.</p>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contatti">
          <div>
            <p className="eyebrow">IL PROSSIMO VIAGGIO COMINCIA QUI</p>
            <h2>Hai una meta<br /><em>in mente?</em></h2>
          </div>
          <div className="contact-copy">
            <p>
              Raccontaci dove vuoi andare e quando. Troverai un servizio
              personalizzato per organizzare il tuo prossimo trasferimento.
            </p>
            <div className="contact-actions">
              {contactEmail && (
                <a className="button button-dark" href={`mailto:${contactEmail}`}>
                  Scrivici <span aria-hidden="true">↗</span>
                </a>
              )}
              {contactPhone && (
                <a className="button button-outline" href={`tel:${contactPhone}`}>
                  Chiamaci <span aria-hidden="true">↗</span>
                </a>
              )}
              {!contactEmail && !contactPhone && (
                <span className="contact-prompt">
                  Servizio NCC · Prenotazioni su richiesta
                </span>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="EuroVIP2000, torna all’inizio">
          <span className="brand-mark" aria-hidden="true">E</span>
          <span>
            <strong>EUROVIP</strong>
            <small>2000 · NCC & CHAUFFEUR</small>
          </span>
        </a>
        <p>Viaggia bene. Arriva meglio.</p>
        <span>© {new Date().getFullYear()} EuroVIP2000</span>
      </footer>
    </>
  );
}
