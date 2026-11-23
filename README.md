# Eurovip 2000

POC Next.js multipagina per Eurovip 2000, servizio di noleggio con conducente.
I contenuti sono disponibili in italiano (`/it`) e inglese (`/en`), con
selettore lingua nell'intestazione. La home (`/`) reindirizza alla versione
italiana. Le pagine dedicate includono Chi siamo/Esperienza, Flotta, Servizi,
Preventivo gratuito, FAQ, Contatti e sei pagine per le principali richieste di
transfer. La pagina Preventivo include la guida “Semplice fin dall'inizio” e
la richiesta di preventivo; le FAQ hanno una pagina dedicata. La pagina
Contatti usa il numero WhatsApp/telefono già fornito; il
recapito email resta da confermare prima della pubblicazione.
Le richieste di preventivo aprono WhatsApp con un messaggio precompilato nella
lingua selezionata.

## Avvio

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000). Prima della pubblicazione:

- sostituire i numeri segnaposto con dati reali e verificati;
- aggiungere dominio, recapiti e dati societari ufficiali;
- verificare le traduzioni e le informazioni su servizi e flotta;
- collegare il modulo preventivo, che attualmente è solo dimostrativo;
- pubblicare nomi o loghi dei clienti solo dopo aver verificato autorizzazioni
  e accordi di riservatezza.

SEO per lingua, metadati e URL localizzati sono inclusi nella POC. La sitemap
dinamica elenca le pagine italiane e inglesi con i rispettivi alternate
`hreflang`.