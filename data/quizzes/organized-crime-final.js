// Question bank: MCCJ 527 Organized Crime and Corruption — end-term.
// Sources: lecture decks OC-4 Human Trafficking, OC-5 Drug Trafficking,
// Smuggling: Arms & Gold, OC-7 Counterfeiting. References name the deck and slide title.
HUB.add('quizzes', {
  id: 'oc-final',
  course: 'organized-crime',
  title: 'End-term — Organized Crime and Corruption',
  scope:
    'Human trafficking · Drug trafficking · Smuggling (arms & gold) · Counterfeiting. 50 marks: answer 5 of 7–8 questions, 10 marks each, every question in 2–3 parts.',
  format: 'Ranked exam questions with answers',
  notes: 'resources/organized-crime/oc-final-notes.html',

  factors: {
    S: '1 = a full section of slides (4 or more); 0.75 = two or three slides; 0.5 = a single slide.',
    D: '1 = a formal definition, a classification or a comparison table on the slides; 0.5 = described but not formally defined.',
    E: '1 = Bangladesh data, a named case or named scholars attached; 0.5 = a general example only.',
    F: 'How cleanly it frames as a written answer (lists, stages, comparisons, "with reference to Bangladesh") and as an MCQ.',
  },
  probabilityNote:
    'Two cross-deck signals decided how many written questions each topic gets. <b>(1) Repetition:</b> trafficking vs smuggling is taught in two decks, and corruption appears in all four — in a course called <i>Organized Crime and Corruption</i> that makes a corruption synthesis question likely. <b>(2) Bangladesh sections:</b> every deck ends with a Bangladesh section, so "with reference to Bangladesh" questions are very likely.',

  topics: [
    // OC-4 Human trafficking
    { id: 'ht-def', group: 'OC-4 Human trafficking', name: 'HT: definition, means & forms', S: 1, D: 1, E: 0.5, F: 1,
      why: 'UNODC definition + a seven-item "means" list + forms — the foundation of any trafficking answer.' },
    { id: 'ht-vs', group: 'OC-4 Human trafficking', name: 'Trafficking vs smuggling', S: 1, D: 1, E: 1, F: 1,
      why: 'Taught twice (HT deck and the comparison table in the smuggling deck); classic "distinguish between" question.' },
    { id: 'ht-process', group: 'OC-4 Human trafficking', name: 'HT: stages, indicators & why victims stay', S: 1, D: 0.5, E: 0.5, F: 1,
      why: 'Three-stage process, two indicator lists and the "why it\'s hard to escape" list.' },
    { id: 'ht-smugglers', group: 'OC-4 Human trafficking', name: 'Who smuggles migrants & how networks work', S: 1, D: 0, E: 1, F: 0.7,
      why: 'Four slides with named studies (Kleemans & van de Bunt, Soudijn, Zhang); debate about organized-crime control.' },
    { id: 'ht-bd', group: 'OC-4 Human trafficking', name: 'HT in Bangladesh: routes, scam compounds & legal gaps', S: 1, D: 0.5, E: 1, F: 1,
      why: 'Longest section of the deck (about 10 slides): routes, Cambodia scam compounds, 90/180-day rule, penalties.' },
    { id: 'ht-policy', group: 'OC-4 Human trafficking', name: 'Policy responses & prostitution models', S: 1, D: 0.5, E: 1, F: 1,
      why: 'Border control, harm reduction, transit countries and the Swedish / Dutch / Finnish models — perfect compare-and-evaluate material.' },
    { id: 'ht-gaps', group: 'OC-4 Human trafficking', name: 'Enforcement gaps, definitions & evaluation', S: 1, D: 0, E: 1, F: 0.8,
      why: 'Six slides of named findings (Farrell, Di Nicola, GAO); good for "critically evaluate" questions.' },
    { id: 'ht-history', group: 'OC-4 Human trafficking', name: 'HT: history, scale & laws', S: 0.75, D: 0.5, E: 0.5, F: 0.6,
      why: 'Palermo Protocol, Global Slavery Index figures and the national/international law list.' },

    // OC-5 Drug trafficking
    { id: 'dt-def', group: 'OC-5 Drug trafficking', name: 'Drug trafficking: definition & key activities', S: 0.75, D: 1, E: 0.5, F: 1,
      why: 'UN definition + three key activities; the opening of any drug answer.' },
    { id: 'dt-why', group: 'OC-5 Drug trafficking', name: 'Why smugglers do it (four drivers)', S: 0.75, D: 0.5, E: 1, F: 1,
      why: 'A four-point list, each with a numerical example — ideal short question.' },
    { id: 'dt-history', group: 'OC-5 Drug trafficking', name: 'History: opium, morphine, heroin & Opium Wars', S: 1, D: 0.5, E: 1, F: 0.8,
      why: 'Five slides of dated events; examiners like the drug-control timeline.' },
    { id: 'dt-scenario', group: 'OC-5 Drug trafficking', name: 'Developing vs developed world', S: 0.75, D: 0.5, E: 0.5, F: 1,
      why: 'A ready-made comparison (production vs demand, punitive vs medical).' },
    { id: 'dt-syndicates', group: 'OC-5 Drug trafficking', name: 'Syndicates: objectives & major groups', S: 1, D: 0.5, E: 1, F: 1,
      why: 'Economic vs political/social objectives + a world tour of cartels — links drugs to corruption.' },
    { id: 'dt-crescent', group: 'OC-5 Drug trafficking', name: 'Afghanistan & the Golden Crescent routes', S: 1, D: 0.5, E: 1, F: 0.8,
      why: 'Five slides: Balkan/Northern routes, the Taliban ban and the meth shift.' },
    { id: 'dt-myanmar', group: 'OC-5 Drug trafficking', name: 'Myanmar & the Golden Triangle', S: 1, D: 0.5, E: 1, F: 1,
      why: 'Six slides; Myanmar is now the top opium producer and the source of Bangladesh\'s yaba.' },
    { id: 'dt-bd', group: 'OC-5 Drug trafficking', name: 'Bangladesh: Triangle, Crescent, Wedge & yaba', S: 1, D: 1, E: 1, F: 1,
      why: 'Largest Bangladesh section of the course (about 12 slides) with three defined "Golden" zones and DNC data.' },
    { id: 'dt-global', group: 'OC-5 Drug trafficking', name: 'Global supply chain, routes & top ten', S: 0.75, D: 0.5, E: 0.5, F: 0.6,
      why: 'Mostly lists of countries — better for MCQs than essays.' },

    // Smuggling: arms & gold
    { id: 'sm-def', group: 'Smuggling: arms & gold', name: 'Smuggling: definition, origin & forms', S: 0.75, D: 1, E: 0.5, F: 1,
      why: 'Three cited definitions, etymology and six forms.' },
    { id: 'sm-theory', group: 'Smuggling: arms & gold', name: 'Theories explaining smuggling', S: 0.75, D: 1, E: 1, F: 1,
      why: 'Five named theories with founders — the only theory content in these decks, and the assignment also asks for theories.' },
    { id: 'gold-def', group: 'Smuggling: arms & gold', name: 'Gold smuggling: concept, motives & methods', S: 1, D: 1, E: 0.5, F: 1,
      why: 'Definition + six motives + five methods — a complete short answer on the slides.' },
    { id: 'gold-world', group: 'Smuggling: arms & gold', name: 'Gold-smuggling countries & global routes', S: 1, D: 0, E: 1, F: 0.6,
      why: 'Nine country slides — good MCQ material, weaker as an essay.' },
    { id: 'gold-bd', group: 'Smuggling: arms & gold', name: 'Gold in Bangladesh, cases & detection', S: 1, D: 0.5, E: 1, F: 1,
      why: 'Bangladesh route, HSIA, the 2026 BG-148 case and the detection list.' },
    { id: 'arms-def', group: 'Smuggling: arms & gold', name: 'Arms smuggling: concept, SALW & drivers', S: 1, D: 1, E: 0.5, F: 1,
      why: 'Definition, value, why arms are "unique", and a seven-driver table.' },
    { id: 'arms-law', group: 'Smuggling: arms & gold', name: 'Arms: legal framework & transfer types', S: 1, D: 1, E: 0.5, F: 0.8,
      why: 'Firearms Protocol, ATT, SALW classification, authorized vs illicit, Arms Act 1878.' },
    { id: 'arms-methods', group: 'Smuggling: arms & gold', name: 'Arms: methods, concealment, stages & routes', S: 1, D: 0.5, E: 0.5, F: 1,
      why: 'Three lists (methods, transport, seven stages) plus route data.' },
    { id: 'arms-threat', group: 'Smuggling: arms & gold', name: 'Arms: threats, Bangladesh & countermeasures', S: 0.75, D: 0, E: 1, F: 1,
      why: 'Three threats with examples (Sahel, Mexico, Paris 2015) and a Bangladesh table.' },

    // OC-7 Counterfeiting
    { id: 'cf-currency', group: 'OC-7 Counterfeiting', name: 'Counterfeit currency: concept, features & harms', S: 1, D: 1, E: 0.5, F: 1,
      why: 'Definition, three key characteristics and two "why it\'s a problem" lists.' },
    { id: 'cf-ficn', group: 'OC-7 Counterfeiting', name: 'FICN: India–Bangladesh currency smuggling', S: 0.75, D: 0.5, E: 1, F: 0.8,
      why: 'Bangladesh-specific with three dated cases.' },
    { id: 'cf-prevent', group: 'OC-7 Counterfeiting', name: 'Preventing currency counterfeiting & penalties', S: 0.75, D: 0, E: 1, F: 0.8,
      why: 'Polymer notes, security features, reserve series and a global penalty table.' },
    { id: 'cf-goods', group: 'OC-7 Counterfeiting', name: 'Types: goods, electronics, health, documents, coins, trademarks', S: 1, D: 1, E: 0.5, F: 1,
      why: 'Most of the deck: six types, each with a formal definition and techniques.' },
    { id: 'cf-bd', group: 'OC-7 Counterfeiting', name: 'Counterfeiting in Bangladesh: scale & gaps', S: 1, D: 0, E: 1, F: 1,
      why: 'Many slides of Bangladesh figures (40% of market, categories, tax loss, fire risk, enforcement gaps).' },
    { id: 'cf-law', group: 'OC-7 Counterfeiting', name: 'Bangladesh law on counterfeiting', S: 0.75, D: 0.5, E: 0.5, F: 0.8,
      why: 'Penal Code sections, Trademarks Act 2009 and Consumers\' Right Protection Act 2009.' },

    // Cross-cutting
    { id: 'x-corruption', group: 'Cross-cutting', name: 'Corruption & the state–crime nexus', S: 0.75, D: 0.5, E: 1, F: 1,
      why: 'Appears in every deck and in the course title; ideal synthesis question.' },
    { id: 'x-bd', group: 'Cross-cutting', name: 'Bangladesh as source, transit & destination', S: 0.75, D: 0.5, E: 1, F: 1,
      why: 'Each deck positions Bangladesh differently — a natural comparative question.' },
  ],

  mcq: [],

  // Exam-pattern questions (5 of 7–8, 10 marks each) live in organized-crime-final-exam.js.
  essays: [],
});
