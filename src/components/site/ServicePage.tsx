import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getService, services } from "@/config/services";
import { seo, SITE_URL } from "@/lib/seo";
import { Breadcrumbs, CtaBand, FaqList, Reveal, WaButton } from "./primitives";

export function serviceHead(slug: string) {
  const s = getService(slug);
  const h = seo(s.metaTitle, s.metaDescription, `/${slug}`);
  return {
    ...h,
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Servicios", item: SITE_URL + "/servicios" },
        { "@type": "ListItem", position: 3, name: s.name, item: `${SITE_URL}/${slug}` },
      ] }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) },
    ],
  };
}

export function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-ink-foreground md:pt-40">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Inicio", to: "/" }, { label: "Servicios", to: "/servicios" }, { label: s.name }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <p className="eyebrow mb-5 text-gold">Servicio · Villavicencio</p>
              <h1 className="text-4xl leading-[1.08] md:text-6xl">{s.h1}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{s.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <WaButton message={s.wa}>{s.cta}</WaButton>
                <a href="#relacionados" className="btn-outline-light">Servicios relacionados</a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <img src={s.image} alt={s.imageAlt} width={1200} height={900} className="aspect-[4/3] w-full rounded-lg object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">01</p>
            <h2 className="text-3xl md:text-4xl">¿En qué consiste?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.what}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">02</p>
            <h2 className="text-3xl md:text-4xl">¿Para quién puede ser adecuado?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.forWho}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-4">03</p>
            <h2 className="text-3xl md:text-4xl">Beneficios potenciales</h2>
            <ul className="mt-8 space-y-4">
              {s.benefits.map((b) => <li key={b} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-gold-dark" />{b}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">04</p>
            <h2 className="text-3xl md:text-4xl">Cómo es el proceso</h2>
            <ol className="mt-8 border-t border-border">
              {s.process.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5">
                  <span className="font-display text-2xl text-gold-dark">{i + 1}</span>
                  <div><h3 className="text-lg">{p.title}</h3><p className="mt-1 text-sm text-muted-foreground">{p.text}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-4">05</p>
            <h2 className="text-3xl md:text-4xl">Cuidados posteriores</h2>
            <ul className="mt-8 space-y-3 text-muted-foreground">{s.care.map((c) => <li key={c} className="border-l-2 border-gold pl-4">{c}</li>)}</ul>
            <p className="mt-8 rounded-md bg-soft p-4 text-sm text-muted-foreground">El tratamiento adecuado depende de una valoración odontológica individual. <Link to="/aviso-informacion-medica" className="underline">Aviso médico</Link>.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">06</p>
            <h2 className="mb-8 text-3xl md:text-4xl">Preguntas frecuentes</h2>
            <FaqList items={s.faqs} />
          </Reveal>
        </div>
      </section>

      <section id="relacionados" className="border-t border-border bg-soft py-20">
        <div className="container-site">
          <h2 className="text-3xl">Servicios relacionados</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link to={`/${r.slug}`} className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-gold">
                  <p className="font-display text-xl group-hover:text-gold-dark">{r.name} →</p>
                  <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Agenda tu valoración por WhatsApp" text={s.intro} message={s.wa} cta={s.cta} />
    </>
  );
}
