import React, {useContext} from 'react';
import {LanguageContext,translateTree} from './i18n.jsx';
import {faqGroups} from './faq.js';
import {feeCopy} from './fee-copy.js';

export default function HomeBooking({embedUrl}) {
  const lang=useContext(LanguageContext);
  const sections=[
    ['Airport arrivals', [faqGroups[0].items[0][1], faqGroups[0].items[1][1], faqGroups[0].items[2][1], faqGroups[0].items[3][1]]],
    ['Departures & point-to-point rides', [faqGroups[1].items[0][1], faqGroups[1].items[1][1], faqGroups[1].items[2][1], faqGroups[1].items[3][1]]],
    ['Meet-and-greet & included fees', [feeCopy.en.label+' '+feeCopy.en.fees]],
    ['Confirmation & payment', [faqGroups[2].items[8][1], 'Review the final quote and payment instructions shown in Moovs before completing your reservation. Contact JasperLAX if any charge or booking detail is unclear.']],
    [feeCopy.en.qCancel,[feeCopy.en.cancel]]
  ];
  return translateTree(<section className="home-booking section" aria-labelledby="before-booking-title"><h2 id="before-booking-title">Before you book</h2><aside className="booking-instructions"><h3>Booking a single airport transfer?</h3><p>For airport transfers, select One Way and Airport Pick Up or Airport Drop Off. Under Pick-up for arrivals or Drop-off for departures, select Airport, then enter the airport, airline and flight number. If Hourly is selected, switch to One Way.</p></aside><div className="booking-guidelines">{sections.map(([title,paragraphs])=><details key={title}><summary>{title}</summary>{paragraphs.map(text=><p key={text}>{text}</p>)}</details>)}</div><div className="home-booking-form home-booking-full" id="book-ride"><h2>Book your ride</h2><div className="home-moovs-viewport"><iframe className="moovs-booking-frame" src={embedUrl} title="JasperLAX online booking" loading="lazy" allow="payment"/></div></div></section>,lang);
}
