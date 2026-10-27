import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";
import { seo } from "@/lib/seo";
import { ControllerInfo, LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-tratamiento-datos")({
  head: () => seo("Política de tratamiento de datos | DOVA Dental Care", "Política de tratamiento de datos personales de Odontología DOVA Dental Care conforme a la Ley 1581 de 2012.", "/politica-tratamiento-datos"),
  component: () => (
    <LegalPage title="Política de tratamiento de datos personales">
      <p>Esta política se adopta como marco de referencia de la Ley 1581 de 2012 y sus normas reglamentarias en Colombia.</p>
      <h2>1. Responsable del tratamiento</h2>
      <ControllerInfo />
      <h2>2. Finalidades</h2>
      <ul><li>Gestionar solicitudes de citas y responder consultas.</li><li>Prestar servicios odontológicos y realizar seguimiento.</li><li>Elaborar y custodiar la historia clínica.</li><li>Cumplir obligaciones legales, contables y sanitarias.</li><li>Enviar recordatorios relacionados con la atención, cuando el titular lo autorice.</li></ul>
      <h2>3. Datos tratados</h2>
      <p>Datos de identificación y contacto (nombre, teléfono, correo), información sobre el servicio de interés y, en el contexto de la atención, datos de salud.</p>
      <h2>4. Datos sensibles y de salud</h2>
      <p>Los datos de salud son sensibles. Su tratamiento requiere autorización previa, expresa e informada, salvo las excepciones legales. El titular no está obligado a autorizar el tratamiento de datos sensibles. Los datos de niños, niñas y adolescentes se tratan respetando su interés superior y con autorización de su representante legal.</p>
      <h2>5. Historias clínicas</h2>
      <p>Las historias clínicas se conservan con reserva y durante los plazos exigidos por la normativa sanitaria aplicable.</p>
      <h2>6. Derechos de los titulares</h2>
      <ul><li>Conocer, actualizar y rectificar sus datos.</li><li>Solicitar prueba de la autorización.</li><li>Ser informado sobre el uso dado a sus datos.</li><li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li><li>Revocar la autorización o solicitar la supresión cuando proceda.</li><li>Acceder gratuitamente a sus datos.</li></ul>
      <h2>7. Consultas y reclamos</h2>
      <p>Escribe a <a href={`mailto:${site.dataController.email}`}>{site.dataController.email}</a>. Las consultas se atenderán en un máximo de diez (10) días hábiles y los reclamos en un máximo de quince (15) días hábiles, prorrogables en los términos de la ley.</p>
      <h2>8. Seguridad y conservación</h2>
      <p>Se aplican medidas razonables de seguridad para proteger la información. Los datos se conservan durante el tiempo necesario para las finalidades descritas y las obligaciones legales.</p>
      <h2>9. Transferencias y transmisiones</h2>
      <p>Las comunicaciones iniciadas por WhatsApp se procesan a través de dicho servicio, sujeto a sus propias políticas. No se venden datos personales a terceros.</p>
      <h2>10. Vigencia</h2>
      <p>Esta política rige desde su publicación. Última actualización: {site.legalUpdated}.</p>
    </LegalPage>
  ),
});
