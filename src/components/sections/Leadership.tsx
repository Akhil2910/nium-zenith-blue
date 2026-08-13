import { motion } from "framer-motion";
import cmImg from "@/assets/cm-telangana.png";
import secImg from "@/assets/secretary-sridevi.webp";

const leaders = [
  {
    img: cmImg,
    name: "Sri A. Revanth Reddy",
    role: "Hon'ble Chief Minister",
    org: "Government of Telangana",
    quote: "Building a future-ready Telangana where every city delivers world-class services to its citizens.",
  },
  {
    img: secImg,
    name: "Dr. T.K. Sreedevi IAS",
    role: "Secretary to Government",
    org: "Municipal Administration Department & Commissioner and Director of Municipal Administration",
    quote: "NIUM is our execution arm — turning policy intent into delivered outcomes on the ground.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-14 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Leadership
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Guided by visionary leadership.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((l, i) => (
            <motion.article
              key={l.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="flex flex-col sm:flex-row">
                <div
                  className="relative sm:w-2/5 aspect-square sm:aspect-auto sm:min-h-[320px] overflow-hidden"
                  style={{ background: "var(--gradient-band)" }}
                >
                  <img
                    src={l.img}
                    alt={l.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top mix-blend-luminosity group-hover:mix-blend-normal transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 via-transparent to-transparent group-hover:opacity-0 transition" />
                </div>
                <div className="p-7 sm:p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="h-1 w-10 bg-accent rounded-full" />
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground leading-tight">
                    {l.name}
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-primary">{l.role}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{l.org}</div>
                  <p className="mt-5 text-sm text-foreground/80 italic leading-relaxed border-l-2 border-accent/60 pl-4">
                    “{l.quote}”
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
