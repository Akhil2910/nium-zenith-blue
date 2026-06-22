import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import tgEmblem from "@/assets/tg-emblem.png";

const links = [
  { id: "about", label: "About" },
  { id: "focus-areas", label: "Focus Areas" },
  { id: "programs", label: "Programs" },
  { id: "partnerships", label: "Partnerships" },
  { id: "publications", label: "Publications" },
  { id: "events", label: "Events" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-24 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 group min-w-0">
          <img
            src={tgEmblem}
            alt="Government of Telangana"
            className="h-16 w-16 md:h-[68px] md:w-[68px] object-contain drop-shadow-md shrink-0"
          />
          <div className={`hidden sm:block h-12 w-px ${scrolled ? "bg-border" : "bg-white/20"}`} />
          <div className="relative shrink-0">
            <div className="h-16 w-16 md:h-[68px] md:w-[68px] rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-[var(--shadow-card)]">
              <span className="font-display font-bold text-primary-foreground text-2xl tracking-tight">N</span>
            </div>
            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-accent border-2 border-background" />
          </div>
          <div className="leading-tight min-w-0">
            <div className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
              NIUM
            </div>
            <div className={`hidden xl:block text-[10px] uppercase tracking-[0.18em] truncate ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              National Institute of Urban Management
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative px-2.5 py-2 text-[13px] font-medium rounded-md transition-colors whitespace-nowrap ${
                scrolled
                  ? active === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                  : active === l.id
                  ? "text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </a>
          ))}
          <div className={`ml-2 pl-3 border-l flex flex-col leading-tight ${scrolled ? "border-border" : "border-white/20"}`}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[var(--gold)] to-[var(--cyan-brand)] bg-clip-text text-transparent">
              Telangana
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[var(--gold)] to-[var(--cyan-brand)] bg-clip-text text-transparent">
              Rising
            </span>
          </div>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
