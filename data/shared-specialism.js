/* Content shared by the Digital Infrastructure, Network Cabling and Digital Support specialisms
   (Content Area 1: security procedures and controls; Content Area 3: sources of knowledge).
   Where a specialism adds something of its own, it is flagged in the notes. */
REV.add({
  id: "sh-controls", section: "shared", title: "Business security controls", short: "Business controls",
  spec: "Specialism CA1: 1.1–1.7 (DI, NC, DS)",
  summary: "Security controls are grouped by **when** they act: before an incident (**preventative, deterrent, directive**), during (**detective**), after (**corrective**), or as a backstop (**compensating**). Each can be physical, administrative or technical.",
  notes: [
    { h: "The six control types", table: [
      ["Control", "Job", "Physical examples", "Administrative / technical examples"],
      ["Preventative", "Stop an incident happening", "Anti-pick locks, barriers, fencing, bollards, gates, cages, flood defences, air conditioning; card readers, biometrics, CCTV, PIN codes", "Separation of duties, role-based access; allowlists, denylists, ACLs, sandboxing, device hardening, certificate authorities"],
      ["Detective", "Spot an incident in progress or after", "CCTV, motion sensors", "Logs (server-room temperature, error logs), audits of who entered and left"],
      ["Corrective", "Limit damage and stop recurrence", "Fire and gas suppression", "SOPs for responding, e.g. when a fire is detected"],
      ["Deterrent", "Discourage someone from trying", "Security guards, alarms, visible surveillance", "Alarm-setting SOPs, fire drills, codes of conduct in contracts, acceptable use policies"],
      ["Directive", "Tell people what to do; build a security culture", "Signage, mandatory ID badges", "Agreement types, security policy, compulsory training such as 'human firewall' training"],
      ["Compensating", "Backstop when a primary control fails or isn't available", "Temperature controls", "Role-based awareness training, environmental monitoring SOPs"]
    ]},
    { h: "Practical skills you'll be expected to show", list: [
      "Configure a **domain services** environment with security controls: group policies, permissions, minimum password/complexity rules.",
      "Deploy a **certificate authority**.",
      "Implement the five **NCSC Cyber Essentials** controls: **boundary firewalls, secure configuration, access control, malware protection, patch management**.",
      "Apply access control methods – **authentication, MAC, DAC, ABAC, RBAC** – to physical or virtual networks (on end-user devices in Digital Support).",
      "Manage documents and data in line with data protection law."
    ]},
    { h: "Applying and monitoring controls", steps: ["Review the identified risk, gathering information from systems and users.", "Select the right control type: preventative, detective, corrective, deterrent, directive, compensating or recovery.", "Apply it.", "Monitor it, while complying with regulation and organisational policy."] },
    { h: "Access control models", table: [
      ["Model", "Who decides access"],
      ["MAC – mandatory", "The system, using a hierarchy of security levels/classifications"],
      ["DAC – discretionary", "The owner of the resource"],
      ["RBAC – role-based", "The user's job role"],
      ["ABAC – attribute-based", "Attributes of user, resource and environment (e.g. department, time, device)"],
      ["RuBAC – rule-based", "A list of rules (Digital Support)"]
    ]}
  ],
  memory: ["Order around an incident: **Deter → Direct → Prevent → Detect → Correct**, with **Compensate** as the safety net.", "Cyber Essentials five: **F**irewalls, **S**ecure config, **A**ccess control, **M**alware protection, **P**atching – '**F**ive **S**imple **A**nti-**M**alware **P**oints'."],
  cards: [
    ["Name the six business control types.", "Preventative, detective, corrective, deterrent, directive and compensating."],
    ["What is a preventative control?", "A proactive control that stops an incident happening, e.g. locks, ACLs, device hardening."],
    ["What is a detective control?", "A control that identifies an incident in progress or after it happened, e.g. CCTV, logs, audits."],
    ["What is a corrective control?", "A reactive control that limits damage and prevents recurrence, e.g. fire suppression, incident SOPs."],
    ["What is a deterrent control?", "A control that discourages people from attempting an attack, e.g. guards, alarms, visible cameras, AUPs."],
    ["What is a directive control?", "A control that tells people what to do and builds security culture, e.g. signage, ID badges, policy, training."],
    ["What is a compensating control?", "A backstop safeguard used when a primary control fails or isn't available."],
    ["List the five NCSC Cyber Essentials controls.", "Boundary firewalls, secure configuration, access control, malware protection, patch management."],
    ["What is separation of duties?", "Splitting critical tasks between people so no one person has excessive privilege."],
    ["What is sandboxing?", "Running untrusted code in an isolated environment so it can't affect the rest of the system."],
    ["What is an allowlist?", "A list of approved applications, sites or addresses; anything not on it is blocked."],
    ["What is MAC (mandatory access control)?", "Access decided by the system using a hierarchy of security levels."],
    ["What is DAC (discretionary access control)?", "The owner of a resource decides who can access it."],
    ["What is ABAC?", "Attribute-based access control – decisions based on attributes of the user, resource and environment."],
    ["What is 'human firewall' training?", "Compulsory staff security awareness training so staff can spot and stop attacks such as phishing."]
  ],
  quiz: [
    ["Visible CCTV signs at a car park entrance are mainly a…", ["Corrective control", "Deterrent control", "Compensating control", "Detective control"], 1, "Visible surveillance discourages attempts."],
    ["Reviewing server error logs is a…", ["Preventative control", "Detective control", "Directive control", "Corrective control"], 1, "It identifies that something has happened."],
    ["A gas suppression system in a server room is a…", ["Corrective control", "Deterrent control", "Directive control", "Preventative technical control"], 0, "It acts after a fire starts to limit damage."],
    ["'Badges must be worn at all times' signs are a…", ["Directive control", "Detective control", "Corrective control", "Compensating control"], 0, "They tell people what to do."],
    ["Which is NOT one of the five Cyber Essentials controls?", ["Patch management", "Boundary firewalls", "Penetration testing", "Malware protection"], 2, "The five are firewalls, secure configuration, access control, malware protection, patching."],
    ["A file owner choosing who can read their folder is…", ["MAC", "DAC", "RBAC", "ABAC"], 1, "Discretionary access control."],
    ["Allowing access only from company laptops in the UK during office hours is…", ["DAC", "ABAC", "MAC", "Sandboxing"], 1, "Multiple attributes (device, location, time)."],
    ["A temperature control backup when the main aircon fails is a…", ["Compensating control", "Deterrent control", "Directive control", "Detective control"], 0, "A backstop for a failed primary control."]
  ]
});

REV.add({
  id: "sh-drp-risk", section: "shared", title: "Disaster recovery and risk management", short: "DRP and risk",
  spec: "Specialism CA1: DRP, impacts, measures, risk process, analysis, responses, pen testing, mitigation strategy (DI 1.8–1.21, NC 1.8–1.20, DS 1.8–1.20)",
  summary: "How organisations plan to recover (**DRP / BCP**), the measures used (**RTO, RPO, MTBF, MTTR**), and the risk management cycle from identifying a threat to choosing a **risk response**.",
  notes: [
    { h: "DRP and BCP", list: [
      "A **disaster recovery plan (DRP)** restores and maintains IT service after disruption.",
      "**Physical** elements: backups, off-site alternative storage.",
      "**Administrative** elements, usually within a wider **business continuity plan (BCP)**: keep systems functional, let users work away from the main site, deploy backups to preserve data integrity, keep systems aligned with business needs, track assets (tagging/logging laptops), report infrastructure changes to management.",
      "The BCP keeps the **whole business** running; the DRP focuses on **restoring IT**."
    ]},
    { h: "Building a DRP (Digital Infrastructure)", steps: ["Define scope: site, organisation, department or individual.", "Gather information: past outages, hardware/software/network/data inventories, contacts.", "Risk-assess assets, threats, vulnerabilities, probability and impact.", "Create the plan and identify the resources it needs.", "Get it signed off.", "Test it: resources, frequency, run the test, review and document, amend.", "Continuously improve through internal and external audit."] },
    { h: "Impacts of realised threats", p: "**Danger to life** (health and safety breaches), **privacy** (data breaches, identity theft), **property/resources** (physical damage), **economic** (financial loss), **reputational** (brand damage), **legal** (fines, prosecution)." },
    { h: "Vulnerabilities in critical systems", p: "Unauthorised access to network or physical ports, weak user account control, **single points of failure**, system failure, open USB/network ports and unsecured wireless." },
    { h: "Measures and procedures", table: [
      ["Measure", "Meaning"],
      ["RTO – recovery time objective", "The maximum acceptable time to restore a service"],
      ["RPO – recovery point objective", "The maximum acceptable data loss, measured in time (how old the last backup can be)"],
      ["MTBF – mean time between failures", "Average time a component runs before failing (reliability)"],
      ["MTTR – mean time to repair", "Average time to fix and restore a failed component"]
    ], after: "Procedures: **SOPs** (installation, backup, set-up) and **SLAs** (uptime, response and resolution times)." },
    { h: "The risk management process", steps: ["**Identify** risks, threats and vulnerabilities.", "Assess **probability** (high/medium/low).", "Assess **impact** (e.g. asset value).", "**Prioritise** by probability × impact and assign an owner.", "**Mitigate** to reduce probability or impact."] },
    { h: "Analysing threats", list: [
      "**Qualitative** – non-numeric **RAG rating**: red = act immediately, amber = monitor closely, green = no immediate action.",
      "**Quantitative** – numbers, e.g. cost overrun, resources consumed.",
      "Tools: fault tree analysis, impact analysis, failure mode effects critical analysis, **annualised loss expectancy (ALE)**, **CRAMM** (CCTA Risk Analysis and Management Method), **SWOT** analysis, and a **risk register** recording each risk with its RAG rating."
    ]},
    { h: "Threat assessment factors", table: [
      ["Factor", "Examples"],
      ["Environmental", "Extreme weather, natural disaster, animals/pests (e.g. rodents chewing cables), humidity, air quality"],
      ["Manmade internal", "Malicious or accidental staff/contractor activity"],
      ["Manmade external", "Malware, hacking, social engineering, third parties, terrorism"],
      ["Technological", "Disk/RAM/component failure, misconfiguration, power issues, Wi-Fi/VPN dropouts, firewall misconfiguration, software corruption, RAID failure, signal interference, impact of upgrades"],
      ["Political", "Changes in legislation"]
    ]},
    { h: "Risk assessment in context", p: "Purpose: reduce risk by applying **HSE guidance**, investigating the project environment (e.g. **PESTLE**), identifying internal and external risk (e.g. **supply-chain assessment**, contractor system access) and quantifying impact on **asset value**. In practice: assess a system (e.g. a LAN cabling installation or a BYOD system), identify its components, run the risk process and record findings with correct technical terms." },
    { h: "Risk responses", table: [
      ["Response", "Meaning", "Example"],
      ["Accept", "Impact is tolerable, so live with it", "Minor cosmetic risk"],
      ["Avoid", "Change scope to sidestep the risk", "Don't offer the risky service"],
      ["Mitigate", "Reduce probability or impact with controls", "Install a UPS"],
      ["Transfer", "Contractually pass the risk to someone else", "Insurance, outsourcing"]
    ]},
    { h: "Penetration testing process", steps: ["Customer engagement", "Information gathering", "Discovery and scanning", "Vulnerability testing", "Exploitation", "Final analysis and review", "Act on the results (e.g. after a wireless network test)"] },
    { h: "Designing a mitigation strategy and continuous improvement", list: [
      "Consider the risk response, the **user profile** (requirements, ability), **cost vs benefit**, the **risk owner**, **escalation routes**, **contingency planning** and ongoing **monitoring/review**.",
      "Continuous improvement: gather and organise incident information → analyse trends to find the underlying risk and understand users → apply mitigation (e.g. install RMM, harden devices, place firewalls) → monitor and review (assign owners, plan contingencies, keep security software current, interpret pen-test output) → record findings clearly."
    ]}
  ],
  memory: ["**RPO** = **P**oint in time you roll back to (data loss). **RTO** = **T**ime to get back up.", "Risk responses: **4 Ts** – Tolerate (accept), Terminate (avoid), Treat (mitigate), Transfer."],
  cards: [
    ["What is the purpose of a DRP?", "To recover and maintain IT service after a disruption."],
    ["What is the difference between a DRP and a BCP?", "A BCP keeps the whole business running during disruption; a DRP restores IT systems afterwards. The DRP usually sits within the BCP."],
    ["What does RTO mean?", "Recovery Time Objective – the maximum acceptable time to restore a service."],
    ["What does RPO mean?", "Recovery Point Objective – the maximum acceptable amount of data loss, measured in time."],
    ["What does MTBF measure?", "Mean Time Between Failures – average time a component works before failing."],
    ["What does MTTR measure?", "Mean Time To Repair – average time to fix a failed component and restore service."],
    ["What is an SLA?", "A Service Level Agreement defining uptime and response/resolution times."],
    ["List the five steps of the risk management process.", "Identify, assess probability, assess impact, prioritise (and assign owner), mitigate."],
    ["What does a RAG rating mean?", "Red = act immediately; amber = monitor closely; green = no immediate action."],
    ["What is the difference between qualitative and quantitative risk analysis?", "Qualitative uses non-numeric ratings (e.g. RAG); quantitative uses numbers such as cost or resources."],
    ["What is a risk register?", "A record of identified risks with ratings, owners and mitigations."],
    ["What does CRAMM stand for?", "CCTA Risk Analysis and Management Method."],
    ["Name the four risk responses.", "Accept, avoid, mitigate, transfer."],
    ["What does it mean to transfer a risk?", "Passing it contractually to another party, e.g. insurance or outsourcing."],
    ["List the stages of penetration testing.", "Customer engagement, information gathering, discovery and scanning, vulnerability testing, exploitation, final analysis/review, act on results."],
    ["Give the five threat assessment factors.", "Environmental, manmade internal, manmade external, technological, political."],
    ["Give six categories of impact from a realised threat.", "Danger to life, privacy, property/resources, economic, reputational, legal."],
    ["What is a single point of failure?", "One component whose failure stops the whole system working."]
  ],
  quiz: [
    ["A business says it can lose at most 4 hours of data. This is its…", ["RTO", "RPO", "MTBF", "SLA"], 1, "Tolerable data loss is the recovery point objective."],
    ["A business must be back online within 2 hours of an outage. This is its…", ["RTO", "RPO", "MTTR", "MTBF"], 0, "Recovery time objective."],
    ["Buying cyber insurance is which risk response?", ["Accept", "Avoid", "Mitigate", "Transfer"], 3, "The financial risk moves to the insurer."],
    ["A risk rated amber should be…", ["Acted on immediately", "Monitored closely", "Ignored", "Transferred"], 1, "Amber = moderate risk, watch it."],
    ["Mice chewing through cables is which threat factor?", ["Technological", "Manmade internal", "Environmental", "Political"], 2, "Animals are environmental."],
    ["Which stage comes straight after 'discovery and scanning' in pen testing?", ["Exploitation", "Vulnerability testing", "Customer engagement", "Final analysis"], 1, "Discover → test vulnerabilities → exploit."],
    ["A high MTBF means a component is…", ["Unreliable", "Reliable", "Slow to repair", "Quick to repair"], 1, "It runs a long time between failures."],
    ["Installing a backup generator to cut downtime from power cuts is…", ["Accept", "Avoid", "Mitigate", "Transfer"], 2, "It reduces the impact."],
    ["New legislation affecting how data is stored is which factor?", ["Political", "Environmental", "Technological", "Manmade external"], 0, "Legislative change is political."]
  ],
  exam: [
    { q: "A college's server room has a single internet connection and no backup power. Recommend how the college could reduce these risks, justifying each recommendation.", marks: 6, points: [
      "Single internet connection is a single point of failure – add a second connection from a different provider (redundancy).",
      "No backup power – install a UPS to bridge short outages and allow safe shutdown.",
      "Add a generator for longer outages to meet the RTO.",
      "Record risks in a risk register with RAG ratings and owners.",
      "Include failover procedures in the DRP / BCP and test them regularly.",
      "Agree SLAs with providers covering uptime and response times."
    ]}
  ]
});

REV.add({
  id: "sh-tech-controls", section: "shared", title: "Technical controls, encryption, backups and policies", short: "Technical controls",
  spec: "Specialism CA1: technical controls, encryption, backups, policies (DI 1.20–1.24, 1.30; NC 1.19–1.23; DS 1.19–1.23, 1.28)",
  summary: "The hands-on controls technicians apply: **Cyber Essentials, hardening, segmentation, MFA, RMM**, encryption at rest and in transit, the four **backup types**, and the **policies** that keep people secure.",
  notes: [
    { h: "Technical security controls", list: [
      "Purpose: strengthen network security for users and systems.",
      "The five **Cyber Essentials** controls: boundary firewalls/internet gateways, secure configuration, malware protection, patch management, access control (least privilege).",
      "**Device hardening** – remove unneeded programs, accounts and ports; change default passwords; correct permissions; apply updates and security policy; disable unauthorised devices.",
      "**Segmentation** of networks, systems, data, devices and services (Digital Infrastructure).",
      "Hardware protection, **multi-factor authentication**, **remote monitoring and management (RMM)**, vulnerability and port scanning, anti-virus for known threats."
    ]},
    { h: "Securing devices (skill)", p: "Wireless security (**WPA2/WPA3**), device and password authentication, encryption, virtualisation, penetration testing, malware/anti-virus, patching, MFA and **single logout**. Install and configure vulnerability scanners, anti-malware and firewall software; harden devices; then **test** that the configuration works." },
    { h: "Encryption", table: [
      ["Type", "How it works", "Example"],
      ["Asymmetric", "Public key encrypts, private key decrypts", "Encrypted email between two people"],
      ["Symmetric", "Same key encrypts and decrypts", "Card payments"],
      ["Data at rest", "Full-disk encryption; **HSM** (hardware security module) safeguards keys; **TPM** (trusted platform module) stores device-specific keys", "Encrypted laptop drive"],
      ["Data in transit", "**SSL** (encrypted browser–website link) and its successor **TLS** (end-to-end for email, web, messaging)", "HTTPS"]
    ]},
    { h: "Backups", list: [
      "**Purpose**: keep an up-to-date copy of data for recovery.",
      "**Criteria**: frequency, source, destination, storage medium (LTO tape, cloud, disk).",
      "**Full** – everything. **Incremental** – changes since the last backup of any kind. **Differential** – changes since the last full backup. **Mirror** – an exact live copy (deletions are mirrored too)."
    ]},
    { h: "Policies and procedures", list: [
      "**Digital use policy**: network/internet usage and monitoring, **BYOD**, working from home (with DSE assessment), password renewal, software updates.",
      "**Health and safety policy**: lone working, manual handling, working at height, fire safety, **RIDDOR 2013** reporting.",
      "**Change procedure**: all changes approved, documented and periodically audited.",
      "Policies and SOPs are routinely **audited**. You must explain each policy's purpose and the security impact of not following it (e.g. danger to life, privacy breach)."
    ]}
  ],
  cards: [
    ["What is device hardening?", "Reducing a device's attack surface: removing unneeded software/accounts/ports, changing defaults, setting permissions, applying updates and policy, disabling unauthorised devices."],
    ["What is RMM?", "Remote Monitoring and Management – software that lets technicians monitor, update and fix devices remotely."],
    ["What is network segmentation?", "Splitting a network into separate parts so a problem or attack in one can't easily spread."],
    ["What does asymmetric encryption use?", "A public key to encrypt and a private key to decrypt."],
    ["Give an example use of symmetric encryption.", "Card payments (same key encrypts and decrypts)."],
    ["What is an HSM?", "Hardware Security Module – a dedicated device that safeguards and manages encryption keys."],
    ["What is a TPM?", "Trusted Platform Module – a chip on a device that stores device-specific encryption keys."],
    ["What is the difference between SSL and TLS?", "Both encrypt data in transit; TLS is the more secure successor to SSL."],
    ["What four criteria shape a backup plan?", "Frequency, source, destination and storage medium."],
    ["What is a mirror backup?", "An exact, live copy of the source – deletions are copied too."],
    ["Name four topics in a digital use policy.", "Network/internet usage, BYOD, working from home, password renewal, software updates."],
    ["What is RIDDOR?", "Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013 – workplace incidents that must be reported."],
    ["What is BYOD?", "Bring Your Own Device – staff using personal devices for work."],
    ["What is WPA3?", "The current Wi-Fi security standard, stronger than WPA2."],
    ["What is single logout?", "Logging out of one service logs the user out of all linked single-sign-on services."]
  ],
  quiz: [
    ["Which chip stores encryption keys inside a laptop?", ["HSM", "TPM", "GPU", "NIC"], 1, "Trusted Platform Module."],
    ["HTTPS protects data…", ["At rest", "In transit", "In a backup", "In RAM only"], 1, "TLS encrypts data travelling between browser and server."],
    ["Which backup would also delete a file if it was deleted from the source?", ["Full", "Incremental", "Differential", "Mirror"], 3, "A mirror reflects the source exactly."],
    ["Removing unused software and closing unused ports is…", ["Segmentation", "Device hardening", "RMM", "Sandboxing"], 1, "Hardening reduces the attack surface."],
    ["A policy covering staff using personal phones for work is a…", ["BYOD policy", "RIDDOR policy", "Change procedure", "SLA"], 0, "Bring Your Own Device."],
    ["Which wireless security setting should be chosen on a new access point?", ["WEP", "Open", "WPA3 (or WPA2 if not supported)", "WPS only"], 2, "WPA2/WPA3 are the secure options."],
    ["LTO is a type of…", ["Encryption key", "Tape storage medium", "Wireless standard", "Access control"], 1, "Linear Tape-Open."]
  ]
});

REV.add({
  id: "sh-network-security", section: "shared", title: "Network security principles and vulnerabilities", short: "Network security",
  spec: "Specialism CA1: principles, access, traffic, topologies, vulnerabilities (DI 1.26–1.33, NC 1.25–1.32, DS 1.25–1.32)",
  summary: "**CIA and IAAA** applied to networks, tools for controlling access (**IDS, IPS, NAC**), securing traffic (**DMZ, VLAN, VPN, VRF, IPSec**), topologies and models, the **identify–protect–detect–respond–recover** cycle and common vulnerabilities with their fixes.",
  notes: [
    { h: "Principles", list: [
      "The **CIA triad** underpins secure design and security policy.",
      "**IAAA** is applied through directory services, authentication processes, password policy, data protection and an up-to-date **information asset register**."
    ]},
    { h: "Managing and controlling access", table: [
      ["Tool", "What it does"],
      ["Authentication", "Grants or restricts access based on verified identity"],
      ["Firewall", "Restricts access to a defined set of services"],
      ["IDS – intrusion detection system", "Monitors traffic and **detects/alerts** on threats"],
      ["IPS – intrusion prevention system", "Detects and **blocks** threats"],
      ["NAC – network access control", "Enforces policy on each device/user joining the network"],
      ["MAC / DAC / ABAC / RBAC / RuBAC", "Access control models (see Business controls)"]
    ]},
    { h: "Securing traffic", list: [
      "**Physical**: software-defined networking (SDN) with TLS, a **DMZ** (demilitarised zone – an isolated segment between internal and external networks for public-facing servers), air gapping.",
      "**Virtual**: **VLANs** (logically separated networks on shared switches).",
      "**Subnet level**: **VPN**, **VRF** (virtual routing and forwarding – separate routing tables on one router), **IPSec** (encrypts and authenticates IP packets), virtual air gapping."
    ]},
    { h: "Connected devices", p: "Apply the CIA triad to assess impact. **Prevent** attacks through secure configuration, **limit** exposure, **detect** attacks through logging/auditing, and **segregate** devices, networks and resources to contain impact. Other techniques: internet-gateway security and data-leakage protection." },
    { h: "Why cyber security matters", list: [
      "**Organisations**: protect systems, devices, cloud availability, company and personal data; enforce password policy; comply with law; defend against cybercrime.",
      "**Society**: preserve privacy, prevent discrimination/prejudice, support equal opportunity, prevent identity theft.",
      "**DPA 2018 individual rights**: to be informed, of access, to rectification (correct data), to erasure, to restrict processing, to data portability, to object."
    ]},
    { h: "Topologies and models", list: [
      "Topologies: bus, star, ring, token ring, mesh, hybrid, client-server, peer-to-peer.",
      "**OSI** (7 layers) and **TCP/IP** (application, transport, network, network interface).",
      "Minimum cyber security standard: **Identify** (assign a lead, risk assess, document configurations) → **Protect** (anti-virus, firewalls, reduce attack surface, trusted OS/apps, decommission legacy, audits, encryption, least privilege, training) → **Detect** (audit/event logs, monitoring) → **Respond** (contain, minimise impact) → **Recover** (backups, maintenance plans, review)."
    ]},
    { h: "Common vulnerabilities and their controls", table: [
      ["Vulnerability", "Control"],
      ["Missing patches / firmware updates", "Patch management software, test devices, tracking"],
      ["Weak, default or no passwords; no lockout", "Minimum password policy aligned to NCSC guidance; reset policy"],
      ["Insecure BIOS/UEFI", "Review and secure settings (e.g. password, boot order)"],
      ["Misconfigured permissions", "Test and schedule audits; remove leavers' access"],
      ["Missing protection software", "Install and monitor anti-malware; be aware of buffer overflow"],
      ["Insecure disposal", "WEEE Directive 2013 compliance; data wiping"],
      ["Poor backup management", "Correct frequency and backup type"],
      ["DHCP spoofing (DI)", "DHCP snooping"],
      ["VLAN hopping (DI)", "Network monitoring, correct trunk configuration"],
      ["Misconfigured firewall / ACLs, poor topology (DI)", "Scheduled auditing, review design"],
      ["Unprotected physical devices", "Install correct protective software; physical security"]
    ]}
  ],
  memory: ["IDS **D**etects, IPS **P**revents.", "NIST-style cycle: **I**dentify, **P**rotect, **D**etect, **R**espond, **R**ecover – 'I Prefer Doing Regular Revision'."],
  cards: [
    ["What is the difference between an IDS and an IPS?", "An IDS detects and alerts on threats; an IPS detects and actively blocks them."],
    ["What is NAC?", "Network Access Control – enforces security policy on devices and users before they join the network."],
    ["What is a DMZ?", "A demilitarised zone – an isolated network segment between the internal network and the internet, for public-facing servers."],
    ["What is a VLAN?", "A Virtual LAN – logically separates traffic on the same physical switches."],
    ["What is VRF?", "Virtual Routing and Forwarding – multiple separate routing tables on one router, isolating traffic."],
    ["What is IPSec?", "A suite of protocols that encrypts and authenticates IP packets, often used for VPNs."],
    ["List the five stages of the minimum cyber security standard cycle.", "Identify, protect, detect, respond, recover."],
    ["What is an information asset register?", "An up-to-date record of an organisation's information assets, their owners and value."],
    ["List the individual rights under DPA 2018.", "To be informed, access, rectification, erasure, restrict processing, data portability, object."],
    ["How do you mitigate DHCP spoofing?", "DHCP snooping on switches, so only trusted ports can offer DHCP."],
    ["What is VLAN hopping?", "An attack where traffic jumps from one VLAN to another, bypassing segmentation."],
    ["How should leavers' access be handled?", "Removed promptly, with scheduled permission audits to catch any missed."],
    ["Why secure BIOS/UEFI settings?", "To stop attackers changing boot order or disabling security features before the OS loads."],
    ["Name four network topologies.", "Any four: bus, star, ring, token ring, mesh, hybrid."]
  ],
  quiz: [
    ["A system that spots a port scan and emails the admin, but doesn't block it, is…", ["IPS", "IDS", "NAC", "VRF"], 1, "Detection only."],
    ["Where should a company's public web server be placed?", ["On the internal LAN", "In the DMZ", "On an air-gapped network", "In a VLAN with HR"], 1, "The DMZ isolates public servers."],
    ["A laptop is blocked from the network until its anti-virus is updated. This is…", ["NAC", "IDS", "VLAN", "DMZ"], 0, "Network Access Control enforces policy."],
    ["Which DPA right lets a person ask for their data to be deleted?", ["Portability", "Erasure", "Rectification", "Access"], 1, "The right to erasure."],
    ["The control for DHCP spoofing is…", ["VLAN hopping", "DHCP snooping", "Port forwarding", "MFA"], 1, "DHCP snooping."],
    ["Which stage comes after 'detect' in the cyber standard cycle?", ["Identify", "Protect", "Respond", "Recover"], 2, "Identify, protect, detect, respond, recover."],
    ["Separating staff and guest Wi-Fi on the same switches uses…", ["VLANs", "RAID", "SSL", "MTBF"], 0, "VLANs logically separate traffic."]
  ]
});

REV.add({
  id: "sh-legislation", section: "shared", title: "Security legislation, standards and best practice", short: "Law and standards",
  spec: "Specialism CA1: legislation, standards and best practice (DI 1.25, NC 1.24, DS 1.24)",
  summary: "The laws and frameworks that govern information security work: **UK GDPR, DPA 2018, Computer Misuse Act, ISO 27001, PCI DSS, NCSC 10 Steps** and **OWASP**.",
  notes: [
    { h: "Laws", table: [
      ["Law", "Key points"],
      ["UK GDPR", "Standardises how personal data is used, stored and transferred. Key articles: subject matter and objectives, material scope, territorial scope, definitions, processing principles, lawfulness of processing, conditions for consent."],
      ["Data Protection Act 2018", "The UK's implementation of GDPR. Data must be used fairly, lawfully and transparently; for specified purposes; limited to what's necessary; accurate; kept no longer than needed; secured against unlawful processing, loss or damage."],
      ["Computer Misuse Act 1990", "Criminalises unauthorised access to computer material; unauthorised access with intent to commit further offences; unauthorised acts intended to impair (or reckless as to impairing) a computer's operation."]
    ]},
    { h: "Standards and best practice", table: [
      ["Standard", "Key points"],
      ["ISO 27001:2017", "Certifiable information security management standard – covers GDPR/DPA compliance, information security management, penetration testing and risk assessment."],
      ["PCI DSS", "Payment Card Industry Data Security Standard – secure network, protected cardholder data, vulnerability management, strong access control, regular monitoring and testing, documented security policy."],
      ["NCSC 10 Steps to Cyber Security", "User education and awareness, home and mobile working, secure configuration, removable media controls, managing user privileges, incident management, monitoring, malware protection, network security, risk management regime."],
      ["OWASP", "Open Worldwide Application Security Project – shares security tools and resources, education for public and professionals, and a networking platform; improves software security."]
    ]}
  ],
  cards: [
    ["What does UK GDPR standardise?", "How personal data is used, stored and transferred."],
    ["How does the DPA 2018 relate to GDPR?", "It is the UK's implementation of GDPR."],
    ["List the three main offences in the Computer Misuse Act 1990.", "Unauthorised access; unauthorised access with intent to commit further offences; unauthorised acts to impair a computer's operation."],
    ["What is ISO 27001?", "A certifiable international standard for information security management systems."],
    ["What does PCI DSS protect?", "Payment card data."],
    ["Give the six requirement areas of PCI DSS.", "Secure network, protect cardholder data, vulnerability management, strong access control, regular monitoring/testing, information security policy."],
    ["List five of the NCSC 10 Steps to Cyber Security.", "Any five: user education, home/mobile working, secure configuration, removable media controls, managing user privileges, incident management, monitoring, malware protection, network security, risk management."],
    ["What is OWASP?", "The Open Worldwide Application Security Project – a community sharing tools, education and resources to improve software security."]
  ],
  quiz: [
    ["An online shop taking card payments must comply with…", ["OWASP", "PCI DSS", "WEEE", "RIDDOR"], 1, "Payment Card Industry Data Security Standard."],
    ["Which is a certifiable information security management standard?", ["ISO 27001", "NCSC 10 Steps", "OWASP", "CMA 1990"], 0, "Organisations can be certified to ISO 27001."],
    ["'Removable media controls' is part of…", ["PCI DSS", "NCSC 10 Steps", "UK GDPR", "OWASP Top 10"], 1, "It is one of the NCSC 10 Steps."],
    ["Which law makes installing a keylogger on a colleague's PC to steal bank details a crime?", ["DPA 2018", "Computer Misuse Act 1990", "PCI DSS", "ISO 27001"], 1, "Unauthorised access with intent to commit further offences."],
    ["Which organisation is best known for improving web application security?", ["OWASP", "ICO", "IEEE", "CREST"], 0, "OWASP."]
  ]
});

REV.add({
  id: "sh-sources", section: "shared", title: "Sources of knowledge, bias and evaluation", short: "Sources and bias",
  spec: "Specialism CA3 (all four specialisms)",
  summary: "Every specialism ends with the same professional skill: find information, judge whether it can be trusted, spot **bias**, evaluate critically and share what you know.",
  notes: [
    { h: "Types of source", p: "Academic publications (textbooks, journals, periodicals), supplier literature (handbooks, device-specific articles), search engines, websites (wikis, forums, Stack Overflow, manufacturer sites), social media (company profiles), blogs, vlogs (demos, tutorials), professional networks and conferences, e-learning (MOOCs, vendor qualifications such as Cisco), peers and colleagues." },
    { h: "Using a source legitimately", steps: ["Clarify the requirement.", "Choose up to three appropriate sources.", "Apply reliability and validity factors (authority, publication date).", "Assess potential bias.", "Check the source actually fits the requirement."] },
    { h: "Reliability and validity factors", list: [
      "**Industry-certified accreditation** – e.g. Cisco CCNA, Microsoft MTA.",
      "**Appropriateness** to the task and **relevant context**.",
      "**Evidence-based** – supported by citations.",
      "**Credibility of the author** – affiliation to recognised bodies, reputation, experience and qualifications.",
      "**Target audience** – technical or non-technical language.",
      "**Publication** – current version and date."
    ]},
    { h: "Searching and corroborating", p: "Clarify the search parameters (e.g. 'explore Big Data trends'), identify where the information lives, search **safely and securely**, **cross-reference** multiple sources to corroborate, and apply reliability, validity and bias checks throughout." },
    { h: "Bias", table: [
      ["Type", "Meaning"],
      ["Author / proprietary", "The author's own unweighted opinion, or a vendor promoting its own product"],
      ["Confirmation", "Choosing sources that support what you already believe"],
      ["Selection", "Choosing sources to fit predetermined criteria"],
      ["Cultural", "Assumptions rooted in societal norms"],
      ["Availability (Cyber Security)", "Opinion skewed towards the most recent or memorable experience"]
    ], after: "**Indicators**: partiality, prejudice, omission. **Reduce bias** by grounding conclusions in fact and evidence and taking an inclusive, objective approach that fully represents demographics." },
    { h: "Critical thinking and evaluation", list: [
      "**Process**: identify relevant information (arguments, views, opinions) → analyse it (bias, objectivity, links between data) → select techniques/tools → evaluate findings → record conclusions.",
      "**Techniques**: formative (during) and summative (at the end) evaluation; qualitative methods (interviews, observation, workshops); quantitative methods (experiments, surveys, statistics); benchmarking; corroboration and **triangulation** (cross-checking three or more sources/methods).",
      "**Tools**: gap analysis (current vs desired state), KPI analysis, scorecards, observation reports, user diaries, scenario mapping, self-assessment frameworks, maturity assessments."
    ]},
    { h: "Communicating and sharing knowledge", p: "IT service management tools (incident, problem and change systems), knowledge bases, wikis and shared documents, shared digital workspaces, telephone, instant messaging, email, video conferencing, digital signage, social media (organisational, public, personal), blogs, community forums, project management tools (issue logs, Gantt charts, Kanban boards, burndown charts) and policy/process/procedure documents." },
    { h: "Comparing sources", p: "Identify the sources, apply the reliability and validity factors to each, compare the outcomes, then recommend and justify – in correct technical terms – which to rely on and whether more sources are needed." }
  ],
  cards: [
    ["Name four reliability and validity factors for a source.", "Any four: accreditation, appropriateness, evidence/citations, context, author credibility, target audience, publication currency."],
    ["What is confirmation bias?", "Favouring sources that support what you already believe."],
    ["What is selection bias?", "Choosing sources to fit predetermined criteria, so the picture is skewed."],
    ["What is cultural bias?", "Assumptions in a source rooted in particular societal norms."],
    ["What is author/proprietary bias?", "The author's own unweighted opinion – or a vendor favouring its own product."],
    ["What is availability bias?", "Judging based on the most recent or memorable experience rather than all the evidence."],
    ["What are the three indicators of bias?", "Partiality, prejudice and omission."],
    ["What is triangulation?", "Validating a finding by cross-checking three or more independent sources or methods."],
    ["What is the difference between formative and summative evaluation?", "Formative happens during a task to improve it; summative reviews the result at the end."],
    ["What is a gap analysis?", "Comparing the current state with the desired state to find what's missing."],
    ["What is a maturity assessment?", "Measuring how capable and consistent an organisation's processes are at achieving predictable outcomes."],
    ["How many sources should you choose for a requirement?", "Up to three appropriate sources."],
    ["List the five stages of critical thinking.", "Identify relevant information, analyse it, select techniques/tools, evaluate findings, record conclusions."],
    ["What is a burndown chart?", "A project chart showing work remaining against time."]
  ],
  quiz: [
    ["A technician only reads reviews that praise the router they already chose. This is…", ["Selection bias", "Confirmation bias", "Cultural bias", "Availability bias"], 1, "Seeking evidence that confirms an existing belief."],
    ["Which is the strongest sign a technical article is reliable?", ["It has lots of adverts", "It cites evidence and the author holds relevant certification", "It's on social media", "It's very long"], 1, "Evidence and author credibility."],
    ["Comparing current security controls against ISO 27001 requirements to find what's missing is a…", ["Gap analysis", "User diary", "Burndown chart", "Scorecard"], 0, "Current vs desired state."],
    ["Evaluating a training course halfway through so you can improve it is…", ["Summative", "Formative", "Quantitative", "Triangulation"], 1, "Formative evaluation happens during."],
    ["Leaving out evidence that contradicts your argument is which bias indicator?", ["Partiality", "Prejudice", "Omission", "Corroboration"], 2, "Omission."],
    ["Checking a fix against the manufacturer site, a forum and a colleague is…", ["Triangulation", "Abstraction", "Selection bias", "Benchmarking"], 0, "Three independent sources."]
  ]
});
