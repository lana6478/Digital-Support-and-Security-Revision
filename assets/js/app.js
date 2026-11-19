/* DSS Revision – single-page app. No build step, no dependencies. */
(function () {
  "use strict";
  var R = window.REV;
  var main = document.getElementById("main");

  /* ---------- storage ---------- */
  var KEY = "dss-revision-v1";
  var store = { spec: null, rating: {}, cards: {}, quiz: {}, last: null };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && typeof saved === "object") for (var k in store) if (saved[k] !== undefined) store[k] = saved[k];
  } catch (e) { /* storage unavailable */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function md(s) { // tiny inline markdown: **bold**, *italic*, `code`
    return esc(s).replace(/\\\*/g, "&#42;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>").replace(/`(.+?)`/g, "<code>$1</code>");
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function section(id) { for (var i = 0; i < R.sections.length; i++) if (R.sections[i].id === id) return R.sections[i]; return null; }
  var SHARED = { id: "shared", title: "Shared specialism content", short: "Shared", colour: "steel", topics: [] };
  function homeSection(t) { return section(t.section) || SHARED; }
  function navSection(t) { // section used for next/previous links
    var mine = store.spec && section(store.spec);
    if (mine && mine.topics.indexOf(t.id) > -1) return mine;
    var own = section(t.section); if (own) return own;
    return topicSections(t.id)[0] || SHARED;
  }
  function topicSections(id) { return R.sections.filter(function (s) { return s.topics.indexOf(id) > -1; }); }
  function topicsOf(s) { return s.topics.map(function (id) { return R.topics[id]; }).filter(Boolean); }
  function cardsKnown(t) { var c = store.cards[t.id] || {}; var n = 0; (t.cards || []).forEach(function (_, i) { if (c[i] === 1) n++; }); return n; }
  function led(id) { var r = store.rating[id]; return r ? r : "off"; }
  var ratingWords = { r: "Not confident yet", a: "Getting there", g: "Confident", off: "Not rated" };
  function setTitle(t) { document.title = (t ? t + " – " : "") + "DSS Revision"; }
  function el(html) { main.innerHTML = html; main.focus({ preventScroll: true }); window.scrollTo(0, 0); }

  /* ---------- home: the patch panel ---------- */
  function port(t, s) {
    var known = cardsKnown(t), total = (t.cards || []).length, best = store.quiz[t.id];
    var r = led(t.id);
    return '<a class="port" href="#/t/' + t.id + '" data-led="' + r + '">' +
      '<span class="leds"><span class="led led-rate" title="' + ratingWords[r] + '"></span><span class="led led-quiz' + (best >= 80 ? " on" : "") + '" title="' + (best != null ? "Best quiz score " + best + "%" : "Quiz not taken") + '"></span></span>' +
      '<span class="jack" aria-hidden="true"><span class="pins"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></span>' +
      '<span class="port-label">' + esc(t.short || t.title) + '</span>' +
      '<span class="vh">. ' + ratingWords[r] + '. Flashcards ' + known + ' of ' + total + ' known.' + (best != null ? ' Best quiz ' + best + '%.' : '') + '</span>' +
      '</a>';
  }
  function rack(s) {
    var ts = topicsOf(s);
    var g = ts.filter(function (t) { return store.rating[t.id] === "g"; }).length;
    return '<section class="rack wire-' + s.colour + '" aria-labelledby="rk-' + s.id + '">' +
      '<div class="rack-head"><h2 id="rk-' + s.id + '"><a href="#/s/' + s.id + '">' + esc(s.title) + '</a></h2>' +
      '<p class="rack-meta">' + g + ' of ' + ts.length + ' topics rated confident</p></div>' +
      '<div class="panel"><span class="screw" aria-hidden="true"></span><div class="ports">' + ts.map(function (t) { return port(t, s); }).join("") + '</div><span class="screw" aria-hidden="true"></span></div>' +
      '</section>';
  }
  function renderHome() {
    setTitle("");
    var specs = R.sections.filter(function (s) { return s.kind === "specialism"; });
    var mine = store.spec ? section(store.spec) : null;
    var lastT = store.last && R.topics[store.last];
    var h = '<div class="hero"><div class="hero-text"><h1>Revise the whole Digital Support and Security T Level, one port at a time.</h1>' +
      '<p class="lede">Every topic is a port on the panel. Read the notes, test yourself with flashcards and quizzes, then rate how confident you feel. The light turns <span class="key key-r">red</span>, <span class="key key-a">amber</span> or <span class="key key-g">green</span> so you can see what to revise next.</p>' +
      '<div class="hero-actions">' + (lastT ? '<a class="btn" href="#/t/' + lastT.id + '">Carry on with ' + esc(lastT.title) + '</a>' : '<a class="btn" href="#/t/p1-comp-thinking">Start with Core Paper 1</a>') +
      '<a class="btn btn-ghost" href="#/quiz">Take a mixed quiz</a></div></div>' +
      '<aside class="legend" aria-label="What the lights mean"><p class="legend-title">Reading the lights</p><ul>' +
      '<li><span class="led" data-l="g"></span>Left light: your confidence rating</li><li><span class="led" data-l="q"></span>Right light: scored 80% or more on the quiz</li><li><span class="led" data-l="off"></span>Unlit: not done yet</li></ul></aside></div>';
    h += '<div class="racks">';
    R.sections.forEach(function (s) { if (s.kind === "core") h += rack(s); });
    h += '</div>';
    h += '<section class="spec-pick" aria-labelledby="sp-h"><h2 id="sp-h">Your occupational specialism</h2>';
    h += '<p>You study one specialism. Pick yours to show it on the panel. Security, risk and sources-of-knowledge topics are shared between Infrastructure, Cabling and Support, so they appear in each.</p><div class="spec-buttons" role="group" aria-label="Choose specialism">';
    specs.forEach(function (s) { h += '<button type="button" class="spec-btn wire-' + s.colour + '" aria-pressed="' + (store.spec === s.id) + '" data-spec="' + s.id + '">' + esc(s.title) + '</button>'; });
    h += '</div></section>';
    h += '<div class="racks">';
    if (mine) h += rack(mine);
    else specs.forEach(function (s) { h += rack(s); });
    h += '</div>';
    el(h);
    main.querySelectorAll("[data-spec]").forEach(function (b) {
      b.addEventListener("click", function () { store.spec = store.spec === b.dataset.spec ? null : b.dataset.spec; save(); renderHome(); var sp = document.getElementById("sp-h"); if (sp) sp.scrollIntoView(); });
    });
  }

  /* ---------- section page ---------- */
  function renderSection(id) {
    var s = section(id); if (!s) return notFound();
    setTitle(s.title);
    var h = '<div class="page wire-' + s.colour + '"><p class="crumbs"><a href="#/">Panel</a> / ' + esc(s.title) + '</p><h1>' + esc(s.title) + '</h1><p class="lede">' + esc(s.desc) + '</p>';
    h += '<ol class="topic-list">';
    topicsOf(s).forEach(function (t) {
      var known = cardsKnown(t), best = store.quiz[t.id];
      h += '<li><a href="#/t/' + t.id + '"><span class="led" data-l="' + led(t.id) + '"></span><span class="tl-main"><span class="tl-title">' + esc(t.title) + '</span><span class="tl-spec">' + esc(t.spec || "") + '</span></span>' +
        '<span class="tl-stats">' + known + '/' + (t.cards || []).length + ' cards' + (best != null ? ' · quiz ' + best + '%' : '') + '</span></a></li>';
    });
    h += '</ol><p><a class="btn" href="#/quiz/' + s.id + '">Quiz me on all of ' + esc(s.short) + '</a></p></div>';
    el(h);
  }

  /* ---------- topic page ---------- */
  var TABS = [["notes", "Notes"], ["cards", "Flashcards"], ["quiz", "Quiz"], ["exam", "Exam practice"]];
  function renderTopic(id, tab) {
    var t = R.topics[id]; if (!t) return notFound();
    var s = homeSection(t);
    tab = tab || "notes";
    if (tab === "exam" && !(t.exam && t.exam.length)) tab = "notes";
    store.last = id; save();
    setTitle(t.title);
    var secs = topicSections(id);
    var h = '<article class="page wire-' + s.colour + '"><p class="crumbs"><a href="#/">Panel</a> / ' + secs.map(function (x) { return '<a href="#/s/' + x.id + '">' + esc(x.title) + '</a>'; }).join(", ") + '</p>';
    h += '<h1>' + esc(t.title) + '</h1>';
    if (t.spec) h += '<p class="spec-ref">Specification ' + esc(t.spec) + '</p>';
    if (secs.length > 1) h += '<p class="shared-note">Shared content: this topic is part of ' + secs.map(function (x) { return esc(x.title); }).join(", ").replace(/, ([^,]*)$/, " and $1") + '.</p>';
    h += '<div class="tabs" role="tablist" aria-label="Ways to revise this topic">';
    TABS.forEach(function (x) {
      if (x[0] === "exam" && !(t.exam && t.exam.length)) return;
      var n = x[0] === "cards" ? (t.cards || []).length : x[0] === "quiz" ? (t.quiz || []).length : x[0] === "exam" ? t.exam.length : null;
      h += '<a role="tab" href="#/t/' + id + '/' + x[0] + '" aria-selected="' + (tab === x[0]) + '"' + (tab === x[0] ? ' aria-current="page"' : '') + '>' + x[1] + (n ? ' <span class="count">' + n + '</span>' : '') + '</a>';
    });
    h += '</div><div class="tab-body" id="tabBody"></div>';
    h += rateBox(t) + nextPrev(t, navSection(t)) + '</article>';
    el(h);
    var body = document.getElementById("tabBody");
    if (tab === "notes") body.innerHTML = notesHTML(t);
    else if (tab === "cards") flashcards(body, t);
    else if (tab === "quiz") quiz(body, t.title, (t.quiz || []).map(function (q) { return { q: q, t: t }; }), t.id);
    else if (tab === "exam") exam(body, t);
    bindRate(t);
  }

  function notesHTML(t) {
    var h = '';
    if (t.summary) h += '<p class="summary">' + md(t.summary) + '</p>';
    (t.notes || []).forEach(function (n) {
      h += '<section class="note"><h2>' + md(n.h) + '</h2>';
      if (n.p) h += '<p>' + md(n.p) + '</p>';
      if (n.list) h += '<ul>' + n.list.map(function (x) { return '<li>' + md(x) + '</li>'; }).join("") + '</ul>';
      if (n.steps) h += '<ol class="steps">' + n.steps.map(function (x) { return '<li>' + md(x) + '</li>'; }).join("") + '</ol>';
      if (n.table) {
        h += '<div class="table-wrap"><table><thead><tr>' + n.table[0].map(function (c) { return '<th scope="col">' + md(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
        n.table.slice(1).forEach(function (r) { h += '<tr>' + r.map(function (c, i) { return i === 0 ? '<th scope="row">' + md(c) + '</th>' : '<td>' + md(c) + '</td>'; }).join("") + '</tr>'; });
        h += '</tbody></table></div>';
      }
      if (n.after) h += '<p>' + md(n.after) + '</p>';
      h += '</section>';
    });
    if (t.memory && t.memory.length) h += '<aside class="memory"><h2>Memory hooks</h2><ul>' + t.memory.map(function (x) { return '<li>' + md(x) + '</li>'; }).join("") + '</ul></aside>';
    if (t.tips && t.tips.length) h += '<aside class="tips"><h2>Exam and project tips</h2><ul>' + t.tips.map(function (x) { return '<li>' + md(x) + '</li>'; }).join("") + '</ul></aside>';
    h += '<p class="next-step">Read it once? Now close the notes and <a href="#/t/' + t.id + '/cards">test yourself with the flashcards</a>.</p>';
    return h;
  }

  function rateBox(t) {
    var r = store.rating[t.id];
    var h = '<section class="rate" aria-labelledby="rate-h"><h2 id="rate-h">How confident are you with this topic?</h2><div class="rate-btns" role="group" aria-labelledby="rate-h">';
    [["r", "Not yet"], ["a", "Getting there"], ["g", "Confident"]].forEach(function (x) {
      h += '<button type="button" class="rate-btn" data-rate="' + x[0] + '" aria-pressed="' + (r === x[0]) + '"><span class="led" data-l="' + x[0] + '"></span>' + x[1] + '</button>';
    });
    return h + '</div><p class="rate-note" aria-live="polite"></p></section>';
  }
  function bindRate(t) {
    main.querySelectorAll("[data-rate]").forEach(function (b) {
      b.addEventListener("click", function () {
        store.rating[t.id] = b.dataset.rate; save();
        main.querySelectorAll("[data-rate]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        main.querySelector(".rate-note").textContent = "Saved. This port now shows " + ratingWords[b.dataset.rate].toLowerCase() + " on the panel.";
      });
    });
  }
  function nextPrev(t, s) {
    var list = s.topics, i = list.indexOf(t.id), p = R.topics[list[i - 1]], n = R.topics[list[i + 1]];
    if (!p && !n) return "";
    return '<nav class="np" aria-label="Next and previous topic">' + (p ? '<a href="#/t/' + p.id + '" rel="prev"><span>Previous</span>' + esc(p.title) + '</a>' : '<span></span>') + (n ? '<a href="#/t/' + n.id + '" rel="next"><span>Next</span>' + esc(n.title) + '</a>' : '') + '</nav>';
  }

  /* ---------- flashcards ---------- */
  function flashcards(body, t, deckOverride, title) {
    var all = deckOverride || (t.cards || []).map(function (c, i) { return { t: t, i: i, f: c[0], b: c[1] }; });
    var onlyWeak = false, deck = all.slice(), pos = 0, flipped = false;
    function status(c) { return (store.cards[c.t.id] || {})[c.i]; }
    function draw() {
      if (!deck.length) {
        body.innerHTML = '<div class="empty"><p>' + (onlyWeak ? "No cards left to practise here. Every card is marked as known." : "There are no flashcards here yet.") + '</p>' + (onlyWeak ? '<button class="btn" type="button" id="fcAll">Show all cards again</button>' : '') + '</div>';
        var a = document.getElementById("fcAll"); if (a) a.onclick = function () { onlyWeak = false; deck = all.slice(); pos = 0; draw(); };
        return;
      }
      if (pos >= deck.length) return finished();
      var c = deck[pos], st = status(c);
      var known = all.filter(function (x) { return status(x) === 1; }).length;
      body.innerHTML = '<div class="fc-tools"><p class="fc-count">Card ' + (pos + 1) + ' of ' + deck.length + ' · ' + known + ' of ' + all.length + ' known</p>' +
        '<div><button class="btn-small" type="button" id="fcShuffle">Shuffle</button> <button class="btn-small" type="button" id="fcWeak" aria-pressed="' + onlyWeak + '">Only cards I don\'t know</button></div></div>' +
        '<div class="fc-progress" aria-hidden="true"><span style="width:' + Math.round(100 * known / all.length) + '%"></span></div>' +
        '<button type="button" class="card' + (flipped ? " flipped" : "") + '" id="fcCard" aria-live="polite" aria-label="' + (flipped ? "Answer. Press to see the question" : "Question. Press to reveal the answer") + '">' +
        '<span class="card-face card-front"><span class="card-side">Question' + (deckOverride ? ' · ' + esc(c.t.short || c.t.title) : '') + '</span><span class="card-text">' + md(c.f) + '</span><span class="card-hint">Tap or press Space to reveal</span></span>' +
        '<span class="card-face card-back"><span class="card-side">Answer</span><span class="card-text">' + md(c.b) + '</span></span></button>' +
        '<div class="fc-actions"' + (flipped ? '' : ' hidden') + '><button type="button" class="btn btn-no" id="fcNo">Not yet <kbd>1</kbd></button><button type="button" class="btn btn-yes" id="fcYes">Got it <kbd>2</kbd></button></div>' +
        (st === 1 ? '<p class="fc-was">You marked this one as known last time.</p>' : st === 0 ? '<p class="fc-was">You were still learning this one last time.</p>' : '');
      document.getElementById("fcCard").onclick = flip;
      document.getElementById("fcShuffle").onclick = function () { deck = shuffle(deck); pos = 0; flipped = false; draw(); };
      document.getElementById("fcWeak").onclick = function () { onlyWeak = !onlyWeak; deck = onlyWeak ? all.filter(function (x) { return status(x) !== 1; }) : all.slice(); pos = 0; flipped = false; draw(); };
      var yes = document.getElementById("fcYes"), no = document.getElementById("fcNo");
      if (yes) { yes.onclick = function () { mark(1); }; no.onclick = function () { mark(0); }; }
    }
    function flip() { flipped = !flipped; draw(); var c = document.getElementById("fcCard"); if (c) c.focus(); }
    function mark(v) { var c = deck[pos]; store.cards[c.t.id] = store.cards[c.t.id] || {}; store.cards[c.t.id][c.i] = v; save(); pos++; flipped = false; draw(); var cc = document.getElementById("fcCard"); if (cc) cc.focus(); }
    function finished() {
      var known = all.filter(function (x) { return status(x) === 1; }).length;
      body.innerHTML = '<div class="done"><h2>End of the deck</h2><p>You know ' + known + ' of ' + all.length + ' cards.</p><div class="done-btns">' +
        (known < all.length ? '<button class="btn" type="button" id="fcRetry">Practise the ' + (all.length - known) + ' I don\'t know</button>' : '') +
        '<button class="btn btn-ghost" type="button" id="fcRestart">Go through all cards again</button>' + (t ? '<a class="btn btn-ghost" href="#/t/' + t.id + '/quiz">Take the quiz</a>' : '') + '</div></div>';
      var rt = document.getElementById("fcRetry"); if (rt) rt.onclick = function () { onlyWeak = true; deck = all.filter(function (x) { return status(x) !== 1; }); pos = 0; draw(); };
      document.getElementById("fcRestart").onclick = function () { onlyWeak = false; deck = all.slice(); pos = 0; draw(); };
    }
    keyHandler = function (e) {
      if (e.target.tagName === "INPUT") return;
      if (e.key === " " && e.target.id !== "fcCard" && document.getElementById("fcCard")) { e.preventDefault(); flip(); }
      else if (flipped && e.key === "1") mark(0);
      else if (flipped && e.key === "2") mark(1);
    };
    draw();
  }

  /* ---------- quiz ---------- */
  function quiz(body, title, items, saveId) {
    if (!items.length) { body.innerHTML = '<div class="empty"><p>No quiz questions here yet.</p></div>'; return; }
    var qs = shuffle(items).map(function (it) {
      var q = it.q, opts = q[1].map(function (o, i) { return { o: o, right: i === q[2] }; });
      return { text: q[0], opts: shuffle(opts), expl: q[3], t: it.t };
    });
    var pos = 0, score = 0, wrong = [], origSave = saveId;
    function draw() {
      if (pos >= qs.length) return result();
      var q = qs[pos];
      var h = '<div class="quiz"><p class="q-count">Question ' + (pos + 1) + ' of ' + qs.length + (saveId ? '' : ' · ' + esc(q.t.short || q.t.title)) + '</p>' +
        '<div class="fc-progress" aria-hidden="true"><span style="width:' + Math.round(100 * pos / qs.length) + '%"></span></div>' +
        '<fieldset><legend class="q-text">' + md(q.text) + '</legend><div class="opts">';
      q.opts.forEach(function (o, i) { h += '<button type="button" class="opt" data-i="' + i + '"><span class="opt-key">' + "ABCD"[i] + '</span><span>' + md(o.o) + '</span></button>'; });
      h += '</div></fieldset><div class="feedback" aria-live="polite"></div></div>';
      body.innerHTML = h;
      body.querySelectorAll(".opt").forEach(function (b) { b.onclick = function () { answer(+b.dataset.i); }; });
      var f = body.querySelector(".opt"); if (f) f.focus();
    }
    function answer(i) {
      var q = qs[pos], ok = q.opts[i].right;
      if (ok) score++; else wrong.push(q);
      body.querySelectorAll(".opt").forEach(function (b, j) {
        b.disabled = true;
        if (q.opts[j].right) b.classList.add("right");
        else if (j === i) b.classList.add("wrong");
      });
      var fb = body.querySelector(".feedback");
      fb.innerHTML = '<p class="verdict ' + (ok ? "ok" : "no") + '">' + (ok ? "Correct." : "Not quite. The answer is highlighted.") + '</p>' + (q.expl ? '<p>' + md(q.expl) + '</p>' : '') +
        '<button type="button" class="btn" id="qNext">' + (pos + 1 < qs.length ? "Next question" : "See my score") + ' <kbd>Enter</kbd></button>';
      document.getElementById("qNext").onclick = function () { pos++; draw(); };
      document.getElementById("qNext").focus();
    }
    function result() {
      var pct = Math.round(100 * score / qs.length);
      if (saveId) { if (store.quiz[saveId] == null || pct > store.quiz[saveId]) store.quiz[saveId] = pct; save(); }
      var msg = pct >= 80 ? "Strong result. If you got this without checking your notes, you're ready to rate this topic green." : pct >= 50 ? "Solid start. Go back over the questions you missed, then try again." : "Worth another look at the notes and flashcards before trying again.";
      var h = '<div class="done"><h2>You scored ' + score + ' out of ' + qs.length + ' (' + pct + '%)</h2><p>' + msg + '</p>';
      if (saveId && store.quiz[saveId] != null) h += '<p class="best">Your best score on this quiz: ' + store.quiz[saveId] + '%</p>';
      if (wrong.length) {
        h += '<h3>Questions to go over</h3><ul class="missed">';
        wrong.forEach(function (q) { var r = q.opts.filter(function (o) { return o.right; })[0]; h += '<li><p>' + md(q.text) + '</p><p class="missed-a">Answer: ' + md(r.o) + '</p></li>'; });
        h += '</ul>';
      }
      h += '<div class="done-btns">' + (wrong.length ? '<button class="btn" type="button" id="qWrong">Retry the ' + wrong.length + ' I got wrong</button>' : '') + '<button class="btn btn-ghost" type="button" id="qAgain">Try the whole quiz again</button></div></div>';
      body.innerHTML = h;
      var w = document.getElementById("qWrong");
      if (w) w.onclick = function () { qs = shuffle(wrong); wrong = []; pos = 0; score = 0; saveId = null; draw(); };
      document.getElementById("qAgain").onclick = function () { quiz(body, title, items, origSave); };
      body.querySelector("h2").setAttribute("tabindex", "-1"); body.querySelector("h2").focus();
    }
    keyHandler = function (e) {
      if (e.target.tagName === "INPUT") return;
      var k = e.key.toUpperCase(), idx = "ABCD".indexOf(k);
      if (idx < 0 && /^[1-4]$/.test(e.key)) idx = +e.key - 1;
      var opts = body.querySelectorAll(".opt:not([disabled])");
      if (idx > -1 && opts[idx]) { e.preventDefault(); opts[idx].click(); }
    };
    draw();
  }

  /* ---------- exam practice ---------- */
  function exam(body, t) {
    var h = '<p class="summary">Write your answer on paper first, in full sentences, then reveal the mark scheme and tick off each point you made. Check the <a href="#/t/exam-technique">command words</a> so you answer the question that was asked.</p>';
    t.exam.forEach(function (q, i) {
      h += '<section class="exq"><h2><span class="exq-n">Q' + (i + 1) + '</span> ' + md(q.q) + ' <span class="marks">(' + q.marks + ' mark' + (q.marks > 1 ? "s" : "") + ')</span></h2>' +
        (q.context ? '<p class="exq-ctx">' + md(q.context) + '</p>' : '') +
        '<details><summary>Show mark scheme</summary><p class="ms-intro">Award marks for points such as:</p><ul class="ms">' +
        q.points.map(function (p, j) { return '<li><label><input type="checkbox" data-q="' + i + '"> ' + md(p) + '</label></li>'; }).join("") + '</ul>' +
        (q.note ? '<p class="ms-note">' + md(q.note) + '</p>' : '') + '<p class="ms-score" id="ms' + i + '" aria-live="polite"></p></details></section>';
    });
    body.innerHTML = h;
    body.querySelectorAll("input[type=checkbox]").forEach(function (c) {
      c.onchange = function () {
        var i = c.dataset.q, n = body.querySelectorAll('input[data-q="' + i + '"]:checked').length;
        document.getElementById("ms" + i).textContent = "You ticked " + n + " point" + (n === 1 ? "" : "s") + ". That's roughly " + Math.min(n, t.exam[i].marks) + " of " + t.exam[i].marks + " marks.";
      };
    });
  }

  /* ---------- mixed quiz ---------- */
  function renderMixed(preset) {
    setTitle("Mixed quiz");
    var h = '<div class="page wire-steel"><p class="crumbs"><a href="#/">Panel</a> / Mixed quiz</p><h1>Mixed quiz</h1><p class="lede">Questions drawn at random from the areas you choose. Mixing topics is one of the best ways to prepare for an exam, because you have to work out which idea each question needs.</p>' +
      '<form id="mixForm" class="mix"><fieldset><legend>Areas to include</legend><div class="mix-grid">';
    R.sections.forEach(function (s) {
      var n = topicsOf(s).reduce(function (a, t) { return a + (t.quiz || []).length; }, 0);
      var on = preset ? preset === s.id : (s.kind === "core" || s.id === store.spec);
      h += '<label class="mix-opt wire-' + s.colour + '"><input type="checkbox" name="s" value="' + s.id + '"' + (on ? " checked" : "") + '> ' + esc(s.title) + ' <span>' + n + ' questions</span></label>';
    });
    h += '</div></fieldset><fieldset><legend>How many questions?</legend><div class="mix-n">';
    [10, 20, 40].forEach(function (n, i) { h += '<label><input type="radio" name="n" value="' + n + '"' + (i === 0 ? " checked" : "") + '> ' + n + '</label>'; });
    h += '</div></fieldset><label class="mix-weak"><input type="checkbox" name="weak"> Only topics I haven\'t rated green</label><p class="mix-err" aria-live="polite"></p><button class="btn" type="submit">Start the quiz</button></form><div id="mixBody"></div></div>';
    el(h);
    document.getElementById("mixForm").onsubmit = function (e) {
      e.preventDefault();
      var f = e.target, chosen = [].slice.call(f.querySelectorAll('[name=s]:checked')).map(function (x) { return x.value; });
      var n = +f.querySelector('[name=n]:checked').value, weak = f.querySelector('[name=weak]').checked, seen = {}, items = [];
      chosen.forEach(function (sid) { topicsOf(section(sid)).forEach(function (t) {
        if (seen[t.id] || (weak && store.rating[t.id] === "g")) return; seen[t.id] = 1;
        (t.quiz || []).forEach(function (q) { items.push({ q: q, t: t }); });
      }); });
      if (!items.length) { f.querySelector(".mix-err").textContent = "Choose at least one area with questions in it."; return; }
      items = shuffle(items).slice(0, n);
      f.hidden = true;
      quiz(document.getElementById("mixBody"), "Mixed quiz", items, null);
    };
  }

  /* ---------- review weak cards ---------- */
  function renderReview() {
    setTitle("Review weak cards");
    var deck = [];
    R.order.forEach(function (id) { var t = R.topics[id], c = store.cards[id] || {}; (t.cards || []).forEach(function (x, i) { if (c[i] === 0) deck.push({ t: t, i: i, f: x[0], b: x[1] }); }); });
    var h = '<div class="page wire-steel"><p class="crumbs"><a href="#/">Panel</a> / Review weak cards</p><h1>Review weak cards</h1><p class="lede">Every flashcard you marked "Not yet", from every topic, in one deck. Mark a card "Got it" and it leaves this pile.</p><div id="rvBody"></div></div>';
    el(h);
    var body = document.getElementById("rvBody");
    if (!deck.length) { body.innerHTML = '<div class="empty"><p>Nothing to review yet. When you mark a flashcard "Not yet" it will appear here.</p><a class="btn" href="#/">Back to the panel</a></div>'; return; }
    flashcards(body, null, shuffle(deck));
  }

  /* ---------- progress ---------- */
  function renderProgress() {
    setTitle("My progress");
    var h = '<div class="page wire-steel"><p class="crumbs"><a href="#/">Panel</a> / My progress</p><h1>My progress</h1><p class="lede">Everything is stored in this browser. If you clear your browsing data or switch device, it starts again.</p>';
    var shown = R.sections.filter(function (s) { return s.kind === "core" || !store.spec || s.id === store.spec; });
    shown.forEach(function (s) {
      var ts = topicsOf(s), counts = { g: 0, a: 0, r: 0, off: 0 };
      ts.forEach(function (t) { counts[led(t.id)]++; });
      h += '<section class="prog wire-' + s.colour + '"><h2>' + esc(s.title) + '</h2><div class="prog-bar" role="img" aria-label="' + counts.g + ' confident, ' + counts.a + ' getting there, ' + counts.r + ' not yet, ' + counts.off + ' not rated">' +
        ["g", "a", "r", "off"].map(function (k) { return counts[k] ? '<span class="pb-' + k + '" style="flex:' + counts[k] + '"></span>' : ''; }).join("") + '</div>' +
        '<div class="table-wrap"><table class="prog-table"><thead><tr><th scope="col">Topic</th><th scope="col">Rating</th><th scope="col">Cards known</th><th scope="col">Best quiz</th></tr></thead><tbody>';
      ts.forEach(function (t) {
        h += '<tr><th scope="row"><a href="#/t/' + t.id + '">' + esc(t.title) + '</a></th><td><span class="led" data-l="' + led(t.id) + '"></span> ' + ratingWords[led(t.id)] + '</td><td>' + cardsKnown(t) + ' / ' + (t.cards || []).length + '</td><td>' + (store.quiz[t.id] != null ? store.quiz[t.id] + "%" : "–") + '</td></tr>';
      });
      h += '</tbody></table></div></section>';
    });
    h += '<section class="reset"><h2>Start again</h2><p>Clear every rating, flashcard mark and quiz score saved in this browser.</p><button class="btn btn-no" type="button" id="resetBtn">Clear my progress</button><p class="reset-note" aria-live="polite"></p></section></div>';
    el(h);
    var b = document.getElementById("resetBtn"), armed = false;
    b.onclick = function () {
      if (!armed) { armed = true; b.textContent = "Press again to clear everything"; return; }
      store = { spec: store.spec, rating: {}, cards: {}, quiz: {}, last: null }; save(); renderProgress();
      main.querySelector(".reset-note").textContent = "Progress cleared.";
    };
  }

  /* ---------- search ---------- */
  function renderSearch(term) {
    setTitle("Search");
    term = (term || "").trim();
    var q = term.toLowerCase(), topics = [], cards = [];
    if (q.length > 1) {
      R.order.forEach(function (id) {
        var t = R.topics[id];
        var blob = (t.title + " " + (t.summary || "") + " " + (t.notes || []).map(function (n) { return n.h + " " + (n.p || "") + " " + (n.list || []).join(" ") + " " + (n.steps || []).join(" ") + " " + (n.table || []).join(" "); }).join(" ")).toLowerCase();
        if (blob.indexOf(q) > -1) topics.push(t);
        (t.cards || []).forEach(function (c) { if ((c[0] + " " + c[1]).toLowerCase().indexOf(q) > -1) cards.push({ t: t, c: c }); });
      });
    }
    var h = '<div class="page wire-steel"><p class="crumbs"><a href="#/">Panel</a> / Search</p><h1>Search results for “' + esc(term) + '”</h1>';
    if (q.length < 2) h += '<p>Type at least two letters in the search box.</p>';
    else if (!topics.length && !cards.length) h += '<p>Nothing matched “' + esc(term) + '”. Try a shorter word or an abbreviation, such as “GDPR” or “RAID”.</p>';
    if (topics.length) h += '<h2>Topics (' + topics.length + ')</h2><ul class="topic-list">' + topics.map(function (t) { return '<li><a href="#/t/' + t.id + '"><span class="led" data-l="' + led(t.id) + '"></span><span class="tl-main"><span class="tl-title">' + esc(t.title) + '</span><span class="tl-spec">' + esc(homeSection(t).title) + '</span></span></a></li>'; }).join("") + '</ul>';
    if (cards.length) h += '<h2>Flashcards (' + cards.length + ')</h2><dl class="found-cards">' + cards.slice(0, 80).map(function (x) { return '<div><dt>' + md(x.c[0]) + '</dt><dd>' + md(x.c[1]) + ' <a href="#/t/' + x.t.id + '">' + esc(x.t.title) + '</a></dd></div>'; }).join("") + '</dl>';
    el(h + '</div>');
  }

  function notFound() { setTitle("Not found"); el('<div class="page"><h1>That page doesn\'t exist</h1><p>The link may be out of date. <a href="#/">Go back to the panel</a> to find your topic.</p></div>'); }

  /* ---------- router ---------- */
  var keyHandler = null;
  document.addEventListener("keydown", function (e) { if (keyHandler && !e.ctrlKey && !e.metaKey && !e.altKey) keyHandler(e); });
  function route() {
    keyHandler = null;
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/").map(decodeURIComponent);
    document.querySelectorAll(".nav a").forEach(function (a) { a.removeAttribute("aria-current"); if (a.getAttribute("href") === "#/" + parts.slice(0, 2).join("/") || a.getAttribute("href") === "#/" + parts[0]) a.setAttribute("aria-current", "page"); });
    switch (parts[0]) {
      case "": return renderHome();
      case "s": return renderSection(parts[1]);
      case "t": return renderTopic(parts[1], parts[2]);
      case "quiz": return renderMixed(parts[1]);
      case "review": return renderReview();
      case "progress": return renderProgress();
      case "search": return renderSearch(parts.slice(1).join("/"));
      default: return notFound();
    }
  }
  document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault(); var v = document.getElementById("q").value; location.hash = "#/search/" + encodeURIComponent(v);
  });
  window.addEventListener("hashchange", route);
  route();
})();
