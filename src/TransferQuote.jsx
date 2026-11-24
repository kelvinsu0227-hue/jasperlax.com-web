import {bookingPortalUrl} from './booking-url.mjs';
import React,{useContext} from 'react';
import {LanguageContext,localePath} from './i18n.jsx';
import {quoteCopy,transferQuoteUrl,cityQuoteCopy} from './transfer-quote.mjs';

export function ContactOptions({placement}){
 const lang=useContext(LanguageContext),c=quoteCopy[lang];
 return <div className="quote-contact-options"><a href="sms:+16267042786" data-entry-location={placement}>{c.sms}</a><span aria-hidden="true">·</span><a href="tel:+16267042786" data-entry-location={placement}>{c.phone}</a><span className="quote-phone-number">+1 (626) 704-2786</span></div>;
}
function QuoteButton({children,city,placement}){
 const lang=useContext(LanguageContext);
 return <a className="primary quote-whatsapp" href={transferQuoteUrl(lang,city)} target="_blank" rel="noopener noreferrer" data-entry-location={placement}>{children}<span aria-hidden="true">↗</span></a>;
}
export function HeroQuote(){
 const lang=useContext(LanguageContext),c=quoteCopy[lang];
 return <div className="hero-route-quote"><p className="quote-price-explanation">{c.price}</p><p className="quote-rate-note">{c.rates}</p><div className="quote-actions"><QuoteButton placement="home_hero">{c.quote}</QuoteButton><a className="quote-secondary" href={bookingPortalUrl} data-entry-location="home_hero" data-booking-portal="true">{c.book}</a></div><p className="quote-helper">{c.helper}</p><ContactOptions placement="home_hero"/></div>;
}
export function BeforeBookingQuote(){
 const lang=useContext(LanguageContext),c=quoteCopy[lang];
 return <section className="before-booking-quote" aria-labelledby="transfer-quote-title"><h2 id="transfer-quote-title">{c.beforeTitle}</h2><p>{c.beforeText}</p><div className="quote-actions"><QuoteButton placement="book_quote">{c.beforeButton}</QuoteButton><a className="quote-secondary" href="#transfer-booking-form" data-entry-location="book_quote">{c.form}</a></div><ContactOptions placement="book_quote"/><a className="text-link" href={localePath('/policies/',lang)}>{c.policies} →</a></section>;
}
export function CityQuote({city}){
 const lang=useContext(LanguageContext),c=cityQuoteCopy(city,lang);
 return <div className="city-quote-entry"><p className="lead">{c.description}</p><div className="quote-actions"><QuoteButton city={city} placement="city_quote">{c.button}</QuoteButton><a className="quote-secondary" href="#book-ride" data-entry-location="city_quote">{quoteCopy[lang].book}</a></div><p className="quote-rate-note">{quoteCopy[lang].rates}</p><ContactOptions placement="city_quote"/></div>;
}
