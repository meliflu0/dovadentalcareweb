import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowUpRight, i as Star, p as GraduationCap } from "../_libs/lucide-react.mjs";
import { h as site, l as WA_MESSAGES, s as Reveal, u as WaButton } from "./primitives-Ap6MBr8j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Blocks-CS3HbfxX.js
var import_jsx_runtime = require_jsx_runtime();
var cases = [{
	id: "case-1",
	treatment: "Tratamiento estético dental",
	description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
	beforeImage: "/assets/ANTES_1-J46cgGL3.jpeg",
	afterImage: "/assets/DESPUES_!-N0x3WVx7.jpeg",
	beforeAlt: "Sonrisa antes del tratamiento odontológico",
	afterAlt: "Sonrisa después del tratamiento odontológico"
}, {
	id: "case-2",
	treatment: "Tratamiento estético dental",
	description: "Mejora de la apariencia de la sonrisa mediante tratamiento odontológico",
	beforeImage: "/assets/ANTES_2-CKwdqKhQ.jpeg",
	afterImage: "/assets/DESPUES_2-DKGUq-0s.jpeg",
	beforeAlt: "Sonrisa antes del tratamiento odontológico",
	afterAlt: "Sonrisa después del tratamiento odontológico"
}];
function ServiceCard({ s, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: index % 3 * .08,
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-500 hover:border-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: `/${s.slug}`,
				className: "relative block aspect-[4/3] overflow-hidden",
				"aria-label": `Ver ${s.name}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.imageAlt,
					width: 1200,
					height: 900,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground",
					children: String(index + 1).padStart(2, "0")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/${s.slug}`,
							className: "flex items-start justify-between gap-3 hover:text-gold-dark",
							children: [
								s.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 h-5 w-5 shrink-0 text-gold-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: s.short
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(s.wa)}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-6 text-sm font-semibold text-gold-dark transition-transform group-hover:translate-x-1",
						children: [s.cardCta, " →"]
					})
				]
			})]
		})
	});
}
function DoctorBlock() {
	const d = site.doctor;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink py-24 text-ink-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "order-2 md:order-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto aspect-[4/5] w-full max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-3 arch-mask border border-gold/40",
						"aria-hidden": "true"
					}), d.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.photo,
						alt: `Odontólogo ${d.name}`,
						className: "arch-mask h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "arch-mask flex h-full w-full flex-col items-center justify-center gap-4 bg-ink-soft text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-7xl text-gold",
							children: "DV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "px-8 text-xs uppercase tracking-[0.25em] text-ink-muted",
							children: [
								"Fotografía del odontólogo",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"próximamente"
							]
						})]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "order-1 md:order-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5 text-gold",
						children: "Conoce a tu odontólogo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl leading-tight md:text-5xl",
						children: d.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-gold-light",
						children: d.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule my-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "max-w-xl text-lg leading-relaxed text-ink-muted",
						children: [
							"El odontólogo ",
							d.name,
							" cuenta con más de 14 años de experiencia en la atención odontológica integral. Su práctica se enfoca en el diagnóstico, la prevención, la estética dental y el acompañamiento cercano de cada paciente, buscando soluciones funcionales y naturales según las necesidades de cada caso."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid max-w-lg grid-cols-2 gap-6 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-ink-muted",
							children: "Experiencia"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-semibold",
							children: d.experience
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "flex items-center gap-1.5 text-ink-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-gold" }), "Formación"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-semibold",
							children: d.education
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
							message: WA_MESSAGES.doctor,
							children: "Agendar cita con el odontólogo Dubbling"
						})
					})
				]
			})]
		})
	});
}
function MissionVision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-warm py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: "Misión y visión"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl",
				children: "Nuestro propósito"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-12 md:grid-cols-2 md:gap-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:border-r md:border-border md:pr-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-5 text-2xl italic text-gold-dark",
						children: "Misión"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: "En DOVA Dental Care tenemos la misión de transformar sonrisas y mejorar la calidad de vida de nuestros pacientes, brindando servicios odontológicos integrales con calidad, ética, responsabilidad y calidez humana. Nos comprometemos a ofrecer una atención personalizada, utilizando técnicas modernas y promoviendo la prevención y el cuidado de la salud oral, para que cada persona sonría con confianza, seguridad y felicidad."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .1,
					className: "md:pl-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-5 text-2xl italic text-gold-dark",
						children: "Visión"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: "Ser un consultorio odontológico reconocido por su excelencia, innovación, compromiso y calidad humana, convirtiéndonos en la mejor elección para quienes buscan una sonrisa sana, hermosa y duradera. En DOVA Dental Care soñamos con crecer cada día, dejar huellas positivas en la vida de nuestros pacientes y construir un futuro en el que cada sonrisa refleje bienestar, confianza y felicidad."
					})]
				})]
			})]
		})
	});
}
function ReviewsBlock() {
	const r = site.reviews;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-site",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-8 rounded-lg border border-border bg-soft p-10 md:flex-row md:items-center md:p-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex gap-1 text-gold",
						"aria-hidden": "true",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl",
						children: "Lo que opinan nuestros pacientes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted-foreground",
						children: r.verified ? `Calificación de ${r.rating} estrellas con más de ${r.count} opiniones en Google.` : "Consulta las opiniones y comparte tu experiencia en nuestro perfil de Google."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.social.googleReview,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-dark shrink-0",
					children: "Ver y dejar reseñas"
				})]
			}) })
		})
	});
}
function CasesEmpty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-dashed border-gold/50 bg-soft p-10 text-center md:p-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mx-auto mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: "Galería en preparación"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-lg text-muted-foreground",
				children: "Esta galería se completará con casos clínicos reales, publicados con la autorización de cada paciente."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, {
					message: WA_MESSAGES.valoracion,
					children: "Quiero una valoración"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-8 max-w-md text-xs text-muted-foreground",
				children: "Los resultados pueden variar según el diagnóstico, las condiciones individuales y el tratamiento indicado para cada paciente."
			})
		]
	});
}
function CasesGallery() {
	if (cases.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CasesEmpty, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-12 md:grid-cols-2",
		children: cases.map((c, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: index * .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "overflow-hidden rounded-lg border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden border-r border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-3 top-3 z-10 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-gold",
							children: "ANTES"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.beforeImage,
							alt: c.beforeAlt,
							width: 600,
							height: 450,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-3 top-3 z-10 rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-gold",
							children: "DESPUÉS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.afterImage,
							alt: c.afterAlt,
							width: 600,
							height: 450,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})]
					})]
				})
			})
		}, c.id))
	});
}
//#endregion
export { ServiceCard as a, ReviewsBlock as i, DoctorBlock as n, MissionVision as r, CasesGallery as t };
