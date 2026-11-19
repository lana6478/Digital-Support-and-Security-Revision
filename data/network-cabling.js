/* Network Cabling specialism – Content Area 2 */
REV.add({
  id: "nc-principles", section: "nc", title: "Cabling principles, tools, devices and design", short: "Principles and tools",
  spec: "NC 2.1–2.6",
  summary: "How data is represented and transmitted, **CSMA/CD** and **CSMA/CA**, the tools for testing, terminating and access, installing devices, and producing a **structured cabling design specification**.",
  notes: [
    { h: "Principles of network cabling", list: [
      "Data is represented as **bits, bytes** and **packet structures**.",
      "Transmission is **synchronous** (sender and receiver share a clock) or **asynchronous** (start/stop bits per unit of data).",
      "Must handle error detection/correction, bandwidth limits and noise, and data compression.",
      "**CSMA/CD** (Carrier Sense Multiple Access / Collision Detection) – wired Ethernet: listen, transmit, detect collisions, back off and retry.",
      "**CSMA/CA** (Collision Avoidance) – wireless: listen and try to avoid collisions before sending, since collisions can't be detected reliably on radio.",
      "Data is **encapsulated** into frames, packets and datagrams with addresses and sequence numbers by the network interface card.",
      "Addressing: **IPv4** (schemes, subnetting, subnet masks) and **IPv6** (address types)."
    ]},
    { h: "Tools and equipment", table: [
      ["Group", "Tools"],
      ["Testing", "Multimeter, tone generator and probe, **OTDR**, light source and power meter, spectrum analyser, continuity tester"],
      ["Terminating", "Crimper, copper/fibre strippers, cable cutters, **punch-down (IDC) tool**, screwdrivers, **fusion splicer**, fibre cleaning tools, **cleave tool**"],
      ["Physical access", "**MEWPs** (mobile elevating work platforms), low-level access towers, step ladders"],
      ["Fixtures and fittings", "Prebuilt or flat-pack cabinets, racks, trunking/containment"]
    ], after: "Skill: assess the job's requirements, select the right tool and use it safely following manufacturer guidance." },
    { h: "Devices and installing them", list: [
      "Devices: firewalls, routers, switches (with **SFP** modules), hubs, bridges, modems, wireless access points, media converters, range extenders, VoIP endpoints, CCTV, servers, network interfaces, cabling.",
      "To install: read the design spec for the location → check equipment matches spec → confirm physical fit (space, power, cooling) → rack it → test functionality → configure to requirement."
    ]},
    { h: "Structured cabling design", list: [
      "Shaped by **topology** (logical and physical), compliance with physical design standards, the relationship between **permanent links and channels**, campus distribution, and the balance of **passive** (cables, patch panels) and **active** (switches, routers) design.",
      "A **permanent link** is the fixed cabling from patch panel to wall outlet (max 90 m copper). The **channel** is the full end-to-end connection including patch cords (max 100 m)."
    ]},
    { h: "Design specification contents", list: [
      "Customer **statement of requirement (SOR)**.",
      "**Bill of materials**.",
      "Cabling design documents: building/floor plans, power and cooling diagrams, containment layouts, cable routes.",
      "Installation admin: labelling, documentation, certification, warranty, performance declarations.",
      "Installation procedures, contractual penalties and a future-proofing strategy."
    ], after: "To produce one: gather requirements → design the spec → analyse it (quantities, lengths, component placement) → flag potential issues, written in correct technical language and organised logically." }
  ],
  cards: [
    ["What does CSMA/CD stand for and where is it used?", "Carrier Sense Multiple Access with Collision Detection – wired Ethernet."],
    ["What does CSMA/CA stand for and where is it used?", "Carrier Sense Multiple Access with Collision Avoidance – wireless networks."],
    ["What is the difference between synchronous and asynchronous transmission?", "Synchronous shares a clock signal between sender and receiver; asynchronous uses start and stop bits around each unit of data."],
    ["What is an OTDR used for?", "Optical Time Domain Reflectometer – testing fibre: finds length, breaks, splices and loss along the cable."],
    ["What is a punch-down (IDC) tool used for?", "Terminating copper wires into patch panels or keystone jacks."],
    ["What is a fusion splicer?", "A tool that permanently joins two fibres by melting them together with an electric arc."],
    ["What is a cleave tool?", "A tool that cuts a fibre end cleanly and flat before splicing or terminating."],
    ["What is a MEWP?", "A Mobile Elevating Work Platform, e.g. a scissor lift or cherry picker."],
    ["What is an SFP module?", "A small form-factor pluggable transceiver that lets a switch port use different media (e.g. fibre)."],
    ["What is the difference between a permanent link and a channel?", "The permanent link is fixed cabling (max 90 m); the channel is end to end including patch cords (max 100 m)."],
    ["What is a statement of requirement (SOR)?", "The customer's description of what the network installation must provide."],
    ["What is a bill of materials?", "A list of all components and quantities needed for the installation."],
    ["What is the difference between passive and active network components?", "Passive components (cables, patch panels) don't need power or process signals; active ones (switches, routers) do."]
  ],
  quiz: [
    ["Wi-Fi uses which access method?", ["CSMA/CD", "CSMA/CA", "Token passing", "PoE"], 1, "Collision avoidance."],
    ["Which tool would locate a break 230 m along a fibre run?", ["Multimeter", "OTDR", "Crimper", "Punch-down tool"], 1, "The OTDR measures reflections along the fibre."],
    ["Which tool terminates copper into a patch panel?", ["Crimper", "Punch-down tool", "Cleave tool", "Fusion splicer"], 1, "IDC punch-down."],
    ["What is the maximum length of a copper permanent link?", ["90 m", "100 m", "55 m", "305 m"], 0, "90 m permanent link, 100 m channel."],
    ["A scissor lift is an example of…", ["Containment", "A MEWP", "A transceiver", "A media converter"], 1, "Mobile elevating work platform."],
    ["Which document lists every component and quantity?", ["SOR", "Bill of materials", "Risk register", "SLA"], 1, "Bill of materials."]
  ]
});

REV.add({
  id: "nc-fibre-copper", section: "nc", title: "Fibre theory, Ohm's law and cable media", short: "Fibre and copper",
  spec: "NC 2.7–2.12",
  summary: "How light travels in fibre (**total internal reflection**), why signals weaken (**attenuation**), **Ohm's law** for copper, comparing **copper and fibre** types, and **plenum-rated** cable.",
  notes: [
    { h: "Fibre signal theory", list: [
      "Light stays in the fibre core by **total internal reflection (TIR)**, based on **refraction** – the core has a higher refractive index than the cladding.",
      "**Single-mode** fibre carries one ray of light – long distance. **Multi-mode** carries many rays – shorter distance."
    ]},
    { h: "Attenuation and handling faults", list: [
      "**Attenuation** is loss of signal strength over distance, measured in **decibels (dB)**.",
      "Causes: **absorption** (light absorbed by particles – worse over distance), **scattering** (light hits particles and escapes into the cladding), **macrobending** and **microbending**.",
      "Poor handling: dirty, faulty or contaminated connectors (unreliable or no connection); excessive bending, with or without tension; poor-quality cable or connectors (interference)."
    ]},
    { h: "Ohm's law", p: "**V = I × R** (voltage = current × resistance). Voltage and current are proportional; more resistance means less current. In cabling, resistance rises with **cable length**, resistors in hardware, **signal frequency** and **cable size** (thinner = more resistance) – which is why copper has a **maximum length** for reliable transmission.", after: "Example: 48 V across a 6 Ω loop gives I = 48 ÷ 6 = 8 A." },
    { h: "Copper", list: [
      "Durable, easy to handle, cheap to install, high bandwidth, can carry power (**PoE**).",
      "Used for telephony and short LAN runs: **90 m permanent link / 100 m channel**.",
      "**TP** twisted pair; **UTP** unshielded – twisting reduces noise/EMI; **STP** shielded/screened – insulating shield plus grounding; **FTP** foil twisted pair; **coaxial** – copper core, insulator, braided shield, outer coat."
    ]},
    { h: "Fibre", list: [
      "Longer distances, higher bandwidth, greater capacity, lightweight, less degradation, immune to EMI, cheaper raw materials – but limited by the quality of the lasers/LEDs at each end and harder to terminate.",
      "Used for large data transfers and long-distance or inter-building links.",
      "**Single-mode OS1/OS2** – one ray, long distance. **Multi-mode OM3/OM4** – many rays, shorter distance."
    ]},
    { h: "Plenum-rated fire-resistant cable", p: "Compared with non-fire-resistant cable it gives off **less toxic smoke**, burns less, breaks down less, stays operational at higher temperatures, and complies with the **Construction Products Regulation (CPR)**. Used in air-handling spaces and escape routes." }
  ],
  memory: ["Ohm's triangle: **V** on top, **I × R** underneath. Cover the one you want: I = V ÷ R, R = V ÷ I.", "Fibre types: **OS** = **O**ne (single) mode, **OM** = **M**any modes."],
  cards: [
    ["What keeps light inside a fibre core?", "Total internal reflection – the core has a higher refractive index than the cladding."],
    ["What is attenuation and how is it measured?", "Loss of signal strength over distance, measured in decibels (dB)."],
    ["Name four causes of attenuation in fibre.", "Absorption, scattering, macrobending and microbending."],
    ["What is scattering?", "Light hitting particles in the fibre and being lost into the cladding."],
    ["State Ohm's law.", "V = I × R (voltage = current × resistance)."],
    ["Why does copper cable have a maximum length?", "Resistance increases with length (and frequency), weakening the signal until it can't be read reliably."],
    ["What is the difference between single-mode and multi-mode fibre?", "Single-mode carries one ray for long distances; multi-mode carries many rays for shorter distances."],
    ["Which fibre grades are single-mode and multi-mode?", "Single-mode: OS1/OS2. Multi-mode: OM1–OM4 (OM3/OM4 common)."],
    ["Give three advantages of copper cable.", "Durable, easy to handle, cheap to install, can carry power (PoE)."],
    ["What is PoE?", "Power over Ethernet – sending electrical power along the data cable to devices such as phones and access points."],
    ["What is FTP cable?", "Foil twisted pair – twisted pairs with an overall foil screen."],
    ["What are the layers of coaxial cable?", "Copper core, insulator, braided shield, outer coat."],
    ["What is plenum-rated cable?", "Fire-resistant cable that gives off less toxic smoke and complies with the Construction Products Regulation."],
    ["What regulation does plenum cable comply with?", "The Construction Products Regulation (CPR)."]
  ],
  quiz: [
    ["A cable has 12 V and 4 Ω resistance. What is the current?", ["3 A", "48 A", "16 A", "8 A"], 0, "I = V ÷ R = 12 ÷ 4."],
    ["Which fibre type suits a 10 km link?", ["OM3 multi-mode", "OS2 single-mode", "UTP", "Coaxial"], 1, "Single-mode for long distance."],
    ["Light escaping because the cable is bent too tightly is…", ["Absorption", "Macrobending", "Crosstalk", "Jitter"], 1, "Bending losses."],
    ["Which is NOT an advantage of fibre?", ["Immune to EMI", "Carries power to devices", "Longer distances", "Higher bandwidth"], 1, "PoE is a copper advantage."],
    ["Attenuation is measured in…", ["Ohms", "Decibels", "Hertz", "Amps"], 1, "dB."],
    ["What happens to current if resistance increases and voltage stays the same?", ["Increases", "Decreases", "Stays the same", "Doubles"], 1, "I = V ÷ R."],
    ["Why use plenum-rated cable in a ceiling air space?", ["Higher bandwidth", "Less toxic smoke in a fire", "Cheaper", "Longer runs"], 1, "Fire safety."]
  ],
  exam: [
    { q: "A client wants to link two buildings 400 m apart. Recommend a cable type and justify your choice.", marks: 4, points: [
      "Fibre-optic (single-mode, e.g. OS2, or OM4 multi-mode at lower speeds).",
      "Copper limited to 100 m channel, so can't span 400 m.",
      "Fibre is immune to EMI / electrical differences between buildings (no earthing issues).",
      "Higher bandwidth and future-proofing for growth."
    ]}
  ]
});

REV.add({
  id: "nc-connectors-standards", section: "nc", title: "Connectors, transceivers, termination and cable standards", short: "Connectors and standards",
  spec: "NC 2.13–2.16",
  summary: "Copper and fibre **connectors**, **transceivers** (SFP, QSFP), termination points (**66 and 110 blocks**, patch panels), copper and fibre **cable standards**, and **T568A/B** wiring.",
  notes: [
    { h: "Connectors", list: [
      "**Copper**: RJ-45 (Ethernet), RJ-11 (telephone), BNC (coax), DB-9, DB-25 (serial), F-type (TV/coax).",
      "**Fibre**: LC, ST, SC, MT-RJ, MPO.",
      "Consider mating type, locking method (latching, screw-down, bayonet; **APC/UPC** polish), durability, size and pin insulation."
    ]},
    { h: "Transceivers", p: "Forms: **SFP, SFP+, GBIC, QSFP**. Choose on simplex/duplex, bidirectional capability, bandwidth, wave-division multiplexing, dynamic range, transfer rate, connector type, and whether standalone or hosted in a switch/router." },
    { h: "Termination points", table: [
      ["Point", "Details"],
      ["66 block", "Older punch-down block for telephone systems; 22–26 gauge solid copper; RJ-21 female connector; Cat3"],
      ["110 block", "Supports higher speeds (Cat5/6/6a); supersedes the 66 block; terminates on-premises structured cabling"],
      ["Patch panel", "Mounted panel where incoming cables terminate at punch-down blocks; patch cables interconnect via jacks; handles large volumes of copper and fibre"]
    ]},
    { h: "Copper cable standards", table: [
      ["Cable", "Rated frequency", "Max length", "Ethernet rate", "Deployment"],
      ["Cat3", "16 MHz", "100 m", "10 Mbps", "10BASE-T"],
      ["Cat5", "100 MHz", "100 m", "100 Mbps", "100BASE-TX"],
      ["Cat5e", "100 MHz (up to 350)", "100 m", "1 Gbps", "1000BASE-T"],
      ["Cat6", "250 MHz (up to 550)", "100 m", "1 / 10 Gbps", "1000BASE-TX"],
      ["Cat6a", "500 MHz (up to 550)", "100 m", "10 Gbps", "10GBASE-T"],
      ["Cat7", "600 MHz", "100 m", "10 Gbps", "–"],
      ["RG59 coax", "High bandwidth", "229 m", "10 Mbps", "–"],
      ["RG6 coax", "Low bandwidth", "305 m", "10 Mbps", "–"]
    ]},
    { h: "Fibre standards: max length (m) by rate and wavelength", table: [
      ["Rate", "Wavelength", "OS1/OS2", "OM1", "OM2", "OM3", "OM4"],
      ["100 Mbps", "850 nm", "40,000", "2,000", "2,000", "2,000", "2,000"],
      ["1 Gbps", "850 nm", "100,000", "275", "550", "550", "1,000"],
      ["10 Gbps", "850 nm", "40,000", "33", "82", "300", "550"],
      ["40/100 Gbps", "850 nm", "40,000", "–", "–", "100", "150"],
      ["1 Gbps", "1300 nm", "–", "550", "550", "550", "550"],
      ["10 Gbps", "1300 nm", "–", "300", "300", "300", "300"]
    ], after: "Pattern to remember: higher OM grade = further at high speeds. At 10 Gbps: OM1 33 m → OM4 550 m." },
    { h: "Termination methods and standards", list: [
      "**Patching** to a patch panel; **RJ45** for Ethernet; **splicing** – **fusion** (permanent, single-mode) or **mechanical** (non-permanent, single- or multi-mode).",
      "**TIA/EIA-568A** and **568B** are the two pin-out standards (the course notes describe 568A as the American and 568B as the British/European pin-out).",
      "**Straight-through**: same standard at both ends (device to switch). **Crossover**: 568A at one end, 568B at the other (like device to like device).",
      "Ethernet deployment standards range from 100BASE-T/TX through 1000BASE-T/LX/SX to 10GBASE-T."
    ]},
    { h: "T568B colour order (pins 1–8)", p: "White-orange, orange, white-green, blue, white-blue, green, white-brown, brown. **T568A** swaps the orange and green pairs: white-green, green, white-orange, blue, white-blue, orange, white-brown, brown." }
  ],
  memory: ["T568B starts with **orange**, T568A starts with **green** – A for 'agriculture/green'.", "**110** beats **66** – bigger number, newer, faster."],
  cards: [
    ["Name three copper connectors.", "Any three: RJ-45, RJ-11, BNC, DB-9, DB-25, F-type."],
    ["Name three fibre connectors.", "Any three: LC, ST, SC, MT-RJ, MPO."],
    ["What is RJ-11 used for?", "Telephone lines."],
    ["What is a BNC connector used for?", "Coaxial cable, e.g. CCTV."],
    ["Name four transceiver form factors.", "SFP, SFP+, GBIC, QSFP."],
    ["What is a 110 block?", "A punch-down block supporting Cat5/6/6a, replacing the older 66 block for structured cabling."],
    ["What is a 66 block used for?", "Terminating telephone wiring (22–26 gauge, Cat3)."],
    ["What is the max Ethernet rate of Cat5e?", "1 Gbps."],
    ["Which copper category is the first designed for 10GBASE-T at 100 m?", "Cat6a."],
    ["What is the rated frequency of Cat6?", "250 MHz."],
    ["What is the difference between fusion and mechanical splicing?", "Fusion splicing permanently melts fibres together; mechanical splicing aligns them in a non-permanent connector."],
    ["How is a crossover cable wired?", "T568A at one end, T568B at the other."],
    ["What is the T568B colour order?", "White-orange, orange, white-green, blue, white-blue, green, white-brown, brown."],
    ["How far can OM4 run at 10 Gbps (850 nm)?", "550 m."],
    ["How far can OM3 run at 10 Gbps (850 nm)?", "300 m."],
    ["What does APC/UPC refer to on fibre connectors?", "The polish of the ferrule end – angled (APC) or ultra (UPC) physical contact – affecting reflection."]
  ],
  quiz: [
    ["Which cable category supports 10 Gbps up to 100 m and is rated at 500 MHz?", ["Cat5e", "Cat6", "Cat6a", "Cat3"], 2, "Cat6a."],
    ["Which connector is used on telephone lines?", ["RJ-45", "RJ-11", "LC", "MPO"], 1, "RJ-11."],
    ["Pin 1 in T568B is…", ["White-green", "White-orange", "Blue", "Brown"], 1, "568B starts white-orange."],
    ["Which splice is permanent?", ["Mechanical", "Fusion", "Patching", "RJ45"], 1, "Fusion melts the fibres together."],
    ["Which multi-mode grade reaches furthest at 10 Gbps?", ["OM1", "OM2", "OM3", "OM4"], 3, "OM4: 550 m."],
    ["Which termination block is used for Cat6 structured cabling?", ["66 block", "110 block", "BNC", "DB-25"], 1, "110 blocks support higher speeds."],
    ["Which transceiver form factor is used for 40/100 Gbps?", ["SFP", "GBIC", "QSFP", "RJ-11"], 2, "Quad SFP."],
    ["What is the max length of RG6 coax in the table?", ["100 m", "229 m", "305 m", "550 m"], 2, "RG6: 305 m."]
  ]
});

REV.add({
  id: "nc-testing", section: "nc", title: "Troubleshooting, testing and certification", short: "Testing and certification",
  spec: "NC 2.17–2.18, 2.26–2.29",
  summary: "Troubleshooting and maintaining cabling, common **physical and technical failures**, the **testing standards**, certifying copper and fibre, interpreting results and the cost of **poor workmanship**.",
  notes: [
    { h: "Troubleshooting process", steps: ["**Identify** the problem (a fault or routine monitoring).", "**Diagnose** – gather information, compare with past data or similar systems, narrow down causes.", "**Test** the shortlist.", "**Resolve** – implement the fix, document it, prevent recurrence."] },
    { h: "Maintenance", list: [
      "Log hardware and software changes and inform stakeholders.",
      "Monitor performance: user activity, traffic/load, benchmarking.",
      "**Predictive maintenance** – replace before failure. **Reactive maintenance** – run to failure."
    ]},
    { h: "Common failures", table: [
      ["Physical", "Technical"],
      ["Wrong cable type", "Attenuation"],
      ["Incorrect pin-out", "Latency, jitter"],
      ["Open or short circuit", "Crosstalk, EMI"],
      ["Bad port, cable damage, bent pins", "Transceiver mismatch, TX/RX reversed"],
      ["Duplex/speed mismatch", "Bottlenecks, hardware error"],
      ["Wrong containment", "LED status warnings"]
    ], after: "Detected through CRC errors, encapsulation errors, frame/packet/datagram loss, address conflicts and missing sequence numbers." },
    { h: "Testing standards", table: [
      ["Standard", "Covers"],
      ["TIA/EIA-568-B.2-1", "Cat6 transmission performance"],
      ["TIA/EIA-568-B.1-10", "Augmented Cat6 (Cat6a)"],
      ["TIA/EIA-TSB-155-A", "Cat6 support for 10GBASE-T"],
      ["TIA-1152", "Requirements for field test instruments"],
      ["IEC 61935-1", "Reference measurement procedures"]
    ]},
    { h: "Certification", list: [
      "Follow a **test plan**: scope, approach, resources, schedule.",
      "**Copper equipment**: continuity tester, cable performance tester, **cable certifier**. Parameters: **wiremap**, cable length, **near-end crosstalk (NEXT)**.",
      "**Fibre equipment**: **OLTS** (optical loss test set), light source and power meter, **OTDR**, fibre inspection tool. **Tier 1** testing measures overall loss and length; **Tier 2** adds an OTDR trace of each event along the link.",
      "Identify what's being tested → choose the right spec and method → test per manufacturer/industry standards → record results → interpret them against manufacturer tolerances and draw conclusions."
    ]},
    { h: "Why standards and workmanship matter", list: [
      "**Network consequences** of failing standards: slower speeds, more interference, harder maintenance, shorter cable life, weaker security.",
      "**Business consequences**: revisit costs, SLA/warranty penalties, reputational damage, delayed payment, failed audits.",
      "**Incorrect labelling** makes troubleshooting, maintenance and reconfiguration harder.",
      "**Not testing every cable** risks equipment damage, premature breakdown, service disruption and undetected errors."
    ]}
  ],
  cards: [
    ["List the four steps of the cabling troubleshooting process.", "Identify, diagnose, test, resolve."],
    ["What is the difference between predictive and reactive maintenance?", "Predictive replaces components before they fail; reactive runs them until they fail."],
    ["What is a wiremap test?", "A check that each wire is connected to the correct pin at both ends (finding opens, shorts, crossed or split pairs)."],
    ["What is NEXT?", "Near-end crosstalk – interference from one pair onto another measured at the same end as the transmitter."],
    ["What is an OLTS?", "Optical Loss Test Set – a light source and power meter used to measure total loss on a fibre link."],
    ["What is the difference between Tier 1 and Tier 2 fibre testing?", "Tier 1 measures overall loss and length; Tier 2 adds an OTDR trace showing each event along the link."],
    ["What does TIA-1152 cover?", "Requirements for field test instruments."],
    ["Give three physical causes of connectivity failure.", "Any three: wrong cable type, incorrect pin-out, open/short, bad port, damage, bent pins, duplex mismatch, wrong containment."],
    ["What is a duplex mismatch?", "When two linked devices use different duplex settings (half vs full), causing collisions and poor performance."],
    ["Give three business consequences of failing cabling standards.", "Any three: revisit costs, SLA/warranty penalties, reputational damage, delayed payment, failed audits."],
    ["Why is correct labelling important?", "It makes troubleshooting, maintenance and reconfiguration faster and less error-prone."],
    ["What does a cable certifier do?", "Tests a copper link against a category standard and produces a pass/fail certification report."]
  ],
  quiz: [
    ["A cable test shows pins 1 and 2 swapped with 3 and 6 at one end only. The fault is…", ["Attenuation", "Incorrect pin-out / crossed pairs", "EMI", "Duplex mismatch"], 1, "A wiremap fault."],
    ["Which instrument gives a trace showing every connector and splice on a fibre link?", ["OLTS", "OTDR", "Multimeter", "Tone probe"], 1, "OTDR – Tier 2."],
    ["Replacing switch fans every 3 years before they fail is…", ["Reactive maintenance", "Predictive maintenance", "Corrective control", "Rollback"], 1, "Predictive."],
    ["Interference between pairs at the transmitting end is…", ["FEXT", "NEXT", "Jitter", "Latency"], 1, "Near-end crosstalk."],
    ["Which is a business consequence of uncertified cabling?", ["Higher attenuation", "Warranty penalties", "More crosstalk", "Bent pins"], 1, "The others are network/physical."],
    ["Which standard sets requirements for field test instruments?", ["TIA-1152", "IEC 61935-1", "BS EN 50174", "TIA/EIA-568-B.2-1"], 0, "TIA-1152."]
  ]
});

REV.add({
  id: "nc-safety", section: "nc", title: "Standards, legislation and safe working", short: "Safety and compliance",
  spec: "NC 2.19–2.25",
  summary: "Protecting other services, the **BS EN** and international cabling standards, the legislation for site work, what to do about **asbestos**, working at **height** and in **confined spaces**, and installing fixtures and fittings.",
  notes: [
    { h: "Transmission and supporting media", list: [
      "Signals: electrical, light (laser/LED) or wireless – with risks of tampering and signal loss. Segregate from electrical cabling per **BS EN 50174**.",
      "Identify and protect other services: telecoms, security systems (CCTV), alarms, AV systems, WAPs, IoT devices.",
      "Protect them by avoiding shared containment routes, labelling service cables, checking local records and applying change management."
    ]},
    { h: "Standards", table: [
      ["Standard", "Covers"],
      ["BS EN 50173 / EN 50173", "Generic cabling systems (customer premises)"],
      ["BS EN 50174", "Installation specification and quality assurance (incl. segregation)"],
      ["BS EN 50310", "Bonding and earthing"],
      ["BS EN 60825", "Optical fibre / laser safety"],
      ["BS 6701", "Telecommunications installation"],
      ["BS 7671", "Wiring Regulations (electrical installations)"],
      ["IEEE 802.3", "Ethernet"],
      ["IEEE 802.16", "WiMAX"],
      ["IEC 60364", "Electrical installations"],
      ["TIA/EIA-568-B", "Cable categories"],
      ["ISO/IEC 11801", "Generic cabling for customer premises (international)"]
    ]},
    { h: "Legislation", list: [
      "Health and Safety at Work etc. Act 1974", "Electricity at Work Regulations 1989", "Work at Height Regulations 2005", "COSHH Regulations 2002", "Confined Spaces Regulations 1997", "PPE Regulations 2018", "Control of Asbestos Regulations 2012"
    ]},
    { h: "If you suspect asbestos (ACM)", steps: ["**Stop work immediately.**", "Inform the relevant people.", "Isolate and restrict the area.", "Get it investigated by an asbestos-registered professional.", "Act on the findings: removal, sealing or air-quality checks."], after: "Run it through the risk process: identify → analyse → prioritise/mitigate → record." },
    { h: "Working at height and in confined spaces", list: [
      "Apply the risk-management process before working at height, using **MEWPs** safely.",
      "Assemble, inspect, operate and dismantle **low-level access towers** following manufacturer guidance.",
      "The same process applies in confined spaces, with correctly applied and maintained **PPE**, and findings recorded."
    ]},
    { h: "Installing fixtures and fittings", steps: ["Interpret the cabling design specification.", "Compare the site with the spec: space, power, cooling.", "Build/install cabinets and racks per manufacturer guidance.", "Add trunking and containment.", "Test for compliance.", "Arrange equipment in racks to meet the spec."] }
  ],
  cards: [
    ["What does BS EN 50174 cover?", "Cabling installation specification and quality assurance, including segregation from power cables."],
    ["What does BS EN 50310 cover?", "Bonding and earthing."],
    ["What does BS EN 60825 cover?", "Safety of optical fibre/laser equipment."],
    ["What is BS 7671?", "The IET Wiring Regulations for electrical installations."],
    ["What does IEEE 802.3 define?", "Ethernet."],
    ["What does IEEE 802.16 define?", "WiMAX."],
    ["What is the first thing to do if you suspect asbestos?", "Stop work immediately."],
    ["List the asbestos response steps.", "Stop work, inform relevant people, isolate the area, get a registered professional to investigate, act on findings (remove, seal or air checks)."],
    ["Which regulations cover working in a ceiling void or underground duct?", "Confined Spaces Regulations 1997 (plus Work at Height for ceilings as relevant)."],
    ["Name four other services cabling installers must protect.", "Any four: telecoms, CCTV/security, alarms, AV systems, WAPs, IoT devices."],
    ["How do you protect other services on site?", "Avoid shared containment, label service cables, check local records, use change management."],
    ["Which standard covers generic cabling internationally?", "ISO/IEC 11801."]
  ],
  quiz: [
    ["While drilling, an installer finds old textured ceiling material that may contain asbestos. First action?", ["Wear a mask and carry on", "Stop work immediately", "Remove it carefully", "Paint over it"], 1, "Stop, then inform and isolate."],
    ["Which standard covers bonding and earthing?", ["BS EN 50310", "BS EN 50173", "IEEE 802.3", "BS EN 60825"], 0, "50310."],
    ["Which regulations apply to using a scissor lift?", ["COSHH", "Work at Height Regulations 2005", "DSE", "WEEE"], 1, "Working at height."],
    ["Which standard covers laser/fibre safety?", ["BS 7671", "BS EN 60825", "IEC 60364", "TIA-1152"], 1, "60825."],
    ["Running data cable in the same trunking as alarm cables without labels risks…", ["Better performance", "Damaging or disrupting another service", "Lower cost", "PoE"], 1, "Avoid shared containment and label cables."],
    ["Which law covers electrical safety at work?", ["Electricity at Work Regulations 1989", "PPE Regulations 2018", "Confined Spaces Regulations", "CMA 1990"], 0, "Electricity at Work Regulations."]
  ]
});
