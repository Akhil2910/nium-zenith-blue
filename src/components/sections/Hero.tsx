import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroCity from "@/assets/hero-city.jpg";
import tgLogo from "@/assets/tg-rising-logo.png";

const impacts = [
  {
    vertical: "Heritage",
    stat: "8 sites",
    headline: "Revived the Heritage of Musi",
    detail: "Heritage Partner Scheme PMU + ASI site plans for Charminar & Warangal Fort.",
  },
  {
    vertical: "Urban Planning",
    stat: "100%",
    headline: "Mapped urban health of Hyderabad",
    detail: "Reorganised ASHA / ANM / UPHC service areas across the district for UNICEF.",
  },
  {
    vertical: "Capacity Building",
    stat: "324+",
    headline: "Municipal officers trained",
    detail: "23 MCs, 49 Grade-II MCs, 252 Accounts Officers + Nepal NIRDI cohorts.",
  },
  {
    vertical: "IT Consultancy",
    stat: "₹20 Cr",
    headline: "TG-bPASS PMU, 2020–2025",
    detail: "End-to-end Build Now, LUC and self-certified permits across Telangana.",
  },
  {
    vertical: "Procurement",
    stat: "₹40 L+",
    headline: "GIS Hub PMU + HMWSSB STP audits",
    detail: "Independent engineer protecting public assets across flagship missions.",
  },
];


const partners = [
  "MoHUA",
  "World Bank",
  "UN-Habitat",
  "ADB",
  "Smart Cities Mission",
  "AMRUT",
  "NITI Aayog",
  "Government of Telangana",
  "NIUA",
  "HUDCO",
  "TISS",
  "UNICEF",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % impacts.length), 3800);
    return () => clearInterval(t);
  }, []);
  const cur = impacts[idx];
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[var(--navy)] text-white">
      {/* Government strip */}
      <div className="absolute top-20 inset-x-0 z-20 border-y border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/70">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Government of Telangana · Telangana Rising
          </span>
          <span className="hidden md:flex items-center gap-6">
            <span>Hyderabad, India</span>
          </span>
        </div>
      </div>

      {/* Background city image with deep blue overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCity}
          alt="Hyderabad cityscape at golden hour"
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

      {/* Glows */}
      <div className="absolute -bottom-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--cyan-brand)]/20 blur-3xl" />
      <div className="absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-44 pb-32 lg:pt-52">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/70">
              <span className="h-px w-10 bg-accent" />
              National Institute of Urban Management
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6"
            >
              {/* Tagline — small, refined */}
              <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/60 font-medium">
                This revitalized NIUM will be an indispensable partner in progress
              </p>

              {/* Main headline — bold, modern */}
              <h1 className="mt-4 font-display font-bold leading-[1.05] tracking-tight text-[clamp(2.2rem,6vw,5rem)]">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="block"
                >
                  Spearheading urban innovation
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block"
                >
                  and driving transformative change
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  className="block"
                >
                  to achieve{" "}
                  <span className="text-[var(--gold)]">urban excellence</span>,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                  className="block text-white/90 text-[clamp(1.4rem,3.5vw,2.8rem)] mt-1 font-medium"
                >
                  for Telangana and across India.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
            >
              Telangana's premier institute for urban management — training the leaders,
              shaping the policies and engineering the digital systems that build tomorrow's cities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#verticals"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] hover:brightness-95 transition"
              >
                Explore programs
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#aiccc"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span className="h-7 w-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Play size={12} className="ml-0.5" />
                </span>
                Watch AI-ICCC story
              </a>
            </motion.div>
          </motion.div>

          {/* Live impact card */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="lg:col-span-4 relative"
          >
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-6 shadow-[var(--shadow-elevated)] overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 text-accent-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground animate-pulse-dot" />
                  Live impact
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {cur.vertical}
                </span>
              </div>

              <div className="mt-6 relative min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-br from-white to-[var(--cyan-brand)] bg-clip-text text-transparent">
                      {cur.stat}
                    </div>
                    <p className="mt-3 text-base font-semibold text-white">
                      {cur.headline}
                    </p>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {cur.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-2">
                {impacts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Show impact ${i + 1}`}
                    className={`h-1 flex-1 rounded-full transition-all ${
                      i === idx ? "bg-accent" : "bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>


            <div className="absolute -top-6 -right-4 rounded-2xl bg-white/95 backdrop-blur px-3 py-2 shadow-[var(--shadow-elevated)] flex items-center gap-2">
              <img src={tgLogo} alt="Telangana Rising" className="h-10 w-auto" />
            </div>
          </motion.aside>
        </div>

        <div className="mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <span>Scroll</span>
          <span className="h-px w-10 bg-white/30" />
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
