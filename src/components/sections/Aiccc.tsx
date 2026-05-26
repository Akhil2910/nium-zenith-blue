import { motion } from "framer-motion";
import { Cctv, Activity, Map, Cpu, ShieldCheck, Radio, ArrowRight } from "lucide-react";
import aicccImg from "@/assets/aiccc.jpg";

const capabilities = [
  { icon: Cctv, title: "AI Video Analytics", body: "Real-time CCTV intelligence across junctions, public spaces and critical assets." },
  { icon: Map, title: "GIS & Geo-tagging", body: "Spatial intelligence layered with municipal data for ward-level decisions." },
  { icon: Activity, title: "Live Dashboards", body: "Health of sanitation, water, traffic and grievance redressal — at a glance." },
  { icon: Radio, title: "IoT Sensor Mesh", body: "Air quality, water pressure, streetlight telemetry feeding the command room." },
  { icon: ShieldCheck, title: "Emergency Response", body: "Unified incident workflow with police, fire and municipal coordination." },
  { icon: Cpu, title: "AI Decision Engine", body: "Predictive alerts and recommended actions for city operators." },
];

const stats = [
  { v: "₹166.44 Cr", l: "Programme outlay" },
  { v: "23", l: "Urban Local Bodies" },
  { v: "7", l: "Districts covered" },
  { v: "24×7", l: "Operations" },
];

export function Aiccc() {
  return (
    <section
      id="aiccc"
      className="relative overflow-hidden py-28 text-white"
      style={{ background: "var(--gradient-band)" }}
    >
      {/* layered backdrop */}
      <div className="absolute inset-0 opacity-30">
        <img src={aicccImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/85 to-transparent" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--cyan-brand)]/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              Flagship · AI-ICCC
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.02]">
              AI Integrated Command{" "}
              <span
                className="font-serif italic font-normal bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--gold)] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                & Control Centres.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 text-white/75 leading-relaxed"
          >
            A Smart Urban Governance platform across the Khammam–Warangal–Karimnagar
            corridor — fusing AI, IoT, GIS and e-Governance into a single live nerve
            centre for 23 ULBs across 7 districts.
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`p-6 md:p-8 ${i !== 0 ? "border-l border-white/10" : ""} ${
                i >= 2 ? "border-t md:border-t-0 border-white/10" : ""
              }`}
            >
              <div className="font-display font-bold text-3xl md:text-4xl bg-gradient-to-br from-white to-[var(--cyan-brand)] bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* Capability grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 hover:bg-white/[0.08] hover:border-accent/40 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition">
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6"
        >
          <p className="text-sm md:text-base text-white/90 max-w-2xl">
            Designed and delivered by NIUM-IT as Telangana's single-point technology
            partner for smart urban governance.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-95 transition"
          >
            Partner with NIUM-IT <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
