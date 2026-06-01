import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, ScrollText } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Capacity Building",
    blurb:
      "Structured, role-based training for Municipal Commissioners, Accounts Officers, Engineers and field staff — co-designed with MoHUA, RCUES and partner academies.",
    stats: "324+ officers trained",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    blurb:
      "Applied urban research turning satellite, sensor and survey data into actionable DPRs, evidence and replicable city playbooks.",
    stats: "12+ active studies",
  },
  {
    icon: ScrollText,
    title: "Policy",
    blurb:
      "Policy advisory, regulatory drafting and stakeholder facilitation for state and central urban missions.",
    stats: "8 state engagements",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Programs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            From classroom to city — three program tracks.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                <p.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
              <div className="mt-6 pt-5 border-t border-border text-xs uppercase tracking-[0.18em] text-accent font-bold">
                {p.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
