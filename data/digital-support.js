/* Digital Support specialism – Content Area 2 (+ 3.6 incident systems) */
REV.add({
  id: "ds-agile", section: "ds", title: "Agile values, methodologies and digital business", short: "Agile",
  spec: "DS 2.1–2.3",
  summary: "The four **agile values**, the main agile methodologies (**Scrum, Kanban, DSDM, FDD, Crystal, Lean, XP**), and how digital technology runs through every part of a business.",
  notes: [
    { h: "The four agile values", table: [
      ["We value…", "…over"],
      ["Individuals and interactions", "processes and tools"],
      ["Working software", "comprehensive documentation"],
      ["Customer collaboration", "contract negotiation"],
      ["Responding to change", "following a plan"]
    ]},
    { h: "Agile methodologies", table: [
      ["Method", "Key features"],
      ["Scrum", "Defined roles, events, artefacts and rules; daily scrums; work split into **sprints**"],
      ["Kanban", "Balances demand against capacity, surfaces bottlenecks, Kanban board and **WIP limits**"],
      ["DSDM", "Dynamic Systems Development Method – fixes **cost, quality and time**; prioritises scope with **MoSCoW**"],
      ["Feature-driven development", "Breaks work into small features, planned, designed and built feature by feature"],
      ["Crystal", "Prioritises communication and interaction between people over process and tools"],
      ["Lean", "Seven principles: eliminate waste, build in quality, create knowledge, defer commitment, deliver fast, respect people, optimise the whole"],
      ["Extreme Programming (XP)", "Frequent short release cycles, checkpoints for new requirements, planning and feedback loops"]
    ], after: "**MoSCoW**: Must have, Should have, Could have, Won't have (this time)." },
    { h: "Digital technology across the business", table: [
      ["Function", "Examples"],
      ["Finance", "Budget dashboards, invoicing, expense tracking"],
      ["Sales and marketing", "CRM, social media tools"],
      ["Operations", "Performance dashboards, ticketing"],
      ["HR", "Personnel systems, digital training"],
      ["Communications", "Video conferencing, email, collaboration platforms"],
      ["R&D", "CAD, IDEs"]
    ], after: "Impact on digital support: rising demand for support, more staff training, more emphasis on **CPD**, and an ongoing need to keep information systems running so the organisation can collect, store, maintain and distribute information." }
  ],
  memory: ["Lean's seven: '**W**e **B**uild **C**ool **D**evices **D**aily, **R**especting **O**thers' – Waste, Build quality, Create knowledge, Defer commitment, Deliver fast, Respect people, Optimise the whole."],
  cards: [
    ["State the four agile values.", "Individuals and interactions over processes and tools; working software over documentation; customer collaboration over contract negotiation; responding to change over following a plan."],
    ["What is a sprint in Scrum?", "A short, fixed time-box (often 1–4 weeks) in which a set amount of work is completed."],
    ["What is a daily scrum?", "A short daily team meeting to share progress, plans and blockers."],
    ["What are WIP limits in Kanban?", "Caps on how many items can be in progress in each column, to expose bottlenecks and keep flow."],
    ["What three things does DSDM fix?", "Cost, quality and time – scope flexes instead."],
    ["What does MoSCoW stand for?", "Must have, Should have, Could have, Won't have (this time)."],
    ["What is feature-driven development?", "Agile approach that plans, designs and builds a system one small feature at a time."],
    ["What does the Crystal method prioritise?", "Communication and interaction between people over processes and tools."],
    ["List the seven Lean principles.", "Eliminate waste, build in quality, create knowledge, defer commitment, deliver fast, respect people, optimise the whole."],
    ["What is Extreme Programming (XP)?", "Agile method with frequent short releases, checkpoints for new requirements, and planning and feedback loops."],
    ["Give two digital tools used by finance.", "Budget dashboards, invoicing, expense tracking."],
    ["What does CPD stand for?", "Continuing Professional Development."]
  ],
  quiz: [
    ["Which method fixes cost, quality and time and uses MoSCoW?", ["Scrum", "DSDM", "Kanban", "XP"], 1, "DSDM."],
    ["Which agile value prefers working software over…", ["Customer collaboration", "Comprehensive documentation", "Responding to change", "Individuals"], 1, "Working software over comprehensive documentation."],
    ["A team limits 'In progress' to three tickets. This is a…", ["Sprint", "WIP limit", "Daily scrum", "MoSCoW rating"], 1, "Kanban WIP limit."],
    ["'Defer commitment' is a principle of…", ["Lean", "Crystal", "Scrum", "Waterfall"], 0, "Lean."],
    ["Which method emphasises very frequent releases and feedback loops?", ["DSDM", "Extreme Programming", "Waterfall", "Crystal"], 1, "XP."],
    ["CAD and IDEs are digital tools mainly used in…", ["HR", "Finance", "R&D", "Sales"], 2, "Research and development."]
  ]
});

REV.add({
  id: "ds-domain-cms", section: "ds", title: "Domains, CMS, devices, applications and support processes", short: "Domains and support",
  spec: "DS 2.4–2.8, 2.21–2.23",
  summary: "The services that create a **domain** (AD DS, Group Policy, DHCP, DNS, certificate authority), using a **CMS** to manage incidents, the devices and applications you support, and the troubleshooting method and support processes.",
  notes: [
    { h: "Services that create a domain", table: [
      ["Service", "Job"],
      ["AD DS", "Centrally manages users, devices, security groups and distribution lists in organisational units (OUs)"],
      ["Group Policy", "GPOs applied to OUs push settings and files"],
      ["DHCP", "Assigns IP addresses and network configuration"],
      ["DNS", "Resolves hostnames to IP addresses"],
      ["File server / DFS", "Shared disk access and permission management"],
      ["Print server", "Shared printer access"],
      ["Mail server", "Inbound and outbound mail"],
      ["Certificate authority", "Issues digital certificates certifying ownership of a public key"]
    ]},
    { h: "What a CMS does", list: [
      "**Incident/request management** – logging, tracking, open/closed tickets.",
      "**Knowledge management** – identifying training needs, collating support knowledge.",
      "**Change management** – supporting new system rollouts.",
      "**Configuration/asset management** – licence tracking, hardware/software requests, decommissioning."
    ]},
    { h: "Troubleshooting method", steps: ["**Gather information** – investigate the request and likely causes.", "**Analyse the problem** – eliminate known fixes and causes.", "**Test** the remaining possibilities.", "**Resolve** – back up data, implement and test the fix, repeat until resolved, document cause and solution in the CMS.", "**Prevent recurrence** – apply controls so it doesn't happen again."] },
    { h: "Devices you support", p: "Desktops (**thick** and **thin** clients), cloud workspaces (free or licensed), mobile devices (tablets, smartphones, wearables, e-readers), laptops, peripherals (mouse, keyboard, monitor, printer/scanner, speakers, projector, storage drives, card readers) and IoT (smart-building alarms, meters, lighting; smart devices such as autonomous vehicles and smart TVs)." },
    { h: "Operating systems and applications", list: [
      "OS: end-user (Windows, macOS, Linux), mobile (iOS, Android), server (Windows, Linux).",
      "**Productivity**: word processing, spreadsheets, presentations, diagramming.",
      "**Web browsers**.",
      "**Collaboration**: email client, conferencing, VoIP, instant messaging, online workspace, document sharing.",
      "**Business**: database, project management, bespoke apps, accounting, CRM, ticketing.",
      "**Development**: CAD, IDE."
    ]},
    { h: "Support processes", p: "User management (add/remove users, access hours), password management (complexity, expiry, forced reset), permissions and privileges (resource access, group policy, shared resources), software installation, remote resource connection, fault identification, **escalation from first to third line**, knowledge management, known fixes, SOPs, asset management and auditing." },
    { h: "Monitoring and operating information systems", list: [
      "Analyse performance of hardware, software, database, network and people.",
      "Monitor security controls (firewalls, anti-virus) and network performance/traffic.",
      "Operate and maintain assets: track licences, respond to requests, log and tag assets.",
      "Support users face-to-face or remotely: training, recording issues in the CMS, password management, fault identification, escalation.",
      "Record and summarise findings in correct technical terms to inform future policy."
    ]}
  ],
  cards: [
    ["What does a certificate authority do?", "Issues digital certificates that certify the ownership of a public key."],
    ["Name four functions of a CMS in support.", "Incident/request management, knowledge management, change management, configuration/asset management."],
    ["List the five steps of the troubleshooting method.", "Gather information, analyse the problem, test remaining possibilities, resolve (and document), prevent recurrence."],
    ["Why back up data before applying a fix?", "So data isn't lost if the fix causes further problems."],
    ["What is the difference between a thick and thin client?", "A thick client does processing and storage locally; a thin client relies on a server for most processing."],
    ["Name four types of collaboration software.", "Any four: email client, conferencing, VoIP, instant messaging, online workspace, document sharing."],
    ["What is CRM software?", "Customer Relationship Management – stores and analyses customer interactions and data."],
    ["What is escalation?", "Passing an issue to a higher support line or specialist when it can't be resolved at the current level."],
    ["What does password management cover?", "Complexity rules, expiry, and forced resets."],
    ["What is a known fix?", "A documented solution to a recurring problem stored in the knowledge base."],
    ["What is an IDE?", "Integrated Development Environment – software for writing, testing and debugging code."]
  ],
  quiz: [
    ["Which domain service resolves 'printer01' to an IP address?", ["DHCP", "DNS", "AD DS", "Mail server"], 1, "DNS."],
    ["Logging and tracking tickets is which CMS function?", ["Knowledge management", "Incident/request management", "Change management", "Asset management"], 1, "Incident/request management."],
    ["In the troubleshooting method, what comes after 'analyse the problem'?", ["Gather information", "Test remaining possibilities", "Prevent recurrence", "Escalate"], 1, "Gather → analyse → test → resolve → prevent."],
    ["A Chromebook that runs apps mainly in the cloud is closest to a…", ["Thick client", "Thin client", "Server", "IoT sensor"], 1, "Little local processing."],
    ["Tracking software licences is part of…", ["Configuration/asset management", "Knowledge management", "Group Policy", "DNS"], 0, "Asset management."],
    ["Which application type is ticketing software?", ["Productivity", "Business", "Development", "Browser"], 1, "Business software."]
  ],
  exam: [
    { q: "A user reports their PC can't reach any shared drives. Describe how a support technician should use the troubleshooting method to resolve this.", marks: 5, points: [
      "Gather information: ask the user what changed, check if others are affected, check the CMS for similar tickets.",
      "Analyse: eliminate known causes, e.g. check network cable/Wi-Fi, IP config with ipconfig, DNS resolution.",
      "Test remaining possibilities: e.g. ping file server, check permissions/group membership.",
      "Resolve: back up data, apply fix (e.g. renew DHCP lease, re-map drives), test with the user.",
      "Document cause and fix in the CMS / knowledge base and apply controls to prevent recurrence."
    ]}
  ]
});

REV.add({
  id: "ds-deployment", section: "ds", title: "Installing and deploying operating systems and software", short: "OS deployment",
  spec: "DS 2.9–2.15",
  summary: "Checking requirements, **installation and boot methods**, partitions and **file systems**, deployment approaches (**thin imaging, base image, in-place upgrade** and more), disk imaging, and **recovery vs restoration**.",
  notes: [
    { h: "Before installing", list: [
      "Check system requirements: storage, RAM, compatibility, processor, OS.",
      "**HDD** – cheap, more capacity, but mechanically fragile and heat-prone. **SSD** – fast, no moving parts, but pricier and less capacity (useful where device size matters).",
      "Network cards – efficient and secure, but cost more and have a finite performance lifespan.",
      "Plan resources for performance, permissions (file/folder access, user authorisation, **least privilege**) and security impact on device, network, usability and data storage."
    ]},
    { h: "Installation skill", p: "Remotely install an OS and configure: boot drive, partitioning and format, domain setup, time/date/region/language, drivers, updates; upgrade an existing OS **without losing user data**; install productivity software; apply network-based updates." },
    { h: "Deployment options", table: [
      ["Area", "Options"],
      ["Install method", "Network-based, local (CD/USB), virtualised, cloud-based"],
      ["Boot method", "Internal drive (SSD/HDD), external media (USB/flash/hot-swappable), network boot (**PXE**, Netboot)"],
      ["Partitioning", "Dynamic, basic, primary, extended, logical, **GPT**"],
      ["File systems", "exFAT, FAT32, NTFS, ReFS, NFS, ext3, ext4, HFS, swap partition"]
    ]},
    { h: "Quick vs full format", table: [
      ["", "Quick format", "Full format"],
      ["Speed", "Fast", "Slow"],
      ["Bad-sector scan", "No", "Yes"],
      ["File recovery afterwards", "Easier", "Harder"]
    ]},
    { h: "Deployment methods compared", table: [
      ["Method", "Advantages", "Disadvantages"],
      ["Unattended installation", "Minimal technician input via pre-set answers", "Answer files must be prepared correctly"],
      ["Thin imaging", "Scales across varied devices; flexible", "More maintenance; harder to configure"],
      ["Base image", "Easy to create for a specific purpose at scale", "Harder to maintain; less flexible"],
      ["In-place upgrade", "Efficient; keeps user profiles", "Compatibility risks; needs full OS media/download"],
      ["Manual clean install", "Latest OS, simple", "May need a prior backup; time-consuming"],
      ["Repair installation", "Fixes without data loss or full upgrade", "Manual; may not fix every instability"],
      ["Multi-boot", "Several OSs on one device", "Fiddly to set up and maintain"],
      ["Remote network installation", "No physical access; scales well", "Limited by network speed; needs PXE etc.; significant setup"]
    ]},
    { h: "Deploying remotely", steps: ["Gather and analyse user requirements.", "Select and configure the method – thin imaging: gather installer and drivers, build a task sequence; base image: install and configure OS, apps and drivers, then capture the disk image.", "Deploy.", "Apply updates to OS, apps and drivers.", "Test against business requirements.", "Follow safety and security policy throughout."] },
    { h: "Disk images", list: [
      "Steps: create the base image → create a customisation/**answer file** → add drivers/software → distribute → deploy → keep software and drivers updated to avoid introducing vulnerabilities.",
      "Benefits: fewer resources through automation, consistent deployments, lower support costs, quick restoration."
    ]},
    { h: "Recovery vs restoration", list: [
      "**Recovery** fixes the system in its current state, preserving files and folders.",
      "**Restoration** is used when recovery fails – it reverts the system to an earlier state.",
      "Process: make sure data is backed up → boot into recovery tools → follow the on-screen steps → test the issue is resolved."
    ]}
  ],
  cards: [
    ["What is PXE?", "Preboot Execution Environment – lets a computer boot from the network to install an OS."],
    ["What is GPT?", "GUID Partition Table – a modern partitioning scheme supporting large disks and many partitions."],
    ["Name four Windows/Linux file systems.", "Any four: NTFS, FAT32, exFAT, ReFS, ext3, ext4 (also NFS, HFS)."],
    ["What is a swap partition?", "Disk space used as overflow memory when RAM is full (Linux)."],
    ["Quick format vs full format?", "Quick is fast with no bad-sector scan and easier recovery; full is slow, scans for bad sectors and makes recovery harder."],
    ["What is thin imaging?", "Deploying a minimal image then adding drivers and apps via a task sequence – flexible across varied hardware."],
    ["What is a base image?", "A fully configured OS with apps and drivers captured as one image for deployment at scale."],
    ["What is an in-place upgrade?", "Upgrading the existing OS while keeping user profiles, files and settings."],
    ["What is an unattended installation?", "An install that runs with minimal technician input, using pre-set answers."],
    ["What is an answer file?", "A file of pre-set responses used to customise and automate an OS installation."],
    ["Give three benefits of image-based deployment.", "Fewer resources (automation), consistency, lower support cost, quick restoration."],
    ["What is the difference between system recovery and restoration?", "Recovery fixes the system in its current state, keeping files; restoration reverts it to an earlier state."],
    ["Give one advantage and one disadvantage of an SSD over an HDD.", "Advantage: faster, no moving parts. Disadvantage: more expensive per GB / less capacity."],
    ["What is multi-boot?", "Installing more than one operating system on one device and choosing at start-up."]
  ],
  quiz: [
    ["A school needs to install the same OS on 200 identical PCs over the network. Best approach?", ["Manual clean install on each", "Base image deployed via PXE", "Repair installation", "Multi-boot"], 1, "Base image at scale over the network."],
    ["Which format checks for bad sectors?", ["Quick format", "Full format", "Defragmentation", "GPT"], 1, "Full format."],
    ["Upgrading Windows 10 to 11 while keeping the user's files is…", ["Clean install", "In-place upgrade", "Thin imaging", "Restoration"], 1, "In-place upgrade."],
    ["Booting a PC from the network to install an OS uses…", ["GPT", "PXE", "NTFS", "LTO"], 1, "PXE."],
    ["Reverting a PC to last week's state after recovery failed is…", ["Recovery", "Restoration", "Repair install", "Formatting"], 1, "Restoration."],
    ["Which is a disadvantage of thin imaging?", ["Inflexible across hardware", "More maintenance and harder to configure", "Loses user profiles", "Needs physical access"], 1, "Thin imaging is flexible but needs more upkeep."],
    ["Which file system is native to modern Linux?", ["NTFS", "ext4", "HFS", "FAT32"], 1, "ext4."]
  ]
});

REV.add({
  id: "ds-email-remote", section: "ds", title: "Email configuration, remote access and VPNs", short: "Email and VPN",
  spec: "DS 2.16–2.20",
  summary: "Email protocols (**POP3, IMAP, SMTP, S/MIME, SSL/TLS**), setting up on-premises and cloud email, why remote access matters, and configuring a **VPN**.",
  notes: [
    { h: "Email protocols", table: [
      ["Protocol", "Role"],
      ["POP3", "Pulls mail down to local client software"],
      ["IMAP", "Keeps mail on the server, accessed and synced by clients"],
      ["SMTP", "Sends and relays mail across the internet"],
      ["S/MIME", "Sends encrypted (and signed) email"],
      ["SSL / port settings", "Encrypted connection between mail/web server and client"],
      ["TLS", "SSL's successor, providing data security"]
    ]},
    { h: "Configuring email", p: "Align with corporate policy; set up user profiles (usernames, passwords, signatures); choose the provider (e.g. Google Workspace, Microsoft 365), protocol (SMTP/IMAP/POP3), **MX record** (DNS record saying which server receives the domain's mail), and inbound/outbound mail domains." },
    { h: "Remote access", list: [
      "**Purpose**: work from a remote location as if on the physical network – e.g. supporting home working during an office closure as part of a BCP.",
      "**Uses**: desktop sharing, remote support (diagnosing and fixing user issues remotely), off-site working."
    ]},
    { h: "VPNs", list: [
      "A VPN **encrypts network traffic** and **masks the client's IP address**, increasing privacy.",
      "Configuration factors: settings, client/server configuration, port and security protocol (e.g. TLS, SSL), encryption settings and certificates, authentication.",
      "**Server side**: enable the VPN service, set IP address and DNS hostname for the VPN interface, manage user access (authentication, permissions).",
      "**Client side**: create the connection, set the destination IP or FQDN, set permissions and conditions."
    ]}
  ],
  cards: [
    ["What does POP3 do?", "Downloads email from the server to local client software."],
    ["What does IMAP do?", "Keeps email on the server so it syncs across multiple devices."],
    ["What does SMTP do?", "Sends and relays email across the internet."],
    ["What is S/MIME?", "A standard for sending encrypted and digitally signed email."],
    ["What is an MX record?", "A DNS record that specifies which mail server receives email for a domain."],
    ["Give three uses of remote access.", "Desktop sharing, remote support, off-site working."],
    ["How does remote access support a BCP?", "Staff can keep working from home if the office is closed."],
    ["What two things does a VPN do for privacy?", "Encrypts network traffic and masks the client's IP address."],
    ["What are the client-side steps to set up a VPN?", "Create the connection, set the destination IP/FQDN, set permissions and conditions."],
    ["What is an FQDN?", "Fully Qualified Domain Name, e.g. vpn.company.co.uk."],
    ["Name two cloud email providers.", "Google Workspace and Microsoft 365."]
  ],
  quiz: [
    ["Staff want email synced on phone, tablet and laptop. Which protocol?", ["POP3", "IMAP", "SMTP", "S/MIME"], 1, "IMAP."],
    ["Which DNS record directs a domain's email to the right server?", ["A", "MX", "CNAME", "PTR"], 1, "MX = mail exchanger."],
    ["Which is used to send encrypted email?", ["S/MIME", "POP3", "DHCP", "SMTP alone"], 0, "S/MIME."],
    ["Which VPN step happens on the client?", ["Enable the VPN service", "Set the destination IP or FQDN", "Manage user authentication on the server", "Configure the VPN interface DNS"], 1, "The others are server-side."],
    ["Which is NOT a benefit of a VPN?", ["Encrypts traffic", "Masks IP address", "Increases internet speed", "Secure remote access"], 2, "VPNs usually add a little overhead."]
  ]
});

REV.add({
  id: "ds-assets-mdm", section: "ds", title: "Version control, assets, MDM and training users", short: "Assets, MDM, training",
  spec: "DS 2.24–2.29",
  summary: "Managing installs, patches and **rollback**, the **asset management** lifecycle, **Mobile Device Management**, explaining digital solutions to users, and **training methods and tools**.",
  notes: [
    { h: "Version control management", list: [
      "**Fresh installation**: OS, application software, utility software, licensing.",
      "**Patching/updating**: system, driver/firmware, anti-virus/anti-malware, application updates.",
      "**Rollback** procedures, e.g. rolling back a device driver or a failed OS update.",
      "**Deployment** with network tools such as Group Policy: local install, network deployment, testing, release control."
    ]},
    { h: "Asset management lifecycle", steps: ["**Identification and planning** – user/organisational needs, constraints, deployment strategy.", "**Acquisition and implementation** – source hardware/software, integrate into the current system.", "**Operation and maintenance** – track licences, respond to requests.", "**Decommissioning and redeployment** – remove unused assets, retire old systems, manage joiner/leaver profiles."] },
    { h: "Mobile Device Management (MDM)", list: [
      "**Purpose**: track/locate, secure, and manage use and configuration of mobile devices (wireless/cellular data, hotspot, tethering, airplane mode, Bluetooth, email).",
      "**Applications**: separating personal and work profiles, enforcing policy compliance.",
      "**Remote management**: remote wipe, disable features, restrict devices/app stores/calls/data, control backup and sync.",
      "**Security features**: screen lock, device encryption, password enforcement, login-attempt limits, MFA, authenticator apps (e.g. Google Authenticator, FIDO)."
    ]},
    { h: "Explaining digital solutions", steps: ["Analyse the requirement – access to information, services or products, or transactions.", "Identify the best-fit solution – digital systems, productivity software, or wider technology.", "Explain the benefit clearly and concisely, pitched to the audience, with correct terminology."] },
    { h: "Operating information systems", p: "Collect, store, maintain and distribute information; process and critically review user feedback; maintain service delivery (create, action and update tickets, communicate status, monitor performance, support users remotely); record and summarise findings to inform policy." },
    { h: "Training methods and tools", table: [
      ["Methods", "Tools"],
      ["Shadowing, desk-side support, remote support, e-learning, VR, AR, smart boards, gamified apps (e.g. Kahoot!, Padlet), simulation", "Crib sheets, smart sheets, webinars, screencasts, managed/virtual learning environments (MLE/VLE), sandboxed environments, MOOCs"]
    ]}
  ],
  cards: [
    ["What is a rollback procedure?", "Reverting to a previous version, e.g. rolling back a faulty driver or failed OS update."],
    ["List the four stages of asset management.", "Identification and planning; acquisition and implementation; operation and maintenance; decommissioning and redeployment."],
    ["What happens in asset decommissioning?", "Removing unused assets, retiring out-of-date systems and managing leavers' profiles."],
    ["What is MDM?", "Mobile Device Management – software to track, secure, configure and control mobile devices remotely."],
    ["Give three MDM remote management actions.", "Any three: remote wipe, disable features, restrict app stores/devices/calls/data, control backup and sync."],
    ["Give four MDM security features.", "Any four: screen lock, encryption, password enforcement, login-attempt limits, MFA, authenticator apps."],
    ["How does MDM support BYOD?", "By separating personal and work profiles and enforcing policy on the work side."],
    ["What is shadowing as a training method?", "A trainee watches an experienced colleague doing the job."],
    ["What is a crib sheet?", "A short, quick-reference guide to a task or system."],
    ["What is a sandboxed training environment?", "An isolated copy of a system where users can practise without affecting live data."],
    ["What is a screencast?", "A recording of a computer screen with narration, showing how to do a task."]
  ],
  quiz: [
    ["A staff member's phone is stolen. Which MDM feature protects company data fastest?", ["Tethering", "Remote wipe", "Hotspot", "Bluetooth"], 1, "Wipe the device remotely."],
    ["Removing a leaver's laptop from the asset register happens in which stage?", ["Identification and planning", "Acquisition", "Operation and maintenance", "Decommissioning and redeployment"], 3, "Decommissioning."],
    ["A new printer driver crashes PCs. The quickest fix is…", ["Rollback the driver", "Reinstall the OS", "Buy a new printer", "Run a full format"], 0, "Rollback procedure."],
    ["A one-page quick reference for a new booking system is a…", ["Webinar", "Crib sheet", "MOOC", "Sandbox"], 1, "Crib sheet."],
    ["Which training method lets staff practise on a copy of the real system safely?", ["Shadowing", "Sandboxed environment", "Desk-side support", "Smart board"], 1, "Sandbox."],
    ["Which is an authenticator standard named in the course?", ["FIDO", "PXE", "GPT", "SFP"], 0, "FIDO."]
  ]
});

REV.add({
  id: "ds-incident-systems", section: "ds", title: "Incident and request management systems", short: "Ticket systems",
  spec: "DS 3.6",
  summary: "How users report problems, what must be recorded, and how tickets are tracked.",
  notes: [
    { h: "Reporting channels", list: [
      "**Ticket-based systems** – self-logged by users, or entered by support staff from a phone call. They track issue trends and record satisfaction.",
      "**Online chatbots** – use AI to answer common questions, freeing up support staff."
    ]},
    { h: "What to record", p: "User/customer details, issue details, the resolution, and the time taken." },
    { h: "Tracking", p: "Everyone can see the ticket's **status** and any **escalation**." }
  ],
  cards: [
    ["Give two ways users can report incidents.", "Self-logging a ticket (or via a phone call logged by staff), and online chatbots."],
    ["What four things should a ticket record?", "User details, issue details, resolution, time taken."],
    ["What is the benefit of a support chatbot?", "It answers common questions automatically, freeing support staff for complex issues."],
    ["Why do ticket systems help managers?", "They show issue trends and record user satisfaction."]
  ],
  quiz: [
    ["Which is NOT normally recorded on a support ticket?", ["User details", "Issue details", "Time taken", "The user's salary"], 3, "Salary is irrelevant and confidential."],
    ["What makes ticket systems useful for spotting recurring faults?", ["They track trends", "They encrypt data", "They replace staff", "They avoid escalation"], 0, "Trend tracking."],
    ["An AI assistant on the help page answering 'How do I reset my password?' is a…", ["Ticket queue", "Chatbot", "MDM tool", "CMS change board"], 1, "Online chatbot."]
  ]
});
