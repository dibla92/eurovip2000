import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eurovip2000.it";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EuroVIP2000 | Noleggio con conducente e chauffeur",
    template: "%s | EuroVIP2000",
  },
  description:
    "Viaggia con EuroVIP2000: servizio NCC e chauffeur per trasferimenti privati, aeroporti, viaggi di lavoro ed eventi. Comfort, puntualità e discrezione.",
  alternates: {
    canonical: "/",
  },
  applicationName: "EuroVIP2000",
  keywords: [
    "NCC",
    "noleggio con conducente",
    "chauffeur",
    "auto con autista",
    "trasferimenti aeroportuali",
    "transfer privati",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "EuroVIP2000",
    url: siteUrl,
    title: "EuroVIP2000 | Noleggio con conducente e chauffeur",
    description:
      "Servizio NCC e chauffeur per trasferimenti privati, aeroporti, viaggi di lavoro ed eventi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
