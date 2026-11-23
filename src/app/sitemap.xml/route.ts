export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const locales = ["it", "en"];
  const urls = locales
    .map(
      (locale) => `  <url>
    <loc>${origin}/${locale}</loc>
${locales
  .map(
    (alternate) =>
      `    <xhtml:link rel="alternate" hreflang="${alternate}" href="${origin}/${alternate}" />`,
  )
  .join("\n")}
  </url>`,
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
