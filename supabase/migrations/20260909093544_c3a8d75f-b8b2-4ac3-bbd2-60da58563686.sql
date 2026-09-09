CREATE TABLE public.ticker_items (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  message text NOT NULL,
  link text,
  badge text,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_by uuid REFERENCES auth.users,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.ticker_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticker_items TO authenticated;
GRANT ALL ON public.ticker_items TO service_role;

ALTER TABLE public.ticker_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published ticker items are public" ON public.ticker_items
  FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Admins read all ticker items" ON public.ticker_items
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins insert ticker items" ON public.ticker_items
  FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins update ticker items" ON public.ticker_items
  FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins delete ticker items" ON public.ticker_items
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER ticker_items_touch BEFORE UPDATE ON public.ticker_items
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

INSERT INTO public.ticker_items (message, link, badge, sort_order) VALUES
  ('Khammam Municipal Corporation, is inviting online tenders for engaging an agency for "AI-ENABLED INTEGRATED COMMAND & CONTROL CENTRE (AI-ICCC)" · Tender ID 715643', '/tenders', 'New', 1);