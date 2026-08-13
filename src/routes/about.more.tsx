import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Building2, Users, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/about/more")({
  component: AboutMorePage,
  head: () => ({
    meta: [
      { title: "About NIUM — The Institution, Management & Government Orders" },
      {
        name: "description",
        content:
          "Learn about the establishment of the National Institute of Urban Management (NIUM), Hyderabad, its governance structure — Board of Governors, Executive Council, Programme Management Committee — and related Government Orders.",
      },
      { property: "og:title", content: "About NIUM — Institution & Management" },
      {
        property: "og:description",
        content:
          "The founding of NIUM in 2013, its governance framework and Government Orders.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

type Block = { heading?: string; paras: string[] };

const sections: { id: string; title: string; icon: typeof Building2; blocks: Block[] }[] = [
  {
    id: "institution",
    title: "The Institution",
    icon: Building2,
    blocks: [
      {
        paras: [
          "The Government of India (GoI), under the Jawaharlal Nehru National Urban Renewal Mission (JNNURM), had organised a national competition for the establishment of National Institutes for Urban Development/Management across the country. After consideration of proposals from various States, the GoI approved the establishment of National Institute for Urban Management (NIUM) in Hyderabad, and committed support under national programmes.",
          "Consequent the above development, the State Government established the National Institute of Urban Management (NIUM) at Hyderabad in 2013. The institution is registered under the Societies Registration Act 2001 (Act 35 of 2001) of the then State Government on 29.07.2013 vide Reg. No. 567 of 2013. The process of institutionalizing and operationalizing NIUM was further strengthened vide G.O. Ms. No. 508 of MA&UD, dated 27.12.2013.",
          "NIUM aspires to evolve into an autonomous institution of excellence specialising in the broad domains of urban development, management, governance, finance, poverty and policy. It aims to be an apex think-tank and action research institute in the urban sector, with the overriding objectives of extending technical assistance and capacity building support to Government Departments and other stakeholders at the National, State and Urban Local Body levels.",
          "The key objectives of NIUM include: conducting quality research, undertaking demand driven stakeholders' training, providing context-specific consultancy services, and advocating policy reforms on urban sector issues. NIUM does not depend on grants from the State Government; its business model is based on earning own revenues as a think tank and capacity building catalyst, working in partnership with other institutions of excellence. NIUM has established partnerships with the Centre for Good Governance and University of Hyderabad (Land, Housing, Transport and Urban Economics Programme).",
        ],
      },
    ],
  },
  {
    id: "management",
    title: "Management",
    icon: Users,
    blocks: [
      {
        paras: [
          "As envisaged in the Memorandum of Association (MoA), the National Institute of Urban Management (NIUM) is governed and managed by the Board of Governors in general and the Executive Council in particular – with delegation to the Director General.",
        ],
      },
      {
        heading: "Board of Governors",
        paras: [
          "The Board of Governors of NIUM is headed by the Hon'ble Chief Minister of Telangana, and the members of the Board are drawn from Government and other relevant organizations.",
          "The Board of Governors is responsible for general superintendence, direction and control of the affairs of the Institute and its income and property. This includes overall policy guidance and directions for the efficient functioning of the Institute in fulfilling its objectives as laid down in the Memorandum of Association.",
        ],
      },
      {
        heading: "Executive Council",
        paras: [
          "The Executive Council is headed by the Hon'ble Minister for Municipal Administration & Urban Development (MA&UD), Government of Telangana, and includes officers drawn from various departments of the Government and other relevant organisations as its members.",
          "The powers of Executive Council are (i) to create technical, administrative, financial, managerial and other posts as required and to appoint persons to such posts and to make payments towards their remuneration from the funds of the NIUM; (ii) to engage experts and consultants as per the requirement of the NIUM and pay their professional fees from the funds of the NIUM; (iii) to do all such things and acts incidental, ancillary or conducive to the discharge of the functions and attainment of any of the objectives of the Institute; and (iv) to exercise such powers as may be delegated by the Board.",
        ],
      },
      {
        heading: "Programme Management Committee",
        paras: [
          "The Programme Management Committee (PMC) of NIUM will take all decisions regarding implementation of programmes by NIUM, in close collaboration with the advisers of the Centers of Excellence/Central and State Governments. The PMC will have full autonomy in the implementation of all the programmes of NIUM.",
        ],
      },
      {
        heading: "Director General",
        paras: [
          "The Director General is the Chief Executive Officer who under the overall guidance and direction of the Board and the Executive Council discharges all administrative and executive functions. For the purpose of effective administration of NIUM and timely decision-making, all day-to-day administrative and financial matters are delegated to the Director General, NIUM under the relevant Government Orders.",
        ],
      },
      {
        heading: "Executive Chair – Programmes (Research and Training)",
        paras: [
          "As regards programmes, including research studies, training modules, and training programmes, an Executive Chair (Programmes) selected by the Government, chairs the Programme Management Committee, responsible for guiding NIUM programmes and undertaking collaborations/strategic alliances. As a subject matter expert/professional, the Executive Chair (Programmes) is expected to support research and training teams in NIUM to ensure high quality and policy-relevant output.",
        ],
      },
    ],
  },
  {
    id: "government-orders",
    title: "Government Orders",
    icon: FileText,
    blocks: [
      {
        paras: [
          "The list of Government Orders relating to the establishment, institutionalisation and functioning of NIUM will be published here shortly.",
        ],
      },
    ],
  },
];

function AboutMorePage() {
  const [open, setOpen] = useState<string | null>("institution");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <span className="mt-8 block text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              More about NIUM
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The institution, its management and Government Orders.
            </h1>
            <p className="mt-5 max-w-3xl text-muted-foreground leading-relaxed">
              How NIUM was established, how it is governed, and the Government Orders that
              shape its mandate.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 space-y-4">
            {sections.map((s, i) => {
              const isOpen = open === s.id;
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : s.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 p-6 text-left"
                  >
                    <span className="h-12 w-12 shrink-0 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center">
                      <s.icon size={22} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-display text-2xl font-bold text-foreground">
                        {s.title}
                      </span>
                    </span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-border px-6 pb-8 pt-6 md:px-8">
                      <div className="space-y-7">
                        {s.blocks.map((b, bi) => (
                          <div key={bi}>
                            {b.heading && (
                              <h2 className="font-display text-xl font-bold text-primary">
                                {b.heading}
                              </h2>
                            )}
                            <div className={b.heading ? "mt-3 space-y-4" : "space-y-4"}>
                              {b.paras.map((p, pi) => (
                                <p
                                  key={pi}
                                  className="text-base text-muted-foreground leading-relaxed"
                                >
                                  {p}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
