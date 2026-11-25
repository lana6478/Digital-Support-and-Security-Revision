# Digital Support and Security T Level – Revision

A free revision website for the **T Level Technical Qualification in Digital Support and Security (Level 3)**. It covers the same content as the [Digital Support and Security T Level study guide](https://github.com/lana6478/Digital-Suport-and-security-T-levle), reorganised for active revision rather than reading.

**Live site:** https://lana6478.github.io/Digital-Support-and-Security-Revision/ (once GitHub Pages is switched on – see below)

## What's in it

Every topic is shown as a port on a network patch panel. Each topic has:

- **Notes** – condensed revision notes, tables and memory hooks
- **Flashcards** – flip cards you mark "Got it" or "Not yet"
- **Quiz** – multiple-choice questions with instant feedback and explanations
- **Exam practice** – exam-style questions with mark schemes you can tick off (core topics)
- **Confidence rating** – rate yourself red, amber or green; the port's light changes on the panel

Across the whole site:

- **Mixed quiz** – random questions from any combination of areas
- **Review weak cards** – every flashcard you marked "Not yet", in one deck
- **My progress** – ratings, cards known and best quiz scores for every topic
- **Search** – across all notes and flashcards

Coverage: course structure and grading, exam technique, **Core Paper 1**, **Core Paper 2**, the **Employer Set Project**, and all four occupational specialisms (**Digital Infrastructure, Network Cabling, Digital Support, Cyber Security**). That's 60 topics, about 1,590 flashcards, 380 quiz questions and 25 exam-style questions.

Progress is saved in the visitor's own browser (localStorage). Nothing is sent anywhere.

**Moving progress to another device:** on the *My progress* page, students create a transfer code on one device and open it on another – by copying and pasting the code, downloading it as a file, or scanning a QR code with their phone (which opens the site with the progress ready to import). Imported progress is merged in: ratings and flashcard marks from the code replace those on the receiving device, and the best quiz score is kept. The QR code is made in the browser with [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT licence, `assets/js/vendor/qrcode.js`).

## Turning on the website (GitHub Pages)

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
3. Choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute the site is live at the address above.

There's no build step – it's plain HTML, CSS and JavaScript. You can also open `index.html` directly in a browser.

## Editing the content

All revision content lives in `data/`, one file per area:

| File | Covers |
|---|---|
| `sections.js` | The areas shown on the panel and which topics belong to each |
| `overview.js` | Course structure, grading, exam technique |
| `core-paper-1.js` | Core Paper 1 |
| `core-paper-2.js` | Core Paper 2 |
| `esp.js` | Employer Set Project |
| `shared-specialism.js` | Security and sources-of-knowledge topics shared by the specialisms |
| `digital-infrastructure.js`, `network-cabling.js`, `digital-support.js`, `cyber-security.js` | Each specialism's own topics |
| `extra-cards-core.js`, `extra-cards-specialisms.js` | Extra flashcards added to existing topics so every examinable point has a card |

Each topic is one `REV.add({...})` block:

```js
REV.add({
  id: "p1-example", section: "p1", title: "Topic title", short: "Port label",
  spec: "Core 1.1",
  summary: "One-paragraph overview. **Bold** works.",
  notes: [
    { h: "Heading", p: "Paragraph", list: ["bullet", "bullet"] },
    { h: "Steps", steps: ["first", "second"] },
    { h: "Table", table: [["Header", "Header"], ["row", "row"]] }
  ],
  memory: ["Mnemonics"],
  tips: ["Exam tips"],
  cards: [["Question", "Answer"]],
  quiz: [["Question", ["A", "B", "C", "D"], 1, "Explanation (1 = the second option is correct)"]],
  exam: [{ q: "Question", marks: 4, points: ["mark scheme point"] }]
});
```

To add flashcards to an existing topic, use `REV.addCards("topic-id", [["Question", "Answer"], ...]);` in one of the extra-cards files. Always add new cards to the **end** of a deck: students' saved progress is stored by card position, so inserting cards in the middle would mix up their marks.

To add a new topic, add a block like this and put its `id` into the right section's `topics` list in `sections.js`. Quiz options are shuffled when shown, so the correct option can go anywhere.

## Is this official?

No. It's an **independent, unofficial** revision resource based on the specification. It isn't produced or endorsed by Pearson or IfATE and may contain mistakes. For anything that matters for your grade, check the [official specification](https://qualifications.pearson.com/en/qualifications/t-levels/digital-support-and-security.html) and your course provider.
