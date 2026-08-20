ALTER TABLE public.events ADD COLUMN IF NOT EXISTS poster_url text;
ALTER TABLE public.postings ADD COLUMN IF NOT EXISTS poster_url text;