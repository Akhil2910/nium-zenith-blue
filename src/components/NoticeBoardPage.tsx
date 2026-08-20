import { motion } from "framer-motion";
import { Inbox } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackButton } from "@/components/BackButton";

/**
 * Shared shell for listing pages (jobs, internships, tenders, competitions)
 * that currently have no open items.
 */
export function NoticeBoardPage({
  eyebrow,
  title,
  intro,
  emptyTitle,
  emptyBody,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  emptyTitle: string;
  emptyBody: string;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              {eyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-dashed border-border bg-card p-10 text-center shadow-[var(--shadow-card)]"
          >
            <div className="mx-auto h-14 w-14 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
              <Inbox size={24} />
            </div>
            <h2 className="mt-5 font-display text-xl font-bold text-foreground">
              {emptyTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
              {emptyBody}
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white hover:opacity-90 transition"
            >
              Contact us
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
