import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { completedVerticals } from "@/data/completed-projects";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/projects/completed")({
  component: CompletedProjectsPage,
  head: () => ({
    meta: [
      { title: "Completed Projects — NIUM" },
      {
        name: "description",
        content:
          "A dozen years of NIUM's completed work across research, training, urban informatics, project management, heritage, sanitation and outreach — from TG-bPASS to the 111 GO catchment survey.",
      },
      { property: "og:title", content: "What NIUM has delivered — Completed Projects" },
      {
        property: "og:description",
        content:
          "The full record of NIUM's completed projects, grouped by vertical — showcasing our contribution to India's urban story.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function CompletedProjectsPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      }
    }
  }, []);

  const total = completedVerticals.reduce((n, v) => n + v.projects.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
        {/* Hero */}
        <section className="relative bg-[var(--gradient-band)] text-primary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] font-semibold opacity-80 hover:opacity-100 transition"
            >
              <ArrowLeft size={14} /> Back to home
            </Link>
            <span className="mt-6 block text-xs uppercase tracking-[0.22em] font-semibold opacity-80">
              Legacy · 2013 – 2025
            </span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-bold leading-tight max-w-4xl">
              What NIUM has delivered for India.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg opacity-90 leading-relaxed">
              A dozen years, {total}+ flagship projects, and a track record that spans
              India's first fully-online building permission system, the state's
              landmark heritage rediscoveries, and the training playbook now studied
              from Odisha to Nepal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {completedVerticals.map((v) => (
                <a
                  key={v.slug}
                  href={`#${v.slug}`}
                  className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-white/20 transition"
                >
                  {v.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        <div className="mx-auto max-w-7xl px-6 py-20 space-y-24">
          {completedVerticals.map((v, vi) => (
            <section key={v.slug} id={v.slug} className="scroll-mt-28">
              <div className="flex items-baseline justify-between flex-wrap gap-3 mb-10">
                <div>
                  <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                    Vertical 0{vi + 1}
                  </span>
                  <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-foreground">
                    {v.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground italic">{v.tagline}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {v.projects.length} completed project{v.projects.length !== 1 && "s"}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {v.projects.map((p, pi) => (
                  <motion.article
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: (pi % 2) * 0.05 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                        <CheckCircle2 size={18} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground leading-snug">
                          {p.name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                          {p.year && <span>{p.year}</span>}
                          {p.client && <span className="text-accent">{p.client}</span>}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-foreground/85 leading-relaxed">
                      {p.summary}
                    </p>

                    {p.impact && (
                      <div className="mt-4 rounded-xl border-l-4 border-accent bg-accent/5 p-3">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">
                          Impact
                        </div>
                        <p className="mt-1 text-sm text-foreground/90 leading-relaxed">
                          {p.impact}
                        </p>
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
