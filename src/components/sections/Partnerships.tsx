import { motion } from "framer-motion";
import trainingImg from "@/assets/event-training.jpg";
import conclaveImg from "@/assets/event-conclave.jpg";
import niuaLogo from "@/assets/partners/niua.png.asset.json";
import tissLogo from "@/assets/partners/tiss.png.asset.json";
import hudcoLogo from "@/assets/partners/hudco.png.asset.json";
import nitcLogo from "@/assets/partners/nitc.png.asset.json";
import unicefLogo from "@/assets/partners/unicef.png.asset.json";
import bordeauxLogo from "@/assets/partners/bordeaux.jpg.asset.json";
import wmfLogo from "@/assets/partners/wmf.png.asset.json";
import aktcLogo from "@/assets/partners/aktc.jpg.asset.json";
import asiLogo from "@/assets/partners/asi.jpg.asset.json";
import qqsudaLogo from "@/assets/partners/qqsuda.jpg.asset.json";
import rcuesLogo from "@/assets/partners/rcues.jpg.asset.json";

const partners: { name: string; logo?: string; bg?: string }[] = [
  { name: "NIUA, New Delhi", logo: niuaLogo.url, bg: "bg-[var(--navy)]" },
  { name: "TISS", logo: tissLogo.url },
  { name: "RCUES Hyderabad", logo: rcuesLogo.url },
  { name: "HUDCO", logo: hudcoLogo.url },
  { name: "NIT Calicut", logo: nitcLogo.url },
  { name: "UNICEF", logo: unicefLogo.url },
  { name: "WMF · Bordeaux Metropole", logo: bordeauxLogo.url },
  { name: "World Monuments Fund", logo: wmfLogo.url },
  { name: "AKTC", logo: aktcLogo.url },
  { name: "ASI", logo: asiLogo.url },
  { name: "QQSUDA", logo: qqsudaLogo.url },
];

export function Partnerships() {
  return (
    <section id="partnerships" className="relative py-14 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Building partnerships
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Convening institutions across India and beyond.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              NIUM is in active dialogue with the National Institute of Urban Affairs (NIUA)
              to serve as its regional arm in Hyderabad, and this year is incubating 12
              professional interns from the Tata Institute of Social Sciences (TISS).
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <img src={trainingImg} alt="NIUM capacity-building cohort" loading="lazy" className="rounded-xl h-44 w-full object-cover shadow-[var(--shadow-card)]" />
              <img src={conclaveImg} alt="Hyderabad Policy Conclave" loading="lazy" className="rounded-xl h-44 w-full object-cover shadow-[var(--shadow-card)]" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-3">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-accent/50 hover:shadow-[var(--shadow-card)] transition"
                >
                  <div className={`h-14 w-14 shrink-0 rounded-lg flex items-center justify-center overflow-hidden ${p.logo ? (p.bg ?? "bg-white border border-border") : "bg-[var(--gradient-band)] text-primary-foreground font-display font-bold text-sm"}`}>
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} className="max-h-11 max-w-11 object-contain" loading="lazy" />
                    ) : (
                      p.name.split(/[\s,]/)[0].slice(0, 2).toUpperCase()
                    )}
                  </div>
                  <div className="font-semibold text-foreground text-lg md:text-xl leading-snug">{p.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
              <div className="text-xs uppercase tracking-wider text-accent font-bold">
                Long-term vision
              </div>
              <p className="mt-2 text-foreground">
                Become the nodal platform channelling CSR investments into Telangana's MAUD
                sector and ULBs — building a curated municipal project pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
