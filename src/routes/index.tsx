import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Award, HeartHandshake, MapPin, ShieldCheck, Sparkles, Smile, Stethoscope, Users } from "lucide-react";
import hero from "@/assets/hero.webp";
import hygiene from "@/assets/hygiene.jpg";
import { featuredServices } from "@/config/services";
import { homeFaqs } from "@/config/faq";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import { WA_MESSAGES } from "@/lib/whatsapp";
import { ArrowLink, CtaBand, FaqList, Reveal, SectionHeading, WaButton } from "@/components/site/primitives";
import { CasesGallery, DoctorBlock, MissionVision, ReviewsBlock, ServiceCard } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => {
    const h = seo("Odontología en Villavicencio | DOVA Dental Care", "Odontología integral en Villavicencio, barrio Hacarítama: limpieza, blanqueamiento, ortodoncia, implantes y más. Agenda tu cita por WhatsApp.", "/");
    return {
      ...h,
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
    };
  },
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } });
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40 lg:from-ink lg:via-ink/75 lg:to-ink/50" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 grid min-h-[100svh] items-center pb-16 pt-32 lg:pt-28">
        <div className="max-w-2xl">
          <motion.p {...fade(0.1)} className="eyebrow mb-7 text-gold">Odontología integral · Villavicencio</motion.p>
          <motion.h1 {...fade(0.25)} className="text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[4.5rem]">
            Odontología integral en Villavicencio para una sonrisa <em className="text-gold-light">sana, estética</em> y duradera
          </motion.h1>
          <motion.p {...fade(0.45)} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted/90">
            En DOVA Dental Care cuidamos tu salud oral con atención personalizada y tratamientos enfocados en el bienestar y la estética de tu sonrisa. Atendemos a niños, jóvenes y adultos en el barrio Hacarítama, Villavicencio.
          </motion.p>
          <motion.div {...fade(0.6)} className="mt-10 flex flex-wrap gap-3">
            <WaButton message={WA_MESSAGES.doctor}>Agendar cita por WhatsApp</WaButton>
            <Link to="/servicios" className="btn-outline-light">Descubrir nuestros servicios</Link>
          </motion.div>
          <motion.ul {...fade(0.75)} className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-border/50 pt-6 text-sm text-ink-muted/80 sm:grid-cols-4">
            <li>Más de 14 años de experiencia</li>
            <li>Atención personalizada</li>
            <li>General, estética, ortodoncia e implantes</li>
            <li>Barrio Hacarítama</li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

const trust = [
  { icon: Award, t: "Más de 14 años de experiencia" },
  { icon: HeartHandshake, t: "Atención personalizada" },
  { icon: ShieldCheck, t: "Cuidado de la salud oral" },
  { icon: MapPin, t: "Ubicación en Villavicencio" },
];

const reasons = [
  { icon: Stethoscope, t: "Técnicas modernas", d: "Procedimientos seleccionados según la valoración y el plan de tratamiento." },
  { icon: ShieldCheck, t: "Prevención", d: "Promovemos hábitos y cuidados que ayudan a mantener una buena salud oral." },
  { icon: Users, t: "Calidez humana", d: "Una atención cercana para niños, jóvenes y adultos." },
  { icon: MapPin, t: "Ubicación", d: "Estamos en el barrio Hacarítama, Villavicencio, Meta." },
];

function Home() {
  return (
    <>
      <Hero />

      <section aria-label="Por qué confiar en nosotros" className="border-b border-border bg-soft">
        <ul className="container-site grid grid-cols-2 md:grid-cols-4">
          {trust.map((x, i) => (
            <li key={x.t} className={`flex items-center gap-3 py-7 text-sm font-medium md:justify-center ${i % 2 ? "pl-4" : ""} md:pl-0 ${i > 0 ? "md:border-l md:border-border" : ""}`}>
              <x.icon className="h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />{x.t}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Servicios" title="Servicios odontológicos en Villavicencio" text="Encuentra la atención que necesitas para cuidar tu salud oral y mejorar tu sonrisa con un plan adaptado a ti." />
            <ArrowLink to="/servicios">Explorar todos los servicios</ArrowLink>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-warm py-24 md:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Por qué DOVA</p>
              <h2 className="text-4xl leading-tight md:text-5xl">Atención odontológica cercana, ética y personalizada</h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">En DOVA Dental Care creemos que cada sonrisa merece atención individual. Nuestro enfoque combina prevención, valoración profesional y acompañamiento cercano para ayudarte a tomar decisiones informadas sobre tu salud oral.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div><p className="font-display text-3xl text-gold-dark">Experiencia</p><p className="mt-2 text-sm text-muted-foreground">Más de 14 años de trayectoria odontológica.</p></div>
              <div><p className="font-display text-3xl text-gold-dark">A tu medida</p><p className="mt-2 text-sm text-muted-foreground">Cada paciente recibe una orientación adaptada a sus necesidades.</p></div>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <img src={hero} alt="Elementos de higiene oral sobre lino (imagen ilustrativa)" width={1200} height={900} loading="lazy" className="aspect-[16/9] w-full rounded-lg object-cover" />
            </Reveal>
            {reasons.map((r, i) => (
              <Reveal key={r.t} delay={i * 0.07} className="border-t border-gold/50 pt-5">
                <r.icon className="mb-3 h-5 w-5 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-xl">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DoctorBlock />

      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Casos de éxito" title="Resultados reales, sonrisas transformadas" text="Conoce algunos casos clínicos y descubre cómo una valoración profesional puede ayudar a identificar opciones para mejorar tu sonrisa." />
            <ArrowLink to="/casos-de-exito">Ver casos de éxito</ArrowLink>
          </div>
          <Reveal><CasesGallery /></Reveal>
        </div>
      </section>

      <MissionVision />
      <ReviewsBlock />

      <section className="pb-24 md:pb-32">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Resolvemos tus dudas" title="Preguntas frecuentes" />
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Smile className="h-4 w-4 text-gold-dark" />¿No encuentras tu respuesta? <a className="font-semibold text-gold-dark underline" href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">Escríbenos</a></p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Sparkles className="h-4 w-4 text-gold-dark" />Pagos: {site.payments.join(", ")}.</p>
          </div>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
