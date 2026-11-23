import React,{useContext,useRef,useState} from 'react';
import {CaretLeft,CaretRight,Star,ArrowUpRight} from '@phosphor-icons/react';
import {LanguageContext} from './i18n.jsx';

// All 7 entries in the public Google Maps review list, checked 2026-11-23.
// Original-language text is preserved; rating-only entries have no invented quote.
// These are reviews of Jasper Limousine Service, not Sienna-specific reviews.
export const reviews=[
 {name:'Stephanie Gutierrez (behindthehazel)',initials:'SG',rating:5,lang:'en',text:'Very polite and efficient! Will definitely use for all my future travels!'},
 {name:'Hina zo',initials:'HZ',rating:5,lang:'ja',text:'予約からレスポンス良く返事が来ますのでストレス無く計画が立てられます。申し込みから支払いまでもスムーズでした。\nドライバーさんは紳士的で移動中はこちらから声を掛けない以上、雑談の様な話し掛けは無く、良いプライベートが保たれました。\n費用はお高めですがビジネスや複数の移動には最適だと思います。'},
 {name:'Lu Sun',initials:'LS',rating:5,text:''},
 {name:'Xianling Chen',initials:'XC',rating:5,text:''},
 {name:'Kelvin Shi',initials:'KS',rating:5,text:'Excellent services, I used Jasper Limousine Service for a ride to LAX and everything was perfect. The car was exclusive SUV, very comfortable, and the driver was right on time and very professional. He helped with my luggages and got me to the airport with no stress. Great service—I’ll definitely use them again!'},
 {name:'Alicia Grissom',initials:'AG',rating:5,text:'We appreciate the professionalism and luxury your company provides.  ✨️'},
 {name:'Jaclyn Brown',initials:'JB',rating:5,text:'We booked Jasper for a party of 11 to/from Walnut to LAX. The price couldn’t be beat, the sprinter was new, clean and the drive was very smooth. Communication was great with the representative that assisted with the booking and with both drivers. Will be using jasper for any future transportation needs.'}
];
const source='https://www.google.com/maps/place/Jasper+Limousine+Service/@34.126195,-118.094908,17z/data=!3m2!4b1!5s0x80c2db408256c2fb:0x181e71b8b9a8a3d0!4m6!3m5!1s0x80c2db298efa2869:0xa56277c37e837b68!8m2!3d34.126195!4d-118.0923331!16s%2Fg%2F11yfmsyrnc';
const copy={
 en:['CUSTOMER REVIEWS','Reviews of Jasper Limousine Service','All 7 public Google reviews checked on November 23, 2026. Written reviews are shown in their original language; ratings without text are included. This list is updated manually. Some describe SUV and Sprinter trips, rather than JasperLAX’s Toyota Sienna transfers.','View on Google Maps','Previous reviews','Next reviews','5 out of 5 stars','Google review'],
 zh:['客户评价','Jasper Limousine Service 客户评价','以下收录截至2026年11月23日核对的全部7条公开 Google 评价，保留原文，并包含仅有星级的评价。本列表为手动更新。部分评价涉及 SUV 和 Sprinter 行程，并非 JasperLAX 的 Toyota Sienna 接送。','在 Google Maps 查看','上一条评价','下一条评价','5 星，满分 5 星','Google 评价'],
 es:['OPINIONES DE CLIENTES','Opiniones sobre Jasper Limousine Service','Las 7 opiniones públicas de Google verificadas el 23 de noviembre de 2026, en su idioma original, incluidas las valoraciones sin texto. Lista actualizada manualmente. Algunas describen viajes en SUV y Sprinter, no los traslados Toyota Sienna de JasperLAX.','Ver en Google Maps','Opiniones anteriores','Opiniones siguientes','5 de 5 estrellas','Opinión de Google'],
 ja:['お客様の声','Jasper Limousine Service の口コミ','2026年11月23日に確認したGoogleの公開口コミ全7件を掲載しています。本文は原文のまま、文章のない星評価も含みます。手動更新の一覧です。一部は SUV や Sprinter の利用体験であり、JasperLAX の Toyota Sienna 送迎の口コミではありません。','Google Maps で見る','前の口コミ','次の口コミ','5点満点中5点','Google の口コミ'],
 ko:['고객 후기','Jasper Limousine Service 고객 후기','2026년 11월 23일 확인한 Google 공개 후기 7개를 모두 게재합니다. 원문과 글 없는 별점 평가를 포함하며 수동으로 업데이트합니다. 일부는 SUV 및 Sprinter 이용 후기이며 JasperLAX의 Toyota Sienna 이동 후기가 아닙니다.','Google Maps에서 보기','이전 후기','다음 후기','별 5개 중 5개','Google 후기']
};
const noText={en:'No written review.',zh:'未留下文字评价。',es:'Sin comentario escrito.',ja:'コメントの記載はありません。',ko:'작성된 후기 내용이 없습니다.'};
export default function Reviews(){
 const lang=useContext(LanguageContext);const c=copy[lang]||copy.en;
 const track=useRef(null);const [position,setPosition]=useState({start:true,end:false});
 const update=()=>{const e=track.current;if(e)setPosition({start:e.scrollLeft<2,end:e.scrollLeft+e.clientWidth>=e.scrollWidth-2});};
 const move=direction=>{const e=track.current;if(!e)return;const card=e.querySelector('article');const gap=parseFloat(getComputedStyle(e).columnGap)||24;e.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 return <section className="section customer-reviews" id="reviews" aria-labelledby="reviews-title"><div className="reviews-heading"><div><span className="eyebrow">{c[0]}</span><h2 id="reviews-title">{c[1]}</h2></div><a className="text-link" href={source} target="_blank" rel="noopener noreferrer">{c[3]}<ArrowUpRight size={18}/></a></div><p className="reviews-note">{c[2]}</p><div className="reviews-track" ref={track} onScroll={update} tabIndex={0} aria-label={c[1]} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}}}>{reviews.map(review=><article className="review-card" key={review.name}><header><span className="review-initials" aria-hidden="true">{review.initials}</span><div><h3>{review.name}</h3><span className="review-source">{c[7]} · Jasper Limousine Service</span></div></header><div className="review-stars" role="img" aria-label={c[6]}>{Array.from({length:review.rating},(_,i)=><Star size={17} weight="fill" key={i}/>)}</div><blockquote lang={review.text?(review.lang||'en'):lang}><p style={{whiteSpace:'pre-line'}}>{review.text||(noText[lang]||noText.en)}</p></blockquote></article>)}</div><div className="review-controls"><button type="button" onClick={()=>move(-1)} disabled={position.start} aria-label={c[4]} aria-controls="reviews"><CaretLeft size={22}/></button><button type="button" onClick={()=>move(1)} disabled={position.end} aria-label={c[5]} aria-controls="reviews"><CaretRight size={22}/></button></div></section>;
}
