import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {robotsMeta,robotsFile} from '../scripts/seo-policy.mjs';

test('All public pages use an indexable production policy',()=>{
 assert.equal(robotsMeta(),'index, follow, max-image-preview:large');
 const entry=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 assert.ok(entry.includes(`content="${robotsMeta()}"`));
 assert.doesNotMatch(entry,/noindex|nofollow/);
});
test('All crawler identities inherit Allow with no search or training exceptions',()=>{
 const rules=robotsFile();
 assert.match(rules,/^User-agent: \*\nAllow: \//);
 assert.doesNotMatch(rules,/Disallow:|GPTBot|noindex/);
 assert.match(rules,/Sitemap: https:\/\/jasperlax.com\/sitemap.xml/);
 assert.equal(readFileSync(new URL('../public/robots.txt',import.meta.url),'utf8').replaceAll('\r\n','\n'),rules);
});
test('Server and build configuration cannot silently reinstate preview restrictions',()=>{
 const vite=readFileSync(new URL('../vite.config.mjs',import.meta.url),'utf8');
 assert.doesNotMatch(vite,/X-Robots-Tag|noindex|nofollow/);
 const pkg=JSON.parse(readFileSync(new URL('../package.json',import.meta.url),'utf8'));
 assert.equal(pkg.scripts['build:preview'],undefined);
 const prerender=readFileSync(new URL('../scripts/prerender.mjs',import.meta.url),'utf8');
 assert.doesNotMatch(prerender,/VERCEL_ENV|--preview|buildProfile/);
});
