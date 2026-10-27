import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/aviso-informacion-medica")({
  head: () => seo("Aviso sobre información médica | DOVA Dental Care", "El contenido de DOVA Dental Care es informativo y no sustituye una valoración odontológica individual.", "/aviso-informacion-medica"),
  component: () => (
    <LegalPage title="Aviso sobre información médica">
      <ul>
        <li>El contenido de este sitio es informativo.</li>
        <li>Todo diagnóstico requiere una evaluación odontológica individual.</li>
        <li>Los tratamientos dependen de las condiciones de cada paciente.</li>
        <li>Las imágenes de resultados no garantizan resultados idénticos. Algunas imágenes del sitio son ilustrativas y no corresponden a pacientes ni instalaciones reales.</li>
        <li>Ante síntomas importantes (dolor intenso, inflamación, fiebre o sangrado persistente), busca atención profesional oportuna.</li>
      </ul>
    </LegalPage>
  ),
});
