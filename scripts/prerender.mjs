import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import path from 'node:path';
import {render,paths,metadata,languages,parseLocale,localePath,questions,guideQuestions,translate} from '../dist/ssr/entry-server.js';
const root=path.resolve('dist/client');
const base=readFileSync(path.join(root,'index.html'),'utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const url of paths){
 const meta=metadata(url);
 const locale=parseLocale(url);
 const alternates=languages.map(([code])=>`<link rel="alternate" hreflang="${code==='zh'?'zh-Hans':code}" href="https://jasperlax.com${localePath(locale.path,code)}"/>`).join('')+`<link rel="alternate" hreflang="x-default" href="https://jasperlax.com${locale.path}"/>`;
 const schema={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':'https://jasperlax.com/#organization',name:'JasperLAX',url:'https://jasperlax.com/',telephone:'+1-626-704-2786'},{'@type':'Service',name:'Toyota Sienna LAX airport transfers',provider:{'@id':'https://jasperlax.com/#organization'},areaServed:['Los Angeles','Orange County','San Bernardino','Riverside'],serviceType:'Private airport transfer'},...(url==='/'?[]:[{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://jasperlax.com/'},{'@type':'ListItem',position:2,name:meta.title.split(' | ')[0],item:`https://jasperlax.com${url}`}]}])]};
 if(locale.path==='/'||locale.path==='/faq/'||locale.path==='/lax-pickup-guide/'||locale.path.startsWith('/routes/')) schema['@graph'].push({'@type':'FAQPage',mainEntity:(locale.path==='/lax-pickup-guide/'?guideQuestions:questions).map(([q,a])=>({'@type':'Question',name:translate(q,locale.lang),acceptedAnswer:{'@type':'Answer',text:translate(a,locale.lang)}}))});
 const html=base.replace('<html lang="en">',`<html lang="${locale.lang}">`).replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(meta.title)}</title>`).replace(/<meta name="description"[^>]+>/,`<meta name="description" content="${escape(meta.description)}" />`).replace('</head>',`<link rel="canonical" href="https://jasperlax.com${url}"/>${alternates}<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script></head>`).replace('<div id="root"></div>',`<div id="root">${render(url)}</div>`);
 const target=url==='/'?root:path.join(root,url.slice(1));mkdirSync(target,{recursive:true});writeFileSync(path.join(target,'index.html'),html);
}
writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(url=>`<url><loc>https://jasperlax.com${url}</loc></url>`).join('')}</urlset>`);
console.log(`Prerendered ${paths.length} pages. Preview remains noindex.`);
