import React,{useContext,useRef,useState} from 'react';
import {CaretLeft,CaretRight,Star,ArrowUpRight} from '@phosphor-icons/react';
import {LanguageContext} from './i18n.jsx';

// Transcribed from the user's screenshot and checked against the Google Maps
// business page on 2026-10-12. These are not Sienna-specific reviews.
export const reviews=[
 {name:'Kelvin Shi',initials:'KS',rating:5,text:'Excellent services, I used Jasper Limousine Service for a ride to LAX and everything was perfect. The car was exclusive SUV, very comfortable, and the driver was right on time and very professional. He helped with my luggages and got me to the airport with no stress. Great service—I’ll definitely use them again!'},
 {name:'Alicia Grissom',initials:'AG',rating:5,text:'We appreciate the professionalism and luxury your company provides.  ✨️'},
 {name:'Jaclyn Brown',initials:'JB',rating:5,text:'We booked Jasper for a party of 11 to/from Walnut to LAX. The price couldn’t be beat, the sprinter was new, clean and the drive was very smooth. Communication was great with the representative that assisted with the booking and with both drivers. Will be using jasper for any future transportation needs.'}
];
const source='https://www.google.com/maps/place/Jasper+Limousine+Service/@34.126195,-118.094908,17z/data=!3m2!4b1!5s0x80c2db408256c2fb:0x181e71b8b9a8a3d0!4m6!3m5!1s0x80c2db298efa2869:0xa56277c37e837b68!8m2!3d34.126195!4d-118.0923331!16s%2Fg%2F11yfmsyrnc';
const copy={
 en:['CUSTOMER REVIEWS','Reviews of Jasper Limousine Service','Selected Google reviews, shown in their original English. Some describe SUV and Sprinter trips, rather than JasperLAX’s Toyota Sienna transfers.','View on Google Maps','Previous reviews','Next reviews','5 out of 5 stars','Google review'],
 zh:['客户评价','Jasper Limousine Service 客户评价','以下为精选 Google 评价，保留英文原文。部分评价涉及 SUV 和 Sprinter 行程，并非 JasperLAX 的 Toyota Sienna 接送。','在 Google Maps 查看','上一条评价','下一条评价','5 星，满分 5 星','Google 评价'],
 es:['OPINIONES DE CLIENTES','Opiniones sobre Jasper Limousine Service','Opiniones seleccionadas de Google en su inglés original. Algunas describen viajes en SUV y Sprinter, no los traslados Toyota Sienna de JasperLAX.','Ver en Google Maps','Opiniones anteriores','Opiniones siguientes','5 de 5 estrellas','Opinión de Google'],
 ja:['お客様の声','Jasper Limousine Service の口コミ','Google の口コミを英語原文で掲載しています。一部は SUV や Sprinter の利用体験であり、JasperLAX の Toyota Sienna 送迎の口コミではありません。','Google Maps で見る','前の口コミ','次の口コミ','5点満点中5点','Google の口コミ'],
 ko:['고객 후기','Jasper Limousine Service 고객 후기','Google 후기를 영어 원문으로 표시합니다. 일부는 SUV 및 Sprinter 이용 후기이며 JasperLAX의 Toyota Sienna 이동 후기가 아닙니다.','Google Maps에서 보기','이전 후기','다음 후기','별 5개 중 5개','Google 후기']
};
export default function Reviews(){
 const lang=useContext(LanguageContext);const c=copy[lang]||copy.en;
 const track=useRef(null);const [position,setPosition]=useState({start:true,end:false});
 const update=()=>{const e=track.current;if(e)setPosition({start:e.scrollLeft<2,end:e.scrollLeft+e.clientWidth>=e.scrollWidth-2});};
 const move=direction=>{const e=track.current;if(!e)return;const card=e.querySelector('article');const gap=parseFloat(getComputedStyle(e).columnGap)||24;e.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 return <section className="section customer-reviews" id="reviews" aria-labelledby="reviews-title"><div className="reviews-heading"><div><span className="eyebrow">{c[0]}</span><h2 id="reviews-title">{c[1]}</h2></div><a className="text-link" href={source} target="_blank" rel="noopener noreferrer">{c[3]}<ArrowUpRight size={18}/></a></div><p className="reviews-note">{c[2]}</p><div className="reviews-track" ref={track} onScroll={update} tabIndex={0} aria-label={c[1]} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}}}>{reviews.map(review=><article className="review-card" key={review.name}><header><span className="review-initials" aria-hidden="true">{review.initials}</span><div><h3>{review.name}</h3><span className="review-source">{c[7]} · Jasper Limousine Service</span></div></header><div className="review-stars" role="img" aria-label={c[6]}>{Array.from({length:review.rating},(_,i)=><Star size={17} weight="fill" key={i}/>)}</div><blockquote lang="en"><p>{review.text}</p></blockquote></article>)}</div><div className="review-controls"><button type="button" onClick={()=>move(-1)} disabled={position.start} aria-label={c[4]} aria-controls="reviews"><CaretLeft size={22}/></button><button type="button" onClick={()=>move(1)} disabled={position.end} aria-label={c[5]} aria-controls="reviews"><CaretRight size={22}/></button></div></section>;
}
