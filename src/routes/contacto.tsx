import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, CreditCard, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { seo } from "@/lib/seo";
import { buildAppointmentMessage, isValidPhone, waLink } from "@/lib/whatsapp";
import { PageHero, WaButton, WhatsAppIcon } from "@/components/site/primitives";

export const Route = createFileRoute("/contacto")({
  head: () => seo("Contacto y citas | DOVA Dental Care Villavicencio", "Agenda tu cita en DOVA Dental Care: Cl. 4 #16-47, barrio Hacarítama, Villavicencio. WhatsApp +57 320 253 3409. Lunes a sábado de 9 a. m. a 8 p. m.", "/contacto"),
  component: Contact,
});

const field = "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-gold";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", preferred: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [link, setLink] = useState<string | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (form.name.trim().length < 2) err.name = "Escribe tu nombre completo.";
    if (!isValidPhone(form.phone)) err.phone = "Escribe un teléfono válido.";
    if (!form.service) err.service = "Selecciona un servicio.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const url = waLink(buildAppointmentMessage(form));
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const info = [
    { icon: MapPin, t: "Dirección", d: <>{site.address}<br />Barrio {site.neighborhood}</> },
    { icon: Clock, t: "Horario", d: <>{site.hours.weekdays}<br />{site.hours.sunday}</> },
    { icon: Mail, t: "Correo", d: <a href={`mailto:${site.email}`} className="hover:text-gold-dark">{site.email}</a> },
    { icon: CreditCard, t: "Pagos", d: site.payments.join(", ") },
  ];

  return (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: "Contacto" }]} eyebrow="Contacto" title="Agenda tu cita en DOVA Dental Care" text="Estamos en Villavicencio, Meta. Escríbenos para consultar nuestros servicios y solicitar una cita.">
        <WaButton>Escribir por WhatsApp</WaButton>
        <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">Abrir en Google Maps</a>
        <a href={`mailto:${site.email}`} className="btn-outline-light">Enviar correo</a>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ul className="space-y-6">
              {info.map((x) => (
                <li key={x.t} className="flex gap-4 border-b border-border pb-6">
                  <x.icon className="mt-1 h-5 w-5 shrink-0 text-gold-dark" strokeWidth={1.5} />
                  <div><p className="eyebrow mb-1">{x.t}</p><p className="text-muted-foreground">{x.d}</p></div>
                </li>
              ))}
              <li className="flex gap-4"><WhatsAppIcon className="mt-1 h-5 w-5 text-gold-dark" /><div><p className="eyebrow mb-1">WhatsApp</p><a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold-dark">{site.phoneDisplay}</a></div></li>
            </ul>
            <div className="mt-10 overflow-hidden rounded-lg border border-border">
              <iframe title="Ubicación de DOVA Dental Care en Google Maps" src={site.mapsEmbed} width="600" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-80 w-full" />
            </div>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-gold-dark underline">Abrir ubicación en Google Maps</a>
          </div>

          <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-soft p-6 md:p-10">
            <h2 className="text-3xl">Solicita tu cita</h2>
            <p className="mt-2 text-sm text-muted-foreground">Completa tus datos y continuaremos la conversación por WhatsApp.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium">Nombre completo *
                <input className={field} value={form.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} />
                {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}
              </label>
              <label className="text-sm font-medium">Teléfono *
                <input className={field} type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" aria-invalid={!!errors.phone} />
                {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
              </label>
              <label className="text-sm font-medium md:col-span-2">Servicio de interés *
                <select className={field} value={form.service} onChange={set("service")} aria-invalid={!!errors.service}>
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                  <option>Otro / no estoy seguro</option>
                </select>
                {errors.service && <span className="mt-1 block text-xs text-destructive">{errors.service}</span>}
              </label>
              <label className="text-sm font-medium md:col-span-2">Fecha u horario preferido
                <input className={field} value={form.preferred} onChange={set("preferred")} placeholder="Ej.: martes en la tarde" />
              </label>
              <label className="text-sm font-medium md:col-span-2">Mensaje adicional
                <textarea className={field} rows={4} value={form.message} onChange={set("message")} />
              </label>
            </div>
            <button type="submit" className="btn-gold mt-8 w-full md:w-auto"><WhatsAppIcon /> Continuar por WhatsApp</button>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Al continuar, serás redirigido a WhatsApp para enviar tu solicitud. Consulta nuestra <Link to="/politica-tratamiento-datos" className="underline">Política de Tratamiento de Datos Personales</Link> para conocer cómo se gestionará la información que compartas.</p>
            {link && <p role="status" className="mt-5 rounded-md border border-gold/50 bg-background p-4 text-sm">Te estamos redirigiendo a WhatsApp. Tu cita aún no está confirmada. Si no se abrió, <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-dark underline">continúa aquí</a>.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
