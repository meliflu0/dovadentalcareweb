import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/aviso-privacidad")({
  head: () => seo("Aviso de privacidad | DOVA Dental Care", "Aviso de privacidad breve de Odontología DOVA Dental Care sobre el tratamiento de tus datos personales.", "/aviso-privacidad"),
  component: () => (
    <LegalPage title="Aviso de privacidad">
      <p>{site.dataController.name}, responsable de {site.name}, recolecta y trata tus datos personales para gestionar solicitudes de citas, atender consultas, prestar servicios odontológicos y cumplir las obligaciones aplicables.</p>
      <p>Puedes conocer, actualizar, rectificar o solicitar la supresión de tus datos en los casos previstos por la ley escribiendo a <a href={`mailto:${site.dataController.email}`}>{site.dataController.email}</a>.</p>
      <p>Consulta la <Link to="/politica-tratamiento-datos">Política de tratamiento de datos personales</Link> completa.</p>
    </LegalPage>
  ),
});
