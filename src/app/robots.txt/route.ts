export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const sitemap = new URL("/sitemap.xml", request.url).href;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
