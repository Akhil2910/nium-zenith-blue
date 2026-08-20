import { createServerFn } from "@tanstack/react-start";

// One-time bootstrap: creates the first operator account and grants it the
// admin role. Refuses to run once any admin already exists.
export const bootstrapAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: existing } = await supabaseAdmin
      .from("user_roles")
      .select("id")
      .eq("role", "admin")
      .limit(1);
    if (existing && existing.length > 0) return { ok: false, reason: "admin exists" };

    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });
    if (error) throw error;

    const { error: roleErr } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: created.user!.id, role: "admin" });
    if (roleErr) throw roleErr;

    return { ok: true, userId: created.user!.id };
  });
