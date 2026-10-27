import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/config/services";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/Blocks";

export const Route = createFileRoute("/servicios")({
  head: () => seo("Servicios odontológicos en Villavicencio | DOVA Dental Care", "Conoce los diez servicios de DOVA Dental Care en Villavicencio: odontología general, limpieza, blanqueamiento, ortodoncia, implantes y más.", "/servicios"),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: "Servicios" }]} eyebrow="Servicios" title="Servicios odontológicos en Villavicencio" text="En DOVA Dental Care ofrecemos servicios orientados al cuidado integral de la salud oral. Conoce nuestras opciones y solicita una valoración para recibir orientación según tus necesidades." />
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.slug} s={s} index={i} />)}
        </div>
      </section>
      <CtaBand secondary={false} />
    </>
  ),
});
