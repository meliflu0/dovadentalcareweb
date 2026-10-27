import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, WaButton } from "@/components/site/primitives";
import { CasesGallery } from "@/components/site/Blocks";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const Route = createFileRoute("/casos-de-exito")({
  head: () => seo("Casos de éxito | DOVA Dental Care Villavicencio", "Casos clínicos autorizados de DOVA Dental Care en Villavicencio. Descubre cómo una valoración puede ayudarte a mejorar tu sonrisa.", "/casos-de-exito"),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: "Casos de éxito" }]} eyebrow="Casos de éxito" title="Resultados reales, sonrisas transformadas" text="Conoce algunos casos clínicos y descubre cómo una valoración profesional puede ayudarte a identificar opciones para mejorar tu sonrisa." />
      <section className="py-20 md:py-28">
        <div className="container-site">
          <CasesGallery />
        </div>
      </section>
      <CtaBand />
    </>
  ),
});
