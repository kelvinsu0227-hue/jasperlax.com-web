# Prototype Instructions

This is a responsive mobile-first website. Latest approved decisions: replace 360 with three exterior and three interior reference photos; replace About the Sienna with Book; remove Our Sienna from top navigation. Brand wordmark JasperLAX.com. Starting rates: Los Angeles $99, Orange County $119, San Bernardino $129, Riverside $129; hero From $99. Translate into English, Simplified Chinese, Spanish, Japanese and Korean using separate locale URLs. Preserve Sienna-only service, new independent Moovs account, WhatsApp +1 626 704 2786 and secondary Escalade/group referral. Keep unpublished preview noindex.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Region route pages must embed JasperLAX's dedicated Moovs booking form directly below the intro. User will supply embed code later. Use official generated Customer Portal iFrame code; ordinary portal URL cannot be manually embedded. Until provided, show explicit pending state with WhatsApp enquiry, never reuse old account or fake a booking form. Starting price includes dollar symbol.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

Latest gallery feedback: exterior order On the road / Business travel / Family travel; first interior image is a wide cabin panorama. Generated travel scenes and conceptual interior must be identified as illustrative, not actual fleet photos.

Interior panorama: preserve selected camera angle; latest request all-black leather upholstery and refined black door/armrest finishes.

Approved vehicle copy: up to 6 passengers and at least 4 pieces of luggage; spacious flexible cabin suits most travel needs. Supporting line Professional chauffeurs. Professional service. Business gallery photo includes a chauffeur assisting passengers.

Interior third image replaces dashboard with open cargo area loaded with luggage. Q&A uses confirmed JasperLAX waiting terms: 30min domestic/60min international from actual landing, agreed buffer before overtime, USD15 per15min overtime (Jasperlimo differs at25; never inherit its fee). Expand home/region FAQ and full Q&A in all5 languages, preserve preview booking pending state.

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
