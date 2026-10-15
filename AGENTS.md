# Prototype Instructions

This is a responsive mobile-first website. Latest approved decisions: replace 360 with three exterior and three interior reference photos; replace About the Sienna with Book; remove Our Sienna from top navigation. Brand wordmark JasperLAX.com. Starting rates: Los Angeles $99, Orange County $119, San Bernardino $129, Riverside $129; hero From $99. Translate into English, Simplified Chinese, Spanish, Japanese and Korean using separate locale URLs. Preserve Sienna-only service, new independent Moovs account, WhatsApp +1 626 704 2786 and secondary Escalade/group referral. All public versions now use production indexing and wildcard crawler access. Do not publish or push without explicit user instruction.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Region route pages must embed JasperLAX's dedicated Moovs booking form directly below the intro. User will supply embed code later. Use official generated Customer Portal iFrame code; ordinary portal URL cannot be manually embedded. Until provided, show explicit pending state with WhatsApp enquiry, never reuse old account or fake a booking form. Starting price includes dollar symbol.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

Latest gallery feedback: exterior order On the road / Business travel / Family travel; first interior image is a wide cabin panorama. Generated travel scenes and conceptual interior must be identified as illustrative, not actual fleet photos.

Interior panorama: preserve selected camera angle; latest request all-black leather upholstery and refined black door/armrest finishes.

Approved vehicle copy: up to 6 passengers and at least 4 pieces of luggage; spacious flexible cabin suits most travel needs. Supporting line Professional chauffeurs. Professional service. Business gallery photo includes a chauffeur assisting passengers.

Interior third image replaces dashboard with open cargo area loaded with luggage. Q&A uses confirmed JasperLAX waiting terms: 30min domestic/60min international from actual landing, agreed buffer before overtime, USD15 per15min overtime (Jasperlimo differs at25; never inherit its fee). Expand home/region FAQ and full Q&A in all5 languages, preserve the currently authorized Moovs booking integration.

LAX arrivals/departures guide rebuilt with schematic meeting illustrations, whitecolumnexamples B8/4A/7F (confirm signs/chauffeur), conditionaldeparturespickup20mintrafficbenefit, flightmonitoring, domesticbuffer30+30=60min, customerSMS/WhatsApp, chauffeur15minbeforepickup,15minfreefromscheduledpickup,, extra stops bydistance/time, airline terminaldropoff. All19FAQ grouped Arrivals/Departures/Booking; guide10airportFAQ. Same5languages and visible matchingFAQschema.

The pickup guide uses deterministic inline SVG diagrams instead of simulated airport maps: arrivalshallnamesign and whitecurbcolumnwithSienna, labels localized. Original userbrief already authorizes implementing redesigned guide and FAQ. Airport policy signage reference https://www.flylax.com/-/media/flylax/pdfs/ground-transportaion/colored-sign-waiting-zones.ashx ; finalpickup followschauffeur/currentairportsigns.

Header navigation includes a localized LAX pickup/drop-off guide button, also available in the mobile hamburger menu.

Company location in the shared footer: San Marino, CA. No street address supplied.

LAX guide header entry uses the same plain text style as other navigation links, without a border.

Homepage FAQ is compact: three collapsed category accordions (Arrivals, Departures, Booking/vehicle), one category open at a time. Retain all 19 answers in crawlable HTML and full FAQ page.

Use user-supplied Jasper Limousine Service panoramic banner below upgrade copy, link to Jasperlimo.com; preserve full composition on mobile.

Contact channels: Text / WhatsApp / LINE. Separate LINE floating button above WhatsApp; LINE URL pending user input, never assume telephone number is LINE ID.

Buffer time delays chauffeur arrival: no airport standby before buffer ends; free waiting begins after that agreed buffer. Keep guide and all localized FAQ answers consistent.

LINE URL decoded from user-supplied QR code: https://line.me/ti/p/KE2kEevLtY . Enable shared floating and footer LINE links.

WhatsApp floating button uses brand blue, with darker blue hover.

Shared JasperLAX.com wordmark: only LAX in brand blue with subtle 8-degree italic slant, header and footer consistent.

User provided authorized Moovs embed: https://customer.moovs.app/limomoli-inc/iframe . Region pages embed this exact URL. Other booking buttons open the same provided form; region buttons scroll to embedded form. Do not submit reservations during verification.

Standalone booking stays on localized /book/ with clickable JasperLAX.com SVG wordmark returning home and embedded Moovs below. All global Book actions go to local booking page; region booking scroll preserved. Moovs third-party heading cannot be edited from our origin.

Mobile middle toolbar entry My Booking links to verified https://customer.moovs.app/limomoli-inc customer portal, with Login phone/email OTP. No invented direct login/orders route or reservation lookup. Retain Routes in top menu.

My Booking correction: public Moovs root redirects to new booking. Actual Orders route /limomoli-inc/user/orders is protected and also redirects guests. Mobile toolbar goes to localized /my-booking/ explaining Login with reservation phone/email, then account menu Orders. Do not claim anonymous lookup or authenticated verification.

Top navigation first entry replaces Routes with My Booking, linking to localized /my-booking/ in desktop and mobile menu. Route discovery remains in homepage and footer.

Homepage FAQ follows user reference: full-width heading, pill category tabs Booking/service, Airport pickup, Airport drop-off, selected category accordion questions, centered booking action. Blue brand style; retain all19 answers in HTML and translations. Supersedes nested category accordions.

Ultrawide fix: home composition, header and footer capped at1800px and centered; desktop hero height grows660-800px. Prevent 3440px cover scaling from cropping the Sienna roof. Preserve mobile picture/layout.

Home replaces How booking works with Before you book, One Way/Airport Pick Up/Airport Drop Off instructions, four expandable policy groups and the authorized Moovs iframe below. Reuse confirmed waiting/buffer/confirmation terms. Do not invent included meet-and-greet charges or payment terms. Home Book actions scroll to its form. All5 languages.

User instruction: future edits stay local. Do not publish or push GitHub until user explicitly asks to publish.
Region detail pages: replace Plan your airport ride with region-specific three-column planning, family and business information, confirmed JasperLAX waiting fees ($15/15min), child seats subject to confirmation without inventing fee. Region FAQ categories collapsed by default, one category open at a time. All four regions and five languages. Reference Jasperlimo pricing/vehicle claims must not be copied to Sienna-only JasperLAX.

Superseded SEO history (see latest correction below): production build indexes public content, My Booking stays noindex; preview and development stay noindex. VERCEL_ENV non-production automatically selects preview. Production robots allows search including OAI-SearchBot, retains GPTBot training opt-out, and declares sitemap. www redirect planned via vercel.json. Do not push or publish without explicit user instruction.

Latest SEO/GEO correction supersedes prior preview rules: user states all versions are production and wants all AI crawler access. All75 public pages including My Booking instructions are indexable and in sitemap. Wildcard Allow, no per-bot exclusions (GPTBot training is now allowed too). Remove preview build/profile and X-Robots-Tag restrictions. This is not permission to publish: keep local until explicit publishing instruction.

Consumer search improvements, 2026-10-12: local edits only until explicit publishing instruction. Confirmed pricing is per vehicle, parking and highway tolls included, gratuity excluded, name-sign Meet & Greet +USD30, child seat USD35 subject to availability/suitability. Cancel more than48h before scheduled pickup: free/full refund; 48h to24h inclusive: 50% charge/50% refund; less than24h: no refund. Refund up to7 days depending on payment channel. Service all five Greater Los Angeles counties: Los Angeles, Orange, San Bernardino, Riverside, Ventura; other destinations contact team. Do not invent Ventura/city starting rates, payment deadline, no-show fee, licenses, reviews or company legal relationship. New Irvine/Anaheim/Pasadena pages request a trip quote. All five languages, visible FAQ and schema kept consistent.

Booking header layout correction: title and route note use full-width rows. Booking instructions and fee summary are two equal-width, left-aligned cards on desktop and stack on mobile. Do not reuse the old title/price-only flex row for expanded booking content. Keep changes local until explicit publishing instruction.

Homepage reviews: use only the three user-supplied Google reviews by Kelvin Shi, Alicia Grissom and Jaclyn Brown, verified on Jasper Limousine Service Maps page on 2026-10-12. Preserve original English quotes and 5-star ratings. Label source business clearly, disclose SUV/Sprinter reviews are not JasperLAX Sienna reviews. Do not fabricate customers, add aggregate rating/Review schema, or imply live synchronization. Manual accessible horizontal carousel, touch scrolling, no automatic motion. Keep local until publication is explicitly requested.

Search Console connected 2026-10-14: URL-prefix https://jasperlax.com/, verified by HTML file public/google7c057bfebb72f1ce.html. Keep this file in all future deployments so ownership verification remains valid. Only that file was published in commit f9d816d6a536720a3c81762ced9537f549bc0d9f. Sitemap successfully submitted with75 discovered URLs; discovery is not indexing. Other pending website improvements remain local. DNS domain property is still unverified.

Owner-confirmed brand positioning, 2026-10-14: Jasperlimo.com and JasperLAX.com are two products of the same company. Jasperlimo.com focuses on luxury/high-end transportation; JasperLAX.com focuses on comfortable/economical Toyota Sienna airport transfers. This supersedes earlier uncertainty about their relationship. Do not infer a registered legal name or registration number. Keep separate self-canonical URLs for each product. Continue to attribute the SUV/Sprinter reviews to Jasper Limousine Service.

Homepage airport-flight fields, 2026-10-14: user requests updating the embedded homepage booking form rather than adding an external booking button. Verified correct limomoli-inc account; generated /iframe code is unchanged and lacks Airport/flight fields in its first step. Full /new/info loads inside a local test iframe and exposes Airline/Flight after selecting Airport. Homepage only now uses a local compatibility candidate for that full portal, with five-language Airport-toggle instructions. This is not officially supported by Moovs installation guidance; login/payment/completion remain unverified. Do not claim a fully supported integration or publish without explicit user authorization. Other route and booking pages retain official /iframe. No backend settings or reservations were changed.

Homepage-only Moovs presentation correction: user wants less whitespace and no Moovs brand banner on the homepage, while keeping the banner on the independent Moovs portal. Keep the full-portal compatibility candidate scoped to the homepage. Use an overflow-hidden viewport to exclude the observed 160px desktop banner / 68px mobile brand header and cap the local wrapper at900px; use the compact 590px iframe viewport in containers below840px so the third-party stepper and Login are not horizontally clipped. Do not delete the global Moovs booking image or change backend branding. Because the header crop depends on third-party layout, verify both header visibility and form controls whenever Moovs changes. Still local only until explicitly published.

Desktop Moovs width correction: user approves the mobile version and requests a wider desktop booking area. At viewport901px and above, widen the homepage wrapper to100% of available space, capped at1140px (Moovs portal content width). Preserve the approved mobile widths, header crop, and flight fields. Moovs internal input-column widths remain third-party controlled; do not claim they were changed. Keep local until explicitly published.

Fluid desktop Moovs width supersedes the1140px cap: at viewport901px and above, homepage booking wrapper uses width100% and max-width:none, aligned with its booking-instructions content area. It follows available page width; preserve the approved mobile presentation and homepage-only brand-header crop. Third-party internal field-column widths remain controlled by Moovs. Local only until explicitly published.
