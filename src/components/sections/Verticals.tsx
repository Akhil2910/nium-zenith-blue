import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, Map, GraduationCap, Cpu, FileCheck2, ArrowUpRight, X } from "lucide-react";
import heritageImg from "@/assets/vertical-heritage.jpg";
import planningImg from "@/assets/vertical-planning.jpg";
import capacityImg from "@/assets/vertical-capacity.jpg";
import itImg from "@/assets/vertical-it.jpg";
import procurementImg from "@/assets/vertical-procurement.jpg";

const verticals = [
  {
    icon: Landmark,
    title: "Heritage & Urban Renewal",
    image: heritageImg,
    tagline: "Conserving India's living heritage",
    blurb:
      "Conservation, adaptive reuse and site management for India's living heritage — from Charminar to Warangal Fort.",
    description:
      "NIUM partners with ASI, AKTC and the World Monuments Fund to deliver conservation-grade restoration, adaptive reuse and visitor management for some of India's most important heritage assets. Our teams combine traditional craft, modern documentation (3D scans, condition mapping) and PMU rigour so every site is preserved as a living, breathing public space — not a frozen monument.",
    projects: [
      "Shaikpet Sarai adaptive reuse",
      "ASI Charminar site plan",
      "AKTC engineer training",
      "Heritage Partner Scheme PMU",
      "Warangal Fort precinct studies",
    ],
    stats: [
      { value: "12+", label: "Heritage sites" },
      { value: "₹40 Cr", label: "Works under PMU" },
    ],
  },
  {
    icon: Map,
    title: "Urban Planning",
    image: planningImg,
    tagline: "Evidence-led plans that move cities",
    blurb:
      "Evidence-led planning for health, mobility and resilience — backed by GIS, satellite data and field surveys.",
    description:
      "From last-mile health access to climate-resilient infrastructure, our planners turn satellite, sensor and survey data into actionable DPRs. We have mapped urban health for UNICEF, built foot-over-bridge feasibility for GHMC and authored cooling DPRs that link city design to lived outcomes for the poorest residents.",
    projects: [
      "UNICEF urban health mapping",
      "GHMC foot-over-bridge feasibility",
      "FCDA PMU for urban & GIS services",
      "Urban cooling DPR for NDRF",
    ],
    stats: [
      { value: "130+", label: "ULBs covered" },
      { value: "8", label: "States engaged" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training",
    image: capacityImg,
    tagline: "Building the bench strength of urban India",
    blurb:
      "Structured training for Municipal Commissioners, Accounts Officers and partner institutions across India and Nepal.",
    description:
      "NIUM runs structured, role-based capacity programmes for the people who actually run cities — Commissioners, Accounts Officers, Engineers and field staff. Curricula are co-designed with MoHUA, RCUES and partner academies, with field immersion built in. We have also trained Nepal's NIRDI cohorts and led TNA workshops for SBM (U) 2.0.",
    projects: [
      "23 + 49 Municipal Commissioners trained",
      "252 Accounts Officers certified",
      "SBM (U) 2.0 TNA workshops",
      "NIRDI Nepal officials",
    ],
    stats: [
      { value: "500+", label: "Officers trained" },
      { value: "2", label: "Countries" },
    ],
  },
  {
    icon: Cpu,
    title: "IT Consultancy",
    image: itImg,
    tagline: "The digital backbone of Telangana's urban stack",
    blurb:
      "Digital public infrastructure for Telangana — running TG-bPASS, DTCP/HMDA platforms and the upcoming AI-ICCC.",
    description:
      "We design, build and operate the platforms that power Telangana's urban governance. The TG-bPASS PMU has processed lakhs of building permits with self-certification; DTCP / CDMA / ENC officer transfer applications are run end-to-end by NIUM; and the upcoming AI Integrated Command & Control Centre brings video analytics, IoT and AI decisioning to 23 ULBs.",
    projects: [
      "TG-bPASS PMU (2020–2025)",
      "HMDA IT services",
      "AI Integrated Command & Control Centre",
      "GIS Hub PMU",
      "Websites for new municipalities",
    ],
    stats: [
      { value: "₹166 Cr", label: "AI-ICCC capex" },
      { value: "23", label: "AI-ICCC ULBs" },
    ],
  },
  {
    icon: FileCheck2,
    title: "Procurement & Advisory",
    image: procurementImg,
    tagline: "Independent eyes on flagship missions",
    blurb:
      "Independent engineer, QA/QC and PMU support across flagship missions — AMRUT 2.0, CITIIS 2.0, SASCI.",
    description:
      "NIUM acts as the independent engineer and PMU for missions where quality and pace both matter. We run third-party QA/QC for AMRUT 2.0 works, PMU support for CITIIS 2.0 climate projects, and technical audits for HMWSSB's private STP network — protecting public investment and unblocking delivery.",
    projects: [
      "IE Cum PMC for CDMA",
      "Third-party QA/QC – AMRUT 2.0",
      "PMU for CITIIS 2.0",
      "HMWSSB private STP audits",
    ],
    stats: [
      { value: "₹1,200 Cr", label: "Works supervised" },
      { value: "60+", label: "Audits" },
    ],
  },
];

export function Verticals() {
  const [active, setActive] = useState<number | null>(null);
  const activeItem = active !== null ? verticals[active] : null;

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
            <p className="mt-3 text-sm text-muted-foreground">
              Click any vertical to dive deeper.
            </p>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Each vertical pairs deep domain expertise with on-ground delivery — from heritage
            conservation to AI-enabled command centres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <motion.button
              key={v.title}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative text-left rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                  <v.icon size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="absolute top-4 right-4 text-white/90 group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {v.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider">
                  Explore <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] my-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                      <activeItem.icon size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                      Vertical
                    </span>
                  </div>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                    {activeItem.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground italic">
                    {activeItem.tagline}
                  </p>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-base text-foreground/85 leading-relaxed">
                    {activeItem.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                      Flagship projects
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {activeItem.projects.map((p, idx) => (
                        <motion.li
                          key={p}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="text-sm text-foreground/80 flex gap-2"
                        >
                          <span className="text-accent shrink-0">▸</span>
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  {activeItem.stats.map((s, idx) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="rounded-2xl border border-border bg-background p-5"
                    >
                      <div className="font-display font-bold text-3xl text-foreground">
                        {s.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
