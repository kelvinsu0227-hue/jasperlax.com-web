import React,{useContext} from 'react';
import {LanguageContext,localePath} from './i18n.jsx';

const localNotes={
 'irvine-lax':[
  ['For an office or campus destination in Irvine, provide the building name and visitor entrance as well as the street address. If your meeting follows the flight, include the meeting time so pickup planning can account for baggage collection and the onward drive.','For an Irvine departure, identify the hotel lobby or residential entrance where your party will be ready. Include office, hotel or other intermediate stops in the quote request rather than adding them after the itinerary is confirmed.'],
  ['Irvine 办公室或园区接送请提供楼栋名称、访客入口和街道地址。如需落地后参加会议，请注明会议时间，方便统筹取行李及后续行程。','从 Irvine 出发，请确认酒店大堂或住宅会合入口。办公室、酒店等途中停靠应在询价时提出，以便报价涵盖完整行程。'],
  ['Para oficinas o campus en Irvine, indica edificio y entrada de visitantes además de la dirección. Si tienes una reunión después del vuelo, incluye la hora para planificar la recogida, el equipaje y el trayecto.','Al salir de Irvine, confirma el vestíbulo o entrada donde estará el grupo. Incluye paradas en oficinas u hoteles al pedir la cotización.'],
  ['Irvine のオフィスやキャンパスへの送迎は、住所に加えて建物名と訪問者用入口をお知らせください。到着後に会議がある場合は開始時刻も必要です。荷物の受け取りと移動を含めて計画します。','Irvine 出発時はホテルのロビーや住宅の合流入口を確認してください。オフィスやホテルなど途中の立ち寄りは見積もり時にご申告ください。'],
  ['Irvine 사무실이나 캠퍼스는 주소 외에 건물 이름과 방문자 입구를 알려주세요. 도착 후 회의가 있다면 시각을 알려 수하물 수령과 이동을 함께 계획하세요.','Irvine 출발 시 호텔 로비나 주택 입구를 확인하세요. 사무실이나 호텔 경유는 견적 요청 때 포함해 주세요.']
 ],
 'anaheim-lax':[
  ['For an Anaheim hotel or resort trip, use the accommodation name and street address, not just the attraction name. Confirm which entrance permits your arranged pickup and whether your party will have luggage before check-in or after checkout.','For family travel, send the folded stroller size and child-seat needs with the passenger and bag counts. If your flight departure follows a park visit or event, share the planned finish time and where you will collect your luggage.'],
  ['Anaheim 酒店或度假村接送请填写住宿名称和街道地址，不要仅写景点名称。请确认可会合的入口，以及入住前或退房后是否携带行李。','家庭出行请同时提供折叠后的婴儿车尺寸、儿童座椅需求、人数及行李数量。如需游园或活动后送机，请告知预计结束时间及取行李地点。'],
  ['Para hoteles o resorts de Anaheim, utiliza el nombre y dirección del alojamiento, no solo la atracción. Confirma la entrada de encuentro y si llevarás equipaje antes del check-in o después del checkout.','En viajes familiares, indica dimensiones del cochecito plegado y sillas infantiles junto con personas y maletas. Si vas al aeropuerto tras un parque o evento, comparte la hora de salida y dónde recogerás el equipaje.'],
  ['Anaheim のホテルやリゾートは、観光施設名だけでなく宿泊先名と住所をご指定ください。合流できる入口と、チェックイン前・チェックアウト後の荷物の有無を確認してください。','ご家族での移動は、人数と荷物に加えベビーカーの折り畳み寸法とチャイルドシートの希望をお知らせください。観光やイベント後に空港へ向かう場合は終了時刻と荷物の受取場所も必要です。'],
  ['Anaheim 호텔이나 리조트 이동은 관광지 이름만 적지 말고 숙소 이름과 주소를 알려주세요. 만날 입구와 체크인 전 또는 체크아웃 후 짐 여부를 확인하세요.','가족 이동은 인원과 가방 수 외에 접은 유모차 크기와 카시트 필요 사항을 알려주세요. 공원이나 행사 후 공항으로 간다면 종료 시각과 짐을 찾을 장소도 알려주세요.']
 ],
 'pasadena-lax':[
  ['For a Pasadena hotel, residence or event venue, identify the entrance where your party can meet the chauffeur with their luggage. If the venue has restricted access or several entrances, share its pickup instructions before confirming the trip.','For a post-event transfer to LAX, include the expected finish time, luggage collection point and flight departure details. Tell us about additional passengers or stops when requesting the quote so the vehicle and itinerary can be checked together.'],
  ['Pasadena 酒店、住宅或活动场地接送，请明确乘客携行李与司机会合的入口。如场地限制车辆进入或有多个入口，请在确认行程前提供接送要求。','活动结束后前往 LAX，请提供预计结束时间、取行李地点及出发航班信息。询价时说明新增乘客及停靠需求，以便同时核对车辆空间与完整行程。'],
  ['En hoteles, viviendas o eventos de Pasadena, identifica la entrada donde el grupo puede encontrarse con el chófer y las maletas. Comparte restricciones de acceso o instrucciones del recinto antes de confirmar.','Para ir a LAX tras un evento, indica la hora prevista de finalización, punto de recogida del equipaje y vuelo. Incluye pasajeros adicionales y paradas en la solicitud de cotización.'],
  ['Pasadena のホテル、ご自宅、イベント会場では、荷物を持って運転手と合流できる入口をご指定ください。車両の入場制限や複数の入口がある場合は予約確定前に案内をお知らせください。','イベント後の LAX 送迎は終了予定時刻、荷物の受取場所、出発便をお知らせください。追加の乗客や立ち寄りも見積もり時に申告し、車両と行程を併せて確認します。'],
  ['Pasadena 호텔, 자택 또는 행사장은 일행이 짐과 함께 기사님을 만날 입구를 지정하세요. 차량 진입 제한이나 여러 입구가 있다면 예약 확정 전에 안내해 주세요.','행사 후 LAX로 이동할 때는 예상 종료 시각, 짐을 찾을 장소와 출발 항공편을 알려주세요. 견적 요청 시 추가 승객과 경유지를 포함해 차량 공간과 일정을 함께 확인하세요.']
 ]
};
const labels={en:['Plan your {city} airport transfer','Your destination & meeting point','Your return to LAX','LAX pickup guide','Request a trip quote'],zh:['规划{city}机场接送','目的地与会合地点','返程前往 LAX','LAX 接机指南','咨询行程报价'],es:['Planifica tu traslado de {city}','Destino y punto de encuentro','Tu regreso a LAX','Guía de recogida LAX','Solicitar cotización'],ja:['{city}の空港送迎を計画','目的地と合流場所','LAX へのお帰り','LAX お迎えガイド','見積もりを相談'],ko:['{city} 공항 이동 계획','목적지와 만날 장소','LAX로 돌아가는 일정','LAX 픽업 안내','견적 문의']};
export default function CityPlanning({city}){
 const lang=useContext(LanguageContext);const c=labels[lang];const notes=localNotes[city[0]][['en','zh','es','ja','ko'].indexOf(lang)];
 return <section className="inner-section city-planning"><h2>{c[0].replace('{city}',city[1])}</h2><div className="city-planning-grid">{notes.map((text,i)=><article key={text}><h3>{c[i+1]}</h3><p>{text}</p></article>)}</div><div className="information-links"><a className="text-link" href={localePath('/lax-pickup-guide/',lang)}>{c[3]} →</a><a className="text-link" href="https://wa.me/16267042786" target="_blank" rel="noopener noreferrer">{c[4]} ↗</a></div></section>;
}
