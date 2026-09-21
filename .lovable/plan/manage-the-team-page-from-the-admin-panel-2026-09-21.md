# Manage the Team page from the admin panel

Add a "Team" section to the admin console so you can add, edit and remove people, and have the public Team page read from the database instead of a fixed list.

## What you'll be able to do

For each person you can fill in:
- Name
- Photo (upload, same way event posters work)
- Designation
- Profile description (longer text)
- Which group they appear under on the Team page:
  - Director General
  - Advisor
  - Executive Directors
  - IT Team
  - Knowledge Management & Research
- Display order (so you control who shows first, e.g. Srinivas before Thrilleshwar)
- Show / hide without deleting

Actions: add, edit, hide/show, delete.

## Public Team page changes

- The page loads people from the database, grouped exactly as it is today; a group with nobody in it is simply not shown.
- Cards show the photo (or initials when no photo), name and designation.
- Clicking a card opens the person's profile description in a panel, instead of the current dead "Profile →" link.
- All current people (Dr. T.K. Sreedevi, Dr. P.K. Mohanty, the five executive directors, six IT team members, eleven knowledge management/research members) are loaded in as starting data with their existing photos and order, so the page looks the same on day one.

## Technical notes

- New table `public.team_members`: `id`, `name`, `designation`, `description`, `photo_url`, `group_key` (text with a check constraint for the five group keys), `sort_order`, `is_published`, `created_by`, timestamps, plus `touch_updated_at` trigger.
- Migration includes GRANTs (`anon` SELECT for published rows, full CRUD for `authenticated`, ALL for `service_role`), RLS enabled, policies: public read where `is_published`, admin read-all/insert/update/delete via `has_role(auth.uid(), 'admin')`.
- Same migration seeds every current team member with literal INSERTs, using existing asset URLs for the DG and Advisor photos.
- Photos reuse `uploadPoster(file, "team")` against the existing private `posters` bucket with long-lived signed URLs.
- New `src/components/admin/TeamManager.tsx` following the `TickerManager` / `PostingsManager` pattern, mounted in `src/routes/_authenticated/admin.tsx`.
- `src/routes/team.tsx` switches from hardcoded arrays to a Supabase query, keeps its current layout, sections and styling, and gains a profile dialog.
