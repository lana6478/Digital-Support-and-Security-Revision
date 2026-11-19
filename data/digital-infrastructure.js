/* Digital Infrastructure specialism – Content Area 2 */
REV.add({
  id: "di-design", section: "di", title: "Network design, transmission and infrastructure elements", short: "Design and elements",
  spec: "DI 2.1, 2.2, 2.3",
  summary: "Designing **resilient** networks, how signals travel over copper, fibre and wireless, **IPv4/IPv6** addressing, and the devices, storage, cabling, antennas and test equipment that make up infrastructure.",
  notes: [
    { h: "Principles of design", list: [
      "**High availability** – primary/secondary configurations so a backup takes over.",
      "**Clustering** – several servers act as one, giving redundancy and scalability.",
      "**Load balancing** – distributes traffic across servers.",
      "**Segmentation** – splitting network, systems, data, devices and services to limit the impact of a risk.",
      "**Quality of Service (QoS)** – guarantees a level of service, e.g. prioritising voice traffic.",
      "**Number systems** for addressing and subnetting: binary, hexadecimal, decimal, octal."
    ]},
    { h: "Transmission", list: [
      "Signals are **electrical** (copper), **light** (fibre) or **wireless**. Risks: tampering and signal loss.",
      "Copper must be **segregated from electrical cabling** to avoid interference (electromagnetic, static, crosstalk) – use shielding or separate parallel runs, per **BS EN 50174**.",
      "Wireless standards: 802.11b/g/n, Wi-Fi 5 (802.11ac), Wi-Fi 6/6E (802.11ax), Wi-Fi 7 (802.11be).",
      "**IPv4**: 32-bit addresses (e.g. 192.168.1.10), addressing schemes, subnetting, subnet masks. **IPv6**: 128-bit hexadecimal addresses with types such as global unicast, link-local, multicast."
    ]},
    { h: "Subnet mask quick reference", table: [
      ["CIDR", "Subnet mask", "Usable hosts"],
      ["/24", "255.255.255.0", "254"],
      ["/25", "255.255.255.128", "126"],
      ["/26", "255.255.255.192", "62"],
      ["/27", "255.255.255.224", "30"],
      ["/28", "255.255.255.240", "14"],
      ["/30", "255.255.255.252", "2"]
    ], after: "Usable hosts = 2^(host bits) − 2 (network and broadcast addresses can't be used)." },
    { h: "Infrastructure elements", table: [
      ["Group", "Items"],
      ["Network devices", "Firewalls (incl. NGFW/UTM), routers, switches, hubs, bridges, wireless access points, range extenders, modems, media converters"],
      ["End-user devices", "Desktops, laptops, mobile devices, smart devices, removable media"],
      ["Storage", "HDD, SSD, removable media, NAS, SAN, block storage, object storage, RAID 0/1/5/10"],
      ["Wired/wireless tech", "UTP (straight-through/crossover, TIA/EIA-568A/B), RJ11/RJ45, Cat5e/Cat6, fibre, PPP, SDN, WPA1/2/3"],
      ["Antennas", "Omni-directional, directional, patch, Yagi, dipole"],
      ["Cloud", "IaaS, PaaS, SaaS, cloud storage"],
      ["Test equipment", "Test plans, tone generator and probe, cable tester, tracing kit"],
      ["Management", "Scripting for automation, network monitoring/logging, capacity management"]
    ]},
    { h: "RAID levels", table: [
      ["Level", "Method", "Fault tolerance"],
      ["RAID 0", "Striping across disks – fast", "None"],
      ["RAID 1", "Mirroring", "One disk"],
      ["RAID 5", "Striping with parity (3+ disks)", "One disk"],
      ["RAID 10", "Mirroring + striping (4+ disks)", "One disk per mirror pair"]
    ]}
  ],
  memory: ["RAID **0** = **zero** protection. RAID **1** = **1** extra copy."],
  cards: [
    ["What is high availability?", "Primary/secondary configurations so a backup system takes over if the primary fails."],
    ["What is clustering?", "Grouping servers to act as one system for redundancy and scalability."],
    ["What is load balancing?", "Distributing traffic across multiple servers so none is overloaded."],
    ["What is QoS?", "Quality of Service – prioritising traffic to guarantee a level of network performance."],
    ["Which standard covers segregating data and power cables?", "BS EN 50174."],
    ["How many bits in an IPv4 and an IPv6 address?", "IPv4: 32 bits. IPv6: 128 bits."],
    ["How many usable hosts on a /26?", "62."],
    ["What subnet mask is /24?", "255.255.255.0."],
    ["What is RAID 0?", "Striping data across disks for speed, with no fault tolerance."],
    ["What is the difference between omni-directional and directional antennas?", "Omni-directional radiates in all directions; directional focuses the signal one way for longer range."],
    ["What is a Yagi antenna?", "A highly directional antenna for long-range point-to-point links."],
    ["What is a media converter?", "A device that converts between media types, e.g. copper to fibre."],
    ["What is a tone generator and probe used for?", "Tracing and identifying a particular cable in a bundle or wall."],
    ["What is the difference between block and object storage?", "Block storage presents raw volumes to servers; object storage keeps data as objects with metadata, ideal for large unstructured data."],
    ["What does NGFW stand for?", "Next-Generation Firewall – adds features such as application awareness and intrusion prevention."]
  ],
  quiz: [
    ["Which RAID level offers no fault tolerance?", ["0", "1", "5", "10"], 0, "Striping only."],
    ["How many usable hosts in a /30 subnet?", ["2", "4", "6", "30"], 0, "2^2 − 2 = 2 – used for point-to-point links."],
    ["Prioritising VoIP traffic over downloads is…", ["Load balancing", "QoS", "Clustering", "Segmentation"], 1, "Quality of Service."],
    ["Which antenna would link two buildings 500 m apart?", ["Omni-directional", "Yagi (directional)", "Dipole", "None"], 1, "Directional antennas focus range."],
    ["Which tool locates a specific cable in a bundle?", ["OTDR", "Tone generator and probe", "Crimper", "Multimeter only"], 1, "The tone is picked up by the probe."],
    ["What is the subnet mask for /27?", ["255.255.255.0", "255.255.255.192", "255.255.255.224", "255.255.255.240"], 2, "/27 = 224."],
    ["Copper data cabling running alongside power cables risks…", ["Attenuation only", "Electromagnetic interference and crosstalk", "Total internal reflection", "DHCP spoofing"], 1, "Hence segregation per BS EN 50174."]
  ]
});

REV.add({
  id: "di-servers", section: "di", title: "ESD, health and safety, servers and operating systems", short: "Servers and safety",
  spec: "DI 2.4–2.9",
  summary: "Preventing **electrostatic discharge**, the health and safety laws for infrastructure work, choosing between **physical, virtual, cloud** servers and **containers**, and operating system types.",
  notes: [
    { h: "ESD prevention and risk assessment", list: [
      "Limit movement, check temperature and humidity, and use anti-static equipment (wrist straps, mats, bags).",
      "Humidity matters: dry air lets static build up more easily, so keep humidity at a sensible level.",
      "Apply the full risk process: identify risks and their effect on people, calculate probability and impact, prioritise, record, apply ESD protection, comply with health and safety law."
    ]},
    { h: "Health and safety legislation", table: [
      ["Law", "Infrastructure example"],
      ["Health and Safety at Work etc. Act 1974", "PPE, employer duty of care"],
      ["Manual Handling Operations Regulations 1992", "Moving servers and racks"],
      ["Health and Safety (Display Screen Equipment) Regulations", "Screen time, workstation setup"],
      ["COSHH Regulations 2002", "Hazardous substances, e.g. printer toner"],
      ["Control of Major Accident Hazards Regulations 2015", "e.g. earthing"],
      ["WEEE Directive 2013", "Disposing of hardware and network components"]
    ]},
    { h: "Server options compared", table: [
      ["Option", "Benefits", "Drawbacks"],
      ["Physical server", "Full access to resources; full customisation", "Expensive to buy and run; harder to maintain; storage harder to scale; needs physical space"],
      ["Self-hosted virtual server", "Less setup expertise; cost control; scalable; supports HA and clustering", "High upfront cost; resilience is expensive"],
      ["Cloud-hosted virtual server (Azure, AWS)", "Scales easily; built-in redundancy; third-party support", "Higher subscription cost; more complex initial setup"],
      ["Container", "Lightweight, portable, consistent, cheap to run and develop", "Less secure if misconfigured; less OS flexibility; needs more expertise"]
    ]},
    { h: "Operating systems", list: [
      "Types: **end-user/desktop** (Windows, macOS), **mobile** (Android, iOS), **server** (Linux, Windows Server).",
      "Benefits: usability, no need for machine-language knowledge, stronger data security.",
      "All share a user interface, personalisation, resource management and an application platform – but differ in purpose-specific features, UX/UI and supported functionality."
    ]}
  ],
  cards: [
    ["What is ESD?", "Electrostatic discharge – a sudden flow of static electricity that can damage components."],
    ["Give three ways to prevent ESD.", "Anti-static wrist straps/mats/bags, limiting movement, controlling temperature and humidity."],
    ["What does COSHH cover?", "Control of Substances Hazardous to Health – e.g. handling printer toner."],
    ["Give two benefits of a physical server.", "Full access to hardware resources and full customisation."],
    ["Give two drawbacks of a physical server.", "Any two: expensive to buy/run, harder to maintain, storage harder to scale, needs physical space."],
    ["Give two drawbacks of cloud-hosted virtual servers.", "Higher subscription cost and more complex initial setup."],
    ["What is a container?", "A lightweight, isolated package of an application and only what it needs to run, sharing the host OS kernel."],
    ["Give a drawback of containers.", "Less secure if misconfigured, less OS flexibility, needs more expertise."],
    ["Name a server operating system.", "Linux or Windows Server."],
    ["Which law covers disposing of old network switches?", "WEEE Directive 2013."]
  ],
  quiz: [
    ["Which is the best protection when replacing RAM?", ["Rubber gloves", "Anti-static wrist strap", "Safety goggles", "Hard hat"], 1, "Grounds you to prevent ESD."],
    ["Which option is lightweight and portable but riskier if misconfigured?", ["Physical server", "Container", "Cold site", "SAN"], 1, "Containers."],
    ["Which law covers safe handling of printer toner?", ["WEEE", "COSHH", "DSE", "CMA"], 1, "Control of Substances Hazardous to Health."],
    ["A start-up wants to scale servers quickly without buying hardware. Best option?", ["Physical server", "Cloud-hosted virtual server", "Self-hosted server in a cupboard", "Tape library"], 1, "Cloud scales easily with no hardware purchase."],
    ["Which is a mobile OS?", ["Windows Server", "iOS", "Linux server", "macOS"], 1, "iOS (and Android)."]
  ]
});

REV.add({
  id: "di-services", section: "di", title: "Network services, remote access and VPNs", short: "Services and VPN",
  spec: "DI 2.10–2.15",
  summary: "Client-server services such as **Active Directory, Group Policy, DHCP, DNS** and **LDAP**, remote access methods (**VPN, RDP, LOM, SSH**), installing and maintaining networks, and making a **UTP cable**.",
  notes: [
    { h: "Client-server network services", table: [
      ["Service", "Job"],
      ["AD DS (Active Directory Domain Services)", "Centrally manages users, devices, security groups and distribution lists in organisational units (OUs)"],
      ["Group Policy", "GPOs applied to OUs push settings and files to users and devices"],
      ["DHCP", "Assigns IP addresses to clients"],
      ["LDAP", "Directory-service authentication/queries"],
      ["DNS", "Translates hostnames into IP addresses"],
      ["File server / DFS", "Shared disk access (DFS links shares across servers)"],
      ["Print server", "Shared printing"],
      ["Web / proxy / cache server", "Internet access, security, filtering, caching"],
      ["Mail, application, database servers", "Email, hosted apps, data"],
      ["Security utilities", "e.g. anti-virus to protect data and systems"]
    ]},
    { h: "Remote access", table: [
      ["Method", "What it does"],
      ["VPN", "Private, encrypted connection across a public network"],
      ["RDP", "Remote Desktop Protocol – control a remote machine; processing stays on the host"],
      ["LOM", "Lights-out management – administer a server remotely even when powered off or the OS has crashed"],
      ["SSH", "Secure Shell – encrypted command-line connection between two hosts"]
    ]},
    { h: "Setting up a simple VPN", list: [
      "**Server side**: enable the VPN service, set IP and DNS for the VPN interface, manage authentication and permissions.",
      "**Client side**: create the connection, set the destination IP or FQDN, set permissions."
    ]},
    { h: "Installing, testing and maintaining networks (skill)", p: "Install and configure servers (physical/virtual, OS, apps, database, security utilities), infrastructure devices, firewalls, load balancers, end-user devices and services (DNS, DHCP); choose the right ports and protocols; implement scripting; apply backup policy; test functionality and performance and record results. Maintenance adds performance monitoring and logging, capacity management and automation by scripting." },
    { h: "Making a UTP cable (skill)", steps: ["Work out the cable's purpose and calculate the length needed.", "Choose straight-through (same standard both ends) or crossover (568A one end, 568B the other).", "Strip, untwist minimally, order the wires and crimp an 8P8C/RJ45 connector using a crimper and wire cutters.", "Test with a cable tester against TIA/EIA standards."] },
    { h: "Ports worth knowing", table: [
      ["Port", "Protocol"], ["22", "SSH / SFTP"], ["25", "SMTP"], ["53", "DNS"], ["67/68", "DHCP"], ["80", "HTTP"], ["443", "HTTPS"], ["389", "LDAP"], ["3389", "RDP"]
    ]}
  ],
  cards: [
    ["What does AD DS do?", "Centrally manages users, devices, security groups and distribution lists using organisational units."],
    ["What is an OU?", "An Organisational Unit – a container in Active Directory used to group objects and apply Group Policy."],
    ["What is a GPO?", "A Group Policy Object – a set of settings applied to an OU's users and computers."],
    ["What is LDAP?", "Lightweight Directory Access Protocol – used to query and authenticate against directory services."],
    ["What is DFS?", "Distributed File System – presents shared folders from several servers as one namespace."],
    ["What is a proxy server?", "An intermediary for web requests that can filter, secure and cache traffic."],
    ["What is RDP?", "Remote Desktop Protocol – control a remote computer's desktop; processing happens on the host."],
    ["What is LOM?", "Lights-out management – out-of-band remote server administration, even if the server is off or crashed."],
    ["What is SSH?", "Secure Shell – an encrypted command-line connection between two hosts."],
    ["What port does RDP use?", "3389."],
    ["What port does SSH use?", "22."],
    ["What is a crossover cable?", "A cable with T568A at one end and T568B at the other."],
    ["What is a straight-through cable?", "A cable using the same wiring standard at both ends."],
    ["What are the server-side steps to set up a VPN?", "Enable the VPN service, configure IP/DNS for the VPN interface, manage authentication and permissions."]
  ],
  quiz: [
    ["Which service pushes a desktop wallpaper policy to every PC in an OU?", ["DHCP", "Group Policy", "DNS", "LDAP"], 1, "GPOs applied to OUs."],
    ["A server has crashed and won't boot. Which lets an admin power-cycle it remotely?", ["RDP", "LOM", "SSH", "VPN"], 1, "Lights-out management works out-of-band."],
    ["Which service turns 'intranet.school.local' into an IP address?", ["DHCP", "DNS", "LDAP", "SMTP"], 1, "DNS."],
    ["Which port is HTTPS?", ["80", "443", "22", "3389"], 1, "443."],
    ["A cable with T568B at both ends is…", ["Crossover", "Straight-through", "Rollover", "Coaxial"], 1, "Same standard both ends."],
    ["Which connector is used on a UTP Ethernet cable?", ["BNC", "RJ11", "RJ45 (8P8C)", "LC"], 2, "8P8C/RJ45."],
    ["Which remote method gives an encrypted command line only?", ["RDP", "SSH", "VPN", "LOM"], 1, "Secure Shell."]
  ]
});

REV.add({
  id: "di-itsm", section: "di", title: "ITSM, ITIL, solution lifecycle, DevOps and virtualisation", short: "ITSM and lifecycle",
  spec: "DI 2.16–2.24",
  summary: "Managing infrastructure as a service (**ITSM** and **ITIL**), **DRPs and BCPs** for infrastructure, the **solution lifecycle**, **DevOps**, solution architecture (**TOGAF**), virtualisation concepts and continuous improvement.",
  notes: [
    { h: "ITSM principles", p: "Co-create value through service relationships, deliver a good customer experience, consider the broader impact of change, and work across departments." },
    { h: "ITIL lifecycle", steps: ["**Service strategy** – align services with business objectives.", "**Service design**.", "**Service transition** – managed change.", "**Service operation** – fulfil requests, resolve failures, routine tasks.", "**Continual service improvement**."] },
    { h: "DRP and BCP in infrastructure", list: [
      "Common principles: **identify** (risk, critical systems, resources) → **analyse** (business impact, maximum downtime) → **design** (plan components) → **implement** (communication plan) → **measure** (test, check compliance, review).",
      "**BCP** keeps the business running during disruption: alternative premises, adaptive processes, alternative technology.",
      "**DRP** restores normal operations after a disaster: restore access and functionality, replace infrastructure."
    ]},
    { h: "Solution lifecycle (SLC)", steps: ["**Discover** – requirements, planning, conceptual design, feasibility.", "**Plan, design, develop** – detailed design, prototyping, compliance, use existing architecture, develop, integrate.", "**Test / QA** – functional and performance testing.", "**Pre-production** – sandbox testing, sign-off.", "**Deployment** – release; staged rollout for high-impact changes.", "**Monitor and evaluate** – continuous improvement.", "**Decommission**.", "**Migrate**."], after: "Each stage must be applied safely and documented." },
    { h: "DevOps", list: [
      "**Principles**: continuous integration and delivery (CI/CD), microservices, infrastructure as code, collaboration, automated testing, adapt and scale, monitoring and logging.",
      "**Aims**: deliver systems in an agile way; build, test and release changes quickly.",
      "**Benefits**: faster delivery, higher productivity, better cross-team process, scalability, fewer errors."
    ]},
    { h: "Solution architecture", p: "Reuse and documentation matter; architecture applies to hardware too; frameworks such as **TOGAF** give structure; solutions should align with enterprise architecture; architecture is described through **system, view, viewpoint, concern and stakeholder**." },
    { h: "Virtualisation", list: [
      "**Concepts**: many virtual resources from one physical resource (partitioning), or one virtual resource from several physical ones; **isolation**; **encapsulation** (a VM is a set of files); **hardware independence**.",
      "**Applications**: network, server, desktop, OS and data virtualisation."
    ]},
    { h: "Continuous improvement (skill)", steps: ["Identify the hardware affected by a change and assess current network performance.", "Apply the right SLC stage to respond.", "Assess performance afterwards.", "Process and review the outcome data.", "Record findings clearly to inform future policy."] }
  ],
  cards: [
    ["What is ITSM?", "IT Service Management – managing the end-to-end delivery of IT services to customers."],
    ["List the five ITIL lifecycle stages.", "Service strategy, service design, service transition, service operation, continual service improvement."],
    ["What happens in ITIL service operation?", "Fulfilling requests, resolving failures and carrying out routine tasks."],
    ["What happens in ITIL service transition?", "Building and deploying services through managed change."],
    ["What are the five shared DRP/BCP principles in infrastructure?", "Identify, analyse, design, implement, measure."],
    ["List the stages of the solution lifecycle.", "Discover; plan/design/develop; test/QA; pre-production; deployment; monitor/evaluate; decommission; migrate."],
    ["What is a staged rollout?", "Deploying a high-impact change gradually to groups of users to limit risk."],
    ["What is CI/CD?", "Continuous integration and continuous delivery – frequently merging, testing and releasing code automatically."],
    ["What is infrastructure as code?", "Defining and managing infrastructure through machine-readable configuration files rather than manual setup."],
    ["Give three benefits of DevOps.", "Any three: faster delivery, higher productivity, better cross-team process, scalability, fewer errors."],
    ["What is TOGAF?", "The Open Group Architecture Framework – a framework for designing enterprise/solution architecture."],
    ["What is encapsulation in virtualisation?", "A whole VM is stored as a set of files, so it can be copied, moved or backed up easily."],
    ["What is hardware independence in virtualisation?", "VMs aren't tied to specific physical hardware, so they can run on different hosts."],
    ["Name five types of virtualisation.", "Network, server, desktop, OS and data virtualisation."]
  ],
  quiz: [
    ["Which ITIL stage aligns IT services with business objectives?", ["Service design", "Service strategy", "Service operation", "Service transition"], 1, "Strategy comes first."],
    ["Sandbox testing and sign-off happen in which SLC stage?", ["Discover", "Test/QA", "Pre-production", "Deployment"], 2, "Pre-production."],
    ["Defining servers in configuration files that can be version-controlled is…", ["Microservices", "Infrastructure as code", "Thin imaging", "Load balancing"], 1, "A DevOps principle."],
    ["Which keeps the business running during a disruption, e.g. by moving staff to alternative premises?", ["DRP", "BCP", "SLA", "SLC"], 1, "Business continuity plan."],
    ["Which framework structures enterprise architecture?", ["ITIL", "TOGAF", "PCI DSS", "OWASP"], 1, "TOGAF."],
    ["Moving a VM to a different host because it's just a set of files shows…", ["Isolation", "Encapsulation", "Partitioning", "Aggregation"], 1, "Encapsulation."],
    ["Which SLC stage comes last?", ["Decommission", "Migrate", "Monitor", "Deploy"], 1, "Decommission then migrate."]
  ]
});
