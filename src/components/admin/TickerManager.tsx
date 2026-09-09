import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, EyeOff, Megaphone, Plus, Trash2 } from "lucide-react";

type Item = {
  id: string;
  message: string;
  link: string | null;
  badge: string | null;
  sort_order: number;
  is_published: boolean;
};

const empty = { message: "", link: "/tenders", badge: "New", sort_order: 1 };

export function TickerManager({ isAdmin }: { isAdmin: boolean }) {
  const [rows, setRows] = useState<Item[]>([]);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("ticker_items")
      .select("*")
      .order("sort_order", { ascending: true });
    setRows((data as Item[]) ?? []);
  }

  async function add(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("ticker_items").insert({
      message: form.message,
      link: form.link || null,
      badge: form.badge || null,
      sort_order: Number(form.sort_order) || 0,
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Added to the scroller");
    setForm(empty);
    void load();
  }

  async function toggle(it: Item) {
    const { error } = await supabase
      .from("ticker_items")
      .update({ is_published: !it.is_published })
      .eq("id", it.id);
    if (error) return toast.error(error.message);
    void load();
  }

  async function remove(id: string) {
    if (!confirm("Remove this line from the scroller?")) return;
    const { error } = await supabase.from("ticker_items").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Removed");
    void load();
  }

  return (
    <section className="mt-8 grid lg:grid-cols-[1fr_1.4fr] gap-8">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] h-fit">
        <div className="flex items-center gap-2 mb-5">
          <Megaphone size={16} className="text-accent" />
          <h2 className="font-display text-lg font-bold">Add scroller line</h2>
        </div>
        <form onSubmit={add} className="space-y-3 text-sm">
          <div>
            <Label>Message *</Label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full min-h-[90px] rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <In label="Tag (e.g. New)" value={form.badge} onChange={(v) => setForm({ ...form, badge: v })} />
            <In
              label="Order"
              type="number"
              value={String(form.sort_order)}
              onChange={(v) => setForm({ ...form, sort_order: Number(v) })}
            />
          </div>
          <In label="Link (e.g. /tenders)" value={form.link} onChange={(v) => setForm({ ...form, link: v })} />
          <button
            type="submit"
            disabled={saving || !isAdmin}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--navy)] text-white font-semibold py-2.5 text-sm hover:opacity-90 disabled:opacity-50 transition"
          >
            <Plus size={14} /> {saving ? "Saving…" : "Add to scroller"}
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
        <div className="flex items-center gap-2 p-5 border-b border-border">
          <Megaphone size={16} className="text-accent" />
          <h2 className="font-display text-lg font-bold">Home page scroller ({rows.length})</h2>
        </div>
        <div className="divide-y divide-border max-h-[60vh] overflow-auto">
          {rows.length === 0 && (
            <p className="p-5 text-sm text-muted-foreground">Nothing in the scroller yet.</p>
          )}
          {rows.map((it) => (
            <div key={it.id} className="p-4 flex items-start justify-between gap-4 hover:bg-surface">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="font-semibold text-accent">{it.badge || "—"}</span>
                  <span>·</span>
                  <span>#{it.sort_order}</span>
                  {!it.is_published && <span className="text-destructive">· hidden</span>}
                </div>
                <p className="mt-1 text-sm text-foreground">{it.message}</p>
                {it.link && <span className="text-xs text-accent">{it.link}</span>}
              </div>
              {isAdmin && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggle(it)}
                    title={it.is_published ? "Hide" : "Show"}
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    {it.is_published ? <Eye size={15} /> : <EyeOff size={15} />}
                  </button>
                  <button onClick={() => remove(it.id)} className="p-1 text-muted-foreground hover:text-destructive">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{children}</label>;
}

function In({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}
