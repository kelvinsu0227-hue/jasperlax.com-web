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
import {contactEntry} from './contact-events.mjs';
document.addEventListener('click',event=>{
  const target=event.target.closest?.('a');
  if(!target)return;
  const detail=contactEntry(target.getAttribute('href')||'',target.getAttribute('data-entry-location'));
  if(detail)window.dispatchEvent(new CustomEvent('jasperlax:interaction',{detail}));
});
