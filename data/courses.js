// One entry per course. `id` is used by quizzes, resources, assignments and events.
HUB.add('courses', {
  id: 'research-methods',
  code: 'MCCJ 521',
  title: 'Research Methodology',
  subtitle: 'MCCJ 521',
  textbook:
    'Bachman, R., & Schutt, R. K. — The Practice of Research in Criminology and Criminal Justice (Coursebook 3)',
  color: '#2f6fde',
});

HUB.add('courses', {
  id: 'organized-crime',
  code: 'MCCJ 527',
  title: 'Organized Crime and Corruption',
  subtitle: 'MCCJ 527',
  textbook: 'Lecture decks: OC-4 Human Trafficking, OC-5 Drug Trafficking, Smuggling (Arms & Gold), OC-7 Counterfeiting',
  color: '#b0452c',
});

// Other 2nd-semester courses (Professional Masters in Criminology and Criminal Justice, 2025–26).
// Add quizzes, resources and assignments for them the same way as above.
HUB.add(
  'courses',
  { id: 'cyber-crime', code: 'MCCJ 525', title: 'Cyber Crime and Security', subtitle: 'MCCJ 525', color: '#6a4bc4' },
  { id: 'forensic-science', code: 'MCCJ 526', title: 'Forensic Science', subtitle: 'MCCJ 526', color: '#1a8a6a' },
  { id: 'comprehensive', code: 'MCCJ 530', title: 'Comprehensive and Viva Voce', subtitle: 'MCCJ 530', color: '#8a6a1a' }
);
