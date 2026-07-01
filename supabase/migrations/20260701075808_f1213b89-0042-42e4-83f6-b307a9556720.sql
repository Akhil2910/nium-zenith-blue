
-- 1. Restrict has_role execution
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 2. Replace permissive registrations INSERT policy
DROP POLICY IF EXISTS "Anyone can register" ON public.registrations;

CREATE POLICY "Authenticated users can register themselves"
ON public.registrations
FOR INSERT
TO authenticated
WITH CHECK (
  user_id = auth.uid()
  AND EXISTS (SELECT 1 FROM public.events e WHERE e.id = event_id)
);

-- Remove anon insert privilege
REVOKE INSERT ON public.registrations FROM anon;
