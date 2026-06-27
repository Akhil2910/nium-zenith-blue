import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Calendar as CalIcon, LogOut, Plus, Trash2, Users, Shield, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
  head: () => ({ meta: [{ title: "Admin · NIUM Annual Calendar" }] }),
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

function AdminPage() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [regsCount, setRegsCount] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    start_date: "",
    end_date: "",
    theme: "",
    subtheme: "",
    participants: "",
    coordinator: "NIUM",
    department: "MA&UD",
    source: "NIUM",
  });

  useEffect(() => {
    (async () => {
      const { data: ud } = await supabase.auth.getUser();
      const uid = ud.user?.id;
      setUserId(uid ?? null);
      if (!uid) return;
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid);
      setIsAdmin(Boolean(roles?.some((r) => r.role === "admin")));
      await loadEvents();
      setLoading(false);
    })();
  }, []);

  async function loadEvents() {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("start_date", { ascending: true });
    setEvents((data as EventRow[]) ?? []);
    const { data: regs } = await supabase.from("registrations").select("event_id");
    const counts: Record<string, number> = {};
    (regs ?? []).forEach((r: any) => (counts[r.event_id] = (counts[r.event_id] ?? 0) + 1));
    setRegsCount(counts);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("events").insert({
      ...form,
      end_date: form.end_date || form.start_date,
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Event added");
    setForm({ ...form, title: "", start_date: "", end_date: "", theme: "", subtheme: "", participants: "" });
    loadEvents();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    loadEvents();
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--navy)] text-white flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-lg">
              <Shield size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent">NIUM Admin Console</div>
              <div className="font-display text-xl font-bold">Annual Calendar</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/calendar" className="text-sm text-white/70 hover:text-white">View public calendar →</Link>
            <button onClick={signOut} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10">
              <LogOut size={13} /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        {!isAdmin && (
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>Read-only access.</strong> Your account ({userId?.slice(0, 8)}…) does not have the admin role yet.
            Ask a database admin to grant <code className="font-mono">admin</code> in the <code className="font-mono">user_roles</code> table, or run:
            <pre className="mt-3 overflow-auto rounded bg-amber-100 p-3 text-[11px]">{`INSERT INTO user_roles (user_id, role) VALUES ('${userId}', 'admin');`}</pre>
          </div>
        )}

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          {/* Create event */}
          <section className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] h-fit">
            <div className="flex items-center gap-2 mb-5">
              <Plus size={16} className="text-accent" />
              <h2 className="font-display text-lg font-bold">Add event</h2>
            </div>
            <form onSubmit={handleCreate} className="space-y-3 text-sm">
              <Field label="Title" required value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Start date" type="date" required value={form.start_date} onChange={(v) => setForm({ ...form, start_date: v })} />
                <Field label="End date" type="date" value={form.end_date} onChange={(v) => setForm({ ...form, end_date: v })} />
              </div>
              <Field label="Theme" value={form.theme} onChange={(v) => setForm({ ...form, theme: v })} />
              <Field label="Sub-theme" value={form.subtheme} onChange={(v) => setForm({ ...form, subtheme: v })} />
              <Field label="Participants" value={form.participants} onChange={(v) => setForm({ ...form, participants: v })} />
              <div className="grid grid-cols-3 gap-3">
                <Field label="Coordinator" value={form.coordinator} onChange={(v) => setForm({ ...form, coordinator: v })} />
                <Field label="Department" value={form.department} onChange={(v) => setForm({ ...form, department: v })} />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Source</label>
                  <select
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-2 text-sm"
                  >
                    <option value="NIUM">NIUM</option>
                    <option value="MCR-HRD">MCR-HRD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={saving || !isAdmin}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--navy)] text-white font-semibold py-2.5 text-sm hover:opacity-90 disabled:opacity-50 transition"
              >
                {saving ? "Saving…" : "Add to calendar"}
              </button>
            </form>
          </section>

          {/* Event list */}
          <section className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <CalIcon size={16} className="text-accent" />
                <h2 className="font-display text-lg font-bold">All events ({events.length})</h2>
              </div>
            </div>
            <div className="divide-y divide-border max-h-[70vh] overflow-auto">
              {events.map((ev) => (
                <div key={ev.id} className="p-4 hover:bg-surface flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span className="font-semibold text-accent">{ev.source ?? "—"}</span>
                      <span>·</span>
                      <span>{fmt(ev.start_date)}{ev.end_date && ev.end_date !== ev.start_date && ` → ${fmt(ev.end_date)}`}</span>
                    </div>
                    <h3 className="mt-1 text-sm font-bold text-foreground truncate">{ev.title}</h3>
                    {ev.subtheme && <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{ev.subtheme}</p>}
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Users size={12} /> {regsCount[ev.id] ?? 0}
                    </span>
                    {isAdmin && (
                      <button onClick={() => handleDelete(ev.id)} className="text-muted-foreground hover:text-destructive p-1">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}
