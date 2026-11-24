import React,{useContext,useEffect,useRef,useState} from 'react';
import {LanguageContext} from './i18n.jsx';
import {bookingPortalUrl} from './booking-url.mjs';
const labels={en:'Back to website',zh:'返回网站',es:'Volver al sitio web',ja:'サイトに戻る',ko:'웹사이트로 돌아가기'};
export default function BookingPortal(){
 const lang=useContext(LanguageContext),dialog=useRef(null),trigger=useRef(null);
 const [started,setStarted]=useState(false),[open,setOpen]=useState(false);
 useEffect(()=>{
  const activate=e=>{
   const link=e.target.closest?.('a[data-booking-portal="true"]');
   if(!link||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
   e.preventDefault();trigger.current=link;setStarted(true);setOpen(true);
  };
  document.addEventListener('click',activate);
  return()=>document.removeEventListener('click',activate);
 },[]);
 useEffect(()=>{
  if(!open)return;
  const node=dialog.current,body=document.body,y=window.scrollY;
  const saved={position:body.style.position,top:body.style.top,width:body.style.width};
  Object.assign(body.style,{position:'fixed',top:`-${y}px`,width:'100%'});
  const resize=()=>{
   node.style.setProperty('--portal-height',`${window.visualViewport?.height||window.innerHeight}px`);
   node.style.setProperty('--portal-top',`${window.visualViewport?.offsetTop||0}px`);
  };
  resize();node.showModal();
  window.visualViewport?.addEventListener('resize',resize);
  window.visualViewport?.addEventListener('scroll',resize);
  window.addEventListener('resize',resize);
  return()=>{
   node.close();Object.assign(body.style,saved);window.scrollTo(0,y);
   trigger.current?.focus({preventScroll:true});
   window.visualViewport?.removeEventListener('resize',resize);
   window.visualViewport?.removeEventListener('scroll',resize);
   window.removeEventListener('resize',resize);
  };
 },[open]);
 return <dialog ref={dialog} className="booking-portal" aria-label="JasperLAX booking" onCancel={e=>{e.preventDefault();setOpen(false);}}>
  <div className="booking-portal-header"><button type="button" className="booking-portal-back" onClick={()=>setOpen(false)}>← {labels[lang]||labels.en}</button></div>
  {started&&<iframe src={bookingPortalUrl} title="JasperLAX online booking" allow="payment"/>}
 </dialog>;
}
