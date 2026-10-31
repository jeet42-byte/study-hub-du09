// Class page: the nominal roll, with each student's allotments taken from the assignment data
// (Organized Crime movie group, Forensic Science topic).
HUB.views.classroll = function (root) {
  const fs = HUB.assignments.find((a) => a.allocation);
  const oc = HUB.assignments.find((a) => a.movies);
  // Movie groups list rolls as text; keep only plain roll numbers that exist in the roster.
  const groupOf = new Map();
  if (oc)
    oc.movies.forEach((m) =>
      (m.rolls.match(/\d+/g) || []).map(Number).forEach((r) => {
        if (r <= HUB.roster.length && !groupOf.has(r)) groupOf.set(r, m);
      })
    );
  const topicOf = (roll) => fs && fs.allocation.cycle[(roll - fs.allocation.first) % fs.allocation.cycle.length];
  const mine = U.get('roll', null);

  root.innerHTML = `
    <div class="page-head">
      <h1>Class roll</h1>
      <p>Nominal roll of the Professional Masters in Criminology and Criminal Justice, session 2025–26 (${HUB.roster.length} students), with each student's assignment allotments. Search by name or roll.</p>
    </div>
    <div class="card">
      <div class="row" style="margin-bottom:12px">
        <input type="search" id="cr-q" placeholder="Search name or roll" aria-label="Search the class roll" style="flex:1;min-width:200px">
        <small class="muted" id="cr-n"></small>
      </div>
      <div class="table-wrap"><table>
        <tr><th>Roll</th><th>Name</th>${oc ? '<th>Organized Crime movie group</th>' : ''}${fs ? '<th>Forensic Science topic</th>' : ''}</tr>
        ${HUB.roster
          .map((s) => {
            const g = groupOf.get(s.roll);
            const t = topicOf(s.roll);
            const tt = fs && (fs.topics.find((x) => x.key === t) || {}).title;
            return `<tr class="cr-row${s.roll === +mine ? ' cr-me' : ''}">
              <td><b>${s.roll}</b></td>
              <td>${U.esc(s.name)}${s.roll === +mine ? ' <span class="chip p-m">You</span>' : ''}</td>
              ${oc ? `<td>${g ? `<a href="#/assignments/organized-crime">Group ${g.group}</a> <small class="muted">${U.esc(g.title)}</small>` : '<small class="muted">—</small>'}</td>` : ''}
              ${fs ? `<td><a href="#/assignments/forensic-science"><span class="chip p-h">${t}</span></a> <small class="muted">${U.esc(tt || '')}</small></td>` : ''}
            </tr>`;
          })
          .join('')}
      </table></div>
      <p class="muted" style="margin:10px 0 0"><small>Source: MCCJ 526 assignment guidelines (names and rolls) and the MCCJ 527 group assignment brief (movie groups). "—" means the roll was not listed clearly in that brief — check with your class representative.</small></p>
    </div>`;

  const q = root.querySelector('#cr-q');
  const count = root.querySelector('#cr-n');
  const filter = () => {
    const term = q.value.trim().toLowerCase();
    let n = 0;
    root.querySelectorAll('.cr-row').forEach((tr) => {
      const hit = !term || tr.textContent.toLowerCase().includes(term);
      tr.hidden = !hit;
      n += hit;
    });
    count.textContent = `${n} of ${HUB.roster.length}`;
  };
  q.addEventListener('input', filter);
  filter();
};
