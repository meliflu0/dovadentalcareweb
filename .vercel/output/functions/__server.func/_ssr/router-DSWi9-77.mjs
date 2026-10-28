import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronDown, c as Menu, d as Instagram, i as Star, m as Facebook, t as X } from "../_libs/lucide-react.mjs";
import { a as Logo, d as WhatsAppIcon, h as waLink, l as WA_MESSAGES, m as site, u as WaButton } from "./primitives-CUdSEbAx.mjs";
import { r as services, t as featuredServices } from "./services-DF38R5IA.mjs";
import { i as serviceHead, r as seo, t as SITE_URL } from "./ServicePage-sqflyiCK.mjs";
import { t as homeFaqs } from "./faq-CB7r8iFJ.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DSWi9-77.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-LKD-KIUz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var nav = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/nosotros",
		label: "Nosotros"
	},
	{
		to: "/casos-de-exito",
		label: "Casos de éxito"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [svcOpen, setSvcOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const dropRef = (0, import_react.useRef)(null);
	const headerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setSvcOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
				setSvcOpen(false);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (dropRef.current && !dropRef.current.contains(e.target)) setSvcOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => {
			document.removeEventListener("mousedown", onClick);
		};
	}, []);
	const handleMobileLinkClick = () => {
		setOpen(false);
	};
	const linkCls = "text-sm font-medium text-ink-foreground/85 transition-colors hover:text-gold-light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: headerRef,
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-ink-border bg-ink/95 py-3 backdrop-blur`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site flex items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "DOVA Dental Care, inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Principal",
					className: "hidden items-center gap-8 lg:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: linkCls,
							children: "Inicio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: dropRef,
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": svcOpen,
								"aria-controls": "menu-servicios",
								onClick: () => setSvcOpen((v) => !v),
								className: `${linkCls} flex items-center gap-1`,
								children: ["Servicios ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}` })]
							}), svcOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "menu-servicios",
								className: "absolute left-1/2 top-full mt-4 w-[34rem] -translate-x-1/2 rounded-lg border border-ink-border bg-ink p-6 animate-in fade-in slide-in-from-top-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid grid-cols-2 gap-x-6 gap-y-1",
									children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: `/${s.slug}`,
										className: "block rounded py-2 text-sm text-ink-foreground/85 hover:text-gold-light",
										children: s.name
									}) }, s.slug))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 border-t border-ink-border pt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/servicios",
										className: "text-sm font-semibold text-gold",
										children: "Ver todos los servicios →"
									})
								})]
							})]
						}),
						nav.slice(1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: linkCls,
							children: n.label
						}, n.to))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
						message: WA_MESSAGES.doctor,
						className: "!px-4 !py-2.5 text-xs md:!px-5 md:text-sm",
						children: "Agendar cita"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-ink-foreground lg:hidden",
						"aria-label": open ? "Cerrar menú" : "Abrir menú",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 top-0 z-40 mt-[68px] max-h-[calc(100vh-68px)] overflow-y-auto bg-ink px-6 pb-12 pt-6 lg:hidden animate-in fade-in slide-in-from-top-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Móvil",
				className: "flex flex-col",
				children: [
					nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						onClick: handleMobileLinkClick,
						className: "border-b border-ink-border py-4 font-display text-2xl text-ink-foreground",
						children: n.label
					}, n.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-2 mt-8 text-gold",
						children: "Servicios"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/servicios",
						onClick: handleMobileLinkClick,
						className: "py-2 text-ink-foreground",
						children: "Todos los servicios"
					}),
					services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: `/${s.slug}`,
						onClick: handleMobileLinkClick,
						className: "py-2 text-ink-muted",
						children: s.name
					}, s.slug))
				]
			})
		})]
	});
}
var ext = {
	target: "_blank",
	rel: "noopener noreferrer"
};
function TikTok() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: "h-4 w-4",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z" })
	});
}
function Footer() {
	const social = [
		{
			href: site.social.instagram,
			label: "Instagram de DOVA Dental Care",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
		},
		{
			href: site.social.facebook,
			label: "Facebook de DOVA Dental Care",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
		},
		{
			href: site.social.tiktok,
			label: "TikTok de DOVA Dental Care",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TikTok, {})
		},
		{
			href: site.social.googleReview,
			label: "Perfil de Google de DOVA Dental Care",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4" })
		}
	];
	const head = "eyebrow mb-5 text-gold";
	const a = "text-sm text-ink-muted hover:text-gold-light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink-border bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { light: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xs text-sm leading-relaxed text-ink-muted",
						children: "DOVA Dental Care. Odontología integral con atención personalizada en Villavicencio, Meta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex gap-3",
						children: social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							...ext,
							"aria-label": s.label,
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-ink-border text-ink-muted hover:border-gold hover:text-gold-light",
							children: s.icon
						}) }, s.href))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: head,
					children: "Navegación"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: a,
							children: "Inicio"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							className: a,
							children: "Servicios"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/nosotros",
							className: a,
							children: "Nosotros"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/casos-de-exito",
							className: a,
							children: "Casos de éxito"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							className: a,
							children: "Contacto"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: head,
					children: "Servicios"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3",
					children: [featuredServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: `/${s.slug}`,
						className: a,
						children: s.name
					}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/servicios",
						className: "text-sm font-semibold text-gold",
						children: "Ver todos los servicios"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: head,
					children: "Contacto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-ink-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.mapsUrl,
								...ext,
								className: a,
								children: site.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Barrio ",
							site.neighborhood
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(),
							...ext,
							className: `${a} inline-flex items-center gap-2`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}),
								" ",
								site.phoneDisplay
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: a,
							children: site.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							site.hours.weekdays,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							site.hours.sunday
						] })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site flex flex-col gap-4 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					". Todos los derechos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/politica-tratamiento-datos",
							className: "hover:text-gold-light",
							children: "Tratamiento de datos"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/politica-privacidad",
							className: "hover:text-gold-light",
							children: "Privacidad"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/aviso-privacidad",
							className: "hover:text-gold-light",
							children: "Aviso de privacidad"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terminos-y-condiciones",
							className: "hover:text-gold-light",
							children: "Términos"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/aviso-informacion-medica",
							className: "hover:text-gold-light",
							children: "Aviso médico"
						}) })
					]
				})]
			})
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Escribir a DOVA Dental Care por WhatsApp",
		className: "group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-success px-4 text-ink-foreground transition-transform hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 group-hover:max-w-40 md:inline",
			children: "Escríbenos"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "Dentist",
	name: site.name,
	telephone: site.phoneE164,
	email: site.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: site.streetAddress,
		addressLocality: site.city,
		addressRegion: site.region,
		addressCountry: "CO"
	},
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		opens: "09:00",
		closes: "20:00"
	}],
	paymentAccepted: site.payments.join(", "),
	sameAs: [
		site.social.instagram,
		site.social.facebook,
		site.social.tiktok
	]
};
var Route$22 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "DOVA Dental Care | Odontología en Villavicencio" },
			{
				name: "description",
				content: "Odontología integral en Villavicencio, barrio Hacarítama. Agenda tu cita por WhatsApp."
			},
			{
				name: "theme-color",
				content: "#0B0B0B"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(jsonLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es-CO",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "contenido",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
var $$splitComponentImporter$20 = () => import("./routes-DQCxTB0w.mjs");
var Route$21 = createFileRoute("/")({
	head: () => {
		return {
			...seo("Odontología en Villavicencio | DOVA Dental Care", "Odontología integral en Villavicencio, barrio Hacarítama: limpieza, blanqueamiento, ortodoncia, implantes y más. Agenda tu cita por WhatsApp.", "/"),
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: homeFaqs.map((f) => ({
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
	},
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./aviso-informacion-medica-DW2VcOKF.mjs");
var Route$20 = createFileRoute("/aviso-informacion-medica")({
	head: () => seo("Aviso sobre información médica | DOVA Dental Care", "El contenido de DOVA Dental Care es informativo y no sustituye una valoración odontológica individual.", "/aviso-informacion-medica"),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./aviso-privacidad-CXiHjA3k.mjs");
var Route$19 = createFileRoute("/aviso-privacidad")({
	head: () => seo("Aviso de privacidad | DOVA Dental Care", "Aviso de privacidad breve de Odontología DOVA Dental Care sobre el tratamiento de tus datos personales.", "/aviso-privacidad"),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./blanqueamiento-dental-villavicencio-ba2Y-s5L.mjs");
var Route$18 = createFileRoute("/blanqueamiento-dental-villavicencio")({
	head: () => serviceHead("blanqueamiento-dental-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./blog-DZnXHT4M.mjs");
var Route$17 = createFileRoute("/blog")({
	head: () => seo("Blog de salud oral | DOVA Dental Care", "Artículos informativos sobre salud oral, prevención y cuidado dental del consultorio DOVA Dental Care en Villavicencio.", "/blog"),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./casos-de-exito-Bs2JAZxK.mjs");
var Route$16 = createFileRoute("/casos-de-exito")({
	head: () => seo("Casos de éxito | DOVA Dental Care Villavicencio", "Casos clínicos autorizados de DOVA Dental Care en Villavicencio. Descubre cómo una valoración puede ayudarte a mejorar tu sonrisa.", "/casos-de-exito"),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./cirugia-oral-villavicencio-BCe9V7GC.mjs");
var Route$15 = createFileRoute("/cirugia-oral-villavicencio")({
	head: () => serviceHead("cirugia-oral-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./contacto-j_ku21RH.mjs");
var Route$14 = createFileRoute("/contacto")({
	head: () => seo("Contacto y citas | DOVA Dental Care Villavicencio", "Agenda tu cita en DOVA Dental Care: Cl. 4 #16-57, barrio Hacarítama, Villavicencio. WhatsApp +57 320 253 3409. Lunes a sábado de 9 a. m. a 8 p. m.", "/contacto"),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./diseno-de-sonrisa-villavicencio-C-Z-_xD4.mjs");
var Route$13 = createFileRoute("/diseno-de-sonrisa-villavicencio")({
	head: () => serviceHead("diseno-de-sonrisa-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./estetica-dental-villavicencio-emomR4-n.mjs");
var Route$12 = createFileRoute("/estetica-dental-villavicencio")({
	head: () => serviceHead("estetica-dental-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./implantes-dentales-villavicencio-BwVaac5F.mjs");
var Route$11 = createFileRoute("/implantes-dentales-villavicencio")({
	head: () => serviceHead("implantes-dentales-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./limpieza-dental-villavicencio-DalXF119.mjs");
var Route$10 = createFileRoute("/limpieza-dental-villavicencio")({
	head: () => serviceHead("limpieza-dental-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./nosotros-C7feX6ot.mjs");
var Route$9 = createFileRoute("/nosotros")({
	head: () => seo("Nosotros | DOVA Dental Care Villavicencio", "Conoce DOVA Dental Care, consultorio odontológico en el barrio Hacarítama de Villavicencio, y al odontólogo Dubbling Orlando Vargas Ávila.", "/nosotros"),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./odontologia-general-villavicencio-z7djEzPb.mjs");
var Route$8 = createFileRoute("/odontologia-general-villavicencio")({
	head: () => serviceHead("odontologia-general-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./odontopediatria-villavicencio-BioF6SsM.mjs");
var Route$7 = createFileRoute("/odontopediatria-villavicencio")({
	head: () => serviceHead("odontopediatria-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./ortodoncia-villavicencio-BzGNDIok.mjs");
var Route$6 = createFileRoute("/ortodoncia-villavicencio")({
	head: () => serviceHead("ortodoncia-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./periodoncia-villavicencio-D4pTEQo8.mjs");
var Route$5 = createFileRoute("/periodoncia-villavicencio")({
	head: () => serviceHead("periodoncia-villavicencio"),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./politica-privacidad-BK0xwucu.mjs");
var Route$4 = createFileRoute("/politica-privacidad")({
	head: () => seo("Política de privacidad | DOVA Dental Care", "Cómo DOVA Dental Care trata la información que compartes a través de este sitio web y de WhatsApp.", "/politica-privacidad"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./politica-tratamiento-datos-DdxAFNEo.mjs");
var Route$3 = createFileRoute("/politica-tratamiento-datos")({
	head: () => seo("Política de tratamiento de datos | DOVA Dental Care", "Política de tratamiento de datos personales de Odontología DOVA Dental Care conforme a la Ley 1581 de 2012.", "/politica-tratamiento-datos"),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./servicios-CSOFAV7O.mjs");
var Route$2 = createFileRoute("/servicios")({
	head: () => seo("Servicios odontológicos en Villavicencio | DOVA Dental Care", "Conoce los diez servicios de DOVA Dental Care en Villavicencio: odontología general, limpieza, blanqueamiento, ortodoncia, implantes y más.", "/servicios"),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var paths = [
	"/",
	"/servicios",
	...services.map((s) => `/${s.slug}`),
	"/nosotros",
	"/casos-de-exito",
	"/contacto",
	"/blog",
	"/politica-tratamiento-datos",
	"/politica-privacidad",
	"/aviso-privacidad",
	"/terminos-y-condiciones",
	"/aviso-informacion-medica"
];
var Route$1 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${SITE_URL}${p}</loc></url>`).join("")}</urlset>`, { headers: { "Content-Type": "application/xml" } }) } } });
var $$splitComponentImporter = () => import("./terminos-y-condiciones-CWnLLKea.mjs");
var Route = createFileRoute("/terminos-y-condiciones")({
	head: () => seo("Términos y condiciones | DOVA Dental Care", "Términos y condiciones de uso del sitio web de Odontología DOVA Dental Care.", "/terminos-y-condiciones"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$21.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$22
	}),
	AvisoInformacionMedicaRoute: Route$20.update({
		id: "/aviso-informacion-medica",
		path: "/aviso-informacion-medica",
		getParentRoute: () => Route$22
	}),
	AvisoPrivacidadRoute: Route$19.update({
		id: "/aviso-privacidad",
		path: "/aviso-privacidad",
		getParentRoute: () => Route$22
	}),
	BlanqueamientoDentalVillavicencioRoute: Route$18.update({
		id: "/blanqueamiento-dental-villavicencio",
		path: "/blanqueamiento-dental-villavicencio",
		getParentRoute: () => Route$22
	}),
	BlogRoute: Route$17.update({
		id: "/blog",
		path: "/blog",
		getParentRoute: () => Route$22
	}),
	CasosDeExitoRoute: Route$16.update({
		id: "/casos-de-exito",
		path: "/casos-de-exito",
		getParentRoute: () => Route$22
	}),
	CirugiaOralVillavicencioRoute: Route$15.update({
		id: "/cirugia-oral-villavicencio",
		path: "/cirugia-oral-villavicencio",
		getParentRoute: () => Route$22
	}),
	ContactoRoute: Route$14.update({
		id: "/contacto",
		path: "/contacto",
		getParentRoute: () => Route$22
	}),
	DisenoDeSonrisaVillavicencioRoute: Route$13.update({
		id: "/diseno-de-sonrisa-villavicencio",
		path: "/diseno-de-sonrisa-villavicencio",
		getParentRoute: () => Route$22
	}),
	EsteticaDentalVillavicencioRoute: Route$12.update({
		id: "/estetica-dental-villavicencio",
		path: "/estetica-dental-villavicencio",
		getParentRoute: () => Route$22
	}),
	ImplantesDentalesVillavicencioRoute: Route$11.update({
		id: "/implantes-dentales-villavicencio",
		path: "/implantes-dentales-villavicencio",
		getParentRoute: () => Route$22
	}),
	LimpiezaDentalVillavicencioRoute: Route$10.update({
		id: "/limpieza-dental-villavicencio",
		path: "/limpieza-dental-villavicencio",
		getParentRoute: () => Route$22
	}),
	NosotrosRoute: Route$9.update({
		id: "/nosotros",
		path: "/nosotros",
		getParentRoute: () => Route$22
	}),
	OdontologiaGeneralVillavicencioRoute: Route$8.update({
		id: "/odontologia-general-villavicencio",
		path: "/odontologia-general-villavicencio",
		getParentRoute: () => Route$22
	}),
	OdontopediatriaVillavicencioRoute: Route$7.update({
		id: "/odontopediatria-villavicencio",
		path: "/odontopediatria-villavicencio",
		getParentRoute: () => Route$22
	}),
	OrtodonciaVillavicencioRoute: Route$6.update({
		id: "/ortodoncia-villavicencio",
		path: "/ortodoncia-villavicencio",
		getParentRoute: () => Route$22
	}),
	PeriodonciaVillavicencioRoute: Route$5.update({
		id: "/periodoncia-villavicencio",
		path: "/periodoncia-villavicencio",
		getParentRoute: () => Route$22
	}),
	PoliticaPrivacidadRoute: Route$4.update({
		id: "/politica-privacidad",
		path: "/politica-privacidad",
		getParentRoute: () => Route$22
	}),
	PoliticaTratamientoDatosRoute: Route$3.update({
		id: "/politica-tratamiento-datos",
		path: "/politica-tratamiento-datos",
		getParentRoute: () => Route$22
	}),
	ServiciosRoute: Route$2.update({
		id: "/servicios",
		path: "/servicios",
		getParentRoute: () => Route$22
	}),
	SitemapDotxmlRoute: Route$1.update({
		id: "/sitemap.xml",
		path: "/sitemap.xml",
		getParentRoute: () => Route$22
	}),
	TerminosYCondicionesRoute: Route.update({
		id: "/terminos-y-condiciones",
		path: "/terminos-y-condiciones",
		getParentRoute: () => Route$22
	})
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
