import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Landmark } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
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

import { VerticalProjectBlock as ProjectBlock } from "@/components/VerticalProjectBlock";
import { BackButton } from "@/components/BackButton";

function HeritageConservationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
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
