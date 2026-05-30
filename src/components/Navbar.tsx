import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import tgLogo from "@/assets/tg-rising-logo.png";

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
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-[var(--shadow-card)]">
              <span className="font-display font-bold text-primary-foreground text-lg tracking-tight">N</span>
            </div>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-accent border-2 border-background" />
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
              NIUM
            </div>
            <div className={`text-[10px] uppercase tracking-[0.18em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              National Institute of Urban Management
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
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
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-card)] hover:brightness-95 transition"
          >
            Get in touch
          </a>
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
