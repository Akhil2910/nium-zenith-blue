import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, EyeOff, ImagePlus, Pencil, Plus, Trash2, UsersRound, X } from "lucide-react";
import { uploadPoster } from "@/lib/poster-upload";

export const TEAM_GROUPS = [
  { key: "dg", label: "Director General" },
  { key: "advisor", label: "Advisor" },
  { key: "executive_directors", label: "Executive Directors" },
  { key: "it_team", label: "IT Team" },
  { key: "knowledge_research", label: "Knowledge Management & Research" },
] as const;

type Member = {
  id: string;
  name: string;
  designation: string;
  description: string | null;
  photo_url: string | null;
  group_key: string;
  sort_order: number;
  is_published: boolean;
};

const empty = {
  name: "",
  designation: "",
  description: "",
  group_key: "executive_directors",
  sort_order: 1,
};

export function TeamManager({ isAdmin }: { isAdmin: boolean }) {
  const [rows, setRows] = useState<Member[]>([]);
  const [form, setForm] = useState({ ...empty });
  const [photo, setPhoto] = useState<File | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .order("group_key", { ascending: true })
      .order("sort_order", { ascending: true });
    setRows((data as Member[]) ?? []);
  }

  function resetForm() {
    setForm({ ...empty });
    setPhoto(null);
    setEditingId(null);
  }

  function startEdit(m: Member) {
    setEditingId(m.id);
    setPhoto(null);
    setForm({
      name: m.name,
      designation: m.designation ?? "",
      description: m.description ?? "",
      group_key: m.group_key,
      sort_order: m.sort_order,
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    let photo_url: string | null = null;
    if (photo) {
      try {
        photo_url = await uploadPoster(photo, "team");
      } catch (err: any) {
        setSaving(false);
        return toast.error(err?.message ?? "Photo upload failed");
      }
    }

    const payload: Record<string, unknown> = {
      name: form.name.trim(),
      designation: form.designation.trim(),
      description: form.description.trim() || null,
      group_key: form.group_key,
      sort_order: Number(form.sort_order) || 0,
    };
    if (photo_url) payload.photo_url = photo_url;

    const { error } = editingId
      ? await supabase.from("team_members").update(payload).eq("id", editingId)
      : await supabase.from("team_members").insert(payload as any);

    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success(editingId ? "Member updated" : "Member added");
    resetForm();
    void load();
  }

  async function toggle(m: Member) {
    const { error } = await supabase
      .from("team_members")
      .update({ is_published: !m.is_published })
      .eq("id", m.id);
    if (error) return toast.error(error.message);
    void load();
  }

  async function removePhoto(m: Member) {
    const { error } = await supabase.from("team_members").update({ photo_url: null }).eq("id", m.id);
    if (error) return toast.error(error.message);
    void load();
  }

  async function remove(id: string) {
    if (!confirm("Remove this person from the team page?")) return;
    const { error } = await supabase.from("team_members").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Removed");
    if (editingId === id) resetForm();
    void load();
  }

  return (
    <section className="mt-8 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
      <div className="flex items-center gap-2 p-5 border-b border-border">
        <UsersRound size={16} className="text-accent" />
        <h2 className="font-display text-lg font-bold">Team ({rows.length})</h2>
      </div>

      <form onSubmit={submit} className="grid md:grid-cols-2 gap-3 p-5 border-b border-border text-sm">
        <div>
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Name *</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Designation</label>
          <input
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Section on team page</label>
          <select
            value={form.group_key}
            onChange={(e) => setForm({ ...form, group_key: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-2"
          >
            {TEAM_GROUPS.map((g) => (
              <option key={g.key} value={g.key}>{g.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Display order</label>
          <input
            type="number"
            value={form.sort_order}
            onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Profile description</label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Photo</label>
          <label className="mt-1 flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-2 text-muted-foreground hover:border-accent">
            <ImagePlus size={15} />
            <span className="truncate">
              {photo ? photo.name : editingId ? "Upload a new photo (optional)" : "Upload photo (JPG / PNG, max 8 MB)"}
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
            />
          </label>
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            disabled={saving || !isAdmin}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] text-white font-semibold px-4 py-2.5 text-sm hover:opacity-90 disabled:opacity-50"
          >
            <Plus size={14} /> {saving ? "Saving…" : editingId ? "Save changes" : "Add member"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <X size={13} /> Cancel edit
            </button>
          )}
        </div>
      </form>

      <div className="divide-y divide-border max-h-[70vh] overflow-auto">
        {rows.length === 0 && <p className="p-5 text-sm text-muted-foreground">No team members yet.</p>}
        {rows.map((m) => (
          <div key={m.id} className="p-4 flex items-start gap-4 hover:bg-surface">
            {m.photo_url ? (
              <img src={m.photo_url} alt={m.name} loading="lazy" className="h-12 w-12 shrink-0 rounded-lg object-cover border border-border" />
            ) : (
              <div className="h-12 w-12 shrink-0 rounded-lg border border-border bg-surface" />
            )}
            <div className="min-w-0 flex-1">
              <div className="text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">
                {TEAM_GROUPS.find((g) => g.key === m.group_key)?.label ?? m.group_key} · #{m.sort_order}
                {!m.is_published && <span className="ml-2 text-muted-foreground">Hidden</span>}
              </div>
              <div className="mt-1 text-sm font-bold text-foreground">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.designation || "—"}</div>
              {m.description && <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{m.description}</p>}
            </div>
            {isAdmin && (
              <div className="flex items-center gap-2 shrink-0">
                {m.photo_url && (
                  <button onClick={() => removePhoto(m)} title="Remove photo" className="text-muted-foreground hover:text-destructive p-1 text-[11px]">
                    photo ✕
                  </button>
                )}
                <button onClick={() => startEdit(m)} title="Edit" className="text-muted-foreground hover:text-accent p-1">
                  <Pencil size={14} />
                </button>
                <button onClick={() => toggle(m)} title={m.is_published ? "Hide" : "Show"} className="text-muted-foreground hover:text-accent p-1">
                  {m.is_published ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
                <button onClick={() => remove(m.id)} title="Delete" className="text-muted-foreground hover:text-destructive p-1">
                  <Trash2 size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
