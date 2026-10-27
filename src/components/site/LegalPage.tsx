import type { ReactNode } from "react";
import { site } from "@/config/site";
import { PageHero } from "./primitives";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: title }]} eyebrow="Información legal" title={title} text={`Última actualización: ${site.legalUpdated}.`} />
      <section className="py-16 md:py-24">
        <div className="container-site">
          <p className="mb-10 max-w-3xl rounded-md border border-gold/50 bg-soft p-4 text-sm text-muted-foreground">Documento preparado para revisión profesional antes de su publicación definitiva.</p>
          <article className="prose-legal max-w-3xl">{children}</article>
        </div>
      </section>
    </>
  );
}

export function ControllerInfo() {
  const c = site.dataController;
  return (
    <ul>
      <li>Responsable: {c.name} ({c.personType}), C.C. {c.id}, NIT {c.nit}</li>
      <li>Nombre comercial: {site.name}</li>
      <li>Dirección registrada: {c.rutAddress}. Consultorio: {site.address}</li>
      <li>Correo de protección de datos: <a href={`mailto:${c.email}`}>{c.email}</a></li>
      <li>Correo operativo: <a href={`mailto:${site.email}`}>{site.email}</a> · Teléfono: {site.phoneDisplay}</li>
    </ul>
  );
}
