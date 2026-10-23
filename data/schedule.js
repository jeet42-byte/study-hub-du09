// Important dates, notices and the weekly class routine.
// `date` is YYYY-MM-DD (or YYYY-MM-DDTHH:MM). Use null while a date is still TBA —
// visitors can set a personal date for TBA items on the Forecast page.
HUB.add(
  'events',
  {
    id: 'rm-quiz-ch3',
    course: 'research-methods',
    type: 'Quiz',
    title: 'Quiz — Chapter 3: Qualitative Research Approaches',
    date: null,
    tentative: 'Expected around mid-September; room to be confirmed',
    note: 'MCQ + short essay. Slides (Class 4 & 5) + Bachman & Schutt pp. 235–247. FGDs excluded.',
    link: '#/exams/rm-ch3',
  },
  {
    id: 'rm-final',
    course: 'research-methods',
    type: 'Final exam',
    title: 'Research Methodology — Final exam',
    date: null,
    tentative: 'Date not announced yet',
    note: 'Final is marked out of 50 — use the Grade planner to see what you need.',
    link: '#/grades',
  }
);

HUB.add('notices', {
  course: 'research-methods',
  date: null,
  title: 'Quiz syllabus announced',
  body: 'Chapter 3: Qualitative Research Approaches — lecture content from slides (Class 4 and 5) and pages 235 to 247 of Coursebook 3, "Research in Criminology and Criminal Justice" by Bachman & Schutt. No need to go through FGDs for the quiz. Questions: a mix of multiple choice and short essay. Date to be announced; a room is likely to be available towards mid-September.',
});

HUB.add(
  'events',
  {
    id: 'oc-assignment',
    course: 'organized-crime',
    type: 'Assignment',
    title: 'MCCJ 527 group assignment — movie review (soft copy)',
    date: '2026-10-29T23:59',
    note: 'Email the PDF named Group-N to aungkita.criminology@du.ac.bd by 11:59 pm. 2000–2500 words, APA 7, Times New Roman 12, 1.5 spacing.',
    link: '#/assignments/organized-crime',
  },
  {
    id: 'oc-presentation',
    course: 'organized-crime',
    type: 'Presentation',
    title: 'MCCJ 527 group presentation + hard copy',
    date: null,
    tentative: 'Date to be decided',
    note: 'Bring the hard copy on presentation day. Keep it within 10 minutes.',
    link: '#/assignments/organized-crime',
  },
  {
    id: 'oc-final',
    course: 'organized-crime',
    type: 'Final exam',
    title: 'Organized Crime and Corruption — End-term (50 marks)',
    date: null,
    tentative: 'Date not announced yet',
    note: 'Answer 5 of 7–8 questions, 10 marks each (2–3 parts). Start with the Tier 1 questions.',
    link: '#/exams/oc-final',
  }
);

HUB.add('notices', {
  course: 'organized-crime',
  date: null,
  title: 'Group assignment: movie review + presentation (20 marks)',
  body: 'Part I movie review (10) relating the film to organized crime and corruption concepts — definitions, classification, models and theories; Part II presentation (10). Soft copy due 29 October 2026, 11:59 pm, by email to aungkita.criminology@du.ac.bd, file named Group-N (PDF). Hard copy on presentation day. Max 20% plagiarism and 20% AI-generated text.',
});

// Weekly routine, e.g. { course: 'research-methods', day: 'Sunday', start: '10:00', end: '11:30', room: '' }
HUB.add('classes');
