import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackButton } from "@/components/BackButton";

export const Route = createFileRoute("/tenders")({
  component: TendersPage,
  head: () => ({
    meta: [
      { title: "Tenders — NIUM Procurement Notices" },
      {
        name: "description",
        content:
          "Live tenders, RFPs, EOIs and pre-bid notices issued by the National Institute of Urban Management, Government of Telangana.",
      },
      { property: "og:title", content: "Tenders at NIUM" },
      {
        property: "og:description",
        content: "Procurement notices, RFPs and EOIs issued by NIUM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const tenders = [
  {
    tenderId: "715643",
    fileNo: "949918/NIUM-ITP/5/2026",
    onBehalfOf: "Khammam Municipal Corporation",
    department: "Municipal Administration, Govt. of Telangana",
    title:
      "AI-Enabled Integrated Command & Control Centre (AI-ICCC), Khammam Municipal Corporation",
    scope:
      "NIUM, Hyd., on behalf of Khammam Municipal Corporation, is inviting online tenders for engaging an agency for “AI-ENABLED INTEGRATED COMMAND & CONTROL CENTRE (AI-ICCC) Design, Supply, Installation, Integration, Commissioning, Operation & Maintenance of an AI + IoT + GIS + Cloud + Cybersecurity Smart Urban Governance Platform on a Hub-and-Spoke Architecture across 26 Urban Local Bodies (3 Municipal Corporations + 23 Municipalities) in 7 Districts Khammam – Warangal – Karimnagar Corridor” on the TG e-procurement site.",
    link: "https://tender.telangana.gov.in",
  },
];

function TendersPage() {
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
              Tenders
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Tenders &amp; procurement notices
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              RFPs, EOIs, pre-bid notices and corrigenda issued by NIUM.
            </p>
          </div>

          <div className="space-y-6">
            {tenders.map((t, i) => (
              <motion.article
                key={t.tenderId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-band)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                    <FileText size={13} /> Tender Notice
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Tender ID: {t.tenderId}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-2xl font-bold text-foreground leading-snug">
                  {t.title}
                </h2>

                <dl className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      File No.
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{t.fileNo}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Issued on behalf of
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{t.onBehalfOf}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Department
                    </dt>
                    <dd className="mt-1 font-medium text-foreground">{t.department}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  {t.scope}
                </p>

                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white hover:opacity-90 transition"
                >
                  View on TG e-Procurement <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
