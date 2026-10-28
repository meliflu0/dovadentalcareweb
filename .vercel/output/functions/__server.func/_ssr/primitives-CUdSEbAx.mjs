import { r as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger$1, c as require_react, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, s as require_jsx_runtime, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronDown, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-CUdSEbAx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Odontología DOVA Dental Care",
	shortName: "DOVA Dental Care",
	city: "Villavicencio",
	region: "Meta",
	country: "Colombia",
	neighborhood: "Hacarítama",
	address: "Cl. 4 #16-57, Villavicencio, Meta, Colombia",
	streetAddress: "Cl. 4 #16-57",
	phoneDisplay: "+57 320 253 3409",
	phoneE164: "+573202533409",
	whatsappNumber: "573202533409",
	email: "dovadental@gmail.com",
	social: {
		instagram: "https://www.instagram.com/odontologiadovadental/",
		facebook: "https://www.facebook.com/profile.php?id=61595472553700",
		tiktok: "https://www.tiktok.com/@consultorio.odont44",
		googleReview: "https://g.page/r/CSQParFdBFfNEBM/review"
	},
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Cl. 4 #16-57, Villavicencio, Meta, Colombia"),
	mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Cl. 4 #16-57, Villavicencio, Meta, Colombia") + "&output=embed",
	hours: {
		weekdays: "Lunes a sábado: 9:00 a. m. – 8:00 p. m.",
		sunday: "Domingo: cerrado"
	},
	payments: [
		"Efectivo",
		"Tarjeta",
		"Transferencia bancaria",
		"Nequi",
		"Addi",
		"Sistecrédito"
	],
	doctor: {
		name: "Dubbling Orlando Vargas Ávila",
		role: "Odontólogo general",
		experience: "Más de 14 años de experiencia",
		education: "Odontólogo de la Universidad del Magdalena",
		photo: "/assets/odontologo-1-D9fGs98c.webp"
	},
	reviews: {
		verified: false,
		rating: 5,
		count: 10
	},
	dataController: {
		name: "Leydy Yulieth Barragán Vásquez",
		personType: "Persona natural",
		id: "1.116.545.297",
		nit: "1.116.545.297-1",
		rutAddress: "Cra. 8 # 13A-04, Aguazul, Casanare",
		email: "leidybarragan104@gmail.com",
		activity: "8620 — actividades de práctica médica y odontológica",
		startDate: "10 de octubre de 2022"
	},
	legalUpdated: "25 de octubre de 2026"
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var WA_MESSAGES = {
	general: "Hola, quiero agendar una cita en DOVA Dental Care.",
	doctor: "Hola, quiero agendar una cita con el odontologo Dubbling",
	valoracion: "Hola, quiero agendar una valoración para mejorar mi sonrisa"
};
function waLink(message = WA_MESSAGES.general) {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function buildAppointmentMessage(r) {
	return [
		"Hola, quiero solicitar una cita en DOVA Dental Care.",
		`Nombre: ${r.name.trim()}`,
		`Teléfono: ${r.phone.trim()}`,
		`Servicio de interés: ${r.service}`,
		`Fecha u horario preferido: ${r.preferred?.trim() || "Sin preferencia"}`,
		`Mensaje adicional: ${r.message?.trim() || "Ninguno"}`,
		"Gracias."
	].join("\n");
}
function isValidPhone(phone) {
	const digits = phone.replace(/\D/g, "");
	return /^[+\d\s().-]+$/.test(phone.trim()) && digits.length >= 7 && digits.length <= 15;
}
var logo_default = "/assets/logo-BtxDeL6C.jpg";
function Reveal({ children, delay = 0, className }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Logo({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo_default,
			alt: "DOVA Dental Care",
			className: "h-10 w-auto"
		})
	});
}
function WhatsAppIcon({ className = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" })
	});
}
function WaButton({ message, children, variant = "gold", className = "" }) {
	const cls = variant === "gold" ? "btn-gold" : variant === "dark" ? "btn-dark" : "btn-outline-light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(message),
		target: "_blank",
		rel: "noopener noreferrer",
		className: `${cls} ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}),
			" ",
			children
		]
	});
}
function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `text-3xl leading-tight md:text-5xl ${light ? "text-ink-foreground" : "text-foreground"}`,
				children: title
			}),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-base leading-relaxed md:text-lg ${light ? "text-ink-muted" : "text-muted-foreground"}`,
				children: text
			})
		]
	});
}
function PageHero({ eyebrow, title, text, crumbs, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink pb-16 pt-32 text-ink-foreground md:pb-24 md:pt-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [crumbs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: crumbs }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-5 text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-4xl text-4xl leading-[1.08] md:text-6xl",
					children: title
				}),
				text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted",
					children: text
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children
				})
			] })]
		})
	});
}
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Ruta de navegación",
		className: "mb-8 text-sm text-ink-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-2",
			children: items.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2",
				children: [c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: c.to,
					className: "hover:text-gold-light",
					children: c.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-current": "page",
					className: "text-ink-foreground",
					children: c.label
				}), i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "text-gold",
					children: "/"
				})]
			}, c.label))
		})
	});
}
function FaqList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "border-t border-border",
		children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `f${i}`,
			className: "border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "py-6 text-left font-display text-lg font-normal hover:no-underline md:text-xl [&>svg]:text-gold-dark",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "pb-6 text-base leading-relaxed text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
function CtaBand({ title = "Tu próxima sonrisa comienza con una valoración.", text = "Estamos aquí para orientarte y ayudarte a conocer las opciones de atención para tu salud oral.", message, cta = "Agendar cita por WhatsApp", secondary = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "pointer-events-none absolute inset-x-0 bottom-0 w-full text-gold/20",
			viewBox: "0 0 1200 200",
			fill: "none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 160 C 300 40, 900 40, 1200 160",
				stroke: "currentColor"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site relative text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mx-auto mb-8" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-3xl text-4xl leading-tight md:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-xl text-lg text-ink-muted",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
						message,
						children: cta
					}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/servicios",
						className: "btn-outline-light",
						children: "Conocer nuestros servicios"
					})]
				})
			] })
		})]
	});
}
function ArrowLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "link-arrow text-foreground hover:text-gold-dark",
		children: [
			children,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
		]
	});
}
//#endregion
export { Logo as a, SectionHeading as c, WhatsAppIcon as d, buildAppointmentMessage as f, waLink as h, FaqList as i, WA_MESSAGES as l, site as m, Breadcrumbs as n, PageHero as o, isValidPhone as p, CtaBand as r, Reveal as s, ArrowLink as t, WaButton as u };
