import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { m as site, o as PageHero } from "./primitives-MUeTKxwE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-BYkGvtMp.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		crumbs: [{
			label: "Inicio",
			to: "/"
		}, { label: title }],
		eyebrow: "Información legal",
		title,
		text: `Última actualización: ${site.legalUpdated}.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-10 max-w-3xl rounded-md border border-gold/50 bg-soft p-4 text-sm text-muted-foreground",
				children: "Documento preparado para revisión profesional antes de su publicación definitiva."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "prose-legal max-w-3xl",
				children
			})]
		})
	})] });
}
function ControllerInfo() {
	const c = site.dataController;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			"Responsable: ",
			c.name,
			" (",
			c.personType,
			"), C.C. ",
			c.id,
			", NIT ",
			c.nit
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Nombre comercial: ", site.name] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			"Dirección registrada: ",
			c.rutAddress,
			". Consultorio: ",
			site.address
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Correo de protección de datos: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `mailto:${c.email}`,
			children: c.email
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
			"Correo operativo: ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${site.email}`,
				children: site.email
			}),
			" · Teléfono: ",
			site.phoneDisplay
		] })
	] });
}
//#endregion
export { LegalPage as n, ControllerInfo as t };
