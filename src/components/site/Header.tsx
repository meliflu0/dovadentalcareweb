import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "@/config/services";
import { Logo, WaButton } from "./primitives";
import { WA_MESSAGES } from "@/lib/whatsapp";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/casos-de-exito", label: "Casos de éxito" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const dropRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => { setOpen(false); setSvcOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setSvcOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); };
  }, [open]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => { if (dropRef.current && !dropRef.current.contains(e.target as Node)) setSvcOpen(false); };
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("mousedown", onClick); };
  }, []);

  const handleMobileLinkClick = () => {
    setOpen(false);
  };

  const linkCls = "text-sm font-medium text-ink-foreground/85 transition-colors hover:text-gold-light";

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-ink-border bg-ink/95 py-3 backdrop-blur`}>
      <div className="container-site flex items-center justify-between gap-6">
        <Link to="/" aria-label="DOVA Dental Care, inicio"><Logo light /></Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={linkCls}>Inicio</Link>
          <div ref={dropRef} className="relative">
            <button
              type="button"
              aria-expanded={svcOpen}
              aria-controls="menu-servicios"
              onClick={() => setSvcOpen((v) => !v)}
              className={`${linkCls} flex items-center gap-1`}
            >
              Servicios <ChevronDown className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div id="menu-servicios" className="absolute left-1/2 top-full mt-4 w-[34rem] -translate-x-1/2 rounded-lg border border-ink-border bg-ink p-6 animate-in fade-in slide-in-from-top-1">
                <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${s.slug}`} className="block rounded py-2 text-sm text-ink-foreground/85 hover:text-gold-light">{s.name}</Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-ink-border pt-4">
                  <Link to="/servicios" className="text-sm font-semibold text-gold">Ver todos los servicios →</Link>
                </div>
              </div>
            )}
          </div>
          {nav.slice(1).map((n) => <Link key={n.to} to={n.to} className={linkCls}>{n.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <WaButton message={WA_MESSAGES.doctor} className="!px-4 !py-2.5 text-xs md:!px-5 md:text-sm">Agendar cita</WaButton>
          <button type="button" className="text-ink-foreground lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-0 z-40 mt-[68px] max-h-[calc(100vh-68px)] overflow-y-auto bg-ink px-6 pb-12 pt-6 lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav aria-label="Móvil" className="flex flex-col">
            {nav.map((n) => <Link key={n.to} to={n.to} onClick={handleMobileLinkClick} className="border-b border-ink-border py-4 font-display text-2xl text-ink-foreground">{n.label}</Link>)}
            <p className="eyebrow mb-2 mt-8 text-gold">Servicios</p>
            <Link to="/servicios" onClick={handleMobileLinkClick} className="py-2 text-ink-foreground">Todos los servicios</Link>
            {services.map((s) => <Link key={s.slug} to={`/${s.slug}`} onClick={handleMobileLinkClick} className="py-2 text-ink-muted">{s.name}</Link>)}
          </nav>
        </div>
      )}
    </header>
  );
}
