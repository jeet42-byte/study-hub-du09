// Cyber Crime and Security (MCCJ 525) — end-term scenario question bank.
// Covers the three final-term decks: Digital Forensics & Cyber Crime Investigation (90 slides),
// AI in Criminal Investigation (29) and Cybersecurity & Data Protection in Government (21).
// Trimmed to the 10 must-read questions, chosen for coverage across all three decks.
HUB.add('quizzes', {
 "id": "cyber-final",
 "course": "cyber-crime",
 "title": "End-term — Cyber Crime and Security",
 "scope": "Final: three decks — Digital forensics & cybercrime investigation, AI in criminal investigation, and Cybersecurity & data protection in government. Scenario-based: 8 questions, answer 5, each 10 marks, usually in 3 parts.",
 "format": "Scenario-based questions with answers",
 "notes": "resources/cyber-crime/cyber-final-notes.html",
 "factors": {
  "S": "1 = a full section of a final-term deck (digital forensics, AI in investigation, or government data protection), or a topic repeated across decks; 0.75 = a short final-deck section; 0.5 = a closing list.",
  "D": "1 = formal definition or list on the slides; 0.5 = described only.",
  "E": "1 = converts naturally into a real-world incident scenario (the exam format); 0.5 = needs a stretch.",
  "F": "How cleanly it splits into 2–3 scenario parts (define → apply → recommend)."
 },
 "probabilityNote": "The final draws on three decks. Digital forensics is the largest (90 slides), but the AI (29) and government data-protection (21) decks are separate final references, so a setter spreading 8 questions will very likely take at least one from each. Topics that repeat across all three decks — chain of custody and documentation, privacy law, cloud, incident response, the human factor — score highest because they can be asked from any deck.",
 "planMethod": [
  "<b>Read all three final decks</b> (140 slides) and list 51 distinct topics. 30 of them (about 59%) appear in at least two decks and 12 appear in all three — chain of custody and documentation, privacy law, cloud, network monitoring, malware, fraud, incident response, the human factor and others.",
  "<b>Score every topic</b> (0–100) from lecture emphasis, definitions, scenario fit and how cleanly it splits into 3 parts — see the Probability analysis tab. Topics repeated across decks score highest because they can be asked from any deck.",
  "<b>Weight topics by score²</b>, so core topics count much more than side topics.",
  "<b>Build exam-shaped questions</b> — 10 marks, 3 parts — each preparing one or more topics, with a Bangladesh scenario.",
  "<b>Pick the top 10 for spread, not just score</b>: 7 from digital forensics (the biggest deck), 2 from government data protection and 1 from AI in investigation that covers the whole AI deck. A setter writing 8 questions is very likely to take at least one from each deck.",
  "<b>Keep only the 10</b>: the bank is trimmed to these questions. Topics in the Probability analysis tab that no question covers are the ones you are knowingly leaving out."
 ],
 "answerTips": [
  "<b>Three parts, three blocks</b>: label (a), (b), (c); a 3-mark part ≈ one solid paragraph or a short table, a 4-mark part ≈ a numbered list with explanation.",
  "<b>Define first</b>: open each part with the slide definition (e.g. \"chain of custody is…\", \"the NIST cycle is…\").",
  "<b>Apply to the scenario</b>: name the device, the tool and the officer's action — the examiner marks application, not recitation.",
  "<b>Reuse the cross-deck backbone</b>: legal authority → isolate and document → image + hash → analyse the copy → report; add \"AI finds patterns, investigators establish facts\" and the NIST cycle where they fit.",
  "<b>End with a one-line conclusion</b> that ties back to admissibility or public trust."
 ],
 "topics": [
  {
   "id": "f-basics",
   "group": "Final: Digital forensics",
   "name": "Digital forensics: meaning, process, challenges",
   "S": 1,
   "D": 1,
   "E": 0.5,
   "F": 1,
   "why": "Opening section of the final deck: definition, importance, six-step process, challenges, applications."
  },
  {
   "id": "f-evidence",
   "group": "Final: Digital forensics",
   "name": "Digital evidence: types, characteristics, sources",
   "S": 1,
   "D": 1,
   "E": 0.5,
   "F": 1,
   "why": "Defined twice in the deck, with lists of types, four characteristics and six sources."
  },
  {
   "id": "f-legal",
   "group": "Final: Digital forensics",
   "name": "Chain of custody, legal & ethical principles",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Repeated in almost every section (scene, cloud, IoT, reporting); every scenario can ask \"how do you keep it admissible?\"."
  },
  {
   "id": "f-scene",
   "group": "Final: Digital forensics",
   "name": "First responder & securing the digital crime scene",
   "S": 1,
   "D": 0.5,
   "E": 1,
   "F": 1,
   "why": "Long practical section with a case study (VPN auto-connect → remote wipe) — perfect scenario material."
  },
  {
   "id": "f-imaging",
   "group": "Final: Digital forensics",
   "name": "Disk imaging, write blockers, hashing, live vs static",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Core technique slides; \"how do you prove the copy is identical?\" is a classic exam ask."
  },
  {
   "id": "f-analysis",
   "group": "Final: Digital forensics",
   "name": "Analysis: file system, data carving, memory, timeline, reporting",
   "S": 1,
   "D": 0.5,
   "E": 1,
   "F": 0.8,
   "why": "Several method slides plus a case study (executive leaking files)."
  },
  {
   "id": "f-tools",
   "group": "Final: Digital forensics",
   "name": "Forensic tools: categories, validation, limitations",
   "S": 1,
   "D": 0.5,
   "E": 0.5,
   "F": 0.6,
   "why": "Tool lists are easy MCQ facts but weaker as scenario questions."
  },
  {
   "id": "f-mobile",
   "group": "Final: Digital forensics",
   "name": "Mobile forensics",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Full section: definition, objectives, challenges, four types, process, seizure, acquisition, tools, isolation."
  },
  {
   "id": "f-cloud",
   "group": "Final: Digital forensics",
   "name": "Cloud forensics",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Definitions, service/deployment models, five challenges, legal issues, process and tools."
  },
  {
   "id": "f-iot",
   "group": "Final: Digital forensics",
   "name": "IoT & surveillance-device forensics",
   "S": 0.75,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Shorter section, but CCTV/smart-device evidence makes a natural scenario."
  },
  {
   "id": "f-email",
   "group": "Final: Digital forensics",
   "name": "Email & social media forensics",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Last full section; Facebook/WhatsApp/email evidence is central to cybercrime cases in Bangladesh."
  },
  {
   "id": "f-trends",
   "group": "Final: Digital forensics",
   "name": "Best practices, forensic readiness & emerging technologies",
   "S": 0.75,
   "D": 0.5,
   "E": 0.5,
   "F": 0.6,
   "why": "Best-practice, emerging-technology and future-trend slides at the end of the cloud/IoT section — mostly lists."
  },
  {
   "id": "f-isolation",
   "group": "Final: Digital forensics",
   "name": "Mobile seizure: network isolation, device ID, battery",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Detailed slides with eight isolation methods, device identifiers (IMEI, ICCID) and battery rules — very scenario-friendly."
  },
  {
   "id": "f-artifacts",
   "group": "Final: Digital forensics",
   "name": "Forensic artifacts: registry, USB, email & browser",
   "S": 0.75,
   "D": 0.5,
   "E": 1,
   "F": 0.8,
   "why": "Registry/USB/MAC slides (EnCase screenshots) and email/browser artifact slide; good \"prove what the user did\" scenarios."
  },
  {
   "id": "f-reporting",
   "group": "Final: Digital forensics",
   "name": "Reporting, documentation & testifying",
   "S": 0.75,
   "D": 0.5,
   "E": 1,
   "F": 1,
   "why": "Reporting slide plus best practices and tool limitations — the defence lawyer's line of attack."
  },
  {
   "id": "f-crossborder",
   "group": "Final: Digital forensics",
   "name": "Cross-border evidence: jurisdiction, privacy, MLAT",
   "S": 0.75,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Legal and ethical slides in the cloud/IoT section; most Bangladeshi cases need data held abroad."
  },
  {
   "id": "f-antiforensics",
   "group": "Final: Digital forensics",
   "name": "Challenges: encryption, anti-forensics, volume",
   "S": 0.75,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Challenge lists appear in three sections (general, mobile, cloud/IoT)."
  },
  {
   "id": "a-digital",
   "group": "Final: AI in criminal investigation",
   "name": "AI in digital investigation: applications, process, human role",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Core of the AI deck: nine applications (evidence analysis, anomaly and fraud detection, attribution, triage…), the AI-assisted process and the principle \"AI finds patterns; investigators establish facts\"."
  },
  {
   "id": "a-risks",
   "group": "Final: AI in criminal investigation",
   "name": "AI limits & risks: bias, black box, deepfakes, admissibility",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Three slides (limitations, challenges and risks, ethical and admissibility hurdles) — a natural \"what could go wrong?\" part in any AI question."
  },
  {
   "id": "a-evolution",
   "group": "Final: AI in criminal investigation",
   "name": "Evolution of forensics, data volume crisis, ML/DL/NLP",
   "S": 0.75,
   "D": 1,
   "E": 0.5,
   "F": 0.8,
   "why": "History from 1980s file recovery to today's petabyte cases explains why AI became necessary; ML, DL and NLP are defined on the slides."
  },
  {
   "id": "a-scene",
   "group": "Final: AI in criminal investigation",
   "name": "AI at the crime scene: CCTV, drones, 3D/VR, simulation",
   "S": 0.75,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Eight crime-scene applications with figures (CLAHE, object tracking, 3D reconstruction, VR) — strong scenario material."
  },
  {
   "id": "g-importance",
   "group": "Final: Government cybersecurity & data protection",
   "name": "Why public-sector cybersecurity matters & impacts of attacks",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Repeated three times in the deck (four cards, six-point list, diagram) plus six impacts — the opening part of any government scenario."
  },
  {
   "id": "g-threats",
   "group": "Final: Government cybersecurity & data protection",
   "name": "Threats to government: phishing, ransomware, APT, insider, DDoS, zero-day",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Shown twice (text slide and target diagram, which adds supply-chain attacks); classifying the threat is the first step of a scenario answer."
  },
  {
   "id": "g-nist",
   "group": "Final: Government cybersecurity & data protection",
   "name": "NIST cycle, prevention measures & the role of employees",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Identify → Protect → Detect → Respond → Recover, plus four overlapping prevention slides and five employee duties — the \"how should they respond?\" part."
  },
  {
   "id": "g-privacy",
   "group": "Final: Government cybersecurity & data protection",
   "name": "Citizen data protection by design, governance & public trust",
   "S": 1,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Data minimisation, access control, encryption, privacy by design, five governance measures and four trust pillars; overlaps with privacy law in the forensics deck."
  },
  {
   "id": "g-future",
   "group": "Final: Government cybersecurity & data protection",
   "name": "Future of e-government security: AI, blockchain, cloud, Zero Trust",
   "S": 0.5,
   "D": 0.5,
   "E": 0.5,
   "F": 0.6,
   "why": "Closing list of the deck; mostly useful as a final recommendation line."
  }
 ],
 "mcq": [],
 "essays": [
  {
   "id": "q-custody",
   "rank": 1,
   "t": "f-legal",
   "covers": [
    "f-legal",
    "f-evidence"
   ],
   "marks": 10,
   "q": "Digital evidence and chain of custody in court",
   "scenario": "Police seized a laptop and two phones from a suspect in an online betting and fraud case in Mirpur, Dhaka. At trial, the defence lawyer argues that the WhatsApp chats and Excel ledgers presented by the prosecution \"could have been changed after seizure\" and asks the court to reject them.",
   "parts": [
    {
     "marks": 3,
     "q": "What is digital evidence? Explain its key characteristics and why they matter in this case.",
     "points": [
      "Information stored or transmitted in binary form that may be relied on in court",
      "Characteristics: fragile, volatile, hidden, duplicable",
      "Types/sources: files, chats, logs, cloud, mobile data, memory",
      "Why the defence attack works: evidence is easy to alter without trace"
     ],
     "model": "**Digital evidence** is information stored or transmitted in binary form that may be relied on in court. It supports criminal, civil and administrative cases, can reconstruct timelines and reveal user behaviour, and usually needs forensic tools to extract and interpret.\n\n### Four key characteristics\n| Characteristic | Meaning | Why it matters here |\n|---|---|---|\n| Fragile | Easily altered or destroyed — even by opening a file | Simply browsing the laptop after seizure can change \"last accessed\" dates |\n| Volatile | Some data (RAM, live sessions) disappears when power is cut | If the phones were switched off, live chats in memory may be lost |\n| Hidden | Often not visible to ordinary users (deleted files, metadata, logs) | Deleted betting records may still exist in unallocated space |\n| Duplicable | Can be copied exactly | Investigators should work on a verified copy, never the original |\n\n**Types in this case:** computer files (Excel ledgers), messaging logs (WhatsApp), mobile device data, possibly cloud backups (Google Drive/iCloud).\n\n**Conclusion:** because digital evidence is fragile and easily duplicated, the court will only trust it if the prosecution proves it was not changed — which is exactly what the chain of custody and hashing do."
    },
    {
     "marks": 4,
     "q": "What is chain of custody? How should investigators maintain it so the evidence survives the defence challenge?",
     "points": [
      "Documented, unbroken record of who handled evidence, when, where, why",
      "Label and log every device with unique IDs",
      "Tamper-evident, anti-static bags; secure storage",
      "Write blocker + forensic image + hash (MD5/SHA-256) before and after",
      "Work on copies; record tool versions; every transfer signed"
     ],
     "model": "**Chain of custody** is the documented, unbroken record of who collected, handled, transferred, analysed and stored each item of evidence — from seizure to the courtroom. The lecture stresses it is \"very crucial to ensure that evidence is not tampered with\"; investigators must document every step.\n\n[flow] Chain of custody for the seized laptop and phones\nSeizure at the scene → Labelled & bagged → Evidence register → Forensic lab (imaging + hash) → Analysis on the copy → Report → Court\n\n### How to maintain it\n| Step | What investigators do |\n|---|---|\n| Seizure | Photograph devices in place; record date, time, place, people present |\n| Labelling | Give each device a unique ID (e.g. \"MIR-23-L01\"); note make, model, serial/IMEI |\n| Packaging | Tamper-evident, anti-static evidence bags; phones in Faraday bags |\n| Transfer | Every hand-over signed and timed in a custody form |\n| Imaging | Use a **write blocker**, create a bit-for-bit image, compute **MD5/SHA-256 hashes** before and after |\n| Analysis | Work only on the verified copy; document tool names and versions |\n| Storage | Originals locked in an evidence room with access log |\n\n**Answer to the defence:** the prosecution can show (1) the custody form with every signature, (2) the hash of the original taken at seizure/imaging, and (3) that the hash of the analysed copy matches — proving the chats and ledgers are unchanged. Bangladesh's Evidence Act was amended in 2022 to admit digital records, which makes this documentation decisive.\n\n**Conclusion:** a missing link in the chain lets the defence argue tampering; complete documentation plus matching hashes defeats that argument."
    },
    {
     "marks": 3,
     "q": "What legal and ethical principles must investigators follow while examining these devices?",
     "points": [
      "Legal authorization (warrant) — privacy laws (e.g. GDPR, HIPAA); no access without authority",
      "Impartiality — don't manipulate evidence to fit a narrative",
      "Proportionality — collect only what the case needs",
      "Chain of custody and documentation"
     ],
     "model": "| Principle | Meaning | Application to the Mirpur case |\n|---|---|---|\n| **Legal authorization & privacy** | Investigators cannot access personal data without legal authority, even if useful; must comply with privacy laws (the lecture cites GDPR, HIPAA) | Obtain a court order/warrant to search the laptop and phones |\n| **Impartiality** | Remain neutral; never manipulate evidence to fit a narrative | Report chats that help the accused as well as those that harm him |\n| **Proportionality** | Collect and analyse only data necessary for the case | Examine betting and payment data — not unrelated family photos |\n| **Chain of custody** | Document every step to protect integrity | Custody forms, hashes, tool logs |\n\n**Conclusion:** following these principles protects the suspect's rights and also protects the case — evidence gathered unlawfully or selectively can be excluded or discredited."
    }
   ]
  },
  {
   "id": "q-egov-ransom",
   "rank": 2,
   "t": "g-importance",
   "covers": [
    "g-importance",
    "g-threats",
    "g-nist",
    "g-future"
   ],
   "marks": 10,
   "q": "Ransomware on a government e-service",
   "scenario": "On the last day for paying holding tax, a city corporation's online tax and trade-licence portal is locked by ransomware and a ransom note demands payment in cryptocurrency. The attack began when an employee opened a fake \"tax circular\" email and entered his password. Logs suggest citizens' NID numbers, addresses and payment records were copied before encryption. Services stay down for three days and people queue at the city office.",
   "parts": [
    {
     "marks": 3,
     "q": "Why is cybersecurity a priority for public-sector bodies? Explain the impacts of this attack.",
     "points": [
      "Essential services run digitally; citizens cannot opt out of sharing data",
      "Attackers see high value, high leverage; trust is hard to rebuild",
      "Six importance points: national security, citizen data, service continuity, public trust, compliance, economic stability",
      "Impacts here: service disruption, financial loss, loss of citizen trust, legal consequences, reputational damage"
     ],
     "model": "The deck gives four reasons cybersecurity is a **public-sector priority**: essential services (health, tax, identity) now run digitally; citizen data is uniquely sensitive and people **cannot opt out** of sharing it; attackers see **high value, high leverage** because public services are critical and hard to replace; and **trust, once lost, is hard to rebuild**.\n\n### Impacts of this attack\n| Impact (from the deck) | In the city corporation case |\n|---|---|\n| Disruption of public services | Tax and trade-licence portal down for three days; queues at the office |\n| Financial and economic damage | Lost tax revenue on the deadline day; recovery, investigation and legal costs |\n| Loss of citizen trust | People fear their NID data is misused and return to paper |\n| Legal and regulatory consequences | Failure to protect personal data can bring penalties and lawsuits |\n| Long-term reputational damage | Credibility of the city's digital services harmed |\n| Identity theft and fraud risk | Copied NID numbers and addresses can be sold for fraud |\n\n**Conclusion:** the damage goes far beyond the IT system — the deck stresses that a breach erodes confidence \"well beyond the incident itself\"."
    },
    {
     "marks": 3,
     "q": "Identify the threats involved in this attack and explain the other common threats government agencies face.",
     "points": [
      "Phishing / social engineering was the entry point (credential theft)",
      "Ransomware encrypted data; data copied first (double extortion)",
      "Other threats: nation-state espionage (APTs), insider threats, DDoS, malware and zero-day exploits, supply-chain attacks"
     ],
     "model": "### Threats in this case\n1. **Phishing and social engineering** — the fake \"tax circular\" tricked an employee into giving his password. The deck notes phishing is \"often used as the initial attack vector for larger breaches\".\n2. **Ransomware** — malicious software that encrypts government data and demands ransom; the deck's own example is \"a city's entire online tax system being locked down\".\n3. **Data theft before encryption** — citizens' records were copied, so even paying would not undo the breach.\n\n### Other common threats to government\n| Threat | Meaning |\n|---|---|\n| Nation-state espionage (APTs) | Long, hidden attacks on classified and strategic data; can stay undetected for months |\n| Insider threats | Current or former staff, contractors or partners — intentional (sabotage) or accidental (mishandling data) |\n| DDoS attacks | Flooding services with traffic; common during elections or political events |\n| Malware and zero-day exploits | Hidden malicious software; flaws exploited before patches exist |\n| Supply-chain attacks | Compromise through a vendor or software supplier |\n\n**Conclusion:** this was a classic chain — phishing opened the door and ransomware did the damage."
    },
    {
     "marks": 4,
     "q": "Using the NIST Cybersecurity Framework cycle, explain how the city corporation should respond and prevent a repeat.",
     "points": [
      "Continuous cycle: Identify → Protect → Detect → Respond → Recover",
      "Respond: isolate systems, tested incident-response plan, preserve evidence, inform BGD e-GOV CIRT, communicate honestly",
      "Recover: restore from clean backups, feed lessons back",
      "Prevention: training, MFA, audits and vulnerability assessments, encryption, patching, legacy modernisation, Zero Trust, collaboration with agencies"
     ],
     "model": "The deck says public bodies manage cyber risk best as a **continuous cycle, not a one-time project**, aligned to the **NIST Cybersecurity Framework**.\n\n[flow] NIST CSF cycle\nIdentify → Protect → Detect → Respond → Recover → (lessons back to Identify)\n\n| Stage | What the city corporation should do |\n|---|---|\n| **Identify** | Map critical assets (tax portal, NID-linked databases), data flows and suppliers |\n| **Protect** | Multi-factor authentication so a stolen password is not enough; role-based, least-privilege access; encrypt citizen data at rest and in transit; patch and retire unsupported legacy systems |\n| **Detect** | Continuous network monitoring to spot unusual logins and large data transfers early (AI-driven threat detection) |\n| **Respond** | Follow a tested incident-response plan: isolate infected servers, preserve logs and images as evidence, report to the national incident-response team (BGD e-GOV CIRT), tell citizens quickly and honestly |\n| **Recover** | Restore services from clean, offline backups; check integrity; feed lessons into the next cycle |\n\n### Preventing a repeat\n• **Employee training** — recognising phishing is the deck's first prevention measure; employees are \"often the weakest link\"\n• **Regular security audits and vulnerability assessments**\n• **Collaboration** with national and international cybersecurity agencies and cross-agency information sharing\n• **Future technology** — Zero Trust architecture (continuous verification of every user and device), next-generation firewalls\n\n**Conclusion:** the attack succeeded at Protect (no MFA, weak training) and Detect (data left unnoticed); the NIST cycle closes both gaps and makes recovery planned rather than improvised."
    }
   ]
  },
  {
   "id": "q-ai-fraud",
   "rank": 3,
   "t": "a-digital",
   "covers": [
    "a-digital",
    "a-risks",
    "a-evolution"
   ],
   "marks": 10,
   "q": "AI in a large mobile-money fraud investigation",
   "scenario": "CID is investigating a nationwide mobile-money (bKash/Nagad) fraud ring that cheated thousands of people with fake prize calls. Investigators have seized 30 phones, 200 SIM cards, two laptops and server logs, and received 60,000 transaction records from the providers — about 4 TB of data in total. The team leader proposes using AI tools to analyse it.",
   "parts": [
    {
     "marks": 3,
     "q": "Why has AI become necessary in digital investigations? Refer to the evolution of digital forensics and the main AI technologies.",
     "points": [
      "Evolution: 1980s file recovery → 1990s formal discipline & chain of custody → 2000s internet/network → mobile & cloud → data volume crisis",
      "Terabytes/petabytes; manual review impossible; shift from \"finding everything\" to \"finding what matters\"",
      "ML (learns patterns), DL (multi-layer neural networks), NLP (analyses human language)"
     ],
     "model": "### How the field got here\n[flow] Evolution of digital forensics\n1980s file recovery → 1990s formal \"computer forensics\" and chain of custody → 2000s internet, network and email evidence → mobile and cloud → today's data volume crisis\n\n### The data volume crisis\nModern cases involve **terabytes and petabytes** of logs, backups and cloud data. The deck notes that **manual review is practically impossible**, causing delays and missed evidence, so investigators move from \"finding everything\" to **\"finding what matters\"** through filtering and triage. Here, 4 TB and 60,000 transactions cannot be read line by line.\n\n### Core AI technologies\n| Technology | Meaning | Use in this case |\n|---|---|---|\n| Machine learning (ML) | Learns from data to recognise patterns and predict, without explicit programming | Spots unusual transaction patterns |\n| Deep learning (DL) | Multi-layered neural networks that mimic the brain | Image, voice and face analysis |\n| Natural language processing (NLP) | Automated analysis of human language | Reads SMS and chat scripts used for the prize calls |\n\n**Conclusion:** scale made automation inevitable; the goal is more **speed, accuracy and efficiency**."
    },
    {
     "marks": 4,
     "q": "How can AI assist this investigation? Explain using the AI-assisted investigation process.",
     "points": [
      "Applications: evidence analysis, anomaly/fraud detection, attribution (link accounts, SIMs, devices), NLP on messages, incident reconstruction/timeline, triage",
      "Process: incident → evidence collection → data processing → AI analysis → pattern identification → human investigation → verification → legal assessment",
      "Benefits: speed, scale, pattern recognition, automation, early detection, investigation support"
     ],
     "model": "[flow] AI-assisted investigation process (AI deck)\nCyber incident → Evidence collection → Data processing → AI-assisted analysis → Pattern identification → Human investigation → Verification → Legal/evidentiary assessment\n\n### What AI could do here (the deck's own fraud example)\n| AI application | Applied to the fraud ring |\n|---|---|\n| Fraud detection | Flag unusual transactions — many small \"prize fee\" payments into a few wallets |\n| Cybercrime attribution | Link SIMs, phone numbers, wallets, devices and IP addresses to show who works with whom |\n| Social-media / NLP analysis | Find the scripts used in calls and SMS, and recruitment chats |\n| Incident reconstruction | Build a timeline of calls, payments and cash-outs |\n| Triage and prioritisation | Score data by relevance so analysts start with the ringleaders' phones |\n| Visualisation | Map relationships between suspects, accounts, devices and transactions |\n\n**Benefits:** speed, scale (millions of records), pattern recognition, automation of repetitive tasks, early detection and investigation support (generating leads).\n\n**Conclusion:** AI narrows 4 TB down to the evidence that matters; investigators then verify it against the original records."
    },
    {
     "marks": 3,
     "q": "What limitations and risks of AI must investigators manage, and what is the role of the human investigator?",
     "points": [
      "False positives/negatives; bias in training data; black box / explainability (XAI)",
      "Privacy and legal authority; evidence integrity and chain of custody; admissibility in court",
      "Adversarial attacks and deepfakes; over-reliance",
      "AI finds patterns; investigators establish facts and make accountable decisions"
     ],
     "model": "| Risk | Why it matters here |\n|---|---|\n| False positives / negatives | An innocent agent's wallet may be flagged; a real cash-out point may be missed |\n| Bias | Skewed training data can produce unfair or discriminatory results |\n| Black box / explainability | Courts may ask why a wallet was flagged; **Explainable AI (XAI)** is needed |\n| Privacy | Processing thousands of people's data needs legal authority and safeguards |\n| Evidence integrity | AI analysis must not alter evidence or break the chain of custody — run it on verified copies |\n| Adversarial attacks and deepfakes | Criminals can manipulate data or fake voices to mislead the AI |\n| Admissibility | The legal system is still deciding how to admit AI-derived evidence |\n\n### Role of the human investigator\nThe deck's key principle: **\"AI finds patterns and assists analysis; investigators establish facts and make accountable decisions.\"** Investigators must validate evidence, understand context, follow legal procedure, document their methods and present defensible findings. An AI result is **not proof without corroboration** — here, flagged wallets must be confirmed against the providers' original records and lawfully obtained evidence.\n\n**Conclusion:** AI is a powerful assistant, not a witness; human oversight keeps the case admissible."
    }
   ]
  },
  {
   "id": "q-raid",
   "rank": 4,
   "t": "f-scene",
   "covers": [
    "f-scene",
    "f-isolation"
   ],
   "marks": 10,
   "q": "First responder at a digital crime scene",
   "scenario": "Acting on a tip, police raid a flat in Uttara used by a gang running fake job advertisements and mobile-money (MFS) fraud. Inside, two laptops are switched on with a VPN connected, three smartphones keep receiving calls, and a router and several USB drives are on the table. A junior officer starts scrolling through one of the phones.",
   "parts": [
    {
     "marks": 4,
     "q": "As the first responder, what immediate steps should you take to secure this digital crime scene?",
     "points": [
      "Secure the scene; stop anyone touching devices (stop the junior officer)",
      "Disconnect from networks: unplug Ethernet, disable Wi-Fi; check VPN/remote sessions",
      "Phones into Faraday bags/airplane mode to stop remote wipe",
      "Preserve state: leave on devices on; capture RAM first",
      "Label and isolate all equipment; log time, people, actions"
     ],
     "model": "The lecture calls the first responder \"the gatekeeper of digital truth\": what happens in the first minutes can preserve evidence or destroy it beyond recovery.\n\n### Immediate steps\n1. **Secure the scene** — move suspects away from devices; **stop the junior officer** scrolling the phone, because interacting changes data and can trigger wipe apps\n2. **Disconnect from networks** — unplug Ethernet, disable Wi-Fi on the router; check for active **VPN**, remote-desktop or sync sessions that could let accomplices wipe data remotely\n3. **Isolate the phones** — place them in **Faraday bags** (or airplane mode) to block cellular, Wi-Fi and Bluetooth signals and stop remote wipes and tracking\n4. **Preserve the digital state** — do not switch off running laptops; capture **RAM and active sessions first** (volatile data), using trusted tools such as FTK Imager or Belkasoft RAM Capture\n5. **Do not power on** devices that are off — powering on may alter data or run destructive scripts\n6. **Label and isolate** every device and USB drive with a unique ID; keep them separate\n7. **Record** the time, people present and every action taken\n\n[flow] Order of work at the scene\nSecure people → Cut network links → Faraday bags for phones → Capture RAM → Photograph & label → Seize & bag\n\n**Conclusion:** isolation and preservation come before examination — the scene is for securing evidence, the lab is for analysing it."
    },
    {
     "marks": 3,
     "q": "What should be documented at the scene?",
     "points": [
      "Make, model, serial numbers/IMEI of every device",
      "Connected ports & peripherals (USB, cables, router)",
      "System status: on/off, logged in/out, screen contents with timestamps",
      "Signs of tampering",
      "Photos/video; time, people present, actions"
     ],
     "model": "| What to document | Examples in the Uttara raid |\n|---|---|\n| Device identity | Make, model, serial number of each laptop; **IMEI** and **ICCID** (SIM) of each phone |\n| Connections and peripherals | Which USB drives and cables are plugged in, router connections, ports in use |\n| System status | On/off, logged in or out, VPN connected, what is on screen — photographed with timestamps |\n| Signs of tampering | Damaged ports, missing parts, broken seals, unknown devices |\n| Scene context | Photos/video of the room and device positions; time, people present and every action taken |\n\n**Why:** documentation proves the condition of evidence at seizure and starts the chain of custody; without it, the defence can claim devices were altered."
    },
    {
     "marks": 3,
     "q": "What common mistakes must be avoided? Use the lecture case study to explain.",
     "points": [
      "Failing to document actions",
      "Powering on suspect devices",
      "Not isolating devices from networks",
      "Using unverified tools",
      "Mishandling chain of custody",
      "Case study: VPN auto-connected → remote wipe → data lost"
     ],
     "model": "### Common mistakes\n| Mistake | Consequence |\n|---|---|\n| Failing to document actions | Evidence challenged in court |\n| Powering on suspect devices | Data altered; destructive scripts triggered |\n| Not isolating devices from networks | Remote wipe or data exfiltration |\n| Using unverified tools | Unreliable or inadmissible results |\n| Mishandling chain of custody | Evidence excluded |\n\n**Lecture case study:** in an insider-theft investigation of a corporate laptop and phone, the responder **failed to isolate the devices**; the **VPN auto-connected**, a **remote wipe was triggered**, and critical data was lost. The lesson: immediate, proper scene handling is essential.\n\n**Application:** in the Uttara flat, the junior officer scrolling a phone and the connected VPN on the laptops are exactly these mistakes — an accomplice could wipe the MFS transaction records remotely."
    }
   ]
  },
  {
   "id": "q-imaging",
   "rank": 5,
   "t": "f-imaging",
   "covers": [
    "f-imaging"
   ],
   "marks": 10,
   "q": "Imaging, hashing and live vs static acquisition",
   "scenario": "The CID Digital Forensic Lab receives a running desktop computer from a garments factory office. Staff suspect an employee installed malware that is sending payroll data to an outside server. The suspect hard drive must also be examined later in court.",
   "parts": [
    {
     "marks": 3,
     "q": "Should the investigator use live or static acquisition first? Justify.",
     "points": [
      "Live = system on; captures RAM, sessions, running malware",
      "Static = after power-off; disk imaging without changes",
      "Capture live first because RAM is lost at power-off (malware may be memory-only)",
      "Then static imaging of the disk"
     ],
     "model": "| | Live acquisition | Static acquisition |\n|---|---|---|\n| When | System is **on** | After the system is **powered off** |\n| Captures | Volatile data — RAM, active sessions, running processes and malware, network connections | Full disk contents without any changes during imaging |\n| Tools | Belkasoft RAM Capture, Magnet RAM Capture, FTK Imager | FTK Imager, Guymager, EnCase |\n| Risk | Slight changes to the running system | Volatile data lost once power is cut |\n\n**Decision:** do **live acquisition first**. The computer is running and the malware may live only in memory (and its connection to the outside server is visible only while running). Capture RAM, running processes and network connections, document them, then shut down and perform **static acquisition** of the hard drive.\n\n**Conclusion:** the order is volatile first, stable later — choose the method by the situation and the priority of the evidence."
    },
    {
     "marks": 4,
     "q": "Explain the disk-imaging procedure the lab should follow.",
     "points": [
      "Bit-for-bit (exact) copy of the whole drive",
      "Write blocker to prevent changes to the original",
      "Hash before and after imaging; verify match",
      "Store original and working copy separately; analyse the copy",
      "Tools: FTK Imager, EnCase, Guymager, dd; document everything"
     ],
     "model": "**Disk imaging** is the cornerstone of forensics: creating an exact, **bit-for-bit copy** of digital media, including deleted files and unallocated space.\n\n[flow] Imaging procedure\nRemove drive → Connect through write blocker → Hash original → Create bit-for-bit image → Hash image → Compare hashes → Store original, analyse copy\n\n### Steps\n1. **Connect through a write blocker** — hardware or software that allows reading but blocks any writing to the original\n2. **Hash the original** (e.g. SHA-256) and record the value\n3. **Create the image** with a validated tool — FTK Imager, EnCase, Guymager or dd\n4. **Hash the image** and confirm it **matches** the original's hash\n5. **Store original and working copies separately**; seal the original in the evidence room\n6. **Analyse only the working copy**, so the original remains untouched for validation and re-examination\n7. **Document** tool names, versions, settings, hash values and times\n\n**Conclusion:** the write blocker protects the original; matching hashes prove the copy is identical — together they make the evidence admissible."
    },
    {
     "marks": 3,
     "q": "What is hashing, and how does it prove data integrity in court?",
     "points": [
      "Cryptographic fingerprint of data (MD5, SHA-1, SHA-256)",
      "Any change, even one bit, gives a different hash",
      "Hash at seizure/imaging and at every stage; values documented",
      "Matching hash = identical copy → admissible; SHA-256 preferred"
     ],
     "model": "A **hash** is a cryptographic \"fingerprint\" of data, produced by algorithms such as **MD5, SHA-1 or SHA-256**. The same data always gives the same hash, but changing even one bit gives a completely different value.\n\n| Use | How it proves integrity |\n|---|---|\n| At imaging | Hash of original = hash of image → the copy is identical |\n| During analysis | Re-hashing the copy shows nothing was altered |\n| In court | The examiner presents documented hash values; if they match, the evidence is the same as at seizure |\n\n**Good practice:** document every hash value and store it securely; build a verification step with hashes into every stage. MD5 and SHA-1 are older algorithms with known weaknesses, so **SHA-256** is preferred (often recorded alongside MD5).\n\n**Conclusion:** hashing turns \"trust me\" into mathematical proof that the payroll evidence was not changed."
    }
   ]
  },
  {
   "id": "q-mobile",
   "rank": 6,
   "t": "f-mobile",
   "covers": [
    "f-mobile"
   ],
   "marks": 10,
   "q": "Mobile forensics in a sextortion case",
   "scenario": "A university student in Dhaka reports that a man she met on Facebook is threatening to publish her private photos unless she pays through bKash. Police arrest the suspect at Kamalapur railway station with a locked Android phone at 40% battery.",
   "parts": [
    {
     "marks": 3,
     "q": "How should the officers seize and isolate the suspect's phone?",
     "points": [
      "Network isolation: airplane mode or Faraday bag to stop remote wipe",
      "Do not unlock, swipe or interact unless trained/authorized",
      "Gloves (fingerprints/DNA); photograph device and surroundings",
      "Record state: on, locked, battery; identifiers IMEI, ICCID",
      "Battery: keep charged (>50% often needed); network isolation drains battery"
     ],
     "model": "### Seizure best practices\n| Step | Why |\n|---|---|\n| **Network isolation** — Faraday bag or airplane mode (other options: forensic SIM, shielded room, jammer device, asking the operator to disable the account) | Blocks Wi-Fi, cellular and Bluetooth, preventing remote wiping, tracking and syncing |\n| **No screen interaction** unless trained and authorized | Swiping or unlocking can change data or trigger wipe apps |\n| **Gloves** | Preserve fingerprints/DNA on the phone |\n| **Record device state** — on, locked, 40% battery | Guides the acquisition method |\n| **Identify the device** — make, model, **IMEI**, serial number, **ICCID** of the SIM | Links the phone to the suspect and to operator records |\n| **Photograph** the device, cables and SIM | Context and chain of custody |\n| **Battery care** — keep it charged; isolation drains battery and many acquisitions need more than 50% charge | A dead phone may lose volatile data or lock harder |\n\n**Conclusion:** isolate, don't touch, document — then hand over to the lab with a chain-of-custody form."
    },
    {
     "marks": 4,
     "q": "What types of mobile forensics and acquisition methods could the lab use? Which would you choose here?",
     "points": [
      "Physical: bit-by-bit image incl. deleted data (memory dump, chip-off)",
      "Logical: user data via backups/APIs",
      "File system: specific partitions (/data), app databases",
      "Cloud: synced backups (Google Drive) via legal request",
      "Manual: screenshots as last resort",
      "Choice: logical + file system for WhatsApp/Messenger/bKash data; physical if deleted photos needed; cloud for backups"
     ],
     "model": "### Types and methods\n| Type / method | What it gets | Use in this case |\n|---|---|---|\n| **Manual acquisition** | Screenshots of what is visible on screen | Last resort, if tools fail |\n| **Logical** | User-accessible data — contacts, SMS, app data — via backups or APIs | Quick extraction of chats and call logs |\n| **File system** | Specific partitions (e.g. /data on Android) including app databases | Messenger, WhatsApp and bKash app databases |\n| **Physical** | Bit-by-bit image of memory, including **deleted data**; may need a memory dump or **chip-off** (removing the storage chip) | Recover deleted photos and threats |\n| **Cloud** | Synced backups and photos (e.g. Google Drive) | The photos may be in his Google account |\n\n**My choice:** start with **logical/file-system extraction** to get Facebook Messenger, WhatsApp and bKash data and the photos; use **physical extraction** if he deleted the threats or images; and send a **legal request** to Google/Meta for cloud backups and account logs.\n\n[flow] Mobile forensics process\nIdentification → Seizure → Acquisition → Analysis → Reporting\n\n**Conclusion:** combining methods gives the fullest picture — the chats prove the threat, the images prove possession, and bKash records prove the demand for money."
    },
    {
     "marks": 3,
     "q": "What challenges might investigators face, and which tools can help?",
     "points": [
      "Device diversity (Android fragmentation)",
      "Encryption (Android FDE, iOS Secure Enclave), locked device",
      "Rapid OS/app updates",
      "Cloud integration — legal access needed",
      "Tools: Cellebrite UFED, Oxygen Forensics, Magnet AXIOM, XRY"
     ],
     "model": "| Challenge | Explanation |\n|---|---|\n| Device diversity | Android varies across brands (Samsung, Xiaomi, etc.), complicating tool support |\n| Encryption | Modern phones use strong encryption (Android full-disk encryption, iOS Secure Enclave); a locked phone may block access |\n| Rapid updates | OS and app updates force tools to keep adapting |\n| Cloud integration | Data in Google Drive/iCloud needs credentials or legal access |\n\n| Tool | Strength |\n|---|---|\n| **Cellebrite UFED** | Industry standard for logical and physical extraction, thousands of models |\n| **Oxygen Forensics** | Cloud extraction; decrypting app data such as WhatsApp and Telegram |\n| **Magnet AXIOM** | Combines device and cloud data for analysis and visualization |\n| **XRY (MSAB)** | User-friendly logical/physical extraction and reporting |\n\n**Conclusion:** the locked, encrypted phone is the main obstacle; specialist tools plus legal requests to platforms are the way through."
    }
   ]
  },
  {
   "id": "q-cloud",
   "rank": 7,
   "t": "f-cloud",
   "covers": [
    "f-cloud",
    "f-crossborder"
   ],
   "marks": 10,
   "q": "Cloud forensics",
   "scenario": "A Dhaka software company discovers that client source code and contracts were copied from its cloud storage (hosted on a foreign cloud provider) by an unknown account at 2 a.m. Its servers run on virtual machines that scale up and down automatically.",
   "parts": [
    {
     "marks": 3,
     "q": "What is cloud computing? Explain its service and deployment models and why they matter for forensics.",
     "points": [
      "Delivery of computing services (servers, storage, databases, networking, software) over the internet",
      "IaaS, PaaS, SaaS",
      "Public, private, hybrid, community",
      "Forensic relevance: data stored remotely, often across jurisdictions"
     ],
     "model": "**Cloud computing** is the delivery of computing services — servers, storage, databases, networking and software — over the internet.\n\n| Service model | What the customer controls | Example | Evidence the customer can access |\n|---|---|---|---|\n| **IaaS** (Infrastructure as a Service) | Virtual machines, OS, applications | Virtual servers | Most — VM snapshots, OS logs |\n| **PaaS** (Platform as a Service) | Applications and data | App hosting platforms | Application logs |\n| **SaaS** (Software as a Service) | Only data and settings | Gmail, Google Drive, Office 365 | Least — mostly what the provider exports |\n\n**Deployment models:** public, private, hybrid and community.\n\n**Why it matters:** data is stored remotely, often across jurisdictions, and the further the model moves toward SaaS, the more investigators depend on the provider for evidence."
    },
    {
     "marks": 4,
     "q": "What challenges will investigators face in this cloud case?",
     "points": [
      "Data location — cross-jurisdictional storage",
      "Multi-tenancy — shared resources",
      "Lack of control — dependence on CSP",
      "Data volatility — auto-scaling VMs disappear",
      "Encryption — no keys, no access",
      "Legal: jurisdiction, privacy (GDPR), chain of custody"
     ],
     "model": "| Challenge | Explanation | In this case |\n|---|---|---|\n| **Data location** | Data stored across countries | The provider's data centres are abroad; Bangladeshi police cannot simply seize them |\n| **Multi-tenancy** | Many customers share the same hardware | Investigators cannot image a physical server without touching other customers' data |\n| **Lack of control** | Dependence on the cloud service provider (CSP) | Logs and records must come from the provider |\n| **Data volatility** | Dynamic data — auto-scaling creates and deletes virtual machines | The VM used at 2 a.m. may already be gone |\n| **Encryption** | Data inaccessible without keys | Encrypted storage needs keys from the company or provider |\n\n**Legal issues:** cross-border access, privacy rights (GDPR, CCPA), compliance, and keeping the chain of custody across systems the investigator does not control.\n\n**Conclusion:** cloud forensics depends on cooperation — with the provider, with foreign authorities and with the victim company."
    },
    {
     "marks": 3,
     "q": "How should the evidence be acquired lawfully? Outline the cloud forensics process and tools.",
     "points": [
      "Legal channels: warrants, subpoenas, MLATs",
      "Work with provider for access logs (login data, IP history)",
      "Extract files & metadata with timestamps; document access steps",
      "Process: identification → preservation → analysis → presentation",
      "Tools: AWS CloudTrail, Azure Monitor/Sentinel, Google Cloud Logging, Splunk"
     ],
     "model": "[flow] Cloud forensics process\nIdentification (locate services & data) → Preservation (snapshots, logs, metadata) → Analysis (correlate VMs, storage, logs) → Presentation (document legally)\n\n### Lawful acquisition\n1. **Legal channels** — warrants, subpoenas or **mutual legal assistance treaties (MLATs)**; Bangladesh's Mutual Assistance in Criminal Matters Act 2012 provides the domestic basis for such requests\n2. **Work with the provider** for access logs — login data, IP history, account activity at 2 a.m.\n3. **Preserve quickly** — take snapshots of running VMs before auto-scaling deletes them; export logs\n4. **Extract files and metadata** with creation, access and modification times, without altering content\n5. **Document** every request, response, extraction method and custody step\n\n| Tool | Use |\n|---|---|\n| **AWS CloudTrail** | Records API calls and user activity |\n| **Azure Monitor / Sentinel** | Monitoring, security analytics |\n| **Google Cloud Logging / Operations** | Log monitoring and analysis |\n| Splunk, EnCase, FTK Imager | Third-party analysis and imaging |\n\n**Best practice for companies:** enable logging and auditing in advance and agree data-access terms with the provider — you cannot investigate logs that were never kept."
    }
   ]
  },
  {
   "id": "q-egov-data",
   "rank": 8,
   "t": "g-privacy",
   "covers": [
    "g-privacy",
    "g-nist",
    "g-importance"
   ],
   "marks": 10,
   "q": "Citizen data leak and public trust",
   "scenario": "A researcher finds that a government service-registration website shows citizens' full names, NID numbers, phone numbers and addresses to anyone who uses a simple search query, because of a misconfigured database. Millions of records are exposed for weeks. After the news spreads, many people refuse to use online government services. (Bangladesh faced a similar case in July 2023, when a government website exposed the personal data of around 50 million citizens.)",
   "parts": [
    {
     "marks": 3,
     "q": "Explain the principles of safeguarding citizen data by design. Which were broken here?",
     "points": [
      "Data minimisation — collect and keep only what is needed, only as long as needed",
      "Strong access control — role-based, least privilege",
      "Encryption everywhere — at rest and in transit, including third parties",
      "Privacy by design — built in at the design stage, not as an afterthought"
     ],
     "model": "| Principle (DP deck) | Meaning | Broken in this case? |\n|---|---|---|\n| **Data minimisation** | Collect and retain only what a service genuinely needs, only as long as needed | Yes — full NID numbers and addresses were kept searchable long after registration |\n| **Strong access control** | Role-based access and least privilege limit who can see citizen records | Yes — the public could query the database |\n| **Encryption everywhere** | Protect data at rest and in transit, across every system and third party | Yes — records were readable in plain text |\n| **Privacy by design** | Bake protection into new services at the design stage, not as an afterthought | Yes — a misconfiguration shows security was not part of the design |\n\n**Conclusion:** every one of the four principles failed, which is why a single configuration error exposed millions of people."
    },
    {
     "marks": 4,
     "q": "What governance measures and employee responsibilities could have prevented the leak or limited the damage?",
     "points": [
      "Governance: clear data ownership and accountability, independent audits, documented breach-notification procedures, staff training, vendor/third-party agreements",
      "Employees: raise awareness, proper data handling, follow security protocols (strong passwords, MFA), report incidents promptly, continuous training",
      "Regular security audits and vulnerability assessments; incident response planning"
     ],
     "model": "### Governance that makes it stick (DP deck)\n| Measure | How it would have helped |\n|---|---|\n| Clear data ownership and accountability per system | A named owner would have been responsible for checking the site's configuration |\n| Independent audits and compliance reviews | An audit or vulnerability assessment would have found the open search |\n| Documented breach-notification procedures | The leak would have been closed and citizens informed quickly, not after weeks |\n| Staff training on handling sensitive records | Staff would know NID data must never be publicly searchable |\n| Vendor and third-party data-sharing agreements | If a contractor built the site, the contract would bind them to security standards |\n\n### Role of employees\n1. **Raising awareness** of threats and best practice\n2. **Proper data handling** — no unauthorised sharing; secure channels\n3. **Following security protocols** — strong passwords, multi-factor authentication\n4. **Reporting incidents** promptly to supervisors or IT\n5. **Continuous training** on the latest threats\n\n**Conclusion:** technology failed, but governance and people are what should have caught it — the deck calls employees \"often the weakest link\"."
    },
    {
     "marks": 3,
     "q": "How can the government rebuild public trust after this leak?",
     "points": [
      "Trust is the real measure of success: safe, fair, accountable",
      "Transparency, accountability, reliability, responsiveness",
      "Report openly on performance; make data protection a service standard"
     ],
     "model": "The deck says **\"trust is the real measure of success\"**: citizens judge digital government less by technology and more by whether it feels safe, fair and accountable.\n\n| Trust pillar | Action after the leak |\n|---|---|\n| **Transparency** | Explain plainly what data was exposed, why, and how it is now protected |\n| **Accountability** | Name the responsible owners, with real consequences for the lapse |\n| **Reliability** | Keep the fixed services available and consistent so people return |\n| **Responsiveness** | Communicate quickly and honestly; help affected citizens guard against identity fraud |\n\nThe deck's priorities add: **report openly on performance** with regular plain-language updates, and **make data protection a service standard** built into every new service's design.\n\n**Conclusion:** trust returns through honest communication plus visible fixes, not through silence."
    }
   ]
  },
  {
   "id": "q-email",
   "rank": 9,
   "t": "f-email",
   "covers": [
    "f-email"
   ],
   "marks": 10,
   "q": "Email and social media forensics",
   "scenario": "A Chattogram businessman receives threatening emails from an anonymous Gmail address, and a fake Facebook page using his photo posts defamatory content and private chats. Some posts are deleted within hours. He files a complaint with police.",
   "parts": [
    {
     "marks": 3,
     "q": "Explain the email and social media forensics process for this case.",
     "points": [
      "Definition: collecting, preserving, analysing evidence from email/social media forensically",
      "Identification of accounts/profiles",
      "Acquisition from devices, cloud, providers",
      "Preservation: hashing, provider backups, screenshots",
      "Analysis of content and metadata; reporting"
     ],
     "model": "**Email and social media forensics** is the process of collecting, preserving and analysing digital evidence from email and social media platforms using forensically sound methods.\n\n[flow] Process\nIdentification → Acquisition → Preservation → Analysis → Reporting\n\n| Stage | In this case |\n|---|---|\n| Identification | Locate the Gmail account and the fake Facebook page; note URLs, profile IDs, dates |\n| Acquisition | Collect the received emails from the victim's account; request account and login data from Google and Meta through legal channels |\n| Preservation | Screenshot and save posts immediately (they are being deleted); hash saved files; ask providers to preserve data |\n| Analysis | Examine content and metadata — email headers, IP addresses, posting times, links between accounts |\n| Reporting | Clear, admissible report linking the accounts to a person |\n\n**Objectives:** evidence recovery, preservation for court, behaviour analysis (timelines, relationships), and support for the criminal case (threats, defamation)."
    },
    {
     "marks": 4,
     "q": "How can investigators acquire and analyse the threatening emails to trace the sender?",
     "points": [
      "Local acquisition (.pst/.ost from victim's Outlook) or webmail export",
      "Full email headers: Received lines, originating IP, timestamps, Message-ID",
      "Server logs: SMTP/IMAP logs from provider via legal request",
      "Tools: Magnet AXIOM, MailXaminer for header analysis",
      "Hash and document; correlate IP with ISP subscriber records"
     ],
     "model": "### Acquisition methods\n| Method | Description |\n|---|---|\n| Local acquisition | Extract email databases from devices (e.g. Outlook **.pst** files) |\n| Cloud acquisition | Access webmail (Gmail) with credentials or through legal requests |\n| Server logs | Obtain **SMTP/IMAP logs** from the provider to trace where messages came from |\n| Tools | **Magnet AXIOM** for extraction; **MailXaminer** for header analysis |\n\n### Tracing the sender\n1. Export the emails **with full headers** from the victim's account\n2. Read the **\"Received:\"** lines from bottom to top to follow the route; note **IP addresses**, timestamps and the **Message-ID**\n3. Request Google's account records (sign-up details, login IPs, recovery phone) through a legal request or MLAT, since Gmail is a US provider\n4. Match the IP and time with **ISP or mobile-operator subscriber records** in Bangladesh\n5. Hash all exported files and record every step\n\n**Limitation:** Gmail often hides the sender's own IP in headers, so provider records are usually essential.\n\n**Conclusion:** headers give the route; provider and ISP records give the person."
    },
    {
     "marks": 3,
     "q": "How can evidence from the fake Facebook page be acquired, and what challenges exist?",
     "points": [
      "Device-based: app data (e.g. SQLite databases) from seized phones",
      "Cloud-based: platform APIs, user data download, legal requests to Meta",
      "Web scraping/capture of public posts if legally permissible; screenshots for ephemeral content",
      "Challenges: volume, end-to-end encryption, cloud storage needs legal access, ephemeral/deleted content"
     ],
     "model": "### Acquisition methods\n| Method | Use |\n|---|---|\n| Device-based | Extract app data (e.g. Messenger/WhatsApp **SQLite databases**) from the suspect's phone once identified |\n| Cloud-based | Data via platform APIs, the user's own data download, or **legal requests to Meta** for page admin details and login IPs |\n| Web capture / scraping | Capture public posts and profile pages, if legally permissible |\n| Screenshots | Capture content before it disappears, with URL and time visible |\n\n### Challenges\n• **Data volume** — thousands of posts, comments and images to filter\n• **End-to-end encryption** — WhatsApp/Signal content unreadable on servers\n• **Cloud storage** — data sits on Meta's servers abroad; needs legal access\n• **Ephemeral content** — deleted posts and disappearing messages\n\n**Bangladesh context:** victims can also report fake pages through police cyber units and to Meta directly; preserving evidence early is vital because posts are removed quickly.\n\n**Conclusion:** fast preservation plus legal requests to the platform are the keys to identifying the page owner."
    }
   ]
  },
  {
   "id": "q-recovery",
   "rank": 10,
   "t": "f-analysis",
   "covers": [
    "f-analysis",
    "f-reporting"
   ],
   "marks": 10,
   "q": "Recovering deleted data and building a timeline",
   "scenario": "In a cheque-forgery investigation at a Khulna bank branch, the suspect deleted scanned signature files and formatted a USB pen drive before arrest. Investigators also seized his office PC.",
   "parts": [
    {
     "marks": 3,
     "q": "How can file system analysis help recover the deleted signature files?",
     "points": [
      "Reconstruct folder hierarchies",
      "Recover deleted files (entries marked deleted, data remains until overwritten)",
      "Examine metadata: last access, ownership, permissions",
      "Tools: Autopsy, Sleuth Kit, X-Ways; NTFS, FAT, ext"
     ],
     "model": "When a file is \"deleted\", the operating system usually only marks its space as free; the data stays until it is overwritten. **File system analysis** examines the structure of the drive to recover it.\n\n| What it does | How it helps here |\n|---|---|\n| Reconstructs folder hierarchies | Shows where the scanned signatures were stored |\n| Recovers deleted files | Retrieves the deleted scans if not yet overwritten |\n| Examines metadata — last access time, ownership, permissions | Shows **who** created or opened the files and **when** |\n| Reveals hiding, deleting or manipulation attempts | Proves intent |\n\n**Tools:** Autopsy, Sleuth Kit, X-Ways Forensics — for NTFS, FAT, ext3/ext4 and other file systems.\n\n**Conclusion:** deletion rarely destroys evidence immediately; metadata can also link the suspect to the files."
    },
    {
     "marks": 3,
     "q": "What is data carving, and why is it suitable for the formatted USB drive?",
     "points": [
      "Recover file fragments by signature headers/footers (JPG, PDF)",
      "No dependence on file allocation tables",
      "Works on formatted or damaged drives",
      "Tools: PhotoRec, Scalpel, Foremost; good for images"
     ],
     "model": "**Data carving** recovers files by searching raw data for **file signatures** — known headers (and footers) of file types such as JPG or PDF — instead of relying on the file system.\n\n| Feature | Why it fits the formatted USB |\n|---|---|\n| No dependence on file allocation tables | Formatting destroyed the file table, but not necessarily the data |\n| Works on formatted or damaged drives | Exactly this situation |\n| Good for multimedia | Scanned signatures are image files (JPG/PDF) |\n| Tools | **PhotoRec, Scalpel, Foremost** |\n\n**Limitation:** carved files may lose their names and dates, and fragmented files may be incomplete.\n\n**Conclusion:** carving can bring back the scanned signatures even after the drive was formatted."
    },
    {
     "marks": 4,
     "q": "How should the investigator build a timeline and report the findings?",
     "points": [
      "Timeline: correlate files, logs, emails, browser history into a chronology",
      "Tools: log2timeline/Plaso, X-Ways Trace",
      "Report: tools & versions, steps, hashes, screenshots, timeline, chain of custody",
      "Clear, professional, admissible; withstand cross-examination",
      "Best practice: work on copies, validate tools, cross-check"
     ],
     "model": "### Timeline analysis\nA timeline correlates events from different sources — files, logs, emails, browser history, USB connection records — into one chronology that \"tells the story\".\n\n| Time | Event (example) | Source |\n|---|---|---|\n| 14 Mar, 16:05 | Signature scans created | File metadata |\n| 14 Mar, 16:20 | USB drive connected | Windows registry (USB artifacts) |\n| 14 Mar, 16:22 | Scans copied to USB | File system / link files |\n| 18 Mar, 09:40 | Forged cheque presented | Bank transaction log |\n| 20 Mar, 22:10 | Files deleted, USB formatted | File system / event logs |\n\n**Tools:** log2timeline / **Plaso**, X-Ways Trace.\n\n### The report\n• Every tool used, with **version numbers**, and every step\n• **Hashes**, screenshots, the timeline and **chain-of-custody logs**\n• Clear, professional and legally admissible — it must **withstand cross-examination**\n• Best practices: work on copies, validate tools, cross-check results with more than one tool\n\n**Conclusion:** the timeline turns scattered artifacts into proof that the suspect created, moved, used and then tried to destroy the signatures."
    }
   ]
  }
 ],
 "examPattern": {
  "total": 50,
  "answer": 5,
  "of": [
   8
  ],
  "each": 10,
  "scope": "Expected pattern: 8 scenario questions, answer any 5, each 10 marks, mostly split into 3 sub-questions. Questions 1–10 are the must-read set: they cover all three final decks (7 digital forensics, 2 government data protection, and 1 AI question that spans the whole AI deck) so that at least 5 of the 8 exam questions should fall on topics you have prepared."
 }
});
