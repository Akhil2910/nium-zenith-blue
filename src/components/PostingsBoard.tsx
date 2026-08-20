import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Inbox, Loader2, Send, Upload } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackButton } from "@/components/BackButton";

export type PostingKind = "tender" | "job" | "internship" | "competition";

export type Posting = {
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
  created_at: string;
};

const applySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  cover_note: z.string().trim().max(2000).optional(),
});

export function PostingsBoard({
  kind,
  eyebrow,
  title,
  intro,
  emptyTitle,
  emptyBody,
  badgeLabel,
}: {
  kind: PostingKind;
  eyebrow: string;
  title: string;
  intro: string;
  emptyTitle: string;
  emptyBody: string;
  badgeLabel: string;
}) {
  const [rows, setRows] = useState<Posting[] | null>(null);

  useEffect(() => {
    supabase
      .from("postings")
      .select("*")
      .eq("kind", kind)
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => setRows((data as Posting[]) ?? []));
  }, [kind]);

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 pt-4">
          <BackButton label="Back" to="/" />
        </div>
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              {eyebrow}
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          {rows === null ? (
            <div className="flex justify-center py-16 text-muted-foreground">
              <Loader2 className="animate-spin" />
            </div>
          ) : rows.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
              <Inbox className="mx-auto text-accent" size={30} />
              <h2 className="mt-4 font-display text-xl font-bold text-foreground">{emptyTitle}</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-relaxed">
                {emptyBody}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {rows.map((p, i) => (
                <PostingCard key={p.id} posting={p} index={i} badgeLabel={badgeLabel} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PostingCard({
  posting: p,
  index,
  badgeLabel,
}: {
  posting: Posting;
  index: number;
  badgeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-border bg-card p-7 md:p-9 shadow-[var(--shadow-card)]"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-band)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
          <FileText size={13} /> {badgeLabel}
        </span>
        {p.tender_id && (
          <span className="rounded-full border-2 border-accent bg-accent/10 px-4 py-1.5 text-sm font-bold tracking-wide text-foreground">
            Tender ID: {p.tender_id}
          </span>
        )}
        {p.deadline && (
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
            Last date: {new Date(p.deadline).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        )}
      </div>

      <h2 className="mt-5 font-display text-2xl font-bold text-foreground leading-snug">
        {p.title}
      </h2>

      {p.poster_url && (
        <img
          src={p.poster_url}
          alt={`${p.title} poster`}
          loading="lazy"
          className="mt-5 w-full rounded-xl border border-border object-contain"
        />
      )}

      {(p.file_no || p.on_behalf_of || p.summary) && (
        <dl className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
          {p.file_no && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">File No.</dt>
              <dd className="mt-1 font-medium text-foreground">{p.file_no}</dd>
            </div>
          )}
          {p.on_behalf_of && (
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Issued on behalf of
              </dt>
              <dd className="mt-1 font-medium text-foreground">{p.on_behalf_of}</dd>
            </div>
          )}
          {p.summary && (
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Details</dt>
              <dd className="mt-1 font-medium text-foreground">{p.summary}</dd>
            </div>
          )}
        </dl>
      )}

      {p.details && (
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
          {p.details}
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        {p.form_url && (
          <a
            href={p.form_url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground hover:brightness-95 transition"
          >
            Apply on form <ExternalLink size={14} />
          </a>
        )}
        {p.external_link && (
          <a
            href={p.external_link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white hover:opacity-90 transition"
          >
            View notice <ExternalLink size={14} />
          </a>
        )}
        {p.kind !== "tender" && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-foreground hover:bg-surface transition"
          >
            {open ? "Close application" : "Apply with resume"} <Send size={13} />
          </button>
        )}
      </div>

      {open && <ApplyForm postingId={p.id} onDone={() => setOpen(false)} />}
    </motion.article>
  );
}

function ApplyForm({ postingId, onDone }: { postingId: string; onDone: () => void }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "", cover_note: "" });
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = applySchema.safeParse(values);
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    if (file && file.size > 5 * 1024 * 1024) return toast.error("Resume must be under 5 MB");

    setBusy(true);
    try {
      let resume_path: string | null = null;
      if (file) {
        const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
        const path = `${postingId}/${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage.from("resumes").upload(path, file);
        if (upErr) throw upErr;
        resume_path = path;
      }
      const { error } = await supabase.from("applications").insert({
        posting_id: postingId,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        cover_note: parsed.data.cover_note || null,
        resume_path,
      });
      if (error) throw error;
      toast.success("Application submitted. Thank you!");
      onDone();
    } catch (err: any) {
      toast.error(err.message ?? "Could not submit application");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 grid gap-3 rounded-xl border border-border bg-surface p-5 text-sm sm:grid-cols-2">
      <input
        required
        placeholder="Full name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        className="rounded-md border border-input bg-background px-3 py-2"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        className="rounded-md border border-input bg-background px-3 py-2"
      />
      <input
        placeholder="Phone (optional)"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        className="rounded-md border border-input bg-background px-3 py-2"
      />
      <label className="inline-flex items-center gap-2 rounded-md border border-dashed border-input bg-background px-3 py-2 cursor-pointer text-muted-foreground">
        <Upload size={14} />
        <span className="truncate">{file ? file.name : "Attach your resume (PDF / DOC, max 5 MB)"}</span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </label>
      <textarea
        placeholder="Cover note (optional)"
        maxLength={2000}
        value={values.cover_note}
        onChange={(e) => setValues({ ...values, cover_note: e.target.value })}
        className="sm:col-span-2 min-h-[90px] rounded-md border border-input bg-background px-3 py-2"
      />
      <button
        type="submit"
        disabled={busy}
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--navy)] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white disabled:opacity-60"
      >
        {busy ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
