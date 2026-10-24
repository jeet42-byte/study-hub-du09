// Checker: a similarity report against course material plus an AI-writing-style
// indicator, both with highlighting. Everything runs in the browser — nothing is uploaded.
(function () {
  const N = 5; // words per shingle; a match needs at least `minWords` consecutive matched words
  const COLORS = 6;
  const STOP = new Set(
    ('a an the of to in on for and or but nor is are was were be been being by with as at from that this ' +
      'these those it its into than then there their they them we our you your he she his her i me my not no ' +
      'so such can could may might will would should shall do does did has have had which who whom whose what ' +
      'when where while also if about over under between through during each other any all some more most')
      .split(' ')
  );

  // ── Text helpers ─────────────────────────────────────────
  const WORD = /[\p{L}\p{N}]+(?:['’][\p{L}]+)*/gu;
  function norm(w) {
    w = w.toLowerCase().replace(/’/g, "'").replace(/'s$/, '').replace(/'/g, '');
    if (w.length > 4 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1);
    return w;
  }
  function tokenize(text) {
    const out = [];
    for (const m of text.matchAll(WORD)) out.push({ w: norm(m[0]), s: m.index, e: m.index + m[0].length });
    return out;
  }
  function shingleKey(t, i) {
    let content = 0;
    const ws = [];
    for (let k = 0; k < N; k++) {
      ws.push(t[i + k].w);
      if (!STOP.has(t[i + k].w)) content++;
    }
    return content >= 2 ? ws.join(' ') : null; // "in the case of the" alone is not a match
  }
  const countWords = (s) => (s.match(WORD) || []).length;

  // Start of a "References" / "Bibliography" heading line (last one wins), or -1.
  function bibStart(text) {
    const re = /^[ \t]*(references|reference list|bibliography|works cited)[ \t]*:?[ \t]*$/gim;
    let last = -1;
    let m;
    while ((m = re.exec(text))) last = m.index;
    return last;
  }
  function quoteRanges(text) {
    const out = [];
    const re = /“[^”]{2,1500}”|"[^"\n]{2,1500}"/g;
    let m;
    while ((m = re.exec(text))) out.push([m.index, m.index + m[0].length]);
    return out;
  }

  // Wrap non-overlapping [start, end, open, close] ranges inside text[from, to).
  function wrap(text, from, to, ranges) {
    let html = '';
    let pos = from;
    for (const [s, e, open, close] of ranges) {
      if (s < pos || e > to) continue;
      html += U.esc(text.slice(pos, s)) + open + U.esc(text.slice(s, e)) + close;
      pos = e;
    }
    return html + U.esc(text.slice(pos, to));
  }

  // ── Similarity ───────────────────────────────────────────
  function buildIndex(sources) {
    const idx = new Map();
    sources.forEach((src, si) => {
      src.tokens = tokenize(src.text);
      const t = src.tokens;
      for (let i = 0; i + N <= t.length; i++) {
        const key = shingleKey(t, i);
        if (!key) continue;
        let hits = idx.get(key);
        if (!hits) idx.set(key, (hits = []));
        if (!hits.some((h) => h[0] === si)) hits.push([si, i]);
      }
    });
    return idx;
  }

  function similarity(text, tokens, sources, idx, opt) {
    const bib = opt.exBib ? bibStart(text) : -1;
    const quotes = opt.exQuotes ? quoteRanges(text) : [];
    const state = new Array(tokens.length).fill('');
    let q = 0;
    tokens.forEach((t, i) => {
      if (bib >= 0 && t.s >= bib) return (state[i] = 'bib');
      while (q < quotes.length && quotes[q][1] <= t.s) q++;
      if (q < quotes.length && t.s >= quotes[q][0]) state[i] = 'quote';
    });

    const hits = new Array(tokens.length).fill(null);
    const covered = new Uint8Array(tokens.length);
    const quoted = new Uint8Array(tokens.length);
    for (let i = 0; i + N <= tokens.length; i++) {
      const span = state.slice(i, i + N);
      if (span.includes('bib')) continue;
      const key = shingleKey(tokens, i);
      const h = key && idx.get(key);
      if (!h) continue;
      if (span.includes('quote')) {
        for (let k = i; k < i + N; k++) if (state[k] === 'quote') quoted[k] = 1;
        continue;
      }
      hits[i] = h;
      covered.fill(1, i, i + N);
    }

    const matches = [];
    for (let a = 0; a < tokens.length; ) {
      if (!covered[a]) {
        a++;
        continue;
      }
      let b = a;
      while (b < tokens.length && covered[b]) b++;
      if (b - a >= opt.minWords) {
        const votes = new Map();
        for (let i = a; i <= b - N; i++) if (hits[i]) for (const [si] of hits[i]) votes.set(si, (votes.get(si) || 0) + 1);
        const [si] = [...votes.entries()].sort((x, y) => y[1] - x[1])[0];
        let i0 = a;
        while (!(hits[i0] && hits[i0].some((h) => h[0] === si))) i0++;
        const p = hits[i0].find((h) => h[0] === si)[1];
        const st = sources[si].tokens;
        const from = Math.max(0, p - (i0 - a));
        const to = Math.min(st.length - 1, from + (b - a) - 1);
        matches.push({ a, b, si, from, to, also: [...votes.keys()].filter((x) => x !== si) });
      }
      a = b;
    }

    const counted = tokens.filter((_, i) => state[i] !== 'bib').length;
    const bySource = new Map();
    let matched = 0;
    for (const m of matches) {
      matched += m.b - m.a;
      bySource.set(m.si, (bySource.get(m.si) || 0) + (m.b - m.a));
    }
    const ranked = [...bySource.entries()]
      .sort((x, y) => y[1] - x[1])
      .map(([si, words], k) => ({ si, words, color: k % COLORS, pct: counted ? words / counted : 0 }));
    const colorOf = new Map(ranked.map((r) => [r.si, r.color]));
    matches.forEach((m) => (m.color = colorOf.get(m.si)));

    // Quoted matches are shown in grey but not counted.
    const quotedRuns = [];
    for (let a = 0; a < tokens.length; a++) {
      if (!quoted[a]) continue;
      let b = a;
      while (b < tokens.length && quoted[b]) b++;
      quotedRuns.push([a, b]);
      a = b;
    }
    return { matches, ranked, quotedRuns, counted, matched, pct: counted ? matched / counted : 0, bib, quotes: quotes.length };
  }

  // ── AI-writing-style signals ─────────────────────────────
  // Phrases that chat assistants overuse, with a weight. Common academic words weigh little.
  const PHRASES = [
    ['delv(?:e|es|ed|ing)', 2], ['tapestry', 2], ['(?:a )?testament to', 2], ['multifaceted', 2],
    ['navigat(?:e|es|ing) the (?:complexities|complex|landscape|challenges|intricacies)', 2],
    ['ever-(?:evolving|changing|growing|increasing)', 2], ["in today'?s (?:digital|fast-paced|modern|interconnected|rapidly|world)", 2],
    ['(?:in|of) the digital age', 1.5], ['rapidly evolving', 1.5], ['cannot be overstated', 2], ['complex interplay', 2],
    ['play(?:s|ing|ed)? (?:a )?(?:crucial|pivotal|vital|key|significant|critical|central|important) role', 2],
    ['a myriad of', 2], ['plethora', 2], ['in the realm of', 1.5], ['realm', 1], ['embark(?:s|ed|ing)? on', 1.5],
    ['underscor(?:e|es|ed|ing)', 1.5], ['it is (?:important|crucial|essential|vital) to (?:note|remember|recognize|understand)', 1.5],
    ["it(?: is|'s) worth (?:noting|mentioning)", 1.5], ['shed(?:s|ding)? light on', 1.5], ['pav(?:e|es|ed|ing) the way', 1.5],
    ['valuable insights?', 1.5], ['key takeaways?', 1.5], ['at its core', 1.5], ['bridg(?:e|es|ing) the gap', 1.5],
    ['(?:a )?double-edged sword', 1.5], ['game[- ]changer', 1.5], ['in an era (?:of|where)', 1.5], ['paramount', 1.5],
    ['(?:serves|stands) as an? ', 1], ['a (?:wide|broad|diverse|vast) (?:range|array|spectrum|variety) of', 1],
    ['landscape', 1], ['intricate', 1], ['intricacies', 1], ['nuanced', 1], ['holistic', 1], ['seamless(?:ly)?', 1],
    ['robust', 1], ['leverag(?:e|es|ed|ing)', 1], ['foster(?:s|ed|ing)?', 1], ['harness(?:es|ed|ing)?', 1],
    ['streamlin(?:e|es|ed|ing)', 1], ['empower(?:s|ed|ing|ment)?', 1], ['unlock(?:s|ed|ing)? the', 1],
    ['showcas(?:e|es|ed|ing)', 1], ['pivotal', 1], ['transformative', 1], ['far-reaching', 1], ['interplay', 1],
    ['not only [^.]{3,60}? but also', 1], ['when it comes to', 1], ['a (?:deeper|better|nuanced) understanding', 1],
    ['the intersection of', 1], ['in conclusion', 1], ['in summary', 1], ['ultimately,', 1],
    ['overall,', 0.5], ['crucial', 0.5], ['vital', 0.5], ['dynamic', 0.5], ['comprehensive', 0.5], ['significantly', 0.5],
    ['additionally', 0.5], ['furthermore', 0.5], ['moreover', 0.5], ['commitment to', 0.5], ['ensur(?:e|es|ing) that', 0.5],
    ['enhanc(?:e|es|ed|ing)', 0.5], ['notably', 0.5],
  ].map(([p, w]) => ({ re: new RegExp('(?<![\\p{L}])(?:' + p + ')(?![\\p{L}])', 'giu'), w }));
  const OPENER = /^(?:furthermore|moreover|additionally|in addition|in conclusion|overall|ultimately|notably|importantly|in summary|to summarize|in essence|consequently)\b/i;
  const TRIPLET = /\b[\p{L}-]+(?: [\p{L}-]+)?, [\p{L}-]+(?: [\p{L}-]+)?,? and [\p{L}-]+/u;

  function sentences(text, end) {
    const out = [];
    const re = /[^.!?\n]+(?:[.!?]+["”’)\]]*|(?=\n)|$)/g;
    let m;
    while ((m = re.exec(text))) {
      if (!m[0]) {
        re.lastIndex++;
        continue;
      }
      if (m.index >= end) break;
      const lead = m[0].length - m[0].trimStart().length;
      const s = m.index + lead;
      const e = m.index + m[0].trimEnd().length;
      if (e > s) out.push({ s, e, words: countWords(text.slice(s, e)) });
    }
    return out;
  }

  function aiStyle(text, opt) {
    const bib = opt.exBib ? bibStart(text) : -1;
    const end = bib >= 0 ? bib : text.length;
    const all = sentences(text, end);
    const scored = all.filter((x) => x.words >= 6); // headings and fragments are skipped
    const lens = scored.map((x) => x.words);
    const mean = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
    const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / (lens.length || 1));
    const cv = mean ? sd / mean : 0;
    let phraseCount = 0;

    for (const x of scored) {
      const str = text.slice(x.s, x.e);
      const reasons = [];
      x.phrases = [];
      let score = 0;
      let phraseScore = 0;
      const found = [];
      for (const { re, w } of PHRASES) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(str))) found.push([x.s + m.index, x.s + m.index + m[0].length, w, m[0]]);
      }
      // Longest phrase wins where two overlap ("crucial" inside "plays a crucial role").
      found.sort((p, q) => q[1] - q[0] - (p[1] - p[0]));
      for (const f of found) {
        if (x.phrases.some((p) => f[0] < p[1] && p[0] < f[1])) continue;
        x.phrases.push(f);
        phraseScore += f[2];
      }
      x.phrases.sort((p, q) => p[0] - q[0]);
      if (x.phrases.length) {
        phraseCount += x.phrases.length;
        score += Math.min(phraseScore, 3);
        reasons.push('Stock phrases: ' + [...new Set(x.phrases.map((p) => '“' + p[3].trim() + '”'))].join(', '));
      }
      if (OPENER.test(str)) {
        score += 1;
        reasons.push('Starts with a stock transition word');
      }
      if (TRIPLET.test(str)) {
        score += 0.5;
        reasons.push('“X, Y and Z” list pattern');
      }
      if (/—/.test(str)) {
        score += 0.5;
        reasons.push('Em dash (—)');
      }
      if (cv < 0.4 && lens.length >= 5 && x.words >= 12 && Math.abs(x.words - mean) <= 0.35 * mean) {
        score += 0.5;
        reasons.push('Sentence length very close to the average (the whole text is evenly paced)');
      }
      // Concrete, personal detail is the strongest sign of a human writer.
      let human = 0;
      const humanWhy = [];
      const specifics = [
        [/\d/, 'numbers'],
        [/\s(?:[A-Z][a-z]{2,}|[A-Z]{2,})/, 'names/places', str.slice(str.indexOf(' '))],
        [/\b(?:I|my|me|we|our|us)\b/, 'first person'],
      ];
      for (const [re, label, on = str] of specifics) {
        if (re.test(on)) {
          human += 0.5;
          humanWhy.push(label);
        }
      }
      human = Math.min(human, 1);
      if (human) reasons.push('Lowered for specific detail: ' + humanWhy.join(', '));
      x.score = Math.max(0, score - human);
      x.level = x.score >= 2.5 ? 'strong' : x.score >= 1.5 ? 'some' : '';
      x.reasons = reasons;
    }

    const words = scored.reduce((a, x) => a + x.words, 0);
    const strong = scored.filter((x) => x.level === 'strong').reduce((a, x) => a + x.words, 0);
    const some = scored.filter((x) => x.level === 'some').reduce((a, x) => a + x.words, 0);
    return {
      sentences: scored,
      words,
      pct: words ? strong / words : 0,
      somePct: words ? some / words : 0,
      metrics: { count: scored.length, mean, cv, mattr: mattr(tokenize(text.slice(0, end))), per1k: words ? (phraseCount * 1000) / words : 0 },
      end,
    };
  }

  // Moving-average type-token ratio over 50-word windows (vocabulary variety).
  function mattr(tokens, win = 50) {
    if (tokens.length < win) return null;
    let sum = 0;
    let n = 0;
    for (let i = 0; i + win <= tokens.length; i += 10) {
      sum += new Set(tokens.slice(i, i + win).map((t) => t.w)).size / win;
      n++;
    }
    return sum / n;
  }

  // ── Comparison library ───────────────────────────────────
  const cache = {};
  const plain = (s) => s.replace(/\*\*|###|\[chart\]|\[flow\]|[•→|]/g, ' ');
  function strings(obj, out = []) {
    if (typeof obj === 'string') {
      if (obj.length >= 25 && !/^(https?:|resources\/|#\/)/.test(obj)) out.push(plain(obj));
    } else if (Array.isArray(obj)) obj.forEach((x) => strings(x, out));
    else if (obj && typeof obj === 'object') Object.values(obj).forEach((x) => strings(x, out));
    return out;
  }
  async function htmlText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(url);
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    doc.querySelectorAll('script,style').forEach((n) => n.remove());
    doc.querySelectorAll('p,li,h1,h2,h3,h4,h5,td,th,tr,div,br,dt,dd').forEach((n) => n.append(' \n'));
    return doc.body.textContent;
  }
  async function library(opt, warn) {
    const out = [];
    const inCourse = (c) => opt.course === 'all' || c === opt.course;
    if (opt.libSlides) {
      if (!cache.slides) {
        try {
          const res = await fetch('data/checker/library.json');
          cache.slides = res.ok ? await res.json() : [];
          if (!res.ok) warn('Course PDFs could not be loaded.');
        } catch {
          warn('Course PDFs could not be loaded (open the site through its web address, not as a file).');
          cache.slides = [];
        }
      }
      cache.slides.filter((x) => inCourse(x.course)).forEach((x) => out.push({ title: x.title, kind: 'Course PDF', text: x.text, file: x.file }));
    }
    if (opt.libSite) {
      if (!cache.notes) {
        cache.notes = [];
        for (const r of HUB.resources.filter((r) => r.file && r.file.endsWith('.html'))) {
          try {
            cache.notes.push({ title: r.title, course: r.course, text: await htmlText(r.file), file: r.file });
          } catch {
            warn('Could not load ' + r.title + '.');
          }
        }
      }
      cache.notes.filter((x) => inCourse(x.course)).forEach((x) => out.push({ ...x, kind: 'Site notes' }));
      HUB.quizzes.filter((q) => inCourse(q.course)).forEach((q) =>
        out.push({ title: q.title + ' — questions & model answers', kind: 'Site answers', text: strings([q.mcq, q.essays]).join('\n') })
      );
      HUB.assignments.filter((a) => inCourse(a.course)).forEach((a) =>
        out.push({ title: a.title + ' — assignment guide', kind: 'Site guide', text: strings(a).join('\n') })
      );
    }
    return out;
  }

  // ── Files ────────────────────────────────────────────────
  function loadMammoth() {
    if (window.mammoth) return Promise.resolve();
    return new Promise((ok, fail) => {
      const s = document.createElement('script');
      s.src = 'assets/vendor/mammoth/mammoth.browser.min.js';
      s.onload = ok;
      s.onerror = () => fail(new Error('Could not load the Word reader.'));
      document.head.append(s);
    });
  }
  async function readFile(file) {
    const name = file.name.toLowerCase();
    if (name.endsWith('.txt') || name.endsWith('.md')) return file.text();
    if (name.endsWith('.docx')) {
      await loadMammoth();
      const res = await window.mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
      return res.value;
    }
    throw new Error('Use a .docx or .txt file. For a PDF, copy its text and paste it in.');
  }

  // ── View ─────────────────────────────────────────────────
  HUB.views.checker = function (root) {
    const opt = Object.assign(
      { minWords: 8, exQuotes: true, exBib: true, libSlides: true, libSite: true, course: 'all' },
      U.get('checker:opts', {})
    );
    let mine = U.get('checker:sources', []);
    let tab = 'sim';
    let result = null;

    root.innerHTML = `
      <div class="page-head">
        <h1>Similarity &amp; AI-style checker</h1>
        <p>Paste or upload your assignment to see which passages match course material or your own sources, and which sentences read like AI-generated text. Everything runs in your browser — your text is never uploaded.</p>
      </div>

      <div class="note" style="margin-bottom:16px">
        <b>This is not Turnitin.</b> The similarity check only compares your text with the sources listed below — not the internet, journals or other students' papers, which Turnitin also searches. A low score here does not guarantee a low Turnitin score.
        The AI-style score counts writing patterns that chatbots overuse. It is <b>not</b> a real AI detector and cannot predict Turnitin's AI score. Formal academic writing and writing by non-native English speakers can be flagged too, so never use it as proof that someone used AI.
      </div>

      <div class="card">
        <div class="row">
          <h3 style="margin:0">Your text</h3>
          <span class="spacer"></span>
          <small id="ck-count"></small>
          <label class="btn small">Upload .docx / .txt<input type="file" id="ck-file" accept=".docx,.txt,.md" hidden></label>
          <button class="btn small" id="ck-clear">Clear</button>
        </div>
        <textarea id="ck-text" rows="12" style="margin-top:10px" placeholder="Paste your assignment here…"></textarea>
      </div>

      <div class="card">
        <h3>Compare against</h3>
        <div class="row" style="gap:16px">
          <label><input type="checkbox" id="ck-lib-slides"> Course slides &amp; assignment briefs</label>
          <label><input type="checkbox" id="ck-lib-site"> This site's notes, model answers &amp; guides</label>
          <label>Course <select id="ck-course">
            <option value="all">All courses</option>
            ${HUB.courses.map((c) => `<option value="${c.id}">${U.esc(c.title)}</option>`).join('')}
          </select></label>
        </div>
        <details style="margin-top:12px" ${mine.length ? 'open' : ''}>
          <summary><b>My sources</b> <small>(<span id="ck-mine-n">${mine.length}</span>) — articles, websites or classmates' drafts you want to compare with</small></summary>
          <div id="ck-mine" style="margin:10px 0"></div>
          <div class="row"><input id="ck-src-title" placeholder="Source title (e.g. Daily Star article on gold smuggling)" style="flex:1;min-width:200px">
            <label class="btn small">Upload .docx / .txt<input type="file" id="ck-src-file" accept=".docx,.txt,.md" hidden></label></div>
          <textarea id="ck-src-text" rows="5" style="margin-top:8px" placeholder="Paste the source text…"></textarea>
          <button class="btn small" id="ck-src-add" style="margin-top:8px">Add source</button>
        </details>
        <div class="row" style="gap:16px;margin-top:14px">
          <label>Smallest match <select id="ck-min">
            <option value="6">6 words</option><option value="8">8 words</option><option value="12">12 words</option>
          </select></label>
          <label><input type="checkbox" id="ck-exq"> Exclude quotes</label>
          <label><input type="checkbox" id="ck-exb"> Exclude reference list</label>
          <span class="spacer"></span>
          <button class="btn primary" id="ck-run">Check</button>
        </div>
        <p id="ck-status" class="muted" style="margin:10px 0 0" aria-live="polite"></p>
      </div>

      <div id="ck-report" hidden></div>`;

    const $ = (id) => root.querySelector('#' + id);
    const ta = $('ck-text');
    ta.value = U.get('checker:draft', '');
    const updateCount = () => ($('ck-count').textContent = countWords(ta.value).toLocaleString() + ' words');
    updateCount();
    let saveTimer;
    ta.addEventListener('input', () => {
      updateCount();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => U.set('checker:draft', ta.value), 400);
    });
    $('ck-clear').onclick = () => {
      ta.value = '';
      U.del('checker:draft');
      updateCount();
      $('ck-report').hidden = true;
    };
    const status = (msg, bad) => {
      $('ck-status').textContent = msg;
      $('ck-status').style.color = bad ? 'var(--bad)' : '';
    };
    $('ck-file').onchange = async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        ta.value = await readFile(f);
        U.set('checker:draft', ta.value);
        updateCount();
        status('Loaded ' + f.name + '.');
      } catch (err) {
        status(err.message, true);
      }
      e.target.value = '';
    };

    // Options
    const bind = (id, key, prop = 'checked', cast = (v) => v) => {
      const el = $(id);
      el[prop] = opt[key];
      el.onchange = () => {
        opt[key] = cast(el[prop]);
        U.set('checker:opts', opt);
      };
    };
    bind('ck-lib-slides', 'libSlides');
    bind('ck-lib-site', 'libSite');
    bind('ck-exq', 'exQuotes');
    bind('ck-exb', 'exBib');
    bind('ck-course', 'course', 'value');
    bind('ck-min', 'minWords', 'value', Number);
    $('ck-min').value = String(opt.minWords);

    // My sources
    const paintMine = () => {
      $('ck-mine-n').textContent = mine.length;
      $('ck-mine').innerHTML = mine.length
        ? mine
            .map(
              (s, i) => `<div class="row" style="padding:4px 0;border-bottom:1px solid var(--border)">
                <span>📄 ${U.esc(s.title)}</span><small>${countWords(s.text).toLocaleString()} words</small>
                <span class="spacer"></span><button class="btn small" data-del="${i}">Remove</button></div>`
            )
            .join('')
        : '<p class="empty" style="margin:0">No sources added yet.</p>';
    };
    paintMine();
    $('ck-mine').onclick = (e) => {
      const i = e.target.dataset.del;
      if (i == null) return;
      mine.splice(Number(i), 1);
      U.set('checker:sources', mine);
      paintMine();
    };
    $('ck-src-file').onchange = async (e) => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        $('ck-src-text').value = await readFile(f);
        if (!$('ck-src-title').value) $('ck-src-title').value = f.name.replace(/\.[^.]+$/, '');
      } catch (err) {
        status(err.message, true);
      }
      e.target.value = '';
    };
    $('ck-src-add').onclick = () => {
      const text = $('ck-src-text').value.trim();
      if (countWords(text) < N) return status('Paste some source text first.', true);
      mine.push({ title: $('ck-src-title').value.trim() || 'My source ' + (mine.length + 1), text });
      U.set('checker:sources', mine);
      $('ck-src-text').value = '';
      $('ck-src-title').value = '';
      paintMine();
      status('Source added.');
    };

    // Run
    $('ck-run').onclick = async () => {
      const text = ta.value;
      if (countWords(text) < 30) return status('Paste at least 30 words to check.', true);
      $('ck-run').disabled = true;
      status('Checking…');
      const warnings = [];
      try {
        const sources = (await library(opt, (w) => warnings.push(w))).concat(mine.map((s) => ({ ...s, kind: 'My source' })));
        const idx = buildIndex(sources);
        const tokens = tokenize(text);
        result = { text, sources, sim: similarity(text, tokens, sources, idx, opt), ai: aiStyle(text, opt) };
        status(`Compared with ${sources.length} source${sources.length === 1 ? '' : 's'}.` + (warnings.length ? ' ' + warnings.join(' ') : ''), warnings.length > 0);
        paintReport();
        $('ck-report').hidden = false;
        $('ck-report').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (err) {
        status('Something went wrong: ' + err.message, true);
      }
      $('ck-run').disabled = false;
    };

    // ── Report ─────────────────────────────────────────────
    // Long matched passages: show the start and end only.
    const clip = (str, max = 420) => (str.length <= max ? U.esc(str) : U.esc(str.slice(0, max * 0.6)) + ' <b>…</b> ' + U.esc(str.slice(-max * 0.3)));
    const pct = (x) => (x > 0 && x < 0.005 ? '<1' : Math.round(x * 100)) + '%';
    function paintReport() {
      const { sim, ai } = result;
      const aiLabel = ai.pct < 0.15 ? 'Few AI-style patterns' : ai.pct < 0.4 ? 'Some AI-style patterns' : 'Many AI-style patterns';
      $('ck-report').innerHTML = `
        <div class="grid" style="margin-bottom:16px">
          <div class="card"><div class="stat-label">Similarity</div><div class="stat">${pct(sim.pct)}</div>
            <div class="progress"><div style="width:${sim.pct * 100}%"></div></div>
            <small>${sim.matched.toLocaleString()} of ${sim.counted.toLocaleString()} words match ${sim.ranked.length} source${sim.ranked.length === 1 ? '' : 's'}</small></div>
          <div class="card"><div class="stat-label">AI-style (estimate)</div><div class="stat">${pct(ai.pct)}</div>
            <div class="progress"><div style="width:${ai.pct * 100}%;background:var(--warn)"></div></div>
            <small>${aiLabel} · ${pct(ai.somePct)} more with weaker signals</small></div>
          <div class="card"><div class="stat-label">Checked</div><div class="stat">${sim.counted.toLocaleString()}</div>
            <small>words${sim.bib >= 0 ? ' · reference list excluded' : ''}${sim.quotes ? ` · ${sim.quotes} quotation${sim.quotes === 1 ? '' : 's'} excluded` : ''}</small></div>
        </div>
        <div class="tabs" role="tablist">
          <button data-tab="sim" class="${tab === 'sim' ? 'active' : ''}">Similarity report</button>
          <button data-tab="ai" class="${tab === 'ai' ? 'active' : ''}">AI-style report</button>
        </div>
        <div id="ck-panel"></div>`;
      $('ck-report').querySelector('.tabs').onclick = (e) => {
        if (!e.target.dataset.tab) return;
        tab = e.target.dataset.tab;
        paintReport();
      };
      tab === 'sim' ? paintSim() : paintAi();
    }

    function paintSim() {
      const { text, sources, sim } = result;
      const t = tokenize(text);
      const ranges = sim.matches
        .map((m, k) => [t[m.a].s, t[m.b - 1].e, `<mark class="sim c${m.color}" data-m="${k}" tabindex="0">`, '</mark>'])
        .concat(sim.quotedRuns.map(([a, b]) => [t[a].s, t[b - 1].e, '<mark class="sim q" title="Matches a source but is inside quotation marks, so it is not counted">', '</mark>']))
        .sort((x, y) => x[0] - y[0]);
      const end = sim.bib >= 0 ? sim.bib : text.length;
      const doc = wrap(text, 0, end, ranges) + (sim.bib >= 0 ? `<span class="excluded">${U.esc(text.slice(sim.bib))}</span>` : '');
      const list = sim.ranked.length
        ? sim.ranked
            .map(
              (r) => `<div class="src-item" data-si="${r.si}" tabindex="0">
                <span class="swatch c${r.color}"></span>
                <span><b>${U.esc(sources[r.si].title)}</b><br><small>${U.esc(sources[r.si].kind)} · ${r.words} words</small></span>
                <span class="src-pct">${pct(r.pct)}</span></div>`
            )
            .join('')
        : '<p class="empty">No matching passages of ' + opt.minWords + '+ words.</p>';
      $('ck-panel').innerHTML = `
        <div class="check-grid">
          <div class="card"><div class="check-doc" id="ck-doc">${doc}</div></div>
          <div>
            <div class="card"><h3>Match overview</h3><div id="ck-srcs">${list}</div>
              ${sim.ranked.length ? '<small>Tap a source to show only its matches. Tap a highlight to compare the passages.</small>' : ''}</div>
            <div class="card" id="ck-detail" hidden></div>
          </div>
        </div>`;
      const docEl = $('ck-doc');
      let focus = null;
      $('ck-srcs').onclick = (e) => {
        const it = e.target.closest('.src-item');
        if (!it) return;
        focus = focus === it.dataset.si ? null : it.dataset.si;
        $('ck-srcs').querySelectorAll('.src-item').forEach((x) => x.classList.toggle('on', x.dataset.si === focus));
        docEl.querySelectorAll('mark[data-m]').forEach((mk) => {
          mk.classList.toggle('dim', focus != null && String(sim.matches[mk.dataset.m].si) !== focus);
        });
      };
      const show = (mk) => {
        const m = sim.matches[mk.dataset.m];
        const src = sources[m.si];
        const st = src.tokens;
        const s = st[m.from].s;
        const e = st[m.to].e;
        const a = Math.max(0, s - 120);
        const b = Math.min(src.text.length, e + 120);
        docEl.querySelectorAll('mark.active').forEach((x) => x.classList.remove('active'));
        mk.classList.add('active');
        const d = $('ck-detail');
        d.hidden = false;
        d.innerHTML = `<h3>Matched passage · ${m.b - m.a} words</h3>
          <p class="muted" style="margin-bottom:4px">Your text</p>
          <blockquote class="ck-quote">${clip(text.slice(t[m.a].s, t[m.b - 1].e))}</blockquote>
          <p class="muted" style="margin-bottom:4px"><span class="swatch c${m.color}"></span>${U.esc(src.title)}</p>
          <blockquote class="ck-quote">${a > 0 ? '…' : ''}${U.esc(src.text.slice(a, s))}<mark class="sim c${m.color}">${clip(src.text.slice(s, e))}</mark>${U.esc(src.text.slice(e, b))}${b < src.text.length ? '…' : ''}</blockquote>
          ${m.also.length ? `<small>Also found in: ${m.also.map((i) => U.esc(sources[i].title)).join('; ')}</small><br>` : ''}
          ${src.file ? `<a class="btn small" href="${U.esc(src.file)}" target="_blank" rel="noopener">Open source</a>` : ''}
          <p style="margin-top:10px"><small>Fix: put it in quotation marks with a citation, or rewrite it in your own words and still cite the source.</small></p>`;
        if (matchMedia('(max-width: 860px)').matches) d.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };
      docEl.onclick = (e) => {
        const mk = e.target.closest('mark[data-m]');
        if (mk) show(mk);
      };
      docEl.onkeydown = (e) => {
        if (e.key === 'Enter' && e.target.matches('mark[data-m]')) show(e.target);
      };
    }

    function paintAi() {
      const { text, ai } = result;
      const ranges = [];
      ai.sentences.forEach((x, k) => {
        if (!x.level) return;
        ranges.push([x.s, x.e, k]);
      });
      // Build: plain text between flagged sentences, flagged sentences with their stock phrases marked.
      let html = '';
      let pos = 0;
      for (const [s, e, k] of ranges) {
        const x = ai.sentences[k];
        const phrases = x.phrases.map(([ps, pe]) => [ps, pe, '<span class="ai-phrase">', '</span>']);
        html += U.esc(text.slice(pos, s)) + `<span class="ai-${x.level}" data-s="${k}" tabindex="0">${wrap(text, s, e, phrases)}</span>`;
        pos = e;
      }
      html += U.esc(text.slice(pos, ai.end));
      if (ai.end < text.length) html += `<span class="excluded">${U.esc(text.slice(ai.end))}</span>`;
      const m = ai.metrics;
      const flagged = ai.sentences.filter((x) => x.level).length;
      $('ck-panel').innerHTML = `
        <div class="check-grid">
          <div class="card">
            <div class="row" style="margin-bottom:10px"><span class="ai-strong">Strong signals</span><span class="ai-some">Weaker signals</span><span><span class="ai-phrase">stock phrase</span></span></div>
            <div class="check-doc" id="ck-doc">${html}</div>
          </div>
          <div>
            <div class="card" id="ck-detail"><h3>Why sentences are flagged</h3>
              <p class="muted">${flagged ? 'Tap a highlighted sentence to see its signals.' : 'No sentences were flagged.'}</p></div>
            <div class="card"><h3>Whole-text patterns</h3>
              <table><tbody>
                <tr><td>Sentences checked</td><td><b>${m.count}</b></td></tr>
                <tr><td>Average sentence length</td><td><b>${m.mean.toFixed(1)}</b> words</td></tr>
                <tr><td title="How much sentence length varies. People mix short and long sentences; chatbots are more even.">Length variation</td><td><b>${m.cv.toFixed(2)}</b> <small>${m.cv < 0.3 ? 'very even — machine-like' : m.cv < 0.45 ? 'fairly even' : 'varied — human-like'}</small></td></tr>
                <tr><td title="Share of different words in each 50-word stretch">Vocabulary variety</td><td><b>${m.mattr == null ? '—' : m.mattr.toFixed(2)}</b></td></tr>
                <tr><td>Stock phrases per 1,000 words</td><td><b>${m.per1k.toFixed(1)}</b></td></tr>
              </tbody></table>
            </div>
            <div class="card"><h3>Make it sound like you</h3>
              <ul style="margin:0;padding-left:18px">
                <li>Replace stock phrases with plain words that say exactly what you mean.</li>
                <li>Add specifics: names, dates, numbers, cases and Bangladesh examples from class.</li>
                <li>Mix short and long sentences, and give your own view or experience where it fits.</li>
                <li>Cite every idea you took from a source.</li>
              </ul></div>
          </div>
        </div>`;
      const docEl = $('ck-doc');
      const show = (el) => {
        const x = ai.sentences[el.dataset.s];
        docEl.querySelectorAll('.active').forEach((n) => n.classList.remove('active'));
        el.classList.add('active');
        $('ck-detail').innerHTML = `<h3>${x.level === 'strong' ? 'Strong' : 'Weaker'} signals · score ${x.score.toFixed(1)}</h3>
          <blockquote class="ck-quote">${U.esc(text.slice(x.s, x.e))}</blockquote>
          <ul style="margin:0;padding-left:18px">${x.reasons.map((r) => `<li>${U.esc(r)}</li>`).join('')}</ul>`;
      };
      docEl.onclick = (e) => {
        const el = e.target.closest('[data-s]');
        if (el) show(el);
      };
      docEl.onkeydown = (e) => {
        if (e.key === 'Enter' && e.target.matches('[data-s]')) show(e.target);
      };
    }
  };
})();
