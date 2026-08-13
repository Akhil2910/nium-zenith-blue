import { motion } from "framer-motion";
import g1 from "@/assets/gallery-park-visit.jpeg";
import g2 from "@/assets/gallery-hudco.jpeg";
import g3 from "@/assets/event-training.jpg";
import g4 from "@/assets/event-conclave.jpg";
import g5 from "@/assets/event-policy.jpg";
import m1 from "@/assets/gallery-meeting-1.jpeg";
import m2 from "@/assets/gallery-meeting-2.jpeg";
import m3 from "@/assets/gallery-meeting-3.jpeg";
import m4 from "@/assets/gallery-meeting-4.jpeg";
import happySundays from "@/assets/events/happy-sundays.png.asset.json";
import womenLeaders from "@/assets/events/women-leaders.png.asset.json";
import marammat from "@/assets/events/marammat.jpg.asset.json";
import aicccPrebid from "@/assets/events/aiccc-prebid.png.asset.json";

type Item = { src: string; caption: string; date?: string; span: string; fit?: "cover" | "contain" };

const items: Item[] = [
  {
    src: happySundays.url,
    caption: "Happy Sundays — Achampet, Kothur & Manuguru",
    date: "17 May 2026",
    span: "md:col-span-2 md:row-span-2",
    fit: "contain",
  },
  {
    src: womenLeaders.url,
    caption: "Empowering Women Leaders for Transformative Urban Governance",
    date: "30 Apr – 1 May 2026",
    span: "md:row-span-2",
    fit: "contain",
  },
  {
    src: marammat.url,
    caption: "Marammat: Caring for Our City — repair café & roundtable",
    date: "13–14 Jul 2026",
    span: "md:row-span-2",
    fit: "contain",
  },
  {
    src: aicccPrebid.url,
    caption: "Pre-bid meeting — selection of agency for AI-ICCC",
    date: "17 Jul 2026",
    span: "md:row-span-2",
    fit: "contain",
  },
  { src: g1, caption: "Field visit — urban green spaces", span: "md:col-span-2 md:row-span-2" },
  { src: g2, caption: "HUDCO 56th Foundation Day recognition", span: "" },
  { src: g3, caption: "Capacity-building cohort", span: "" },
  { src: g4, caption: "Hyderabad Policy Conclave", span: "md:col-span-2" },
  { src: g5, caption: "Policy roundtable", span: "" },
  { src: m3, caption: "International delegation roundtable", span: "md:col-span-2 md:row-span-2" },
  { src: m1, caption: "Bilateral discussion with international partners", span: "" },
  { src: m2, caption: "Strategic consultation session", span: "" },
  { src: m4, caption: "Cross-sector working group convening", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="events" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              In the field
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
              Gallery of Events
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Programmes, site visits, recognitions, training cohorts and policy convenings — NIUM in action across Telangana and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[210px] gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className={`absolute inset-0 h-full w-full ${
                  it.fit === "contain" ? "object-contain" : "object-cover object-top"
                } group-hover:scale-105 transition duration-700`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/40 to-transparent p-4">
                {it.date && (
                  <div className="text-[var(--gold)] text-[11px] font-bold uppercase tracking-[0.16em]">
                    {it.date}
                  </div>
                )}
                <figcaption className="text-white text-xs md:text-sm font-medium">
                  {it.caption}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
