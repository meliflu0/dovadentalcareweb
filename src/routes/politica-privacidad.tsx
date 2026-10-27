import { createFileRoute, Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => seo("Política de privacidad | DOVA Dental Care", "Cómo DOVA Dental Care trata la información que compartes a través de este sitio web y de WhatsApp.", "/politica-privacidad"),
  component: () => (
    <LegalPage title="Política de privacidad">
      <h2>Información recogida</h2>
      <p>Este sitio no almacena en servidores propios los datos escritos en el formulario de contacto. El formulario solo prepara un mensaje que tú decides enviar por WhatsApp.</p>
      <h2>Finalidades</h2>
      <p>La información que compartes se usa para responder tu solicitud y gestionar tu cita.</p>
      <h2>Interacción con WhatsApp</h2>
      <p>Al continuar, se abre WhatsApp, servicio de un tercero con sus propias condiciones y política de privacidad.</p>
      <h2>Cookies y proveedores externos</h2>
      <p>El sitio no utiliza cookies propias de seguimiento. El mapa integrado de Google Maps y las fuentes tipográficas pueden ser servidos por Google, sujetos a sus políticas.</p>
      <h2>Seguridad y derechos</h2>
      <p>Puedes ejercer tus derechos según nuestra <Link to="/politica-tratamiento-datos">Política de tratamiento de datos personales</Link>.</p>
      <h2>Contacto</h2>
      <p><a href={`mailto:${site.dataController.email}`}>{site.dataController.email}</a></p>
    </LegalPage>
  ),
});
