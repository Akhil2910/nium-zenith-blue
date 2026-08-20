CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.postings (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('tender','job','internship','competition')),
  title text not null,
  summary text,
  details text,
  form_url text,
  external_link text,
  tender_id text,
  file_no text,
  on_behalf_of text,
  deadline date,
  is_published boolean not null default true,
  created_by uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

GRANT SELECT ON public.postings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.postings TO authenticated;
GRANT ALL ON public.postings TO service_role;
ALTER TABLE public.postings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published postings are public" ON public.postings FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Admins can read all postings" ON public.postings FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can insert postings" ON public.postings FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can update postings" ON public.postings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can delete postings" ON public.postings FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TRIGGER update_postings_updated_at BEFORE UPDATE ON public.postings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.applications (
  id uuid primary key default gen_random_uuid(),
  posting_id uuid not null references public.postings(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 255),
  phone text check (char_length(phone) <= 30),
  cover_note text check (char_length(cover_note) <= 2000),
  resume_path text,
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.applications TO anon;
GRANT SELECT, INSERT, DELETE ON public.applications TO authenticated;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply" ON public.applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can read applications" ON public.applications FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins can delete applications" ON public.applications FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));