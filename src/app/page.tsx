import Image from "next/image";
import QuoteForm from "./quote-form";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servizio di noleggio con conducente",
  serviceType: "Noleggio con conducente (NCC)",
  provider: {
    "@type": "Organization",
    name: "Eurovip 2000",
  },
  areaServed: {
    "@type": "Country",
    name: "Italia",
  },
  description:
    "Servizio NCC per trasferimenti privati, viaggi di lavoro e spostamenti in Italia.",
};

const services = [
  {
    number: "01",
    title: "Aeroporti e stazioni",
    description:
      "Trasferimenti da e verso aeroporti e stazioni, con orari e destinazioni concordati in anticipo.",
  },
  {
    number: "02",
    title: "Viaggi di lavoro",
    description:
      "Spostamenti per professionisti e aziende, appuntamenti, trasferte e agende con più tappe.",
  },
  {
    number: "03",
    title: "Lunga percorrenza",
    description:
      "Un viaggio privato tra città italiane, costruito in base al tuo itinerario e alle tue esigenze.",
  },
  {
    number: "04",
    title: "Eventi e occasioni speciali",
    description:
      "Un servizio da valutare per cerimonie, eventi, serate e giornate da organizzare con cura.",
  },
];

const questions = [
  {
    question: "Come posso richiedere un preventivo NCC?",
    answer:
      "Compila il modulo con partenza, destinazione e data indicative. Per questa POC il modulo è dimostrativo: non invia né conserva i dati inseriti.",
  },
  {
    question: "Eurovip 2000 opera in tutta Italia?",
    answer:
      "Sì. Il servizio è pensato per spostamenti su tutto il territorio nazionale. Disponibilità e dettagli del singolo itinerario vanno concordati in fase di richiesta.",
  },
  {
    question: "Quali veicoli sono disponibili?",
    answer:
      "La pagina presenta categorie indicative, non un inventario confermato. Modelli, posti, bagagli e disponibilità effettiva vanno verificati direttamente con l'azienda.",
  },
  {
    question: "È possibile organizzare un servizio per un'azienda o un evento?",
    answer:
      "La richiesta può descrivere esigenze business, più tappe o un evento. La soluzione e la disponibilità saranno da confermare in base al servizio richiesto.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inizio" aria-label="Eurovip 2000, home">
            <span className="brand-mark" aria-hidden="true">
              E
            </span>
            <span className="brand-name">
              EUROVIP <span>2000</span>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navigazione principale">
            <a href="#chi-siamo">Chi siamo</a>
            <a href="#flotta">La flotta</a>
            <a href="#servizi">Servizi</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="header-cta" href="#preventivo">
            Richiedi un preventivo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="contenuto">
        <section className="hero" id="inizio" aria-labelledby="hero-title">
          <div className="hero-image">
            <Image
              src="/images/hero-chauffeur.jpg"
              alt="Automobile scura in viaggio, immagine illustrativa"
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
              Noleggio con conducente <span /> In tutta Italia
            </p>
            <h1 id="hero-title">
              Il viaggio
              <br />
              comincia <em>da te.</em>
            </h1>
            <p className="hero-copy">
              Eurovip 2000, servizio NCC per i tuoi spostamenti privati e di
              lavoro. Tu scegli la destinazione, al percorso pensiamo insieme.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#preventivo">
                Richiedi un preventivo gratuito
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link text-link-light" href="#servizi">
                Scopri i servizi <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-notes" aria-label="Informazioni sul servizio">
              <span>Per privati e aziende</span>
              <span>Viaggi in Italia</span>
              <span>Preventivo gratuito</span>
            </div>
          </div>
          <div className="hero-caption">
            <span>01 — 04</span>
            <span>La tua prossima destinazione</span>
          </div>
        </section>

        <section className="intro-section section-pad" id="chi-siamo">
          <div className="page-width intro-grid">
            <div className="section-label">
              <span className="eyebrow">01 / Chi siamo</span>
              <span className="label-rule" />
            </div>
            <div className="intro-copy">
              <p className="eyebrow eyebrow-olive">Eurovip 2000 · NCC</p>
              <h2>
                Il tempo del viaggio
                <br />
                <em>torna a essere tuo.</em>
              </h2>
              <div className="intro-text-columns">
                <p>
                  Eurovip 2000 è una società di noleggio con conducente. Un
                  servizio pensato per accompagnarti in Italia, per lavoro o
                  per piacere, con un itinerario organizzato intorno alle tue
                  esigenze.
                </p>
                <p>
                  Dalla prima richiesta alla destinazione, ogni spostamento
                  parte dall&apos;ascolto: da dove vuoi partire, dove vuoi
                  arrivare e come immagini il tuo viaggio. Il preventivo è
                  gratuito e senza impegno.
                </p>
              </div>
              <a className="text-link" href="#preventivo">
                Raccontaci il tuo itinerario <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="intro-image-wrap">
              <Image
                src="/images/driver-journey.jpg"
                alt="Dettaglio di un viaggio in automobile, fotografia illustrativa"
                width={1000}
                height={667}
                sizes="(max-width: 760px) 100vw, 36vw"
                className="intro-image"
              />
              <span className="image-note">Immagine di repertorio</span>
            </div>
          </div>
        </section>

        <section className="fleet-section section-pad" id="flotta">
          <div className="page-width">
            <div className="fleet-heading">
              <div>
                <p className="eyebrow eyebrow-light">02 / La nostra flotta</p>
                <h2>
                  Lo spazio giusto
                  <br />
                  <em>per il tuo viaggio.</em>
                </h2>
              </div>
              <p>
                Ogni itinerario è diverso. Raccontaci quante persone viaggiano
                e di cosa hai bisogno: potremo valutare la categoria più adatta
                e la sua disponibilità.
              </p>
            </div>
            <div className="fleet-grid">
              <article className="fleet-card">
                <span className="fleet-number">01</span>
                <div className="fleet-illustration fleet-illustration-sedan">
                  <span className="vehicle-shape" aria-hidden="true" />
                  <span className="fleet-tag">Categoria indicativa</span>
                </div>
                <h3>Berlina</h3>
                <p>Per trasferimenti individuali e appuntamenti di lavoro.</p>
              </article>
              <article className="fleet-card">
                <span className="fleet-number">02</span>
                <div className="fleet-illustration fleet-illustration-comfort">
                  <span className="vehicle-shape" aria-hidden="true" />
                  <span className="fleet-tag">Categoria indicativa</span>
                </div>
                <h3>Auto comfort</h3>
                <p>Una soluzione da valutare per viaggi e occasioni speciali.</p>
              </article>
              <article className="fleet-card">
                <span className="fleet-number">03</span>
                <div className="fleet-illustration fleet-illustration-van">
                  <span className="vehicle-shape" aria-hidden="true" />
                  <span className="fleet-tag">Categoria indicativa</span>
                </div>
                <h3>Van e gruppi</h3>
                <p>Per chi desidera viaggiare insieme, con spazio da concordare.</p>
              </article>
            </div>
            <p className="fleet-disclaimer">
              Categorie e illustrazioni sono esempi per questa POC. Modelli,
              capienza e dotazioni vanno sostituiti con quelli effettivamente
              disponibili.
            </p>
          </div>
        </section>

        <section className="services-section section-pad" id="servizi">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow eyebrow-olive">03 / I nostri servizi</p>
                <h2>
                  Una destinazione,
                  <br />
                  <em>molti buoni motivi.</em>
                </h2>
              </div>
              <p>
                Un servizio NCC per muoverti in modo semplice, con un viaggio
                concordato in base alla tua agenda e alle tue necessità.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
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
            <p className="eyebrow eyebrow-light">Una rete di destinazioni</p>
            <h2>
              Da una città
              <br />
              <em>all&apos;Italia intera.</em>
            </h2>
            <p>
              Eurovip 2000 lavora su tutto il territorio nazionale. Aeroporti,
              stazioni, centri urbani e destinazioni da raggiungere: indica
              partenza e arrivo, e costruiremo la richiesta intorno al tuo
              percorso.
            </p>
            <a className="button button-outline" href="#preventivo">
              Parliamo del tuo viaggio <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="steps-section section-pad">
          <div className="page-width steps-layout">
            <div className="steps-intro">
              <p className="eyebrow eyebrow-olive">Il tuo viaggio, in tre passi</p>
              <h2>
                Semplice
                <br />
                <em>fin dall&apos;inizio.</em>
              </h2>
              <p>
                La richiesta è il primo passo per definire insieme il servizio
                più adatto al tuo itinerario.
              </p>
            </div>
            <ol className="steps-list">
              <li>
                <span>01</span>
                <div>
                  <h3>Ci racconti il percorso</h3>
                  <p>Partenza, destinazione, data e ciò che conta per te.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Valutiamo la richiesta</h3>
                  <p>Ogni dettaglio aiuta a definire una proposta su misura.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Concordiamo il viaggio</h3>
                  <p>Ricevi una proposta da confermare prima della partenza.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="quote-section section-pad" id="preventivo">
          <div className="page-width quote-layout">
            <div className="quote-intro">
              <p className="eyebrow eyebrow-light">04 / Preventivo gratuito</p>
              <h2>
                Dove ti
                <br />
                <em>portiamo?</em>
              </h2>
              <p>
                Ogni buon viaggio comincia con una domanda. Indicaci i dettagli
                del tuo spostamento: prepareremo una proposta da valutare
                insieme.
              </p>
              <div className="quote-aside">
                <span className="quote-aside-mark" aria-hidden="true">
                  ✳
                </span>
                <span>
                  Nessun impegno
                  <br />
                  La richiesta di preventivo è gratuita.
                </span>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="page-width faq-layout">
            <div>
              <p className="eyebrow eyebrow-olive">Domande frequenti</p>
              <h2>
                Prima di
                <br />
                <em>partire.</em>
              </h2>
            </div>
            <div className="faq-list">
              {questions.map((item) => (
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
              Il tuo servizio di noleggio con conducente,
              <br />
              in tutta Italia.
            </p>
            <a className="footer-cta" href="#preventivo">
              Richiedi un preventivo <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Eurovip 2000</span>
            <span>
              POC dimostrativa · Inserire contatti e dati societari ufficiali
              prima della pubblicazione.
            </span>
            <a href="#inizio">Torna all&apos;inizio ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
