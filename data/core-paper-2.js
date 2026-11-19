/* Core Paper 2: legislation, business context, emerging issues, digital environments, security */
REV.add({
  id: "p2-health-safety", section: "p2", title: "Health and safety in digital work", short: "Health and safety",
  spec: "Core 4.1 (health and safety)",
  summary: "Four pieces of health and safety law shape digital workplaces: the **Health and Safety at Work Act**, **Manual Handling Operations Regulations**, **Work at Height Regulations** and **Display Screen Equipment (DSE) Regulations**.",
  notes: [
    { h: "The four laws and what employers must do", table: [
      ["Law", "Key duties"],
      ["Health and Safety at Work Act", "Provide a safe working environment, proper training, adequate welfare provision, and relevant information, instruction and supervision."],
      ["Manual Handling Operations Regulations", "Avoid hazardous manual handling where possible; if not, assess the risk, give information about the load and its centre of gravity, and reduce injury risk so far as reasonably practicable."],
      ["Work at Height Regulations", "Plan, supervise and use competent people; do as much as possible from the ground; ensure safe access; equipment must be suitable, stable and strong; protect against falling objects; plan emergency evacuation."],
      ["Display Screen Equipment Regulations", "Carry out DSE workstation assessments, reduce risks (including breaks from screen work), provide eye tests on request, and provide training and information."]
    ]},
    { h: "Risks in digital work and how to reduce them", table: [
      ["Activity", "Example risks", "Mitigations"],
      ["DSE use", "Eye strain, back and neck pain, repetitive strain injury", "Workstation assessment, breaks, adjustable chairs/screens, eye tests"],
      ["Working at height", "Falls, dropped tools", "Training, suitable ladders/towers, supervision, safety equipment"],
      ["Cable installation", "Trips, electric shock, cuts", "Cable management, isolating power, PPE, training"],
      ["Manual handling", "Back injury from lifting servers", "Trolleys, team lifts, training, assessing loads"]
    ], after: "General mitigations: **training, a safe environment, safety equipment and supervision**." }
  ],
  cards: [
    ["Give four duties of employers under the Health and Safety at Work Act.", "Safe working environment, proper staff training, adequate welfare provision, relevant information/instruction/supervision."],
    ["What must an employer do first under the Manual Handling Operations Regulations?", "Avoid hazardous manual handling where possible."],
    ["If manual handling can't be avoided, what must employers do?", "Assess the risk, give information on the load and its centre of gravity, and reduce the risk of injury as far as reasonably practicable."],
    ["Give three requirements of the Work at Height Regulations.", "Any three: plan and supervise, use competent people, work from the ground where possible, safe access, suitable stable equipment, protect against falling objects, plan for emergency evacuation."],
    ["Give three employer duties under the DSE Regulations.", "Workstation assessments, reduce risks including breaks from screen work, eye tests on request, training and information."],
    ["Name a health risk of long-term DSE use.", "Eye strain, back/neck pain or repetitive strain injury."],
    ["Name four general ways to mitigate health and safety risks in digital work.", "Training, safe environment, safety equipment, supervision."]
  ],
  quiz: [
    ["Which regulations require employers to provide eye tests on request?", ["Work at Height", "DSE Regulations", "Manual Handling", "WEEE"], 1, "Display Screen Equipment Regulations."],
    ["A technician must move a 30 kg server. Which regulations apply most directly?", ["DSE", "Manual Handling Operations", "Computer Misuse Act", "Work at Height"], 1, "Moving loads is manual handling."],
    ["Under Work at Height Regulations, what should be done wherever possible?", ["Work alone", "Do as much work as possible from the ground", "Use the tallest ladder", "Skip the risk assessment"], 1, "Avoid working at height where you can."],
    ["Which act places a general duty on employers to provide a safe working environment?", ["Data Protection Act", "Health and Safety at Work Act", "Equality Act", "Computer Misuse Act"], 1, "HASAWA is the overarching act."],
    ["Which is a DSE mitigation?", ["Hard hats", "Regular breaks from screen work", "Team lifting", "Fall arrest harness"], 1, "Breaks reduce eye strain and posture problems."]
  ],
  exam: [
    { q: "A technician is installing network cabling in the ceiling of an office. Explain two ways their employer can reduce the health and safety risks.", marks: 4, points: [
      "Provide suitable, stable access equipment (e.g. low-level tower not a chair)…so the technician is less likely to fall.",
      "Give working-at-height training / use competent staff…so they know how to work safely.",
      "Plan and supervise the work / cordon off the area below…to protect others from falling objects.",
      "Isolate power / provide PPE…to reduce risk of electric shock or injury."
    ]}
  ]
});

REV.add({
  id: "p2-legislation", section: "p2", title: "Legislation and professional guidelines", short: "Law and guidelines",
  spec: "Core 4.1 (legislation), 4.2",
  summary: "The key laws digital professionals must follow – **data protection, computer misuse, equality, intellectual property, electrical waste** – plus codes of conduct, industry standards, acceptable use policies and whistleblowing.",
  notes: [
    { h: "Data Protection Act / UK GDPR", p: "Controls how personal data is used. The **eight data protection principles** say personal data must be:", steps: [
      "processed fairly and lawfully", "obtained only for specified, lawful purposes", "adequate, relevant and not excessive", "accurate and kept up to date", "not kept for longer than necessary", "processed in line with the rights of the data subject", "kept secure", "not transferred abroad without adequate protection"
    ], after: "UK GDPR also expects organisations to be **transparent** and to show **accountability** – they must be able to prove they comply." },
    { h: "Computer Misuse Act 1990", list: [
      "**Section 1**: unauthorised access to computer material (e.g. guessing a colleague's password).",
      "**Section 2**: unauthorised access with intent to commit or facilitate further offences (e.g. accessing a system to commit fraud).",
      "**Section 3**: unauthorised acts intended to impair, or reckless as to impairing, a computer's operation (e.g. spreading malware, DoS).",
      "**Section 3A**: making, supplying or obtaining tools for use in these offences.",
      "Consequences hit both the **employee** (prosecution, fines, prison, dismissal) and the **company** (reputational damage, legal action). Employees need awareness training."
    ]},
    { h: "Equality legislation (Equality Act 2010)", list: [
      "Nine **protected characteristics**: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation.",
      "Types of discrimination: **direct** (treated worse because of a characteristic), **indirect** (a rule that applies to everyone but disadvantages a group), **harassment** (unwanted conduct that violates dignity), **victimisation** (treated badly for making or supporting a complaint).",
      "Employees, job applicants and customers are protected. Claims usually have a **time limit** (typically three months less one day for employment tribunals)."
    ]},
    { h: "Intellectual property", list: [
      "**Unregistered designs** – automatic protection for the appearance of a product.",
      "**Registered designs** – stronger, registered protection for a product's appearance.",
      "**Patents** – protect new inventions (how something works) and must be applied for."
    ]},
    { h: "Electrical waste and international law", list: [
      "**WEEE Regulations** (Waste Electrical and Electronic Equipment) require safe, environmentally responsible disposal and recycling of IT equipment – and data must be wiped first.",
      "**International law** can apply to cyber crime and surveillance across borders."
    ]},
    { h: "Guidelines", list: [
      "**Codes of conduct** come from organisations, professional bodies (BCS, Institution of Analysts and Programmers, CIISec) and government. They make sure people follow policy and law, maintain quality (minimising public risk, competence and integrity), meet deadlines, communicate effectively and keep confidentiality and trust.",
      "**Industry standards bodies**: ISO, WCAG, W3C, IETF, EIA/TIA, British Standards (BS), IEEE, PCI Security Standards Council.",
      "**Acceptable use policies (AUPs)** set out permitted and prohibited activities, working practices (including confidentiality), communication etiquette, and sanctions.",
      "**Whistleblowing procedures** let staff safely report wrongdoing, protecting the public and the organisation."
    ]}
  ],
  memory: ["CMA sections climb in seriousness: **1** get in, **2** get in to do more crime, **3** break or damage, **3A** supply the tools."],
  cards: [
    ["What does section 1 of the Computer Misuse Act cover?", "Unauthorised access to computer material."],
    ["What does section 2 of the Computer Misuse Act cover?", "Unauthorised access with intent to commit or facilitate further offences."],
    ["What does section 3 of the Computer Misuse Act cover?", "Unauthorised acts intended to impair (or reckless as to impairing) the operation of a computer, e.g. malware or DoS."],
    ["List the eight data protection principles.", "Fair and lawful; specified purposes; adequate, relevant, not excessive; accurate and up to date; not kept longer than necessary; in line with data subjects' rights; kept secure; not transferred abroad without adequate protection."],
    ["How many protected characteristics are there under equality law?", "Nine."],
    ["Name the nine protected characteristics.", "Age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, sexual orientation."],
    ["What is indirect discrimination?", "A rule or practice applied to everyone that puts people with a protected characteristic at a disadvantage."],
    ["What is victimisation?", "Treating someone badly because they made or supported a discrimination complaint."],
    ["What does a patent protect?", "A new invention – how something works."],
    ["What do the WEEE Regulations cover?", "Safe and environmentally responsible disposal and recycling of waste electrical and electronic equipment."],
    ["Name three professional bodies with codes of conduct.", "BCS, the Institution of Analysts and Programmers, CIISec."],
    ["What is an acceptable use policy?", "A document setting out what users may and may not do with an organisation's systems, plus etiquette and sanctions."],
    ["Why are whistleblowing procedures important?", "They let staff report wrongdoing safely, protecting the public and the organisation and holding people accountable."],
    ["What does WCAG stand for?", "Web Content Accessibility Guidelines."]
  ],
  quiz: [
    ["A student logs into a teacher's account using a guessed password just to look around. Which CMA offence?", ["Section 1", "Section 2", "Section 3", "Section 3A"], 0, "Unauthorised access, with no further intent."],
    ["Releasing ransomware onto a company network is mainly which CMA offence?", ["Section 1", "Section 2", "Section 3", "None"], 2, "Impairing the operation of computers."],
    ["Which law covers disposing of old laptops responsibly?", ["DPA 2018", "WEEE Regulations", "CMA 1990", "Equality Act"], 1, "Waste Electrical and Electronic Equipment."],
    ["A dress code rule that unfairly affects one religious group is…", ["Direct discrimination", "Indirect discrimination", "Harassment", "Victimisation"], 1, "A rule for everyone that disadvantages a group."],
    ["Which protects how a new invention works?", ["Registered design", "Unregistered design", "Patent", "AUP"], 2, "Patents protect inventions."],
    ["Keeping customer data for 20 years 'just in case' breaks which data protection idea?", ["Accuracy", "Storage limitation – not kept longer than necessary", "Transparency", "Accountability"], 1, "Data must not be kept longer than needed."],
    ["Which organisation publishes WCAG?", ["W3C", "IEEE", "IETF", "PCI SSC"], 0, "The World Wide Web Consortium."]
  ],
  exam: [
    { q: "A software company is collecting customers' personal data for a new app. Explain two data protection principles the company must follow.", marks: 4, points: [
      "Data minimisation – only collect data needed for the app's purpose…so less data at risk / customers' privacy respected.",
      "Purpose limitation – only use data for the stated purpose…so customers know how it will be used.",
      "Security – store it securely (e.g. encryption, access control)…to prevent breaches.",
      "Storage limitation – delete when no longer needed…reducing risk.",
      "Lawful, fair, transparent – tell customers what's collected (privacy notice)/get consent."
    ]}
  ]
});

REV.add({
  id: "p2-business", section: "p2", title: "Business environment, digital value and risk", short: "Business context",
  spec: "Core 5.1, 5.2, 5.3",
  summary: "What organisations are, who their stakeholders are, how digital systems add value to every department, and the risks and impacts of relying on them.",
  notes: [
    { h: "Business environment", list: [
      "Organisations provide a **service** or a **product**.",
      "Sectors: **private** (SMEs, large enterprises, NGOs), **public**, **voluntary/charity** (not-for-profit).",
      "Business models: **B2C** (business to consumer), **B2B** (business to business), **B2M** (business to many – selling to both).",
      "**Internal stakeholders**: owners, directors, employees. **External**: customers/clients, suppliers, shareholders, outsourced services, investors/funders, government."
    ]},
    { h: "How digital systems add value", table: [
      ["Area", "Digital value"],
      ["Sales and marketing", "Market research, brand promotion incl. social media, online selling, personalisation, customer retention, differentiation, analytics tools"],
      ["R&D", "Enables unique products and services"],
      ["HR", "Staff records, performance management, training records"],
      ["Operations", "Internal communication, process automation, automated manufacturing, remote working, intranets, document sharing"],
      ["Management", "Real-time KPI monitoring (sales, customers served, units, asset location)"],
      ["Logistics", "Automated stock control"],
      ["Finance", "Lower costs, more revenue, better up-to-date reporting"]
    ]},
    { h: "Meeting user needs and quality expectations", p: "Appropriate, effective functionality; fewer **pain points** (response time, task complexity); accessibility; compatibility (legacy, future and external systems); availability (less downtime, future-proofing); effective end-user support; ease of installation." },
    { h: "Risks and impacts", list: [
      "**Risks**: security breaches (loss of confidentiality, integrity or availability), privacy breaches (personal or business data), regulatory/legal non-compliance, audience exclusion (bias, poor UX), emerging rival technologies, technical issues (over-reliance, system failure, systems not fit for purpose).",
      "**Impacts**: legal action, fines, reputational damage, loss of licence to practise, loss of business."
    ]}
  ],
  cards: [
    ["What are the three sectors organisations operate in?", "Private, public and voluntary/charity."],
    ["What does B2B mean?", "Business to business – selling to other organisations."],
    ["What does B2M mean?", "Business to many – selling to both consumers and businesses."],
    ["Give three internal stakeholders.", "Owners, directors, employees."],
    ["Give four external stakeholders.", "Any four: customers/clients, suppliers, shareholders, outsourced services, investors/funders, government."],
    ["How do digital systems help HR?", "Staff records, performance management and training records."],
    ["How do digital systems help management?", "Real-time monitoring of KPIs such as sales, customers served and asset location."],
    ["What is a 'pain point' in a digital system?", "Something that frustrates users, such as slow response time or overly complex tasks."],
    ["What does audience exclusion mean as a digital risk?", "Some users can't use a system because of bias or poor user experience/accessibility."],
    ["List five impacts of digital risks on an organisation.", "Legal action, fines, reputational damage, loss of licence to practise, loss of business."]
  ],
  quiz: [
    ["A charity that runs food banks is in which sector?", ["Private", "Public", "Voluntary", "B2B"], 2, "Not-for-profit organisations are voluntary/charity sector."],
    ["Which is an external stakeholder?", ["Director", "Employee", "Supplier", "Owner"], 2, "Suppliers are outside the organisation."],
    ["An online shop selling to the public uses which model?", ["B2B", "B2C", "B2M", "NGO"], 1, "Business to consumer."],
    ["Automated stock control mainly benefits which area?", ["HR", "Logistics", "R&D", "Marketing"], 1, "Logistics."],
    ["A website that screen-reader users can't navigate is an example of…", ["Privacy breach", "Audience exclusion", "Emerging technology", "Over-reliance"], 1, "Poor accessibility excludes part of the audience."],
    ["Which is an impact rather than a risk?", ["Security breach", "System failure", "Reputational damage", "Rival technology"], 2, "Reputational damage is a consequence."]
  ]
});

REV.add({
  id: "p2-change", section: "p2", title: "Technical change management", short: "Change management",
  spec: "Core 5.4",
  summary: "Why organisations change, how they respond, the step-by-step **change management process** led by the **Change Advisory Board**, and how to judge if a project is **feasible**.",
  notes: [
    { h: "Triggers for change", list: [
      "**Internal**: restructuring, expansion, downsizing, new strategic objectives (diversification, rebranding, new features), crises (natural disasters, terrorism, cyber-attacks), system failure or data corruption.",
      "**External (PESTLE)**: **P**olitical (government change, conflict, priorities), **E**conomic (recession, inflation, interest rates, consumer trends, competitors, new markets), **S**ocial (demographics, remote working, cultural expectations), **T**echnological (new tech, obsolescence, zero-day vulnerabilities), **L**egal (new or changed laws), **E**nvironmental (sustainability, pandemics, natural disasters)."
    ]},
    { h: "Ways organisations respond", p: "New or amended policies; changed business processes (staffing, delivery schedules, opening hours); new, next-generation or updated products and services; new back-end or customer-facing digital systems; improved training; restructuring." },
    { h: "The change management process", steps: [
      "Identify the type of change (new system or amendment).",
      "The **Change Advisory Board (CAB)** prioritises, reviews and approves change requests, monitors the process and gives feedback.",
      "Identify specific changes using **SMARTER** objectives.",
      "Identify and forecast the impact.",
      "Allocate resources: budget, time, staff, hardware/software.",
      "Communicate risks and impact to stakeholders to gain acceptance and compliance.",
      "Configure the new system, integrating with legacy systems and maintaining service.",
      "Fully test it: reproducible results in a proper test environment.",
      "Choose an implementation method: **parallel, phased, direct or pilot**.",
      "Document the change: requirement traceability, records, decisions, training manuals.",
      "Plan for **rollback**: backup method and location, recovery plan.",
      "Identify training needs: new or refresher.",
      "Monitor progress with a post-implementation review.",
      "Maintain **version control**."
    ]},
    { h: "Implementation methods", table: [
      ["Method", "How", "Pros", "Cons"],
      ["Direct", "Old system switched off, new one on at once", "Quick, cheap", "High risk – no fallback"],
      ["Parallel", "Old and new run side by side", "Safe; results can be compared", "Expensive, double workload"],
      ["Phased", "New system introduced in stages", "Problems found in small parts", "Slow; must integrate old and new"],
      ["Pilot", "One department/site trials it first", "Real-world test with limited risk", "Pilot group may not be representative; slower rollout"]
    ]},
    { h: "SMARTER objectives", p: "**S**pecific, **M**easurable, **A**chievable, **R**ealistic, **T**ime-bound, **E**valuated, **R**eviewed." },
    { h: "Feasibility factors", list: [
      "**Benefits/drawbacks**: financial savings vs cost of change; impact on productivity, communication and security; new products; reputation.",
      "**Risks**: resistance to change, misuse of new systems, inadequate support/knowledge, disruption during rollout.",
      "**Constraints**: budget, time, human and technological resources."
    ]}
  ],
  memory: ["External triggers = **PESTLE**.", "Implementation = **D-P-P-P**: Direct, Parallel, Phased, Pilot."],
  cards: [
    ["What does CAB stand for and what does it do?", "Change Advisory Board – prioritises, reviews and approves change requests, monitors the process and gives feedback."],
    ["What does SMARTER stand for?", "Specific, measurable, achievable, realistic, time-bound, evaluated, reviewed."],
    ["What does PESTLE stand for?", "Political, economic, social, technological, legal, environmental."],
    ["Give three internal triggers for change.", "Any three: restructuring, expansion, downsizing, new strategic objectives, crises, system failure/data corruption."],
    ["Name the four implementation methods.", "Parallel, phased, direct and pilot."],
    ["What is parallel implementation?", "Running the old and new systems side by side until the new one is trusted."],
    ["What is the main drawback of direct implementation?", "If the new system fails there's no fallback – high risk."],
    ["What is a pilot implementation?", "Trialling the new system in one department or site before rolling it out everywhere."],
    ["Why plan for rollback?", "So the organisation can return to the previous working system if the change fails."],
    ["What is a post-implementation review?", "Monitoring and reviewing the change after go-live to check it met its objectives."],
    ["Give three feasibility constraints.", "Budget, time, human and technological resources."],
    ["Give two risks of a technical change.", "Resistance to change, misuse of new systems, inadequate support/knowledge, disruption during rollout."]
  ],
  quiz: [
    ["Who approves change requests?", ["The service desk", "The Change Advisory Board", "End users", "The ICO"], 1, "The CAB prioritises, reviews and approves."],
    ["A hospital runs old and new patient systems together for a month. This is…", ["Direct", "Parallel", "Phased", "Pilot"], 1, "Both systems run side by side."],
    ["A new law requiring data to be stored differently is which PESTLE factor?", ["Political", "Economic", "Legal", "Social"], 2, "New or changed legislation is legal."],
    ["Which implementation is cheapest but riskiest?", ["Parallel", "Direct", "Pilot", "Phased"], 1, "No overlap, no fallback."],
    ["In SMARTER, the final 'R' stands for…", ["Realistic", "Reviewed", "Relevant", "Recorded"], 1, "Evaluated and Reviewed are the extra two."],
    ["Staff refusing to use a new system is which feasibility factor?", ["Constraint", "Risk", "Benefit", "Trigger"], 1, "Resistance to change is a risk."],
    ["A zero-day vulnerability prompting a system change is which trigger?", ["Social", "Technological", "Environmental", "Economic"], 1, "It's a technological factor."]
  ],
  exam: [
    { q: "A bank is replacing its customer account system. Discuss the use of a parallel implementation compared with a direct implementation.", marks: 6, points: [
      "Parallel: old system still running so if the new one fails, accounts are still available – low risk.",
      "Parallel: outputs can be compared to check the new system is accurate – important for financial data.",
      "Parallel: expensive and staff must enter data twice – extra workload.",
      "Direct: quick and cheaper, no duplicate work.",
      "Direct: if it fails customers may lose access to money – serious reputational/legal impact.",
      "Balanced consideration of both in the bank context (no conclusion required for 'discuss')."
    ]}
  ]
});

REV.add({
  id: "p2-roles", section: "p2", title: "Digital support roles and communication", short: "Roles and comms",
  spec: "Core 5.5",
  summary: "What people in each area of digital support actually do, the skills they need, routes into the industry, and how to communicate with different audiences.",
  notes: [
    { h: "Roles by occupational area", table: [
      ["Area", "Responsibilities", "Example roles"],
      ["Digital infrastructure support", "Install, test, maintain components; schedule updates; keep systems available; recovery/restoration; optimise performance; apply security; troubleshoot; escalate; follow law; document changes", "Technician, service desk, 1st–4th line support, network installation, server support"],
      ["Network cabling installation", "Install, terminate, test and certify copper and fibre; maintain; fault-find and repair; install cabinets, racks and protection; risk assessments; cable route maps, asset registers, maintenance logs", "Cabling installer, network surveyor, network analyst, network installation engineer"],
      ["Digital support", "Hardware/software support, installing software, user accounts (quotas, permissions), communicating changes, training users, asset registers, incident software, escalation, SOPs", "First-line support, helpdesk/service desk, desktop/application/hardware support technician"],
      ["Digital communications support", "Install, test, maintain integrated communication systems; manage availability; configure, monitor, optimise; apply security; document to standards", "Communications support technician"]
    ]},
    { h: "Skills", p: "Common skills: problem-solving, analytical thinking, using digital tools, communication, prioritisation, teamwork and upskilling. Cabling adds manual handling, working at height, interpreting plans and adaptability. Digital support adds logging/monitoring/diagnostic tools, active listening and customer service." },
    { h: "Routes in", p: "Further education, apprenticeships, higher education, professional courses and professional recognition." },
    { h: "Communication", list: [
      "**Channels**: incident tickets, system update notifications, forums.",
      "Use clear, concise language matched to the **target audience, its size, knowledge level and detail needed**.",
      "**Techniques**: troubleshooting technique, active listening, reading body language, open questioning, negotiation, conflict de-escalation."
    ]},
    { h: "What different people need", table: [
      ["Audience", "Needs"],
      ["Clients / end-users", "Verbal support, written updates, training, remote support, screen sharing"],
      ["Managers", "Escalation routes, progress reports, presentations"],
      ["Peers / colleagues", "Sharing best practice, knowledge dissemination, training, collaboration"]
    ]}
  ],
  cards: [
    ["Give three responsibilities of a network cabling installer.", "Any three: install/terminate/test/certify cable, fault-find and repair, install cabinets and racks, risk assessments, cable route maps, asset registers, maintenance logs."],
    ["Give three responsibilities of a digital support technician.", "Any three: hardware/software support, software installation, user account management, training users, asset registers, escalation, SOPs."],
    ["What is first-line support?", "The first point of contact for users, handling common issues and escalating more complex ones."],
    ["What is active listening?", "Fully concentrating on the speaker, checking understanding and responding thoughtfully."],
    ["Why use open questions with a user?", "They get the user to explain the problem in their own words, giving more detail than yes/no answers."],
    ["What do managers need from support staff?", "Escalation routes, progress reports and presentations."],
    ["What four things about an audience shape how you communicate?", "Who they are, how many, their knowledge level, and how much detail they need."],
    ["Name five routes into digital support and security.", "Further education, apprenticeships, higher education, professional courses, professional recognition."],
    ["What is conflict de-escalation?", "Calming a tense situation, e.g. with an upset user, through tone, empathy and focusing on solutions."]
  ],
  quiz: [
    ["Producing cable route maps is mainly the job of…", ["A first-line support technician", "A network cabling installer", "A software developer", "A data analyst"], 1, "It's part of cabling installation documentation."],
    ["'Can you tell me what happened before the error appeared?' is…", ["A closed question", "An open question", "Negotiation", "Escalation"], 1, "It invites a detailed answer."],
    ["What do peers and colleagues mostly need from you?", ["Progress reports", "Shared best practice and knowledge", "Screen sharing", "Escalation routes"], 1, "Knowledge dissemination and collaboration."],
    ["A non-technical manager asks why the network is slow. The best approach is…", ["Explain using OSI layer terminology", "Use clear, jargon-free language focused on impact and fix", "Send the router logs", "Refer them to a forum"], 1, "Match language to the audience's knowledge level."],
    ["Which is a skill specific to cabling installers?", ["Customer service", "Working at height", "Active listening", "Using ticketing software"], 1, "Cabling installers often work at height."]
  ]
});

REV.add({
  id: "p2-emerging", section: "p2", title: "Emerging issues and technologies", short: "Emerging tech",
  spec: "Core 6.1, 6.2",
  summary: "How digital technology changes organisational culture and society, why **digital inclusion** matters, and the impact of emerging technologies from quantum computing to drones.",
  notes: [
    { h: "Impact on organisational culture", p: "Changing communication methods; higher expectations of productivity and availability; more staff monitoring; new working practices (remote, hybrid, in-office); automation, including AI." },
    { h: "Impact on society", list: [
      "Job losses and shifting skill requirements.",
      "Less human decision-making and empathy.",
      "Privacy concerns: digital footprint, surveillance.",
      "Behavioural change: social skills, digital identity.",
      "Wider access to social networks, online services and information.",
      "Possible **digital isolation** (lack of skills, equipment, connectivity, or resistance to change).",
      "Growth of **generative AI** (text, image, video, audio) and **globalisation** (access to global media)."
    ]},
    { h: "Digital inclusion", list: [
      "Fair access through suitable hardware/software, connectivity, best-practice codes and public sector accessibility regulations.",
      "User characteristics that affect inclusion: age, digital and literacy skills, internal vs external audience, cultural issues (including bias in systems), additional/accessibility needs."
    ]},
    { h: "Professional development", p: "Keeps staff competent, improves employability and job security, and keeps them current with industry standards." },
    { h: "Emerging technologies", table: [
      ["Technology", "Key points"],
      ["Storage media", "Growing demand for capacity"],
      ["Quantum computing", "Huge processing power; could break current encryption"],
      ["IoT", "Edge computing (processing near the device), extra network load; industrial, smart-city and domestic uses"],
      ["AI", "Generative AI and machine learning"],
      ["Extended reality", "AR overlays digital content on the real world; VR is fully immersive"],
      ["Open source software", "Free to use and modify; community support; security depends on maintenance"],
      ["Blockchain", "Distributed, tamper-resistant ledger"],
      ["3D printing", "Rapid prototyping, on-demand parts"],
      ["Drones", "Delivery, surveying, inspection; privacy and safety concerns"],
      ["Autonomous machines", "Self-driving cars, robotic assembly"],
      ["Environmental impact", "Rare metal consumption, energy use, disposal"]
    ]}
  ],
  cards: [
    ["What is digital isolation?", "Being cut off from digital services through lack of skills, equipment, connectivity or resistance to change."],
    ["Give three ways digital tech affects organisational culture.", "Any three: new communication methods, higher productivity/availability expectations, more staff monitoring, remote/hybrid working, automation and AI."],
    ["Give three negative impacts of digital technology on society.", "Any three: job losses, less human decision-making/empathy, privacy concerns, digital isolation, changes to social skills."],
    ["What is a digital footprint?", "The trail of data a person leaves through their online activity."],
    ["List five user characteristics that affect digital inclusion.", "Age, digital/literacy skills, internal vs external audience, cultural issues (including bias), accessibility needs."],
    ["What is edge computing?", "Processing data close to where it's created (e.g. on the IoT device) rather than in a central data centre, reducing latency and network load."],
    ["What is the difference between AR and VR?", "AR overlays digital content on the real world; VR replaces it with a fully immersive virtual world."],
    ["Give two environmental impacts of digital technology.", "Rare metal consumption, energy use, disposal impact."],
    ["Why might quantum computing be a security concern?", "Its processing power could break current encryption methods."],
    ["What is blockchain?", "A distributed, tamper-resistant ledger of records shared across many computers."],
    ["Give two benefits of professional development.", "Increased competence, better employability/job security, staying current with standards."]
  ],
  quiz: [
    ["Processing data on a smart camera itself instead of in the cloud is…", ["Blockchain", "Edge computing", "Virtual reality", "Data mining"], 1, "Edge computing processes near the source."],
    ["An older person without broadband who can't book GP appointments online is experiencing…", ["Globalisation", "Digital isolation", "Automation", "Edge computing"], 1, "Lack of connectivity/skills cuts them off."],
    ["Which technology overlays information on the real world?", ["VR", "AR", "3D printing", "Blockchain"], 1, "Augmented reality."],
    ["Which is an environmental impact of digital tech?", ["Remote working", "Rare metal consumption", "Generative AI", "Open source"], 1, "Mining rare metals for devices."],
    ["A face-recognition system that works poorly for some ethnic groups shows…", ["Bias in digital systems", "Edge computing", "Load balancing", "Data redundancy"], 0, "Cultural issues including bias affect inclusion."]
  ],
  exam: [
    { q: "Discuss the impact of generative AI on organisations and society.", marks: 6, points: [
      "Positive: automates content creation, increases productivity, lower costs.",
      "Positive: wider access to information and creative tools.",
      "Negative: job losses or changing skill requirements.",
      "Negative: reduced human decision-making/empathy; risk of biased or inaccurate output.",
      "Negative: privacy/IP concerns, misinformation (deepfakes).",
      "Organisations need policies and staff training to use it responsibly."
    ]}
  ]
});

REV.add({
  id: "p2-hardware-software", section: "p2", title: "Hardware and software", short: "Hardware and software",
  spec: "Core 7.1, 7.2",
  summary: "Computer types and components – processors, memory, storage including **RAID, NAS and SAN** – and the five **operating system types**, utilities and application software.",
  notes: [
    { h: "Computer types", p: "Personal computers, mobile devices, servers and embedded devices (computers built into another product, e.g. a washing machine controller)." },
    { h: "Components", table: [
      ["Component", "Key points"],
      ["Processor (CPU)", "**Cores** (more = more tasks at once), **clock speed** (instructions per second, GHz), **cache** (small fast memory on the chip). Mobile processors trade speed for low power."],
      ["Main memory", "**RAM** – volatile, holds running programs and data. **ROM** – non-volatile, holds start-up instructions."],
      ["Secondary storage", "Magnetic (HDD), solid state (SSD), optical (DVD/Blu-ray). **RAID 1, 5, 10**, **NAS** and **SAN**."],
      ["Motherboard", "Main circuit board connecting all components."],
      ["GPU", "Processes graphics and parallel tasks."],
      ["Network interfaces", "Connect to networks, via PCI or USB."],
      ["Cooling", "Air (fans, heat sinks) or liquid."],
      ["Sensors", "Measure the environment, e.g. temperature."]
    ]},
    { h: "RAID, NAS and SAN", list: [
      "**RAID 1** – mirroring: identical copy on two disks. Survives one disk failure; halves usable capacity.",
      "**RAID 5** – striping with parity across at least three disks. Survives one disk failure; efficient use of space.",
      "**RAID 10** – mirroring plus striping (at least four disks). Fast and resilient; uses half the capacity.",
      "**NAS (Network Attached Storage)** – a storage device on the network that shares files.",
      "**SAN (Storage Area Network)** – a dedicated high-speed network of storage devices presented to servers as block storage."
    ]},
    { h: "Operating system types", table: [
      ["Type", "Features", "Example use"],
      ["Batch", "Non-interactive, high volume, scheduled", "Payroll runs overnight"],
      ["Multitasking", "Concurrent execution, time-slicing, interrupts", "Desktop PCs"],
      ["Real-time", "Responds instantly; monitoring and control, transaction processing", "Aircraft control, ATMs"],
      ["Network", "Resource sharing, user management, communication", "Windows Server"],
      ["Mobile", "Lower processing needs, longer battery life", "Android, iOS"]
    ]},
    { h: "Software", list: [
      "**Utilities**: file management, defragmenters, file compression, package managers, protection software, backup software.",
      "**Applications**: word processors, spreadsheets, databases, email, project management software."
    ]}
  ],
  cards: [
    ["What is the difference between RAM and ROM?", "RAM is volatile and holds programs/data in use; ROM is non-volatile and holds start-up instructions."],
    ["What is cache memory?", "Small, very fast memory on or near the CPU that stores frequently used data and instructions."],
    ["What does clock speed measure?", "How many instruction cycles the CPU performs per second (GHz)."],
    ["What is RAID 1?", "Mirroring – data copied identically onto two disks."],
    ["What is RAID 5?", "Striping with distributed parity across at least three disks; survives one disk failure."],
    ["What is RAID 10?", "A mirror of stripes (mirroring + striping) – fast and fault-tolerant, needs at least four disks."],
    ["What is a NAS?", "Network Attached Storage – a file storage device connected to the network."],
    ["What is a SAN?", "Storage Area Network – a dedicated high-speed network giving servers block-level access to storage."],
    ["What is an embedded device?", "A computer built into another product to do a dedicated job."],
    ["What is a batch operating system?", "A non-interactive OS that processes high volumes of jobs on a schedule."],
    ["What is a real-time operating system?", "An OS that responds to inputs immediately, used for monitoring, control and transaction processing."],
    ["What is time-slicing?", "A multitasking OS giving each process a short slot of CPU time in turn so they seem to run at once."],
    ["What does a defragmenter do?", "Reorganises fragmented files on a hard disk so they're stored contiguously, speeding up access."],
    ["What is a package manager?", "A utility that installs, updates and removes software packages."]
  ],
  quiz: [
    ["Which RAID level simply mirrors data on two disks?", ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], 1, "RAID 1 is mirroring."],
    ["A car's anti-lock braking computer needs which OS type?", ["Batch", "Real-time", "Network", "Mobile"], 1, "It must respond instantly."],
    ["Which memory loses its contents when power is off?", ["ROM", "RAM", "SSD", "HDD"], 1, "RAM is volatile."],
    ["Overnight processing of all employee wages suits…", ["Real-time OS", "Batch OS", "Mobile OS", "Multitasking OS"], 1, "Scheduled, high volume, non-interactive."],
    ["Which storage gives servers block-level access over a dedicated network?", ["NAS", "SAN", "RAID 1", "Optical"], 1, "Storage Area Network."],
    ["Which utility reduces file size?", ["Defragmenter", "File compression", "Package manager", "Backup"], 1, "Compression."],
    ["What is the minimum number of disks for RAID 5?", ["1", "2", "3", "4"], 2, "Striping with parity needs three or more."]
  ]
});

REV.add({
  id: "p2-networks", section: "p2", title: "Networks", short: "Networks",
  spec: "Core 7.3",
  summary: "Network types, topologies and models; the **OSI** and **TCP/IP** models; packets and packet switching; common **protocols**; and how bandwidth and latency affect performance.",
  notes: [
    { h: "Why network?", p: "**Benefits**: share files, printers and internet; central management, security and backup; communication. **Drawbacks**: cost of equipment and expertise; malware can spread; a central failure affects everyone; security risks." },
    { h: "Network types by scale", table: [
      ["Type", "Scale", "Example"],
      ["PAN", "Personal – a few metres", "Phone to Bluetooth earbuds"],
      ["LAN", "One site or building", "School network"],
      ["MAN", "A town or city", "Council network across a city"],
      ["WAN", "Wide geographic area", "The internet; a company linking UK offices"]
    ]},
    { h: "Topologies and models", list: [
      "**Star** – every device connects to a central switch. Easy to add devices, one cable fault affects one device; central switch is a single point of failure.",
      "**Mesh** – devices connect to many others. Very resilient; lots of cabling/cost.",
      "**Tree** – stars connected in a hierarchy. Scalable; failure near the root affects a whole branch.",
      "**Physical** topology is how cables are laid; **logical** topology is how data actually flows.",
      "**Client-server** – central servers provide services to clients. **Thin client** – client does little processing, server does most. **Peer-to-peer** – all devices equal, sharing directly.",
      "Components: server, client, router, switch, internet connection/backbone. Wired (copper/Ethernet, fibre) or wireless (access points)."
    ]},
    { h: "OSI and TCP/IP models", table: [
      ["OSI layer", "Function", "Example protocols", "TCP/IP layer"],
      ["7 Application", "Network services for applications", "HTTP, SMTP, FTP, DNS", "Application"],
      ["6 Presentation", "Formatting, encryption, compression", "TLS, JPEG", "Application"],
      ["5 Session", "Opens, manages, closes sessions", "NetBIOS, RPC", "Application"],
      ["4 Transport", "End-to-end delivery, segmentation, reliability", "TCP, UDP", "Transport"],
      ["3 Network", "Logical addressing and routing", "IP, ICMP, OSPF, RIP", "Internet"],
      ["2 Data link", "MAC addressing, frames, error detection", "Ethernet, Wi-Fi (802.11)", "Network"],
      ["1 Physical", "Bits over cables or radio", "Cables, hubs", "Network"]
    ]},
    { h: "Packets", list: [
      "A packet has a **header** (source and destination IP, sequence number, protocol), a **payload** (the data) and a **trailer** (error-checking, e.g. CRC).",
      "**Packet switching** – data is split into packets that may take different routes and are reassembled in order at the destination.",
      "Packet loss can be caused by congestion, faulty hardware, interference or software bugs.",
      "**CRC (cyclic redundancy check)** detects corrupted packets so they can be re-sent."
    ]},
    { h: "Common protocols", table: [
      ["Group", "Protocol", "Purpose"],
      ["Web", "HTTP / HTTPS", "Transfer web pages (HTTPS is encrypted with TLS)"],
      ["Mail", "SMTP", "Send email"],
      ["Mail", "POP", "Download email to one device (usually removes it from the server)"],
      ["Mail", "IMAP", "Access email kept on the server from many devices"],
      ["Routing", "RIP", "Routes by hop count"],
      ["Routing", "OSPF", "Routes by link state/cost, faster convergence"],
      ["Application", "FTP / SFTP", "Transfer files (SFTP is secure)"],
      ["Application", "DHCP", "Automatically assigns IP addresses"],
      ["Application", "DNS", "Translates domain names to IP addresses"]
    ]},
    { h: "Bandwidth and latency", p: "**Bandwidth** is how much data can be sent per second; **latency** is the delay before data arrives. Low bandwidth slows large transfers; high latency hurts real-time uses like video calls and gaming." }
  ],
  memory: ["OSI from layer 7 down: **All People Seem To Need Data Processing** (Application, Presentation, Session, Transport, Network, Data link, Physical).", "TCP/IP from top: **A**pplication, **T**ransport, **I**nternet, **N**etwork – 'ATIN'."],
  cards: [
    ["List the seven OSI layers from 7 to 1.", "Application, presentation, session, transport, network, data link, physical."],
    ["List the four TCP/IP layers.", "Application, transport, internet, network (network access)."],
    ["Which OSI layer handles IP addressing and routing?", "Layer 3 – network."],
    ["Which OSI layer handles MAC addresses and frames?", "Layer 2 – data link."],
    ["Which OSI layer handles encryption and formatting?", "Layer 6 – presentation."],
    ["What is a PAN?", "Personal Area Network – devices within a few metres of one person, e.g. Bluetooth."],
    ["What is a MAN?", "Metropolitan Area Network – covers a town or city."],
    ["What is the difference between physical and logical topology?", "Physical is how devices are cabled; logical is how data flows between them."],
    ["What is a thin client?", "A client device that does little processing itself, relying on a server."],
    ["What is packet switching?", "Splitting data into packets that travel independently (possibly by different routes) and are reassembled at the destination."],
    ["What does a CRC do?", "Detects errors in transmitted data so corrupted packets can be re-sent."],
    ["What does DHCP do?", "Automatically assigns IP addresses and network settings to devices."],
    ["What does DNS do?", "Translates domain names into IP addresses."],
    ["What is the difference between POP and IMAP?", "POP downloads mail to one device; IMAP keeps mail on the server and syncs across devices."],
    ["What is the difference between RIP and OSPF?", "RIP chooses routes by hop count; OSPF uses link state and cost, converging faster in larger networks."],
    ["What is the difference between bandwidth and latency?", "Bandwidth is data per second; latency is the delay before data arrives."]
  ],
  quiz: [
    ["Which protocol lets you read the same email on phone and laptop?", ["POP", "IMAP", "SMTP", "FTP"], 1, "IMAP keeps mail on the server."],
    ["TCP works at which OSI layer?", ["Network", "Transport", "Session", "Data link"], 1, "Layer 4, transport."],
    ["A network linking offices in Leeds, London and Glasgow is a…", ["LAN", "MAN", "WAN", "PAN"], 2, "Wide area."],
    ["Which topology has a single point of failure at its centre?", ["Mesh", "Star", "Peer-to-peer", "Tree root only"], 1, "Star depends on the central switch."],
    ["Which protocol sends email from a client to a server?", ["SMTP", "IMAP", "POP", "DNS"], 0, "SMTP sends mail."],
    ["Which part of a packet holds the destination IP address?", ["Payload", "Header", "Trailer", "CRC"], 1, "The header."],
    ["Which OSI layer converts data to bits on a cable?", ["Physical", "Data link", "Network", "Presentation"], 0, "Layer 1."],
    ["Which routing protocol uses hop count?", ["OSPF", "RIP", "DHCP", "SIP"], 1, "RIP."],
    ["A video call freezes even though a big download is fast. The most likely issue is…", ["Low bandwidth", "High latency", "Wrong topology", "DNS failure"], 1, "Real-time traffic is hurt by delay."]
  ],
  exam: [
    { q: "Explain how a web page is delivered to a user's browser using packet switching.", marks: 4, points: [
      "The page data is split into packets.",
      "Each packet has a header with source/destination IP address and a sequence number.",
      "Packets are routed independently, possibly by different routes, by routers.",
      "At the destination they're reassembled in order using sequence numbers; errors detected by CRC and lost/corrupt packets re-sent."
    ]}
  ]
});

REV.add({
  id: "p2-virtual-cloud", section: "p2", title: "Virtual, cloud and resilient environments", short: "Virtual and cloud",
  spec: "Core 7.4, 7.5, 7.6",
  summary: "Virtual machines and **hypervisors**, cloud types and the **IaaS / PaaS / SaaS** responsibility split, and the methods organisations use to make systems **resilient**.",
  notes: [
    { h: "Virtual environments", list: [
      "**Virtual machines**: virtual PCs, switches, routers, clients and servers running in software.",
      "**Type 1 hypervisor** (bare metal) runs directly on the hardware – efficient, used in data centres.",
      "**Type 2 hypervisor** (hosted) runs on top of an operating system – easy to set up, used on desktops for testing.",
      "**Features**: increased security, managed execution, sharing, aggregation, emulation, isolation, portability.",
      "**Benefits**: cost-effective at scale, easy management, resilience, potentially lower carbon footprint, better disaster recovery, better testing environments, education and training.",
      "**Drawbacks**: extra load on hardware, slower execution, risk of misleading performance figures."
    ]},
    { h: "Cloud environments", p: "**Private cloud** – used by one organisation. **Public cloud** – shared provider infrastructure (e.g. AWS, Azure). Benefits: portability, **elasticity** (scale up/down on demand), fewer storage limits, cost-effectiveness.", table: [
      ["Model", "Client manages", "Provider manages", "Example"],
      ["IaaS", "Applications, OS/middleware, runtime, data, user accounts", "Virtualisation and hardware", "Renting virtual servers"],
      ["PaaS", "Applications, data, user accounts", "Virtualisation, hardware, OS, runtime", "Hosting platform for developers"],
      ["SaaS", "User accounts and data", "Everything else, including the application", "Microsoft 365, Gmail"]
    ]},
    { h: "Resilience", list: [
      "**Benefits**: better security (data protection, fewer vulnerabilities), better reputation (brand protection, customer confidence), less downtime.",
      "**Software updates/patches** – planned and vulnerability-driven.",
      "**Hardware replacement** – rolling plans and secure disposal.",
      "**Redundancy** – duplicate data and systems.",
      "**Device hardening** – remove unneeded ports, apps, permissions and access.",
      "**Backups and recovery** – onsite, offsite/remote, cloud.",
      "**Hot, warm and cold sites** – backup locations ready to take over.",
      "**Standard operating procedures** – training, induction, rollout of new systems and policies."
    ]},
    { h: "Hot, warm, cold sites", table: [
      ["Site", "Readiness", "Cost"],
      ["Hot", "Fully equipped with live/up-to-date data; take over almost immediately", "Highest"],
      ["Warm", "Hardware and connectivity in place; data must be restored", "Medium"],
      ["Cold", "Space and power only; equipment must be installed", "Lowest"]
    ]}
  ],
  memory: ["As you go **I → P → S**, the provider manages **more** and you manage **less**. With SaaS you only manage users and data."],
  cards: [
    ["What is a hypervisor?", "Software that creates and runs virtual machines, sharing physical hardware between them."],
    ["What is the difference between a Type 1 and Type 2 hypervisor?", "Type 1 runs directly on hardware (bare metal); Type 2 runs on top of a host operating system."],
    ["Give three benefits of virtualisation.", "Any three: cost-effective at scale, easy management, resilience, lower carbon footprint, better disaster recovery, testing environments, training."],
    ["Give two drawbacks of virtualisation.", "Extra hardware load, slower execution, misleading performance figures."],
    ["What is elasticity in cloud computing?", "Scaling resources up or down automatically to match demand."],
    ["In IaaS, what does the client manage?", "Applications, system software (OS, middleware), runtime, data and user accounts."],
    ["In SaaS, what does the client manage?", "Only user accounts and data."],
    ["In PaaS, what does the provider manage?", "Hardware, virtualisation, system software and runtime."],
    ["What is a hot site?", "A fully equipped backup site with up-to-date data that can take over almost immediately."],
    ["What is a cold site?", "A backup location with space and power but no installed equipment – cheapest but slowest to bring online."],
    ["What is device hardening?", "Reducing the attack surface by removing unneeded ports, apps, permissions and access."],
    ["Give three benefits of resilience.", "Better security, better reputation/customer confidence, less downtime."]
  ],
  quiz: [
    ["A company uses Microsoft 365 for email and documents. Which model?", ["IaaS", "PaaS", "SaaS", "Private"], 2, "The provider runs the application."],
    ["Which hypervisor runs on top of Windows on a laptop?", ["Type 1", "Type 2", "Bare metal", "Container"], 1, "Hosted hypervisors are Type 2."],
    ["Which backup site is cheapest but slowest to activate?", ["Hot", "Warm", "Cold", "Cloud"], 2, "Cold sites have no equipment installed."],
    ["A firm rents virtual servers and installs its own OS. Which model?", ["IaaS", "PaaS", "SaaS", "On-premises"], 0, "The client manages from the OS up."],
    ["Automatically adding servers during Black Friday traffic is…", ["Portability", "Elasticity", "Aggregation", "Emulation"], 1, "Elasticity."],
    ["Disabling unused USB ports and removing unused software is…", ["Redundancy", "Device hardening", "Virtualisation", "Phased rollout"], 1, "Reducing the attack surface."],
    ["Which is a drawback of virtualisation?", ["Better testing environments", "Slower execution", "Easier disaster recovery", "Lower carbon footprint"], 1, "VMs add overhead."]
  ],
  exam: [
    { q: "A college wants to move its student records system to the cloud. Evaluate the use of a public cloud SaaS solution.", marks: 6, points: [
      "Provider manages hardware, OS and application – less work for college IT staff.",
      "Elastic and accessible from anywhere – supports remote learning, scales at enrolment.",
      "Predictable subscription; no large upfront hardware cost.",
      "Drawbacks: relies on internet connection; less control over data location and configuration.",
      "Data protection: personal data held by a third party – must check provider complies with UK GDPR.",
      "Supported conclusion, e.g. suitable if provider meets data protection requirements and the college has reliable connectivity."
    ]}
  ]
});

REV.add({
  id: "p2-threats", section: "p2", title: "Security risks, threats and vulnerabilities", short: "Threats",
  spec: "Core 8.1, 8.2",
  summary: "What confidential information organisations hold, why it matters, and the **technical, human and physical** threats and vulnerabilities that put it at risk.",
  notes: [
    { h: "Confidential information", list: [
      "**HR data** – salaries, staff details.",
      "**Commercially sensitive data** – client/stakeholder details, IP, sales figures, contracts.",
      "**Access information** – usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data.",
      "Protecting it prevents competitors poaching or undercutting, protects privacy, IP and client relationships, and stops unauthorised access.",
      "Failure can mean regulatory non-compliance, loss of trust, reputational damage, financial loss (fines, refunds, lost contracts), legal action and weaker security."
    ]},
    { h: "Technical threats", table: [
      ["Threat", "What it is"],
      ["Botnet", "Network of infected devices controlled by an attacker"],
      ["DoS / DDoS", "Flooding a service with traffic from one / many sources to make it unavailable"],
      ["Malicious hacking", "By hacktivists, nation states, organised crime or individuals using password cracking/brute force, cross-site scripting, SQL injection, buffer overflow"],
      ["Malware", "Viruses, worms (self-spreading), keyloggers, ransomware, spyware, remote access trojans"],
      ["Social engineering", "Phishing, spear phishing (targeted), smishing (SMS), vishing (voice), pharming (redirect to fake site), watering-hole attacks (infect a site the target visits), USB baiting"],
      ["DNS attacks", "Redirecting traffic to malicious sites"],
      ["Open/unsecured Wi-Fi", "Traffic can be intercepted"]
    ]},
    { h: "Vulnerabilities and human threats", list: [
      "**Technical vulnerabilities**: inadequate security processes (weak encryption, poor password policy, no MFA); out-of-date hardware, software (legacy compatibility, zero-day bugs) and firmware.",
      "**Human error** – mitigated by file properties (e.g. read-only), confirmation boxes, staff training.",
      "**Malicious employees** – immediate removal and account suspension.",
      "**Disguised criminals** – visitor escorts and ID checks.",
      "**Poor cyber hygiene** – lock unattended machines, don't write down passwords, manage passwords properly."
    ]},
    { h: "Physical vulnerabilities", list: [
      "Poor access control – need entry systems, no tailgating, complex rotated codes, monitoring, access audits.",
      "Location – shoulder surfing, environmental risk, vandalism.",
      "Poor system robustness – may need rugged hardware.",
      "Natural disasters."
    ]},
    { h: "Impacts", p: "Loss or leaking of sensitive data, unauthorised digital access, data corruption, service disruption, unauthorised physical access." }
  ],
  memory: ["Phishing family by channel: **ph**ishing = email, **sm**ishing = **SMS**, **v**ishing = **voice**, **ph**arming = fake site you're redirected to."],
  cards: [
    ["What is a botnet?", "A network of compromised devices controlled remotely by an attacker, often used for DDoS."],
    ["What is the difference between DoS and DDoS?", "DoS floods a target from one source; DDoS uses many sources at once."],
    ["What is spear phishing?", "A targeted phishing attack aimed at a specific person or organisation."],
    ["What is smishing?", "Phishing via SMS text message."],
    ["What is vishing?", "Phishing via voice/phone calls."],
    ["What is pharming?", "Redirecting users from a genuine website to a fake one, e.g. by poisoning DNS."],
    ["What is a watering-hole attack?", "Infecting a website the target group is known to visit."],
    ["What is USB baiting?", "Leaving infected USB drives for victims to find and plug in."],
    ["What is SQL injection?", "Entering malicious SQL into an input field to manipulate a database."],
    ["What is a worm?", "Malware that spreads itself across networks without user action."],
    ["What is a keylogger?", "Malware or hardware that records keystrokes to steal passwords and data."],
    ["What is a zero-day vulnerability?", "A flaw unknown to the vendor, with no patch yet available."],
    ["What is tailgating?", "Following an authorised person through a secure door without using your own access."],
    ["What is shoulder surfing?", "Watching someone enter a password or PIN."],
    ["Give three ways to reduce human error.", "File properties (read-only), confirmation boxes, staff training."],
    ["What three kinds of access information are confidential?", "Any three: usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data."]
  ],
  quiz: [
    ["A text message claiming to be from your bank with a link is…", ["Vishing", "Smishing", "Pharming", "Tailgating"], 1, "SMS phishing."],
    ["Thousands of infected smart cameras flood a website. This is a…", ["DoS", "DDoS", "SQL injection", "Keylogger"], 1, "Many sources: distributed DoS."],
    ["Malware that encrypts files and demands payment is…", ["Spyware", "Ransomware", "Worm", "Adware"], 1, "Ransomware."],
    ["Typing `' OR 1=1 --` into a login box is an attempt at…", ["Cross-site scripting", "SQL injection", "Buffer overflow", "Brute force"], 1, "It manipulates the SQL query."],
    ["Someone follows staff through a security door. The control that's failed is…", ["Encryption", "Physical access control", "Patching", "MFA"], 1, "Tailgating defeats physical access control."],
    ["Which is the best mitigation for a dismissed employee who might act maliciously?", ["Firewall rules", "Immediate account suspension", "Defragmentation", "Confirmation boxes"], 1, "Remove access immediately."],
    ["A flaw with no patch available yet is a…", ["Legacy bug", "Zero-day", "Botnet", "Watering hole"], 1, "Zero-day vulnerability."],
    ["An attacker infects a forum popular with a company's engineers. This is…", ["Pharming", "Watering-hole attack", "Spear phishing", "Smishing"], 1, "Targeting a site the victims visit."]
  ],
  exam: [
    { q: "Explain two human threats to an organisation's data and how each could be mitigated.", marks: 4, points: [
      "Human error (e.g. deleting files/sending data to wrong person) – mitigated by confirmation boxes, read-only file properties, training.",
      "Malicious employee (e.g. leaking data) – mitigated by immediate removal and account suspension, least privilege, monitoring.",
      "Disguised criminal entering premises – mitigated by visitor escorts and ID checks.",
      "Poor cyber hygiene (e.g. unlocked PCs, written passwords) – mitigated by training, lock-screen policy, password manager."
    ]}
  ]
});

REV.add({
  id: "p2-mitigation", section: "p2", title: "Threat mitigation, the CIA triad and IAAA", short: "CIA and IAAA",
  spec: "Core 8.3, 8.4",
  summary: "The techniques that defend against threats, firewall and network segregation processes, and the two models that tie security together: the **CIA triad** and **IAAA**.",
  notes: [
    { h: "Mitigation techniques", list: [
      "Security settings on hardware and software; anti-malware; intrusion detection.",
      "**Encryption**: hashing (one-way), symmetric (one shared key), asymmetric (public/private key pair).",
      "User access policies; staff vetting and training; software-based access control; device hardening.",
      "**Backups**: full, incremental, differential – stored safely.",
      "Software, firmware and driver updates; air gaps; API certification; VPNs; MFA; password managers; port scanning; penetration testing (ethical vs unethical hacking)."
    ]},
    { h: "Backup types", table: [
      ["Type", "What is copied", "Backup speed", "Restore"],
      ["Full", "Everything", "Slowest, most storage", "Fastest – one set"],
      ["Incremental", "Changes since the last backup of any type", "Fastest, least storage", "Slowest – full plus every incremental"],
      ["Differential", "Changes since the last full backup", "Medium, grows each day", "Medium – full plus latest differential"]
    ]},
    { h: "Internet security processes", list: [
      "**Firewall configuration**: inbound/outbound rules, traffic-type rules, application rules, IP rules.",
      "**Network segregation**: virtual (VLANs), physical (separate hardware), offline (air gap).",
      "**Network monitoring** and **port scanning**."
    ]},
    { h: "The CIA triad", list: [
      "**Confidentiality** – controlling who can access data.",
      "**Integrity** – data hasn't been tampered with; partly achieved by maintaining confidentiality.",
      "**Availability** – data is accessible and usable when needed; partly achieved by maintaining integrity.",
      "The three reinforce each other rather than standing alone."
    ]},
    { h: "The IAAA model", table: [
      ["Stage", "Purpose", "Methods"],
      ["Identification", "Recognising an individual in a system", "Knowledge (username), possession (card), biometric"],
      ["Authentication", "Verifying the claimed identity", "MFA, passwords/passphrases, biometrics"],
      ["Authorisation", "Only allowing access to what the user is permitted", "Role-based access, access control lists"],
      ["Accountability", "Tracing actions back to the user", "Audit logs, user activity monitoring"]
    ]}
  ],
  memory: ["IAAA as a story: **Who are you?** (identification) → **Prove it** (authentication) → **What can you do?** (authorisation) → **What did you do?** (accountability)."],
  cards: [
    ["What does CIA stand for in security?", "Confidentiality, integrity, availability."],
    ["What does integrity mean in the CIA triad?", "Data is accurate and hasn't been altered without authorisation."],
    ["How do the parts of the CIA triad support each other?", "Confidentiality helps preserve integrity, and integrity helps ensure data is usable/available."],
    ["What are the four stages of IAAA?", "Identification, authentication, authorisation, accountability."],
    ["What is the difference between identification and authentication?", "Identification claims an identity (e.g. username); authentication proves it (e.g. password, biometric)."],
    ["What is authorisation?", "Ensuring an authenticated user can only access what they are permitted to."],
    ["How is accountability achieved?", "Audit logs and user activity monitoring."],
    ["What is the difference between symmetric and asymmetric encryption?", "Symmetric uses one shared key; asymmetric uses a public key to encrypt and a private key to decrypt."],
    ["What is hashing?", "A one-way function producing a fixed-length value; used e.g. to store passwords."],
    ["What is an incremental backup?", "A backup of only the data changed since the last backup of any type."],
    ["What is a differential backup?", "A backup of all data changed since the last full backup."],
    ["What is an air gap?", "Physically isolating a system from other networks, including the internet."],
    ["What is ethical hacking?", "Authorised penetration testing to find vulnerabilities so they can be fixed."],
    ["Name three types of network segregation.", "Virtual (VLAN), physical and offline (air gap)."]
  ],
  quiz: [
    ["Ransomware encrypting a file server mainly attacks which part of CIA?", ["Confidentiality", "Integrity", "Availability", "Accountability"], 2, "Users can no longer access the data."],
    ["Audit logs support which part of IAAA?", ["Identification", "Authentication", "Authorisation", "Accountability"], 3, "They trace actions to users."],
    ["Restoring from incremental backups requires…", ["Only the last incremental", "The last full plus every incremental since", "Only the full backup", "The last differential"], 1, "Each incremental holds only that day's changes."],
    ["Which encryption uses a public and a private key?", ["Symmetric", "Asymmetric", "Hashing", "Air gap"], 1, "Asymmetric."],
    ["A fingerprint scan to log in is part of which IAAA stage?", ["Authorisation", "Authentication", "Accountability", "Identification only"], 1, "It verifies the claimed identity."],
    ["A user can open HR files only because they're in the HR role. This is…", ["Identification", "Authentication", "Authorisation", "Accountability"], 2, "Permissions are authorisation."],
    ["Which backup is fastest to restore?", ["Full", "Incremental", "Differential", "Mirror of incrementals"], 0, "Only one backup set needed."],
    ["Someone changing exam grades in a database breaches…", ["Availability", "Integrity", "Elasticity", "Accountability"], 1, "Data was altered without authorisation."]
  ],
  exam: [
    { q: "Explain how the IAAA model would protect access to a company's finance system.", marks: 8, points: [
      "Identification: each user has a unique username/employee ID…so the system knows who is claiming access.",
      "Authentication: password plus MFA (e.g. authenticator app)…so a stolen password alone isn't enough.",
      "Authorisation: role-based access / ACL…so staff only see finance data relevant to their role (least privilege).",
      "Accountability: audit logs record who viewed or changed records…so fraud or mistakes can be traced to a user."
    ], note: "Two marks per stage: identify how it is applied and justify why it protects the system." },
    { q: "Compare incremental and differential backups.", marks: 4, points: [
      "Incremental copies changes since the last backup of any type; differential copies changes since the last full backup.",
      "Incremental is quicker to create and uses less storage.",
      "Differential is quicker to restore (full + latest differential only).",
      "Incremental restore needs the full plus every incremental, so slower and more points of failure."
    ]}
  ]
});
