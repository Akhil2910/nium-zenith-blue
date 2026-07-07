import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Crown, UserCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import secImg from "@/assets/secretary-sridevi.webp";
import pkmAsset from "@/assets/pk-mohanty.jpg.asset.json";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — National Institute of Urban Management" },
      { name: "description", content: "Meet the leadership, advisor, directors, IT team and knowledge management team of NIUM." },
      { property: "og:title", content: "NIUM Team" },
      { property: "og:description", content: "Leadership and staff of the National Institute of Urban Management, Government of Telangana." },
    ],
  }),
});

const directors = [
  { name: "J Srinivasa Rao", role: "Executive Director" },
  { name: "Lawanya Gotety", role: "Director – Urban Governance" },
  { name: "TSVN Thrilleshwar Rao", role: "Executive Director (Programmes)" },
  { name: "V Prashanthi", role: "Executive Head, UIIC" },
];

const itTeam = [
  { name: "V Akhil Babu", role: "Software Engineer" },
  { name: "Jayaram Rathod", role: "Senior Developer" },
  { name: "Vikash Pilli", role: "Functional Expert" },
  { name: "Jaipal Pola", role: "Software Developer" },
];

const otherTeam = [
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

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]).join("").toUpperCase();
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

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <div className="flex items-baseline justify-between mb-5">
        <h4 className="font-display text-2xl font-bold text-foreground">{title}</h4>
        {subtitle && <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{subtitle}</span>}
      </div>
      {children}
    </motion.div>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Our Team</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The people behind NIUM.
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Leadership, advisor and staff driving research, capacity building and digital transformation across Telangana's urban sector.
            </p>
          </div>

          {/* DG */}
          <Section title="Director General">
            <a
              href="#"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition max-w-2xl"
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
          </Section>

          {/* Advisor */}
          <Section title="Advisor">
            <a
              href="#"
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition max-w-2xl"
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
          </Section>

          <Section title="Directors" subtitle="Leadership team">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {directors.map((p) => <PersonCard key={p.name} {...p} />)}
            </div>
          </Section>

          <Section title="IT Team" subtitle="NIUM-IT">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {itTeam.map((p) => <PersonCard key={p.name} {...p} />)}
            </div>
          </Section>

          <Section title="Knowledge Management & Research" subtitle="Programmes team">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {otherTeam.map((p) => <PersonCard key={p.name} {...p} />)}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
