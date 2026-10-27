// ==========================================
// ☁️ 1. 전역 상태(state) 및 Firebase 클라우드 초기화 (study.html 전용)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyAIf_-5uMXH4LNGSOdGVgM2PZZ_1-qK7pc",
  authDomain: "math-self-srudy.firebaseapp.com",
  projectId: "math-self-srudy",
  storageBucket: "math-self-srudy.firebasestorage.app",
  messagingSenderId: "27278117022",
  appId: "1:27278117022:web:2e05a51a4a4b1d97e8538f",
  measurementId: "G-53JHN6FH62"
};

let db = null;
try {
  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    db = firebase.firestore();
  }
} catch (e) {
  console.warn("Firebase 초기화 실패:", e);
}

let state = {
  docId: null,
  parentEmail: null,
  studentName: null,
  studentPin: null,
  studentGrade: '6',
  studentSem: '1',
  accountType: 'student',
  isAllAccess: false,
  cloudRecords: {},
  authMode: 'login',
  grade: '6',
  semester: '1',
  unit: null,
  unitKey: null,
  lessonId: null,
  lessonData: null,
  records: ['➖', '➖', '➖'],
  step3Answers: [],
  score: 0,
  wrongIndices: [],
  bRetryQueue: [],
  bResults: [],
  bDetailedLogs: [],
  attempt: 1,
  currentItem: null,
  currentCheckFn: null,
  aiChatHistory: [],
  smallSteps: [],
  smallStepIdx: 0,
  readCount: 0,
  readLock: false,
  examQuestions: [],
  examIdx: 0,
  examScore: 0,
  examWrongList: [],
  lessonStartTime: null,
  currentStepKey: null,
  currentStepStartTime: null,
  stepTimes: {},
  geminiApiKey: '',
  apiKey: ''
};

function updateCloudBadge(isConnected) {
  const el = document.getElementById('cloud-badge');
  if (!el) return;
  if (isConnected) {
    el.innerText = "☁️ 클라우드 연결됨";
    el.style.background = "#0369a1";
  } else {
    el.innerText = "💾 로컬 저장 모드";
    el.style.background = "#64748b";
  }
}

function getCleanYoutubeEmbedUrl(rawUrl) {
  if (!rawUrl) return '';
  const match = rawUrl.match(/(?:embed\/|watch\?v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?rel=0&playsinline=1&cc_load_policy=0&iv_load_policy=3`;
  }
  return rawUrl;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setBreadcrumb(text) {
  const el = document.getElementById('breadcrumb');
  if (el) el.innerText = `📍 현재 위치: ${text}`;
}

// ==========================================
// 🚪 2. 정문(index.html) 출입증 검증 및 클라우드 학습 기록 연동
// ==========================================
function getCurrentRecordKey() {
  const keyId = state.docId || state.studentName || 'GUEST';
  return `MATH_RECORDS_${keyId}`;
}

function getStudyRecords() {
  try {
    const localRec = JSON.parse(localStorage.getItem(getCurrentRecordKey()) || '{}');
    return Object.keys(state.cloudRecords || {}).length > 0 ? state.cloudRecords : localRec;
  } catch (e) {
    return state.cloudRecords || {};
  }
}

async function saveStudyRecord(unitKey, lessonId, score, status, extraMeta = {}) {
  const records = getStudyRecords();
  if (!records[unitKey]) records[unitKey] = {};
  records[unitKey][lessonId] = {
    score,
    status,
    date: new Date().toLocaleDateString(),
    ...extraMeta
  };
  state.cloudRecords = records;
  localStorage.setItem(getCurrentRecordKey(), JSON.stringify(records));

  const targetDocId = state.docId || state.studentName;
  if (db && targetDocId) {
    try {
      await db.collection('students').doc(targetDocId).set({
        records: records,
        updatedAt: new Date().toLocaleString(),
        updatedTimestamp: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      updateCloudBadge(true);
    } catch (e) {
      console.warn("클라우드 기록 저장 실패:", e);
    }
  }
}

function updateUserBadge() {
  const badge = document.getElementById('user-badge');
  const label = document.getElementById('user-name-label');
  if (!badge || !label) return;
  if (state.studentName) {
    badge.style.display = 'inline-flex';
    const modeTag = state.accountType === 'tester' ? ' 🧪테스터(전체학년)' : '';
    label.innerText = `👦 ${state.studentName} (${state.studentGrade}-${state.studentSem}${modeTag})`;
  } else {
    badge.style.display = 'none';
  }
}

function goHomeByRole() {
  if (!state.studentName) {
    window.location.href = 'index.html';
    return;
  }
  if (state.isAllAccess) {
    showGradeSelect();
  } else {
    showUnitSelect(state.studentGrade, state.studentSem);
  }
}

// app.js가 처음 켜질 때 showAuthScreen()을 호출하면, 로그인 창을 띄우지 않고 정문 출입증을 확인해 바로 공부 화면으로 직행!
async function showAuthScreen() {
  hideApiBtnInStudy();

  let session = null;
  try {
    session = JSON.parse(localStorage.getItem('MATH_CURRENT_SESSION') || 'null');
  } catch (e) {}

  // 출입증이 없으면 정문(index.html)으로 즉시 이동
  if (!session || (!session.docId && !session.name)) {
    window.location.replace('index.html');
    return;
  }

  state.docId = session.docId || session.name;
  state.parentEmail = session.parentEmail || '';
  state.studentName = session.name;
  state.studentPin = session.pin || '';
  state.studentGrade = session.grade || '6';
  state.studentSem = session.semester || '1';
  state.accountType = session.accountType || 'student';
  state.isAllAccess = Boolean(session.isAllAccess);

  // 클라우드에서 최신 상태(정지/만료 여부) 및 학습 기록 실시간 동기화
  if (db && state.docId) {
    try {
      const docSnap = await db.collection('students').doc(state.docId).get();
      if (!docSnap.exists) {
        alert("⚠️ 계정 정보를 찾을 수 없습니다. 다시 로그인해 주세요.");
        localStorage.removeItem('MATH_CURRENT_SESSION');
        window.location.replace('index.html');
        return;
      }
      const cData = docSnap.data();

      // 마스터가 정지시켰거나 기간이 만료되었는지 한 번 더 검증
      const todayYMD = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
      if (cData.status === 'pending' || cData.status === 'blocked') {
        alert("⛔ 현재 이용이 제한되었거나 승인 대기 중인 계정입니다.");
        localStorage.removeItem('MATH_CURRENT_SESSION');
        window.location.replace('index.html');
        return;
      }
      if (!cData.isUnlimited && cData.expireDate && todayYMD > cData.expireDate) {
        alert(`📅 이용 기간(${cData.expireDate}까지)이 만료되었습니다.`);
        localStorage.removeItem('MATH_CURRENT_SESSION');
        window.location.replace('index.html');
        return;
      }

      state.cloudRecords = cData.records || {};
      localStorage.setItem(getCurrentRecordKey(), JSON.stringify(state.cloudRecords));
      updateCloudBadge(true);
    } catch (e) {
      console.warn("클라우드 동기화 실패:", e);
    }
  }

  updateUserBadge();
  routeAfterLogin();
}

function routeAfterLogin() {
  if (state.isAllAccess) {
    showGradeSelect();
    return;
  }
  const targetKey = `${state.studentGrade}-${state.studentSem}`;
  if (typeof MATH_DB !== 'undefined' && MATH_DB.units && MATH_DB.units[targetKey]) {
    showUnitSelect(state.studentGrade, state.studentSem);
  } else {
    state.studentGrade = '6';
    state.studentSem = '1';
    updateUserBadge();
    showUnitSelect('6', '1');
  }
}

function logoutStudent() {
  if (!confirm(`${state.studentName} 학생, 공부를 마치고 처음 로그인 화면으로 돌아갈까요?`)) return;
  localStorage.removeItem('MATH_CURRENT_SESSION');
  window.location.href = 'index.html';
}

async function unlockAllLessonsForDemo() {
  for (const code of MATH_DB.lessons[state.unitKey].lessonOrder) {
    await saveStudyRecord(state.unitKey, code, 100, "완료");
  }
  showLessonSelect(state.grade, state.semester, state.unit);
}

async function clearUnitRecords() {
  if (confirm(`${state.studentName} 학생의 현재 단원 학습 도장 및 클라우드 기록을 모두 초기화할까요?`)) {
    const records = getStudyRecords();
    delete records[state.unitKey];
    state.cloudRecords = records;
    localStorage.setItem(getCurrentRecordKey(), JSON.stringify(records));
    const targetDocId = state.docId || state.studentName;
    if (db && targetDocId) {
      try {
        await db.collection('students').doc(targetDocId).set({ records }, { merge: true });
      } catch (e) {}
    }
    showLessonSelect(state.grade, state.semester, state.unit);
  }
}

// ==========================================
// 🔑 3. 클라우드 API 키 자동 로드 (학생 공부 화면에서는 버튼 완전 숨김)
// ==========================================
let cloudApiKey = '';

function getSavedApiKey() {
  return (
    cloudApiKey ||
    state.geminiApiKey ||
    state.apiKey ||
    localStorage.getItem('GEMINI_API_KEY') ||
    localStorage.getItem('MATH_GEMINI_API_KEY') ||
    ''
  ).trim();
}

async function loadCloudApiKey() {
  hideApiBtnInStudy();
  if (!db) return;
  try {
    const doc = await db.collection('settings').doc('gemini').get();
    if (doc.exists && doc.data().apiKey) {
      cloudApiKey = doc.data().apiKey.trim();
      state.geminiApiKey = cloudApiKey;
      state.apiKey = cloudApiKey;
      localStorage.setItem('GEMINI_API_KEY', cloudApiKey);
    }
  } catch (e) {
    console.warn("클라우드 API 키 불러오기 실패:", e);
  }
}

function hideApiBtnInStudy() {
  const btn = document.getElementById('api-btn') || document.getElementById('api-key-btn');
  if (btn) btn.style.display = 'none';
}

function updateApiBtnBadge() {
  hideApiBtnInStudy();
}