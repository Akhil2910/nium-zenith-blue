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
      "NIUM partners with ASI, AKTC and the World Monuments Fund to deliver conservation-grade restoration, adaptive reuse and visitor management for some of India's most important heritage assets. Our teams combine traditional craft, modern documentation and PMU rigour so every site is preserved as a living, breathing public space.",
    impact:
      "Revived the Heritage of Musi and trained AKTC engineers, while leading the Heritage Partner Scheme PMU and site management plans for ASI's Charminar and Warangal Fort.",
    projects: [
      "Shaikpet Sarai adaptive reuse (₹13.1 L)",
      "ASI Charminar site management plan (₹3.83 L)",
      "PDCOR legislation, tourism & survey consulting (₹9.22 L)",
      "Heritage-related works with QQSUDA (₹5.77 L)",
      "AKTC engineer training (completed)",
    ],
    stats: [
      { value: "8", label: "Active projects" },
      { value: "₹32 L+", label: "Project value" },
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
      "From last-mile health access to climate-resilient infrastructure, our planners turn satellite, sensor and survey data into actionable DPRs. We have mapped urban health for UNICEF, built foot-over-bridge feasibility for GHMC and authored cooling DPRs.",
    impact:
      "Mapped urban health coverage of Hyderabad for UNICEF and reorganised ASHA / ANM / UPHC service areas across the district — directly improving last-mile maternal and child health access.",
    projects: [
      "Mapping Urban Health Coverage, Hyderabad – UNICEF",
      "Digital Micro-Planning for Urban Health Facilities – UNICEF",
      "Pre-feasibility Study for Foot Over Bridges – GHMC",
      "Consultancy on Retainership – MRDCL (₹1.95 Cr)",
      "FCDA PMU for Urban & GIS Services (proposed)",
    ],
    stats: [
      { value: "₹1.95 Cr", label: "MRDCL retainer" },
      { value: "100%", label: "Hyderabad coverage" },
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
      "NIUM runs structured, role-based capacity programmes for the people who actually run cities — Commissioners, Accounts Officers, Engineers and field staff. Curricula are co-designed with MoHUA, RCUES and partner academies, with field immersion built in.",
    impact:
      "Trained 324+ municipal officers — 23 Municipal Commissioners, 49 Grade-II MCs and 252 Accounts Officers — and facilitated 2 programmes for Nepal NIRDI officials, delivering ₹77+ L of capacity work.",
    projects: [
      "23 Municipal Commissioners trained (₹2.71 L)",
      "49 Grade-II MCs trained (₹38.16 L)",
      "252 Accounts Officers trained (₹35.97 L)",
      "Nepal NIRDI – 2 facilitation programmes (₹84 K)",
      "SASCI workshop conducted",
    ],
    stats: [
      { value: "324+", label: "Officers trained" },
      { value: "2", label: "Countries" },
    ],
  },
  {
    icon: Cpu,
    title: "IT Consultancy",
    image: itImg,
    tagline: "The digital backbone of Telangana's urban stack",
    blurb:
      "Digital public infrastructure for Telangana — TG-bPASS, DTCP/HMDA platforms and the proposed GIS HUB.",
    description:
      "We design, build and operate the platforms that power Telangana's urban governance. The TG-bPASS PMU has run building permits and self-certification since 2020, IT-PMU services support DTCP / HMDA, and a strategic proposal positions NIUM-IT as the preferred PMU for the GIS HUB and websites for new municipalities.",
    impact:
      "Ran the TG-bPASS PMU end-to-end from 2020–2025 — a ₹20 Crore programme delivering Build Now, Land Use Certificate and self-certified building permits across Telangana.",
    projects: [
      "PMU for TG-bPASS, 2020–2025 (₹20 Cr)",
      "IT PMU services to DTCP / HMDA",
      "Websites for new municipalities (₹69 L proposed)",
      "PMU for GIS HUB operations (₹80 L proposed)",
    ],
    stats: [
      { value: "₹20 Cr", label: "TG-bPASS PMU" },
      { value: "5 yrs", label: "Continuous run" },
    ],
  },
  {
    icon: FileCheck2,
    title: "Procurement & Consultancy",
    image: procurementImg,
    tagline: "Independent eyes on flagship missions",
    blurb:
      "Independent engineer, QA/QC and procurement advisory across GIS Hub, HMWSSB and state election services.",
    description:
      "NIUM acts as the independent engineer and procurement partner for missions where quality and pace both matter. We provide PMU of infrastructure and manpower for the GIS Hub, run third-party performance audits for HMWSSB's private STPs, and structure RFPs for state election webcasting.",
    impact:
      "Set up the PMU of infrastructure and manpower for the Telangana GIS Hub and lead annual performance audits of HMWSSB's private STP network — protecting public assets worth tens of crores.",
    projects: [
      "PMU of Infra & Manpower for GIS Hub (₹8.7 L)",
      "Annual Private STP Performance Audit – HMWSSB (₹25–30 L)",
      "RFP for Webcasting of Ordinary Elections 2026 – TG (₹4 L)",
      "Independent Engineer cum PMC advisory",
    ],
    stats: [
      { value: "₹40 L+", label: "Active mandates" },
      { value: "6", label: "Live engagements" },
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
