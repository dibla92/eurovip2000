import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Eurovip 2000 | Noleggio con conducente in Italia",
    template: "%s | Eurovip 2000",
  },
  description:
    "Eurovip 2000: noleggio con conducente (NCC) per viaggi privati e di lavoro in tutta Italia. Raccontaci il tuo itinerario e richiedi un preventivo gratuito.",
  applicationName: "Eurovip 2000",
  openGraph: {
    title: "Eurovip 2000 | Noleggio con conducente in Italia",
    description:
      "Servizio NCC per trasferimenti privati e business in tutta Italia. Richiedi un preventivo gratuito.",
    locale: "it_IT",
    siteName: "Eurovip 2000",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Eurovip 2000 | Noleggio con conducente in Italia",
    description:
      "Servizio NCC per trasferimenti privati e business in tutta Italia. Richiedi un preventivo gratuito.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
