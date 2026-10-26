export const quoteLanguages = new Set(['en','zh']);
export const contactNumber = '16267042786';
export const cityNamesZh = {Irvine:'尔湾',Anaheim:'阿纳海姆',Pasadena:'帕萨迪纳'};
export const quoteCopy = {
 en:{price:'Private LAX rides from $99. Request a quote for your route. Final pricing depends on your pickup and drop-off locations and trip details.',quote:'Get My Route Quote',book:'Book Your Ride',helper:'Not ready to book? Send us your route, travel date and passenger count to ask about pricing.',rates:'Starting rates vary by service area. Your final quote is confirmed before booking. Parking and highway tolls are included; gratuity is extra.',sms:'Text us',phone:'Call us',beforeTitle:'Need a quote before booking?',beforeText:'Send us your route, travel date, passenger count and luggage details to confirm pricing and availability.',beforeButton:'Ask About My Transfer',form:'Use the booking form',policies:'View fees and cancellation policy'},
 zh:{price:'LAX私人专车接送99美元起。告诉我们您的路线，确认具体报价；最终价格依上下车地址及行程而定。',quote:'查询我的路线报价',book:'直接预订接送',helper:'还没确定行程？先发来上下车地点、用车日期和人数，咨询路线及价格。',rates:'不同地区起价不同，最终报价在预订前确认。停车及过路费已含，小费另计。',sms:'短信咨询',phone:'电话咨询',beforeTitle:'想先确认价格，再决定预订？',beforeText:'发来您的路线、用车日期、人数和行李数量，咨询具体报价及车辆安排。',beforeButton:'先咨询接送报价',form:'直接使用下方表单预订',policies:'查看费用与取消政策'}
};
export function cityQuoteCopy(city,lang){
 const name=lang==='zh'?(cityNamesZh[city]||city):city;
 return lang==='zh'?{title:`${name}往返LAX私人专车接送`,description:`需要往返${name}与洛杉矶国际机场？提供上下车地点、用车日期、人数及行李数量，咨询具体报价和车辆安排。`,button:`咨询${name}往返LAX报价`}:{title:`Private Transfers Between ${name} and LAX`,description:`Travelling between ${name} and LAX? Send us your pickup and drop-off locations, travel date, passenger count and luggage details to request a quote.`,button:`Get My ${name}–LAX Quote`};
}
export function transferQuoteMessage(lang,city){
 const name=lang==='zh'?(cityNamesZh[city]||city):city;
 if(lang==='zh')return `${city?`您好，我想咨询${name}往返LAX私人专车接送报价。\n接送方向（前往LAX／从LAX出发）：`:'您好，我想咨询LAX私人专车接送报价。'}\n上车地点：\n下车地点：\n用车日期及大致时间：\n乘客人数：\n行李数量：\n航班号（如已确定）：`;
 return `${city?`Hi JasperLAX, I’d like a quote for a private transfer between ${name} and LAX.\nDirection (to LAX / from LAX):`:'Hi JasperLAX, I’d like a quote for a private LAX transfer.'}\nPick-up:\nDrop-off:\nTravel date and approximate time:\nPassengers:\nLuggage:\nFlight number, if available:`;
}
export const transferQuoteUrl=(lang,city)=>`https://wa.me/${contactNumber}?text=${encodeURIComponent(transferQuoteMessage(lang,city))}`;
