import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Separate consent UI avoids changing the prerendered application markup.
import AnalyticsConsent from './AnalyticsConsent.jsx';
import {createAnalytics} from './analytics.mjs';
import {parseLocale} from './i18n.jsx';
const analytics=createAnalytics(window,document);
const consentRoot=document.createElement('div');
consentRoot.id='jasperlax-analytics-preferences';
document.body.appendChild(consentRoot);
createRoot(consentRoot).render(<AnalyticsConsent analytics={analytics} language={parseLocale(location.pathname).lang}/>);
document.addEventListener('click',event=>{
  const target=event.target.closest?.('a,button');
  if(!target)return;
  const href=target.getAttribute('href')||'';
  let action;
  if(href.startsWith('tel:')||href.startsWith('sms:'))action='phone_click';
  else if(href.startsWith('mailto:'))action='email_click';
  else if(/^https:\/\/(wa.me|api.whatsapp.com)\//.test(href))action='whatsapp_click';
  else if(href.startsWith('https://line.me/'))action='line_click';
  else if(/\/(book)\/?$/.test(href)||href==='#booking'||href==='#book-ride'||(target.tagName==='BUTTON'&&target.classList.contains('primary')))action='booking_click';
  if(action)window.dispatchEvent(new CustomEvent('jasperlax:interaction',{detail:{event:action}}));
});
