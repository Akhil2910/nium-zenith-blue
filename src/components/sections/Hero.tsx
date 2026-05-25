import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-skyline.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-[var(--navy)]/40" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-white/85 uppercase tracking-[0.18em]">
            <Sparkles size={14} className="text-accent" />
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
              href="#nium-it"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              NIUM-IT spotlight
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl">
            {[
              ["4 yrs", "TG-bPASS PMU"],
              ["₹166 Cr", "AI-ICCC corridor"],
              ["130+", "Municipalities served"],
              ["324+", "Officers trained"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-accent/70 pl-4">
                <dt className="font-display text-2xl md:text-3xl font-bold text-white">{n}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/65 mt-1">{l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs uppercase tracking-[0.3em]">
        Scroll
      </div>
    </section>
  );
}
