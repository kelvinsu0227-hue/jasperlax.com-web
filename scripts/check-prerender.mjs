import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {paths} from '../dist/ssr/entry-server.js';
for (const route of paths) {
  const html = readFileSync(`dist/client${route}index.html`, 'utf8');
  assert.match(html, /<h1>/, `${route}: readable heading`);
  assert.match(html, /noindex,\s*nofollow/, `${route}: preview indexing disabled`);
  assert.ok(html.includes(`href="https://jasperlax.com${route}"`), `${route}: canonical`);
  assert.ok(html.includes('wa.me/16267042786'), `${route}: confirmed WhatsApp`);
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert.ok(graph['@graph'].every(item => !('offers' in item)), 'Unconfirmed prices cannot enter schema');
  const faq=graph['@graph'].find(item=>item['@type']==='FAQPage');
  if(faq){
    assert.equal(faq.mainEntity.length, /\/lax-pickup-guide\/$/.test(route)?10:19, `${route}: visible FAQ count`);
    for(const item of faq.mainEntity){
      const escape=text=>text.replaceAll('&','&amp;').replaceAll("'",'&#x27;').replaceAll('"','&quot;');
      assert.ok(html.includes(escape(item.name))&&html.includes(escape(item.acceptedAnswer.text)), `${route}: schema matches visible translated Q&A`);
    }
    assert.ok(faq.mainEntity.some(item=>item.acceptedAnswer.text.includes('$15')),`${route}: JasperLAX waiting fee`);
    assert.ok(!faq.mainEntity.some(item=>item.acceptedAnswer.text.includes('$25')),`${route}: no inherited Jasperlimo fee`);
  }
  assert.ok(!html.includes('$79'), 'No old unconfirmed rate');
  assert.ok(!html.includes('$XX'), 'Latest approved starting rates replace placeholders');
  assert.ok(html.includes('hreflang="ko"')&&html.includes('hreflang="zh-Hans"'), 'Language alternates');
  assert.ok(!html.includes('sketchfab.com'), '360 viewer removed');
  if (/\/routes\/[^/]+\/$/.test(route)) {
    assert.ok(html.includes('class="route-booking"'),`${route}: embedded booking position`);
    assert.ok(!html.includes('class="booking-pending"'),`${route}: configured booking replaces pending state`);
    assert.ok(html.includes('class="moovs-booking-frame"'),`${route}: booking iframe present`);
    assert.ok(html.includes('src="https://customer.moovs.app/limomoli-inc/iframe"'),`${route}: exact user-provided Moovs account`);
    assert.match(html, /<strong>\$.*?(99|119|129).*?<\/strong>/s,`${route}: starting price with dollar symbol`);
  }
}
const home=readFileSync('dist/client/index.html','utf8');
assert.ok(home.indexOf('sienna-exterior-3.jpg')<home.indexOf('sienna-business-v3.webp')&&home.indexOf('sienna-business-v3.webp')<home.indexOf('sienna-family-v2.webp'),'Exterior road / business / family order');
assert.ok(home.includes('Which areas do you serve?') && home.includes('Riverside'), 'FAQ is prerendered');
assert.ok(home.includes('Cadillac Escalade') && home.includes('https://jasperlimo.com'), 'Upgrade referral');
assert.ok(home.includes('$99')&&home.includes('$119')&&home.includes('$129'),'Approved regional starting rates');
for (const [lang,title] of [['zh','轻松往返'],['es','sin complicaciones'],['ja','スムーズに'],['ko','편안한 공항 이동']]) {
 const html=readFileSync(`dist/client/${lang}/index.html`,'utf8');
 assert.ok(html.includes(title),`${lang}: translated server-rendered homepage`);
 assert.ok(html.includes(`href="/${lang}/routes/"`),`${lang}: links preserve language`);
 assert.ok(html.includes(`<html lang="${lang}">`),`${lang}: language attribute`);
}
console.log(`Passed crawlable HTML, canonical, preview indexing, price and WhatsApp checks for ${paths.length} pages.`);
