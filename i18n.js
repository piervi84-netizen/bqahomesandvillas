/* ============================================================
   BQA Homes and Villas — Switch lingua IT / EN
   Come funziona (in breve):
   - Ogni testo del sito che deve cambiare lingua ha nell'HTML
     un attributo data-i18n="chiave" (o data-i18n-html / data-i18n-label).
   - Qui sotto, per ogni "chiave" sono scritte le due versioni:
     testo in italiano (it) e testo in inglese (en).
   - Per correggere una traduzione: cerca la chiave qui sotto e
     modifica il testo tra virgolette. Non toccare la parte
     prima dei due punti (es. "index.hero.h1":).
   ============================================================ */

const BQA_TRANSLATIONS = {

  it: {
    // ---------- Condivisi tra le pagine ----------
    "nav.strutture": "Strutture",
    "nav.chisiamo": "Chi Siamo",
    "nav.faq": "FAQ",
    "nav.contatti": "Contatti",
    "map.view": "Vedi su mappa",
    "avail.title": "Disponibilità",
    "avail.desc": "Controlla le date libere in tempo reale sul nostro annuncio ufficiale, sempre sincronizzato.",
    "avail.btn": "Verifica disponibilità su Booking.com",
    "book.eyebrow": "Prenota direttamente, zero commissioni",
    "book.wa.label": "Scrivi su WhatsApp",
    "book.mail.label": "Scrivi una email",
    "pay.title": "Metodi di pagamento accettati",
    "pay.cash": "Contanti",
    "footer.line1": "BQA Homes and Villas — Roma & Puglia",
    "h2.struttura": "La struttura",
    "h2.zona": "La zona",
    "modal.close": "Chiudi",
    "lightbox.prev": "Foto precedente",
    "lightbox.next": "Foto successiva",
    "faq.h2": "Domande Frequenti",
    "faq.seeall": "Vedi tutte le domande frequenti",
    "faq.lede": "Le risposte alle domande più comuni sui nostri soggiorni. Non trovi quello che cerchi? Scrivici, siamo sempre disponibili.",
    "faq.checkin.q": "Come funziona il check-in?",
    "faq.checkin.a": "L'accesso è autonomo tramite self check-in, con istruzioni chiare inviate prima del vostro arrivo. Questo non significa essere soli: siamo pienamente disponibili a distanza 24/7 per qualsiasi necessità.",
    "faq.breakfast.q": "La colazione è inclusa?",
    "faq.breakfast.a": "No, la colazione non è inclusa nel soggiorno.",
    "faq.cancellation.q": "Qual è la politica di cancellazione?",
    "faq.cancellation.a": "Offriamo una tariffa flessibile con cancellazione gratuita fino a 5 giorni prima dell'arrivo (50% del costo se si cancella nei 5 giorni precedenti, importo totale in caso di mancata presentazione), oppure una tariffa non rimborsabile a prezzo scontato.",
    "faq.bookdirect.q": "Come si prenota direttamente con voi?",
    "faq.bookdirect.a": "Potete scriverci su WhatsApp o via email — trovate i contatti in fondo alla pagina. Rispondiamo rapidamente e vi guidiamo attraverso tutto il processo.",
    "faq.crib.q": "È disponibile una culla per neonati?",
    "faq.crib.a": "Sì, disponibile gratuitamente su richiesta.",
    "faq.restaurant.q": "C'è il ristorante?",
    "faq.restaurant.a": "No, non abbiamo un ristorante interno, ma siamo circondati da ottimi locali nelle vicinanze.",
    "faq.spa.q": "C'è la spa/centro benessere?",
    "faq.spa.a": "No, non disponiamo di spa o centro benessere.",
    "faq.gym.q": "C'è una palestra?",
    "faq.gym.a": "No, non disponiamo di una sala fitness.",
    "faq.shuttle.q": "C'è il servizio navetta aeroportuale?",
    "faq.shuttle.a": "No, non offriamo il servizio navetta aeroportuale.",
    "faq.wifi.q": "Che WiFi c'è?",
    "faq.wifi.a": "WiFi veloce gratuito, 220 Mbps — adatto per streaming 4K e videochiamate su più dispositivi.",
    "faq.parking.ztl.q": "C'è il parcheggio?",
    "faq.parking.ztl.a": "Non c'è un parcheggio dedicato: la zona è a traffico limitato (ZTL), ma trovate parcheggi pubblici a pagamento nelle vicinanze.",
    "faq.pets.no.q": "Sono ammessi animali domestici?",
    "faq.pets.no.a": "Non sono ammessi animali domestici.",
    "faq.section.general": "Domande generali",
    "faq.page.title": "Domande Frequenti | BQA Homes and Villas",
    "faq.page.meta": "Tutte le risposte alle domande più frequenti su check-in, cancellazioni, parcheggio, animali e servizi delle strutture BQA Homes and Villas a Roma e in Puglia.",
    "direct.title": "Perché Prenotare Diretto",
    "direct.benefit1": "Zero commissioni OTA — stesso soggiorno, prezzo migliore",
    "direct.benefit2": "Comunicazione diretta con l'host — rispondiamo noi, non un call center",
    "direct.benefit3": "Stessi standard di Airbnb/Booking — pulizia, self check-in, assistenza 24/7",
    "direct.benefit4": "Più flessibilità — richieste particolari gestite direttamente",
    "direct.benefit5": "Pagamento sicuro — bonifico o carta, senza intermediari",



    // ---------- flaminio.html ----------
    "flaminio.meta": "B&B boutique nel quartiere Flaminio, Roma, a 10 minuti da Piazza del Popolo. Tre tipologie di camera, bagno privato, aria condizionata. Prenota diretto.",
    "flaminio.hero.loc": "Flaminio · Roma",
    "flaminio.hero.lede": "Cerchi una stanza vicino allo Stadio Olimpico, nel quartiere Flaminio? Boutique B&B nel quartiere Flaminio: tre tipologie di camera con bagno e cucina a uso privato, a due passi da Piazza del Popolo e Stadio Olimpico.",
    "flaminio.mainphoto.alt": "Vista di BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.gallery.thumb.alt": "BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.gallery.lightbox.title": "Galleria foto dell'appartamento",
    "flaminio.h2.camere": "Le camere",
    "flaminio.camere.p1": "<strong>Standard Queen</strong> — ideale per coppie o viaggiatori singoli",
    "flaminio.camere.p2": "<strong>King Standard</strong> — più spazio, letto king size",
    "flaminio.camere.p3": "<strong>Quadrupla Queen</strong> — due letti queen, per famiglie o gruppi",
    "flaminio.camere.p4": "Aria condizionata, Smart TV e WiFi gratuito in ogni camera",
    "flaminio.camere.p5": "Bagno privato in camera, bollitore e macchina da caffè",
    "flaminio.camere.p6": "Cucina completamente attrezzata (frigorifero, forno, microonde, piano cottura) e lavatrice",
    "flaminio.camere.p8": "Culla disponibile su richiesta, gratuita",
    "flaminio.zona.p1": "A 10 minuti a piedi da Piazza del Popolo",
    "flaminio.zona.p2": "Stadio Olimpico e Auditorium Parco della Musica raggiungibili a piedi",
    "flaminio.zona.p3": "Fermata Metro Flaminio (Linea A) a pochi minuti, per Vaticano, Piazza di Spagna, Colosseo",
    "flaminio.zona.p4": "Ristoranti a due passi (Perilli al Flaminio, Bistrot il Cortile del Politecnico a 50 m)",
    "flaminio.zona.p5": "Check-in e check-out privati ed espressi, ascensore per i piani superiori",
    "flaminio.zona.p6": "Parcheggio pubblico in zona, navetta aeroportuale a pagamento su richiesta",
    "flaminio.zona2.h2": "Vivi Flaminio",
    "flaminio.zona2.lede": "Siamo tra il verde di Villa Borghese e l'eleganza di Parioli, a due passi da Piazza del Popolo e dal cuore rinascimentale di Roma. Una zona residenziale e curata, dove l'arte contemporanea del MAXXI, la musica dell'Auditorium Parco della Musica e lo sport dello Stadio Olimpico si incontrano lungo il Tevere, fino al suggestivo Ponte Milvio. La fermata Flaminio della Linea A vi porta ovunque in pochi minuti.",
    "flaminio.zona2.btn": "Vedi altre foto del quartiere",
    "flaminio.zona2.thumb.alt": "Scorci del quartiere Flaminio, Roma",
    "flaminio.zona2.lightbox.alt": "Foto del quartiere Flaminio, Roma",
    "flaminio.zona2.lightbox.title": "Galleria foto del quartiere",
    "flaminio.reviews.h2": "Cosa dicono i nostri ospiti",
    "flaminio.reviews.subtitle": "Recensioni vere da Booking.com",
    "flaminio.reviews.score.value": "7,7",
    "flaminio.reviews.score.badge": "Buono",
    "flaminio.reviews.score.count": "su 14 recensioni",
    "flaminio.reviews.cat.staff.value": "8,5",
    "flaminio.reviews.cat.staff.label": "Staff",
    "flaminio.reviews.cat.services.value": "7,5",
    "flaminio.reviews.cat.services.label": "Servizi",
    "flaminio.reviews.cat.cleanliness.value": "8,0",
    "flaminio.reviews.cat.cleanliness.label": "Pulizia",
    "flaminio.reviews.cat.comfort.value": "8,2",
    "flaminio.reviews.cat.comfort.label": "Comfort",
    "flaminio.reviews.cat.value.value": "6,8",
    "flaminio.reviews.cat.value.label": "Rapporto qualità-prezzo",
    "flaminio.reviews.cat.location.value": "9,0",
    "flaminio.reviews.cat.location.label": "Posizione",
    "flaminio.reviews.andrea.quote": "\"Ci siamo trovati benissimo. Camera pulita e confortevole, posizione perfetta per girare la città.\"",
    "flaminio.reviews.andrea.meta": "Andrea · Booking.com · 10/10 · Marzo 2025",
    "flaminio.reviews.andrea.full": "Andrea ha soggiornato una notte in coppia a marzo 2025, assegnando il punteggio massimo. Ha descritto un'esperienza molto positiva, con una camera pulita e confortevole e una posizione ideale per girare la città, apprezzando anche la semplicità del check-in.",
    "flaminio.reviews.robertof.quote": "\"La camera era dotata di tutto il necessario, il letto incredibilmente comodo.\"",
    "flaminio.reviews.robertof.meta": "Roberto · Booking.com · 10/10 · Novembre 2024",
    "flaminio.reviews.robertof.full": "Roberto, in viaggio da solo a novembre 2024, ha trovato la camera dotata di tutto il necessario, con un letto giudicato incredibilmente comodo e un arredamento nuovo e curato nei minimi dettagli. Ha apprezzato anche il bagno, spazioso e pratico, con una doccia ampia e funzionale, tanto da dichiarare di voler tornare alla prima occasione.",
    "flaminio.reviews.stefania.quote": "\"Guido mi ha rassicurata: pulizia impeccabile e posizione ideale, a soli 10 minuti da Piazza del Popolo.\"",
    "flaminio.reviews.stefania.meta": "Stefania · Booking.com · 10/10 · Novembre 2024",
    "flaminio.reviews.stefania.full": "Stefania racconta di aver avuto qualche dubbio al momento della prenotazione, trattandosi di una struttura nuova con una sola recensione precedente incentrata sulla pulizia. Ha quindi contattato Guido, il gestore, che si è mostrato molto professionale e disponibile, rassicurandola sull'attenzione riservata alla pulizia. All'arrivo ha confermato che tutto corrispondeva a quanto promesso: camera pulita e in condizioni perfette, posizione ideale e ben collegata al centro, a soli 10 minuti da Piazza del Popolo. Consiglia vivamente la struttura per il servizio, i collegamenti e la comunicazione con il gestore.",
    "flaminio.reviews.cristina.quote": "\"Ambiente molto pulito, materassi comodissimi, aria condizionata, condominio silenzioso.\"",
    "flaminio.reviews.cristina.meta": "Cristina · Booking.com · 7/10 · Giugno 2025",
    "flaminio.reviews.cristina.full": "Cristina ha soggiornato una notte in famiglia a giugno 2025, in occasione di un concerto di Einaudi all'Auditorium Parco della Musica. Ha trovato la struttura in una posizione molto comoda, a 10 minuti a piedi dal parco e 30 minuti d'autobus dalla Stazione Termini, con camera, bagno e cucina a disposizione in un appartamento d'epoca. Ha apprezzato l'ambiente molto pulito, i materassi comodissimi, l'aria condizionata e il condominio silenzioso, suggerendo solo alcuni piccoli dettagli su asciugamani e prodotti da bagno che potrebbero fare la differenza.",
    "flaminio.reviews.lorna.quote": "\"Ottima posizione per assistere alla partita allo Stadio Olimpico.\"",
    "flaminio.reviews.lorna.meta": "Lorna · Booking.com · Regno Unito · 9/10 · Marzo 2025",
    "flaminio.reviews.lorna.full": "Lorna, ospite dal Regno Unito, ha soggiornato 2 notti in famiglia a marzo 2025 per assistere a una partita di rugby allo Stadio Olimpico. Ha apprezzato la buona posizione e i servizi ben forniti, in un appartamento pulito con camera da letto, bagno e cucina.",
    "flaminio.book.h2": "Prenota BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.book.p": "Scrivici su WhatsApp o via email indicando date e tipologia di camera che preferisci: ti confermiamo la disponibilità e i dettagli per il pagamento.",
    "flaminio.book.wa": "https://wa.me/393892570302?text=Ciao%2C%20vorrei%20informazioni%20su%20BQA%20Fracassini%20Rooms%20Rome-Flaminio",
    "flaminio.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Richiesta%20disponibilit%C3%A0%20-%20BQA%20Fracassini%20Rooms%20Rome-Flaminio",
    "flaminio.crosslinks": "Scopri anche le nostre altre strutture: <a href=\"trastevere.html\">BQA San Crisogono Apartments Rome-Trastevere</a> · <a href=\"masseriola.html\">BQA La Masseriola Private Villa-Trullo</a>",
    "flaminio.faq.elevator.q": "C'è l'ascensore?",
    "flaminio.faq.elevator.a": "Sì, l'edificio è dotato di ascensore.",

    // ---------- masseriola.html ----------
    "masseriola.meta": "Trullo con piscina privata a Castellana Grotte, Puglia. Fino a 4 ospiti (+1 su richiesta), 2 camere, giardino e barbecue. Prenota direttamente con noi.",
    "masseriola.hero.lede": "Cerchi una villa con piscina privata in Puglia? Trullo e villa in campagna a Castellana Grotte, tra ulivi secolari: piscina privata, giardino e zona barbecue, per una vacanza pugliese all'insegna della calma.",
    "masseriola.mainphoto.alt": "La piscina di BQA La Masseriola Private Villa-Trullo, con vista sugli ulivi",
    "masseriola.gallery.thumb.alt": "BQA La Masseriola Private Villa-Trullo",
    "masseriola.gallery.lightbox.title": "Galleria foto della villa",
    "masseriola.zona2.h2": "Vivi la Valle d'Itria",
    "masseriola.zona2.lede": "Siamo nel cuore della Valle d'Itria, tra trulli secolari e ulivi millenari, a pochi minuti da alcuni dei borghi più belli d'Italia: Alberobello con i suoi trulli patrimonio UNESCO, la candida Ostuni e la raffinata Locorotondo. Le spiagge della costa adriatica sono a circa 10 km, mentre le suggestive Grotte di Castellana e lo Zoo Safari di Fasano regalano un'esperienza indimenticabile anche alle famiglie con bambini.",
    "masseriola.zona2.btn": "Vedi altre foto del quartiere",
    "masseriola.zona2.thumb.alt": "Scorci della Valle d'Itria, Puglia",
    "masseriola.zona2.lightbox.alt": "Foto della Valle d'Itria, Puglia",
    "masseriola.zona2.lightbox.title": "Galleria foto della Valle d'Itria",
    "masseriola.struttura.p1": "Fino a 4 ospiti, con possibilità di un 5° sul divano letto in soggiorno",
    "masseriola.struttura.p2": "Camera principale matrimoniale",
    "masseriola.struttura.p3": "Seconda camera con 2 letti singoli",
    "masseriola.struttura.p4": "Soggiorno con divano letto e Smart TV 4K 55\"",
    "masseriola.struttura.p5": "Cucina attrezzata (frigorifero, macchina da caffè, utensili)",
    "masseriola.struttura.p6": "1 bagno con doccia e bidet",
    "masseriola.struttura.p7": "Piscina privata con lettini, giardino e zona barbecue in pietra",
    "masseriola.struttura.p8": "Riscaldamento autonomo e ventilatori in ogni camera",
    "masseriola.struttura.p9": "Parcheggio privato gratuito, WiFi gratuito",
    "masseriola.struttura.p10": "Animali ammessi (possibile supplemento), culla gratuita su richiesta",
    "masseriola.zona.p1": "Nella campagna di Castellana Grotte, tra ulivi secolari, nel cuore della Valle d'Itria",
    "masseriola.zona.p2": "Spiagge pugliesi a circa 10 km",
    "masseriola.zona.p3": "Grotte di Castellana ed escursioni in barca o immersioni nei dintorni",
    "masseriola.zona.p4": "Zoo Safari di Fasano, ideale per famiglie con bambini",
    "masseriola.zona.p5": "Base ideale per esplorare Alberobello, Ostuni e Locorotondo",
    "masseriola.zona.p6": "Consigliata l'auto per muoversi tra i borghi della zona",
    "masseriola.book.h2": "Prenota BQA La Masseriola Private Villa-Trullo",
    "masseriola.book.p": "Scrivici su WhatsApp o via email con le date del tuo soggiorno: ti confermiamo la disponibilità e i dettagli per il pagamento.",
    "masseriola.book.wa": "https://wa.me/393892570302?text=Ciao%2C%20vorrei%20informazioni%20su%20BQA%20La%20Masseriola%20Private%20Villa-Trullo",
    "masseriola.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Richiesta%20disponibilit%C3%A0%20-%20BQA%20La%20Masseriola%20Private%20Villa-Trullo",
    "masseriola.crosslinks": "Scopri anche le nostre altre strutture: <a href=\"trastevere.html\">BQA San Crisogono Apartments Rome-Trastevere</a> · <a href=\"flaminio.html\">BQA Fracassini Rooms Rome-Flaminio</a>",
    "masseriola.faq.parking.q": "C'è il parcheggio?",
    "masseriola.faq.parking.a": "Sì, parcheggio privato gratuito disponibile.",
    "masseriola.faq.pets.q": "Sono ammessi animali domestici?",
    "masseriola.faq.pets.a": "Sì, con possibile supplemento — contattateci per i dettagli."
  },

  en: {
    // ---------- Shared across pages ----------
    "nav.strutture": "Stays",
    "nav.chisiamo": "About Us",
    "nav.faq": "FAQ",
    "nav.contatti": "Contact",
    "map.view": "View on map",
    "avail.title": "Availability",
    "avail.desc": "Check real-time availability on our official listing, always in sync.",
    "avail.btn": "Check availability on Booking.com",
    "book.eyebrow": "Book directly, zero fees",
    "book.wa.label": "Message on WhatsApp",
    "book.mail.label": "Send an email",
    "pay.title": "Accepted payment methods",
    "pay.cash": "Cash",
    "footer.line1": "BQA Homes and Villas — Rome & Puglia",
    "h2.struttura": "The property",
    "h2.zona": "The area",
    "modal.close": "Close",
    "lightbox.prev": "Previous photo",
    "lightbox.next": "Next photo",
    "faq.h2": "Frequently Asked Questions",
    "faq.seeall": "See all FAQs",
    "faq.lede": "Answers to the most common questions about our stays. Can't find what you're looking for? Message us, we're always available.",
    "faq.checkin.q": "How does check-in work?",
    "faq.checkin.a": "Check-in is self-service, with clear instructions sent before your arrival. This doesn't mean you're on your own: we're fully available remotely 24/7 for anything you need.",
    "faq.breakfast.q": "Is breakfast included?",
    "faq.breakfast.a": "No, breakfast is not included in your stay.",
    "faq.cancellation.q": "What's the cancellation policy?",
    "faq.cancellation.a": "We offer a flexible rate with free cancellation up to 5 days before arrival (50% of the cost if cancelled within 5 days of arrival, full amount for no-shows), or a discounted non-refundable rate.",
    "faq.bookdirect.q": "How do I book directly with you?",
    "faq.bookdirect.a": "You can message us on WhatsApp or by email — you'll find our contacts at the bottom of the page. We reply quickly and guide you through the whole process.",
    "faq.crib.q": "Is a crib available for infants?",
    "faq.crib.a": "Yes, available free of charge on request.",
    "faq.restaurant.q": "Is there a restaurant?",
    "faq.restaurant.a": "No, we don't have an on-site restaurant, but we're surrounded by great places to eat nearby.",
    "faq.spa.q": "Is there a spa/wellness center?",
    "faq.spa.a": "No, we don't have a spa or wellness center.",
    "faq.gym.q": "Is there a gym?",
    "faq.gym.a": "No, we don't have a fitness room.",
    "faq.shuttle.q": "Is there an airport shuttle service?",
    "faq.shuttle.a": "No, we don't offer an airport shuttle service.",
    "faq.wifi.q": "What WiFi is available?",
    "faq.wifi.a": "Free fast WiFi, 220 Mbps — great for 4K streaming and video calls on multiple devices.",
    "faq.parking.ztl.q": "Is there parking?",
    "faq.parking.ztl.a": "There's no dedicated parking: the area is a restricted traffic zone (ZTL), but you'll find paid public parking nearby.",
    "faq.pets.no.q": "Are pets allowed?",
    "faq.pets.no.a": "Pets are not allowed.",
    "faq.section.general": "General questions",
    "faq.page.title": "Frequently Asked Questions | BQA Homes and Villas",
    "faq.page.meta": "All the answers to the most frequently asked questions about check-in, cancellations, parking, pets and amenities at BQA Homes and Villas properties in Rome and Puglia.",
    "direct.title": "Why Book Direct",
    "direct.benefit1": "No OTA commissions — same stay, better price",
    "direct.benefit2": "Direct communication with your host — you talk to us, not a call center",
    "direct.benefit3": "Same standards as Airbnb/Booking — cleanliness, self check-in, 24/7 support",
    "direct.benefit4": "More flexibility — special requests handled directly",
    "direct.benefit5": "Secure payment — bank transfer or card, no middlemen",



    // ---------- flaminio.html ----------
    "flaminio.meta": "Boutique B&B in the Flaminio neighborhood, Rome, a 10-minute walk from Piazza del Popolo. Three room types, private bathroom, air conditioning. Book directly with BQA Homes and Villas.",
    "flaminio.hero.loc": "Flaminio · Rome",
    "flaminio.hero.lede": "Looking for a room near the Stadio Olimpico, in the Flaminio neighborhood? Boutique B&B in Flaminio: three room types with private bathroom and kitchen, steps from Piazza del Popolo and the Stadio Olimpico.",
    "flaminio.mainphoto.alt": "View of BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.gallery.thumb.alt": "BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.gallery.lightbox.title": "Apartment photo gallery",
    "flaminio.h2.camere": "The rooms",
    "flaminio.camere.p1": "<strong>Standard Queen</strong> — ideal for couples or solo travelers",
    "flaminio.camere.p2": "<strong>King Standard</strong> — more space, king-size bed",
    "flaminio.camere.p3": "<strong>Queen Quad</strong> — two queen beds, for families or groups",
    "flaminio.camere.p4": "Air conditioning, Smart TV and free WiFi in every room",
    "flaminio.camere.p5": "Private en-suite bathroom, kettle and coffee machine",
    "flaminio.camere.p6": "Fully equipped kitchen (fridge, oven, microwave, stovetop) and washing machine",
    "flaminio.camere.p8": "Free crib available on request",
    "flaminio.zona.p1": "A 10-minute walk from Piazza del Popolo",
    "flaminio.zona.p2": "Stadio Olimpico and Auditorium Parco della Musica within walking distance",
    "flaminio.zona.p3": "Flaminio metro station (Line A) a few minutes away, for the Vatican, Piazza di Spagna, Colosseum",
    "flaminio.zona.p4": "Restaurants just steps away (Perilli al Flaminio, Bistrot il Cortile del Politecnico 50 m)",
    "flaminio.zona.p5": "Private, express check-in and check-out, elevator to upper floors",
    "flaminio.zona.p6": "Public parking nearby, paid airport shuttle on request",
    "flaminio.zona2.h2": "Live Flaminio",
    "flaminio.zona2.lede": "We're set between the greenery of Villa Borghese and the elegance of Parioli, just steps from Piazza del Popolo and Rome's Renaissance heart. A residential, well-kept neighborhood, where the contemporary art of MAXXI, the music of the Auditorium Parco della Musica, and the energy of Stadio Olimpico meet along the Tiber, all the way to the charming Ponte Milvio. The Flaminio Metro stop puts the rest of the city just minutes away.",
    "flaminio.zona2.btn": "See more neighborhood photos",
    "flaminio.zona2.thumb.alt": "Views of the Flaminio neighborhood, Rome",
    "flaminio.zona2.lightbox.alt": "Photo of the Flaminio neighborhood, Rome",
    "flaminio.zona2.lightbox.title": "Neighborhood photo gallery",
    "flaminio.reviews.h2": "What our guests say",
    "flaminio.reviews.subtitle": "Real reviews from Booking.com",
    "flaminio.reviews.score.value": "7.7",
    "flaminio.reviews.score.badge": "Good",
    "flaminio.reviews.score.count": "based on 14 reviews",
    "flaminio.reviews.cat.staff.value": "8.5",
    "flaminio.reviews.cat.staff.label": "Staff",
    "flaminio.reviews.cat.services.value": "7.5",
    "flaminio.reviews.cat.services.label": "Services",
    "flaminio.reviews.cat.cleanliness.value": "8.0",
    "flaminio.reviews.cat.cleanliness.label": "Cleanliness",
    "flaminio.reviews.cat.comfort.value": "8.2",
    "flaminio.reviews.cat.comfort.label": "Comfort",
    "flaminio.reviews.cat.value.value": "6.8",
    "flaminio.reviews.cat.value.label": "Value for money",
    "flaminio.reviews.cat.location.value": "9.0",
    "flaminio.reviews.cat.location.label": "Location",
    "flaminio.reviews.andrea.quote": "\"We had a wonderful time. Clean and comfortable room, perfect location to explore the city.\"",
    "flaminio.reviews.andrea.meta": "Andrea · Booking.com · 10/10 · March 2025",
    "flaminio.reviews.andrea.full": "Andrea stayed one night as a couple in March 2025 and gave the top score. He described a very positive experience, with a clean and comfortable room and an ideal location for exploring the city, also appreciating how simple the check-in was.",
    "flaminio.reviews.robertof.quote": "\"The room had everything we needed, the bed was incredibly comfortable.\"",
    "flaminio.reviews.robertof.meta": "Roberto · Booking.com · 10/10 · November 2024",
    "flaminio.reviews.robertof.full": "Roberto, traveling solo in November 2024, found the room equipped with everything he needed, with a bed he described as incredibly comfortable and furnishings that were new and carefully finished. He also praised the bathroom, spacious and practical, with a large and functional shower, saying he would return as soon as he had the chance.",
    "flaminio.reviews.stefania.quote": "\"Guido reassured me: impeccable cleanliness and an ideal location, just 10 minutes from Piazza del Popolo.\"",
    "flaminio.reviews.stefania.meta": "Stefania · Booking.com · 10/10 · November 2024",
    "flaminio.reviews.stefania.full": "Stefania says she had some doubts when booking, since it was a new property with only one previous review focused on cleanliness. She contacted Guido, the host, who was very professional and helpful, reassuring her about the attention paid to cleanliness. On arrival, she confirmed everything matched what was promised: a clean room in perfect condition, an ideal location well connected to the center, just 10 minutes from Piazza del Popolo. She highly recommends the property for its service, connections, and communication with the host.",
    "flaminio.reviews.cristina.quote": "\"Very clean space, extremely comfortable mattresses, air conditioning, quiet building.\"",
    "flaminio.reviews.cristina.meta": "Cristina · Booking.com · 7/10 · June 2025",
    "flaminio.reviews.cristina.full": "Cristina stayed one night with her family in June 2025, for an Einaudi concert at the Auditorium Parco della Musica. She found the property in a very convenient location, a 10-minute walk from the park and 30 minutes by bus from Termini Station, with a bedroom, bathroom, and kitchen available in a period apartment. She appreciated the very clean space, extremely comfortable mattresses, air conditioning, and quiet building, only suggesting a few small details about towels and bathroom products that could make a difference.",
    "flaminio.reviews.lorna.quote": "\"Great location to attend a game at Stadio Olimpico.\"",
    "flaminio.reviews.lorna.meta": "Lorna · Booking.com · United Kingdom · 9/10 · March 2025",
    "flaminio.reviews.lorna.full": "Lorna, a guest from the United Kingdom, stayed 2 nights with her family in March 2025 to attend a rugby game at Stadio Olimpico. She appreciated the good location and thoughtfully provided facilities, in a clean apartment with bedroom, bathroom, and kitchen.",
    "flaminio.book.h2": "Book BQA Fracassini Rooms Rome-Flaminio",
    "flaminio.book.p": "Message us on WhatsApp or by email with your preferred dates and room type: we'll confirm availability and payment details.",
    "flaminio.book.wa": "https://wa.me/393892570302?text=Hi%2C%20I%27d%20like%20information%20about%20BQA%20Fracassini%20Rooms%20Rome-Flaminio",
    "flaminio.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Availability%20request%20-%20BQA%20Fracassini%20Rooms%20Rome-Flaminio",
    "flaminio.crosslinks": "Discover our other properties too: <a href=\"trastevere.html\">BQA San Crisogono Apartments Rome-Trastevere</a> · <a href=\"masseriola.html\">BQA La Masseriola Private Villa-Trullo</a>",
    "flaminio.faq.elevator.q": "Is there an elevator?",
    "flaminio.faq.elevator.a": "Yes, the building has an elevator.",

    // ---------- masseriola.html ----------
    "masseriola.meta": "Trullo with private pool in Castellana Grotte, Puglia. Up to 4 guests (+1 on request), 2 bedrooms, garden and barbecue. Book directly with BQA Homes and Villas.",
    "masseriola.hero.lede": "Looking for a villa with a private pool in Puglia? Trullo and countryside villa in Castellana Grotte, among centuries-old olive trees: private pool, garden and barbecue area, for a peaceful Apulian getaway.",
    "masseriola.mainphoto.alt": "The pool at BQA La Masseriola Private Villa-Trullo, overlooking the olive groves",
    "masseriola.gallery.thumb.alt": "BQA La Masseriola Private Villa-Trullo",
    "masseriola.gallery.lightbox.title": "Villa photo gallery",
    "masseriola.zona2.h2": "Live the Valle d'Itria",
    "masseriola.zona2.lede": "We're in the heart of the Valle d'Itria, among centuries-old trulli and ancient olive groves, just minutes from some of Italy's most beautiful villages: Alberobello with its UNESCO World Heritage trulli, the whitewashed town of Ostuni, and the refined Locorotondo. The Adriatic coast beaches are about 10 km away, while the striking Grotte di Castellana caves and Fasano's Zoo Safari make for an unforgettable experience, especially for families with children.",
    "masseriola.zona2.btn": "See more neighborhood photos",
    "masseriola.zona2.thumb.alt": "Views of the Valle d'Itria, Puglia",
    "masseriola.zona2.lightbox.alt": "Photo of the Valle d'Itria, Puglia",
    "masseriola.zona2.lightbox.title": "Valle d'Itria photo gallery",
    "masseriola.struttura.p1": "Up to 4 guests, with the possibility of a 5th on the living room sofa bed",
    "masseriola.struttura.p2": "Main double bedroom",
    "masseriola.struttura.p3": "Second bedroom with 2 single beds",
    "masseriola.struttura.p4": "Living room with sofa bed and 55\" 4K Smart TV",
    "masseriola.struttura.p5": "Equipped kitchen (refrigerator, coffee machine, utensils)",
    "masseriola.struttura.p6": "1 bathroom with shower and bidet",
    "masseriola.struttura.p7": "Private pool with sun loungers, garden and stone barbecue area",
    "masseriola.struttura.p8": "Independent heating and fans in every room",
    "masseriola.struttura.p9": "Free private parking, free WiFi",
    "masseriola.struttura.p10": "Pets allowed (surcharge may apply), free crib on request",
    "masseriola.zona.p1": "In the countryside of Castellana Grotte, among centuries-old olive trees, in the heart of Valle d'Itria",
    "masseriola.zona.p2": "Apulian beaches about 10 km away",
    "masseriola.zona.p3": "Castellana Caves and nearby boat trips or diving excursions",
    "masseriola.zona.p4": "Fasano Zoosafari, ideal for families with children",
    "masseriola.zona.p5": "An ideal base for exploring Alberobello, Ostuni and Locorotondo",
    "masseriola.zona.p6": "A car is recommended for getting around the local villages",
    "masseriola.book.h2": "Book BQA La Masseriola Private Villa-Trullo",
    "masseriola.book.p": "Message us on WhatsApp or by email with your stay dates: we'll confirm availability and payment details.",
    "masseriola.book.wa": "https://wa.me/393892570302?text=Hi%2C%20I%27d%20like%20information%20about%20BQA%20La%20Masseriola%20Private%20Villa-Trullo",
    "masseriola.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Availability%20request%20-%20BQA%20La%20Masseriola%20Private%20Villa-Trullo",
    "masseriola.crosslinks": "Discover our other properties too: <a href=\"trastevere.html\">BQA San Crisogono Apartments Rome-Trastevere</a> · <a href=\"flaminio.html\">BQA Fracassini Rooms Rome-Flaminio</a>",
    "masseriola.faq.parking.q": "Is there parking?",
    "masseriola.faq.parking.a": "Yes, free private parking is available.",
    "masseriola.faq.pets.q": "Are pets allowed?",
    "masseriola.faq.pets.a": "Yes, with a possible supplement — contact us for details."
  }
};

(function () {
  var STORAGE_KEY = "bqa_lang";

  function detectDefaultLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") return saved;
    } catch (e) { /* localStorage non disponibile: si va avanti col default */ }
    var browserLang = (navigator.language || navigator.userLanguage || "it").toLowerCase();
    return browserLang.indexOf("it") === 0 ? "it" : "en";
  }

  function applyLanguage(lang) {
    var dict = BQA_TRANSLATIONS[lang] || BQA_TRANSLATIONS.it;
    document.documentElement.setAttribute("lang", lang);

    // Testi / attributi principali (data-i18n oppure data-i18n-html)
    document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach(function (el) {
      var isHtml = el.hasAttribute("data-i18n-html");
      var key = isHtml ? el.getAttribute("data-i18n-html") : el.getAttribute("data-i18n");
      var val = dict[key];
      if (val === undefined) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (isHtml) {
        el.innerHTML = val;
      } else if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    });

    // Etichette separate (es. testo di un link il cui href è già tradotto sopra)
    document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-label");
      var val = dict[key];
      if (val !== undefined) el.textContent = val;
    });

    // Stato pulsanti IT / EN
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora se non disponibile */ }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Pagine statiche (index.html, trastevere.html e le versioni /en/) portano
    // data-static-lang sull'<html>: sono già nella lingua giusta via HTML puro,
    // quindi qui non si tocca lingua, <title>, <meta> o <html lang>.
    if (document.documentElement.hasAttribute("data-static-lang")) return;

    applyLanguage(detectDefaultLang());

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  });
})();

/* ============================================================
   Helper condivisi di accessibilità per i modali (lightbox foto,
   modale recensioni): focus trap + focus management. Usati da
   trastevere.html e flaminio.html.
   ============================================================ */
(function () {
  var lastFocused = null;

  function getFocusable(container) {
    if (!container) return [];
    return Array.prototype.slice
      .call(container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
      .filter(function (el) { return el.offsetParent !== null && !el.disabled; });
  }

  function openModalA11y(container) {
    lastFocused = document.activeElement;
    var focusables = getFocusable(container);
    if (focusables.length) focusables[0].focus();
  }

  function closeModalA11y() {
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
    lastFocused = null;
  }

  function trapFocusKeydown(e, container) {
    if (e.key !== "Tab") return;
    var focusables = getFocusable(container);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function setBackgroundInert(modalRoot, on) {
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el === modalRoot || el.tagName === "SCRIPT") return;
      if (on) {
        el.setAttribute("inert", "");
        el.setAttribute("aria-hidden", "true");
      } else {
        el.removeAttribute("inert");
        el.removeAttribute("aria-hidden");
      }
    });
  }

  window.BQA_openModalA11y = openModalA11y;
  window.BQA_closeModalA11y = closeModalA11y;
  window.BQA_trapFocusKeydown = trapFocusKeydown;
  window.BQA_setBackgroundInert = setBackgroundInert;
})();

/* ============================================================
   Helper condiviso per l'accordion FAQ (trastevere/flaminio/masseriola).
   ============================================================ */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-question").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) {
          panel.classList.toggle("open", !expanded);
          panel.setAttribute("aria-hidden", String(expanded));
        }
      });
    });
  });
})();

/* ============================================================
   Helper condiviso: fade-in + slide-up allo scroll, con
   IntersectionObserver unico. Elementi con classe "fade-in-section".
   Fallback: se IntersectionObserver non è supportato, la classe
   "js-fade-ready" non viene aggiunta e gli elementi restano
   visibili di default (nessun rischio contenuto invisibile).
   Riutilizzabile su qualunque pagina del sito.
   ============================================================ */
(function () {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js-fade-ready");

  document.addEventListener("DOMContentLoaded", function () {
    var els = document.querySelectorAll(".fade-in-section");
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(function (el) { observer.observe(el); });
  });
})();

/* ============================================================
   Helper: nasconde il CTA sticky mobile "Prenota Diretto" quando
   il footer entra in viewport, così non copre footer/altri CTA
   quando l'utente è già in fondo alla pagina.
   ============================================================ */
(function () {
  if (!("IntersectionObserver" in window)) return;

  document.addEventListener("DOMContentLoaded", function () {
    var cta = document.getElementById("mobile-book-cta");
    var footer = document.getElementById("site-footer");
    if (!cta || !footer) return;

    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        cta.classList.toggle("hide-at-footer", entry.isIntersecting);
      });
    }, { threshold: 0 });

    footerObserver.observe(footer);
  });
})();

/* ============================================================
   Helper: carosello automatico foto di sfondo nella hero della
   homepage (.hero-bg-slide). Crossfade ogni 6s, loop infinito,
   nessun controllo manuale. Rispetta prefers-reduced-motion:
   se attivo, resta ferma la prima foto (già "active" via HTML/CSS),
   nessun setInterval.
   ============================================================ */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".hero-bg-slide");
    if (!slides.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  });
})();
