import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, f as HeartHandshake, l as MapPin, n as Users, o as Smile, r as Stethoscope, s as ShieldCheck, y as Award } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { c as SectionHeading, i as FaqList, l as WA_MESSAGES, m as site, r as CtaBand, s as Reveal, t as ArrowLink, u as WaButton } from "./primitives-CUdSEbAx.mjs";
import { t as featuredServices } from "./services-DF38R5IA.mjs";
import { t as homeFaqs } from "./faq-CB7r8iFJ.mjs";
import { a as ServiceCard, i as ReviewsBlock, n as DoctorBlock, r as MissionVision, t as CasesGallery } from "./Blocks-DZxTEeB2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQCxTB0w.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-CAnNOf_o.webp";
var ease = [
	.22,
	1,
	.36,
	1
];
function Hero() {
	const reduce = useReducedMotion();
	const fade = (d) => reduce ? {} : {
		initial: {
			opacity: 0,
			y: 14
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .8,
			delay: d,
			ease
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "",
				className: "h-full w-full object-cover object-center",
				width: 1920,
				height: 1080,
				priority: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40 lg:from-ink lg:via-ink/75 lg:to-ink/50" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site relative z-10 grid min-h-[100svh] items-center pb-16 pt-32 lg:pt-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fade(.1),
						className: "eyebrow mb-7 text-gold",
						children: "Odontología integral · Villavicencio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						...fade(.25),
						className: "text-[2.6rem] leading-[1.04] sm:text-5xl lg:text-[4.5rem]",
						children: [
							"Odontología integral en Villavicencio para una sonrisa ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-gold-light",
								children: "sana, estética"
							}),
							" y duradera"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...fade(.45),
						className: "mt-8 max-w-xl text-lg leading-relaxed text-ink-muted/90",
						children: "En DOVA Dental Care cuidamos tu salud oral con atención personalizada y tratamientos enfocados en el bienestar y la estética de tu sonrisa. Atendemos a niños, jóvenes y adultos en el barrio Hacarítama, Villavicencio."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade(.6),
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
							message: WA_MESSAGES.doctor,
							children: "Agendar cita por WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							className: "btn-outline-light",
							children: "Descubrir nuestros servicios"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
						...fade(.75),
						className: "mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-border/50 pt-6 text-sm text-ink-muted/80 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Más de 14 años de experiencia" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Atención personalizada" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "General, estética, ortodoncia e implantes" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Barrio Hacarítama" })
						]
					})
				]
			})
		})]
	});
}
var trust = [
	{
		icon: Award,
		t: "Más de 14 años de experiencia"
	},
	{
		icon: HeartHandshake,
		t: "Atención personalizada"
	},
	{
		icon: ShieldCheck,
		t: "Cuidado de la salud oral"
	},
	{
		icon: MapPin,
		t: "Ubicación en Villavicencio"
	}
];
var reasons = [
	{
		icon: Stethoscope,
		t: "Técnicas modernas",
		d: "Procedimientos seleccionados según la valoración y el plan de tratamiento."
	},
	{
		icon: ShieldCheck,
		t: "Prevención",
		d: "Promovemos hábitos y cuidados que ayudan a mantener una buena salud oral."
	},
	{
		icon: Users,
		t: "Calidez humana",
		d: "Una atención cercana para niños, jóvenes y adultos."
	},
	{
		icon: MapPin,
		t: "Ubicación",
		d: "Estamos en el barrio Hacarítama, Villavicencio, Meta."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-label": "Por qué confiar en nosotros",
			className: "border-b border-border bg-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "container-site grid grid-cols-2 md:grid-cols-4",
				children: trust.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `flex items-center gap-3 py-7 text-sm font-medium md:justify-center ${i % 2 ? "pl-4" : ""} md:pl-0 ${i > 0 ? "md:border-l md:border-border" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.icon, {
						className: "h-5 w-5 shrink-0 text-gold-dark",
						strokeWidth: 1.5,
						"aria-hidden": "true"
					}), x.t]
				}, x.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Servicios",
						title: "Servicios odontológicos en Villavicencio",
						text: "Encuentra la atención que necesitas para cuidar tu salud oral y mejorar tu sonrisa con un plan adaptado a ti."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
						to: "/servicios",
						children: "Explorar todos los servicios"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: featuredServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
						s,
						index: i
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-warm py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Por qué DOVA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl leading-tight md:text-5xl",
						children: "Atención odontológica cercana, ética y personalizada"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
						children: "En DOVA Dental Care creemos que cada sonrisa merece atención individual. Nuestro enfoque combina prevención, valoración profesional y acompañamiento cercano para ayudarte a tomar decisiones informadas sobre tu salud oral."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-gold-dark",
						children: "Experiencia"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Más de 14 años de trayectoria odontológica."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-gold-dark",
						children: "A tu medida"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Cada paciente recibe una orientación adaptada a sus necesidades."
					})] })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "Elementos de higiene oral sobre lino (imagen ilustrativa)",
							width: 1200,
							height: 900,
							loading: "lazy",
							className: "aspect-[16/9] w-full rounded-lg object-cover"
						})
					}), reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .07,
						className: "border-t border-gold/50 pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
								className: "mb-3 h-5 w-5 text-gold-dark",
								strokeWidth: 1.5,
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: r.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: r.d
							})
						]
					}, r.t))]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Casos de éxito",
						title: "Resultados reales, sonrisas transformadas",
						text: "Conoce algunos casos clínicos y descubre cómo una valoración profesional puede ayudar a identificar opciones para mejorar tu sonrisa."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLink, {
						to: "/casos-de-exito",
						children: "Ver casos de éxito"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasesGallery, {}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionVision, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24 md:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Resolvemos tus dudas",
						title: "Preguntas frecuentes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "h-4 w-4 text-gold-dark" }),
							"¿No encuentras tu respuesta? ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-gold-dark underline",
								href: `https://wa.me/${site.whatsappNumber}`,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Escríbenos"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold-dark" }),
							"Pagos: ",
							site.payments.join(", "),
							"."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: homeFaqs })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
