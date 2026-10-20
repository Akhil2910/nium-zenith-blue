CREATE TABLE public.job_visibility (
  slug text PRIMARY KEY,
  is_visible boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.job_visibility TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.job_visibility TO authenticated;
GRANT ALL ON public.job_visibility TO service_role;
ALTER TABLE public.job_visibility ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Job visibility public read" ON public.job_visibility FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins insert job visibility" ON public.job_visibility FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update job visibility" ON public.job_visibility FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));