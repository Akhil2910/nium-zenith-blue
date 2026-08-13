import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MonitorCog } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ongoingProjects, completedProjects } from "@/data/urban-informatics";

export const Route = createFileRoute("/verticals/urban-informatics")({
  component: UrbanInformaticsPage,
  head: () => ({
    meta: [
      { title: 'Urban Informatics — NIUM Vertical' },
      {
        name: "description",
        content:
          "NIUM's Urban Informatics vertical — the AI-based Integrated Command & Control Centre, TG-bPASS and the BuildNow portal, QQSUDA and ULB websites, and in-house application development.",
      },
      { property: "og:title", content: "Urban Informatics at NIUM" },
      {
        property: "og:description",
        content:
          "Digital public infrastructure for Telangana — AI-ICCC, TG-bPASS, BuildNow, websites and applications.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

import { VerticalProjectBlock as ProjectBlock } from "@/components/VerticalProjectBlock";

function UrbanInformaticsPage() {
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
                <MonitorCog size={22} />
              </div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold opacity-80">
                Vertical · Urban Informatics
              </span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              Digital public infrastructure that changed how Telangana builds.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
              From TG-bPASS — India's first statewide self-certification building permission
              system — to the AI-based Integrated Command & Control Centre, NIUM's
              in-house technology team builds and runs live governance platforms.
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
              Live technology engagements across Telangana ULBs.
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
                Training initiatives NIUM has already delivered.
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
