// Forecast: countdowns, important dates, notices and the weekly class routine.
// Shared dates come from data/schedule.js; personal dates and routine entries live in this browser.
HUB.views.forecast = function (root) {
  const DAYS = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const courseName = (id) => (HUB.course(id) || {}).title || '';

  // ── Calendar: one grid per month, from this month to the month of the last dated event.
  const ymd = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const TYPE_SHORT = { 'Final exam': 'Final', Assignment: 'Assignment', Presentation: 'Presentation', Quiz: 'Quiz', Viva: 'Viva' };
  const colorOf = (e) => (e.personal ? 'var(--accent)' : (HUB.course(e.course) || {}).color || 'var(--accent)');
  const labelOf = (e, kind) => {
    const c = HUB.course(e.course);
    if (e.personal) return e.title;
    return `${c ? c.short || c.code : ''} ${kind === 'window' ? 'window' : TYPE_SHORT[e.type] || e.type || ''}`.trim();
  };
  let selectedDay = null;

  function byDay(dated) {
    const map = new Map();
    const add = (key, item) => (map.has(key) ? map.get(key) : map.set(key, []).get(key)).push(item);
    dated.forEach((x) => {
      add(ymd(x.d), { ...x, kind: 'due' });
      const start = x.e.windowStart && U.parseDate(x.e.windowStart);
      if (start) for (const d = new Date(start); ymd(d) < ymd(x.d); d.setDate(d.getDate() + 1)) add(ymd(d), { ...x, kind: 'window' });
    });
    return map;
  }

  function calendarHtml(dated, days) {
    if (!dated.length) return '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const last = dated[dated.length - 1].d;
    const months = [];
    for (let m = new Date(today.getFullYear(), today.getMonth(), 1); m <= last; m.setMonth(m.getMonth() + 1)) months.push(new Date(m));
    const head = DAYS.map((d) => `<span class="cal-head" aria-hidden="true">${d.slice(0, 3)}</span>`).join('');
    const grids = months
      .map((m) => {
        const offset = (m.getDay() + 1) % 7; // Saturday-first weeks
        const count = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
        const cells = [];
        for (let i = 0; i < offset; i++) cells.push('<span class="cal-empty"></span>');
        for (let n = 1; n <= count; n++) {
          const d = new Date(m.getFullYear(), m.getMonth(), n);
          const key = ymd(d);
          const items = days.get(key) || [];
          const isToday = key === ymd(today);
          const aria = `${U.fmtDay(d)}${items.length ? ': ' + items.map((x) => (x.kind === 'window' ? 'submission window — ' : '') + x.e.title).join('; ') : ''}`;
          cells.push(`<button type="button" class="cal-day${d < today ? ' past' : ''}${isToday ? ' today' : ''}${items.length ? ' has' : ''}${key === selectedDay ? ' sel' : ''}" data-day="${key}" aria-label="${U.esc(aria)}">
            <span class="cal-num">${n}</span>
            ${items.map((x) => `<span class="cal-ev ${x.kind}" style="--c:${colorOf(x.e)}"><span class="cal-label">${U.esc(labelOf(x.e, x.kind))}</span></span>`).join('')}
          </button>`);
        }
        return `<div class="cal-month">
          <h3>${m.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</h3>
          <div class="cal-grid">${head}${cells.join('')}</div>
        </div>`;
      })
      .join('');
    const used = [...new Set(dated.map((x) => x.e.course).filter(Boolean))].map((id) => HUB.course(id)).filter(Boolean);
    return `
      <h2 class="section-title">Calendar</h2>
      <div class="card">
        <div class="row" style="margin-bottom:10px">
          ${used.map((c) => `<span class="cal-key" style="--c:${c.color}">${U.esc(c.short || c.code)} — ${U.esc(c.title)}</span>`).join('')}
          <span class="cal-key window" style="--c:var(--muted)">Submission window</span>
          <span class="spacer"></span>
          <button class="btn small" id="cal-ics" title="Download all dates as a calendar file for Google Calendar, Outlook or your phone">Add to my calendar (.ics)</button>
        </div>
        <div class="cal-months">${grids}</div>
        <div id="cal-detail" aria-live="polite"></div>
      </div>`;
  }

  function dayDetail(key, days) {
    const items = (days.get(key) || []).slice().sort((a, b) => (a.kind === 'window') - (b.kind === 'window'));
    const d = U.parseDate(key);
    if (!items.length) return `<p class="muted" style="margin:12px 0 0"><b>${U.fmtDay(d)}</b> — nothing scheduled.</p>`;
    return `<h3 style="margin-top:14px">${U.fmtDay(d)} <small class="muted">· ${U.relDays(U.daysUntil(d))}</small></h3>
      ${items
        .map(({ e, d: due, kind }) => {
          const time = due.getHours() || due.getMinutes() ? due.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) : '';
          return `<div class="cal-item" style="--c:${colorOf(e)}">
            <div class="row"><span class="chip">${U.esc(kind === 'window' ? 'Submission window open' : e.type || 'Event')}</span>${e.personal ? '<span class="chip">Personal</span>' : `<small class="muted">${U.esc(courseName(e.course))}</small>`}</div>
            <b>${e.link ? `<a href="${U.esc(e.link)}">${U.esc(e.title)}</a>` : U.esc(e.title)}</b>
            ${kind === 'window' ? `<br><small>Last day: ${U.fmtDay(due)}</small>` : ''}
            ${kind !== 'window' && (time || e.time || e.room) ? `<br><small>${U.esc(e.time || time)}${e.room ? ' · ' + U.esc(e.room) : ''}</small>` : ''}
            ${e.note ? `<br><small class="muted">${U.esc(e.note)}</small>` : ''}
          </div>`;
        })
        .join('')}`;
  }

  // Calendar file (RFC 5545). Times are written as floating local time, so they show as entered.
  function downloadIcs(dated) {
    const pad = (n) => String(n).padStart(2, '0');
    const esc = (t) => String(t || '').replace(/[\\,;]/g, (c) => '\\' + c).replace(/\n/g, '\\n');
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Study Hub//Forecast//EN', 'CALSCALE:GREGORIAN'];
    dated.forEach(({ e, d }) => {
      // Exams get their real time slot; deadlines become all-day entries with the cut-off in the title.
      const timed = (d.getHours() || d.getMinutes()) && e.type === 'Final exam';
      const cutoff = !timed && (d.getHours() || d.getMinutes()) ? ` (due ${d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })})` : '';
      const day = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
      const next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
      lines.push(
        'BEGIN:VEVENT',
        `UID:${esc(e.id)}@study-hub-du09`,
        `DTSTAMP:${stamp}`,
        timed ? `DTSTART:${day}T${pad(d.getHours())}${pad(d.getMinutes())}00` : `DTSTART;VALUE=DATE:${day}`,
        timed ? 'DURATION:PT3H' : `DTEND;VALUE=DATE:${next.getFullYear()}${pad(next.getMonth() + 1)}${pad(next.getDate())}`,
        `SUMMARY:${esc(e.title + cutoff)}`,
        ...(e.room ? [`LOCATION:${esc(e.room)}`] : []),
        ...(e.note ? [`DESCRIPTION:${esc(e.note)}`] : []),
        'END:VEVENT'
      );
    });
    lines.push('END:VCALENDAR');
    const url = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'study-hub-dates.ics' });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function draw() {
    const events = U.allEvents().map((e) => ({ e, d: U.eventDate(e) }));
    const dated = events.filter((x) => x.d).sort((a, b) => a.d - b.d);
    // Routine exams get their own table below, so keep them out of the countdown cards.
    const upcoming = dated.filter((x) => U.daysUntil(x.d) >= 0 && !x.e.routine);
    const routine = U.routine();
    const nextExam = routine.find((x) => U.daysUntil(x.d) >= 0);
    const tba = events.filter((x) => !x.d);
    const days = byDay(dated);
    if (!selectedDay) {
      const next = dated.find((x) => U.daysUntil(x.d) >= 0);
      selectedDay = next ? ymd(next.d) : null;
    }
    const classes = [...HUB.classes, ...U.get('personalClasses', []).map((c) => ({ ...c, personal: true }))].sort(
      (a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || a.start.localeCompare(b.start)
    );

    const countdown = ({ e, d }) => {
      const n = U.daysUntil(d);
      return `
        <div class="card countdown ${n < 0 ? 'past' : ''}">
          <div class="stat-label">${U.esc(e.type || 'Event')}</div>
          <div class="big">${Math.abs(n)}</div>
          <div>${n < 0 ? 'days ago' : n === 1 ? 'day left' : 'days left'}</div>
          <p style="margin:8px 0 0"><b>${U.esc(e.title)}</b><br><small>${U.fmtDate(d)}</small></p>
          ${!e.date && !e.personal ? `<button class="btn small" data-clear="${U.esc(e.id)}">Clear my date</button>` : ''}
        </div>`;
    };

    root.innerHTML = `
      <div class="page-head">
        <h1>Forecast</h1>
        <p>Days left before exams, important dates, notices and your class routine. Dates marked TBA can be set for yourself until they are officially announced.</p>
      </div>

      ${
        routine.length
          ? `<div class="card">
              <div class="row" style="align-items:flex-start;gap:24px">
                <div class="countdown" style="min-width:150px">
                  <div class="stat-label">${nextExam ? 'Next final exam' : 'Finals'}</div>
                  <div class="big">${nextExam ? U.daysUntil(nextExam.d) : '✓'}</div>
                  <div>${nextExam ? (U.daysUntil(nextExam.d) === 1 ? 'day left' : 'days left') : 'all done'}</div>
                </div>
                <div style="flex:1;min-width:220px">
                  <h2 style="margin-bottom:4px">Final exam routine</h2>
                  <p class="muted" style="margin:0">${U.fmtDay(routine[0].d)} – ${U.fmtDay(routine[routine.length - 1].d)} · ${U.esc(routine[0].e.time || '')} · ${U.esc(routine[0].e.room || '')}</p>
                  ${nextExam ? `<p style="margin:6px 0 0">Next: <b>${U.esc(nextExam.e.title)}</b></p>` : ''}
                </div>
              </div>
              <div class="table-wrap" style="margin-top:12px"><table>
                <tr><th>Date</th><th>Course</th><th>Time &amp; room</th><th>Days left</th><th>Prep gap</th></tr>
                ${routine
                  .map(({ e, d }, i) => {
                    const n = U.daysUntil(d);
                    const gap = i ? U.daysUntil(d) - U.daysUntil(routine[i - 1].d) : null;
                    return `<tr class="${n < 0 ? 'past' : ''}" style="${n < 0 ? 'opacity:.55' : ''}">
                      <td><b>${U.fmtDay(d)}</b></td>
                      <td>${e.link ? `<a href="${U.esc(e.link)}">${U.esc(e.title)}</a>` : U.esc(e.title)}</td>
                      <td><small>${U.esc(e.time || '')}<br>${U.esc(e.room || '')}</small></td>
                      <td><b>${n < 0 ? 'Done' : n === 0 ? 'Today' : n}</b></td>
                      <td>${gap === null ? '—' : `${gap} day${gap === 1 ? '' : 's'} after previous`}</td></tr>`;
                  })
                  .join('')}
              </table></div>
            </div>`
          : ''
      }

      ${calendarHtml(dated, days)}

      <h2 class="section-title">Countdowns</h2>
      <div class="grid">
        ${upcoming.map(countdown).join('')}
        ${tba
          .map(
            ({ e }) => `
            <div class="card countdown">
              <div class="stat-label">${U.esc(e.type || 'Event')}</div>
              <div class="big">TBA</div>
              <p style="margin:8px 0"><b>${U.esc(e.title)}</b><br><small>${U.esc(e.tentative || 'Date not announced')}</small></p>
              <div class="row" style="justify-content:center">
                <input type="date" data-set="${U.esc(e.id)}" aria-label="Set a date for ${U.esc(e.title)}">
              </div>
              <small class="muted">Set your own date to start the countdown</small>
            </div>`
          )
          .join('')}
      </div>

      <h2 class="section-title">Notices</h2>
      ${
        HUB.notices.length
          ? U.notices()
              .map(
                (n) => `
            <div class="card">
              <div class="row"><span class="chip">${U.esc(courseName(n.course))}</span>${n.date ? `<small class="muted">${U.fmtDate(U.parseDate(n.date))}</small>` : ''}</div>
              <h3 style="margin-top:8px">${U.esc(n.title)}</h3>
              <p style="margin:0">${U.esc(n.body)}</p>
            </div>`
              )
              .join('')
          : '<p class="empty">No notices.</p>'
      }

      <h2 class="section-title">Important dates</h2>
      <div class="card">
        ${
          dated.length || tba.length
            ? `<ul class="timeline">
                ${dated
                  .map(({ e, d }) => {
                    const n = U.daysUntil(d);
                    return `<li class="${n < 0 ? 'past' : ''}">
                      <div class="when">${U.fmtDate(d)}<br><small class="muted">${U.relDays(n)}</small></div>
                      <div>
                        <b>${e.link ? `<a href="${U.esc(e.link)}">${U.esc(e.title)}</a>` : U.esc(e.title)}</b>
                        ${e.personal ? '<span class="chip">Personal</span>' : `<span class="chip">${U.esc(courseName(e.course))}</span>`}
                        ${e.note ? `<br><small class="muted">${U.esc(e.note)}</small>` : ''}
                        ${e.personal ? `<br><button class="btn small" data-del-ev="${U.esc(e.id)}">Remove</button>` : ''}
                      </div></li>`;
                  })
                  .join('')}
                ${tba
                  .map(
                    ({ e }) => `<li>
                      <div class="when">TBA<br><small class="muted">${U.esc(e.tentative || '')}</small></div>
                      <div><b>${e.link ? `<a href="${U.esc(e.link)}">${U.esc(e.title)}</a>` : U.esc(e.title)}</b>
                      ${e.note ? `<br><small class="muted">${U.esc(e.note)}</small>` : ''}</div></li>`
                  )
                  .join('')}
              </ul>`
            : '<p class="empty">No dates yet.</p>'
        }
        <h3 style="margin-top:16px">Add a personal date</h3>
        <form id="ev-form" class="row">
          <input name="title" placeholder="e.g. Assignment submission" required style="flex:1;min-width:180px">
          <input name="date" type="date" required>
          <input name="time" type="time" aria-label="Time (optional)">
          <button class="btn primary small">Add</button>
        </form>
      </div>

      <h2 class="section-title">Class routine</h2>
      <div class="card">
        ${
          classes.length
            ? `<div class="table-wrap"><table>
                <tr><th>Day</th><th>Time</th><th>Course</th><th>Room</th><th></th></tr>
                ${classes
                  .map(
                    (c) => `<tr>
                      <td><b>${U.esc(c.day)}</b></td><td>${U.esc(c.start)}–${U.esc(c.end)}</td>
                      <td>${U.esc(courseName(c.course) || c.course)}</td><td>${U.esc(c.room || '—')}</td>
                      <td>${c.personal ? `<button class="btn small" data-del-cl="${U.esc(c.id)}">✕</button>` : ''}</td></tr>`
                  )
                  .join('')}
              </table></div>`
            : '<p class="empty">No classes added yet.</p>'
        }
        <h3 style="margin-top:16px">Add a class</h3>
        <form id="cl-form" class="row">
          <input name="course" placeholder="Course" required list="course-list" style="flex:1;min-width:150px">
          <datalist id="course-list">${HUB.courses.map((c) => `<option value="${U.esc(c.title)}">`).join('')}</datalist>
          <select name="day">${DAYS.map((d) => `<option>${d}</option>`).join('')}</select>
          <input name="start" type="time" required aria-label="Start">
          <input name="end" type="time" required aria-label="End">
          <input name="room" placeholder="Room" style="width:90px">
          <button class="btn primary small">Add</button>
        </form>
      </div>`;

    const detail = root.querySelector('#cal-detail');
    if (detail) {
      const pick = (key) => {
        selectedDay = key;
        root.querySelectorAll('.cal-day.sel').forEach((b) => b.classList.remove('sel'));
        const btn = root.querySelector(`.cal-day[data-day="${key}"]`);
        if (btn) btn.classList.add('sel');
        detail.innerHTML = dayDetail(key, days);
      };
      if (selectedDay) pick(selectedDay);
      root.querySelectorAll('.cal-day').forEach((b) => b.addEventListener('click', () => pick(b.dataset.day)));
      root.querySelector('#cal-ics').addEventListener('click', () => downloadIcs(dated));
    }

    root.querySelectorAll('[data-set]').forEach((inp) =>
      inp.addEventListener('change', () => {
        if (!inp.value) return;
        U.set('eventDate:' + inp.dataset.set, inp.value);
        draw();
      })
    );
    root.querySelectorAll('[data-clear]').forEach((b) =>
      b.addEventListener('click', () => {
        U.del('eventDate:' + b.dataset.clear);
        draw();
      })
    );
    root.querySelectorAll('[data-del-ev]').forEach((b) =>
      b.addEventListener('click', () => {
        U.set('personalEvents', U.get('personalEvents', []).filter((e) => e.id !== b.dataset.delEv));
        draw();
      })
    );
    root.querySelectorAll('[data-del-cl]').forEach((b) =>
      b.addEventListener('click', () => {
        U.set('personalClasses', U.get('personalClasses', []).filter((c) => c.id !== b.dataset.delCl));
        draw();
      })
    );
    root.querySelector('#ev-form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const f = new FormData(ev.target);
      const list = U.get('personalEvents', []);
      list.push({
        id: 'p' + Date.now(),
        type: 'Personal',
        title: f.get('title'),
        date: f.get('time') ? `${f.get('date')}T${f.get('time')}` : f.get('date'),
      });
      U.set('personalEvents', list);
      draw();
    });
    root.querySelector('#cl-form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const f = new FormData(ev.target);
      const match = HUB.courses.find((c) => c.title === f.get('course'));
      const list = U.get('personalClasses', []);
      list.push({
        id: 'c' + Date.now(),
        course: match ? match.id : f.get('course'),
        day: f.get('day'),
        start: f.get('start'),
        end: f.get('end'),
        room: f.get('room'),
      });
      U.set('personalClasses', list);
      draw();
    });
  }

  draw();
};
