/* Sections of the course. Each section is a "rack unit" on the home page.
   Topics are added by the other data files using REV.add({...}).
   A topic can belong to more than one section (e.g. shared specialism content). */
window.REV = {
  topics: {},
  order: [],
  add: function (t) { this.topics[t.id] = t; this.order.push(t.id); },
  sections: [
    { id: "overview", title: "Course and assessment", short: "Course", colour: "steel", kind: "core",
      desc: "How the T Level is structured, weighted and graded.",
      topics: ["ov-course", "ov-grading", "exam-technique"] },
    { id: "p1", title: "Core Paper 1", short: "Paper 1", colour: "orange", kind: "core",
      desc: "Problem solving, introduction to digital support, and data. 2h 15m written exam, 90 marks.",
      topics: ["p1-comp-thinking", "p1-strategies", "p1-reflective", "p1-infra", "p1-support-testing", "p1-data-support", "p1-risk-pm", "p1-sources", "p1-data-fund", "p1-data-systems"] },
    { id: "p2", title: "Core Paper 2", short: "Paper 2", colour: "blue", kind: "core",
      desc: "Legislation, business context, emerging issues, digital environments and security. 2h 15m written exam, 90 marks.",
      topics: ["p2-health-safety", "p2-legislation", "p2-business", "p2-change", "p2-roles", "p2-emerging", "p2-hardware-software", "p2-networks", "p2-virtual-cloud", "p2-threats", "p2-mitigation"] },
    { id: "esp", title: "Employer Set Project", short: "ESP", colour: "green", kind: "core",
      desc: "The 14h 30m controlled project worth 40% of the core.",
      topics: ["esp-structure", "esp-pathways"] },
    { id: "di", title: "Digital Infrastructure", short: "Infrastructure", colour: "violet", kind: "specialism",
      desc: "Explain, install, configure, test and manage physical and virtual infrastructure. Leads to infrastructure technician.",
      topics: ["sh-controls", "sh-drp-risk", "sh-tech-controls", "sh-network-security", "sh-legislation", "di-design", "di-servers", "di-services", "di-itsm", "sh-sources"] },
    { id: "nc", title: "Network Cabling", short: "Cabling", colour: "brown", kind: "specialism",
      desc: "Install and test cabling in line with technical and security requirements. Leads to network cable installer.",
      topics: ["sh-controls", "sh-drp-risk", "sh-tech-controls", "sh-network-security", "sh-legislation", "nc-principles", "nc-fibre-copper", "nc-connectors-standards", "nc-testing", "nc-safety", "sh-sources"] },
    { id: "ds", title: "Digital Support", short: "Support", colour: "teal", kind: "specialism",
      desc: "Install, configure and support software applications and operating systems. Leads to digital support technician.",
      topics: ["sh-controls", "sh-drp-risk", "sh-tech-controls", "sh-network-security", "sh-legislation", "ds-agile", "ds-domain-cms", "ds-deployment", "ds-email-remote", "ds-assets-mdm", "sh-sources", "ds-incident-systems"] },
    { id: "cs", title: "Cyber Security", short: "Cyber", colour: "red", kind: "specialism",
      desc: "Propose remediation advice for a security risk assessment. Leads to cyber security technician.",
      topics: ["cs-governance", "cs-design-itsm", "cs-drp-controls", "cs-crypto", "cs-law-ethics", "cs-forensics", "cs-threats", "cs-vuln", "cs-risk", "cs-incident", "cs-mitigation", "sh-sources", "cs-sources-cni"] }
  ]
};
