import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-park-visit.jpeg";
import g2 from "@/assets/gallery-hudco.jpeg";
import g3 from "@/assets/event-training.jpg";
import g4 from "@/assets/event-conclave.jpg";
import g5 from "@/assets/event-policy.jpg";
import m2 from "@/assets/gallery-meeting-2.jpeg";
import m3 from "@/assets/gallery-meeting-3.jpeg";
import m4 from "@/assets/gallery-meeting-4.jpeg";
import uw1 from "@/assets/events/used-water-1.jpg.asset.json";
import uw2 from "@/assets/events/used-water-2.jpg.asset.json";
import uw3 from "@/assets/events/used-water-3.jpg.asset.json";
import unhSign from "@/assets/events/unh-signing.jpg.asset.json";
import unhExchange from "@/assets/events/unh-exchange.jpg.asset.json";
import unhMemento from "@/assets/events/unh-memento.jpg.asset.json";
import unhGroup1 from "@/assets/events/unh-group-1.jpg.asset.json";
import unhGroup2 from "@/assets/events/unh-group-2.jpg.asset.json";

type Item = { src: string; caption: string; date?: string; span: string; fit?: "cover" | "contain"; pos?: string };

const uwCaption = "Treated Used Water Reuse Workshop";

const items: Item[] = [
  { src: unhSign.url, caption: "Cooperation Agreement Signing Ceremony — Municipal Administration & UN-Habitat", date: "8 Oct 2026", span: "md:col-span-2 md:row-span-2", pos: "center 75%" },
  { src: unhExchange.url, caption: "MA & UN-Habitat agreement", date: "8 Oct 2026", span: "" },
  { src: unhMemento.url, caption: "UN-Habitat delegation", date: "8 Oct 2026", span: "" },
  { src: uw3.url, caption: "Workshop on Scaling Safe and Sustainable Reuse of Treated Used Water in Telangana — Mercure Hotel", date: "21 Sep 2026", span: "md:col-span-2 md:row-span-2" },
  { src: uw1.url, caption: uwCaption, date: "21 Sep 2026", span: "" },
  { src: uw2.url, caption: uwCaption, date: "21 Sep 2026", span: "" },
];

const slides: { src: string; caption: string }[] = [
  { src: unhGroup2.url, caption: "Municipal Administration & UN-Habitat Cooperation Agreement — 8 Oct 2026" },
  { src: unhGroup1.url, caption: "Officials and team at the UN-Habitat agreement signing — 8 Oct 2026" },
  { src: g1, caption: "Field visit — urban green spaces" },
  { src: g2, caption: "HUDCO 56th Foundation Day recognition" },
  { src: g3, caption: "Capacity-building cohort" },
  { src: g4, caption: "Hyderabad Policy Conclave" },
  { src: g5, caption: "Policy roundtable" },
  { src: m3, caption: "International delegation roundtable" },
  { src: m2, caption: "Strategic consultation session" },
  { src: m4, caption: "Cross-sector working group convening" },
];

function Slider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 10000);
    return () => clearInterval(t);
  }, [i]);
  const go = (d: number) => setI((v) => (v + d + slides.length) % slides.length);
  const s = slides[i];
  return (
    <div className="relative mt-4 h-[320px] md:h-[480px] overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
      <AnimatePresence mode="wait">
        <motion.img
          key={s.src}
          src={s.src}
          alt={s.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/40 to-transparent p-5">
        <p className="text-white text-sm md:text-base font-medium">{s.caption}</p>
        <div className="mt-3 flex gap-2">
          {slides.map((_, k) => (
            <button
              key={k}
              aria-label={`Show photo ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-[var(--gold)]" : "w-3 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <button aria-label="Previous photo" onClick={() => go(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button aria-label="Next photo" onClick={() => go(1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

export function Gallery() {
  return (
    <section id="events" className="relative py-14 bg-background">
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
                style={it.pos ? { objectPosition: it.pos } : undefined}
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

        <Slider />
      </div>
    </section>
  );
}
