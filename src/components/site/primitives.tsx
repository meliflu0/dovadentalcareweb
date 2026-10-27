import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { waLink } from "@/lib/whatsapp";
import logoImage from "@/assets/logo.jpg";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center">
      <img src={logoImage} alt="DOVA Dental Care" className="h-10 w-auto" />
    </span>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

export function WaButton({ message, children, variant = "gold", className = "" }: { message?: string; children: ReactNode; variant?: "gold" | "dark" | "outline-light"; className?: string }) {
  const cls = variant === "gold" ? "btn-gold" : variant === "dark" ? "btn-dark" : "btn-outline-light";
  return (
    <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className={`${cls} ${className}`}>
      <WhatsAppIcon /> {children}
    </a>
  );
}

export function SectionHeading({ eyebrow, title, text, light = false, center = false }: { eyebrow?: string; title: string; text?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={`text-3xl leading-tight md:text-5xl ${light ? "text-ink-foreground" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-ink-muted" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, crumbs, children }: { eyebrow?: string; title: string; text?: string; crumbs?: { label: string; to?: string }[]; children?: ReactNode }) {
  return (
    <section className="bg-ink pb-16 pt-32 text-ink-foreground md:pb-24 md:pt-40">
      <div className="container-site">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <Reveal>
          {eyebrow && <p className="eyebrow mb-5 text-gold">{eyebrow}</p>}
          <h1 className="max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
          {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{text}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.to ? <Link to={c.to} className="hover:text-gold-light">{c.label}</Link> : <span aria-current="page" className="text-ink-foreground">{c.label}</span>}
            {i < items.length - 1 && <span aria-hidden="true" className="text-gold">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`f${i}`} className="border-border">
          <AccordionTrigger className="py-6 text-left font-display text-lg font-normal hover:no-underline md:text-xl [&>svg]:text-gold-dark">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CtaBand({ title = "Tu próxima sonrisa comienza con una valoración.", text = "Estamos aquí para orientarte y ayudarte a conocer las opciones de atención para tu salud oral.", message, cta = "Agendar cita por WhatsApp", secondary = true }: { title?: string; text?: string; message?: string; cta?: string; secondary?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 w-full text-gold/20" viewBox="0 0 1200 200" fill="none" aria-hidden="true">
        <path d="M0 160 C 300 40, 900 40, 1200 160" stroke="currentColor" />
      </svg>
      <div className="container-site relative text-center">
        <Reveal>
          <span className="gold-rule mx-auto mb-8" />
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <WaButton message={message}>{cta}</WaButton>
            {secondary && <Link to="/servicios" className="btn-outline-light">Conocer nuestros servicios</Link>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="link-arrow text-foreground hover:text-gold-dark">
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
