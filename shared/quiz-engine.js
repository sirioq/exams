/* =========================================================================
   SHARED QUIZ ENGINE
   Generic timer / navigator / scoring / submission logic.
   Reads test-specific data from window.TEST_CONFIG (set by each test's questions.js).
   ========================================================================= */

const QUESTIONS = TEST_CONFIG.questions;
const DIAGRAMS = TEST_CONFIG.diagrams;
const TOTAL_SECONDS = TEST_CONFIG.totalSeconds;
const RESULTS_FORM = TEST_CONFIG.resultsForm;


/* =========================================================================
   QUIZ ENGINE
   ========================================================================= */
let state = {
  screen:'start',       // start | test | results
  current:0,
  answers:{},            // n -> key
  flags:{},              // n -> bool
  timeLeft:TOTAL_SECONDS,
  timerId:null,
  reviewFilter:'all',
  reviewFocus:null,
  studentName:'',
  submitStatus:'idle',   // idle | sending | sent | failed | unconfigured
};

/* =========================================================================
   TEACHER RESULTS COLLECTION (Google Form auto-submit)
   Fill these in once the Google Form is set up, then results from every
   student who finishes the test will be sent automatically — no action
   needed from the student beyond entering their name.
   ========================================================================= */

function buildAnswersString(){
  return QUESTIONS.map(q=>{
    const given = state.answers[q.n];
    if(given===undefined) return `${q.n}:—(${q.answer})`;
    if(given===q.answer) return `${q.n}:${given}`;
    return `${q.n}:${given}✗${q.answer}`;
  }).join(' ');
}

function isFormConfigured(){
  return !!RESULTS_FORM.actionUrl && !!RESULTS_FORM.entries.name;
}

function submitResultsToTeacher(s){
  if(!isFormConfigured()){
    state.submitStatus = 'unconfigured';
    render();
    return;
  }
  state.submitStatus = 'sending';
  render();
  const body = new URLSearchParams();
  body.append(RESULTS_FORM.entries.name, state.studentName || 'Unnamed');
  body.append(RESULTS_FORM.entries.score, `${s.correct}/${s.total}`);
  body.append(RESULTS_FORM.entries.partA, `${s.partA.correct}/${s.partA.total}`);
  body.append(RESULTS_FORM.entries.partB, `${s.partB.correct}/${s.partB.total}`);
  body.append(RESULTS_FORM.entries.timeUsed, fmtTime(TOTAL_SECONDS-state.timeLeft));
  if(RESULTS_FORM.entries.answers){
    body.append(RESULTS_FORM.entries.answers, buildAnswersString());
  }
  fetch(RESULTS_FORM.actionUrl, {method:'POST', mode:'no-cors', body})
    .then(()=>{ state.submitStatus='sent'; render(); })
    .catch(()=>{ state.submitStatus='failed'; render(); });
}

const app = document.getElementById('app');

function fmtTime(s){
  const m = Math.floor(s/60), sec = s%60;
  return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0');
}

function renderMath(container){
  if(window.renderMathInElement){
    renderMathInElement(container, {
      delimiters:[
        {left:"$$", right:"$$", display:true},
        {left:"$", right:"$", display:false}
      ],
      throwOnError:false
    });
  }
}

function startQuiz(){
  const input = document.getElementById('studentNameInput');
  const name = input ? input.value.trim() : '';
  if(!name){
    alert('Please enter your name before starting the test.');
    if(input) input.focus();
    return;
  }
  state.studentName = name;
  state.screen='test';
  state.current=0;
  state.answers={};
  state.flags={};
  state.timeLeft=TOTAL_SECONDS;
  state.submitStatus='idle';
  render();
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    if(state.timeLeft<=0){
      clearInterval(state.timerId);
      state.timeLeft=0;
      finishQuiz();
      return;
    }
    updateTimerDisplay();
  },1000);
}

function updateTimerDisplay(){
  const el = document.getElementById('timerDisplay');
  if(!el) return;
  el.textContent = fmtTime(state.timeLeft);
  el.classList.toggle('low', state.timeLeft<=300);
}

function selectAnswer(n,key){
  state.answers[n]=key;
  render();
}

function toggleFlag(n){
  state.flags[n]=!state.flags[n];
  render();
}

function goTo(n){
  state.current=n;
  render();
  window.scrollTo(0,0);
  const qw = document.querySelector('.question-wrap');
  if(qw) qw.scrollTop=0;
}

function finishQuiz(){
  if(state.timerId) clearInterval(state.timerId);
  state.screen='results';
  state.reviewFilter='all';
  render();
  submitResultsToTeacher(scoreData());
}

function confirmSubmit(){
  const answered = Object.keys(state.answers).length;
  const remaining = 54-answered;
  const msg = remaining>0
    ? `You have ${remaining} unanswered question${remaining===1?'':'s'}. Submit anyway?`
    : `Submit your answers now?`;
  if(confirm(msg)) finishQuiz();
}

function restart(){
  state = {screen:'start', current:0, answers:{}, flags:{}, timeLeft:TOTAL_SECONDS, timerId:null, reviewFilter:'all', reviewFocus:null, studentName:'', submitStatus:'idle'};
  render();
}

/* ---------- RENDER: START SCREEN ---------- */
function renderStart(){
  const nA = QUESTIONS.filter(q=>q.part==='A').length;
  const nB = QUESTIONS.filter(q=>q.part==='B').length;
  const nTotal = QUESTIONS.length;
  const mins = Math.round(TOTAL_SECONDS/60);
  const partNames = TEST_CONFIG.partNames || {A:'Part A', B:'Part B'};
  return `
  <div class="screen">
    <div class="brand" style="color:var(--navy); margin-bottom:18px;">
      <div class="kicker" style="color:var(--ink-soft)">${TEST_CONFIG.kicker}</div>
      <h1>${TEST_CONFIG.title}</h1>
      <div class="sub">Timed delivery · ${nTotal} questions · ${mins} minutes</div>
    </div>
    <div class="info-card">
      <h4>Test structure</h4>
      <div class="info-row"><span>Part A — ${partNames.A}</span><span>${nA} questions</span></div>
      <div class="info-row"><span>Part B — ${partNames.B}</span><span>${nB} questions</span></div>
      <div class="info-row"><span>Total</span><span>${nTotal} questions, 1 mark each</span></div>
      <div class="info-row"><span>Time limit</span><span>${mins} minutes</span></div>
      <div class="info-row"><span>Penalty for wrong answers</span><span>None</span></div>
    </div>
    <div class="info-card">
      <h4>Before you begin</h4>
      <div style="font-size:14px; line-height:1.6; color:var(--ink)">
        No calculators or dictionaries. You may flag questions to revisit and move freely between them.
        The timer starts as soon as you begin and will auto-submit at zero.
      </div>
    </div>
    <div class="info-card">
      <h4>Your name</h4>
      <input id="studentNameInput" type="text" placeholder="Enter your full name" value="${state.studentName||''}"
        style="width:100%; font-family:var(--sans); font-size:15px; padding:12px 14px; border:1.5px solid var(--line); border-radius:8px; box-sizing:border-box;">
      <div style="font-size:12px; color:var(--ink-soft); margin-top:8px;">Your name and score are sent to your teacher automatically when you finish.</div>
    </div>
    <button class="start-btn" onclick="startQuiz()">Begin timed test</button>
  </div>`;
}

/* ---------- RENDER: TEST SCREEN ---------- */
function optionLabel(q){
  return q.options;
}

function renderQuestion(q){
  const selected = state.answers[q.n];
  const flagged = !!state.flags[q.n];
  let html = `
  <div class="q-card">
    <div class="q-meta">
      <div><span class="q-number">QUESTION ${q.n} OF 54</span> &nbsp; <span class="q-part">Part ${q.part}</span></div>
      <button class="flag-btn ${flagged?'on':''}" onclick="toggleFlag(${q.n})">${flagged?'★ Flagged':'☆ Flag for review'}</button>
    </div>
    <div class="q-text"><p>${q.text}</p>
  `;
  if(q.diagram){
    html += `<div class="q-diagram">${DIAGRAMS[q.diagram]}${q.caption?`<div class="diagram-caption">${q.caption}</div>`:''}</div>`;
  }
  if(q.after){
    html += q.after;
  }
  html += `</div>`;
  html += `<div class="options">`;
  q.options.forEach(([key,text])=>{
    const sel = selected===key ? 'selected':'';
    html += `<div class="option ${sel}" onclick="selectAnswer(${q.n},'${key}')">
      <div class="option-key">${key}</div>
      <div class="option-text">${text}</div>
    </div>`;
  });
  html += `</div></div>`;
  return html;
}

function navGridHTML(){
  let rows = '';
  ['A','B'].forEach(part=>{
    rows += `<div class="part-label">Part ${part}</div><div class="grid">`;
    QUESTIONS.filter(q=>q.part===part).forEach(q=>{
      const answered = state.answers[q.n]!==undefined;
      const flagged = !!state.flags[q.n];
      const cur = q.n-1===state.current;
      rows += `<button class="gbtn ${answered?'answered':''} ${flagged?'flagged':''} ${cur?'current':''}" onclick="goTo(${q.n-1}); closeDrawer();">${q.n}</button>`;
    });
    rows += `</div>`;
  });
  return rows;
}

function renderTest(){
  const q = QUESTIONS[state.current];
  const answeredCount = Object.keys(state.answers).length;
  const pct = Math.round((answeredCount/QUESTIONS.length)*100);
  return `
  <div class="topbar">
    <div class="brand">
      <div class="kicker">${TEST_CONFIG.shortTitle}</div>
      <div class="title">Timed Delivery</div>
    </div>
    <div class="topbar-right">
      <div class="timer" id="timerDisplay">${fmtTime(state.timeLeft)}</div>
      <button class="btn btn-submit" onclick="confirmSubmit()">Submit test</button>
    </div>
  </div>
  <div class="progress-strip">
    <span>${answeredCount} of 54 answered</span>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <span>${pct}%</span>
  </div>
  <div class="layout">
    <div class="main">
      <div class="question-wrap">
        ${renderQuestion(q)}
      </div>
      <div class="bottom-nav">
        <button class="nav-btn" onclick="goTo(${state.current-1})" ${state.current===0?'disabled':''}>← Previous</button>
        <button class="icon-btn grid-toggle" onclick="openDrawer()">☰</button>
        ${state.current===53
          ? `<button class="nav-btn primary" onclick="confirmSubmit()">Submit test</button>`
          : `<button class="nav-btn primary" onclick="goTo(${state.current+1})">Next →</button>`
        }
      </div>
    </div>
    <div class="navigator">
      <h3>Question navigator</h3>
      <div class="nav-sub">Tap any number to jump to that question.</div>
      <div class="legend">
        <span><span class="dot cur"></span>Current</span>
        <span><span class="dot ans"></span>Answered</span>
        <span><span class="dot flag"></span>Flagged</span>
        <span><span class="dot un"></span>Unanswered</span>
      </div>
      ${navGridHTML()}
    </div>
  </div>
  <div class="nav-overlay" id="navOverlay" onclick="closeDrawer()"></div>
  <div class="nav-drawer" id="navDrawer">
    <button class="drawer-close" onclick="closeDrawer()">×</button>
    <h3>Question navigator</h3>
    <div class="nav-sub">Tap any number to jump to that question.</div>
    <div class="legend">
      <span><span class="dot cur"></span>Current</span>
      <span><span class="dot ans"></span>Answered</span>
      <span><span class="dot flag"></span>Flagged</span>
      <span><span class="dot un"></span>Unanswered</span>
    </div>
    ${navGridHTML()}
  </div>
  `;
}

function openDrawer(){
  document.getElementById('navOverlay').classList.add('open');
  document.getElementById('navDrawer').classList.add('open');
}
function closeDrawer(){
  const o=document.getElementById('navOverlay'), d=document.getElementById('navDrawer');
  if(o) o.classList.remove('open');
  if(d) d.classList.remove('open');
}

/* ---------- RENDER: RESULTS SCREEN ---------- */
function scoreData(){
  let correct=0, incorrect=0, blank=0;
  let partA={correct:0,total:0}, partB={correct:0,total:0};
  QUESTIONS.forEach(q=>{
    const p = q.part==='A'?partA:partB;
    p.total++;
    const given = state.answers[q.n];
    if(given===undefined){ blank++; }
    else if(given===q.answer){ correct++; p.correct++; }
    else { incorrect++; }
  });
  return {correct,incorrect,blank,partA,partB,total:54};
}

function setReviewFilter(f){
  state.reviewFilter=f;
  render();
}

function reviewList(){
  const {reviewFilter} = state;
  let rows='';
  QUESTIONS.forEach(q=>{
    const given = state.answers[q.n];
    let status = given===undefined ? 'blank' : (given===q.answer ? 'correct' : 'incorrect');
    if(reviewFilter!=='all' && reviewFilter!==status) return;
    const label = status==='correct' ? '✓ Correct' : status==='incorrect' ? `✗ Incorrect` : '— Blank';
    rows += `<div class="review-row ${status}" onclick="openReview(${q.n})">
      <span class="num">Q${q.n}</span>
      <span>Part ${q.part} ${state.flags[q.n]?'· ★ flagged':''}</span>
      <span class="status">${label}</span>
    </div>`;
  });
  if(!rows) rows = `<div style="text-align:center; color:var(--ink-soft); padding:20px; font-size:14px;">No questions in this category.</div>`;
  return rows;
}

function openReview(n){
  state.reviewFocus=n;
  render();
  setTimeout(()=>{
    const el = document.getElementById('reviewDetail');
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  },30);
}

function closeReviewDetail(){
  state.reviewFocus=null;
  render();
}

function renderReviewDetail(){
  if(!state.reviewFocus) return '';
  const q = QUESTIONS.find(x=>x.n===state.reviewFocus);
  const given = state.answers[q.n];
  let html = `<div class="q-card" id="reviewDetail" style="margin-top:8px;">
    <div class="q-meta">
      <div><span class="q-number">QUESTION ${q.n} OF 54</span> &nbsp; <span class="q-part">Part ${q.part}</span></div>
      <button class="link-btn" onclick="closeReviewDetail()">Close ×</button>
    </div>
    <div class="q-text"><p>${q.text}</p>`;
  if(q.diagram) html += `<div class="q-diagram">${DIAGRAMS[q.diagram]}${q.caption?`<div class="diagram-caption">${q.caption}</div>`:''}</div>`;
  if(q.after) html += q.after;
  html += `</div><div class="options">`;
  q.options.forEach(([key,text])=>{
    let cls='';
    if(key===q.answer) cls='correct';
    else if(key===given) cls='incorrect';
    html += `<div class="option ${cls}">
      <div class="option-key">${key}</div>
      <div class="option-text">${text}${key===q.answer?' &nbsp;<strong style="color:var(--answered); font-family:var(--sans); font-size:12.5px;">(correct answer)</strong>':''}${key===given && key!==q.answer?' &nbsp;<strong style="color:var(--wrong); font-family:var(--sans); font-size:12.5px;">(your answer)</strong>':''}</div>
    </div>`;
  });
  if(given===undefined){
    html += `<div style="font-size:13px; color:var(--ink-soft); margin-top:6px;">You did not answer this question.</div>`;
  }
  html += `</div></div>`;
  return html;
}

function resultsSummaryText(s){
  return `${TEST_CONFIG.title} — Results
Name: ${state.studentName||'Unnamed'}
Score: ${s.correct}/${s.total} (${Math.round((s.correct/s.total)*100)}%)
Part A: ${s.partA.correct}/${s.partA.total}
Part B: ${s.partB.correct}/${s.partB.total}
Time used: ${fmtTime(TOTAL_SECONDS-state.timeLeft)}
Answers: ${buildAnswersString()}`;
}

function copyResultsSummary(){
  const s = scoreData();
  const text = resultsSummaryText(s);
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>alert('Results copied — paste them into an email or message to your teacher.'));
  } else {
    prompt('Copy your results below:', text);
  }
}

function retrySubmit(){
  submitResultsToTeacher(scoreData());
}

function renderSubmitStatus(){
  const st = state.submitStatus;
  let box = '';
  if(st==='sending'){
    box = `<div class="info-card" style="text-align:center; color:var(--ink-soft); font-size:13.5px;">Sending your results to your teacher…</div>`;
  } else if(st==='sent'){
    box = `<div class="info-card" style="text-align:center; color:var(--answered); font-size:13.5px; font-weight:600;">✓ Results sent to your teacher</div>`;
  } else if(st==='failed'){
    box = `<div class="info-card" style="text-align:center; font-size:13.5px;">
      <div style="color:var(--wrong); font-weight:600; margin-bottom:8px;">Couldn't send automatically — check your internet connection.</div>
      <button class="nav-btn" style="width:100%; margin-bottom:8px;" onclick="retrySubmit()">Try again</button>
      <button class="link-btn" onclick="copyResultsSummary()">Or copy your results to send manually</button>
    </div>`;
  } else if(st==='unconfigured'){
    box = `<div class="info-card" style="text-align:center; font-size:13px; color:var(--ink-soft);">
      Automatic submission isn't set up yet.
      <div style="margin-top:8px;"><button class="link-btn" onclick="copyResultsSummary()">Copy your results to send to your teacher</button></div>
    </div>`;
  }
  return box;
}

function renderResults(){
  const s = scoreData();
  const pct = Math.round((s.correct/s.total)*100);
  return `
  <div class="topbar">
    <div class="brand">
      <div class="kicker">${TEST_CONFIG.shortTitle}</div>
      <div class="title">Results</div>
    </div>
    <div class="topbar-right">
      <button class="btn" style="background:rgba(255,255,255,0.12); color:#fff;" onclick="restart()">Retake test</button>
    </div>
  </div>
  <div class="screen">
    <div style="text-align:center; font-size:13px; color:var(--ink-soft); margin-bottom:2px;">${state.studentName||'Student'}</div>
    <div class="score-big">${s.correct} / ${s.total}</div>
    <div class="score-sub">${pct}% correct · ${s.blank} left blank</div>

    ${renderSubmitStatus()}

    <div class="breakdown">
      <div class="bd-card"><div class="n">${s.partA.correct}/${s.partA.total}</div><div class="l">Part A</div></div>
      <div class="bd-card"><div class="n">${s.partB.correct}/${s.partB.total}</div><div class="l">Part B</div></div>
    </div>

    <div class="info-card" style="margin-bottom:20px;">
      <h4>Summary</h4>
      <div class="info-row"><span>Correct</span><span>${s.correct}</span></div>
      <div class="info-row"><span>Incorrect</span><span>${s.incorrect}</span></div>
      <div class="info-row"><span>Blank</span><span>${s.blank}</span></div>
      <div class="info-row"><span>Time used</span><span>${fmtTime(TOTAL_SECONDS-state.timeLeft)}</span></div>
    </div>

    <h4 style="font-size:13px; text-transform:uppercase; letter-spacing:.05em; color:var(--ink-soft); margin-bottom:10px;">Review your answers</h4>
    <div class="filter-tabs">
      <button class="${state.reviewFilter==='all'?'active':''}" onclick="setReviewFilter('all')">All 54</button>
      <button class="${state.reviewFilter==='incorrect'?'active':''}" onclick="setReviewFilter('incorrect')">Incorrect</button>
      <button class="${state.reviewFilter==='blank'?'active':''}" onclick="setReviewFilter('blank')">Blank</button>
      <button class="${state.reviewFilter==='correct'?'active':''}" onclick="setReviewFilter('correct')">Correct</button>
    </div>
    <div class="review-list">${reviewList()}</div>
    ${renderReviewDetail()}
  </div>
  `;
}

/* ---------- MAIN RENDER ---------- */
function render(){
  let html='';
  if(state.screen==='start') html = renderStart();
  else if(state.screen==='test') html = renderTest();
  else html = renderResults();
  app.innerHTML = html;
  renderMath(app);
  if(state.screen==='test') updateTimerDisplay();
}

render();
