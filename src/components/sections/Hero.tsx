import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import heroCityAsset from "@/assets/hero-city-hyderabad.jpg.asset.json";
import tgLogo from "@/assets/tg-rising-logo.png";


const heroCity = heroCityAsset.url;

type Slide = {
  eyebrow: string;
  headline: string;
  accent: string;
  tail: string;
  description: string;
  cta: { label: string; href: string };
  cta2: { label: string; href: string };
  badge: string;
};

const slides: Slide[] = [
  {
    eyebrow: "National Institute of Urban Management",
    headline: "Spearheading urban innovation for",
    accent: "Telangana",
    tail: "and across India.",
    description:
      "Telangana's premier institute for urban management — training the leaders, shaping the policies and engineering the digital systems that build tomorrow's cities.",
    cta: { label: "Explore programs", href: "#focus-areas" },
    cta2: { label: "About NIUM", href: "#about" },
    badge: "Flagship Mandate",
  },
  {
    eyebrow: "AI-Powered Integrated Command & Control",
    headline: "AI-ICCC — the operating system for",
    accent: "smart Telangana",
    tail: "cities.",
    description:
      "A live, AI-driven nerve centre integrating traffic, utilities, safety and citizen services across Telangana's urban clusters.",
    cta: { label: "Inside AI-ICCC", href: "#aiccc" },
    cta2: { label: "Watch AI-ICCC story", href: "#aiccc" },
    badge: "Live Projects",
  },
  {
    eyebrow: "Project Management · Hyderabad District",
    headline: "Reorganising coverage areas for",
    accent: "ASHAs & ANMs",
    tail: "in UPHCs of Hyderabad.",
    description:
      "Creating spatial data for the coverage areas of ASHAs and ANMs across Hyderabad district's UPHCs — ensuring net-zero left-out areas in last-mile public health delivery.",
    cta: { label: "Explore focus areas", href: "#focus-areas" },
    cta2: { label: "Project Management vertical", href: "#focus-areas" },
    badge: "Active PMU",
  },
  {
    eyebrow: "Training & Capacity Building",
    headline: "Building capacity for India's",
    accent: "urban leaders",
    tail: "— mayors, municipalities & missions.",
    description:
      "Flagship programmes for Mayors & Chairpersons, SBM 2.0 SPIU capacity building & IEC, ToT on City Sanitation Plans, and Municipal Bonds & Urban Infrastructure Financing.",
    cta: { label: "Explore programmes", href: "#focus-areas" },
    cta2: { label: "Capacity Building vertical", href: "#focus-areas" },
    badge: "Capacity Building",
  },
  {
    eyebrow: "Heritage · Shaikpet Sarai",

    headline: "Adaptive reuse of the 17th-century",
    accent: "Qutb Shahi",
    tail: "resthouse at Shaikpet.",
    description:
      "Consultancy for adaptive reuse and site development — protecting and culturally reactivating a 17th-century Qutb Shahi sarai once used by visitors to the Golconda Fort.",
    cta: { label: "Heritage portfolio", href: "#focus-areas" },
    cta2: { label: "Heritage vertical", href: "#focus-areas" },
    badge: "Heritage",
  },
];

const partners = [
  "MoHUA", "World Bank", "UN-Habitat", "ADB", "Smart Cities Mission",
  "AMRUT", "NITI Aayog", "Government of Telangana", "NIUA", "HUDCO", "TISS", "UNICEF",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [idx]);

  const cur = slides[idx];
  const go = (d: number) => setIdx((i) => (i + d + slides.length) % slides.length);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[var(--navy)] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCity}
          alt="Hyderabad cityscape"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/85 to-[var(--royal)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-[var(--navy)]/60" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--cyan-brand)]/20 blur-3xl" />
      <div className="absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-32 lg:pt-52">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/70">
              <span className="h-px w-10 bg-accent" />
              {cur.eyebrow}
            </div>

            {/* Horizontal headline — single flowing line */}
            <h1 className="mt-6 font-display font-bold leading-[1.08] tracking-tight text-[clamp(2rem,5vw,4.25rem)]">
              {cur.headline}{" "}
              <span className="text-[var(--gold)]">{cur.accent}</span>{" "}
              <span className="text-white/90">{cur.tail}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              {cur.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={cur.cta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] hover:brightness-95 transition"
              >
                {cur.cta.label}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href={cur.cta2.href}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Play size={12} className="ml-0.5" />
                </span>
                {cur.cta2.label}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider controls */}
        <div className="mt-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="h-11 w-11 rounded-full border border-white/25 bg-white/5 backdrop-blur flex items-center justify-center hover:bg-white/15 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="h-11 w-11 rounded-full border border-white/25 bg-white/5 backdrop-blur flex items-center justify-center hover:bg-white/15 transition"
            >
              <ChevronRight size={18} />
            </button>
            <span className="ml-3 font-display text-sm text-white/70 tabular-nums">
              {String(idx + 1).padStart(2, "0")}
              <span className="mx-2 text-white/30">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex-1 max-w-md flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show ${s.badge}`}
                className="group flex-1 text-left"
              >
                <div className="h-[3px] rounded-full bg-white/15 overflow-hidden">
                  <div
                    className={`h-full bg-accent transition-all duration-500 ${
                      i === idx ? "w-full" : i < idx ? "w-full opacity-40" : "w-0"
                    }`}
                  />
                </div>
                <div className={`mt-2 text-[10px] uppercase tracking-[0.2em] transition ${
                  i === idx ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}>
                  {s.badge}
                </div>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-3 py-2 shadow-[var(--shadow-elevated)]">
            <img src={tgLogo} alt="Telangana Rising" className="h-10 w-auto" />
          </div>
        </div>
      </div>

      {/* Partner marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-black/30 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              className="mx-8 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/55"
            >
              {p}
              <span className="ml-8 text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
