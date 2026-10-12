import {useContext} from 'react';
import {LanguageContext,translateTree} from './i18n.jsx';
import {ArrowRight,WhatsappLogo,ChatText} from '@phosphor-icons/react';

function MeetingDiagram({curb=false}) {
  return <svg viewBox="0 0 520 260" aria-hidden="true" className="meeting-diagram">
    <rect width="520" height="260" fill="#f1f5fa"/>
    {curb?<>
      <path d="M0 0H520V78H0Z" fill="#dfe7f0"/><path d="M0 182H520V260H0Z" fill="#cdd5df"/>
      <path d="M0 220H520" stroke="white" strokeWidth="3" strokeDasharray="26 20"/>
      <path d="M0 175H520" stroke="white" strokeWidth="9"/>
      <rect x="104" y="35" width="54" height="129" rx="4" fill="white" stroke="#ccd5df"/>
      <rect x="111" y="55" width="40" height="35" rx="2" fill="#101820"/>
      <text x="131" y="78" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="20">B8</text>
      <path d="M293 187V164Q293 146 311 143L361 141Q381 141 390 161L412 170V187Z" fill="#005aff"/>
      <path d="M313 149H357Q368 149 375 161H310Z" fill="#d8e7ff"/>
      <circle cx="316" cy="187" r="12" fill="#141a22"/><circle cx="387" cy="187" r="12" fill="#141a22"/>
      <path d="M275 137H225L208 137" fill="none" stroke="#005aff" strokeWidth="3" strokeDasharray="5 6"/><path d="m215 131-9 6 9 6" fill="none" stroke="#005aff" strokeWidth="3"/>
      <circle cx="186" cy="112" r="10" fill="#101820"/><path d="M175 151V131Q175 123 186 123Q197 123 197 131V151M181 151V166M192 151V166" fill="none" stroke="#101820" strokeWidth="5"/>
      <rect x="204" y="145" width="17" height="21" rx="3" fill="#6c7d92"/><path d="M209 145V139H217V145" fill="none" stroke="#6c7d92" strokeWidth="2"/>
    </>:<>
      <rect x="35" y="28" width="450" height="140" fill="white"/>
      <path d="M65 28V168M130 28V168M390 28V168M455 28V168" stroke="#dbe2ed" strokeWidth="3"/>
      <rect x="182" y="28" width="155" height="43" rx="2" fill="#005aff"/><path d="M253 42v16m-7-6 7 7 7-7" fill="none" stroke="white" strokeWidth="3"/>
      <path d="M0 208H520" stroke="#dbe2ed"/>
      <circle cx="184" cy="104" r="14" fill="#101820"/><path d="M165 182V132Q165 120 184 120Q203 120 203 132V182M175 182V214M193 182V214" fill="none" stroke="#101820" strokeWidth="7"/>
      <rect x="135" y="142" width="102" height="39" rx="3" fill="white" stroke="#005aff" strokeWidth="2"/>
      <text x="186" y="166" textAnchor="middle" fill="#005aff" fontFamily="Arial" fontSize="13" fontWeight="bold">JasperLAX</text>
      <circle cx="333" cy="107" r="13" fill="#536a83"/><path d="M318 179V131Q318 122 333 122Q348 122 348 131V179M325 179V212M342 179V212" fill="none" stroke="#536a83" strokeWidth="6"/>
      <rect x="366" y="163" width="29" height="46" rx="4" fill="#9baec3"/><path d="M373 163V152H387V163" fill="none" stroke="#536a83" strokeWidth="3"/>
      <path d="M287 147H256m8-6-9 6 9 6" fill="none" stroke="#005aff" strokeWidth="3"/>
    </>}
  </svg>;
}

export default function AirportGuide({onBook,Book,faq}) {
  const lang=useContext(LanguageContext);
  return translateTree(<main className="inner-page airport-guide">
    <div className="breadcrumb"><a href="/">Home</a><span> / </span><span>LAX pickup &amp; drop-off guide</span></div>
    <span className="eyebrow">YOUR LAX, STEP BY STEP.</span>
    <h1>Arrive with a plan.<br/>Depart with ease.</h1>
    <p className="lead">A practical guide to meeting your chauffeur, planning your waiting time, and getting to your LAX terminal.</p>
    <nav className="guide-jumps" aria-label="Guide sections"><a href="#guide-arrivals">LAX arrivals<ArrowRight size={17}/></a><a href="#guide-waiting">Waiting & buffer time<ArrowRight size={17}/></a><a href="#guide-departures">LAX departures<ArrowRight size={17}/></a></nav>
    <section className="guide-section" id="guide-arrivals"><span className="eyebrow">01 / ARRIVALS</span><h2>Two ways to meet.</h2><p className="guide-intro">Your chauffeur contacts you by text and WhatsApp before your flight lands. Follow the meeting option arranged for your reservation.</p>
      <div className="meeting-options"><article><MeetingDiagram/><div className="meeting-copy"><h3>Meet & Greet</h3><p>Your chauffeur welcomes you with a name sign in the arrivals hall.</p><span className="guide-label">Inside the terminal</span></div></article><article><MeetingDiagram curb/><div className="meeting-copy"><h3>Curbside Pickup</h3><p>Collect your bags, then send the number on your white pickup column to your chauffeur.</p><span className="guide-label">B8 · 4A · 7F — example column numbers</span></div></article></div>
      <p className="fine-print">Illustrations show the meeting process, not an airport map. Confirm your terminal, level and designated white pickup column with your chauffeur and follow current airport signs.</p>
      <aside className="guide-note"><ChatText size={24}/><div><h3>A quicker meeting point?</h3><p>During busy periods, a departures-level pickup may save 20 minutes or more. Move only after agreeing on the new meeting point with your chauffeur; time saved depends on traffic.</p></div></aside>
    </section>
    <section className="guide-section" id="guide-waiting"><span className="eyebrow">02 / WAITING TIME</span><h2>A little breathing room.</h2><p className="guide-intro">Without buffer time, airport waiting starts when your flight actually lands. Your chauffeur monitors flight changes and adjusts pickup accordingly.</p><div className="waiting-rates"><div><strong>30<span>min</span></strong><p>Domestic arrivals</p></div><div><strong>60<span>min</span></strong><p>International arrivals</p></div><div><strong>15<span>min</span></strong><p>Departures / one-way pickups</p></div></div>
      <div className="buffer-example"><h3>Need extra time? Add buffer time.</h3><p>Domestic arrival example</p><div className="buffer-equation"><div><strong>30 min</strong><span>Buffer time</span></div><b>+</b><div><strong>30 min</strong><span>Free waiting</span></div><b>=</b><div className="buffer-total"><strong>60 min</strong><span>Total after landing</span></div></div></div><p className="buffer-note">Please note: Buffer time delays your chauffeur’s airport arrival. Your chauffeur will not be on standby at the airport before the buffer period ends. For example, with a 30-minute buffer, your chauffeur arrives 30 minutes after actual landing, and your complimentary waiting period then begins.</p><p className="guide-fee">After your complimentary waiting period and any agreed buffer time, additional waiting costs $15 per 15 minutes.</p>
    </section>
    <section className="guide-section" id="guide-departures"><span className="eyebrow">03 / DEPARTURES</span><h2>From your door to your terminal.</h2><ol className="departure-flow"><li><span>01</span><h3>Ready 15 minutes early</h3><p>Your chauffeur arrives 15 minutes before your reservation time and waits on standby.</p></li><li><span>02</span><h3>15 minutes to get ready</h3><p>Free waiting starts at your scheduled pickup time. Extra waiting is $15 per 15 minutes.</p></li><li><span>03</span><h3>Your airline’s terminal</h3><p>Your chauffeur drops you at your airline’s designated terminal. Extra stops are priced by added distance and time.</p></li></ol></section>
    <section className="guide-section"><h2>Your pickup questions.</h2>{faq}</section>
    <section className="guide-help"><div><h2>Need a hand?</h2><p>Text / WhatsApp: +1 (626) 704-2786</p></div><div><a className="text-link" href="sms:+16267042786">Text our team<ArrowRight size={18}/></a><a className="primary" href="https://wa.me/16267042786" target="_blank" rel="noopener noreferrer"><WhatsappLogo size={22}/>Chat on WhatsApp</a><Book onBook={onBook}/></div></section>
  </main>,lang);
}


