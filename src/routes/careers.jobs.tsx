import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ChevronDown, Download, ExternalLink, Mail, MapPin, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackButton } from "@/components/BackButton";
import { jobProjects, type JobProject } from "@/data/job-openings";
import { jobNotice, jobTerms } from "@/data/job-instructions";
import torDoc from "@/assets/docs/nium-tor.docx.asset.json";

export const Route = createFileRoute("/careers/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [
      { title: "Jobs — Careers at NIUM" },
      {
        name: "description",
        content:
          "Contract openings at NIUM across PDMC, PIUs Warangal & Karimnagar, SPIU-SBM and TCRUTI — roles, qualifications and how to apply.",
      },
      { property: "og:title", content: "Jobs at NIUM — project-wise openings" },
      {
        property: "og:description",
        content: "Contract professionals for urban projects across Telangana. Read the instructions and apply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function JobsPage() {
  const total = jobProjects.reduce((n, p) => n + p.positions.length, 0);
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Career · Job Notification</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">{jobNotice.title}</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">{jobNotice.intro}</p>

          <Instructions />

          <div className="mt-12 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Openings by project <span className="text-muted-foreground font-medium">({total} positions)</span>
            </h2>
            <a href={torDoc.url} download className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              <Download size={15} /> Download full Terms of Reference
            </a>
          </div>
          <div className="mt-6 space-y-6">
            {jobProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Instructions() {
  const [open, setOpen] = useState(false);
  return (
    <section id="instructions" className="mt-10 rounded-2xl border-2 border-accent bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3">
        <AlertTriangle className="text-accent shrink-0" />
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Important — read before applying</h2>
      </div>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">How to apply</dt>
          <dd className="mt-1 text-foreground leading-relaxed">{jobNotice.howToApply}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Last date for submission</dt>
          <dd className="mt-1 font-semibold text-foreground">{jobNotice.lastDate ?? "To be announced"}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Queries</dt>
          <dd className="mt-1">
            <a href={`mailto:${jobNotice.email}`} className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
              <Mail size={14} /> {jobNotice.email}
            </a>
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Selection process</dt>
          <dd className="mt-1 text-foreground leading-relaxed">{jobNotice.selection}</dd>
        </div>
      </dl>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground hover:bg-surface transition"
      >
        {open ? "Hide" : "Read"} full terms of engagement
        <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      {open && (
        <div className="mt-6 space-y-6">
          {jobTerms.map((t) => (
            <div key={t.heading}>
              <h3 className="font-bold text-foreground">{t.heading}</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground leading-relaxed">
                {t.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project: p }: { project: JobProject }) {
  const [openRole, setOpenRole] = useState<number | null>(null);
  return (
    <article className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-snug">{p.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.project}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1"><MapPin size={12} /> {p.location}</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1"><Users size={12} /> {p.positions.length} positions</span>
          </div>
        </div>
        {p.formUrl ? (
          <a href={p.formUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground hover:brightness-95 transition">
            Apply now <ExternalLink size={14} />
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-dashed border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Apply link opening soon
          </span>
        )}
      </div>

      <ul className="mt-6 divide-y divide-border border-t border-border">
        {p.positions.map((r, i) => (
          <li key={r.title + i}>
            <button onClick={() => setOpenRole(openRole === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left">
              <span className="font-semibold text-foreground">{r.title}</span>
              <ChevronDown size={16} className={`shrink-0 text-muted-foreground transition ${openRole === i ? "rotate-180" : ""}`} />
            </button>
            {openRole === i && (
              <div className="grid gap-4 pb-5 text-sm sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Qualification</div>
                  <p className="mt-1 text-foreground leading-relaxed">{r.qualification}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Experience required</div>
                  <p className="mt-1 text-foreground leading-relaxed">{r.experience}</p>
                </div>
                <div className="sm:col-span-2">
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Key responsibilities</div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground leading-relaxed">
                    {r.responsibilities.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
