import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, EyeOff, Images, Trash2 } from "lucide-react";
import { uploadPoster } from "@/lib/poster-upload";

type Section = "whats_on" | "slider";
type Row = {
  id: string;
  section: string;
  src_url: string;
  title: string;
  date_label: string | null;
  sort_date: string | null;
  kind: string;
  fit: string;
  sort_order: number;
  is_published: boolean;
};

const input = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm";

export function MediaManager({ isAdmin }: { isAdmin: boolean }) {
  const [tab, setTab] = useState<Section>("whats_on");
  const [rows, setRows] = useState<Row[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [dateLabel, setDateLabel] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [fit, setFit] = useState("cover");
  const [order, setOrder] = useState(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    void load();
  }, [tab]);

  async function load() {
    const { data } = await supabase
      .from("media_items")
      .select("*")
      .eq("section", tab)
      .order(tab === "whats_on" ? "sort_date" : "sort_order", { ascending: tab !== "whats_on" });
    setRows((data as Row[]) ?? []);
  }

  async function add(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return toast.error("Choose a file");
    setSaving(true);
    try {
      const isVideo = file.type.startsWith("video/");
      const url = await uploadPoster(file, tab === "whats_on" ? "whats-on" : "slider", isVideo ? 50 : 8);
      const { error } = await supabase.from("media_items").insert({
        section: tab,
        src_url: url,
        title,
        date_label: tab === "whats_on" ? dateLabel || null : null,
        sort_date: tab === "whats_on" && sortDate ? sortDate : null,
        kind: isVideo ? "video" : "poster",
        fit,
        sort_order: Number(order) || 0,
      });
      if (error) throw error;
      toast.success("Added");
      setFile(null);
      setTitle("");
      setDateLabel("");
      setSortDate("");
      (e.target as HTMLFormElement).reset();
      void load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setSaving(false);
    }
  }

  async function toggle(r: Row) {
    const { error } = await supabase.from("media_items").update({ is_published: !r.is_published }).eq("id", r.id);
    if (error) return toast.error(error.message);
    void load();
  }

  async function remove(id: string) {
    if (!confirm("Remove this item?")) return;
    const { error } = await supabase.from("media_items").delete().eq("id", id);
    if (error) return toast.error(error.message);
    void load();
  }

  if (!isAdmin) return null;

  return (
    <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Images size={16} className="text-accent" />
          <h2 className="font-display text-lg font-bold">Events &amp; Gallery</h2>
        </div>
        <div className="flex gap-2">
          {(["whats_on", "slider"] as Section[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setTab(s)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold ${tab === s ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
            >
              {s === "whats_on" ? "What's On events" : "Gallery slider photos"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <form onSubmit={add} className="space-y-3 text-sm">
          <label className="block">
            <span className="text-xs font-semibold">{tab === "whats_on" ? "Poster or video *" : "Photo *"}</span>
            <input
              type="file"
              required
              accept={tab === "whats_on" ? "image/*,video/*" : "image/*"}
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className={input}
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold">{tab === "whats_on" ? "Title *" : "Caption *"}</span>
            <textarea required value={title} onChange={(e) => setTitle(e.target.value)} className={input} rows={2} />
          </label>
          {tab === "whats_on" ? (
            <>
              <label className="block">
                <span className="text-xs font-semibold">Date shown (e.g. 12–14 Oct 2026)</span>
                <input value={dateLabel} onChange={(e) => setDateLabel(e.target.value)} className={input} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold">Event date (for ordering, newest first)</span>
                <input type="date" value={sortDate} onChange={(e) => setSortDate(e.target.value)} className={input} />
              </label>
            </>
          ) : (
            <>
              <label className="block">
                <span className="text-xs font-semibold">Display</span>
                <select value={fit} onChange={(e) => setFit(e.target.value)} className={input}>
                  <option value="cover">Fill the frame</option>
                  <option value="contain">Show full photo (wide group photos)</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold">Order (lower shows first)</span>
                <input type="number" value={order} onChange={(e) => setOrder(Number(e.target.value))} className={input} />
              </label>
            </>
          )}
          <button disabled={saving} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60">
            {saving ? "Uploading…" : "Add"}
          </button>
        </form>

        <div className="space-y-3">
          {rows.length === 0 && <p className="text-sm text-muted-foreground">Nothing added here yet.</p>}
          {rows.map((r) => (
            <div key={r.id} className="flex items-center gap-3 rounded-xl border border-border p-3">
              {r.kind === "video" ? (
                <video src={r.src_url} className="h-14 w-20 rounded object-cover bg-muted" muted />
              ) : (
                <img src={r.src_url} alt="" className="h-14 w-20 rounded object-cover bg-muted" />
              )}
              <div className="min-w-0 flex-1">
                {r.date_label && <div className="text-[11px] font-bold uppercase text-accent">{r.date_label}</div>}
                <div className="text-sm font-medium line-clamp-2">{r.title}</div>
                {!r.is_published && <div className="text-xs text-muted-foreground">Hidden</div>}
              </div>
              <button type="button" onClick={() => toggle(r)} aria-label="Show or hide" className="p-2 hover:bg-muted rounded">
                {r.is_published ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
              <button type="button" onClick={() => remove(r.id)} aria-label="Delete" className="p-2 hover:bg-muted rounded text-destructive">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
