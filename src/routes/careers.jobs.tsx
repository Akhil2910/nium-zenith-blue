import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ChevronDown, Download, ExternalLink, Mail, MapPin, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackButton } from "@/components/BackButton";
import { jobProjects, type JobProject } from "@/data/job-openings";
import { jobNotice, jobTerms } from "@/data/job-instructions";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function downloadInstructions() {
  const n = jobNotice;
  const html = `<html><head><meta charset="utf-8"><title>Application Instructions</title></head><body style="font-family:Arial;font-size:11pt">
<h1>${esc(n.title)}</h1><p>${esc(n.intro)}</p>
<h2>Important — read before applying</h2>
<p><b>How to apply:</b> ${esc(n.howToApply)}</p>
<p><b>Last date for submission:</b> ${esc(n.lastDate ?? "To be announced")}</p>
<p><b>Queries:</b> ${esc(n.email)}</p>
<p><b>Selection process:</b> ${esc(n.selection)}</p>
${jobTerms.map((t) => `<h3>${esc(t.heading)}</h3><ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`).join("")}
</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "NIUM-Application-Instructions.doc";
  a.click();
  URL.revokeObjectURL(a.href);
}

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
            <button onClick={downloadInstructions} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              <Download size={15} /> Download application instructions
            </button>
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
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-accent-foreground"><MapPin size={12} /> {p.location}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-accent-foreground"><Users size={12} /> {p.positions.length} positions</span>
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
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><ChevronDown size={18} strokeWidth={3} className={`transition ${openRole === i ? "rotate-180" : ""}`} /></span>
            </button>
            {openRole === i && (
              <div className="grid gap-4 pb-5 text-sm sm:grid-cols-2">
                <div>
                  <div className={labelCls}>Qualification</div>
                  <p className="mt-1 font-medium text-foreground leading-relaxed">{r.qualification}</p>
                </div>
                <div>
                  <div className={labelCls}>Experience</div>
                  <ExperienceText text={r.experience} />
                </div>
                <div className="sm:col-span-2">
                  <div className={labelCls}>Key responsibilities</div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-foreground leading-relaxed">
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

const labelCls = "text-xs font-bold uppercase tracking-[0.14em] [color:color-mix(in_oklab,var(--accent)_70%,black)]";

function ExperienceText({ text }: { text: string }) {
  const m = text.match(/^\s*(\d+\+?\s*(?:-\s*\d+\s*)?years?)\s*(.*)$/i);
  if (!m) return <p className="mt-1 font-medium text-foreground leading-relaxed">{text}</p>;
  return (
    <p className="mt-1 font-medium text-foreground leading-relaxed">
      <span className="mr-1.5 inline-block rounded-md bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">{m[1]}</span>
      {m[2]}
    </p>
  );
}
