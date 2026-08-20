import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Download, Eye, EyeOff, FileText, ImagePlus, Plus, Trash2 } from "lucide-react";
import { uploadPoster } from "@/lib/poster-upload";

type Posting = {
  id: string;
  kind: string;
  title: string;
  summary: string | null;
  details: string | null;
  form_url: string | null;
  external_link: string | null;
  tender_id: string | null;
  file_no: string | null;
  on_behalf_of: string | null;
  deadline: string | null;
  poster_url: string | null;
  is_published: boolean;
  created_at: string;
};

type Application = {
  id: string;
  posting_id: string;
  name: string;
  email: string;
  phone: string | null;
  cover_note: string | null;
  resume_path: string | null;
  created_at: string;
};

const KINDS = [
  { value: "tender", label: "Tender" },
  { value: "job", label: "Job" },
  { value: "internship", label: "Internship" },
  { value: "competition", label: "Competition / Event" },
];

const empty = {
  kind: "tender",
  title: "",
  summary: "",
  details: "",
  form_url: "",
  external_link: "",
  tender_id: "",
  file_no: "",
  on_behalf_of: "",
  deadline: "",
};

export function PostingsManager({ isAdmin }: { isAdmin: boolean }) {
  const [rows, setRows] = useState<Posting[]>([]);
  const [apps, setApps] = useState<Application[]>([]);
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [poster, setPoster] = useState<File | null>(null);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("postings")
      .select("*")
      .order("created_at", { ascending: false });
    setRows((data as Posting[]) ?? []);
    const { data: a } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });
    setApps((a as Application[]) ?? []);
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    let poster_url: string | null = null;
    if (poster) {
      try {
        poster_url = await uploadPoster(poster, "postings");
      } catch (err: any) {
        setSaving(false);
        return toast.error(err.message ?? "Poster upload failed");
      }
    }
    const { error } = await supabase.from("postings").insert({
      poster_url,
      kind: form.kind,
      title: form.title,
      summary: form.summary || null,
      details: form.details || null,
      form_url: form.form_url || null,
      external_link: form.external_link || null,
      tender_id: form.tender_id || null,
      file_no: form.file_no || null,
      on_behalf_of: form.on_behalf_of || null,
      deadline: form.deadline || null,
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Published");
    setForm({ ...empty, kind: form.kind });
    setPoster(null);
    void load();
  }

  async function togglePublish(p: Posting) {
    const { error } = await supabase
      .from("postings")
      .update({ is_published: !p.is_published })
      .eq("id", p.id);
    if (error) return toast.error(error.message);
    void load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this posting?")) return;
    const { error } = await supabase.from("postings").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    void load();
  }

  async function openResume(path: string) {
    const { data, error } = await supabase.storage.from("resumes").createSignedUrl(path, 120);
    if (error || !data) return toast.error(error?.message ?? "Could not open resume");
    window.open(data.signedUrl, "_blank", "noopener");
  }

  return (
    <>
      <section className="mt-8 grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] h-fit">
          <div className="flex items-center gap-2 mb-5">
            <Plus size={16} className="text-accent" />
            <h2 className="font-display text-lg font-bold">
              Add tender / job / internship / event
            </h2>
          </div>
          <form onSubmit={create} className="space-y-3 text-sm">
            <div>
              <Label>Type</Label>
              <select
                value={form.kind}
                onChange={(e) => setForm({ ...form, kind: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-2 text-sm"
              >
                {KINDS.map((k) => (
                  <option key={k.value} value={k.value}>
                    {k.label}
                  </option>
                ))}
              </select>
            </div>
            <In label="Title" required value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
            <In label="Short summary" value={form.summary} onChange={(v) => setForm({ ...form, summary: v })} />
            <div>
              <Label>Full details</Label>
              <textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="mt-1 w-full min-h-[110px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <In
              label="Google Form / application link"
              value={form.form_url}
              onChange={(v) => setForm({ ...form, form_url: v })}
            />
            <In
              label="External notice link"
              value={form.external_link}
              onChange={(v) => setForm({ ...form, external_link: v })}
            />
            <div className="grid grid-cols-2 gap-3">
              <In label="Tender ID" value={form.tender_id} onChange={(v) => setForm({ ...form, tender_id: v })} />
              <In label="File No." value={form.file_no} onChange={(v) => setForm({ ...form, file_no: v })} />
            </div>
            <In
              label="On behalf of"
              value={form.on_behalf_of}
              onChange={(v) => setForm({ ...form, on_behalf_of: v })}
            />
            <div>
              <Label>Poster / image</Label>
              <label className="mt-1 flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm text-muted-foreground hover:border-accent">
                <ImagePlus size={15} />
                <span className="truncate">{poster ? poster.name : "Upload poster (JPG / PNG, max 8 MB)"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => setPoster(e.target.files?.[0] ?? null)} />
              </label>
            </div>
            <In
              label="Last date"
              type="date"
              value={form.deadline}
              onChange={(v) => setForm({ ...form, deadline: v })}
            />
            <button
              type="submit"
              disabled={saving || !isAdmin}
              className="w-full rounded-lg bg-[var(--navy)] text-white font-semibold py-2.5 text-sm hover:opacity-90 disabled:opacity-50 transition"
            >
              {saving ? "Saving…" : "Publish"}
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
          <div className="flex items-center gap-2 p-5 border-b border-border">
            <FileText size={16} className="text-accent" />
            <h2 className="font-display text-lg font-bold">Notices ({rows.length})</h2>
          </div>
          <div className="divide-y divide-border max-h-[70vh] overflow-auto">
            {rows.length === 0 && (
              <p className="p-5 text-sm text-muted-foreground">Nothing published yet.</p>
            )}
            {rows.map((p) => (
              <div key={p.id} className="p-4 flex items-start justify-between gap-4 hover:bg-surface">
                {p.poster_url && (
                  <img src={p.poster_url} alt={`${p.title} poster`} loading="lazy" className="h-16 w-16 shrink-0 rounded-lg border border-border object-cover" />
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="font-semibold text-accent">{p.kind}</span>
                    <span>·</span>
                    <span>{fmt(p.created_at)}</span>
                    {!p.is_published && <span className="text-destructive">· hidden</span>}
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-foreground truncate">{p.title}</h3>
                  {p.form_url && (
                    <a
                      href={p.form_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-accent underline truncate block"
                    >
                      {p.form_url}
                    </a>
                  )}
                  <div className="text-xs text-muted-foreground">
                    {apps.filter((a) => a.posting_id === p.id).length} application(s)
                  </div>
                </div>
                {isAdmin && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => togglePublish(p)}
                      title={p.is_published ? "Hide" : "Publish"}
                      className="p-1 text-muted-foreground hover:text-foreground"
                    >
                      {p.is_published ? <Eye size={15} /> : <EyeOff size={15} />}
                    </button>
                    <button
                      onClick={() => remove(p.id)}
                      className="p-1 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
        <div className="flex items-center gap-2 p-5 border-b border-border">
          <Download size={16} className="text-accent" />
          <h2 className="font-display text-lg font-bold">Applications received ({apps.length})</h2>
        </div>
        {apps.length === 0 ? (
          <p className="p-5 text-sm text-muted-foreground">No applications yet.</p>
        ) : (
          <div className="overflow-auto max-h-[60vh]">
            <table className="w-full text-sm">
              <thead className="bg-surface text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <tr>
                  <Th>Date</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Applied for</Th>
                  <Th>Resume</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {apps.map((a) => (
                  <tr key={a.id} className="hover:bg-surface align-top">
                    <Td>{fmt(a.created_at)}</Td>
                    <Td className="font-semibold">{a.name}</Td>
                    <Td>{a.email}</Td>
                    <Td>{a.phone ?? "—"}</Td>
                    <Td className="text-muted-foreground">
                      {rows.find((r) => r.id === a.posting_id)?.title ?? "—"}
                    </Td>
                    <Td>
                      {a.resume_path ? (
                        <button
                          onClick={() => openResume(a.resume_path!)}
                          className="inline-flex items-center gap-1 text-accent underline"
                        >
                          <Download size={12} /> Open
                        </button>
                      ) : (
                        "—"
                      )}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </label>
  );
}

function In({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && " *"}
      </Label>
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

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left font-semibold px-4 py-2.5 whitespace-nowrap">{children}</th>;
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-2.5 ${className}`}>{children}</td>;
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
