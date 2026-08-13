import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Landmark, CheckCircle2, Dot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import type { RdImage, RdProject } from "@/data/research-development";
import { ongoingProjects, completedProjects } from "@/data/heritage-conservation";

export const Route = createFileRoute("/verticals/heritage-conservation")({
  component: HeritageConservationPage,
  head: () => ({
    meta: [
      { title: "Heritage and Conservation — NIUM Vertical" },
      {
        name: "description",
        content:
          "NIUM's Heritage and Conservation vertical — Shaikpet Sarai, QQSUDA collaboration, Heritage Partner Scheme, Jaipur UNESCO plan, Alampur framework, Musi river heritage and stepwell restorations.",
      },
      { property: "og:title", content: "Heritage and Conservation at NIUM" },
      {
        property: "og:description",
        content:
          "Conservation, adaptive reuse and heritage management — from Qutb Shahi stepwells to a UNESCO World Heritage city plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Gallery({ images }: { images?: RdImage[] }) {
  if (!images || images.length === 0) return null;
  return (
    <div
      className={`mt-6 grid gap-4 ${
        images.length === 1 ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {images.map((img, i) => (
        <figure
          key={img.src + i}
          className="group overflow-hidden rounded-2xl border border-border bg-background"
        >
          <div className="overflow-hidden bg-muted">
            <img
              src={img.src}
              alt={img.caption ?? "Project visual"}
              loading="lazy"
              className="w-full h-56 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          {img.caption && (
            <figcaption className="px-4 py-3 text-xs text-muted-foreground leading-relaxed border-t border-border">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex gap-2 text-sm text-foreground/85 leading-relaxed">
          <Dot className="shrink-0 text-accent -ml-1.5 mt-0.5" size={18} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectBlock({
  project,
  index,
  completed,
}: {
  project: RdProject;
  index: number;
  completed?: boolean;
}) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 md:p-9 shadow-[var(--shadow-card)]"
    >
      <div className="flex items-start gap-4">
        <div
          className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ${
            completed ? "bg-accent/10 text-accent" : "text-primary-foreground"
          }`}
          style={completed ? undefined : { backgroundImage: "var(--gradient-band)" }}
        >
          {completed ? (
            <CheckCircle2 size={20} />
          ) : (
            <span className="font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider font-semibold">
            {project.period && <span className="text-muted-foreground">{project.period}</span>}
            {project.partner && <span className="text-accent">{project.partner}</span>}
          </div>
        </div>
      </div>

      {project.intro && (
        <p className="mt-5 text-sm md:text-base text-foreground/90 leading-relaxed">
          {project.intro}
        </p>
      )}

      <Bullets items={project.bullets} />
      <Gallery images={project.images} />

      {project.subProjects?.map((sp) => (
        <div
          key={sp.name}
          className="mt-8 rounded-2xl border-l-4 border-accent bg-accent/[0.04] pl-5 pr-4 py-5"
        >
          <h4 className="text-base md:text-lg font-bold text-foreground leading-snug">
            {sp.name}
          </h4>
          {sp.period && (
            <span className="mt-1 block text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
              {sp.period}
            </span>
          )}
          <Bullets items={sp.bullets} />
          <Gallery images={sp.images} />
        </div>
      ))}
    </motion.article>
  );
}

function HeritageConservationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section
          className="relative text-primary-foreground py-20 overflow-hidden"
          style={{ backgroundImage: "var(--gradient-band)" }}
        >
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative mx-auto max-w-6xl px-6">
            <Link
              to="/"
              hash="focus-areas"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] font-semibold opacity-80 hover:opacity-100 transition"
            >
              <ArrowLeft size={14} /> Back to focus areas
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                <Landmark size={22} />
              </div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold opacity-80">
                Vertical · Heritage and Conservation
              </span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              Reclaiming the Deccan’s living heritage, stone by stone.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
              From the Qutb Shahi resthouse at Shaikpet to lost stepwells rediscovered on
              century-old survey maps, NIUM works with QQSUDA, HMDA, GHMC and the Aga Khan
              Trust for Culture to conserve, adaptively reuse and sustainably manage
              heritage — in Telangana and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-white/20 transition"
              >
                {ongoingProjects.length} Projects
              </a>
              <a
                href="#completed"
                className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-white/20 transition"
              >
                {completedProjects.length} Completed projects
              </a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Section 01
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
              Projects
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Live conservation, planning and outreach engagements.
            </p>
          </div>
          <div className="space-y-8">
            {ongoingProjects.map((p, i) => (
              <ProjectBlock key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* Completed */}
        <section id="completed" className="scroll-mt-28 bg-muted/30 border-y border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                Section 02
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
                Completed Projects
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Conservation, restoration and heritage outreach NIUM has already delivered.
              </p>
            </div>
            <div className="space-y-8">
              {completedProjects.map((p, i) => (
                <ProjectBlock key={p.id} project={p} index={i} completed />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
