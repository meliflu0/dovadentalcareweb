import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Star } from "lucide-react";
import { site } from "@/config/site";
import { featuredServices } from "@/config/services";
import { Logo, WhatsAppIcon } from "./primitives";
import { waLink } from "@/lib/whatsapp";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function TikTok() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z" /></svg>;
}

export function Footer() {
  const social = [
    { href: site.social.instagram, label: "Instagram de DOVA Dental Care", icon: <Instagram className="h-4 w-4" /> },
    { href: site.social.facebook, label: "Facebook de DOVA Dental Care", icon: <Facebook className="h-4 w-4" /> },
    { href: site.social.tiktok, label: "TikTok de DOVA Dental Care", icon: <TikTok /> },
    { href: site.social.googleReview, label: "Perfil de Google de DOVA Dental Care", icon: <Star className="h-4 w-4" /> },
  ];
  const head = "eyebrow mb-5 text-gold";
  const a = "text-sm text-ink-muted hover:text-gold-light";
  return (
    <footer className="border-t border-ink-border bg-ink text-ink-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">DOVA Dental Care. Odontología integral con atención personalizada en Villavicencio, Meta.</p>
          <ul className="mt-6 flex gap-3">
            {social.map((s) => (
              <li key={s.href}><a href={s.href} {...ext} aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-border text-ink-muted hover:border-gold hover:text-gold-light">{s.icon}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className={head}>Navegación</p>
          <ul className="space-y-3">
            <li><Link to="/" className={a}>Inicio</Link></li>
            <li><Link to="/servicios" className={a}>Servicios</Link></li>
            <li><Link to="/nosotros" className={a}>Nosotros</Link></li>
            <li><Link to="/casos-de-exito" className={a}>Casos de éxito</Link></li>
            <li><Link to="/contacto" className={a}>Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className={head}>Servicios</p>
          <ul className="space-y-3">
            {featuredServices.map((s) => <li key={s.slug}><Link to={`/${s.slug}`} className={a}>{s.name}</Link></li>)}
            <li><Link to="/servicios" className="text-sm font-semibold text-gold">Ver todos los servicios</Link></li>
          </ul>
        </div>
        <div>
          <p className={head}>Contacto</p>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li><a href={site.mapsUrl} {...ext} className={a}>{site.address}</a><br />Barrio {site.neighborhood}</li>
            <li><a href={waLink()} {...ext} className={`${a} inline-flex items-center gap-2`}><WhatsAppIcon /> {site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className={a}>{site.email}</a></li>
            <li>{site.hours.weekdays}<br />{site.hours.sunday}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/politica-tratamiento-datos" className="hover:text-gold-light">Tratamiento de datos</Link></li>
            <li><Link to="/politica-privacidad" className="hover:text-gold-light">Privacidad</Link></li>
            <li><Link to="/aviso-privacidad" className="hover:text-gold-light">Aviso de privacidad</Link></li>
            <li><Link to="/terminos-y-condiciones" className="hover:text-gold-light">Términos</Link></li>
            <li><Link to="/aviso-informacion-medica" className="hover:text-gold-light">Aviso médico</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a DOVA Dental Care por WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-success px-4 text-ink-foreground transition-transform hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-40 md:inline">Escríbenos</span>
    </a>
  );
}
