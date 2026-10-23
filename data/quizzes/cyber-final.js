// Cyber Crime and Security (MCCJ 525) — end-term scenario question bank.
// Generated from the final-term digital forensics deck (ranks 1–20, greedy coverage) and the
// mid-term syllabus (ranks 21+, optional — mid-term topics are not expected in the final).
HUB.add('quizzes', {
 "id": "cyber-final",
 "course": "cyber-crime",
 "title": "End-term — Cyber Crime and Security",
 "scope": "Final: Digital forensics & cybercrime investigation deck. Carry-over from mid-term: phishing, insider threat, ransomware & integrated security, SQL injection, audit, CIA, attacks, typology. Scenario-based: each question gives one scenario with 2–3 parts.",
 "format": "Scenario-based questions with answers",
 "notes": "resources/cyber-crime/cyber-final-notes.html",
 "factors": {
  "S": "1 = a full section of the final-term (digital forensics) deck; 0.75 = a short final-deck section or a mid-term topic the teacher stressed; 0.5 = other mid-term content.",
  "D": "1 = formal definition or list on the slides; 0.5 = described only.",
  "E": "1 = converts naturally into a real-world incident scenario (the exam format); 0.5 = needs a stretch.",
  "F": "How cleanly it splits into 2–3 scenario parts (define → apply → recommend)."
 },
 "probabilityNote": "The final is scenario-based, so the E factor measures how naturally a topic becomes an incident scenario. The final-term deck (digital forensics) carries the highest lecture weight; mid-term topics are weighted lower because they only \"may\" carry over — but the ones your teacher stressed (phishing, insider threat, ransomware and integrated security, SQL injection, audit) still rank high.",
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
   "id": "m-phishing",
   "group": "Mid-term (unlikely in the final)",
   "name": "Phishing, its variants & defences",
   "S": 0.25,
   "D": 1,
   "E": 1,
   "F": 1,
   "why": "Stressed for the mid-term (phishing simulation, email filtering, honeypot, proxy) with many defined variants."
  },
  {
   "id": "m-insider",
   "group": "Mid-term (unlikely in the final)",
   "name": "Insider threat & access control (IAM/PAM, DLP)",
   "S": 0.25,
   "D": 0.5,
   "E": 1,
   "F": 1,
   "why": "Stressed for the mid-term; slide statistics show insiders behind most unauthorized access."
  },
  {
   "id": "m-ransomware",
   "group": "Mid-term (unlikely in the final)",
   "name": "Ransomware, lateral movement & integrated security",
   "S": 0.25,
   "D": 0.5,
   "E": 1,
   "F": 1,
   "why": "Stressed for the mid-term: SIEM, SOC, IDS/IPS, firewall, proxy, honeypot, DLP."
  },
  {
   "id": "m-sqli",
   "group": "Mid-term (unlikely in the final)",
   "name": "Data integrity, SQL injection & hardening (encryption, patching, VAPT)",
   "S": 0.25,
   "D": 0.5,
   "E": 1,
   "F": 1,
   "why": "Stressed for the mid-term: databases in data centres attacked by SQL injection."
  },
  {
   "id": "m-audit",
   "group": "Mid-term (unlikely in the final)",
   "name": "Security audit, VA/PT, ethical hacking, ISO/NIST",
   "S": 0.25,
   "D": 0.5,
   "E": 1,
   "F": 0.8,
   "why": "Stressed for the mid-term as the compliance answer."
  },
  {
   "id": "m-cia",
   "group": "Mid-term (unlikely in the final)",
   "name": "CIA triad, cyber security & cyber defence",
   "S": 0.25,
   "D": 1,
   "E": 0.5,
   "F": 1,
   "why": "Foundational definitions on the mid slides (CIA + authenticity + non-repudiation; monitoring, threat hunting, incident response)."
  },
  {
   "id": "m-attacks",
   "group": "Mid-term (unlikely in the final)",
   "name": "Other attacks (MITM, DDoS, password, XSS) & hacker types",
   "S": 0.25,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Attack-type slide and hacker classification on the mid slides."
  },
  {
   "id": "m-typology",
   "group": "Mid-term (unlikely in the final)",
   "name": "Cybercrime typology, crimes against persons, crime-as-a-service",
   "S": 0.25,
   "D": 1,
   "E": 1,
   "F": 0.8,
   "why": "Course outline topics: content offences, cyberbullying, grooming, IP offences, dark web and Bitcoin."
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
   "id": "q-imaging",
   "rank": 2,
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
   "rank": 3,
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
   "id": "q-email",
   "rank": 4,
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
   "id": "q-cloud",
   "rank": 5,
   "t": "f-cloud",
   "covers": [
    "f-cloud"
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
   "id": "q-isolation",
   "rank": 6,
   "t": "f-isolation",
   "covers": [
    "f-isolation"
   ],
   "marks": 10,
   "q": "Seizing phones: isolation, identification and battery",
   "scenario": "During a raid in Teknaf, police seize five mobile phones from a suspected yaba-trafficking group: two smartphones are switched on and receiving messages, one is an old feature phone, and one smartphone has only 15% battery. Officers fear accomplices in Myanmar could remotely wipe the devices.",
   "parts": [
    {
     "marks": 4,
     "q": "What methods can be used to isolate the phones from the network? Which would you use here?",
     "points": [
      "Why: preserve stored data; stop remote wipe/sync",
      "EMI-shielded enclosure/room",
      "Airplane/disabled mode",
      "No SIM or forensic/cloned SIM",
      "RF interference device / jammer",
      "StrongHold box; Faraday bags & cages; aluminium foil",
      "Request provider to disable account",
      "Note: isolation drains battery"
     ],
     "model": "**Network isolation** is needed to preserve the integrity of stored data — it stops remote wiping, new messages overwriting old ones, tracking and syncing.\n\n| Method (lecture) | Notes |\n|---|---|\n| Electromagnetic-interference (EMI) shielded enclosure or room | Best in the lab |\n| Airplane / disabled mode | Quick, but requires touching the phone |\n| Operate without a SIM, or with a \"forensic SIM\" / cloned SIM | Prevents network registration |\n| Radio-frequency interference device / cellular jammer (network interruption device) | Lab use; legal restrictions apply |\n| StrongHold box | Shielded box for examining phones |\n| **Faraday bags and cages** | Portable; ideal at the scene |\n| Aluminium foil | Emergency improvisation |\n| Request the service provider to disable the account | Stops the SIM from network access |\n\n**My choice in Teknaf:** put the switched-on phones straight into **Faraday bags** at the scene (near the Myanmar border, cross-border signals and remote wipes are a real risk), ask the operators to suspend the SIMs, and examine them in a **shielded box/room** at the lab.\n\n**Warning:** battery life becomes much shorter in an isolated environment — plan time and charging."
    },
    {
     "marks": 3,
     "q": "What information should be recorded to identify each device?",
     "points": [
      "Form factor (bar, flip, clamshell, slider…)",
      "Condition",
      "Make and model",
      "Hardware identifier: IMEI, ESN or MEID",
      "Serial number",
      "ICCID of SIM",
      "(PIN for BlackBerry only)"
     ],
     "model": "| Identifier | Meaning |\n|---|---|\n| Form factor | Bar, flip, clamshell, twister, spinner, slider (the feature phone may be a bar or flip phone) |\n| Condition | Damage, cracked screen, water damage |\n| Make and model | e.g. a Xiaomi or Samsung model |\n| **Hardware identifier — IMEI, ESN or MEID** | Unique identity of the handset; IMEI is used on GSM networks like Bangladesh's |\n| Serial number | Manufacturer's serial |\n| **ICCID** of the SIM card | Unique SIM number — links the SIM to an operator subscriber record |\n\n**Why it matters:** IMEI and ICCID let police request **call records and subscriber details** from the operators and prove which phone belonged to which suspect."
    },
    {
     "marks": 3,
     "q": "What battery considerations apply, especially for the phone at 15%?",
     "points": [
      "Removing battery may lose data in volatile memory",
      "Most devices need >50% charge before acquisition",
      "Some shut off below a threshold to protect data",
      "Small charge can maintain volatile data briefly",
      "Start with full battery; isolation drains battery; take care when reviving batteries"
     ],
     "model": "| Consideration (lecture) | Action for the 15% phone |\n|---|---|\n| Removing the battery may cause data loss on devices with volatile memory | **Do not remove** the battery |\n| Most devices need **more than 50% charge** before acquisition | **Charge it** (inside a Faraday bag/shielded charger) before extraction |\n| Some devices shut themselves off below a threshold to protect data | Act quickly before it reaches that level |\n| A small charge can maintain volatile data for a short time | Keep it powered while transporting |\n| Isolation drains the battery faster | Start with a full battery and allow enough time |\n| Dead batteries may need careful reviving | Avoid damaging lithium batteries |\n\n**Conclusion:** keep the phone alive and isolated — a dead, locked phone is much harder to examine."
    }
   ]
  },
  {
   "id": "q-lab",
   "rank": 7,
   "t": "f-basics",
   "covers": [
    "f-basics"
   ],
   "marks": 10,
   "q": "Setting up a digital forensics capability",
   "scenario": "The Police Headquarters plans to expand digital forensic capacity in every range because cybercrime complaints — Facebook hacking, MFS fraud, online harassment — are rising. You are asked to brief senior officers.",
   "parts": [
    {
     "marks": 3,
     "q": "What is digital forensics and why is it important?",
     "points": [
      "Investigating digital devices for evidence; criminal, civil, corporate",
      "Collect, preserve, analyse; identify, recover, document evidence",
      "Importance: solve cybercrimes, identify threats/breaches, corporate & legal investigations, ensure integrity in court"
     ],
     "model": "**Digital forensics** is the process of investigating digital devices for evidence — collecting, preserving and analysing digital evidence — used in criminal, civil and corporate investigations. Its key goal is to **identify, recover and document** evidence.\n\n### Importance\n| Reason | Example |\n|---|---|\n| Helps law enforcement solve cybercrimes | Tracing a hacked Facebook account or MFS fraud |\n| Identifies cyber threats and security breaches | Finding how a bank's system was compromised |\n| Essential for corporate and legal investigations | Insider data theft, contract disputes |\n| Ensures evidence integrity in court | Hashing and chain of custody make evidence admissible |\n\n**Real-world applications:** fraud, hacking and identity theft; insider-threat detection; incident response; intellectual-property theft; terrorism and organized crime.\n\n**Bangladesh example:** in the 2016 Bangladesh Bank cyber heist, attackers used malware and the bank's SWIFT access to send fraudulent payment orders worth about USD 951 million; USD 81 million reached accounts in the Philippines. Forensic investigation of the bank's systems was essential to understand how it happened."
    },
    {
     "marks": 4,
     "q": "Explain the stages of the digital forensics process.",
     "points": [
      "Identification",
      "Collection",
      "Preservation",
      "Analysis",
      "Documentation",
      "Presentation"
     ],
     "model": "[flow] Digital forensics process\nIdentification → Collection → Preservation → Analysis → Documentation → Presentation\n\n| Stage | What happens | Example (hacked Facebook account) |\n|---|---|---|\n| **Identification** | Find which devices, accounts and data may hold evidence | Victim's phone, suspect's phone, Facebook account |\n| **Collection** | Seize devices or acquire data lawfully | Seize the suspect's phone; legal request to Meta |\n| **Preservation** | Protect evidence from change — write blockers, hashing, Faraday bags, custody forms | Image the phone; record hashes |\n| **Analysis** | Examine data with forensic tools to find relevant evidence | Find the login session, phishing link, messages |\n| **Documentation** | Record every step, tool and finding | Tool versions, hashes, timeline |\n| **Presentation** | Report and testify in court in a clear, admissible form | Expert report and testimony |\n\n**Conclusion:** each stage protects the next — a mistake in preservation cannot be fixed in analysis."
    },
    {
     "marks": 3,
     "q": "What challenges will the new labs face?",
     "points": [
      "Encryption and data protection",
      "Cloud and remote storage",
      "Large volumes of evidence",
      "Rapidly evolving technology and threats",
      "Anti-forensics techniques"
     ],
     "model": "| Challenge | Explanation | Bangladesh angle |\n|---|---|---|\n| Encryption and data protection | Locked, encrypted phones and apps | Most seized phones are locked smartphones with encrypted apps |\n| Cloud and remote storage | Data on foreign servers | Facebook, Gmail and WhatsApp data held abroad — needs MLAT or provider cooperation |\n| Large volumes of evidence | Terabytes from many devices | Backlogs in labs |\n| Rapidly evolving technology and threats | Tools and skills go out of date | New apps, new scam methods |\n| Anti-forensics | Wiping, encryption, hiding data to defeat investigators | Suspects factory-reset phones before arrest |\n\n**Recommendations:** training, validated and updated tools, agreements with service providers, and standard operating procedures for chain of custody."
    }
   ]
  },
  {
   "id": "q-crossborder",
   "rank": 8,
   "t": "f-crossborder",
   "covers": [
    "f-crossborder"
   ],
   "marks": 10,
   "q": "Getting evidence held abroad",
   "scenario": "In a murder case in Sylhet, police believe the victim and suspect communicated through Facebook Messenger and that the suspect stored photos in Google Photos. Both companies hold the data on servers outside Bangladesh. The investigating officer asks why he cannot simply log in to the suspect's account using a password found in his notebook.",
   "parts": [
    {
     "marks": 3,
     "q": "What legal and ethical considerations apply to obtaining this evidence?",
     "points": [
      "Jurisdiction: cross-border data access",
      "Privacy: balance investigation and user rights; GDPR, CCPA, HIPAA",
      "Compliance with laws",
      "Ethics: avoid unauthorized access",
      "Chain of custody for admissibility"
     ],
     "model": "| Consideration (lecture) | Meaning in this case |\n|---|---|\n| **Jurisdictional issues** | Data sits on servers abroad; Bangladeshi warrants do not bind foreign companies directly |\n| **Privacy concerns** | Must balance the investigation with users' rights — the victim's and others' messages are personal |\n| **Compliance** | Providers follow laws such as GDPR (EU), CCPA (California), HIPAA (health data) and their own policies |\n| **Ethical challenges** | Avoid **unauthorized access** — logging in with a found password is hacking, even by police |\n| **Chain of custody** | Evidence must remain admissible across borders |\n\n**Answer to the officer:** logging in without legal authority is unauthorized access, could alter the account (login alerts, new activity), may tip off accomplices, and the evidence could be excluded."
    },
    {
     "marks": 4,
     "q": "How should the police obtain the data lawfully?",
     "points": [
      "Preservation request to providers immediately",
      "Legal request: warrant/court order; provider law-enforcement portals",
      "MLAT (Mutual Legal Assistance) via government channels; Bangladesh Mutual Assistance in Criminal Matters Act 2012",
      "Emergency disclosure for threats to life",
      "Document every request/response; extract with metadata/timestamps",
      "INTERPOL channels"
     ],
     "model": "[flow] Lawful route\nPreservation request → Court order / legal request → Provider portal or MLAT → Data received with metadata → Hash & document → Analysis\n\n1. **Preservation request** — ask Meta and Google immediately to preserve the accounts so nothing is deleted\n2. **Legal process** — obtain a court order; submit through each provider's law-enforcement request system\n3. **MLAT** — for content (actual messages and photos), providers often require a **mutual legal assistance** request between governments; Bangladesh's **Mutual Assistance in Criminal Matters Act 2012** provides the domestic framework\n4. **Emergency disclosure** — if a life is at risk, providers have emergency procedures\n5. **Police cooperation** — INTERPOL channels can help coordinate\n6. **Receive and preserve** — keep data in its original format with metadata and timestamps; hash it\n7. **Document** every request, response and extraction step (chain of access)\n\n**Conclusion:** lawful requests are slower, but they produce evidence that stands in court."
    },
    {
     "marks": 3,
     "q": "How can the chain of custody be maintained across jurisdictions?",
     "points": [
      "Record who requested, who provided, when, how",
      "Keep data in original format; hashes on receipt",
      "Provider certificates/business-record declarations",
      "Document every transfer and analysis step",
      "Use validated tools; report clearly"
     ],
     "model": "| Step | Action |\n|---|---|\n| Request | Record each request: date, legal basis, officer, reference number |\n| Receipt | Note how data arrived (portal download, encrypted file), when and by whom; **hash on receipt** |\n| Authentication | Keep the provider's cover letter or certificate confirming the records are theirs |\n| Storage | Store the original download untouched; analyse copies |\n| Analysis | Use validated tools; document versions |\n| Reporting | Explain the full path from provider to court |\n\n**Conclusion:** the chain must show the data is exactly what the provider produced — documentation replaces physical seizure in the cloud."
    }
   ]
  },
  {
   "id": "q-raid",
   "rank": 9,
   "t": "f-scene",
   "covers": [
    "f-scene"
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
   "id": "q-antiforensics",
   "rank": 10,
   "t": "f-antiforensics",
   "covers": [
    "f-antiforensics",
    "f-trends"
   ],
   "marks": 10,
   "q": "Encryption, anti-forensics and new technology",
   "scenario": "A suspect in an online child-exploitation case used an encrypted laptop, a phone with full-disk encryption, cloud storage abroad, and a \"secure delete\" tool. When police arrived, he tried to wipe the laptop.",
   "parts": [
    {
     "marks": 4,
     "q": "What challenges does this case present for digital forensics?",
     "points": [
      "Encryption & data protection (FDE, Secure Enclave)",
      "Cloud & remote storage abroad",
      "Large volumes of evidence",
      "Rapidly evolving technology",
      "Anti-forensics: secure deletion, wiping, hiding data (steganography)"
     ],
     "model": "| Challenge (lecture) | In this case |\n|---|---|\n| **Encryption and data protection** | Encrypted laptop; phone with full-disk encryption (Android FDE / iOS Secure Enclave) |\n| **Cloud and remote storage** | Material stored on servers abroad |\n| **Large volumes of evidence** | Thousands of images and videos to review |\n| **Rapidly evolving technology** | New apps and encryption methods |\n| **Anti-forensics techniques** | \"Secure delete\" tools, wiping, hiding data (e.g. steganography) to defeat investigators |\n\n**Conclusion:** this suspect deliberately used every challenge — the response depends on speed at the scene and lawful access to keys and cloud data."
    },
    {
     "marks": 3,
     "q": "How can investigators overcome encryption and anti-forensics in practice?",
     "points": [
      "Seize running devices; live acquisition: RAM may hold keys/unlocked volumes",
      "Stop wiping immediately; isolate",
      "Physical/file-system extraction tools; carving for remnants",
      "Legal requests to cloud providers",
      "Cross-check; document"
     ],
     "model": "1. **Act fast at the scene** — stop the wipe; do not switch off a running, unlocked laptop\n2. **Live acquisition** — capture RAM while the system is on; memory may contain **encryption keys**, passwords or the unlocked volume\n3. **Isolate** the phone in a Faraday bag; use advanced mobile tools (Cellebrite, Oxygen) for possible extraction\n4. **Recover remnants** — data carving can find fragments that secure-delete tools missed\n5. **Cloud** — preservation and legal requests (MLAT) to the providers abroad\n6. **Cross-check and document** every step\n\n**Conclusion:** encrypted data is often accessible only while the device is running — so the first minutes matter most."
    },
    {
     "marks": 3,
     "q": "How might emerging technologies help or hinder such investigations?",
     "points": [
      "AI automates analysis of large volumes (e.g. image classification)",
      "Blockchain for evidence integrity",
      "Quantum computing impacts encryption",
      "Edge computing; privacy-preserving forensics; cross-border collaboration"
     ],
     "model": "| Technology | Help or hinder |\n|---|---|\n| **Artificial intelligence** | Helps — automates analysis of huge volumes (logs, images), reducing examiners' exposure to harmful material |\n| **Blockchain** | Helps — tamper-proof records of evidence handling |\n| **Quantum computing** | Both — may break today's encryption, but also creates new protections |\n| **Edge computing** | Helps — faster analysis of IoT data |\n| **Privacy-preserving forensics** (e.g. homomorphic encryption) | Helps — analyse data while protecting privacy |\n| **Cross-jurisdictional collaboration** | Helps — faster access to cloud data abroad |\n\n**Conclusion:** technology is a race — criminals adopt encryption quickly, and investigators must adopt automation and international cooperation just as fast."
    }
   ]
  },
  {
   "id": "q-iot",
   "rank": 11,
   "t": "f-iot",
   "covers": [
    "f-iot"
   ],
   "marks": 10,
   "q": "IoT and CCTV evidence",
   "scenario": "A house in Gulshan is burgled. The owners have a smart doorbell camera, a Wi-Fi CCTV system that uploads footage to a cloud app, and a smart lock that records every opening. The lock log shows it was opened with a valid code at 3:12 a.m.",
   "parts": [
    {
     "marks": 3,
     "q": "What is IoT, and what are its characteristics relevant to forensics?",
     "points": [
      "Network of interconnected devices exchanging data",
      "Examples: smart thermostats, wearables, sensors, cameras, locks",
      "Characteristics: massive scale, real-time data, limited resources",
      "Forensic relevance: diverse devices and protocols"
     ],
     "model": "**IoT (Internet of Things)** is a network of interconnected devices that exchange data — smart thermostats, wearables, industrial sensors, and here a doorbell camera, CCTV and smart lock.\n\n| Characteristic | Forensic meaning |\n|---|---|\n| Massive scale | Many devices, many data sources |\n| Real-time data | Records events as they happen (door opened at 3:12 a.m.) |\n| Limited resources | Little storage and processing — data is overwritten quickly |\n\n**Relevance:** diverse devices and protocols mean each device may need a different extraction approach."
    },
    {
     "marks": 3,
     "q": "What challenges arise in IoT forensics in this case?",
     "points": [
      "Device diversity",
      "Limited storage — rapid overwrite",
      "Proprietary protocols",
      "Resource constraints",
      "Chain of custody across devices and cloud"
     ],
     "model": "| Challenge | In the Gulshan burglary |\n|---|---|\n| **Device diversity** | Doorbell, CCTV and lock are from different makers with different systems |\n| **Limited storage** | The doorbell may overwrite footage within hours |\n| **Proprietary protocols** | Vendors use their own formats; standard tools may not read them |\n| **Resource constraints** | Devices cannot run forensic tools; data must be pulled from the device, app or cloud |\n| **Chain of custody** | Evidence spread across devices, phone app and cloud must be linked and documented |\n\n**Conclusion:** speed matters — preserve the footage and lock logs before they are overwritten."
    },
    {
     "marks": 4,
     "q": "Describe how investigators should acquire and analyse the IoT evidence.",
     "points": [
      "Identify all connected IoT/surveillance devices",
      "Preserve configuration, onboard storage, linked cloud accounts",
      "Extract logs, footage, interaction data",
      "Document network paths and paired devices",
      "Process: identification → preservation → analysis (timestamps) → presentation; tools Wireshark, AXIOM, Autopsy, Cellebrite"
     ],
     "model": "[flow] IoT forensics process\nIdentification (devices involved) → Preservation (extract from devices, cloud, gateways) → Analysis (reconstruct events with timestamps) → Presentation (timelines & reports)\n\n### Steps\n1. **Identify** all connected devices — doorbell, CCTV, smart lock, router, owners' phones with the apps\n2. **Preserve** device configuration and onboard storage, and the **linked cloud accounts** (request the provider to preserve footage)\n3. **Extract** logs, footage, motion events, command history and lock-access records\n4. **Document network paths and paired devices** — which phone/app paired with the lock; which code was used\n5. **Analyse** with timestamps: footage at 3:10–3:15 a.m. + lock log \"opened with valid code at 3:12\" + router logs of connected devices\n6. **Report** a timeline\n\n| Tool | Use |\n|---|---|\n| Wireshark | Network traffic from IoT devices |\n| Magnet AXIOM / Cellebrite UFED | Data from devices and the phone apps |\n| Autopsy | Open-source analysis |\n\n**Insight:** a valid code at 3:12 a.m. suggests an **insider** (someone who knew the code — staff or a relative) or a leaked code — the investigation should check who had it."
    }
   ]
  },
  {
   "id": "q-recovery",
   "rank": 12,
   "t": "f-analysis",
   "covers": [
    "f-analysis"
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
  },
  {
   "id": "q-report",
   "rank": 13,
   "t": "f-reporting",
   "covers": [
    "f-reporting"
   ],
   "marks": 10,
   "q": "Writing the forensic report and facing cross-examination",
   "scenario": "You are the digital forensic examiner in a high-profile financial fraud case in Dhaka. Your report will be challenged in court by an experienced defence lawyer who plans to argue that your tools were unreliable and your process undocumented.",
   "parts": [
    {
     "marks": 4,
     "q": "What should a forensic report contain to be legally admissible?",
     "points": [
      "Every tool used with version numbers",
      "Every process step",
      "Hashes, screenshots, timelines, chain-of-custody logs",
      "Clear, professional, legally admissible",
      "Withstand cross-examination; objective findings"
     ],
     "model": "The lecture: \"Your report is your final product — it speaks for your expertise and process. It should withstand cross-examination and scrutiny.\"\n\n| Section | Contents |\n|---|---|\n| Case details | Request, legal authority, items received |\n| Chain of custody | Who handled each item, when; custody logs |\n| Methods | **Every tool used with its version number**, settings, and each step performed |\n| Integrity | **Hash values** of originals and copies; verification results |\n| Findings | Relevant files, messages, artifacts — with **screenshots** |\n| **Timeline** | Chronology of key events |\n| Conclusions | What the evidence shows — and its limits |\n| Appendices | Tool logs, hash reports |\n\n**Style:** clear, professional, objective and understandable to a judge who is not a technical expert.\n\n**Conclusion:** a complete report lets another examiner repeat the work and reach the same result — the strongest defence against challenge."
    },
    {
     "marks": 3,
     "q": "What best practices in tool use protect the examiner from the \"unreliable tools\" argument?",
     "points": [
      "Work on copies, not originals",
      "Validate tools before critical cases",
      "Stay updated",
      "Cross-check results with multiple tools",
      "Document versions/configuration"
     ],
     "model": "| Best practice (lecture) | How it answers the defence |\n|---|---|\n| Always work on **copies**, not originals | The original remains available for independent re-examination |\n| **Validate tools** before using them in critical cases | Shows the tool was tested and works correctly |\n| **Stay updated** — tools change frequently | Shows current, supported versions were used |\n| **Cross-check** results with multiple tools | Two tools giving the same result removes doubt about one tool's bug |\n| Document tool version and configuration | Makes the process repeatable |\n\n**Conclusion:** reliability is proved by validation, repetition and documentation — not by the tool's brand name."
    },
    {
     "marks": 3,
     "q": "What limitations of forensic tools might the defence raise, and how should you respond honestly?",
     "points": [
      "May miss encrypted data/steganography",
      "User errors/unsupported file systems → gaps",
      "Newest devices/OS unsupported",
      "Bugs → false results",
      "Respond: acknowledge limits, show validation, cross-checks, findings consistent"
     ],
     "model": "| Limitation the defence may raise | Honest response |\n|---|---|\n| Tools may fail to detect **encrypted data or steganography** | Acknowledge; explain what was and wasn't examined and why |\n| **User errors or unsupported file systems** can leave gaps | Show training, documented steps, and that the file system was supported |\n| Tools may not support the **newest devices or OS** | State the versions used and that the device was supported |\n| **Bugs** can produce false results | Show cross-checking with a second tool and consistent results |\n\n**Ethics:** the examiner must stay impartial — never overstate findings to fit the prosecution's narrative.\n\n**Conclusion:** admitting limits while showing validation makes the testimony more credible, not less."
    }
   ]
  },
  {
   "id": "q-tools",
   "rank": 14,
   "t": "f-tools",
   "covers": [
    "f-tools",
    "f-trends"
   ],
   "marks": 10,
   "q": "Choosing forensic tools and preparing for the future",
   "scenario": "A newly set-up district cyber unit has a limited budget and must decide which forensic tools to buy and how to keep its methods reliable in court for the next five years.",
   "parts": [
    {
     "marks": 4,
     "q": "Explain the main categories of forensic tools and how tools should be validated and selected.",
     "points": [
      "Disk imaging: FTK Imager, dd",
      "Memory: Volatility",
      "Mobile: Cellebrite, Magnet AXIOM",
      "Network: Wireshark",
      "File system: Autopsy, Sleuth Kit",
      "Validation: forensically sound, court-admissible, verify integrity, match to evidence, document version/config"
     ],
     "model": "| Category | Tools | Use |\n|---|---|---|\n| Disk imaging | FTK Imager, dd, EnCase, Guymager | Bit-for-bit copies |\n| Memory analysis | Volatility | Analyse RAM dumps |\n| Mobile forensics | Cellebrite, Magnet AXIOM, Oxygen, XRY | Extract and decode phone data |\n| Network forensics | Wireshark | Packet capture and session analysis |\n| File system analysis | Autopsy, Sleuth Kit | File structures and metadata |\n\n### Validation and selection\n1. Use tools that are **forensically sound and court-admissible**\n2. **Verify tool performance and integrity** before use\n3. **Match tools to the evidence type** and case goals\n4. **Document tool version, configuration and results**\n\n**Budget tip:** open-source tools (Autopsy, Sleuth Kit, Volatility, Wireshark, Guymager) cover many needs; commercial mobile tools are the main expense."
    },
    {
     "marks": 3,
     "q": "What are the limitations of forensic tools, and what best practices reduce them?",
     "points": [
      "May miss encrypted data or steganography",
      "User errors/unsupported file systems → gaps",
      "May not support newest devices/OS",
      "Bugs → false results",
      "Best practices: work on copies, validate, stay updated, cross-check with multiple tools"
     ],
     "model": "| Limitation | Best practice |\n|---|---|\n| May fail to detect encrypted data or steganography | Combine tools; seek keys lawfully |\n| User errors or unsupported file systems leave gaps | Training; document procedures |\n| May not support the newest devices or OS versions | Keep tools updated |\n| Bugs can produce false results | **Cross-check results with more than one tool**; validate before critical cases |\n\n**Golden rule:** always work on copies, never originals."
    },
    {
     "marks": 3,
     "q": "Which emerging technologies and trends will affect digital forensics?",
     "points": [
      "AI automates log analysis",
      "Blockchain for evidence integrity",
      "Edge computing — faster IoT analysis",
      "Quantum computing impacts encryption",
      "Trends: automation, standardization, zero trust, cross-border collaboration, privacy-preserving forensics"
     ],
     "model": "| Technology / trend | Effect on forensics |\n|---|---|\n| Artificial intelligence | Automates log analysis and finding patterns in huge data |\n| Blockchain | Tamper-proof records to ensure evidence integrity |\n| Edge computing | Faster analysis of IoT data near the device |\n| Quantum computing | May break today's encryption — and change how evidence is protected |\n| Increased automation | AI-driven tools reduce manual work |\n| Standardization | Universal IoT protocols would ease extraction |\n| Zero trust | Strong internal controls may reduce the need for forensics |\n| Cross-jurisdictional collaboration | Global laws and cooperation for cloud evidence |\n| Privacy-preserving forensics | e.g. homomorphic encryption — analysing data without exposing it |\n\n**Best practices for organizations:** proactive monitoring and logging, regular backups, staff training, agreements with cloud providers, and good documentation."
    }
   ]
  },
  {
   "id": "q-artifacts",
   "rank": 15,
   "t": "f-artifacts",
   "covers": [
    "f-artifacts"
   ],
   "marks": 10,
   "q": "Artifacts that reveal user activity",
   "scenario": "A bank officer in Rajshahi is suspected of copying customer data to a USB drive and emailing it to a fraud gang. He claims he never used a USB drive and never visited the gang's website. His office PC has been imaged.",
   "parts": [
    {
     "marks": 3,
     "q": "What are forensic artifacts? How can Windows registry artifacts prove USB use?",
     "points": [
      "Artifacts: traces left by user/system activity (registry, logs, browser, email)",
      "Registry files & system hive files",
      "USB artifacts: device make/model/serial, first/last connected",
      "MAC address & network info in registry",
      "Tools: EnCase, X-Ways keyword search"
     ],
     "model": "**Forensic artifacts** are traces that the operating system and applications leave behind when a user does something — registry entries, logs, browser history, email stores, link files.\n\n### Registry artifacts (lecture: registry files, system hive files)\n| Artifact | What it shows |\n|---|---|\n| **USB device entries** | Make, model and **serial number** of each USB drive ever connected, and when it was first/last connected |\n| Mounted devices | Which drive letter the USB received |\n| Network information (e.g. **MAC address**) | Which networks/adapters the PC used |\n\n**Application:** if the registry lists a USB drive with a serial number matching the drive seized from his home, connected on the date the data was copied, his claim \"I never used a USB\" is disproved.\n\n**Tools:** EnCase (interface and keyword search shown in the lecture), X-Ways, Autopsy."
    },
    {
     "marks": 4,
     "q": "How can email and browser artifacts be analysed to test his claims?",
     "points": [
      "Extract cached emails, attachments, contacts",
      "Recover browsing history, cookies, autofill",
      "Tools: Internet Evidence Finder, MailXaminer, X-Ways",
      "Build timeline; link user to online actions; understand intent"
     ],
     "model": "| Artifact | What it can show |\n|---|---|\n| Cached emails, attachments, contacts | Emails sent to the gang with customer files attached |\n| **Browsing history** | Visits to the gang's website |\n| **Cookies** | Logged-in sessions on the site |\n| **Autofill data** | Usernames, email addresses or form entries typed on the site |\n| Downloads | Files downloaded from the site |\n\n**Tools:** **Internet Evidence Finder**, **MailXaminer**, **X-Ways Forensics**.\n\n### Building the case\n1. Recover browser history and cookies showing visits to the website\n2. Recover sent emails with attachments\n3. Match times with USB registry entries and file-access times\n4. Build a **timeline** linking the user account to specific online actions\n\n**Conclusion:** these artifacts link a user to specific online actions and help show intent — they answer \"who did what, when\"."
    },
    {
     "marks": 3,
     "q": "How should the investigator rule out the defence that \"someone else used my PC\"?",
     "points": [
      "Tie actions to his user account & login times",
      "Correlate with physical access (attendance, CCTV)",
      "Check remote-access sessions/malware (memory, logs)",
      "Timeline correlation; multiple tools cross-check",
      "Impartial reporting"
     ],
     "model": "| Check | Purpose |\n|---|---|\n| User account and login records | Show the actions happened under **his** account during **his** logged-in sessions |\n| Physical presence | Compare with office attendance records, access cards and CCTV |\n| Remote access or malware | Check logs and memory for remote-desktop sessions or malware that could act on his behalf |\n| Timeline correlation | Combine registry, browser, email and file times into one chronology (Plaso/log2timeline) |\n| Cross-check tools | Confirm results with more than one tool |\n| Impartiality | Report evidence that supports his claim too |\n\n**Conclusion:** strong cases connect digital actions to a person — account + presence + absence of other explanations."
    }
   ]
  },
  {
   "id": "q-whatsapp",
   "rank": 16,
   "t": "f-email",
   "covers": [
    "f-email"
   ],
   "marks": 10,
   "q": "WhatsApp and social media evidence",
   "scenario": "A rumour spread through a WhatsApp group and Facebook posts leads to an attack on a minority community's homes in a northern district. Police arrest the group admin, whose phone shows \"Messages are end-to-end encrypted\". Several posts and messages have already been deleted.",
   "parts": [
    {
     "marks": 3,
     "q": "What are the main challenges of email and social media forensics in this case?",
     "points": [
      "Data volume",
      "End-to-end encryption (WhatsApp)",
      "Cloud storage — legal access needed",
      "Ephemeral content — deleted/disappearing messages"
     ],
     "model": "| Challenge (lecture) | In this case |\n|---|---|\n| **Data volume** | Thousands of messages, forwards, images and comments to sort |\n| **End-to-end encryption** | WhatsApp messages cannot be read from WhatsApp's servers — only on the devices |\n| **Cloud storage** | Facebook data sits on Meta's servers abroad; needs legal requests |\n| **Ephemeral content** | Deleted posts and disappearing messages |\n\n**Conclusion:** because of encryption, the **devices** (the admin's phone and members' phones) are the main source; cloud data and screenshots fill the gaps."
    },
    {
     "marks": 4,
     "q": "How can the WhatsApp and Facebook evidence be acquired?",
     "points": [
      "Device-based: extract app data — WhatsApp SQLite databases (msgstore) — with Cellebrite/Oxygen",
      "Backups (Google Drive) via legal request/credentials",
      "Cloud-based: Meta legal requests, user data download (Facebook \"Download Your Information\")",
      "Screenshots of public posts, web capture if lawful",
      "Hash and document; Faraday bag"
     ],
     "model": "| Method | How |\n|---|---|\n| **Device-based** | Seize the admin's phone (Faraday bag) and extract WhatsApp's **SQLite databases** with tools such as **Cellebrite UFED** or **Oxygen Forensics** (which can decrypt app data) — messages, group members, media, timestamps |\n| Backups | Chat backups (e.g. on Google Drive) via legal request or lawful credentials |\n| **Cloud-based** | Legal requests to Meta for Facebook account data, admin details and login IPs; the user's own data download (Facebook \"Download Your Information\") if lawfully obtained |\n| Web capture / screenshots | Capture public posts and comments with URL and time before they vanish |\n| Other members' phones | The same messages exist on every recipient's phone |\n\n**Preservation:** hash all extracted data; document tools and versions; maintain chain of custody.\n\n**Conclusion:** end-to-end encryption protects messages in transit, not on the phone — device extraction is the key."
    },
    {
     "marks": 3,
     "q": "What are the four types of email and social media forensics? Which apply here?",
     "points": [
      "Email forensics: headers, content, attachments, server logs",
      "Social media forensics: posts, comments, DMs, metadata",
      "Cloud-based forensics: Gmail, social media backups",
      "Device-based forensics: app data, cached content on devices"
     ],
     "model": "| Type | Focus | Applies here? |\n|---|---|---|\n| **Email forensics** | Headers, content, attachments, server logs | Only if emails were used to coordinate |\n| **Social media forensics** | Posts, comments, direct messages and their metadata | **Yes** — Facebook posts that spread the rumour |\n| **Cloud-based forensics** | Cloud-hosted email or social media backups | **Yes** — WhatsApp backups, Meta account data |\n| **Device-based forensics** | App data and cached content on phones/computers | **Yes** — the admin's phone is the main source |\n\n**Conclusion:** most cases combine types — device-based for encrypted apps, social media and cloud for public posts and account data."
    }
   ]
  },
  {
   "id": "q-applications",
   "rank": 17,
   "t": "f-basics",
   "covers": [
    "f-basics"
   ],
   "marks": 10,
   "q": "Digital forensics in a terrorism investigation",
   "scenario": "After a bomb blast at a public gathering, counter-terrorism investigators recover a damaged phone at the scene, laptops from a hideout, and find the attackers communicated through encrypted apps and posted propaganda online.",
   "parts": [
    {
     "marks": 3,
     "q": "Explain the real-world applications of digital forensics, with reference to this case.",
     "points": [
      "Cybercrime investigations (fraud, hacking, identity theft)",
      "Corporate security & insider threat",
      "Incident response & breaches",
      "IP theft & data leaks",
      "Terrorism & organized crime"
     ],
     "model": "| Application (lecture) | Example |\n|---|---|\n| Cybercrime investigations | Fraud, hacking, identity theft — e.g. MFS fraud |\n| Corporate security and insider-threat detection | Employees stealing data |\n| Incident response and security breaches | Bank or hospital attacks |\n| Intellectual-property theft and data leaks | Leaked source code or designs |\n| **Terrorism and organized crime investigations** | **This case** — identifying attackers, networks, financing and propaganda |\n\n**In this case:** forensics can identify the attackers and their contacts, reconstruct planning (chats, searches, maps), trace financing and online propaganda, and find other members of the network."
    },
    {
     "marks": 4,
     "q": "Apply the six-stage digital forensics process to this investigation.",
     "points": [
      "Identification: phone, laptops, accounts, CCTV",
      "Collection: seize; legal requests",
      "Preservation: Faraday bags, write blockers, hashes, custody",
      "Analysis: chats, contacts, location, carving damaged phone",
      "Documentation",
      "Presentation in court"
     ],
     "model": "[flow] Process\nIdentification → Collection → Preservation → Analysis → Documentation → Presentation\n\n| Stage | Application |\n|---|---|\n| **Identification** | Damaged phone at the scene, hideout laptops, encrypted-app accounts, social media propaganda accounts, CCTV |\n| **Collection** | Seize devices with documentation; send preservation and legal requests to platforms |\n| **Preservation** | Faraday bags; write blockers; forensic images; hash values; chain of custody |\n| **Analysis** | Extract chats, contacts and locations; carve data from the damaged phone (chip-off if needed); timeline of planning |\n| **Documentation** | Record every tool, version, step and hash |\n| **Presentation** | Clear expert report and testimony in the trial |\n\n**Conclusion:** in terrorism cases, the process also has intelligence value — finding the rest of the network quickly."
    },
    {
     "marks": 3,
     "q": "What ethical principles must investigators keep in mind, given the public pressure for quick results?",
     "points": [
      "Impartiality — no manipulation to fit narrative",
      "Proportionality — only necessary data",
      "Legal authorization & privacy",
      "Chain of custody & documentation"
     ],
     "model": "| Principle | Why it matters under pressure |\n|---|---|\n| **Impartiality** | Public pressure can tempt investigators to fit evidence to a narrative — evidence must not be manipulated |\n| **Proportionality** | Collect only data necessary for the case, not everyone's private data |\n| **Legal authorization and privacy** | Access personal data only with legal authority |\n| **Chain of custody** | Rushed handling creates gaps the defence will exploit |\n\n**Conclusion:** doing it right is faster in the end — evidence gathered ethically survives trial and convicts the right people."
    }
   ]
  },
  {
   "id": "q-sources",
   "rank": 18,
   "t": "f-evidence",
   "covers": [
    "f-evidence"
   ],
   "marks": 10,
   "q": "Types and sources of digital evidence",
   "scenario": "A young garment worker goes missing in Gazipur. Her family says she left home to meet someone she had been chatting with online. Police have her old phone at home, the suspect's laptop, CCTV from a nearby shop, a smartwatch she wore, and access to her Facebook and Google accounts through her family.",
   "parts": [
    {
     "marks": 3,
     "q": "What types of digital evidence may help this investigation?",
     "points": [
      "Computer files",
      "Network logs & internet history",
      "Cloud-stored information",
      "Emails & messaging logs",
      "Mobile device data",
      "Memory dumps & system artifacts"
     ],
     "model": "The lecture lists six types of digital evidence:\n\n| Type | What it could show here |\n|---|---|\n| Computer files | Photos, documents on the suspect's laptop |\n| Network logs and internet history | Websites visited, Wi-Fi connections, search history |\n| Cloud-stored information | Google Drive/Photos backups, Google location history |\n| Emails and messaging logs | Messenger/WhatsApp chats arranging the meeting |\n| Mobile device data | Calls, SMS, contacts, location data, app data |\n| Memory dumps and system artifacts | Recently used files and running apps on the laptop |\n\n**Conclusion:** together these can reconstruct who she talked to, where she went and when — a digital timeline of her last day."
    },
    {
     "marks": 3,
     "q": "Identify the sources of digital evidence in this scenario and what each may contain.",
     "points": [
      "Personal computers/laptops",
      "Mobile devices & wearables (smartwatch)",
      "IoT & surveillance systems (CCTV)",
      "External storage (USB, SSD)",
      "Network devices (routers)",
      "Cloud environments & email servers"
     ],
     "model": "| Source (lecture) | In this case | Possible evidence |\n|---|---|---|\n| Personal computers and laptops | Suspect's laptop | Chats, photos, browser history |\n| Mobile devices and wearables | Her old phone; her **smartwatch** | Messages; heart rate, steps, GPS location and time of last activity |\n| IoT devices and surveillance systems | Shop **CCTV** | Footage of her meeting someone, vehicle numbers |\n| External storage | USB drives or SD cards found with the suspect | Copied photos or videos |\n| Network devices | Home/shop Wi-Fi routers | Which devices connected and when |\n| Cloud environments and email servers | Her **Facebook and Google accounts** | Messages, location history, login IPs |\n\n**Note:** the family's access to her accounts should still be documented and, where possible, backed by legal requests to Meta and Google so the evidence is admissible."
    },
    {
     "marks": 4,
     "q": "Explain the key characteristics of digital evidence and how each affects how you collect it here.",
     "points": [
      "Fragile → avoid altering; write blockers, no browsing",
      "Volatile → capture smartwatch/phone data and CCTV quickly before overwrite",
      "Hidden → deleted chats, metadata, location history need forensic tools",
      "Duplicable → image and hash; work on copies",
      "Chain of custody throughout"
     ],
     "model": "| Characteristic | Meaning | Effect on collection in this case |\n|---|---|---|\n| **Fragile** | Easily altered or destroyed | Don't let family or officers browse the phone or laptop; use write blockers and forensic tools |\n| **Volatile** | Can disappear quickly | CCTV systems often overwrite footage in days; smartwatch memory is small — **collect these first** |\n| **Hidden** | Not visible to normal users | Deleted chats, metadata and location history need forensic extraction |\n| **Duplicable** | Can be copied exactly | Make forensic images, record hashes, and analyse copies only |\n\n[flow] Collection priority\nCCTV & smartwatch (most volatile) → Phones → Cloud account preservation requests → Laptop imaging\n\n**Conclusion:** the characteristics decide the order — collect what will disappear first, and protect everything from alteration."
    }
   ]
  },
  {
   "id": "q-memory",
   "rank": 19,
   "t": "f-analysis",
   "covers": [
    "f-analysis"
   ],
   "marks": 10,
   "q": "Memory and network forensics in a live attack",
   "scenario": "A private bank's security team notices a server in its Motijheel data centre making unusual outbound connections at night. Antivirus finds nothing on disk; the team suspects \"fileless\" malware running only in memory.",
   "parts": [
    {
     "marks": 3,
     "q": "What is memory forensics and why is it essential here?",
     "points": [
      "Analysing RAM: active processes, unsaved documents, passwords, session keys",
      "Uncovers malware running only in RAM",
      "Capture: FTK Imager, Belkasoft RAM Capture; analyse: Volatility, Rekall, EnCase, AXIOM",
      "Crucial for live investigations and APT detection"
     ],
     "model": "**Memory forensics** analyses a computer's **RAM** for active processes, unsaved documents, passwords and session keys. It uncovers **malware that runs only in memory** — which is why antivirus scanning the disk found nothing.\n\n| Stage | Tools |\n|---|---|\n| Capture RAM | FTK Imager, Belkasoft RAM Capture |\n| Analyse | **Volatility**, Rekall, EnCase, Magnet AXIOM |\n\n**Why essential:** it captures the dynamic state of the system and exposes in-memory threats invisible in disk images — crucial for live investigations and for detecting advanced persistent threats (APTs). If the server is rebooted first, the evidence is gone."
    },
    {
     "marks": 4,
     "q": "How should the volatile data be preserved?",
     "points": [
      "If powered on, capture RAM and active sessions first",
      "Use trusted, forensically sound tools",
      "Document running processes, open files, sessions, ports, remote IPs",
      "Do not shut down/reboot before capture",
      "Hash the memory image; chain of custody"
     ],
     "model": "### Preserving volatile data\n1. **Do not reboot or shut down** the server — RAM is lost when power is cut\n2. **Capture RAM and active sessions first**, using trusted tools (FTK Imager, Belkasoft/Magnet RAM Capture)\n3. **Document live activity** — running processes, open files, user sessions, active ports and remote IP addresses\n4. **Hash** the memory image and record it in the chain of custody\n5. Only then isolate the server from the network and proceed to disk imaging\n\n| Volatile data | Why it matters |\n|---|---|\n| Running processes | Reveal the malicious process |\n| Network connections | Show where data is being sent |\n| Logged-in sessions | Show which account is used |\n| Encryption keys / passwords in memory | May unlock encrypted data |\n\n**Conclusion:** order matters — most volatile first, then less volatile."
    },
    {
     "marks": 3,
     "q": "How can network evidence help trace the attack?",
     "points": [
      "Collect logs from routers, firewalls, servers",
      "Capture traffic with Wireshark",
      "Map IPs, timestamps, session info; DNS requests",
      "Export logs in original format (metadata, authenticity)",
      "Shows how data left, what was accessed, tools used"
     ],
     "model": "| Step | Purpose |\n|---|---|\n| Collect logs from **routers, firewalls and servers** | Show traffic patterns, logins and access attempts |\n| **Capture traffic with Wireshark** | Record live data flows and detect anomalies |\n| Map **IP addresses, timestamps and session information**; check **DNS requests** | Identify the outside server and when data was sent |\n| **Export logs in original formats** | Preserve timestamps and metadata for admissibility |\n\n**What it reveals:** how data left the network, what was accessed, and what tools were used to breach or probe it.\n\n**Bangladesh link:** the 2016 Bangladesh Bank heist showed how attackers can operate inside a bank network for a long time before fraudulent transfers — network and memory evidence are key to reconstructing such intrusions."
    }
   ]
  },
  {
   "id": "q-readiness",
   "rank": 20,
   "t": "f-trends",
   "covers": [
    "f-trends"
   ],
   "marks": 10,
   "q": "Forensic readiness for cloud and IoT",
   "scenario": "A Dhaka fintech company runs its services on a public cloud and uses IoT sensors and smart cameras in its offices. After a competitor suffered a breach and could not investigate because no logs existed, the CEO asks how to be \"forensically ready\".",
   "parts": [
    {
     "marks": 3,
     "q": "Why are cloud and IoT forensics important for such a company?",
     "points": [
      "Rising cybercrime: breaches, ransomware, insider threats",
      "Business impact: financial loss, reputation",
      "Legal accountability: admissible evidence",
      "Societal impact: privacy & security"
     ],
     "model": "| Reason (lecture) | For the fintech company |\n|---|---|\n| Rising cybercrime | Data breaches, ransomware and insider threats target financial services |\n| Business impact | Financial losses and reputational damage after an incident |\n| Legal accountability | Must produce admissible evidence for regulators, courts and insurers |\n| Societal impact | Customers' privacy and security depend on it |\n\n**Conclusion:** without forensic capability, the company cannot prove what happened, who did it, or that customers' data is safe."
    },
    {
     "marks": 4,
     "q": "What best practices make an organization forensically ready?",
     "points": [
      "Proactive monitoring: enable logging & auditing",
      "Regular backups",
      "Training staff in forensic skills",
      "Collaboration with CSPs: data-access agreements",
      "Documentation; legal records; tools (CloudTrail, Azure Monitor, Google Cloud Logging)"
     ],
     "model": "| Best practice (lecture) | What to do |\n|---|---|\n| **Proactive monitoring** | Enable logging and auditing everywhere — cloud API logs (**AWS CloudTrail**, **Azure Monitor**, **Google Cloud Logging**), servers, IoT gateways, cameras |\n| **Regular backups** | Keep data available after an attack |\n| **Training** | Equip IT and security teams with basic forensic skills — preserve first, investigate second |\n| **Collaboration with cloud providers** | Agree in advance how logs and data will be provided in an incident |\n| **Documentation** | Keep legal records, asset inventories and incident procedures |\n\nExtra: synchronize clocks across systems (so timelines line up), keep logs long enough, and protect logs from tampering.\n\n**Conclusion:** you can only investigate what you recorded — readiness is built before the incident."
    },
    {
     "marks": 3,
     "q": "What specific challenges will IoT devices create, and how can they be reduced?",
     "points": [
      "Device diversity",
      "Limited storage — overwrite",
      "Proprietary protocols",
      "Resource constraints",
      "Chain of custody",
      "Reduce: inventory, central log collection, standard devices, cloud retention"
     ],
     "model": "| IoT challenge (lecture) | How to reduce it |\n|---|---|\n| Device diversity | Keep an inventory; standardize on fewer vendors |\n| Limited storage — rapid overwrite | Send logs and footage to a central server or cloud with longer retention |\n| Proprietary protocols | Choose devices that export standard logs |\n| Resource constraints | Collect evidence from gateways and the cloud rather than the device |\n| Chain of custody across devices | Document how devices connect and where their data goes |\n\n**Conclusion:** design IoT systems so their evidence is collected centrally — before anything goes wrong."
    }
   ]
  },
  {
   "id": "q-phishing",
   "rank": 21,
   "t": "m-phishing",
   "covers": [
    "m-phishing"
   ],
   "marks": 10,
   "q": "Phishing attack on a bank",
   "scenario": "Staff of a commercial bank in Dhaka receive an email that looks like it comes from the bank's IT department: \"Your email password expires today — click here to keep your account.\" An officer clicks the link and enters her username and password on a page that looks identical to the bank's login page. Two days later, unusual transactions are made using her access.",
   "parts": [
    {
     "marks": 3,
     "q": "What is phishing? Identify the type used here and explain other common variants.",
     "points": [
      "Fraudulent attempt to obtain sensitive information by posing as a trustworthy entity, via email/IM, fake look-alike website",
      "Here: spear phishing (targeted at bank staff) impersonating IT department",
      "Variants: whaling, smishing, vishing, quishing, angler phishing, pharming"
     ],
     "model": "**Phishing** is a social-engineering attack in which criminals pose as a trustworthy entity — popular websites, payment services or **IT administrators** — usually by email or instant message, and direct users to a **fake website that looks almost identical** to the real one to steal credentials or other sensitive information.\n\n**This case:** a targeted **spear-phishing** email impersonating the bank's IT department, using urgency (\"expires today\") and a fake login page.\n\n| Variant | How it works | Bangladesh-style example |\n|---|---|---|\n| Spear phishing | Targeted at specific people or an organization | Email to bank staff \"from IT\" |\n| Whaling | Targets senior executives | Fake email to the managing director about a \"board payment\" |\n| **Smishing** | Phishing by SMS | \"Your bKash account is blocked — click this link\" |\n| **Vishing** | Voice phishing by phone calls | Caller posing as a bank or MFS agent asking for the PIN/OTP |\n| **Quishing** | Malicious QR codes | A fake QR code on a payment poster |\n| **Angler phishing** | Fake customer-support accounts on social media | A fake \"bank help\" Facebook page replying to complaints |\n| **Pharming** | Redirects users to fake sites by altering DNS settings | Typing the real bank address but landing on a fake site |\n\n**Conclusion:** phishing exploits people, not technology — which is why technical controls must be combined with awareness."
    },
    {
     "marks": 3,
     "q": "How did the phishing email lead to system compromise, and what should the bank do immediately?",
     "points": [
      "Click → fake page → credentials captured → attacker logs in as legitimate user",
      "Possible malware download / lateral movement",
      "Immediate: reset password, revoke sessions, block account, isolate device",
      "Check logs/SIEM for attacker activity; block malicious domain at proxy/email gateway",
      "Report, preserve evidence, inform regulator"
     ],
     "model": "[flow] How the compromise happened\nSpoofed email → Officer clicks link → Fake login page → Credentials stolen → Attacker logs in as her → Fraudulent transactions\n\nThe attacker now looks like a **legitimate insider**, so ordinary perimeter defences do not stop them.\n\n### Immediate response\n1. **Reset her password and revoke all active sessions**; disable the account temporarily\n2. **Isolate her computer** in case malware was also installed; capture memory and logs for forensics\n3. **Block the phishing domain** at the email gateway, proxy server and firewall\n4. **Search other mailboxes** for the same email and remove it; warn all staff\n5. **Review logs (SIEM)** for what the attacker accessed and which transactions to reverse\n6. **Stop and reverse fraudulent transactions**; inform the regulator and law enforcement\n7. **Preserve evidence** — the email with full headers, proxy logs, login logs\n\n**Conclusion:** speed limits the damage — contain first, then investigate."
    },
    {
     "marks": 4,
     "q": "What preventive and detective controls should the bank adopt against phishing?",
     "points": [
      "Phishing simulation & awareness training",
      "Email filtering (spam/phishing, link scanning, SPF/DKIM/DMARC)",
      "Multi-factor authentication",
      "Proxy server/web filtering to block malicious sites",
      "Honeypot & SIEM/SOC for detection",
      "Firewall, trusted services, no unknown proxies/links/downloads"
     ],
     "model": "| Control | Type | How it helps |\n|---|---|---|\n| **Phishing simulation** | Preventive (people) | Sends safe fake phishing emails to staff; those who click get training — builds a habit of checking |\n| **Awareness training** | Preventive | Teaches warning signs: urgency, odd sender address, look-alike links |\n| **Email filtering** | Preventive | Blocks spam, phishing and malicious attachments; scans links; sender authentication (SPF, DKIM, DMARC) stops spoofed \"IT department\" emails |\n| **Multi-factor authentication (MFA)** | Preventive | A stolen password alone is not enough to log in |\n| **Proxy server / web filtering** | Preventive | Blocks access to known malicious or newly registered domains |\n| **Firewall** | Preventive | Controls traffic in and out |\n| **Honeypot** | Detective | A decoy system or fake credentials that alert the security team when attackers use them |\n| **SIEM / SOC** | Detective | Correlates logs to spot unusual logins (odd time, location) and alerts analysts |\n\n**From the lecture's solutions:** don't use unknown proxy settings, don't click unknown links, use a good firewall, don't download unknown files, make people aware, and use trusted services only.\n\n**Conclusion:** layered defence — train people, filter emails, require MFA, and monitor for misuse — because no single control stops every phishing attempt."
    }
   ]
  },
  {
   "id": "q-attacks",
   "rank": 22,
   "t": "m-attacks",
   "covers": [
    "m-attacks"
   ],
   "marks": 10,
   "q": "Network and password attacks",
   "scenario": "A student logs into his university portal and online banking from free café Wi-Fi in Dhanmondi. Later, his portal account is accessed by someone else, and a hacker group posts on Facebook that it \"tested\" the university website by flooding it with traffic.",
   "parts": [
    {
     "marks": 3,
     "q": "Explain man-in-the-middle, session hijacking and eavesdropping attacks in this context.",
     "points": [
      "MITM: attacker secretly intercepts/relays communication (rogue Wi-Fi)",
      "Session hijacking: stealing session cookie to take over logged-in session",
      "Eavesdropping: listening to unencrypted traffic",
      "Defence: HTTPS, VPN, avoid open Wi-Fi, MFA, logout"
     ],
     "model": "| Attack | How it works | In the café |\n|---|---|---|\n| **Man-in-the-middle (MITM)** | The attacker secretly sits between two parties, intercepting or altering their communication | A fake \"Free Café Wi-Fi\" hotspot run by the attacker |\n| **Session hijacking** | Stealing the session token/cookie of a logged-in user to take over the session without the password | The attacker reuses the student's portal session |\n| **Eavesdropping** | Listening to network traffic, especially unencrypted traffic | Capturing data sent over open Wi-Fi |\n\n**Defences:** use only HTTPS sites, a trusted VPN on public Wi-Fi, avoid logging into sensitive accounts on open networks, enable MFA, and log out after use."
    },
    {
     "marks": 3,
     "q": "What are password attacks, and how can users and organizations defend against them?",
     "points": [
      "Brute force: try every combination",
      "Dictionary: common words/leaked passwords",
      "Guessing / password cracking",
      "Defences: long unique passphrases, password manager, MFA, account lockout/rate limiting, hashing+salting"
     ],
     "model": "| Attack | Method |\n|---|---|\n| **Brute force** | Trying every possible combination |\n| **Dictionary attack** | Trying common words and leaked passwords |\n| **Guessing** | Using personal details (birthdays, names) |\n| **Password cracking** | Recovering passwords from stolen password files |\n\n| Defence | Who |\n|---|---|\n| Long, unique passphrases; a password manager | Users |\n| Multi-factor authentication | Users and organizations |\n| Account lockout and rate limiting | Organizations |\n| Store passwords hashed and salted | Organizations |\n| Change passwords after any breach | Both |\n\n**Conclusion:** MFA makes a stolen or guessed password far less useful."
    },
    {
     "marks": 4,
     "q": "What is a DDoS attack, and how are hackers classified? Which type is the Facebook group?",
     "points": [
      "DoS/DDoS: flood service so it can't function; DDoS from many machines (botnet)",
      "Targets: banks, payment gateways, high-profile servers",
      "Hacker types: white hat, grey hat, black hat, script kiddie, hacktivist",
      "Group \"testing\" without permission: grey/black hat; if political motive → hacktivist; using ready tools → script kiddies"
     ],
     "model": "A **denial-of-service (DoS)** attack tries to stop a website or service from functioning, temporarily or indefinitely, by overwhelming it. A **distributed DoS (DDoS)** uses many computers (often a botnet) at once. Typical targets are high-profile servers — banks, payment gateways, even root name servers.\n\n| Hacker type | Description |\n|---|---|\n| **White hat** | Ethical hacker who tests systems **with permission** |\n| **Grey hat** | Hacks without permission but without clear criminal intent; may disclose flaws |\n| **Black hat** | Hacks for crime, profit or damage (\"cracking\") |\n| **Script kiddie** | Unskilled person using ready-made tools |\n| **Hacktivist** | Hacks for political or social causes |\n\n**The Facebook group:** flooding a website **without permission** is illegal whatever they call it — at best **grey hat**, more likely **black hat**; if they used ready-made DDoS tools, they behave like **script kiddies**, and if they had a political message they would be **hacktivists**. The lecture notes that government websites are hot targets because hackers enjoy the media coverage.\n\n**Defences against DDoS:** traffic filtering, rate limiting, content-delivery networks/DDoS-protection services and an incident-response plan."
    }
   ]
  },
  {
   "id": "q-harass",
   "rank": 23,
   "t": "m-typology",
   "covers": [
    "m-typology"
   ],
   "marks": 10,
   "q": "Online harassment and crimes against persons",
   "scenario": "A 16-year-old girl in Rajshahi is contacted on Instagram by an older man pretending to be a teenager. After weeks of friendly chats he obtains private photos, then shares edited versions in a Facebook group and threatens to send more to her family.",
   "parts": [
    {
     "marks": 3,
     "q": "How does cybercrime differ from traditional crime? Classify the offences in this scenario.",
     "points": [
      "Cybercrime: computer/network as tool, target or place",
      "Differences: anonymity, borderless, scale, speed, digital evidence",
      "Offences: online grooming, sextortion/threats, non-consensual image sharing, cyberbullying/harassment, child exploitation"
     ],
     "model": "**Cybercrime** is crime in which ICT is a **tool**, a **target** or a **place** of the criminal activity.\n\n| Basis | Traditional crime | Cybercrime |\n|---|---|---|\n| Location | Physical place | Cyberspace — can be across borders |\n| Offender | Usually physically present | Can be anonymous and far away |\n| Scale and speed | Limited | One offender can reach thousands instantly |\n| Evidence | Physical | Digital — fragile and volatile |\n| Jurisdiction | Clear | Often multiple countries |\n\n### Offences in this scenario\n| Offence | Meaning |\n|---|---|\n| **Online grooming** | Building a deceptive online relationship with a minor to exploit her |\n| **Child sexual exploitation** | Obtaining sexual images of a 16-year-old |\n| **Non-consensual image sharing** | Publishing private/edited images without consent |\n| **Threats / cyber harassment (sextortion)** | Threatening to send more to her family |\n| **Cyberbullying / harassment** | Using electronic media to torment and humiliate |"
    },
    {
     "marks": 4,
     "q": "How should the evidence be preserved and the case investigated?",
     "points": [
      "Victim: don't delete; screenshots with URLs/time; save profile links; report",
      "Police: preservation request to Meta; legal request for account data/IPs",
      "Seize suspect's phone; mobile forensics; hashes; chain of custody",
      "Social media forensics; link accounts",
      "Protect the minor's privacy; support"
     ],
     "model": "### Victim and family — immediately\n• **Don't delete** chats or block before saving evidence\n• Take **screenshots** showing the profile name, URL, date and time; save links to the Facebook group posts\n• Note the Instagram username and profile link\n• Report to police and the platforms\n\n### Investigators\n[flow] Investigation path\nVictim's evidence → Preservation request to Meta → Account & login data (legal request) → Identify suspect → Seize phone → Mobile forensics → Report\n\n1. Send a **preservation request** to Meta (Instagram and Facebook) so data is not deleted\n2. Obtain account data, login IPs and linked phone numbers through legal channels\n3. Identify the suspect via ISP/mobile-operator records\n4. **Seize his phone** — Faraday bag, chain of custody — and extract chats, original photos and edits (mobile forensics)\n5. Hash all evidence; build a timeline of grooming → images → threats\n6. Protect the child's identity throughout\n\n**Bangladesh support:** the **Police Cyber Support Center for Women (PCSW)** helps women and girls facing online harassment; police cyber units handle such cases."
    },
    {
     "marks": 3,
     "q": "What preventive measures can protect young people from such crimes?",
     "points": [
      "Awareness for children and parents; talk about threats",
      "Privacy settings; don't share personal info; genderless screen names",
      "Don't share intimate images; verify identities",
      "Save offending messages, report, block",
      "Platform safety tools; school programmes; quick reporting channels"
     ],
     "model": "| Level | Measures |\n|---|---|\n| Young people | Manage social media privacy settings; don't share full name or address with strangers; never share intimate images; be suspicious of \"too-perfect\" online friends; save offending messages and report |\n| Parents | **Talk to children about the threats**; know the apps they use; build trust so children report early |\n| Schools | Digital-safety education; clear reporting routes |\n| Platforms | Safety settings for minors, fast removal of non-consensual images, detection of grooming patterns |\n| State | Accessible reporting (PCSW, police cyber units), quick response, victim support |\n\n**From the lecture:** stay anonymous (e.g. a genderless screen name), never give your full name or address to strangers, leave hostile situations quickly, save offending messages, and learn more about internet privacy."
    }
   ]
  },
  {
   "id": "q-crypto",
   "rank": 24,
   "t": "m-typology",
   "covers": [
    "m-typology"
   ],
   "marks": 10,
   "q": "Crime-as-a-service, the dark web and cryptocurrency",
   "scenario": "Investigators find that the group behind a ransomware attack on a Bangladeshi company bought the malware and stolen login credentials on a dark-web marketplace, and asked for the ransom in Bitcoin.",
   "parts": [
    {
     "marks": 3,
     "q": "What is crime-as-a-service, and how has it changed cybercrime?",
     "points": [
      "Selling/renting criminal tools & services online (malware, ransomware kits, stolen data, botnets, hacking services)",
      "Dark web marketplaces",
      "Lowers skill barrier; specialization; scale",
      "Evolution: from viruses to organised crime, data theft, DDoS"
     ],
     "model": "**Crime-as-a-service (CaaS)** is the business model in which criminals **sell or rent tools and services** — ransomware kits, malware, stolen credentials, botnets for DDoS, hacking-for-hire — usually on **dark-web** marketplaces.\n\n| Effect | Explanation |\n|---|---|\n| Lower skill barrier | A buyer with little technical skill can launch a ransomware attack |\n| Specialization | Different groups write malware, sell access, launder money |\n| Scale | Attacks become cheaper and more frequent |\n| Organised crime | Cybercrime now resembles organized crime — the lecture's \"cyber threat evolution\" moved from early viruses and worms to organised-crime data theft and DoS/DDoS |\n\n**Conclusion:** CaaS turned cybercrime into an industry with suppliers, customers and services."
    },
    {
     "marks": 3,
     "q": "What is Bitcoin, and why do criminals demand ransom in it?",
     "points": [
      "Most common digital currency; decentralized ledger (blockchain)",
      "New coins created through minting (mining)",
      "Pseudonymous",
      "Exchanges buy/sell; price fluctuates",
      "Criminal appeal: cross-border, no bank, pseudonymous — but traceable on public ledger"
     ],
     "model": "| Feature (lecture) | Meaning | Why criminals like/dislike it |\n|---|---|---|\n| Most commonly used digital currency | Widely accepted | Easy for victims to buy |\n| Decentralized ledger — **blockchain** | No bank or government controls it; all transactions recorded publicly | No bank to freeze payment — but every transaction is visible |\n| New coins created through minting | Issued by the network | — |\n| **Pseudonymous** | Wallet addresses, not names | Hides identity — but not fully anonymous |\n| Bought/sold on **exchanges** | Converted to and from normal money | Exchanges often know customers (KYC) — a weak point for criminals |\n| Price fluctuates | Value changes with exchange rate | Ransom value can change |\n\n**Conclusion:** Bitcoin is pseudonymous, not anonymous — the public ledger and exchanges give investigators leads."
    },
    {
     "marks": 4,
     "q": "How can investigators approach a case involving the dark web and cryptocurrency?",
     "points": [
      "Preserve ransom note, wallet address, communications",
      "Blockchain analysis: follow payments on public ledger",
      "Exchanges: legal requests for KYC records; freeze funds",
      "Dark web: undercover monitoring, seized marketplace data",
      "International cooperation (INTERPOL, MLAT); forensic analysis of victim systems; challenges: mixers, jurisdiction"
     ],
     "model": "[flow] Following the money\nRansom wallet address → Blockchain analysis → Transfers to other wallets → Cash-out at an exchange → Legal request for exchange KYC records → Suspect identified\n\n### Approach\n1. **Preserve** the ransom note, wallet addresses, chat/email communications and the malware (forensic images of affected systems)\n2. **Blockchain analysis** — trace payments on the public ledger to linked wallets\n3. **Exchanges** — legal requests for customer (KYC) records and to **freeze funds** when coins are converted to cash\n4. **Dark-web intelligence** — monitor marketplaces and forums; use data from seized marketplaces\n5. **International cooperation** — INTERPOL, MLATs and foreign police, because servers, wallets and suspects are usually abroad\n6. **Malware forensics** — identify the ransomware family; free decryptors sometimes exist\n\n### Challenges\n• Mixing services and privacy coins that hide trails\n• Cross-border jurisdiction and slow legal processes\n• Volatile prices and rapid movement of funds\n\n**Conclusion:** cryptocurrency crime is traceable — investigators \"follow the money\" to the point where it touches the regulated financial system."
    }
   ]
  },
  {
   "id": "q-cia",
   "rank": 25,
   "t": "m-cia",
   "covers": [
    "m-cia"
   ],
   "marks": 10,
   "q": "CIA triad and cyber defence",
   "scenario": "A government e-service portal is attacked: first the website is flooded with traffic and becomes unreachable for six hours; then attackers change some citizens' application statuses, and finally leak a list of applicants' phone numbers.",
   "parts": [
    {
     "marks": 4,
     "q": "Explain the CIA triad and the additional principles of authenticity and non-repudiation.",
     "points": [
      "Confidentiality: only authorized access",
      "Integrity: accurate, unaltered",
      "Availability: systems & data available when needed",
      "Authenticity: genuine users/documents",
      "Non-repudiation: cannot deny sending/receiving"
     ],
     "model": "| Principle | Meaning | Typical controls |\n|---|---|---|\n| **Confidentiality** | Information is accessible only to authorized people | Access control, encryption |\n| **Integrity** | Information is accurate and not altered without authorization | Hashing, access control, audit logs |\n| **Availability** | Information, systems and security controls are available and working when needed | Redundancy, DDoS protection, backups |\n| **Authenticity** | Users and objects (documents) are genuine, not forged or fabricated | Authentication, digital signatures |\n| **Non-repudiation** | A party cannot deny having sent or received a transaction | Digital signatures, logs |\n\n**Remember:** C-I-A = keep it secret, keep it correct, keep it running."
    },
    {
     "marks": 3,
     "q": "Which principles were violated at each stage of the attack?",
     "points": [
      "Flooding → availability (DDoS)",
      "Changing statuses → integrity (and authenticity of records)",
      "Leaking phone numbers → confidentiality"
     ],
     "model": "| Stage of attack | Principle violated | Explanation |\n|---|---|---|\n| Website flooded, down for six hours | **Availability** | A DDoS attack prevented citizens from using the service |\n| Application statuses changed | **Integrity** (and authenticity of records) | Data was altered without authorization |\n| Phone numbers leaked | **Confidentiality** | Personal data exposed to unauthorized people |\n\n**Conclusion:** one incident can violate all three principles; the response must restore each one."
    },
    {
     "marks": 3,
     "q": "What is cyber defence? Explain its main components.",
     "points": [
      "Strategy & technology to protect networks, data, critical infrastructure",
      "Continuous monitoring",
      "Threat hunting",
      "Incident response",
      "National collaboration (e.g. national CIRT)"
     ],
     "model": "**Cyber defence** is the strategy and technology used to protect networks, data and critical infrastructure from cyber attacks.\n\n| Component | Meaning | Application to the portal |\n|---|---|---|\n| **Continuous monitoring** | Watching network traffic in real time for strange behaviour | Detect the traffic surge early |\n| **Threat hunting** | Actively searching for hidden malware or intruders before they strike | Find the attackers' foothold that allowed status changes |\n| **Incident response** | Acting fast to isolate and fix compromised systems | Restore service, correct records, close the hole |\n| **National collaboration** | Governments and industry sharing threat data | Report to and work with the national CIRT (BGD e-GOV CIRT) |\n\n**Conclusion:** cyber defence is continuous — monitor, hunt, respond and share."
    }
   ]
  },
  {
   "id": "q-ransomware",
   "rank": 26,
   "t": "m-ransomware",
   "covers": [
    "m-ransomware"
   ],
   "marks": 10,
   "q": "Ransomware in a hospital network",
   "scenario": "A private hospital in Chattogram finds that patient records and billing files on dozens of computers are encrypted. A note demands payment in Bitcoin within 72 hours. Investigators find the attack started on one reception PC and spread across the network over several days.",
   "parts": [
    {
     "marks": 3,
     "q": "What is ransomware, and how did it spread across the hospital network (lateral movement)?",
     "points": [
      "Malware that encrypts data and demands ransom (often cryptocurrency)",
      "Entry: phishing email, malicious download, unpatched system, weak remote access",
      "Lateral movement: from first PC using stolen credentials, shared drives, vulnerabilities",
      "Often double extortion (steal data too)"
     ],
     "model": "**Ransomware** is malicious software that **encrypts** a victim's files (or locks systems) and demands a **ransom**, usually in cryptocurrency such as Bitcoin, for the decryption key. Many groups also steal data first and threaten to publish it (\"double extortion\").\n\n[flow] Typical ransomware attack chain\nInitial access (phishing email / weak remote access / unpatched PC) → Foothold on reception PC → Steal credentials → Lateral movement → Encrypt many systems → Ransom note\n\n**Lateral movement** means the attacker moves from the first infected computer to others inside the network — using stolen passwords, shared folders, admin tools and unpatched vulnerabilities — until they control enough systems to cause maximum damage.\n\n**Why it spread here:** a flat network (no segmentation), shared admin passwords and no monitoring let the attacker move for days unnoticed."
    },
    {
     "marks": 4,
     "q": "Explain how an integrated security system could have prevented or detected this attack.",
     "points": [
      "Firewall & network segmentation",
      "IDS/IPS detect/block malicious traffic",
      "Proxy server filters web traffic",
      "SIEM correlates logs; SOC monitors 24/7",
      "Honeypot detects lateral movement",
      "DLP prevents data exfiltration",
      "Endpoint protection, patching, backups"
     ],
     "model": "An **integrated security system** combines several controls that share information, so an attack missed by one layer is caught by another (defence in depth).\n\n| Component | Role | How it would have helped |\n|---|---|---|\n| **Firewall** + network segmentation | Controls traffic between network zones | Reception PCs could not reach the records server directly |\n| **IDS / IPS** (intrusion detection / prevention system) | Detects or blocks malicious traffic patterns | Flags scanning and unusual connections from the reception PC |\n| **Proxy server** | Filters web traffic | Blocks the malicious download or command-and-control site |\n| **SIEM** (security information and event management) | Collects and correlates logs from all systems | Spots repeated failed logins and new admin accounts |\n| **SOC** (security operations centre) | Analysts monitor alerts 24/7 | Responds during the days of lateral movement |\n| **Honeypot** | Decoy system or file that no legitimate user touches | Any access means an intruder is moving inside — early warning |\n| **DLP** (data loss prevention) | Detects sensitive data leaving the network | Stops stolen patient data being sent out |\n| Endpoint protection, **patching**, MFA | Hardens individual systems | Closes the initial entry point |\n\n**Conclusion:** the attack took days — an integrated system with SIEM/SOC and honeypots would have turned those days into an early warning."
    },
    {
     "marks": 3,
     "q": "How should the hospital respond and recover?",
     "points": [
      "Isolate infected systems; disconnect network",
      "Preserve evidence (memory images, logs, ransom note)",
      "Restore from offline backups",
      "Don't pay (no guarantee, funds crime); report to police/CIRT",
      "Patch, reset credentials, lessons learned"
     ],
     "model": "[flow] Incident response\nContain → Preserve evidence → Eradicate → Recover → Lessons learned\n\n1. **Contain** — disconnect infected machines and segments; disable compromised accounts\n2. **Preserve evidence** — capture memory and disk images, logs and the ransom note before wiping\n3. **Report** — to police cyber units and the national CIRT; inform affected patients if data was stolen\n4. **Eradicate** — remove malware, close the entry point, **patch** systems, reset all passwords\n5. **Recover** — restore from **clean, offline backups** (the most important defence)\n6. **Do not rush to pay** — payment does not guarantee recovery and funds criminal groups\n7. **Lessons learned** — segmentation, MFA, monitoring, staff training\n\n**Conclusion:** good backups turn a disaster into an inconvenience; evidence preservation enables the investigation."
    }
   ]
  },
  {
   "id": "q-insider",
   "rank": 27,
   "t": "m-insider",
   "covers": [
    "m-insider"
   ],
   "marks": 10,
   "q": "Insider threat in a telecom company",
   "scenario": "A mobile operator in Bangladesh discovers that customer call records and NID details were sold to a fraud gang. Logs show a database administrator downloaded large data sets late at night using his own valid account and copied them to a personal USB drive.",
   "parts": [
    {
     "marks": 3,
     "q": "What is an insider threat? Why is it so dangerous?",
     "points": [
      "Threat from people inside — employees, contractors — with legitimate access",
      "Malicious, negligent or compromised insiders",
      "Dangerous: trusted access, knowledge of systems, bypass perimeter defences",
      "Lecture survey: unauthorized access by insiders 71%"
     ],
     "model": "An **insider threat** is a risk to an organization from people inside it — employees, contractors or partners — who misuse their **legitimate access**.\n\n| Type | Example |\n|---|---|\n| Malicious insider | This DBA selling customer data |\n| Negligent insider | An employee clicking a phishing link |\n| Compromised insider | An account taken over by an outside attacker |\n\n**Why dangerous:** insiders already have trusted access, know where valuable data is, and bypass perimeter defences such as firewalls.\n\n[chart] Security incidents reported in a survey shown in the lecture slides (% of organizations)\nViruses | 85 | 85%\nEmployee abuse of internet privileges | 79 | 79%\nUnauthorized access by insiders | 71 | 71%\nDenial of service | 27 | 27%\nSystem penetration from outside | 25 | 25%\nTheft of proprietary information | 20 | 20%\n\nThe figures show that **unauthorized access by insiders (71%) was far more common than penetration from outside (25%)**."
    },
    {
     "marks": 4,
     "q": "What controls could have prevented or detected this insider theft?",
     "points": [
      "IAM: unique accounts, least privilege, role-based access",
      "PAM: control/monitor privileged (admin) accounts; just-in-time access; session recording",
      "DLP: block bulk downloads/USB copies of sensitive data",
      "Logging + SIEM/UEBA alerts for unusual time/volume",
      "Encryption of sensitive data; USB/device control; separation of duties; background checks"
     ],
     "model": "| Control | What it does | How it applies |\n|---|---|---|\n| **IAM** (identity and access management) | Unique accounts, role-based access, **least privilege** | DBA gets only the access his job needs |\n| **PAM** (privileged access management) | Controls, approves and records use of admin accounts; just-in-time access | Night-time bulk query needs approval and is recorded |\n| **DLP** (data loss prevention) | Detects/blocks sensitive data leaving via email, web or USB | Blocks copying NID data to a USB drive |\n| **Device control** | Disables USB storage on servers | No USB copying at all |\n| **Logging + SIEM / user-behaviour analytics** | Alerts on unusual time, volume or location | Large downloads at night trigger an alert |\n| **Encryption** | Data unreadable without keys | Stolen files are useless |\n| **Separation of duties** | No single person controls everything | A second person reviews bulk exports |\n| HR measures | Background checks, awareness, exit procedures | Reduce motivation and opportunity |\n\n**Theory link:** routine activity theory — the insider (motivated offender) found a suitable target (customer data) with **no capable guardian** (no monitoring). IAM, PAM, DLP and SIEM are the guardians.\n\n**Bangladesh context:** in 2023, personal data of millions of citizens was exposed through a government website — showing how valuable NID data is to fraudsters and how important access control is."
    },
    {
     "marks": 3,
     "q": "How should the forensic investigation of the DBA be carried out?",
     "points": [
      "Secure workstation & USB; chain of custody",
      "Image with write blocker; hash",
      "Analyse database/access logs, USB registry artifacts, file metadata",
      "Timeline (after-hours activity)",
      "Lecture case study: FTK Imager, Autopsy, Magnet AXIOM, after-hours timeline"
     ],
     "model": "### Investigation steps\n1. **Secure** his workstation, the USB drive and his phone; start the chain of custody\n2. **Image** the drives with a write blocker; record hashes\n3. **Analyse** the copies (see below)\n4. **Build a timeline** showing after-hours downloads and copying\n5. **Report** with tools, versions, hashes and timeline\n\n### What to analyse\n• Database and server **access logs** — which tables, how many records, when\n• **Registry USB artifacts** — which USB device (serial number) was connected and when\n• File metadata and copy records on the USB drive\n• Email, messaging and payment records showing sale to the gang\n\n**Lecture case study (same pattern):** an executive suspected of leaking confidential files — **FTK Imager** cloned the drive, **Autopsy** revealed suspicious document access, **Magnet AXIOM** recovered browser evidence showing files sent via webmail, and the **timeline proved it happened after business hours**.\n\n**Conclusion:** logs + device artifacts + timeline link the insider's valid account to deliberate theft."
    }
   ]
  },
  {
   "id": "q-sqli",
   "rank": 28,
   "t": "m-sqli",
   "covers": [
    "m-sqli"
   ],
   "marks": 10,
   "q": "SQL injection and data integrity",
   "scenario": "An e-commerce company's customer database in a Dhaka data centre is attacked. The attacker typed specially crafted text into the website's search box; product prices were changed to Tk 1 and thousands of customer records with phone numbers and addresses were dumped online.",
   "parts": [
    {
     "marks": 3,
     "q": "What is SQL injection, and how did it affect data integrity here?",
     "points": [
      "Attacker inserts malicious SQL code into input fields; app passes it to database unchecked",
      "Can read, modify or delete data",
      "Integrity: unauthorized modification (prices to Tk 1)",
      "Confidentiality: customer data dumped"
     ],
     "model": "**SQL injection (SQLi)** is an attack in which the attacker enters malicious **SQL code** into an input field (search box, login form, URL). If the application passes that input straight to the database without checking it, the database runs the attacker's commands — letting them **read, change or delete** data.\n\n| Security property | Violation in this case |\n|---|---|\n| **Integrity** (data is accurate and unaltered) | Prices changed to Tk 1 — unauthorized modification |\n| **Confidentiality** | Customer phone numbers and addresses dumped online |\n| **Availability** | Could follow if tables were deleted |\n\n**Data integrity** means data remains accurate, complete and unaltered except by authorized processes. Databases in data centres are prime SQLi targets because one vulnerable web page can expose the whole database."
    },
    {
     "marks": 4,
     "q": "What technical controls protect databases against such attacks?",
     "points": [
      "Secure coding: parameterized queries/prepared statements, input validation",
      "Web application firewall",
      "IAM/PAM: least-privilege DB accounts",
      "Encryption at rest/in transit",
      "Patching",
      "VAPT",
      "Monitoring, backups, integrity checks"
     ],
     "model": "| Control | How it protects |\n|---|---|\n| **Parameterized queries / prepared statements** | Treat user input as data, never as code — the main fix for SQLi |\n| **Input validation** | Rejects unexpected characters and lengths |\n| **Web application firewall (WAF)** | Blocks known SQLi patterns before they reach the app |\n| **IAM / PAM — least privilege** | The website's database account can read products but not change prices or dump all customers |\n| **Encryption** (at rest and in transit) | Stolen data is unreadable without keys |\n| **Patching** | Fixes known vulnerabilities in the database, server and web software |\n| **VAPT** | Regular testing finds injection flaws before attackers do |\n| **Monitoring (SIEM) and integrity checks** | Alert on mass changes or unusual queries; hashes/checksums detect altered data |\n| **Backups** | Restore correct prices and records |\n\n**Conclusion:** secure coding stops the attack; least privilege, encryption and monitoring limit the damage if something is missed."
    },
    {
     "marks": 3,
     "q": "What is VAPT, and how would it have helped?",
     "points": [
      "Vulnerability Assessment: scan & list weaknesses",
      "Penetration Testing: authorized simulated attack to exploit them",
      "Would find the injectable search box before attackers",
      "Should be regular + after changes; followed by patching"
     ],
     "model": "**VAPT** = **Vulnerability Assessment and Penetration Testing**.\n\n| | Vulnerability Assessment (VA) | Penetration Testing (PT) |\n|---|---|---|\n| Aim | Find and list weaknesses | Prove they can be exploited |\n| Method | Automated scanning and review | Authorized, simulated real attack (ethical hacking) |\n| Output | List of vulnerabilities by severity | Evidence of what an attacker could achieve |\n\n**How it would have helped:** a web-application penetration test would have found the injectable search box and shown that prices could be altered and customer data dumped — before a criminal did. Fixes (parameterized queries, patching) would follow.\n\n**Conclusion:** VAPT should be done regularly and after every major change to the website."
    }
   ]
  },
  {
   "id": "q-audit",
   "rank": 29,
   "t": "m-audit",
   "covers": [
    "m-audit"
   ],
   "marks": 10,
   "q": "Security audit and compliance",
   "scenario": "After a cyber incident, the board of a financial institution in Dhaka orders a full security audit and asks the IT department to bring the organization in line with international standards within a year.",
   "parts": [
    {
     "marks": 4,
     "q": "What is a security audit? Explain the roles of vulnerability assessment, penetration testing and ethical hacking in it.",
     "points": [
      "Systematic evaluation of security controls, policies, configurations against standards",
      "VA: identify weaknesses",
      "PT: exploit to test real impact",
      "Ethical hacking: authorized hacking with permission & scope",
      "Outputs: findings, risk ratings, remediation plan"
     ],
     "model": "A **security audit** is a systematic, independent evaluation of an organization's security — its policies, controls, configurations, access rights and practices — against a standard or best practice, producing findings and a remediation plan.\n\n| Component | Role in the audit |\n|---|---|\n| **Vulnerability assessment (VA)** | Scans systems and applications to identify and rank weaknesses |\n| **Penetration testing (PT)** | Simulates real attacks to prove which weaknesses can be exploited and with what impact |\n| **Ethical hacking** | Hacking done **with permission**, within an agreed scope, to improve security — performed by \"white hat\" hackers |\n| Policy and access review | Checks who has access to what (IAM/PAM), and whether policies are followed |\n| Log and monitoring review | Checks whether incidents would be detected (SIEM, SOC) |\n\n[flow] Audit cycle\nPlan scope → Assess (VA, PT, reviews) → Report findings & risks → Remediate (patch, fix) → Re-test → Repeat periodically\n\n**Conclusion:** an audit tells the board where it really stands — VA finds weaknesses, PT proves their impact, and ethical hacking does both lawfully."
    },
    {
     "marks": 3,
     "q": "Explain how compliance with ISO/IEC 27001 and the NIST Cybersecurity Framework strengthens security.",
     "points": [
      "ISO/IEC 27001: international standard for an ISMS — risk assessment, controls, continual improvement, certification",
      "NIST CSF functions: (Govern), Identify, Protect, Detect, Respond, Recover",
      "Benefits: structured, risk-based, comparable, trusted by regulators/customers"
     ],
     "model": "| Framework | What it is | Key elements |\n|---|---|---|\n| **ISO/IEC 27001** | International standard for an **Information Security Management System (ISMS)**; organizations can be certified | Risk assessment, a set of security controls, policies, internal audits, management review, continual improvement |\n| **NIST Cybersecurity Framework (CSF)** | US framework widely used worldwide | Core functions: **Identify, Protect, Detect, Respond, Recover** (version 2.0 adds **Govern**) |\n\n[flow] NIST CSF functions\nGovern → Identify → Protect → Detect → Respond → Recover\n\n**Benefits:** a structured, risk-based approach; a common language for the board, auditors and regulators; and trust from customers and partners.\n\n**Conclusion:** frameworks turn one-off fixes into a continuous management system."
    },
    {
     "marks": 3,
     "q": "Why is patch management important, and how should it be done?",
     "points": [
      "Patches fix known vulnerabilities; attackers exploit unpatched systems",
      "Inventory, prioritize critical, test, deploy, verify",
      "Automatic updates; restart to apply",
      "Part of audit & compliance"
     ],
     "model": "**Patching** means installing updates that fix known security vulnerabilities in operating systems and software. Attackers routinely exploit systems that are not patched — the fix exists, but was never applied.\n\n### Patch management process\n1. **Inventory** all systems and software\n2. **Monitor** vendor updates (Microsoft Update, Apple support, Linux distributions — as the lecture notes)\n3. **Prioritize** critical and internet-facing systems\n4. **Test** patches before wide deployment\n5. **Deploy** — enable automatic updates where possible, and **restart** so patches take effect\n6. **Verify** and record; audit compliance regularly\n\n**Conclusion:** patching is cheap compared with the cost of a breach through a known, unfixed hole."
    }
   ]
  }
 ],
 "examPattern": {
  "total": 50,
  "answer": 5,
  "of": [
   7,
   8
  ],
  "each": 10,
  "scope": "Assumed pattern: like your other finals, 50 marks with 5 scenario questions to answer (7–8 offered), each 10 marks in 2–3 parts — confirm with the teacher (the mid-term was 20 marks with 5 scenario questions). Questions 1–20 come from the final-term digital forensics deck; 21+ are optional mid-term revision, since mid-term topics are not expected in the final."
 }
});
