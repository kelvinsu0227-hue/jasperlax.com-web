import test from 'node:test';
import assert from 'node:assert/strict';
import {render} from '../dist/ssr/entry-server.js';
import {transferQuoteMessage,transferQuoteUrl,quoteCopy,cityQuoteCopy} from '../src/transfer-quote.mjs';
import {contactEntry} from '../src/contact-events.mjs';

test('airport quote drafts contain blank trip fields and optional flight number',()=>{
 assert.equal(transferQuoteMessage('en'),'Hi JasperLAX, I’d like a quote for a private LAX transfer.\nPick-up:\nDrop-off:\nTravel date and approximate time:\nPassengers:\nLuggage:\nFlight number, if available:');
 assert.equal(transferQuoteMessage('zh'),'您好，我想咨询LAX私人专车接送报价。\n上车地点：\n下车地点：\n用车日期及大致时间：\n乘客人数：\n行李数量：\n航班号（如已确定）：');
 for(const lang of ['en','zh']){
  const url=new URL(transferQuoteUrl(lang));
  assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/16267042786');
  assert.equal(url.searchParams.get('text'),transferQuoteMessage(lang));
 }
});
test('both homepages put quote and direct booking links inside the hero',()=>{
 for(const [lang,prefix] of [['en',''],['zh','/zh']]){
  const html=render(prefix+'/');const hero=html.split('class="hero hero-quote"')[1].split('</section>')[0];
  assert.ok(hero.includes(quoteCopy[lang].price));assert.ok(hero.includes(quoteCopy[lang].rates));
  assert.ok(hero.includes(quoteCopy[lang].helper));
  assert.ok(hero.includes('href="https://customer.moovs.app/limomoli-inc/new/info" data-entry-location="home_hero"'));
  assert.match(hero,/href="sms:\+16267042786"/);assert.match(hero,/href="tel:\+16267042786"/);
  assert.ok(hero.includes(transferQuoteUrl(lang).replaceAll('&','&amp;')));
  assert.doesNotMatch(hero,/<form|route-inquiry|quote-expand|href="mailto:/);
  assert.ok(html.includes('src="https://customer.moovs.app/limomoli-inc/new/info"'));
 }
});
test('booking consultation precedes fees and links directly to the unchanged form',()=>{
 for(const [lang,prefix] of [['en',''],['zh','/zh']]){
  const html=render(prefix+'/book/');
  assert.ok(html.indexOf('before-booking-quote')<html.indexOf('fee-summary'));
  assert.ok(html.includes(quoteCopy[lang].beforeTitle));
  assert.match(html,/href="#transfer-booking-form"/);
  assert.match(html,/id="transfer-booking-form" class="mobile-booking"/);
  assert.match(html,/class="moovs-booking-frame" src="https:\/\/customer.moovs.app\/limomoli-inc\/iframe"/);
  assert.ok(html.includes(`${prefix}/policies/`));
 }
});
test('city quote headings and drafts preserve city, direction and blank actual addresses',()=>{
 for(const [slug,city] of [['irvine-lax','Irvine'],['anaheim-lax','Anaheim'],['pasadena-lax','Pasadena']])for(const [lang,prefix] of [['en',''],['zh','/zh']]){
  const html=render(`${prefix}/routes/${slug}/`),copy=cityQuoteCopy(city,lang);
  assert.ok(html.includes(copy.title));assert.ok(html.includes(copy.description));assert.ok(html.includes(copy.button));
  const intro=html.split('city-quote-entry')[1].split('class="route-booking"')[0];
  assert.doesNotMatch(intro,/\$99|99美元/);
  const draft=transferQuoteMessage(lang,city);
  assert.match(draft,/Direction \(to LAX \/ from LAX\):|接送方向（前往LAX／从LAX出发）：/);
  assert.match(draft,/Pick-up:\nDrop-off:|上车地点：\n下车地点：/);
  assert.ok(html.includes('src="https://customer.moovs.app/limomoli-inc/iframe"'));
  const whatsappLinks=[...html.matchAll(/href="(https:\/\/wa\.me\/[^" ]+)"/g)].map(m=>m[1].replaceAll('&amp;','&'));
  assert.ok(whatsappLinks.length>=4);
  for(const href of whatsappLinks){
   const message=new URL(href).searchParams.get('text');
   // The existing "Other service areas" Ventura card intentionally asks about Ventura.
   if(message==='Hi JasperLAX, I would like a quote for a Ventura County transfer to or from LAX.')continue;
   assert.equal(message,draft,'City-service WhatsApp entries carry the city draft');
  }
 }
});
test('SMS, calls, WhatsApp and booking are separate entry clicks, never confirmed leads',()=>{
 assert.deepEqual(contactEntry('sms:+16267042786','home_hero'),{event:'sms_click',entry_location:'home_hero'});
 assert.equal(contactEntry('tel:+16267042786').event,'phone_click');
 assert.equal(contactEntry(transferQuoteUrl('en')).event,'whatsapp_click');
 assert.equal(contactEntry('/zh/book/').event,'booking_click');
 assert.equal(contactEntry('#transfer-booking-form').event,'booking_click');
 assert.equal(contactEntry('/zh/tour-charter/'),null);
 assert.equal(contactEntry('https://waXme/123'),null);
 assert.deepEqual(contactEntry('tel:+16267042786','private@example.com'),{event:'phone_click'});
});

test('mobile toolbar opens the original Moovs portal directly in every locale',()=>{
 for(const prefix of ['', '/zh', '/es', '/ja', '/ko']){
  for(const path of ['/', '/book/']){
   const html=render(prefix+path);
   assert.match(html,/class="toolbar-book" href="https:\/\/customer.moovs.app\/limomoli-inc\/new\/info"/);
  }
 }
});
test('direct Moovs booking clicks remain entry clicks',()=>{
 assert.equal(contactEntry('https://customer.moovs.app/limomoli-inc/new/info','home_hero').event,'booking_click');
 assert.equal(contactEntry('https://customer.moovs.app/another-account/new/info'),null);
});
test('direct booking entries have an immediate portal with a website return control',()=>{
 for(const prefix of ['', '/zh', '/es', '/ja', '/ko']){
  const html=render(prefix+'/');
  assert.match(html,/<dialog[^>]*class="booking-portal"/);
  assert.match(html,/class="booking-portal-back"/);
  assert.match(html,/class="toolbar-book"[^>]*data-booking-portal="true"/);
 }
});
