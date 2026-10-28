// =========================================================================
// 🚀 app.js - 초등 수학 AI 자기주도 완전학습 메인 엔진 (전체 기능 100% 복원 완본)
// =========================================================================

// -------------------------------------------------------------------------
// 1. 5학년(배열/a/options) & 6학년(객체/ans/choices) 데이터 자동 호환 어댑터
// -------------------------------------------------------------------------
function normalizeQuestionItem(item) {
  if (!item || typeof item !== 'object') return item;

  // 객관식 보기 통일: options(0부터 시작) -> choices(1부터 시작하는 문자열)
  if (Array.isArray(item.options) && !item.choices) {
    item.choices = item.options.map((opt, idx) => {
      const clean = String(opt).replace(/^\d+번:\s*/, '');
      return `${idx + 1}번: ${clean}`;
    });
    if (typeof item.ans === 'number') {
      item.ans = String(item.ans + 1);
    } else if (item.a !== undefined && item.ans === undefined) {
      item.ans = String(Number(item.a) + 1);
    }
  } else if (Array.isArray(item.choices)) {
    item.choices = item.choices.map((opt, idx) => {
      const str = String(opt);
      return /^\d+번/.test(str) ? str : `${idx + 1}번: ${str}`;
    });
  }

  // 주관식 정답 통일: a <-> ans
  if (item.a !== undefined && item.ans === undefined) {
    item.ans = String(item.a);
  }
  if (item.ans !== undefined && item.a === undefined) {
    item.a = String(item.ans);
  }

  // 분수 정답(num/den)이 있는데 ans가 없는 경우 자동 생성
  if (item.num !== undefined && item.den !== undefined && !item.ans) {
    item.ans = item.whole ? `${item.whole}과 ${item.num}/${item.den}` : `${item.num}/${item.den}`;
    item.a = item.ans;
  }

  // 스몰스텝(steps) 내부 정답 키 통일
  if (Array.isArray(item.steps)) {
    item.steps.forEach(st => {
      if (st.a !== undefined && st.ans === undefined) st.ans = String(st.a);
      if (st.ans !== undefined && st.a === undefined) st.a = String(st.ans);
    });
  }

  return item;
}

function normalizeLessonObj(les) {
  if (!les || typeof les !== 'object') return les;

  const listKeys = ['warmup', 'step1Quiz', 'step2_1', 'step2_2', 'step3A', 'step4B'];
  listKeys.forEach(k => {
    if (Array.isArray(les[k])) {
      les[k].forEach(normalizeQuestionItem);
    } else if (les[k] && typeof les[k] === 'object') {
      normalizeQuestionItem(les[k]);
    }
  });

  // 5단계 빈칸 채우기 & 3회 낭독 문장 호환 처리
  if (les.step5B && typeof les.step5B === 'object') {
    les.readSentence = les.readSentence || les.step5B.sentence || les.step5A || '';
  } else if (typeof les.step5B === 'string') {
    les.readSentence = les.readSentence || les.step5B;
  } else if (!les.readSentence && les.step5A) {
    les.readSentence = les.step5A;
  }

  return les;
}

function normalizeAllMathData() {
  window.MATH_DB = window.MATH_DB || { grades: [], semesters: {}, units: {}, lessons: {} };
  const lessons = window.MATH_DB.lessons || {};

  Object.keys(lessons).forEach(unitKey => {
    const rawUnit = lessons[unitKey];
    // 5학년 데이터처럼 배열([ {id: "6-1", ...}, ... ]) 형태인 경우 -> lessonOrder가 있는 객체로 자동 변환
    if (Array.isArray(rawUnit)) {
      const converted = { lessonOrder: [] };
      rawUnit.forEach((les, idx) => {
        if (!les) return;
        const code = les.id || `${unitKey.split('-')[2] || '1'}-${idx + 1}`;
        converted.lessonOrder.push(code);
        converted[code] = normalizeLessonObj(les);
      });
      lessons[unitKey] = converted;
    } else if (rawUnit && typeof rawUnit === 'object') {
      if (!Array.isArray(rawUnit.lessonOrder)) {
        rawUnit.lessonOrder = Object.keys(rawUnit).filter(k => k !== 'lessonOrder');
      }
      rawUnit.lessonOrder.forEach(code => {
        if (rawUnit[code]) normalizeLessonObj(rawUnit[code]);
      });
    }
  });
}

// -------------------------------------------------------------------------
// ⏱️ 2. 단계별 소요 시간 측정, 모달 제어 및 UI 공통 도우미
// -------------------------------------------------------------------------
function startStepTimer(stepKey) {
  const now = Date.now();
  if (state.currentStepKey && state.currentStepStartTime) {
    const elapsed = Math.max(1, Math.round((now - state.currentStepStartTime) / 1000));
    state.stepTimes[state.currentStepKey] = (state.stepTimes[state.currentStepKey] || 0) + elapsed;
  }
  state.currentStepKey = stepKey;
  state.currentStepStartTime = now;
}

function stopAllStepTimers() {
  startStepTimer(null);
}

function formatSec(sec) {
  const s = Math.max(1, Math.round(sec || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m > 0 ? `${m}분 ${r}초` : `${r}초`;
}

function setHeaderUI(badgeText, showHome = true, showUnit = false) {
  const badge = document.getElementById('step-badge');
  if (badge) badge.innerText = badgeText;
  const homeBtn = document.getElementById('home-btn');
  if (homeBtn) homeBtn.style.display = showHome ? 'inline-block' : 'none';
  const unitBtn = document.getElementById('unit-btn');
  if (unitBtn) unitBtn.style.display = showUnit ? 'inline-block' : 'none';
}

function updateScoreBoard(text) {
  const sb = document.getElementById('score-board');
  if (sb) sb.innerText = text;
}

// API 키 설정 모달 제어 (study.html 내장 모달 연동)
function openApiModal() {
  const modal = document.getElementById('api-modal');
  const inp = document.getElementById('api-key-input');
  if (!modal) return;
  if (inp && typeof getSavedApiKey === 'function') {
    inp.value = getSavedApiKey();
  }
  modal.style.display = 'flex';
}

function closeApiModal() {
  const modal = document.getElementById('api-modal');
  if (modal) modal.style.display = 'none';
}

async function saveApiKey() {
  const inp = document.getElementById('api-key-input');
  if (!inp) return;
  const key = inp.value.trim();
  localStorage.setItem('GEMINI_API_KEY', key);
  state.geminiApiKey = key;
  state.apiKey = key;
  if (typeof db !== 'undefined' && db && key) {
    try {
      await db.collection('settings').doc('gemini').set({
        apiKey: key,
        updatedAt: new Date().toLocaleString()
      });
    } catch (e) {}
  }
  alert("✅ 제미나이 API 키가 저장되었습니다!");
  closeApiModal();
}

// -------------------------------------------------------------------------
// 🏫 3. 학년 ➔ 학기 ➔ 단원 ➔ 차시 선택 화면
// -------------------------------------------------------------------------
function showGradeSelect() {
  normalizeAllMathData();
  setHeaderUI('🎒 학년·학기 선택', false, false);
  setBreadcrumb('홈 > 학년·학기 선택');
  updateScoreBoard('전체 과정 열람');

  const content = document.getElementById('app-content');
  const grades = (MATH_DB.grades || []);

  let cardsHTML = '';
  grades.forEach(g => {
    if (!g.active) {
      cardsHTML += `
        <div class="select-card locked" onclick="alert('${g.name} 과정은 곧 업데이트될 예정입니다! 현재 5학년·6학년 전 단원을 학습할 수 있습니다.')">
          <div class="card-title">🔒 초등학교 ${g.name}</div>
          <div class="card-sub">오픈 준비 중</div>
        </div>
      `;
      return;
    }
    const sems = MATH_DB.semesters[g.id] || [];
    sems.forEach(s => {
      if (!s.active) return;
      cardsHTML += `
        <div class="select-card" onclick="showUnitSelect('${g.id}', '${s.id}')">
          <div class="card-title">🎒 초등학교 ${g.name} ${s.name}</div>
          <div class="card-sub">1~6단원 AI 완전학습 입장 👉</div>
        </div>
      `;
    });
  });

  content.innerHTML = `
    <h2>🎒 공부할 학년과 학기를 선택하세요</h2>
    <div class="goal-box">
      <b>💡 자기주도 완전학습:</b> 공부하고 싶은 학년과 학기를 선택하면 1단원부터 6단원까지 모든 차시와 <b>10문항 실전 단원평가</b>를 자유롭게 이용할 수 있습니다.
    </div>
    <div class="card-grid">${cardsHTML}</div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showUnitSelect(grade, semester) {
  normalizeAllMathData();
  state.grade = String(grade);
  state.semester = String(semester);

  const key = `${state.grade}-${state.semester}`;
  const unitList = (MATH_DB.units && Array.isArray(MATH_DB.units[key])) ? MATH_DB.units[key] : [];

  setHeaderUI(`${state.grade}학년 ${state.semester}학기`, state.isAllAccess, false);
  setBreadcrumb(`홈 > ${state.grade}학년 ${state.semester}학기 > 단원 선택`);
  updateScoreBoard(`${state.grade}학년 ${state.semester}학기`);

  const records = getStudyRecords();
  const content = document.getElementById('app-content');

  const otherSem = state.semester === '1' ? '2' : '1';
  const otherGrade = state.grade === '6' ? '5' : '6';

  const switchBarHTML = `
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
      <button type="button" class="nav-btn" style="background:#1d4ed8; padding:9px 15px; font-size:14px;" onclick="showUnitSelect('${state.grade}', '${otherSem}')">
        🔄 ${state.grade}학년 ${otherSem}학기로 전환
      </button>
      <button type="button" class="nav-btn" style="background:#0f766e; padding:9px 15px; font-size:14px;" onclick="showUnitSelect('${otherGrade}', '1')">
        🎒 ${otherGrade}학년 과정 보기
      </button>
      ${state.isAllAccess ? `<button type="button" class="nav-btn" style="background:#475569; padding:9px 15px; font-size:14px;" onclick="showGradeSelect()">🏫 전체 학년 메뉴</button>` : ''}
    </div>
  `;

  const listHTML = unitList.map(u => {
    const uKey = `${state.grade}-${state.semester}-${u.id}`;
    const uRec = records[uKey] || {};
    const doneCnt = Object.keys(uRec).filter(k => k !== 'EXAM' && uRec[k]?.status === '완료').length;
    const examRec = uRec['EXAM'];
    const hasLoadedData = Boolean(MATH_DB.lessons && MATH_DB.lessons[uKey]);

    let rightBadge = `<span class="menu-arrow">단원 입장 👉</span>`;
    if (doneCnt > 0 || examRec) {
      const examTag = examRec ? ` · 🏆시험 ${examRec.score}점` : '';
      rightBadge = `<span class="complete-badge">✅ ${doneCnt}차시 완료${examTag}</span>`;
    }

    return `
      <button type="button" class="menu-item ${hasLoadedData ? '' : 'locked'}" onclick="${hasLoadedData ? `showLessonSelect('${state.grade}', '${state.semester}', '${u.id}')` : `alert('해당 단원 데이터 파일을 확인해 주세요: ${uKey}')`}">
        <div>
          <div class="menu-title">📘 ${u.name}</div>
          <div class="menu-desc">${u.desc || ''}</div>
        </div>
        <div>${rightBadge}</div>
      </button>
    `;
  }).join('');

  content.innerHTML = `
    <h2>📘 ${state.grade}학년 ${state.semester}학기 단원 목차</h2>
    <div class="goal-box">
      원하는 단원을 선택하세요. 다른 학기나 다른 학년 공부를 하고 싶다면 아래 전환 버튼을 눌러 바로 이동할 수 있어요!
    </div>
    ${switchBarHTML}
    <div class="menu-list">${listHTML}</div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLessonSelect(grade, semester, unit) {
  normalizeAllMathData();
  state.grade = String(grade);
  state.semester = String(semester);
  state.unit = String(unit);
  state.unitKey = `${state.grade}-${state.semester}-${state.unit}`;

  const unitMetaList = (MATH_DB.units && MATH_DB.units[`${state.grade}-${state.semester}`]) || [];
  const unitMeta = unitMetaList.find(u => String(u.id) === state.unit) || MATH_DB.units[state.unitKey] || { name: `${state.unit}단원` };
  const unitTitle = unitMeta.name || unitMeta.title || `${state.unit}단원`;

  const unitLessons = MATH_DB.lessons[state.unitKey];
  if (!unitLessons) {
    alert("해당 단원의 문제 데이터가 아직 로드되지 않았습니다.");
    showUnitSelect(state.grade, state.semester);
    return;
  }

  setHeaderUI(`${state.grade}-${state.semester} · ${state.unit}단원`, true, false);
  setBreadcrumb(`${state.grade}학년 ${state.semester}학기 > ${unitTitle}`);
  updateScoreBoard('차시 선택');

  const records = (getStudyRecords()[state.unitKey]) || {};
  const order = unitLessons.lessonOrder || Object.keys(unitLessons).filter(k => k !== 'lessonOrder');

  const itemsHTML = order.map((code, idx) => {
    const les = unitLessons[code];
    if (!les) return '';
    const rec = records[code];
    const isMasterLesson = (idx === order.length - 1 && !les.videoUrl);

    let badgeHTML = `<span class="menu-arrow">학습 시작 👉</span>`;
    if (rec && rec.status === '완료') {
      badgeHTML = `<span class="complete-badge">💮 완료 (${rec.score || 100}점)</span>`;
    } else if (rec) {
      badgeHTML = `<span class="review-badge">🔄 복습 권장 (${rec.score || 0}점)</span>`;
    }

    return `
      <button type="button" class="menu-item" onclick="startLesson('${code}')">
        <div>
          <div class="menu-title">${isMasterLesson ? '👑' : '✏️'} [${code}차시] ${les.title}</div>
          <div class="menu-desc">${isMasterLesson ? '단원 전체 핵심 요약 카드 & 고난도 응용 총정리' : '1분 개념 영상 ➔ 함께·혼자 풀기 ➔ 3문항 실력 확인 ➔ 쌍둥이 클리닉'}</div>
        </div>
        ${badgeHTML}
      </button>
    `;
  }).join('');

  const examRec = records['EXAM'];
  const examBadge = examRec
    ? `<span class="complete-badge">🏆 최근 ${examRec.score}점 (재응시 가능)</span>`
    : `<span class="menu-arrow" style="color:#b45309;">시험 시작 👉</span>`;

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>📘 ${unitTitle}</h2>
    <div class="goal-box">
      차시를 순서대로 공부하거나 부족한 차시를 골라 학습하세요. 맨 아래의 <b>[🏆 10문항 실전 단원평가 모의고사]</b>는 언제든 응시할 수 있으며, 누를 때마다 새로운 10문항 시험지가 만들어집니다!
    </div>
    <div class="menu-list">${itemsHTML}</div>

    <button type="button" class="exam-banner" onclick="startUnitExam()">
      <div>
        <div class="exam-title">🏆 실전 단원평가 모의고사 (10문항 랜덤 출제 · 상시 오픈)</div>
        <div class="exam-sub">1~6차시 전체 문제 풀(84문항)에서 골고루 출제 · 오답 즉시 1:1 쌍둥이 클리닉 제공</div>
      </div>
      ${examBadge}
    </button>

    <div class="demo-bar">
      <button type="button" class="btn-reset" onclick="showUnitSelect('${state.grade}', '${state.semester}')">⬅️ 단원 목록으로 돌아가기</button>
      ${state.isAllAccess ? `<button type="button" class="btn-reset" onclick="unlockAllLessonsForDemo()">🔓 (시연용) 전 차시 완료 도장 찍기</button>` : ''}
      <button type="button" class="btn-reset" onclick="clearUnitRecords()">🗑️ 이 단원 학습 기록 초기화</button>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// -------------------------------------------------------------------------
// 🎬 4. 차시 학습 진행: 워밍업 ➔ 1단계(영상 + 퀴즈) ➔ 2단계(함께/혼자)
// -------------------------------------------------------------------------
function startLesson(lessonId) {
  normalizeAllMathData();
  state.lessonId = lessonId;
  state.lessonData = MATH_DB.lessons[state.unitKey][lessonId];
  state.records = ['➖', '➖', '➖'];
  state.step3Answers = [];
  state.score = 0;
  state.wrongIndices = [];
  state.bRetryQueue = [];
  state.bResults = [];
  state.bDetailedLogs = [];
  state.lessonStartTime = Date.now();
  state.stepTimes = {};
  state.currentStepKey = null;
  state.currentStepStartTime = null;

  setHeaderUI(`${lessonId}차시 학습 중`, true, true);
  setBreadcrumb(`${state.grade}-${state.semester} > ${state.unit}단원 > [${lessonId}] ${state.lessonData.title}`);
  updateScoreBoard('워밍업');

  const warmupList = Array.isArray(state.lessonData.warmup)
    ? state.lessonData.warmup
    : (state.lessonData.warmup ? [state.lessonData.warmup] : []);

  if (warmupList.length > 0) {
    startStepTimer('warmup');
    const wItem = normalizeQuestionItem(pick(warmupList));
    renderInteractivePractice(
      '🔥 워밍업: 지난 시간 핵심 복습',
      '오늘 배울 내용과 연결되는 기본 문제예요. 가볍게 몸풀기로 풀어 볼까요?',
      wItem,
      () => showStep1Concept()
    );
  } else {
    showStep1Concept();
  }
}

function showStep1Concept() {
  startStepTimer('step1');
  setHeaderUI(`1단계: 개념 익히기`, true, true);
  updateScoreBoard('1단계 개념');

  const les = state.lessonData;
  const embedUrl = getCleanYoutubeEmbedUrl(les.videoUrl);
  const sc = les.summaryCard || {};

  const videoHTML = embedUrl ? `
    <div class="video-box">
      <div class="yt-shield-top"></div>
      <div class="yt-shield-bottom"></div>
      <iframe src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video-notice">▶️ 1분 개념 쇼츠 영상을 끝까지 시청한 뒤 아래 핵심 요약 카드를 확인하세요!</div>
  ` : `
    <div class="goal-box">
      👑 <b>단원 종합 마스터 차시:</b> 이 차시는 영상 없이 아래의 <b>핵심 총정리 요약 카드</b>를 한눈에 점검하고 바로 문제 풀이로 들어갑니다!
    </div>
  `;

  const rulesHTML = Array.isArray(sc.rules)
    ? sc.rules.map(r => `<div style="margin-bottom:6px; font-weight:bold; color:#1e293b;">${r}</div>`).join('')
    : '';

  const cardHTML = (sc.title || sc.svg || rulesHTML) ? `
    <div class="summary-card">
      ${sc.title ? `<div style="font-size:18px; font-weight:800; color:#b45309; margin-bottom:10px;">📌 ${sc.title}</div>` : ''}
      ${sc.svg ? `<div style="margin-bottom:12px; background:#ffffff; border-radius:12px; padding:8px; overflow-x:auto;">${sc.svg}</div>` : ''}
      ${rulesHTML}
    </div>
  ` : '';

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🎬 1단계: [${state.lessonId}] ${les.title}</h2>
    ${videoHTML}
    ${cardHTML}
    <button type="button" class="btn" onclick="startStep1Quiz()">✅ 개념을 이해했어요! 확인 퀴즈 풀기 👉</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startStep1Quiz() {
  const quizPool = Array.isArray(state.lessonData.step1Quiz)
    ? state.lessonData.step1Quiz
    : (state.lessonData.step1Quiz ? [state.lessonData.step1Quiz] : []);

  if (quizPool.length === 0) {
    startStep2_1();
    return;
  }

  const qItem = normalizeQuestionItem(pick(quizPool));
  renderInteractivePractice(
    '💡 1단계: 개념 확인 퀴즈',
    '방금 영상과 요약 카드에서 배운 핵심 원리를 바로 확인해 볼까요?',
    qItem,
    () => startStep2_1()
  );
}

function startStep2_1() {
  startStepTimer('step2');
  setHeaderUI(`2단계: 함께 풀기`, true, true);
  updateScoreBoard('2-1 함께 풀기');

  const pool = Array.isArray(state.lessonData.step2_1)
    ? state.lessonData.step2_1
    : (state.lessonData.step2_1 ? [state.lessonData.step2_1] : []);

  if (pool.length === 0) {
    startStep2_2();
    return;
  }

  const item = normalizeQuestionItem(pick(pool));
  renderInteractivePractice(
    '✏️ 2-1단계: 교과서 기본 문제 함께 풀기',
    '차근차근 원리를 생각하며 문제를 풀어 보세요. 2번 틀리면 스몰 스텝 빈칸과 소크라테스 AI 선생님이 출동합니다!',
    item,
    () => startStep2_2()
  );
}

function startStep2_2() {
  setHeaderUI(`2단계: 혼자 풀기`, true, true);
  updateScoreBoard('2-2 혼자 풀기');

  const pool = Array.isArray(state.lessonData.step2_2)
    ? state.lessonData.step2_2
    : (state.lessonData.step2_2 ? [state.lessonData.step2_2] : []);

  if (pool.length === 0) {
    startStep3Blind();
    return;
  }

  const item = normalizeQuestionItem(pick(pool));
  renderInteractivePractice(
    '💪 2-2단계: 내 힘으로 혼자 풀기',
    '방금 연습한 원리를 떠올리며 이번에는 스스로 해결해 보세요!',
    item,
    () => startStep3Blind()
  );
}

// -------------------------------------------------------------------------
// 🧩 5. 양방향 문제 풀이 렌더러 (분수 위젯 + 오답 진단 + 스몰스텝 + AI 튜터)
// -------------------------------------------------------------------------
function isFractionProblem(item) {
  return (item.num !== undefined && item.den !== undefined) ||
         (typeof item.ans === 'string' && /^\d+\/\d+$/.test(item.ans.trim()));
}

function buildAnswerInputHTML(item, prefix = 'ans') {
  if (Array.isArray(item.choices) && item.choices.length > 0) {
    const btns = item.choices.map((c, idx) => `
      <button type="button" class="choice-btn" onclick="submitInteractiveChoice(${idx + 1})">${c}</button>
    `).join('');
    return `<div class="choice-grid">${btns}</div>`;
  }

  if (isFractionProblem(item)) {
    return `
      <div class="fraction-widget">
        <input type="text" id="${prefix}-whole" class="whole-input" placeholder="자연수" autocomplete="off">
        <div class="frac-col">
          <input type="text" id="${prefix}-num" class="frac-input" placeholder="분자" autocomplete="off">
          <div class="frac-line"></div>
          <input type="text" id="${prefix}-den" class="frac-input" placeholder="분모" autocomplete="off" onkeydown="if(event.key==='Enter') submitInteractiveText()">
        </div>
        ${item.unit ? `<span style="font-size:18px; font-weight:bold;">${item.unit}</span>` : ''}
      </div>
      <div class="helper-caption">💡 진분수나 가분수는 앞의 [자연수] 칸을 비워 두고 분자와 분모만 입력하세요!</div>
      <button type="button" class="btn" onclick="submitInteractiveText()">정답 확인하기</button>
    `;
  }

  return `
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px;">
      <input type="text" id="${prefix}-input" class="text-input" style="margin-bottom:0;" placeholder="정답을 입력하세요" autocomplete="off" onkeydown="if(event.key==='Enter') submitInteractiveText()">
      ${item.unit ? `<span style="font-size:19px; font-weight:bold; white-space:nowrap;">${item.unit}</span>` : ''}
    </div>
    <button type="button" class="btn" onclick="submitInteractiveText()">정답 확인하기</button>
  `;
}

function readUserAnswerFromDOM(item, prefix = 'ans') {
  if (isFractionProblem(item)) {
    const w = (document.getElementById(`${prefix}-whole`)?.value || '').trim();
    const n = (document.getElementById(`${prefix}-num`)?.value || '').trim();
    const d = (document.getElementById(`${prefix}-den`)?.value || '').trim();
    if (!n || !d) return '';
    return w ? `${w}과 ${n}/${d}` : `${n}/${d}`;
  }
  return (document.getElementById(`${prefix}-input`)?.value || '').trim();
}

function checkAnswerMatch(userVal, item) {
  if (!userVal) return false;
  const cleanUser = normalizeMathText(userVal);

  if (isFractionProblem(item)) {
    let targetW = item.whole ? String(item.whole).trim() : '';
    let targetN = item.num !== undefined ? String(item.num).trim() : '';
    let targetD = item.den !== undefined ? String(item.den).trim() : '';
    if ((!targetN || !targetD) && typeof item.ans === 'string' && item.ans.includes('/')) {
      const parts = item.ans.trim().split('/');
      targetN = parts[0];
      targetD = parts[1];
    }
    const expected = targetW ? `${targetW}과${targetN}/${targetD}` : `${targetN}/${targetD}`;
    if (cleanUser === normalizeMathText(expected)) return true;
    if (!targetW && cleanUser === `0과${targetN}/${targetD}`) return true;
  }

  const target = normalizeMathText(String(item.ans ?? item.a ?? ''));
  if (cleanUser === target) return true;
  if (item.unit && cleanUser === normalizeMathText(`${item.ans}${item.unit}`)) return true;

  if (Array.isArray(item.accept)) {
    if (item.accept.some(ac => cleanUser === normalizeMathText(String(ac)))) return true;
  }
  return false;
}

function renderInteractivePractice(stageTitle, goalDesc, item, onNextCallback) {
  state.currentItem = normalizeQuestionItem(item);
  state.attempt = 1;
  state.currentCheckFn = onNextCallback;
  state.aiChatHistory = [];

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>${stageTitle}</h2>
    <div class="goal-box">${goalDesc}</div>
    <div class="question-box">${item.q}</div>
    <div id="interactive-input-area">
      ${buildAnswerInputHTML(item, 'ans')}
    </div>
    <div id="interactive-feedback" class="feedback"></div>
    <button type="button" id="interactive-next-btn" class="btn" style="display:none; background:#16a34a;" onclick="state.currentCheckFn()">다음 단계로 이동하기 👉</button>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitInteractiveChoice(choiceNum) {
  const item = state.currentItem;
  const isRight = (String(choiceNum) === String(item.ans));
  handleInteractiveResult(isRight, `${choiceNum}번`);
}

function submitInteractiveText() {
  const item = state.currentItem;
  const userVal = readUserAnswerFromDOM(item, 'ans');
  if (!userVal) {
    alert("정답을 먼저 입력해 주세요!");
    return;
  }
  const isRight = checkAnswerMatch(userVal, item);
  handleInteractiveResult(isRight, userVal);
}

function handleInteractiveResult(isRight, userVal) {
  const item = state.currentItem;
  const fb = document.getElementById('interactive-feedback');
  const nextBtn = document.getElementById('interactive-next-btn');

  if (isRight) {
    const cleanExplanation = (typeof cleanHintIntoExplanation === 'function')
      ? cleanHintIntoExplanation(item.h2 || item.h1 || '', item.ans)
      : (item.h2 || item.h1 || '');
    fb.className = 'feedback correct';
    fb.innerHTML = `🎉 <b>정답입니다! 참 잘했어요!</b>\n${cleanExplanation ? `💡 <b>풀이 정리:</b> ${cleanExplanation}` : ''}`;
    if (nextBtn) {
      nextBtn.style.display = 'block';
      nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // 오답 진단 메시지 확인
  const rawKey = String(userVal).replace(/[^0-9./-]/g, '');
  const specificDiag = (item.wrongDiag && (item.wrongDiag[userVal] || item.wrongDiag[rawKey])) || '';

  fb.className = 'feedback hint';
  if (state.attempt === 1) {
    state.attempt++;
    fb.innerHTML = `💡 <b>아쉬워요! 1단계 힌트를 보고 다시 한번 생각해서 풀어 보세요.</b>\n${specificDiag ? `📌 <b>내가 틀린 까닭:</b> ${specificDiag}\n` : ''}👉 <b>1단계 힌트:</b> ${item.h1 || '문제를 다시 천천히 읽어보세요.'}`;
  } else {
    state.attempt++;
    fb.innerHTML = `🪜 <b>2번 연속 막혔네요! 아래 도우미와 함께 계단을 밟듯 차근차근 해결해 볼까요?</b>\n${specificDiag ? `📌 <b>내가 틀린 까닭:</b> ${specificDiag}\n` : ''}👉 <b>핵심 힌트:</b> ${item.h1 || ''}`;

    if (Array.isArray(item.choices) && item.choices.length > 0) {
      openAiTutorForStep(`학생이 객관식 문제에서 "${userVal}"을 골라 2번 연속 틀렸습니다. 정답을 직접 말하지 말고 쉬운 질문으로 유도해 주세요.`);
    } else {
      activateSmallStepIfNeeded();
    }
  }
}

// -------------------------------------------------------------------------
// 📝 6. 3단계(블라인드 실력 확인 3문항) & 4단계(1:1 쌍둥이 오답 클리닉)
// -------------------------------------------------------------------------
function startStep3Blind() {
  startStepTimer('step3');
  setHeaderUI(`3단계: 실력 확인 (3문항)`, true, true);
  updateScoreBoard('3단계 실력 확인');

  const poolA = state.lessonData.step3A || [];
  const poolB = state.lessonData.step4B || [];

  // 3A(6문항: 유형1 2개, 유형2 2개, 유형3 2개)와 4B에서 정확히 같은 인덱스로 3쌍 추출
  const indices = poolA.length >= 6
    ? [Math.floor(Math.random() * 2), 2 + Math.floor(Math.random() * 2), 4 + Math.floor(Math.random() * 2)]
    : [0, 1, 2].filter(i => i < poolA.length);

  state.step3Questions = indices.map(i => normalizeQuestionItem(poolA[i]));
  state.step4TwinQuestions = indices.map(i => normalizeQuestionItem(poolB[i] || poolA[i]));
  state.step3Idx = 0;
  state.step3Answers = [];

  renderStep3Question();
}

function renderStep3Question() {
  const idx = state.step3Idx;
  const item = state.step3Questions[idx];
  updateScoreBoard(`3단계 (${idx + 1}/3)`);

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>📝 3단계: 블라인드 실력 확인 (${idx + 1} / ${state.step3Questions.length}번)</h2>
    <div class="goal-box">
      <b>💡 블라인드 테스트:</b> 3문제를 끝까지 다 풀 때까지 정답 여부를 알려주지 않아요. 배운 원리를 떠올리며 내 힘으로 풀어 보세요!
    </div>
    <div class="question-box">${item.q}</div>
    ${buildStep3InputHTML(item)}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildStep3InputHTML(item) {
  if (Array.isArray(item.choices) && item.choices.length > 0) {
    return `<div class="choice-grid">${item.choices.map((c, i) => `
      <button type="button" class="choice-btn" onclick="submitStep3Answer('${i + 1}')">${c}</button>
    `).join('')}</div>`;
  }
  if (isFractionProblem(item)) {
    return `
      <div class="fraction-widget">
        <input type="text" id="s3-whole" class="whole-input" placeholder="자연수" autocomplete="off">
        <div class="frac-col">
          <input type="text" id="s3-num" class="frac-input" placeholder="분자" autocomplete="off">
          <div class="frac-line"></div>
          <input type="text" id="s3-den" class="frac-input" placeholder="분모" autocomplete="off" onkeydown="if(event.key==='Enter') submitStep3Answer()">
        </div>
        ${item.unit ? `<span style="font-size:18px; font-weight:bold;">${item.unit}</span>` : ''}
      </div>
      <div class="helper-caption">💡 진분수나 가분수는 앞의 [자연수] 칸을 비워 두고 분자와 분모만 입력하세요!</div>
      <button type="button" class="btn" onclick="submitStep3Answer()">답안 제출하기 👉</button>
    `;
  }
  return `
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px;">
      <input type="text" id="s3-input" class="text-input" style="margin-bottom:0;" placeholder="정답 입력" autocomplete="off" onkeydown="if(event.key==='Enter') submitStep3Answer()">
      ${item.unit ? `<span style="font-size:19px; font-weight:bold;">${item.unit}</span>` : ''}
    </div>
    <button type="button" class="btn" onclick="submitStep3Answer()">답안 제출하기 👉</button>
  `;
}

function submitStep3Answer(choiceVal) {
  const item = state.step3Questions[state.step3Idx];
  const userVal = choiceVal !== undefined ? String(choiceVal) : readUserAnswerFromDOM(item, 's3');
  if (!userVal) {
    alert("답을 먼저 입력해 주세요!");
    return;
  }

  const isRight = (choiceVal !== undefined)
    ? (String(choiceVal) === String(item.ans))
    : checkAnswerMatch(userVal, item);

  state.step3Answers.push({ userVal, isRight, item });
  state.records[state.step3Idx] = isRight ? '⭕' : '❌';

  state.step3Idx++;
  if (state.step3Idx < state.step3Questions.length) {
    renderStep3Question();
  } else {
    showStep3ResultReport();
  }
}

function showStep3ResultReport() {
  state.wrongIndices = [];
  let rightCnt = 0;

  const cardsHTML = state.step3Answers.map((ansObj, idx) => {
    const { userVal, isRight, item } = ansObj;
    if (isRight) rightCnt++;
    else state.wrongIndices.push(idx);

    const rawKey = String(userVal).replace(/[^0-9./-]/g, '');
    const diag = (!isRight && item.wrongDiag && (item.wrongDiag[userVal] || item.wrongDiag[rawKey])) || '';

    return `
      <div class="${isRight ? 'report-card' : 'wrong-note-card'}">
        <div style="font-size:17px; font-weight:800; margin-bottom:6px;">
          ${idx + 1}번 문제: ${isRight ? '<span style="color:#16a34a;">⭕ 정답입니다!</span>' : '<span style="color:#dc2626;">❌ 아쉽게 틀렸어요</span>'}
        </div>
        <div style="font-size:15px; color:#334155; margin-bottom:8px;">${item.q}</div>
        <div>• <b>내가 쓴 답:</b> ${userVal}${item.unit || ''} ${!isRight ? `/ <b>바른 정답:</b> <span style="color:#dc2626; font-weight:bold;">${item.ans}${item.unit || ''}</span>` : ''}</div>
        ${diag ? `<div style="margin-top:6px; color:#b45309; font-weight:bold;">📌 족집게 오답 진단: ${diag}</div>` : ''}
        ${!isRight ? `<div style="margin-top:6px; color:#1e3a8a;">💡 <b>차근차근 풀이:</b> ${item.h2 || item.h1 || ''}</div>` : ''}
      </div>
    `;
  }).join('');

  state.score = Math.round((rightCnt / state.step3Questions.length) * 100);
  updateScoreBoard(`3단계 결과: ${state.score}점`);

  const nextActionBtn = state.wrongIndices.length > 0
    ? `<button type="button" class="btn" style="background:#d97706;" onclick="startStep4TwinClinic()">🔄 틀린 ${state.wrongIndices.length}문제 1:1 쌍둥이 문제로 즉시 보충하기 👉</button>`
    : `<button type="button" class="btn" style="background:#16a34a;" onclick="startStep5WrapUp()">🎉 3문제 모두 정답! 5단계 마무리 정리로 가기 👉</button>`;

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>📊 3단계 실력 확인 채점 결과 (${rightCnt} / ${state.step3Questions.length} 정답)</h2>
    ${cardsHTML}
    ${nextActionBtn}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startStep4TwinClinic() {
  startStepTimer('step4');
  setHeaderUI(`4단계: 쌍둥이 오답 클리닉`, true, true);
  state.bRetryQueue = [...state.wrongIndices];
  state.bCursor = 0;
  state.bResults = [];
  state.bDetailedLogs = [];
  runNextTwinProblem();
}

function runNextTwinProblem() {
  if (state.bCursor >= state.bRetryQueue.length) {
    startStep5WrapUp();
    return;
  }
  const origIdx = state.bRetryQueue[state.bCursor];
  const twinItem = state.step4TwinQuestions[origIdx];
  updateScoreBoard(`4단계 보충 (${state.bCursor + 1}/${state.bRetryQueue.length})`);

  renderInteractivePractice(
    `🔄 4단계: ${origIdx + 1}번 쌍둥이 보충 클리닉 (${state.bCursor + 1} / ${state.bRetryQueue.length})`,
    `아까 3단계에서 틀렸던 ${origIdx + 1}번 문제와 쌍둥이처럼 닮은 문제예요. 이번엔 내 힘으로 꼭 맞혀 볼까요?`,
    twinItem,
    () => {
      state.bResults.push('⭕');
      state.bDetailedLogs.push({ origNum: origIdx + 1, status: '쌍둥이 통과' });
      state.bCursor++;
      runNextTwinProblem();
    }
  );
}

// -------------------------------------------------------------------------
// 🗣️ 7. 5단계: (5-1) 핵심 원리 빈칸 낱말 퍼즐 ➔ (5-2) 핵심 문장 3회 소리 내어 읽기
// -------------------------------------------------------------------------
function startStep5WrapUp() {
  startStepTimer('step5');
  setHeaderUI(`5단계: 핵심 원리 정리`, true, true);
  updateScoreBoard('5단계 정리');

  const les = state.lessonData;
  const s5b = les.step5B;

  // step5B에 빈칸 채우기 객체(sentence, blankWords, distractors)가 있으면 빈칸 퍼즐 먼저 진행!
  if (s5b && typeof s5b === 'object' && s5b.sentence && Array.isArray(s5b.blankWords) && s5b.blankWords.length > 0) {
    renderStep5BlankPuzzle(s5b);
  } else {
    renderStep5ReadAloud();
  }
}

function renderStep5BlankPuzzle(s5b) {
  state.s5TargetWords = [...s5b.blankWords];
  state.s5SelectedWords = [];

  let displaySentence = s5b.sentence;
  state.s5TargetWords.forEach((w, idx) => {
    displaySentence = displaySentence.replace(w, `<span id="s5-slot-${idx}" style="display:inline-block; min-width:74px; padding:2px 10px; margin:0 4px; border-bottom:3px solid #2563eb; background:#dbeafe; color:#1e3a8a; border-radius:6px; font-weight:800; text-align:center;">( 빈칸 ${idx + 1} )</span>`);
  });

  const wordPool = [...s5b.blankWords, ...(s5b.distractors || [])].sort(() => Math.random() - 0.5);

  const wordBtnsHTML = wordPool.map((w, i) => `
    <button type="button" id="s5-word-btn-${i}" class="choice-btn" style="text-align:center; padding:12px 16px;" onclick="selectStep5Word('${w}', ${i})">
      🧩 ${w}
    </button>
  `).join('');

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🧩 5-1단계: 오늘의 핵심 문장 빈칸 채우기</h2>
    <div class="goal-box">
      <b>💡 핵심 개념 완성:</b> 아래 문장의 <b>( 빈칸 1 ), ( 빈칸 2 )...</b>에 들어갈 알맞은 낱말 카드를 순서대로 터치하여 문장을 완성해 보세요!
    </div>
    ${state.lessonData.step5A ? `<div class="summary-card" style="margin-bottom:14px;">📌 <b>개념 힌트:</b> ${state.lessonData.step5A}</div>` : ''}
    <div class="read-sentence-box" style="background:#eff6ff; border-color:#3b82f6; color:#1e293b;">
      ${displaySentence}
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:14px;">
      ${wordBtnsHTML}
    </div>
    <button type="button" class="btn btn-secondary" onclick="renderStep5BlankPuzzle(state.lessonData.step5B)">🔄 다시 선택하기</button>
    <div id="s5-blank-feedback" class="feedback"></div>
    <button type="button" id="s5-to-read-btn" class="btn" style="display:none; background:#16a34a;" onclick="renderStep5ReadAloud()">🗣️ 마지막 3번 소리 내어 읽기로 가기 👉</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectStep5Word(word, btnIdx) {
  const curSlotIdx = state.s5SelectedWords.length;
  if (curSlotIdx >= state.s5TargetWords.length) return;

  state.s5SelectedWords.push(word);
  const slotEl = document.getElementById(`s5-slot-${curSlotIdx}`);
  if (slotEl) slotEl.innerText = word;

  const btnEl = document.getElementById(`s5-word-btn-${btnIdx}`);
  if (btnEl) {
    btnEl.disabled = true;
    btnEl.style.opacity = '0.45';
  }

  if (state.s5SelectedWords.length === state.s5TargetWords.length) {
    const isAllCorrect = state.s5TargetWords.every((target, i) => target === state.s5SelectedWords[i]);
    const fb = document.getElementById('s5-blank-feedback');
    const nextBtn = document.getElementById('s5-to-read-btn');

    if (isAllCorrect) {
      fb.className = 'feedback correct';
      fb.innerHTML = `🎉 <b>정답입니다! 핵심 문장을 완벽하게 완성했어요!</b>`;
      if (nextBtn) {
        nextBtn.style.display = 'block';
        nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      fb.className = 'feedback hint';
      fb.innerHTML = `💡 순서나 낱말이 조금 달라요! <b>[🔄 다시 선택하기]</b>를 눌러 문맥에 맞게 다시 골라 보세요.`;
    }
  }
}

function renderStep5ReadAloud() {
  setHeaderUI(`5단계: 마무리 3회 낭독`, true, true);
  updateScoreBoard('5단계 3회 낭독');

  state.readCount = 0;
  state.readLock = false;
  const les = state.lessonData;
  const sentence = les.readSentence || (les.step5B && les.step5B.sentence) || les.step5A || `${les.title}의 핵심 원리를 완벽히 이해했습니다.`;

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🗣️ 5단계: 오늘의 핵심 문장 3번 소리 내어 읽기</h2>
    <div class="goal-box">
      <b>💡 메타인지 완성:</b> 눈으로만 본 것은 금방 잊어버려요. 아래 노란 상자의 핵심 문장을 <b>내 귀에 들리도록 또박또박 3번 소리 내어 읽으며</b> 버튼을 차례대로 눌러 주세요!
    </div>
    ${les.step5A ? `<div class="summary-card" style="margin-bottom:14px;">📌 <b>선생님의 한 줄 요약:</b><br>${les.step5A}</div>` : ''}
    <div class="read-sentence-box">"${sentence}"</div>
    <div class="read-step-list">
      <button type="button" id="read-btn-1" class="read-btn active" onclick="clickReadAloud(1)">🔊 1번째 소리 내어 읽었어요! (터치)</button>
      <button type="button" id="read-btn-2" class="read-btn" onclick="clickReadAloud(2)">🔊 2번째 소리 내어 읽었어요! (터치)</button>
      <button type="button" id="read-btn-3" class="read-btn" onclick="clickReadAloud(3)">🔊 3번째 소리 내어 읽었어요! (터치)</button>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function clickReadAloud(stepNum) {
  if (state.readLock || stepNum !== state.readCount + 1) return;
  state.readCount = stepNum;
  state.readLock = true;

  const curBtn = document.getElementById(`read-btn-${stepNum}`);
  if (curBtn) {
    curBtn.className = 'read-btn done';
    curBtn.innerText = `✅ ${stepNum}번째 소리 내어 읽기 완료!`;
  }

  const nextBtn = document.getElementById(`read-btn-${stepNum + 1}`);
  if (nextBtn) {
    nextBtn.innerText = `⏳ 소리 내어 읽는 중... (잠시만 기다려 주세요)`;
    setTimeout(() => {
      state.readLock = false;
      nextBtn.className = 'read-btn active';
      nextBtn.innerText = `🔊 ${stepNum + 1}번째 소리 내어 읽었어요! (터치)`;
    }, 1200);
  } else {
    setTimeout(() => {
      state.readLock = false;
      showFinalLessonReport();
    }, 500);
  }
}

async function showFinalLessonReport() {
  stopAllStepTimers();
  setHeaderUI(`🎉 차시 완전학습 달성!`, true, true);
  updateScoreBoard('학습 완료!');

  const finalStatus = (state.score === 100 || state.bResults.length >= state.wrongIndices.length) ? '완료' : '복습필요';
  const finalScore = finalStatus === '완료' ? 100 : state.score;

  await saveStudyRecord(state.unitKey, state.lessonId, finalScore, finalStatus, {
    step3Records: state.records,
    stepTimes: state.stepTimes
  });

  const st = state.stepTimes || {};
  const totalSec = Object.values(st).reduce((a, b) => a + b, 0);

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🎉 [${state.lessonId}차시] ${state.lessonData.title} 완전학습 리포트</h2>
    <div class="report-card">
      <div>👦 <b>학생 이름:</b> ${state.studentName} (${state.grade}학년 ${state.semester}학기)</div>
      <div>📘 <b>완료 차시:</b> ${state.unit}단원 [${state.lessonId}] ${state.lessonData.title}</div>
      <div>🎯 <b>3단계 실력 확인:</b> ${state.records.join(' ')} (초기 ${state.score}점 ➔ 쌍둥이 클리닉 후 <b>${finalScore}점 완전학습!</b>)</div>
      <div>⏱️ <b>총 학습 소요 시간:</b> ${formatSec(totalSec)}</div>
      <div style="margin-top:12px;">
        <table class="cloud-table">
          <thead>
            <tr>
              <th>워밍업</th>
              <th>1단계(개념)</th>
              <th>2단계(연습)</th>
              <th>3단계(실력)</th>
              <th>4단계(쌍둥이)</th>
              <th>5단계(정리)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${st.warmup ? formatSec(st.warmup) : '-'}</td>
              <td>${st.step1 ? formatSec(st.step1) : '-'}</td>
              <td>${st.step2 ? formatSec(st.step2) : '-'}</td>
              <td>${st.step3 ? formatSec(st.step3) : '-'}</td>
              <td>${st.step4 ? formatSec(st.step4) : '통과'}</td>
              <td>${st.step5 ? formatSec(st.step5) : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button type="button" class="btn btn-share" onclick="copyLessonReportToClipboard('${finalScore}', '${formatSec(totalSec)}')">📋 학부모님께 카톡으로 결과 보고서 복사하기</button>
    <button type="button" class="btn" onclick="showLessonSelect('${state.grade}', '${state.semester}', '${state.unit}')">📋 차시 목록으로 돌아가기 👉</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyLessonReportToClipboard(finalScore, timeStr) {
  const text = [
    `📊 [초등 수학 AI 완전학습 완료 보고서]`,
    `• 학생: ${state.studentName} (${state.grade}학년 ${state.semester}학기)`,
    `• 단원/차시: ${state.unit}단원 [${state.lessonId}] ${state.lessonData.title}`,
    `• 3단계 실력 확인: ${state.records.join(' ')} (초기 ${state.score}점)`,
    `• 최종 성취도: ${finalScore}점 (쌍둥이 보충 및 3회 낭독 완료)`,
    `• 총 학습 시간: ${timeStr}`,
    `• 완료 일시: ${new Date().toLocaleString()}`
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ 카카오톡에 바로 붙여넣을 수 있도록 학습 완료 보고서가 복사되었습니다!");
  });
}

// -------------------------------------------------------------------------
// 🏆 8. 10문항 실전 단원평가 모의고사 & 오답 즉시 쌍둥이 재도전 클리닉
// -------------------------------------------------------------------------
function startUnitExam() {
  normalizeAllMathData();
  const unitLessons = MATH_DB.lessons[state.unitKey];
  if (!unitLessons) return;

  const order = unitLessons.lessonOrder || Object.keys(unitLessons).filter(k => k !== 'lessonOrder');
  let pool = [];

  order.forEach(code => {
    const les = unitLessons[code];
    if (!les) return;
    const aList = les.step3A || [];
    const bList = les.step4B || [];
    aList.forEach((qItem, idx) => {
      pool.push({
        lessonCode: code,
        lessonTitle: les.title,
        qItem: normalizeQuestionItem(qItem),
        twinItem: normalizeQuestionItem(bList[idx] || qItem)
      });
    });
  });

  // 차시별로 골고루 섞어서 10문항 추출
  pool.sort(() => Math.random() - 0.5);
  state.examQuestions = pool.slice(0, 10);
  state.examIdx = 0;
  state.examScore = 0;
  state.examWrongList = [];
  state.examStartTime = Date.now();

  setHeaderUI(`🏆 실전 단원평가 (10문항)`, true, true);
  renderExamQuestion();
}

function renderExamQuestion() {
  const idx = state.examIdx;
  const total = state.examQuestions.length;
  const cur = state.examQuestions[idx];
  const item = cur.qItem;

  updateScoreBoard(`단원평가 (${idx + 1}/${total})`);
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🏆 실전 단원평가 모의고사 (${idx + 1} / ${total}번)</h2>
    <div class="goal-box">📌 출제 차시: [${cur.lessonCode}차시] ${cur.lessonTitle}</div>
    <div class="question-box">${item.q}</div>
    ${buildExamInputHTML(item)}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildExamInputHTML(item) {
  if (Array.isArray(item.choices) && item.choices.length > 0) {
    return `<div class="choice-grid">${item.choices.map((c, i) => `
      <button type="button" class="choice-btn" onclick="submitExamAnswer('${i + 1}')">${c}</button>
    `).join('')}</div>`;
  }
  if (isFractionProblem(item)) {
    return `
      <div class="fraction-widget">
        <input type="text" id="ex-whole" class="whole-input" placeholder="자연수" autocomplete="off">
        <div class="frac-col">
          <input type="text" id="ex-num" class="frac-input" placeholder="분자" autocomplete="off">
          <div class="frac-line"></div>
          <input type="text" id="ex-den" class="frac-input" placeholder="분모" autocomplete="off" onkeydown="if(event.key==='Enter') submitExamAnswer()">
        </div>
        ${item.unit ? `<span style="font-size:18px; font-weight:bold;">${item.unit}</span>` : ''}
      </div>
      <div class="helper-caption">💡 진분수나 가분수는 앞의 [자연수] 칸을 비워 두고 분자와 분모만 입력하세요!</div>
      <button type="button" class="btn" onclick="submitExamAnswer()">답안 제출 👉</button>
    `;
  }
  return `
    <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px;">
      <input type="text" id="ex-input" class="text-input" style="margin-bottom:0;" placeholder="정답 입력" autocomplete="off" onkeydown="if(event.key==='Enter') submitExamAnswer()">
      ${item.unit ? `<span style="font-size:19px; font-weight:bold;">${item.unit}</span>` : ''}
    </div>
    <button type="button" class="btn" onclick="submitExamAnswer()">답안 제출 👉</button>
  `;
}

function submitExamAnswer(choiceVal) {
  const cur = state.examQuestions[state.examIdx];
  const item = cur.qItem;
  const userVal = choiceVal !== undefined ? String(choiceVal) : readUserAnswerFromDOM(item, 'ex');
  if (!userVal) {
    alert("답을 입력해 주세요!");
    return;
  }

  const isRight = (choiceVal !== undefined)
    ? (String(choiceVal) === String(item.ans))
    : checkAnswerMatch(userVal, item);

  if (isRight) {
    state.examScore += 10;
  } else {
    state.examWrongList.push({
      qNum: state.examIdx + 1,
      lessonCode: cur.lessonCode,
      lessonTitle: cur.lessonTitle,
      userVal,
      qItem: item,
      twinItem: cur.twinItem
    });
  }

  state.examIdx++;
  if (state.examIdx < state.examQuestions.length) {
    renderExamQuestion();
  } else {
    finishUnitExam();
  }
}

async function finishUnitExam() {
  const examElapsedSec = Math.max(1, Math.round((Date.now() - (state.examStartTime || Date.now())) / 1000));
  await saveStudyRecord(state.unitKey, 'EXAM', state.examScore, '완료', {
    wrongCount: state.examWrongList.length,
    examTimeSec: examElapsedSec
  });
  updateScoreBoard(`단원평가: ${state.examScore}점`);

  const wrongHTML = state.examWrongList.map(w => {
    const rawKey = String(w.userVal).replace(/[^0-9./-]/g, '');
    const diag = (w.qItem.wrongDiag && (w.qItem.wrongDiag[w.userVal] || w.qItem.wrongDiag[rawKey])) || '';
    return `
      <div class="wrong-note-card">
        <div style="font-weight:800; color:#dc2626; margin-bottom:6px;">
          ❌ ${w.qNum}번 오답 [${w.lessonCode}차시] (내가 쓴 답: ${w.userVal}${w.qItem.unit || ''} / 정답: ${w.qItem.ans}${w.qItem.unit || ''})
        </div>
        <div style="font-size:15px; margin-bottom:6px;">${w.qItem.q}</div>
        ${diag ? `<div style="color:#b45309; font-weight:bold; font-size:14px; margin-bottom:4px;">📌 내가 틀린 까닭: ${diag}</div>` : ''}
        <div style="color:#1e3a8a; font-size:14px;">💡 <b>해설:</b> ${w.qItem.h2 || w.qItem.h1 || ''}</div>
      </div>
    `;
  }).join('');

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🏆 ${state.grade}학년 ${state.semester}학기 ${state.unit}단원 실전 단원평가 성적표</h2>
    <div class="report-card">
      <div style="font-size:20px; font-weight:800; color:#2563eb; margin-bottom:6px;">🎯 최종 점수: ${state.examScore}점 (10문항 중 ${10 - state.examWrongList.length}문항 정답)</div>
      <div>👦 <b>응시 학생:</b> ${state.studentName} · ⏱️ <b>소요 시간:</b> ${formatSec(examElapsedSec)}</div>
    </div>
    ${state.examWrongList.length === 0
      ? `<div class="report-card" style="background:#dcfce7; border-color:#22c55e; color:#14532d; font-weight:bold;">🎉 축하합니다! 10문제를 모두 맞혀 이 단원을 완벽히 마스터했어요!</div>`
      : `<h3>📒 나의 단원평가 오답 노트 (${state.examWrongList.length}문항)</h3>
         ${wrongHTML}
         <button type="button" class="btn" style="background:#d97706;" onclick="startExamTwinClinic()">🔥 틀린 ${state.examWrongList.length}문제만 쌍둥이 문제로 즉시 다시 풀기 👉</button>`
    }
    <button type="button" class="btn btn-share" onclick="copyExamReportToClipboard('${state.examScore}', '${formatSec(examElapsedSec)}')">📋 학부모님께 카톡으로 단원평가 성적표 복사하기</button>
    <button type="button" class="btn btn-secondary" onclick="showLessonSelect('${state.grade}', '${state.semester}', '${state.unit}')">📋 차시 목록으로 돌아가기</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyExamReportToClipboard(score, timeStr) {
  const wrongSummary = state.examWrongList.length === 0
    ? '없음 (10문항 전체 정답 만점!)'
    : state.examWrongList.map(w => `${w.qNum}번(${w.lessonCode}차시)`).join(', ');

  const text = [
    `🏆 [초등 수학 AI 실전 단원평가 성적표]`,
    `• 학생: ${state.studentName} (${state.grade}학년 ${state.semester}학기)`,
    `• 응시 단원: ${state.unit}단원 실전 모의고사 (10문항)`,
    `• 획득 점수: ${score}점 / 100점`,
    `• 보충 필요 문항: ${wrongSummary}`,
    `• 소요 시간: ${timeStr}`,
    `• 응시 일시: ${new Date().toLocaleString()}`
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ 카카오톡에 바로 붙여넣을 수 있도록 단원평가 성적표가 복사되었습니다!");
  });
}

function startExamTwinClinic() {
  state.examTwinIdx = 0;
  runNextExamTwin();
}

function runNextExamTwin() {
  if (state.examTwinIdx >= state.examWrongList.length) {
    alert("🎉 단원평가에서 틀렸던 모든 쌍둥이 문제를 내 힘으로 완벽하게 정복했습니다!");
    showLessonSelect(state.grade, state.semester, state.unit);
    return;
  }
  const w = state.examWrongList[state.examTwinIdx];
  renderInteractivePractice(
    `🔥 단원평가 오답 클리닉 (${state.examTwinIdx + 1} / ${state.examWrongList.length})`,
    `아까 단원평가 ${w.qNum}번([${w.lessonCode}차시])에서 틀렸던 문제의 1:1 쌍둥이 문제입니다. 끝까지 해결해 보세요!`,
    w.twinItem,
    () => {
      state.examTwinIdx++;
      runNextExamTwin();
    }
  );
}

// -------------------------------------------------------------------------
// 🚀 9. 앱 초기 기동 (study.html 열릴 때 자동 실행)
// -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', async () => {
  normalizeAllMathData();
  if (typeof loadCloudApiKey === 'function') {
    await loadCloudApiKey();
  }
  if (typeof showAuthScreen === 'function') {
    await showAuthScreen();
  }
});