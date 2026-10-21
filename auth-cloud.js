// ==========================================
// ☁️ 1. 전역 상태(state) 및 Firebase 클라우드 초기화
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
    console.warn("Firebase 초기화 실패 (로컬 저장소 모드로 작동):", e);
  }
  
  let state = {
    studentName: null,
    studentPin: null,
    studentGrade: '6',
    studentSem: '1',
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
    score: 0,
    wrongIndices: [],
    bRetryQueue: [],
    bResults: [],
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
    examWrongList: []
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
  
  // 유튜브 자동 자막 끄기(cc_load_policy=0) 및 알림 끄기(iv_load_policy=3) 적용
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
    document.getElementById('breadcrumb').innerText = `📍 현재 위치: ${text}`;
  }
  
  // ==========================================
  // 👦 2. 학생 회원가입 / 로그인 & 클라우드 기록 관리
  // ==========================================
  function getUsersDB() {
    try {
      return JSON.parse(localStorage.getItem('MATH_USERS_DB') || '{}');
    } catch (e) {
      return {};
    }
  }
  
  function saveUsersDB(users) {
    localStorage.setItem('MATH_USERS_DB', JSON.stringify(users));
  }
  
  function getCurrentRecordKey() {
    const userKey = state.studentName ? `${state.studentName}_${state.studentPin}` : 'GUEST';
    return `MATH_RECORDS_${userKey}`;
  }
  
  function getStudyRecords() {
    try {
      const localRec = JSON.parse(localStorage.getItem(getCurrentRecordKey()) || '{}');
      return Object.keys(state.cloudRecords || {}).length > 0 ? state.cloudRecords : localRec;
    } catch (e) {
      return state.cloudRecords || {};
    }
  }
  
  async function saveStudyRecord(unitKey, lessonId, score, status) {
    const records = getStudyRecords();
    if (!records[unitKey]) records[unitKey] = {};
    records[unitKey][lessonId] = { score, status, date: new Date().toLocaleDateString() };
    state.cloudRecords = records;
    localStorage.setItem(getCurrentRecordKey(), JSON.stringify(records));
  
    if (db && state.studentName) {
      try {
        await db.collection('students').doc(state.studentName).set({
          records: records,
          updatedAt: new Date().toLocaleString()
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
      const modeTag = state.isAllAccess ? ' 🌟전체열람' : '';
      label.innerText = `👦 ${state.studentName} (${state.studentGrade}-${state.studentSem}${modeTag})`;
    } else {
      badge.style.display = 'none';
    }
  }
  
  function goHomeByRole() {
    if (!state.studentName) {
      showAuthScreen('login');
      return;
    }
    if (state.isAllAccess) {
      showGradeSelect();
    } else {
      showUnitSelect(state.studentGrade, state.studentSem);
    }
  }
  
  function showAuthScreen(mode) {
    const hasUsers = Object.keys(getUsersDB()).length > 0;
    state.authMode = mode || (hasUsers ? 'login' : 'signup');
  
    document.getElementById('home-btn').style.display = 'none';
    document.getElementById('unit-btn').style.display = 'none';
    document.getElementById('step-badge').innerText = "학생 로그인 / 회원가입";
    document.getElementById('score-board').innerText = "☁️ 클라우드 학습방 연동";
    setBreadcrumb("학생 로그인 및 학년 설정");
    updateUserBadge();
    updateApiBtnBadge();
  
    const isLogin = (state.authMode === 'login');
    const titleText = isLogin ? "🔑 기존 학생 로그인하기" : "✨ 새 학생 회원가입";
    const guideText = "이름과 학년·학기, 비밀번호 4자리를 입력하면 <b>클라우드에 내 기록이 저장되고 바로 내 단원</b>으로 들어가요!<br>(💡 비밀번호 뒤에 <b>*</b>을 붙여 <code>1234*</code>처럼 입력하면 <b>전체 학년 선행모드 및 전체 학생 현황판</b>이 열려요!)";
    const btnText = isLogin ? "🚀 내 단원 목록으로 바로 입장하기 👉" : "🎉 클라우드 등록 완료하고 바로 입장 👉";
  
    document.getElementById('app-content').innerHTML = `
      <h2>반가워요! 나만의 클라우드 수학 학습방에 입장해 볼까요?</h2>
      <div class="goal-box">${guideText}</div>
      <div class="auth-box">
        <div class="auth-tabs">
          <button type="button" class="auth-tab ${isLogin ? 'active' : ''}" onclick="showAuthScreen('login')">🔑 기존 학생 로그인</button>
          <button type="button" class="auth-tab ${!isLogin ? 'active' : ''}" onclick="showAuthScreen('signup')">✨ 새 학생 회원가입</button>
        </div>
        <h3 style="margin-top:0; color:#1e3a8a;">${titleText}</h3>
        
        <label class="auth-label">👦 학생 이름</label>
        <input type="text" id="auth-name" class="text-input" placeholder="예: Yoon" oninput="autoFillUserGrade()" onkeydown="if(event.key==='Enter') document.getElementById('auth-pin').focus()">
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:16px;">
          <div>
            <label class="auth-label">🎒 몇 학년인가요?</label>
            <select id="auth-grade" class="text-input" style="margin-bottom:0; padding:12px; font-weight:bold; color:#1e3a8a;">
              <option value="6" selected>초등학교 6학년</option>
              <option value="5">초등학교 5학년</option>
              <option value="4">초등학교 4학년</option>
              <option value="3">초등학교 3학년</option>
              <option value="2">초등학교 2학년</option>
              <option value="1">초등학교 1학년</option>
            </select>
          </div>
          <div>
            <label class="auth-label">📘 몇 학기인가요?</label>
            <select id="auth-sem" class="text-input" style="margin-bottom:0; padding:12px; font-weight:bold; color:#1e3a8a;">
              <option value="1" selected>1학기</option>
              <option value="2">2학기</option>
            </select>
          </div>
        </div>
  
        <label class="auth-label">🔢 숫자 비밀번호 4자리 (전체 학년·교사 현황판은 뒤에 * 추가)</label>
        <input type="password" maxlength="5" id="auth-pin" class="text-input" placeholder="예: 1234 (또는 선행·관리모드 1234*)" onkeydown="if(event.key==='Enter') handleAuthSubmit()">
        
        <button type="button" class="btn" id="auth-submit-btn" onclick="handleAuthSubmit()">${btnText}</button>
        <div id="auth-msg" class="auth-msg"></div>
      </div>
    `;
  
    setTimeout(() => {
      const nameInp = document.getElementById('auth-name');
      if (nameInp) nameInp.focus();
    }, 50);
  }
  
  function autoFillUserGrade() {
    const name = (document.getElementById('auth-name').value || '').trim();
    const users = getUsersDB();
    if (users[name]) {
      const gEl = document.getElementById('auth-grade');
      const sEl = document.getElementById('auth-sem');
      if (gEl && users[name].grade) gEl.value = users[name].grade;
      if (sEl && users[name].semester) sEl.value = users[name].semester;
    }
  }
  
  async function handleAuthSubmit() {
    const name = (document.getElementById('auth-name').value || '').trim();
    const rawPin = (document.getElementById('auth-pin').value || '').trim();
    const selGrade = document.getElementById('auth-grade') ? document.getElementById('auth-grade').value : '6';
    const selSem = document.getElementById('auth-sem') ? document.getElementById('auth-sem').value : '1';
    const msgEl = document.getElementById('auth-msg');
    const submitBtn = document.getElementById('auth-submit-btn');
  
    if (name.length < 2) {
      msgEl.innerText = "⚠️ 학생 이름을 두 글자 이상 입력해 주세요!";
      return;
    }
  
    const isStarMode = rawPin.endsWith('*');
    const cleanPin = isStarMode ? rawPin.slice(0, -1) : rawPin;
  
    if (!/^\d{4}$/.test(cleanPin)) {
      msgEl.innerText = "⚠️ 비밀번호는 숫자 4자리(예: 1234 또는 1234*)로 입력해 주세요!";
      return;
    }
  
    if (submitBtn) submitBtn.innerText = "☁️ 클라우드 학습방 확인 중...";
    const users = getUsersDB();
  
    if (db) {
      try {
        const docRef = db.collection('students').doc(name);
        const docSnap = await docRef.get();
  
        if (docSnap.exists) {
          const cloudUser = docSnap.data();
          if (cloudUser.pin !== cleanPin) {
            msgEl.innerText = "⚠️ 숫자 비밀번호 4자리가 맞지 않아요. 다시 확인해 볼까요?";
            if (submitBtn) submitBtn.innerText = "🚀 내 단원 목록으로 바로 입장하기 👉";
            return;
          }
          state.cloudRecords = cloudUser.records || {};
          await docRef.set({ grade: selGrade, semester: selSem, updatedAt: new Date().toLocaleString() }, { merge: true });
          users[name] = { pin: cleanPin, grade: selGrade, semester: selSem };
          saveUsersDB(users);
          localStorage.setItem(`MATH_RECORDS_${name}_${cleanPin}`, JSON.stringify(state.cloudRecords));
          updateCloudBadge(true);
          loginSuccess(name, cleanPin, selGrade, selSem, isStarMode, false);
          return;
        } else {
          const localExistingRec = JSON.parse(localStorage.getItem(`MATH_RECORDS_${name}_${cleanPin}`) || '{}');
          state.cloudRecords = localExistingRec;
          await docRef.set({
            name: name,
            pin: cleanPin,
            grade: selGrade,
            semester: selSem,
            records: localExistingRec,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
          });
          users[name] = { pin: cleanPin, grade: selGrade, semester: selSem };
          saveUsersDB(users);
          updateCloudBadge(true);
          loginSuccess(name, cleanPin, selGrade, selSem, isStarMode, true);
          return;
        }
      } catch (e) {
        console.warn("Firebase 통신 실패, 로컬 모드로 전환:", e);
        updateCloudBadge(false);
      }
    }
  
    if (!users[name]) {
      users[name] = { pin: cleanPin, grade: selGrade, semester: selSem, createdAt: new Date().toLocaleDateString() };
      saveUsersDB(users);
      loginSuccess(name, cleanPin, selGrade, selSem, isStarMode, true);
      return;
    }
  
    if (users[name].pin !== cleanPin) {
      msgEl.innerText = "⚠️ 숫자 비밀번호 4자리가 맞지 않아요. 다시 확인해 볼까요?";
      return;
    }
  
    users[name].grade = selGrade;
    users[name].semester = selSem;
    saveUsersDB(users);
    loginSuccess(name, cleanPin, selGrade, selSem, isStarMode, false);
  }
  
  function loginSuccess(name, pin, grade, semester, isAllAccess, isNewUser) {
    state.studentName = name;
    state.studentPin = pin;
    state.studentGrade = grade || '6';
    state.studentSem = semester || '1';
    state.isAllAccess = Boolean(isAllAccess);
  
    localStorage.setItem('MATH_CURRENT_SESSION', JSON.stringify({
      name: state.studentName,
      pin: state.studentPin,
      grade: state.studentGrade,
      semester: state.studentSem,
      isAllAccess: state.isAllAccess
    }));
  
    updateUserBadge();
    updateApiBtnBadge();
  
    if (state.isAllAccess) {
      alert(`🌟 [${name}님 - 선행·전체 열람 및 교사 현황판 모드]\n전체 학년 메뉴와 클라우드 전체 학생 학습 현황판이 열립니다!`);
    } else if (isNewUser) {
      alert(`🎉 환영합니다, ${name} 학생!\n클라우드 학습방이 생성되었으며 [${state.studentGrade}학년 ${state.studentSem}학기] 단원으로 바로 이동합니다!`);
    }
  
    routeAfterLogin();
  }
  
  function routeAfterLogin() {
    if (state.isAllAccess) {
      showGradeSelect();
      return;
    }
    const targetKey = `${state.studentGrade}-${state.studentSem}`;
    if (MATH_DB.units[targetKey]) {
      showUnitSelect(state.studentGrade, state.studentSem);
    } else {
      alert(`현재 ${state.studentGrade}학년 ${state.studentSem}학기 과정은 오픈 준비 중이어서, 학습 가능한 [6학년 1학기] 단원 목록으로 바로 이동합니다!`);
      state.studentGrade = '6';
      state.studentSem = '1';
      updateUserBadge();
      showUnitSelect('6', '1');
    }
  }
  
  function logoutStudent() {
    if (!confirm(`${state.studentName} 학생, 로그아웃하고 처음 로그인 화면으로 돌아갈까요?`)) return;
    state.studentName = null;
    state.studentPin = null;
    state.isAllAccess = false;
    state.cloudRecords = {};
    localStorage.removeItem('MATH_CURRENT_SESSION');
    updateUserBadge();
    updateApiBtnBadge();
    showAuthScreen('login');
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
      if (db && state.studentName) {
        try {
          await db.collection('students').doc(state.studentName).set({ records }, { merge: true });
        } catch (e) {}
      }
      showLessonSelect(state.grade, state.semester, state.unit);
    }
  }
  
  // ==========================================
  // 🔑 3. 클라우드 연동 API 키 관리 (학생 기기 자동 배포)
  // ==========================================
  let cloudApiKey = '';
  
  function getSavedApiKey() {
    return (cloudApiKey || localStorage.getItem('GEMINI_API_KEY') || '').trim();
  }
  
  async function loadCloudApiKey() {
    if (!db) return;
    try {
      const doc = await db.collection('settings').doc('gemini').get();
      if (doc.exists && doc.data().apiKey) {
        cloudApiKey = doc.data().apiKey.trim();
        localStorage.setItem('GEMINI_API_KEY', cloudApiKey);
      } else {
        const localKey = (localStorage.getItem('GEMINI_API_KEY') || '').trim();
        if (localKey) {
          cloudApiKey = localKey;
          await db.collection('settings').doc('gemini').set({
            apiKey: localKey,
            updatedAt: new Date().toLocaleString()
          });
        }
      }
    } catch (e) {
      console.warn("클라우드 API 키 불러오기 실패:", e);
    }
    updateApiBtnBadge();
  }
  
  function updateApiBtnBadge() {
    const btn = document.getElementById('api-key-btn');
    if (!btn) return;
    const hasKey = Boolean(getSavedApiKey());
  
    if (hasKey && state.studentName && !state.isAllAccess) {
      btn.style.display = 'none';
      return;
    }
  
    btn.style.display = 'inline-block';
    if (hasKey) {
      btn.innerText = "⚙️ AI 키 자동연결됨 ✅";
      btn.style.background = "#0f766e";
    } else {
      btn.innerText = "⚙️ API 키 설정 필요";
      btn.style.background = "#b45309";
    }
  }
  
  function openApiModal() {
    document.getElementById('api-key-input').value = getSavedApiKey();
    document.getElementById('api-modal').style.display = 'flex';
  }
  
  function closeApiModal() {
    document.getElementById('api-modal').style.display = 'none';
  }
  
  async function saveApiKey() {
    const key = document.getElementById('api-key-input').value.trim();
    if (!key) {
      cloudApiKey = '';
      localStorage.removeItem('GEMINI_API_KEY');
      if (db) {
        try { await db.collection('settings').doc('gemini').delete(); } catch (e) {}
      }
      alert('API 키가 삭제되었습니다.');
    } else {
      cloudApiKey = key;
      localStorage.setItem('GEMINI_API_KEY', key);
      if (db) {
        try {
          await db.collection('settings').doc('gemini').set({
            apiKey: key,
            updatedAt: new Date().toLocaleString()
          });
          alert('✅ 제미나이 API 키가 클라우드에 저장되었습니다!\n이제 모든 학생의 스마트폰과 태블릿에서 키 입력 없이 AI 선생님이 바로 작동합니다!');
        } catch (e) {
          alert('✅ 기기에 API 키가 저장되었습니다!');
        }
      } else {
        alert('✅ 제미나이 API 키가 저장되었습니다!');
      }
    }
    updateApiBtnBadge();
    closeApiModal();
  }