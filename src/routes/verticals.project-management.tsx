import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ongoingProjects, completedProjects } from "@/data/project-management";

export const Route = createFileRoute("/verticals/project-management")({
  component: ProjectManagementPage,
  head: () => ({
    meta: [
      { title: 'Project Management — NIUM Vertical' },
      {
        name: "description",
        content:
          "NIUM's Project Management vertical — PMC for the statewide Digital Asset Mapping DGPS surveys, the AI-ICCC cluster, Urban Challenge Fund projects and CDMA applications.",
      },
      { property: "og:title", content: "Project Management at NIUM" },
      {
        property: "og:description",
        content:
          "End-to-end project management consultancy for Telangana urban programmes — ongoing and completed projects.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

import { VerticalProjectBlock as ProjectBlock } from "@/components/VerticalProjectBlock";

function ProjectManagementPage() {
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
                <ClipboardList size={22} />
              </div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold opacity-80">
                Vertical · Project Management
              </span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              End-to-end project management for Telangana&rsquo;s urban programmes.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
              As Project Management Consultant for CDMA and the Government of Telangana,
              NIUM owns implementation, vendor oversight, quality assurance and
              milestone approvals across statewide programmes.
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
              Programmes NIUM is currently managing across Telangana.
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
