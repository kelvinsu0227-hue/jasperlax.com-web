import {feeCopy} from './fee-copy.js';
export const faqGroups = [
  {title:'LAX arrivals', id:'arrivals', items:[
    ['How do I meet my chauffeur at LAX?', 'Your chauffeur will contact you by text and WhatsApp before your flight lands. With Meet & Greet, your chauffeur welcomes you with a name sign in the arrivals hall. With Curbside Pickup, collect your bags, then send your chauffeur the number on the white passenger-pickup column outside your terminal, for example B8, 4A or 7F. Your chauffeur will meet you at the confirmed white pickup column; stopping is permitted only in the designated white passenger-pickup area. Follow the current signs and your chauffeur’s instructions. During busy periods, if you agree to move pickup to the departures level, this may save 20 minutes or more depending on traffic. Confirm the level and meeting point with your chauffeur before moving.'],
    ['How much complimentary waiting time is included?', 'Airport pickups include 30 minutes of complimentary waiting for domestic flights and 60 minutes for international flights, starting from the actual landing time.'],
    ['What if I need more time after landing?', 'Set buffer time when booking to allow more time for immigration and baggage collection. For example, a domestic arrival with 30 minutes of buffer time includes 60 minutes of complimentary waiting after landing: 30 minutes of buffer time plus 30 minutes of free waiting. Please note: Buffer time delays your chauffeur’s airport arrival. Your chauffeur will not be on standby at the airport before the buffer period ends. For example, with a 30-minute buffer, your chauffeur arrives 30 minutes after actual landing, and your complimentary waiting period then begins.'],
    ['How much does additional waiting cost?', 'After your complimentary waiting period and any agreed buffer time, additional waiting costs $15 per 15 minutes.'],
    ['What if I cannot reach my chauffeur?', 'Contact our customer service team at any time by text or WhatsApp: +1 (626) 704-2786.'],
    ['What happens if my flight is delayed?', 'Your chauffeur monitors your flight in real time and adjusts the pickup time to match its arrival. Complimentary waiting starts from the actual landing time.']
  ]},
  {title:'LAX departures', id:'departures', items:[
    ['When will my chauffeur arrive for pickup?', 'Your chauffeur will arrive at your specified pickup location 15 minutes before your scheduled reservation time and remain on standby.'],
    ['How much free waiting is included for departures or one-way trips?', 'Departures and other one-way pickups include 15 minutes of complimentary waiting from the scheduled pickup time. After that, additional waiting costs $15 per 15 minutes.'],
    ['Can I add a stop along the way?', 'Yes. Additional stops are charged according to the extra distance and time. Tell us about your stop so we can confirm the additional cost.'],
    ['Where will I be dropped off at LAX?', 'Your chauffeur will drop you off at the terminal designated for your airline.']
  ]},
  {title:'Booking & your vehicle', id:'booking-vehicle', items:[
    ['Which areas do you serve?', 'JasperLAX offers Toyota Sienna transfers to and from LAX in Los Angeles, Orange County, San Bernardino, Riverside and Ventura counties. For other destinations, contact our team to confirm availability.'],
    ['What vehicle will I ride in?', 'JasperLAX offers Toyota Sienna airport transfers. For a Cadillac Escalade or group transportation, explore the options at Jasperlimo.com.'],
    ['Do you offer rides both to and from LAX?', 'Yes. JasperLAX serves trips to LAX and pickups from LAX within our service areas.'],
    ['How much does a ride cost?', 'Los Angeles rides start at $99, Orange County at $119, and San Bernardino and Riverside at $129. Contact us with your trip details for a final quote.'],
    ['How do I book?', 'Select Book your ride to open our Moovs booking form, or book directly on your route page. Enter your trip details and review the quote before completing your reservation. Contact JasperLAX on WhatsApp if you need help.'],
    ['Can I book a different vehicle?', 'For Cadillac Escalade and group transportation options, visit Jasperlimo.com. JasperLAX focuses on Toyota Sienna airport transfers.'],
    ['How many passengers and bags can the Sienna carry?', 'The Sienna accommodates up to 6 passengers and at least 4 pieces of luggage. Its spacious, flexible interior suits most travel needs.'],
    ['What details should I provide for my airport transfer?', 'Share your travel date, pickup and drop-off addresses, passenger count and luggage details. For airport pickups, include your flight number and any requested buffer time.'],
    ['How do I know my reservation is confirmed?', 'A quote request alone does not confirm a reservation. Make sure you have received a booking confirmation and reviewed your pickup details before traveling. Contact JasperLAX if you need help confirming your trip.']
  ]}
];
faqGroups[2].items.push([feeCopy.en.qFees,feeCopy.en.label+" "+feeCopy.en.fees],[feeCopy.en.qCancel,feeCopy.en.cancel]);
export const questions=faqGroups.flatMap(group=>group.items);
export const guideQuestions=faqGroups.slice(0,2).flatMap(group=>group.items);


