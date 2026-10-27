import { createFileRoute } from "@tanstack/react-router";
import clinic from "@/assets/clinic.jpg";
import { seo } from "@/lib/seo";
import { CtaBand, PageHero, Reveal } from "@/components/site/primitives";
import { DoctorBlock, MissionVision } from "@/components/site/Blocks";

const values = ["Ética profesional", "Responsabilidad", "Atención personalizada", "Prevención", "Calidez humana", "Compromiso con la salud oral"];

export const Route = createFileRoute("/nosotros")({
  head: () => seo("Nosotros | DOVA Dental Care Villavicencio", "Conoce DOVA Dental Care, consultorio odontológico en el barrio Hacarítama de Villavicencio, y al odontólogo Dubbling Orlando Vargas Ávila.", "/nosotros"),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Inicio", to: "/" }, { label: "Nosotros" }]} eyebrow="Nosotros" title="Conoce DOVA Dental Care" text="Un consultorio odontológico en el barrio Hacarítama de Villavicencio, dedicado al cuidado integral de la salud oral con atención cercana." />
      <section className="py-20 md:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Filosofía de atención</p>
            <h2 className="text-4xl leading-tight">Cada sonrisa merece atención individual</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Combinamos prevención, valoración profesional y acompañamiento cercano para que cada paciente tome decisiones informadas sobre su salud oral. Atendemos niños, jóvenes y adultos.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={clinic} alt="Consultorio odontológico luminoso (imagen ilustrativa)" width={1280} height={1600} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
            <p className="mt-2 text-xs text-muted-foreground">Imagen ilustrativa. Las fotografías reales del consultorio se añadirán próximamente.</p>
          </Reveal>
        </div>
      </section>
      <MissionVision />
      <section className="py-20 md:py-28">
        <div className="container-site">
          <h2 className="text-4xl">Nuestros valores</h2>
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <li key={v} className="flex items-baseline gap-4 border-t border-border py-6">
                <span className="font-display text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <DoctorBlock />
      <CtaBand />
    </>
  ),
});
