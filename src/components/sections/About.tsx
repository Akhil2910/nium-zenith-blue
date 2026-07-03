import { motion } from "framer-motion";
import { Target, Compass, Crown, UserCheck } from "lucide-react";
import eventImg from "@/assets/event-policy.jpg";
import secImg from "@/assets/secretary-sridevi.webp";

const directors = [
  { name: "J Srinivasa Rao", role: "Executive Director" },
  { name: "Lawanya Gotety", role: "Director – Urban Governance" },
  { name: "TSVN Thrilleshwar Rao", role: "Executive Director (Programmes)" },
  { name: "V Prashanthi", role: "Executive Head, UIIC" },
];

const kmTeam = [
  { name: "Chitla Akshita Reddy", role: "Programme Head (IT)" },
  { name: "Maddiboina Phani Gopal", role: "Programme Head" },
  { name: "Konduri Ravalee", role: "Programme Head" },
  { name: "P Yashwanth", role: "Senior Knowledge Manager" },
  { name: "Venugopal V", role: "Programme Head (SBM)" },
  { name: "G. Laxmi Narayana", role: "Administrative Officer" },
  { name: "Nitya Khendry", role: "Lead – Heritage" },
  { name: "Kiran Kumar Bingi", role: "Executive Manager (Programmes & Administration)" },
  { name: "G. Sowmya", role: "Research Associate" },
  { name: "D. Sindhu Priya Reddy", role: "Knowledge Manager" },
  { name: "Manem Jahnavi", role: "Knowledge Manager" },
  { name: "Suresh Bodiga", role: "Manager (Operations)" },
  { name: "R Prajwala Sam", role: "Research Associate" },
  { name: "Nadigoti Vennela Rani", role: "HR Executive" },
  { name: "Shaik Naseema Banu", role: "Research Associate" },
  { name: "G Venkatesham", role: "Research Associate" },
  { name: "K Vamshi Krishna Guptha", role: "Knowledge Manager" },
];

const itTeam = [
  { name: "V Akhil Babu", role: "Software Engineer" },
  { name: "Jayaram Rathod", role: "Senior Developer" },
  { name: "Vikash Pilli", role: "Functional Expert" },
  { name: "Jaipal Pola", role: "Software Developer" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <a
      href="#"
      className="group block rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:border-accent/40 transition"
    >
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 shrink-0 rounded-full bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
          {initials(name)}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-foreground text-sm leading-tight">{name}</div>
          <div className="mt-1 text-xs text-muted-foreground leading-snug">{role}</div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold group-hover:underline">
            Profile →
          </div>
        </div>
      </div>
    </a>
  );
}


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

        {/* Team */}
        <div className="mt-24">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Our Team</span>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-foreground leading-tight">
              The people behind NIUM.
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t, i) => (
              <motion.div
                key={t.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                  <t.icon size={22} />
                </div>
                <h4 className="mt-5 text-base font-bold text-foreground">{t.role}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

