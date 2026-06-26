import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

// Public NIUM Google Calendars
const CAL_IDS = [
  "c_60e09bfeebb149b33557c85daa6234a0a92b39601dfd72908841ec51f1b3d769a@group.calendar.google.com",
  "c_d227dcb4d94352b785c4a633cb4eed5eb2b4a91b4af813ddc1620eed5de871b2@group.calendar.google.com",
];

const buildEmbedUrl = () => {
  const base = "https://calendar.google.com/calendar/embed";
  const params = new URLSearchParams({
    ctz: "Asia/Kolkata",
    mode: "MONTH",
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showPrint: "0",
    showTabs: "0",
    showCalendars: "0",
    showTz: "0",
    wkst: "2",
    bgcolor: "#ffffff",
  });
  CAL_IDS.forEach((id) => params.append("src", id));
  // accent colors
  ["%23C9A227", "%231E3A8A"].forEach((c) => params.append("color", c));
  return `${base}?${params.toString()}`;
};

export function EventsCalendar() {
  return (
    <section id="calendar" className="relative py-24 bg-[var(--navy)] text-white overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--cyan-brand)]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Telangana Rising · Events Calendar
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              What's happening at NIUM, month by month.
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Swipe through the months to see workshops, conclaves, trainings and field
              programmes the institute is hosting.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/70">
            <CalendarDays size={14} className="text-accent" />
            Use the arrows in the calendar to switch months
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/15 bg-white shadow-[var(--shadow-elevated)] overflow-hidden"
        >
          <iframe
            title="NIUM Events Calendar"
            src={buildEmbedUrl()}
            className="w-full h-[680px] block"
            frameBorder={0}
            scrolling="no"
          />
        </motion.div>
      </div>
    </section>
  );
}
