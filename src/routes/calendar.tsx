import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Calendar as CalIcon, ChevronLeft, ChevronRight, MapPin, Users, X, Sparkles, Filter, LogIn, Loader2, CheckCircle2, Download } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/calendar")({
  component: CalendarPage,
  head: () => ({
    meta: [
      { title: "Annual Calendar — NIUM Training & Capacity Building 2026" },
      { name: "description", content: "Annual calendar of training programmes, workshops and convenings hosted by the National Institute of Urban Management, Government of Telangana." },
      { property: "og:title", content: "NIUM Annual Calendar 2026" },
      { property: "og:description", content: "Browse and register for NIUM and MCR-HRD capacity building programmes month by month." },
    ],
  }),
});

type EventRow = {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  theme: string | null;
  subtheme: string | null;
  participants: string | null;
  coordinator: string | null;
  department: string | null;
  source: string | null;
};

const SOURCES = ["All", "NIUM", "MCR-HRD"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function CalendarPage() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState("All");
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear() >= 2026 ? today.getFullYear() : 2026, today.getMonth(), 1));
  const [selected, setSelected] = useState<EventRow | null>(null);
  const [showAll, setShowAll] = useState(false);

  function downloadCSV(rows: EventRow[], filename: string) {
    const header = ["Title","Start","End","Source","Theme","Sub-theme","Participants","Coordinator","Department"];
    const esc = (v: string | null | undefined) => `"${(v ?? "").replace(/"/g, '""')}"`;
    const lines = [header.join(","), ...rows.map((r) =>
      [r.title, r.start_date, r.end_date, r.source, r.theme, r.subtheme, r.participants, r.coordinator, r.department].map(esc).join(",")
    )];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }


  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("events").select("*").order("start_date");
      setEvents((data as EventRow[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(
    () => events.filter((e) => source === "All" || e.source === source),
    [events, source]
  );

  const monthEvents = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    return filtered.filter((e) => {
      const start = new Date(e.start_date);
      const end = new Date(e.end_date);
      return (start.getFullYear() === y && start.getMonth() === m) ||
             (end.getFullYear() === y && end.getMonth() === m) ||
             (start <= new Date(y, m + 1, 0) && end >= new Date(y, m, 1));
    }).sort((a, b) => a.start_date.localeCompare(b.start_date));
  }, [filtered, cursor]);

  const monthGrid = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const first = new Date(y, m, 1);
    const startOffset = first.getDay();
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const cells: { day: number | null; events: EventRow[] }[] = [];
    for (let i = 0; i < startOffset; i++) cells.push({ day: null, events: [] });
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(y, m, d);
      const dayEvents = filtered.filter((e) => {
        const s = new Date(e.start_date);
        const ed = new Date(e.end_date);
        return date >= new Date(s.getFullYear(), s.getMonth(), s.getDate()) && date <= new Date(ed.getFullYear(), ed.getMonth(), ed.getDate());
      });
      cells.push({ day: d, events: dayEvents });
    }
    return cells;
  }, [filtered, cursor]);

  const moveMonth = (d: number) => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + d, 1));
  const isToday = (day: number | null) =>
    day && today.getFullYear() === cursor.getFullYear() && today.getMonth() === cursor.getMonth() && today.getDate() === day;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[var(--navy)] text-white overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--cyan-brand)]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-accent font-semibold">
                <Sparkles size={14} /> Annual Calendar · FY 2026
              </div>
              <h1 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                <span className="text-[var(--gold)]">Training and capacity building</span>.
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
                Every training programme, workshop and convening hosted by NIUM and MCR-HRD — across the year, in one place. Browse, plan and register.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-5 py-3 hover:bg-white/10 transition"
              >
                <span className="text-3xl font-display font-bold text-[var(--gold)]">{events.length}</span>
                <div className="text-xs uppercase tracking-[0.2em] text-white/80 leading-tight text-left">
                  Events<br />on calendar
                </div>
              </button>
              <button
                onClick={() => downloadCSV(events, `nium-calendar-all-${events.length}-events.csv`)}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--navy)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] hover:brightness-95 transition"
                title="Download all events as CSV"
              >
                <Download size={14} /> Download all
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Controls */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button onClick={() => moveMonth(-1)} className="h-10 w-10 rounded-full border border-border hover:bg-surface flex items-center justify-center transition">
              <ChevronLeft size={18} />
            </button>
            <div className="px-4 min-w-[210px] text-center">
              <div className="font-display text-xl font-bold text-foreground">{MONTHS[cursor.getMonth()]} {cursor.getFullYear()}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{monthEvents.length} events this month</div>
            </div>
            <button onClick={() => moveMonth(1)} className="h-10 w-10 rounded-full border border-border hover:bg-surface flex items-center justify-center transition">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-muted-foreground" />
            {SOURCES.map((s) => (
              <button
                key={s}
                onClick={() => setSource(s)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  source === s ? "bg-[var(--navy)] text-white" : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {loading ? (
          <div className="py-32 flex justify-center text-muted-foreground"><Loader2 className="animate-spin" /></div>
        ) : (
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8">
            {/* Month grid */}
            <motion.div
              key={cursor.toISOString() + source}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="grid grid-cols-7 border-b border-border bg-surface">
                {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                  <div key={d} className="px-3 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground font-bold text-center">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {monthGrid.map((cell, i) => (
                  <div key={i} className={`min-h-[130px] border-r border-b border-border last:border-r-0 p-2 ${cell.day === null ? "bg-surface/40" : ""}`}>
                    {cell.day && (
                      <>
                        <div className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[15px] font-bold ${isToday(cell.day) ? "bg-accent text-accent-foreground" : "text-foreground"}`}>
                          {cell.day}
                        </div>
                        <div className="mt-1.5 space-y-1">
                          {cell.events.slice(0, 3).map((ev) => (
                            <button
                              key={ev.id}
                              onClick={() => setSelected(ev)}
                              title={ev.title}
                              className={`block w-full text-left text-[13px] leading-snug font-semibold line-clamp-2 rounded px-1.5 py-1 transition hover:brightness-95 ${
                                ev.source === "MCR-HRD"
                                  ? "bg-[var(--cyan-brand)]/20 text-[var(--navy)]"
                                  : "bg-accent/25 text-[var(--navy)]"
                              }`}
                            >
                              {ev.title}
                            </button>
                          ))}
                          {cell.events.length > 3 && (
                            <div className="text-[13px] text-foreground font-semibold px-1.5">+{cell.events.length - 3} more</div>
                          )}
                        </div>

                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* List view */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">Schedule · {MONTHS[cursor.getMonth()]}</div>
              {monthEvents.length === 0 && (
                <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No events this month.</div>
              )}
              {monthEvents.map((ev, i) => (
                <motion.button
                  key={ev.id}
                  onClick={() => setSelected(ev)}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="group w-full text-left rounded-xl border border-border bg-card p-5 hover:shadow-[var(--shadow-elevated)] hover:border-accent/40 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 rounded-lg p-3 text-center min-w-[64px] ${ev.source === "MCR-HRD" ? "bg-[var(--cyan-brand)]/10 text-[var(--cyan-brand)]" : "bg-accent/10 text-[color:var(--gold)]"}`}>
                      <div className="text-[10px] uppercase tracking-[0.18em] font-bold">{MONTHS[new Date(ev.start_date).getMonth()].slice(0,3)}</div>
                      <div className="text-2xl font-display font-bold leading-none mt-1">{new Date(ev.start_date).getDate()}</div>
                      {ev.start_date !== ev.end_date && (
                        <div className="text-[10px] mt-1 opacity-70">→ {new Date(ev.end_date).getDate()}</div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">{ev.source}{ev.theme && ` · ${ev.theme}`}</div>
                      <h3 className="mt-1 text-sm md:text-base font-bold text-foreground group-hover:text-accent transition">{ev.title}</h3>
                      {ev.subtheme && <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{ev.subtheme}</p>}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </main>

      <AnimatePresence>
        {selected && <EventDialog event={selected} onClose={() => setSelected(null)} />}
        {showAll && (
          <AllEventsDialog
            events={events}
            onClose={() => setShowAll(false)}
            onDownload={() => downloadCSV(events, `nium-calendar-all-${events.length}-events.csv`)}
            onSelect={(ev) => { setShowAll(false); setSelected(ev); }}
          />
        )}
      </AnimatePresence>


      <Footer />
    </div>
  );
}

function EventDialog({ event, onClose }: { event: EventRow; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const { data: ud } = await supabase.auth.getUser();
    if (!ud.user) {
      setSubmitting(false);
      return toast.error("Please sign in to register for events.");
    }
    const { error } = await supabase.from("registrations").insert({
      event_id: event.id,
      user_id: ud.user.id,
      ...form,
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    setDone(true);
    toast.success("Registration confirmed.");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-foreground shadow">
          <X size={16} />
        </button>
        <div className={`p-7 text-white ${event.source === "MCR-HRD" ? "bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--navy)]" : "bg-gradient-to-br from-[var(--navy)] to-[color:var(--gold)]"}`}>
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold opacity-80">{event.source}{event.theme && ` · ${event.theme}`}</div>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight">{event.title}</h2>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm opacity-90">
            <span className="inline-flex items-center gap-1.5"><CalIcon size={14} /> {fmtRange(event.start_date, event.end_date)}</span>
            {event.coordinator && <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {event.coordinator}</span>}
          </div>
        </div>

        <div className="overflow-auto p-7 space-y-5">
          {event.subtheme && (
            <Section label="Sub-theme">{event.subtheme}</Section>
          )}
          {event.participants && (
            <Section label="Participants"><div className="flex items-start gap-2"><Users size={14} className="mt-0.5 text-muted-foreground" />{event.participants}</div></Section>
          )}
          {event.department && (
            <Section label="Department">{event.department}</Section>
          )}

          {done ? (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-5 text-emerald-900 text-sm flex items-center gap-2">
              <CheckCircle2 size={16} /> You're registered. We'll send confirmation to {form.email}.
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-xl border border-border bg-surface/50 p-5 space-y-3">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-semibold">Register</div>
              <div className="grid md:grid-cols-2 gap-3">
                <DInput label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <DInput label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <DInput label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                <DInput label="Organization" value={form.organization} onChange={(v) => setForm({ ...form, organization: v })} />
              </div>
              <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--navy)] text-white font-semibold py-2.5 text-sm hover:opacity-90 disabled:opacity-50 transition">
                {submitting ? <Loader2 size={14} className="animate-spin" /> : <LogIn size={14} />}
                {submitting ? "Submitting…" : "Confirm registration"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AllEventsDialog({
  events,
  onClose,
  onDownload,
  onSelect,
}: {
  events: EventRow[];
  onClose: () => void;
  onDownload: () => void;
  onSelect: (ev: EventRow) => void;
}) {
  const grouped = useMemo(() => {
    const map = new Map<string, EventRow[]>();
    for (const e of events) {
      const d = new Date(e.start_date);
      const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2, "0")}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(e);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [events]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between gap-4 p-6 border-b border-border bg-[var(--navy)] text-white">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold opacity-80">All events on calendar</div>
            <h2 className="mt-1 font-display text-2xl font-bold">{events.length} events · FY 2026</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onDownload}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] text-[var(--navy)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] hover:brightness-95"
            >
              <Download size={14} /> CSV
            </button>
            <button onClick={onClose} className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="overflow-auto p-6 space-y-6">
          {grouped.map(([key, rows]) => {
            const [y, m] = key.split("-").map(Number);
            return (
              <div key={key}>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground font-bold mb-2">
                  {MONTHS[m]} {y} · {rows.length}
                </div>
                <div className="divide-y divide-border rounded-xl border border-border">
                  {rows.map((ev) => (
                    <button
                      key={ev.id}
                      onClick={() => onSelect(ev)}
                      className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-surface transition"
                    >
                      <div className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${ev.source === "MCR-HRD" ? "bg-[var(--cyan-brand)]/15 text-[var(--navy)]" : "bg-accent/20 text-[var(--navy)]"}`}>
                        {new Date(ev.start_date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-foreground">{ev.title}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{ev.source}{ev.theme && ` · ${ev.theme}`}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}


function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">{label}</div>
      <div className="mt-1 text-sm text-foreground">{children}</div>
    </div>
  );
}

function DInput({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function fmtRange(s: string, e: string) {
  const sd = new Date(s);
  const ed = new Date(e);
  if (s === e) return sd.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  return `${sd.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })} → ${ed.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}`;
}
