import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Briefcase, Eye, EyeOff } from "lucide-react";
import { jobProjects } from "@/data/job-openings";

export function JobsVisibilityManager({ isAdmin }: { isAdmin: boolean }) {
  const [vis, setVis] = useState<Record<string, boolean>>({});

  async function load() {
    const { data } = await supabase.from("job_visibility").select("slug,is_visible");
    const m: Record<string, boolean> = {};
    (data ?? []).forEach((r) => (m[r.slug] = r.is_visible));
    setVis(m);
  }
  useEffect(() => {
    void load();
  }, []);

  async function setVisible(slug: string, is_visible: boolean) {
    const { error } = await supabase
      .from("job_visibility")
      .upsert({ slug, is_visible, updated_at: new Date().toISOString() });
    if (error) return toast.error(error.message);
    toast.success(is_visible ? "Jobs now shown on website" : "Jobs hidden from website");
    void load();
  }

  return (
    <section className="mt-8 rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-accent" />
          <h2 className="font-display text-lg font-bold">Jobs page — show / hide</h2>
        </div>
        {isAdmin && (
          <div className="flex gap-2">
            <button onClick={() => Promise.all(jobProjects.map((p) => setVisible(p.slug, true)))} className="rounded-full border border-border px-4 py-1.5 text-xs font-bold">Show all</button>
            <button onClick={() => Promise.all(jobProjects.map((p) => setVisible(p.slug, false)))} className="rounded-full border border-border px-4 py-1.5 text-xs font-bold">Hide all</button>
          </div>
        )}
      </div>
      <ul className="divide-y divide-border">
        {jobProjects.map((p) => {
          const on = vis[p.slug] === true;
          return (
            <li key={p.slug} className="flex flex-wrap items-center justify-between gap-3 p-5">
              <div>
                <div className="font-semibold text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.positions.length} positions</div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${on ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                  {on ? "Shown" : "Hidden"}
                </span>
                {isAdmin && (
                  <button onClick={() => setVisible(p.slug, !on)} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-bold hover:bg-surface">
                    {on ? <><EyeOff size={14} /> Hide</> : <><Eye size={14} /> Show</>}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
