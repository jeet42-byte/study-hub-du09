// Important dates, notices and the weekly class routine.
// `date` is YYYY-MM-DD (or YYYY-MM-DDTHH:MM). Use null while a date is still TBA —
// visitors can set a personal date for TBA items on the Forecast page.
HUB.add(
  'events',
  {
    id: 'rm-quiz-ch3',
    course: 'research-methods',
    type: 'Quiz',
    title: 'Research Methodology quiz — Chapter 3: Qualitative Research Approaches',
    date: '2026-10-31',
    note: 'MCQ + short essay. Slides (Class 4 & 5) + Bachman & Schutt pp. 235–247. FGDs excluded.',
    link: '#/exams/rm-ch3',
  },
  {
    id: 'rm-final',
    course: 'research-methods',
    type: 'Final exam',
    routine: true,
    title: 'Research Methodology (MCCJ 521)',
    date: '2026-12-04T15:00',
    time: '3:00–6:00 pm',
    room: 'Room 704, 6th floor, FSS, DU',
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
    routine: true,
    title: 'Organized Crime and Corruption (MCCJ 527)',
    date: '2026-12-12T15:00',
    time: '3:00–6:00 pm',
    room: 'Room 704, 6th floor, FSS, DU',
    note: '50 marks: answer 5 of 7–8 questions, 10 marks each (2–3 parts). Start with the Tier 1 questions.',
    link: '#/exams/oc-final',
  }
);

// 2nd-semester final exam routine — notice of 18 October 2026, Department of Criminology, DU.
HUB.add(
  'events',
  {
    id: 'cyber-final',
    course: 'cyber-crime',
    type: 'Final exam',
    routine: true,
    title: 'Cyber Crime and Security (MCCJ 525)',
    date: '2026-12-05T15:00',
    time: '3:00–6:00 pm',
    room: 'Room 704, 6th floor, FSS, DU',

    note: 'Scenario-based. Start with Tier 1 of the Cyber Crime question bank (digital forensics).',
    link: '#/exams/cyber-final',
  },
  {
    id: 'forensic-final',
    course: 'forensic-science',
    type: 'Final exam',
    routine: true,
    title: 'Forensic Science (MCCJ 526)',
    date: '2026-12-11T15:00',
    time: '3:00–6:00 pm',
    room: 'Room 704, 6th floor, FSS, DU',
  },
  {
    id: 'comprehensive-final',
    course: 'comprehensive',
    type: 'Final exam',
    routine: true,
    title: 'Comprehensive and Viva Voce (MCCJ 530)',
    date: '2026-12-18T15:00',
    time: '3:00–6:00 pm',
    room: 'Room 704, 6th floor, FSS, DU',
  },
  {
    id: 'viva',
    course: 'comprehensive',
    type: 'Viva',
    title: 'Oral examination (viva)',
    date: '2026-12-19',
    note: 'The notice text gives 19 December for the oral exam, while the routine table lists "Comprehensive and Viva Voce" on 18 December — confirm with the department.',
  }
);

HUB.add('notices', {
  course: 'comprehensive',
  date: '2026-10-18',
  title: '2nd semester final exam routine published',
  body: 'Professional Masters in Criminology and Criminal Justice, session 2025–26: 2nd semester finals start on 4 December 2026 (3:00–6:00 pm, Room 704, 6th floor, FSS, DU) and the oral exam is on 19 December 2026. Complete the exam form fill-up on time. — Md. Rezaul Karim Shohag, Chairperson, Professional Masters Final Exam Committee 2026.',
});

HUB.add('notices', {
  course: 'organized-crime',
  date: null,
  title: 'Group assignment: movie review + presentation (20 marks)',
  body: 'Part I movie review (10) relating the film to organized crime and corruption concepts — definitions, classification, models and theories; Part II presentation (10). Soft copy due 29 October 2026, 11:59 pm, by email to aungkita.criminology@du.ac.bd, file named Group-N (PDF). Hard copy on presentation day. Max 20% plagiarism and 20% AI-generated text.',
});

// Weekly routine, e.g. { course: 'research-methods', day: 'Sunday', start: '10:00', end: '11:30', room: '' }
HUB.add('classes');

// Coursework deadlines (shared in class, October 2026).
HUB.add(
  'events',
  {
    id: 'cyber-assignment',
    course: 'cyber-crime',
    type: 'Assignment',
    title: 'Cyber Crime assignment — security features of online platforms',
    date: '2026-10-25T23:59',
    note: 'Individual, 10 marks. PDF named Roll-Name, uploaded to the drive folder "MCCJ 525 - Cybercrime Assignments".',
    link: '#/assignments/cyber-crime',
  },
  {
    id: 'forensic-deadline',
    course: 'forensic-science',
    type: 'Deadline',
    title: 'Forensic Science (MCCJ 526)',
    date: '2026-11-07',
    note: 'Check with the course teacher whether this is a quiz, assignment or presentation.',
  },
  {
    id: 'rm-assignment',
    course: 'research-methods',
    type: 'Assignment',
    title: 'Research Methodology — assignment submission (10–14 Nov)',
    date: '2026-11-14',
    note: 'Submission window opens 10 November; the countdown runs to the last day, 14 November.',
    link: '#/assignments/research-methods',
  }
);
