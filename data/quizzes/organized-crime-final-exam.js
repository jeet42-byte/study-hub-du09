// Exam-pattern questions for the Organized Crime end-term (attached to the 'oc-final' quiz).
// Pattern: 50 marks — answer 5 of 7–8 questions, each 10 marks made of 2–3 parts.
// `covers` lists the syllabus topics a question prepares you for. Tiers come from greedy
// maximum coverage (each next question adds the most uncovered probability weight), with
// at least two top-10 questions per lecture deck; within a tier, higher-scoring topics rank first.
(function () {
  const quiz = HUB.quizzes.find((q) => q.id === 'oc-final');

  quiz.examPattern = {
    total: 50,
    answer: 5,
    of: [7, 8],
    each: 10,
    scope: 'This plan assumes the end-term covers the four lectures uploaded here (human trafficking, drug trafficking, smuggling of arms & gold, counterfeiting).',
  };

  quiz.answerTips = [
    '<b>Match marks to length</b>: a 3-mark part ≈ one solid paragraph; a 4–5-mark part ≈ two paragraphs or a short list with explanation.',
    '<b>Define first</b>: open each part with the slide definition and its source (UNODC, Cornish &amp; Clarke…).',
    '<b>Use the lists</b>: stages, means, drivers and methods come as lists on the slides — number them.',
    '<b>Add one Bangladesh fact or case</b> per question (BG-148, 8.2 million users, the 90/180-day rule, 40% counterfeit market).',
    '<b>End with a one-line evaluation</b> (for example, corruption undermines enforcement).',
  ];

  quiz.essays = [
    {
      rank: 1, t: 'ht-vs', covers: ['ht-def', 'ht-vs'], marks: 10,
      q: 'Human trafficking and human smuggling',
      parts: [
        {
          marks: 3,
          q: 'Define human trafficking according to UNODC and mention the means traffickers use.',
          points: [
            'UNODC: recruitment, transportation, transfer, harbouring or receipt of people through force, fraud or deception, aiming to exploit them for profit',
            'Often starts with an offer one cannot refuse — a job or marriage',
            'Means: threats/force, coercion, fraud, deception, abuse of vulnerability, payments or benefits, abduction',
            'Forms: sexual exploitation, forced labour, forced scamming, forced marriage',
          ],
          model:
            "**Human trafficking** is defined by the UNODC as \"the recruitment, transportation, transfer, harbouring or receipt of people through force, fraud or deception, with the aim of exploiting them for profit.\" It usually begins with an offer the victim cannot refuse — a well-paid job abroad or a marriage — and ends in exploitation.\n\n### Three elements of the definition\n| Element | What it means | Bangladesh illustration |\n|---|---|---|\n| Act | Recruiting, moving, transferring, harbouring or receiving a person | A local *dalal* (broker) recruits a young man in Narsingdi for a \"factory job\" in Malaysia |\n| Means | How consent is obtained or overridden | False job promise, debt, confiscated passport |\n| Purpose | Exploitation for profit | Unpaid labour, sexual exploitation, forced scamming |\n\n### The seven means used by traffickers\n1. Threats or use of force\n2. Coercion\n3. Fraud\n4. Deception\n5. Abuse of a position of vulnerability (poverty, irregular status, disaster displacement)\n6. Giving payments or benefits to someone who controls the victim\n7. Abduction\n\n### Common forms\nCommercial sexual exploitation, forced labour, forced scamming (cyber-scam compounds) and forced marriage, including child marriage.\n\n[chart] Modern slavery worldwide — Global Slavery Index 2023 (millions)\nTotal in modern slavery | 50 | ~50 m\nForced labour | 27.6 | 27.6 m\nForced commercial sexual exploitation | 6.3 | 6.3 m\n\n**Bangladesh example:** women from border districts such as Jashore and Satkhira have been lured with promises of jobs in India and sold into brothels, while men are recruited for overseas jobs that turn into debt bondage. Women and girls make up 71% of trafficking survivors globally.\n\n**Conclusion:** the means element is what separates trafficking from ordinary migration — once consent is obtained by force, fraud or abuse of vulnerability, it is legally irrelevant.",
        },
        {
          marks: 4,
          q: 'Distinguish between human trafficking and human smuggling.',
          points: [
            'Purpose: exploitation for gain vs illegal movement across a border',
            'Consent: force, fraud, coercion, deception vs generally consensual',
            'Border: within or across borders vs always crossing a border',
            'Duration: exploitation may continue after movement vs relationship ends at destination',
            'Examples: forced labour/sexual exploitation vs paid illegal border crossing',
          ],
          model:
            "Human trafficking and human smuggling are often confused because both involve moving people for money, but they are different crimes under the UN Palermo Protocols (2000) — one protocol on trafficking in persons and one on smuggling of migrants.\n\n| Basis | Human trafficking | Human smuggling |\n|---|---|---|\n| Nature | Exploitation of people for financial or other gain | Illegal movement of people or goods across borders |\n| Consent | Obtained by force, fraud, coercion or deception — consent is irrelevant | Migrant generally consents to the movement |\n| Border | Can happen **within** a country or across borders | Always involves crossing a border illegally |\n| Relationship | Continues after arrival; exploitation is the source of profit | Usually ends once the migrant reaches the destination |\n| Victim | The person is the victim | The state (its border laws) is the main victim |\n| Profit source | Exploiting the person's labour or body | Fee paid for the journey |\n| Example | Forced labour, sexual exploitation | Paying an agent for an illegal border crossing |\n\n### Bangladesh examples\n• Smuggling — Bangladeshi migrants paying agents to reach Italy through Libya and the Mediterranean; the deal is the journey itself\n• Trafficking — women from Jashore or Satkhira deceived with job offers and sold into brothels in India; internal trafficking of girls to brothels such as Daulatdia\n• Both at once — in May 2020, 26 Bangladeshi migrants were shot dead by traffickers in Mizdah, Libya: they had paid to be smuggled, but were held for ransom on the way\n\n**In one line:** the smuggler sells a journey; the trafficker sells the person.\n\n**Conclusion:** the distinction matters for policy — smuggled migrants are treated as offenders against border law, while trafficking victims must be protected, so misclassifying a victim as a smuggled migrant denies them protection.",
        },
        {
          marks: 3,
          q: 'How can a case of smuggling turn into trafficking?',
          points: [
            'Migrant consents at first, but falls into debt bondage, unsafe work or is threatened',
            'Abroad: fear, debt, abuse leave no choice (Andrees, 2008; Herman, 2006)',
            'Initial consent does not mean safety',
            'Example: smuggled migrant forced to work to repay a "travel debt"',
          ],
          model:
            "Smuggling can turn into trafficking when consent given at the start is replaced by control and exploitation later. The lecture stresses that \"even if someone consents at first, that doesn't mean they are safe\" (Andrees, 2008; Herman, 2006).\n\n[flow] How smuggling becomes trafficking\nMigrant pays an agent → Illegal journey → Debt or ransom demand → Forced work or confinement → Trafficking\n\n### How the shift happens\n1. **Debt bondage** — the \"travel cost\" keeps rising and must be repaid through unpaid or underpaid work\n2. **Unsafe or different work** — the migrant is placed in dangerous or abusive jobs they never agreed to\n3. **Threats and violence** — they are forced into acts (sex work, crime) through threats against them or their family\n4. **No exit** — abroad without papers, money or language, and afraid of police, they have no real choice but to obey\n\n### Bangladesh example\nThe **2015 Bay of Bengal–Andaman Sea crisis**: thousands of Bangladeshi and Rohingya migrants paid smugglers for boat journeys to Malaysia. Many were held in jungle camps on the Thailand–Malaysia border and beaten until families paid ransom; mass graves were discovered there in May 2015. What began as smuggling became trafficking and extortion.\n\n**Conclusion:** because smuggling can turn into trafficking at any stage, authorities should screen smuggled migrants for signs of exploitation instead of treating them only as border offenders.",
        },
      ],
    },
    {
      rank: 2, t: 'dt-bd', covers: ['dt-bd', 'dt-myanmar'], marks: 10,
      q: 'Drug trafficking and Bangladesh',
      parts: [
        {
          marks: 3,
          q: 'What are the Golden Triangle, the Golden Crescent and the Golden Wedge?',
          points: [
            'Golden Triangle: Myanmar–Laos–Thailand; opium → meth/yaba',
            'Golden Crescent: Afghanistan (cultivation), Pakistan (transit/refining), Iran (corridor to Europe)',
            'Golden Wedge: newest — north Bangladesh to Himachal Pradesh & Uttar Pradesh, incl. Nepal & parts of Bhutan',
          ],
          model:
            "Bangladesh lies between Asia's two largest drug-producing zones and next to a newer route, which explains why it has become a transit country.\n\n| Zone | Countries / area | Main drugs | Role |\n|---|---|---|---|\n| **Golden Triangle** | Myanmar, Laos, Thailand (where their borders meet) | Opium/heroin historically; now methamphetamine (yaba, \"ice\") | World's oldest drug factory; source of most drugs entering Bangladesh |\n| **Golden Crescent** | Afghanistan, Pakistan, Iran | Opium, heroin, cannabis resin | Afghanistan = cultivation hub; Pakistan = transit and refining; Iran = corridor to Europe |\n| **Golden Wedge** | North Bangladesh, Indian states of Himachal Pradesh and Uttar Pradesh, Nepal, parts of Bhutan | Mixed — cannabis, heroin, transit of others | Newest route, between the Crescent and the Triangle |\n\n**Within Bangladesh:** the \"Golden Village\" — 26 villages of Kushtia district — is known for cannabis cultivation, showing that Bangladesh is not only a transit country.\n\n**Conclusion:** sitting between the Triangle and the Crescent, with the Wedge to the north, Bangladesh's geography makes it a natural corridor for narcotics moving to South Asia, Europe, Africa and North America.",
        },
        {
          marks: 4,
          q: 'Why has Bangladesh become a key transit and destination country for narcotics? Describe the main smuggling routes.',
          points: [
            'Not a major producer, but sits between the Triangle and Crescent; hilly borders with India and Myanmar',
            'Myanmar corridor: Teknaf, Ukhiya, Saint Martin\'s; boats across the Naf, mules, Rohingya-linked carriers',
            'Indian corridor: Satkhira, Jashore, Cumilla, Kurigram — Phensedyl, heroin, cannabis',
            'Dhaka airport: cocaine from Africa/South America to India',
            '105 border points in 18 districts; onward via Dhaka, Chattogram, Sylhet',
          ],
          model:
            "Bangladesh is not a major producer, yet it has become a **critical transit and destination country** for narcotics, mainly from the Golden Triangle.\n\n### Why Bangladesh is vulnerable\n1. **Geography** — between the Golden Triangle and the Golden Crescent, with the Golden Wedge to the north\n2. **Porous borders** — hilly borders with India and Myanmar and riverine borders; traffickers use at least **105 border points across 18 districts**\n3. **Myanmar's instability** — civil war and armed groups in Shan and Rakhine States have expanded meth production next door\n4. **Rohingya crisis** — over 700,000 Rohingya arrived in Cox's Bazar in 2017; traffickers exploit poor refugees as carriers\n5. **Demand** — a large domestic market of about 8.2 million users\n6. **Corruption** — weak checkpoints and bribes ease movement\n\n[flow] Main yaba route\nShan State labs (Myanmar) → Rakhine State → Naf River → Teknaf / Ukhiya → Cox's Bazar → Chattogram & Dhaka → Sylhet / India\n\n### Smuggling corridors\n| Corridor | Entry points | Main drugs | Method |\n|---|---|---|---|\n| Myanmar corridor | Teknaf, Ukhiya, Saint Martin's Island | Yaba, crystal meth (ice) | Boats across the Naf River, human \"mules\", Rohingya-linked carriers |\n| Indian corridor | Satkhira, Jashore, Cumilla, Kurigram | Phensedyl, heroin, cannabis | Porous land borders |\n| Air route | Hazrat Shahjalal International Airport | Cocaine | Couriers from Africa and South America heading to India |\n\n**Bangladesh example:** in February 2019, 102 alleged yaba traders surrendered in Teknaf — showing how central this one border town is to the trade.\n\n**Conclusion:** Bangladesh's role is shaped by its location and borders rather than by production, so control depends on border management, regional cooperation and tackling demand.",
        },
        {
          marks: 3,
          q: 'Assess the scale and impact of drug trafficking in Bangladesh.',
          points: [
            'DNC: ~8.2 million users (~5%), highest in Dhaka; cannabis ~6.1 million',
            'Yaba (meth + caffeine) — largest share of seizures',
            'New methods: social media, encrypted apps, digital payments; women & children <15 as couriers; Geneva Camp',
            'UNCTAD: ~USD 481 million lost per year; 5th globally for drug-linked money laundering',
          ],
          model:
            "Drug trafficking in Bangladesh is large in scale and has serious health, social and economic impacts.\n\n### Scale\n• **Users** — about **8.2 million** people (nearly 5% of the population) use illegal drugs, according to the Department of Narcotics Control (DNC), concentrated in Dhaka division\n• **Cannabis** — the most widely used drug, about 6.1 million users\n• **Yaba** — methamphetamine + caffeine tablets from Myanmar; the largest share of drug seizures\n\n| Drug | Main source | Notes |\n|---|---|---|\n| Yaba and crystal meth (ice) | Myanmar | Largest share of seizures; targeted by maritime forces |\n| Cannabis | India and local (Kushtia) | Most widely consumed |\n| Phensedyl and heroin | India | Smuggled across porous land borders |\n| New psychoactive substances | International | LSD, MDMA, online sale of precursor chemicals |\n\n### Changing methods\n• Social media, encrypted messaging apps and digital payments hide transactions\n• Women and children under 15 are used as couriers, often because of poverty\n• Dense urban areas such as **Geneva Camp** in Dhaka hide ringleaders\n\n### Impact\n• **Economic** — UNCTAD estimates Bangladesh loses about **USD 481 million a year** to drug trafficking, ranking **5th globally** for narcotics-linked money laundering\n• **Health and social** — addiction among youth, students and workers; crime to fund drug use; family breakdown\n• **Governance** — corruption at borders; in the 2018 anti-narcotics drive, hundreds of suspects were killed in alleged \"crossfire\", raising serious human-rights concerns\n\n**Legal response:** the Narcotics Control Act 2018 introduced the death penalty for possessing or dealing large quantities of yaba (over 200 grams).\n\n**Conclusion:** drug trafficking in Bangladesh is a public-health and governance problem as much as a crime problem, so punishment alone has not reduced it.",
        },
      ],
    },
    {
      rank: 3, t: 'cf-currency', covers: ['cf-currency', 'cf-ficn'], marks: 10,
      q: 'Counterfeit currency',
      parts: [
        {
          marks: 3,
          q: 'What is counterfeit currency? State its key characteristics.',
          points: [
            'Fake/imitation money without legal government authorization, to deceive and pass as legal tender',
            'Financial fraud and economic crime; ancient (Lydian fourrées); now advanced printing',
            'Characteristics: illegal production; intent to deceive; missing/poor security features',
          ],
          model:
            "**Counterfeit currency** is fake or imitation money produced without legal government authorization, with the intention of deceiving people and passing it off as genuine legal tender. It is a form of financial fraud and economic crime, and forged notes enter circulation through illicit networks, unsuspecting individuals and ordinary transactions.\n\n### Background\nCounterfeiting is as old as money itself — some of the earliest fakes were plated coins called **fourrées** in the Lydian civilization. Today counterfeiters use advanced printing and high-quality materials, making notes harder to detect and trace.\n\n### Key characteristics\n| Characteristic | Explanation |\n|---|---|\n| Illegal production | Made without authorization from the government or central bank |\n| Intent to deceive | Copies the look and feel of genuine notes to fool people, businesses and banks |\n| Missing security features | Security thread, watermark, micro-printing and colour-shifting ink are absent or poorly copied |\n\n**Bangladesh example:** fake Taka notes usually surge before Eid-ul-Adha, when large cash payments are made in cattle markets. Bangladesh Bank and commercial banks set up note-checking booths in cattle markets, and the Detective Branch regularly arrests gangs printing fake Tk 500 and Tk 1,000 notes in Dhaka.\n\n**Conclusion:** counterfeit currency is defined by unauthorized production plus intent to deceive, and it is detected mainly through missing security features.",
        },
        {
          marks: 4,
          q: 'How does counterfeit currency harm a national economy?',
          points: [
            'Undermines economy and financial institutions',
            'Fuels underground economy — organized crime, drugs, laundering, terrorism',
            'Reduces value of legitimate money; artificial money supply → inflation',
            'Losses for traders/individuals (no reimbursement)',
            'Erodes public trust in cash and financial system',
          ],
          model:
            "Counterfeit currency is not a victimless fraud; it damages the whole economy.\n\n| Harm | Explanation |\n|---|---|\n| Undermines the economy | Weakens financial institutions and people's livelihoods |\n| Fuels the underground economy | Finances organized crime, drug trafficking, money laundering and terrorism |\n| Reduces the value of real money | More unauthorized notes in circulation weaken the currency |\n| Raises prices | An artificial increase in the money supply can contribute to inflation |\n| Direct financial loss | Whoever receives a fake note loses its full value — banks and shops do not reimburse |\n| Erodes trust | People become reluctant to accept cash, hurting small businesses |\n\n### How it hits Bangladesh\n• **Cash-heavy economy** — most small transactions (bazaars, transport, cattle markets) are in cash, so fake notes spread easily\n• **Poor and rural people lose most** — a farmer or small trader who receives a fake Tk 1,000 note loses a day's income or more\n• **Link to other crimes** — the 2023 Dhaka case showed fake Indian rupees being used to **buy narcotics**, linking counterfeiting to drug trafficking\n• **Cross-border tension** — fake Indian notes moving through Bangladesh strain relations with India\n\n**Conclusion:** counterfeit currency threatens monetary stability and public trust, and because it funds other organized crimes, it is a security issue, not just a financial one.",
        },
        {
          marks: 3,
          q: 'Discuss the smuggling of Fake Indian Currency Notes (FICN) across the India–Bangladesh border with examples.',
          points: [
            'FICN enters India via Bangladesh, especially West Bengal; Malda as transit',
            'Networks distribute notes across India',
            '2021 Chattogram: printed in Lahore → Sri Lanka → Chattogram → India',
            '2023 Dhaka: syndicate used fake rupees to buy narcotics',
            '2025 Jhenaidah: ₹5.04 lakh bought for Tk 60,000; MoU between India and Bangladesh',
          ],
          model:
            "The India–Bangladesh border has long been associated with smuggling of **Fake Indian Currency Notes (FICN)**.\n\n### Pattern\n• Notes enter India from the Bangladesh side, mainly through **West Bengal**\n• **Malda** (West Bengal) has historically been a key transit area\n• Networks then distribute the notes across India\n• Some notes are produced outside both countries and only transit Bangladesh\n\n[flow] 2021 Chattogram case route\nPrinted in Lahore → Sri Lanka → Chattogram → Bangladesh land routes → India\n\n### Notable cases\n| Year & place | What happened | Lesson |\n|---|---|---|\n| 2021, Chattogram | Police found a transnational network moving rupees allegedly printed in Lahore through Sri Lanka and Chattogram to India | Bangladesh used as a transit country by foreign producers |\n| 2023, Dhaka | A syndicate producing fake Indian rupees in Bangladesh used them to buy narcotics and pay for smuggling | Counterfeiting linked to drug trafficking |\n| 2025, Jhenaidah | BGB arrested a man with ₹5.04 lakh in fake notes, bought for Tk 60,000, trying to re-enter India | Huge profit margin drives the trade |\n\n### Response\nIndia and Bangladesh have signed an MoU and run joint cooperation to prevent the production, smuggling and circulation of counterfeit currency; BGB and India's BSF exchange information at the border.\n\n**Conclusion:** FICN shows how a porous border, organized networks and other crimes (drugs) combine; only bilateral intelligence-sharing can tackle it.",
        },
      ],
    },
    {
      rank: 4, t: 'gold-bd', covers: ['gold-def', 'gold-bd', 'gold-world'], marks: 10,
      q: 'Gold smuggling',
      parts: [
        {
          marks: 3,
          q: 'What is gold smuggling? Why do people smuggle gold?',
          points: [
            'Illegal movement of gold across borders to avoid duties, taxes and regulations',
            'Facilitated by networks, intermediaries, corrupt officials',
            'Motives: value & portability; price/tax differences; high import duties; weak borders; demand for undeclared gold; money laundering',
          ],
          model:
            "**Gold smuggling** is the illegal movement of gold across national or international borders to avoid customs duties, taxes and regulations. It takes place through airports, land borders, seaports and informal routes, using concealment, false documentation and undeclared transport, and is facilitated by criminal networks, intermediaries and corrupt officials.\n\n### Why people smuggle gold\n| Motive | Explanation | Bangladesh angle |\n|---|---|---|\n| High value, easy portability | Very valuable yet compact | A few bars hidden on one passenger are worth crores of Taka |\n| Price and tax differences | Gold is cheaper/less taxed in some countries | Gold bought in Dubai sells at a premium in Bangladesh and India |\n| High import duties | Smugglers avoid duty to raise margins | India's high import duty creates demand for gold moved via Bangladesh |\n| Weak border controls | Gaps in monitoring | Long land border with India; busy airports |\n| Demand for undeclared gold | Buyers avoid taxes and paperwork | Informal jewellery trade |\n| Money laundering | Gold stores and moves criminal proceeds | Gold is used to settle **hundi** (informal money transfer) payments |\n\n**Conclusion:** gold smuggling is driven mainly by profit from price and duty gaps, which is why it fits rational choice theory, but it also serves money laundering — making it a financial crime as well as a customs offence.",
        },
        {
          marks: 3,
          q: 'Describe the major ways in which gold is smuggled, and the main global routes.',
          points: [
            'Airport/passenger; land border; sea routes',
            'Concealment in luggage, vehicles, cargo; false documents',
            'Informal networks: brokers, couriers, traders',
            'Routes: Africa → Dubai; UAE/Singapore → Bangladesh → India; Amazon → North America/Europe',
          ],
          model:
            "### Ways gold is smuggled\n1. **Airport and passenger smuggling** — passengers carry gold without declaring it, often hidden on the body, in shoes or in electronics\n2. **Land-border smuggling** — gold moves through unauthorized routes around checkpoints\n3. **Sea-route smuggling** — ships and boats bypass customs\n4. **Concealment** — hidden in luggage, vehicles, aircraft compartments or commercial cargo\n5. **Informal networks** — brokers, couriers, financiers and traders operating outside formal channels\n\n### Global routes\n[flow] Overall pattern\nProducing / conflict areas → Transit hubs → Refining & trading centres → Consumer markets\n\n| Route | Details |\n|---|---|\n| Africa → UAE (Dubai) | Gold from Sudan, South Sudan and DR Congo via Uganda, Rwanda, Kenya and Egypt |\n| UAE/Singapore → Bangladesh → India | Enters through Bangladeshi airports and crosses the land border to India |\n| Amazon → North America & Europe | Illegal gold from Venezuela, Brazil and Guyana |\n\nKey hubs: **Dubai**, Dhaka, Cairo and border cities. In African producers such as Sudan and DR Congo, gold also finances armed groups.\n\n**Bangladesh example:** in July 2014, about **105 kg of gold** was found hidden in a Biman aircraft at Shahjalal Airport — one of the largest seizures in the country's history, showing how aircraft compartments, not just passengers, are used.\n\n**Conclusion:** gold smuggling combines simple methods (body carriers) with sophisticated ones (cargo and aircraft concealment), moving along a chain from producers to hubs like Dubai and then to big markets like India.",
        },
        {
          marks: 4,
          q: 'Discuss gold smuggling in Bangladesh with reference to a recent case, and suggest detection and prevention measures.',
          points: [
            'Destination & transit, not producer; source Dubai and Gulf; route Middle East → BD → India',
            'HSIA main entry; Jashore–Narail highway, Benapole to India',
            'BG-148 (2 July 2026): 160 bars, 18.72 kg in cargo hold; DGFI intelligence; AVSEC, Customs',
            'Challenges: surveillance, corruption, informal markets, kingpins unidentified',
            'Measures: risk-based screening, profiling, X-ray, intelligence, financial tracing, anti-corruption, border surveillance, intelligence sharing',
          ],
          model:
            "### Bangladesh's position\n| Aspect | Details |\n|---|---|\n| Role | Destination and transit country, **not a producer** |\n| Source | Mainly Dubai, plus Saudi Arabia, Qatar, Oman and Kuwait |\n| Entry point | Hazrat Shahjalal International Airport (HSIA), Dhaka |\n| Exit route | Jashore–Narail highway and Benapole border into India |\n| Actors | Couriers, financiers, dealers and intermediaries |\n| Drivers | Price differences, import duties, demand for gold |\n\n[flow] Gold route through Bangladesh\nDubai / Gulf → HSIA Dhaka → Jashore–Narail highway → Benapole → India\n\n### Case: BG-148 (2 July 2026)\n• **Seizure:** 160 gold bars (18.720 kg) on Biman flight BG-148 from Dubai\n• **Concealment:** placed in the aircraft's cargo hold\n• **Detection:** acted on intelligence from the DGFI; AVSEC, Customs and airline security involved\n• **Legal action:** gold handed to Customs; case filed at Bimanbandar Police Station\n• **Lesson:** cargo-hold concealment needs insider access — showing the state–crime nexus and why kingpins are rarely identified\n\n### Challenges\nWeak border surveillance, corruption among staff, informal markets and the difficulty of reaching financiers behind the couriers.\n\n### Detection and prevention\n1. Risk-based customs screening and passenger/baggage profiling\n2. X-ray and advanced scanning of baggage and cargo\n3. Intelligence-led investigations (as in BG-148)\n4. Financial investigation of who funds and buys the gold (Money Laundering Prevention Act 2012)\n5. Anti-corruption checks and rotation of airport and customs staff\n6. Stronger surveillance at Benapole and other border points\n7. Intelligence sharing with the UAE and India\n\n**Conclusion:** Bangladesh is a corridor for Gulf gold heading to India; arresting couriers alone is not enough — financiers and corrupt insiders must be pursued.",
        },
      ],
    },
    {
      rank: 7, t: 'sm-theory', covers: ['sm-def', 'sm-theory'], marks: 10,
      q: 'Smuggling: concept and theories',
      parts: [
        {
          marks: 2,
          q: 'Define smuggling and mention its major forms.',
          points: [
            'Illegal movement of goods, substances, information or people across a border / into restricted places',
            'Gallien & Weigand (2021); Campbell (2022)',
            'From German "smuggeln" / Dutch "smokkelen"; Edward I\'s customs system 1275',
            'Forms: human, arms, drugs, gold, wildlife, cultural heritage',
          ],
          model:
            "**Smuggling** is the illegal transportation of goods, substances, information or people across a border or into restricted places in violation of laws and regulations. Gallien and Weigand (2021) define it as \"the purposeful movement of people or goods across a border in violation of the relevant legal framework\", and Campbell (2022) adds that it is done \"to bypass laws, regulations, or taxes\".\n\n**Origin:** the word comes from German *smuggeln* / Dutch *smokkelen* (\"to transport secretly\"). It became a recognized problem after **King Edward I** set up England's national customs system in **1275**; medieval smugglers moved highly taxed wool and hides.\n\n**Six major forms:** human, arms, drugs, gold, wildlife and cultural heritage smuggling — all present in Bangladesh (e.g. yaba from Myanmar, gold from Dubai, migrants to Italy).",
        },
        {
          marks: 5,
          q: 'Explain the theoretical explanations of smuggling.',
          points: [
            'Rational Choice (Cornish & Clarke, 1986): profit vs risk and punishment',
            'Routine Activity (Cohen & Felson, 1979): motivated offender + suitable target + lack of guardianship',
            'Push–Pull (Lee, 1966): poverty, unemployment vs profit, demand',
            'Network (Granovetter, 1973): suppliers, transporters, brokers, buyers; trust',
            'State–Crime Nexus (Bayart, Ellis & Hibou, 1999): officials participate/protect/benefit',
          ],
          model:
            "The lecture presents five theories that explain smuggling.\n\n| Theory | Proponent(s) | Core idea | Applied to Bangladesh |\n|---|---|---|---|\n| **Rational Choice Theory** | Cornish & Clarke (1986) | Smuggling is a calculated decision; offenders weigh profit against risk and punishment, and act when benefits exceed costs | Couriers carry gold from Dubai because the price/duty gap makes each bar profitable and the chance of being caught seems low |\n| **Routine Activity Theory** | Cohen & Felson (1979) | Crime occurs when a motivated offender, a suitable target and a lack of capable guardianship converge | Yaba crosses the poorly guarded Naf River at night — weak surveillance = no capable guardian |\n| **Push–Pull Theory** | Everett S. Lee (1966) | Push factors (poverty, unemployment, inequality) interact with pull factors (profit, demand, opportunity) | Unemployment in rural Bangladesh pushes young men to irregular migration; jobs in Italy or Malaysia pull them |\n| **Network Theory** | Mark S. Granovetter (1973) | Smuggling runs through social and criminal networks of suppliers, transporters, brokers and buyers, bound by trust and information | Local *dalals* (brokers) connect migrants to agents abroad; gold moves through financier–courier–dealer chains |\n| **State–Crime Nexus** | Bayart, Ellis & Hibou (1999) | State officials may participate in, protect or benefit from illegal activities; corruption and weak governance create illicit markets | The 2004 Chattogram arms haul involved state officials; cases of insiders in airport gold smuggling |\n\n**Evaluation:** rational choice and routine activity explain individual decisions and opportunities and suggest situational prevention (more guardians, higher risk). Push–pull explains why people get involved. Network theory and the state–crime nexus explain why smuggling **persists** even after arrests — networks replace couriers and corrupt protection shields leaders.",
        },
        {
          marks: 3,
          q: 'Which theory best explains smuggling in Bangladesh? Justify with an example.',
          points: [
            'No single theory is enough; combine',
            'Gold: price/duty gap (RCT), airport gaps (RAT), Dubai–Dhaka–India networks (Network)',
            'BG-148 cargo hold → insiders → State–Crime Nexus explains persistence',
            'Yaba: poverty in border areas (push) + demand (pull) + Naf River (weak guardianship)',
          ],
          model:
            "No single theory fully explains smuggling in Bangladesh, but the **State–Crime Nexus**, combined with **Network Theory**, explains it best — because it explains why smuggling continues despite strong laws and frequent arrests.\n\n### Justification with Bangladesh cases\n| Case | Rational choice / routine activity explains… | Network & state–crime nexus explain… |\n|---|---|---|\n| Gold (BG-148, 2026) | Price/duty gap makes it profitable; busy airport gives opportunity | 160 bars in an aircraft's cargo hold needs insiders; financiers and kingpins stay hidden behind couriers |\n| Yaba (Teknaf) | Huge demand and weak riverine guardianship | Rohingya-linked carrier networks; some local influential people reportedly protected traders; after the 2019 surrender of 102 traders, the trade continued |\n| Arms (Chattogram 2004) | — | State intelligence officials and senior politicians were convicted in 2014 for their role |\n\n### Why the other theories are not enough alone\n• Rational choice and routine activity treat the smuggler as an isolated individual and ignore structure\n• Push–pull explains motivation but cannot explain arms smuggling, which is about power, not migration or poverty\n\n**Conclusion:** the state–crime nexus best explains the persistence of smuggling in Bangladesh, while rational choice and routine activity remain useful for designing prevention (more guardians at borders, higher risk of detection).",
        },
      ],
    },
    {
      rank: 5, t: 'arms-def', covers: ['arms-def', 'arms-threat'], marks: 10,
      q: 'Arms smuggling: concept, drivers and threats',
      parts: [
        {
          marks: 3,
          q: 'What is arms smuggling? Why is the illicit arms trade considered unique?',
          points: [
            'Gunrunning: illicit cross-border transfer, acquisition or diversion of firearms, ammunition, explosives',
            'USD 1.7–3.5 billion per year; mainly SALW (mass-produced, portable, concealable)',
            'Unique: used for power, territory, challenging national security — not mainly profit',
            'Arms non-state actors: separatists, syndicates, terrorists, cartels, pirates',
          ],
          model:
            "**Arms smuggling**, also called **gunrunning**, is the illicit cross-border transfer, acquisition or diversion of firearms, ammunition and explosives. The illicit arms trade is estimated at **USD 1.7–3.5 billion a year** and mainly involves **small arms and light weapons (SALW)**, because they are mass-produced, highly portable and easily concealed.\n\n### Why the illicit arms trade is unique\n| Drugs / human smuggling | Arms smuggling |\n|---|---|\n| Driven mainly by economic profit | Arms are used to exercise **power**, secure **territory** and challenge **national security** |\n| Harm is mostly to individuals and society | Directly threatens the state's monopoly of force |\n| Consumed once | Weapons last for decades and circulate between conflicts |\n\nArms smuggling increases violence among non-state actors — separatists, criminal syndicates, terrorists, drug cartels and pirates — and hinders the socio-economic and political development of states.\n\n**Bangladesh example:** the **2004 Chattogram arms haul** — ten truckloads of weapons and ammunition seized at the CUFL jetty on 1–2 April 2004, reportedly intended for the Indian insurgent group ULFA. It showed that arms smuggling through Bangladesh served insurgency and regional power struggles, not just profit.\n\n**Conclusion:** arms smuggling is distinct because weapons are tools of power; this makes it a national-security issue, not only a criminal-justice one.",
        },
        {
          marks: 3,
          q: 'What are the key drivers of arms smuggling?',
          points: [
            'High profitability',
            'Conflicts & political instability (demand)',
            'Weak/porous borders',
            'Corruption (diversion, illegal transactions)',
            'Demand from gangs, cartels, armed groups',
            'Weak law enforcement; diversion from legal markets',
          ],
          model:
            "The lecture identifies seven drivers of arms smuggling.\n\n| Driver | Explanation | Bangladesh / regional example |\n|---|---|---|\n| High profitability | Illicit arms generate large profits for criminal networks | Local dealers resell smuggled pistols at a high markup |\n| Conflict and political instability | Create strong demand for weapons | Conflict in Myanmar's Rakhine State and armed groups near the border |\n| Weak border controls | Porous borders ease illegal movement | Long land and riverine borders with India and Myanmar |\n| Corruption | Corrupt officials enable trafficking, diversion and illegal deals | The 2004 Chattogram arms haul involved officials of the state intelligence agency |\n| Demand from criminal groups | Gangs, cartels and armed groups seek weapons | Gangs, extortion groups and armed groups in the Rohingya camps |\n| Weak law enforcement | Limited capacity to detect, investigate and prosecute | Few cases trace weapons back to their source |\n| Diversion from legal markets | Legal weapons leak into illicit hands | Licensed weapons misused or sold on |\n\n**Analysis:** these drivers reinforce each other — conflict creates demand, weak borders and corruption supply the opportunity (routine activity theory), and profit provides the motive (rational choice theory).\n\n**Conclusion:** reducing arms smuggling requires tackling both demand (conflict, gangs) and supply (borders, corruption, diversion).",
        },
        {
          marks: 4,
          q: 'Discuss the threats posed by arms smuggling, with reference to Bangladesh.',
          points: [
            'War & conflict: prolongs conflicts, strengthens armed groups — Sahel gold-mining areas',
            'Organized crime: homicide, robbery, kidnapping, extortion — Mexican cartels',
            'Terrorism: arms for attacks and revenue — Paris 2015',
            'Bangladesh: arms via Myanmar- and India-linked networks; Chattogram, Cox\'s Bazar, south-east; long land/sea borders',
            'Threats in BD: gang violence, organized crime, terrorism, political violence',
          ],
          model:
            "Arms smuggling poses three major threats.\n\n| Threat | How smuggled arms contribute | Example |\n|---|---|---|\n| War and armed conflict | Fuel and prolong conflicts, strengthen armed groups, undermine state authority, cause displacement | Illicit firearms around gold-mining areas in the Sahel |\n| Organized crime | Enable homicide, robbery, kidnapping, extortion and trafficking; let groups control territory | Mexican cartels use illicit guns to fight rivals and protect drug routes |\n| Terrorism | Extremists obtain weapons for attacks; arms smuggling can also finance them | Firearms trafficked through illicit networks used in the 2015 Paris attacks |\n\n### Bangladesh perspective\n| Aspect | Context |\n|---|---|\n| Sources | Networks connected to Myanmar and India, especially in border regions |\n| Border vulnerability | Long land and maritime borders are hard to control |\n| Hotspots | Chattogram, Cox's Bazar and the south-eastern border |\n| Supply chain | Intermediaries and illicit dealers supply criminal groups |\n| Threats | Gang violence, organized crime, terrorism, political violence |\n\n### Bangladesh examples\n• **Terrorism** — investigators reported that weapons used in the **2016 Holey Artisan Bakery attack** in Dhaka were smuggled in through the Chapainawabganj border\n• **Insurgency** — the **2004 Chattogram arms haul** of ten truckloads, linked to ULFA\n• **Local manufacture** — law enforcement has repeatedly raided illegal gun-making workshops in the hills of **Maheshkhali**, Cox's Bazar\n• **Political violence** — illegal arms recovery drives are routinely launched before national elections\n\n**Conclusion:** in Bangladesh, smuggled arms connect organized crime, terrorism and political violence, so arms control is central to national security.",
        },
      ],
    },
    {
      rank: 8, t: 'ht-bd', covers: ['ht-bd', 'ht-history'], marks: 10,
      q: 'Human trafficking in Bangladesh',
      parts: [
        {
          marks: 3,
          q: 'Why is Bangladesh called a source, transit and destination country for human trafficking? What drives trafficking?',
          points: [
            'Source (people recruited abroad), transit (routes through BD), destination (internal exploitation)',
            'Cross-border and internal; men, women, children; urban, rural, migration settings',
            'Drivers: unsafe/irregular migration; poverty & unemployment; disasters & displacement; organized networks',
          ],
          model:
            "Bangladesh is described as a **source, transit and destination country** for human trafficking, with both cross-border and internal trafficking affecting men, women and children in urban, rural and migration settings.\n\n| Role | Meaning | Bangladesh example |\n|---|---|---|\n| Source | Bangladeshis are recruited and trafficked abroad | Workers trafficked to Malaysia, the Gulf, Libya and Cambodian scam compounds; women to India |\n| Transit | Victims from elsewhere move through Bangladesh | Rohingya from Myanmar moved through Bangladesh towards Malaysia by sea |\n| Destination | Exploitation inside Bangladesh | Internal trafficking of girls into brothels such as Daulatdia; forced and child labour |\n\n### Drivers\n1. **Unsafe and irregular migration** — expensive recruitment through unregistered *dalals* (brokers)\n2. **Poverty and unemployment** — especially among rural youth\n3. **Natural disasters and displacement** — cyclones, river erosion and climate change push families into vulnerability\n4. **Organized criminal networks** — recruiters, transporters and exploiters working across borders\n5. **Corruption** — documents and clearances obtained through bribes\n\n**Conclusion:** Bangladesh's three roles show that trafficking is driven by vulnerability at home and organized networks abroad, so prevention must start with safe migration and poverty reduction.",
        },
        {
          marks: 4,
          q: 'Describe the major international trafficking routes from Bangladesh, including the recent trend of trafficking to Cambodia.',
          points: [
            'Seven air destinations: Italy, Serbia/Macedonia, Russia, USA, Canada, Australia, Cambodia/Laos; visa → third country',
            'USA: BD → Brazil → Mexico; Canada via Nepal; Russia via Saudi Arabia',
            'Italy: Middle East (via Nepal/India/Sri Lanka) → Egypt/Tunisia/Libya → Italy',
            'Sea: BD → Malaysia → Indonesia → Australia; BD → Myanmar → Thailand → Malaysia',
            'Cambodia scam compounds: 2,408 (Jan–Apr), >15,000 in 2025; $30–36 e-visa; no embassy',
          ],
          model:
            "Seven international destinations are currently active through air routes: **Italy, Serbia/Macedonia, Russia, the USA, Canada, Australia and Cambodia/Laos.** Traffickers first obtain tourist, education or employment visas, then move people through a third country to avoid surveillance by the destination country.\n\n| Destination | Route used |\n|---|---|\n| USA | Bangladesh → Brazil → through Central America and Mexico → US border |\n| Canada | Via a third country such as Nepal |\n| Italy (most complex) | Bangladesh → Middle East (via Nepal, India or Sri Lanka) → Egypt, Tunisia or Libya → by sea to Italy |\n| Australia | By sea: Bangladesh → Malaysia → Indonesia |\n| Russia | Via Saudi Arabia |\n| Maritime (CID) | Bangladesh → Malaysia → Indonesia → Australia; Bangladesh → Myanmar → Thailand → Malaysia |\n\n[flow] The Italy route\nBangladesh → Middle East → Libya / Egypt / Tunisia → Mediterranean → Italy\n\n### New trend: forced scamming in Cambodia\n• 2,408 Bangladeshis travelled to Cambodia between January and April; over 15,000 went with BMET clearance in 2025\n• Some were sold to **cyber-scam compounds**, forced to defraud people online\n• A $30–36 e-visa makes travel easy, and Bangladesh has **no embassy in Cambodia** (matters are handled from Bangkok), so victims struggle to get help\n\n### Other Bangladesh examples\n• **Libya, May 2020** — 26 Bangladeshi migrants were killed by traffickers in Mizdah on the route to Italy\n• **2015 Andaman Sea crisis** — mass graves of migrants found in jungle camps on the Thailand–Malaysia border\n\n**Conclusion:** routes are long, multi-country and increasingly use legal visas, which makes trafficking hard to detect at Bangladesh's own borders.",
        },
        {
          marks: 3,
          q: 'Identify the legal framework against trafficking in Bangladesh and explain why enforcement remains weak.',
          points: [
            'Constitution; PSHTA 2012; Rules 2017; National Anti-HT Authority Rules 2017; Manob Pachar Tohobil Act 2017',
            'International: UNTOC, Trafficking Protocol, Smuggling of Migrants Protocol',
            'Penalty: death, life, or ≥7 years + ≥Tk 5 lakh; charges in 90, trial in 180 working days',
            'Weakness: slow investigations; settlements for money; impunity → reoffending',
          ],
          model:
            "### Legal framework\n| Law / instrument | Key points |\n|---|---|\n| Constitution of Bangladesh | Prohibits forced labour (Art. 34) |\n| Prevention and Suppression of Human Trafficking Act 2012 | Main law; defines trafficking; organized trafficking punishable by **death, life imprisonment, or at least 7 years + fine of at least Tk 5 lakh**; charges within **90** and trial within **180** working days |\n| PSHT Rules 2017 & National Anti-Human Trafficking Authority Rules 2017 | Implementation and coordination |\n| Manob Pachar Tohobil Act 2017 | Fund for victims' support |\n| Overseas Employment and Migrants Act 2013 | Regulates recruitment agencies and migration |\n| UNTOC 2000 + Palermo Protocols | International framework on trafficking and migrant smuggling |\n\nIn 2020, the government set up **seven anti-human-trafficking tribunals** to speed up trials.\n\n### Why enforcement is weak\n1. **Slow investigations** — trials rarely finish within 90/180 days\n2. **Money settlements** — cases are \"settled\" out of court in exchange for money\n3. **Impunity** — traffickers escape punishment, become emboldened and reoffend\n4. **Victims' fear** — threats, shame and lack of witness protection\n5. **Corruption** — recruiters work with corrupt officials to obtain documents\n6. **Transnational evidence** — crimes happen abroad, where Bangladesh has little reach\n\n**Bangladesh example:** in 2021 a court in **Kuwait** convicted Bangladeshi MP Kazi Shahid Islam (Papul) of human trafficking and money laundering linked to recruiting workers — showing how powerful people can be involved and how justice sometimes comes only from abroad.\n\n**Conclusion:** Bangladesh's laws are strong on paper, but corruption, slow investigation and settlements prevent enforcement; the gap is implementation, not legislation.",
        },
      ],
    },
    {
      rank: 6, t: 'cf-goods', covers: ['cf-goods'], marks: 10,
      q: 'Types of counterfeiting',
      parts: [
        {
          marks: 4,
          q: 'Briefly explain the common types of counterfeiting.',
          points: [
            'Currency: fake notes and coins',
            'Consumer goods: designer clothes, watches, bags, shoes',
            'Electronics & parts: blacktopping, e-waste repurposing, relabeling, defective remanufacturing',
            'Health & safety: medicines, vaccines, devices, sanitizers',
            'Documents: passports, IDs, cheques, deeds, certificates; coins: casting, striking, plating, clipping',
          ],
          model:
            "Counterfeiting is the unauthorized imitation of a genuine product, document or currency in order to deceive. The lecture covers six main types.\n\n| Type | What is copied | Common techniques / risks |\n|---|---|---|\n| Currency | Banknotes and coins | Printing fake notes without security features; plated coins |\n| Consumer goods | Designer clothing, watches, handbags, shoes, cosmetics | Fake logos and packaging sold as originals |\n| Electronics and parts | Chips, capacitors, chargers, batteries, auto/aviation parts | **Blacktopping** (erasing and re-marking chips), e-waste repurposing, relabeling/grade spoofing, defective remanufacturing |\n| Health and safety items | Medicines, vaccines, medical devices, sanitizers, food | Wrong, toxic or no active ingredients — treatment failure, resistance, death |\n| Documents | Passports, IDs, cheques, deeds, wills, certificates | Reproduced from scratch to bypass legal controls |\n| Coins | Metal coins | Casting, striking, plating/coating, clipping/shaving, bi-metallic forgery |\n\n### Bangladesh examples\n• **Consumer goods** — cosmetics and toiletries with copied brand names and **forged BSTI seals** made in hidden factories in Dhaka (e.g. Chawkbazar area) and Chattogram\n• **Electronics** — cheap Chinese parts smuggled in and relabelled with fake brand logos\n• **Health items** — the Detective Branch has raided underground factories in Mohammadpur making fake syrups and children's medicines; in 2009, contaminated paracetamol syrup killed at least two dozen children\n• **Documents** — fake passports, NIDs and job certificates used in labour-migration fraud and trafficking\n\n**Conclusion:** counterfeiting ranges from luxury goods to life-saving medicines; the health and safety category is the most dangerous because it kills.",
        },
        {
          marks: 3,
          q: 'Differentiate counterfeit goods, dupes/knockoffs and pirated goods. How does trademark counterfeiting differ from infringement?',
          points: [
            'Counterfeit: illegally use registered trademark/logo/brand',
            'Dupes/knockoffs: copy design without the mark',
            'Pirated: copies of copyrighted music, films, software',
            'Trademark counterfeiting: identical/indistinguishable mark — intentional',
            'Infringement: similar mark causing confusion',
          ],
          model:
            "| Term | Definition | Uses the brand's trademark? | Example |\n|---|---|---|---|\n| **Counterfeit goods** | Products that illegally use a registered trademark, logo or brand name to pass as the original | Yes | A fake branded shampoo sold as genuine with a forged BSTI seal |\n| **Dupes / knockoffs** | Items that copy the physical design or style without using the protected mark | No | A handbag copying a luxury design but with a different name |\n| **Pirated goods** | Unauthorized copies of copyrighted material | N/A — copyright, not trademark | Pirated films, music or software sold on CDs or online |\n\n### Trademark counterfeiting vs trademark infringement\n| Basis | Trademark counterfeiting | Trademark infringement |\n|---|---|---|\n| Mark used | Identical or virtually indistinguishable from the registered mark | Similar mark |\n| Intention | Deliberate — designed to trick buyers | May be unintentional |\n| Effect | Buyer believes it is the genuine product | Confusion about the product's source |\n| Seriousness | Severe, intentional form of infringement | Ordinary civil wrong |\n\n**Bangladesh law:** the **Trademarks Act 2009** provides civil and criminal remedies, and **Penal Code s.483** punishes counterfeiting a trade or property mark with up to 2 years, a fine, or both.\n\n**Conclusion:** all counterfeits infringe trademarks, but not all infringements are counterfeits — counterfeiting is the deliberate, identical copy.",
        },
        {
          marks: 3,
          q: 'How can consumers identify counterfeit goods and protect themselves?',
          points: [
            'Signs: unusually low prices; poor packaging/spelling; missing serial/batch numbers; untrusted sellers',
            'Buy from authorized sources',
            'Inspect packaging, seals, batch numbers',
            'Report side effects or lack of effect; verification tools (TraceChainBD QR)',
          ],
          model:
            "### Warning signs of counterfeit goods\n| Sign | What to look for |\n|---|---|\n| Unusually low price | Far below market value or high-pressure discounts |\n| Poor packaging | Spelling mistakes, blurry logos, flimsy materials, inconsistent fonts |\n| Missing details | No serial number, batch code, expiry date, warranty or customer-support contact |\n| Untrusted sellers | Unverified Facebook pages, street vendors, unauthorized online stores |\n\n### How consumers can protect themselves\n1. Buy medicines and safety items only from licensed pharmacies, hospitals or authorized dealers\n2. Check packaging for errors, broken seals, missing batch numbers or unusual colour and consistency\n3. Check the BSTI certification mark and verify the product where possible\n4. Report unusual side effects or lack of effect to health authorities\n5. Use verification tools — e.g. **TraceChainBD**, which uses blockchain and IoT so buyers can verify products by scanning an unalterable QR code\n6. Complain to the **Directorate of National Consumer Rights Protection (DNCRP)** under the Consumers' Right Protection Act 2009\n\n**Bangladesh context:** with up to 40% of goods in local markets possibly counterfeit or adulterated, and fake products sold widely through Facebook pages, consumer awareness is a key line of defence.\n\n**Conclusion:** consumers can reduce risk through careful buying and reporting, but awareness must be backed by regulatory enforcement.",
        },
      ],
    },
    {
      rank: 11, t: 'dt-syndicates', covers: ['dt-syndicates', 'x-corruption'], marks: 10,
      q: 'Drug syndicates',
      parts: [
        {
          marks: 3,
          q: 'What are the key economic objectives of drug syndicates?',
          points: [
            'Profit maximization — controlling production, trafficking, distribution',
            'Wealth integration — laundering via businesses, real estate, offshore accounts',
            'Market expansion — new consumers, synthetic drugs',
          ],
          model:
            "Drug syndicates are organized criminal groups that control the production, trafficking and distribution of illicit drugs. Their economic objectives are:\n\n| Objective | Explanation | Example |\n|---|---|---|\n| **Profit maximization** | Generate immense revenue by controlling production, trafficking and distribution | Yaba made cheaply in Myanmar sells at many times the cost in Bangladesh |\n| **Wealth integration** | Launder cash through legitimate businesses, real estate and offshore accounts | Drug money invested in land, transport businesses or shops |\n| **Market expansion** | Develop new consumer bases and introduce synthetic drugs | Shift from heroin and Phensedyl to yaba and now crystal meth (ice) among Bangladeshi youth |\n\n**Bangladesh link:** UNCTAD estimates Bangladesh loses about USD 481 million a year to drug trafficking and ranks 5th globally for drug-linked money laundering — evidence of large-scale wealth integration.\n\n**Conclusion:** drug syndicates operate like businesses — maximizing profit, laundering it, and growing their market.",
        },
        {
          marks: 4,
          q: 'Explain the political and social objectives of drug syndicates. Why do they threaten the state?',
          points: [
            'Systemic corruption: bribe/intimidate/blackmail police, customs, politicians, judges → impunity',
            'Territorial control: narco-states, lawless zones',
            'Community co-optation: fund infrastructure, healthcare, services → loyalty, shield leaders',
            'Threat: replace state authority, capture institutions; link to State–Crime Nexus',
          ],
          model:
            "Beyond money, drug syndicates seek power.\n\n| Objective | Explanation | Example |\n|---|---|---|\n| **Systemic corruption** | Bribe, intimidate or blackmail police, customs officials, politicians and judges to secure impunity | Reported involvement of local influential people in the Teknaf yaba trade |\n| **Territorial control** | Govern areas as \"narco-states\" or lawless zones free from state control | United Wa State Army territory in Myanmar's Shan State |\n| **Community co-optation** | Fund local infrastructure, healthcare or services to buy loyalty, so communities shield leaders | Cartel-funded services in parts of Mexico and Colombia |\n\n### Why this threatens the state\n1. **Captures institutions** — police, customs and courts serve the syndicate instead of the public\n2. **Replaces state authority** — syndicates collect \"taxes\", provide services and enforce their own rules\n3. **Undermines legitimacy** — citizens lose trust in the state when criminals are protected\n4. **Fuels violence** — turf wars and attacks on officials\n\nThis is the **state–crime nexus** (Bayart, Ellis & Hibou, 1999) in practice.\n\n**Bangladesh angle:** Myanmar's armed groups controlling drug-producing territory directly affect Bangladesh's south-eastern border, and the 2018 anti-narcotics drive showed the state struggling to control networks protected by local power.\n\n**Conclusion:** drug syndicates are political actors as well as businesses, which is why drug control cannot be separated from anti-corruption.",
        },
        {
          marks: 3,
          q: 'Name and briefly describe major drug syndicates around the world.',
          points: [
            'Mexico: Sinaloa, CJNG — fentanyl, North American trade',
            'Colombia: Medellín, Cali — cocaine; TdA (Venezuela); MS-13 (LA → Central America)',
            'Asia: Golden Triangle — UWSA; Triads, Yakuza',
            'Europe: Albanian mafia, \'Ndrangheta, Russian syndicates — ports, heroin/cocaine, political ties',
          ],
          model:
            "| Region | Syndicate | Activities and features |\n|---|---|---|\n| Mexico | **Sinaloa Cartel**, **Jalisco New Generation (CJNG)** | Dominate the North American drug trade; major producers and traffickers of fentanyl |\n| Colombia | **Medellín** and **Cali** cartels (former) | Key to cocaine production and export |\n| Venezuela | **Tren de Aragua (TdA)** | Transnational, with cells in Colombia, Peru and Chile |\n| USA → Central America | **MS-13** | Originated in Los Angeles; spread to Central America through deportations |\n| Southeast Asia (Golden Triangle) | **United Wa State Army**, Shan State Army, Kachin Independence Army | Ethnic armed groups producing opium and methamphetamine |\n| East Asia | **Triads** (China), **Yakuza** (Japan) | Trafficking, money laundering and distribution |\n| Europe | **Albanian mafia**, Italy's **'Ndrangheta**, Russian syndicates | Control ports, heroin routes and cocaine markets; deep political and financial ties |\n\n**Bangladesh relevance:** the Golden Triangle groups — especially in Myanmar's Shan and Rakhine States — are the source of the yaba and crystal meth entering Bangladesh, while international syndicates use Dhaka airport to move cocaine from Africa and South America towards India.\n\n**Conclusion:** drug syndicates are global, but the ones that matter most for Bangladesh are the ethnic armed groups of the Golden Triangle.",
        },
      ],
    },
    {
      rank: 10, t: 'dt-def', covers: ['dt-def', 'dt-why', 'dt-scenario'], marks: 10,
      q: 'Drug trafficking: concept, drivers and global scenario',
      parts: [
        {
          marks: 2,
          q: 'Define drug trafficking and state its key activities.',
          points: [
            'UN: global illicit trade — cultivation, manufacture, distribution and sale of prohibited substances',
            'Cultivation & production; transportation & smuggling; distribution & sale',
          ],
          model:
            "**Drug trafficking** is \"a global illicit trade involving the cultivation, manufacture, distribution and sale of substances which are subject to drug prohibition laws\" (United Nations).\n\n### Key activities\n| Activity | Meaning | Bangladesh example |\n|---|---|---|\n| Cultivation and production | Growing or making illegal drugs (cocaine, heroin, methamphetamine, fentanyl) | Cannabis grown in Kushtia's \"Golden Village\" |\n| Transportation and smuggling | Moving large amounts across borders | Yaba carried across the Naf River from Myanmar |\n| Distribution and sale | Supplying wholesalers, dealers and users | Street-level sale in Dhaka hotspots such as Geneva Camp |",
        },
        {
          marks: 4,
          q: 'Why do smugglers engage in drug and contraband smuggling?',
          points: [
            'Huge profit: cocaine ~$2,000/kg vs up to $200,000/kg in Australia',
            'Dodging high taxes: untaxed cigarettes >$8 million per container',
            'High demand & addiction: yaba ~$60 billion East Asian market',
            'Weak borders & corruption: SE Asian river borders, bribes',
          ],
          model:
            "The lecture gives four reasons why smugglers engage in drug and contraband smuggling.\n\n| Driver | Explanation | Example |\n|---|---|---|\n| **Huge profit** | Prohibition makes prices soar across borders | Cocaine ~$2,000/kg in South America vs up to $200,000/kg in Australia |\n| **Dodging high taxes** | High taxes on legal goods create illegal markets | Untaxed cigarettes into Europe earn over $8 million per container, with lower jail risk than drugs |\n| **High demand and addiction** | Addicted buyers pay whatever the price or law | Myanmar's cheap yaba fuels an estimated $60 billion East Asian market |\n| **Weak borders and corruption** | Low-security borders and big bribes make smuggling routine | Hard-to-patrol river borders in Southeast Asia |\n\n[chart] Price of 1 kg of cocaine (US$) — the \"huge profit\" driver\nSouth America | 2000 | $2,000\nAustralia | 200000 | $200,000\n\n### Bangladesh application\n• **Profit** — a yaba tablet costing very little to produce in Myanmar sells for many times more in Dhaka\n• **Demand** — about 8.2 million drug users create a large, reliable market\n• **Weak borders** — 105 entry points across 18 districts; the Naf River is hard to patrol\n\n**Theory link:** these drivers fit rational choice theory — smugglers weigh huge profit against low risk. As the lecture puts it, smugglers and cartels care about money, not human lives.",
        },
        {
          marks: 4,
          q: 'Compare the narcotics scenario in the developing and developed world.',
          points: [
            'Developing: production & transit hubs (opium: Afghanistan, Myanmar; cocaine: Colombia, Peru, Bolivia; cannabis: Morocco; meth: Myanmar, Nigeria)',
            'Developing: corruption & cartel violence; punitive response; stigma (moral failing)',
            'Developed: high demand & profits; medicalized approach (rehab, harm reduction, substitution therapy)',
            'Developed: synthetic shift — prescription opioids, synthetic stimulants, cocaine',
            'Supply chain: produced in developing, consumed in developed',
          ],
          model:
            "| Basis | Developing world | Developed world |\n|---|---|---|\n| Role in the trade | Production zones and trafficking corridors | Main consumer markets with high demand |\n| Examples | Opium (Afghanistan, Myanmar), cocaine (Colombia, Peru, Bolivia), cannabis/hashish (Morocco, Afghanistan), methamphetamine (Myanmar, Nigeria) | USA, Europe, Australia |\n| Effects | Local corruption, cartel violence, weak governance | Massive profits flow to trafficking networks |\n| State response | **Punitive** — imprisonment, because of weak healthcare and limited funds | **Medicalized** — residential rehab, harm reduction, opioid substitution therapy |\n| Social view | Drug use as a personal moral failing; strong stigma | Drug use increasingly seen as a chronic health disorder |\n| Drug trends | Plant-based drugs and cheap synthetics | Prescription opioids, synthetic stimulants, cocaine |\n\n[flow] Global drug supply chain\nProduced in the developing world → Smuggled by sea, air, tunnels, dark web → Consumed in the developed world\n\n### Bangladesh fits the developing-world pattern\n• **Transit corridor** for Golden Triangle drugs\n• **Punitive approach** — the Narcotics Control Act 2018 allows the death penalty for large yaba quantities, and the 2018 anti-drug drive relied on force\n• **Limited treatment** — few public rehabilitation centres compared with the number of users\n• **Stigma** — addiction often treated as a moral failing rather than a health condition\n\n**Conclusion:** the developing world bears the costs of production and transit while the developed world provides the demand; Bangladesh would benefit from adding public-health measures to punishment.",
        },
      ],
    },
    {
      rank: 9, t: 'ht-policy', covers: ['ht-policy', 'ht-gaps'], marks: 10,
      q: 'Responses to human trafficking',
      parts: [
        {
          marks: 3,
          q: 'Why is stricter border control alone not enough to stop trafficking? What harm-reduction strategies have been used?',
          points: [
            'Most sexual-exploitation trafficking is short-distance; many victims travel voluntarily at first',
            'Deadly side effects: US–Mexico border >300 deaths/year since 2000 (Guerette, 2007)',
            'Harm reduction: education campaigns; training & life-saving equipment; search & rescue; lateral repatriation',
            'Transit countries (Perrin, 2010): check documents, spot high-risk, protect, prosecute',
          ],
          model:
            "The most common response to trafficking is **stricter border control** — fences, more security and targeting smuggling routes. The lecture shows its serious limits.\n\n### Limits of border control\n1. **Short distances** — most trafficking for sexual exploitation happens over short distances, often within a country\n2. **Voluntary start** — many victims travel voluntarily and legally at first, so they look like ordinary travellers\n3. **Deadly side effects** — tougher borders push migrants onto dangerous routes; over **300 migrant deaths a year** have been recorded on the US–Mexico border since 2000 (Guerette, 2007)\n4. **Legal documents** — victims often travel on genuine visas\n\n### Harm-reduction strategies\n| Strategy | Purpose |\n|---|---|\n| Educational campaigns | Warn migrants of the risks |\n| Training and life-saving equipment for border agents | Rescue migrants in distress |\n| Search-and-rescue teams | Find migrants lost on dangerous routes |\n| Lateral repatriation | Return migrants to safer border areas |\n\nThese saved lives, though the overall death rate did not fall significantly (Guerette, 2007). Transit countries can also help by checking documents, spotting high-risk people, protecting victims and prosecuting traffickers (Perrin, 2010).\n\n**Bangladesh angle:** most Bangladeshi victims leave legally through airports with visas, so border control at home cannot stop them; awareness campaigns in high-risk districts and checks on BMET clearances are more effective.",
        },
        {
          marks: 4,
          q: 'Compare the Swedish, Dutch and Finnish models of prostitution policy.',
          points: [
            'Swedish (1999): male violence against women; criminalize buyers; street prostitution fell, indoor/online rose',
            'Dutch (2000): brothel ban lifted; licensed voluntary prostitution; fewer undocumented, but trafficking behind legal façades (Daalder, 2007)',
            'Finland: offence only if the person is trafficked/exploited; clients can\'t know; few report (Farley et al., 2009)',
          ],
          model:
            "Countries regulate prostitution differently, partly to reduce trafficking for sexual exploitation.\n\n| Model | Rule | Aim | Result |\n|---|---|---|---|\n| **Swedish (since 1999)** | Buying sex is a crime; selling is not | Treat prostitution as male violence against women; reduce demand | Street prostitution fell, but indoor and online sex work grew |\n| **Dutch (since 2000)** | Brothel ban lifted; voluntary adult prostitution legal under strict licensing | Regulate and separate voluntary sex work from trafficking | Fewer undocumented workers, but pimps and trafficking continue behind legal façades (Daalder, 2007) |\n| **Finnish (mixed)** | Buying sex is an offence only if the person is trafficked or exploited | Target exploitation specifically | Clients cannot easily tell; most do not report even when suspicious (Farley et al., 2009) |\n\n### Evaluation\n• Each model **shifts** exploitation rather than ending it — to indoor, online or hidden settings\n• Campaigns like the Dutch \"Appearances Are Deceptive\" encourage clients to report, with limited effect\n• Laws may discourage open abuse, but exploitation continues in homes, escort services and online spaces\n\n**Bangladesh angle:** Bangladesh has licensed brothels such as Daulatdia, where trafficked girls have been found, which echoes the Dutch problem — legal settings can hide trafficking.\n\n**Conclusion:** no model has eliminated trafficking; each must be combined with strong victim identification and support.",
        },
        {
          marks: 3,
          q: 'Why is it difficult to know which anti-trafficking measures work?',
          points: [
            'Enforcement gaps: focus on owners, pimps outside system; hidden exploitation; <10% US agencies identified cases (Farrell et al., 2010)',
            'Definitions applied differently: consent, borders, exploitation types (Di Nicola, 2007); mixed data',
            'No evaluation: 10 of 23 US projects measured performance, none scientifically (GAO, 2007)',
            'Data initiatives: Siamsect, IOM-Austria (17 guidelines), ICMPD; debate ideological (Weitzer, 2010)',
          ],
          model:
            "It is difficult to know which anti-trafficking measures work for five reasons.\n\n| Problem | Explanation | Source |\n|---|---|---|\n| Weak enforcement | Authorities target business owners while pimps operate outside the legal system; exploitation hides in homes and online; fewer than 10% of US police agencies identified any trafficking case in 2000–2006 | Farrell et al. (2010) |\n| Inconsistent definitions | Countries apply the UN definition differently on consent, cross-border movement and types of exploitation — \"the never-ending story of a definition\" | Di Nicola (2007) |\n| Mixed data | Some countries mix up trafficking, smuggling and illegal immigration data | Bureau NRM (2007) |\n| No evaluation | Of 23 US-funded projects abroad, only 10 measured performance and none used strong scientific methods | GAO (2007) |\n| Ideological debate | Discussion is emotional, especially on sex work; some policies may even be harmful | Weitzer (2010); Dottridge (2007) |\n\n### Attempts to improve data\n• **Siamsect Project** (EU) — uniform template, never implemented\n• **IOM-Austria Project** (2007) — 17 guidelines for comparable data\n• **ICMPD Project** — national databases tailored to each country\n\n**Bangladesh angle:** Bangladesh's own data mixes trafficking with irregular migration, and many victims (e.g. those sold to Cambodian scam compounds) are never counted, so the true scale is unknown.\n\n**Conclusion:** without consistent definitions, reliable data and proper evaluation, governments cannot tell which policies work.",
        },
      ],
    },
    {
      rank: 13, t: 'arms-law', covers: ['arms-law', 'arms-threat'], marks: 10,
      q: 'Arms smuggling: classification and legal framework',
      parts: [
        {
          marks: 3,
          q: 'Distinguish between small arms and light weapons, and between authorized and unauthorized arms transfers.',
          points: [
            'Small arms (personal): pistols, revolvers, rifles, carbines, SMGs, assault rifles, LMGs',
            'Light weapons (collective): HMGs, grenade launchers, portable AA/AT guns, recoilless rifles, mortars <100 mm',
            'Authorized: with state approval under national & international law',
            'Unauthorized: without authorization — unmarked weapons, diversion, embargo violations; grey areas',
          ],
          model:
            "### Small arms vs light weapons (1999 UN Report on Small Arms)\n| Basis | Small arms | Light weapons |\n|---|---|---|\n| Use | Personal use — one person | Collective use — a crew |\n| Examples | Pistols, revolvers, rifles, carbines, submachine guns, assault rifles, light machine guns | Heavy machine guns, grenade launchers, portable anti-aircraft and anti-tank guns, recoilless rifles, mortars under 100 mm |\n| Common in | Crime, gang violence | Insurgency, armed conflict |\n\nAmmunition and explosives are integral to both.\n\n### Authorized vs unauthorized transfers\n| Basis | Authorized transfer | Unauthorized (illicit) transfer |\n|---|---|---|\n| Meaning | Movement of arms with state approval under national and international law | Movement or ownership transfer without legal authorization |\n| Includes | Import, export, transit, ownership transfer | Unmarked weapons, diversion to illegal end-users, embargo violations |\n| Governed by | Firearms Protocol, Arms Trade Treaty | Prohibited under both |\n| Grey area | Some government-approved transfers may still breach international law | — |\n\n**Bangladesh example:** the 2004 Chattogram arms haul included rifles, submachine guns and rocket launchers — a mix of small arms and light weapons — moved without any legal authorization.",
        },
        {
          marks: 4,
          q: 'Discuss the international and national legal framework against arms smuggling.',
          points: [
            'UN Firearms Protocol (2001): criminalize trafficking; marking & identification; tracing & information exchange',
            'Arms Trade Treaty (2013): regulate conventional arms trade; ban transfers with substantial risk of serious human-rights violations',
            'Arms Act 1878: bans unauthorized import, export, transport, possession, dealing; life or ≥7 years RI',
            'Smuggling of Arms Act 1934: notified areas, removal of smugglers, arrest without warrant',
          ],
          model:
            "### International framework\n| Instrument | Key provisions |\n|---|---|\n| **UN Firearms Protocol (2001)** (supplements UNTOC) | Legally binding; states must criminalize illicit firearms trafficking, establish marking and identification systems, and facilitate tracing and information exchange |\n| **Arms Trade Treaty (2013)** | Regulates the international trade in conventional arms; prohibits transfers where there is a substantial risk the weapons will be used for serious human-rights violations |\n\n### National framework (Bangladesh)\n| Law | Key provisions |\n|---|---|\n| **Arms Act 1878** | Prohibits unauthorized import, export, transport, possession and dealing in arms and ammunition; illegal import or export punishable by **life imprisonment or rigorous imprisonment of at least seven years** |\n| **Smuggling of Arms Act 1934** | Empowers the government to declare notified areas and remove identified arms smugglers; violations punishable, including arrest without warrant |\n| Explosive Substances Act 1908 | Covers explosives |\n\n### Evaluation\n• The laws are old (1878, 1934) and focus on possession, not modern methods like online sales or ant trafficking\n• Enforcement depends on tracing — marking and record-keeping are weak\n\n**Bangladesh example:** in the **2004 Chattogram arms haul** case, a court in 2014 sentenced 14 people to death, including a former industries minister, a former state minister for home affairs, former intelligence chiefs and ULFA leader Paresh Barua — showing the law can reach powerful people, though a decade later.",
        },
        {
          marks: 3,
          q: 'What measures can be taken to combat arms smuggling?',
          points: [
            'Criminalize trafficking under the Firearms Protocol',
            'Strengthen investigation & prosecution',
            'Strict licensing & authorization for import, export, transfer',
            'Marking, record-keeping, tracing',
            'Confiscate & destroy illicit/seized firearms',
            'International cooperation & information sharing',
          ],
          model:
            "The lecture recommends six measures to combat arms smuggling.\n\n| Measure | How it helps |\n|---|---|\n| Criminalize illegal arms trafficking under the Firearms Protocol | Creates a clear legal basis for prosecution |\n| Strengthen investigations and prosecutions | Targets networks and suppliers, not just carriers |\n| Strict licensing and authorization | Prevents diversion from legal markets |\n| Marking, record-keeping and tracing | Allows seized weapons to be traced to their source |\n| Confiscate and destroy illicit and seized firearms | Stops weapons re-entering circulation |\n| International cooperation and information sharing | Cross-border networks need cross-border responses |\n\n### Additional measures for Bangladesh\n1. Tighter surveillance of the Myanmar and Indian borders and the Chattogram–Cox's Bazar coast\n2. Coordinated BGB–BSF and maritime patrols\n3. Raids on illegal gun-making workshops (e.g. in Maheshkhali)\n4. Monitoring of armed groups in and around the Rohingya camps\n5. Updating the colonial-era Arms Act and Smuggling of Arms Act for online sales and modern methods\n\n**Conclusion:** arms control needs both supply-side measures (borders, tracing) and demand-side measures (reducing conflict and gang demand).",
        },
      ],
    },
    {
      rank: 14, t: 'dt-history', covers: ['dt-history'], marks: 10,
      q: 'History of drugs and drug control',
      parts: [
        {
          marks: 4,
          q: 'Trace the development from opium to morphine and heroin.',
          points: [
            'Opium: analgesic/depressant; treated pain, diarrhoea, asthma, fever, insomnia; freely available in US until 1914; opium dens',
            'Morphine: early 19th c.; far stronger; syringe 1856; Civil War → "army disease"',
            'Heroin (~1900): marketed as safer, non-addictive; misuse → regulation',
          ],
          model:
            "| Period | Drug | Development |\n|---|---|---|\n| Before modern medicine | **Opium** | Pain reliever and central nervous system depressant; used for pain, diarrhoea, asthma, fever, insomnia and rheumatism |\n| 19th century USA | Opium | Widely available, often without prescription, until 1914; Chinese immigrants popularized opium smoking in California; commercial **opium dens** linked to crime |\n| Early 19th century | **Morphine** | Developed from opium; much more powerful; widely available by the 1850s |\n| 1856 | Morphine | **Hypodermic syringe** introduced — injection possible |\n| 1861–65 | Morphine | US Civil War: heavy use left veterans dependent — \"**army disease**\" |\n| Around 1900 | **Heroin** (diacetylmorphine) | Marketed as a safer, non-addictive alternative to morphine — but it was more addictive; misuse rose and governments began regulating |\n\n[flow] From medicine to addiction\nOpium (medicine) → Morphine (stronger, injected) → Heroin (marketed as safe) → Addiction → Regulation\n\n**Analysis:** each new drug was introduced as a medical improvement but created new addiction. The same pattern is seen today with prescription opioids and synthetic drugs.",
        },
        {
          marks: 3,
          q: 'Explain the Opium Wars and their significance.',
          points: [
            'Britain used Indian opium to pay for Chinese tea',
            'China banned opium; smuggling and corruption undermined ban',
            '1839 destruction → First Opium War 1840–42 → compensation, Hong Kong ceded',
            'Second Opium War 1856–60; drugs, commerce and power interconnected',
          ],
          model:
            "### Causes\n• **Trade imbalance** — Britain bought large amounts of Chinese tea and paid with opium grown in British India\n• **China's ban** — China banned opium, but widespread smuggling and corruption undermined the ban\n\n### Events\n| Year | Event |\n|---|---|\n| 1839 | China confiscated and destroyed British opium |\n| 1840–42 | **First Opium War** — China defeated, forced to pay compensation; **Hong Kong** became a British colony |\n| 1856–60 | **Second Opium War** — China weakened further; foreign trading privileges expanded |\n\n### Significance\n1. The drug trade, international commerce and state power became interconnected\n2. A state (Britain) profited from the drug trade — an early form of the **state–crime nexus**\n3. Smuggling and corruption defeated prohibition — a lesson still relevant today\n4. Opium spread to Chinese communities in the United States, shaping later US drug laws\n\n**Relevance to Bangladesh:** the opium sold to China was grown in British India, including Bengal — so the region has been part of the international drug economy for two centuries.",
        },
        {
          marks: 3,
          q: 'How did drug control move from racialized restrictions to formal regulation, and what does this history teach us?',
          points: [
            'Chinese workers (mining, railways) linked to opium → anti-Chinese sentiment; 1880s import restrictions',
            '1909 International Opium Commission; 1912 Convention; 1914 Harrison Act',
            'Lessons: medical use → addiction; prohibition → profit; states profited; control can target minorities',
          ],
          model:
            "### From racialized restrictions to formal regulation\n| Year | Development |\n|---|---|\n| 19th century | Chinese workers came to the US for mining and railways; associated with opium smoking, fuelling anti-Chinese sentiment |\n| 1880s | US restricted opium imports, targeting Chinese immigrants |\n| 1909 | **International Opium Commission** established |\n| 1912 | **International Opium Convention** adopted |\n| 1914 | **Harrison Act** — federal regulation of opiates and cocaine in the US |\n\n### Lessons from this history\n1. **Medical use can become mass addiction** — as with today's opioid and fentanyl crises\n2. **Prohibition creates profit** — banning drugs creates price gaps that make smuggling profitable\n3. **States can profit from drugs** — Britain's role in the Opium Wars\n4. **Drug laws can target minorities** — early US opium laws targeted Chinese immigrants rather than the harm itself\n5. **International cooperation is needed** — the 1909 and 1912 agreements were the start of global drug control\n\n**Relevance to Bangladesh:** modern Bangladeshi drug law (the Narcotics Control Act 2018) follows this international prohibition model; the history suggests punishment alone will not end trafficking while profits remain high.",
        },
      ],
    },
    {
      rank: 12, t: 'cf-bd', covers: ['cf-bd', 'cf-law'], marks: 10,
      q: 'Counterfeiting in Bangladesh',
      parts: [
        {
          marks: 3,
          q: 'Describe the scale of counterfeiting in Bangladesh and the most affected categories.',
          points: [
            '39–40% of market counterfeit/adulterated',
            'Personal care 32%, electrical 13%, clothing 12%, food 10%, pharma 9%',
            'Fake BSTI seals; hidden factories in Dhaka & Chattogram; grey-market Chinese parts',
            'Tk 3,170 crore tax lost; Tk 13,680 crore business losses',
          ],
          model:
            "Counterfeiting is widespread in Bangladesh. According to the Bangladesh Cosmetics and Toiletries Importers Association, nearly **40% of the local market** is now controlled by counterfeit and adulterated products, and almost no sector is untouched.\n\n[chart] Share of counterfeit goods in Bangladesh by category (%)\nPersonal care & cosmetics | 32 | 32%\nElectrical & electronics | 13 | ~13%\nClothing & footwear | 12 | ~12%\nFood & beverages | 10 | ~10%\nPharmaceuticals | 9 | ~9%\n\n### How it is done\n• Copied brand names and **forged BSTI seals or holograms**\n• Production in hidden factories around Dhaka, Chattogram and other cities\n• Low-quality electrical parts smuggled from China and relabelled with fake brand logos (including foreign brands)\n• Commonly faked items: milk, edible oil, honey, tea, coffee, sauces, chocolate, bottled water, soft drinks, baby food, medicines, cigarettes, fake revenue stamps\n\n[chart] Annual losses from counterfeiting in Bangladesh (Tk crore)\nBusiness losses for legitimate brands | 13680 | Tk 13,680 crore\nLost tax revenue | 3170 | Tk 3,170 crore\n\n**Conclusion:** counterfeiting in Bangladesh is a mass-market problem affecting everyday items, not just luxury goods.",
        },
        {
          marks: 3,
          q: 'Explain the health, safety and economic harms of counterfeit goods.',
          points: [
            'Adulterated milk, oil, honey, baby food; 80–90% households consume',
            'WHO: 600m ill, 442,000 deaths/year from contaminated food; cancer, kidney disease, diabetes',
            'Fake medicines $309m/year; wrong/toxic ingredients → treatment failure, resistance, death',
            '38% of fires from short circuits; revenue loss; funds organized crime',
          ],
          model:
            "| Harm | Details |\n|---|---|\n| **Health** | Adulterated milk, oil, honey, tea, coffee, bottled water and baby food are consumed by 80–90% of households; millions of children depend on infant formula. The WHO estimates 600 million people fall ill and 442,000 die each year from contaminated food; studies link adulterated food in Bangladesh to cancer, kidney disease and diabetes |\n| **Medicines** | Counterfeit medicines cost Bangladesh about **$309 million a year**; they contain wrong or toxic ingredients or none, causing treatment failure, drug resistance or death |\n| **Safety** | Fake wires, bulbs and fans fail safety standards; the fire service reports that **38%** of last year's fire incidents were caused by electrical short circuits due to low-quality wiring |\n| **Economic** | Legitimate businesses lose about Tk 13,680 crore and the state about Tk 3,170 crore in tax each year |\n| **Criminal** | The trade funds organized crime and forced labour |\n\n### Bangladesh examples\n• In **2009**, paracetamol syrup contaminated with a toxic chemical (diethylene glycol) killed at least two dozen children — a tragic example of unsafe medicine\n• The Detective Branch has raided underground factories in **Mohammadpur, Dhaka**, seizing fake syrups, children's liquid medicines and counterfeit soaps\n• Mobile courts regularly fine businesses for fake sauces, coffee and spices\n\n**Conclusion:** counterfeiting in Bangladesh is a public-health emergency, not just a trademark problem.",
        },
        {
          marks: 4,
          q: 'Discuss the legal framework against counterfeiting in Bangladesh and the enforcement gaps. Suggest solutions.',
          points: [
            'Penal Code: s.465 (2 yrs), s.466 (7 yrs), s.467 (life/10 yrs), s.475, s.476 (7 yrs), s.483 (2 yrs), s.484 (3 yrs)',
            'Trademarks Act 2009; CRPA 2009 s.51 (1 yr / Tk 50,000)',
            'DNCRP & BSTI mobile courts — reactive not systemic; light penalties',
            'Solutions: intelligence-led raids, tougher penalties, TraceChainBD traceability, consumer awareness',
          ],
          model:
            "### Legal framework\n| Law | Offence | Maximum punishment |\n|---|---|---|\n| Penal Code s.465 | General forgery | 2 years, fine, or both |\n| Penal Code s.466 | Forgery of court records / public registers | 7 years + fine |\n| Penal Code s.467 | Forgery of valuable securities, wills | Life or 10 years + fine |\n| Penal Code s.475 | Counterfeiting authentication marks (valuable securities) | Life or 7 years + fine |\n| Penal Code s.476 | Counterfeiting authentication devices or seals | 7 years + fine |\n| Penal Code s.483 | Counterfeiting a trade or property mark | 2 years, fine, or both |\n| Penal Code s.484 | Counterfeiting marks used by public servants | 3 years + fine |\n| Trademarks Act 2009 | Trademark rights | Civil and criminal remedies |\n| Consumers' Right Protection Act 2009, s.51 | Selling fake or expired products or medicines | 1 year, fine up to Tk 50,000, or both |\n| Safe Food Act 2013 | Food adulteration | Enforced by the Bangladesh Food Safety Authority |\n\n### Enforcement gaps\n1. **Reactive, not systemic** — DNCRP and BSTI run mobile courts and raids after complaints, but rarely trace supply chains\n2. **Light penalties** — a Tk 50,000 fine is small compared with the profits\n3. **Weak coordination** — BSTI, DNCRP, the food authority, police and the drug administration act separately\n4. **Corruption and influence** — factories reopen after raids\n5. **Low consumer awareness** — many buyers cannot recognize fakes\n\n### Solutions\n• Intelligence-led action against factories and distributors, not just retailers\n• Tougher penalties for health and safety items\n• Supply-chain traceability — e.g. **TraceChainBD** (blockchain + IoT QR codes)\n• Coordinated enforcement among agencies\n• Consumer education and easy reporting channels\n\n**Conclusion:** Bangladesh has many laws but weak enforcement; systemic, intelligence-led action and traceability are needed.",
        },
      ],
    },
    {
      rank: 16, t: 'ht-process', covers: ['ht-process'], marks: 10,
      q: 'The trafficking process and victims',
      parts: [
        {
          marks: 3,
          q: 'Describe the three stages of the trafficking process.',
          points: [
            'Recruitment: false job promises (hotels, cleaning, entertainment); deception about conditions (Vocks & Nijboer, 1999)',
            'Transportation: often legal entry with real documents and visas',
            'Exploitation: brothels, labour, scam compounds; venues owned/cooperating/looking away',
          ],
          model:
            "Trafficking usually follows three stages.\n\n[flow] The trafficking process\nRecruitment → Transportation → Exploitation\n\n| Stage | What happens | Bangladesh example |\n|---|---|---|\n| **Recruitment** | Victims are approached with false promises — jobs in hotels, cleaning or entertainment; some agree to sex work but are deceived about the real conditions (Vocks & Nijboer, 1999) | A *dalal* offers a \"supermarket job\" in Malaysia or a \"call-centre job\" in Cambodia; online recruitment through Facebook and TikTok |\n| **Transportation** | Victims often cross borders legally with real documents on student, tourist or business visas, so border officers cannot identify them | Bangladeshis flying to Cambodia on $30–36 e-visas, or to Dubai and Libya on work visas |\n| **Exploitation** | Victims are forced into prostitution, labour or scamming; in the Netherlands, some clubs were owned by traffickers, some cooperated, others looked away | Workers sold to cyber-scam compounds; women forced into brothels in India |\n\n**Bangladesh example:** in 2021, police in Bengaluru, India, arrested members of a ring that had lured young Bangladeshi women through TikTok with promises of jobs and then exploited them — showing how recruitment has moved online.\n\n**Conclusion:** the transportation stage often looks completely legal, so prevention must focus on recruitment (awareness, regulating brokers) and on identifying exploitation.",
        },
        {
          marks: 3,
          q: 'What are the indicators that a person may be a trafficking victim?',
          points: [
            'Person: disoriented; cannot speak freely; coached answers; abuse, malnourishment; no ID/phone/money',
            'Person: lives where works; fearful; minor in commercial sex; branding tattoos',
            'Situation: cramped living; someone holds documents; can\'t speak for self; story doesn\'t match; unaware of employer address',
          ],
          model:
            "The lecture advises looking for **clusters of indicators** and trusting instincts.\n\n| Signs in the person | Signs in the situation |\n|---|---|\n| Disoriented or confused about location, date or basic facts | Many people living in a cramped space with limited freedom |\n| Cannot speak freely; someone always speaks for them or monitors them | Someone else holds or controls their passport, visa or ID |\n| Gives coached, scripted answers | Not allowed to speak for themselves in medical, legal or official settings |\n| Signs of physical abuse, malnourishment, exhaustion or untreated injuries | Their story changes or doesn't match their documents |\n| Few or no possessions — no ID, phone or money of their own | Unaware of their employer's address or terms of employment |\n| Lives and works in the same place, or is transported by someone else | |\n| Fearful, anxious or submissive, especially around a particular person | |\n| A minor in commercial sex, or with an older \"boyfriend\" or \"manager\" | |\n| Tattoos or branding indicating ownership (not universal) | |\n\n**Bangladesh application:** returnees at Shahjalal Airport or women repatriated through Benapole who have no documents, owe large debts to a broker, or cannot say where they worked should be screened as possible victims rather than treated as irregular migrants.\n\n**Conclusion:** no single sign proves trafficking; a combination of indicators should trigger referral to police and support services.",
        },
        {
          marks: 4,
          q: 'Why do victims find it hard to escape? Explain why "free will" becomes blurred.',
          points: [
            'Emotional ties',
            'Fear of law enforcement agencies',
            'Lack of better options (debt, poverty)',
            'Shame or stigma',
            'Control tools: debt, manipulation, document confiscation',
            'Free will blurred — victims believe they chose this life',
          ],
          model:
            "Victims often do not escape even when they could, for four main reasons.\n\n| Reason | Explanation | Bangladesh example |\n|---|---|---|\n| **Emotional ties** | The trafficker may be a partner, relative or \"boyfriend\" | Girls trafficked by a \"lover\" who promised marriage |\n| **Fear of law enforcement** | Without papers they fear arrest or deportation more than their exploiter | Undocumented workers in Malaysia or the Gulf avoid police |\n| **Lack of better options** | Debt and poverty leave nothing to return to | Families sold land to pay the broker, so the worker must keep earning |\n| **Shame or stigma** | Especially after sexual exploitation | Returnee women face rejection by family and community |\n\nTraffickers reinforce these with **manipulation, debt and confiscated documents**.\n\n### Why \"free will\" becomes blurred\n• Many victims believe they **chose** this life, even while they are controlled and abused\n• Because some consented at first (e.g. to migrate or to sex work), outsiders — and victims themselves — may not see them as victims\n• This makes identification, rescue and prosecution harder\n\n**Conclusion:** escape is prevented by psychological, economic and social control, so rescue must be followed by rehabilitation, economic support and protection from stigma.",
        },
      ],
    },
    {
      rank: 18, t: 'x-corruption', covers: ['x-corruption', 'x-bd'], marks: 10,
      q: 'Corruption and organized crime',
      parts: [
        {
          marks: 3,
          q: 'Explain the State–Crime Nexus approach.',
          points: [
            'Bayart, Ellis & Hibou (1999)',
            'Relationship between state actors and criminal networks',
            'Officials participate in, protect or benefit from illegal activity',
            'Corruption & political connections facilitate smuggling; weak governance creates illicit markets',
          ],
          model:
            "The **State–Crime Nexus** approach was developed by Jean-François Bayart, Stephen Ellis and Béatrice Hibou (1999) in *The Criminalization of the State in Africa*.\n\n### Core ideas\n1. It examines the **relationship between state actors and criminal networks**\n2. State officials may **participate in, protect or benefit from** illegal activities\n3. **Corruption and political connections** facilitate smuggling\n4. **Weak governance** creates opportunities for illicit markets\n\n[flow] How the nexus works\nCriminal network pays → Official protects or joins → Crime continues → Profits shared → Network grows\n\n**Link to other theories:** in routine activity terms, corruption turns the \"capable guardian\" into a protector of crime.\n\n**Bangladesh context:** Transparency International's Corruption Perceptions Index 2023 gave Bangladesh a score of 24 out of 100 — one of the lowest in South Asia — which suggests strong conditions for a state–crime nexus.\n\n**Conclusion:** the approach shows that organized crime is often not opposed by the state but embedded in it.",
        },
        {
          marks: 4,
          q: 'Show how corruption facilitates human trafficking and drug trafficking.',
          points: [
            'Trafficking: corruption–trafficking link (Bales, 2005; Studnicka, 2010); Brazil 71% cases with corrupt officials',
            'Bangladesh: settlements for money → impunity → reoffending; clubs looking the other way',
            'Drugs: systemic corruption is a syndicate objective — police, customs, politicians, judges; narco-states',
            'History: China\'s opium ban undermined by smuggling & corruption; weak borders + bribes',
          ],
          model:
            "### Corruption and human trafficking\n| Evidence | Detail |\n|---|---|\n| Research link | Countries with high corruption see more trafficking (Bales, 2005; Studnicka, 2010) |\n| Brazil | 71% of trafficking cases involved corrupt officials |\n| Bangladesh | Cases are \"settled\" in exchange for money, so traffickers evade punishment and reoffend |\n| Abroad | Some clubs and venues cooperate with traffickers or look the other way |\n| Bangladesh example | A Kuwaiti court in 2021 convicted Bangladeshi MP Kazi Shahid Islam (Papul) of human trafficking and money laundering, including bribing Kuwaiti officials |\n\n### Corruption and drug trafficking\n| Evidence | Detail |\n|---|---|\n| Syndicate objective | Systemic corruption is an explicit goal — bribing, intimidating or blackmailing police, customs, politicians and judges |\n| Narco-states | Some syndicates control territory as narco-states |\n| Borders | Weak borders plus big bribes make smuggling routine |\n| History | China's opium ban was undermined by smuggling and corruption before the Opium Wars |\n| Bangladesh example | Reports of local influential people protecting the Teknaf yaba trade; the trade continued even after the 2019 surrender of 102 traders |\n\n**Conclusion:** in both crimes, corruption converts strong laws into weak protection — which explains why Bangladesh's tough trafficking and narcotics laws have limited effect.",
        },
        {
          marks: 3,
          q: 'How does corruption enable gold and arms smuggling?',
          points: [
            'Gold: facilitated by corrupt officials; BG-148 cargo hold implies insiders; kingpins unidentified; Kerala diplomatic baggage',
            'Arms: corruption a key driver; diversion from state stockpiles; forged end-user certificates',
            'Response: anti-corruption, financial tracing, zero tolerance',
          ],
          model:
            "| Crime | How corruption enables it | Example |\n|---|---|---|\n| **Gold smuggling** | Facilitated by \"criminal networks, intermediaries and corrupt officials\"; insiders help move gold through airports | **BG-148 (2026)** — 18.72 kg in an aircraft's cargo hold, hard without insiders; kingpins rarely identified. **Kerala (2020)** — 30 kg hidden in diplomatic baggage |\n| **Arms smuggling** | Corruption is a listed driver; officials enable diversion from government stockpiles; forged end-user certificates exploit the legal trade | **2004 Chattogram arms haul** — senior officials of the national intelligence agency and politicians were convicted in 2014 for facilitating ten truckloads of weapons |\n\n### Responses\n1. Anti-corruption checks and rotation of airport, customs and border staff\n2. Financial investigation of the money behind consignments (Money Laundering Prevention Act 2012)\n3. Independent prosecution of officials, including through the Anti-Corruption Commission\n4. Political commitment and zero tolerance for corruption, as the trafficking lecture recommends\n\n**Conclusion:** gold and arms smuggling on a large scale is rarely possible without corrupt insiders, so anti-corruption is the most effective counter-smuggling measure.",
        },
      ],
    },
    {
      rank: 15, t: 'dt-crescent', covers: ['dt-crescent', 'dt-myanmar'], marks: 10,
      q: 'Afghanistan and Myanmar in the drug trade',
      parts: [
        {
          marks: 4,
          q: 'Why has Afghanistan been important in the global drug trade? Describe the main smuggling routes from Afghanistan.',
          points: [
            'Largest opium producer for decades; role grew after Iran, Pakistan, Turkey banned opium (1970s)',
            'Insurgents used drug profits since the Cold War',
            'Balkan: Afg → Pak → Iran → Turkey → E. Europe → W. Europe',
            'Northern: Central Asia → Russia/Baltics; Southern; air routes; China–India',
            'Drugs often stay in region (Tajikistan, Kazakhstan, Kyrgyzstan); ~320,000 users in Central Asia',
          ],
          model:
            "Afghanistan was for decades the world's **largest producer of opium**. Its role grew after the 1970s, when **Iran, Pakistan and Turkey banned opium** and traffickers turned to Afghan farmers. Since the Cold War, insurgent and terrorist groups have used drug profits to fund wars. The Taliban briefly banned opium in 2001, but after they were removed the trade came back strongly.\n\n| Route | Path |\n|---|---|\n| Balkan Route | Afghanistan → Pakistan → Iran → Turkey → Eastern Europe → Western Europe (sometimes avoiding Turkey via Romania or Ukraine) |\n| Northern Route | Afghanistan → Central Asia → Russia and the Baltic States |\n| Southern Route | Afghanistan → Pakistan |\n| Air routes | Pakistan → UK, Africa, North America |\n| China–India Route | Through Pakistan and Central Asia into China and India |\n\n**Regional impact:** much of the heroin stays in the region — in Tajikistan, Kazakhstan and Kyrgyzstan — and Central Asia has about 320,000 opiate users (0.6% of people aged 15–64).\n\n**Bangladesh link:** Afghanistan is the heart of the **Golden Crescent**, and some heroin reaches Bangladesh through India along the Golden Wedge.",
        },
        {
          marks: 3,
          q: 'What have been the effects of the Taliban\'s opium ban?',
          points: [
            '~95% drop: 232,000 ha (2022) → 10,200 ha; 6,200 → ~296 t',
            'Shift to remote Badakhshan; clashes with eradication teams',
            'Meth boom using wild ephedra',
            'UN: stockpiles run dry → fentanyl, nitazenes; overdose risk',
          ],
          model:
            "The Taliban's ban on opium cultivation produced a historic change.\n\n[chart] Opium poppy cultivation (hectares)\nAfghanistan, 2022 (before ban) | 232000 | 232,000 ha\nAfghanistan, after ban | 10200 | 10,200 ha\nMyanmar, now | 53000 | 53,000+ ha\n\n### Effects\n| Effect | Details |\n|---|---|\n| Collapse in cultivation | About a **95%** drop compared with 2022 |\n| Collapse in production | From 6,200 metric tons to about 296 tons |\n| Displacement | Small-scale farming moved to remote north-eastern areas like Badakhshan, with violent clashes against eradication teams |\n| Methamphetamine boom | Meth is profitable, covert, drought-resistant and uses the wild ephedra plant or cheap chemicals |\n| Synthetic shift | The UN warns that as heroin stockpiles run dry, networks are switching to fentanyl and nitazenes, raising overdose risk |\n| Shift of production | **Myanmar** overtook Afghanistan as the top opium producer |\n\n**Bangladesh relevance:** the shift of production to Myanmar matters directly for Bangladesh, because Myanmar's drugs flow across the Naf River into Cox's Bazar.\n\n**Conclusion:** suppressing drugs in one place displaces production elsewhere (the \"balloon effect\") and pushes the market towards more dangerous synthetic drugs.",
        },
        {
          marks: 3,
          q: 'How has Myanmar become a leading drug producer, and who controls the trade?',
          points: [
            'British-era opium; Kuomintang after WWII; poverty; ethnic conflict (Shan, Wa, Kachin)',
            'Surpassed Afghanistan in opium (>53,000 ha); meth super labs in Shan State; yaba',
            'Coup & civil war → more production; Rakhine transit',
            'Control: UWSA, Shan State Army, KIA + ethnic Chinese networks',
          ],
          model:
            "| Aspect | Details |\n|---|---|\n| History | Opium sold widely under British rule; hill tribes in Shan State kept supplying it; after World War II, Chinese **Kuomintang** forces took over the trade to fund their fight against communists |\n| Conditions | About one-third of people live below the poverty line; most work in agriculture; ethnic conflict in Shan, Wa and Kachin States leaves the government with little control |\n| Opium | Myanmar **surpassed Afghanistan** as the top global opium producer after the Taliban ban (over 53,000 hectares) |\n| Synthetic drugs | Large-scale \"super labs\" in Shan State make Myanmar the main source of methamphetamine tablets (yaba) and crystal meth (ice) in the region |\n| Recent change | Since the military coup, civil war and the collapse of central governance have increased production; **Rakhine State** has become a major transit hub |\n| Who controls it | Armed insurgent groups — **United Wa State Army**, Shan State Army, Kachin Independence Army — plus ethnic Chinese crime networks |\n\n[flow] From Myanmar to Bangladesh\nShan State super labs → Rakhine State → Naf River → Teknaf / Cox's Bazar → Dhaka & beyond\n\n**Bangladesh impact:** yaba and crystal meth from Myanmar make up the largest share of drug seizures in Bangladesh, and traffickers exploit Rohingya refugees as carriers.\n\n**Conclusion:** Myanmar's rise is the product of conflict and the absence of state control, and Bangladesh bears the direct consequences.",
        },
      ],
    },
    {
      rank: 17, t: 'arms-methods', covers: ['arms-methods'], marks: 10,
      q: 'How arms are smuggled',
      parts: [
        {
          marks: 3,
          q: 'Explain the methods by which arms are acquired for illicit markets.',
          points: [
            'Diversion from government stockpiles',
            'Straw purchasing',
            'Illicit manufacturing & conversion/reactivation',
            'Online markets & dark web',
            'Theft from owners/dealers',
            'Exploiting legal trade with forged end-user certificates',
          ],
          model:
            "Arms reach illicit markets through six main acquisition methods.\n\n| Method | Explanation | Bangladesh / regional example |\n|---|---|---|\n| Diversion from government stockpiles | Weak security or corrupt officials let weapons leak from armories | Firearms looted from police stations during the August 2024 unrest |\n| **Straw purchasing** | An eligible buyer legally buys from a licensed dealer and passes the guns to someone barred from buying | Common in the USA; guns then trafficked south to Mexico |\n| Illicit manufacturing and conversion | Artisanal production and reactivation of deactivated weapons | Illegal gun-making workshops in the hills of **Maheshkhali**, Cox's Bazar |\n| Online markets | Social media, online marketplaces and the dark web used to advertise and buy weapons and parts | Online sale of weapons and parts |\n| Theft | From homes, vehicles or licensed dealers | Theft of licensed firearms |\n| Exploiting the legal trade | Forged end-user certificates deceive suppliers | Weapons obtained for one buyer but sent to another |\n\n**Conclusion:** acquisition often starts in the legal market (straw purchases, diversion, forged certificates), which is why licensing and tracing are central to prevention.",
        },
        {
          marks: 3,
          q: 'How are arms transported and concealed? What is "ant trafficking"?',
          points: [
            'Freight & containers; small vessels (dhows); postal/courier (disassembled)',
            'Road: hidden in vehicle structure/fuel tank; airline luggage',
            'Professional concealment: custom crates, co-mingling with timber',
            'Ant trafficking: many individuals each carrying a few weapons on foot',
          ],
          model:
            "| Method | How it works |\n|---|---|\n| Freight and maritime shipping | Large consignments in cargo ships and containers |\n| Smaller vessels | Boats such as dhows with small crews |\n| Postal and courier services | Small quantities, often disassembled, sent through private couriers |\n| Road transport | Weapons hidden in a vehicle's structure or fuel tank |\n| Commercial airlines | Small arms hidden in checked luggage |\n| Professional concealment | Custom-made crates; mixing weapons with heavy legitimate goods like timber |\n| **Ant trafficking** | Many individuals or small groups each carry a few weapons across a border on foot |\n\n### Ant trafficking explained\nInstead of one large shipment, traffickers use many carriers with small loads. Each seizure is small, so detection is harder and losses are limited — the same logic as drug \"mules\".\n\n**Bangladesh examples:**\n• **Maritime** — the 2004 Chattogram haul arrived by sea and was being unloaded at a jetty onto trucks\n• **Land / ant method** — small numbers of pistols carried across the porous Indian border, as with the weapons reportedly smuggled through Chapainawabganj before the 2016 Holey Artisan attack\n\n**Conclusion:** large sea shipments and small \"ant\" movements need different responses — container scanning for the first, border patrols and intelligence for the second.",
        },
        {
          marks: 4,
          q: 'Describe the stages of arms smuggling and the common route patterns.',
          points: [
            'Sourcing → collection & preparation → concealment → transportation → transit/intermediaries → border crossing → distribution',
            'Departures: North America, Europe, Western Asia; destinations: Central & South America, parts of Western Asia',
            'Land ≈ two-thirds of cases; sea fewer but ~5× larger',
            'Methods: concealment, misdeclaration, document fraud; most seized: pistols (shotguns in Africa & Asia)',
          ],
          model:
            "### Seven stages of arms smuggling\n[flow] Stages\nSourcing → Preparation → Concealment → Transportation → Intermediaries → Border crossing → Delivery\n\n| Stage | Description |\n|---|---|\n| 1. Sourcing / acquisition | Illicit manufacture, theft, diversion from legal stocks or illegal purchase |\n| 2. Collection and preparation | Arms and ammunition gathered and prepared for movement |\n| 3. Concealment | Hidden in legitimate goods or covered by false documents |\n| 4. Transportation | Moved by land, air or sea across jurisdictions |\n| 5. Transit / intermediaries | Brokers and middlemen link source and destination |\n| 6. Border crossing | Illegal transfer across borders, exploiting weak controls or corruption |\n| 7. Distribution / delivery | Arms reach criminal groups, armed groups or other buyers |\n\n### Route patterns\n• **Departure regions:** North America, Europe, Western Asia; **destinations:** Central and South America, parts of Western Asia\n• **Techniques:** concealment, misdeclaration and document fraud\n• **Most seized:** pistols globally (over 50% in the Americas); **shotguns** in Africa and Asia; rifles in Oceania\n\n[chart] Arms-smuggling cases by route (share of cases)\nLand borders | 67 | ~two-thirds\nSea and other routes | 33 | ~one-third\n\nSea shipments are fewer but carry about **five times** more arms per case.\n\n**Bangladesh example:** the 2004 Chattogram haul followed these stages — weapons sourced abroad, shipped by sea, unloaded at a jetty with the help of insiders, and loaded onto trucks for delivery to an insurgent group.",
        },
      ],
    },
    {
      rank: 20, t: 'cf-prevent', covers: ['cf-prevent'], marks: 10,
      q: 'Preventing and punishing currency counterfeiting',
      parts: [
        {
          marks: 4,
          q: 'How can countries prevent currency counterfeiting?',
          points: [
            'Polymer banknotes: Australia 1988 ($10), 1996 first full series; NZ followed',
            'Security features: 3D ribbons, special printing, complex designs/colours, portraits, polymer substrates — upgrade regularly',
            'Reserve banknote series: Switzerland',
            'Bilateral cooperation (India–Bangladesh MoU); public awareness',
          ],
          model:
            "| Measure | Details | Example |\n|---|---|---|\n| **Polymer banknotes** | More durable and harder to copy than paper | Australia issued a polymer $10 commemorative note in **1988** and in **1996** became the first country with a complete polymer series; New Zealand followed |\n| **Advanced security features** | 3D security ribbons, special printing techniques, complex designs and colours, distinctive portraits, polymer substrates — upgraded regularly as counterfeiting technology improves | Bangladesh's Tk 500 and Tk 1,000 notes carry a watermark, security thread and colour-shifting ink |\n| **Reserve banknote series** | A ready-made new design introduced if the current series is compromised | Switzerland historically kept reserve series of franc notes |\n| **Cooperation and awareness** | Cross-border intelligence sharing and public education | India–Bangladesh MoU on counterfeit currency; Bangladesh Bank's note-checking booths in cattle markets before Eid-ul-Adha |\n\n**Conclusion:** prevention combines technology (harder-to-copy notes), preparedness (reserve series), cooperation and public awareness.",
        },
        {
          marks: 3,
          q: 'Explain the common methods of coin counterfeiting.',
          points: [
            'Casting (molded) — rough edges, soft details',
            'Struck — fake blanks pressed between CNC-made dies',
            'Plating & coating — base metal core with gold/silver layer',
            'Clipping & shaving — filing metal off real coins',
            'Bi-metallic forgery — mismatched/painted rings',
          ],
          model:
            "| Method | How it works | Signs |\n|---|---|---|\n| **Casting (molded)** | Molten base metal poured into wax or plaster molds made from real coins | Rough edges, soft details, casting marks |\n| **Struck counterfeits** | Fake metal blanks pressed between custom-engraved dies, often made with CNC machines from digital scans | Can be very convincing |\n| **Plating and coating** | A cheap core (copper or lead) covered with a thin layer of gold or silver | Wear reveals the base metal |\n| **Clipping and shaving** | Filing small amounts of precious metal from the edges of real coins (historical) | Underweight, uneven edges |\n| **Bi-metallic forgery** | Painting or mismatching the inner and outer rings of two-tone coins | Colour or fit mismatch |\n\n**History:** the earliest known counterfeit coins were plated copies called **fourrées** in the Lydian civilization — an ancient form of plating.\n\n**Bangladesh law:** under the Penal Code 1860, counterfeiting Bangladesh coins is punishable by up to 10 years or life imprisonment.",
        },
        {
          marks: 3,
          q: 'Compare penalties for counterfeiting in different countries, including Bangladesh.',
          points: [
            'Canada 14 yrs; China 3 yrs–life; France 30 yrs + €450,000; Germany 15 yrs; Japan 3 yrs–life',
            'US 20 yrs; UK 10 yrs; Zambia life; Singapore 20 yrs',
            'Bangladesh (coins): general up to 7 yrs; BD coins 10 yrs/life; tools 3–10 yrs; import/export up to 10 yrs',
          ],
          model:
            "[chart] Maximum prison sentence for counterfeiting currency (years; countries with a fixed maximum)\nFrance | 30 | 30 yrs + €450,000\nUnited States | 20 | 20 yrs\nSingapore | 20 | 20 yrs\nGermany | 15 | 15 yrs\nCanada | 14 | 14 yrs\nUnited Kingdom | 10 | 10 yrs\n\n| Country | Penalty |\n|---|---|\n| China | 3 years to life imprisonment + fine |\n| Japan | 3 years to life imprisonment |\n| South Korea | 2 years to life imprisonment |\n| Zambia | Life imprisonment + possible fine |\n\n### Bangladesh (Penal Code 1860 — coins)\n| Offence | Punishment |\n|---|---|\n| Counterfeiting general coins | Up to 7 years + fine |\n| Counterfeiting official Bangladesh coins | Up to 10 years or life + fine |\n| Making or selling counterfeiting tools | 3 to 10 years, depending on the currency |\n| Importing, exporting or passing known fake coins | Up to 10 years |\n\n**Analysis:** Bangladesh's penalties are comparable to those of many countries; the problem is detection and enforcement, not the severity of the law.",
        },
      ],
    },
    {
      rank: 19, t: 'ht-smugglers', covers: ['ht-smugglers'], marks: 10,
      q: 'Migrant smugglers and their networks',
      parts: [
        {
          marks: 3,
          q: 'Explain the "cruel offenders vs helpless victims" image of smuggling, and why reality is more complex.',
          points: [
            'Dover lorry deaths (2000), Golden Venture (1993) shaped media image',
            'Reality: consent between migrants and smugglers; smugglers may be family or friends',
            'Chain migration: networks of family and friends; push and pull factors',
          ],
          model:
            "Public debates often show human trafficking and smuggling as a story of **evil criminals versus powerless victims**. This image was shaped by tragedies such as the **Dover lorry deaths (2000)** and the **Golden Venture shipwreck (1993)**.\n\n### Why reality is more complex\n| Myth | Reality |\n|---|---|\n| Smugglers are criminal masterminds | Smugglers are often family members, friends or people from the same community |\n| Migrants are passive victims | Smuggling often involves **consent** between migrants and smugglers |\n| Migration is an individual decision | It is supported by **migrant networks** of family and friends who share information, contacts and planning — \"chain migration\" |\n| Smuggling is purely criminal | It is driven by push and pull factors |\n\n**Bangladesh example:** many Bangladeshis reach Italy or the Gulf through relatives and neighbours already there, who recommend a broker — classic chain migration. Districts such as Madaripur, Shariatpur and Sylhet have long-standing migration networks to specific countries.",
        },
        {
          marks: 3,
          q: 'Who are the smugglers?',
          points: [
            'Often from same background as migrants',
            'Ties to home and destination countries (Kleemans & van de Bunt, 2003)',
            'Some were smuggled migrants themselves',
            'Motivated by money, but not always masterminds',
          ],
          model:
            "| Feature | Explanation |\n|---|---|\n| Same background | Smugglers often come from the same background as the migrants |\n| Ties to both countries | Studies in the Netherlands show smugglers have links to both home and destination countries (Kleemans & van de Bunt, 2003) |\n| Former migrants | Some smugglers were once smuggled migrants themselves |\n| Motive | They use their experience and contacts to help others — usually for money, but they are not necessarily masterminds |\n\n**Bangladesh example:** village-level brokers (*dalals*) are often returnee migrants who use their contacts abroad to recruit others from their own area — matching the lecture's description.",
        },
        {
          marks: 4,
          q: 'How do smuggling networks work, and is human smuggling controlled by organized crime?',
          points: [
            'Small, flexible networks across origin, transit, destination',
            'Forged documents → air travel; without documents journey longer, riskier, more transfers',
            'Chains of loosely connected groups (Zhang, 2007; Neske & Doomernik, 2006)',
            'Soudijn (2006): 88 Dutch cases, ~25% non-Chinese; contracts from many sources; stable alliances, not tight control',
          ],
          model:
            "### How smuggling networks work\n| Feature | Explanation |\n|---|---|\n| Small and flexible | Not large hierarchies |\n| Every stage covered | People at origin, transit and destination |\n| Documents matter | With forged documents, migrants can travel more easily (e.g. by air) |\n| Without documents | Longer, riskier journeys with more transfers, stops and coordination |\n| Chains of groups | Often a chain of loosely connected groups handles the journey (Zhang, 2007; Neske & Doomernik, 2006) |\n\n### Is smuggling controlled by organized crime?\nThe debate centres on Chinese migration. **Soudijn (2006)**, studying 88 Dutch court cases, found:\n• Not all smugglers were Chinese — about **25%** were of other ethnicities\n• Groups took contracts from different sources and worked with foreign partners\n• They were not tightly controlled, but formed **stable alliances** with consistent members when business ran smoothly\n\n| Hierarchical (mafia) model | Network model |\n|---|---|\n| One boss, fixed ranks | Loose, flexible links |\n| Controls the whole route | Each group handles one stage |\n| Arrest the boss → network collapses | Arrest one link → it is replaced |\n\n**Bangladesh example:** the Bangladesh–Libya–Italy route involves a local broker in Bangladesh, agents in Dubai or another Gulf country, and Libyan smugglers — separate groups linked by deals, matching the network model.\n\n**Conclusion:** human smuggling is better explained by the **network model** than by the idea of a single controlling mafia.",
        },
      ],
    },
  ];
})();
