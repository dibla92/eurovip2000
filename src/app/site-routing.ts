import type { Locale } from "./translations";

export const transferIds = [
  "fiumicino",
  "ciampino",
  "civitavecchia",
  "rome",
  "beyond-rome",
  "chauffeur",
] as const;

export type TransferId = (typeof transferIds)[number];
export type PageKey =
  | "home"
  | "about"
  | "fleet"
  | "services"
  | "quote"
  | "faq"
  | "contacts"
  | `transfer:${TransferId}`;

const paths: Record<Locale, Record<Exclude<PageKey, "home">, string>> = {
  it: {
    about: "chi-siamo",
    fleet: "flotta",
    services: "servizi",
    quote: "preventivo",
    faq: "domande-frequenti",
    contacts: "contatti",
    "transfer:fiumicino": "servizi/transfer-aeroporto-fiumicino",
    "transfer:ciampino": "servizi/transfer-aeroporto-ciampino",
    "transfer:civitavecchia": "servizi/transfer-porto-civitavecchia",
    "transfer:rome": "servizi/transfer-roma",
    "transfer:beyond-rome": "servizi/transfer-fuori-roma",
    "transfer:chauffeur": "servizi/autista-a-disposizione",
  },
  en: {
    about: "about-us",
    fleet: "fleet",
    services: "services",
    quote: "quote",
    faq: "faq",
    contacts: "contact",
    "transfer:fiumicino": "services/fiumicino-airport-transfer",
    "transfer:ciampino": "services/ciampino-airport-transfer",
    "transfer:civitavecchia": "services/civitavecchia-port-transfer",
    "transfer:rome": "services/rome-transfer",
    "transfer:beyond-rome": "services/transfers-from-rome",
    "transfer:chauffeur": "services/chauffeur-at-your-disposal",
  },
};

const pageKeys = Object.keys(paths.it) as Exclude<PageKey, "home">[];

export function getLocalizedPath(locale: Locale, page: PageKey) {
  if (page === "home") return `/${locale}`;
  return `/${locale}/${paths[locale][page]}`;
}

export function resolvePageKey(locale: Locale, slug: string[]): PageKey | null {
  const path = slug.join("/");
  return pageKeys.find((page) => paths[locale][page] === path) ?? null;
}

export function getAllLocalizedRoutes() {
  return (Object.keys(paths) as Locale[]).flatMap((locale) =>
    (["home", ...pageKeys] as PageKey[]).map((page) => ({
      locale,
      page,
      slug: page === "home" ? [] : paths[locale][page].split("/"),
    })),
  );
}

export function getStaticLocalizedPaths() {
  return getAllLocalizedRoutes()
    .filter(({ page }) => page !== "home")
    .map(({ locale, slug }) => ({ locale, slug }));
}
