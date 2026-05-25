## NIUM Website — Modernised single-page site

A polished, NIUA-inspired homepage in a deep-blue palette. One long scrolling page with sticky top nav; each menu item smooth-scrolls to its section. Built on the existing TanStack Start template.

### Design direction
- Palette: deep navy `#0B2545` → royal `#13315C` → cyan `#3FA9F5` gradients, with gold `#E6B84C` accent (nods to the Telangana emblem gold). White surfaces for content cards.
- Type: Space Grotesk for headings, Inter for body — modern, governmental but not stiff.
- Hero: full-bleed gradient blue with abstract urban skyline illustration (generated SVG-style city silhouette + subtle grid lines), tagline "Empowering Cities. Enabling Futures." + sub "NIUM is an execution-ready institutional platform that helps States plan better, deliver faster, and govern smarter." Two CTAs: "Explore Verticals" / "Contact Us".
- Motion: framer-motion subtle fade-up on section entry, sticky nav with active-section highlight.

### Sections (single page, scroll nav)
1. **Hero** — gradient + skyline illustration, tagline, CTAs, NIUM logo lockup.
2. **About** — Vision & Mission cards side-by-side; short intro; stat strip (23 MCs trained · 252 Accounts Officers · 4 years TG-bPASS · 130+ municipalities served).
3. **Organogram** — clean hierarchy diagram (Governing Council → Director → vertical heads).
4. **Verticals** — 5 large cards, each with icon, blurb, and key projects:
   - Heritage & Urban Renewal (Charminar, Warangal Fort, Shaikpet Sarai, AKTC)
   - Urban Planning (UNICEF health mapping, FOBs, FCDA PMU)
   - Capacity Building & Training (MC training, Nepal NIRDI, SBM 2.0)
   - IT Consultancy (TG-bPASS, HMDA, GIS Hub, AI-ICCC)
   - Procurement & Consultancy (AMRUT 2.0, CITIIS 2.0, HMWSSB STP audits)
5. **NIUM-IT spotlight** — dedicated band highlighting flagship platforms:
   - TG-bPASS PMU (2020–2025, ₹20 Cr)
   - DTCP / CDMA / ENC officer transfer applications (developed & maintained)
   - AI Integrated Command & Control Centre (AI-ICCC) — Khammam–Warangal–Karimnagar corridor, ₹166.44 Cr capex, 23 municipalities
   - HMDA IT services, GIS Hub, Website dev for new municipalities
6. **Partnerships** — logo wall / cards: NIUA, TISS, RCUES Hyderabad, HUDCO, NIT Calicut, WMF, AKTC, UNICEF.
7. **Contact** — Telangana emblem + address (CDMA, Government of Telangana), email/phone placeholders, simple contact form (frontend only for now).
8. **Footer** — quick links, social, copyright.

### Technical notes
- New route files: keep `src/routes/index.tsx` as the long-scroll homepage. Components split into `src/components/sections/` (Hero, About, Organogram, Verticals, NiumIt, Partnerships, Contact, Footer) plus `Navbar.tsx` with smooth-scroll + `useActiveSection` hook.
- Design tokens added to `src/styles.css` (navy/royal/cyan/gold + gradients + shadows). All components use semantic tokens, not raw hex.
- Generated assets in `src/assets/`: abstract urban skyline hero illustration (premium quality), small icons per vertical (lucide-react where possible). Copy `Telangana_Logo_final.jpg` and the 3 event photos from uploads into `src/assets/` for the About / Partnerships sections.
- `head()` on the index route: title "NIUM — National Institute of Urban Management", description, og tags, og:image = hero illustration.
- Single H1 in hero; semantic `<section id="…">` for each block.
- Install `framer-motion` for scroll/entry animations.

### Out of scope (can follow later)
- Working contact form submission (Lovable Cloud + email).
- Separate route files per vertical (current ask is single-page scroll).
- CMS / blog / news feed.
