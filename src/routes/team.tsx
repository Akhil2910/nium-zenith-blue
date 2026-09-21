import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Crown, UserCheck, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import secImg from "@/assets/secretary-sridevi.webp";
import { BackButton } from "@/components/BackButton";
import { supabase } from "@/integrations/supabase/client";

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

type Member = {
  id: string;
  name: string;
  designation: string;
  description: string | null;
  photo_url: string | null;
  group_key: string;
  sort_order: number;
};

/** Photos that ship with the site, matched by name when no upload exists yet. */
const BUNDLED_PHOTOS: Record<string, string> = {
  "Dr. T.K. Sreedevi IAS": secImg,
};

function photoOf(m: Member) {
  return m.photo_url ?? BUNDLED_PHOTOS[m.name] ?? null;
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

function PersonCard({ member, onOpen }: { member: Member; onOpen: (m: Member) => void }) {
  const photo = photoOf(member);
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group block w-full text-left rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:border-accent/40 transition"
    >
      <div className="flex items-start gap-3">
        {photo ? (
          <img
            src={photo}
            alt={member.name}
            loading="lazy"
            className="h-11 w-11 shrink-0 rounded-full object-cover object-top border border-border"
          />
        ) : (
          <div className="h-11 w-11 shrink-0 rounded-full bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
            {initials(member.name)}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-semibold text-foreground text-sm leading-tight">{member.name}</div>
          <div className="mt-1 text-xs text-muted-foreground leading-snug">{member.designation}</div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold group-hover:underline">
            Profile →
          </div>
        </div>
      </div>
    </button>
  );
}

function FeatureCard({
  member,
  icon,
  eyebrow,
  onOpen,
}: {
  member: Member;
  icon: React.ReactNode;
  eyebrow: string;
  onOpen: (m: Member) => void;
}) {
  const photo = photoOf(member);
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="group flex w-full items-center gap-5 rounded-2xl border border-border bg-card p-5 text-left shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition max-w-2xl"
    >
      {photo ? (
        <img
          src={photo}
          alt={member.name}
          className="h-24 w-24 rounded-xl object-cover object-top border border-border"
          loading="lazy"
        />
      ) : (
        <div className="h-24 w-24 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center font-display text-2xl font-bold">
          {initials(member.name)}
        </div>
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {icon} {eyebrow}
        </div>
        <div className="mt-2 font-display text-lg font-bold text-foreground">{member.name}</div>
        <div className="mt-1 text-sm text-muted-foreground leading-snug">{member.designation}</div>
        <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-accent font-semibold group-hover:underline">
          Profile →
        </div>
      </div>
    </button>
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

function ProfileDialog({ member, onClose }: { member: Member; onClose: () => void }) {
  const photo = photoOf(member);
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X size={18} />
        </button>
        <div className="flex items-center gap-4">
          {photo ? (
            <img src={photo} alt={member.name} className="h-20 w-20 rounded-xl object-cover object-top border border-border" />
          ) : (
            <div className="h-20 w-20 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center font-display text-xl font-bold">
              {initials(member.name)}
            </div>
          )}
          <div className="min-w-0 pr-6">
            <div className="font-display text-lg font-bold text-foreground">{member.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">{member.designation}</div>
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-foreground whitespace-pre-line">
          {member.description || "Profile details will be updated soon."}
        </p>
      </div>
    </div>
  );
}

function TeamPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [open, setOpen] = useState<Member | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("team_members")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      setMembers((data as Member[]) ?? []);
    })();
  }, []);

  const group = (key: string) => members.filter((m) => m.group_key === key);
  const dg = group("dg");
  const advisors = group("advisor");
  const directors = group("executive_directors");
  const itTeam = group("it_team");
  const knowledge = group("knowledge_research");

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
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

          {dg.length > 0 && (
            <Section title="Director General">
              <div className="space-y-4">
                {dg.map((m) => (
                  <FeatureCard key={m.id} member={m} icon={<Crown size={14} />} eyebrow="Director General" onOpen={setOpen} />
                ))}
              </div>
            </Section>
          )}

          {advisors.length > 0 && (
            <Section title="Advisor">
              <div className="space-y-4">
                {advisors.map((m) => (
                  <FeatureCard key={m.id} member={m} icon={<UserCheck size={14} />} eyebrow="Honorary Advisor" onOpen={setOpen} />
                ))}
              </div>
            </Section>
          )}

          {directors.length > 0 && (
            <Section title="Executive Directors" subtitle="Leadership team">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {directors.map((m) => <PersonCard key={m.id} member={m} onOpen={setOpen} />)}
              </div>
            </Section>
          )}

          {itTeam.length > 0 && (
            <Section title="IT Team" subtitle="NIUM-IT">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {itTeam.map((m) => <PersonCard key={m.id} member={m} onOpen={setOpen} />)}
              </div>
            </Section>
          )}

          {knowledge.length > 0 && (
            <Section title="Knowledge Management & Research" subtitle="Programmes team">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {knowledge.map((m) => <PersonCard key={m.id} member={m} onOpen={setOpen} />)}
              </div>
            </Section>
          )}
        </div>
      </main>
      {open && <ProfileDialog member={open} onClose={() => setOpen(null)} />}
      <Footer />
    </div>
  );
}
