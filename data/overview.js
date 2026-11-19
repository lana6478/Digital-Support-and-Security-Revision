/* Course and assessment */
REV.add({
  id: "ov-course", section: "overview", title: "How the T Level is structured", short: "Structure",
  spec: "Qualification overview",
  summary: "The T Level Technical Qualification in Digital Support and Security (Level 3) is a two-year programme for 16–19 year olds. It is **50% Core** and **50% Occupational Specialism**, plus a minimum **315-hour industry placement**.",
  notes: [
    { h: "What a T Level is", list: [
      "A two-year Level 3 technical programme, an alternative to A Levels and Apprenticeships.",
      "Combines the classroom-based **Technical Qualification (TQ)** with an **industry placement of at least 315 hours**.",
      "Built from **Outline Content** written by employer panels from Apprenticeship Standards, then developed into a full specification by **Pearson**.",
      "Aims for **threshold competence**: ready to develop full occupational competence on the job, not fully competent from day one.",
      "First teaching September 2025. Qualification number 610/5799/X. Replaces the T Level in Digital Support Services."
    ]},
    { h: "Two components, equal weight", table: [
      ["Component", "Parts", "Share of total"],
      ["Core", "Core Paper 1 (30% of core), Core Paper 2 (30%), Employer Set Project (40%)", "50%"],
      ["Occupational Specialism", "One synoptic project in your chosen specialism", "50%"]
    ], after: "So Paper 1 and Paper 2 are each worth **15%** of the whole qualification and the ESP is worth **20%**." },
    { h: "Assessment at a glance", table: [
      ["Assessment", "Method", "Time", "Marks", "When"],
      ["Core Paper 1", "Written exam", "2h 15m", "90", "June / November"],
      ["Core Paper 2", "Written exam", "2h 15m", "90", "June / November"],
      ["Employer Set Project", "Externally set project", "14h 30m", "89–100", "May / November"],
      ["Occupational Specialism", "Externally set project", "37h 30m", "99 (Cabling 111)", "Window, March to May"]
    ], after: "Core and ESP are externally set and marked by Pearson. The specialism project is set and externally marked by Pearson." },
    { h: "Hours", list: [
      "**GLH (Guided Learning Hours)** – time taught or supervised. 1200 in total (600 core, 600 specialism).",
      "**TQT (Total Qualification Time)** – GLH plus independent study. 1320 in total (660 core, 660 specialism)."
    ]},
    { h: "The four specialisms", table: [
      ["Specialism", "Job it leads to", "Technical content area"],
      ["Digital Infrastructure", "Infrastructure technician", "Explain, install, configure, test and manage physical and virtual infrastructure"],
      ["Network Cabling", "Network cable installer", "Install and test cabling in line with technical and security requirements"],
      ["Digital Support", "Digital support technician", "Install, configure and support software applications and operating systems"],
      ["Cyber Security", "Cyber security technician", "Propose remediation advice for a security risk assessment"]
    ], after: "Every specialism also has a **security procedures and controls** content area and a **sources of knowledge** content area." },
    { h: "Progression", list: [
      "**Level 3 Apprenticeships** to reach full occupational competence.",
      "**Level 4 Apprenticeships** such as Digital Infrastructure Engineer, Network Engineer, Applications Support Lead or Cyber Security Technologist.",
      "**Higher education**: HNC, HND or a degree (check each university's entry requirements).",
      "Straight into jobs such as digital support technician, infrastructure technician, IT solutions technician, network cable installer or cyber security technician."
    ]}
  ],
  memory: [
    "**30 / 30 / 40** – Paper 1, Paper 2, ESP as shares of the core.",
    "**15 / 15 / 20 / 50** – the same parts as shares of the whole T Level, with the specialism taking the other half.",
    "**315** – minimum industry placement hours."
  ],
  cards: [
    ["What is the minimum length of the T Level industry placement?", "315 hours."],
    ["What percentage of the total qualification is the Core component?", "50%. The Occupational Specialism is the other 50%."],
    ["How much of the core is each Core Paper worth?", "30% each (15% of the total qualification)."],
    ["How much of the core is the Employer Set Project worth?", "40% of the core (20% of the total qualification)."],
    ["How long is each Core exam paper and how many marks?", "2 hours 15 minutes, 90 marks."],
    ["How long is the Employer Set Project?", "14 hours 30 minutes, across several supervised sessions."],
    ["How long is the Occupational Specialism project?", "37 hours 30 minutes, run in a window from March to May."],
    ["Which specialism project has the most marks?", "Network Cabling, with 111 marks. The other three have 99."],
    ["What is threshold competence?", "Having the core knowledge and skills to be ready to build full occupational competence on the job, rather than being fully competent from day one."],
    ["What is the difference between GLH and TQT?", "GLH is taught or supervised time. TQT is GLH plus estimated independent study and preparation."],
    ["Who sets and marks the T Level Technical Qualification?", "Pearson."],
    ["Name the four occupational specialisms.", "Digital Infrastructure, Network Cabling, Digital Support and Cyber Security."],
    ["What is Outline Content?", "The content framework written by employer, professional body and provider panels from Apprenticeship Standards, which Pearson develops into the full specification."],
    ["Give two Level 4 apprenticeships students can progress to.", "Any two of: Digital Infrastructure Engineer, Network Engineer, Applications Support Lead, Cyber Security Technologist."]
  ],
  quiz: [
    ["What share of the whole T Level is Core Paper 2 worth?", ["15%", "30%", "20%", "50%"], 0, "Each paper is 30% of the core, and the core is half the qualification, so 15% of the total."],
    ["Which part of the core carries the most weight?", ["Core Paper 1", "Core Paper 2", "The Employer Set Project", "They are all equal"], 2, "The ESP is 40% of the core; each paper is 30%."],
    ["How many hours is the minimum industry placement?", ["150", "315", "600", "1200"], 1, "At least 315 hours with an employer."],
    ["How long is the Occupational Specialism project?", ["2 hours 15 minutes", "14 hours 30 minutes", "37 hours 30 minutes", "315 hours"], 2, "37h 30m, taken in a window from March to May."],
    ["What job does the Network Cabling specialism lead toward?", ["Infrastructure technician", "Network cable installer", "Cyber security technician", "Digital support technician"], 1, "Each specialism aligns to a Level 3 Apprenticeship Standard; cabling aligns to network cable installer."],
    ["Which statement best describes threshold competence?", ["Fully qualified for any job in the sector", "Ready to develop full competence once in work", "Passed the core exams only", "Completed the industry placement"], 1, "The T Level gets you to the point where you're ready to become fully competent on the job."],
    ["How many total Guided Learning Hours does the qualification have?", ["600", "660", "1200", "1320"], 2, "1200 GLH: 600 core and 600 specialism. 1320 is the TQT."]
  ]
});

REV.add({
  id: "ov-grading", section: "overview", title: "Grading and results", short: "Grading",
  spec: "Grading, awarding and results",
  summary: "The core is graded **A\\*–E**, the specialism **Pass, Merit or Distinction**, and they combine into an overall T Level grade of **Pass, Merit, Distinction or Distinction\\***.",
  notes: [
    { h: "Grade scales", table: [
      ["Component", "Grades available"],
      ["Core (Papers 1 and 2 plus ESP combined)", "A*, A, B, C, D, E, U"],
      ["Occupational Specialism", "Distinction, Merit, Pass, U"],
      ["Overall T Level (awarded via DfE look-up table)", "Distinction*, Distinction, Merit, Pass, U"]
    ]},
    { h: "Uniform Mark Scale (UMS)", p: "Raw core marks are converted to UMS so grades mean the same thing whichever exam series you sat. Paper 1 and Paper 2 results are combined before conversion.", table: [
      ["Grade", "Core exams (max 240)", "ESP (max 160)", "Core overall (max 400)"],
      ["A*", "216–240", "144–160", "360–400"],
      ["A", "192–215", "128–143", "320–359"],
      ["B", "168–191", "112–127", "280–319"],
      ["C", "144–167", "96–111", "240–279"],
      ["D", "120–143", "80–95", "200–239"],
      ["E", "96–119", "64–79", "160–199"],
      ["U", "0–95", "0–63", "0–159"]
    ]},
    { h: "To be certificated you must", steps: [
      "Complete both the Core and the Occupational Specialism.",
      "Get at least an **E** in the Core.",
      "Get at least a **Pass** in the Occupational Specialism.",
      "Complete the other T Level elements, especially the **industry placement**."
    ]},
    { h: "Awarding and results", list: [
      "**Awarding** sets grade boundaries for each component in every series, keeping standards consistent over time.",
      "Summer results come out in **August**; November series results in **March**.",
      "Pearson sends results to your provider, including **scorecards** (percentage per Assessment Objective), **Results Plus** (item-by-item breakdown) and a **Statement of Provisional Results**.",
      "The **Department for Education** issues the overall T Level result and the T Level certificate."
    ]}
  ],
  cards: [
    ["What grades can you get for the Core component?", "A*, A, B, C, D, E or U (unclassified)."],
    ["What grades can you get for the Occupational Specialism?", "Distinction, Merit, Pass or U."],
    ["What are the overall T Level grades?", "Distinction*, Distinction, Merit, Pass or Unclassified."],
    ["What is UMS and why is it used?", "The Uniform Mark Scale. Raw marks are converted onto it so a grade means the same in every exam series, even if one paper was slightly harder."],
    ["What is the maximum UMS for the overall core?", "400 (240 for the exams, 160 for the ESP)."],
    ["What core UMS total is needed for an A*?", "360–400."],
    ["What are the minimum grades needed to be certificated?", "E in the Core, Pass in the Occupational Specialism, plus completing the industry placement."],
    ["Who issues the T Level certificate?", "The Department for Education (DfE), not Pearson."],
    ["What is awarding?", "The process of setting grade boundaries for each component in each assessment series."],
    ["What is a Results Plus report?", "An item-by-item breakdown of results, each item labelled with its Assessment Objective, so providers can spot trends."]
  ],
  quiz: [
    ["Which body issues the overall T Level certificate?", ["Pearson", "IfATE", "The Department for Education", "Ofqual"], 2, "Pearson issues component results to providers; the DfE issues T Level results and certificates."],
    ["What is the minimum core grade needed for a T Level certificate?", ["C", "D", "E", "Pass"], 2, "You need at least an E in the core and a Pass in the specialism."],
    ["Why are raw core marks converted to UMS?", ["To make the paper easier", "To keep grades comparable across exam series", "To combine the core with the specialism", "To calculate the industry placement"], 1, "UMS benchmarks results so the same standard of work gets the same uniform mark in any series."],
    ["A student has 290 core UMS. What core grade is that?", ["A", "B", "C", "D"], 1, "B is 280–319 on the core overall scale."],
    ["When do November-series results come out?", ["December", "January", "March", "August"], 2, "Normally the third week of March."],
    ["What happens to Paper 1 and Paper 2 marks before UMS conversion?", ["They are averaged", "They are combined", "Only the higher one counts", "They are converted separately"], 1, "The two exam results are combined, then converted."]
  ]
});

REV.add({
  id: "exam-technique", section: "overview", title: "Exam technique and command words", short: "Exam technique",
  spec: "Command words, Assessment Objectives, competencies, diagram notation",
  summary: "Knowing the content is only half the job. Each exam question uses a **command word** that tells you what kind of answer earns the marks, and the back half of each paper is mostly about **applying** knowledge to a scenario.",
  notes: [
    { h: "Command words", table: [
      ["Command word", "What you need to do"],
      ["Give / state / name", "Provide a short response, such as a feature or use."],
      ["Identify", "Select the correct answer from the context or stimulus."],
      ["Write", "Write a formula using information from the context."],
      ["Describe", "Give linked points in a logical order."],
      ["Explain", "Make a point, then give a linked justification (point + because)."],
      ["Explain with additional justification", "Point, linked justification, then a further justification building on it."],
      ["Discuss", "Weigh up factors, considering opposing sides, in the given context. No conclusion needed."],
      ["Evaluate", "Weigh strengths and weaknesses and reach an evidence-supported judgement, usually a conclusion."],
      ["Draw", "Produce a diagram (e.g. a flowchart) from the scenario."],
      ["Complete", "Fill in the missing parts of a diagram correctly."]
    ]},
    { h: "Assessment Objectives in the core exams", table: [
      ["AO", "What it tests", "Paper 1", "Paper 2"],
      ["AO1a", "Knowledge", "8 marks", "10 marks"],
      ["AO1b", "Understanding", "22 marks", "21 marks"],
      ["AO2", "Apply knowledge to situations and contexts", "39 marks", "38 marks"],
      ["AO3a", "Analyse information and issues", "12 marks", "12 marks"],
      ["AO3b", "Evaluate information and issues", "9 marks", "9 marks"]
    ], after: "**Section A** is mostly knowledge and understanding. **Section B** carries almost all the AO2 application marks, so most marks are won by applying what you know to the scenario." },
    { h: "How the papers are built", list: [
      "Two sections, A and B. Answer everything in both.",
      "Each section gets harder as you go.",
      "Mix of short, medium and extended open-response questions.",
      "Sat under formal JCQ *Instructions for Conducting Examinations* conditions."
    ]},
    { h: "Diagram notation you must be able to read and draw", list: [
      "**Flowchart**: terminator (start/end), process, sub-process, decision, input/output, connector, flow arrows.",
      "**Data flow diagram (DFD)**: data source/destination, process, data store, labelled arrows.",
      "**Information flow diagram**: source, destination, and the information labelled on the arrow.",
      "**Concept map**: concepts linked by a relationship that is always a verb, e.g. *requires*."
    ]},
    { h: "English, maths and digital competencies", p: "Spec points are tagged with codes such as **E4**, **M6** or **D5**. E = English (e.g. E1 convey technical information to different audiences, E4 summarise), M = maths (e.g. M2 estimate and calculate, M6 understand data and risk, M9 cost a project), D = digital (e.g. D1 use digital technology, D5 be safe and responsible online, D6 code and program)." }
  ],
  tips: [
    "Underline the command word and the context before writing. An *explain* answer with no *because* only gets the identification marks.",
    "For *discuss*, cover both sides. For *evaluate*, finish with a judgement that follows from what you've written.",
    "In Section B, use the scenario's own names and details in every point. Generic answers lose AO2 marks.",
    "Roughly one point per mark. A 6-mark explain question usually wants three developed points.",
    "In flowcharts, use a diamond only for decisions and label each exit (Yes/No)."
  ],
  cards: [
    ["What does the command word *explain* require?", "A point plus a linked justification for that point."],
    ["What is the difference between *discuss* and *evaluate*?", "Discuss weighs up both sides with no conclusion required. Evaluate weighs up both sides and reaches a supported judgement."],
    ["What does the command word *complete* mean?", "Fill in the missing information on a diagram so it is fully correct."],
    ["What does *identify* require?", "Select the correct answer from the given context or stimulus."],
    ["Which Assessment Objective carries the most marks in both core papers?", "AO2 – applying knowledge and understanding to different situations (39 marks in Paper 1, 38 in Paper 2)."],
    ["Which section of each core paper carries most of the application marks?", "Section B."],
    ["What is the difference between AO3a and AO3b?", "AO3a is analysing information and issues; AO3b is evaluating them."],
    ["Which flowchart symbol marks the start and end?", "The terminator."],
    ["What are the symbols in a data flow diagram?", "Data source/destination, process, data store, and labelled arrows."],
    ["In a concept map, what type of word labels the relationship?", "A verb, e.g. *requires* or *stores*."],
    ["What does the competency code M6 stand for?", "Understand data and risk."],
    ["What does the competency code E1 stand for?", "Convey technical information to different audiences."]
  ],
  quiz: [
    ["A question says 'Evaluate the use of cloud storage for this company'. What must your answer include?", ["A list of features", "Both sides and a supported conclusion", "A diagram", "A single definition"], 1, "Evaluate needs strengths and weaknesses plus a judgement."],
    ["Which command word asks you to weigh up opposing factors without needing a conclusion?", ["Describe", "Discuss", "Evaluate", "Identify"], 1, "Discuss considers opposing aspects; no conclusion required."],
    ["Where are most AO2 (application) marks found?", ["Section A", "Section B", "Spread evenly", "Only in the ESP"], 1, "Section A is knowledge-heavy; Section B is where you apply knowledge to scenarios."],
    ["Which flowchart symbol is used for a yes/no condition?", ["Terminator", "Process", "Decision", "Connector"], 2, "A decision (diamond) branches on a condition."],
    ["In a DFD, a database would be shown as a…", ["Process", "Data store", "Terminator", "Data source"], 1, "Data stores are where data is held, e.g. a database or file."],
    ["How many marks is AO2 worth in Core Paper 1?", ["8", "22", "39", "90"], 2, "AO2 is 39 of the 90 marks in Paper 1."],
    ["'Explain one benefit of MFA.' Which answer would gain full marks?", ["MFA is more secure.", "MFA uses two factors.", "MFA makes accounts harder to break into because a stolen password alone is not enough.", "MFA, passwords, biometrics."], 2, "It gives a point and a linked justification."]
  ]
});
