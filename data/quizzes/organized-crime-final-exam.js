// Exam-pattern questions for the Organized Crime end-term (attached to the 'oc-final' quiz).
// Pattern: 50 marks — answer 5 of 7–8 questions, each 10 marks made of 2–3 parts.
// `covers` lists the syllabus topics a question prepares you for. Tiers come from greedy
// maximum coverage (each next question adds the most uncovered probability weight), with
// at least two top-10 questions per lecture deck; within a tier, higher-scoring topics rank first.
(function () {
  const quiz = HUB.quizzes.find((q) => q.id === 'oc-final');

  quiz.examPattern = { total: 50, answer: 5, of: [7, 8], each: 10 };

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
            "UNODC definition: \"the recruitment, transportation, transfer, harbouring or receipt of people through force, fraud or deception, with the aim of exploiting them for profit.\" It often begins with an offer a person cannot refuse — a good job or a marriage — but ends in exploitation.\n\nThe seven means traffickers use:\n• Threats or use of force\n• Coercion\n• Fraud\n• Deception\n• Abuse of a position of vulnerability\n• Giving payments or benefits\n• Abduction\n\nMost common forms: commercial sexual exploitation, forced labour, forced scamming and forced marriage (including child marriage).",
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
            "Human trafficking and smuggling differ on five points:\n\n• Nature — trafficking is the exploitation of people for financial or other gain; smuggling is the illegal movement of people or goods across borders.\n• Consent — trafficking involves force, fraud, coercion or deception; smuggling generally involves the person's consent to the movement.\n• Border — trafficking can occur within or across borders; smuggling usually involves crossing a border.\n• Duration — in trafficking, exploitation may continue after the movement; in smuggling, the relationship usually ends once the destination is reached.\n• Example — trafficking: forced labour or sexual exploitation; smuggling: facilitating an illegal border crossing for payment.\n\nIn short, the smuggler profits from the journey, the trafficker from the person.",
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
            "Some people start as smuggled migrants and later become trafficking victims.\n\nHow it happens:\n• Debt bondage — the 'travel debt' grows and must be repaid through unpaid work\n• Unsafe work — the migrant is placed in dangerous or abusive jobs\n• Threats — they are forced into acts they never agreed to\n• No way out — abroad without papers, money or language, and afraid of the police, they must obey (Andrees, 2008; Herman, 2006)\n\nAt that point consent has been replaced by control and exploitation — smuggling has become trafficking. Initial consent does not mean the person is safe.",
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
            "• Golden Triangle — where Myanmar, Laos and Thailand meet; one of the oldest drug-producing regions, once famous for opium and heroin, now for methamphetamine (yaba)\n• Golden Crescent — Afghanistan (cultivation hub), Pakistan (transit and refining hub) and Iran (main corridor to Europe)\n• Golden Wedge — the newest route, linking north Bangladesh with Himachal Pradesh and Uttar Pradesh and extending to Nepal and parts of Bhutan; it lies between the Crescent and the Triangle",
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
            "Bangladesh is not a major producer, but its location between the Golden Triangle and Golden Crescent (with the Golden Wedge to the north) makes it a natural corridor. Its hilly borders with India and Myanmar are hard to patrol, and traffickers use at least 105 border points across 18 districts.\n\nMain routes:\n• Myanmar corridor — Teknaf, Ukhiya, Saint Martin's Island; the main gateway for yaba and crystal meth, by boat across the Naf River, on human carriers ('mules') and through exploited Rohingya networks, then on to Dhaka, Chattogram, Sylhet and India\n• Indian corridor — Satkhira, Jashore, Cumilla, Kurigram; Phensedyl, heroin and cannabis\n• Dhaka airport — international syndicates move cocaine from Africa and South America towards India",
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
            "• Users — about 8.2 million (nearly 5% of the population) according to the DNC, concentrated in Dhaka division; cannabis alone has about 6.1 million users\n• Main drug — yaba (methamphetamine + caffeine) from Myanmar, the largest share of seizures, popular among youth, workers and students\n• New methods — social media, encrypted apps and digital payments; women and children under 15 used as couriers; dense areas such as Geneva Camp hide ringleaders\n• Economic cost — UNCTAD estimates about USD 481 million lost a year; Bangladesh ranks 5th globally for narcotics-linked money laundering\n\nThe trade harms public health and productivity and feeds corruption at the borders.",
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
            "Counterfeit currency is fake or imitation money produced without legal government authorization, with the intention of deceiving people and passing it off as genuine legal tender. It is a form of financial fraud and economic crime, as old as coinage (plated Lydian 'fourrées'), and today uses advanced printing.\n\nKey characteristics:\n1. Illegal production — made without authorization from the government or central bank\n2. Intent to deceive — imitates the look and feel of genuine notes\n3. Missing security features — threads, watermarks, micro-printing and colour-shifting ink are absent or poorly copied",
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
            "Counterfeit currency harms the economy in six ways:\n1. Undermines the economy — weakens financial institutions and livelihoods\n2. Fuels the underground economy — finances organized crime, drug trafficking, money laundering and terrorism\n3. Reduces the value of legitimate money — more unauthorized notes in circulation\n4. Raises prices — an artificial increase in the money supply may cause inflation\n5. Causes direct losses — people and traders who receive fakes are not reimbursed\n6. Erodes public trust — people hesitate to accept cash, hurting small businesses and confidence in the financial system",
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
            "The India–Bangladesh border is associated with smuggling of Fake Indian Currency Notes (FICN). Notes enter India from the Bangladesh side, mainly through West Bengal, with Malda historically an important transit area; networks then distribute them across India.\n\nNotable cases:\n• 2021, Chattogram — rupees allegedly printed in Lahore moved through Sri Lanka and Chattogram, then overland to India\n• 2023, Dhaka — a syndicate produced fake rupees to buy narcotics and pay for smuggling\n• 2025, Jhenaidah — BGB arrested a man carrying ₹5.04 lakh in fake notes, bought for Tk 60,000\n\nResponse: India and Bangladesh have an MoU and joint cooperation against the production and circulation of counterfeit currency.",
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
            "Gold smuggling is the illegal movement of gold across national or international borders to avoid customs duties, taxes and regulations. It is facilitated by criminal networks, intermediaries and corrupt officials, and feeds money laundering, corruption and tax evasion.\n\nWhy people smuggle gold:\n• High value, easy portability — valuable yet compact\n• Price and tax differences — profit from gaps between countries\n• High import duties — evasion increases the margin\n• Weak border controls — easy to move undetected\n• Demand for undeclared gold — buyers avoid taxes and paperwork\n• Money laundering — gold stores and moves criminal proceeds",
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
            "Ways gold is smuggled:\n1. Airport passengers — carrying gold without declaring it\n2. Land borders — using unauthorized routes around checkpoints\n3. Sea routes — ships and boats\n4. Concealment — inside luggage, vehicles or commercial cargo\n5. Informal networks — brokers, couriers and traders outside formal channels\n\nMain global routes (producing/conflict areas → transit hubs → refiners → markets):\n• Africa → Dubai — Sudan, South Sudan and DR Congo gold via Uganda, Rwanda, Kenya and Egypt\n• UAE/Singapore → Bangladesh → India\n• Amazon → North America and Europe — gold from Venezuela, Brazil and Guyana",
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
            "Bangladesh's position:\n• Role — destination and transit country, not a producer\n• Source — mainly Dubai and other Gulf hubs\n• Entry — Hazrat Shahjalal International Airport, Dhaka\n• Exit — Jashore–Narail highway and Benapole into India (Middle East → Bangladesh → India)\n• Actors — couriers, financiers, dealers and intermediaries\n\nCase — BG-148 (2 July 2026): 160 gold bars (18.720 kg) were found in the cargo hold of a Biman flight from Dubai after DGFI intelligence; AVSEC, Customs and airline security acted and a case was filed at Bimanbandar Police Station. A cargo-hold consignment points to insider help — one reason kingpins are rarely identified.\n\nDetection and prevention:\n• Risk-based customs screening and passenger/baggage profiling\n• X-ray and advanced scanning\n• Intelligence-led investigations\n• Financial tracing of the money behind consignments\n• Anti-corruption checks on airport and customs staff\n• Stronger border surveillance and intelligence sharing with the UAE and India",
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
            "Smuggling is the illegal transportation of goods, substances, information or people across a border or into restricted places in violation of laws and regulations — 'the purposeful movement of people or goods across a border in violation of the relevant legal framework' (Gallien & Weigand, 2021). The word comes from German 'smuggeln' / Dutch 'smokkelen' (to transport secretly), and it became a recognized problem after Edward I created England's customs system in 1275. Its major forms are human, arms, drug, gold, wildlife and cultural-heritage smuggling.",
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
            "1. Rational Choice Theory (Cornish & Clarke, 1986): smuggling is a calculated decision; offenders compare profit, risk and punishment and smuggle when benefits exceed costs.\n2. Routine Activity Theory (Cohen & Felson, 1979): crime happens when a motivated offender, a suitable target and a lack of capable guardianship converge; weak border surveillance creates opportunities.\n3. Push–Pull Theory (Everett S. Lee, 1966): push factors (poverty, unemployment, inequality, lack of opportunity) interact with pull factors (higher profits, demand, better opportunities).\n4. Network Theory (Mark Granovetter, 1973): smuggling operates through social and criminal networks connecting suppliers, transporters, brokers and buyers; trust, relationships and information make it work.\n5. State–Crime Nexus (Bayart, Ellis & Hibou, 1999): state officials may participate in, protect or benefit from illegal activities; corruption, political connections and weak governance create illicit markets.",
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
            "No single theory is enough, but the State–Crime Nexus combined with Network Theory best explains why smuggling persists in Bangladesh. Gold smuggling begins with rational choice — price and duty differences make each bar profitable — and routine-activity gaps at busy airports and porous borders. But it continues because networks of couriers, financiers and dealers (Dubai → Dhaka → India) replace arrested carriers, and because insiders protect the trade: placing 160 bars in the cargo hold of flight BG-148 required access that only officials or staff could provide, and kingpins are rarely identified. Similarly, yaba from Myanmar is pushed by poverty in border areas and pulled by demand, but moves through Rohingya-linked networks across the weakly guarded Naf River.",
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
            "Arms smuggling, or gunrunning, is the illicit cross-border transfer, acquisition or diversion of firearms, ammunition and explosives. The illicit trade is worth an estimated USD 1.7–3.5 billion a year and mainly involves small arms and light weapons (SALW), which are mass-produced, portable and easy to conceal.\n\nWhy it is unique: drugs and human smuggling are driven mainly by profit, but arms are used to exercise power, secure territory and challenge national security. They raise the potential for violence among separatists, criminal syndicates, terrorists, drug cartels and pirates, and hinder states' development.",
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
            "Seven drivers of arms smuggling:\n1. High profitability — large profits for criminal networks\n2. Conflict and political instability — create strong demand for weapons\n3. Weak border controls — porous borders ease illegal movement\n4. Corruption — officials enable trafficking, diversion and illegal deals\n5. Demand from criminal groups — gangs, cartels and armed groups\n6. Weak law enforcement — limited capacity to detect, investigate and prosecute\n7. Diversion from legal markets — legal weapons leak into illicit hands",
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
            "Three major threats:\n• War and armed conflict — smuggled weapons prolong conflict, strengthen armed groups and undermine the state, causing violence and displacement (e.g. the Sahel, around gold-mining areas)\n• Organized crime — guns enable homicide, robbery, kidnapping, extortion and territorial control (e.g. Mexican cartels)\n• Terrorism — extremists buy weapons on illicit markets (e.g. trafficked firearms used in the 2015 Paris attacks)\n\nBangladesh: arms reportedly enter through networks linked to Myanmar and India, especially in Chattogram, Cox's Bazar and the south-eastern border, where long land and sea borders are hard to control. Intermediaries supply criminal groups, creating risks of gang violence, organized crime, terrorism and political violence.",
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
            "Bangladesh plays all three roles:\n• Source — its citizens are recruited and trafficked abroad\n• Transit — victims are moved through it\n• Destination — exploitation also happens inside the country\n\nTrafficking is both cross-border and internal, affecting men, women and children in urban, rural and migration settings.\n\nDrivers:\n1. Unsafe and irregular migration pathways\n2. Poverty and widespread unemployment\n3. Natural disasters and displacement\n4. Organized criminal networks exploiting vulnerability",
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
            "Seven international destinations are active by air: Italy, Serbia/Macedonia, Russia, the USA, Canada, Australia and Cambodia/Laos. Traffickers first obtain tourist, education or job visas, then route people through a third country to avoid surveillance.\n\nMain routes:\n• USA — Bangladesh → Brazil → Mexico\n• Canada — via a third country such as Nepal\n• Russia — via Saudi Arabia\n• Italy (most complex) — to the Middle East via Nepal, India or Sri Lanka, then Egypt, Tunisia or Libya\n• Sea routes (CID) — Bangladesh → Malaysia → Indonesia → Australia; Bangladesh → Myanmar → Thailand → Malaysia\n\nNew trend — Cambodia: 2,408 Bangladeshis went between January and April, and 15,000+ travelled with BMET clearance in 2025; some were sold to cyber-scam compounds. A $30–36 e-visa makes travel easy, and Bangladesh has no embassy in Cambodia, so victims struggle to get help.",
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
            "Legal framework:\n• Constitution of Bangladesh\n• Prevention and Suppression of Human Trafficking Act 2012 and its 2017 Rules\n• National Anti-Human Trafficking Authority Rules 2017 and Manob Pachar Tohobil Act 2017\n• UN Convention against Transnational Organized Crime, with the trafficking and migrant-smuggling protocols\n\nPenalty for organized trafficking: death, life imprisonment, or at least 7 years plus a fine of at least Tk 5 lakh. Charges must be framed within 90 and the trial finished within 180 working days.\n\nWhy enforcement is weak:\n• Slow investigations — trials miss the deadlines\n• Money settlements — cases are settled in exchange for money\n• Impunity — traffickers escape punishment, become emboldened and reoffend",
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
            "Common types of counterfeiting:\n• Currency — fake notes or coins to defraud people and systems\n• Consumer goods — designer clothing, watches, handbags, shoes\n• Electronics and parts — blacktopping (re-marking chips), e-waste repurposing, relabeling/grade spoofing, reselling defective parts\n• Health and safety items — fake medicines, vaccines, medical devices and sanitizers with harmful or inactive ingredients\n• Documents — passports, IDs, cheques, deeds and diplomas reproduced from scratch\n• Coins — casting, striking, plating, clipping or bi-metallic forgery",
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
            "• Counterfeit goods — illegally use a registered trademark, logo or brand name to pass as the original\n• Dupes / knockoffs — copy a product's design or style without the protected mark\n• Pirated goods — unauthorized copies of copyrighted music, films or software\n\nTrademark counterfeiting vs infringement: counterfeiting puts a fake mark that is identical or virtually indistinguishable from a registered trademark on goods — a severe, intentional form of infringement. Ordinary infringement is a similar (not identical) mark that confuses consumers about the source.",
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
            "Warning signs:\n• Unusually low prices or high-pressure discounts\n• Poor packaging — spelling mistakes, blurry logos, inconsistent fonts\n• Missing details — no serial numbers, batch codes, warranty or support contacts\n• Untrusted sellers — unverified social-media profiles, street vendors, unauthorized online stores\n\nHow to protect yourself:\n• Buy medicines and safety items only from licensed pharmacies, hospitals or manufacturers\n• Inspect packaging for errors, broken seals and missing batch numbers\n• Report unusual side effects or lack of effect to health authorities\n• Use verification tools such as QR-based systems (e.g. TraceChainBD)",
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
            "Limits of border control (fences, security, targeting routes):\n• Most trafficking for sexual exploitation is over short distances\n• Many victims travel voluntarily at first, so borders don't catch them\n• Strict controls push migrants onto deadly routes — 300+ deaths a year on the US–Mexico border since 2000 (Guerette, 2007)\n\nHarm-reduction strategies:\n• Educational campaigns warning migrants of risks\n• Training and life-saving equipment for border agents\n• Search-and-rescue teams\n• Lateral repatriation — returning migrants to safer border areas\n\nThese saved lives, though the overall death rate did not fall much. Transit countries can also help by checking documents, spotting high-risk people, protecting victims and prosecuting traffickers (Perrin, 2010).",
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
            "• Swedish model (1999) — prostitution treated as male violence against women; buyers are criminalized to reduce demand. Result: street prostitution fell, but indoor and online sex work grew\n• Dutch model (2000) — brothel ban lifted; voluntary adult prostitution legal under licensing. Result: fewer undocumented workers, but pimps and trafficking continue behind legal façades (Daalder, 2007)\n• Finnish model — buying sex is an offence only if the person is trafficked or exploited. Problem: clients cannot easily know, and most do not report even when suspicious (Farley et al., 2009)\n\nEach model shifts exploitation rather than ending it.",
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
            "1. Weak enforcement — authorities target business owners while pimps work outside the legal system; exploitation hides in homes and online; fewer than 10% of US police agencies identified any case in 2000–2006 (Farrell et al., 2010)\n2. Inconsistent definitions — countries apply the UN definition differently on consent, borders and forms of exploitation, 'the never-ending story of a definition' (Di Nicola, 2007); some mix trafficking, smuggling and illegal-immigration data\n3. No evaluation — only 10 of 23 US-funded projects abroad measured performance, none scientifically (GAO, 2007)\n4. Partial data efforts — Siamsect, IOM-Austria's 17 guidelines and ICMPD databases are only first steps\n5. Ideological debate — discussion is emotional, especially on sex work (Weitzer, 2010)",
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
            "Drug trafficking is a global illicit trade involving the cultivation, manufacture, distribution and sale of substances subject to drug prohibition laws (UN). Its key activities are cultivation and production (growing or making cocaine, heroin, methamphetamine, fentanyl); transportation and smuggling across local or international borders; and distribution and sale to wholesalers, dealers and users.",
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
            "1. Huge profit — prohibition makes prices soar across borders: cocaine costs about $2,000/kg in South America but up to $200,000/kg in Australia\n2. Dodging high taxes — untaxed cigarettes smuggled into Europe earn over $8 million per container, with lower jail risk than drugs\n3. High demand and addiction — addicted buyers pay regardless of cost or law: Myanmar yaba fuels a ~$60 billion East Asian market\n4. Weak borders and corruption — low-security borders and big bribes make smuggling routine, e.g. river borders in Southeast Asia\n\nSmugglers and cartels care about money, not human lives.",
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
            "Developing world:\n• Production and transit — opium (Afghanistan, Myanmar), cocaine (Colombia, Peru, Bolivia), cannabis and hashish (Morocco, Afghanistan), methamphetamine (Myanmar, Nigeria)\n• Corruption and cartel violence along trafficking corridors\n• Punitive response — imprisonment, because of weak healthcare and limited funds\n• Stigma — drug use seen as a personal moral failing\n\nDeveloped world:\n• High demand — wealthy consumers create massive profits\n• Medicalized response — residential rehab, harm reduction, opioid substitution therapy\n• Synthetic shift — prescription opioids, synthetic stimulants and cocaine\n\nOverall: drugs are largely produced in the developing world and consumed in the developed world, moved by sea, air, tunnels and the dark web.",
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
            "Economic objectives of drug syndicates:\n1. Profit maximization — immense revenue from controlling production, trafficking and distribution\n2. Wealth integration — laundering cash through legitimate businesses, real estate and offshore accounts\n3. Market expansion — new consumer bases and highly addictive synthetic drugs",
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
            "Political and social objectives:\n1. Systemic corruption — bribing, intimidating or blackmailing police, customs officials, politicians and judges to secure impunity\n2. Territorial control — governing areas as 'narco-states' or lawless zones free of state interference\n3. Community co-optation — funding local infrastructure, healthcare or services to buy loyalty, so communities shield leaders\n\nWhy this threatens the state: syndicates hollow out institutions from inside and replace state authority on the ground — the state–crime nexus in practice, as in Myanmar's Wa and Shan areas and Mexico's cartel territories.",
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
            "• Mexico — Sinaloa and Jalisco New Generation (CJNG) dominate the North American trade; notorious for fentanyl\n• Colombia — formerly Medellín and Cali cartels, key to cocaine\n• Other US-designated groups — Tren de Aragua (Venezuela); MS-13 (from Los Angeles, spread to Central America via deportations)\n• Asia — Golden Triangle syndicates run by ethnic militias such as the United Wa State Army (opium, meth); Triads and Yakuza (trafficking, laundering, distribution)\n• Europe — Albanian mafia, Italy's 'Ndrangheta and Russian syndicates control ports, heroin routes and cocaine markets, with deep political and financial ties",
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
            "• Opium — pain reliever and central nervous system depressant, used for pain, diarrhoea, asthma, fever, insomnia and rheumatism; freely available in the US until 1914; Chinese immigrants popularized smoking it and opium dens became linked with crime\n• Morphine (early 19th century) — far more powerful; the hypodermic syringe (1856) allowed injection; heavy use in the US Civil War left veterans dependent ('army disease')\n• Heroin (~1900) — diacetylmorphine, marketed as a safer, non-addictive alternative to morphine; instead misuse rose, addiction became understood, and regulation began",
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
            "• Cause — Britain paid for Chinese tea with opium grown in India\n• Ban undermined — China banned opium, but smuggling and corruption defeated the ban\n• First Opium War (1840–42) — triggered when China destroyed British opium in 1839; China lost, paid compensation and Hong Kong became a British colony\n• Second Opium War (1856–60) — weakened China further and widened foreign trading privileges\n\nSignificance: the wars show how the drug trade, international commerce and state power were intertwined, and they increased opium use in Chinese communities in the US.",
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
            "From racialized restrictions to regulation:\n• Chinese workers who came for mining and railways were linked to opium smoking, fuelling anti-Chinese sentiment\n• 1880s — US opium-import restrictions targeting Chinese immigrants\n• 1909 — International Opium Commission\n• 1912 — International Opium Convention\n• 1914 — Harrison Act: federal regulation of opiates and cocaine\n\nLessons:\n1. Medical use can grow into mass addiction (as with today's opioids)\n2. Prohibition creates price gaps that make smuggling profitable\n3. States themselves have profited from drugs\n4. Drug control can target minorities rather than harm",
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
            "• Scale — roughly 39–40% of products in the domestic market are counterfeit or adulterated\n• Categories — personal care and cosmetics 32%, electrical and electronic goods 13%, clothing and footwear 12%, food and beverages 10%, pharmaceuticals 9%\n• Methods — copied brand names and forged BSTI seals or holograms, made in hidden factories around Dhaka and Chattogram; smuggled Chinese electrical parts relabelled with fake brand logos\n• Cost — about Tk 3,170 crore in lost tax revenue and over Tk 13,680 crore in losses for legitimate brands each year",
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
            "• Health — adulterated milk, oil, honey, tea, coffee, bottled water and baby food are consumed by 80–90% of households; the WHO estimates 600 million fall ill and 442,000 die each year from contaminated food; studies link adulterated food to cancer, kidney disease and diabetes\n• Medicines — counterfeit drugs cost about $309 million a year and cause treatment failure, drug resistance or death\n• Safety — fake wires, bulbs and fans fail standards; 38% of last year's fires were electrical short circuits\n• Economy — businesses and the government lose revenue, and the trade funds organized crime and forced labour",
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
            "Legal framework:\n• Penal Code 1860 — s.465 forgery (2 years); s.466 court records/public registers (7 years); s.467 valuable securities and wills (life or 10 years); s.475–476 counterfeit authentication marks and devices (up to life / 7 years); s.483 trade or property marks (2 years); s.484 marks used by public servants (3 years)\n• Trademarks Act 2009 — civil and criminal remedies\n• Consumers' Right Protection Act 2009, s.51 — selling fake or expired goods or medicines: up to 1 year, Tk 50,000 fine, or both\n\nEnforcement gaps:\n• DNCRP and BSTI mobile courts and raids are reactive, not systemic\n• Penalties are light compared with profits\n\nSolutions:\n• Intelligence-led action against factories and distributors\n• Tougher penalties for health items\n• Supply-chain traceability, e.g. TraceChainBD (blockchain + IoT QR codes)\n• Consumer education — buy from authorized sources and check packaging",
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
            "Small arms vs light weapons (1999 UN Report on Small Arms):\n• Small arms (personal use) — pistols, revolvers, rifles, carbines, submachine guns, assault rifles, light machine guns\n• Light weapons (collective use) — heavy machine guns, grenade launchers, portable anti-aircraft and anti-tank guns, recoilless rifles, mortars under 100 mm\n• Ammunition and explosives — integral to both\n\nAuthorized vs unauthorized transfers:\n• Authorized — import, export, transit or ownership change with state approval under national and international law\n• Unauthorized (illicit) — without legal authorization: unmarked weapons, diversion to illegal users, embargo violations\n• Grey areas — state-approved transfers that still breach international law",
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
            "International:\n• UN Firearms Protocol (2001) — legally binding; States must criminalize illicit firearms trafficking, set up marking and identification, and support tracing and information exchange\n• Arms Trade Treaty (2013) — regulates the international trade in conventional arms; bans transfers with a substantial risk of serious human-rights violations\n\nNational (Bangladesh):\n• Arms Act (1878) — bans unauthorized import, export, transport, possession and dealing; illegal import/export carries life imprisonment or at least 7 years' rigorous imprisonment\n• Smuggling of Arms Act (1934) — lets the government declare notified areas and remove identified smugglers; penalties include arrest without warrant",
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
            "Measures to combat arms smuggling:\n1. Criminalize illegal arms trafficking under the Firearms Protocol\n2. Strengthen investigations and prosecutions\n3. Enforce strict licensing for import, export and transfer\n4. Improve marking, record-keeping and tracing\n5. Confiscate and safely destroy illicit and seized weapons\n6. Enhance international cooperation and information sharing\n\nFor Bangladesh: tighter surveillance of the Myanmar and Indian borders and the Chattogram–Cox's Bazar coast.",
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
            "Recruitment: victims are approached with false job promises in hotels, cleaning or entertainment; some knowingly agree to sex work but are deceived about the real conditions (Vocks & Nijboer, 1999). Transportation: victims often cross borders legally with real documents on student, tourist or business visas, which makes it hard for border officers to identify them. Exploitation: at the destination they are exploited in prostitution, labour or scam compounds; in the Netherlands, some clubs were owned by traffickers, some cooperated, and others looked the other way.",
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
            "• Corruption and human trafficking — strong link in research (Bales, 2005; Studnicka, 2010); high-corruption countries see more trafficking; in Brazil 71% of cases involved corrupt officials; in Bangladesh cases are 'settled' for money, so traffickers reoffend; abroad, some venues cooperate or look the other way\n• Corruption and drug trafficking — systemic corruption is an explicit syndicate objective (bribing, intimidating or blackmailing police, customs, politicians and judges); some create narco-states; weak borders plus bribes make smuggling routine; historically, China's opium ban was undermined by smuggling and corruption",
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
            "• Gold — smuggling is 'facilitated by… corrupt officials'; in the BG-148 case 18.72 kg was placed in an aircraft's cargo hold, hard without insiders, and kingpins stay unidentified; in the Kerala case diplomatic baggage was misused\n• Arms — corruption is a listed driver; officials enable diversion from government stockpiles and illegal transactions; forged end-user certificates exploit the legal trade\n\nResponse: anti-corruption checks, financial tracing and zero tolerance for corruption are central to fighting both.",
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
            "Ways arms are acquired:\n1. Diversion from government stockpiles — weak security or corrupt officials\n2. Straw purchasing — an eligible buyer legally buys from a licensed dealer and passes the guns on\n3. Illicit manufacture and conversion — artisanal guns, reactivated weapons\n4. Online markets — social media, marketplaces and the dark web\n5. Theft — from homes, vehicles and dealers\n6. Exploiting the legal trade — forged end-user certificates",
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
            "Transport and concealment:\n• Freight and container ships — large loads\n• Small vessels such as dhows — maritime smuggling with small crews\n• Post and courier — disassembled parts and ammunition\n• Road — hidden in a vehicle's structure or fuel tank\n• Commercial airlines — in checked luggage\n• Professional concealment — custom crates, mixed with heavy goods like timber\n• Ant trafficking — many individuals each carrying a few weapons across a border on foot to avoid detection",
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
            "Seven stages:\n1. Sourcing / acquisition — illicit manufacture, theft, diversion or illegal purchase\n2. Collection and preparation — weapons gathered for movement\n3. Concealment — hidden in legitimate goods or covered by false documents\n4. Transportation — by land, air or sea across jurisdictions\n5. Transit / intermediaries — brokers and middlemen link source and destination\n6. Border crossing — exploiting weak controls or corruption\n7. Distribution / delivery — to criminal or armed groups\n\nRoute patterns:\n• Departures — North America, Europe, Western Asia; destinations — Central and South America, parts of Western Asia\n• Land borders — about two-thirds of cases; sea shipments fewer but ~5× larger\n• Techniques — concealment, misdeclaration, document fraud\n• Most seized — pistols globally; shotguns in Africa and Asia",
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
            "1. Recruitment — false job promises in hotels, cleaning or entertainment; some agree to sex work but are deceived about conditions (Vocks & Nijboer, 1999)\n2. Transportation — often legal travel with real documents on student, tourist or business visas, which makes victims hard to identify at borders\n3. Exploitation — prostitution, labour or scam compounds; in the Netherlands some clubs were owned by traffickers, some cooperated, and others looked the other way",
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
            "Signs in the person:\n• Disoriented about place, date or basic facts\n• Cannot speak freely, or someone speaks for them\n• Coached, scripted answers\n• Signs of abuse, malnourishment or exhaustion\n• Few possessions — no ID, phone or money\n• Lives and works in the same place\n• Fearful or submissive around a particular person\n• A minor in commercial sex with an older 'boyfriend' or 'manager'; branding tattoos\n\nSigns in the situation:\n• Many people in a cramped space with limited movement\n• Someone else controls passports or IDs\n• Not allowed to speak for themselves to doctors or officials\n• Story does not match their documents\n• Does not know the employer's address or terms of work",
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
            "Why victims stay:\n1. Emotional ties — the trafficker may be a partner, relative or 'boyfriend'\n2. Fear of law enforcement — without papers, they fear arrest or deportation\n3. Lack of better options — debt and poverty leave nothing to return to\n4. Shame or stigma — especially after sexual exploitation\n\nTraffickers reinforce this with manipulation, debt and confiscated documents. As a result 'free will' becomes blurred: many victims believe they chose this life even while controlled and abused, and because some first consented, they may not be recognized as victims.",
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
            "Afghanistan has long been the world's largest opium producer. Its role grew after the 1970s, when Iran, Pakistan and Turkey banned opium and traffickers turned to Afghan farmers; insurgent and terrorist groups have used drug profits since the Cold War.\n\nMain routes:\n• Balkan Route — Afghanistan → Pakistan → Iran → Turkey → Eastern → Western Europe (sometimes via Romania or Ukraine)\n• Northern Route — Central Asia → Russia and the Baltic States\n• Southern Route — to Pakistan\n• Air routes — Pakistan to the UK, Africa and North America\n• China–India route — via Pakistan and Central Asia\n\nMuch heroin stays in the region (Tajikistan, Kazakhstan, Kyrgyzstan); Central Asia has about 320,000 opiate users.",
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
            "• Cultivation down ~95% — from 232,000 ha (2022) to 10,200 ha\n• Production down — from 6,200 to about 296 metric tons\n• Displacement — small-scale farming moved to remote Badakhshan, with clashes against eradication teams\n• Meth boom — profitable, covert, drought-resistant, using the wild ephedra plant\n• Synthetic shift — the UN warns that as heroin stockpiles run dry, networks are switching to fentanyl and nitazenes, raising overdose risk",
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
            "• History — opium trade began under British rule; after World War II, Chinese Kuomintang forces ran it to fund their fight against communists\n• Conditions — poverty and ethnic conflict in Shan, Wa and Kachin States leave the government little control\n• Scale — Myanmar surpassed Afghanistan as top opium producer (53,000+ ha); 'super labs' in Shan State make it the main source of yaba and crystal meth\n• Recent change — production grew after the military coup and civil war; Rakhine State became a transit hub\n• Who controls it — armed groups (United Wa State Army, Shan State Army, Kachin Independence Army) and ethnic Chinese networks, funded and protected by drug profits",
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
            "First, polymer banknotes resist counterfeiting better than paper: Australia introduced a polymer $10 commemorative note in 1988 and in 1996 became the first country with a complete polymer series, followed by New Zealand and others. Second, advanced security features — 3D security ribbons, special printing techniques, complex designs and colours, distinctive portraits and polymer substrates — make reproduction difficult and should be upgraded periodically as counterfeiting technology evolves. Third, countries can keep a reserve banknote series to introduce if counterfeiting compromises the current one, as Switzerland historically did. Cross-border cooperation such as the India–Bangladesh MoU and public awareness of security features complete prevention.",
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
            "• Same background — smugglers often come from the same community as the migrants\n• Ties to both countries — links to home and destination countries (Kleemans & van de Bunt, 2003)\n• Former migrants — some were once smuggled themselves\n• Motive — usually money, but they are not necessarily criminal masterminds",
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
            "How networks work:\n• Small and flexible, with people at origin, transit and destination\n• With forged documents, migrants can travel more easily (e.g. by air)\n• Without documents, journeys are longer and riskier, with more transfers and stops\n• Often a chain of loosely connected groups handles the route (Zhang, 2007; Neske & Doomernik, 2006)\n\nIs it controlled by organized crime? The debate centres on Chinese migration. Soudijn (2006), studying 88 Dutch court cases, found about 25% of smugglers were non-Chinese, and groups took contracts from various sources and worked with foreign partners. They are not tight hierarchies but form stable alliances with consistent members when business runs smoothly — closer to a network model than a mafia.",
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
            "1. Polymer banknotes — more resistant than paper; Australia issued a polymer $10 note in 1988 and the first complete polymer series in 1996, followed by New Zealand and others\n2. Advanced security features — 3D security ribbons, special printing, complex designs and colours, distinctive portraits, polymer substrates; upgrade them regularly\n3. Reserve banknote series — kept ready in case the current series is compromised, as Switzerland historically did\n4. Cooperation and awareness — e.g. the India–Bangladesh MoU, and teaching the public to check security features",
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
            "• Casting (molded) — molten base metal poured into molds made from real coins; rough edges, soft details\n• Struck counterfeits — fake blanks pressed between dies, often CNC-made from digital scans\n• Plating and coating — a cheap core (copper, lead) covered with a thin gold or silver layer\n• Clipping and shaving — filing precious metal off real coins (historical)\n• Bi-metallic forgery — painted or mismatched inner and outer rings on two-tone coins",
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
            "Selected countries:\n• United States — up to 20 years; United Kingdom — up to 10 years\n• China — 3 years to life + fine; Japan — 3 years to life; South Korea — 2 years to life\n• France — up to 30 years + €450,000; Germany — up to 15 years; Canada — up to 14 years\n• Singapore — up to 20 years; Zambia — life imprisonment\n\nBangladesh (Penal Code 1860, coins):\n• Counterfeiting coins — up to 7 years + fine\n• Official Bangladesh coins — up to 10 years or life + fine\n• Making or selling counterfeiting tools — 3 to 10 years\n• Importing, exporting or passing known fakes — up to 10 years",
        },
      ],
    },
  ];
})();
