import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, X } from "lucide-react";

import vol1Pdf from "@/assets/newsletters/vol1.pdf.asset.json";
import vol2Pdf from "@/assets/newsletters/vol2.pdf.asset.json";
import vol3Pdf from "@/assets/newsletters/vol3.pdf.asset.json";
import vol4Pdf from "@/assets/newsletters/vol4.pdf.asset.json";
import vol6Pdf from "@/assets/newsletters/vol6.pdf.asset.json";
import vol7Pdf from "@/assets/newsletters/vol7.pdf.asset.json";
import vol10Pdf from "@/assets/newsletters/vol10.pdf.asset.json";
import vol11Pdf from "@/assets/newsletters/vol11.pdf.asset.json";
import vol12Pdf from "@/assets/newsletters/vol12.pdf.asset.json";
import vol13Pdf from "@/assets/newsletters/vol13.pdf.asset.json";

import vol1Cover from "@/assets/newsletters/covers/vol1-1.jpg.asset.json";
import vol2Cover from "@/assets/newsletters/covers/vol2-1.jpg.asset.json";
import vol3Cover from "@/assets/newsletters/covers/vol3-1.jpg.asset.json";
import vol4Cover from "@/assets/newsletters/covers/vol4-1.jpg.asset.json";
import vol6Cover from "@/assets/newsletters/covers/vol6-1.jpg.asset.json";
import vol7Cover from "@/assets/newsletters/covers/vol7-1.jpg.asset.json";
import vol10Cover from "@/assets/newsletters/covers/vol10-1.jpg.asset.json";
import vol11Cover from "@/assets/newsletters/covers/vol11-1.jpg.asset.json";
import vol12Cover from "@/assets/newsletters/covers/vol12-1.jpg.asset.json";
import vol13Cover from "@/assets/newsletters/covers/vol13-1.jpg.asset.json";

type Newsletter = { vol: number; cover: string; pdf: string };

const newsletters: Newsletter[] = [
  { vol: 13, cover: vol13Cover.url, pdf: vol13Pdf.url },
  { vol: 12, cover: vol12Cover.url, pdf: vol12Pdf.url },
  { vol: 11, cover: vol11Cover.url, pdf: vol11Pdf.url },
  { vol: 10, cover: vol10Cover.url, pdf: vol10Pdf.url },
  { vol: 7, cover: vol7Cover.url, pdf: vol7Pdf.url },
  { vol: 6, cover: vol6Cover.url, pdf: vol6Pdf.url },
  { vol: 4, cover: vol4Cover.url, pdf: vol4Pdf.url },
  { vol: 3, cover: vol3Cover.url, pdf: vol3Pdf.url },
  { vol: 2, cover: vol2Cover.url, pdf: vol2Pdf.url },
  { vol: 1, cover: vol1Cover.url, pdf: vol1Pdf.url },
];

function PdfViewer({ item, onClose }: { item: Newsletter; onClose: () => void }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const viewerSrc = `${item.pdf}#toolbar=1&navpanes=0`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[92vh] rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-elevated)] flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">
              Telangana Urban Bytes
            </div>
            <div className="text-sm font-semibold text-foreground">Volume {item.vol}</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="h-9 w-9 rounded-full border border-border bg-background hover:bg-muted text-foreground flex items-center justify-center transition"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex-1 bg-muted relative">
          <iframe
            src={viewerSrc}
            title={`Urban Bytes Volume ${item.vol}`}
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}


export function Publications() {
  const [open, setOpen] = useState<Newsletter | null>(null);
  const [featured, ...rest] = newsletters;

  return (
    <section id="publications" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              <BookOpen size={14} /> Newsletters
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Telangana <span className="text-accent">Urban Bytes</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Field notes, programme updates and policy briefs from NIUM — published periodically.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.button
            type="button"
            onClick={() => setOpen(featured)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="group relative lg:col-span-5 rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition text-left"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={featured.cover}
                alt={`Telangana Urban Bytes Volume ${featured.vol}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.25em] opacity-80">Volume {featured.vol}</div>
                <h3 className="mt-2 text-3xl font-bold leading-tight">Telangana Urban Bytes</h3>
              </div>
            </div>
          </motion.button>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-5 content-start">
            {rest.map((n, i) => (
              <motion.button
                key={n.vol}
                type="button"
                onClick={() => setOpen(n)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={n.cover}
                    alt={`Telangana Urban Bytes Volume ${n.vol}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-90" />
                  <div className="absolute top-3 left-3 rounded-md bg-background/90 backdrop-blur px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">
                    Vol {n.vol}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-primary-foreground">
                    <div className="text-[11px] font-semibold uppercase tracking-wider opacity-90">
                      Urban Bytes
                    </div>
                    <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {open && <PdfViewer item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
