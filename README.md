# EuroVIP2000

Italian-language website for EuroVIP2000, an NCC (noleggio con conducente)
and chauffeur service. Built with Next.js App Router, with page metadata and
TaxiService structured data for search engines.

## Run locally

```bash
npm install
npm run dev
```

Set these optional environment variables before deployment:

- `NEXT_PUBLIC_SITE_URL`: public site origin used for metadata and structured
  data (defaults to `https://www.eurovip2000.it`).
- `NEXT_PUBLIC_CONTACT_EMAIL`: booking email displayed on the contact section
  and included in structured data.
- `NEXT_PUBLIC_CONTACT_PHONE`: booking phone displayed on the contact section
  and included in structured data.

Run `npm run lint` and `npm run build` to validate the application.