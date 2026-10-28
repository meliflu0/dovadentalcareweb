import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, Star } from "lucide-react";
import type { Service } from "@/config/services";
import { site } from "@/config/site";
import { Reveal, WaButton } from "./primitives";
import { WA_MESSAGES } from "@/lib/whatsapp";
import { cases } from "@/config/cases";

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-500 hover:border-gold">
        <Link to={`/${s.slug}`} className="relative block aspect-[4/3] overflow-hidden" aria-label={`Ver ${s.name}`}>
          <img src={s.image} alt={s.imageAlt} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">{String(index + 1).padStart(2, "0")}</span>
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-2xl">
            <Link to={`/${s.slug}`} className="flex items-start justify-between gap-3 hover:text-gold-dark">
              {s.name} <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-gold-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
          <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(s.wa)}`} target="_blank" rel="noopener noreferrer" className="mt-6 text-sm font-semibold text-gold-dark transition-transform group-hover:translate-x-1">
            {s.cardCta} →
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function DoctorBlock() {
  const d = site.doctor;
  return (
    <section className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="container-site grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-3 arch-mask border border-gold/40" aria-hidden="true" />
            {d.photo ? (
              <img src={d.photo} alt={`Odontólogo ${d.name}`} className="arch-mask h-full w-full object-cover" />
            ) : (
              <div className="arch-mask flex h-full w-full flex-col items-center justify-center gap-4 bg-ink-soft text-center">
                <span className="font-display text-7xl text-gold">DV</span>
                <span className="px-8 text-xs uppercase tracking-[0.25em] text-ink-muted">Fotografía del odontólogo<br />próximamente</span>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2">
          <p className="eyebrow mb-5 text-gold">Conoce a tu odontólogo</p>
          <h2 className="text-4xl leading-tight md:text-5xl">{d.name}</h2>
          <p className="mt-3 text-lg text-gold-light">{d.role}</p>
          <span className="gold-rule my-8" />
          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
            El odontólogo {d.name} cuenta con más de 14 años de experiencia en la atención odontológica integral. Su práctica se enfoca en el diagnóstico, la prevención, la estética dental y el acompañamiento cercano de cada paciente, buscando soluciones funcionales y naturales según las necesidades de cada caso.
          </p>
          <dl className="mt-8 grid max-w-lg grid-cols-2 gap-6 text-sm">
            <div><dt className="text-ink-muted">Experiencia</dt><dd className="mt-1 font-semibold">{d.experience}</dd></div>
            <div><dt className="flex items-center gap-1.5 text-ink-muted"><GraduationCap className="h-4 w-4 text-gold" />Formación</dt><dd className="mt-1 font-semibold">{d.education}</dd></div>
          </dl>
          <div className="mt-10"><WaButton message={WA_MESSAGES.doctor}>Agendar cita con el odontólogo Dubbling</WaButton></div>
        </Reveal>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="bg-warm py-24 md:py-32">
      <div className="container-site">
        <Reveal><p className="eyebrow mb-4">Misión y visión</p><h2 className="text-4xl md:text-5xl">Nuestro propósito</h2></Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
          <Reveal className="md:border-r md:border-border md:pr-14">
            <h3 className="mb-5 text-2xl italic text-gold-dark">Misión</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">En DOVA Dental Care tenemos la misión de transformar sonrisas y mejorar la calidad de vida de nuestros pacientes, brindando servicios odontológicos integrales con calidad, ética, responsabilidad y calidez humana. Nos comprometemos a ofrecer una atención personalizada, utilizando técnicas modernas y promoviendo la prevención y el cuidado de la salud oral, para que cada persona sonría con confianza, seguridad y felicidad.</p>
          </Reveal>
          <Reveal delay={0.1} className="md:pl-14">
            <h3 className="mb-5 text-2xl italic text-gold-dark">Visión</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">Ser un consultorio odontológico reconocido por su excelencia, innovación, compromiso y calidad humana, convirtiéndonos en la mejor elección para quienes buscan una sonrisa sana, hermosa y duradera. En DOVA Dental Care soñamos con crecer cada día, dejar huellas positivas en la vida de nuestros pacientes y construir un futuro en el que cada sonrisa refleje bienestar, confianza y felicidad.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ReviewsBlock() {
  const r = site.reviews;
  return (
    <section className="py-24 md:py-28">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-border bg-soft p-10 md:flex-row md:items-center md:p-14">
            <div>
              <div className="mb-4 flex gap-1 text-gold" aria-hidden="true">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
              <h2 className="text-3xl md:text-4xl">Lo que opinan nuestros pacientes</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                {r.verified ? `Calificación de ${r.rating} estrellas con más de ${r.count} opiniones en Google.` : "Consulta las opiniones y comparte tu experiencia en nuestro perfil de Google."}
              </p>
            </div>
            <a href={site.social.googleReview} target="_blank" rel="noopener noreferrer" className="btn-dark shrink-0">Ver y dejar reseñas</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CasesEmpty() {
  return (
    <div className="rounded-lg border border-dashed border-gold/50 bg-soft p-10 text-center md:p-16">
      <span className="gold-rule mx-auto mb-6" />
      <p className="font-display text-2xl">Galería en preparación</p>
      <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Esta galería se completará con casos clínicos reales, publicados con la autorización de cada paciente.</p>
      <div className="mt-8"><WaButton message={WA_MESSAGES.valoracion}>Quiero una valoración</WaButton></div>
      <p className="mx-auto mt-8 max-w-md text-xs text-muted-foreground">Los resultados pueden variar según el diagnóstico, las condiciones individuales y el tratamiento indicado para cada paciente.</p>
    </div>
  );
}

export function CasesGallery() {
  if (cases.length === 0) {
    return <CasesEmpty />;
  }

  return (
    <div className="grid gap-12 md:grid-cols-2">
      {cases.map((c, index) => (
        <Reveal key={c.id} delay={index * 0.1}>
          <article className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden border-r border-border">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-gold">ANTES</span>
                <img src={c.beforeImage} alt={c.beforeAlt} width={600} height={450} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute right-3 top-3 z-10 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-gold">DESPUÉS</span>
                <img src={c.afterImage} alt={c.afterAlt} width={600} height={450} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
