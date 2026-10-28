// =========================================================================
// 🚀 app.js - 초등 수학 AI 자기주도 완전학습 메인 엔진 (최종 무결점 완본)
// =========================================================================

let viewSessionId = 0;
let readTimerId = null;

function safeEscapeHtml(s) {
  if (typeof escapeHtml === 'function') return escapeHtml(s);
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '\x26amp;')
    .replace(/</g, '\x26lt;')
    .replace(/>/g, '\x26gt;')
    .replace(/\x22/g, '\x26quot;')
    .replace(/\x27/g, '\x26#39;');
}

function clearPendingReadTimer() {
  if (readTimerId !== null) {
    clearTimeout(readTimerId);
    readTimerId = null;
  }
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

// -------------------------------------------------------------------------
// 1. 5학년 & 6학년 모든 단원 데이터 구조 자동 해독 및 표준화 어댑터 (원본 보존형)
// -------------------------------------------------------------------------
function normalizeQuestionItem(rawItem) {
  if (!rawItem || typeof rawItem !== 'object') return rawItem;
  if (rawItem.__normalized) return rawItem;

  const item = Object.assign({}, rawItem, { __normalized: true });

  if (Array.isArray(rawItem.steps)) {
    item.steps = rawItem.steps.map(st => {
      if (!st || typeof st !== 'object') return st;
      const stCopy = Object.assign({}, st);
      if (stCopy.ans === undefined && stCopy.a !== undefined) stCopy.ans = String(stCopy.a);
      if (stCopy.a === undefined && stCopy.ans !== undefined) stCopy.a = String(stCopy.ans);
      return stCopy;
    });
  }

  const rawOpts = item.choices || item.options;
  if (Array.isArray(rawOpts) && rawOpts.length > 0) {
    const isZeroIndexed = !item.choices && Array.isArray(item.options);
    item.choices = rawOpts.map((opt, idx) => {
      const clean = String(opt ?? '').replace(/^\d+번\s*[:.]?\s*/, '');
      return `${idx + 1}번: ${clean}`;
    });
    if (isZeroIndexed) {
      if (typeof item.ans === 'number') {
        item.ans = String(item.ans + 1);
      } else if (item.a !== undefined && item.ans === undefined && !isNaN(Number(item.a))) {
        item.ans = String(Number(item.a) + 1);
      }
    }
  }

  if (item.ans === undefined) {
    if (item.a !== undefined) item.ans = String(item.a);
    else if (item.answer !== undefined) item.ans = String(item.answer);
  }
  if (item.a === undefined && item.ans !== undefined) {
    item.a = String(item.ans);
  }

  if (item.num !== undefined && item.den !== undefined && (item.ans === undefined || item.ans === '')) {
    item.ans = item.whole ? `${item.whole}과 ${item.num}/${item.den}` : `${item.num}/${item.den}`;
    item.a = item.ans;
  }

  if ((item.num !== undefined && item.den !== undefined) && typeof item.q === 'string') {
    item.q = item.q.replace(/\(분자\/분모\s*형식으로\s*입력\)/g, '(분자와 분모 칸에 각각 입력)');
  }

  return item;
}

function normalizeLessonObj(rawLes, fallbackCode) {
  if (!rawLes || typeof rawLes !== 'object') return rawLes;
  const les = Object.assign({}, rawLes);

  if (!les.id && fallbackCode) les.id = fallbackCode;
  if (!les.title && les.name) les.title = les.name;

  if (!les.step1Quiz && les.quiz) les.step1Quiz = les.quiz;
  if (!les.step1Quiz && les.step1) les.step1Quiz = les.step1;
  if (!les.step2_1 && les.step2A) les.step2_1 = les.step2A;
  if (!les.step2_2 && les.step2B) les.step2_2 = les.step2B;
  if (!les.step3A && les.step3) les.step3A = les.step3;
  if (!les.step4B && les.step4) les.step4B = les.step4;

  const listKeys = ['warmup', 'step1Quiz', 'step2_1', 'step2_2', 'step3A', 'step4B'];
  listKeys.forEach(k => {
    if (Array.isArray(les[k])) {
      les[k] = les[k].map(normalizeQuestionItem);
    } else if (les[k] && typeof les[k] === 'object') {
      les[k] = [normalizeQuestionItem(les[k])];
    }
  });

  if (les.step5B && typeof les.step5B === 'object') {
    les.readSentence = les.readSentence || les.step5B.sentence || les.step5A || '';
  } else if (typeof les.step5B === 'string') {
    les.readSentence = les.readSentence || les.step5B;
  } else if (!les.readSentence && les.step5A) {
    les.readSentence = les.step5A;
  }

  return les;
}

function isLikelyLessonObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
  return Boolean(
    obj.title || obj.name || obj.videoUrl !== undefined ||
    obj.summaryCard || obj.step1Quiz || obj.step2_1 || obj.step3A
  );
}

function normalizeAllMathData() {
  window.MATH_DB = window.MATH_DB || { grades: [], semesters: {}, units: {}, lessons: {} };
  const lessons = window.MATH_DB.lessons || {};

  Object.keys(lessons).forEach(unitKey => {
    let rawUnit = lessons[unitKey];
    if (!rawUnit) return;

    const unitNum = unitKey.split('-')[2] || '1';

    if (!Array.isArray(rawUnit) && typeof rawUnit === 'object') {
      if (rawUnit.lessons && typeof rawUnit.lessons === 'object') {
        rawUnit = rawUnit.lessons;
      } else if (Array.isArray(rawUnit.items)) {
        rawUnit = rawUnit.items;
      } else if (Array.isArray(rawUnit.list)) {
        rawUnit = rawUnit.list;
      }
    }

    if (Array.isArray(rawUnit)) {
      const converted = { lessonOrder: [] };
      rawUnit.forEach((les, idx) => {
        if (!les || typeof les !== 'object') return;
        const code = String(les.id || les.code || `${unitNum}-${idx + 1}`);
        converted.lessonOrder.push(code);
        converted[code] = normalizeLessonObj(les, code);
      });
      lessons[unitKey] = converted;
      return;
    }

    if (typeof rawUnit === 'object') {
      const metaKeys = ['lessonOrder', 'title', 'name', 'desc', 'description', 'unit', 'grade', 'semester', 'unitId', 'unitNum', 'subtitle', 'lessonTitles'];
      const validCodes = [];

      if (Array.isArray(rawUnit.lessonOrder)) {
        rawUnit.lessonOrder.forEach(c => {
          if (rawUnit[c] && isLikelyLessonObject(rawUnit[c])) {
            validCodes.push(String(c));
          }
        });
      }

      if (validCodes.length === 0) {
        Object.keys(rawUnit).forEach(k => {
          if (metaKeys.includes(k)) return;
          const val = rawUnit[k];
          if (isLikelyLessonObject(val)) {
            validCodes.push(String(k));
          } else if (val && typeof val === 'object' && !Array.isArray(val)) {
            Object.keys(val).forEach(subK => {
              if (isLikelyLessonObject(val[subK])) {
                rawUnit[subK] = val[subK];
                validCodes.push(String(subK));
              }
            });
          }
        });
      }

      rawUnit.lessonOrder = validCodes;
      validCodes.forEach(code => {
        rawUnit[code] = normalizeLessonObj(rawUnit[code], code);
      });
      lessons[unitKey] = rawUnit;
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
  state.currentStepStartTime = stepKey ? now : null;
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
  state.geminiApiKey = key;
  state.apiKey = key;
  if (typeof db !== 'undefined' && db && key && state.docId === 'MASTER_PREVIEW') {
    try {
      await db.collection('settings').doc('gemini').set({
        apiKey: key,
        updatedAt: new Date().toLocaleString()
      });
    } catch (e) {}
  }
  alert("✅ 제미나이 API 키가 적용되었습니다!");
  closeApiModal();
}

// -------------------------------------------------------------------------
// 🏫 3. 학년 ➔ 학기 ➔ 단원 ➔ 차시 선택 화면
// -------------------------------------------------------------------------
function cleanupOnNavigation() {
  viewSessionId++;
  stopAllStepTimers();
  clearPendingReadTimer();
  if (typeof resetAiTutorState === 'function') resetAiTutorState();
}

function showGradeSelect() {
  cleanupOnNavigation();
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
      <b>💡 자기주도 완전학습:</b> 공부하고 싶은 학년과 학기를 선택하면 1단원부터 6단원까지 모든 차시와 <b>실전 단원평가</b>를 자유롭게 이용할 수 있습니다.
    </div>
    <div class="card-grid">${cardsHTML}</div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showUnitSelect(grade, semester) {
  cleanupOnNavigation();
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
  cleanupOnNavigation();
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
  const order = (Array.isArray(unitLessons.lessonOrder) && unitLessons.lessonOrder.length > 0)
    ? unitLessons.lessonOrder
    : Object.keys(unitLessons).filter(k => k !== 'lessonOrder' && isLikelyLessonObject(unitLessons[k]));

  const examPoolCount = order.reduce((sum, code) => {
    const les = unitLessons[code];
    return sum + ((les && Array.isArray(les.step3A)) ? les.step3A.length : 0);
  }, 0);

  const itemsHTML = order.map((code, idx) => {
    const les = unitLessons[code];
    if (!les) return '';
    const rec = records[code];
    const isMasterLesson = (idx === order.length - 1 && !les.videoUrl);

    let badgeHTML = `<span class="menu-arrow">학습 시작 👉</span>`;
    if (rec && rec.status === '완료') {
      const initTag = (rec.initialScore !== undefined && rec.initialScore < 100) ? ` (초기 ${rec.initialScore}점➔보충완료)` : ` (${rec.score || 100}점)`;
      badgeHTML = `<span class="complete-badge">💮 완료${initTag}</span>`;
    } else if (rec) {
      badgeHTML = `<span class="review-badge">🔄 복습 권장 (${rec.score || 0}점)</span>`;
    }

    const cleanTitle = String(les.title || `${code}차시`).replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');

    return `
      <button type="button" class="menu-item" onclick="startLesson('${code}')">
        <div>
          <div class="menu-title">${isMasterLesson ? '👑' : '✏️'} [${code}차시] ${cleanTitle}</div>
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
      차시를 순서대로 공부하거나 부족한 차시를 골라 학습하세요. 맨 아래의 <b>[🏆 10문항 실전 단원평가 모의고사]</b>는 언제든 응시할 수 있으며, 누를 때마다 새로운 시험지가 만들어집니다!
    </div>
    <div class="menu-list">${itemsHTML}</div>

    <button type="button" class="exam-banner" onclick="startUnitExam()">
      <div>
        <div class="exam-title">🏆 실전 단원평가 모의고사 (10문항 균등 출제 · 상시 오픈)</div>
        <div class="exam-sub">1~${order.length}차시 실력 문제 풀(${examPoolCount}문항)에서 차시별로 골고루 출제 · 오답 즉시 1:1 쌍둥이 클리닉 제공</div>
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
  cleanupOnNavigation();
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
  state.usedHelpInLesson = false;
  state.lessonStartTime = Date.now();
  state.stepTimes = {};
  state.currentStepKey = null;
  state.currentStepStartTime = null;

  const cleanTitle = String(state.lessonData.title || '').replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');
  setHeaderUI(`${lessonId}차시 학습 중`, true, true);
  setBreadcrumb(`${state.grade}-${state.semester} > ${state.unit}단원 > [${lessonId}] ${cleanTitle}`);
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
  if (typeof resetAiTutorState === 'function') resetAiTutorState();
  startStepTimer('step1');
  setHeaderUI(`1단계: 개념 익히기`, true, true);
  updateScoreBoard('1단계 개념');

  const les = state.lessonData;
  const cleanTitle = String(les.title || '').replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');
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
    : (sc.content ? `<div style="font-weight:bold; color:#1e293b;">${sc.content}</div>` : '');

  const cardHTML = (sc.title || sc.svg || rulesHTML) ? `
    <div class="summary-card">
      ${sc.title ? `<div style="font-size:18px; font-weight:800; color:#b45309; margin-bottom:10px;">📌 ${sc.title}</div>` : ''}
      ${sc.svg ? `<div style="margin-bottom:12px; background:#ffffff; border-radius:12px; padding:8px; overflow-x:auto;">${sc.svg}</div>` : ''}
      ${rulesHTML}
    </div>
  ` : '';

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🎬 1단계: [${state.lessonId}] ${cleanTitle}</h2>
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
// 🧩 5. 양방향 문제 풀이 렌더러 & 정교한 수학 동치 채점기
// -------------------------------------------------------------------------
// ★ 대분수 문자열("1과 1/2")로만 저장된 문제도 분수 문제로 정확히 인식!
function isFractionProblem(item) {
  if (!item || typeof item !== 'object') return false;
  if (item.num !== undefined && item.den !== undefined) return true;
  if (typeof item.ans === 'string') {
    const s = item.ans.trim();
    return /^(?:\d+\s*[과와]\s*)?\d+\s*\/\s*\d+$/.test(s);
  }
  return false;
}

function parseFractionParts(str) {
  if (str === undefined || str === null) return null;
  const s = String(str).trim();
  const mixed = s.match(/^(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const w = parseInt(mixed[1], 10);
    const n = parseInt(mixed[2], 10);
    const d = parseInt(mixed[3], 10);
    if (d === 0) return null;
    return { w, n, d, totalNum: w * d + n, den: d };
  }
  const simple = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if (simple) {
    const n = parseInt(simple[1], 10);
    const d = parseInt(simple[2], 10);
    if (d === 0) return null;
    return { w: 0, n, d, totalNum: n, den: d };
  }
  return null;
}

function calcGcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b > 0) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a || 1;
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
    return (w && w !== '0') ? `${w}과 ${n}/${d}` : `${n}/${d}`;
  }
  return (document.getElementById(`${prefix}-input`)?.value || '').trim();
}

// ★ 분수 조건별 채점(특정 분모 지정, 기약분수 여부, 대분수/가분수 동치) 및 명시적 속성 완벽 지원!
function checkAnswerMatch(userVal, item) {
  if (userVal === undefined || userVal === null || String(userVal).trim() === '') return false;

  const commaCleanedUser = String(userVal).replace(/(\d),(?=\d{3}(?!\d))/g, '$1').trim();
  const cleanUser = normalizeMathText(commaCleanedUser);

  const targetStr = String(item.ans ?? item.a ?? '').replace(/(\d),(?=\d{3}(?!\d))/g, '$1').trim();
  const normTarget = normalizeMathText(targetStr);

  // 1) 기본 정답 텍스트 및 accept(명시적 허용 답안) 최우선 검사!
  if (cleanUser === normTarget) return true;
  if (item.unit && cleanUser === normalizeMathText(`${targetStr}${item.unit}`)) return true;
  if (Array.isArray(item.accept)) {
    if (item.accept.some(ac => cleanUser === normalizeMathText(String(ac).replace(/(\d),(?=\d{3}(?!\d))/g, '$1')))) {
      return true;
    }
  }

  // 2) 분수 문제 정밀 채점
  if (isFractionProblem(item)) {
    let targetW = item.whole ? parseInt(item.whole, 10) : 0;
    let targetN = item.num !== undefined ? parseInt(item.num, 10) : null;
    let targetD = item.den !== undefined ? parseInt(item.den, 10) : null;

    if ((targetN === null || targetD === null) && typeof item.ans === 'string') {
      const parsedT = parseFractionParts(item.ans);
      if (parsedT) {
        targetW = parsedT.w;
        targetN = parsedT.n;
        targetD = parsedT.den;
      }
    }

    const userFrac = parseFractionParts(commaCleanedUser);
    if (userFrac && targetN !== null && targetD !== null && targetD > 0) {
      const targetTotalNum = targetW * targetD + targetN;
      const isSameValue = (userFrac.totalNum * targetD === targetTotalNum * userFrac.den);
      if (isSameValue) {
        const qText = String(item.q || '');

        // (A) 특정 분모가 지정된 문제(예: "분모가 4인 분수" 또는 requiredDenominator 속성)이거나,
        // 원래 정답 자체가 약분되지 않은 분수(예: 통분 과정의 2/4)인 경우에는 분모가 정확히 일치해야 함!
        const denMatch = qText.match(/분모가\s*(\d+)\s*인/);
        const reqDen = item.requiredDenominator !== undefined
          ? Number(item.requiredDenominator)
          : (denMatch ? parseInt(denMatch[1], 10) : null);

        if (reqDen !== null && userFrac.den !== reqDen) {
          return false;
        }

        const targetIsReduced = (calcGcd(targetN, targetD) === 1);
        const userIsReduced = (calcGcd(userFrac.n, userFrac.den) === 1);

        // 원래 정답이 약분되지 않은 분수(예: 2/4)라면 그 분모(4)를 그대로 써야 정답 인정 ("3/6" 오답 처리)
        if (!targetIsReduced && userFrac.den !== targetD) {
          return false;
        }

        // (B) 기약분수(약분) 요구 여부 판별 ("통분" 예외 제거, "크기가 같은 분수"만 예외 허용)
        const requiresReduced = item.requireReduced !== undefined
          ? Boolean(item.requireReduced)
          : (/기약분수|약분/.test(qText) || (targetIsReduced && !/크기가\s*같은\s*분수/.test(qText)));

        if (requiresReduced && !userIsReduced) return false;

        // (C) 대분수 / 가분수 형태 제한 확인
        if ((item.answerForm === 'mixed' || /대분수로/.test(qText)) && targetW > 0 && userFrac.w === 0) return false;
        if ((item.answerForm === 'improper' || /가분수로/.test(qText)) && targetW === 0 && userFrac.w > 0) return false;
        if (userFrac.w > 0 && userFrac.n >= userFrac.den) return false;

        return true;
      }
    }
  }

  // 3) 순수 소수/자연수 수치 동치 확인 (예: 정답 "0.5"에 학생이 "0.50" 입력 시 정답 인정)
  const strippedUser = item.unit ? cleanUser.replace(new RegExp(normalizeMathText(item.unit) + '$'), '') : cleanUser;
  if (/^-?\d+(\.\d+)?$/.test(strippedUser) && /^-?\d+(\.\d+)?$/.test(normTarget)) {
    if (Number(strippedUser) === Number(normTarget)) {
      return true;
    }
  }

  return false;
}

function renderInteractivePractice(stageTitle, goalDesc, item, onNextCallback) {
  if (typeof resetAiTutorState === 'function') {
    resetAiTutorState();
  }
  state.currentItem = normalizeQuestionItem(item);
  state.attempt = 1;
  state.currentCheckFn = onNextCallback;
  state.aiChatHistory = [];

  const curItem = state.currentItem;
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>${stageTitle}</h2>
    <div class="goal-box">${goalDesc}</div>
    <div class="question-box">${curItem.q}</div>
    <div id="interactive-input-area">
      ${buildAnswerInputHTML(curItem, 'ans')}
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
    if (typeof cancelPendingAiRequests === 'function') cancelPendingAiRequests();
    const cleanExplanation = item.h2
      ? String(item.h2)
      : ((typeof cleanHintIntoExplanation === 'function') ? cleanHintIntoExplanation(item.h1 || '', item.ans) : (item.h1 || ''));
    fb.className = 'feedback correct';
    fb.innerHTML = `🎉 <b>정답입니다! 참 잘했어요!</b>\n${cleanExplanation ? `💡 <b>풀이 정리:</b> ${cleanExplanation}` : ''}`;
    if (nextBtn) {
      nextBtn.style.display = 'block';
      nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  state.usedHelpInLesson = true;
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
      openAiTutorForStep(`학생이 객관식 문제에서 "${userVal}"을 골라 2번 연속 틀렸습니다. 정답을 직접 말하지 말고 쉬운 질문으로 유도해 주세요.`, userVal);
    } else {
      activateSmallStepIfNeeded();
    }
  }
}

// -------------------------------------------------------------------------
// 📝 6. 3단계(블라인드 실력 확인 3문항) & 4단계(1:1 쌍둥이 오답 클리닉)
// -------------------------------------------------------------------------
function startStep3Blind() {
  if (typeof resetAiTutorState === 'function') resetAiTutorState();
  startStepTimer('step3');
  setHeaderUI(`3단계: 실력 확인 (3문항)`, true, true);
  updateScoreBoard('3단계 실력 확인');

  const poolA = state.lessonData.step3A || [];
  const poolB = state.lessonData.step4B || [];

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
        <div>• <b>내가 쓴 답:</b> ${safeEscapeHtml(userVal)}${item.unit || ''} ${!isRight ? `/ <b>바른 정답:</b> <span style="color:#dc2626; font-weight:bold;">${safeEscapeHtml(item.ans)}${item.unit || ''}</span>` : ''}</div>
        ${diag ? `<div style="margin-top:6px; color:#b45309; font-weight:bold;">📌 족집게 오답 진단: ${diag}</div>` : ''}
        ${!isRight ? `<div style="margin-top:6px; color:#1e3a8a;">💡 <b>차근차근 풀이:</b> ${item.h2 || item.h1 || ''}</div>` : ''}
      </div>
    `;
  }).join('');

  state.score = Math.round((rightCnt / Math.max(1, state.step3Questions.length)) * 100);
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
      state.bDetailedLogs.push({
        origNum: origIdx + 1,
        attempts: state.attempt,
        usedSmallStepOrAI: state.attempt > 2,
        status: '쌍둥이 통과'
      });
      state.bCursor++;
      runNextTwinProblem();
    }
  );
}

// -------------------------------------------------------------------------
// 🗣️ 7. 5단계: (5-1) 핵심 원리 빈칸 낱말 퍼즐 ➔ (5-2) 핵심 문장 3회 소리 내어 읽기
// -------------------------------------------------------------------------
function startStep5WrapUp() {
  if (typeof resetAiTutorState === 'function') resetAiTutorState();
  startStepTimer('step5');
  setHeaderUI(`5단계: 핵심 원리 정리`, true, true);
  updateScoreBoard('5단계 정리');

  const les = state.lessonData;
  const s5b = les.step5B;

  if (s5b && typeof s5b === 'object' && s5b.sentence && Array.isArray(s5b.blankWords) && s5b.blankWords.length > 0) {
    renderStep5BlankPuzzle(s5b);
  } else {
    renderStep5ReadAloud();
  }
}

function renderStep5BlankPuzzle(s5b) {
  const sentence = String(s5b.sentence || '');

  const positionedWords = [];
  const rawWords = [...s5b.blankWords];

  rawWords.forEach(w => {
    const pos = sentence.indexOf(w);
    if (pos !== -1) {
      positionedWords.push({ word: w, pos });
    }
  });
  positionedWords.sort((a, b) => a.pos - b.pos);

  state.s5TargetWords = positionedWords.length > 0
    ? positionedWords.map(p => p.word)
    : [...s5b.blankWords];
  state.s5SelectedWords = [];

  let displaySentence = sentence;
  state.s5TargetWords.forEach((w, idx) => {
    displaySentence = displaySentence.replace(w, `<span id="s5-slot-${idx}" style="display:inline-block; min-width:74px; padding:2px 10px; margin:0 4px; border-bottom:3px solid #2563eb; background:#dbeafe; color:#1e3a8a; border-radius:6px; font-weight:800; text-align:center;">( 빈칸 ${idx + 1} )</span>`);
  });

  const wordPool = shuffleArray([...state.s5TargetWords, ...(s5b.distractors || [])]);

  const wordBtnsHTML = wordPool.map((w, i) => `
    <button type="button" id="s5-word-btn-${i}" class="choice-btn" style="text-align:center; padding:12px 16px;" onclick="selectStep5Word('${safeEscapeHtml(w)}', ${i})">
      🧩 ${safeEscapeHtml(w)}
    </button>
  `).join('');

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🧩 5-1단계: 오늘의 핵심 문장 빈칸 채우기</h2>
    <div class="goal-box">
      <b>💡 핵심 개념 완성:</b> 아래 문장의 <b>( 빈칸 1 ), ( 빈칸 2 )...</b>에 들어갈 알맞은 낱말 카드를 문장 순서대로 터치하여 완성해 보세요!
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
  clearPendingReadTimer();
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
  const mySession = viewSessionId;

  const curBtn = document.getElementById(`read-btn-${stepNum}`);
  if (curBtn) {
    curBtn.className = 'read-btn done';
    curBtn.innerText = `✅ ${stepNum}번째 소리 내어 읽기 완료!`;
  }

  const nextBtn = document.getElementById(`read-btn-${stepNum + 1}`);
  if (nextBtn) {
    nextBtn.innerText = `⏳ 소리 내어 읽는 중... (잠시만 기다려 주세요)`;
    readTimerId = setTimeout(() => {
      if (mySession !== viewSessionId) return;
      state.readLock = false;
      nextBtn.className = 'read-btn active';
      nextBtn.innerText = `🔊 ${stepNum + 1}번째 소리 내어 읽었어요! (터치)`;
    }, 1200);
  } else {
    readTimerId = setTimeout(() => {
      if (mySession !== viewSessionId) return;
      state.readLock = false;
      showFinalLessonReport();
    }, 500);
  }
}

async function showFinalLessonReport() {
  stopAllStepTimers();
  const mySession = viewSessionId;

  const snapUnitKey = state.unitKey;
  const snapLessonId = state.lessonId;
  const snapGrade = state.grade;
  const snapSem = state.semester;
  const snapUnit = state.unit;
  const snapStudentName = state.studentName || '';
  const snapInitialScore = state.score;
  const snapRecords = [...state.records];
  const snapStepTimes = Object.assign({}, state.stepTimes);
  const snapTwinLogs = [...(state.bDetailedLogs || [])];
  const snapCleanTitle = String(state.lessonData?.title || '').replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');

  const finalStatus = (snapInitialScore === 100 || state.bResults.length >= state.wrongIndices.length) ? '완료' : '복습필요';
  const finalScore = finalStatus === '완료' ? 100 : snapInitialScore;

  setHeaderUI(`🎉 차시 완전학습 달성!`, true, true);
  updateScoreBoard('학습 완료!');

  await saveStudyRecord(snapUnitKey, snapLessonId, finalScore, finalStatus, {
    initialScore: snapInitialScore,
    step3Records: snapRecords,
    twinClinicLogs: snapTwinLogs,
    usedHelpInLesson: Boolean(state.usedHelpInLesson),
    stepTimes: snapStepTimes
  });

  if (mySession !== viewSessionId) return;

  const totalSec = Object.values(snapStepTimes).reduce((a, b) => a + b, 0);

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🎉 [${snapLessonId}차시] ${snapCleanTitle} 완전학습 리포트</h2>
    <div class="report-card">
      <div>👦 <b>학생 이름:</b> ${safeEscapeHtml(snapStudentName)} (${snapGrade}학년 ${snapSem}학기)</div>
      <div>📘 <b>완료 차시:</b> ${snapUnit}단원 [${snapLessonId}] ${snapCleanTitle}</div>
      <div>🎯 <b>3단계 최초 실력 점수:</b> ${snapRecords.join(' ')} (<b>${snapInitialScore}점</b>)</div>
      <div>💮 <b>쌍둥이 클리닉 후 최종 상태:</b> <b style="color:#16a34a;">${finalStatus === '완료' ? '완전학습 달성 (100% 보충 완료!)' : '복습 권장'}</b></div>
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
              <td>${snapStepTimes.warmup ? formatSec(snapStepTimes.warmup) : '-'}</td>
              <td>${snapStepTimes.step1 ? formatSec(snapStepTimes.step1) : '-'}</td>
              <td>${snapStepTimes.step2 ? formatSec(snapStepTimes.step2) : '-'}</td>
              <td>${snapStepTimes.step3 ? formatSec(snapStepTimes.step3) : '-'}</td>
              <td>${snapStepTimes.step4 ? formatSec(snapStepTimes.step4) : '통과'}</td>
              <td>${snapStepTimes.step5 ? formatSec(snapStepTimes.step5) : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button type="button" class="btn btn-share" onclick="copyLessonReportToClipboard('${finalScore}', '${formatSec(totalSec)}')">📋 학부모님께 카톡으로 결과 보고서 복사하기</button>
    <button type="button" class="btn" onclick="showLessonSelect('${snapGrade}', '${snapSem}', '${snapUnit}')">📋 차시 목록으로 돌아가기 👉</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyLessonReportToClipboard(finalScore, timeStr) {
  const cleanTitle = String(state.lessonData?.title || '').replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');
  const text = [
    `📊 [초등 수학 AI 완전학습 완료 보고서]`,
    `• 학생: ${state.studentName} (${state.grade}학년 ${state.semester}학기)`,
    `• 단원/차시: ${state.unit}단원 [${state.lessonId}] ${cleanTitle}`,
    `• 3단계 최초 실력 확인: ${state.records.join(' ')} (초기 ${state.score}점)`,
    `• 보충 학습 후 성취도: ${finalScore}점 (쌍둥이 클리닉 및 3회 낭독 완료)`,
    `• 총 학습 시간: ${timeStr}`,
    `• 완료 일시: ${new Date().toLocaleString()}`
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ 카카오톡에 바로 붙여넣을 수 있도록 학습 완료 보고서가 복사되었습니다!");
  }).catch(() => {
    alert("복사하지 못했습니다. 화면의 결과를 길게 눌러 직접 복사해 주세요.");
  });
}

// -------------------------------------------------------------------------
// 🏆 8. 10문항 실전 단원평가 모의고사
// -------------------------------------------------------------------------
function startUnitExam() {
  cleanupOnNavigation();
  normalizeAllMathData();
  const unitLessons = MATH_DB.lessons[state.unitKey];
  if (!unitLessons) return;

  const order = unitLessons.lessonOrder || Object.keys(unitLessons).filter(k => k !== 'lessonOrder' && isLikelyLessonObject(unitLessons[k]));
  const bucketsByLesson = [];
  let remainingPool = [];

  order.forEach(code => {
    const les = unitLessons[code];
    if (!les) return;
    const cleanTitle = String(les.title || '').replace(/^(?:\[\d+-\d+차시\]|\d+-\d+|\d+)\s*(?:차시)?\s*[:.]?\s*/, '');
    const aList = les.step3A || [];
    const bList = les.step4B || [];
    const lessonItems = aList.map((qItem, idx) => ({
      lessonCode: code,
      lessonTitle: cleanTitle,
      qItem: normalizeQuestionItem(qItem),
      twinItem: normalizeQuestionItem(bList[idx] || qItem)
    }));

    if (lessonItems.length > 0) {
      const shuffledLessonItems = shuffleArray(lessonItems);
      bucketsByLesson.push(shuffledLessonItems[0]);
      remainingPool = remainingPool.concat(shuffledLessonItems.slice(1));
    }
  });

  const combined = shuffleArray(bucketsByLesson).concat(shuffleArray(remainingPool));
  if (combined.length === 0) {
    alert("단원평가 문항을 불러올 수 없습니다.");
    return;
  }

  state.examQuestions = shuffleArray(combined.slice(0, 10));
  state.examIdx = 0;
  state.examCorrectCount = 0;
  state.examScore = 0;
  state.examWrongList = [];
  state.examStartTime = Date.now();

  setHeaderUI(`🏆 실전 단원평가 (${state.examQuestions.length}문항)`, true, true);
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
    state.examCorrectCount = (state.examCorrectCount || 0) + 1;
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
  const mySession = viewSessionId;
  const totalQ = Math.max(1, state.examQuestions.length);
  const rightQ = totalQ - state.examWrongList.length;
  state.examScore = Math.round((rightQ / totalQ) * 100);

  const snapUnitKey = state.unitKey;
  const snapGrade = state.grade;
  const snapSem = state.semester;
  const snapUnit = state.unit;
  const snapStudentName = state.studentName || '';
  const snapScore = state.examScore;
  const snapWrongList = [...state.examWrongList];
  const examElapsedSec = Math.max(1, Math.round((Date.now() - (state.examStartTime || Date.now())) / 1000));

  await saveStudyRecord(snapUnitKey, 'EXAM', snapScore, '완료', {
    totalQuestions: totalQ,
    wrongCount: snapWrongList.length,
    examTimeSec: examElapsedSec
  });

  if (mySession !== viewSessionId) return;
  updateScoreBoard(`단원평가: ${snapScore}점`);

  const wrongHTML = snapWrongList.map(w => {
    const rawKey = String(w.userVal).replace(/[^0-9./-]/g, '');
    const diag = (w.qItem.wrongDiag && (w.qItem.wrongDiag[w.userVal] || w.qItem.wrongDiag[rawKey])) || '';
    return `
      <div class="wrong-note-card">
        <div style="font-weight:800; color:#dc2626; margin-bottom:6px;">
          ❌ ${w.qNum}번 오답 [${w.lessonCode}차시] (내가 쓴 답: ${safeEscapeHtml(w.userVal)}${w.qItem.unit || ''} / 정답: ${safeEscapeHtml(w.qItem.ans)}${w.qItem.unit || ''})
        </div>
        <div style="font-size:15px; margin-bottom:6px;">${w.qItem.q}</div>
        ${diag ? `<div style="color:#b45309; font-weight:bold; font-size:14px; margin-bottom:4px;">📌 내가 틀린 까닭: ${diag}</div>` : ''}
        <div style="color:#1e3a8a; font-size:14px;">💡 <b>해설:</b> ${w.qItem.h2 || w.qItem.h1 || ''}</div>
      </div>
    `;
  }).join('');

  const content = document.getElementById('app-content');
  content.innerHTML = `
    <h2>🏆 ${snapGrade}학년 ${snapSem}학기 ${snapUnit}단원 실전 단원평가 성적표</h2>
    <div class="report-card">
      <div style="font-size:20px; font-weight:800; color:#2563eb; margin-bottom:6px;">🎯 최종 점수: ${snapScore}점 (${totalQ}문항 중 ${rightQ}문항 정답)</div>
      <div>👦 <b>응시 학생:</b> ${safeEscapeHtml(snapStudentName)} · ⏱️ <b>소요 시간:</b> ${formatSec(examElapsedSec)}</div>
    </div>
    ${snapWrongList.length === 0
      ? `<div class="report-card" style="background:#dcfce7; border-color:#22c55e; color:#14532d; font-weight:bold;">🎉 축하합니다! ${totalQ}문제를 모두 맞혀 이 단원을 완벽히 마스터했어요!</div>`
      : `<h3>📒 나의 단원평가 오답 노트 (${snapWrongList.length}문항)</h3>
         ${wrongHTML}
         <button type="button" class="btn" style="background:#d97706;" onclick="startExamTwinClinic()">🔥 틀린 ${snapWrongList.length}문제만 쌍둥이 문제로 즉시 다시 풀기 👉</button>`
    }
    <button type="button" class="btn btn-share" onclick="copyExamReportToClipboard('${snapScore}', '${formatSec(examElapsedSec)}', '${totalQ}')">📋 학부모님께 카톡으로 단원평가 성적표 복사하기</button>
    <button type="button" class="btn btn-secondary" onclick="showLessonSelect('${snapGrade}', '${snapSem}', '${snapUnit}')">📋 차시 목록으로 돌아가기</button>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyExamReportToClipboard(score, timeStr, totalQ = 10) {
  const wrongSummary = state.examWrongList.length === 0
    ? `없음 (${totalQ}문항 전체 정답 만점!)`
    : state.examWrongList.map(w => `${w.qNum}번(${w.lessonCode}차시)`).join(', ');

  const text = [
    `🏆 [초등 수학 AI 실전 단원평가 성적표]`,
    `• 학생: ${state.studentName} (${state.grade}학년 ${state.semester}학기)`,
    `• 응시 단원: ${state.unit}단원 실전 모의고사 (${totalQ}문항)`,
    `• 획득 점수: ${score}점 / 100점`,
    `• 보충 필요 문항: ${wrongSummary}`,
    `• 소요 시간: ${timeStr}`,
    `• 응시 일시: ${new Date().toLocaleString()}`
  ].join('\n');

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ 카카오톡에 바로 붙여넣을 수 있도록 단원평가 성적표가 복사되었습니다!");
  }).catch(() => {
    alert("복사하지 못했습니다. 화면의 결과를 길게 눌러 직접 복사해 주세요.");
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
// 🚀 9. 앱 초기 기동 (로그인 검증을 먼저 통과한 경우에만 API 키를 불러오도록 순서 변경!)
// -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', async () => {
  normalizeAllMathData();
  let authOk = false;
  if (typeof showAuthScreen === 'function') {
    authOk = await showAuthScreen();
  }
  if (authOk && state.docId && typeof loadCloudApiKey === 'function') {
    await loadCloudApiKey();
  }
});