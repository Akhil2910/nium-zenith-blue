import { useState } from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  GraduationCap,
  Lightbulb,
  MonitorCog,
  ClipboardList,
  Landmark,
  Handshake,
  Megaphone,
} from "lucide-react";
import itImg from "@/assets/vertical-it.jpg";
import heritageImg from "@/assets/vertical-heritage.jpg";
import planningImg from "@/assets/vertical-planning.jpg";
import capacityImg from "@/assets/vertical-capacity.jpg";
import procurementImg from "@/assets/vertical-procurement.jpg";

const areas = [
  {
    icon: Microscope,
    title: "Research & Development",
    image: planningImg,
    blurb:
      "Conducting policy-relevant research to generate actionable insights and innovative solutions for urban challenges.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity",
    image: capacityImg,
    blurb:
      "Designing comprehensive training for municipal functionaries, elected representatives, and urban professionals.",
  },
  {
    icon: Lightbulb,
    title: "Urban Innovation & Incubation",
    image: itImg,
    blurb:
      "Incubating new ideas, pilots and partnerships that translate urban innovation into delivery on the ground.",
  },
  {
    icon: MonitorCog,
    title: "Urban Informatics",
    image: itImg,
    blurb:
      "Leveraging cutting-edge technology and data analytics, including GIS and smart city applications, for governance.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    image: procurementImg,
    blurb:
      "Establishing Project Management Units (PMUs) to ensure effective implementation and oversight of urban projects.",
  },
  {
    icon: Landmark,
    title: "Heritage and Conservation",
    image: heritageImg,
    blurb:
      "Conservation, adaptive reuse and site management for India's living heritage — from Charminar to Warangal.",
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    image: procurementImg,
    blurb:
      "Providing expert advisory on financial structuring, public-private partnerships, and strategic project guidance.",
  },
  {
    icon: Megaphone,
    title: "Communication & Outreach",
    image: heritageImg,
    blurb:
      "Ensuring effective dissemination of NIUM's work, managing stakeholder relations, and promoting urban discourse.",
  },
];

export function FocusAreas() {
  const [active, setActive] = useState(0);

  return (
    <section id="focus-areas" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Focus Areas
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
              Eight verticals. One mission to make cities work better.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Hover any panel — it expands to reveal the work.
            </p>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Each focus area pairs deep domain expertise with on-ground delivery
            across India and Telangana.
          </p>
        </div>

        {/* Horizontal hover accordion */}
        <div className="hidden md:flex w-full h-[480px] gap-2 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
          {areas.map((a, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={a.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative cursor-pointer overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ flexBasis: 0 }}
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/40 to-black/20"
                      : "bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/70 to-[var(--navy)]/50"
                  }`}
                />

                {/* Collapsed: vertical title */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-6">
                    <div className="h-11 w-11 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center">
                      <a.icon size={20} />
                    </div>
                    <div
                      className="text-white font-semibold tracking-[0.2em] text-xs uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {a.title}
                    </div>
                    <span className="text-white/70 text-[10px] font-bold">0{i + 1}</span>
                  </div>
                )}

                {/* Expanded: full card */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg mb-5">
                      <a.icon size={26} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold">
                      Focus Area 0{i + 1}
                    </span>
                    <h3 className="mt-2 text-3xl font-display font-bold text-white max-w-md leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/85 max-w-md leading-relaxed">
                      {a.blurb}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid gap-4">
          {areas.map((a) => (
            <div
              key={a.title}
              className="relative h-48 rounded-2xl overflow-hidden border border-border"
            >
              <img src={a.image} alt={a.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/30" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <a.icon className="text-white mb-2" size={22} />
                <h3 className="text-white font-bold text-lg">{a.title}</h3>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{a.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
