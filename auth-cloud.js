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
  const lessonRecord = {
    score,
    status,
    date: new Date().toLocaleDateString(),
    ...extraMeta
  };
  records[unitKey][lessonId] = lessonRecord;
  state.cloudRecords = records;
  localStorage.setItem(getCurrentRecordKey(), JSON.stringify(records));

  const targetDocId = state.docId || state.studentName;
  if (db && targetDocId) {
    try {
      await db.collection('students').doc(targetDocId).set({
        records: {
          [unitKey]: {
            [lessonId]: lessonRecord
          }
        },
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

// ★ 인증 통과 시 true, 실패 시 false를 반환하여 미인증 상태에서 API 키가 로드되지 않도록 방어!
async function showAuthScreen() {
  hideApiBtnInStudy();

  let session = null;
  try {
    session = JSON.parse(localStorage.getItem('MATH_CURRENT_SESSION') || 'null');
  } catch (e) {}

  if (!session || (!session.docId && !session.name) || !db) {
    window.location.replace('index.html');
    return false;
  }

  state.docId = session.docId || session.name;
  state.parentEmail = session.parentEmail || '';
  state.studentName = session.name;
  state.studentGrade = session.grade || '6';
  state.studentSem = session.semester || '1';
  state.accountType = 'student';
  state.isAllAccess = false;

  try {
    const docSnap = await db.collection('students').doc(state.docId).get();
    if (!docSnap.exists) {
      alert("⚠️ 계정 정보를 찾을 수 없습니다. 다시 로그인해 주세요.");
      localStorage.removeItem('MATH_CURRENT_SESSION');
      window.location.replace('index.html');
      return false;
    }
    const cData = docSnap.data();

    const todayYMD = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;
    if (cData.status === 'pending' || cData.status === 'blocked') {
      alert("⛔ 현재 이용이 제한되었거나 승인 대기 중인 계정입니다.");
      localStorage.removeItem('MATH_CURRENT_SESSION');
      window.location.replace('index.html');
      return false;
    }
    if (!cData.isUnlimited && cData.expireDate && todayYMD > cData.expireDate) {
      alert(`📅 이용 기간(${cData.expireDate}까지)이 만료되었습니다.`);
      localStorage.removeItem('MATH_CURRENT_SESSION');
      window.location.replace('index.html');
      return false;
    }

    const isTesterAccount = (cData.accountType === 'tester' || /^tester\d+$/i.test(state.docId) || state.docId === 'MASTER_PREVIEW');
    state.studentName = cData.name || state.studentName;
    state.accountType = isTesterAccount ? 'tester' : 'student';
    state.isAllAccess = isTesterAccount;

    state.cloudRecords = cData.records || {};
    localStorage.setItem(getCurrentRecordKey(), JSON.stringify(state.cloudRecords));
    updateCloudBadge(true);
  } catch (e) {
    console.warn("클라우드 계정 검증 실패:", e);
    alert("⚠️ 클라우드 인증 서버와 연결할 수 없습니다. 인터넷 연결을 확인한 뒤 다시 로그인해 주세요.");
    window.location.replace('index.html');
    return false;
  }

  updateUserBadge();
  routeAfterLogin();
  return true;
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
    alert(`💡 ${state.studentGrade}학년 과정은 현재 오픈 준비 중이어서, 지금 바로 학습 가능한 5학년 1학기 과정으로 안내합니다!`);
    state.studentGrade = '5';
    state.studentSem = '1';
    updateUserBadge();
    showUnitSelect('5', '1');
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
        await db.collection('students').doc(targetDocId).update({
          [`records.${state.unitKey}`]: firebase.firestore.FieldValue.delete(),
          updatedAt: new Date().toLocaleString()
        });
      } catch (e) {}
    }
    showLessonSelect(state.grade, state.semester, state.unit);
  }
}

// ==========================================
// 🔑 3. 클라우드 API 키 자동 로드 (브라우저 localStorage에 키를 남기지 않고 메모리 변수에만 보관!)
// ==========================================
let cloudApiKey = '';

function getSavedApiKey() {
  return (
    cloudApiKey ||
    state.geminiApiKey ||
    state.apiKey ||
    ''
  ).trim();
}

async function loadCloudApiKey() {
  hideApiBtnInStudy();
  localStorage.removeItem('GEMINI_API_KEY');
  localStorage.removeItem('MATH_GEMINI_API_KEY');
  if (!db) return;
  try {
    const doc = await db.collection('settings').doc('gemini').get();
    if (doc.exists && doc.data().apiKey) {
      cloudApiKey = doc.data().apiKey.trim();
      state.geminiApiKey = cloudApiKey;
      state.apiKey = cloudApiKey;
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