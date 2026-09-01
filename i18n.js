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
    "specs.upto4": "Fino a 4 ospiti",
    "crib.onrequest": "Culla disponibile su richiesta",
    "modal.close": "Chiudi",
    "lightbox.prev": "Foto precedente",
    "lightbox.next": "Foto successiva",
    "direct.title": "Perché Prenotare Diretto",
    "direct.benefit1": "Zero commissioni OTA — stesso soggiorno, prezzo migliore",
    "direct.benefit2": "Comunicazione diretta con l'host — rispondiamo noi, non un call center",
    "direct.benefit3": "Stessi standard di Airbnb/Booking — pulizia, self check-in, assistenza 24/7",
    "direct.benefit4": "Più flessibilità — richieste particolari gestite direttamente",
    "direct.benefit5": "Pagamento sicuro — bonifico o carta, senza intermediari",

    // ---------- index.html ----------
    "index.title": "BQA Homes and Villas — Appartamenti e ville boutique a Roma e in Puglia",
    "index.meta": "BQA Homes and Villas: soggiorni boutique a Roma (Trastevere, Flaminio) e nella campagna pugliese di Castellana Grotte. Prenota direttamente con noi.",
    "index.hero.eyebrow": "Roma · Puglia — Ospitalità indipendente",
    "index.hero.h1": "Soggiorni curati nel cuore dell'Italia.",
    "index.hero.lede": "Indirizzi curati da BQA a Roma e in Puglia. Prenota direttamente con noi, senza intermediari.",
    "index.tag.trastevere.loc": "Trastevere · Roma",
    "index.tag.trastevere.desc": "Storico appartamento di 80 mq nel cuore di Trastevere, con cucina attrezzata e balcone privato.",
    "index.tag.trastevere.spec2": "Balcone privato",
    "index.tag.flaminio.loc": "Flaminio · Roma",
    "index.tag.flaminio.desc": "Camere boutique con bagno e cucina privati, a 10 minuti a piedi da Piazza del Popolo.",
    "index.tag.flaminio.spec1": "3 tipologie camera",
    "index.tag.masseriola.desc": "Trullo con piscina privata, giardino e barbecue, immerso nella campagna pugliese.",
    "index.tag.masseriola.spec1": "Fino a 4+1 ospiti",
    "index.tag.masseriola.spec2": "Piscina privata",
    "index.about.eyebrow": "Chi siamo",
    "index.about.lede": "Curiamo ogni dettaglio del soggiorno, dalla pulizia impeccabile al check-in autonomo pensato per un arrivo senza pensieri.",
    "index.about.p1": "Standard elevati di igiene e comfort, verificati prima di ogni arrivo",
    "index.about.p2": "Self check-in per un arrivo flessibile, senza attese",
    "index.about.p3": "Assistenza 24/7 via telefono, SMS o email per qualsiasi richiesta",
    "index.about.p4": "Pagamenti con carte di credito/debito (Visa, Mastercard, American Express, Diners Club, JCB, Discover, CartaSì, UnionPay), contanti o bonifico bancario su richiesta",
    "index.contact.eyebrow": "Parliamone direttamente",
    "index.contact.h2": "Contattaci",
    "index.contact.p": "Per disponibilità, richieste particolari o dubbi su una delle tre strutture, il modo più veloce è scriverci su WhatsApp o via email.",
    "index.reviews.h2": "Cosa dicono gli ospiti di noi",
    "index.reviews.subtitle": "Recensioni vere dei nostri ospiti su Airbnb e Booking.com",
    "index.reviews.score.value": "4,83",
    "index.reviews.score.badge": "Amato dagli ospiti",
    "index.reviews.score.caption": "Valutazioni di BQA San Crisogono Apartments Rome-Trastevere",
    "index.reviews.simona.quote": "\"La posizione, la pulizia e la praticità.\"",
    "index.reviews.roberto.quote": "\"A due passi da Ponte Cestio, vicino ai migliori ristoranti di Trastevere.\"",
    "index.reviews.robyn.quote": "\"Guido è stato super disponibile. Ottima posizione per esplorare Trastevere a piedi.\"",

    // ---------- trastevere.html ----------
    "trastevere.meta": "Storico appartamento di 80 mq nel cuore di Trastevere, Roma. Fino a 4 ospiti, cucina attrezzata, aria condizionata, WiFi veloce. Prenota direttamente con BQA Homes and Villas.",
    "trastevere.hero.loc": "Trastevere · Roma",
    "trastevere.hero.lede": "Cerchi un appartamento a Trastevere per il tuo soggiorno a Roma? Storico appartamento di 80 mq nel cuore di Trastevere: pavimenti in cotto ottocentesco, travi a vista e tutti i comfort moderni, a due passi da vicoli e trattorie autentiche.",
    "trastevere.mainphoto.alt": "Il soggiorno di BQA San Crisogono Apartments Rome-Trastevere",
    "trastevere.struttura.p2": "Soggiorno con divano letto queen size, Smart TV 4K 55\" e tavolo da pranzo per 4",
    "trastevere.struttura.p3": "Cucina completamente attrezzata: piano cottura a induzione, frigorifero, macchina da caffè, microonde",
    "trastevere.struttura.p4": "Camera matrimoniale (letto queen, biancheria 100% cotone) con Smart TV 4K 42\"",
    "trastevere.struttura.p5": "Bagno con doccia in pietra, bidet e balcone privato accessibile direttamente",
    "trastevere.struttura.p6": "Postazione di lavoro con PC desktop e WiFi ad alta velocità",
    "trastevere.struttura.p7": "Aria condizionata e riscaldamento in ogni ambiente",
    "trastevere.struttura.p8": "Welcome kit da bagno",
    "trastevere.struttura.p10": "Check-in autonomo (self check-in), assistenza 24/7 via telefono, SMS o email",
    "trastevere.zona.p1": "A 450 m da Piazza di Santa Maria in Trastevere, cuore della vita del quartiere",
    "trastevere.zona.p2": "Campo de' Fiori e Largo di Torre Argentina a circa 1,1 km",
    "trastevere.zona.p3": "Piazza Navona, Fontana di Trevi e Colosseo raggiungibili a piedi (1,4–2,2 km)",
    "trastevere.zona.p4": "Ristoranti e osterie tipiche a due passi (Insalata Ricca e Convivium a 50 m)",
    "trastevere.zona.p5": "Fermata Metro Circo Massimo a 1,6 km",
    "trastevere.zona2.h2": "Vivi Trastevere",
    "trastevere.zona2.lede": "Siamo nel cuore autentico di Roma: piazze acciottolate, chiese secolari e vicoli che profumano di trattorie tipiche. Ecco qualche scorcio del quartiere, a due passi da casa.",
    "trastevere.zona2.btn": "Vedi altre foto del quartiere",
    "trastevere.zona2.thumb.alt": "Vicoli e scorci di Trastevere, Roma",
    "trastevere.zona2.lightbox.alt": "Foto del quartiere di Trastevere, Roma",
    "trastevere.zona2.lightbox.title": "Galleria foto del quartiere",
    "reviews.h2": "Cosa dicono i nostri ospiti",
    "reviews.subtitle": "Recensioni vere da Airbnb e Booking.com",
    "reviews.score.value": "4,83",
    "reviews.score.badge": "Amato dagli ospiti",
    "reviews.score.count": "su 30 recensioni (Airbnb)",
    "reviews.cat.cleanliness.value": "4,9",
    "reviews.cat.cleanliness.label": "Pulizia",
    "reviews.cat.accuracy.value": "4,9",
    "reviews.cat.accuracy.label": "Precisione",
    "reviews.cat.checkin.value": "5,0",
    "reviews.cat.checkin.label": "Check-in",
    "reviews.cat.communication.value": "5,0",
    "reviews.cat.communication.label": "Comunicazione",
    "reviews.cat.location.value": "5,0",
    "reviews.cat.location.label": "Posizione",
    "reviews.cat.value.value": "4,7",
    "reviews.cat.value.label": "Qualità-prezzo",
    "reviews.simona.quote": "\"La posizione, la pulizia e la praticità.\"",
    "reviews.simona.meta": "Simona · Booking.com · 10/10 · Luglio 2024",
    "reviews.simona.full": "Simona ha soggiornato 2 notti in gruppo nel luglio 2024, assegnando il punteggio massimo. Ha indicato come punti di forza principali la posizione, la pulizia dell'appartamento e la sua praticità generale, senza segnalare alcun aspetto negativo.",
    "reviews.roberto.quote": "\"A due passi da Ponte Cestio, vicino ai migliori ristoranti di Trastevere.\"",
    "reviews.roberto.meta": "Roberto · Booking.com · 10/10 · Dicembre 2025",
    "reviews.roberto.full": "Roberto, in viaggio da solo per una notte a dicembre 2025, racconta di essere riuscito a visitare le zone più belle del centro storico di Roma semplicemente camminando, grazie alla posizione della struttura. Ha apprezzato anche il comfort della camera, con un letto giudicato molto comodo, per un'esperienza complessivamente molto positiva.",
    "reviews.robyn.quote": "\"Guido è stato super disponibile. Ottima posizione per esplorare Trastevere e il centro storico a piedi.\"",
    "reviews.robyn.meta": "Robyn · Airbnb · Australia · Ottobre 2024",
    "reviews.robyn.full": "Robyn descrive l'appartamento come pieno di fascino e spazioso, con un tavolo comodo per mangiare o lavorare. Segnala che si trova al secondo piano senza ascensore, utile da sapere per chi viaggia con bagagli pesanti, e che il letto matrimoniale, pur non enorme, è comodo. Nota anche un po' di rumore, ma considera un vantaggio la posizione defilata rispetto alla via principale.",
    "reviews.anton.quote": "\"Splendido appartamento nel centro di Roma, vicino a tutto e ben attrezzato.\"",
    "reviews.anton.meta": "Anton · Airbnb · Francia · Recensione tradotta dal francese",
    "reviews.anton.full": "Anton, ospite francese, descrive la struttura come un appartamento splendido nel cuore di Roma, ben attrezzato e vicino a tutto. Ha apprezzato la disponibilità di Guido, definito molto cordiale e facile da contattare, e consiglia la struttura senza riserve.",
    "reviews.rebecca.quote": "\"Un appartamento che è sembrato autenticamente romano.\"",
    "reviews.rebecca.meta": "Rebecca · Airbnb · San Francisco, California · Ottobre 2023",
    "reviews.rebecca.full": "Rebecca, in visita da San Francisco, ha apprezzato la vicinanza a ristoranti e bar di Trastevere e consiglia una visita alla Chiesa di San Francesco a Ripa, a due isolati di distanza, con una scultura del Bernini. Segnala che la maggior parte dei luoghi principali di Roma erano raggiungibili in 15-30 minuti a piedi, e che la vicinanza al Tevere permette piacevoli passeggiate serali lungo il fiume. Pur non enorme, l'appartamento le è sembrato autenticamente romano, con tutti i comfort necessari.",
    "trastevere.book.h2": "Prenota BQA San Crisogono Apartments Rome-Trastevere",
    "trastevere.book.p": "Scrivici su WhatsApp o via email con le date che ti interessano: ti confermiamo la disponibilità e ti indichiamo come completare il pagamento.",
    "book.wa": "https://wa.me/393892570302?text=Ciao%2C%20vorrei%20informazioni%20su%20BQA%20San%20Crisogono%20Apartments%20Rome-Trastevere",
    "trastevere.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Richiesta%20disponibilit%C3%A0%20-%20BQA%20San%20Crisogono%20Apartments%20Rome-Trastevere",

    // ---------- flaminio.html ----------
    "flaminio.meta": "B&B boutique nel quartiere Flaminio, Roma, a 10 minuti da Piazza del Popolo. Tre tipologie di camera, bagno privato, aria condizionata. Prenota direttamente con BQA Homes and Villas.",
    "flaminio.hero.loc": "Flaminio · Roma",
    "flaminio.hero.lede": "Cerchi una stanza vicino allo Stadio Olimpico, nel quartiere Flaminio? Boutique B&B nel quartiere Flaminio: tre tipologie di camera con bagno e cucina a uso privato, a due passi da Piazza del Popolo e Stadio Olimpico.",
    "flaminio.mainphoto.alt": "Vista di BQA Fracassini Rooms Rome-Flaminio",
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

    // ---------- masseriola.html ----------
    "masseriola.meta": "Trullo con piscina privata a Castellana Grotte, Puglia. Fino a 4 ospiti (+1 su richiesta), 2 camere, giardino e barbecue. Prenota direttamente con BQA Homes and Villas.",
    "masseriola.hero.lede": "Cerchi una villa con piscina privata in Puglia? Trullo e villa in campagna a Castellana Grotte, tra ulivi secolari: piscina privata, giardino e zona barbecue, per una vacanza pugliese all'insegna della calma.",
    "masseriola.mainphoto.alt": "La piscina di BQA La Masseriola Private Villa-Trullo, con vista sugli ulivi",
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
    "masseriola.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Richiesta%20disponibilit%C3%A0%20-%20BQA%20La%20Masseriola%20Private%20Villa-Trullo"
  },

  en: {
    // ---------- Shared across pages ----------
    "nav.strutture": "Stays",
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
    "specs.upto4": "Up to 4 guests",
    "crib.onrequest": "Crib available on request",
    "modal.close": "Close",
    "lightbox.prev": "Previous photo",
    "lightbox.next": "Next photo",
    "direct.title": "Why Book Direct",
    "direct.benefit1": "No OTA commissions — same stay, better price",
    "direct.benefit2": "Direct communication with your host — you talk to us, not a call center",
    "direct.benefit3": "Same standards as Airbnb/Booking — cleanliness, self check-in, 24/7 support",
    "direct.benefit4": "More flexibility — special requests handled directly",
    "direct.benefit5": "Secure payment — bank transfer or card, no middlemen",

    // ---------- index.html ----------
    "index.title": "BQA Homes and Villas — Boutique Apartments and Villas in Rome and Puglia",
    "index.meta": "BQA Homes and Villas: boutique stays in Rome (Trastevere, Flaminio) and the Puglia countryside near Castellana Grotte. Book directly with us.",
    "index.hero.eyebrow": "Rome · Puglia — Independent hospitality",
    "index.hero.h1": "Curated Italian stays, close to it all.",
    "index.hero.lede": "Addresses curated by BQA in Rome and Puglia. Book directly with us, no middlemen.",
    "index.tag.trastevere.loc": "Trastevere · Rome",
    "index.tag.trastevere.desc": "Historic 80 sqm apartment in the heart of Trastevere, with a fully equipped kitchen and private balcony.",
    "index.tag.trastevere.spec2": "Private balcony",
    "index.tag.flaminio.loc": "Flaminio · Rome",
    "index.tag.flaminio.desc": "Boutique rooms with private bathroom and kitchen, a 10-minute walk from Piazza del Popolo.",
    "index.tag.flaminio.spec1": "3 room types",
    "index.tag.masseriola.desc": "Trullo with private pool, garden and barbecue, set in the Apulian countryside.",
    "index.tag.masseriola.spec1": "Up to 4+1 guests",
    "index.tag.masseriola.spec2": "Private pool",
    "index.about.eyebrow": "About us",
    "index.about.lede": "We take care of every detail of your stay, from spotless cleaning to self check-in designed for a worry-free arrival.",
    "index.about.p1": "High standards of hygiene and comfort, checked before every arrival",
    "index.about.p2": "Self check-in for a flexible arrival, no waiting around",
    "index.about.p3": "24/7 support by phone, SMS or email for any request",
    "index.about.p4": "Payments by credit/debit card (Visa, Mastercard, American Express, Diners Club, JCB, Discover, CartaSì, UnionPay), cash, or bank transfer on request",
    "index.contact.eyebrow": "Let's talk directly",
    "index.contact.h2": "Contact us",
    "index.contact.p": "For availability, special requests or questions about any of our three properties, the fastest way to reach us is WhatsApp or email.",
    "index.reviews.h2": "What guests say about us",
    "index.reviews.subtitle": "Real reviews from our guests on Airbnb and Booking.com",
    "index.reviews.score.value": "4.83",
    "index.reviews.score.badge": "Guest favorite",
    "index.reviews.score.caption": "Ratings for BQA San Crisogono Apartments Rome-Trastevere",
    "index.reviews.simona.quote": "\"The location, the cleanliness, and how practical it was.\"",
    "index.reviews.roberto.quote": "\"Just steps from Ponte Cestio, close to the best restaurants in Trastevere.\"",
    "index.reviews.robyn.quote": "\"Guido was super responsive. Great location to explore Trastevere on foot.\"",

    // ---------- trastevere.html ----------
    "trastevere.meta": "Historic 80 sqm apartment in the heart of Trastevere, Rome. Up to 4 guests, fully equipped kitchen, air conditioning, fast WiFi. Book directly with BQA Homes and Villas.",
    "trastevere.hero.loc": "Trastevere · Rome",
    "trastevere.hero.lede": "Looking for an apartment in Trastevere for your stay in Rome? Historic 80 sqm apartment in the heart of Trastevere: 19th-century terracotta floors, exposed beams and every modern comfort, steps away from authentic alleys and trattorias.",
    "trastevere.mainphoto.alt": "The living room of BQA San Crisogono Apartments Rome-Trastevere",
    "trastevere.struttura.p2": "Living room with queen-size sofa bed, 55\" 4K Smart TV and dining table for 4",
    "trastevere.struttura.p3": "Fully equipped kitchen: induction cooktop, refrigerator, coffee machine, microwave",
    "trastevere.struttura.p4": "Double bedroom (queen bed, 100% cotton linens) with 42\" 4K Smart TV",
    "trastevere.struttura.p5": "Bathroom with stone shower, bidet and direct access to a private balcony",
    "trastevere.struttura.p6": "Workstation with desktop PC and high-speed WiFi",
    "trastevere.struttura.p7": "Air conditioning and heating throughout",
    "trastevere.struttura.p8": "Bathroom welcome kit",
    "trastevere.struttura.p10": "Self check-in, 24/7 support by phone, SMS or email",
    "trastevere.zona.p1": "450 m from Piazza di Santa Maria in Trastevere, the heart of the neighborhood",
    "trastevere.zona.p2": "Campo de' Fiori and Largo di Torre Argentina about 1.1 km away",
    "trastevere.zona.p3": "Piazza Navona, Trevi Fountain and the Colosseum within walking distance (1.4–2.2 km)",
    "trastevere.zona.p4": "Traditional restaurants and osterie just steps away (Insalata Ricca and Convivium 50 m)",
    "trastevere.zona.p5": "Circo Massimo metro station 1.6 km away",
    "trastevere.zona2.h2": "Live Trastevere",
    "trastevere.zona2.lede": "We're right in the authentic heart of Rome: cobbled squares, centuries-old churches and alleys that smell of trattorias. Here's a glimpse of the neighborhood, just steps from home.",
    "trastevere.zona2.btn": "See more neighborhood photos",
    "trastevere.zona2.thumb.alt": "Alleys and views of Trastevere, Rome",
    "trastevere.zona2.lightbox.alt": "Photo of the Trastevere neighborhood, Rome",
    "trastevere.zona2.lightbox.title": "Neighborhood photo gallery",
    "reviews.h2": "What our guests say",
    "reviews.subtitle": "Real reviews from Airbnb and Booking.com",
    "reviews.score.value": "4.83",
    "reviews.score.badge": "Guest favorite",
    "reviews.score.count": "based on 30 reviews (Airbnb)",
    "reviews.cat.cleanliness.value": "4.9",
    "reviews.cat.cleanliness.label": "Cleanliness",
    "reviews.cat.accuracy.value": "4.9",
    "reviews.cat.accuracy.label": "Accuracy",
    "reviews.cat.checkin.value": "5.0",
    "reviews.cat.checkin.label": "Check-in",
    "reviews.cat.communication.value": "5.0",
    "reviews.cat.communication.label": "Communication",
    "reviews.cat.location.value": "5.0",
    "reviews.cat.location.label": "Location",
    "reviews.cat.value.value": "4.7",
    "reviews.cat.value.label": "Value",
    "reviews.simona.quote": "\"The location, the cleanliness, and how practical it was.\"",
    "reviews.simona.meta": "Simona · Booking.com · 10/10 · July 2024",
    "reviews.simona.full": "Simona stayed 2 nights with her group in July 2024 and gave the top score. She highlighted the location, the cleanliness of the apartment, and how practical it was overall, with nothing negative to report.",
    "reviews.roberto.quote": "\"Just steps from Ponte Cestio, close to the best restaurants in Trastevere.\"",
    "reviews.roberto.meta": "Roberto · Booking.com · 10/10 · December 2025",
    "reviews.roberto.full": "Roberto, traveling solo for one night in December 2025, says he was able to visit the most beautiful parts of Rome's historic center just by walking, thanks to the property's location. He also praised the room's comfort, describing the bed as very comfortable, for an overall very positive experience.",
    "reviews.robyn.quote": "\"Guido was super responsive. Great location to explore Trastevere and old city by foot.\"",
    "reviews.robyn.meta": "Robyn · Airbnb · Australia · October 2024",
    "reviews.robyn.full": "Robyn describes the apartment as full of charm and spacious, with a comfortable table for eating or working. She notes it's on the second floor with no elevator, worth knowing if traveling with heavy luggage, and that the double bed, while not huge, is comfortable. She also mentions some noise, but sees the location just off the main street as a plus.",
    "reviews.anton.quote": "\"Wonderful apartment in the center of Rome, close to everything and well equipped.\"",
    "reviews.anton.meta": "Anton · Airbnb · France · Translated from French",
    "reviews.anton.full": "Anton, a guest from France, describes the property as a wonderful apartment in the heart of Rome, well equipped and close to everything. He praised Guido's helpfulness, calling him very friendly and easy to reach, and recommends the property without reservation.",
    "reviews.rebecca.quote": "\"Felt like an authentic Roman apartment.\"",
    "reviews.rebecca.meta": "Rebecca · Airbnb · San Francisco, California · October 2023",
    "reviews.rebecca.full": "Rebecca, visiting from San Francisco, appreciated being close to restaurants and bars in Trastevere and recommends visiting the Chiesa di San Francesco a Ripa, just two blocks away, with an impressive Bernini sculpture. She notes most major Rome landmarks were a 15-30 minute walk away, and the proximity to the Tiber makes for pleasant evening strolls along the river. Though not huge, the apartment felt authentically Roman to her, with all the key amenities.",
    "trastevere.book.h2": "Book BQA San Crisogono Apartments Rome-Trastevere",
    "trastevere.book.p": "Message us on WhatsApp or by email with the dates you're interested in: we'll confirm availability and let you know how to complete payment.",
    "book.wa": "https://wa.me/393892570302?text=Hi%2C%20I%27d%20like%20information%20about%20BQA%20San%20Crisogono%20Apartments%20Rome-Trastevere",
    "trastevere.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Availability%20request%20-%20BQA%20San%20Crisogono%20Apartments%20Rome-Trastevere",

    // ---------- flaminio.html ----------
    "flaminio.meta": "Boutique B&B in the Flaminio neighborhood, Rome, a 10-minute walk from Piazza del Popolo. Three room types, private bathroom, air conditioning. Book directly with BQA Homes and Villas.",
    "flaminio.hero.loc": "Flaminio · Rome",
    "flaminio.hero.lede": "Looking for a room near the Stadio Olimpico, in the Flaminio neighborhood? Boutique B&B in Flaminio: three room types with private bathroom and kitchen, steps from Piazza del Popolo and the Stadio Olimpico.",
    "flaminio.mainphoto.alt": "View of BQA Fracassini Rooms Rome-Flaminio",
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

    // ---------- masseriola.html ----------
    "masseriola.meta": "Trullo with private pool in Castellana Grotte, Puglia. Up to 4 guests (+1 on request), 2 bedrooms, garden and barbecue. Book directly with BQA Homes and Villas.",
    "masseriola.hero.lede": "Looking for a villa with a private pool in Puglia? Trullo and countryside villa in Castellana Grotte, among centuries-old olive trees: private pool, garden and barbecue area, for a peaceful Apulian getaway.",
    "masseriola.mainphoto.alt": "The pool at BQA La Masseriola Private Villa-Trullo, overlooking the olive groves",
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
    "masseriola.book.mail": "mailto:bqaboutiquehomesandvillas@gmail.com?subject=Availability%20request%20-%20BQA%20La%20Masseriola%20Private%20Villa-Trullo"
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
