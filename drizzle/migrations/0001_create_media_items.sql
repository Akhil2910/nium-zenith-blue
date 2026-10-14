CREATE TABLE public.media_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL CHECK (section IN ('whats_on','slider')),
  src_url text NOT NULL,
  title text NOT NULL DEFAULT '',
  date_label text,
  sort_date date,
  kind text NOT NULL DEFAULT 'poster' CHECK (kind IN ('poster','video')),
  fit text NOT NULL DEFAULT 'cover' CHECK (fit IN ('cover','contain')),
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_by uuid DEFAULT auth.uid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.media_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.media_items TO authenticated;
GRANT ALL ON public.media_items TO service_role;
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published media public" ON public.media_items FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Admins read media" ON public.media_items FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins insert media" ON public.media_items FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update media" ON public.media_items FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins delete media" ON public.media_items FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER media_items_touch BEFORE UPDATE ON public.media_items FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();