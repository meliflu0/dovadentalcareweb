import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/config/services";
import { SITE_URL } from "@/lib/seo";

const paths = ["/", "/servicios", ...services.map((s) => `/${s.slug}`), "/nosotros", "/casos-de-exito", "/contacto", "/blog", "/politica-tratamiento-datos", "/politica-privacidad", "/aviso-privacidad", "/terminos-y-condiciones", "/aviso-informacion-medica"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => new Response(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${SITE_URL}${p}</loc></url>`).join("")}</urlset>`,
        { headers: { "Content-Type": "application/xml" } },
      ),
    },
  },
});
