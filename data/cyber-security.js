/* Cyber Security specialism – Content Areas 1, 2 and the cyber-specific parts of 3 */
REV.add({
  id: "cs-governance", section: "cs", title: "Security governance, layered protection and ISMS frameworks", short: "Governance",
  spec: "CS 1.1–1.3, 1.10",
  summary: "Why organisations need **information security governance**, the six **IT governance principles**, protection methods at each **layer** (hardware to cloud), and the frameworks and standards behind an **ISMS**.",
  notes: [
    { h: "Purpose of security governance", list: [
      "Investigate, control, communicate and report cyber risk.",
      "Provide a security framework: defined roles (data controller/processor), policies (retention, deletion) and activities (e.g. evaluating new systems).",
      "Manage compliance with legislation, frameworks and standards (ISO 27001, data protection law, FOI requests).",
      "Align organisational priorities with mitigating cyber threats (e.g. setting password-complexity rules)."
    ]},
    { h: "Six IT governance principles", table: [
      ["Principle", "Meaning"],
      ["Responsibility", "Everyone understands their information security role (asset owner, data controller/processor)"],
      ["Strategy", "Secure by design, planning for future needs such as cloud services"],
      ["Acquisition", "Every purchase evaluated for risk, benefit and cost, with transparent decisions"],
      ["Performance", "Enough preventative and remedial capability to guarantee CIA"],
      ["Conformance", "IT, data and information use complies with mandatory law and regulation"],
      ["Human behaviour", "Technical and non-technical controls both factored into policy and decisions"]
    ]},
    { h: "Protection by layer", table: [
      ["Layer", "Methods"],
      ["Hardware", "Hardware protection, device hardening, physical controls (secure storage, locked cages, CCTV, key-card doors)"],
      ["Operating system", "Patches and updates (with rollback via a system snapshot), OS hardening (remove unneeded accounts, functions, apps, ports)"],
      ["Network", "Segmentation/isolation (limits lateral movement), monitoring, network hardening, firewalls"],
      ["Software", "Anti-malware, SSO, MFA, RMM, vulnerability scanning, application hardening, access controls, strong password policy, **PAM** (privileged access management), application firewalls, patching"],
      ["Cloud", "Auditing and log monitoring, access controls, MFA – including a 'somewhere you are' factor such as IP location"]
    ]},
    { h: "Frameworks and standards for an ISMS", list: [
      "An **ISMS (Information Security Management System)** creates policies (information security policy, acceptable use policy) to keep an organisation compliant.",
      "**Frameworks**: **COBIT** (governance and management of IT), **SOC 2** (assesses controls for security, availability, processing integrity, confidentiality, privacy), **NIST** (helps manage cyber risk).",
      "**Standards**: **ISO 27000 series**, especially **ISO 27001** (establish, implement, maintain and improve an ISMS); **ISO/IEC 38500** (IT governance – sometimes mis-cited as 'ISO 35800'); **NCSC Cyber Essentials / Cyber Essentials Plus** (government-backed accreditation); **PCI DSS** (reduces payment-card fraud)."
    ]}
  ],
  cards: [
    ["Give three purposes of information security governance.", "Investigate/control/report cyber risk; provide a security framework of roles, policies and activities; manage compliance; align priorities with threat mitigation."],
    ["List the six IT governance principles.", "Responsibility, strategy, acquisition, performance, conformance, human behaviour."],
    ["What does the 'conformance' principle mean?", "IT, data and information use complies with mandatory legislation and regulation."],
    ["What does the 'acquisition' principle mean?", "Every purchase is evaluated for risk, benefit and cost with transparent decision-making."],
    ["What is PAM?", "Privileged Access Management – controlling and monitoring accounts with elevated access."],
    ["What is SSO?", "Single sign-on – one login gives access to several systems."],
    ["Why segment a network?", "To limit lateral movement by attackers or malware."],
    ["Why take a system snapshot before patching?", "So you can roll back if the patch causes problems."],
    ["What extra MFA factor applies in cloud security?", "'Somewhere you are' – e.g. location based on IP address."],
    ["What is an ISMS?", "An Information Security Management System – the policies and processes governing how an organisation manages information security."],
    ["What is COBIT?", "A framework for the governance and management of enterprise IT."],
    ["What does SOC 2 assess?", "Controls relating to security, availability, processing integrity, confidentiality and privacy."],
    ["What is ISO 27001?", "The standard for establishing, implementing, maintaining and improving an ISMS."],
    ["What is ISO/IEC 38500?", "The international standard for corporate governance of IT."],
    ["What is Cyber Essentials Plus?", "The higher level of the NCSC Cyber Essentials scheme, including independent hands-on testing."]
  ],
  quiz: [
    ["Which governance principle says controls must guarantee CIA?", ["Strategy", "Performance", "Conformance", "Acquisition"], 1, "Performance."],
    ["Which framework assesses security, availability, processing integrity, confidentiality and privacy?", ["COBIT", "SOC 2", "NIST", "PCI DSS"], 1, "SOC 2."],
    ["Which standard is for building an ISMS?", ["ISO 27001", "ISO 38500", "IEEE 802.3", "BS 7671"], 0, "ISO 27001."],
    ["Monitoring and restricting admin accounts is…", ["SSO", "PAM", "RMM", "SDN"], 1, "Privileged Access Management."],
    ["Network segmentation mainly helps by…", ["Speeding up Wi-Fi", "Limiting lateral movement", "Encrypting email", "Replacing firewalls"], 1, "Contains attackers."],
    ["Blocking a cloud login from an unusual country uses which factor?", ["Something you know", "Something you have", "Somewhere you are", "Something you are"], 2, "Location-based."]
  ]
});

REV.add({
  id: "cs-design-itsm", section: "cs", title: "Secure design, OS investigation, servers, ITSM and transmission", short: "Secure design",
  spec: "CS 1.4–1.9",
  summary: "The five aims of **secure network design** (zero trust onwards), OS components useful in an **investigation**, physical and virtual servers, **ITSM** processes, the **ITIL** lifecycle and principles for transmitting data securely.",
  notes: [
    { h: "Five aims of secure infrastructure design", table: [
      ["Aim", "Examples"],
      ["Establish the context", "Adopt **zero trust** early; define purpose, requirements and acceptable risk; consider user behaviour; define supplier responsibilities; map infrastructure and where sensitive data lives; clarify governance and roles"],
      ["Make compromise difficult", "Anonymise data; reduce the attack surface; maintain and test controls; protect management environments; use proven standard solutions; audit everything; design for easy maintenance"],
      ["Make disruption difficult", "Resilience to attack and failure; scalability for sudden demand; find exploitable bottlenecks; plan for third-party failure; mock incident exercises; external penetration testing"],
      ["Make compromise detection easier", "Collect and analyse logs; keep alerting current; separate monitoring from operational systems so logs survive; learn what 'normal' looks like"],
      ["Reduce the impact of compromise", "Segment the network; remove unneeded functionality/caches; avoid management bypasses; keep recovery simple and tested; separation of duties; anonymise data"]
    ]},
    { h: "Operating systems in investigations", list: [
      "**OS types**: client-side (Windows, macOS, Linux), mobile (Android, iOS), server-side (Windows, Linux).",
      "**OS functions**: security (e.g. zero trust), performance, error detection, GUI, memory management, processor management (e.g. side-channel protection), device management (e.g. signed drivers), file management, program execution, I/O.",
      "**Useful evidence sources**: configuration files (Linux), the **registry** (Windows), logs, library/preference files (macOS), the file system (NTFS, FAT32, exFAT, APFS, ext4) and running processes."
    ]},
    { h: "Servers", p: "**Physical servers** run apps directly on hardware with full access. **Virtual servers** let one machine run several isolated OS instances. **Containers** are isolated, portable packages carrying only what an app needs – adding security and portability." },
    { h: "ITSM processes", table: [
      ["Process", "Cyber example"],
      ["Service request management", "Reporting a potential cyber incident to the service desk"],
      ["Knowledge management", "Keeping standardised hardened-build documentation current"],
      ["IT asset management", "Tracking hardware, software and configuration in a **CMDB**"],
      ["Problem and incident management", "Root-cause analysis and standard cyber-incident procedures"],
      ["Change management", "Agreeing and recording a new firewall rule"]
    ]},
    { h: "ITIL service lifecycle", steps: ["Service strategy", "Service design (people, process, product, partners)", "Service transition", "Service operation", "Continual service improvement"] },
    { h: "Transmitting data securely", list: [
      "Identify the data's security needs using the **CIA triad**.",
      "Prevent eavesdropping in transit with **asymmetric encryption**.",
      "Verify data using the cryptographic properties: **integrity, authenticity, confidentiality, non-repudiation**."
    ]}
  ],
  cards: [
    ["What is zero trust?", "A design principle where nothing is trusted by default – every access request is verified regardless of location."],
    ["List the five aims of secure infrastructure design.", "Establish the context; make compromise difficult; make disruption difficult; make compromise detection easier; reduce the impact of compromise."],
    ["Why separate monitoring systems from operational ones?", "So logs and monitoring survive if the operational system is compromised."],
    ["Where would you look for evidence on a Windows machine?", "The registry, logs, file system and running processes."],
    ["Where are settings stored on Linux for investigation?", "Configuration files."],
    ["What is a CMDB?", "Configuration Management Database – records IT assets and their configuration."],
    ["What is an attack surface?", "All the points where an attacker could try to get into a system."],
    ["Give the four cryptographic properties for verifying data.", "Integrity, authenticity, confidentiality, non-repudiation."],
    ["What does requiring signed drivers protect against?", "Malicious or tampered drivers being loaded by the OS."],
    ["What file system is used by modern macOS?", "APFS."]
  ],
  quiz: [
    ["Running regular mock incident-response exercises supports which design aim?", ["Establish the context", "Make disruption difficult", "Reduce the impact of compromise", "Make compromise detection easier"], 1, "Part of building resilience."],
    ["Learning what normal traffic looks like helps…", ["Make compromise detection easier", "Make compromise difficult", "Establish context", "Reduce impact"], 0, "Anomalies stand out."],
    ["Recording a new firewall rule after stakeholders agree it is…", ["Knowledge management", "Change management", "Asset management", "Service strategy"], 1, "Change management."],
    ["Which Windows component stores much system and user configuration?", ["Registry", "ext4", "APFS", "CMDB"], 0, "The registry."],
    ["Segmenting a network to limit spread mainly serves which aim?", ["Reduce the impact of compromise", "Establish the context", "Make disruption difficult", "Strategy"], 0, "Containment reduces impact."]
  ]
});

REV.add({
  id: "cs-drp-controls", section: "cs", title: "Disaster recovery plans and security controls", short: "DRP and controls",
  spec: "CS 1.11–1.16",
  summary: "Why a **DRP** matters and the steps to implement one, plus **preventative, corrective and compensating** controls in the cyber security context.",
  notes: [
    { h: "Why a DRP is important", p: "A formal document detailing how to respond to unplanned incidents – natural disasters, power outages, cyber-attacks. It minimises **MTTR**, interruption and damage; minimises economic impact; sets up alternative means of operation in advance; enables prompt restoration; and helps identify gaps (e.g. lack of staff training)." },
    { h: "Implementing a DRP", steps: ["Define the scope: environmental/technical, organisational, departmental, individual impact.", "Gather information: historic outages, hardware/software/network/data inventories, contact details.", "Risk-assess: likelihood and impact on business as usual.", "Create the plan: identify required systems, staff roles, budget.", "Get approval (sign-off).", "Test: scope, frequency, execution, review, amendment.", "Continuously improve: internal/external audits, gap analysis, assess control effectiveness, record and communicate improvements."] },
    { h: "Preventative controls", list: [
      "**Purpose**: stop unauthorised access or tampering, or mitigate environmental incidents.",
      "Physical: specialist locks, barriers, flood/fire defences. Managed entry: manned reception, guards, restricted doors, card readers. Biometric: face, fingerprint. CCTV. PINs.",
      "Technical: firewalls, allow/deny lists, sandboxing, device hardening (change default passwords, set permissions, update, remove unneeded software, apply policy, disable unauthorised devices such as USB drives).",
      "Procedural: separation of duties, RBAC."
    ]},
    { h: "Corrective controls", list: [
      "**Purpose**: limit damage and stop recurrence.",
      "Physical: fire suppression (sprinklers, extinguishers), gas suppression (inert/chemical).",
      "Technical: patching, disconnecting infected systems, quarantining a virus.",
      "Procedural: SOPs (e.g. fire response), invoking the DRP."
    ]},
    { h: "Compensating controls", list: [
      "**Purpose**: a safeguard against a primary control failing.",
      "Physical: segregation of duties, log management/auditing (e.g. key-code access logs).",
      "Technical: encryption.",
      "Procedural: mandatory cyber-awareness training, regular control testing (e.g. simulated attacks), SOPs (e.g. environmental monitoring)."
    ]},
    { h: "Protecting personal, physical and environmental security", steps: ["Review the potential risk – gather information from systems and users (logs, security events).", "Select and apply suitable preventative, corrective and compensating controls.", "Comply with regulation and policy, e.g. Data Protection Act 2018."] }
  ],
  cards: [
    ["Give four reasons a DRP is important.", "Any four: minimises MTTR, interruption, damage and economic impact; sets up alternative operations; enables prompt restoration; identifies gaps."],
    ["List the steps to implement a DRP.", "Define scope, gather information, risk-assess, create the plan, get approval, test, continuously improve."],
    ["Give three technical corrective controls.", "Patching, disconnecting infected systems, quarantining a virus."],
    ["What is invoking the DRP?", "Formally activating the disaster recovery plan – a procedural corrective control."],
    ["Give a technical compensating control.", "Encryption – protects data even if access controls fail."],
    ["Why are simulated phishing attacks a compensating control?", "They regularly test and reinforce staff awareness in case technical filters miss an attack."],
    ["What is gas suppression?", "Putting out fires with inert or chemical gas, protecting electronic equipment that water would damage."],
    ["Give two procedural preventative controls.", "Separation of duties and role-based access control."]
  ],
  quiz: [
    ["Quarantining a detected virus is a…", ["Preventative control", "Corrective control", "Deterrent control", "Directive control"], 1, "It limits damage after detection."],
    ["Encrypting laptops in case they're stolen despite locked offices is a…", ["Compensating control", "Corrective control", "Detective control", "Deterrent control"], 0, "Backstop if the primary physical control fails."],
    ["Which DRP step comes immediately before testing?", ["Gather information", "Get plan approval", "Define scope", "Continuous improvement"], 1, "Sign-off, then test."],
    ["Disabling USB ports on all PCs is…", ["Preventative technical control", "Corrective procedural control", "Compensating physical control", "Detective control"], 0, "Device hardening."],
    ["A key benefit of a DRP is minimising…", ["MTBF", "MTTR", "RPO increases", "Bandwidth"], 1, "Faster repair/restoration."]
  ]
});

REV.add({
  id: "cs-crypto", section: "cs", title: "Cryptography and digital certificates", short: "Cryptography",
  spec: "CS 1.17–1.20",
  summary: "What cryptography is for, its characteristics (**encryption, hashing, confidentiality, authenticity, integrity, non-repudiation**), how **digital certificates** work and how to generate and manage them.",
  notes: [
    { h: "Characteristics of cryptography", table: [
      ["Characteristic", "Meaning"],
      ["Encryption", "Reversible; based on keys (public/private or shared)"],
      ["Confidentiality", "Only intended recipients can decrypt (symmetric or asymmetric)"],
      ["Authenticity", "Recipient can verify the sender with a **digital signature** (asymmetric)"],
      ["Hashing", "One-way, fixed-length output; can't be reversed (e.g. storing passwords)"],
      ["Integrity", "Data can't be changed in transit without detection (e.g. **HMAC**)"],
      ["Non-repudiation", "The sender can't deny sending – guaranteed by a **message authentication code** / signature"]
    ]},
    { h: "How a digital signature works", steps: ["The sender hashes the message.", "They encrypt the hash with their **private key** – this is the signature.", "The recipient decrypts it with the sender's **public key** and hashes the message themselves.", "If the hashes match, the message is authentic and unchanged."] },
    { h: "Digital certificates", list: [
      "**Purpose**: an electronic 'signature' proving the authenticity of a device, server or user, using asymmetric cryptography.",
      "**Contents**: holder name, unique serial number, expiry date, holder's public key, issuer's signature.",
      "**Types**: **server-side** (client verifies a server, e.g. HTTPS), **client-side** (client authenticates to a server), **code signing** (OS verifies software's author and integrity)."
    ]},
    { h: "Certificate management", p: "Monitor expiry dates; revoke early when needed; auto-renew; create, sign and issue new certificates; audit that certificates are correctly deployed or removed; diagnose certificate problems." },
    { h: "Generating a certificate", steps: ["Generate a public/private key pair.", "Generate a **Certificate Signing Request (CSR)**.", "Have it issued and signed by a trusted **Certificate Authority (CA)**.", "Install the certificate on the client or server."] }
  ],
  memory: ["Sign with your **private** key, others check with your **public** key. Encrypt *to* someone with **their** public key; only **their** private key opens it."],
  cards: [
    ["What is the difference between encryption and hashing?", "Encryption is reversible with a key; hashing is one-way and produces a fixed-length output."],
    ["What is non-repudiation?", "Proof that the sender sent a message, so they can't deny it."],
    ["What is authenticity in cryptography?", "Being able to verify who sent a message, using a digital signature."],
    ["What is HMAC used for?", "Checking integrity and authenticity of a message using a hash and a secret key."],
    ["Which key creates a digital signature?", "The sender's private key."],
    ["Which key verifies a digital signature?", "The sender's public key."],
    ["Name five things in a digital certificate.", "Holder name, serial number, expiry date, holder's public key, issuer's signature."],
    ["What are the three types of digital certificate?", "Server-side, client-side and code signing."],
    ["What is a code-signing certificate for?", "Letting the OS verify software's author and that it hasn't been altered."],
    ["What is a CSR?", "A Certificate Signing Request – sent to a CA to request a signed certificate."],
    ["List the four steps to generate a digital certificate.", "Generate key pair, generate CSR, CA issues and signs it, install it."],
    ["Why revoke a certificate early?", "If the private key is compromised or the certificate is no longer valid/needed."],
    ["Why are passwords hashed rather than encrypted?", "Hashing can't be reversed, so a stolen password database doesn't reveal the passwords directly."]
  ],
  quiz: [
    ["Which is one-way and can't be reversed?", ["Symmetric encryption", "Asymmetric encryption", "Hashing", "TLS"], 2, "Hashing."],
    ["Alice signs a document. Bob checks it using…", ["Bob's private key", "Alice's public key", "Alice's private key", "A shared key"], 1, "Verify with the signer's public key."],
    ["What do you send to a CA to get a certificate?", ["Your private key", "A CSR", "An HMAC", "A hash of the CA"], 1, "Never send the private key."],
    ["Which certificate type lets Windows confirm an app came from its real publisher?", ["Server-side", "Client-side", "Code signing", "Self-signed"], 2, "Code signing."],
    ["Which property stops a sender later denying they sent an email?", ["Confidentiality", "Non-repudiation", "Availability", "Hashing"], 1, "Non-repudiation."],
    ["A website shows a certificate error because it ran out last week. Which management task was missed?", ["Revocation", "Monitoring expiry / auto-renewal", "CSR generation", "Code signing"], 1, "Track expiry dates and renew."]
  ],
  exam: [
    { q: "Explain how a digital certificate allows a customer to trust a bank's website.", marks: 4, points: [
      "The bank's server presents a certificate containing its public key and identity…",
      "…signed by a trusted Certificate Authority.",
      "The browser checks the CA signature, the expiry date and that the name matches the site.",
      "If valid, the browser trusts the site and uses the public key to set up an encrypted (TLS) session."
    ]}
  ]
});

REV.add({
  id: "cs-law-ethics", section: "cs", title: "Cyber law, ethics and core terminology", short: "Law and ethics",
  spec: "CS 1.21–1.24",
  summary: "The nine pieces of legislation a cyber security technician must know, the **UK Cyber Security Council** and **BCS** codes of ethics, core terminology, and how to assess **security requests**.",
  notes: [
    { h: "Legislation", table: [
      ["Law", "Key points"],
      ["Data Protection Act 2018", "Organisations must protect personal data from cyber-attacks, detect security events and minimise impact"],
      ["Investigatory Powers Act 2016", "Collates and authorises powers for law enforcement and security agencies to obtain communications data"],
      ["Human Rights Act 1998", "Protects human rights; binds all public authorities"],
      ["Telecommunications (Security) Act 2021", "Network/service providers must prevent, mitigate/remedy and disclose security compromises"],
      ["Computer Misuse Act 1990", "Unauthorised access; access with intent; unauthorised modification/deletion; supplying tools for these offences"],
      ["Freedom of Information Act 2000", "Exempts some security bodies (e.g. NCSC) from disclosure"],
      ["NIS Regulations 2018", "Common security baseline for Operators of Essential Services (OES) and Relevant Digital Service Providers (RDSPs)"],
      ["Official Secrets Act 1989", "Protects security and intelligence information from disclosure"],
      ["Wireless Telegraphy Act 2006", "Regulates wireless transmitters; criminalises unauthorised interception of wireless communications"]
    ]},
    { h: "Ethical codes", list: [
      "**UK Cyber Security Council Code of Ethics**: **credibility** (accountable, ethical); **integrity** (honest, legal); **professionalism** (share knowledge, promote understanding, evidence-based practice, correct misinformation); **responsibility and respect** (take ownership, safeguard data, declare conflicts of interest, champion equality, diversity and inclusion).",
      "**BCS code of conduct**: make IT for everyone; show what you know, learn what you don't (work within competence, keep learning, understand the law); respect the organisation or individual you work for (due care, no disclosure for personal gain, don't exploit inexperience); keep IT real, professional and pass it on (uphold the profession, raise standards, support colleagues)."
    ]},
    { h: "Core terminology", list: [
      "**CIA triad** – confidentiality, integrity, availability.",
      "**IAAA** – identification (unique ID), authentication (single-factor or MFA), authorisation (permissions via access-control models), accountability (actions traceable to a user).",
      "**Defence in depth** – layered security so one failure doesn't compromise the whole system.",
      "**Reliability** – the system performs as specified over time.",
      "**Assurance** – confirming security requirements have actually been met."
    ]},
    { h: "Assessing a security request", p: "Consider its **origin**, its **reason**, the requestor's **status and permissions**, its **sensitivity** (e.g. exposing personal data), any **new risk** it introduces, and whether it **complies** with regulation." }
  ],
  cards: [
    ["What does the Investigatory Powers Act 2016 cover?", "Powers for law enforcement and security agencies to obtain communications data."],
    ["What does the Telecommunications (Security) Act 2021 require?", "Providers must prevent, mitigate/remedy and disclose security compromises."],
    ["What do the NIS Regulations 2018 do?", "Set a common security baseline for Operators of Essential Services and Relevant Digital Service Providers."],
    ["What is an OES?", "Operator of Essential Services – e.g. energy, water, transport, health providers under NIS."],
    ["What does the Wireless Telegraphy Act 2006 criminalise?", "Unauthorised interception of wireless communications (and regulates wireless transmitters)."],
    ["Who does the Human Rights Act 1998 bind?", "All public authorities."],
    ["How does the Freedom of Information Act relate to cyber security?", "It exempts certain security bodies, such as the NCSC, from disclosure."],
    ["Name the four headings of the UK Cyber Security Council Code of Ethics.", "Credibility, integrity, professionalism, responsibility and respect."],
    ["What does 'show what you know, learn what you don't' mean in the BCS code?", "Only work within your competence and keep developing your knowledge."],
    ["What is defence in depth?", "Layering multiple independent controls so a single failure doesn't expose the whole system."],
    ["What is assurance?", "Confirmation that security requirements have actually been met."],
    ["List six factors when assessing a security request.", "Origin, reason, requestor's status/permissions, sensitivity, new risk introduced, regulatory compliance."]
  ],
  quiz: [
    ["Listening in to a company's Wi-Fi traffic without permission breaks…", ["Official Secrets Act", "Wireless Telegraphy Act 2006", "Human Rights Act", "FOI Act"], 1, "Unauthorised interception of wireless communications."],
    ["A water company must meet a security baseline under…", ["NIS Regulations 2018", "PCI DSS", "WEEE", "RIDDOR"], 0, "It's an Operator of Essential Services."],
    ["Declaring a conflict of interest falls under which UKCSC heading?", ["Credibility", "Integrity", "Professionalism", "Responsibility and respect"], 3, "Responsibility and respect."],
    ["Using firewalls, MFA, encryption and training together is…", ["Zero day", "Defence in depth", "Non-repudiation", "Assurance"], 1, "Layered security."],
    ["A request from an unknown email address to reset the CEO's MFA should be judged first on its…", ["Origin and requestor's status", "Font", "Length", "Time zone"], 0, "Validity starts with who's asking and from where."],
    ["Which law lets agencies obtain communications data with authorisation?", ["Investigatory Powers Act 2016", "DPA 2018", "CMA 1990", "Telecommunications (Security) Act"], 0, "IPA 2016."]
  ]
});

REV.add({
  id: "cs-forensics", section: "cs", title: "Computer forensics and preserving evidence", short: "Forensics",
  spec: "CS 2.1, 2.20",
  summary: "The five-stage **forensic compliance model** and how to escalate a security incident while **preserving evidence**.",
  notes: [
    { h: "Purpose", p: "To investigate and analyse digital devices and networks, gathering legitimate evidence for a body such as law enforcement." },
    { h: "Five-stage compliance model", steps: ["**Identification** – what evidence exists, where, and how it's stored.", "**Preservation** – avoid tampering: isolate, secure and preserve evidence in chronological order, within legal retention periods.", "**Analysis** – reconstruct data fragments and draw evidence-based conclusions.", "**Documentation** – record all findings and the investigation itself.", "**Presentation** – present findings to the appropriate body for action."] },
    { h: "Escalating while preserving evidence", steps: ["Record the date, time and description of the incident.", "Take appropriate action – e.g. **isolate** the affected device from the network (don't switch it off without advice, as volatile memory may hold evidence).", "Preserve digital evidence – e.g. **copy relevant log files**.", "Escalate as appropriate."] }
  ],
  memory: ["Forensics: **I P A D P** – 'I Prefer A Detailed Presentation'."],
  cards: [
    ["What is the purpose of computer forensics?", "To investigate devices and networks and gather legitimate evidence for a body such as law enforcement."],
    ["List the five stages of the forensic compliance model.", "Identification, preservation, analysis, documentation, presentation."],
    ["What happens at the preservation stage?", "Evidence is isolated, secured and preserved in chronological order to avoid tampering."],
    ["Why must evidence be preserved in chronological order?", "So the sequence of events is clear and the evidence remains credible."],
    ["What should you record first when escalating an incident?", "The date, time and a description of the incident."],
    ["Why isolate rather than switch off a compromised machine?", "Isolation stops spread while preserving volatile evidence in memory."],
    ["Give an example of preserving digital evidence.", "Making copies of relevant log files."]
  ],
  quiz: [
    ["Which forensic stage reconstructs data fragments?", ["Identification", "Preservation", "Analysis", "Presentation"], 2, "Analysis."],
    ["A technician finds ransomware on a PC. Best first action?", ["Wipe it immediately", "Record details and isolate it from the network", "Pay the ransom", "Post on social media"], 1, "Record and isolate, preserving evidence."],
    ["Handing findings to the police is which stage?", ["Documentation", "Presentation", "Analysis", "Identification"], 1, "Presentation."],
    ["Which stage involves working out where evidence is stored?", ["Identification", "Preservation", "Analysis", "Documentation"], 0, "Identification."]
  ]
});

REV.add({
  id: "cs-threats", section: "cs", title: "Threats, threat actors and threat intelligence", short: "Threats and actors",
  spec: "CS 2.2, 2.3",
  summary: "Recognising **social engineering, DoS/DDoS, zero-day, malware, password and man-in-the-middle** attacks by their signs, and the **threat actors** behind them.",
  notes: [
    { h: "Social engineering", table: [
      ["Attack", "Signs"],
      ["Phishing", "Mass fraudulent messages – spoofed or misspelt domains, poor writing, infected attachments, urgency"],
      ["Spear phishing", "Targeted at a person/organisation – harder to detect"],
      ["Vishing", "Fraudulent calls, often impersonating bodies like HMRC, pressuring for personal details"],
      ["Smishing", "Fraudulent texts with suspicious links"],
      ["Shoulder surfing", "Watching someone enter credentials"],
      ["Dumpster diving", "Retrieving information from discarded waste"]
    ]},
    { h: "Service and zero-day attacks", list: [
      "**DoS** – overwhelms a service from one source. **DDoS** – many devices at once. Signs: degraded performance, traffic spikes, repeated requests from the same source, outages.",
      "**Zero-day** – exploits a flaw before a patch exists. Often only spotted through vendor statistics, unusual scanning, machine-learning signature monitoring or unusual interaction patterns."
    ]},
    { h: "Malware", table: [
      ["Type", "Behaviour"],
      ["Virus", "Spreads and damages data/software"],
      ["Adware", "Unwanted ads, browser changes, slow performance"],
      ["Ransomware", "Blocks, deletes or encrypts data for payment"],
      ["Trojan", "Disguised as legitimate software"],
      ["Botnet", "Network of compromised devices under attacker control"],
      ["Spyware", "Hides and steals sensitive data"]
    ], after: "Usually spotted through scan reports, reduced performance or unusual behaviour." },
    { h: "Password and interception attacks", list: [
      "**Brute force** – tries every combination. **Dictionary attack** – tries common words and phrases. Signs: more network activity, repeated failed logins from one IP, unusual user behaviour.",
      "**Man-in-the-middle** – intercepts communications. Signs: browser security warnings, repeated unexpected disconnections."
    ]},
    { h: "Threat actors", table: [
      ["Actor", "Motive"],
      ["Cyber criminals", "Financial gain (ransomware, social engineering, malware)"],
      ["Insiders", "Current or past staff misusing access for revenge or gain"],
      ["Terrorist organisations", "Disruption for a cause"],
      ["Nation states", "Political gain – stealing data, damaging infrastructure"],
      ["Hacktivists", "Expose wrongdoing 'for good'"],
      ["Script kiddies", "Inexperienced, seeking a challenge, using others' tools"]
    ]},
    { h: "Threat intelligence", p: "Gathering critical information to analyse and prioritise threats. It reveals previously unknown threats and attackers' motivations, and supports fast, effective mitigation decisions." },
    { h: "Skill", p: "Identify potential threats, vulnerabilities and risks; calculate their likelihood and severity; categorise them by priority." }
  ],
  cards: [
    ["Give four signs of a phishing email.", "Spoofed/misspelt domain, poor spelling/grammar, unexpected attachment, urgent tone."],
    ["What is vishing?", "Voice phishing – fraudulent phone calls, often impersonating official bodies."],
    ["What is dumpster diving?", "Searching discarded rubbish for useful information."],
    ["Give three signs of a DDoS attack.", "Degraded performance, traffic spikes, repeated requests from the same sources, service outages."],
    ["How might a zero-day attack be spotted?", "Vendor statistics, unusual scanning, ML signature monitoring, unusual interaction patterns."],
    ["What is a trojan?", "Malware disguised as legitimate software."],
    ["What is adware?", "Malware showing unwanted adverts, changing browser settings and slowing the device."],
    ["What is the difference between brute force and dictionary attacks?", "Brute force tries every combination; dictionary tries common words and phrases."],
    ["Give two signs of a password attack.", "Repeated failed logins from one IP, increased network activity, unusual user behaviour."],
    ["What is a man-in-the-middle attack?", "An attacker secretly intercepts (and may alter) communications between two parties."],
    ["What motivates a hacktivist?", "Exposing wrongdoing or promoting a cause they believe is good."],
    ["What is a script kiddie?", "An inexperienced attacker using other people's tools, often for a challenge."],
    ["What is an insider threat?", "A current or former staff member misusing authorised access."],
    ["What is threat intelligence?", "Gathering and analysing information about threats to prioritise and respond to them."]
  ],
  quiz: [
    ["Hundreds of failed logins from one IP in a minute suggests…", ["DDoS", "Brute-force attack", "Adware", "Shoulder surfing"], 1, "Repeated failed logins from one source."],
    ["A caller claims to be from HMRC and demands bank details. This is…", ["Smishing", "Vishing", "Pharming", "Spear phishing"], 1, "Voice phishing."],
    ["An attacker motivated by political gain, damaging another country's infrastructure, is a…", ["Script kiddie", "Nation state", "Hacktivist", "Insider"], 1, "Nation state."],
    ["Browser certificate warnings on a café Wi-Fi may indicate…", ["Man-in-the-middle", "Adware", "Dictionary attack", "Dumpster diving"], 0, "Interception."],
    ["Free 'PDF converter' software that secretly opens a backdoor is a…", ["Worm", "Trojan", "Botnet", "Virus"], 1, "Disguised as legitimate software."],
    ["A disgruntled former employee using an old account to delete files is a…", ["Hacktivist", "Insider threat", "Script kiddie", "Nation state"], 1, "Insider."],
    ["Which attack exploits a flaw with no patch yet?", ["Zero-day", "DoS", "Phishing", "Adware"], 0, "Zero-day."]
  ]
});

REV.add({
  id: "cs-vuln", section: "cs", title: "Vulnerability assessment, CVEs and penetration testing", short: "Vulnerabilities",
  spec: "CS 2.4–2.9, 2.17",
  summary: "The stages of vulnerability assessment, **CVE** and **CVSS**, making mitigation recommendations, risk assessments on infrastructure, the strengths and weaknesses of **scanners**, and the **penetration testing** stages.",
  notes: [
    { h: "Risk/vulnerability assessment stages", steps: ["**Identify** the vulnerability – scans and log analysis for anomalies.", "**Analyse** it – is it exploitable, how severe?", "**Identify the risk** – prioritise.", "**Remediate** – update or remove the affected hardware/software.", "**Mitigate** – apply countermeasures, close off mitigated items, escalate anything still risky."], after: "**Scoping**: define in-scope systems, services and networks, access requirements, and the vulnerabilities being tested. **Evaluating**: classify each finding's risk and likely business impact, then document and organise results." },
    { h: "CVE and CVSS", steps: ["Identify published **CVEs** (Common Vulnerabilities and Exposures) from vendors and testers.", "Research each – score it with **CVSS** (Common Vulnerability Scoring System, **0–10**, based on impact, exploitability and severity), identify affected systems and mitigations.", "Implement the mitigation."] },
    { h: "Making mitigation recommendations", p: "Weigh: business/operational/infrastructure impact; mitigating circumstances; cost of acting vs not acting; type and severity; resources (people, money, technology); reporting/response timeframes; CVE-based scope and priority; possible responses; **Proof of Concept (PoC)** results confirming the flaw. Document logically and communicate in language suited to the audience." },
    { h: "Impacts of an exploited vulnerability", p: "Damage to property/resources, financial loss, reputational damage, fines/prosecution (e.g. an **ICO** fine), operational disruption, harm to employees (physical or psychological), identity theft." },
    { h: "Types of infrastructure risk assessment", table: [
      ["Type", "Looks for"],
      ["Host-based", "Vulnerabilities, configuration and patch status on workstations and servers"],
      ["Network-based", "Possible network attacks and vulnerable systems"],
      ["Wireless-based", "Rogue access points, insecure wireless configuration"],
      ["Application-based", "Known software vulnerabilities and misconfigurations (e.g. SQL injection)"]
    ]},
    { h: "Vulnerability scanners", table: [
      ["Scanner", "Strengths", "Weaknesses"],
      ["Infrastructure (host/network/wireless)", "Finds missing patches, unsupported systems, weak passwords, exposed services, missing hardening, wrong access controls", "Doesn't stop active attacks; only known issues; vendor fixes can be slow; may be inaccurate; can affect live services"],
      ["Web application", "Automated; finds SQL injection, broken authentication, data exposure, wrong access controls, vulnerable components, weak/unencrypted comms", "False positives/negatives; uses system resources; only known issue types"],
      ["Software", "Finds missing updates/patches; vendor-specific checks", "Needs regular updating; false positives/negatives; business impact hard to judge"]
    ]},
    { h: "Penetration testing stages", steps: ["**Planning and scoping** – rules of engagement, timing, legal/contractual boundaries.", "**Reconnaissance** – gather information: topology, OS, applications.", "**Scanning** – find open ports and services.", "**Vulnerability assessment** – identify and test exploitability.", "**Exploitation** – attempt to gain access.", "**Reporting** – document findings and remediation recommendations."], after: "Pen testing is only legal with written authorisation and agreed scope – otherwise it's an offence under the Computer Misuse Act." }
  ],
  cards: [
    ["List the five stages of vulnerability/risk assessment.", "Identify, analyse, identify risk (prioritise), remediate, mitigate."],
    ["What is a CVE?", "Common Vulnerabilities and Exposures – a published, uniquely numbered record of a known vulnerability."],
    ["What is CVSS?", "Common Vulnerability Scoring System – scores vulnerabilities 0–10 by impact, exploitability and severity."],
    ["What is a Proof of Concept (PoC)?", "A controlled demonstration that a vulnerability is genuinely exploitable."],
    ["What is the difference between remediate and mitigate?", "Remediate removes the vulnerability (update/remove); mitigate reduces its risk with countermeasures."],
    ["Name the four types of infrastructure risk assessment.", "Host-based, network-based, wireless-based, application-based."],
    ["What is a rogue access point?", "An unauthorised wireless access point connected to the network."],
    ["Give two weaknesses of infrastructure scanners.", "Any two: don't stop active attacks, only find known issues, may be inaccurate, can affect live services."],
    ["What is a false positive?", "A scanner reporting a vulnerability that isn't really there."],
    ["List the six penetration testing stages.", "Planning and scoping, reconnaissance, scanning, vulnerability assessment, exploitation, reporting."],
    ["What are rules of engagement?", "The agreed scope, timing and legal boundaries of a penetration test."],
    ["What happens in reconnaissance?", "Gathering information about the target, e.g. topology, OS and applications."],
    ["What can the ICO do after a data breach?", "Issue fines and enforcement action."]
  ],
  quiz: [
    ["A CVE scored 9.8 on CVSS is…", ["Low", "Medium", "Critical", "Not applicable"], 2, "9.0–10.0 is critical."],
    ["Updating vulnerable software to a patched version is…", ["Mitigating", "Remediating", "Accepting", "Scoping"], 1, "Removing the vulnerability."],
    ["Which assessment type looks for rogue access points?", ["Host-based", "Network-based", "Wireless-based", "Application-based"], 2, "Wireless-based."],
    ["Which pen test stage agrees what may be tested and when?", ["Reconnaissance", "Planning and scoping", "Exploitation", "Reporting"], 1, "Rules of engagement are set first."],
    ["A web app scanner reports SQL injection that manual checks show isn't there. This is a…", ["False negative", "False positive", "Zero-day", "PoC"], 1, "Reported but not real."],
    ["Which stage comes directly after scanning in pen testing?", ["Reporting", "Vulnerability assessment", "Reconnaissance", "Exploitation"], 1, "Then exploitation."],
    ["A weakness of all scanners is that they…", ["Only find known issues", "Fix everything automatically", "Never use resources", "Replace pen testers"], 0, "They rely on known signatures/checks."]
  ],
  exam: [
    { q: "A vulnerability scan of a school network finds 40 issues. Explain how the technician should decide which to fix first.", marks: 6, points: [
      "Look up each CVE and use its CVSS score to rank severity.",
      "Consider whether it's exploitable in this environment (PoC / exposure to internet).",
      "Consider the business impact – e.g. systems holding pupil personal data or critical services.",
      "Weigh cost and resources of fixing vs not fixing.",
      "Consider response timeframes / SLAs and any legal duties (UK GDPR).",
      "Prioritise high-severity, high-impact, easily exploitable issues; document and escalate those that can't be fixed quickly."
    ]}
  ]
});

REV.add({
  id: "cs-risk", section: "cs", title: "Organisational risk, threat analysis and risk assessment", short: "Risk analysis",
  spec: "CS 2.10–2.16, 2.18",
  summary: "Types of organisational risk, mitigating **privacy breaches**, the measures (**RTO, RPO, MTBF, MTTD, MTTR**), critical systems, threat factors, **qualitative and quantitative** analysis including **ALE = SLE × ARO**, conducting a risk assessment and choosing a **risk response**.",
  notes: [
    { h: "Types of organisational risk", table: [
      ["Risk", "Meaning", "Managed by"],
      ["Compliance", "Not following policy", "Monitoring/updating processes, compliance controls, exception reports (e.g. expiring software support)"],
      ["Safety", "Harm to people, property or environment", "Checks for human error, maintenance audits"],
      ["Information security", "Data lost, stolen, copied or compromised", "Data controls (access control), traffic monitoring, device management (restricted USB), regular training"]
    ]},
    { h: "Mitigating privacy-breach threats", table: [
      ["Threat", "Mitigation"],
      ["Social engineering", "Raise awareness of current issues"],
      ["Unmanaged devices", "Policy restricting their use"],
      ["Untrained staff", "Training and SOPs"],
      ["Insider threats", "Access controls, monitoring unusual activity, segregation of duties"],
      ["Unpatched applications", "Make sure updates are applied"],
      ["Third parties", "Supplier due diligence"],
      ["Improper disposal", "Secure wiping and DPA 2018 compliance"]
    ]},
    { h: "Impact measures", table: [
      ["Measure", "Meaning"],
      ["RTO", "Time to recover to an acceptable state"],
      ["RPO", "Tolerable amount of data loss"],
      ["MTBF", "Likelihood/frequency of asset failure"],
      ["MTTD – mean time to detect", "How efficiently incidents are detected"],
      ["MTTR", "Average time to restore a failed system"]
    ]},
    { h: "Critical systems", list: [
      "**Single point of failure** – a design, implementation or configuration flaw where the whole system depends on one component.",
      "**Mission essential functions** – functions that must continue, or resume quickly, after a disruption."
    ]},
    { h: "Threat factors", p: "**Environmental** (power failure/spikes, natural disasters, fire, equipment failure, flooding), **manmade internal** (malicious or accidental staff activity, human error, misconfigured firewalls), **manmade external** (malware, attack, social engineering, terrorism)." },
    { h: "Qualitative and quantitative analysis", list: [
      "**Qualitative**: RAG rating applied to business risk.",
      "**Quantitative**: cost overrun, resource consumption, **CVSS** scores and **ALE = SLE × ARO**.",
      "**SLE** (single loss expectancy) – cost of one occurrence. **ARO** (annual rate of occurrence) – how many times a year it's expected. **ALE** (annual loss expectancy) – expected yearly cost.",
      "**Tools**: fault tree analysis, **FMECA** (Failure Mode, Effects and Criticality Analysis), **CRAMM** (scope → evaluate → recommend countermeasures), **FAIR** (Factor Analysis of Information Risk)."
    ], after: "Worked example: a laptop theft costs £1,500 (SLE) and happens 4 times a year (ARO). ALE = £1,500 × 4 = **£6,000**. A control costing less than £6,000 a year that prevents it is worth considering." },
    { h: "Conducting a security risk assessment (e.g. on a LAN device)", steps: ["Identify potential risks.", "Score each with a matrix: likelihood × severity = risk score / RAG rating.", "Weigh asset value against mitigation cost.", "Control the risk proportionately.", "Record findings.", "Review and test controls regularly through internal and external audits, including third-party suppliers."] },
    { h: "Risk responses", list: [
      "**Accept** – no further mitigation available, or residual risk remains after mitigation.",
      "**Transfer** – outsource the risk to another party (e.g. insurance).",
      "**Avoid** – change project or system scope to sidestep it.",
      "**Mitigate** – reduce severity or likelihood with controls."
    ]}
  ],
  memory: ["**ALE = SLE × ARO** – 'Annual = Single × Rate'."],
  cards: [
    ["What is the formula for ALE?", "ALE = SLE × ARO."],
    ["What is SLE?", "Single Loss Expectancy – the cost of one occurrence of a risk."],
    ["What is ARO?", "Annual Rate of Occurrence – how many times a year a risk is expected to happen."],
    ["What is MTTD?", "Mean Time To Detect – how quickly incidents are detected on average."],
    ["What is a mission essential function?", "A function that must continue, or resume quickly, after a disruption."],
    ["What is an exception report?", "A report flagging something outside normal limits, e.g. software about to lose support."],
    ["Name the three types of organisational risk.", "Compliance, safety, information security."],
    ["How do you mitigate insider threats?", "Access controls, monitoring unusual activity, segregation of duties."],
    ["How do you mitigate third-party risk?", "Supplier due diligence."],
    ["What is FMECA?", "Failure Mode, Effects and Criticality Analysis."],
    ["What is FAIR?", "Factor Analysis of Information Risk – a quantitative risk model."],
    ["What are the three stages of CRAMM?", "Scope, evaluate, recommend countermeasures."],
    ["When would you accept a risk?", "When no further mitigation is available or practical, or the residual risk after mitigation is tolerable."],
    ["How is a risk score calculated in a matrix?", "Likelihood × severity."]
  ],
  quiz: [
    ["A server outage costs £20,000 each time and happens twice a year. What is the ALE?", ["£10,000", "£20,000", "£40,000", "£22,000"], 2, "£20,000 × 2."],
    ["An ALE is £5,000. Which control makes most financial sense?", ["One costing £12,000/yr", "One costing £3,000/yr that removes the risk", "Doing nothing", "One costing £5,500/yr"], 1, "Cheaper than the expected loss."],
    ["Which measure tells you how quickly incidents are noticed?", ["MTTR", "MTTD", "MTBF", "RPO"], 1, "Mean time to detect."],
    ["Staff using personal USB sticks is best managed by…", ["Supplier due diligence", "Device management restricting USB", "Exception reports only", "Accepting the risk"], 1, "An information security control."],
    ["A misconfigured firewall by a staff member is which threat factor?", ["Environmental", "Manmade internal", "Manmade external", "Political"], 1, "Internal human error."],
    ["Taking out insurance against ransomware losses is…", ["Avoid", "Accept", "Transfer", "Mitigate"], 2, "Transfer."],
    ["Payroll that must restart within 24 hours after a disaster is a…", ["Single point of failure", "Mission essential function", "Exception report", "Rogue AP"], 1, "Must resume quickly."]
  ],
  exam: [
    { q: "A company's laptops are stolen about 5 times a year. Each theft costs £1,200 in hardware and lost time. Calculate the ALE and use it to evaluate whether to buy a £4,000-a-year tracking and remote-wipe service that would halve the losses.", marks: 6, points: [
      "ALE = SLE × ARO = £1,200 × 5 = £6,000.",
      "Halving losses saves £3,000 a year (new ALE £3,000).",
      "Service costs £4,000 – more than the £3,000 saved, so on cost alone it isn't justified.",
      "But remote wipe also protects personal data – a breach could bring ICO fines and reputational damage not included in the £1,200.",
      "Consider cheaper alternatives (full-disk encryption, staff training, cable locks).",
      "Justified conclusion, e.g. worth it if data breach risk is high, otherwise choose cheaper encryption + training."
    ]}
  ]
});

REV.add({
  id: "cs-incident", section: "cs", title: "Incident and event management", short: "Incident management",
  spec: "CS 2.19",
  summary: "The seven stages of handling a security incident from first report to the final incident report.",
  notes: [
    { h: "Incident management stages", steps: [
      "**Identify** – via service desk, phone, email, SMS, chat.",
      "**Log** – manually (contact, date, description) or automatically by a monitoring system.",
      "**Manage** – raise a ticket, assign to the right person (expertise, access, seniority), categorise by business impact.",
      "**Prioritise** – RAG-style urgency, SLA management and escalation; report crimes to the **police** and data breaches to the **ICO**.",
      "**Resolve** – temporary workaround or permanent fix.",
      "**Close** – confirm resolution and complete an **incident report**.",
      "**Document** – gather information, complete incident/exception reports per policy, store per data protection law."
    ]},
    { h: "Incident report contents", list: ["Executive summary", "Discovery and investigation", "Impact", "Mitigation", "Recommendations", "Any ongoing risk"] }
  ],
  cards: [
    ["List the seven stages of incident/event management.", "Identify, log, manage, prioritise, resolve, close, document."],
    ["Who must data breaches be reported to?", "The ICO (Information Commissioner's Office)."],
    ["Who are cyber crimes reported to?", "The police (e.g. via Action Fraud)."],
    ["How is an incident assigned?", "To the right person by expertise, access and seniority."],
    ["What is the difference between a workaround and a permanent fix?", "A workaround restores service temporarily; a permanent fix removes the cause."],
    ["List six parts of an incident report.", "Executive summary, discovery/investigation, impact, mitigation, recommendations, ongoing risk."],
    ["Name two ways incidents can be logged.", "Manually by staff, or automatically by a monitoring system."]
  ],
  quiz: [
    ["Which stage assigns the ticket to an engineer?", ["Identify", "Log", "Manage", "Close"], 2, "Manage."],
    ["A data breach affecting customers must be reported to…", ["Ofcom", "The ICO", "IEEE", "BCS"], 1, "ICO."],
    ["Rebooting a server to restore service while the cause is investigated is…", ["A permanent fix", "A workaround", "Closure", "Documentation"], 1, "Temporary workaround."],
    ["The incident report is completed at which stage?", ["Prioritise", "Resolve", "Close", "Identify"], 2, "Close."]
  ]
});

REV.add({
  id: "cs-mitigation", section: "cs", title: "Cyber Essentials, encryption, backups and compliance", short: "Mitigation tools",
  spec: "CS 2.21–2.25",
  summary: "Applying the **Cyber Essentials** controls, encryption for **data in transit and at rest**, backups including **immutable** backups, the policies that support mitigation, and monitoring **compliance**.",
  notes: [
    { h: "NCSC Cyber Essentials controls", table: [
      ["Control", "What it means"],
      ["Boundary firewalls / internet gateways", "Restrict traffic flow"],
      ["Secure configuration", "Only necessary functionality enabled"],
      ["Malware protection", "Current anti-malware, regular scans"],
      ["Security update management", "Keep patches current"],
      ["Access control and management", "Least privilege, with **PAM** for elevated accounts (super-users, privileged business accounts)"]
    ]},
    { h: "Encryption", list: [
      "**Asymmetric** – private data between users (e.g. encrypted email). Underpins **data in transit**: **TLS** (end-to-end for email, web, messaging) and **SSL** (legacy browser-to-website encryption).",
      "**Symmetric** – same key encrypts and decrypts (e.g. card payments). Underpins **data at rest encryption (DARE)**: **Full Disk Encryption (FDE)** protects e.g. stolen laptops; **File-Based Encryption (FBE)** protects individual files/folders."
    ]},
    { h: "Backups", list: [
      "**Purpose**: keep data recoverable for full disaster recovery or partial loss.",
      "**Criteria**: frequency, source, destination, storage medium and location, **retention period**, regular **restore testing**.",
      "**Types**: full, incremental, differential, mirror and **immutable** – can't be changed, overwritten or deleted, defending against ransomware."
    ]},
    { h: "Supporting policies", p: "Data protection, acceptable use, access control, asset classification, information security, incident response procedure, mobile device, backup, BYOD, password, asset disposal and data retention policies." },
    { h: "Monitoring compliance", list: [
      "Audit processes and policies for currency (e.g. review the information security policy) and improve them.",
      "Compare and check the accuracy of processes, logs and incident reports.",
      "Comply with relevant ISO standards."
    ]}
  ],
  cards: [
    ["What is an immutable backup?", "A backup that cannot be changed, overwritten or deleted – protecting against ransomware."],
    ["What is DARE?", "Data At Rest Encryption."],
    ["What is the difference between FDE and FBE?", "Full Disk Encryption encrypts the whole drive; File-Based Encryption protects individual files/folders."],
    ["Which encryption type underpins TLS?", "Asymmetric encryption (to set up the session)."],
    ["Name six backup criteria.", "Frequency, source, destination, storage medium/location, retention period, restore testing."],
    ["Why test restoring backups?", "To prove the backup actually works before you need it."],
    ["Name six organisational policies that support risk mitigation.", "Any six: data protection, AUP, access control, asset classification, information security, incident response, mobile device, backup, BYOD, password, asset disposal, data retention."],
    ["What is least privilege?", "Giving users only the access they need to do their job."],
    ["How is compliance monitored?", "Auditing policies for currency, checking accuracy of processes/logs/reports, and complying with ISO standards."]
  ],
  quiz: [
    ["Which backup type defends best against ransomware deleting backups?", ["Mirror", "Incremental", "Immutable", "Differential"], 2, "Immutable backups can't be altered or deleted."],
    ["A stolen laptop's data is protected by…", ["TLS", "Full Disk Encryption", "SSL", "SMTP"], 1, "FDE protects data at rest."],
    ["Which Cyber Essentials control uses PAM?", ["Malware protection", "Access control and management", "Secure configuration", "Firewalls"], 1, "Privileged accounts."],
    ["A mirror backup copied a ransomware-encrypted folder. Why?", ["Mirrors reflect the source exactly", "Mirrors are immutable", "Mirrors skip changed files", "Mirrors use FBE"], 0, "Changes and damage are copied too."],
    ["Which policy decides how long data is kept?", ["Data retention policy", "BYOD policy", "Asset classification", "AUP"], 0, "Data retention."]
  ]
});

REV.add({
  id: "cs-sources-cni", section: "cs", title: "Cyber sources, CNI, control systems and IoT", short: "CNI and IoT",
  spec: "CS 3.1–3.12 (cyber-specific parts)",
  summary: "The sources and bodies specific to cyber security, how attacks affect **critical national infrastructure**, types of **control systems**, evolving **IoT** risks and why **information assurance and governance** matters.",
  notes: [
    { h: "Cyber-specific sources", list: [
      "**Professional bodies**: CIISec, CREST, ISACA, UK Cyber Security Council.",
      "**Regulators**: ICO. **Standards**: NCSC Cyber Essentials, CIS Benchmarks.",
      "**Accreditation**: CompTIA, Certified Cyber Professional, (ISC)².",
      "**Databases**: CVE. Plus webinars, vendor literature (Microsoft, AWS), policies, guidelines and legislation (e.g. DPA 2018).",
      "**Knowledge bases**: **CyBOK** (Cyber Security Body of Knowledge) and **MITRE ATT&CK** (adversary tactics and techniques).",
      "Reliability factors: publisher credibility and accreditation, credible citations, relevance, currency (version, date), and absence of bias."
    ]},
    { h: "Evaluation techniques (cyber version)", p: "**Triangulation** (cross-checking more than two sources), **formative** (during) and **summative** (at the end) evaluation, observation, corroboration, drawing conclusions, making recommendations. Tools: **gap analysis**, **maturity assessments**, **user diaries**." },
    { h: "Communication channels", p: "Digital services (helpdesk, phone, email, SMS, chat), social media (organisational, public, community, personal), knowledge bases (CyBOK, MITRE ATT&CK, wikis, blogs, training platforms, vendor subscriptions), and project tools (issue logs, Gantt, Kanban, burndown charts)." },
    { h: "Impacts on critical national infrastructure", table: [
      ["Sector", "Impact"],
      ["Supply chains", "Food and raw materials disrupted"],
      ["Energy", "Power cuts, surges, under-voltage, gas supply loss"],
      ["Water/sanitation", "Loss of supply, flooding, treatment disruption"],
      ["Government", "Communication and policy interrupted"],
      ["Finance", "Failed payments, interrupted transfers"],
      ["Healthcare", "Compromised records, impaired communication and treatment"],
      ["Communications/ISPs", "Service loss, eavesdropping, impersonation"],
      ["Defence", "Impaired military capability"],
      ["Transport", "Disrupted public/private transport and emergency dispatch"]
    ]},
    { h: "Control systems", p: "**Purpose**: receive data from remote sensors, measure values and control a process or asset across locations. **Types**: industrial (CNI), medical (life-sustaining equipment, patient data), facility-related (e.g. door locks), automotive (e.g. engine/fuel systems)." },
    { h: "Evolving IoT risks", list: [
      "**Poor data protection** – little built-in security, too low-powered for encryption, exposure on shared networks.",
      "**Poor passwords** – weak or default factory passwords.",
      "**Insecure data transfer/storage** – unencrypted in processing, transit or at rest.",
      "**Weak update mechanisms** – unvalidated firmware, insecure delivery, no anti-rollback, no update notifications."
    ]},
    { h: "Information assurance and governance (IAG)", p: "Guides the development and improvement of security strategies, policies and processes; supports auditing them; informs maintenance through a compliance monitoring plan; and confirms compliance, e.g. against ISO standards or the NIST framework." }
  ],
  cards: [
    ["What is CyBOK?", "The Cyber Security Body of Knowledge – a structured foundation of cyber security knowledge areas."],
    ["What is MITRE ATT&CK?", "A knowledge base of real-world adversary tactics and techniques."],
    ["Name three cyber security professional bodies.", "Any three: CIISec, CREST, ISACA, UK Cyber Security Council."],
    ["Name two cyber security accreditations.", "CompTIA, Certified Cyber Professional, (ISC)²."],
    ["What are CIS Benchmarks?", "Industry-standard secure configuration guidelines."],
    ["Give four CNI sectors.", "Any four: energy, water, finance, healthcare, communications, government, defence, transport, supply chains."],
    ["What is the purpose of a control system?", "To receive sensor data, measure values and control a process or asset across locations."],
    ["Name the four types of control system.", "Industrial, medical, facility-related, automotive."],
    ["Give four IoT security risks.", "Poor data protection, weak/default passwords, insecure data transfer/storage, weak update mechanisms."],
    ["Why can't some IoT devices use strong encryption?", "They're too low-powered to handle it."],
    ["What is anti-rollback protection?", "Stopping firmware being downgraded to an older, vulnerable version."],
    ["What is IAG?", "Information Assurance and Governance – guides, audits and confirms compliance of security strategy and policy."]
  ],
  quiz: [
    ["Which knowledge base catalogues attacker tactics and techniques?", ["CVE", "MITRE ATT&CK", "CIS Benchmarks", "OWASP"], 1, "MITRE ATT&CK."],
    ["A smart camera shipped with password 'admin' is which IoT risk?", ["Weak update mechanisms", "Poor password protection", "Insecure transfer", "Shared network"], 1, "Default factory passwords."],
    ["Electronic door locks are which type of control system?", ["Industrial", "Medical", "Facility-related", "Automotive"], 2, "Facility-related."],
    ["Failed card payments after an attack affect which CNI sector?", ["Finance", "Transport", "Defence", "Water"], 0, "Finance."],
    ["Which body is the UK regulator for data protection?", ["NCSC", "ICO", "CREST", "ISACA"], 1, "Information Commissioner's Office."],
    ["Firmware installed without being checked as genuine is…", ["Unvalidated firmware", "Immutable backup", "Code signing", "Anti-rollback"], 0, "A weak update mechanism."]
  ]
});
