import { motion } from "framer-motion";
import { Target, Compass, Crown, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import eventImg from "@/assets/event-policy.jpg";
import secImg from "@/assets/secretary-sridevi.webp";



export function About() {
  return (
    <section id="about" className="relative py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              About NIUM
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Not just a think tank — an execution-ready institution.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              The National Institute of Urban Management (NIUM) works alongside the
              Commissioner & Director of Municipal Administration, Government of Telangana,
              to strengthen urban governance through research, capacity building, digital
              platforms, and procurement advisory.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] border border-border">
              <img src={eventImg} alt="NIUM Hyderabad Policy Conclave" loading="lazy" className="w-full h-64 object-cover" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            {[
              {
                icon: Compass,
                tag: "Vision",
                text: "To be a globally recognised centre of excellence shaping resilient, inclusive, climate-smart and financially sustainable cities through leadership, research, innovation and capacity transformation.",
              },
              {
                icon: Target,
                tag: "Mission",
                text: "To strengthen urban governance and municipal systems through capacity building, research, innovation, and financial empowerment — enabling cities to become resilient, inclusive, and globally competitive.",
              },
            ].map((b, i) => (
              <motion.div
                key={b.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gradient-band)] opacity-5 group-hover:opacity-10 transition" />
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-[var(--shadow-card)]">
                    <b.icon size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                      {b.tag}
                    </span>
                    <p className="mt-3 text-lg text-foreground leading-relaxed">{b.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                ["23", "Municipal Commissioners trained"],
                ["252", "Accounts Officers trained"],
                ["49", "Grade-II MCs trained"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-card border border-border p-6">
                  <div className="font-display text-3xl font-bold text-primary">{n}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Strategic Repositioning */}
        <div className="mt-24">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Vision and Strategic Repositioning
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Empowering municipal bodies for sustainable urban environments.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Strategic Repositioning",
                items: [
                  {
                    title: "Amplifying Impact",
                    text: "NIUM is undergoing a strategic shift to enhance its influence on municipal administration and urban development frameworks across India.",
                  },
                  {
                    title: "Addressing Urban Complexity",
                    text: "Navigating the challenges of rapid urbanization by providing innovative systemic support to cities and towns.",
                  },
                ],
              },
              {
                tag: "NIUM's Vision",
                items: [
                  {
                    title: "Dynamic Hub",
                    text: "Evolving into a center of excellence for research, targeted capacity development, and robust project execution.",
                  },
                  {
                    title: "Citizen-Centric Focus",
                    text: "Developing resilient urban environments that prioritize the needs and well-being of every citizen.",
                  },
                ],
              },
            ].map((col, i) => (
              <motion.div
                key={col.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="rounded-2xl bg-card border border-border p-8 shadow-[var(--shadow-card)]"
              >
                <h4 className="font-display text-2xl font-bold text-foreground">{col.tag}</h4>
                <div className="mt-6 space-y-6">
                  {col.items.map((it) => (
                    <div key={it.title}>
                      <div className="text-base font-semibold text-accent">{it.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl p-6 text-white shadow-[var(--shadow-card)]" style={{ background: "var(--gradient-band)" }}>
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-white/80">Core Objective</span>
            <p className="mt-2 text-base md:text-lg font-medium">
              Empowering urban authorities with the knowledge and solutions for sustainable development.
            </p>
          </div>
        </div>

        {/* Leadership row: DG + Advisor */}
        <div className="mt-24">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Our Team</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              The people behind NIUM.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            <a
              href="#"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <img
                src={secImg}
                alt="Director General"
                className="h-24 w-24 rounded-xl object-cover object-top border border-border"
                loading="lazy"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  <Crown size={14} /> Director General
                </div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">Dr. T.K. Sreedevi IAS</div>
                <div className="mt-1 text-sm text-muted-foreground leading-snug">
                  Director General, NIUM · Strategic leadership across all verticals.
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold group-hover:underline">
                  Profile →
                </div>
              </div>
            </a>

            <a
              href="#"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="h-24 w-24 shrink-0 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center">
                <UserCheck size={32} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  <UserCheck size={14} /> Honorary Advisor
                </div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">Dr. P.K. Mohanty, IAS (Retd.)</div>
                <div className="mt-1 text-sm text-muted-foreground leading-snug">
                  Executive Chair – Research and Programmes.
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold group-hover:underline">
                  Profile →
                </div>
              </div>
            </a>
          </div>

          <div>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-elevated)] hover:brightness-110 transition"
            >
              Meet the full team
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

