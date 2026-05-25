import { motion } from "framer-motion";
import { Landmark, Map, GraduationCap, Cpu, FileCheck2, ArrowUpRight } from "lucide-react";

const verticals = [
  {
    icon: Landmark,
    title: "Heritage & Urban Renewal",
    blurb:
      "Conservation, adaptive reuse and site management for India's living heritage — from Charminar to Warangal Fort.",
    projects: ["Shaikpet Sarai adaptive reuse", "ASI Charminar site plan", "AKTC engineer training", "Heritage Partner Scheme PMU"],
  },
  {
    icon: Map,
    title: "Urban Planning",
    blurb:
      "Evidence-led planning for health, mobility and resilience — backed by GIS, satellite data and field surveys.",
    projects: ["UNICEF urban health mapping", "GHMC foot-over-bridge feasibility", "FCDA PMU for urban & GIS services", "Urban cooling DPR for NDRF"],
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    blurb:
      "Structured training for Municipal Commissioners, Accounts Officers and partner institutions across India and Nepal.",
    projects: ["23 + 49 Municipal Commissioners", "252 Accounts Officers", "SBM (U) 2.0 TNA workshops", "NIRDI Nepal officials"],
  },
  {
    icon: Cpu,
    title: "IT Consultancy",
    blurb:
      "Digital public infrastructure for Telangana — running TG-bPASS, DTCP/HMDA platforms and the upcoming AI-ICCC.",
    projects: ["TG-bPASS PMU (2020–2025)", "HMDA IT services", "AI Integrated Command & Control Centre", "GIS Hub PMU"],
  },
  {
    icon: FileCheck2,
    title: "Procurement & Advisory",
    blurb:
      "Independent engineer, QA/QC and PMU support across flagship missions — AMRUT 2.0, CITIIS 2.0, SASCI.",
    projects: ["IE Cum PMC for CDMA", "Third-party QA/QC – AMRUT 2.0", "PMU for CITIIS 2.0", "HMWSSB private STP audits"],
  },
];

export function Verticals() {
  return (
    <section id="verticals" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              What we do
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
              Five verticals. One mission to make cities work better.
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Each vertical pairs deep domain expertise with on-ground delivery — from heritage
            conservation to AI-enabled command centres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-[var(--shadow-card)] group-hover:scale-105 transition">
                  <v.icon size={24} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.blurb}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {v.projects.map((p) => (
                  <li key={p} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-accent shrink-0">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
