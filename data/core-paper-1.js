/* Core Paper 1: Problem solving, introduction to digital support, data */
REV.add({
  id: "p1-comp-thinking", section: "p1", title: "Computational thinking and algorithms", short: "Computational thinking",
  spec: "Core 1.1, 1.2",
  summary: "Computational thinking is a way of tackling a problem so a computer (or a person) can solve it. It has four parts: **decomposition, pattern recognition, abstraction and algorithmic design**.",
  notes: [
    { h: "The four components", table: [
      ["Component", "What it means", "Example in digital support"],
      ["Decomposition", "Breaking a problem or solution into smaller, manageable parts: identify main features, characterise each, split into sub-parts.", "Splitting 'set up a new office network' into cabling, devices, addressing, security and user accounts."],
      ["Pattern recognition", "Spotting trends and similarities within and between problems; finding what a new problem shares with existing solutions; using patterns to predict.", "Noticing that every ticket about slow logins comes from one building."],
      ["Abstraction", "Keeping only the information you need, filtering out detail and hiding internal workings.", "Working out the inputs, outputs, what varies, what stays constant and the repeated actions."],
      ["Algorithmic design", "Writing a precise, step-by-step set of instructions that solves the problem.", "A flowchart for resetting a user's password."]
    ]},
    { h: "Representing decomposition", p: "You can show decomposition with block diagrams, information flow diagrams, flowcharts or written descriptions. Each component has benefits and drawbacks, and you should be able to judge which suits a given problem and explain how the four components link together." },
    { h: "Algorithms", list: [
      "An algorithm is a finite, ordered set of unambiguous steps that solves a problem.",
      "**Flowcharts** use terminators, processes, sub-processes, decisions, inputs/outputs, arrows and labels. Easy to follow visually, but can get large and hard to edit.",
      "**Written descriptions** use hierarchical markers (1, 1.1, 1.2…) to show sequence. Quick to write and edit, but branching is harder to see.",
      "Three **control structures**: **sequence** (steps in order), **selection** (a decision/branch, e.g. IF), **iteration** (repeating, e.g. a loop)."
    ]},
    { h: "What you must be able to do", steps: [
      "Work out what a given algorithm does.",
      "Trace its output for a given input (use a trace table).",
      "Spot and correct errors in it.",
      "Design your own algorithm using sequence, selection and iteration."
    ]}
  ],
  memory: ["**D-P-A-A**: Decompose, find Patterns, Abstract, write the Algorithm.", "**SSI**: Sequence, Selection, Iteration – the three building blocks of any algorithm."],
  cards: [
    ["Name the four components of computational thinking.", "Decomposition, pattern recognition, abstraction and algorithmic design."],
    ["What is decomposition?", "Breaking a problem or solution into smaller, more manageable parts."],
    ["What is abstraction?", "Identifying only the information needed, filtering out unnecessary detail and hiding a system's internal workings."],
    ["What is pattern recognition?", "Spotting similarities and trends within or between problems, so existing solutions can be reused and predictions made."],
    ["Name the three control structures.", "Sequence, selection and iteration."],
    ["Which control structure is a loop?", "Iteration."],
    ["Which control structure is an IF statement?", "Selection."],
    ["Give four ways to represent decomposition.", "Block diagrams, information flow diagrams, flowcharts and written descriptions."],
    ["When using abstraction, what four things should you identify?", "Inputs needed, expected outputs/outcomes, what varies vs stays constant, and key or repeated actions."],
    ["Give one benefit and one drawback of a flowchart.", "Benefit: easy to follow the logic visually. Drawback: becomes large and hard to edit for complex algorithms."],
    ["Which flowchart symbol is a self-contained group of steps treated as one?", "The sub-process."],
    ["How do written algorithm descriptions show sequence?", "With hierarchical markers, e.g. 1, 1.1, 1.2, 2."]
  ],
  quiz: [
    ["A technician removes details that don't affect the solution and focuses on inputs and outputs. Which component is this?", ["Decomposition", "Abstraction", "Pattern recognition", "Iteration"], 1, "Abstraction filters out unnecessary detail."],
    ["Noticing that a new fault looks like one solved last month is an example of…", ["Abstraction", "Pattern recognition", "Decomposition", "Selection"], 1, "Pattern recognition finds common features with existing solutions."],
    ["Which control structure repeats a set of steps?", ["Sequence", "Selection", "Iteration", "Decomposition"], 2, "Iteration means looping."],
    ["Which flowchart symbol would you use for 'Is the password correct?'", ["Process", "Decision", "Input/output", "Terminator"], 1, "A yes/no condition is a decision."],
    ["Breaking 'build a website' into design, content, hosting and testing is…", ["Abstraction", "Algorithmic design", "Decomposition", "Pattern recognition"], 2, "Splitting a problem into sub-parts is decomposition."],
    ["Which is a drawback of a written algorithm description compared with a flowchart?", ["It can't show sequence", "Branching logic is harder to see at a glance", "It needs special software", "It can't be edited"], 1, "Written steps are quick to edit but decisions and loops are less visual."],
    ["What is the best way to check what an algorithm outputs for a given input?", ["Rewrite it", "Trace it step by step", "Decompose it", "Convert it to a DFD"], 1, "Tracing (often with a trace table) shows the value at each step."]
  ],
  exam: [
    { q: "Explain how decomposition could help a support team plan the move of a company to a new office.", marks: 4, points: [
      "Breaks the move into smaller tasks (e.g. network cabling, hardware relocation, user accounts, testing)…",
      "…so each task is more manageable / easier to understand.",
      "Tasks can be allocated to different team members / worked on in parallel…",
      "…which speeds up the project / uses specialist skills.",
      "Makes it easier to estimate time and cost for each part / spot dependencies."
    ]},
    { q: "Describe the three control structures used in algorithms.", marks: 3, points: [
      "Sequence: instructions carried out one after another in order.",
      "Selection: a decision chooses which path to follow based on a condition.",
      "Iteration: a set of instructions is repeated (a loop) until a condition is met or a set number of times."
    ]}
  ]
});

REV.add({
  id: "p1-strategies", section: "p1", title: "Problem-solving strategies and incident management", short: "Strategies",
  spec: "Core 1.3",
  summary: "Choosing the right approach to a problem: top-down, bottom-up or modularisation; finding the **root cause** rather than treating symptoms; and the difference between an **incident** and a **problem**.",
  notes: [
    { h: "Three problem-solving approaches", table: [
      ["Approach", "How it works", "Good for"],
      ["Top-down", "Start with the whole problem and break it down into smaller parts.", "Large problems where the overall goal is clear."],
      ["Bottom-up", "Start with small, detailed parts and combine them into the whole.", "When existing components can be reused or the detail is well understood."],
      ["Modularisation", "Split the solution into self-contained modules that can be built and tested separately.", "Team work, reuse and easier testing/maintenance."]
    ]},
    { h: "Root cause analysis", list: [
      "Finds the **underlying cause** of a problem, not just its symptoms.",
      "**Five whys** – keep asking 'why?' (around five times) until you reach the root cause.",
      "**FMEA (Failure Mode and Effects Analysis)** – list the ways each part could fail and the effect of each failure.",
      "**ETA (Event Tree Analysis)** – start from an initiating event and map the possible outcomes that follow.",
      "Once found, the root cause is **logged, closed, or escalated** to a manager, specialist or third party."
    ]},
    { h: "High-level problem-solving strategy", steps: ["Define the problem", "Gather information", "Analyse the information", "Make a plan of action", "Implement a solution", "Review the solution"] },
    { h: "Incidents and problems", list: [
      "A **digital incident** is a single unplanned event that disrupts service and lowers service quality (e.g. the email server goes down).",
      "A **digital problem** is the underlying **cause** of one or more incidents (e.g. a failing disk in the server).",
      "Incident management has three stages: **Detection** (report, record, prioritise) → **Response** (identify owner, resolve and restore, record resolution) → **Intelligence** (record lessons, identify cause, share lessons)."
    ]}
  ],
  memory: ["Incident = the **symptom** you can see. Problem = the **cause** underneath.", "Incident management: **D-R-I** – Detect, Respond, learn (Intelligence)."],
  cards: [
    ["What is the difference between a digital incident and a digital problem?", "An incident is a single unplanned event that disrupts service. A problem is the underlying cause of incidents."],
    ["Name the three stages of incident management.", "Detection, response and intelligence."],
    ["What happens in the detection stage of incident management?", "The incident is reported, recorded and prioritised."],
    ["What happens in the intelligence stage of incident management?", "Lessons are recorded, the cause identified and lessons shared."],
    ["What is the 'five whys' technique?", "Repeatedly asking 'why?' about a problem until you reach its root cause."],
    ["What does FMEA stand for?", "Failure Mode and Effects Analysis."],
    ["What does ETA stand for in root cause analysis?", "Event Tree Analysis – mapping the possible outcomes from an initiating event."],
    ["After finding a root cause, what three actions can follow?", "Log it, close it, or escalate it to a manager, specialist or third party."],
    ["List the six steps of the high-level problem-solving strategy.", "Define the problem, gather information, analyse it, plan action, implement a solution, review the solution."],
    ["What is the top-down approach?", "Starting with the whole problem and breaking it into smaller parts."],
    ["What is the bottom-up approach?", "Starting with the detailed parts and combining them to build the whole solution."],
    ["Give a benefit of modularisation.", "Modules can be built and tested separately, shared between team members and reused."]
  ],
  quiz: [
    ["Users can't print. The cause is a failed print server service. Which is the problem?", ["Users can't print", "The failed print service", "The helpdesk ticket", "The users"], 1, "The problem is the underlying cause; 'can't print' is the incident."],
    ["Which technique asks 'why?' repeatedly?", ["FMEA", "ETA", "Five whys", "Kanban"], 2, "Five whys drills down to the root cause."],
    ["Which is the first stage of incident management?", ["Response", "Intelligence", "Detection", "Review"], 2, "Detection: report, record, prioritise."],
    ["Recording lessons learned belongs to which incident stage?", ["Detection", "Response", "Intelligence", "Escalation"], 2, "Intelligence records and shares lessons."],
    ["Building a solution from existing, tested components is…", ["Top-down", "Bottom-up", "Abstraction", "Five whys"], 1, "Bottom-up starts with the detailed parts."],
    ["What comes immediately after 'gather information' in the problem-solving strategy?", ["Define the problem", "Analyse the information", "Implement a solution", "Review"], 1, "Define → gather → analyse → plan → implement → review."],
    ["Which root cause technique lists each way a component could fail and its effects?", ["ETA", "FMEA", "Five whys", "Gantt"], 1, "Failure Mode and Effects Analysis."]
  ],
  exam: [
    { q: "A school's Wi-Fi drops several times a day. Explain the difference between the incident and the problem in this situation.", marks: 4, points: [
      "The incident is each time the Wi-Fi drops / users lose connection…",
      "…a single unplanned event that disrupts the service.",
      "The problem is the underlying cause of the drops (e.g. faulty access point, interference, DHCP pool running out)…",
      "…which must be found (e.g. by root cause analysis) to stop the incidents recurring."
    ]}
  ]
});

REV.add({
  id: "p1-reflective", section: "p1", title: "Reflective practice, concept maps and design thinking", short: "Reflective practice",
  spec: "Core 2.10",
  summary: "Strategies for responding to support issues: two **reflective cycles** (Kolb and Gibbs), **concept mapping** and the **design thinking** process.",
  notes: [
    { h: "Kolb's Experiential Learning Cycle", steps: ["**Concrete experience** – doing something", "**Reflective observation** – reviewing what happened", "**Abstract conceptualisation** – drawing conclusions and learning from it", "**Active experimentation** – trying out what you learned"] },
    { h: "Gibbs' Reflective Cycle", steps: ["Description – what happened?", "Feelings – what were you thinking and feeling?", "Evaluation – what was good and bad?", "Analysis – what sense can you make of it?", "Conclusion – what else could you have done?", "Action plan – what will you do next time?"] },
    { h: "Concept mapping", p: "A concept map has a **main idea** in the middle, linked to individual concepts – **hardware, software, people, information, processes** – with each link labelled by a **verb** describing the relationship (e.g. *Server – stores → Data*)." },
    { h: "Design thinking", steps: ["Empathise", "Define", "Ideate", "Prototype", "User feedback", "Repeat"], after: "It is user-centred and iterative: you go round again using what users tell you." }
  ],
  memory: ["Kolb has **4** stages, Gibbs has **6**.", "Gibbs: **D**on't **F**orget **E**very **A**nswer **C**ounts **A**lways – Description, Feelings, Evaluation, Analysis, Conclusion, Action plan.", "Design thinking: **E-D-I-P-F** then repeat – Empathise, Define, Ideate, Prototype, Feedback."],
  cards: [
    ["List the four stages of Kolb's Experiential Learning Cycle.", "Concrete experience, reflective observation, abstract conceptualisation, active experimentation."],
    ["List the six stages of Gibbs' Reflective Cycle.", "Description, feelings, evaluation, analysis, conclusion, action plan."],
    ["Which reflective model includes a 'feelings' stage?", "Gibbs' Reflective Cycle."],
    ["In Kolb's cycle, what is active experimentation?", "Trying out what you have learned in a new situation."],
    ["What five types of concept are linked in a digital support concept map?", "Hardware, software, people, information and processes."],
    ["How are relationships labelled in a concept map?", "With a verb."],
    ["List the stages of the design thinking process.", "Empathise, define, ideate, prototype, user feedback, repeat."],
    ["Why is design thinking described as iterative?", "It repeats the cycle using user feedback to improve the solution each time."],
    ["What is the first stage of design thinking and why?", "Empathise – understanding the user's needs and experience before defining the problem."]
  ],
  quiz: [
    ["Which stage comes straight after 'Evaluation' in Gibbs' cycle?", ["Feelings", "Analysis", "Conclusion", "Action plan"], 1, "Description, Feelings, Evaluation, Analysis, Conclusion, Action plan."],
    ["Which model has exactly four stages?", ["Gibbs", "Kolb", "Design thinking", "Five whys"], 1, "Kolb: experience, reflect, conceptualise, experiment."],
    ["'Abstract conceptualisation' means…", ["Doing the task", "Drawing conclusions and learning from the experience", "Planning a project", "Writing an algorithm"], 1, "It's where you make sense of the experience."],
    ["In design thinking, generating lots of possible solutions is called…", ["Empathise", "Define", "Ideate", "Prototype"], 2, "Ideate means producing ideas."],
    ["A concept map link 'Router – forwards → Packets' uses which kind of word as the link?", ["Noun", "Verb", "Adjective", "Symbol"], 1, "Relationships are always verbs."],
    ["Which Gibbs stage asks 'What will you do differently next time?'", ["Conclusion", "Action plan", "Evaluation", "Description"], 1, "The action plan sets out future actions."]
  ],
  exam: [
    { q: "A technician has just finished a difficult call with an upset user. Describe how they could use Gibbs' Reflective Cycle to improve.", marks: 6, points: [
      "Description: record what happened on the call.",
      "Feelings: note how they felt (e.g. stressed) and how the user felt.",
      "Evaluation: identify what went well and what went badly.",
      "Analysis: work out why (e.g. used too much jargon, didn't listen actively).",
      "Conclusion: decide what else they could have done.",
      "Action plan: set specific actions for next time (e.g. de-escalation training, open questions)."
    ]}
  ]
});

REV.add({
  id: "p1-infra", section: "p1", title: "Infrastructure, cabling and unified communications", short: "Infrastructure",
  spec: "Core 2.1, 2.2, 2.3",
  summary: "Reading **routing tables** and TCP/IP settings, configuring **firewall** rules, choosing **cable types and categories**, and understanding **VoIP, SIP** and the network metrics that affect call quality.",
  notes: [
    { h: "Routing tables and TCP/IP", list: [
      "A routing table tells a router where to send packets. Fields include **network ID**, **subnet mask**, **next hop** (the next router to send to), **interface** (which port to use) and whether routes are **static** (set manually) or **dynamic** (learned by a routing protocol).",
      "`ipconfig` (Windows) and `ifconfig` (Linux/macOS) show a device's TCP/IP configuration: IP address, subnet mask, default gateway and more."
    ]},
    { h: "Firewalls", list: [
      "A firewall filters traffic in and out of a network or device using rules.",
      "Rules **ALLOW** or **BLOCK** traffic and are applied in order of **precedence** – usually the first matching rule wins, so specific rules go above general ones.",
      "The firewall's **administrator access** must itself be secured (strong password, restricted access)."
    ]},
    { h: "Cable types", table: [
      ["Cable", "Description", "Typical use"],
      ["UTP", "Unshielded twisted pair – twisting reduces interference.", "Most office LANs."],
      ["STP", "Shielded twisted pair – extra shielding against EMI.", "Electrically noisy areas, e.g. near machinery."],
      ["Coaxial", "Copper core, insulator, braided shield.", "Cable TV, broadband, CCTV."],
      ["Fibre-optic", "Light through glass/plastic; immune to EMI.", "Long distances, backbones, high bandwidth."]
    ], after: "**Ethernet** is the standard family of technologies for wired LANs." },
    { h: "Cable categories", table: [
      ["Category", "Typical bandwidth", "Max length", "Trade-off"],
      ["CAT 5e", "Up to 1 Gbps (100 MHz)", "100 m", "Cheapest, fine for most desks."],
      ["CAT 6", "Up to 10 Gbps over short runs (250 MHz)", "100 m (≈55 m at 10 Gbps)", "Faster, slightly dearer and stiffer."],
      ["CAT 7", "10 Gbps (600 MHz), shielded", "100 m", "Highest performance, most expensive, harder to install."]
    ]},
    { h: "Unified communications", list: [
      "**VoIP (Voice over IP)** carries voice calls over an IP network.",
      "**SIP (Session Initiation Protocol)** sets up, manages and ends VoIP sessions – VoIP uses SIP to start and end calls.",
      "Quality depends on **speed, bandwidth, latency** (delay), **jitter** (variation in delay) and **packet loss**.",
      "A **codec** compresses and decompresses data: MPEG-4 (video), MP3 (lossy audio), FLAC (lossless audio)."
    ]}
  ],
  memory: ["Jitter is **jumpy** latency: the delay keeps changing, so voices sound choppy."],
  cards: [
    ["What is the 'next hop' in a routing table?", "The address of the next router a packet should be sent to on its way to the destination."],
    ["What is the difference between a static and a dynamic route?", "A static route is entered manually; a dynamic route is learned automatically by a routing protocol."],
    ["Which command shows TCP/IP configuration on Windows?", "`ipconfig` (on Linux/macOS: `ifconfig`)."],
    ["Why does firewall rule order matter?", "Rules are applied by precedence – usually the first matching rule decides – so a broad ALLOW above a specific BLOCK would let the traffic through."],
    ["What does STP stand for and when is it used?", "Shielded twisted pair, used where there is a lot of electromagnetic interference."],
    ["Give two advantages of fibre-optic cable.", "Longer distances, higher bandwidth, immune to electromagnetic interference."],
    ["What is the maximum length of a CAT 5e/6/7 Ethernet run?", "100 metres."],
    ["What is VoIP?", "Voice over Internet Protocol – making voice calls over an IP network."],
    ["How does SIP relate to VoIP?", "SIP is the signalling protocol VoIP uses to set up, manage and end call sessions."],
    ["What is jitter?", "Variation in latency (delay) between packets, causing choppy audio or video."],
    ["What is latency?", "The delay for data to travel from source to destination."],
    ["What is a codec?", "Software or hardware that compresses and decompresses (encodes/decodes) audio or video data."],
    ["Give an example of a lossless audio codec.", "FLAC."],
    ["Name the five metrics that affect unified communications quality.", "Speed, bandwidth, latency, jitter, packet loss."]
  ],
  quiz: [
    ["Which protocol sets up and tears down VoIP calls?", ["SMTP", "SIP", "DHCP", "FTP"], 1, "Session Initiation Protocol."],
    ["Callers say voices keep breaking up unevenly. Which metric is most likely the cause?", ["Bandwidth", "Jitter", "Speed", "Cable category"], 1, "Jitter (uneven delay) causes choppy audio."],
    ["Which cable is immune to electromagnetic interference?", ["UTP", "STP", "Coaxial", "Fibre-optic"], 3, "Fibre uses light, not electrical signals."],
    ["Which is a lossless audio codec?", ["MP3", "MPEG-4", "FLAC", "SIP"], 2, "FLAC keeps all the original audio data."],
    ["A firewall has 'ALLOW all' at the top and 'BLOCK port 23' below it. What happens to port 23 traffic?", ["Blocked", "Allowed", "Dropped randomly", "Logged only"], 1, "The first matching rule (ALLOW all) takes precedence."],
    ["Which routing table field identifies which router port to send traffic out of?", ["Next hop", "Interface", "Subnet mask", "Network ID"], 1, "The interface designation is the outgoing port."],
    ["Which cable category is shielded and rated to 600 MHz?", ["CAT 5e", "CAT 6", "CAT 7", "CAT 3"], 2, "CAT 7 is shielded, 600 MHz."]
  ],
  exam: [
    { q: "A small firm plans to switch to VoIP phones. Explain two network factors that could reduce call quality.", marks: 4, points: [
      "Latency / delay – causes a lag so people talk over each other.",
      "Jitter – uneven delay makes speech choppy or broken.",
      "Packet loss – missing packets cause gaps or dropped words.",
      "Insufficient bandwidth – calls compete with other traffic, reducing quality (QoS may be needed)."
    ], note: "Two factors, each with a linked consequence, for 4 marks." }
  ]
});

REV.add({
  id: "p1-support-testing", section: "p1", title: "Supporting users and testing systems", short: "Support and testing",
  spec: "Core 2.4, 2.5",
  summary: "Selecting and configuring **hardware, operating systems and software** to suit users, interpreting **fault indicators**, and the many **testing methods**, test data types and test plans.",
  notes: [
    { h: "Matching technology to users", list: [
      "**Hardware**: cores, memory, storage, clock speed, connectivity.",
      "**Operating systems**: graphical or text-based, multi-tasking, single or multi-user, virtual machine.",
      "**Software**: database, spreadsheet, word processor, presentation, communication, browser.",
      "You should be able to select, configure and test each, and justify why it suits the user."
    ]},
    { h: "Fault indicators", p: "**Error numbers, error messages, beep codes** (sounds at start-up, e.g. memory fault) and **blink codes** (LED patterns). Interpret them alongside technical documentation such as manuals to diagnose hardware and software faults." },
    { h: "Testing methods", table: [
      ["Test", "What it checks"],
      ["Concept", "Whether the idea is viable before building it."],
      ["Unit", "A single component or module on its own."],
      ["Boundary", "Values at the edges of valid ranges."],
      ["Integration", "That components work together once combined."],
      ["Performance", "Speed and responsiveness."],
      ["System", "The whole system against the requirements."],
      ["Acceptance", "That the user/client accepts it meets their needs."],
      ["Usability", "How easy it is for users."],
      ["Regression", "That a change hasn't broken something that used to work."],
      ["Load / stress", "Behaviour under expected heavy load / beyond normal limits."],
      ["Closed box (black box)", "Inputs and outputs only, without seeing the code."],
      ["Open box (white box)", "Tests based on knowledge of the internal code/logic."]
    ], after: "Components (software, hardware, data, interfaces, the final service) are tested **before integration** so faults are found early and pinned to one part." },
    { h: "Test data", table: [
      ["Type", "Meaning", "Example for an age field accepting 16–19"],
      ["Valid (normal)", "Data that should be accepted.", "17"],
      ["Boundary", "Values at the edge of the range.", "16 and 19 (and 15 / 20 just outside)"],
      ["Invalid", "Correct type but outside the rules.", "25"],
      ["Erroneous", "Wrong type of data altogether.", "'seventeen'"]
    ]},
    { h: "Test plans", steps: ["Identify the tests", "Describe the purpose of each", "Identify the test data", "Describe the expected results", "Record the actual results"], after: "Check results are believable through **logical reasoning** (unbiased, relevant inputs; results that make sense), **verification by a subject matter expert**, and using test plans. Repetitive testing can be **automated** with macros and scripts." }
  ],
  memory: ["Test data: **V-B-I-E** – Valid, Boundary, Invalid, Erroneous.", "Regression = 'did we go **backwards**?'"],
  cards: [
    ["What are beep codes and blink codes?", "Patterns of beeps or LED flashes (often at start-up) that indicate a specific hardware fault."],
    ["What is unit testing?", "Testing a single component or module on its own."],
    ["What is integration testing?", "Testing that separately built components work correctly together."],
    ["What is regression testing?", "Re-testing after a change to make sure existing features still work."],
    ["What is acceptance testing?", "Testing by or with the client/user to confirm the system meets their requirements."],
    ["What is the difference between closed box and open box testing?", "Closed box tests inputs/outputs without seeing the code; open box uses knowledge of the internal code."],
    ["What is the difference between load and stress testing?", "Load tests behaviour under expected heavy use; stress tests beyond normal limits to find the breaking point."],
    ["Name the four types of test data.", "Valid, invalid, boundary and erroneous."],
    ["What is erroneous test data?", "Data of the wrong type, e.g. text entered in a number field."],
    ["List the five parts of a test plan.", "Tests, purpose, test data, expected results, actual results."],
    ["Why test components before integrating them?", "Faults are found earlier, are cheaper to fix and can be traced to a single component."],
    ["How can you check test results are believable?", "Logical reasoning (unbiased, relevant inputs, results make sense), verification by a subject matter expert, and following a test plan."],
    ["How can repetitive testing be automated?", "With macros and scripts."]
  ],
  quiz: [
    ["After a security patch, a technician checks that payroll still works. This is…", ["Unit testing", "Regression testing", "Usability testing", "Concept testing"], 1, "Regression testing checks nothing has broken after a change."],
    ["A field accepts 1–100. Which is boundary test data?", ["50", "100", "'abc'", "250"], 1, "100 is at the edge of the range."],
    ["Entering 'hello' into a date field is which kind of test data?", ["Valid", "Boundary", "Invalid", "Erroneous"], 3, "Erroneous data is the wrong type entirely."],
    ["Testing a website with 10,000 simulated users at once is…", ["Usability testing", "Load testing", "Unit testing", "Concept testing"], 1, "Load testing checks behaviour under heavy expected use."],
    ["Which test is carried out by the client to confirm requirements are met?", ["Acceptance", "Integration", "Open box", "Boundary"], 0, "Acceptance testing is sign-off by the user/client."],
    ["Which test uses knowledge of the internal code?", ["Closed box", "Open box", "Acceptance", "Usability"], 1, "Open (white) box testing looks inside."],
    ["Which column in a test plan is filled in last?", ["Expected result", "Test data", "Actual result", "Purpose"], 2, "Actual results are recorded once the test is run."],
    ["A PC beeps three times at start-up. What should the technician do first?", ["Reinstall the OS", "Look up the beep code in the motherboard documentation", "Replace the PSU", "Run a regression test"], 1, "Beep codes are interpreted using technical documentation."]
  ],
  exam: [
    { q: "A college is adding an online form where students enter their age (16 to 19). Identify suitable test data for each type of test data and justify each choice.", marks: 4, points: [
      "Valid: e.g. 17 – should be accepted.",
      "Boundary: e.g. 16 or 19 (or 15/20) – checks the edges of the range are handled correctly.",
      "Invalid: e.g. 25 – right type but outside the range, should be rejected.",
      "Erroneous: e.g. 'eighteen' – wrong data type, should be rejected."
    ]}
  ]
});

REV.add({
  id: "p1-data-support", section: "p1", title: "Using data and diagrams in digital support", short: "Data and diagrams",
  spec: "Core 2.6, 2.7",
  summary: "Organising and interrogating tabular data with **validation checks**, sorting, filtering and **spreadsheet functions**, and reading and drawing **data flow** and **information flow diagrams**.",
  notes: [
    { h: "Tabular data", p: "Data in a spreadsheet is organised into **worksheets**, **rows** (records) and **columns** (fields)." },
    { h: "Validation checks", table: [
      ["Check", "What it does", "Example"],
      ["Presence", "Field must not be left blank.", "Email address required."],
      ["Length", "Number of characters is within limits.", "Password at least 12 characters."],
      ["Range", "Value is between limits.", "Age 16–19."],
      ["Type", "Data is the correct type.", "Quantity must be a whole number."],
      ["Format", "Data matches a pattern.", "Postcode like LS1 4AP."]
    ], after: "Validation checks data is **reasonable**, not that it is **correct** – that's verification." },
    { h: "Interrogating data", list: [
      "**Order, sort and filter** by field.",
      "**Arithmetic functions**: `SUM`, `MIN`, `MAX`, `AVERAGE`.",
      "**Logical functions**: `IF` (returns one value if a condition is true, another if false), `COUNTIF` (counts cells meeting a condition).",
      "Text-based files (e.g. CSV) are used to **save and import** data between systems."
    ]},
    { h: "Diagrams in digital support", list: [
      "**Data flow diagrams (DFDs)**: data sources and destinations, processes, data stores, arrows and labels.",
      "**Information flow diagrams**: boxes, arrows and labels showing information moving between a source and a destination.",
      "You must be able to interpret existing diagrams and create or complete your own."
    ]}
  ],
  cards: [
    ["Name five validation checks.", "Presence, length, range, type and format."],
    ["What does a presence check do?", "Makes sure a field has not been left blank."],
    ["What does a format check do?", "Checks data matches a set pattern, e.g. a postcode or date format."],
    ["Does validation guarantee data is correct?", "No. It only checks data is reasonable/allowed; a valid but wrong value can still get through."],
    ["What does `COUNTIF` do?", "Counts the cells in a range that meet a given condition."],
    ["What does `IF` do?", "Returns one value if a condition is true and another if it's false."],
    ["Write a formula to find the highest value in B2:B20.", "`=MAX(B2:B20)`"],
    ["In a spreadsheet, what do rows and columns usually represent?", "Rows are records; columns are fields."],
    ["Why save data as a text-based file such as CSV?", "So it can be imported into or exchanged with other systems and software."],
    ["What are the components of a DFD?", "Data sources/destinations, processes, data stores, and labelled arrows."]
  ],
  quiz: [
    ["Which check stops a postcode being entered as '12345'?", ["Presence", "Range", "Format", "Length"], 2, "Format checks the pattern of characters."],
    ["Which function counts how many tickets are marked 'Open'?", ["SUM", "COUNTIF", "MAX", "AVERAGE"], 1, "COUNTIF counts cells meeting a condition."],
    ["Which check ensures a mark is between 0 and 100?", ["Type", "Range", "Presence", "Format"], 1, "Range checks upper and lower limits."],
    ["`=IF(C2>=40,\"Pass\",\"Fail\")` returns what when C2 is 40?", ["Pass", "Fail", "40", "An error"], 0, "40 >= 40 is true, so 'Pass'."],
    ["In a DFD, a customer who sends an order into the system is a…", ["Data store", "Process", "Data source", "Decision"], 2, "External entities supplying data are sources."],
    ["Which statement about validation is true?", ["It proves data is accurate", "It checks data follows rules", "It checks data against the original document", "It encrypts data"], 1, "Validation checks rules; verification checks accuracy."]
  ],
  exam: [
    { q: "A helpdesk logs tickets in a spreadsheet with columns Ticket ID, Date, Category, Status and Minutes to resolve. Describe how the technician could use spreadsheet functions to report on the team's performance.", marks: 4, points: [
      "AVERAGE on Minutes to resolve to find mean resolution time.",
      "MAX/MIN to find longest/shortest resolution time.",
      "COUNTIF on Status to count open vs closed tickets / on Category to find common faults.",
      "SUM to find total time spent.",
      "Sort/filter by Date or Category to find trends / IF to flag tickets over an SLA target."
    ]}
  ]
});

REV.add({
  id: "p1-risk-pm", section: "p1", title: "Risk assessment and project management", short: "Risk and projects",
  spec: "Core 2.8, 2.9",
  summary: "Building a **5×5 risk matrix**, writing risk assessment documentation, and comparing **Waterfall** and **Agile** projects along with PERT, precedence tables, Gantt charts, Kanban and Critical Path Analysis.",
  notes: [
    { h: "The 5×5 risk matrix", table: [
      ["Scale", "1", "2", "3", "4", "5"],
      ["Likelihood", "Improbable", "Remote", "Occasional", "Probable", "Frequent"],
      ["Severity", "Negligible", "Marginal", "Moderate", "Critical", "Catastrophic"]
    ], after: "Risk score = likelihood × severity (1–25). Higher scores need action first." },
    { h: "Risk assessment documentation", p: "Exists to ensure **continuity of service, health and safety** and **regulatory compliance**. It records:", list: [
      "a description of the risk", "who or what could be harmed", "how the harm could occur", "mitigations already in place", "further mitigation needed", "who is responsible", "the due date"
    ]},
    { h: "Waterfall vs Agile", table: [
      ["", "Waterfall", "Agile"],
      ["How it works", "Linear stages (requirements → design → build → test → deploy), each finished before the next.", "Short iterations (sprints) delivering working parts, with frequent feedback."],
      ["Benefits", "Clear plan, fixed scope, easy to measure progress, good documentation.", "Flexible to change, early delivery, close customer involvement."],
      ["Drawbacks", "Hard to change once started; problems found late; customer sees product late.", "Harder to predict cost and deadline; needs committed customer; less documentation."],
      ["Suits", "Fixed, well-understood requirements (e.g. cabling installation).", "Changing or unclear requirements (e.g. new app)."]
    ]},
    { h: "Project management techniques", list: [
      "**Gantt chart** – tasks as bars against a timeline, showing duration, overlap and progress.",
      "**PERT chart** – network of tasks and milestones with optimistic, likely and pessimistic time estimates.",
      "**Precedence table** – lists each task, its duration and which tasks must finish first (dependencies).",
      "**Critical Path Analysis (CPA)** – finds the longest chain of dependent tasks; any delay on it delays the whole project. Tasks off it have **float** (slack).",
      "**Kanban** – board with columns (e.g. To do / Doing / Done) to visualise workflow and limit work in progress."
    ]}
  ],
  memory: ["Critical path = the **longest** route through the project. It sets the **shortest** possible finish time."],
  cards: [
    ["What are the two axes of the risk matrix?", "Likelihood and severity, each on a 1–5 scale."],
    ["List the five likelihood levels from lowest to highest.", "Improbable, remote, occasional, probable, frequent."],
    ["List the five severity levels from lowest to highest.", "Negligible, marginal, moderate, critical, catastrophic."],
    ["How is a risk score calculated on a 5×5 matrix?", "Likelihood × severity."],
    ["Give three reasons for risk assessment documentation.", "Continuity of service, health and safety, regulatory compliance."],
    ["What seven things does a risk assessment record?", "Risk description, who/what could be harmed, how, existing mitigations, further mitigation, who is responsible, due date."],
    ["What is the critical path?", "The longest sequence of dependent tasks; a delay to any of them delays the whole project."],
    ["What is float (slack)?", "How long a non-critical task can be delayed without delaying the project."],
    ["What does a Gantt chart show?", "Tasks as bars against a timeline, showing start, duration, overlap and progress."],
    ["What does a precedence table show?", "Each task, its duration and the tasks that must be completed before it can start."],
    ["What is Kanban?", "A visual board of columns (e.g. To do, Doing, Done) used to manage workflow and limit work in progress."],
    ["Give one drawback of Waterfall.", "Hard to change requirements once a stage is complete; problems may only appear late in testing."],
    ["Give one benefit of Agile.", "It adapts easily to changing requirements and delivers working parts early."]
  ],
  quiz: [
    ["A risk has likelihood 4 and severity 5. What is its score?", ["9", "20", "1", "45"], 1, "4 × 5 = 20, a very high risk."],
    ["Which severity level is the highest?", ["Critical", "Catastrophic", "Moderate", "Frequent"], 1, "Catastrophic is 5. 'Frequent' is a likelihood level."],
    ["Which technique identifies tasks that cannot be delayed without delaying the project?", ["Kanban", "Critical Path Analysis", "Five whys", "Gibbs"], 1, "CPA finds the critical path."],
    ["Which methodology suits a project with frequently changing requirements?", ["Waterfall", "Agile", "Critical path", "Precedence"], 1, "Agile embraces change through short iterations."],
    ["A board with To do / Doing / Done columns is…", ["Gantt", "PERT", "Kanban", "Precedence table"], 2, "Kanban visualises workflow."],
    ["Which chart uses optimistic, most likely and pessimistic time estimates?", ["PERT", "Gantt", "Kanban", "Risk matrix"], 0, "PERT uses three-point estimates."],
    ["Which of these is NOT normally recorded on a risk assessment?", ["Who is responsible", "Due date", "The project's profit margin", "Existing mitigations"], 2, "Profit isn't part of the risk record."]
  ],
  exam: [
    { q: "Evaluate whether a Waterfall or Agile approach would be more suitable for developing a new staff booking app where managers are unsure of exactly what features they want.", marks: 6, points: [
      "Waterfall gives a clear plan, fixed stages and documentation, making cost and deadline easier to predict.",
      "But Waterfall needs requirements fixed at the start – here managers are unsure, so changes would be costly and late.",
      "Agile delivers working versions in short sprints so managers can see and refine features.",
      "Agile's frequent feedback reduces the risk of building the wrong thing.",
      "Agile drawbacks: harder to predict final cost/time; needs managers to stay involved.",
      "Judgement: Agile is more suitable because requirements are unclear and likely to change."
    ], note: "Top marks need both sides weighed and a justified conclusion linked to the scenario." }
  ]
});

REV.add({
  id: "p1-sources", section: "p1", title: "Sources of knowledge", short: "Sources",
  spec: "Core 2.11",
  summary: "Where support staff find information and how to judge whether it can be trusted.",
  notes: [
    { h: "Categories of source", table: [
      ["Category", "Examples"],
      ["Literature", "Textbooks, manuals, supplier literature"],
      ["Professionals", "Conferences, managers, colleagues"],
      ["Websites", "Wikis, blogs, forums"],
      ["Media", "Social media, podcasts, video"],
      ["Observation", "Dashboards, inspection"]
    ]},
    { h: "Judging reliability and validity", list: [
      "**Bias / subjectivity** – is the author trying to sell or persuade?",
      "**Evidence / expertise** – is it backed by evidence and written by someone qualified?",
      "**Publication date** – is it current? Technology changes fast.",
      "**Corroboration** – do other independent sources agree?"
    ]}
  ],
  cards: [
    ["Name the five categories of sources of knowledge.", "Literature, professionals, websites, media and observation."],
    ["Give two examples of observation as a source of knowledge.", "Dashboards and physical inspection."],
    ["What four factors judge a source's reliability?", "Bias/subjectivity, evidence/expertise, publication date, corroboration by other sources."],
    ["What is corroboration?", "Checking that other independent sources agree with a claim."],
    ["Why is publication date important for digital sources?", "Technology, threats and best practice change quickly, so old sources may be wrong or unsafe."]
  ],
  quiz: [
    ["A vendor's blog says its own firewall is the best on the market. The main concern is…", ["Publication date", "Bias", "Corroboration", "Format"], 1, "The author has a commercial interest."],
    ["Checking a forum answer against the manufacturer's manual is…", ["Abstraction", "Corroboration", "Decomposition", "Validation"], 1, "Corroboration means confirming with other sources."],
    ["A network monitoring dashboard is which category of source?", ["Literature", "Media", "Observation", "Professionals"], 2, "Dashboards and inspection are observation."],
    ["Which is the strongest reason to distrust a 2009 guide to configuring Wi-Fi security?", ["It's a PDF", "It's out of date", "It's too long", "It has diagrams"], 1, "Older guidance may recommend now-insecure settings like WEP."]
  ]
});

REV.add({
  id: "p1-data-fund", section: "p1", title: "Data fundamentals", short: "Data basics",
  spec: "Core 3.1–3.6",
  summary: "The difference between **data, information and knowledge**, where data comes from, how it's classified (**taxonomy**), common **data types** and **formats**, and how it's **stored**.",
  notes: [
    { h: "Data, information, knowledge", list: [
      "**Data** – raw facts and figures with no context (e.g. 38.2).",
      "**Information** – data given context and meaning (e.g. 'server room temperature is 38.2°C').",
      "**Knowledge** – understanding gained from information that lets you act (e.g. 'above 35°C the servers may overheat, so check the air conditioning')."
    ]},
    { h: "Sources of data", table: [
      ["Source", "Examples"],
      ["Human", "Surveys, forms"],
      ["AI / machine learning", "Generated predictions – beware **feedback loops** where outputs are fed back as inputs and amplify errors or bias"],
      ["Sensors", "Temperature, accelerometer, vibration, sound, light, pressure"],
      ["IoT", "Smart thermostats, lights, security cameras, trackers"],
      ["Transactions", "Customer data, membership, timing, basket"]
    ], after: "The **value** of data depends on quantity, timeframe, source and veracity, and it must be handled ethically. Organisations use it for pattern analysis, system performance monitoring (load, outage, throughput, status), user monitoring, targeted marketing and assessing threats and opportunities." },
    { h: "Transforming data", p: "Data is transformed by **manipulating** (sorting, filtering, combining), **analysing** (finding patterns and meaning) and **processing** (performing operations to produce output)." },
    { h: "Data taxonomy", list: [
      "**Quantitative (structured)** – numbers and measurable values. Can be **discrete** (countable whole values, e.g. number of tickets), **continuous** (any value in a range, e.g. temperature) or **categorical** (groups, e.g. device type).",
      "**Qualitative (unstructured)** – descriptive data such as text, images, audio. Stored and retrieved as a **single object**, or **codified** into structured data (e.g. tagging feedback as positive/negative)."
    ]},
    { h: "Data types", table: [
      ["Type", "Holds", "Example"],
      ["Integer", "Whole numbers", "42"],
      ["Real (float)", "Numbers with decimals", "3.75"],
      ["Character", "A single symbol", "'Y'"],
      ["String", "A sequence of characters", "'LS1 4AP'"],
      ["Boolean", "True or false", "TRUE"],
      ["Date", "Calendar dates/times", "19/11/2026"],
      ["Blob", "Binary large object, e.g. image, video, file", "a photo"]
    ], after: "Phone numbers are stored as **strings** because they can start with 0 and aren't used in calculations." },
    { h: "Data formats", table: [
      ["Format", "Use"],
      ["JSON", "Lightweight key–value text format for exchanging data between web apps and APIs"],
      ["Text file", "Plain unformatted text, readable by almost anything"],
      ["CSV", "Comma-separated values for tables; easy import to spreadsheets/databases"],
      ["XML", "Tag-based structured text, self-describing, verbose"],
      ["ASCII", "Character encoding of 128 characters (English letters, digits, symbols)"],
      ["UTF-8", "Unicode encoding that covers characters from almost every language, backward-compatible with ASCII"]
    ]},
    { h: "Storing data", list: [
      "**Metadata** is data about data (e.g. file size, author, date created) – it describes and gives context.",
      "**File-based** storage keeps data in separate files; **directory-based** storage organises files into folders; **hierarchy-based** structures arrange data in a parent–child tree.",
      "How data is stored affects how easily it can be transformed."
    ]}
  ],
  memory: ["**D → I → K**: Data plus context = Information; Information plus understanding = Knowledge.", "Quantitative = **quantity** (numbers). Qualitative = **quality** (descriptions)."],
  cards: [
    ["What is the difference between data and information?", "Data is raw facts with no context; information is data that has been given context and meaning."],
    ["What is knowledge?", "Understanding gained from information that allows decisions or actions."],
    ["What is a feedback loop risk with AI-generated data?", "AI outputs are fed back in as inputs, which can reinforce and amplify errors or bias."],
    ["Name five sources of data.", "Human, AI/machine learning, sensors, IoT, transactions."],
    ["What four factors determine the value of data?", "Quantity, timeframe, source and veracity."],
    ["Name the three methods of transforming data.", "Manipulating, analysing and processing."],
    ["What is the difference between quantitative and qualitative data?", "Quantitative is numerical/structured; qualitative is descriptive/unstructured."],
    ["What is the difference between discrete and continuous data?", "Discrete data takes separate countable values; continuous data can take any value within a range."],
    ["What is categorical data?", "Data sorted into groups or categories, e.g. device type."],
    ["What does Blob stand for?", "Binary Large Object – used to store images, audio, video or files."],
    ["Why store a phone number as a string, not an integer?", "It may begin with 0 or contain spaces/+, and it's never used in calculations."],
    ["What is JSON used for?", "Exchanging structured data as key–value pairs, especially between web applications and APIs."],
    ["What is the difference between ASCII and UTF-8?", "ASCII has 128 characters (basic English); UTF-8 is a Unicode encoding covering nearly all languages and is backward-compatible with ASCII."],
    ["What is metadata?", "Data about data, e.g. a file's size, author and creation date."],
    ["How is qualitative data stored?", "As a single object (e.g. a whole document or image), or codified into structured data."]
  ],
  quiz: [
    ["'21' on its own is…", ["Data", "Information", "Knowledge", "Metadata"], 0, "With no context it is just data."],
    ["Which data type stores TRUE or FALSE?", ["String", "Boolean", "Integer", "Character"], 1, "Boolean."],
    ["The temperature of a server room recorded every minute is…", ["Discrete", "Continuous", "Categorical", "Qualitative"], 1, "Temperature can take any value in a range."],
    ["Customer reviews written as free text are…", ["Quantitative", "Qualitative", "Discrete", "Boolean"], 1, "Descriptive, unstructured data is qualitative."],
    ["Which format exchanges data as key–value pairs and is popular with web APIs?", ["CSV", "ASCII", "JSON", "Blob"], 2, "JSON."],
    ["A file's date modified and author are examples of…", ["Blob", "Metadata", "Knowledge", "Erroneous data"], 1, "Data about data."],
    ["Which encoding can represent Arabic, Chinese and emoji?", ["ASCII", "UTF-8", "CSV", "Boolean"], 1, "UTF-8 is a Unicode encoding."],
    ["Which data type is best for a product photo stored in a database?", ["String", "Blob", "Real", "Date"], 1, "Binary large object."]
  ],
  exam: [
    { q: "A smart building uses sensors to collect data about temperature and occupancy. Explain the difference between data, information and knowledge using this example.", marks: 3, points: [
      "Data: raw sensor readings, e.g. 27 or 42, with no context.",
      "Information: readings given context, e.g. 'Room 4 is 27°C with 42 people in it'.",
      "Knowledge: understanding to act, e.g. 'Room 4 overheats when over 40 people are in it, so turn up the air conditioning at that point'."
    ]}
  ]
});

REV.add({
  id: "p1-data-systems", section: "p1", title: "Big Data, data quality, systems and analysis", short: "Data systems",
  spec: "Core 3.7–3.12",
  summary: "The **6 Vs of Big Data**, data quality, **data wrangling**, data entry errors, **visualisation**, **data models**, **access control** and Big Data storage and **analysis tools**.",
  notes: [
    { h: "The 6 Vs of Big Data", table: [
      ["V", "Meaning"],
      ["Volume", "The sheer amount of data"],
      ["Variety", "Different types and formats (text, images, sensor readings)"],
      ["Variability", "How the meaning or flow of data changes"],
      ["Velocity", "The speed data is created and must be processed"],
      ["Veracity", "How accurate and trustworthy the data is"],
      ["Value", "How useful the data is to the organisation"]
    ], after: "Each V affects how data is gathered, stored, maintained and processed. Maintenance also depends on **time, skills and cost**." },
    { h: "Data quality assurance", list: [
      "**Validation** – data follows rules.", "**Verification** – data matches its source (e.g. double entry).", "**Reliability** – data can be trusted consistently.", "**Consistency** – the same data agrees everywhere it appears.", "**Integrity** – data is accurate and hasn't been altered without permission.", "**Redundancy** – duplicate copies (useful for backup, wasteful if unplanned)."
    ]},
    { h: "Data systems", list: [
      "**Data wrangling** stages: **structure → clean → validate → enrich → output**.",
      "Core functions of a data system: input, search, save, integrate, organise (index), output, feedback loop.",
      "**Transcription errors** – mistakes copying data (e.g. typing 'Smoth' for 'Smith').",
      "**Transposition errors** – characters swapped (e.g. 1243 instead of 1234).",
      "Reduce them with **input validation, double-entry verification, drop-down menus and pre-filled fields**.",
      "Implementation depends on the time and expertise to build data-entry screens and the time needed to enter data."
    ]},
    { h: "Data visualisation", p: "Graphs, charts, tables, reports, dashboards and infographics. Choose based on the **type of data**, the **intended audience** and the **brief**." },
    { h: "Data models", table: [
      ["Model", "Structure", "Notes"],
      ["Hierarchical", "Tree: each child has one parent", "Fast to follow a path; poor for many-to-many relationships"],
      ["Network", "Records can have many parents and children", "Handles complex relationships; harder to design"],
      ["Relational", "Tables of rows and columns linked by keys", "Flexible, efficient storage, widely used; needs careful design"]
    ], after: "Choose based on efficiency of accessing items, storage efficiency and implementation complexity. Draw hierarchical/network models with blocks, arrows and labels; relational models with tables, rows, columns and labels." },
    { h: "Data access across platforms", list: [
      "**Permissions**: authorisation, privileges, access rights, rules.",
      "**RBAC (role-based access control)** – access depends on job role. Easy to manage at scale; roles can become too broad.",
      "**RuBAC (rule-based access control)** – access decided by rules, e.g. time of day or location. Fine-grained; complex to maintain.",
      "**APIs** – let systems request data from each other in a controlled way. Enable integration; must be secured."
    ]},
    { h: "Big Data storage and analysis", table: [
      ["Tool", "What it is"],
      ["Data warehouse", "Central store of structured, cleaned data from many sources, for reporting"],
      ["Data lake", "Huge store of raw data in any format, structured or not"],
      ["Data mart", "A smaller subset of a warehouse for one department, e.g. sales"],
      ["Data mining", "Searching large data sets for patterns"],
      ["Reporting", "Presenting summarised findings"]
    ], after: "Business intelligence is used for **financial planning and analysis** and **CRM** (customer analytics and communications). The right tool depends on the scale of data." }
  ],
  memory: ["6 Vs in two groups of three: **size, speed, sort** (volume, velocity, variety), then **change, truth, worth** (variability, veracity, value).", "Transposition = **positions swapped**."],
  cards: [
    ["List the 6 Vs of Big Data.", "Volume, variety, variability, velocity, veracity, value."],
    ["What does veracity mean?", "How accurate and trustworthy the data is."],
    ["What does velocity mean in Big Data?", "The speed at which data is generated and must be processed."],
    ["List the five stages of data wrangling.", "Structure, clean, validate, enrich, output."],
    ["What is a transposition error?", "Characters swapped round when entering data, e.g. 1243 instead of 1234."],
    ["What is a transcription error?", "A mistake made copying data, e.g. mistyping a name."],
    ["Give four ways to reduce data entry errors.", "Input validation, double-entry verification, drop-down menus, pre-filled fields."],
    ["What is the difference between validation and verification?", "Validation checks data follows rules; verification checks it matches the original source."],
    ["Name the three data models.", "Hierarchical, network and relational."],
    ["What is the key limitation of a hierarchical model?", "Each child has only one parent, so many-to-many relationships are hard to represent."],
    ["What is the difference between RBAC and RuBAC?", "RBAC grants access by job role; RuBAC grants access according to rules such as time or location."],
    ["What is a data lake?", "A large store of raw data in any format, structured or unstructured."],
    ["What is a data mart?", "A subset of a data warehouse focused on one department or subject."],
    ["What is data mining?", "Analysing large data sets to discover patterns and relationships."],
    ["What three things decide which visualisation to use?", "Type of data, intended audience and the brief."]
  ],
  quiz: [
    ["Which V describes data arriving every second from thousands of sensors?", ["Value", "Velocity", "Veracity", "Variety"], 1, "Velocity is speed of generation."],
    ["Typing 'Jnoes' instead of 'Jones' is a…", ["Transcription error", "Transposition error", "Validation error", "Range error"], 1, "Two characters swapped places."],
    ["Which stage of data wrangling removes duplicates and fixes errors?", ["Structure", "Clean", "Enrich", "Output"], 1, "Cleaning."],
    ["A store of raw, unprocessed data in many formats is a…", ["Data mart", "Data warehouse", "Data lake", "CSV"], 2, "Data lakes hold raw data of any type."],
    ["Which model stores data in linked tables using keys?", ["Hierarchical", "Network", "Relational", "Flat"], 2, "Relational."],
    ["Only allowing access to the finance system between 8am and 6pm is…", ["RBAC", "RuBAC", "API", "DAC"], 1, "A rule based on time is rule-based access control."],
    ["Entering data twice and comparing the copies is…", ["Validation", "Double-entry verification", "Data mining", "Enriching"], 1, "It's a verification method."],
    ["Which V is about whether data can be trusted?", ["Volume", "Veracity", "Velocity", "Variety"], 1, "Veracity = truthfulness/accuracy."]
  ],
  exam: [
    { q: "A gym chain stores member data in a relational database. Staff often make mistakes entering membership numbers. Explain two methods the gym could use to reduce these errors.", marks: 4, points: [
      "Input validation (e.g. length/format check on membership number)…",
      "…rejects numbers that are the wrong length or pattern before they are saved.",
      "Double-entry verification…",
      "…the number is typed twice and must match, catching transposition/transcription errors.",
      "Drop-down menus / pre-filled fields (e.g. look up member by name)…",
      "…remove the need to type the number, so fewer chances to mistype."
    ]}
  ]
});
