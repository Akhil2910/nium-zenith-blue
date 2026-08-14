import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Megaphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ongoingProjects } from "@/data/communication-outreach";

export const Route = createFileRoute("/verticals/communication-outreach")({
  component: CommunicationOutreachPage,
  head: () => ({
    meta: [
      { title: "Communication & Outreach — NIUM Vertical" },
      {
        name: "description",
        content:
          "NIUM's Communication & Outreach vertical — citizen engagement through the Happy Sundays programme, the Urban Bytes knowledge series and the NIUM Road Show.",
      },
      { property: "og:title", content: "Communication & Outreach at NIUM" },
      {
        property: "og:description",
        content:
          "Citizen engagement initiatives — Happy Sundays, Urban Bytes and outreach across Telangana's Urban Local Bodies.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

import { VerticalProjectBlock as ProjectBlock } from "@/components/VerticalProjectBlock";
import { BackButton } from "@/components/BackButton";

const stats = [
  { value: "12", label: "Editions of Urban Bytes issued" },
  { value: "200+", label: "Good practices documented" },
  { value: "150+", label: "ULBs & departments showcased" },
  { value: "1M+", label: "Readers reached across platforms" },
];

function CommunicationOutreachPage() {
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
                <Megaphone size={22} />
              </div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold opacity-80">
                Vertical · Communication &amp; Outreach
              </span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              Citizen engagement initiatives.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
              Making urban governance visually accessible, understandable and actionable — through
              activated public spaces, data-driven storytelling and sustained outreach with
              Telangana&rsquo;s Urban Local Bodies.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-block rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-white/20 transition"
            >
              {ongoingProjects.length} Projects
            </a>
          </div>
        </section>

        {/* Impact */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent">
                  {s.value}
                </div>
                <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
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
              Communication and citizen engagement programmes led by NIUM.
            </p>
          </div>
          <div className="space-y-8">
            {ongoingProjects.map((p, i) => (
              <ProjectBlock key={p.id} project={p} index={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
