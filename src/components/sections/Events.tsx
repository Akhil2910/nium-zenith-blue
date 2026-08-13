import { motion } from "framer-motion";
import happySundays from "@/assets/events/happy-sundays.png.asset.json";
import womenLeaders from "@/assets/events/women-leaders.png.asset.json";
import marammat from "@/assets/events/marammat.jpg.asset.json";
import aicccPrebid from "@/assets/events/aiccc-prebid.png.asset.json";

type EventItem = { src: string; title: string; date: string };

// Newest first
const events: EventItem[] = [
  {
    src: aicccPrebid.url,
    title: "Pre-bid meeting — selection of agency for AI-ICCC",
    date: "17 Jul 2026",
  },
  {
    src: marammat.url,
    title: "Marammat: Caring for Our City — repair café & roundtable",
    date: "13–14 Jul 2026",
  },
  {
    src: happySundays.url,
    title: "Happy Sundays — Achampet, Kothur & Manuguru",
    date: "17 May 2026",
  },
  {
    src: womenLeaders.url,
    title: "Empowering Women Leaders for Transformative Urban Governance",
    date: "30 Apr – 1 May 2026",
  },
];

export function Events() {
  return (
    <section id="events-posters" className="relative py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              What's on
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
              Events
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Programmes, workshops and convenings hosted by NIUM — listed newest first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e, i) => (
            <motion.figure
              key={e.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="bg-muted">
                <img
                  src={e.src}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-4 py-3 border-t border-border">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                  {e.date}
                </div>
                <div className="mt-1 text-sm font-medium text-foreground leading-snug">
                  {e.title}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
