# JasperLAX.com Web 1.2

Responsive Toyota Sienna airport transfer website for JasperLAX.com.

## Features

- English, Simplified Chinese, Spanish, Japanese and Korean pages.
- LAX routes, vehicle gallery, airport pickup/drop-off guide and categorized FAQs.
- Moovs booking embed and instructions for viewing existing reservations.
- Text, WhatsApp and LINE contact links.

## Run locally

Requires Node.js 20 or later and pnpm.

```sh
pnpm install
pnpm dev --host 127.0.0.1 --port 4173
```

## Build and verify

```sh
pnpm build
node scripts/check-prerender.mjs
pnpm test:sites
node --test tests/analytics.test.mjs
```

Build output: `dist/client` contains the prerendered pages; `dist/server/index.js` is the Sites Worker entrypoint. Sites identity is retained in `.openai/hosting.json`.

## Assets and booking

Generated vehicle scenes are illustrative; Toyota reference-image details are in `public/assets/gallery-sources.txt`. Banner variants are in `public/assets`.

Booking is provided by the configured external Moovs portal. Uploading this repository does not submit bookings or change Moovs account settings. All public website content is indexable as described below.

Production hosting uses Vercel connected to the GitHub main branch. Push only after explicit user authorization to publish.

## SEO / AI crawler access

All public website builds are production. There is no separate non-indexable preview build.

- Every public page, including My Booking instructions, permits indexing and is included in the sitemap.
- robots.txt uses `User-agent: *` and `Allow: /`. This permits all compliant crawler identities, including AI search and training bots, without per-bot exclusions.
- Source HTML and prerendered pages use `index, follow, max-image-preview:large`.
- Local Vite servers do not add a blocking X-Robots-Tag. Hosting environment variables do not change indexing policy.
- `vercel.json` prepares a permanent www-to-apex redirect consistent with canonical URLs; verify it after an authorized deployment.
- Builds validate crawl settings, sitemap membership, canonical URLs and translated FAQ content. Run `pnpm test:seo` for crawler policy checks.

Publishing requires the user's explicit instruction. Pushing `main` to GitHub can trigger the connected Vercel production deployment; do not push during local review.

After publication, verify live robots/meta/redirect responses, submit `https://jasperlax.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools, then inspect the homepage and four region URLs. Submission requires access to those accounts and is not completed by source changes. Crawling, indexing, AI citations and bot traffic are not guaranteed by an Allow rule; real traffic must be checked using hosting logs and webmaster reports.

## Web 1.2 analytics

GA4 measurement ID: G-GWFSCS26X4. Analytics loads only on jasperlax.com or www.jasperlax.com after visitor consent. Visitors can change consent using Analytics preferences. Contact and booking clicks do not confirm Moovs orders. Do not remove public/google7c057bfebb72f1ce.html, which maintains Search Console ownership verification.
