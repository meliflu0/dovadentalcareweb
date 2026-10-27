import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as Check } from "../_libs/lucide-react.mjs";
import { i as FaqList, n as Breadcrumbs, r as CtaBand, s as Reveal, u as WaButton } from "./primitives-MUeTKxwE.mjs";
import { n as getService, r as services } from "./services-DF38R5IA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicePage-DilB1Zjf.js
var import_jsx_runtime = require_jsx_runtime();
var SITE_URL = "https://dovadentalcare.lovable.app";
function seo(title, description, path) {
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_CO"
			},
			{
				property: "og:url",
				content: SITE_URL + path
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + path
		}]
	};
}
function serviceHead(slug) {
	const s = getService(slug);
	return {
		...seo(s.metaTitle, s.metaDescription, `/${slug}`),
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Inicio",
						item: SITE_URL + "/"
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Servicios",
						item: SITE_URL + "/servicios"
					},
					{
						"@type": "ListItem",
						position: 3,
						name: s.name,
						item: `${SITE_URL}/${slug}`
					}
				]
			})
		}, {
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: s.faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	};
}
function ServicePage({ slug }) {
	const s = getService(slug);
	const related = s.related.map((r) => services.find((x) => x.slug === r)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink pb-20 pt-32 text-ink-foreground md:pt-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: [
					{
						label: "Inicio",
						to: "/"
					},
					{
						label: "Servicios",
						to: "/servicios"
					},
					{ label: s.name }
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-gold",
							children: "Servicio · Villavicencio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl leading-[1.08] md:text-6xl",
							children: s.h1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-ink-muted",
							children: s.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
								message: s.wa,
								children: s.cta
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#relacionados",
								className: "btn-outline-light",
								children: "Servicios relacionados"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.imageAlt,
							width: 1200,
							height: 900,
							className: "aspect-[4/3] w-full rounded-lg object-cover"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "¿En qué consiste?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed text-muted-foreground",
						children: s.what
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "02"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl",
							children: "¿Para quién puede ser adecuado?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-muted-foreground",
							children: s.forWho
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-warm py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "03"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "Beneficios potenciales"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 h-4 w-4 shrink-0 text-gold-dark" }), b]
						}, b))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "04"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl",
							children: "Cómo es el proceso"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 border-t border-border",
							children: s.process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-gold-dark",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.text
								})] })]
							}, p.title))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "05"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "Cuidados posteriores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3 text-muted-foreground",
						children: s.care.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-gold pl-4",
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 rounded-md bg-soft p-4 text-sm text-muted-foreground",
						children: [
							"El tratamiento adecuado depende de una valoración odontológica individual. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/aviso-informacion-medica",
								className: "underline",
								children: "Aviso médico"
							}),
							"."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "06"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-8 text-3xl md:text-4xl",
							children: "Preguntas frecuentes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: s.faqs })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "relacionados",
			className: "border-t border-border bg-soft py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl",
					children: "Servicios relacionados"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: `/${r.slug}`,
						className: "group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl group-hover:text-gold-dark",
							children: [r.name, " →"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: r.short
						})]
					}) }, r.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Agenda tu valoración por WhatsApp",
			text: s.intro,
			message: s.wa,
			cta: s.cta
		})
	] });
}
//#endregion
export { serviceHead as i, ServicePage as n, seo as r, SITE_URL as t };
