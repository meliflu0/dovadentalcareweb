import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Clock, h as CreditCard, l as MapPin, u as Mail } from "../_libs/lucide-react.mjs";
import { d as WhatsAppIcon, f as buildAppointmentMessage, g as waLink, h as site, m as isValidPhone, o as PageHero, u as WaButton } from "./primitives-Ap6MBr8j.mjs";
import { r as services } from "./services-DF38R5IA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-CeaPggfL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none focus:border-gold";
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		service: "",
		preferred: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [link, setLink] = (0, import_react.useState)(null);
	const set = (k) => (e) => setForm({
		...form,
		[k]: e.target.value
	});
	const submit = (e) => {
		e.preventDefault();
		const err = {};
		if (form.name.trim().length < 2) err.name = "Escribe tu nombre completo.";
		if (!isValidPhone(form.phone)) err.phone = "Escribe un teléfono válido.";
		if (!form.service) err.service = "Selecciona un servicio.";
		setErrors(err);
		if (Object.keys(err).length) return;
		const url = waLink(buildAppointmentMessage(form));
		setLink(url);
		window.open(url, "_blank", "noopener,noreferrer");
	};
	const info = [
		{
			icon: MapPin,
			t: "Dirección",
			d: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				site.address,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Barrio ",
				site.neighborhood
			] })
		},
		{
			icon: Clock,
			t: "Horario",
			d: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				site.hours.weekdays,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				site.hours.sunday
			] })
		},
		{
			icon: Mail,
			t: "Correo",
			d: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${site.email}`,
				className: "hover:text-gold-dark",
				children: site.email
			})
		},
		{
			icon: CreditCard,
			t: "Pagos",
			d: site.payments.join(", ")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
		crumbs: [{
			label: "Inicio",
			to: "/"
		}, { label: "Contacto" }],
		eyebrow: "Contacto",
		title: "Agenda tu cita en DOVA Dental Care",
		text: "Estamos en Villavicencio, Meta. Escríbenos para consultar nuestros servicios y solicitar una cita.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaButton, { children: "Escribir por WhatsApp" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.mapsUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "btn-outline-light",
				children: "Abrir en Google Maps"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `mailto:${site.email}`,
				className: "btn-outline-light",
				children: "Enviar correo"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-6",
					children: [info.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 border-b border-border pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.icon, {
							className: "mt-1 h-5 w-5 shrink-0 text-gold-dark",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-1",
							children: x.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: x.d
						})] })]
					}, x.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "mt-1 h-5 w-5 text-gold-dark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-1",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-muted-foreground hover:text-gold-dark",
							children: site.phoneDisplay
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-lg border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Ubicación de DOVA Dental Care en Google Maps",
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.8681054198306!2d-73.61637383046813!3d4.1270437373679885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e65c9623a4f%3A0x55da6cce854d538d!2sCl.%204%20%2316-57%2C%20Villavicencio%2C%20Meta!5e0!3m2!1sen!2sco!4v1793204633656!5m2!1sen!2sco",
						width: "600",
						height: "450",
						style: { border: 0 },
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "strict-origin-when-cross-origin",
						className: "block h-80 w-full"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: site.mapsUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-3 inline-block text-sm text-gold-dark underline",
					children: "Abrir ubicación en Google Maps"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				noValidate: true,
				className: "rounded-lg border border-border bg-soft p-6 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl",
						children: "Solicita tu cita"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Completa tus datos y continuaremos la conversación por WhatsApp."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-5 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [
									"Nombre completo *",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: field,
										value: form.name,
										onChange: set("name"),
										autoComplete: "name",
										"aria-invalid": !!errors.name
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-destructive",
										children: errors.name
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: [
									"Teléfono *",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: field,
										type: "tel",
										value: form.phone,
										onChange: set("phone"),
										autoComplete: "tel",
										"aria-invalid": !!errors.phone
									}),
									errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-destructive",
										children: errors.phone
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium md:col-span-2",
								children: [
									"Servicio de interés *",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: field,
										value: form.service,
										onChange: set("service"),
										"aria-invalid": !!errors.service,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Selecciona un servicio"
											}),
											services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s.name }, s.slug)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Otro / no estoy seguro" })
										]
									}),
									errors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-destructive",
										children: errors.service
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium md:col-span-2",
								children: ["Fecha u horario preferido", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: field,
									value: form.preferred,
									onChange: set("preferred"),
									placeholder: "Ej.: martes en la tarde"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium md:col-span-2",
								children: ["Mensaje adicional", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: field,
									rows: 4,
									value: form.message,
									onChange: set("message")
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "btn-gold mt-8 w-full md:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, {}), " Continuar por WhatsApp"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-xs leading-relaxed text-muted-foreground",
						children: [
							"Al continuar, serás redirigido a WhatsApp para enviar tu solicitud. Consulta nuestra ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/politica-tratamiento-datos",
								className: "underline",
								children: "Política de Tratamiento de Datos Personales"
							}),
							" para conocer cómo se gestionará la información que compartas."
						]
					}),
					link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						role: "status",
						className: "mt-5 rounded-md border border-gold/50 bg-background p-4 text-sm",
						children: [
							"Te estamos redirigiendo a WhatsApp. Tu cita aún no está confirmada. Si no se abrió, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "font-semibold text-gold-dark underline",
								children: "continúa aquí"
							}),
							"."
						]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
