import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as site } from "./primitives-MUeTKxwE.mjs";
import { n as LegalPage } from "./LegalPage-BYkGvtMp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aviso-privacidad-D2KYo0Tk.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LegalPage, {
	title: "Aviso de privacidad",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			site.dataController.name,
			", responsable de ",
			site.name,
			", recolecta y trata tus datos personales para gestionar solicitudes de citas, atender consultas, prestar servicios odontológicos y cumplir las obligaciones aplicables."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Puedes conocer, actualizar, rectificar o solicitar la supresión de tus datos en los casos previstos por la ley escribiendo a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${site.dataController.email}`,
				children: site.dataController.email
			}),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Consulta la ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/politica-tratamiento-datos",
				children: "Política de tratamiento de datos personales"
			}),
			" completa."
		] })
	]
});
//#endregion
export { SplitComponent as component };
