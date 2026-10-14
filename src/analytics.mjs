export const MEASUREMENT_ID='G-GWFSCS26X4';
export const CONSENT_KEY='jasperlax:analytics-consent:v1';
const allowedEvents=new Set(['whatsapp_click','line_click','phone_click','email_click','booking_start','booking_click','inquiry_submitted','airport_booking_guide']);
export function safePageUrl(value,origin){try{const u=new URL(value,origin);return u.origin+u.pathname}catch{return ''}}
export function createAnalytics(win,doc){
 const productionHost=["www.jasperlax.com","jasperlax.com"].includes(win.location.hostname);
 let enabled=false,started=false;
 function command(){win.dataLayer=win.dataLayer||[];win.dataLayer.push(arguments)}
 const page=()=>({page_location:safePageUrl(win.location.href),page_referrer:safePageUrl(doc.referrer),page_title:doc.title});
 const readConsent=()=>{try{const v=JSON.parse(win.localStorage.getItem(CONSENT_KEY));return v&&v.expires>Date.now()&&['granted','denied'].includes(v.value)?v.value:null}catch{return null}};
 function start(){if(started)return;started=true;win.dataLayer=win.dataLayer||[];win.gtag=command;
  command('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  command('consent','update',{analytics_storage:'granted'});
  command('js',new Date());
  command('config',MEASUREMENT_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:15552000,...page()});
  const script=doc.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+MEASUREMENT_ID;script.id='jasper-ga4';script.onload=()=>script.setAttribute('data-load-state','loaded');script.onerror=()=>script.setAttribute('data-load-state','failed');doc.head.appendChild(script);
  command('event','page_view',{...page(),debug_mode:win.location.hostname==='127.0.0.1'||win.location.hostname==='localhost'});
 }
 function setConsent(value){enabled=value==='granted';try{win.localStorage.setItem(CONSENT_KEY,JSON.stringify({value,expires:Date.now()+15552000000}))}catch{}
  if(enabled&&productionHost){win['ga-disable-'+MEASUREMENT_ID]=false;start();if(started)command('consent','update',{analytics_storage:'granted'})}
  else {win['ga-disable-'+MEASUREMENT_ID]=true;if(started)command('consent','update',{analytics_storage:'denied'});for(const c of doc.cookie.split(';')){const name=c.split('=')[0].trim();if(name==='_ga'||name.startsWith('_ga_'))for(const domain of ['',win.location.hostname,'.jasperlax.com'])doc.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');}}
  win.dispatchEvent(new win.CustomEvent('jasperlax:consent-changed',{detail:value}));
 }
 win.addEventListener('jasperlax:interaction',e=>{if(!productionHost||!enabled||!allowedEvents.has(e.detail?.event))return;command('event',e.detail.event,{...page(),page_path:win.location.pathname,transport_type:'beacon'})});
 const saved=readConsent();if(saved==='granted'&&productionHost){enabled=true;start()}
 return {readConsent,setConsent};
}
