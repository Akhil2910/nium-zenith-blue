import { motion } from "framer-motion";
import { Server, Building2, Cctv, Database, Globe2, Users } from "lucide-react";

const platforms = [
  {
    icon: Building2,
    name: "TG-bPASS",
    sub: "Building permission engine",
    body: "PMU for the Telangana Building Permission Approval & Self-Certification System — running statewide from 2020 to 2025 across 130+ ULBs.",
    metric: "₹20 Cr · 4 yrs · 5M+ permits",
  },
  {
    icon: Users,
    name: "Officer Transfer Platforms",
    sub: "DTCP · CDMA · ENC",
    body: "End-to-end web applications powering transparent, rule-based officer transfers for the DTCP, CDMA and Engineer-in-Chief departments.",
    metric: "3 departments · live in production",
  },
  {
    icon: Cctv,
    name: "AI-ICCC",
    sub: "AI Integrated Command & Control",
    body: "Smart Urban Governance Platform across the Khammam–Warangal–Karimnagar corridor — AI + IoT + GIS + Geo-tagging + e-Governance.",
    metric: "₹166.44 Cr · 23 ULBs · 7 districts",
  },
  {
    icon: Database,
    name: "HMDA & GIS Hub",
    sub: "Spatial data platforms",
    body: "IT services for HMDA and a proposed PMU for the Telangana GIS Hub — enabling location-based services across municipal platforms.",
    metric: "5.40 Cr delivered · GIS Hub pipeline",
  },
  {
    icon: Globe2,
    name: "Municipal Websites",
    sub: "Digital identity for new ULBs",
    body: "Standardised website design, development and AMC for newly formed municipalities across 2 UDAs and 130 municipalities.",
    metric: "₹69 L · 5-yr AMC",
  },
  {
    icon: Server,
    name: "In-house Dev & AMC",
    sub: "Long-term capability",
    body: "Building in-house application development, support and AMC services to eliminate vendor dependency and rationalise long-term costs.",
    metric: "Unified IT-PMU vision",
  },
];

export function NiumIt() {
  return (
    <section
      id="nium-it"
      className="relative py-14 overflow-hidden text-white"
      style={{ background: "var(--gradient-band)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--cyan-brand)]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              NIUM-IT
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              The digital backbone of
              <br />
              <span className="bg-gradient-to-r from-[var(--cyan-brand)] to-accent bg-clip-text text-transparent">
                Telangana's urban stack.
              </span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/75 leading-relaxed">
            From building permissions to officer transfers to AI-enabled command centres,
            NIUM-IT designs, builds and runs the platforms that keep Telangana's cities
            moving — as the State's single-point technology partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-accent text-accent-foreground flex items-center justify-center">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-0.5">
                    {p.sub}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/75 leading-relaxed">{p.body}</p>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-accent uppercase tracking-wider">
                {p.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
