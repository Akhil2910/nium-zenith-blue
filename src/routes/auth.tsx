import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Calendar, Lock, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  head: () => ({ meta: [{ title: "Sign in — NIUM Annual Calendar" }] }),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Account created. You can sign in now.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({ to: "/admin" });
      }
    } catch (err: any) {
      toast.error(err.message ?? "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--navy)] text-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--cyan-brand)]/20 blur-3xl" />
      <div className="relative w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white mb-8">
          ← Back to NIUM
        </Link>
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-band)] flex items-center justify-center shadow-lg">
              <Calendar size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-semibold">NIUM Admin</div>
              <div className="font-display text-lg font-bold">Annual Calendar Console</div>
            </div>
          </div>
          <h1 className="mt-6 text-2xl font-bold">{mode === "signin" ? "Sign in" : "Create an account"}</h1>
          <p className="mt-1 text-sm text-white/60">
            {mode === "signin" ? "Access the calendar admin." : "Sign up to manage events (admin grant required)."}
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">Email</label>
              <div className="mt-1.5 relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/15 bg-white/5 pl-10 pr-3 py-2.5 text-sm placeholder:text-white/30 focus:border-accent focus:outline-none"
                  placeholder="you@nium.gov.in"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-white/60">Password</label>
              <div className="mt-1.5 relative">
                <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  required
                  minLength={6}
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
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-semibold py-2.5 text-sm shadow-lg hover:brightness-95 transition disabled:opacity-60"
            >
              {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
              <ArrowRight size={15} />
            </button>
          </form>
          <button
            onClick={handleForgot}
            className="mt-5 w-full text-xs text-accent hover:brightness-110"
          >
            Forgot password? Email me a reset link
          </button>
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-3 w-full text-xs text-white/60 hover:text-white"
          >
            {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
        <p className="mt-6 text-center text-[11px] text-white/40 uppercase tracking-[0.18em]">
          Government of Telangana · NIUM
        </p>
      </div>
    </div>
  );
}
