import { motion } from "framer-motion";
import { Mail, BookOpen, ArrowUpRight } from "lucide-react";

const pubs = [
  {
    icon: Mail,
    title: "Newsletters",
    blurb:
      "Monthly digests covering NIUM's research, training, partnerships and on-ground delivery across Telangana and beyond.",
    cta: "Read latest issue",
  },
  {
    icon: BookOpen,
    title: "Annual Report",
    blurb:
      "Comprehensive annual review of programmes, impact metrics, financials and forward roadmap.",
    cta: "Download report",
  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Publications
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Knowledge, in the open.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pubs.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition block"
            >
              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                  <p.icon size={24} />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:rotate-45 group-hover:text-accent transition-transform" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider">
                {p.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
