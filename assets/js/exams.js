// Exams: quiz list, interactive MCQ runner, short-essay practice and probability analysis.
(function () {
  const LETTERS = 'ABCDEFGH';

  function topicOptions(quiz) {
    const opt = (t) => `<option value="${t.id}">${U.esc(t.name)}</option>`;
    if (!quiz.topics.some((t) => t.group)) return quiz.topics.map(opt).join('');
    const groups = [...new Set(quiz.topics.map((t) => t.group))];
    return groups
      .map((g) => `<optgroup label="${U.esc(g)}">${quiz.topics.filter((t) => t.group === g).map(opt).join('')}</optgroup>`)
      .join('');
  }

  function topicMap(quiz) {
    const m = {};
    quiz.topics.forEach((t) => (m[t.id] = { ...t, score: U.topicScore(t) }));
    return m;
  }

  // ── Quiz list ──────────────────────────────────────────────
  function renderList(root) {
    const byCourse = HUB.courses
      .map((c) => {
        const quizzes = HUB.quizzes.filter((q) => q.course === c.id);
        if (!quizzes.length) return '';
        return `
          <h2 class="section-title">${U.esc(c.title)} <small class="muted">${U.esc(c.subtitle || '')}</small></h2>
          <div class="grid">
            ${quizzes
              .map((q) => {
                const pr = U.quizProgress(q);
                return `
                  <a class="card tile" href="#/exams/${q.id}">
                    <span class="chip">${U.esc(q.format)}</span>
                    <h3 style="margin-top:8px">${U.esc(q.title)}</h3>
                    <p class="muted">${U.esc(q.scope)}</p>
                    <div class="progress"><div style="width:${pr.share * 100}%"></div></div>
                    <small>${U.esc(pr.summary)} · ${U.esc(pr.status)}</small>
                  </a>`;
              })
              .join('')}
          </div>`;
      })
      .join('');

    root.innerHTML = `
      <div class="page-head">
        <h1>Exams</h1>
        <p>Practice banks built from each exam's syllabus. Questions are tagged by how likely their topic is to appear — open "Probability analysis" in any quiz to see how that is worked out.</p>
      </div>
      ${byCourse || '<p class="empty">No quizzes yet.</p>'}`;
  }

  // ── Quiz page ──────────────────────────────────────────────
  function renderQuiz(root, quiz, tab) {
    const course = HUB.course(quiz.course);
    const composite = isComposite(quiz);
    if (tab === 'mcq' && !quiz.mcq.length) tab = composite ? 'plan' : 'essay';
    const tabs = composite
      ? [
          ['plan', 'Exam plan'],
          ['essay', `Questions & answers (${quiz.essays.length})`],
          ...(quiz.mcq.length ? [['mcq', `Concept check MCQs (${quiz.mcq.length})`]] : []),
          ['probability', 'Probability analysis'],
        ]
      : [
          ['mcq', `Multiple choice (${quiz.mcq.length})`],
          ['essay', `Short essay (${quiz.essays.length})`],
          ['probability', 'Probability analysis'],
        ];
    root.innerHTML = `
      <div class="page-head">
        <a href="#/exams" class="muted">← All exams</a>
        <h1 style="margin-top:6px">${U.esc(quiz.title)}</h1>
        <p><span class="chip">${U.esc(course ? course.title : '')}</span> ${U.esc(quiz.scope)}</p>
        ${quiz.notes ? `<div class="row"><a class="btn small primary" href="${U.esc(quiz.notes)}" target="_blank" rel="noopener">📘 Plain-language study notes</a></div>` : ''}
      </div>
      <div class="tabs">
        ${tabs
          .map(([id, label]) => `<button data-tab="${id}" class="${id === tab ? 'active' : ''}">${label}</button>`)
          .join('')}
      </div>
      <div id="tab-body"></div>`;

    root.querySelectorAll('.tabs button').forEach((b) =>
      b.addEventListener('click', () => (location.hash = `#/exams/${quiz.id}/${b.dataset.tab}`))
    );
    const body = root.querySelector('#tab-body');
    if (tab === 'plan' && composite) renderPlan(body, quiz);
    else if (tab === 'essay') (composite ? renderExamQuestions : renderEssays)(body, quiz);
    else if (tab === 'probability') renderProbability(body, quiz);
    else renderMcq(body, quiz);
  }

  // ── MCQ ────────────────────────────────────────────────────
  function renderMcq(body, quiz) {
    const key = `quiz:${quiz.id}:mcq`;
    const topics = topicMap(quiz);
    let answers = U.get(key, {});
    const hintsOpen = new Set();
    let order = quiz.mcq.map((_, i) => i);
    const filters = { topic: '', status: '', sort: 'order' };

    body.innerHTML = `
      <div class="scorebar">
        <div class="card" style="margin:0">
          <div class="row">
            <b id="score"></b>
            <span class="spacer"></span>
            <select id="f-topic" aria-label="Filter by topic">
              <option value="">All topics</option>
              ${topicOptions(quiz)}
            </select>
            <select id="f-status" aria-label="Filter by status">
              <option value="">All questions</option>
              <option value="open">Unanswered</option>
              <option value="wrong">Wrong only</option>
              <option value="right">Correct only</option>
            </select>
            <select id="f-sort" aria-label="Order">
              <option value="order">Syllabus order</option>
              <option value="prob">Highest probability first</option>
              <option value="shuffle">Shuffled</option>
            </select>
            <button class="btn small" id="reset">Reset</button>
          </div>
          <div class="progress"><div id="bar"></div></div>
        </div>
      </div>
      <div id="list"></div>`;

    const list = body.querySelector('#list');

    function score() {
      const done = Object.keys(answers).length;
      const right = Object.entries(answers).filter(([i, a]) => quiz.mcq[i].a === a).length;
      const pct = done ? Math.round((right / done) * 100) : 0;
      body.querySelector('#score').innerHTML =
        `${right} / ${done} correct <small class="muted">· ${done} of ${quiz.mcq.length} answered${done ? ` · ${pct}%` : ''}</small>`;
      body.querySelector('#bar').style.width = (done / quiz.mcq.length) * 100 + '%';
    }

    function card(i, n) {
      const m = quiz.mcq[i];
      const t = topics[m.t];
      const chosen = answers[i];
      const answered = chosen !== undefined;
      const opts = m.o
        .map((text, j) => {
          let cls = '';
          let mark = '';
          if (answered) {
            if (j === m.a) {
              cls = 'correct';
              mark = '✓';
            } else if (j === chosen) {
              cls = 'wrong';
              mark = '✗';
            }
          }
          return `<button class="opt ${cls}" data-q="${i}" data-o="${j}" ${answered ? 'disabled' : ''}>
                    <span class="letter">${LETTERS[j]}</span><span>${U.esc(text)}</span><span class="mark">${mark}</span>
                  </button>`;
        })
        .join('');
      const verdict = answered
        ? chosen === m.a
          ? '<span class="verdict-good">Correct!</span> '
          : `<span class="verdict-bad">Not quite — the answer is ${LETTERS[m.a]}.</span> `
        : '';
      return `
        <div class="card" id="q-${i}">
          <div class="row">
            <span class="q-num">Q${n}</span>
            <span class="chip">${U.esc(t ? t.name : m.t)}</span>
            ${t ? U.probChip(t.score) : ''}
          </div>
          <div class="q-text">${U.esc(m.q)}</div>
          <div class="options">${opts}</div>
          ${
            answered
              ? `<div class="explain">${verdict}${U.esc(m.e)}<span class="ref">📖 Reference: ${U.esc(m.r)}</span></div>`
              : `<div class="row" style="margin-top:10px"><button class="btn small" data-hint="${i}">💡 ${hintsOpen.has(i) ? 'Hide hint' : 'Hint'}</button></div>
                 ${hintsOpen.has(i) ? `<div class="hint">${U.esc(m.h)}</div>` : ''}`
          }
        </div>`;
    }

    function visible() {
      let ids = order.slice();
      if (filters.sort === 'prob') {
        ids.sort((a, b) => topics[quiz.mcq[b].t].score - topics[quiz.mcq[a].t].score || a - b);
      }
      return ids.filter((i) => {
        const m = quiz.mcq[i];
        if (filters.topic && m.t !== filters.topic) return false;
        const a = answers[i];
        if (filters.status === 'open' && a !== undefined) return false;
        if (filters.status === 'wrong' && (a === undefined || a === m.a)) return false;
        if (filters.status === 'right' && a !== m.a) return false;
        return true;
      });
    }

    // Question numbers stay tied to the syllabus order so "Q12" means the same question everywhere.
    function draw() {
      const ids = visible();
      list.innerHTML = ids.length
        ? ids.map((i) => card(i, i + 1)).join('')
        : '<p class="empty">No questions match these filters.</p>';
      score();
    }

    function redrawCard(i) {
      const el = list.querySelector('#q-' + i);
      if (el) el.outerHTML = card(i, i + 1);
      score();
    }

    list.addEventListener('click', (ev) => {
      const opt = ev.target.closest('.opt');
      if (opt && !opt.disabled) {
        const i = +opt.dataset.q;
        answers[i] = +opt.dataset.o;
        U.set(key, answers);
        redrawCard(i);
        return;
      }
      const hint = ev.target.closest('[data-hint]');
      if (hint) {
        const i = +hint.dataset.hint;
        hintsOpen.has(i) ? hintsOpen.delete(i) : hintsOpen.add(i);
        redrawCard(i);
      }
    });

    body.querySelector('#f-topic').addEventListener('change', (e) => {
      filters.topic = e.target.value;
      draw();
    });
    body.querySelector('#f-status').addEventListener('change', (e) => {
      filters.status = e.target.value;
      draw();
    });
    body.querySelector('#f-sort').addEventListener('change', (e) => {
      filters.sort = e.target.value;
      order = quiz.mcq.map((_, i) => i);
      if (filters.sort === 'shuffle') {
        for (let k = order.length - 1; k > 0; k--) {
          const r = Math.floor(Math.random() * (k + 1));
          [order[k], order[r]] = [order[r], order[k]];
        }
      }
      draw();
    });
    body.querySelector('#reset').addEventListener('click', () => {
      if (!confirm('Clear all your MCQ answers for this quiz?')) return;
      answers = {};
      U.del(key);
      hintsOpen.clear();
      draw();
    });

    draw();
  }

  // ── Short essays ───────────────────────────────────────────
  function renderEssays(body, quiz) {
    const topics = topicMap(quiz);
    const types = [...new Set(quiz.essays.map((e) => e.type).filter(Boolean))];
    const ids = quiz.essays.map((_, i) => i);
    ids.sort((a, b) => topics[quiz.essays[b].t].score - topics[quiz.essays[a].t].score || a - b);

    body.innerHTML = `
      <p class="muted">Sorted by probability. Write your own answer first, tick the key points you covered, then compare with the model answer. Your drafts are saved in this browser.</p>
      <div class="row" style="margin-bottom:12px">
        ${types.length ? `<select id="e-type" aria-label="Question type"><option value="">All question types</option>${types.map((t) => `<option>${U.esc(t)}</option>`).join('')}</select>` : ''}
        <select id="e-topic" aria-label="Filter by topic"><option value="">All topics</option>${topicOptions(quiz)}</select>
      </div>
      ${ids
        .map((i, n) => {
          const e = quiz.essays[i];
          const t = topics[e.t];
          const ticks = U.get(`quiz:${quiz.id}:essay:${i}:ticks`, []);
          const draft = U.get(`quiz:${quiz.id}:essay:${i}:draft`, '');
          return `
            <div class="card" data-essay="${i}" data-type="${U.esc(e.type || '')}" data-topic="${e.t}">
              <div class="row">
                <span class="q-num">E${n + 1}</span>
                ${e.type ? `<span class="chip p-m">${U.esc(e.type)}</span>` : ''}
                <span class="chip">${U.esc(t.name)}</span>
                ${U.probChip(t.score)}
                <span class="chip">${e.marks} marks</span>
              </div>
              <div class="q-text">${U.esc(e.q)}</div>
              <textarea placeholder="Write your answer here…" data-draft>${U.esc(draft)}</textarea>
              <div class="row" style="margin-top:6px">
                <small class="muted" data-wc></small>
                <span class="spacer"></span>
                <button class="btn small" data-toggle="points">Key points</button>
                <button class="btn small" data-toggle="model">Model answer</button>
              </div>
              <div data-panel="points" hidden>
                <h4 style="margin-top:12px">Key points — tick what you covered <small class="muted" data-covered></small></h4>
                <ul class="points">
                  ${e.points
                    .map(
                      (p, j) =>
                        `<li><input type="checkbox" id="p-${i}-${j}" data-tick="${j}" ${ticks.includes(j) ? 'checked' : ''}><label for="p-${i}-${j}" style="color:var(--text);font-size:0.95rem">${U.esc(p)}</label></li>`
                    )
                    .join('')}
                </ul>
              </div>
              <div data-panel="model" hidden>
                <h4 style="margin-top:12px">Model answer</h4>
                <div class="model">${U.esc(e.model)}</div>
              </div>
            </div>`;
        })
        .join('')}`;

    body.querySelectorAll('[data-essay]').forEach((cardEl) => {
      const i = +cardEl.dataset.essay;
      const e = quiz.essays[i];
      const ta = cardEl.querySelector('[data-draft]');
      const wc = cardEl.querySelector('[data-wc]');
      const covered = cardEl.querySelector('[data-covered]');
      const words = () => {
        const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        wc.textContent = `${n} word${n === 1 ? '' : 's'}`;
      };
      const tally = () => {
        const ticks = [...cardEl.querySelectorAll('[data-tick]:checked')].map((c) => +c.dataset.tick);
        covered.textContent = `(${ticks.length}/${e.points.length})`;
        return ticks;
      };
      words();
      tally();
      let timer;
      ta.addEventListener('input', () => {
        words();
        clearTimeout(timer);
        timer = setTimeout(() => U.set(`quiz:${quiz.id}:essay:${i}:draft`, ta.value), 300);
      });
      cardEl.querySelectorAll('[data-tick]').forEach((c) =>
        c.addEventListener('change', () => U.set(`quiz:${quiz.id}:essay:${i}:ticks`, tally()))
      );
      cardEl.querySelectorAll('[data-toggle]').forEach((b) =>
        b.addEventListener('click', () => {
          const panel = cardEl.querySelector(`[data-panel="${b.dataset.toggle}"]`);
          panel.hidden = !panel.hidden;
        })
      );
    });

    const filter = () => {
      const type = (body.querySelector('#e-type') || {}).value || '';
      const topic = body.querySelector('#e-topic').value;
      body.querySelectorAll('[data-essay]').forEach((c) => {
        c.hidden = (type && c.dataset.type !== type) || (topic && c.dataset.topic !== topic);
      });
    };
    body.querySelectorAll('#e-type, #e-topic').forEach((s) => s.addEventListener('change', filter));
  }

  // ── Exam-pattern (composite) questions ─────────────────────
  // A composite question has 2–3 parts and a `covers` list of topics; `rank` orders them.
  const TIERS = [
    { max: 10, key: 'vh', label: 'Tier 1 · Must read' },
    { max: 15, key: 'h', label: 'Tier 2 · Safety' },
    { max: Infinity, key: 'm', label: 'Tier 3 · Complete' },
  ];
  const tierOf = (rank) => TIERS.find((t) => rank <= t.max);
  const LABELS = 'abcdef';

  function isComposite(quiz) {
    return quiz.essays.length > 0 && quiz.essays.every((e) => e.parts);
  }
  function ranked(quiz) {
    return quiz.essays.map((e, i) => ({ e, i })).sort((a, b) => a.e.rank - b.e.rank);
  }
  function studiedKey(quiz) {
    return `quiz:${quiz.id}:studied`;
  }

  // Coverage model (explained on the Exam plan tab). Topic weight = (score/100)^2.
  function coverage(quiz, essays) {
    const w = {};
    quiz.topics.forEach((t) => (w[t.id] = (U.topicScore(t) / 100) ** 2));
    const total = Object.values(w).reduce((a, b) => a + b, 0);
    const covered = new Set();
    essays.forEach((e) => e.covers.forEach((c) => covered.add(c)));
    const c = [...covered].reduce((a, id) => a + (w[id] || 0), 0) / total;
    const q = 3 * c * c * (1 - c) + c ** 3; // ≥2 of a question's 3 parts fall on covered topics
    return { c, q, atLeast: (n, k) => binomAtLeast(n, q, k) };
  }
  function binomAtLeast(n, p, k) {
    let sum = 0;
    for (let x = k; x <= n; x++) {
      let comb = 1;
      for (let i = 1; i <= x; i++) comb = (comb * (n - x + i)) / i;
      sum += comb * p ** x * (1 - p) ** (n - x);
    }
    return sum;
  }
  // Never round a near-certainty up to 100%: the model is an estimate.
  const pct = (x) => (x >= 0.995 ? '>99%' : `${Math.round(x * 100)}%`);

  // Model answers are plain text with a small block syntax (blank lines separate blocks):
  //   "### Heading"                      sub-heading
  //   "• item" / "1. item" lines         bullet / numbered list (optionally after one intro line)
  //   "| a | b |" lines                  table, first row is the header
  //   "[chart] Title" + "Label | 12 | shown text" lines   horizontal bar chart (one series)
  //   "[flow] Caption" + "A → B → C"     step diagram
  // "**bold**" works inline, and a short label before " — " in a list item is bolded.
  function inline(text) {
    return U.esc(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  }

  function chart(lines) {
    const title = lines[0].replace(/^\[chart\]\s*/, '');
    const rows = lines.slice(1).map((l) => {
      const [label, value, shown] = l.split('|').map((x) => x.trim());
      return { label, value: parseFloat(value), shown: shown || value };
    });
    const max = Math.max(...rows.map((r) => r.value));
    return `<figure class="mini-chart" role="img" aria-label="${U.esc(title)}: ${rows.map((r) => `${r.label} ${r.shown}`).join('; ')}">
      <figcaption>${inline(title)}</figcaption>
      ${rows
        .map(
          (r) => `<div class="bar-row" title="${U.esc(r.label)}: ${U.esc(r.shown)}">
            <span class="bar-label">${inline(r.label)}</span>
            <span class="bar-track"><span class="bar-fill" style="width:${Math.max((r.value / max) * 100, 0.8)}%"></span></span>
            <span class="bar-value">${U.esc(r.shown)}</span>
          </div>`
        )
        .join('')}
    </figure>`;
  }

  function flow(lines) {
    const caption = lines[0].replace(/^\[flow\]\s*/, '');
    const steps = lines.slice(1).join(' → ').split('→').map((x) => x.trim()).filter(Boolean);
    return `<figure class="flow">
      ${caption ? `<figcaption>${inline(caption)}</figcaption>` : ''}
      <div class="flow-steps">${steps.map((st) => `<span class="flow-step">${inline(st)}</span>`).join('<span class="flow-arrow" aria-hidden="true">→</span>')}</div>
    </figure>`;
  }

  function table(lines) {
    const rows = lines
      .filter((l) => !/^\|[\s:|-]+\|$/.test(l))
      .map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
    const [head, ...body] = rows;
    return `<div class="table-wrap"><table class="ans-table">
      <tr>${head.map((h) => `<th>${inline(h)}</th>`).join('')}</tr>
      ${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}
    </table></div>`;
  }

  function richText(text) {
    const item = (l) => {
      const m = l.match(/^(.{2,48}?) — (.*)$/);
      return m && !m[1].includes('**') ? `<li><b>${U.esc(m[1])}</b> — ${inline(m[2])}</li>` : `<li>${inline(l)}</li>`;
    };
    const asList = (lines) => {
      if (lines.every((l) => l.startsWith('• '))) return `<ul>${lines.map((l) => item(l.slice(2))).join('')}</ul>`;
      if (lines.every((l) => /^\d+\.\s/.test(l))) return `<ol>${lines.map((l) => item(l.replace(/^\d+\.\s/, ''))).join('')}</ol>`;
      return null;
    };
    return String(text)
      .split(/\n\s*\n/)
      .map((block) => {
        let lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
        let head = '';
        if (lines[0] && lines[0].startsWith('### ')) {
          head = `<h5>${inline(lines[0].slice(4))}</h5>`;
          lines = lines.slice(1);
        }
        if (!lines.length) return head;
        if (lines[0].startsWith('[chart]')) return head + chart(lines);
        if (lines[0].startsWith('[flow]')) return head + flow(lines);
        if (lines.every((l) => l.startsWith('|'))) return head + table(lines);
        const whole = asList(lines);
        if (whole) return head + whole;
        const rest = lines.length > 1 ? asList(lines.slice(1)) : null;
        if (rest) return `${head}<p>${inline(lines[0])}</p>${rest}`;
        return `${head}<p>${lines.map(inline).join('<br>')}</p>`;
      })
      .join('');
  }

  function renderExamQuestions(body, quiz) {
    const topics = topicMap(quiz);
    const studied = new Set(U.get(studiedKey(quiz), []));
    const groups = [...new Set(quiz.topics.map((t) => t.group))];
    let selfTest = U.get(`quiz:${quiz.id}:selftest`, false);

    body.innerHTML = `
      <div class="row" style="margin-bottom:14px">
        <select id="x-tier" aria-label="Tier">
          <option value="">All tiers</option>
          ${TIERS.map((t, i) => `<option value="${i}">${t.label}</option>`).join('')}
        </select>
        <select id="x-group" aria-label="Lecture">
          <option value="">All lectures</option>
          ${groups.map((g) => `<option>${U.esc(g)}</option>`).join('')}
        </select>
        <label class="row" style="gap:6px"><input type="checkbox" id="x-hide"> Hide studied</label>
        <span class="spacer"></span>
        <button class="btn small" id="x-self"></button>
      </div>
      ${ranked(quiz)
        .map(({ e, i }) => {
          const t = topics[e.t];
          const tier = tierOf(e.rank);
          const best = Math.max(...e.covers.map((c) => topics[c].score));
          return `
            <article class="card exam-q" data-x="${i}" data-tier="${TIERS.indexOf(tier)}" data-group="${U.esc(t.group)}">
              <div class="row">
                <span class="q-num" style="font-size:1.1rem">Question ${e.rank}</span>
                <span class="chip p-${tier.key}">${tier.label}</span>
                <span class="chip">${U.esc(t.group)}</span>
                ${U.probChip(best)}
                <span class="spacer"></span>
                <label class="row" style="gap:6px"><input type="checkbox" data-studied ${studied.has(i) ? 'checked' : ''}> Studied</label>
              </div>
              <h3 style="margin:10px 0 10px">${U.esc(e.q)} <span class="muted" style="font-weight:400">(${e.marks} marks)</span></h3>

              <div class="paper">
                ${e.parts
                  .map(
                    (p, j) => `<div class="paper-row"><b>(${LABELS[j]})</b><span>${U.esc(p.q)}</span><span class="muted">${p.marks}</span></div>`
                  )
                  .join('')}
              </div>

              ${e.parts
                .map(
                  (p, j) => `
                <section class="answer" data-part="${j}">
                  <div class="row answer-head">
                    <h4>Answer (${LABELS[j]}) <span class="muted" style="font-weight:400">· ${p.marks} marks</span></h4>
                    <span class="spacer"></span>
                    <button class="btn small" data-reveal>Show answer</button>
                  </div>
                  <div class="answer-body">
                    <div class="keypoints">
                      <div class="stat-label">Key points to include</div>
                      <ul>${p.points.map((pt) => `<li>${U.esc(pt)}</li>`).join('')}</ul>
                    </div>
                    <div class="answer-text">${richText(p.model)}</div>
                  </div>
                </section>`
                )
                .join('')}
              <small class="muted">Also prepares you for: ${e.covers.map((c) => U.esc(topics[c].name)).join(' · ')}</small>
            </article>`;
        })
        .join('')}`;

    const selfBtn = body.querySelector('#x-self');
    function applySelfTest() {
      selfBtn.textContent = selfTest ? 'Show all answers' : 'Self-test: hide answers';
      body.querySelectorAll('.answer').forEach((a) => {
        a.classList.toggle('collapsed', selfTest);
        a.querySelector('[data-reveal]').hidden = !selfTest;
        a.querySelector('[data-reveal]').textContent = 'Show answer';
      });
    }
    selfBtn.addEventListener('click', () => {
      selfTest = !selfTest;
      U.set(`quiz:${quiz.id}:selftest`, selfTest);
      applySelfTest();
    });
    body.querySelectorAll('[data-reveal]').forEach((b) =>
      b.addEventListener('click', () => {
        const a = b.closest('.answer');
        const open = a.classList.toggle('collapsed');
        b.textContent = open ? 'Show answer' : 'Hide answer';
      })
    );
    body.querySelectorAll('[data-studied]').forEach((c) =>
      c.addEventListener('change', () => {
        const i = +c.closest('[data-x]').dataset.x;
        c.checked ? studied.add(i) : studied.delete(i);
        U.set(studiedKey(quiz), [...studied]);
        filter();
      })
    );

    function filter() {
      const tier = body.querySelector('#x-tier').value;
      const group = body.querySelector('#x-group').value;
      const hide = body.querySelector('#x-hide').checked;
      body.querySelectorAll('[data-x]').forEach((c) => {
        c.hidden =
          (tier !== '' && c.dataset.tier !== tier) ||
          (group && c.dataset.group !== group) ||
          (hide && studied.has(+c.dataset.x));
      });
    }
    body.querySelectorAll('#x-tier, #x-group, #x-hide').forEach((el) => el.addEventListener('change', filter));
    applySelfTest();
  }

  function renderPlan(body, quiz) {
    const topics = topicMap(quiz);
    const pat = quiz.examPattern || {};
    const of = pat.of || [7, 8];
    const k = pat.answer || 5;
    const list = ranked(quiz);
    const studied = new Set(U.get(studiedKey(quiz), []));
    const upTo = (n) => list.filter(({ e }) => e.rank <= n).map(({ e }) => e);
    const mine = coverage(quiz, list.filter(({ i }) => studied.has(i)).map(({ e }) => e));
    const groups = [...new Set(quiz.topics.map((t) => t.group))];
    const cutoffs = [10, 12, 15, list.length];

    body.innerHTML = `
      <div class="card">
        <h2>Exam pattern</h2>
        <p style="margin:0"><b>${pat.total || 50} marks</b> — answer <b>${k}</b> of <b>${of.join('–')}</b> questions, <b>${pat.each || 10} marks each</b>, every question made of 2–3 parts. This plan assumes the end-term covers the four lectures uploaded here (human trafficking, drug trafficking, smuggling of arms &amp; gold, counterfeiting).</p>
      </div>

      <div class="card">
        <h2>How much should I read?</h2>
        <div class="table-wrap"><table>
          <tr><th>Read</th><th>Syllabus weight covered</th><th>Chance a given exam question is answerable</th>${of.map((n) => `<th>Chance you can answer ${k} of ${n}</th>`).join('')}</tr>
          ${cutoffs
            .map((n) => {
              const cv = coverage(quiz, upTo(n));
              return `<tr><td><b>Top ${n}</b></td><td>${pct(cv.c)}</td><td>${pct(cv.q)}</td>${of.map((m) => `<td><b>${pct(cv.atLeast(m, k))}</b></td>`).join('')}</tr>`;
            })
            .join('')}
          <tr><td><b>Your studied (${studied.size})</b></td><td>${pct(mine.c)}</td><td>${pct(mine.q)}</td>${of.map((m) => `<td><b>${pct(mine.atLeast(m, k))}</b></td>`).join('')}</tr>
        </table></div>
        <p class="muted" style="margin-top:10px"><small>Tick "Studied" on the Questions &amp; answers tab and your own row updates.</small></p>
      </div>

      ${TIERS.map((tier, ti) => {
        const rows = list.filter(({ e }) => tierOf(e.rank) === tier);
        if (!rows.length) return '';
        return `
          <div class="card">
            <h2><span class="chip p-${tier.key}" style="font-size:0.85rem">${tier.label}</span> ${ti === 0 ? 'Read these first' : ti === 1 ? 'Add these to be safe' : 'For full coverage'}</h2>
            <div class="table-wrap"><table>
              <tr><th>#</th><th>Question</th><th>Lecture</th><th>Parts</th><th></th></tr>
              ${rows
                .map(
                  ({ e, i }) => `<tr>
                    <td><b>${e.rank}</b></td>
                    <td><a href="#/exams/${quiz.id}/essay">${U.esc(e.q)}</a><br><small class="muted">${e.covers.map((c) => U.esc(topics[c].name)).join(' · ')}</small></td>
                    <td><small>${U.esc(topics[e.t].group)}</small></td>
                    <td><small>${e.parts.map((p, j) => `(${LABELS[j]}) ${p.marks}`).join(' ')}</small></td>
                    <td>${studied.has(i) ? '✓' : ''}</td></tr>`
                )
                .join('')}
            </table></div>
          </div>`;
      }).join('')}

      <div class="card">
        <h2>Lecture balance</h2>
        <p class="muted">Setters usually spread 7–8 questions across lectures (about two each), so every tier keeps all lectures represented.</p>
        <div class="table-wrap"><table>
          <tr><th>Lecture</th>${TIERS.map((t) => `<th>${t.label}</th>`).join('')}</tr>
          ${groups
            .filter((g) => list.some(({ e }) => topics[e.t].group === g))
            .map(
              (g) => `<tr><td>${U.esc(g)}</td>${TIERS.map((t) => `<td>${list.filter(({ e }) => tierOf(e.rank) === t && topics[e.t].group === g).length}</td>`).join('')}</tr>`
            )
            .join('')}
        </table></div>
      </div>

      <div class="card">
        <h2>How this was worked out</h2>
        <ol>
          <li><b>Score every syllabus topic</b> (0–100) from lecture emphasis, definitions, examples and format fit — see the Probability analysis tab.</li>
          <li><b>Weight topics by score²</b>, so core topics count much more than side topics (a 100-score topic weighs 2.8× a 60-score one).</li>
          <li><b>Build exam-shaped questions</b> — 10 marks, 2–3 parts — each preparing one or more topics.</li>
          <li><b>Order them greedily</b>: each next question adds the most not-yet-covered weight, with at least two top-10 questions per lecture.</li>
          <li><b>Estimate the odds</b>: an exam question counts as answerable if at least 2 of its 3 parts fall on topics you covered; the chance of answering ${k} of ${of.join(' or ')} is then binomial.</li>
        </ol>
        <p class="note">This is a model, not a promise. It is cautious in one way (real exam parts usually come from the same lecture, which raises your odds) and optimistic in another (it assumes the paper covers only these four lectures). If earlier lectures are examinable too, add their material.</p>
      </div>

      <div class="card">
        <h2>Writing a 10-mark answer</h2>
        <ul>
          <li><b>Match marks to length</b>: a 3-mark part ≈ one solid paragraph; a 4–5-mark part ≈ two paragraphs or a short list with explanation.</li>
          <li><b>Define first</b>: open each part with the slide definition and its source (UNODC, Cornish &amp; Clarke…).</li>
          <li><b>Use the lists</b>: stages, means, drivers and methods come as lists on the slides — number them.</li>
          <li><b>Add one Bangladesh fact or case</b> per question (BG-148, 8.2 million users, the 90/180-day rule, 40% counterfeit market).</li>
          <li><b>End with a one-line evaluation</b> (for example, corruption undermines enforcement).</li>
        </ul>
      </div>`;
  }

  // ── Probability analysis ───────────────────────────────────
  const DEFAULT_FACTORS = {
    S: '1 = on the slides; 0.75 = a slide idea that the book expands; 0.5 = book pages only. The instructor writes the quiz, so the slides weigh most.',
    D: '1 = a formal definition on a slide or a boxed key term in the book; 0.5 = defined in running text. Defined terms convert directly into MCQs and "define and explain" essays.',
    E: '1 = tied to a named study or case; examiners love "who studied what".',
    F: 'How cleanly it frames as an MCQ <i>and</i> a written question (lists, comparisons, definitions score highest).',
  };

  function renderProbability(body, quiz) {
    const f = { ...DEFAULT_FACTORS, ...(quiz.factors || {}) };
    const grouped = quiz.topics.some((t) => t.group);
    const rows = quiz.topics
      .map((t) => ({
        ...t,
        score: U.topicScore(t),
        nM: quiz.mcq.filter((m) => m.t === t.id).length,
        nE: quiz.essays.filter((e) => (e.covers || [e.t]).includes(t.id)).length,
      }))
      .sort((a, b) => b.score - a.score);

    body.innerHTML = `
      <div class="card">
        <h2>How the probability is estimated</h2>
        <p>Each syllabus topic gets a score out of 100 from four factors. It is a structured estimate of where an examiner is most likely to draw questions — not a guarantee — so use it to decide what to revise <i>first</i>, not what to skip.</p>
        <div class="table-wrap"><table>
          <tr><th>Factor</th><th>Weight</th><th>What it measures</th></tr>
          <tr><td><b>S</b> Lecture emphasis</td><td>45</td><td>${f.S}</td></tr>
          <tr><td><b>D</b> Definition weight</td><td>25</td><td>${f.D}</td></tr>
          <tr><td><b>E</b> Example anchor</td><td>15</td><td>${f.E}</td></tr>
          <tr><td><b>F</b> Format fit</td><td>15</td><td>${f.F}</td></tr>
        </table></div>
        ${quiz.probabilityNote ? `<p style="margin-top:12px">${quiz.probabilityNote}</p>` : ''}
        <p style="margin-top:12px"><code>score = 45·S + 25·D + 15·E + 15·F</code> → Very high ≥ 80 · High 60–79 · Medium 40–59 · Low &lt; 40. Question counts in this bank follow the same ranking.</p>
      </div>
      <div class="card">
        <h2>Topic ranking</h2>
        <div class="table-wrap"><table>
          <tr><th>#</th><th>Topic</th>${grouped ? '<th>Lecture</th>' : ''}<th>S</th><th>D</th><th>E</th><th>F</th><th>Score</th>${quiz.mcq.length ? '<th>MCQ</th>' : ''}<th>${isComposite(quiz) ? 'Questions' : 'Essay'}</th><th>Why</th></tr>
          ${rows
            .map(
              (t, n) => `<tr>
                <td>${n + 1}</td><td><b>${U.esc(t.name)}</b></td>${grouped ? `<td><small>${U.esc(t.group || '')}</small></td>` : ''}
                <td>${t.S}</td><td>${t.D}</td><td>${t.E}</td><td>${t.F}</td>
                <td>${U.probChip(t.score)}</td>${quiz.mcq.length ? `<td>${t.nM}</td>` : ''}<td>${t.nE}</td>
                <td><small>${U.esc(t.why)}</small></td></tr>`
            )
            .join('')}
        </table></div>
      </div>`;
  }

  HUB.views.exams = function (root, params) {
    const quiz = params[0] && HUB.quizzes.find((q) => q.id === params[0]);
    if (quiz) renderQuiz(root, quiz, params[1] || (isComposite(quiz) ? 'plan' : 'mcq'));
    else renderList(root);
  };
})();
