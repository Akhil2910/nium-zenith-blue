import { motion } from "framer-motion";
import { CalendarClock, History, Images } from "lucide-react";

const tiles = [
  {
    icon: CalendarClock,
    title: "Ongoing Events",
    blurb:
      "Active workshops, training cohorts, conclaves and field exposure programmes happening this month.",
  },
  {
    icon: History,
    title: "Past Events",
    blurb:
      "Archive of conclaves, training graduations, MoUs and policy roundtables — searchable by year and theme.",
  },
  {
    icon: Images,
    title: "Gallery",
    blurb:
      "Photographs and short films from NIUM's events, field visits, training programmes and inaugurations.",
  },
];

export function Events() {
  return (
    <section id="events" className="relative py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Events
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Where NIUM shows up, in person.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiles.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                <t.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
