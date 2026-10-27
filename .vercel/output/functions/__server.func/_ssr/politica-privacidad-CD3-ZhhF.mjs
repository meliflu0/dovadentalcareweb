import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as site } from "./primitives-MUeTKxwE.mjs";
import { n as LegalPage } from "./LegalPage-BYkGvtMp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/politica-privacidad-CD3-ZhhF.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
	title: "Política de privacidad",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Información recogida" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Este sitio no almacena en servidores propios los datos escritos en el formulario de contacto. El formulario solo prepara un mensaje que tú decides enviar por WhatsApp." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Finalidades" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "La información que compartes se usa para responder tu solicitud y gestionar tu cita." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Interacción con WhatsApp" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Al continuar, se abre WhatsApp, servicio de un tercero con sus propias condiciones y política de privacidad." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Cookies y proveedores externos" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "El sitio no utiliza cookies propias de seguimiento. El mapa integrado de Google Maps y las fuentes tipográficas pueden ser servidos por Google, sujetos a sus políticas." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Seguridad y derechos" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Puedes ejercer tus derechos según nuestra ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/politica-tratamiento-datos",
				children: "Política de tratamiento de datos personales"
			}),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Contacto" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `mailto:${site.dataController.email}`,
			children: site.dataController.email
		}) })
	]
});
//#endregion
export { SplitComponent as component };
