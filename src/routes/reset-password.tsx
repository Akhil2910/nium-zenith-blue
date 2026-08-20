import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock, ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/reset-password")({
  component: ResetPasswordPage,
  head: () => ({
    meta: [
      { title: "Reset password — NIUM Admin" },
      { name: "description", content: "Set a new password for the NIUM admin console." },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8) return toast.error("Use at least 8 characters");
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated.");
    navigate({ to: "/admin" });
  }

  return (
    <div className="min-h-screen bg-[var(--navy)] text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <Link to="/auth" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white mb-8">
          ← Back to sign in
        </Link>
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-lg">
              <Calendar size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-semibold">NIUM Admin</div>
              <div className="font-display text-lg font-bold">Set a new password</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">New password</label>
              <div className="mt-1.5 relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 pl-10 pr-3 py-2.5 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-semibold py-2.5 text-sm shadow-lg hover:brightness-95 transition disabled:opacity-60"
            >
              {loading ? "Saving…" : "Update password"} <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
