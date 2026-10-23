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
            "UNODC defines human trafficking as \"the recruitment, transportation, transfer, harbouring or receipt of people through force, fraud or deception, with the aim of exploiting them for profit.\" It often begins with an offer a person cannot refuse — a good job or a marriage — but ends in exploitation.\n\nTraffickers use seven means: threats or use of force, coercion, fraud, deception, abuse of a position of vulnerability, giving payments or benefits, and abduction. The most common forms are commercial sexual exploitation, forced labour, forced scamming and forced marriage, including child marriage.",
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
            "Some people start as smuggled migrants and later become trafficking victims. A migrant may agree to pay a smuggler for an irregular crossing, but on arrival find that the 'travel debt' has grown and must be repaid through unpaid or unsafe work, or be threatened into acts they never agreed to. Once in a foreign place without papers, money or language, and afraid of the police, they have no real choice but to obey (Andrees, 2008; Herman, 2006). At that moment consent has been replaced by control and exploitation — smuggling has turned into trafficking. Initial consent therefore does not mean the person is safe.",
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
            "The Golden Triangle is the region where Myanmar, Laos and Thailand meet — one of the world's oldest and largest drug-producing areas, historically famous for opium and heroin and now for methamphetamine (yaba).\n\nThe Golden Crescent comprises Afghanistan (the main cultivation hub), Pakistan (transit and refining hub) and Iran (the main corridor to Europe).\n\nThe Golden Wedge is the newest route, linking north Bangladesh with the Indian states of Himachal Pradesh and Uttar Pradesh and extending to Nepal and parts of Bhutan. It lies between the Golden Crescent and the Golden Triangle.",
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
            "Bangladesh is not a major producer, but its location between the Golden Triangle and Golden Crescent, with the Golden Wedge to the north, makes it a natural corridor. Its hilly borders with India and Myanmar are hard to patrol, and traffickers use at least 105 border points across 18 districts.\n\nThe Myanmar corridor (Teknaf, Ukhiya, Saint Martin's Island) is the main gateway for yaba and crystal meth: boats cross the Naf River, human carriers ('mules') hide the drugs, and Rohingya refugee networks are exploited. From Cox's Bazar, yaba moves to Dhaka, Chattogram and Sylhet and onwards to India. The Indian corridor (Satkhira, Jashore, Cumilla, Kurigram) carries Phensedyl, heroin and cannabis. International syndicates use Dhaka airport to move cocaine from Africa and South America towards India.",
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
            "The DNC estimates about 8.2 million drug users — nearly 5% of the population — concentrated in Dhaka division; cannabis alone has around 6.1 million users. Yaba, a methamphetamine-and-caffeine tablet from Myanmar, is the most common drug and the largest share of seizures, popular among youth, workers and students.\n\nTrafficking is modernizing: deals move to social media, encrypted apps and digital payments; women and children under 15 are used as couriers; and dense areas such as Geneva Camp hide ringleaders. Economically, UNCTAD estimates Bangladesh loses about USD 481 million a year to drug trafficking, ranking 5th globally for narcotics-linked money laundering. The trade harms public health and productivity and feeds corruption at the borders.",
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
            "Counterfeit currency is fake or imitation money produced without legal government authorization, with the intention of deceiving people and passing it off as genuine legal tender. It is a form of financial fraud and economic crime. Counterfeiting is as old as coinage — plated copies (fourrées) existed in the Lydian civilization — while modern counterfeiters use advanced printing.\n\nKey characteristics: (1) illegal production without authorization from the government or central bank; (2) intent to deceive, imitating the look and feel of genuine notes; and (3) missing security features — threads, watermarks, micro-printing and colour-shifting ink are absent or poorly copied.",
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
            "Counterfeit currency harms the economy in six ways. It undermines national economies, weakening financial institutions and livelihoods. It fuels the underground economy by financing organized crime, drug trafficking, money laundering and terrorism. Increased circulation of unauthorized notes can reduce the value of legitimate money, and an artificial increase in the money supply may contribute to inflation. Individuals and traders suffer direct losses because central banks and shops do not reimburse fake notes. Finally, widespread fakes make people hesitant to accept cash, hurting small businesses and eroding confidence in the currency and the financial system.",
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
            "The India–Bangladesh border is associated with smuggling of Fake Indian Currency Notes (FICN). Notes enter India from the Bangladesh side, particularly through West Bengal, with Malda historically an important transit area; networks then distribute them across India.\n\nCases show the pattern: in 2021, Chattogram police found a network moving rupees allegedly printed in Lahore through Sri Lanka and Chattogram, then overland to India; in 2023, a Dhaka syndicate produced fake rupees to buy narcotics and pay for smuggling; and in 2025, BGB arrested a man near the Jhenaidah border with ₹5.04 lakh in fake notes bought for Tk 60,000. India and Bangladesh have an MoU and joint cooperation to counter production and circulation.",
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
            "Gold smuggling is the illegal movement of gold across national or international borders to avoid customs duties, taxes and regulations. It is facilitated by criminal networks, intermediaries and corrupt officials and contributes to money laundering, corruption and tax evasion.\n\nPeople smuggle gold because it is highly valuable yet compact and portable; price and tax differences between countries create profit; high import duties make evasion attractive; weak border controls make it easy; buyers want undeclared gold outside formal markets; and gold can be used to move or store the proceeds of crime.",
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
            "Gold is smuggled (1) by airline passengers who do not declare it; (2) across land borders using unauthorized routes; (3) by ships and boats on sea routes; (4) hidden in luggage, vehicles or commercial cargo; and (5) through informal networks of brokers, couriers and traders outside formal channels.\n\nGlobally, gold flows from producing or conflict areas to transit hubs, refiners and consumer markets: African gold (Sudan, South Sudan, DR Congo) moves via Uganda, Rwanda, Kenya and Egypt to Dubai; gold from the UAE and Singapore enters Bangladesh and crosses into India; and Amazon gold from Venezuela, Brazil and Guyana moves towards North America and Europe.",
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
            "Bangladesh is mainly a destination and transit country for gold, not a producer. Gold comes chiefly from Dubai and other Gulf hubs and enters through Hazrat Shahjalal International Airport, Dhaka; it then moves along the Jashore–Narail highway to border areas such as Benapole and into India (Middle East → Bangladesh → India). Networks of couriers, financiers, dealers and intermediaries run the trade.\n\nIn the BG-148 case (2 July 2026), 160 gold bars weighing 18.720 kg were found in the cargo hold of a Biman flight from Dubai after DGFI intelligence; AVSEC, Customs and airline security acted and a case was filed at Bimanbandar Police Station. Placement in a cargo hold points to insider help and shows why kingpins are hard to identify.\n\nPrevention: risk-based customs screening; passenger and baggage profiling; X-ray and advanced scanning; intelligence-led investigations; financial tracing of the money behind consignments; anti-corruption checks on airport and customs staff; stronger border surveillance; and intelligence sharing with the UAE and India.",
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
            "Arms smuggling, or gunrunning, is the illicit cross-border transfer, acquisition or diversion of firearms, ammunition and explosives. The illicit trade is estimated at USD 1.7–3.5 billion a year and mainly involves small arms and light weapons (SALW), because they are mass-produced, portable and easy to conceal.\n\nIt is unique because, unlike drugs or human smuggling, which are mainly driven by profit, arms are used to exercise power, secure territory and challenge national security. It increases the potential for violence among non-state actors — separatists, criminal syndicates, terrorists, drug cartels and pirates — and hinders states' socio-economic and political development.",
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
            "Seven drivers: (1) high profitability for criminal networks; (2) conflicts and political instability, which create strong demand for weapons; (3) weak, porous borders; (4) corruption, as corrupt officials enable trafficking, diversion and illegal transactions; (5) demand from gangs, cartels and armed groups; (6) weak law enforcement with limited capacity to detect, investigate and prosecute; and (7) diversion from legal markets, where legally manufactured or imported weapons leak into illicit hands.",
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
            "Arms smuggling poses three major threats. First, war and armed conflict: smuggled weapons fuel and prolong conflict, strengthen armed groups and undermine state authority, causing violence and displacement — as in the Sahel around gold-mining areas. Second, organized crime: firearms facilitate homicide, robbery, kidnapping, extortion and trafficking and let groups control territory; Mexican cartels rely on illicit guns to protect operations and fight rivals. Third, terrorism: extremists obtain weapons on illegal markets — firearms trafficked through illicit networks were used in the 2015 Paris attacks.\n\nIn Bangladesh, arms reportedly enter through networks connected to Myanmar and India, especially in Chattogram, Cox's Bazar and the south-eastern border, where long land and maritime borders are hard to control. Intermediaries and illicit dealers supply criminal groups, creating risks of gang violence, organized crime, terrorism and political violence.",
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
            "Bangladesh is a source country because its citizens are recruited and trafficked abroad; a transit country because victims are moved through it; and a destination country because exploitation also happens inside it. Trafficking is both cross-border and internal and affects men, women and children in urban, rural and migration settings.\n\nThe main drivers are unsafe and irregular migration pathways; poverty and widespread unemployment; natural disasters and displacement; and organized criminal networks that exploit this vulnerability.",
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
            "Seven international destinations are active by air: Italy, Serbia/Macedonia, Russia, the USA, Canada, Australia and Cambodia/Laos. Traffickers first get tourist, education or employment visas, then move people through a third country to avoid surveillance. For the USA the route is Bangladesh → Brazil → Mexico; for Canada, via a third country such as Nepal; for Russia, via Saudi Arabia. The Italy route is the most complex: to the Middle East via Nepal, India or Sri Lanka, then through Egypt, Tunisia or Libya. By sea, the CID identifies Bangladesh → Malaysia → Indonesia → Australia, and Bangladesh → Myanmar → Thailand → Malaysia.\n\nA new trend is forced scamming in Cambodia: 2,408 Bangladeshis went there between January and April, over 15,000 travelled with BMET clearance in 2025, and some were sold to cyber-scam compounds. A $30–36 e-visa makes travel easy, and Bangladesh has no embassy in Cambodia, so victims struggle to get help.",
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
            "The framework includes the Constitution, the Prevention and Suppression of Human Trafficking Act 2012 and its 2017 Rules, the National Anti-Human Trafficking Authority Rules 2017, and the Manob Pachar Tohobil Act 2017, alongside the UN Convention against Transnational Organized Crime with its trafficking and migrant-smuggling protocols. For organized trafficking the law prescribes death, life imprisonment, or at least seven years plus a fine of at least Tk 5 lakh, and requires charges within 90 and trial within 180 working days.\n\nEnforcement is weak because slow investigations prevent trials finishing on time, and cases are settled in exchange for money. Traffickers therefore evade punishment, become emboldened and reoffend.",
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
            "Counterfeiting takes several forms. Currency counterfeiting produces fake notes or coins to defraud people and systems. Consumer-goods counterfeiting copies designer clothing, watches, handbags and shoes. Electronics counterfeiting misrepresents components such as chips and capacitors through blacktopping (erasing and re-marking chips), e-waste repurposing, relabeling or grade spoofing, and reselling defective parts. Health-and-safety counterfeiting fakes medicines, vaccines, medical devices and sanitizers, often with harmful or inactive ingredients. Document counterfeiting reproduces passports, IDs, cheques, deeds and diplomas from scratch. Coin counterfeiting uses casting, striking, plating, clipping or bi-metallic forgery.",
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
            "Counterfeit goods illegally use a registered trademark, logo or brand name to pass as the original. Dupes or knockoffs copy a product's design or style without using the protected mark. Pirated goods are unauthorized copies of copyrighted material such as music, films or software.\n\nTrademark counterfeiting places a fake mark that is identical or virtually indistinguishable from a registered trademark on goods — a severe, intentional form of infringement meant to trick buyers. Ordinary infringement occurs when a similar mark causes confusion about a product's source.",
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
            "Warning signs include prices far below market value or high-pressure discounts; poor packaging with spelling mistakes, blurry logos or inconsistent fonts; missing serial numbers, batch codes, warranty or customer-support details; and untrusted sellers such as unverified social-media profiles or street vendors. To protect themselves, consumers should buy medicines and safety items only from licensed pharmacies, hospitals or manufacturers; inspect packaging for errors, broken seals and missing batch numbers; report unusual side effects or lack of effect to health authorities; and use verification tools such as QR-based systems like TraceChainBD.",
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
            "Drug syndicates pursue three economic objectives. Profit maximization: generating immense revenue by controlling production, trafficking and distribution. Wealth integration: laundering cash through legitimate businesses, real estate and offshore accounts to blend it into the global financial system. Market expansion: building new consumer bases and introducing highly addictive synthetic drugs to create fresh revenue streams.",
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
            "Syndicates also pursue power. Systemic corruption: they bribe, intimidate or blackmail law enforcement, customs officials, politicians and judges to secure operational impunity. Territorial control: they establish their own governance over areas — 'narco-states' or lawless zones — where they operate without government interference. Community co-optation: they fund local infrastructure, healthcare or social services in poor areas to buy public loyalty, so communities shield their leaders from the authorities.\n\nThese aims threaten the state because they hollow out its institutions from inside and replace its authority on the ground — the state–crime nexus in practice, seen in Myanmar's Wa and Shan areas and Mexico's cartel territories.",
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
            "In Latin America, Mexican cartels — Sinaloa and Jalisco New Generation (CJNG) — dominate the North American trade and are notorious for fentanyl; Colombian cartels (formerly Medellín and Cali) were key to cocaine; the US also designates Tren de Aragua (Venezuela) and MS-13 (from Los Angeles, spread to Central America through deportations). In Asia, Golden Triangle syndicates run by ethnic militias such as the United Wa State Army produce opium and meth, and Triads and Yakuza handle trafficking, laundering and distribution. In Europe, the Albanian mafia, Italy's 'Ndrangheta and Russian syndicates control ports, heroin routes and cocaine markets with deep political and financial ties.",
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
            "1. Huge profit — prohibition makes prices skyrocket across borders: cocaine costs about $2,000/kg in South America but up to $200,000/kg in Australia.\n2. Dodging high taxes — high taxes on legal goods create illegal markets: untaxed cigarettes smuggled into Europe earn over $8 million per container with lower jail risk than drugs.\n3. High demand and addiction — addicted buyers pay regardless of cost or law: cheap Myanmar yaba fuels an estimated $60 billion East Asian market.\n4. Weak borders and corruption — low-security borders and big bribes make smuggling routine: hard-to-patrol river borders in Southeast Asia let gangs pass border posts.\nSmugglers and cartels care about money, not human lives.",
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
            "In the developing world, many countries are production zones — opium (Afghanistan, Myanmar), cocaine (Colombia, Peru, Bolivia), cannabis and hashish (Morocco, Afghanistan) and methamphetamine (Myanmar, Nigeria) — or trafficking corridors suffering corruption and cartel violence. Lacking healthcare infrastructure and money, they respond punitively with imprisonment, and drug use is stigmatized as a personal moral failing.\n\nIn the developed world, wealthy consumers create high demand and massive profits. These countries lean towards a medicalized public-health approach — residential rehab, harm reduction and opioid substitution therapy — and their markets focus on prescription opioids, synthetic stimulants and cocaine. Overall, drugs are largely produced in the developing world and consumed in the developed world, moved by sea, air, tunnels and the dark web.",
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
            "Border control — fences, security and targeting routes — has serious limits. Most trafficking for sexual exploitation happens over short distances, and many victims travel voluntarily at first, so borders do not catch them. Strict controls also push migrants onto deadly routes: since 2000, over 300 migrant deaths a year have been recorded on the US–Mexico border (Guerette, 2007). Harm-reduction strategies were therefore introduced: educational campaigns warning migrants, training and life-saving equipment for border agents, search-and-rescue teams, and lateral repatriation to safer border areas. They saved lives, though the overall death rate did not fall significantly. Transit countries can help by checking documents, spotting high-risk people, protecting victims and prosecuting traffickers (Perrin, 2010).",
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
            "Sweden (since 1999) treats prostitution as male violence against women and criminalizes buyers to change norms and reduce demand; street prostitution dropped, but indoor and online sex work grew. The Netherlands lifted its brothel ban in 2000 and legalized voluntary adult prostitution under strict licensing; there are fewer undocumented prostitutes, but many women still work with pimps and trafficking continues behind legal façades (Daalder, 2007). Finland takes a mixed approach, punishing buyers only if the person is trafficked or exploited; the problem is that clients cannot easily know, and although campaigns like 'Appearances Are Deceptive' encourage reporting, most men take no action even when suspicious (Farley et al., 2009). Each model shifts exploitation rather than ending it.",
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
            "First, enforcement is weak and patchy: authorities target business owners while pimps operate outside the legal system, exploitation hides in homes and online, and fewer than 10% of US police agencies identified any case in 2000–2006 (Farrell et al., 2010). Second, countries apply the UN definition differently on consent, cross-border movement and forms of exploitation — 'the never-ending story of a definition' (Di Nicola, 2007) — and some mix trafficking, smuggling and illegal immigration data. Third, programmes are rarely evaluated: of 23 US-funded projects abroad, only 10 measured performance and none used strong scientific methods (GAO, 2007). Data projects (Siamsect, IOM-Austria's 17 guidelines, ICMPD databases) are only partial steps, and debate remains emotional and ideological (Weitzer, 2010).",
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
            "The 1999 UN Report on Small Arms separates small arms for personal use (pistols, revolvers, rifles, carbines, submachine guns, assault rifles, light machine guns) from light weapons for collective use (heavy machine guns, grenade launchers, portable anti-aircraft and anti-tank guns, recoilless rifles, mortars under 100 mm); ammunition and explosives belong to both.\n\nAn authorized transfer — import, export, transit or ownership change — has state approval under national and international law. An unauthorized (illicit) transfer lacks legal authorization: unmarked weapons, diversion to illegal end-users or embargo violations. Grey areas exist where state-approved transfers still breach international law.",
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
            "Internationally, the UN Firearms Protocol (2001) is a legally binding treaty requiring States Parties to criminalize illicit firearms trafficking, establish marking and identification systems, and facilitate tracing and information exchange. The Arms Trade Treaty (2013) regulates international trade in conventional arms and prohibits transfers where there is a substantial risk the weapons will be used for serious human-rights violations.\n\nIn Bangladesh, the Arms Act (1878) prohibits the unauthorized import, export, transport, possession and dealing in arms and ammunition; illegal import or export can bring life imprisonment or at least seven years' rigorous imprisonment. The Smuggling of Arms Act (1934) empowers the government to take preventive action — declaring notified areas and removing identified smugglers — and provides penalties, including arrest without warrant, for violating such orders.",
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
            "States should criminalize illegal arms trafficking under the Firearms Protocol; strengthen investigations and prosecutions of traffickers; enforce strict licensing and authorization for the import, export and transfer of firearms; improve firearm marking, record-keeping and tracing so diverted guns can be followed; confiscate and safely destroy illicit and seized weapons so they cannot re-enter circulation; and enhance international cooperation and information sharing among law-enforcement agencies. For Bangladesh, stronger surveillance of the Myanmar and Indian borders and the Chattogram–Cox's Bazar coast is also essential.",
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
            "Opium, a pain reliever and central nervous system depressant, was widely used before modern medicine for pain, diarrhoea, asthma, fever, insomnia and rheumatism. In the US it was freely available, often without prescription, until 1914; Chinese immigrants popularized smoking it in California, and opium dens became linked with crime. Morphine, developed from opium in the early 19th century, was far more powerful; the hypodermic syringe (1856) allowed injection, and use soared in the US Civil War, leaving veterans dependent — 'army disease'. Around 1900, heroin (diacetylmorphine) was marketed as a safer, non-addictive alternative to morphine; instead misuse rose, people began to understand addiction, and governments started to regulate.",
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
            "Britain faced a trade imbalance with China because of its demand for Chinese tea, and paid for it with opium grown in India. China banned opium, but widespread smuggling and corruption undermined the ban. In 1839 China confiscated and destroyed British opium, triggering the First Opium War (1840–42); China was defeated, forced to pay compensation, and Hong Kong became a British colony. The Second Opium War (1856–60) weakened China further and expanded foreign trading privileges. The wars show how the drug trade, international commerce and state power became intertwined — and they increased opium availability in Chinese communities in the US.",
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
            "Chinese workers who came to the US for mining and railways were associated with opium smoking, fuelling anti-Chinese sentiment, and in the 1880s the US restricted opium imports in ways that targeted Chinese immigrants. Control then became formal and international: the International Opium Commission (1909), the International Opium Convention (1912) and the Harrison Act (1914), which introduced federal regulation of opiates and cocaine. The lessons: legitimate medical use can grow into mass addiction (as with today's opioids); prohibition creates price gaps that make smuggling profitable; states themselves have profited from drugs; and drug control can be used against minorities rather than against harm.",
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
            "Counterfeit goods make up roughly 39–40% of products in Bangladesh's domestic market. Personal care and cosmetics account for about 32% of fakes, electrical and electronic goods 13%, clothing and footwear 12%, food and beverages 10% and pharmaceuticals 9%. Many carry copied brand names and forged BSTI seals or holograms and are made in hidden factories around Dhaka and Chattogram; low-quality electrical parts smuggled from China are relabelled with fake brand logos. The trade drains about Tk 3,170 crore in tax revenue and causes over Tk 13,680 crore in losses for legitimate brands each year.",
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
            "Health: the most adulterated items — milk, oil, honey, tea, coffee, bottled water and baby food — are consumed by 80–90% of households. The WHO estimates 600 million people fall ill and 442,000 die each year from contaminated food, and studies link adulterated food in Bangladesh to cancer, kidney disease and diabetes. Counterfeit medicines, costing about $309 million a year, contain wrong or toxic ingredients, causing treatment failure, drug resistance or death. Safety: fake wires, bulbs and fans fail standards — 38% of last year's fires were electrical short circuits. Economy: legitimate businesses and the government lose revenue, and the trade funds organized crime and forced labour.",
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
            "The Penal Code 1860 covers forgery and counterfeiting: s.465 general forgery (up to 2 years), s.466 court records/public registers (up to 7 years), s.467 valuable securities and wills (life or up to 10 years), s.475 and s.476 counterfeit authentication marks and devices (up to life/7 years), s.483 trade or property marks (up to 2 years) and s.484 marks used by public servants (up to 3 years). The Trademarks Act 2009 provides civil and criminal remedies, and the Consumers' Right Protection Act 2009, s.51, punishes selling fake or expired goods or medicines with up to one year, a fine of up to Tk 50,000, or both.\n\nEnforcement gaps: DNCRP and BSTI run mobile courts and raids, but enforcement is reactive rather than systemic, and penalties are light relative to profits. Solutions include intelligence-led action against factories and distributors, tougher penalties for health items, supply-chain traceability such as TraceChainBD (blockchain and IoT QR verification), and consumer education to buy from authorized sources and check packaging.",
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
            "Look for clusters of signs. In the person: disorientation about place, date or basic facts; inability to speak freely or always being accompanied; coached, scripted answers; signs of abuse, malnourishment or exhaustion; few possessions — no ID, phone or money; living and working in the same place; fear or submissiveness around a particular person; a minor in commercial sex with an older 'boyfriend' or 'manager'; tattoos or branding that may indicate ownership. In the situation: many people in a cramped space with limited movement; someone else controlling passports or IDs; not being allowed to speak for themselves in medical or legal settings; a story that does not match documents; and not knowing the employer's address or terms of work.",
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
            "Victims stay for four reasons. Emotional ties: the trafficker may be a partner, relative or 'boyfriend'. Fear of law enforcement: without papers, victims fear arrest or deportation more than their exploiters. Lack of better options: debt, poverty and having nothing to return to keep them in place. Shame or stigma: especially after sexual exploitation, victims fear rejection by family and community. Traffickers reinforce these with manipulation, debt and control of documents.\n\nAs a result, 'free will' becomes blurred: many victims believe they chose this life, even while they are controlled and abused. Because some initially consented, outsiders — and victims themselves — may not see them as victims, which makes identification and rescue harder.",
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
            "The State–Crime Nexus approach (Bayart, Ellis & Hibou, 1999) examines the relationship between state actors and criminal networks. It argues that state officials may sometimes participate in, protect or benefit from illegal activities; that corruption and political connections facilitate smuggling; and that weak governance creates opportunities for illicit markets. In routine-activity terms, corruption turns the 'capable guardian' into a protector of crime.",
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
            "Human trafficking: studies show a strong link between corruption and trafficking (Bales, 2005; Studnicka, 2010) — countries with high corruption see more cases, and in Brazil 71% of cases involved corrupt officials. In Bangladesh, a strict law exists, but cases are settled for money, so traffickers evade punishment and reoffend; abroad, some venues cooperate with traffickers or look the other way.\n\nDrug trafficking: systemic corruption is an explicit objective of syndicates, which bribe, intimidate or blackmail police, customs officials, politicians and judges to secure impunity, and some create narco-states. Weak borders plus large bribes make smuggling routine. Historically, China's opium ban was undermined by smuggling and corruption before the Opium Wars.",
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
            "Gold smuggling is 'facilitated by criminal networks, intermediaries and corrupt officials'. In the BG-148 case, 18.72 kg of gold was placed in an aircraft's cargo hold — difficult without insiders — and investigators admit kingpins are hard to identify; in the Kerala case, diplomatic baggage was misused. In arms smuggling, corruption is listed as a key driver: corrupt officials enable diversion from government stockpiles and illegal transactions, and forged end-user certificates exploit the legal trade. Anti-corruption measures, financial tracing and zero tolerance for corruption are therefore central to any response.",
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
            "Afghanistan has long been the world's largest opium producer. Its role grew after the 1970s, when Iran, Pakistan and Turkey banned opium and traffickers turned to Afghan farmers, and insurgent and terrorist groups have used drug profits to fund wars since the Cold War.\n\nRoutes: the Balkan Route (Afghanistan → Pakistan → Iran → Turkey → Eastern → Western Europe, sometimes via Romania or Ukraine); the Northern Route (Central Asia → Russia and the Baltic States); the Southern Route (to Pakistan); air routes from Pakistan to the UK, Africa and North America; and the China–India route. Much of the heroin stays in the region — Tajikistan, Kazakhstan and Kyrgyzstan — where Central Asia has around 320,000 opiate users.",
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
            "The Taliban's ban caused a historic 95% drop in poppy cultivation compared with 2022: from 232,000 to 10,200 hectares, with opium production falling from 6,200 to about 296 metric tons. Small-scale farming moved to remote north-eastern areas like Badakhshan, sometimes causing violent clashes with eradication teams. Methamphetamine production boomed because it is profitable, covert, drought-resistant and uses the wild ephedra plant. The UN warns that as Afghan heroin stockpiles run dry, networks are switching to potent synthetic opioids such as fentanyl and nitazenes, raising the risk of overdose crises.",
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
            "Myanmar's opium trade began under British rule; after World War II, Chinese Kuomintang forces took it over to fund their fight against communists. Poverty and ethnic conflict in Shan, Wa and Kachin States leave the government with little control. After the Taliban ban, Myanmar surpassed Afghanistan as the top opium producer (over 53,000 ha), and Shan State 'super labs' make it the region's main source of meth tablets (yaba) and crystal meth. Since the military coup and civil war, production has grown and Rakhine State has become a transit hub. The trade is controlled by armed insurgent groups — the United Wa State Army, Shan State Army and Kachin Independence Army — and ethnic Chinese networks, which fund and protect themselves with drug profits.",
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
            "Arms are acquired through: diversion from government stockpiles via weak security or corrupt officials; straw purchasing, in which an eligible buyer legally buys from a licensed dealer and passes the guns on; illicit manufacturing and conversion, including artisanal guns and reactivated weapons; online markets, social media and the dark web; theft from homes, vehicles and dealers; and exploiting the legal trade with falsified end-user certificates.",
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
            "Large loads go by freight and container ships; smaller boats such as dhows carry maritime consignments; disassembled parts and ammunition are sent by post and courier; weapons are hidden in a vehicle's structure or fuel tank or in checked airline luggage; and professional concealment uses custom crates or mixes arms with heavy legitimate goods like timber. 'Ant trafficking' means many individuals or small groups each carrying a small number of weapons across a border on foot, to avoid detection.",
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
            "Arms smuggling moves through seven stages: (1) sourcing/acquisition through illicit manufacture, theft, diversion or illegal purchase; (2) collection and preparation; (3) concealment within legitimate goods or with false documents; (4) transportation by land, air or sea across jurisdictions; (5) transit via brokers and intermediaries; (6) illegal border crossing, exploiting weak controls or corruption; and (7) distribution to criminal or armed groups.\n\nMajor departure regions are North America, Europe and Western Asia; destinations are Central and South America and parts of Western Asia. Land borders account for about two-thirds of cases, while sea shipments are fewer but carry about five times more arms. The main techniques are concealment, misdeclaration and document fraud. Pistols are the most seized firearms globally, shotguns in Africa and Asia.",
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
            "Casting pours molten base metal into molds made from real coins, leaving rough edges and soft details. Struck counterfeits press fake blanks between custom-engraved dies, often made with CNC machines from digital scans. Plating and coating cover a cheap core such as copper or lead with a thin layer of gold or silver. Clipping and shaving historically filed precious metal from the edges of real coins. Bi-metallic forgery paints or mismatches the inner and outer rings of two-tone coins.",
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
            "Penalties vary widely: Canada up to 14 years; China 3 years to life plus a fine; France up to 30 years and €450,000; Germany up to 15 years; Japan 3 years to life; South Korea 2 years to life; Singapore up to 20 years; the UK up to 10 years; the US up to 20 years; and Zambia life imprisonment. In Bangladesh, under the Penal Code 1860, counterfeiting coins carries up to 7 years and a fine; counterfeiting official Bangladesh coins up to 10 years or life; making or selling counterfeiting tools 3 to 10 years; and importing, exporting or passing known fake coins up to 10 years.",
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
            "Public debate often frames smuggling and trafficking as evil criminals versus powerless victims, an image shaped by tragedies such as the Dover lorry deaths (2000) and the Golden Venture shipwreck (1993). Reality is more complex: smuggling often involves consent between migrants and smugglers, who may be family or friends rather than masterminds. Migration is often supported by networks of family and friends who share information, contacts and planning — 'chain migration' — driven by push and pull factors.",
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
            "Smugglers often come from the same background as the migrants they move. Studies in the Netherlands show they frequently have ties to both home and destination countries (Kleemans & van de Bunt, 2003), and some were once smuggled migrants themselves. They use their experience and connections to help others — usually for money — but are not necessarily criminal masterminds.",
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
            "Smuggling networks are usually small and flexible, with people at each stage — origin, transit and destination. With forged documents, migrants can travel more easily, for example by air; without documents the journey is longer and riskier, with more transfers, stops and coordination, often handled by a chain of loosely connected groups (Zhang, 2007; Neske & Doomernik, 2006).\n\nWhether organized crime controls smuggling is debated, especially for Chinese migration. Soudijn (2006), studying 88 Dutch court cases, found that not all smugglers were Chinese — about 25% were of other ethnicities — and that groups took contracts from various sources and worked with foreign partners. They are not tightly controlled hierarchies, but they form stable alliances with consistent members when business runs smoothly — closer to a network model than a mafia.",
        },
      ],
    },
  ];
})();
