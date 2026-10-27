import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as PageHero, r as CtaBand } from "./primitives-MUeTKxwE.mjs";
import { n as posts } from "./faq-CYvd_boX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-rp1V5QBh.js
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"Prevención",
	"Higiene oral",
	"Odontología general",
	"Estética dental",
	"Ortodoncia",
	"Odontopediatría",
	"Rehabilitación oral"
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		crumbs: [{
			label: "Inicio",
			to: "/"
		}, { label: "Blog" }],
		eyebrow: "Blog",
		title: "Salud oral, explicada con claridad",
		text: "Pronto publicaremos artículos informativos para ayudarte a cuidar tu sonrisa. Este contenido no sustituye una consulta profesional."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-2",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground",
					children: c
				}, c))
			}), posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-lg bg-soft p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Aún no hay artículos publicados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						"Vuelve pronto. Mientras tanto, conoce nuestros ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							className: "text-gold-dark underline",
							children: "servicios"
						}),
						"."
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: p.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: p.excerpt
						})
					]
				}, p.slug))
			})]
		})
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
] });
//#endregion
export { SplitComponent as component };
