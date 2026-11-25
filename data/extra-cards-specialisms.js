/* Extra flashcards for the occupational specialisms so every examinable point has a card.
   Added to the END of each deck so students' saved progress stays matched to the right cards. */

/* ---------- Shared security content (Infrastructure, Cabling, Support) ---------- */
REV.addCards("sh-controls", [
  ["Give four physical preventative controls.", "Any four: anti-pick locks, barriers, fencing, bollards, gates, cages, flood defences, air conditioning."],
  ["What is combined/managed access?", "Controls that manage entry, e.g. card readers, biometric readers, video verification and PIN/passcodes."],
  ["Give two administrative preventative controls.", "Separation of duties and role-based access."],
  ["Give four technical preventative controls.", "Any four: allowlists, denylists, access control lists, sandboxing, device hardening, certificate authorities."],
  ["What is a denylist?", "A list of blocked applications, sites or addresses; anything on it is refused."],
  ["What is an access control list (ACL)?", "A list of rules saying which users or systems may access a resource and what they may do."],
  ["Give two administrative deterrent controls.", "Alarm-setting SOPs, fire drills, codes of conduct in contracts, acceptable use policies."],
  ["Give two administrative detective controls.", "Logs (e.g. server-room temperature, error logs) and audits of who entered and left."],
  ["Give an administrative corrective control.", "An SOP for responding to an incident, e.g. when a fire is detected."],
  ["Give two administrative directive controls.", "Security policy, agreements staff must sign, compulsory training."],
  ["Give two compensating controls.", "Temperature controls, role-based awareness training, environmental monitoring SOPs."],
  ["What three forms can any control take?", "Physical, administrative and technical."],
  ["How do you configure security in a domain environment?", "Use group policies, permissions and minimum password length/complexity rules."],
  ["What does a certificate authority do in a domain?", "Issues digital certificates that prove the identity of users, devices and servers."],
  ["List the four steps for applying and monitoring a control.", "Review the risk (gathering information), select the right control type, apply it, then monitor it while complying with law and policy."],
  ["What is RuBAC?", "Rule-based access control – access decided by a list of rules, e.g. time or location."],
  ["What is boundary firewall control in Cyber Essentials?", "Firewalls and internet gateways that restrict traffic between the network and the internet."],
  ["What is secure configuration in Cyber Essentials?", "Only enabling the functionality that's needed; removing defaults and unused services."],
  ["What is patch management in Cyber Essentials?", "Keeping software and firmware up to date with security updates."],
  ["Why must documents and data be managed in line with data protection law?", "To protect personal data and keep the organisation legally compliant."]
]);

REV.addCards("sh-drp-risk", [
  ["What are the physical elements of a DRP?", "Backups and off-site alternative storage."],
  ["Give four administrative elements of a DRP/BCP.", "Keep systems functional; let users work away from the main site; deploy backups to preserve data integrity; track assets; report infrastructure changes to management."],
  ["How do you define the scope of a DRP?", "Decide whether it covers a site, organisation, department or individual."],
  ["What information is gathered for a DRP?", "Past outages, hardware/software/network/data inventories, and contact details."],
  ["How should a DRP be tested?", "Plan resources and frequency, run the test, review and document it, then amend the plan."],
  ["How is a DRP continuously improved?", "Through internal and external audits."],
  ["Give four vulnerabilities in critical systems.", "Unauthorised access to ports, weak user account control, single points of failure, system failure, open USB/network ports, unsecured wireless."],
  ["What is an SOP?", "A standard operating procedure – agreed step-by-step instructions, e.g. for installation, backup or set-up."],
  ["What does an SLA usually specify?", "Uptime, response times and resolution times."],
  ["What does 'danger to life' mean as an impact?", "A realised threat causing health and safety breaches that could injure people."],
  ["Give an example of a privacy impact.", "A data breach or identity theft."],
  ["What is annualised loss expectancy (ALE)?", "The expected cost of a risk per year: single loss expectancy × annual rate of occurrence."],
  ["What is a SWOT analysis?", "Listing strengths, weaknesses, opportunities and threats."],
  ["What is fault tree analysis?", "Working backwards from a failure to map all the combinations of events that could cause it."],
  ["What is impact analysis?", "Working out the effect a risk would have on the business if it happened."],
  ["Give two quantitative risk measures.", "Cost overrun and resources consumed."],
  ["Give two examples of manmade internal threats.", "Malicious or accidental actions by staff or contractors."],
  ["Give three examples of manmade external threats.", "Malware, hacking, social engineering, third parties, terrorism."],
  ["Give four technological threats.", "Any four: component failure, misconfiguration, power issues, Wi-Fi/VPN dropouts, firewall misconfiguration, software corruption, RAID failure, interference, upgrade problems."],
  ["Give three environmental threats.", "Extreme weather, natural disasters, pests, humidity, poor air quality."],
  ["What is the purpose of a risk assessment?", "To reduce risk by applying HSE guidance, investigating the environment (e.g. PESTLE), identifying internal and external risks and quantifying impact on asset value."],
  ["What is a supply-chain assessment?", "Checking the risks that come from suppliers and contractors, e.g. contractors' access to systems."],
  ["What does it mean to accept a risk?", "Live with it because the impact is tolerable."],
  ["What does it mean to avoid a risk?", "Change the project or system scope so the risk no longer applies."],
  ["What does it mean to mitigate a risk?", "Reduce its probability or impact with controls."],
  ["Give five factors when designing a mitigation strategy.", "Risk response, user profile, cost vs benefit, risk owner, escalation routes, contingency planning, monitoring and review."],
  ["List the continuous improvement steps for security.", "Gather and organise incident information, analyse trends, apply mitigation, monitor and review, record findings."],
  ["Give two mitigations applied during continuous improvement.", "Installing RMM, hardening devices, placing firewalls."],
  ["What is a risk owner?", "The person responsible for managing a particular risk."],
  ["What is an escalation route?", "The agreed path for passing a problem up to someone with more authority or expertise."]
]);

REV.addCards("sh-tech-controls", [
  ["What is the purpose of technical security controls?", "To strengthen network security for users and systems."],
  ["What is least privilege?", "Giving users only the access they need to do their job."],
  ["What does anti-virus protect against?", "Known threats (it relies on recognising existing malware)."],
  ["What is vulnerability scanning?", "Automatically checking systems for known weaknesses."],
  ["What is port scanning?", "Checking which network ports are open, to find ones that should be closed."],
  ["What is hardware protection?", "Physically securing devices, e.g. locks, cages and secure storage."],
  ["Why test a device after securing it?", "To check the security configuration works and hasn't broken anything."],
  ["What is full-disk encryption?", "Encrypting an entire drive so data is unreadable without the key."],
  ["What is a full backup?", "A copy of all the data."],
  ["What is an incremental backup?", "A copy of only the data changed since the last backup of any kind."],
  ["What is a differential backup?", "A copy of all data changed since the last full backup."],
  ["Name three backup storage media.", "LTO tape, cloud and disk."],
  ["What does a health and safety policy cover?", "Lone working, manual handling, working at height, fire safety and RIDDOR reporting."],
  ["What is a change procedure?", "A policy that all changes must be approved, documented and periodically audited."],
  ["Why are policies and SOPs audited?", "To check they're current and being followed."],
  ["Give two consequences of not following security policy.", "Danger to life, privacy breaches, data loss, legal action."],
  ["Why does a working-from-home policy include a DSE assessment?", "To meet display screen equipment regulations for home workstations."],
  ["What is password renewal policy?", "Rules for when and how passwords must be changed."]
]);

REV.addCards("sh-network-security", [
  ["How is IAAA applied in a network?", "Through directory services, authentication processes, password policy, data protection and an up-to-date information asset register."],
  ["What does a firewall do when managing access?", "Restricts access to a defined set of services."],
  ["What is software-defined networking (SDN)?", "Controlling the network through software rather than individual hardware settings – used with TLS to secure traffic."],
  ["What is air gapping?", "Physically isolating a system from other networks."],
  ["What is a virtual air gap?", "Logically isolating a system so it has no route to other networks."],
  ["How should connected devices be secured?", "Prevent attacks with secure configuration, limit exposure, detect attacks with logging/auditing, and segregate devices to contain impact."],
  ["What is data-leakage protection?", "Controls that stop sensitive data leaving the organisation without permission."],
  ["What is internet-gateway security?", "Protecting the point where the network meets the internet, e.g. firewalls and filtering."],
  ["Give three reasons cyber security matters to organisations.", "Protecting systems, devices, cloud availability and data; complying with law; defending against cybercrime."],
  ["Give three reasons cyber security matters to society.", "Preserving privacy, preventing discrimination and prejudice, supporting equal opportunity, preventing identity theft."],
  ["What is a bus topology?", "All devices share a single backbone cable."],
  ["What is a ring topology?", "Devices connected in a loop, with data passing from one to the next."],
  ["What is a token ring?", "A ring network where a device can only transmit when it holds the 'token'."],
  ["What is a hybrid topology?", "A mix of two or more topologies."],
  ["What happens in the 'identify' stage of the cyber security standard?", "Assign a lead, carry out risk assessments and document configurations."],
  ["Give four actions in the 'protect' stage.", "Any four: anti-virus, firewalls, reduce attack surface, trusted OS/apps, decommission legacy systems, audits, encryption, least privilege, training."],
  ["What happens in the 'detect' stage?", "Audit and event logs and monitoring."],
  ["What happens in the 'respond' stage?", "Contain the incident and minimise its impact."],
  ["What happens in the 'recover' stage?", "Restore from backups, follow maintenance plans and review."],
  ["How do you fix missing patches?", "Patch management software, test devices and tracking."],
  ["How do you fix weak or default passwords?", "A minimum password policy aligned to NCSC guidance, plus lockout and reset policies."],
  ["How do you fix missing protection software?", "Install and monitor anti-malware (and be aware of buffer overflow attacks)."],
  ["How do you avoid insecure disposal?", "Wipe data and comply with the WEEE Directive 2013."],
  ["How do you fix poor backup management?", "Use the correct backup frequency and type."],
  ["How do you fix a misconfigured firewall or ACL?", "Scheduled auditing and reviewing the design."],
  ["What is the network interface layer of TCP/IP?", "The bottom layer, covering how data is sent over the physical network."]
]);

REV.addCards("sh-legislation", [
  ["Name four key UK GDPR articles.", "Subject matter and objectives, material scope, territorial scope, definitions, processing principles, lawfulness of processing, conditions for consent."],
  ["What does DPA 2018 require about security?", "Personal data must be protected against unlawful processing, loss or damage."],
  ["What does ISO 27001 cover?", "Information security management, GDPR/DPA compliance, penetration testing and risk assessment."],
  ["Which NCSC step covers USB sticks?", "Removable media controls."],
  ["Which NCSC step covers staff training?", "User education and awareness."],
  ["Which NCSC step covers admin accounts?", "Managing user privileges."],
  ["What three things does OWASP provide?", "Security tools and resources, education, and a networking platform."]
]);

REV.addCards("sh-sources", [
  ["Name six types of source of knowledge.", "Academic publications, supplier literature, search engines, websites, social media, blogs/vlogs, professional networks and conferences, e-learning, peers."],
  ["List the five steps for using a source legitimately.", "Clarify the requirement, choose up to three sources, apply reliability/validity factors, assess bias, check the source fits the requirement."],
  ["Give two examples of industry-certified accreditation.", "Cisco CCNA and Microsoft MTA."],
  ["What makes an author credible?", "Affiliation to recognised bodies, reputation, experience and qualifications."],
  ["What does 'evidence-based' mean for a source?", "Its claims are supported by citations."],
  ["Why consider a source's target audience?", "It tells you whether the language is technical or non-technical."],
  ["What is 'relevant context' when judging a source?", "Whether the source applies to your specific situation."],
  ["How should you search for information?", "Clarify the parameters, identify where it lives, search safely and securely, cross-reference to corroborate, apply reliability and bias checks."],
  ["How can bias be reduced?", "Ground conclusions in fact and evidence and take an inclusive, objective approach that fully represents demographics."],
  ["What is benchmarking?", "Comparing performance against a standard or other organisations."],
  ["Name three qualitative evaluation methods.", "Interviews, observation and workshops."],
  ["Name three quantitative evaluation methods.", "Experiments, surveys and statistics."],
  ["What is KPI analysis?", "Measuring performance against key performance indicators."],
  ["What is a user diary?", "A record kept by users of their experiences with a system over time."],
  ["What is scenario mapping?", "Walking through how users would handle realistic scenarios to find issues."],
  ["What is a self-assessment framework?", "A structured checklist an organisation uses to rate its own practices."],
  ["Name six channels for sharing knowledge.", "Any six: ITSM tools, knowledge bases, wikis, shared workspaces, phone, instant messaging, email, video conferencing, digital signage, social media, forums, project tools, policy documents."],
  ["How do you compare sources?", "Apply the reliability and validity factors to each, compare outcomes, then recommend and justify which to rely on and whether more are needed."]
]);

/* ---------- Digital Infrastructure ---------- */
REV.addCards("di-design", [
  ["What is segmentation in network design?", "Splitting the network, systems, data, devices and services to limit the impact of a risk."],
  ["Which number systems are used for addressing and subnetting?", "Binary, hexadecimal, decimal and octal."],
  ["What three forms can signals take?", "Electrical (copper), light (fibre) and wireless."],
  ["What risks affect transmitted signals?", "Tampering and signal loss."],
  ["What is Wi-Fi 6 in IEEE terms?", "802.11ax (Wi-Fi 6/6E)."],
  ["What is Wi-Fi 5 in IEEE terms?", "802.11ac."],
  ["What is Wi-Fi 7 in IEEE terms?", "802.11be."],
  ["Name three IPv6 address types.", "Global unicast, link-local and multicast."],
  ["How do you work out usable hosts in a subnet?", "2^(host bits) − 2 (network and broadcast addresses can't be used)."],
  ["What subnet mask is /26?", "255.255.255.192."],
  ["Name six network devices.", "Firewalls, routers, switches, hubs, bridges, wireless access points, range extenders, modems, media converters."],
  ["What is a UTM firewall?", "Unified Threat Management – one device combining firewall, anti-malware, filtering and more."],
  ["Name five end-user devices.", "Desktops, laptops, mobile devices, smart devices and removable media."],
  ["What is a patch antenna?", "A flat antenna, often wall-mounted, that radiates in one general direction."],
  ["What is a dipole antenna?", "A simple antenna of two conductors – the basic omni-directional type."],
  ["What is PPP?", "Point-to-Point Protocol – used to connect two network nodes directly."],
  ["Name three items of network test equipment.", "Test plans, tone generator and probe, cable tester, tracing kit."],
  ["What is scripting used for in network management?", "Automating repetitive tasks."],
  ["What is capacity management?", "Making sure the network has enough resources to meet current and future demand."]
]);

REV.addCards("di-servers", [
  ["Why does humidity matter for ESD?", "Dry air lets static build up more easily, so keep humidity at a sensible level."],
  ["What does the Health and Safety at Work Act require in infrastructure work?", "PPE and a duty of care from the employer."],
  ["Give an example of the Control of Major Accident Hazards Regulations in IT.", "Correct earthing of equipment."],
  ["Give two benefits of a self-hosted virtual server.", "Less setup expertise needed, cost control, scalable, supports high availability and clustering."],
  ["Give a drawback of a self-hosted virtual server.", "High upfront cost; resilience is expensive."],
  ["Give two benefits of a cloud-hosted virtual server.", "Scales easily, built-in redundancy, third-party support."],
  ["Give two benefits of containers.", "Lightweight, portable, consistent, cheap to run and develop."],
  ["Give three benefits of an operating system.", "Usability, no need to know machine language, stronger data security."],
  ["What four features do all operating systems share?", "A user interface, personalisation, resource management and an application platform."],
  ["How do operating systems differ?", "In purpose-specific features, UX/UI and the functionality they support."],
  ["List the risk process for ESD.", "Identify risks and effects on people, calculate probability and impact, prioritise, record, apply ESD protection, comply with H&S law."]
]);

REV.addCards("di-services", [
  ["What does DHCP do in a client-server network?", "Assigns IP addresses to clients."],
  ["What does DNS do in a client-server network?", "Translates hostnames into IP addresses."],
  ["What does a file server do?", "Provides shared disk access for users."],
  ["What does a print server do?", "Provides shared printing."],
  ["What does a web server do?", "Hosts websites and web applications."],
  ["What do cache servers do?", "Store copies of frequently used content to speed up access."],
  ["What do mail, application and database servers do?", "Handle email, host applications, and store and serve data."],
  ["What is a distribution list?", "A group of email addresses that can be sent to with one address."],
  ["What is a security group in AD?", "A group used to give a set of users the same permissions."],
  ["What are the client-side steps to set up a VPN?", "Create the connection, set the destination IP or FQDN, set permissions."],
  ["What port does SMTP use?", "25."],
  ["What port does DNS use?", "53."],
  ["What ports does DHCP use?", "67 and 68."],
  ["What port does HTTP use?", "80."],
  ["What port does LDAP use?", "389."],
  ["Name four things to configure when installing a network.", "Servers, infrastructure devices, firewalls, load balancers, end-user devices and services such as DNS and DHCP."],
  ["What extra tasks are part of maintaining a network?", "Performance monitoring and logging, capacity management and automation by scripting."],
  ["What are the steps to make a UTP cable?", "Work out its purpose and length, choose straight-through or crossover, strip and order the wires, crimp an RJ45 connector, then test it."],
  ["What connector is an RJ45 also known as?", "8P8C (8 position, 8 contact)."]
]);

REV.addCards("di-itsm", [
  ["Give the four ITSM principles.", "Co-create value through service relationships, deliver a good customer experience, consider the broader impact of change, work across departments."],
  ["What happens in ITIL service design?", "Designing services to meet the strategy and business needs."],
  ["What happens in ITIL continual service improvement?", "Reviewing and improving services over time."],
  ["What happens in the 'identify' DRP/BCP principle?", "Identify risks, critical systems and resources."],
  ["What happens in the 'analyse' DRP/BCP principle?", "Business impact analysis and maximum tolerable downtime."],
  ["What happens in the 'measure' DRP/BCP principle?", "Test the plan, check compliance and review."],
  ["What three things does a BCP use to keep a business running?", "Alternative premises, adaptive processes and alternative technology."],
  ["What does a DRP restore?", "Access and functionality, replacing damaged infrastructure."],
  ["What happens in the SLC 'discover' stage?", "Requirements, planning, conceptual design and feasibility."],
  ["What happens in the SLC 'test/QA' stage?", "Functional and performance testing."],
  ["What happens in the SLC 'monitor and evaluate' stage?", "Continuous improvement after deployment."],
  ["What are microservices?", "An application built from small, independent services that can be deployed separately."],
  ["What are the aims of DevOps?", "Deliver systems in an agile way and build, test and release changes quickly."],
  ["Why do reuse and documentation matter in solution architecture?", "They save time, keep designs consistent and help others build and maintain the system."],
  ["What five terms describe an architecture?", "System, view, viewpoint, concern and stakeholder."],
  ["What is partitioning in virtualisation?", "Creating many virtual resources from one physical resource."],
  ["List the continuous improvement steps for infrastructure.", "Identify affected hardware and assess performance, apply the right SLC stage, assess performance again, review the data, record findings."]
]);

/* ---------- Network Cabling ---------- */
REV.addCards("nc-principles", [
  ["How is data represented for transmission?", "As bits, bytes and packet structures."],
  ["What three issues must transmission handle?", "Error detection/correction, bandwidth limits and noise, and data compression."],
  ["What is encapsulation?", "Wrapping data into frames, packets and datagrams with addresses and sequence numbers – done by the network interface card."],
  ["What is a continuity tester?", "A tool that checks a conductor forms a complete circuit end to end."],
  ["What is a spectrum analyser used for?", "Measuring signal strength across frequencies, e.g. finding wireless interference."],
  ["What is a light source and power meter used for?", "Measuring the loss of light along a fibre link."],
  ["Name four terminating tools.", "Any four: crimper, copper/fibre strippers, cable cutters, punch-down tool, screwdrivers, fusion splicer, fibre cleaning tools, cleave tool."],
  ["Name three types of physical access equipment.", "MEWPs, low-level access towers and step ladders."],
  ["Name three fixtures and fittings.", "Prebuilt or flat-pack cabinets, racks and trunking/containment."],
  ["How should tools be chosen and used?", "Assess the job, select the right tool and use it safely following manufacturer guidance."],
  ["List the steps to install a network device.", "Read the design spec, check equipment matches, confirm physical fit (space, power, cooling), rack it, test it, configure it."],
  ["What is campus distribution?", "Cabling that links several buildings on one site."],
  ["What shapes a structured cabling design?", "Topology, physical design standards, permanent links and channels, campus distribution, and the balance of passive and active parts."],
  ["What installation admin goes in a design specification?", "Labelling, documentation, certification, warranty and performance declarations."],
  ["What else goes in a design specification?", "The SOR, bill of materials, design documents, installation procedures, contractual penalties and a future-proofing strategy."],
  ["What cabling design documents are needed?", "Building/floor plans, power and cooling diagrams, containment layouts and cable routes."],
  ["List the steps to produce a design specification.", "Gather requirements, design the spec, analyse it (quantities, lengths, placement), flag issues – in correct technical language."]
]);

REV.addCards("nc-fibre-copper", [
  ["What is refraction?", "Light changing direction as it passes between materials of different refractive index."],
  ["What is absorption in fibre?", "Light energy absorbed by particles in the glass – loss grows with distance."],
  ["What is macrobending?", "Light lost because the cable is bent too sharply."],
  ["What is microbending?", "Light lost through tiny bends or distortions in the fibre, e.g. from pressure."],
  ["What does a dirty fibre connector cause?", "An unreliable connection or no connection."],
  ["What do poor-quality cables or connectors cause?", "Interference and signal loss."],
  ["In Ohm's law, how are voltage and current related?", "Proportional – more voltage gives more current for the same resistance."],
  ["Give four factors that increase resistance in cabling.", "Longer cable, resistors in hardware, higher signal frequency, thinner cable."],
  ["What is copper cable used for?", "Telephony and short LAN runs."],
  ["How does STP reduce interference?", "An insulating shield plus grounding."],
  ["Give two disadvantages of fibre.", "Limited by the quality of the lasers/LEDs and harder to terminate."],
  ["What is fibre used for?", "Large data transfers, long distances and links between buildings."],
  ["Give four properties of plenum-rated cable.", "Less toxic smoke, burns less, breaks down less, works at higher temperatures – CPR compliant."],
  ["Where is plenum cable used?", "In air-handling spaces and escape routes."],
  ["What is TP cable?", "Twisted pair – pairs of copper wires twisted together."]
]);

REV.addCards("nc-connectors-standards", [
  ["What is an LC connector?", "A small fibre connector with a latch – common in data centres."],
  ["What is an ST connector?", "A fibre connector with a bayonet (twist-lock) fitting."],
  ["What is an SC connector?", "A square push-pull fibre connector."],
  ["What is an MPO connector?", "A multi-fibre push-on connector carrying many fibres at once."],
  ["What are DB-9 and DB-25 connectors used for?", "Serial connections."],
  ["What is an F-type connector used for?", "Coaxial TV and satellite connections."],
  ["Name three connector locking methods.", "Latching, screw-down and bayonet."],
  ["Give five factors when choosing a transceiver.", "Simplex/duplex, bidirectional capability, bandwidth, wave-division multiplexing, dynamic range, transfer rate, connector type, standalone or hosted."],
  ["What is SFP+?", "An enhanced SFP transceiver supporting higher speeds (e.g. 10 Gbps)."],
  ["What is a GBIC?", "Gigabit interface converter – an older, larger hot-swappable transceiver."],
  ["What is a patch panel?", "A panel where incoming cables terminate, with jacks for patch cables to interconnect them."],
  ["What is Cat3 rated for?", "16 MHz, 10 Mbps (10BASE-T), up to 100 m."],
  ["What is Cat5 rated for?", "100 MHz, 100 Mbps (100BASE-TX), up to 100 m."],
  ["What is Cat7 rated for?", "600 MHz, 10 Gbps, up to 100 m."],
  ["What is the max length of RG59 coax?", "229 m."],
  ["What is the max length of RG6 coax?", "305 m."],
  ["How far can single-mode fibre (OS1/OS2) run at 10 Gbps?", "40,000 m (40 km) in the course's standards table."],
  ["How far can OM1 run at 10 Gbps (850 nm)?", "33 m."],
  ["How far can OM4 run at 1 Gbps (850 nm)?", "1000 m."],
  ["How far can OM3 and OM4 run at 40/100 Gbps (850 nm)?", "OM3 100 m; OM4 150 m."],
  ["How far can multi-mode fibre run at 10 Gbps at 1300 nm?", "300 m (OM1–OM4)."],
  ["What is patching?", "Connecting cables via a patch panel using patch cords."],
  ["What is mechanical splicing?", "Aligning two fibres in a non-permanent connector – for single- or multi-mode."],
  ["What is the T568A colour order?", "White-green, green, white-orange, blue, white-blue, orange, white-brown, brown."],
  ["When is a straight-through cable used?", "Connecting different devices, e.g. a computer to a switch."],
  ["When is a crossover cable used?", "Connecting like devices directly, e.g. switch to switch."],
  ["Name three Ethernet deployment standards.", "Any three: 100BASE-T/TX, 1000BASE-T/LX/SX, 10GBASE-T."]
]);

REV.addCards("nc-testing", [
  ["What should be logged during maintenance?", "Hardware and software changes – and stakeholders informed."],
  ["What is monitored for network performance?", "User activity, traffic/load and benchmarking."],
  ["Give four technical causes of failure.", "Attenuation, latency, jitter, crosstalk, EMI, transceiver mismatch, TX/RX reversed, bottlenecks."],
  ["What is TX/RX reversed?", "Transmit and receive connections swapped, so the link can't communicate."],
  ["What is an open circuit?", "A break in a conductor so current can't flow."],
  ["What is a short circuit?", "Two conductors touching, letting current bypass its proper path."],
  ["How are failures detected?", "CRC errors, encapsulation errors, frame/packet/datagram loss, address conflicts and missing sequence numbers."],
  ["What does TIA/EIA-568-B.2-1 cover?", "Cat6 transmission performance."],
  ["What does TIA/EIA-568-B.1-10 cover?", "Augmented Cat6 (Cat6a)."],
  ["What does TIA/EIA-TSB-155-A cover?", "Cat6 support for 10GBASE-T."],
  ["What does IEC 61935-1 cover?", "Reference measurement procedures for cabling tests."],
  ["What four things go in a test plan?", "Scope, approach, resources and schedule."],
  ["Name three items of copper test equipment.", "Continuity tester, cable performance tester and cable certifier."],
  ["What is a fibre inspection tool?", "A microscope or probe for checking fibre end-faces for dirt or damage."],
  ["List the steps to certify cabling.", "Identify what's tested, choose the spec and method, test to standards, record results, interpret against manufacturer tolerances."],
  ["Give four network consequences of not meeting standards.", "Slower speeds, more interference, harder maintenance, shorter cable life, weaker security."],
  ["What can happen if not every cable is tested?", "Equipment damage, early breakdown, service disruption and undetected errors."],
  ["What is cable length testing?", "Measuring a run to check it's within the standard's maximum."]
]);

REV.addCards("nc-safety", [
  ["What does BS EN 50173 cover?", "Generic cabling systems for customer premises."],
  ["What does BS 6701 cover?", "Telecommunications installation."],
  ["What does IEC 60364 cover?", "Electrical installations."],
  ["What does TIA/EIA-568-B define?", "Cable categories and wiring."],
  ["What do the PPE Regulations 2018 cover?", "Providing and using personal protective equipment."],
  ["What do the COSHH Regulations 2002 cover on site?", "Control of substances hazardous to health, e.g. dust or chemicals."],
  ["What do the Control of Asbestos Regulations 2012 cover?", "Managing and protecting workers from asbestos."],
  ["What is ACM?", "Asbestos-containing material."],
  ["How is suspected asbestos run through the risk process?", "Identify, analyse, prioritise and mitigate, then record."],
  ["How must low-level access towers be handled?", "Assembled, inspected, operated and dismantled following manufacturer guidance."],
  ["What must happen with PPE in confined spaces?", "It must be correctly applied and maintained, and findings recorded."],
  ["List the steps for installing fixtures and fittings.", "Interpret the spec, compare the site (space, power, cooling), build cabinets/racks, add trunking, test for compliance, arrange equipment."],
  ["Why segregate data cables from power cables?", "To avoid electromagnetic interference, static and crosstalk."],
  ["Why check local records before installing cable?", "To find existing services so they aren't damaged or disrupted."]
]);

/* ---------- Digital Support ---------- */
REV.addCards("ds-agile", [
  ["What does Scrum define?", "Roles, events, artefacts and rules, with daily scrums and sprints."],
  ["What does Kanban help a team see?", "Demand against capacity, and where bottlenecks are."],
  ["What does 'eliminate waste' mean in Lean?", "Removing anything that doesn't add value for the customer."],
  ["What does 'defer commitment' mean in Lean?", "Delay irreversible decisions until you have enough information."],
  ["Give two digital tools used in operations.", "Performance dashboards and ticketing systems."],
  ["Give two digital tools used in HR.", "Personnel systems and digital training."],
  ["Give three digital communication tools.", "Video conferencing, email and collaboration platforms."],
  ["How has digital technology affected digital support?", "More demand for support, more staff training, more emphasis on CPD, and the need to keep information systems running."],
  ["What does CRM software help sales and marketing do?", "Manage customer data and relationships."]
]);

REV.addCards("ds-domain-cms", [
  ["What does Group Policy do in a domain?", "Applies GPOs to OUs to push settings and files to users and devices."],
  ["What does a file server/DFS provide?", "Shared disk access and permission management."],
  ["What does a mail server do?", "Handles inbound and outbound email."],
  ["What is knowledge management in a CMS?", "Identifying training needs and collating support knowledge."],
  ["What is change management in a CMS?", "Supporting new system rollouts."],
  ["What is configuration/asset management in a CMS?", "Licence tracking, hardware/software requests and decommissioning."],
  ["What happens in the 'analyse' troubleshooting step?", "Eliminate known fixes and causes."],
  ["What is a cloud workspace?", "A desktop and apps delivered from the cloud, free or licensed."],
  ["Name four types of mobile device.", "Tablets, smartphones, wearables and e-readers."],
  ["Name six peripherals.", "Mouse, keyboard, monitor, printer/scanner, speakers, projector, storage drives, card readers."],
  ["Give examples of IoT devices you might support.", "Smart-building alarms, meters and lighting; autonomous vehicles; smart TVs."],
  ["Name four types of business software.", "Database, project management, bespoke apps, accounting, CRM, ticketing."],
  ["What is user management?", "Adding and removing users and setting their access hours."],
  ["What do permissions and privileges control?", "Access to resources, group policy and shared resources."],
  ["What is escalation from first to third line?", "Passing issues up support levels when the current level can't resolve them."],
  ["What do support technicians monitor in information systems?", "Performance of hardware, software, databases, networks and people; security controls; network traffic."],
  ["Why record and summarise findings?", "To inform future policy, using correct technical terms."]
]);

REV.addCards("ds-deployment", [
  ["What system requirements must be checked before installing?", "Storage, RAM, compatibility, processor and OS."],
  ["Give an advantage and a disadvantage of an HDD.", "Cheap with large capacity; but mechanically fragile and heat-prone."],
  ["Give an advantage and a disadvantage of network cards.", "Efficient and secure; but cost more and have a finite performance lifespan."],
  ["What must be planned for when installing software?", "Performance, permissions (least privilege) and the security impact on device, network, usability and storage."],
  ["Name four installation methods.", "Network-based, local (CD/USB), virtualised and cloud-based."],
  ["Name three boot methods.", "Internal drive, external media and network boot (PXE/Netboot)."],
  ["What is the difference between basic and dynamic disks?", "Basic disks use fixed partitions; dynamic disks use flexible volumes that can span disks."],
  ["What is the difference between primary, extended and logical partitions?", "Primary partitions can boot; an extended partition is a container holding logical partitions."],
  ["What is NTFS?", "The main Windows file system, supporting permissions and large files."],
  ["What is FAT32?", "An older, widely compatible file system with a 4 GB file size limit."],
  ["What is exFAT?", "A file system for flash drives that supports large files and works across OSs."],
  ["What is ReFS?", "Resilient File System – a Windows Server file system built for data integrity."],
  ["What is a manual clean install?", "Installing a fresh OS – simple and up to date, but may need a backup first and is time-consuming."],
  ["What is a repair installation?", "Reinstalling the OS over itself to fix problems without losing data."],
  ["What is remote network installation?", "Installing an OS over the network without physical access – scalable but limited by network speed."],
  ["What does thin imaging deployment involve?", "Gathering the installer and drivers and building a task sequence."],
  ["What does base image deployment involve?", "Installing and configuring the OS, apps and drivers, then capturing the disk image."],
  ["List the steps for using disk images.", "Create the base image, create an answer file, add drivers/software, distribute, deploy, keep updated."],
  ["Why keep disk images updated?", "To avoid deploying old software with known vulnerabilities."],
  ["List the recovery process.", "Back up data, boot into recovery tools, follow the steps, test the issue is fixed."],
  ["How do you upgrade an OS without losing user data?", "Use an in-place upgrade (and back up first)."]
]);

REV.addCards("ds-email-remote", [
  ["What do SSL and port settings do in email?", "Encrypt the connection between the mail server and the client."],
  ["What is TLS in email?", "The more secure successor to SSL that protects data in transit."],
  ["What is set up in an email user profile?", "Username, password and signature."],
  ["What must email configuration align with?", "Corporate policy."],
  ["What are inbound and outbound mail domains?", "The domains the server accepts mail for and sends mail from."],
  ["What is the purpose of remote access?", "Working from a remote location as if on the physical network."],
  ["Give five factors when configuring a VPN.", "Settings, client/server configuration, port and protocol, encryption and certificates, authentication."],
  ["What are the server-side steps for a VPN?", "Enable the service, set IP and DNS hostname for the VPN interface, manage authentication and permissions."]
]);

REV.addCards("ds-assets-mdm", [
  ["What does a fresh installation include?", "OS, application software, utility software and licensing."],
  ["Name four types of patch or update.", "System, driver/firmware, anti-virus/anti-malware and application updates."],
  ["How can software be deployed across a network?", "With network tools such as Group Policy – local install, network deployment, testing and release control."],
  ["What is release control?", "Managing when and how new versions are released to users."],
  ["What happens in asset identification and planning?", "Work out needs, constraints and the deployment strategy."],
  ["What happens in asset acquisition and implementation?", "Source the hardware/software and integrate it into the current system."],
  ["What happens in asset operation and maintenance?", "Track licences and respond to requests."],
  ["What mobile features can MDM control?", "Wireless/cellular data, hotspot, tethering, airplane mode, Bluetooth and email."],
  ["What does MDM enforce?", "Policy compliance."],
  ["List the steps for explaining a digital solution.", "Analyse the requirement, identify the best-fit solution, explain the benefit clearly to the audience."],
  ["What is desk-side support as a training method?", "Helping a user at their own desk as they work."],
  ["Name two immersive training methods.", "Virtual reality and augmented reality."],
  ["Name two gamified training apps.", "Kahoot! and Padlet."],
  ["What is a smart sheet?", "A short, visual step-by-step guide to a task."],
  ["What is a webinar?", "A live or recorded online seminar."],
  ["What is an MLE/VLE?", "A managed/virtual learning environment – an online platform for courses and resources."],
  ["What is a MOOC?", "A massive open online course."],
  ["How is user feedback used when operating information systems?", "It's processed and critically reviewed to improve the service."]
]);

REV.addCards("ds-incident-systems", [
  ["Who can log a ticket?", "Users themselves, or support staff on behalf of a user who phones in."],
  ["What can everyone see when tracking a ticket?", "Its status and any escalation."]
]);

/* ---------- Cyber Security ---------- */
REV.addCards("cs-governance", [
  ["What roles does a security framework define?", "Roles such as data controller and data processor."],
  ["Give two policies a security framework sets.", "Data retention and deletion policies."],
  ["What is an FOI request?", "A Freedom of Information request for information held by a public body."],
  ["What does the 'responsibility' governance principle mean?", "Everyone understands their information security role, e.g. asset owner or data controller."],
  ["What does the 'strategy' governance principle mean?", "Secure by design, planning for future needs such as cloud services."],
  ["What does the 'human behaviour' governance principle mean?", "Both technical and non-technical controls are factored into policy and decisions."],
  ["Give three hardware-layer protections.", "Hardware protection, device hardening, physical controls (secure storage, cages, CCTV, key-card doors)."],
  ["What is OS hardening?", "Removing unneeded accounts, functions, apps and ports from an operating system."],
  ["Give three network-layer protections.", "Segmentation/isolation, monitoring, network hardening and firewalls."],
  ["Give four software-layer protections.", "Any four: anti-malware, SSO, MFA, RMM, vulnerability scanning, application hardening, access controls, password policy, PAM, application firewalls, patching."],
  ["Give three cloud-layer protections.", "Auditing and log monitoring, access controls and MFA."],
  ["What policies does an ISMS create?", "An information security policy and an acceptable use policy."],
  ["What is NIST?", "A framework that helps organisations manage cyber risk."],
  ["What does PCI DSS aim to reduce?", "Payment card fraud."],
  ["What is Cyber Essentials?", "A government-backed NCSC accreditation for basic cyber security controls."]
]);

REV.addCards("cs-design-itsm", [
  ["Give three actions to establish the context of a secure design.", "Adopt zero trust, define purpose and acceptable risk, map infrastructure and sensitive data, define supplier responsibilities, clarify roles."],
  ["Give three ways to make compromise difficult.", "Anonymise data, reduce the attack surface, protect management environments, use proven standard solutions, audit everything."],
  ["Give three ways to make disruption difficult.", "Build resilience, plan for sudden demand, find bottlenecks, plan for third-party failure, run mock incidents, use external pen testing."],
  ["Give three ways to make detection easier.", "Collect and analyse logs, keep alerting current, separate monitoring from operational systems, learn what normal looks like."],
  ["Give three ways to reduce the impact of compromise.", "Segment the network, remove unneeded functionality, avoid management bypasses, keep recovery simple, separate duties."],
  ["Name the three OS types in cyber security.", "Client-side (Windows, macOS, Linux), mobile (Android, iOS) and server-side (Windows, Linux)."],
  ["Name six OS functions.", "Security, performance, error detection, GUI, memory management, processor management, device management, file management, program execution, I/O."],
  ["Where is evidence found on macOS?", "Library and preference files (plus logs, file system and processes)."],
  ["Why are running processes useful in an investigation?", "They show what software is active, which can reveal malware."],
  ["What is service request management in cyber security?", "Reporting a potential cyber incident to the service desk."],
  ["What is knowledge management in cyber security ITSM?", "Keeping documentation such as standard hardened builds up to date."],
  ["What is problem and incident management in cyber security?", "Root-cause analysis and standard incident procedures."],
  ["What are the four Ps of ITIL service design?", "People, process, product and partners."],
  ["How do you identify the security needs of data being transmitted?", "Use the CIA triad."],
  ["How is eavesdropping in transit prevented?", "With asymmetric encryption."],
  ["What is a physical server?", "A server running applications directly on its hardware with full access to its resources."],
  ["What is a virtual server?", "One of several isolated OS instances running on a single physical machine."]
]);

REV.addCards("cs-drp-controls", [
  ["What is a DRP?", "A formal document setting out how to respond to unplanned incidents such as disasters, power cuts and cyber-attacks."],
  ["What is gathered when implementing a DRP?", "Historic outages, inventories of hardware/software/network/data, and contact details."],
  ["What does a DRP plan identify?", "Required systems, staff roles and budget."],
  ["How is a DRP continuously improved?", "Internal/external audits, gap analysis, assessing control effectiveness, recording and communicating improvements."],
  ["What is the purpose of preventative controls?", "To stop unauthorised access or tampering, or reduce environmental incidents."],
  ["What is managed entry?", "Controlled access points, e.g. manned reception, guards, restricted doors and card readers."],
  ["Give two biometric controls.", "Face recognition and fingerprint scanning."],
  ["What is the purpose of corrective controls?", "To limit damage and stop recurrence."],
  ["Give two physical corrective controls.", "Sprinklers/extinguishers and gas suppression."],
  ["What is the purpose of compensating controls?", "To safeguard against a primary control failing."],
  ["Give a physical compensating control.", "Segregation of duties or log management (e.g. key-code access logs)."],
  ["Give two procedural compensating controls.", "Mandatory cyber-awareness training and regular control testing (e.g. simulated attacks)."],
  ["List the steps to protect personal, physical and environmental security.", "Review the risk, select and apply suitable controls, comply with regulation and policy."]
]);

REV.addCards("cs-crypto", [
  ["What is confidentiality in cryptography?", "Only the intended recipients can decrypt the data."],
  ["What is integrity in cryptography?", "Data can't be changed in transit without it being detected."],
  ["What is the purpose of a digital certificate?", "To prove the authenticity of a device, server or user using asymmetric cryptography."],
  ["What is a server-side certificate?", "One that lets a client verify a server, e.g. for HTTPS."],
  ["What is a client-side certificate?", "One that lets a client authenticate itself to a server."],
  ["Give five certificate management tasks.", "Monitor expiry, revoke early, auto-renew, create/sign/issue, audit deployment and removal, diagnose problems."],
  ["What is a CA?", "A Certificate Authority – a trusted body that issues and signs certificates."],
  ["Why must a private key never be sent to a CA?", "Anyone with the private key could impersonate the owner."]
]);

REV.addCards("cs-law-ethics", [
  ["What does the DPA 2018 require from a cyber security point of view?", "Protect personal data from attack, detect security events and minimise impact."],
  ["What does the Official Secrets Act 1989 protect?", "Security and intelligence information from disclosure."],
  ["What CMA offence covers changing or deleting data without permission?", "Unauthorised modification."],
  ["What does 'credibility' mean in the UKCSC Code of Ethics?", "Being accountable and acting ethically."],
  ["What does 'integrity' mean in the UKCSC Code of Ethics?", "Being honest and acting legally."],
  ["What does 'professionalism' mean in the UKCSC Code of Ethics?", "Sharing knowledge, promoting understanding, evidence-based practice and correcting misinformation."],
  ["What does 'responsibility and respect' mean in the UKCSC Code of Ethics?", "Taking ownership, safeguarding data, declaring conflicts of interest and championing equality, diversity and inclusion."],
  ["List the four BCS code of conduct principles.", "Make IT for everyone; show what you know, learn what you don't; respect the organisation or individual you work for; keep IT real, professional and pass it on."],
  ["What does 'respect the organisation you work for' mean in the BCS code?", "Due care, no disclosure for personal gain and not exploiting inexperience."],
  ["What is reliability in cyber security terms?", "The system performs as specified over time."],
  ["What does authorisation mean in IAAA?", "Permissions given through access-control models."]
]);

REV.addCards("cs-forensics", [
  ["What happens in the identification stage of forensics?", "Find what evidence exists, where it is and how it's stored."],
  ["What happens in the documentation stage of forensics?", "Record all findings and the investigation itself."],
  ["Why must evidence be kept within legal retention periods?", "So it is handled lawfully and remains admissible."]
]);

REV.addCards("cs-threats", [
  ["What is shoulder surfing?", "Watching someone enter their credentials."],
  ["What is a DoS attack?", "Overwhelming a service from one source so it becomes unavailable."],
  ["What is a botnet?", "A network of compromised devices under an attacker's control."],
  ["What is a virus?", "Malware that spreads and damages data or software."],
  ["What is ransomware?", "Malware that blocks, deletes or encrypts data until a payment is made."],
  ["What is spyware?", "Malware that hides and steals sensitive data."],
  ["How is malware usually spotted?", "Scan reports, reduced performance or unusual behaviour."],
  ["What motivates cyber criminals?", "Financial gain."],
  ["What motivates terrorist organisations online?", "Disruption for a cause."],
  ["What motivates nation-state attackers?", "Political gain – stealing data or damaging infrastructure."],
  ["Give two benefits of threat intelligence.", "Reveals unknown threats and attackers' motives; supports fast, effective mitigation decisions."],
  ["What three things do you do with identified threats?", "Calculate their likelihood and severity and categorise them by priority."]
]);

REV.addCards("cs-vuln", [
  ["What is scoping a vulnerability assessment?", "Defining in-scope systems, services and networks, access requirements and the vulnerabilities to test."],
  ["What is evaluating a vulnerability assessment?", "Classifying each finding's risk and likely business impact, then documenting results."],
  ["How are vulnerabilities identified?", "Scans and log analysis for anomalies."],
  ["Give five impacts of an exploited vulnerability.", "Damage to property, financial loss, reputational damage, fines/prosecution, operational disruption, harm to employees, identity theft."],
  ["What is a host-based assessment?", "Checking vulnerabilities, configuration and patch status on workstations and servers."],
  ["What is a network-based assessment?", "Looking for possible network attacks and vulnerable systems."],
  ["What is an application-based assessment?", "Checking software for known vulnerabilities and misconfigurations, e.g. SQL injection."],
  ["Give three things infrastructure scanners find.", "Missing patches, unsupported systems, weak passwords, exposed services, missing hardening, wrong access controls."],
  ["Give three things web application scanners find.", "SQL injection, broken authentication, data exposure, wrong access controls, vulnerable components, weak communications."],
  ["Give two strengths of software scanners.", "Find missing updates/patches and run vendor-specific checks."],
  ["What is a false negative?", "A scanner missing a vulnerability that really exists."],
  ["What happens in the exploitation stage of pen testing?", "Attempting to gain access using the vulnerabilities found."],
  ["What happens in the reporting stage of pen testing?", "Documenting findings and remediation recommendations."],
  ["What happens in the scanning stage of pen testing?", "Finding open ports and services."],
  ["Give five factors when making a mitigation recommendation.", "Business impact, mitigating circumstances, cost of acting or not, type and severity, resources, timeframes, CVE priority, possible responses, PoC results."],
  ["What is a vendor-published CVE used for?", "Identifying known vulnerabilities affecting your systems so they can be researched and fixed."]
]);

REV.addCards("cs-risk", [
  ["What is compliance risk?", "The risk of not following policy or regulation."],
  ["How is compliance risk managed?", "Monitoring and updating processes, compliance controls and exception reports."],
  ["What is safety risk?", "Harm to people, property or the environment."],
  ["How is safety risk managed?", "Checks for human error and maintenance audits."],
  ["What is information security risk?", "Data being lost, stolen, copied or compromised."],
  ["How is information security risk managed?", "Data access controls, traffic monitoring, device management and regular training."],
  ["How is social engineering mitigated?", "Raising awareness of current issues."],
  ["How are unmanaged devices mitigated?", "A policy restricting their use."],
  ["How are untrained staff mitigated?", "Training and SOPs."],
  ["How are unpatched applications mitigated?", "Making sure updates are applied."],
  ["How is improper disposal mitigated?", "Secure wiping and DPA 2018 compliance."],
  ["What is MTBF in cyber risk?", "Mean time between failures – how often an asset is likely to fail."],
  ["What is MTTR?", "Mean time to repair – average time to restore a failed system."],
  ["What is RTO?", "Recovery time objective – time to recover to an acceptable state."],
  ["What is RPO?", "Recovery point objective – the tolerable amount of data loss."],
  ["What is a single point of failure?", "A design, implementation or configuration flaw where the whole system depends on one component."],
  ["Give three environmental threat factors.", "Power failures or spikes, natural disasters, fire, equipment failure, flooding."],
  ["What is residual risk?", "Risk that remains after mitigation – it may be accepted."],
  ["What is qualitative analysis in cyber risk?", "A RAG rating applied to business risk."],
  ["Give three quantitative measures of cyber risk.", "Cost overrun, resource consumption, CVSS scores and ALE."],
  ["How often should controls be reviewed?", "Regularly, through internal and external audits, including third-party suppliers."]
]);

REV.addCards("cs-incident", [
  ["What happens in the 'log' stage of incident management?", "Record the incident manually (contact, date, description) or automatically by a monitoring system."],
  ["How are incidents categorised?", "By business impact."],
  ["What does prioritisation involve?", "RAG-style urgency, SLA management and escalation."],
  ["What happens in the 'document' stage?", "Gather information, complete incident/exception reports per policy, store them per data protection law."],
  ["What is an executive summary in an incident report?", "A short overview for managers of what happened and its impact."]
]);

REV.addCards("cs-mitigation", [
  ["What is security update management in Cyber Essentials?", "Keeping patches current."],
  ["What is malware protection in Cyber Essentials?", "Current anti-malware and regular scans."],
  ["What is secure configuration in Cyber Essentials?", "Only necessary functionality enabled."],
  ["What does access control and management require?", "Least privilege, with PAM for elevated accounts."],
  ["What is SSL used for?", "Legacy encryption between browsers and websites (replaced by TLS)."],
  ["What is a retention period for backups?", "How long each backup is kept."],
  ["Name five backup types.", "Full, incremental, differential, mirror and immutable."],
  ["What is asset classification?", "Labelling assets by sensitivity so they get the right protection."],
  ["What is an asset disposal policy?", "Rules for securely wiping and disposing of equipment."]
]);

REV.addCards("cs-sources-cni", [
  ["What is CREST?", "A professional body accrediting penetration testers and security services."],
  ["What is ISACA?", "A professional association for IT governance, audit and security."],
  ["What is CIISec?", "The Chartered Institute of Information Security – a professional body."],
  ["What is the CVE database?", "A public list of known vulnerabilities, each with a unique ID."],
  ["Name three cyber security accreditation providers.", "CompTIA, Certified Cyber Professional and (ISC)²."],
  ["What reliability factors apply to cyber sources?", "Publisher credibility and accreditation, credible citations, relevance, currency and absence of bias."],
  ["What does triangulation mean in cyber security evaluation?", "Cross-checking more than two sources."],
  ["What would an attack on energy CNI cause?", "Power cuts, surges, under-voltage or loss of gas supply."],
  ["What would an attack on water CNI cause?", "Loss of supply, flooding or treatment disruption."],
  ["What would an attack on healthcare CNI cause?", "Compromised records, impaired communication and treatment."],
  ["What would an attack on communications CNI cause?", "Service loss, eavesdropping or impersonation."],
  ["What would an attack on transport CNI cause?", "Disrupted public/private transport and emergency dispatch."],
  ["What would an attack on government CNI cause?", "Interrupted communication and policy."],
  ["What would an attack on defence CNI cause?", "Impaired military capability."],
  ["What would an attack on supply chains cause?", "Disrupted food and raw materials."],
  ["What is an industrial control system?", "A control system running critical national infrastructure."],
  ["What is a medical control system?", "One running life-sustaining equipment or handling patient data."],
  ["What is an automotive control system?", "One controlling vehicle systems such as the engine or fuel."],
  ["Why is insecure data transfer an IoT risk?", "Data may be unencrypted during processing, in transit or at rest."],
  ["Name four weak IoT update mechanisms.", "Unvalidated firmware, insecure delivery, no anti-rollback and no update notifications."],
  ["Give three purposes of information assurance and governance.", "Guide strategy, policy and process; support auditing; inform maintenance; confirm compliance with standards like ISO or NIST."]
]);
