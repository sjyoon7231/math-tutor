// ==========================================
// 🏫 메인 내비게이션, 단원 테스트 및 5단계 수업 흐름
// ==========================================
async function initApp() {
    await loadCloudApiKey();
    updateApiBtnBadge();
    updateCloudBadge(Boolean(db));
    if (typeof MATH_DB === 'undefined') {
      document.getElementById('app-content').innerHTML = `<div class="error-box"><h3>⚠️ data.js 파일을 불러오지 못했습니다!</h3></div>`;
      return;
    }
  
    try {
      const savedSession = JSON.parse(localStorage.getItem('MATH_CURRENT_SESSION') || 'null');
      if (savedSession && savedSession.name && savedSession.pin) {
        state.studentName = savedSession.name;
        state.studentPin = savedSession.pin;
        state.studentGrade = savedSession.grade || '6';
        state.studentSem = savedSession.semester || '1';
        state.isAllAccess = Boolean(savedSession.isAllAccess);
  
        if (db) {
          try {
            const snap = await db.collection('students').doc(state.studentName).get();
            if (snap.exists) {
              state.cloudRecords = snap.data().records || {};
              updateCloudBadge(true);
            }
          } catch (e) {}
        }
  
        updateUserBadge();
        updateApiBtnBadge();
        routeAfterLogin();
        return;
      }
    } catch (e) {}
  
    showAuthScreen();
  }
  
  async function showGradeSelect() {
    if (!state.studentName) {
      showAuthScreen('login');
      return;
    }
    if (!state.isAllAccess) {
      showUnitSelect(state.studentGrade, state.studentSem);
      return;
    }
  
    document.getElementById('home-btn').style.display = 'none';
    document.getElementById('unit-btn').style.display = 'none';
    document.getElementById('step-badge').innerText = "🌟 전체 학년 & 클라우드 현황판";
    document.getElementById('score-board').innerText = "선행·관리자 모드";
    setBreadcrumb("전체 학년 선택 (*선행·관리자 모드)");
  
    const cards = MATH_DB.grades.map(g => g.active
      ? `<div class="select-card" onclick="showSemesterSelect('${g.id}')"><div class="card-title">🎒 ${g.name}</div><div class="card-sub">학습 가능 👉</div></div>`
      : `<div class="select-card locked" onclick="alert('현재 6학년 과정부터 오픈되어 있습니다!')"><div class="card-title">🔒 ${g.name}</div><div class="card-sub">오픈 준비 중</div></div>`
    ).join('');
  
    document.getElementById('app-content').innerHTML = `
      <h2>🌟 [선행·관리 모드] 몇 학년 수학을 공부할까요?</h2>
      <div class="goal-box">비밀번호 뒤에 <b>*</b>을 붙여 입장하셨습니다! 모든 학년 메뉴 탐색과 아래 <b>클라우드 전체 학생 학습 현황</b>을 확인할 수 있어요.</div>
      <div class="card-grid">${cards}</div>
      <div id="cloud-admin-board" style="margin-top:28px;"></div>
    `;
  
    if (db) {
      try {
        const snap = await db.collection('students').get();
        const rows = [];
        snap.forEach(doc => {
          const d = doc.data();
          const uRec = (d.records && d.records['6-1-1']) ? d.records['6-1-1'] : {};
          const doneCnt = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6"].filter(c => uRec[c]).length;
          const examScore = uRec['UNIT_EXAM'] ? `${uRec['UNIT_EXAM'].score}점` : '미응시';
          rows.push(`<tr><td><b>${d.name || doc.id}</b></td><td>${d.grade || '6'}-${d.semester || '1'}</td><td>${doneCnt} / 6 차시</td><td>${examScore}</td><td>${d.updatedAt || '-'}</td></tr>`);
        });
        const boardEl = document.getElementById('cloud-admin-board');
        if (boardEl) {
          boardEl.innerHTML = `
            <h3>☁️ 클라우드 전체 학생 실시간 학습 현황 (${rows.length}명)</h3>
            <table class="cloud-table">
              <thead><tr><th>학생 이름</th><th>학년-학기</th><th>6-1-1 진도</th><th>단원 테스트</th><th>최근 학습 시각</th></tr></thead>
              <tbody>${rows.join('') || '<tr><td colspan="5">아직 등록된 학생이 없습니다.</td></tr>'}</tbody>
            </table>
          `;
        }
      } catch (e) {}
    }
  }
  
  function showSemesterSelect(gradeId) {
    state.grade = gradeId;
    if (!state.isAllAccess) {
      showUnitSelect(state.studentGrade, state.studentSem);
      return;
    }
    document.getElementById('home-btn').style.display = 'inline-block';
    document.getElementById('unit-btn').style.display = 'none';
    document.getElementById('step-badge').innerText = `${gradeId}학년 | 학기 선택`;
    setBreadcrumb(`${gradeId}학년 > 학기 선택`);
  
    const cards = (MATH_DB.semesters[gradeId] || []).map(s => s.active
      ? `<div class="select-card" onclick="showUnitSelect('${gradeId}', '${s.id}')"><div class="card-title">📘 ${gradeId}학년 ${s.name}</div><div class="card-sub">단원 보기 👉</div></div>`
      : `<div class="select-card locked" onclick="alert('1학기 과정을 먼저 학습할 수 있습니다!')"><div class="card-title">🔒 ${gradeId}학년 ${s.name}</div><div class="card-sub">오픈 준비 중</div></div>`
    ).join('');
  
    document.getElementById('app-content').innerHTML = `
      <h2>[${gradeId}학년] 몇 학기 과정을 공부할까요?</h2>
      <div class="card-grid">${cards}</div>
      <button class="btn btn-secondary" style="margin-top:20px;" onclick="showGradeSelect()">⬅️ 전체 학년 및 현황판으로 돌아가기</button>
    `;
  }
  
  function showUnitSelect(gradeId, semId) {
    state.grade = gradeId;
    state.semester = semId;
    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
      homeBtn.style.display = state.isAllAccess ? 'inline-block' : 'none';
      homeBtn.innerText = state.isAllAccess ? '🌟 전체 학년' : '🏠 내 단원 홈';
    }
    document.getElementById('unit-btn').style.display = 'none';
    document.getElementById('step-badge').innerText = `${gradeId}-${semId}학기 | 단원 선택`;
    setBreadcrumb(`${gradeId}학년 > ${semId}학기 > 단원 선택`);
  
    const itemsHTML = (MATH_DB.units[`${gradeId}-${semId}`] || []).map(u => u.active
      ? `<button class="menu-item" onclick="showLessonSelect('${gradeId}', '${semId}', '${u.id}')"><div><div class="menu-title">📗 ${u.name}</div><div class="menu-desc">${u.desc}</div></div><span class="menu-arrow">차시 선택 👉</span></button>`
      : `<button class="menu-item locked" onclick="alert('1단원을 먼저 마스터해 보세요!')"><div><div class="menu-title">🔒 ${u.name}</div><div class="menu-desc">${u.desc}</div></div><span class="menu-arrow">준비 중</span></button>`
    ).join('');
  
    const bottomNavHTML = state.isAllAccess
      ? `<button class="btn btn-secondary" style="margin-top:20px;" onclick="showGradeSelect()">🌟 전체 학년 및 학생 현황판으로 돌아가기</button>`
      : '';
  
    document.getElementById('app-content').innerHTML = `
      <h2>👋 ${state.studentName} 학생의 [${gradeId}학년 ${semId}학기] 단원 목록</h2>
      <div class="goal-box">☁️ 클라우드 학습방이 연결되었어요! <b>내 학년(${gradeId}학년 ${semId}학기) 단원</b>에서 오늘 공부할 단원을 클릭해 주세요.</div>
      <div class="menu-list">${itemsHTML}</div>
      ${bottomNavHTML}
    `;
  }
  
  function showLessonSelect(gradeId, semId, unitId) {
    state.grade = gradeId;
    state.semester = semId;
    state.unit = unitId;
    state.unitKey = `${gradeId}-${semId}-${unitId}`;
    document.getElementById('home-btn').style.display = 'inline-block';
    document.getElementById('unit-btn').style.display = 'none';
    document.getElementById('step-badge').innerText = `${gradeId}-${semId} | ${unitId}단원 목차`;
    document.getElementById('score-board').innerText = "차시를 선택해 수업을 시작하세요!";
    setBreadcrumb(`${gradeId}학년 > ${semId}학기 > ${unitId}단원 > 차시 선택`);
  
    const unitObj = MATH_DB.lessons[state.unitKey];
    const savedRecords = getStudyRecords()[state.unitKey] || {};
    let completedCount = 0;
  
    const itemsHTML = unitObj.lessonOrder.map(code => {
      const les = unitObj.items[code];
      const rec = savedRecords[code];
      let badgeHTML = `<span class="menu-arrow">수업 시작 👉</span>`;
      if (rec) {
        completedCount++;
        badgeHTML = rec.status === "완료"
          ? `<span class="complete-badge">✅ 학습 완료 (첫평가 ${rec.score}점)</span>`
          : `<span class="review-badge">⚠️ 보충 필요 (첫평가 ${rec.score}점)</span>`;
      }
      return `<button class="menu-item" onclick="startLesson('${code}')"><div><div class="menu-title">✏️ ${les.title}</div><div class="menu-desc">${les.goal}</div></div><div class="menu-right">${badgeHTML}</div></button>`;
    }).join('');
  
    const allCompleted = (completedCount === unitObj.lessonOrder.length);
    const examRec = savedRecords['UNIT_EXAM'];
    const examScoreBadge = examRec ? `<span class="complete-badge">🏆 최고 기록: ${examRec.score}점</span>` : `<span class="menu-arrow" style="color:#b45309;">시험장 입장 👉</span>`;
  
    const examBannerHTML = allCompleted
      ? `<button class="exam-banner unlocked" onclick="startUnitExam()"><div><div class="exam-title">🏆 1단원 최종 실력 점검: 단원 테스트 (실전 5문항)</div><div class="exam-sub">6개 차시를 모두 완주했어요! 힌트 없이 내 진짜 실력을 테스트해 보세요.</div></div><div class="menu-right">${examScoreBadge}</div></button>`
      : `<button class="exam-banner locked" onclick="alert('1-1 ~ 1-6차시 공부를 마치면 열립니다!\\n(아래 [⚡ 시연용: 전 차시 완료 찍기]를 누르면 바로 열립니다!)')"><div><div class="exam-title">🔒 1단원 최종 실력 점검: 단원 테스트 (실전 5문항)</div><div class="exam-sub">1-1 ~ 1-6차시 수업을 모두 완료하면 시험장이 열립니다! (현재 ${completedCount}/${unitObj.lessonOrder.length} 완료)</div></div><div class="menu-right"><span style="font-size:13px; font-weight:bold;">잠김 🔒</span></div></button>`;
  
    document.getElementById('app-content').innerHTML = `
      <h2>${unitObj.unitTitle} (${state.studentName} 학생의 클라우드 학습방)</h2>
      <div class="goal-box">오늘 공부할 차시를 골라 클릭해 주세요. 완료 도장은 클라우드에 실시간으로 자동 저장됩니다!</div>
      <div class="menu-list">${itemsHTML}</div>
      ${examBannerHTML}
      <div class="demo-bar">
        <button class="btn-reset" onclick="unlockAllLessonsForDemo()">⚡ 시연용: 전 차시 완료 찍기 (클라우드 즉시 반영)</button>
        <button class="btn-reset" onclick="clearUnitRecords()">🔄 시연용: 기록 전체 초기화</button>
      </div>
      <button class="btn btn-secondary" style="margin-top:20px;" onclick="showUnitSelect('${gradeId}', '${semId}')">⬅️ 단원 목록으로 돌아가기</button>
    `;
  }
  
  function startUnitExam() {
    const unitObj = MATH_DB.lessons[state.unitKey];
    state.examQuestions = ["1-1", "1-2", "1-3", "1-4", "1-5"].map((code, idx) => {
      const les = unitObj.items[code];
      const chosen = pick(les.step3A[idx % 3]);
      return { lessonCode: code, lessonTitle: les.title, q: chosen.q, num: chosen.num, den: chosen.den, sol: chosen.h2 };
    });
    state.examIdx = 0;
    state.examScore = 0;
    state.examWrongList = [];
    document.getElementById('unit-btn').style.display = 'inline-block';
    showUnitExamQuestion();
  }
  
  function showUnitExamQuestion() {
    const idx = state.examIdx;
    const total = state.examQuestions.length;
    const item = state.examQuestions[idx];
    state.currentItem = item;
    state.currentCheckFn = submitUnitExamAnswer;
    document.getElementById('step-badge').innerText = `🏆 단원 최종 테스트 (${idx + 1}/${total})`;
    document.getElementById('score-board').innerText = `실전 시험 중 (힌트·AI 없음 | 문항당 20점)`;
    setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > 단원 테스트 (${idx + 1}번)`);
  
    const demoSkipBtn = idx < total - 1
      ? `<div class="demo-bar"><button class="btn-reset" onclick="skipExamToLastForDemo()">⚡ 시연용: 1~4번 정답 처리하고 마지막 5번 문제로 점프</button></div>`
      : '';
    document.getElementById('app-content').innerHTML = `
      <h2>🏆 1단원 최종 테스트 (${idx + 1}번 / 총 ${total}문항)</h2>
      <div class="goal-box">실전 단원 테스트에서는 힌트와 AI 선생님이 제공되지 않습니다. (출제 범위: ${item.lessonCode}차시)</div>
      <div class="question-box">${item.q}</div>
      ${getFractionHTML('submitUnitExamAnswer')}
      <button class="btn" onclick="submitUnitExamAnswer()">답안 제출하기 (${idx + 1}/${total}) 👉</button>
      ${demoSkipBtn}
    `;
  }
  
  function submitUnitExamAnswer() {
    const item = state.examQuestions[state.examIdx];
    const wVal = document.getElementById('frac-w').value.trim();
    const nVal = document.getElementById('frac-n').value.trim();
    const dVal = document.getElementById('frac-d').value.trim();
    if (!nVal || !dVal) {
      alert('분자와 분모 칸에 숫자를 입력해 주세요!');
      return;
    }
  
    const status = checkFractionStatus(item.num, item.den);
    if (status === 'correct') {
      state.examScore += 20;
    } else {
      const myAnsStr = (wVal ? `${wVal}과 ` : '') + `${nVal}/${dVal}` + (status === 'unreduced' ? ' (약분 안 함)' : '');
      state.examWrongList.push({ qNum: state.examIdx + 1, lessonCode: item.lessonCode, q: item.q, myAns: myAnsStr, correctAns: `${item.num}/${item.den}`, sol: item.sol });
    }
    state.examIdx++;
    if (state.examIdx < state.examQuestions.length) showUnitExamQuestion();
    else showUnitExamResult();
  }
  
  function skipExamToLastForDemo() {
    state.examScore = 80;
    state.examWrongList = [];
    state.examIdx = state.examQuestions.length - 1;
    showUnitExamQuestion();
  }
  
  async function showUnitExamResult() {
    document.getElementById('step-badge').innerText = `🏆 단원 테스트 결과`;
    document.getElementById('score-board').innerText = `최종 점수: ${state.examScore}점 / 100점`;
    const prevRec = (getStudyRecords()[state.unitKey] || {})['UNIT_EXAM'];
    await saveStudyRecord(state.unitKey, 'UNIT_EXAM', prevRec ? Math.max(prevRec.score, state.examScore) : state.examScore, state.examScore >= 80 ? "완료" : "보충 필요");
  
    const wrongNotesHTML = state.examWrongList.length === 0
      ? `<div class="goal-box">🎉 완벽합니다, ${state.studentName} 학생! 5문제를 모두 맞혀 1단원 분수의 나눗셈을 마스터했습니다!</div>`
      : `<h3>📓 ${state.studentName} 학생의 오답 노트</h3>` + state.examWrongList.map(w => `<div class="wrong-note-card"><strong>❌ [${w.qNum}번 오답 노트] (${w.lessonCode}차시)</strong><br>• <strong>문제:</strong> ${w.q.replace(/\n/g, ' ')}<br>• <strong>내 답:</strong> <span style="color:#dc2626; font-weight:bold;">${w.myAns}</span> | <strong>정답:</strong> <span style="color:#166534; font-weight:bold;">${w.correctAns}</span><br>• <strong>풀이:</strong> ${w.sol}</div>`).join('');
  
    document.getElementById('app-content').innerHTML = `
      <h2>🏆 ${state.studentName} 학생의 1단원 최종 테스트 성적표 (☁️ 클라우드 저장 완료)</h2>
      <div class="report-card">
        <strong>- 학생 이름:</strong> ${state.studentName}<br>
        <strong>- 단원 테스트 점수:</strong> <span style="font-size:22px; color:#2563eb; font-weight:bold;">${state.examScore}점</span> / 100점 만점 (${5 - state.examWrongList.length}/5문항 정답)<br>
        <strong>- 종합 판정:</strong> ${state.examScore >= 80 ? '🌟 단원 마스터 통과!' : '💪 오답 노트 복습 권장'}
      </div>
      ${wrongNotesHTML}
      <button class="btn" onclick="startUnitExam()">🔄 새로운 문제로 단원 테스트 다시 보기</button>
      <button class="btn btn-secondary" onclick="showLessonSelect(state.grade, state.semester, state.unit)">📋 차시 선택 목록으로 돌아가기</button>
    `;
  }
  
  function startLesson(lessonId) {
    state.lessonId = lessonId;
    state.lessonData = MATH_DB.lessons[state.unitKey].items[lessonId];
    state.records = ['➖', '➖', '➖'];
    state.step3Answers = [];
    state.score = 0;
    state.wrongIndices = [];
    state.bRetryQueue = [];
    state.bResults = [];
    state.attempt = 1;
    document.getElementById('unit-btn').style.display = 'inline-block';
    if (state.lessonData.warmup) showWarmup();
    else showStep1Video();
  }
  
  function updateLessonHeader(stepText) {
    document.getElementById('step-badge').innerText = `${state.lessonId}차시 | ${stepText}`;
    document.getElementById('score-board').innerText = `3단계 기록: 1번(${state.records[0]}) 2번(${state.records[1]}) 3번(${state.records[2]})`;
    setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > ${state.lessonId}차시 (${stepText})`);
  }
  
  function getFractionHTML(enterCallbackName) {
    const keyAttr = enterCallbackName ? `onkeydown="if(event.key==='Enter') ${enterCallbackName}()"` : '';
    return `
      <div class="fraction-widget">
        <input type="number" inputmode="numeric" id="frac-w" class="whole-input" placeholder="자연수" ${keyAttr}>
        <div class="frac-col">
          <input type="number" inputmode="numeric" id="frac-n" class="frac-input" placeholder="분자" ${keyAttr}>
          <div class="frac-line"></div>
          <input type="number" inputmode="numeric" id="frac-d" class="frac-input" placeholder="분모" ${keyAttr}>
        </div>
      </div>
      <div class="helper-caption">* 진분수나 가분수로 답할 때는 앞의 '자연수' 칸은 비워두세요! (입력 후 Enter 가능)</div>
    `;
  }
  
  function checkFractionStatus(targetNum, targetDen) {
    const w = parseInt(document.getElementById('frac-w').value || "0", 10);
    const n = parseInt(document.getElementById('frac-n').value, 10);
    const d = parseInt(document.getElementById('frac-d').value, 10);
    if (isNaN(n) || isNaN(d) || d <= 0) return 'wrong';
    const totalNum = w * d + n;
    if (totalNum * targetDen === targetNum * d) {
      return (d === targetDen) ? 'correct' : 'unreduced';
    }
    return 'wrong';
  }
  
  function showWarmup() {
    updateLessonHeader("1단계: 지난 시간 복습");
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.warmup);
    state.currentCheckFn = checkWarmup;
    document.getElementById('app-content').innerHTML = `
      <h2>🔥 워밍업: 지난 시간 복습 퀴즈</h2>
      <div class="question-box">${state.currentItem.q}</div>
      ${getFractionHTML('checkWarmup')}
      <button class="btn" onclick="checkWarmup()">정답 확인하기</button>
      <div id="feedback-box" class="feedback"></div>
      ${getSmallStepHTML()}
      ${getAiTutorHTML()}
    `;
  }
  
  function checkWarmup() {
    const fb = document.getElementById('feedback-box');
    const status = checkFractionStatus(state.currentItem.num, state.currentItem.den);
    if (status === 'correct') {
      fb.className = "feedback correct";
      fb.innerHTML = `지난 시간 내용을 완벽하게 기억하고 있네요! 👍 (정답: <strong>${state.currentItem.num}/${state.currentItem.den}</strong>)<br><br><button class="btn" onclick="showStep1Video()">오늘의 개념 보러 가기 👉</button>`;
    } else if (status === 'unreduced') {
      fb.className = "feedback hint";
      fb.innerText = "💡 계산은 정확해요! 더 이상 나누어지지 않는 '기약분수'로 약분해서 다시 적어볼까요?";
    } else {
      fb.className = "feedback hint";
      if (state.attempt === 1) {
        fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
        state.attempt++;
      } else {
        fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 열린 [1단계 도우미: 스몰 스텝 빈칸]을 차례대로 채워보세요! (빈칸도 틀리면 AI 선생님이 나타납니다!)`;
        state.attempt++;
        activateSmallStepIfNeeded();
      }
    }
  }
  
  function showStep1Video() {
    updateLessonHeader("1단계: 개념 영상");
    const cleanUrl = getCleanYoutubeEmbedUrl(state.lessonData.videoUrl);
    const mediaHTML = cleanUrl
      ? `<div class="video-box"><div class="yt-shield-top"></div><div class="yt-shield-bottom"></div><iframe src="${cleanUrl}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="video-notice">💡 영상 가운데를 눌러 재생하세요!</div>`
      : `<div class="summary-card">${state.lessonData.summaryCard}</div>`;
    const btnText = cleanUrl ? "영상을 끝까지 다 봤어요! (개념 퀴즈 풀기) 👉" : "핵심 약속 3가지를 다 읽었어요! (종합 퀴즈 풀기) 👉";
    document.getElementById('app-content').innerHTML = `
      <h2>${state.lessonData.title}</h2>
      <div class="goal-box"><strong>오늘의 학습 목표:</strong> ${state.lessonData.goal}</div>
      ${mediaHTML}
      <button class="btn" onclick="showStep1Quiz()">${btnText}</button>
    `;
  }
  
  function showStep1Quiz() {
    updateLessonHeader("1단계: 개념 확인 퀴즈");
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.step1Quiz);
    state.currentCheckFn = null;
    const btns = state.currentItem.choices.map((c, idx) => `<button class="choice-btn" onclick="checkStep1Quiz('${idx + 1}')">${c}</button>`).join('');
    document.getElementById('app-content').innerHTML = `
      <h2>개념 확인 객관식 퀴즈</h2>
      <div class="question-box">${state.currentItem.q}</div>
      <div class="choice-grid">${btns}</div>
      <div id="feedback-box" class="feedback"></div>
      ${getAiTutorHTML()}
    `;
  }
  
  function checkStep1Quiz(choice) {
    const fb = document.getElementById('feedback-box');
    const ansText = state.currentItem.choices[parseInt(state.currentItem.ans, 10) - 1] || `${state.currentItem.ans}번`;
    if (choice === state.currentItem.ans) {
      fb.className = "feedback correct";
      fb.innerHTML = `정답이에요! (정답: <strong>${ansText}</strong>)<br><br><button class="btn" onclick="showStep2_1()">2단계 교과서 문제로 이동하기 👉</button>`;
    } else {
      fb.className = "feedback hint";
      if (state.attempt === 1) {
        fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
        state.attempt++;
      } else {
        fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 소크라테스 AI 선생님이 나타났어요! 대화를 통해 정답 보기를 찾아보세요!`;
        state.attempt++;
        openAiTutorForStep(`학생이 객관식 문제에서 "${choice}번"을 골라 2번 틀렸습니다. 정답 번호를 직접 말하지 말고 쉬운 질문으로 유도해 주세요!`);
      }
    }
  }
  
  function showStep2_1() {
    updateLessonHeader("2단계: 함께 풀기 (1/2)");
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.step2_1);
    state.currentCheckFn = checkStep2_1;
    document.getElementById('app-content').innerHTML = `
      <h2>교과서 본문 문제 1 (함께 풀기)</h2>
      <div class="question-box">${state.currentItem.q}</div>
      <input type="text" inputmode="numeric" id="ans-input" class="text-input" placeholder="빈칸 ①에 들어갈 숫자를 입력하세요" onkeydown="if(event.key==='Enter') checkStep2_1()">
      <button class="btn" onclick="checkStep2_1()">정답 확인하기</button>
      <div id="feedback-box" class="feedback"></div>
      ${getAiTutorHTML()}
    `;
  }
  
  function checkStep2_1() {
    const val = document.getElementById('ans-input').value.trim().replace(/[^0-9]/g, '');
    const fb = document.getElementById('feedback-box');
    if (val === state.currentItem.ans) {
      fb.className = "feedback correct";
      fb.innerHTML = `정답이에요! 빈칸 ①에 들어갈 수는 <strong>${state.currentItem.ans}</strong>입니다.<br><br><button class="btn" onclick="showStep2_2()">다음 문제(혼자 풀기)로 이동 👉</button>`;
    } else {
      fb.className = "feedback hint";
      if (state.attempt === 1) {
        fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
        state.attempt++;
      } else {
        fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 나타난 소크라테스 AI 선생님과 함께 빈칸 ①에 들어갈 수를 찾아보세요!`;
        state.attempt++;
        openAiTutorForStep(`학생이 빈칸 ① 채우기 문제에서 "${val || '빈칸'}"이라고 적어 2번 틀렸습니다. 정답(${state.currentItem.ans})을 직접 말하지 말고 쉬운 질문으로 유도해 주세요!`);
      }
    }
  }
  
  function showStep2_2() {
    updateLessonHeader("2단계: 혼자 풀기 (2/2)");
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.step2_2);
    state.currentCheckFn = checkStep2_2;
    document.getElementById('app-content').innerHTML = `
      <h2>교과서 본문 문제 2 (혼자 풀기)</h2>
      <div class="question-box">${state.currentItem.q}</div>
      ${getFractionHTML('checkStep2_2')}
      <button class="btn" onclick="checkStep2_2()">정답 확인하기</button>
      <div id="feedback-box" class="feedback"></div>
      ${getSmallStepHTML()}
      ${getAiTutorHTML()}
    `;
  }
  
  function checkStep2_2() {
    const fb = document.getElementById('feedback-box');
    const status = checkFractionStatus(state.currentItem.num, state.currentItem.den);
    if (status === 'correct') {
      fb.className = "feedback correct";
      fb.innerHTML = `완벽해요! (정답: <strong>${state.currentItem.num}/${state.currentItem.den}</strong>)<br><br><button class="btn" onclick="showStep3(0)">3단계 실력 평가 시작하기 👉</button>`;
    } else if (status === 'unreduced') {
      fb.className = "feedback hint";
      fb.innerText = "💡 계산 원리는 완벽해요! 하지만 '기약분수'로 약분해서 다시 적어보세요!";
    } else {
      fb.className = "feedback hint";
      if (state.attempt === 1) {
        fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
        state.attempt++;
      } else {
        fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 열린 [1단계 도우미: 스몰 스텝 빈칸]을 차례대로 채워보세요! (빈칸도 막히면 AI 선생님이 도와줍니다!)`;
        state.attempt++;
        activateSmallStepIfNeeded();
      }
    }
  }
  
  // ==========================================
  // 📝 3단계: 블라인드 실력 평가 (정·오답 표시 없이 1~3번 연속 제출)
  // ==========================================
  function showStep3(idx) {
    if (idx === 0) {
      state.step3Answers = [];
      state.records = ['➖', '➖', '➖'];
      state.score = 0;
      state.wrongIndices = [];
    }
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.step3A[idx]);
    state.currentCheckFn = () => submitStep3Blind(idx);
  
    document.getElementById('step-badge').innerText = `${state.lessonId}차시 | 3단계: 실력 평가 (${idx + 1}/3)`;
    document.getElementById('score-board').innerText = `실력 평가 진행 중 (${idx + 1} / 3번 문항 | 3문제를 다 풀면 결과를 확인해요!)`;
    setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > ${state.lessonId}차시 (3단계 실력 평가 ${idx + 1}번)`);
  
    const btnLabel = idx < 2 ? `답안 제출하고 다음 문제(${idx + 2}번)로 이동 👉` : `3문제 모두 제출하고 채점 결과 및 리뷰 보기 👉`;
  
    document.getElementById('app-content').innerHTML = `
      <h2>📝 3단계 실력 평가 (A형 ${idx + 1}번 / 총 3문항)</h2>
      <div class="goal-box"><strong>실력 평가 시간입니다!</strong> 정·오답은 바로 알려주지 않으며, 3문제를 끝까지 다 풀고 난 뒤에 한꺼번에 채점하고 리뷰합니다. (기약분수로 적어주세요!)</div>
      <div class="question-box">${state.currentItem.q}</div>
      ${getFractionHTML(`submitStep3Blind(${idx})`)}
      <button class="btn" id="submit-btn" onclick="submitStep3Blind(${idx})">${btnLabel}</button>
    `;
  }
  
  function submitStep3Blind(idx) {
    const wVal = document.getElementById('frac-w').value.trim();
    const nVal = document.getElementById('frac-n').value.trim();
    const dVal = document.getElementById('frac-d').value.trim();
  
    if (!nVal || !dVal) {
      alert('분자와 분모 칸에 숫자를 입력해 주세요!');
      return;
    }
  
    const item = state.currentItem;
    const status = checkFractionStatus(item.num, item.den);
    const myAnsStr = (wVal ? `${wVal}과 ` : '') + `${nVal}/${dVal}` + (status === 'unreduced' ? ' (약분 안 함)' : '');
  
    state.step3Answers[idx] = {
      idx: idx,
      q: item.q,
      myAns: myAnsStr,
      correctAns: `${item.num}/${item.den}`,
      isCorrect: (status === 'correct'),
      status: status,
      explanation: item.h2
    };
  
    if (idx < 2) {
      showStep3(idx + 1);
    } else {
      finalizeStep3AndShowReview();
    }
  }
  
  // ==========================================
  // 📊 3단계 결과 리뷰 화면 (맞은 문제와 틀린 문제 설명 확인)
  // ==========================================
  function finalizeStep3AndShowReview() {
    const weights = [30, 30, 40];
    state.score = 0;
    state.wrongIndices = [];
  
    state.step3Answers.forEach((ans, idx) => {
      if (ans.isCorrect) {
        state.records[idx] = '⭕';
        state.score += weights[idx];
      } else {
        state.records[idx] = '❌';
        state.wrongIndices.push(idx);
      }
    });
  
    updateLessonHeader("3단계: 실력 평가 결과 리뷰");
  
    const reviewCardsHTML = state.step3Answers.map((ans, idx) => {
      if (ans.isCorrect) {
        return `
          <div class="report-card" style="border-color:#22c55e; background:#f0fdf4; margin-bottom:14px;">
            <strong style="color:#166534; font-size:18px;">⭕ [${idx + 1}번 문제] 정답입니다! (+${weights[idx]}점)</strong><br>
            • <strong>문제:</strong> ${ans.q.replace(/\n/g, ' ')}<br>
            • <strong>내가 적은 답:</strong> <span style="color:#166534; font-weight:bold;">${ans.myAns}</span> (정답과 일치 👍)
          </div>
        `;
      } else {
        const reasonNote = ans.status === 'unreduced'
          ? '계산 값은 맞았지만 더 이상 나누어지지 않는 기약분수로 약분하지 않아 아쉽게 틀렸어요!'
          : '아래 왜 틀렸는지 핵심 풀이를 읽고, 잠시 후 4단계에서 쌍둥이 문제로 완벽히 이해해 볼까요?';
        return `
          <div class="wrong-note-card" style="margin-bottom:14px;">
            <strong style="color:#b45309; font-size:18px;">❌ [${idx + 1}번 문제] 아쉬워요! 왜 틀렸는지 함께 확인해 볼까요?</strong><br>
            • <strong>문제:</strong> ${ans.q.replace(/\n/g, ' ')}<br>
            • <strong>내가 적은 답:</strong> <span style="color:#dc2626; font-weight:bold;">${ans.myAns}</span> &nbsp;|&nbsp; <strong>실제 정답:</strong> <span style="color:#166534; font-weight:bold;">${ans.correctAns}</span><br>
            • <strong>왜 틀렸을까요? (핵심 설명):</strong> ${ans.explanation}<br>
            <span style="font-size:14px; color:#92400e;">💡 ${reasonNote}</span>
          </div>
        `;
      }
    }).join('');
  
    let bottomBtnHTML = '';
    if (state.wrongIndices.length === 0) {
      bottomBtnHTML = `
        <div class="goal-box">🎉 와우! 3문제를 모두 스스로 맞혀 100점을 달성했어요! 보충 학습 없이 바로 5단계 마무리로 이동합니다!</div>
        <button class="btn" onclick="showStep5A()">5단계 오늘 공부 마무리로 이동하기 👉</button>
      `;
    } else {
      state.bRetryQueue = [...state.wrongIndices];
      bottomBtnHTML = `
        <div class="goal-box">💪 틀린 문제(${state.wrongIndices.map(i => (i + 1) + '번').join(', ')})의 설명을 잘 읽어보았나요?<br>이제 4단계에서 <strong>유사한 쌍둥이 문제</strong>를 풀며 완전히 내 것으로 만들어 봅시다!</div>
        <button class="btn" onclick="showStep4Intro()">4단계: 틀린 유형 쌍둥이 문제 풀러 가기 👉</button>
      `;
    }
  
    document.getElementById('app-content').innerHTML = `
      <h2>📊 3단계 실력 평가 채점 결과 및 오답 리뷰 (${state.score}점 / 100점)</h2>
      ${reviewCardsHTML}
      ${bottomBtnHTML}
    `;
  }
  
  // ==========================================
  // 🔄 4단계: 틀린 문제 기반 쌍둥이 문제 보충 (최대 3회 오답 시 통과)
  // ==========================================
  function showStep4Intro() {
    updateLessonHeader("4단계: 보충 및 쌍둥이 문제");
    document.getElementById('app-content').innerHTML = `
      <h2>4단계: 핵심 비법 보충 & 쌍둥이 문제 재도전</h2>
      <div class="goal-box">
        3단계 평가에서 틀렸던 문제를 완벽히 이해하고 넘어가는 시간이에요!<br>
        막히면 <strong>1단계 스몰 스텝 빈칸</strong>과 <strong>2단계 소크라테스 AI 선생님</strong>이 도와주며, 3번까지 어려우면 정석 풀이를 확인하고 다음으로 넘어갈 수 있어요.<br><br>
        <strong>[오늘의 핵심 비법]</strong> ${state.lessonData.step4Intro}
      </div>
      <button class="btn" onclick="showNextStep4B()">쌍둥이 문제 재도전 시작하기 👉</button>
    `;
  }
  
  function showNextStep4B() {
    if (state.bRetryQueue.length === 0) {
      showStep5A();
      return;
    }
    const qIdx = state.bRetryQueue.shift();
    state.attempt = 1;
    state.currentItem = pick(state.lessonData.step4B[qIdx]);
    state.currentCheckFn = () => checkStep4B(qIdx);
    updateLessonHeader(`4단계: 쌍둥이 문제 B-${qIdx + 1}번`);
  
    const prevWrong = state.step3Answers && state.step3Answers[qIdx] ? state.step3Answers[qIdx] : null;
    const prevReviewBanner = prevWrong ? `
      <div class="wrong-note-card" style="margin-bottom:18px; background:#fff7ed; border-color:#fdba74;">
        <strong>📌 [아까 3단계 ${qIdx + 1}번에서 틀렸던 내 기록 돌아보기]</strong><br>
        • <strong>아까 문제:</strong> ${prevWrong.q.replace(/\n/g, ' ')}<br>
        • <strong>내 오답:</strong> <span style="color:#dc2626; font-weight:bold;">${prevWrong.myAns}</span> ➡️ <strong>정답:</strong> <span style="color:#166534; font-weight:bold;">${prevWrong.correctAns}</span><br>
        • <strong>기억할 원리:</strong> ${prevWrong.explanation}
      </div>
    ` : '';
  
    document.getElementById('app-content').innerHTML = `
      <h2>쌍둥이 문제 재도전 (${qIdx + 1}번 유사 유형)</h2>
      ${prevReviewBanner}
      <div class="question-box">${state.currentItem.q}</div>
      ${getFractionHTML(`checkStep4B(${qIdx})`)}
      <button class="btn" id="b-submit-btn" onclick="checkStep4B(${qIdx})">정답 제출하기</button>
      <div id="feedback-box" class="feedback"></div>
      ${getSmallStepHTML()}
      ${getAiTutorHTML()}
    `;
  }
  
  // 4단계: 1차 힌트 -> 2차 스몰 스텝 & AI -> 3차 시도 실패 시 무한 루프 방지(풀이 공개 후 이동 & 상세 기록)
  function checkStep4B(qIdx) {
    const fb = document.getElementById('feedback-box');
    const status = checkFractionStatus(state.currentItem.num, state.currentItem.den);
  
    if (status === 'correct') {
      const passDetail = state.attempt === 1
        ? `${qIdx + 1}번 쌍둥이: 1차 시도에 스스로 통과(⭕)`
        : `${qIdx + 1}번 쌍둥이: ${state.attempt}차 시도에 도우미 학습 후 통과(⭕)`;
      state.bResults.push(passDetail);
  
      const submitBtn = document.getElementById('b-submit-btn');
      if (submitBtn) submitBtn.style.display = 'none';
      fb.className = "feedback correct";
      fb.innerHTML = `정답이에요! 원리를 완벽하게 이해하고 쌍둥이 문제를 내 것으로 만들었어요! (정답: <strong>${state.currentItem.num}/${state.currentItem.den}</strong>)<br><br><button class="btn" onclick="showNextStep4B()">다음 단계로 이동 👉</button>`;
    } else if (status === 'unreduced') {
      fb.className = "feedback hint";
      fb.innerText = "💡 계산은 맞았어요! 기약분수로 약분해서 다시 적어보세요! (오답 횟수에 포함되지 않아요)";
    } else {
      if (state.attempt === 1) {
        fb.className = "feedback hint";
        fb.innerText = `💡 [1/3차 시도] 1차 힌트: ${state.currentItem.h1}`;
        state.attempt++;
      } else if (state.attempt === 2) {
        fb.className = "feedback hint";
        fb.innerText = `💡 [2/3차 시도] 아래에 열린 [1단계 도우미: 스몰 스텝 빈칸]을 하나씩 채워보세요! (빈칸도 틀리면 AI 선생님이 나와서 도와줍니다!)`;
        state.attempt++;
        activateSmallStepIfNeeded();
      } else {
        // 3번 연속 틀렸을 때 무한 루프 방지: 정석 풀이를 보여주고 기록을 남긴 뒤 다음으로 넘어가기 허용
        const failDetail = `${qIdx + 1}번 쌍둥이: 3회 오답으로 정석 풀이 확인 후 이동(⚠️ 추가 복습 필요)`;
        if (!state.bResults.some(r => r.startsWith(`${qIdx + 1}번`))) {
          state.bResults.push(failDetail);
        }
        const submitBtn = document.getElementById('b-submit-btn');
        if (submitBtn) submitBtn.style.display = 'none';
  
        fb.className = "feedback hint";
        fb.innerHTML = `
          💡 <strong>[3차 시도 완료 - 정석 풀이 확인하기]</strong><br>
          이번 문제가 조금 까다로웠죠? 끝까지 도전한 것만으로도 정말 칭찬해요! 👏<br>
          • <strong>정답:</strong> <span style="color:#166534; font-weight:bold;">${state.currentItem.num}/${state.currentItem.den}</span><br>
          • <strong>핵심 풀이:</strong> ${state.currentItem.sol || state.currentItem.h1}<br>
          위 풀이 과정을 눈으로 꼭 익혀두고 다음 단계로 넘어가요! (이 기록은 완료 보고서에 저장됩니다)<br><br>
          <button class="btn" onclick="showNextStep4B()">풀이 확인 완료! 다음 단계로 이동하기 👉</button>
        `;
        fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
  
  function showStep5A() {
    updateLessonHeader("5단계: 오늘 공부 마무리 (1/2)");
    const s5a = state.lessonData.step5A;
    state.currentItem = { q: s5a.q, ans: s5a.ans };
    state.currentCheckFn = checkStep5A;
    document.getElementById('app-content').innerHTML = `
      <h2>5단계: 오늘 배운 핵심 원리 정리</h2>
      <div class="question-box">오늘 배운 계산 원리를 정리해 볼까요? 빈칸 안에 들어갈 알맞은 말이나 번호를 입력해 주세요.\n\n${s5a.q}</div>
      <input type="text" id="step5a-input" class="text-input" placeholder="빈칸에 들어갈 알맞은 말 또는 번호(1, 2)를 적어보세요" onkeydown="if(event.key==='Enter') checkStep5A()">
      <button class="btn" onclick="checkStep5A()">정답 확인</button>
      <div id="feedback-box" class="feedback"></div>
    `;
  }
  
  function checkStep5A() {
    const val = document.getElementById('step5a-input').value.trim();
    const s5a = state.lessonData.step5A;
    if (val === s5a.ans || val === s5a.numAns || val === `${s5a.numAns}번`) {
      showStep5B();
    } else {
      const fb = document.getElementById('feedback-box');
      fb.className = "feedback hint";
      fb.innerText = s5a.hint;
    }
  }
  
  function showStep5B() {
    state.readCount = 0;
    state.readLock = false;
    updateLessonHeader("5단계: 핵심 문장 3번 소리 내어 읽기 (2/2)");
    document.getElementById('app-content').innerHTML = `
      <h2>5단계: 오늘의 핵심 약속 머릿속에 새기기 (3회 낭독)</h2>
      <div class="goal-box">오늘 배운 핵심 약속을 기억하기 위해 아래 문장을 <strong>입으로 소리 내어 3번</strong> 읽고 버튼을 차례대로 눌러 주세요!</div>
      <div class="read-sentence-box">"${state.lessonData.step5B.sentence}"</div>
      <div class="read-step-list">
        <button type="button" id="read-btn-1" class="read-btn active" onclick="completeReadStep(1)">🗣️ 1번째 소리 내어 읽었어요! (터치)</button>
        <button type="button" id="read-btn-2" class="read-btn" onclick="completeReadStep(2)">🔒 2번째 소리 내어 읽기 (대기 중)</button>
        <button type="button" id="read-btn-3" class="read-btn" onclick="completeReadStep(3)">🔒 3번째 소리 내어 읽기 (대기 중)</button>
      </div>
      <button class="btn" id="final-report-btn" style="display:none;" onclick="showFinalReport()">🎉 3회 낭독 완료! 오늘의 완료 보고서 받기 👉</button>
    `;
  }
  
  function completeReadStep(stepNum) {
    if (state.readLock || stepNum !== state.readCount + 1) return;
    state.readCount = stepNum;
    const curBtn = document.getElementById(`read-btn-${stepNum}`);
    curBtn.className = "read-btn done";
    curBtn.innerText = `✅ ${stepNum}번째 소리 내어 읽기 완료! 잘했어요!`;
    if (stepNum < 3) {
      state.readLock = true;
      const nextBtn = document.getElementById(`read-btn-${stepNum + 1}`);
      let remain = 2;
      nextBtn.innerText = `⏳ 문장을 한 번 더 천천히 읽어보세요... (${remain}초 뒤 열림)`;
      const cd = setInterval(() => {
        remain--;
        if (remain > 0) {
          nextBtn.innerText = `⏳ 문장을 한 번 더 천천히 읽어보세요... (${remain}초 뒤 열림)`;
        } else {
          clearInterval(cd);
          state.readLock = false;
          nextBtn.className = "read-btn active";
          nextBtn.innerText = `🗣️ ${stepNum + 1}번째 소리 내어 읽었어요! (터치)`;
        }
      }, 1000);
    } else {
      document.getElementById('final-report-btn').style.display = 'block';
    }
  }
  
  async function showFinalReport() {
    updateLessonHeader("학습 완료!");
    const needHelp = state.bResults.some(r => r.includes("필요"));
    const bSummary = state.wrongIndices.length === 0 ? "해당 없음 (첫 시도 100점 완벽 통과!)" : state.bResults.join(" / ");
    const finalState = needHelp ? "추가 복습 필요" : "완료";
    await saveStudyRecord(state.unitKey, state.lessonId, state.score, finalState);
  
    const step3DetailHTML = [0, 1, 2].map(idx => {
      const ansObj = state.step3Answers && state.step3Answers[idx];
      if (!ansObj) return `&nbsp;&nbsp;* ${idx + 1}번: 기록 없음`;
      return ansObj.isCorrect
        ? `&nbsp;&nbsp;* ${idx + 1}번: ⭕ 정답 (제출 답안: ${ansObj.myAns})`
        : `&nbsp;&nbsp;* ${idx + 1}번: ❌ 오답 (내 답: ${ansObj.myAns} ➔ 정답: ${ansObj.correctAns})`;
    }).join('<br>');
  
    const nextUnit = state.lessonData.nextUnit;
    const nextBtnHTML = nextUnit
      ? `<button class="btn" onclick="startLesson('${nextUnit}')">다음 시간 [${nextUnit}차시] 바로 이어서 공부하기 👉</button>`
      : `<button class="btn" style="background:#d97706;" onclick="showLessonSelect(state.grade, state.semester, state.unit)">🏆 1단원 완주! [단원 최종 테스트] 보러 가기 👉</button>`;
  
    document.getElementById('app-content').innerHTML = `
      <h2>📊 ${state.studentName} 학생의 완전학습 완료 보고서 (☁️ 클라우드 저장됨)</h2>
      <div class="report-card">
        <strong>- 학생 이름:</strong> ${state.studentName} (${state.studentGrade}학년 ${state.studentSem}학기)<br>
        <strong>- 학습 단원:</strong> ${state.grade}학년 ${state.semester}학기 ${state.unit}단원 (${state.lessonData.title})<br>
        <strong>- 3단계 실력 평가 점수:</strong> ${state.score}점 / 100점 만점<br>
        ${step3DetailHTML}<br>
        <strong>- 4단계 쌍둥이 보충 과정 기록:</strong> ${bSummary}<br>
        <strong>- 5단계 핵심 원리 3회 낭독:</strong> 완료 ✅<br>
        <strong>- 최종 학습 판정:</strong> [ ${finalState} ]
      </div>
      ${nextBtnHTML}
      <button class="btn btn-share" onclick="copyReportForParent()">📋 학부모·선생님께 결과 보내기 (카톡용 복사)</button>
      <button class="btn btn-secondary" onclick="showLessonSelect(state.grade, state.semester, state.unit)">📋 차시 선택 목록으로 돌아가기 (도장 확인)</button>
    `;
  }
  
  function copyReportForParent() {
    const step3Summary = [0, 1, 2].map(idx => {
      const a = state.step3Answers && state.step3Answers[idx];
      if (!a) return `${idx + 1}번(-)`;
      return a.isCorrect ? `${idx + 1}번(⭕ ${a.myAns})` : `${idx + 1}번(❌ 내답:${a.myAns}→정답:${a.correctAns})`;
    }).join(' / ');
    const bSummary = state.wrongIndices.length === 0 ? "한 번에 100점 통과" : state.bResults.join(" / ");
    const finalState = state.bResults.some(r => r.includes("필요")) ? "추가 복습 필요" : "완전학습 통과";
    const shareText = `[📚 ${state.studentName} 학생(${state.studentGrade}-${state.studentSem})의 초등 수학 완전학습 보고서]\n• 학습 일시: ${new Date().toLocaleString()}\n• 학습 차시: ${state.grade}학년 ${state.semester}학기 ${state.lessonData.title}\n• 3단계 실력 평가: ${state.score}점 / 100점\n  - 문항별 기록: ${step3Summary}\n• 4단계 쌍둥이 보충: ${bSummary}\n• 최종 판정: [${finalState}]`;
    navigator.clipboard.writeText(shareText).then(() => alert('✅ 학습 보고서가 복사되었습니다! 카톡에 붙여넣기(Ctrl+V) 하세요.')).catch(() => prompt('복사(Ctrl+C)해서 전달하세요:', shareText));
  }
  
  initApp();