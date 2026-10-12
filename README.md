# JasperLAX.com Web 1.0

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
```

Build output: `dist/client` contains the prerendered pages; `dist/server/index.js` is the Sites Worker entrypoint. Sites identity is retained in `.openai/hosting.json`.

## Assets and booking

Generated vehicle scenes are illustrative; Toyota reference-image details are in `public/assets/gallery-sources.txt`. Banner variants are in `public/assets`.

Booking is provided by the configured external Moovs portal. Uploading this repository does not submit bookings or change Moovs account settings. Preview indexing restrictions are preserved.

No automatic publishing workflow is configured in this repository.
