
let state = {
  screen: 'select-test', // select-test | upload | mapping | results
  selectedTestId: null,
  rawRows: [],
  headers: [],
  mapping: { name:null, answers:null },
  perQuestion: {},    // n -> {counts:{A:..}, blank:n, total:n}
  studentScores: [],  // list of {name, score}
  sortMode: 'hardest', // hardest | number
  partFilter: 'all',
  openRow: null,
  error: null,
  googleReady: false,
  googleSignedIn: false,
  googleLoading: false,
  resultsView: 'question',  // question | student
  studentSort: 'lowest',    // lowest | name
  openStudent: null,
};

function currentTest(){
  return window.TESTS.find(t => t.id === state.selectedTestId) || null;
}

function selectTest(id){
  state.selectedTestId = id;
  state.screen = 'upload';
  state.error = null;
  render();
}

function switchTest(){
  state.selectedTestId = null;
  state.screen = 'select-test';
  state.rawRows = [];
  state.headers = [];
  state.partFilter = 'all';
  render();
}

/* =========================================================================
   GOOGLE SIGN-IN + LIVE SHEET PULL
   One OAuth client covers every test — each test just needs its own
   spreadsheetId/range, set in that test's questions-meta.js.
   Access is controlled entirely by who you've shared each results Sheet
   with in Google — no separate password to manage.
   ========================================================================= */
const GOOGLE_CLIENT_ID = "1016275981062-9tsbj55icun23dbtbupmvjbg7of3stjg.apps.googleusercontent.com";

function isGoogleConfigured(){
  const t = currentTest();
  return !!GOOGLE_CLIENT_ID && !!(t && t.spreadsheetId);
}

let tokenClient = null;

function initGoogleSignIn(){
  if(!GOOGLE_CLIENT_ID || !window.google || !google.accounts) return;
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GOOGLE_CLIENT_ID,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    callback: (resp) => {
      state.googleLoading = false;
      if(resp.error){
        state.error = 'Sign-in was cancelled or failed. Try again, or use manual upload below.';
        render();
        return;
      }
      fetchFromSheetsAPI(resp.access_token);
    },
  });
  state.googleReady = true;
  render();
}

function signInWithGoogle(){
  if(!tokenClient){
    state.error = 'Google sign-in hasn\'t finished loading yet — wait a second and try again.';
    render();
    return;
  }
  state.googleLoading = true;
  state.error = null;
  render();
  tokenClient.requestAccessToken();
}

function fetchFromSheetsAPI(accessToken){
  const t = currentTest();
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${t.spreadsheetId}/values/${encodeURIComponent(t.range)}`;
  fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then(r => {
      if(r.status === 403){
        throw new Error('You signed in, but your Google account doesn\'t have access to this results sheet. Ask the sheet owner to share it with you.');
      }
      if(!r.ok){
        throw new Error('Could not load the sheet (status ' + r.status + ').');
      }
      return r.json();
    })
    .then(data => {
      const values = data.values || [];
      if(values.length < 2){
        throw new Error('The sheet has no response rows yet.');
      }
      const headers = values[0];
      const rows = values.slice(1).map(rowArr => {
        const obj = {};
        headers.forEach((h,i) => { obj[h] = rowArr[i] !== undefined ? rowArr[i] : ''; });
        return obj;
      });
      state.headers = headers;
      state.rawRows = rows;
      state.googleSignedIn = true;
      autoDetectColumns();
      state.error = null;
      if(!state.mapping.answers){
        state.error = 'Could not find a column with answer data (like "1:A 2:B✗C ...") in this sheet. Check you picked the right test, or that the sheet has responses yet.';
        render();
        return;
      }
      runAnalysis();
    })
    .catch(err => {
      state.error = err.message;
      render();
    });
}

const app = document.getElementById('app');

function renderMath(container){
  if(window.renderMathInElement){
    renderMathInElement(container, {
      delimiters:[{left:"$$", right:"$$", display:true},{left:"$", right:"$", display:false}],
      throwOnError:false
    });
  }
}

function autoDetectColumns(){
  const headers = state.headers;
  const rows = state.rawRows;
  // Answers column: whichever column has the most "N:X" style tokens across all rows
  let bestCol = null, bestScore = -1;
  headers.forEach(h=>{
    let score = 0;
    rows.forEach(r=>{
      const v = r[h] || '';
      const matches = v.match(/\d+:[^\s]+/g);
      if(matches) score += matches.length;
    });
    if(score > bestScore){ bestScore = score; bestCol = h; }
  });
  state.mapping.answers = bestScore > 0 ? bestCol : null;

  // Name column: header containing "name"
  let nameCol = headers.find(h => /name/i.test(h));
  if(!nameCol){
    nameCol = headers.find(h => h !== state.mapping.answers) || headers[0];
  }
  state.mapping.name = nameCol;

  // Timestamp column: Google Forms always adds one called "Timestamp"
  state.mapping.timestamp = headers.find(h => /timestamp/i.test(h)) || null;
}

function runAnalysis(){
  if(!state.mapping.answers){
    state.error = 'Please choose which column contains the answer strings.';
    render();
    return;
  }
  const QUESTIONS_META = currentTest().questions;
  const perQuestion = {};
  QUESTIONS_META.forEach(q=>{ perQuestion[q.n] = {counts:{}, blank:0, total:0, part:q.part}; });

  const studentScores = [];

  state.rawRows.forEach(row=>{
    const ansStr = row[state.mapping.answers] || '';
    const name = state.mapping.name ? (row[state.mapping.name] || 'Unnamed') : 'Unnamed';
    const timestamp = state.mapping.timestamp ? (row[state.mapping.timestamp] || null) : null;
    if(!ansStr.trim()) return;
    const tokens = ansStr.trim().split(/\s+/);
    let correctCount = 0, wrongCount = 0, blankCount = 0;
    const wrongQs = [];
    const blankQs = [];
    tokens.forEach(tok=>{
      const m = tok.match(/^(\d+):(.*)$/);
      if(!m) return;
      const n = parseInt(m[1],10);
      const rest = m[2];
      if(!perQuestion[n]) return;
      let given = null;
      if(rest.indexOf('✗') !== -1){
        given = rest.split('✗')[0];
      } else if(rest.indexOf('—') === 0 || rest.indexOf('-(') === 0){
        given = null;
      } else {
        given = rest;
      }
      perQuestion[n].total++;
      const qMeta = QUESTIONS_META.find(q=>q.n===n);
      if(given){
        perQuestion[n].counts[given] = (perQuestion[n].counts[given]||0) + 1;
        if(qMeta && given === qMeta.answer){
          correctCount++;
        } else {
          wrongCount++;
          wrongQs.push({n, given, correct: qMeta?qMeta.answer:'?'});
        }
      } else {
        perQuestion[n].blank++;
        blankCount++;
        blankQs.push(n);
      }
    });
    const total = tokens.length;
    studentScores.push({name, timestamp, correct: correctCount, wrong: wrongCount, blank: blankCount, total, wrongQs, blankQs});
  });

  state.perQuestion = perQuestion;
  state.studentScores = studentScores;
  state.screen = 'results';
  state.resultsView = 'question';
  state.studentSort = 'lowest';
  state.openStudent = null;
  state.error = null;
  render();
}

function pctCorrect(n){
  const q = currentTest().questions.find(x=>x.n===n);
  const stats = state.perQuestion[n];
  if(!stats || stats.total===0) return null;
  const correct = stats.counts[q.answer] || 0;
  return Math.round((correct/stats.total)*100);
}

function mostCommonWrong(n){
  const q = currentTest().questions.find(x=>x.n===n);
  const stats = state.perQuestion[n];
  if(!stats) return null;
  let best=null, bestN=0;
  Object.keys(stats.counts).forEach(k=>{
    if(k===q.answer) return;
    if(stats.counts[k] > bestN){ bestN = stats.counts[k]; best = k; }
  });
  return best ? {key:best, count:bestN} : null;
}

function toggleRow(n){
  state.openRow = state.openRow===n ? null : n;
  render();
}

function setSortMode(m){ state.sortMode = m; render(); }
function setPartFilter(p){ state.partFilter = p; render(); }
function setResultsView(v){ state.resultsView = v; render(); }
function setStudentSort(s){ state.studentSort = s; render(); }
function toggleStudent(i){ state.openStudent = state.openStudent===i ? null : i; render(); }

function reset(){
  const keepTestId = state.selectedTestId;
  state = {screen:'upload', selectedTestId:keepTestId, rawRows:[], headers:[], mapping:{name:null,answers:null}, perQuestion:{}, studentScores:[], sortMode:'hardest', partFilter:'all', openRow:null, error:null, googleReady:true, googleSignedIn:false, googleLoading:false, resultsView:'question', studentSort:'lowest', openStudent:null};
  render();
}

/* ---------------- RENDER ---------------- */

function renderSelectTest(){
  const tests = window.TESTS || [];
  if(tests.length === 0){
    return `
    <div class="wrap">
      <div class="card">
        <h3>No tests registered</h3>
        <p class="muted">This analysis tool has no test data loaded. Make sure a test's questions-meta.js is included in analysis.html.</p>
      </div>
    </div>`;
  }
  const rows = tests.map(t => `
    <div class="card" style="cursor:pointer;" onclick="selectTest('${t.id}')">
      <h3 style="margin:0;">${t.label}</h3>
      <p class="muted" style="margin:4px 0 0;">${t.questions.length} questions</p>
    </div>
  `).join('');
  return `
  <div class="wrap">
    <div style="margin-bottom:14px; font-size:13px; color:var(--ink-soft);">Choose which test's results you want to analyze:</div>
    ${rows}
  </div>`;
}

function renderUpload(){
  const test = currentTest();
  const googleSection = isGoogleConfigured() ? `
    <div class="card">
      <h3>Pull results</h3>
      <p class="muted">Sign in with the Google account that has access to your results sheet. Only accounts you've shared the sheet with can pull data — no separate password needed.</p>
      <div class="btn-row">
        <button class="btn" onclick="signInWithGoogle()" ${state.googleReady?'':'disabled'}>
          ${state.googleLoading ? 'Signing in…' : (state.googleReady ? 'Sign in with Google' : 'Loading…')}
        </button>
      </div>
      ${state.error ? `<div class="error-box">${state.error}</div>` : ''}
    </div>
  ` : `
    <div class="card">
      <h3>Google sign-in not set up</h3>
      <p class="muted">This test is missing a spreadsheetId in its questions-meta.js, so results can't be pulled yet.</p>
    </div>
  `;

  return `
  <div class="wrap">
    ${(window.TESTS && window.TESTS.length > 1) ? `
    <div style="margin-bottom:14px; font-size:13px; color:var(--ink-soft);">
      Test: <strong>${test ? test.label : 'Unknown'}</strong> ·
      <a href="#" onclick="switchTest(); return false;">switch test</a>
    </div>` : ''}
    ${googleSection}
  </div>`;
}

function renderOptionDist(q){
  const stats = state.perQuestion[q.n];
  const total = stats.total || 1;
  let rows = q.options.map(([key,text])=>{
    const count = stats.counts[key] || 0;
    const pct = Math.round((count/total)*100);
    const isCorrect = key===q.answer;
    return `<div class="opt-dist-row">
      <div class="opt-key ${isCorrect?'correct':''}">${key}</div>
      <div class="opt-text">${text.replace(/<[^>]+>/g,' ').slice(0,40)}</div>
      <div class="opt-bar-track"><div class="opt-bar-fill ${isCorrect?'correct':''}" style="width:${pct}%"></div></div>
      <div class="opt-pct">${pct}%</div>
    </div>`;
  }).join('');
  const blankPct = Math.round((stats.blank/total)*100);
  rows += `<div class="opt-dist-row">
      <div class="opt-key">—</div>
      <div class="opt-text" style="color:var(--ink-soft);">Blank</div>
      <div class="opt-bar-track"><div class="opt-bar-fill" style="width:${blankPct}%; background:var(--ink-soft);"></div></div>
      <div class="opt-pct">${blankPct}%</div>
    </div>`;
  return rows;
}

function renderQuestionView(){
  const qList = currentTest().questions
    .filter(q => state.partFilter==='all' || q.part===state.partFilter)
    .map(q => ({q, pct: pctCorrect(q.n)}))
    .filter(x => x.pct !== null);

  if(state.sortMode==='hardest') qList.sort((a,b)=>a.pct-b.pct);
  else qList.sort((a,b)=>a.q.n-b.q.n);

  const rows = qList.map(({q,pct})=>{
    const wrong = mostCommonWrong(q.n);
    const stats = state.perQuestion[q.n];
    const color = pct>=70 ? 'var(--good)' : pct>=40 ? 'var(--warn)' : 'var(--bad)';
    const isOpen = state.openRow===q.n;
    return `
    <div class="qrow ${isOpen?'open':''}">
      <div class="qrow-head" onclick="toggleRow(${q.n})">
        <div class="qrow-num">Q${q.n}</div>
        <div class="qrow-bar-wrap">
          <div class="qrow-bar-track"><div class="qrow-bar-fill" style="width:${pct}%; background:${color};"></div></div>
          <div class="qrow-sub">Part ${q.part}${wrong ? ` · most picked wrong answer: ${wrong.key} (${Math.round((wrong.count/stats.total)*100)}%)` : ''}</div>
        </div>
        <div class="qrow-pct" style="color:${color};">${pct}%</div>
      </div>
      <div class="qrow-detail">
        <div class="qtext">${q.text}${q.after?q.after:''}</div>
        ${renderOptionDist(q)}
      </div>
    </div>`;
  }).join('');

  const allQuestions = currentTest().questions;
  const partCodes = Array.from(new Set(allQuestions.map(q=>q.part))).sort();
  const partButtons = partCodes.map(code =>
    `<button class="${state.partFilter===code?'active':''}" onclick="setPartFilter('${code}')">Part ${code}</button>`
  ).join('');

  return `
    <div class="sort-tabs">
      <button class="${state.sortMode==='hardest'?'active':''}" onclick="setSortMode('hardest')">Hardest first</button>
      <button class="${state.sortMode==='number'?'active':''}" onclick="setSortMode('number')">Question order</button>
    </div>
    <div class="part-filter">
      <button class="${state.partFilter==='all'?'active':''}" onclick="setPartFilter('all')">All ${allQuestions.length}</button>
      ${partButtons}
    </div>
    ${rows}
  `;
}

function renderStudentView(){
  const list = state.studentScores.map((s,i)=>({...s, i, pct: s.total ? Math.round((s.correct/s.total)*100) : 0}));

  if(state.studentSort==='lowest') list.sort((a,b)=>a.pct-b.pct);
  else if(state.studentSort==='time') list.sort((a,b)=>(a.timestamp||'').localeCompare(b.timestamp||''));
  else list.sort((a,b)=>a.name.localeCompare(b.name));

  const rows = list.map(s=>{
    const color = s.pct>=70 ? 'var(--good)' : s.pct>=40 ? 'var(--warn)' : 'var(--bad)';
    const isOpen = state.openStudent===s.i;
    const wrongList = s.wrongQs.length
      ? s.wrongQs.map(w=>`Q${w.n} (picked ${w.given}, correct ${w.correct})`).join(', ')
      : 'None';
    const blankList = s.blankQs.length ? s.blankQs.map(n=>'Q'+n).join(', ') : 'None';
    const subLine = `${s.correct}/${s.total} correct · ${s.wrong} wrong · ${s.blank} blank${s.timestamp ? ` · Submitted ${s.timestamp}` : ''}`;
    return `
    <div class="qrow ${isOpen?'open':''}">
      <div class="qrow-head" onclick="toggleStudent(${s.i})">
        <div class="qrow-num" style="width:auto; max-width:110px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${s.name}</div>
        <div class="qrow-bar-wrap">
          <div class="qrow-bar-track"><div class="qrow-bar-fill" style="width:${s.pct}%; background:${color};"></div></div>
          <div class="qrow-sub">${subLine}</div>
        </div>
        <div class="qrow-pct" style="color:${color};">${s.pct}%</div>
      </div>
      <div class="qrow-detail">
        <div class="qtext" style="font-size:13.5px;"><strong>Wrong:</strong> ${wrongList}</div>
        <div class="qtext" style="font-size:13.5px; margin-top:0;"><strong>Blank:</strong> ${blankList}</div>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="sort-tabs">
      <button class="${state.studentSort==='lowest'?'active':''}" onclick="setStudentSort('lowest')">Lowest score first</button>
      <button class="${state.studentSort==='name'?'active':''}" onclick="setStudentSort('name')">Alphabetical</button>
      <button class="${state.studentSort==='time'?'active':''}" onclick="setStudentSort('time')">Submission order</button>
    </div>
    ${rows}
  `;
}

function renderResults(){
  const qList = currentTest().questions
    .map(q => ({q, pct: pctCorrect(q.n)}))
    .filter(x => x.pct !== null);
  const avgPct = qList.length ? Math.round(qList.reduce((s,x)=>s+x.pct,0)/qList.length) : 0;
  const hardest = qList.length ? qList.reduce((m,x)=>x.pct<m.pct?x:m, qList[0]) : null;
  const nResponses = state.studentScores.length;

  return `
  <div class="wrap">
    <div class="stat-grid">
      <div class="stat-card"><div class="n">${nResponses}</div><div class="l">Responses</div></div>
      <div class="stat-card"><div class="n">${avgPct}%</div><div class="l">Avg % correct</div></div>
      <div class="stat-card"><div class="n">Q${hardest?hardest.q.n:'–'}</div><div class="l">Hardest question</div></div>
    </div>

    <div class="part-filter">
      <button class="${state.resultsView==='question'?'active':''}" onclick="setResultsView('question')">By question</button>
      <button class="${state.resultsView==='student'?'active':''}" onclick="setResultsView('student')">By student</button>
    </div>

    ${state.resultsView==='student' ? renderStudentView() : renderQuestionView()}

    <div class="btn-row">
      <button class="btn secondary" onclick="reset()">Load different data</button>
    </div>
  </div>`;
}

function render(){
  let body = '';
  if(state.screen==='select-test') body = renderSelectTest();
  else if(state.screen==='upload') body = renderUpload();
  else body = renderResults();

  const test = currentTest();
  app.innerHTML = `
    <div class="topbar">
      <div class="kicker">${test ? test.label : 'Class Results Analysis'}</div>
      <div class="title">${test ? 'Class Results Analysis' : 'Choose a test'}</div>
    </div>
    ${body}
  `;
  renderMath(app);
}

// Skip the picker screen automatically when there's only one test registered.
if(window.TESTS && window.TESTS.length === 1){
  state.selectedTestId = window.TESTS[0].id;
  state.screen = 'upload';
}

render();
initGoogleSignIn();
