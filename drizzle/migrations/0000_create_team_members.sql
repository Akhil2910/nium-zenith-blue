CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL DEFAULT '',
  description text,
  photo_url text,
  group_key text NOT NULL CHECK (group_key IN ('dg','advisor','executive_directors','it_team','knowledge_research')),
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.team_members TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.team_members TO authenticated;
GRANT ALL ON public.team_members TO service_role;

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published team members are public"
  ON public.team_members FOR SELECT TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Admins read all team members"
  ON public.team_members FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins insert team members"
  ON public.team_members FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins update team members"
  ON public.team_members FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins delete team members"
  ON public.team_members FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER team_members_touch_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

INSERT INTO public.team_members (name, designation, description, photo_url, group_key, sort_order) VALUES
  ('Dr. T.K. Sreedevi IAS', 'Director General, NIUM', 'Director General, NIUM · Strategic leadership across all verticals.', NULL, 'dg', 1),
  ('Dr. P.K. Mohanty, IAS (Retd.)', 'Honorary Advisor (Executive Chair – Research and Programmes)', 'Executive Chair – Research and Programmes.', '/__l5e/assets-v1/ff984fa0-68b3-4375-9beb-126eef7cb362/pk-mohanty.jpg', 'advisor', 1),
  ('J Srinivasa Rao', 'Executive Director', NULL, NULL, 'executive_directors', 1),
  ('TSVN Thrilleshwar Rao', 'Executive Director (Programmes)', NULL, NULL, 'executive_directors', 2),
  ('V Prashanthi', 'Executive Head, UIIC', NULL, NULL, 'executive_directors', 3),
  ('Lawanya Gotety', 'Director – Urban Governance', NULL, NULL, 'executive_directors', 4),
  ('Venugopal V', 'Director (Circularity & Sustainability)', NULL, NULL, 'executive_directors', 5),
  ('Chitla Akshita Reddy', 'Programme Head (IT)', NULL, NULL, 'it_team', 1),
  ('Maddiboina Phani Gopal', 'Programme Head', NULL, NULL, 'it_team', 2),
  ('Vikash Pilli', 'Functional Expert', NULL, NULL, 'it_team', 3),
  ('Jayaram Rathod', 'Senior Developer', NULL, NULL, 'it_team', 4),
  ('Jaipal Pola', 'Software Developer', NULL, NULL, 'it_team', 5),
  ('V Akhil Babu', 'Software Engineer', NULL, NULL, 'it_team', 6),
  ('Konduri Ravalee', 'Programme Head', NULL, NULL, 'knowledge_research', 1),
  ('P Yashwanth', 'Senior Knowledge Manager', NULL, NULL, 'knowledge_research', 2),
  ('G. Laxmi Narayana', 'Administrative Officer', NULL, NULL, 'knowledge_research', 3),
  ('Nitya Khendry', 'Lead – Heritage', NULL, NULL, 'knowledge_research', 4),
  ('Kiran Kumar Bingi', 'Executive Manager (Programmes & Administration)', NULL, NULL, 'knowledge_research', 5),
  ('D. Sindhu Priya Reddy', 'Knowledge Manager', NULL, NULL, 'knowledge_research', 6),
  ('Suresh Bodiga', 'Manager (Operations)', NULL, NULL, 'knowledge_research', 7),
  ('R Prajwala Sam', 'Research Associate', NULL, NULL, 'knowledge_research', 8),
  ('Nadigoti Vennela Rani', 'HR Executive', NULL, NULL, 'knowledge_research', 9),
  ('Shaik Naseema Banu', 'Research Associate', NULL, NULL, 'knowledge_research', 10),
  ('G Venkatesham', 'Research Associate', NULL, NULL, 'knowledge_research', 11);
