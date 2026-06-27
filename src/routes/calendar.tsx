import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Calendar as CalIcon, ChevronLeft, ChevronRight, MapPin, Users, X, Sparkles, Filter, LogIn, Loader2, CheckCircle2 } from "lucide-react";
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
                Telangana's calendar of <span className="text-[var(--gold)]">urban capacity</span>.
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
                Every training programme, workshop and convening hosted by NIUM and MCR-HRD — across the year, in one place. Browse, plan and register.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur px-5 py-3">
              <span className="text-3xl font-display font-bold text-[var(--gold)]">{events.length}</span>
              <div className="text-xs uppercase tracking-[0.2em] text-white/70 leading-tight">
                Events<br />on calendar
              </div>
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
                  <div key={d} className="px-3 py-2.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold text-center">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {monthGrid.map((cell, i) => (
                  <div key={i} className={`min-h-[110px] border-r border-b border-border last:border-r-0 p-2 ${cell.day === null ? "bg-surface/40" : ""}`}>
                    {cell.day && (
                      <>
                        <div className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${isToday(cell.day) ? "bg-accent text-accent-foreground" : "text-foreground"}`}>
                          {cell.day}
                        </div>
                        <div className="mt-1.5 space-y-1">
                          {cell.events.slice(0, 3).map((ev) => (
                            <button
                              key={ev.id}
                              onClick={() => setSelected(ev)}
                              title={ev.title}
                              className={`block w-full text-left text-[10px] leading-tight font-medium truncate rounded px-1.5 py-1 transition hover:brightness-95 ${
                                ev.source === "MCR-HRD" ? "bg-[var(--cyan-brand)]/15 text-[var(--cyan-brand)]" : "bg-accent/15 text-[color:var(--gold)]"
                              }`}
                            >
                              {ev.title}
                            </button>
                          ))}
                          {cell.events.length > 3 && (
                            <div className="text-[10px] text-muted-foreground px-1.5">+{cell.events.length - 3} more</div>
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
    const { error } = await supabase.from("registrations").insert({
      event_id: event.id,
      user_id: ud.user?.id ?? null,
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
