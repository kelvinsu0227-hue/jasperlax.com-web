import {serviceCopy} from './service-copy.js';
import {cityRoutes} from './city-routes.js';
import ServiceInformation, {ServiceOverview,BookingTip,LuggageCheck,FeeSummary} from './ServiceInfo.jsx';
import RoutePlanning from './RoutePlanning.jsx';
import HomeBooking from './HomeBooking.jsx';
import Reviews from './Reviews.jsx';
import AirportGuide from './AirportGuide.jsx';
import {faqGroups} from './faq.js';
export {questions,guideQuestions} from './faq.js';
import { LanguageContext, languages, parseLocale, localePath, translate, translateTree } from './i18n.jsx';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, House, MapPin, CalendarBlank, WhatsappLogo, List, X, CaretLeft, CaretRight, Plus, Minus, CaretDown } from '@phosphor-icons/react';
export const config = {
  whatsapp: '16267042786',
  lineUrl: 'https://line.me/ti/p/KE2kEevLtY',
  customerPortalUrl: 'https://customer.moovs.app/limomoli-inc/user/orders',
  bookingUrl: '/book/',
  // Use the src from JasperLAX's Moovs-generated iFrame code, never the portal link.
  bookingEmbedUrl: 'https://customer.moovs.app/limomoli-inc/iframe'
};
export const routes = [['los-angeles-lax', 'Los Angeles', 99], ['orange-county-lax', 'Orange County', 119], ['san-bernardino-lax', 'San Bernardino', 129], ['riverside-lax', 'Riverside', 129]];
export const basePaths = ['/', '/routes/', ...routes.map(([s]) => `/routes/${s}/`), ...cityRoutes.map(([s]) => `/routes/${s}/`), '/book/', '/my-booking/', '/toyota-sienna/', '/faq/', '/lax-pickup-guide/', '/about/', '/contact/', '/policies/', '/privacy/'];
export const paths = languages.flatMap(([lang]) => basePaths.map(path => localePath(path, lang)));
export function metadata(fullPath) {
  const {
    path,
    lang
  } = parseLocale(fullPath);
  const r = [...routes,...cityRoutes].find(([s]) => path === `/routes/${s}/`);
  const t = {
    '/': 'Private Toyota Sienna Transfers to & from LAX',
    '/routes/': 'LAX Airport Transfer Routes',
    '/book/': 'Book Your LAX Airport Ride',
    '/my-booking/': 'My Booking',
    '/toyota-sienna/': 'Explore Our Toyota Sienna',
    '/faq/': 'LAX Airport Transfer Questions & Answers',
    '/lax-pickup-guide/': 'LAX Airport Pickup & Drop-off Guide',
    '/about/': 'About JasperLAX',
    '/contact/': 'Contact JasperLAX',
    '/policies/': 'Booking & Service Information',
    '/privacy/': 'Privacy Information'
  };
  const descriptions={
    '/routes/':'Airport rides to and from LAX across five Southern California counties.',
    '/book/':'Book a private Toyota Sienna transfer to or from LAX. Enter your trip details and review your quote in Moovs.',
    '/my-booking/':'Sign in to Moovs to view your reservations.',
    '/toyota-sienna/':'The Sienna accommodates up to 6 passengers and at least 4 pieces of luggage. Its spacious, flexible interior suits most travel needs.',
    '/faq/':'Clear answers about your vehicle, service areas, and booking.',
    '/lax-pickup-guide/':'A practical guide to meeting your chauffeur, planning your waiting time, and getting to your LAX terminal.',
    '/about/':'JasperLAX focuses on private Toyota Sienna transfers to and from LAX.',
    '/contact/':'Talk to JasperLAX about your airport trip.',
    '/policies/':'Confirm your trip details and service terms with JasperLAX.',
    '/privacy/':'Privacy information.'
  };
  return {
    title: `${lang==='en'?(r?`${r[1]} to LAX Private Sienna Transfers`:t[path]||'Page not found'):r?`${translate(r[1],lang)} ↔ LAX | ${translate('Private Toyota Sienna airport transfers',lang)}`:translate({'/':'Private Toyota Sienna airport transfers','/routes/':'Find your route.','/book/':'Book your ride','/my-booking/':'My Booking','/toyota-sienna/':'Meet your Sienna.','/faq/':'Questions before your ride?','/lax-pickup-guide/':'LAX pickup & drop-off guide','/about/':'About','/contact/':'Contact','/policies/':'Policies','/privacy/':'Privacy'}[path]||'Home',lang)} | JasperLAX.com`,
    description: path==='/privacy/'?serviceCopy[lang].privacyIntro:path==='/policies/'?serviceCopy[lang].intro:translate(r ? `Private Toyota Sienna airport transfers between ${r[1]} and LAX, in either direction.` : descriptions[path] || 'Private Toyota Sienna transfers to and from LAX for up to 6 passengers. Serving five Greater Los Angeles counties; parking and tolls included. Get a trip quote.',lang)
  };
}
const wa = (text = "Hi JasperLAX, I'd like to ask about a Toyota Sienna transfer to or from LAX.") => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
const ext = {
  target: '_blank',
  rel: 'noopener noreferrer'
};
function Link({
  href,
  children,
  external = false
}) {
  const lang = useContext(LanguageContext);
  return translateTree(<a className="text-link" href={href} {...external ? ext : {}}>{children}<ArrowUpRight size={18} /></a>, lang);
}
function Book({
  onBook,
  compact = false
}) {
  const lang = useContext(LanguageContext);
  return translateTree(<button className={`primary ${compact ? 'compact' : ''}`} onClick={onBook}>Book your ride<ArrowUpRight size={20} /></button>, lang);
}
function RouteList() {
  const lang = useContext(LanguageContext);
  return translateTree(<div className="route-list">{routes.map(([s, n, price]) => <a className="route-row" href={`/routes/${s}/`} key={s}><span><span className="route-overline">TO / FROM LAX</span><span className="city">{n}<span className="desktop-route"> ↔ LAX</span></span></span><strong><small>From </small>${price}</strong><ArrowRight size={21} /></a>)}<a className="route-row" href={wa("Hi JasperLAX, I would like a quote for a Ventura County transfer to or from LAX.")} {...ext}><span className="city">Ventura County ↔ LAX</span><span>Request a quote</span><ArrowUpRight size={21}/></a></div>, lang);
}
function CityLinks({region}) {
 const lang=useContext(LanguageContext);const list=cityRoutes.filter(c=>!region||c[2]===region);
 return translateTree(<nav className="city-links" aria-label="City airport transfers">{list.map(([slug,name])=><a className="text-link" key={slug} href={`/routes/${slug}/`}>{name} ↔ LAX →</a>)}</nav>,lang);
}
function Faq({guide=false,compact=false,collapsed=false}) {
  const lang=useContext(LanguageContext);
  const [activeCategory,setActiveCategory]=useState("booking-vehicle");
  const groups=guide?faqGroups.slice(0,2):faqGroups;
  const list=group=><div className="faq-list">{group.items.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true" className="faq-mark"><Plus size={16} className="faq-plus"/><Minus size={16} className="faq-minus"/></span></summary><p>{a}</p></details>)}</div>;
  if(collapsed) return translateTree(<div className="faq-groups faq-collapsed">{groups.map(group=><details className="faq-category" name="route-faq-category" key={group.id}><summary><span>{group.title}</span><span className="faq-category-count">{group.items.length}</span><CaretDown size={20}/></summary>{list(group)}</details>)}</div>,lang);
  if(compact){
    const categories=[groups[2],groups[0],groups[1]];
    const labels={'booking-vehicle':'Booking & service',arrivals:'Airport pickup',departures:'Airport drop-off'};
    return translateTree(<div className="faq-tabs"><div className="faq-tab-list" role="tablist" aria-label="Q&A">{categories.map(group=><button key={group.id} id={'tab-'+group.id} type="button" role="tab" aria-selected={activeCategory===group.id} aria-controls={'panel-'+group.id} tabIndex={activeCategory===group.id?0:-1} onClick={()=>setActiveCategory(group.id)} onKeyDown={e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const index=categories.findIndex(g=>g.id===group.id);const next=e.key==='Home'?0:e.key==='End'?2:(index+(e.key==='ArrowRight'?1:2))%3;setActiveCategory(categories[next].id);document.getElementById('tab-'+categories[next].id)?.focus();}}}>{labels[group.id]}</button>)}</div>{categories.map(group=><section key={group.id} id={'panel-'+group.id} role="tabpanel" aria-labelledby={'tab-'+group.id} hidden={activeCategory!==group.id}>{list(group)}</section>)}</div>,lang);
  }
  return translateTree(<div className="faq-groups">{groups.map(group=><section className="faq-group" key={group.id} aria-labelledby={'faq-'+group.id}><h3 id={'faq-'+group.id}>{group.title}</h3>{list(group)}</section>)}</div>,lang);
}
const photos = {
  exterior: [['On the road', 'sienna-exterior-3.jpg'], ['Business travel', 'sienna-business-v3.webp'], ['Family travel', 'sienna-family-v2.webp']],
  interior: [['Cabin panorama', 'sienna-interior-panorama-v3.webp'], ['Passenger seating', 'sienna-interior-2.jpg'], ['Luggage space', 'sienna-luggage-v1.webp']]
};
function Gallery() {
  const lang = useContext(LanguageContext);
  const [mode, setMode] = useState('exterior');
  const [index, setIndex] = useState(0);
  const strip = useRef(null);
  const go = n => {
    strip.current?.scrollTo({
      left: n * strip.current.clientWidth,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    setIndex(0);
    strip.current?.scrollTo({
      left: 0,
      behavior: 'instant'
    });
  }, [mode]);
  return translateTree(<div className="vehicle-gallery"><div className="gallery-strip" ref={strip} onScroll={e => setIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))} tabIndex={0} aria-label="Sienna photo gallery" onKeyDown={e => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(Math.min(2, index + 1));
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(Math.max(0, index - 1));
      }
    }}>{photos[mode].map(([caption, file], i) => <figure key={file}><img src={'/assets/' + file} alt={'Toyota Sienna — ' + caption} loading="lazy" width="1200" height="675" /></figure>)}</div><div className="gallery-controls"><button aria-label="Previous photo" onClick={() => go(Math.max(0, index - 1))} disabled={index === 0}><CaretLeft size={20} /></button><p aria-live="polite">{photos[mode][index]?.[0]} <span>{index + 1} / 3</span></p><button aria-label="Next photo" onClick={() => go(Math.min(2, index + 1))} disabled={index === 2}><CaretRight size={20} /></button></div><div className="gallery-thumbnails">{photos[mode].map(([caption, file], i) => <button key={file} onClick={() => go(i)} aria-label={'Show photo ' + (i + 1)} aria-pressed={index === i}><img src={'/assets/' + file} alt={caption} loading="lazy" /></button>)}</div><div className="viewer-tabs" role="group" aria-label="Vehicle view"><button aria-pressed={mode === 'exterior'} onClick={() => setMode('exterior')}>Exterior</button><button aria-pressed={mode === 'interior'} onClick={() => setMode('interior')}>Interior</button></div><p className="fine-print">Illustrative and Toyota reference images. Vehicle year, color and trim may vary.</p></div>, lang);
}
function Upgrade() {
  const lang = useContext(LanguageContext);
  return translateTree(<section className="upgrade section"><div><h2>Need more than a Sienna?</h2><p>Upgrade your ride with a Cadillac Escalade. Traveling with a group? Discover more vehicle options at Jasperlimo.com.</p></div><div><Link href="https://jasperlimo.com" external>Explore more rides</Link><span className="link-caption">Jasperlimo.com</span></div><a className="upgrade-banner" href="https://jasperlimo.com" {...ext} aria-label="Jasperlimo.com"><img src="/assets/jasperlimo-introduction.webp" alt="Jasper Limousine Service — Mercedes-Benz sedan and Cadillac Escalade in Los Angeles" width="2138" height="476" loading="lazy" /></a></section>, lang);
}
function Home({
  onBook
}) {
  const lang = useContext(LanguageContext);
  return translateTree(<main className="home-page"><section className="hero"><div className="hero-copy"><h1>LAX,<br />without the fuss.</h1><p className="hero-intro">Private Toyota Sienna transfers<br className="desktop-only" /> to and from LAX.</p><div className="hero-price"><small>From </small>$99</div><p className="price-note">Starting price per vehicle. Final quote confirmed before booking.</p><div className="desktop-book"><Book onBook={onBook} /></div></div><picture className="hero-picture"><source media="(max-width: 700px)" srcSet="/assets/sienna-mobile-v2.webp" /><img className="hero-photo" src="/assets/sienna-hero.webp" alt="Silver Toyota Sienna in a sunny California setting, concept photography" fetchPriority="high" /></picture><div className="mobile-book"><Book onBook={onBook} /></div><p className="service-areas">Los Angeles · Orange County<br />San Bernardino · Riverside · Ventura</p></section><ServiceOverview/><section className="routes-section section" id="routes"><div><h2>Find your route.</h2><p className="muted">Starting rates. Final quote depends on your trip.</p></div><div><RouteList /><CityLinks/><Link href="/routes/">View all routes</Link></div></section><section className="sienna-section section" id="sienna"><div className="sienna-heading"><span className="eyebrow">ONE VEHICLE. YOUR AIRPORT RIDE.</span><h2>Meet your Sienna.</h2><p>The Sienna accommodates up to 6 passengers and at least 4 pieces of luggage. Its spacious, flexible interior suits most travel needs.</p><p className="muted">Professional chauffeurs. Professional service.</p><LuggageCheck/><Book onBook={onBook} /></div><Gallery /></section><Reviews/><HomeBooking embedUrl={config.bookingEmbedUrl}/><section className="faq-section section faq-tabbed-section" id="qa"><div className="faq-tabbed-heading"><h2>Questions before your ride?</h2><Link href="/faq/">View all questions</Link></div><Faq compact /><div className="faq-tabbed-book"><Book onBook={onBook}/></div></section><Upgrade /></main>, lang);
}
function RouteBooking({route}) {
  const lang=useContext(LanguageContext);
  return translateTree(<section className="route-booking" id="book-ride" aria-labelledby="route-booking-title"><div className="route-booking-heading"><h2 id="route-booking-title">Book your ride</h2><p><span>From </span><strong>${route[2]}</strong><span className="booking-price-note">Final quote confirmed before booking.</span></p><BookingTip/><FeeSummary/></div>{config.bookingEmbedUrl ? <iframe className="moovs-booking-frame" src={config.bookingEmbedUrl} title="JasperLAX online booking" allow="payment"/> : <div className="booking-pending"><CalendarBlank size={32} weight="light" aria-hidden="true"/><h3>Online booking is coming soon.</h3><p>Our booking form will appear here. For now, contact JasperLAX to plan your trip.</p><a className="primary" href={wa(`Hi JasperLAX, I'd like to ask about a Toyota Sienna transfer between ${route[1]} and LAX.`)} {...ext}><WhatsappLogo size={22}/>Chat on WhatsApp</a></div>}</section>,lang);
}
function Page({
  path,
  onBook
}) {
  const lang = useContext(LanguageContext);
  const r = routes.find(([s]) => path === `/routes/${s}/`);
  const city=cityRoutes.find(([slug])=>path===`/routes/${slug}/`);
  if(city){
   const [slug,name,parent,notes]=city;const region=routes.find(r=>r[0]===parent);const c=serviceCopy[lang];
   return translateTree(<main className="inner-page city-route-page"><div className="breadcrumb"><a href="/">Home</a> / <a href="/routes/">Routes</a> / {name}</div><span className="eyebrow">PRIVATE TOYOTA SIENNA TRANSFERS</span><h1>{name} ↔ LAX</h1><p className="lead">{`Private Toyota Sienna airport transfers between ${name} and LAX, in either direction.`}</p><section className="route-booking" id="book-ride"><div className="route-booking-heading"><h2>Book your ride</h2><p>{notes[['en','zh','es','ja','ko'].indexOf(lang)]}</p><BookingTip/><FeeSummary/></div><iframe className="moovs-booking-frame" src={config.bookingEmbedUrl} title="JasperLAX online booking" allow="payment"/></section><section className="inner-section"><LuggageCheck/><p>{c.areaText}</p><Link href={`/routes/${parent}/`}>{region[1]} ↔ LAX</Link><Link href="/lax-pickup-guide/">{c.guide}</Link></section><section className="inner-section"><h2>Questions before your ride?</h2><Faq collapsed/></section><section className="inner-section"><h2>Other service areas.</h2><RouteList/><CityLinks/></section></main>,lang);
  }
  if (path === '/privacy/' || path === '/policies/') return <ServiceInformation privacy={path === '/privacy/'}/>;
  if (path === '/my-booking/') return translateTree(<main className="inner-page my-booking-page"><div className="breadcrumb"><a href="/">Home</a> / My Booking</div><h1>My Booking</h1><p className="lead">Sign in to Moovs to view your reservations.</p><section className="my-booking-card"><h2>Already booked?</h2><ol><li>Open the Moovs customer portal below.</li><li>If you see a booking form, select Login. Use the phone number or email address from your reservation and enter the verification code.</li><li>Once signed in, select Orders from the account menu to view your bookings.</li></ol><a className="primary" href={config.customerPortalUrl} {...ext}>Open Moovs · My bookings<ArrowUpRight size={20}/></a><p className="muted">Moovs redirects guests to its booking form before login. Your reservations are available after you sign in.</p></section><section className="inner-section"><h2>Need help finding your booking?</h2><p>You can also use the reservation link in your confirmation email, or contact our team.</p><Link href={wa()} external>Chat with us on WhatsApp</Link></section></main>,lang);
  if (path === '/book/') return translateTree(<main className="inner-page booking-page"><div className="booking-page-heading"><h1>Book your ride</h1><Link href="/">Back to home</Link></div><BookingTip/><FeeSummary/><iframe className="moovs-booking-frame" src={config.bookingEmbedUrl} title="JasperLAX online booking" allow="payment"/></main>,lang);
  if (r || path === '/routes/') return translateTree(<main className="inner-page"><div className="breadcrumb"><a href="/">Home</a> / <a href="/routes/">Routes</a>{r && ` / ${r[1]}`}</div><span className="eyebrow">PRIVATE TOYOTA SIENNA TRANSFERS</span><h1>{r ? `${r[1]} ↔ LAX` : 'Find your route.'}</h1><p className="lead">{r ? `Private Toyota Sienna airport transfers between ${r[1]} and LAX, in either direction.` : 'Airport rides to and from LAX across five Southern California counties.'}</p>{r ? <RouteBooking route={r}/> : <div className="inline-book"><Book onBook={onBook} /><span>Starting rates. Final quote depends on your trip.</span></div>}{r ? <><RoutePlanning route={r} onBook={onBook} Book={Book} contactUrl={wa(`Hi JasperLAX, I'd like to ask about a Toyota Sienna transfer between ${r[1]} and LAX.`)}/><CityLinks region={r[0]}/></> : <><RouteList/><CityLinks/></>}<section className="inner-section"><h2>Questions before your ride?</h2><Faq collapsed={!!r}/></section>{r && <section className="inner-section"><h2>Other service areas.</h2><RouteList /></section>}</main>, lang);
  if (path === '/toyota-sienna/') return translateTree(<main className="inner-page"><div className="breadcrumb"><a href="/">Home</a> / Our Sienna</div><h1>Meet your Sienna.</h1><p className="lead">The Sienna accommodates up to 6 passengers and at least 4 pieces of luggage. Its spacious, flexible interior suits most travel needs.</p><p className="muted">Professional chauffeurs. Professional service.</p><Gallery /><LuggageCheck/><section className="inner-section"><h2>Your trip, your details.</h2><p>Passenger and luggage requirements depend on vehicle configuration. Contact JasperLAX to confirm that your group and bags can be accommodated before booking.</p><Book onBook={onBook} /></section><Upgrade /></main>, lang);
  if (path === '/lax-pickup-guide/') return <AirportGuide onBook={onBook} Book={Book} faq={<Faq guide/>}/>;
  if (path === '/faq/') return translateTree(<main className="inner-page"><div className="breadcrumb"><a href="/">Home</a> / Q&A</div><h1>Questions before your ride?</h1><p className="lead">Clear answers about your vehicle, service areas, and booking.</p><Faq full /><section className="inner-section"><h2>Still have a question?</h2><Link href={wa()} external>Chat with us on WhatsApp</Link></section></main>, lang);
  const c = {
    '/lax-pickup-guide/': ['Planning your LAX pickup.', 'Share your flight and destination details with JasperLAX before your trip.', 'Confirm your meeting instructions with us before arrival. Pickup locations, driver contact details, and waiting arrangements should be agreed before booking.'],
    '/about/': ['Your everyday airport ride.', 'JasperLAX focuses on private Toyota Sienna transfers to and from LAX.', 'We serve Los Angeles, Orange County, San Bernardino, Riverside and Ventura counties. For other destinations, contact our team. For a Cadillac Escalade or group transportation, explore Jasperlimo.com.'],
    '/contact/': ['Let’s plan your ride.', 'Talk to JasperLAX about your airport trip.', 'Send your pickup location, destination, travel date, and time. We’ll discuss the details before you book.'],

  }[path];
  return translateTree(<main className="inner-page"><div className="breadcrumb"><a href="/">Home</a> / Information</div><h1>{c?.[0] || 'Page not found.'}</h1><p className="lead">{c?.[1] || 'Let’s get you back to your airport ride.'}</p><p>{c?.[2]}</p><section className="inner-section"><Link href={c ? wa() : '/'} external={!!c}>{c ? 'Chat with JasperLAX' : 'Back to home'}</Link>{path === '/contact/' && <p>WhatsApp: +1 (626) 704-2786</p>}</section></main>, lang);
}
function Footer() {
  const lang = useContext(LanguageContext);
  return translateTree(<footer className="footer section"><div><a className="wordmark" href="/" aria-label="JasperLAX.com">Jasper<span className="wordmark-lax">LAX</span>.com</a><p>Private Toyota Sienna airport transfers<br />to and from LAX in Los Angeles, Orange County,<br />San Bernardino, Riverside and Ventura.</p><address className="footer-address">San Marino, CA</address><div className="footer-contact"><div className="footer-channels"><a href="sms:+16267042786">Text</a><span>/</span><a href={wa()} {...ext}>WhatsApp</a><span>/</span>{config.lineUrl ? <a href={config.lineUrl} {...ext}>LINE</a> : <span title={translate("LINE link coming soon",lang)}>LINE</span>}</div><a className="footer-whatsapp" href="sms:+16267042786">+1 (626) 704-2786</a></div></div><div className="footer-group"><h3>Explore</h3><a href="/routes/">Routes</a><a href="/toyota-sienna/">Our Sienna</a><a href="/lax-pickup-guide/">LAX pickup guide</a></div><div className="footer-group"><h3>Support</h3><a href="/faq/">Q&A</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/policies/">Policies</a><a href="/privacy/">Privacy</a></div></footer>, lang);
}
export function App({
  initialPath
}) {
  const fullPath = initialPath || (typeof window !== 'undefined' ? window.location.pathname.replace(/\/?$/, '/') : '/');
  const {
    path,
    lang
  } = parseLocale(fullPath);
  const [menu, setMenu] = useState(false);
  const [booking, setBooking] = useState(false);
  const dialog = useRef(null);
  const book = () => {
    if (config.bookingEmbedUrl && document.getElementById('book-ride')) { document.getElementById('book-ride').scrollIntoView({behavior:'smooth'}); } else if (config.bookingUrl) window.location.assign(localePath(config.bookingUrl,lang));else setBooking(true);
  };
  useEffect(() => {
    const m = metadata(fullPath);
    document.documentElement.lang = lang;
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
  }, [fullPath, lang]);
  useEffect(() => {
    if (booking) dialog.current?.showModal();else dialog.current?.close();
  }, [booking]);
  return translateTree(<LanguageContext.Provider value={lang}><><a className="skip-link" href="#main">Skip to content</a><header className="header"><a className="wordmark" href="/" aria-label="JasperLAX.com">{path === '/book/' ? <img className="booking-wordmark" src="/assets/jasperlax-wordmark.svg" alt="JasperLAX.com" width="620" height="90"/> : <>Jasper<span className="wordmark-lax">LAX</span>.com</>}</a><nav className={menu ? 'top-nav open' : 'top-nav'} aria-label="Main navigation"><a href="/my-booking/">My Booking</a><a className="nav-guide" href="/lax-pickup-guide/">LAX guide</a><a href="/faq/">Q&A</a><Book onBook={book} compact /></nav><label className="language-control"><span className="sr-only">Language</span><select aria-label="Language" value={lang} onChange={e => window.location.assign(localePath(path, e.target.value))}>{languages.map(([code, label, name]) => <option key={code} value={code} lang={code}>{name}</option>)}</select></label><button className="menu-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={26} /> : <List size={28} />}</button></header><div id="main">{path === '/' ? <Home onBook={book} /> : <Page path={path} onBook={book} />}</div><Footer />{config.lineUrl ? <a className="line-float" href={config.lineUrl} {...ext} aria-label="Chat on LINE"><b>LINE</b><span>Chat on LINE</span></a> : <button className="line-float" disabled title={translate("LINE link coming soon",lang)} aria-label="LINE link coming soon"><b>LINE</b><span>LINE link coming soon</span></button>}<a className="whatsapp-float" href={wa()} {...ext} aria-label="Chat with JasperLAX on WhatsApp"><WhatsappLogo size={26} /><span>Chat with us</span></a><nav className="bottom-toolbar" aria-label="Mobile navigation"><a href="/" className={path === '/' ? 'active' : ''}><House size={22} weight={path === '/' ? 'fill' : 'regular'} /><span>Home</span></a><a href="/my-booking/" className={path === "/my-booking/" ? "active" : ""}><CalendarBlank size={22} /><span>My Booking</span></a><button onClick={book}><CalendarBlank size={22} />Book</button></nav><dialog ref={dialog} onCancel={() => setBooking(false)} onClick={e => {
        if (e.target === e.currentTarget) setBooking(false);
      }}><button className="dialog-close" aria-label="Close booking information" onClick={() => setBooking(false)}><X size={24} /></button><span className="eyebrow">LET’S PLAN YOUR TRIP</span><h2>Your airport ride starts here.</h2><p>Our dedicated online booking portal is coming soon. For now, chat with JasperLAX about your pickup location, destination, date, and time.</p><a className="primary" href={wa()} {...ext}><WhatsappLogo size={24} />Chat on WhatsApp</a><p className="fine-print">+1 (626) 704-2786 · Rates confirmed before booking.</p></dialog></></LanguageContext.Provider>, lang);
}













