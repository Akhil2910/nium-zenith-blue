import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, Dot } from "lucide-react";
import type { RdImage, RdProject } from "@/data/research-development";

export function Gallery({ images }: { images?: RdImage[] }) {
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

export function Bullets({ items }: { items?: string[] }) {
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

export function VerticalProjectBlock({
  project,
  index,
  completed,
}: {
  project: RdProject;
  index: number;
  completed?: boolean;
}) {
  const hasDetails = Boolean(
    project.intro ||
      (project.bullets && project.bullets.length) ||
      (project.images && project.images.length) ||
      (project.subProjects && project.subProjects.length),
  );
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 md:p-9 shadow-[var(--shadow-card)]"
    >
      <button
        type="button"
        onClick={() => hasDetails && setOpen((v) => !v)}
        aria-expanded={hasDetails ? open : undefined}
        className={`w-full flex items-start gap-4 text-left ${hasDetails ? "cursor-pointer" : "cursor-default"}`}
      >
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

        <div className="min-w-0 flex-1">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider font-semibold">
            {project.period && <span className="text-muted-foreground">{project.period}</span>}
            {project.partner && <span className="text-accent">{project.partner}</span>}
          </div>
        </div>

        {hasDetails && (
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {open ? "Less" : "More"}
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {hasDetails && open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
