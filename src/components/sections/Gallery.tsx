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

type Item = { src: string; caption: string; date?: string; span: string; fit?: "cover" | "contain" };

const items: Item[] = [
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
