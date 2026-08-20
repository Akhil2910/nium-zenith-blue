import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

const tiles = [
  {
    icon: Briefcase,
    title: "Jobs",
    blurb:
      "Full-time roles across urban planning, IT, capacity building, procurement and research. Join a team building real public infrastructure.",
    cta: "View open roles",
    to: "/careers/jobs",
  },
  {
    icon: Sparkles,
    title: "Internships",
    blurb:
      "Structured internships for students of planning, public policy, architecture, engineering and data — with mentorship and field exposure.",
    cta: "Apply for internships",
    to: "/careers/internships",
  },
];

const MotionLink = motion.create(Link);


export function Career() {
  return (
    <section id="career" className="relative py-14 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Career
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Build the next Indian city — with us.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tiles.map((t, i) => (
            <MotionLink
              key={t.title}
              to={t.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition block"
            >

              <div className="flex items-start justify-between">
                <div className="h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                  <t.icon size={24} />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:rotate-45 group-hover:text-accent transition-transform" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent uppercase tracking-wider">
                {t.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
