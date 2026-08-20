# Self-hosting the NIUM website (local + AWS)

This app is fully portable. It reads its backend location from environment
variables, so it can run against a database you own — on your laptop, on EC2, or
anywhere else. No managed hosting account is required at runtime.

Stack: React 19 + TanStack Start (SSR) + Postgres/Supabase (database, auth, RLS).

---

## 1. Run it locally

Prerequisites: [Bun](https://bun.sh) (or Node 22 + npm), Docker, and the
[Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started).

```bash
git clone <your-repo-url> nium
cd nium
bun install

# Start Postgres + Auth + REST API locally (Docker).
# Applies supabase/migrations/*.sql and supabase/seed.sql automatically.
supabase start

cp .env.example .env
# Paste the API URL + anon key printed by `supabase start` into .env
# (both the VITE_* and plain variables).

bun run dev          # http://localhost:8080
```

To wipe and reload the database with schema + calendar seed data:

```bash
supabase db reset
```

### Creating the first admin

1. Sign up at `/auth`.
2. Copy your user id from the `/admin` page (it is shown when you are not yet an admin).
3. Grant the role:

```bash
supabase db  # or psql against your database
INSERT INTO public.user_roles (user_id, role) VALUES ('<your-user-id>', 'admin');
```

---

## 2. Production build

Set `SELF_HOST=true` to build a plain Node server instead of an edge bundle:

```bash
bun run build:selfhost
node .output/server/index.mjs      # listens on $PORT (default 3000)
```

(Verified: the build emits `.output/server/index.mjs` and serves the site over
plain Node with no platform-specific runtime.)

Remember: `VITE_*` values are compiled into the browser bundle, so they must be
set **before** `bun run build:selfhost`, not just at runtime.

---

## 3. Host on AWS

### 3a. Database — your own Supabase, no external dependency

On an EC2 instance (t3.small or larger, Docker + Docker Compose installed):

```bash
git clone --depth 1 https://github.com/supabase/supabase
cd supabase/docker
cp .env.example .env      # set POSTGRES_PASSWORD, JWT_SECRET, ANON_KEY,
                          # SERVICE_ROLE_KEY, SITE_URL, API_EXTERNAL_URL
docker compose up -d
```

Then apply this project's schema and data to it:

```bash
# from the app repo, against your instance's Postgres connection string
psql "$DATABASE_URL" -f supabase/migrations/20260627070930_*.sql
psql "$DATABASE_URL" -f supabase/migrations/20260627070953_*.sql
psql "$DATABASE_URL" -f supabase/migrations/20260701075808_*.sql
psql "$DATABASE_URL" -f supabase/migrations/20260814112419_*.sql
psql "$DATABASE_URL" -f supabase/seed.sql
```

(Or point the Supabase CLI at it: `supabase link` + `supabase db push`.)

Use RDS Postgres instead if you prefer managed storage — run the Supabase Auth
and PostgREST containers against the RDS endpoint rather than the bundled
`db` container.

### 3b. App — container on ECS/Fargate, EC2, or Amplify

```bash
docker build \
  --build-arg VITE_SUPABASE_URL=https://api.your-domain.in \
  --build-arg VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-key> \
  --build-arg VITE_SUPABASE_PROJECT_ID=nium \
  -t nium-web .

docker run -p 3000:3000 \
  -e SUPABASE_URL=https://api.your-domain.in \
  -e SUPABASE_PUBLISHABLE_KEY=<your-anon-key> \
  nium-web
```

Deployment options:

| Option | How |
| --- | --- |
| **ECS / Fargate** (recommended) | Push the image to ECR, run a service behind an ALB, put CloudFront + ACM in front. |
| **EC2** | `docker compose up -d` using the included `docker-compose.yml`, Nginx or ALB for TLS. |
| **Amplify Hosting** | Connect the GitHub repo; build command `bun run build:selfhost`, and set the env vars in the Amplify console. |

Point your domain (`www.nium.org.in`) at the ALB/CloudFront/Amplify endpoint,
and set the Supabase Auth `SITE_URL` to that same domain so sign-in redirects work.

---

## 4. Ongoing workflow

1. Changes are made in the Lovable editor.
2. They land in the connected GitHub repo (GitHub → Connect, top-right).
3. On your AWS host: `git pull` → rebuild the image → redeploy. Wire this to
   CodePipeline / GitHub Actions for automatic deploys.
4. New database changes appear as new files in `supabase/migrations/` — apply
   them to your instance with `psql` or `supabase db push` after pulling.

---

## 5. What is intentionally not carried over

- Lovable-injected identity headers and automatic social-preview images are
  platform features; the self-hosted app simply does not use them.
- Existing user accounts and any registrations/contact messages live in the
  current managed database. Export them with `pg_dump` if you need them moved
  into your own instance.

## Images and media on a self-hosted server (AWS)

Large media (photos, posters, videos, newsletter PDFs) are not stored in git.
Each one is referenced by a small `*.asset.json` pointer in `src/assets/**` whose
`url` looks like `/__l5e/assets-v1/<id>/<file>`. On Lovable those paths are served
by Lovable's CDN; on AWS/local nothing serves them, so images appear broken.

`bun run build:selfhost` fixes this: it first runs
`node scripts/fetch-assets.mjs`, which downloads every referenced file into
`public/__l5e/...` so the built server serves them itself.

- Requires outbound internet during the build.
- Override the source with `ASSET_BASE_URL=https://<your-lovable-domain>`.
- Already-downloaded files are cached and skipped, so re-runs are fast.
- `public/__l5e/` is gitignored — never commit it.
- To fetch without building (e.g. for `bun run dev` locally): `bun run assets:fetch`.

**Important:** on AWS use `bun run build:selfhost` (or `npm run build:selfhost`)
as the build command. Plain `bun run build` produces a Cloudflare-targeted build
without the media mirror.
