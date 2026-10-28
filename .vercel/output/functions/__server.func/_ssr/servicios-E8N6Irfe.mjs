import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as PageHero, r as CtaBand } from "./primitives-Ap6MBr8j.mjs";
import { r as services } from "./services-DF38R5IA.mjs";
import { a as ServiceCard } from "./Blocks-CS3HbfxX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicios-E8N6Irfe.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		crumbs: [{
			label: "Inicio",
			to: "/"
		}, { label: "Servicios" }],
		eyebrow: "Servicios",
		title: "Servicios odontológicos en Villavicencio",
		text: "En DOVA Dental Care ofrecemos servicios orientados al cuidado integral de la salud oral. Conoce nuestras opciones y solicita una valoración para recibir orientación según tus necesidades."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
				s,
				index: i
			}, s.slug))
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { secondary: false })
] });
//#endregion
export { SplitComponent as component };
