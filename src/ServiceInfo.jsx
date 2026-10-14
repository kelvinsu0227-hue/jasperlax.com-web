import React, {useContext} from 'react';
import {LanguageContext,localePath,translate} from './i18n.jsx';
import {serviceCopy} from './service-copy.js';
import {faqGroups} from './faq.js';
import {feeCopy} from './fee-copy.js';

const contactUrl='https://wa.me/16267042786';
export function FeeSummary(){
 const lang=useContext(LanguageContext);const f=feeCopy[lang]||feeCopy.en;
 return <aside className="fee-summary"><h3>{f.title}</h3><p><strong>{f.label}</strong> {f.fees}</p><a className="text-link" href={localePath('/policies/',lang)}>{f.qCancel} →</a></aside>;
}
export function BookingTip(){
 const lang=useContext(LanguageContext);const c=serviceCopy[lang]||serviceCopy.en;
 return <aside className="booking-tip"><h3>{translate('Booking a single airport transfer?',lang)}</h3><p>{c.bookingTip}</p><a className="text-link" href={localePath('/policies/',lang)}>{c.details} →</a></aside>;
}
export function ServiceOverview({inner=false}){
 const lang=useContext(LanguageContext);const c=serviceCopy[lang]||serviceCopy.en;
 return <section className={inner?'inner-section service-overview':'section service-overview'} aria-labelledby="service-overview-title"><h2 id="service-overview-title">{c.overview}</h2><dl className="service-facts">{[[c.vehicle,c.capacity],[c.areas,c.areaText],[c.pickup,c.pickupText],[c.fare,c.fareText]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><a className="text-link" href={localePath('/policies/',lang)}>{c.details} →</a></section>;
}
export function LuggageCheck(){
 const lang=useContext(LanguageContext);const c=serviceCopy[lang]||serviceCopy.en;
 return <aside className="luggage-check"><h3>{c.luggageTitle}</h3><p>{c.luggageText}</p><a className="text-link" href={contactUrl} target="_blank" rel="noopener noreferrer">{c.quoteLink} ↗</a></aside>;
}
export default function ServiceInformation({privacy=false}){
 const lang=useContext(LanguageContext);const c=serviceCopy[lang]||serviceCopy.en;
 const f=feeCopy[lang]||feeCopy.en;
 const analyticsCopy={en:['Optional Google Analytics','With your permission, Google Analytics measures page visits and contact or booking clicks using cookies lasting up to six months. Contact details, form messages, URL queries and fragments are not sent by our tracking code. Change or withdraw permission through Analytics preferences at the bottom of any page. Moovs booking completion is not measured by these clicks.'],zh:['可选 Google Analytics 统计','经您同意后，Google Analytics 使用最长六个月的 Cookie 统计页面访问、联系和预订按钮点击。我们的统计代码不发送联系方式、表单留言、网址查询参数或片段。您可在任意页底部的统计偏好设置中更改或撤回同意。按钮点击不代表 Moovs 订单完成。'],es:['Google Analytics opcional','Con tu permiso, Google Analytics mide visitas y clics de contacto o reserva con cookies de hasta seis meses. Nuestro código no envía datos de contacto, mensajes ni parámetros o fragmentos de URL. Puedes retirar el permiso en Preferencias de analítica al final de la página. Los clics no confirman una reserva en Moovs.'],ja:['任意の Google Analytics 解析','同意いただいた場合、最長6か月の Cookie でページ閲覧や連絡・予約ボタンのクリックを計測します。連絡先、フォーム本文、URL のクエリやフラグメントは解析コードから送信しません。各ページ下部の解析の設定で同意を変更・撤回できます。クリックは Moovs の予約完了を意味しません。'],ko:['선택적 Google Analytics 분석','동의하면 최대 6개월의 쿠키로 페이지 방문과 연락 및 예약 클릭을 측정합니다. 연락처, 문의 내용, URL 쿼리 및 프래그먼트는 분석 코드에서 전송하지 않습니다. 페이지 하단의 분석 설정에서 동의를 변경하거나 철회할 수 있습니다. 클릭은 Moovs 예약 완료를 의미하지 않습니다.']};
 const sections=privacy?[[c.provided,c.providedText],[c.providers,c.providersText],[c.cookies,c.cookiesText],[c.requests,c.requestsText]]:[[c.fees,f.label+' '+f.fees],[c.confirmation,c.confirmationText],[c.waiting,null],[c.changes,f.cancel]];
 if(privacy)sections.push(analyticsCopy[lang]||analyticsCopy.en);
 return <main className="inner-page service-information"><div className="breadcrumb"><a href={localePath('/',lang)}>{translate('Home',lang)}</a> / {privacy?c.privacyTitle:c.policyTitle}</div><h1>{privacy?c.privacyTitle:c.policyTitle}</h1><p className="lead">{privacy?c.privacyIntro:c.intro}</p>{sections.map(([title,text])=><section className="information-section" key={title}><h2>{title}</h2>{text?<p>{text}</p>:<>{[faqGroups[0].items[1][1],faqGroups[0].items[2][1],faqGroups[0].items[3][1],faqGroups[1].items[1][1]].map(p=><p key={p}>{translate(p,lang)}</p>)}<a className="text-link" href={localePath('/lax-pickup-guide/',lang)}>{c.guide} →</a></>}</section>)}<div className="information-links"><a className="text-link" href={contactUrl} target="_blank" rel="noopener noreferrer">{c.contact} ↗</a>{privacy&&<a className="text-link" href="https://www.moovsapp.com/policy" target="_blank" rel="noopener noreferrer">{c.moovsPrivacy} ↗</a>}</div></main>;
}
