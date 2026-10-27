import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import { ControllerInfo, LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => seo("Términos y condiciones | DOVA Dental Care", "Términos y condiciones de uso del sitio web de Odontología DOVA Dental Care.", "/terminos-y-condiciones"),
  component: () => (
    <LegalPage title="Términos y condiciones">
      <h2>Titular del sitio</h2>
      <ControllerInfo />
      <h2>Aceptación</h2><p>Al usar este sitio aceptas estos términos.</p>
      <h2>Naturaleza informativa</h2><p>El contenido es informativo y no constituye diagnóstico ni sustituye una consulta odontológica. Las solicitudes enviadas no implican una cita confirmada.</p>
      <h2>Propiedad intelectual</h2><p>Textos, diseño y marca pertenecen a su titular. No se permite su reproducción sin autorización.</p>
      <h2>Usos permitidos</h2><p>El sitio debe usarse de forma lícita y sin afectar su funcionamiento.</p>
      <h2>Limitación de responsabilidad</h2><p>En la medida permitida por la ley, el titular no responde por decisiones tomadas solo con base en el contenido del sitio ni por interrupciones técnicas.</p>
      <h2>Enlaces externos</h2><p>Los enlaces a WhatsApp, redes sociales y Google se rigen por sus propias condiciones.</p>
      <h2>Modificaciones y legislación</h2><p>Estos términos pueden actualizarse. Se rigen por las leyes de la República de Colombia.</p>
      <h2>Contacto</h2><p><a href={`mailto:${site.email}`}>{site.email}</a></p>
    </LegalPage>
  ),
});
