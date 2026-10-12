# Design QA — latest revision

Final result: passed for the local responsive prototype. Not a production launch.

## Source and comparison evidence

Selected source visuals: C:/Users/LIMOM/.codex/generated_images/01a12304-5140-7091-b968-0bada7e4ef7a/exec-226b5ce6-2dcb-423e-83c4-f00e9d727e61.png (745x2109 mobile) and exec-628e5f03-2435-4a2f-a180-fafa9cf378dc.png (851x1849 desktop). Latest user browser comments supersede: $99/$119/$129/$129 starting rates; JasperLAX.com; five languages; no top Our Sienna; six photo gallery; vehicle-section Book; continuous mobile photo with car facing LEFT.

Source revised photo: public/assets/sienna-mobile-v2.png (1024x1536). Implementation: http://127.0.0.1:4173/. Mobile viewport 390x844 (screenshot 390x3755 full page), additional 600x1244. Desktop viewport 1440x1000 (screenshot 1425x3354, scrollbar excluded). Density 1. Combined inputs opened and reviewed: qa/mobile-comparison.jpg, qa/desktop-comparison.jpg and qa/hero-revision-comparison.jpg. Comparison columns normalized to equal widths, not equal page heights. Generated mock is illustrative; real mobile text remains readable instead of shrinking to mock density. Focused gallery evidence: qa/gallery-mobile.jpg; full hero evidence: qa/mobile-hero-v2.jpg and qa/mobile-600.jpg.

## Findings and fixes

- P2 mobile hero: previous cream block and fixed 220px photo left excessive blank space and cropped the car at 600px. Replaced with a continuous portrait background and responsive 550–780px hero. At 390px complete left-facing vehicle, price and Book are visible in the first viewport. At 600px the whole car also fits. Evidence: hero-revision-comparison.jpg and mobile-600.jpg.
- P2 initial revised image faced right. Generated edit preserves composition and turns vehicle left; inspected source and browser render.
- P2 gallery images initially retained intrinsic height and stretched the layout. Applied height:auto and fixed thumbnail aspect ratio; final evidence shows correct 16:9 proportions.
- P2 quote note crossed busy background. Added small translucent light background for readability; no large blank panel.
- Five-language heading sizes adjusted for Spanish and Korean to prevent overflow. Browser confirms 390px scrollWidth for each locale.
- No remaining P0/P1/P2 visual issue in authorized scope. Earlier QA fixes (serif hierarchy, mobile headings, library FAQ icons) retained.

## Required fidelity surfaces

Fonts: Georgia editorial headings, sans UI, readable 14px mobile body; translated headings use appropriate CJK line height. Brand .com fits beside language and menu controls at 390px.
Spacing: mobile vertical routes, full-width gallery, three thumbnails, 44px+ controls, fixed bottom toolbar and WhatsApp above it. Desktop uses two columns. No horizontal viewport overflow.
Tokens: white, warm photo architecture, black headings and cobalt primary buttons. Green WhatsApp remains secondary.
Images: full left-facing silver Sienna hero, separate desktop crop. Six distinct Toyota official reference photos: front/rear/road and front cabin/passenger seating/dashboard. Caption and reference disclaimer visible. No simulated 360, provider iframe or external interior tour remains.
Copy: starting rates explicit, final quote before booking, four areas, Sienna focus, Escalade/group referral. No $XX or old $79. Latest prices are user-provided starting rates, not final fixed trip quotes.

## Functional and build evidence

Build passed and prerendered 65 pages (13 routes x 5 languages). scripts/check-prerender.mjs checks canonicals, hreflang, local-language HTML, language-preserving links, correct WhatsApp, no placeholders and no Sketchfab. Four worker tests passed.
Browser verified: EN/ZH/ES/JA/KO switching, matching heading and lang attributes, 390px no overflow, 600px and desktop geometry; gallery next and thumbnail 3/3; exterior/interior change; all interior assets loaded; vehicle Book dialog and close. Main navigation Our Sienna removed. Public deployment and new Moovs integration remain outside this completed prototype update.

## Checklist

- [x] Three exterior and three interior photos, swipe/keyboard/thumbnail controls.
- [x] Vehicle-section Book and simplified top navigation.
- [x] User prices and JasperLAX.com branding.
- [x] Five real translated locale paths, server-visible text and hreflang.
- [x] Continuous mobile photo, full vehicle facing left.
- [x] Build, HTML checks, browser screenshots and combined visual QA.
- [ ] New dedicated Moovs URL, final service policies/privacy and public release.

## Latest gallery and regional booking revision

User input: road photo first; second business scene; third family scene. Interior first image uses the approved panoramic angle with all-black leather. Implemented road / business / family and black cabin panorama / passenger seats / dashboard. New scenes are illustrative; visible disclaimer and gallery-sources.txt distinguish them from Toyota references. No actual fleet configuration claim.

Four regional pages place RouteBooking directly below their introduction. Confirmed dollar starting prices and localized pending text. Moovs official generated embed code remains a user-deferred dependency; no old account and no fabricated working form. WhatsApp enquiry remains available.

Verified browser desktop 1338px and mobile 390px: all gallery thumbnails loaded, category/thumbnail selections and road/business/family captions; black panorama 1/3, no document overflow. Evidence: qa/gallery-black-interior-desktop.jpg, qa/gallery-black-interior-mobile.jpg, qa/route-booking-desktop.jpg, qa/route-booking-mobile.jpg. Comparison follows user screenshot anatomy with intentional photo substitutions; layout, thumbnail row and category controls preserved. Final build prerenders 65 pages, expanded HTML checks cover regional booking state and exterior sequence; four worker tests passed.

## Chauffeur, capacity, luggage and waiting FAQ revision

User capacity wording implemented: up to 6 passengers, at least 4 bags and spacious flexible interior; professional chauffeurs/service line, synchronized in all five locales and vehicle page. Business image v3 adds chauffeur helping with luggage. Interior third photo is luggage cargo scene v1; approved black panorama stays first. Images retain illustrative disclaimer.

FAQ expanded from 6 to13, home/region show9 including domestic30/international60 minutes, actual landing start, arranged buffer and USD15 per15min extra waiting. Read Jasperlimo.com Q&A for flight-delay/buffer/booking question structure; its USD25 waiting fee intentionally overridden by user's USD15 instruction, and old account/payment/meet-and-greet policies not adopted. FAQPage JSON-LD localized and matches displayed questions/answers. Policies text points to established waiting Q&A while other terms still need confirmation.

Verified native browser desktop screenshots vehicle-chauffeur-desktop.jpg, vehicle-luggage-desktop.jpg, faq-waiting-desktop.jpg in qa/. Chinese FAQ accordion exposed exact30/60/15 values and buffer policy;390px no overflow;13 questions. Expanded check-prerender verifies65pages, matching localized visible/schemaFAQ count and content, noUSD25 waiting fee. Build passed and four worker tests passed.

Mobile verification additionally uncovered prior hidden description paragraphs. Restored capacity and professional-service text at390px; confirmed visible Chinese copy, luggage3/3 loaded, no overflow. Evidence qa/vehicle-capacity-luggage-mobile.jpg and qa/faq-waiting-mobile.jpg. Desktop comparison preserves original user screenshot hierarchy with deliberate content/photo updates.

## LAX pickup and drop-off guide redesign

Compared user-provided plain information-page screenshot with rebuilt guide. Same white/editorial/cobalt visual language; added arrivals/departures/waiting anchor navigation, two deterministic SVG meeting illustrations, domestic/international/departure waiting rates, buffer30+30=60 explanation,3-stepdepartureflow and customer SMS/WhatsApp/Book links. Whitecolumn identifiers are examples; actual meeting followschauffeur/currentairport signs.20minbenefit is conditional, not guaranteed.

SharedFAQ now19questions grouped Arrivals6 / Departures4 / Booking9, all visible as accessible native details. Guide contains10 airportquestions. User policies maintained: chauffeur contacts beforelanding, namesignmeetgreet, curbsidewhitecolumn,30domestic/60international actuallanding freewait, arrangedbuffer,15minearly standby,15minfree departure/one-way fromscheduledtime,$15per15minextra, addedstopdistance/time, airlineassignedterminal. New content translated EN/ZH/ES/JA/KO. Guide metadata covers pickup and drop-off.

Browser verified Chinese desktop meetingillustrations and chapteranchor, bufferquestionopens to60minexample,19FAQ3groups; all5locales at390px no horizontaloverflow. Evidence qa/lax-guide-diagrams-desktop.jpg, lax-guide-arrivals-mobile.jpg, lax-guide-waiting-mobile.jpg, lax-guide-waiting-en-mobile.jpg. Finalbuild65pages passed; schema content/count matches rendered localized answers,19standard/10guide; four worker tests passed. NewMoovs code stillawaitinguser; nopublishing.

Header guide button added in all five languages. Desktop header and 390px mobile menu visually checked; Chinese menu link navigates to /zh/lax-pickup-guide/. Build and 65-page prerender checks passed.
