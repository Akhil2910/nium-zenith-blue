import { motion } from "framer-motion";
import { ArrowRight, Building2, Droplets, Landmark, GraduationCap, Cpu } from "lucide-react";
import tgLogo from "@/assets/tg-rising-logo.png";

const pillars = [
  { icon: Building2, label: "Urban Development" },
  { icon: Droplets, label: "Sanitation" },
  { icon: Landmark, label: "Heritage" },
  { icon: GraduationCap, label: "Capacity Building" },
  { icon: Cpu, label: "IT & Digital" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* layered glows */}
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[var(--cyan-brand)]/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* giant pillar word backdrop */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden">
        <div className="font-display font-black uppercase text-white/[0.04] text-[14vw] leading-[0.85] whitespace-nowrap tracking-tighter px-6">
          Urban · Sanitation · Heritage · Capacity · IT
        </div>
      </div>

      {/* Telangana emblem top */}
      <div className="absolute top-24 right-6 md:right-10 z-10">
        <div className="rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-[var(--shadow-elevated)] flex items-center gap-3">
          <img src={tgLogo} alt="Telangana Rising" className="h-14 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Government of</div>
            <div className="font-display font-bold text-primary text-sm">Telangana</div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/85 uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Government of Telangana · MAUD
          </span>

          <h1 className="mt-7 font-display font-bold text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            Empowering Cities.
            <br />
            <span className="bg-gradient-to-r from-[var(--cyan-brand)] via-white to-[var(--gold)] bg-clip-text text-transparent">
              Enabling Futures.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
            NIUM is an execution-ready institutional platform helping States plan better,
            deliver faster, and govern smarter — through research, capacity building, and
            digital public infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#verticals"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] hover:brightness-95 transition"
            >
              Explore our verticals
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Contact us
            </a>
          </div>

          {/* pillars row replaces the stat tombs */}
          <div className="mt-16 flex flex-wrap gap-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm pl-3 pr-5 py-2"
              >
                <span className="h-7 w-7 rounded-full bg-accent/90 text-accent-foreground flex items-center justify-center">
                  <p.icon size={14} />
                </span>
                <span className="text-sm font-medium text-white/90">{p.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.3em]">
        Scroll
      </div>
    </section>
  );
}
