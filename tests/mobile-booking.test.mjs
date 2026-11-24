import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Catch missing mobile entry/return controls on any booking surface or locale.
test('each booking surface provides a mobile entry and a return control',()=>{
 for(const prefix of ['', 'zh/', 'es/', 'ja/', 'ko/']){
  for(const page of ['', 'book/', 'routes/los-angeles-lax/']){
   const html=readFileSync(`dist/client/${prefix}${page}index.html`,'utf8');
   assert.match(html, /class="mobile-booking-launch"/, `${prefix}${page} mobile entry missing`);
   assert.match(html, /class="mobile-booking-close"/, `${prefix}${page} return missing`);
   assert.match(html, /src="https:\/\/customer.moovs.app\/jasper-limousine-service\//);
  }
 }
});
