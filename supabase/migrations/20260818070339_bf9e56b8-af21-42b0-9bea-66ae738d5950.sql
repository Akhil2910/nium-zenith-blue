DELETE FROM public.registrations WHERE event_id IN (SELECT id FROM public.events WHERE start_date < DATE '2026-08-17');
DELETE FROM public.events WHERE start_date < DATE '2026-08-17';