import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/config/faq";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/primitives";

const categories = ["Prevención", "Higiene oral", "Odontología general", "Estética dental", "Ortodoncia", "Odontopediatría", "Rehabilitación oral"];

export const Route = createFileRoute("/blog")({
  head: () => seo("Blog de salud oral | DOVA Dental Care", "Artículos informativos sobre salud oral, prevención y cuidado dental del consultorio DOVA Dental Care en Villavicencio.", "/blog"),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: "Blog" }]} eyebrow="Blog" title="Salud oral, explicada con claridad" text="Pronto publicaremos artículos informativos para ayudarte a cuidar tu sonrisa. Este contenido no sustituye una consulta profesional." />
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ul className="flex flex-wrap gap-2">{categories.map((c) => <li key={c} className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">{c}</li>)}</ul>
          {posts.length === 0 ? (
            <div className="mt-12 rounded-lg bg-soft p-12 text-center">
              <p className="font-display text-2xl">Aún no hay artículos publicados</p>
              <p className="mt-3 text-muted-foreground">Vuelve pronto. Mientras tanto, conoce nuestros <Link to="/servicios" className="text-gold-dark underline">servicios</Link>.</p>
            </div>
          ) : (
            <ul className="mt-12 grid gap-6 md:grid-cols-3">{posts.map((p) => <li key={p.slug} className="rounded-lg border border-border p-6"><p className="eyebrow">{p.category}</p><h2 className="mt-3 text-2xl">{p.title}</h2><p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p></li>)}</ul>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
