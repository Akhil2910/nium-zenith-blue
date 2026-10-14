# Admin: manage Gallery Slider and What's On events

## What you get
A new **"Events & Gallery"** section in the admin panel with two tabs:

1. **What's On events** — upload a poster (or video), enter title and date text (e.g. "12–14 Oct 2026"), pick the date it's sorted by, publish/hide, delete.
2. **Gallery slider photos** — upload a photo, enter caption, choose "show full photo" (for wide group photos) or "fill the frame", set order, publish/hide, delete.

New items show up on the homepage straight away, with no code changes or AWS rebuild. The photos and posters already on the site stay where they are. New admin items appear alongside them: newest What's On events first, and new slider photos at the front.

## Technical details
- New table `media_items` (id, section `whats_on` | `slider`, src_url, title/caption, date_label, sort_date, kind `poster|video`, fit `cover|contain`, sort_order, is_published, created_by, timestamps). RLS: public reads published rows; admin (`has_role`) does insert/update/delete. GRANTs are included, plus a touch_updated_at trigger.
- Uploads reuse `uploadPoster()` into the existing `posters` bucket (folders `whats-on/`, `slider/`). Videos go up to 50 MB.
- New `src/components/admin/MediaManager.tsx`, added to `admin.tsx` like TeamManager.
- `Events.tsx` and the `Slider` in `Gallery.tsx` fetch published rows with the browser client. In What's On, these rows are merged with the built-in list and sorted by sort_date (newest first). In the slider, they go before the built-in slides.
- No changes to the deployment setup.
