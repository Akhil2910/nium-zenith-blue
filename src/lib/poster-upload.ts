import { supabase } from "@/integrations/supabase/client";

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

/**
 * Uploads a poster image and returns a long-lived signed URL that can be
 * stored on the event / posting row and rendered publicly.
 */
export async function uploadPoster(file: File, folder: string): Promise<string> {
  if (file.size > 8 * 1024 * 1024) throw new Error("Poster must be under 8 MB");
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("posters").upload(path, file, {
    contentType: file.type || undefined,
  });
  if (error) throw error;
  const { data, error: signErr } = await supabase.storage
    .from("posters")
    .createSignedUrl(path, TEN_YEARS);
  if (signErr || !data) throw signErr ?? new Error("Could not create poster link");
  return data.signedUrl;
}
