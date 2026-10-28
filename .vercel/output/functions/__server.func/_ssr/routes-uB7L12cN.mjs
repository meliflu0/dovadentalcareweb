import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowLeft, a as Sparkles, f as HeartHandshake, l as MapPin, n as Users, o as Smile, r as Stethoscope, s as ShieldCheck, x as ArrowRight, y as Award } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as SectionHeading, h as site, i as FaqList, l as WA_MESSAGES, p as cn, r as CtaBand, s as Reveal, t as ArrowLink, u as WaButton } from "./primitives-Ap6MBr8j.mjs";
import { t as featuredServices } from "./services-DF38R5IA.mjs";
import { t as homeFaqs } from "./faq-CB7r8iFJ.mjs";
import { a as ServiceCard, i as ReviewsBlock, n as DoctorBlock, r as MissionVision, t as CasesGallery } from "./Blocks-CS3HbfxX.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uB7L12cN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-CAnNOf_o.webp";
var nosotros_default = "/assets/nosotros-DMqYqXJp.webp";
var carrusel_1_default = "/assets/carrusel_1-BgoDXFhp.webp";
var carrusel_2_default = "/assets/carrusel_2-D5rM1sl0.webp";
var carrusel_3_default = "/assets/carrusel_3-DI3sUJME.webp";
var carrusel_4_default = "/assets/carrusel_4-D16OMKy0.webp";
var carrusel5_default = "/assets/carrusel5-BYiSMfib.webm";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
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
var carouselItems = [
	{
		type: "image",
		src: carrusel_1_default,
		alt: "Imagen del consultorio 1"
	},
	{
		type: "image",
		src: carrusel_2_default,
		alt: "Imagen del consultorio 2"
	},
	{
		type: "image",
		src: carrusel_3_default,
		alt: "Imagen del consultorio 3"
	},
	{
		type: "image",
		src: carrusel_4_default,
		alt: "Imagen del consultorio 4"
	},
	{
		type: "video",
		src: carrusel5_default,
		alt: "Video del consultorio"
	}
];
function VerticalCarousel() {
	const [api, setApi] = import_react.useState(null);
	const [current, setCurrent] = import_react.useState(0);
	const videoRef = import_react.useRef(null);
	import_react.useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};
		api.on("select", onSelect);
		return () => {
			api.off("select", onSelect);
		};
	}, [api]);
	import_react.useEffect(() => {
		if (!videoRef.current) return;
		const video = videoRef.current;
		if (!(current === 4) && !video.paused) video.pause();
	}, [current]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
		opts: {
			align: "start",
			loop: true
		},
		setApi,
		className: "mx-auto w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
				className: "-ml-4",
				children: carouselItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
					className: "pl-4 basis-full md:basis-1/2 lg:basis-1/3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "overflow-hidden rounded-lg border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative aspect-[3/4] overflow-hidden bg-soft",
							children: item.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.src,
								alt: item.alt,
								className: "h-full w-full object-contain",
								loading: "lazy"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								ref: index === 4 ? videoRef : void 0,
								src: item.src,
								controls: true,
								className: "h-full w-full object-contain",
								preload: "metadata"
							})
						})
					})
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => api?.scrollPrev(),
				disabled: !api?.canScrollPrev(),
				className: "absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-ink/80 text-ink-foreground transition-colors hover:bg-ink disabled:opacity-50 disabled:cursor-not-allowed z-10",
				"aria-label": "Anterior",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => api?.scrollNext(),
				disabled: !api?.canScrollNext(),
				className: "absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-ink/80 text-ink-foreground transition-colors hover:bg-ink disabled:opacity-50 disabled:cursor-not-allowed z-10",
				"aria-label": "Siguiente",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center gap-2",
				children: carouselItems.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => api?.scrollTo(index),
					className: `h-2 w-2 rounded-full transition-colors ${index === current ? "bg-gold-dark" : "bg-ink-border"}`,
					"aria-label": `Ir a diapositiva ${index + 1}`
				}, index))
			})
		]
	});
}
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
							src: nosotros_default,
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Nuestro espacio",
						title: "Conoce nuestro consultorio"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalCarousel, {})
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
