import React, {useContext, useEffect, useRef, useState} from 'react';
import {LanguageContext} from './i18n.jsx';

const copy={
 en:['Open booking form','Back to website','Book your ride'],
 zh:['打开预订表单','返回网站','预订行程'],
 es:['Abrir formulario de reserva','Volver al sitio web','Reserva tu viaje'],
 ja:['予約フォームを開く','サイトに戻る','送迎を予約'],
 ko:['예약 양식 열기','웹사이트로 돌아가기','차량 예약']
};

// Keep the iframe in the same DOM position when opening/closing so trip input survives.
export default function MobileBooking({children,id}) {
 const lang=useContext(LanguageContext);
 const [open,setOpen]=useState(false);
 const panel=useRef(null), launch=useRef(null), close=useRef(null);
 const labels=copy[lang]||copy.en;
 useEffect(()=>{
  if(!open)return;
  const node=panel.current;
  const body=document.body;
  const saved={position:body.style.position,top:body.style.top,width:body.style.width};
  const scrollY=window.scrollY;
  const inert=[];
  for(let child=node;child!==body && child.parentElement;child=child.parentElement){
   for(const sibling of child.parentElement.children){
    if(sibling!==child){inert.push([sibling,sibling.inert]);sibling.inert=true;}
   }
  }
  body.classList.add('mobile-booking-active');
  Object.assign(body.style,{position:'fixed',top:`-${scrollY}px`,width:'100%'});
  const update=()=>{
   const viewport=window.visualViewport;
   node.style.setProperty('--booking-height',`${viewport?.height||window.innerHeight}px`);
   node.style.setProperty('--booking-top',`${viewport?.offsetTop||0}px`);
  };
  update();
  window.visualViewport?.addEventListener('resize',update);
  window.visualViewport?.addEventListener('scroll',update);
  const media=window.matchMedia('(max-width:700px)');
  const resize=()=>{if(!media.matches)setOpen(false);};
  media.addEventListener('change',resize);
  const escape=e=>{if(e.key==='Escape')setOpen(false);};
  document.addEventListener('keydown',escape);
  close.current?.focus();
  return()=>{
   window.visualViewport?.removeEventListener('resize',update);
   window.visualViewport?.removeEventListener('scroll',update);
   media.removeEventListener('change',resize);
   document.removeEventListener('keydown',escape);
   for(const [element,value] of inert)element.inert=value;
   body.classList.remove('mobile-booking-active');
   Object.assign(body.style,saved);
   window.scrollTo(0,scrollY);
   launch.current?.focus({preventScroll:true});
  };
 },[open]);
 return <div id={id} className="mobile-booking">
  <button ref={launch} type="button" className="mobile-booking-launch" onClick={()=>setOpen(true)}>{labels[0]}</button>
  <div ref={panel} className={`mobile-booking-panel${open?' is-open':''}`} role={open?'dialog':undefined} aria-modal={open?true:undefined} aria-label={open?labels[2]:undefined}>
   <div className="mobile-booking-bar"><button ref={close} type="button" className="mobile-booking-close" onClick={()=>setOpen(false)}>← {labels[1]}</button></div>
   {children}
  </div>
 </div>;
}
