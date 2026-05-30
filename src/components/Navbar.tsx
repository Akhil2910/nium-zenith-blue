import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import tgLogo from "@/assets/tg-rising-logo.png";
import tgEmblem from "@/assets/tg-emblem.png";

const links = [
  { id: "gallery", label: "Gallery" },
  { id: "leadership", label: "Leadership" },
  { id: "about", label: "About" },
  { id: "verticals", label: "Verticals" },
  { id: "aiccc", label: "AI-ICCC" },
  { id: "partnerships", label: "Partnerships" },
  { id: "contact", label: "Contact" },
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
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-3 group min-w-0">
          <img
            src={tgEmblem}
            alt="Government of Telangana"
            className="h-12 w-12 object-contain drop-shadow-md shrink-0"
          />
          <div className={`hidden sm:block h-10 w-px ${scrolled ? "bg-border" : "bg-white/20"}`} />
          <div className="relative shrink-0">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-[var(--shadow-card)]">
              <span className="font-display font-bold text-primary-foreground text-lg tracking-tight">N</span>
            </div>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-accent border-2 border-background" />
          </div>
          <div className="leading-tight min-w-0">
            <div className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
              NIUM
            </div>
            <div className={`hidden md:block text-[10px] uppercase tracking-[0.18em] truncate ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              National Institute of Urban Management
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 shrink-0">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
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
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center whitespace-nowrap rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] hover:brightness-95 transition"
          >
            Get in touch
          </a>
          <div className={`ml-3 pl-3 border-l flex flex-col leading-tight ${scrolled ? "border-border" : "border-white/20"}`}>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[var(--gold)] to-[var(--cyan-brand)] bg-clip-text text-transparent`}>
              Telangana
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[var(--gold)] to-[var(--cyan-brand)] bg-clip-text text-transparent`}>
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
