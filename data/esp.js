/* Employer Set Project */
REV.add({
  id: "esp-structure", section: "esp", title: "ESP structure, tasks and conditions", short: "ESP tasks",
  spec: "Core ESP and scheme of assessment",
  summary: "The Employer Set Project is a **14h 30m** externally set project worth **40% of the core**. It assesses the six **core skills** together through one scenario: plan, fix, design, develop and evaluate.",
  notes: [
    { h: "The six core skills it assesses", steps: [
      "Reflectively evaluate.",
      "Communicate information clearly to technical and non-technical audiences.",
      "Work with stakeholders to consider options to meet requirements.",
      "Develop software / create an artefact.",
      "Apply a logical approach to solving problems – identify and resolve faults, propose a solution.",
      "Ensure activity mitigates risks to security."
    ]},
    { h: "The task sequence", table: [
      ["Task", "What you do", "Assessed?"],
      ["Pre-task", "Research the scenario's industry context independently, share findings and discuss as a group.", "No – and not under controlled conditions, but it feeds into the rest."],
      ["Task 1: Planning a project", "Produce a **Gantt chart** and a **resource and cost plan** on Pearson's template, then a written **rationale** justifying your decisions.", "Yes"],
      ["Task 2: Identifying and fixing defects", "Test a simulation (a Cisco Packet Tracer file, or support tickets plus a simulation) to find the underlying issue, fix it and document testing.", "Yes"],
      ["Task 3: Designing a solution", "Decompose the problem and produce a design (network design, security plan or needs analysis) clear to the client and to a third party who might build it.", "Yes"],
      ["Task 4a: Developing the solution", "Build the design into a working solution, addressing robustness, security, organisation and user experience.", "Yes"],
      ["Task 4b: Reflective evaluation", "Review the outcome against the brief and success criteria, evidence it meets user needs, and say how you'd improve it.", "Yes"]
    ]},
    { h: "Conditions", list: [
      "Supervised, across several sessions.",
      "**No internet access**, and **no AI or other tools designed to prepare a response**.",
      "Output is a portfolio submitted electronically: planning documents, an annotated digital portfolio, a prototype product, testing evidence and an evaluation.",
      "Sample material is set in the financial sector. Marked out of 89–100 by Pearson."
    ]},
    { h: "ESP Assessment Objectives", table: [
      ["AO", "Focus", "Support & Infrastructure/Cabling", "Cyber Security"],
      ["AO1", "Planning", "12%", "13.5%"],
      ["AO2", "Application – develop, create, fix, mitigate security risks", "41%", "49.4%"],
      ["AO3", "Selecting relevant techniques and resources; collaboration", "9%", "10.1%"],
      ["AO4a–c", "English, maths and digital skills", "3%", "3.4%"],
      ["AO5d", "Project outcome", "26%", "13.5%"],
      ["AO5e", "Review (reflective evaluation)", "9%", "10.1%"]
    ], after: "AO2 is always the biggest. The Cyber Security ESP rewards how well risks are actually mitigated more than the polish of the final artefact." },
    { h: "Software you'll use", p: "Word processing, presentation, spreadsheet, diagramming (network diagrams), project management, basic image editing, programming, database software, web browser and **Cisco Packet Tracer** (`.pkt` files)." }
  ],
  tips: [
    "Pre-task research matters even though it isn't marked – you can't use the internet later, so make good notes on the industry context.",
    "In Task 1, the rationale is where planning marks come from: justify task order, dependencies, resource choices and contingency time.",
    "In Task 2, document every test: what you tested, the tool (e.g. ping, tracert), expected vs actual result, and the fix.",
    "In Task 3, write so a third party could build your design: consistent device names, correct IP addressing and standard symbols.",
    "In Task 4b, judge against the original success criteria with evidence, and give specific, realistic improvements."
  ],
  cards: [
    ["How long is the ESP and what is it worth?", "14 hours 30 minutes; 40% of the core (20% of the total)."],
    ["Is the ESP pre-task assessed?", "No. It's independent research and group discussion of the industry context, done before the controlled tasks."],
    ["What do you produce in ESP Task 1?", "A Gantt chart, a resource and cost plan, and a written rationale for your planning decisions."],
    ["What happens in ESP Task 2?", "You test a simulation (e.g. Packet Tracer file or support tickets) to find and fix defects, documenting your testing."],
    ["What is produced in ESP Task 3?", "A design – network design, security plan or needs analysis depending on pathway."],
    ["What four things must Task 4a address?", "Robustness, security, organisation and user experience."],
    ["What happens in Task 4b?", "A reflective evaluation of the solution against the brief and success criteria, including improvements."],
    ["Can you use the internet or AI in the ESP?", "No – no internet access and no AI or response-preparing tools."],
    ["Which ESP AO carries the most weight?", "AO2 – Application (41%, or 49.4% in Cyber Security)."],
    ["Name the six core skills.", "Reflectively evaluate; communicate to technical/non-technical audiences; work with stakeholders; develop software/create an artefact; logical problem solving; mitigate security risks."],
    ["What simulation software is used in the ESP?", "Cisco Packet Tracer (or software that opens .pkt files)."]
  ],
  quiz: [
    ["Which ESP task includes a Gantt chart?", ["Task 1", "Task 2", "Task 3", "Task 4b"], 0, "Planning a project."],
    ["Which part of the ESP is not assessed?", ["Task 1", "Pre-task", "Task 4a", "Task 4b"], 1, "The pre-task feeds in but isn't marked."],
    ["During the ESP, students may…", ["Search online for fixes", "Use AI to draft answers", "Use their own pre-task notes and provided software", "Phone an employer"], 2, "No internet or AI."],
    ["Reflective evaluation happens in…", ["Task 2", "Task 3", "Task 4a", "Task 4b"], 3, "4b reviews the outcome."],
    ["Which AO is weighted 26% in the Support ESP but 13.5% in Cyber?", ["AO1", "AO2", "AO5d", "AO5e"], 2, "Project outcome."],
    ["Fixing faults in a Packet Tracer file is…", ["Task 1", "Task 2", "Task 3", "Pre-task"], 1, "Identifying and fixing defects."]
  ]
});

REV.add({
  id: "esp-pathways", section: "esp", title: "The three ESP pathways", short: "ESP pathways",
  spec: "Core ESP pathways",
  summary: "Which ESP you sit depends on your specialism: **Digital Infrastructure & Network Cabling**, **Cyber Security**, or **Digital Support Technician**. Same task shape, different focus.",
  notes: [
    { h: "Digital Infrastructure & Network Cabling", list: [
      "**Task 2**: fix defects in a network simulation using testing tools such as ping and tracert, following networking conventions.",
      "**Task 3**: decompose into hardware, software, settings and data-connection needs; group requirements by user type; produce an annotated **network diagram** with correct IP addressing, symbols and consistent names.",
      "**Task 4a**: refine the simulation ensuring **robustness** (resilience, redundancy – backups, fallbacks, UPS), **security** (anti-malware/firewall, roles and permissions, hardening/air-gapping), **organisation** (server configuration, node deployment, connection media, subnetting) and **user experience** (devices, data connections, back-end systems, access/availability)."
    ]},
    { h: "Cyber Security", list: [
      "**Task 2**: identify and fix **security** defects – the network must be secure, not just working.",
      "**Task 3**: a **security plan** – decompose into physical, logical/software and user-based risks; apply good practice and **multiple layered mitigations** so no single control is a single point of failure.",
      "**Task 4a**: build a secure solution focused on mitigating vulnerabilities (security software, roles/permissions, hardening/air-gapping) and organising it to scale **without compromising security**."
    ]},
    { h: "Digital Support Technician", list: [
      "**Task 2**: respond to **support tickets** with a simulation, use testing and **root cause analysis** to find likely causes, propose a range of solutions, communicate the process and fix the issue.",
      "**Task 3**: a **needs analysis** – general and stakeholder-specific needs, the hardware, software and data-communication technologies needed, and risk assessment/mitigation.",
      "**Task 4a**: the same robustness, security, organisation and user-experience considerations, applied to a support context."
    ]}
  ],
  cards: [
    ["Which three ESP pathways are there?", "Digital Infrastructure & Network Cabling; Cyber Security; Digital Support Technician."],
    ["What does Task 3 produce in the Cyber Security ESP?", "A security plan covering physical, logical/software and user-based risks with layered mitigations."],
    ["What does Task 3 produce in the Digital Support Technician ESP?", "A needs analysis."],
    ["What does Task 3 produce in the Infrastructure & Cabling ESP?", "An annotated network diagram/design."],
    ["What is the Task 2 stimulus in the Digital Support Technician ESP?", "A set of support tickets plus a simulation."],
    ["Why use layered mitigations in the Cyber ESP?", "So that no single control is a single point of failure (defence in depth)."],
    ["Give three robustness measures for an infrastructure ESP solution.", "Resilience, redundancy, backups, fallbacks, UPS."],
    ["What does 'organisation' cover in the infrastructure ESP?", "Server configuration, node deployment, connection media and subnetting."]
  ],
  quiz: [
    ["A student taking the Network Cabling specialism sits which ESP?", ["Cyber Security", "Digital Support Technician", "Digital Infrastructure & Network Cabling", "Their choice"], 2, "Infrastructure and Cabling share one ESP."],
    ["Which ESP uses root cause analysis on support tickets?", ["Digital Support Technician", "Cyber Security", "Infrastructure & Cabling", "All of them in Task 1"], 0, "Task 2 of the Support ESP."],
    ["Adding a UPS to a design supports…", ["User experience", "Robustness", "Subnetting", "Needs analysis"], 1, "Resilience against power loss."],
    ["In the Cyber ESP, scaling the solution must not…", ["Increase users", "Compromise security", "Use subnetting", "Use a firewall"], 1, "Scalability without compromising security."]
  ]
});
