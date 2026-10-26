const placements=new Set(['home_hero','book_quote','city_quote']);
export function contactEntry(href,placement){
 let event;
 if(href.startsWith('sms:'))event='sms_click';
 else if(href.startsWith('tel:'))event='phone_click';
 else if(href.startsWith('mailto:'))event='email_click';
 else if(/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href))event='whatsapp_click';
 else if(href.startsWith('https://line.me/'))event='line_click';
 else if(/\/(book)\/?$/.test(href)||['#booking','#book-ride','#transfer-booking-form'].includes(href))event='booking_click';
 return event?{event,...(placements.has(placement)?{entry_location:placement}:{})}:null;
}
