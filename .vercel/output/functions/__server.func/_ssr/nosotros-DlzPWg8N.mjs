import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as PageHero, r as CtaBand, s as Reveal } from "./primitives-Ap6MBr8j.mjs";
import { t as clinic_default } from "./clinic-D-lO2VIu.mjs";
import { n as DoctorBlock, r as MissionVision } from "./Blocks-CS3HbfxX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nosotros-DlzPWg8N.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	"Ética profesional",
	"Responsabilidad",
	"Atención personalizada",
	"Prevención",
	"Calidez humana",
	"Compromiso con la salud oral"
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		crumbs: [{
			label: "Inicio",
			to: "/"
		}, { label: "Nosotros" }],
		eyebrow: "Nosotros",
		title: "Conoce DOVA Dental Care",
		text: "Un consultorio odontológico en el barrio Hacarítama de Villavicencio, dedicado al cuidado integral de la salud oral con atención cercana."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid items-center gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "Filosofía de atención"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl leading-tight",
					children: "Cada sonrisa merece atención individual"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed text-muted-foreground",
					children: "Combinamos prevención, valoración profesional y acompañamiento cercano para que cada paciente tome decisiones informadas sobre su salud oral. Atendemos niños, jóvenes y adultos."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .1,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: clinic_default,
					alt: "Consultorio odontológico luminoso (imagen ilustrativa)",
					width: 1280,
					height: 1600,
					loading: "lazy",
					className: "aspect-[4/3] w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: "Imagen ilustrativa. Las fotografías reales del consultorio se añadirán próximamente."
				})]
			})]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionVision, {}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl",
				children: "Nuestros valores"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3",
				children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline gap-4 border-t border-border py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-gold-dark",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl",
						children: v
					})]
				}, v))
			})]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorBlock, {}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
] });
//#endregion
export { SplitComponent as component };
