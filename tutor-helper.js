// ==========================================
// 🪜 1. 스몰 스텝(Small-Step) 자동 생성 및 검증 엔진
// ==========================================
const MODEL_LIST = [
    'gemini-3.1-flash-lite-preview',
    'gemini-3.0-flash',
    'gemini-flash-latest'
  ];
  
  function buildSmallStepsForCurrentItem(item) {
    if (!item || !item.num || !item.den) return [];
    const sourceText = [item.q, item.h1, item.h2, item.sol].join(' ');
  
    const mixedMatch = sourceText.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
    if (mixedMatch) {
      const w = parseInt(mixedMatch[1], 10);
      const n = parseInt(mixedMatch[2], 10);
      const d = parseInt(mixedMatch[3], 10);
      const c = parseInt(mixedMatch[4], 10);
      const impN = w * d + n;
      return [
        { label: `1계단: 대분수 ${w}과 ${n}/${d}을 가분수로 바꾸면 분자는 얼마일까요? (${w}×${d}+${n})`, prefix: `분자 =`, suffix: `/ ${d}`, ans: String(impN) },
        { label: `2계단: 나누는 수 ${c}를 분모 ${d}에 곱해 볼까요? (${d} ×${c})`, prefix: `${impN} /`, suffix: ``, ans: String(d * c) },
        { label: `3계단: 기약분수로 약분하면 최종 분자와 분모는 얼마일까요?`, isFinalFrac: true, num: item.num, den: item.den }
      ];
    }
  
    const fracMatch = sourceText.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
    if (fracMatch) {
      const n = parseInt(fracMatch[1], 10);
      const d = parseInt(fracMatch[2], 10);
      const c = parseInt(fracMatch[3], 10);
      if (n % c === 0 && d === item.den) {
        return [
          { label: `1계단: 분모 ${d}는 그대로 두고, 분자 ${n}을 ${c}로 나누면 얼마일까요? (${n} ÷${c})`, prefix: `분자 =`, suffix: `/ ${d}`, ans: String(n / c) },
          { label: `2계단: 완성된 기약분수의 분자와 분모를 적어볼까요?`, isFinalFrac: true, num: item.num, den: item.den }
        ];
      }
      return [
        { label: `1계단: 분자 ${n}은 그대로 두고, 나누는 수 ${c}를 분모 ${d}에 곱하면 분모는 얼마가 될까요? (${d} ×${c})`, prefix: `${n} /`, suffix: ``, ans: String(d * c) },
        { label: `2계단: 더 이상 나누어지지 않는 기약분수로 나타내면 얼마일까요?`, isFinalFrac: true, num: item.num, den: item.den }
      ];
    }
  
    const natMatch = sourceText.match(/(\d+)\s*÷\s*(\d+)/);
    if (natMatch) {
      const a = parseInt(natMatch[1], 10);
      const b = parseInt(natMatch[2], 10);
      return [
        { label: `1계단: 나눗셈 기호(÷) 앞의 나누어지는 수 ${a}는 분자(위)에 적어요. 얼마를 적을까요?`, prefix: `분자 =`, suffix: ``, ans: String(a) },
        { label: `2계단: 나눗셈 기호(÷) 뒤의 나누는 수 ${b}는 분모(아래)에 적어요. 얼마를 적을까요?`, prefix: `분모 =`, suffix: ``, ans: String(b) },
        { label: `3계단: 이제 분자(${item.num})와 분모(${item.den})를 합쳐 적어볼까요?`, isFinalFrac: true, num: item.num, den: item.den }
      ];
    }
  
    return [
      { label: `1계단: 정답 기약분수의 분자(위쪽 숫자)는 얼마일까요?`, prefix: `분자 =`, suffix: ``, ans: String(item.num) },
      { label: `2계단: 정답 기약분수의 분모(아래쪽 숫자)는 얼마일까요?`, prefix: `분모 =`, suffix: ``, ans: String(item.den) }
    ];
  }
  
  function getSmallStepHTML() {
    state.smallSteps = buildSmallStepsForCurrentItem(state.currentItem);
    state.smallStepIdx = 0;
    return `
      <div id="small-step-box" class="small-step-box">
        <div class="small-step-title">🪜 1단계 도우미: 한 계단씩 빈칸을 채우며 쉽게 풀어볼까요?</div>
        <div id="small-step-list"></div>
      </div>
    `;
  }
  
  function activateSmallStepIfNeeded() {
    if (state.attempt < 2) return;
    const box = document.getElementById('small-step-box');
    if (!box) {
      openAiTutorForStep('선생님, 문제를 2번 틀렸어요. 첫 번째 힌트 질문으로 도와주세요!');
      return;
    }
    if (box.style.display !== 'block') {
      box.style.display = 'block';
      renderSmallStepList();
    }
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  function renderSmallStepList() {
    const listEl = document.getElementById('small-step-list');
    if (!listEl) return;
  
    listEl.innerHTML = state.smallSteps.map((st, idx) => {
      if (idx > state.smallStepIdx) return '';
      const isDone = idx < state.smallStepIdx;
  
      if (st.isFinalFrac) {
        return `
          <div class="step-ladder-item ${isDone ? 'done' : ''}">
            <div class="step-ladder-q">${st.label}</div>
            <div class="step-ladder-row">
              <span>분자:</span>
              <input type="number" inputmode="numeric" id="ss-fn-${idx}" class="step-mini-input" value="${isDone ? st.num : ''}" ${isDone ? 'disabled' : ''} placeholder="분자">
              <span>/ 분모:</span>
              <input type="number" inputmode="numeric" id="ss-fd-${idx}" class="step-mini-input" value="${isDone ? st.den : ''}" ${isDone ? 'disabled' : ''} placeholder="분모" onkeydown="if(event.key==='Enter') checkSmallStep(${idx})">
              ${isDone ? '<span class="step-mini-msg" style="color:#166534;">✅ 완성!</span>' : `<button type="button" class="step-mini-btn" onclick="checkSmallStep(${idx})">확인</button>`}
              <span id="ss-msg-${idx}" class="step-mini-msg"></span>
            </div>
          </div>
        `;
      }
  
      return `
        <div class="step-ladder-item ${isDone ? 'done' : ''}">
          <div class="step-ladder-q">${st.label}</div>
          <div class="step-ladder-row">
            ${st.prefix ? `<span>${st.prefix}</span>` : ''}
            <input type="number" inputmode="numeric" id="ss-inp-${idx}" class="step-mini-input" value="${isDone ? st.ans : ''}" ${isDone ? 'disabled' : ''} placeholder="?" onkeydown="if(event.key==='Enter') checkSmallStep(${idx})">
            ${st.suffix ? `<span>${st.suffix}</span>` : ''}
            ${isDone ? '<span class="step-mini-msg" style="color:#166534;">✅ 맞았어요!</span>' : `<button type="button" class="step-mini-btn" onclick="checkSmallStep(${idx})">확인</button>`}
            <span id="ss-msg-${idx}" class="step-mini-msg"></span>
          </div>
        </div>
      `;
    }).join('');
  
    setTimeout(() => {
      const curInp = document.getElementById(`ss-inp-${state.smallStepIdx}`) || document.getElementById(`ss-fn-${state.smallStepIdx}`);
      if (curInp) curInp.focus();
    }, 60);
  }
  
  // 스몰 스텝에서 틀리면 정답을 알려주지 않고 즉시 소크라테스 AI 선생님 자동 호출!
  function checkSmallStep(idx) {
    const st = state.smallSteps[idx];
    const msgEl = document.getElementById(`ss-msg-${idx}`);
  
    if (st.isFinalFrac) {
      const nVal = parseInt(document.getElementById(`ss-fn-${idx}`).value, 10);
      const dVal = parseInt(document.getElementById(`ss-fd-${idx}`).value, 10);
      if (nVal === st.num && dVal === st.den) {
        state.smallStepIdx++;
        renderSmallStepList();
        autoFillMainFractionAndSubmit(st.num, st.den);
      } else {
        if (msgEl) {
          msgEl.style.color = '#0f766e';
          msgEl.innerText = `🤖 헷갈리네요! 아래 AI 선생님이 도와줄게요 👇`;
        }
        openAiTutorForStep(`학생이 스몰스텝 마지막 기약분수 단계(${st.label})에서 분자=${nVal || '빈칸'}, 분모=${dVal || '빈칸'}이라고 적어 틀렸습니다. 정답(${st.num}/${st.den})을 직접 말하지 말고 약분 원리를 깨우치도록 쉬운 질문으로 유도해 주세요!`);
      }
      return;
    }
  
    const val = document.getElementById(`ss-inp-${idx}`).value.trim();
    if (val === st.ans) {
      state.smallStepIdx++;
      renderSmallStepList();
      if (state.smallStepIdx >= state.smallSteps.length) {
        autoFillMainFractionAndSubmit(state.currentItem.num, state.currentItem.den);
      }
    } else {
      if (msgEl) {
        msgEl.style.color = '#0f766e';
        msgEl.innerText = `🤖 이 계단이 어렵나요? 아래 AI 선생님과 함께 풀어봐요 👇`;
      }
      openAiTutorForStep(`학생이 "${st.label}" 계단 빈칸에 "${val || '빈칸'}"이라고 적어 틀렸습니다. 이 계단의 빈칸 정답(${st.ans})을 직접 알려주지 말고, 스스로 계산할 수 있도록 아주 쉬운 힌트 질문을 던져주세요!`);
    }
  }
  
  function autoFillMainFractionAndSubmit(num, den) {
    const fw = document.getElementById('frac-w');
    const fn = document.getElementById('frac-n');
    const fd = document.getElementById('frac-d');
    if (fn && fd) {
      if (fw) fw.value = '';
      fn.value = num;
      fd.value = den;
      if (typeof state.currentCheckFn === 'function') state.currentCheckFn();
  
      const aiSec = document.getElementById('ai-tutor-section');
      if (aiSec) aiSec.style.display = 'none';
  
      const fb = document.getElementById('feedback-box');
      const ssBox = document.getElementById('small-step-box');
      if (fb && ssBox) {
        const nextBtn = fb.querySelector('button');
        if (nextBtn) {
          const cloneBtn = nextBtn.cloneNode(true);
          cloneBtn.style.marginTop = '14px';
          cloneBtn.style.background = '#16a34a';
          cloneBtn.innerText = `🎉 계단 완성! ${nextBtn.innerText}`;
          ssBox.appendChild(cloneBtn);
          cloneBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }
  
  // ==========================================
  // 🤖 2. 소크라테스 AI 튜터 엔진 (스몰 스텝 실패 시 자동 등장)
  // ==========================================
  function getStudentCurrentInputText() {
    const fn = document.getElementById('frac-n');
    const fd = document.getElementById('frac-d');
    const fw = document.getElementById('frac-w');
    if (fn && fd && (fn.value || fd.value)) {
      const wVal = fw && fw.value ? `${fw.value}와 ` : '';
      return `학생이 현재 입력 칸에 적은 값: ${wVal}분자=${fn.value || '비어있음'}, 분모=${fd.value || '비어있음'}`;
    }
    const ansInput = document.getElementById('ans-input') || document.getElementById('step5a-input');
    if (ansInput && ansInput.value.trim()) {
      return `학생이 현재 입력 칸에 적은 값: ${ansInput.value.trim()}`;
    }
    return '학생이 아직 답안을 입력하지 않음';
  }
  
  function checkAndAutoSubmitIfCorrect(userText) {
    const item = state.currentItem;
    if (!item) return false;
    const text = userText.trim();
  
    // 1. 스몰 스텝이 열려 있을 때 현재 계단의 정답을 말했는지 먼저 확인
    if (state.smallSteps && state.smallStepIdx < state.smallSteps.length) {
      const curStep = state.smallSteps[state.smallStepIdx];
      const cleanNum = text.replace(/[^0-9]/g, '');
      if (!curStep.isFinalFrac && (text === curStep.ans || (cleanNum && cleanNum === curStep.ans))) {
        const stepInp = document.getElementById(`ss-inp-${state.smallStepIdx}`);
        if (stepInp) {
          stepInp.value = curStep.ans;
          checkSmallStep(state.smallStepIdx);
          return true;
        }
      }
    }
  
    // 2. 본 문제의 분수 정답을 말했는지 확인
    if (item.num && item.den) {
      let w = 0, n = NaN, d = NaN;
      const mixedMatch = text.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)/) || text.match(/(\d+)\s*[과와]\s*(\d+)\s*분의\s*(\d+)/);
      const slashMatch = text.match(/(\d+)\s*\/\s*(\d+)/);
      const korMatch = text.match(/(\d+)\s*분의\s*(\d+)/);
  
      if (mixedMatch) {
        w = parseInt(mixedMatch[1], 10);
        if (text.includes('분의')) {
          d = parseInt(mixedMatch[2], 10);
          n = parseInt(mixedMatch[3], 10);
        } else {
          n = parseInt(mixedMatch[2], 10);
          d = parseInt(mixedMatch[3], 10);
        }
      } else if (slashMatch) {
        n = parseInt(slashMatch[1], 10);
        d = parseInt(slashMatch[2], 10);
      } else if (korMatch) {
        d = parseInt(korMatch[1], 10);
        n = parseInt(korMatch[2], 10);
      }
  
      if (!isNaN(n) && !isNaN(d) && d > 0 && (w * d + n) === item.num && d === item.den) {
        const fw = document.getElementById('frac-w');
        const fn = document.getElementById('frac-n');
        const fd = document.getElementById('frac-d');
        if (fn && fd) {
          if (fw) fw.value = '';
          fn.value = item.num;
          fd.value = item.den;
          exitAiPanelAndFocus(true);
          if (typeof state.currentCheckFn === 'function') state.currentCheckFn();
          return true;
        }
      }
    }
  
    // 3. 단답형 정답 확인
    if (item.ans && !item.choices) {
      const cleanNum = text.replace(/[^0-9]/g, '');
      if (text === item.ans || (cleanNum && cleanNum === item.ans)) {
        const inp = document.getElementById('ans-input') || document.getElementById('step5a-input');
        if (inp) {
          inp.value = item.ans;
          exitAiPanelAndFocus(true);
          if (typeof state.currentCheckFn === 'function') state.currentCheckFn();
          return true;
        }
      }
    }
    return false;
  }
  
  function exitAiPanelAndFocus(autoSubmitted = false) {
    const panel = document.getElementById('ai-panel');
    if (panel) panel.style.display = 'none';
  
    if (!autoSubmitted) {
      const curStepInp = document.getElementById(`ss-inp-${state.smallStepIdx}`) || document.getElementById(`ss-fn-${state.smallStepIdx}`);
      const fn = document.getElementById('frac-n');
      const ansInput = document.getElementById('ans-input') || document.getElementById('step5a-input');
      if (curStepInp) {
        curStepInp.scrollIntoView({ behavior: 'smooth', block: 'center' });
        curStepInp.focus();
      } else if (fn) {
        fn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        fn.focus();
      } else if (ansInput) {
        ansInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        ansInput.focus();
      }
    } else {
      const fb = document.getElementById('feedback-box');
      if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  
  // 처음에는 AI 섹션을 숨겨두어(display:none) 학생이 스몰 스텝과 헷갈리지 않게 함
  function getAiTutorHTML() {
    state.aiChatHistory = [];
    return `
      <div class="ai-tutor-section" id="ai-tutor-section" style="display:none;">
        <button type="button" class="ai-toggle-btn" onclick="toggleAiPanel()">
          👩‍🏫 2단계 도우미: 소크라테스 AI 선생님과 대화하며 힌트 찾기
        </button>
        <div class="ai-panel" id="ai-panel">
          <div class="ai-chat-log" id="ai-chat-log"></div>
          <div class="socratic-reply-box" id="socratic-reply-box" style="display:none;">
            <div class="socratic-reply-label">👇 아래 버튼을 터치하거나, 알게 된 숫자를 바로 적어보세요!</div>
            <div class="ai-quick-row" id="ai-quick-row"></div>
          </div>
          <div class="ai-input-row">
            <input type="text" id="ai-question-input" class="ai-input" placeholder="대답이나 정답을 적으면 자동으로 빈칸에 들어가요!" onkeydown="if(event.key==='Enter') askAiTeacher()">
            <button type="button" class="ai-send-btn" onclick="askAiTeacher()">대답하기</button>
          </div>
          <button type="button" class="ai-exit-btn" onclick="exitAiPanelAndFocus(false)">
            🚀 아하, 이제 알겠어요! (위로 올라가서 빈칸 채우기 ⬆️)
          </button>
        </div>
      </div>
    `;
  }
  
  // 스몰 스텝 빈칸을 틀렸을 때 자동으로 AI 선생님 패널을 열고 첫 질문을 던지는 함수
  function openAiTutorForStep(reasonPrompt) {
    const sec = document.getElementById('ai-tutor-section');
    const panel = document.getElementById('ai-panel');
    if (sec) sec.style.display = 'block';
    if (panel) panel.style.display = 'block';
  
    setTimeout(() => {
      if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  
    if (state.aiChatHistory.length === 0) {
      askAiTeacher(reasonPrompt || '선생님, 빈칸 채우기가 막막해요. 첫 번째 힌트 질문을 던져주세요!', true);
    }
  }
  
  function toggleAiPanel() {
    const panel = document.getElementById('ai-panel');
    if (!panel) return;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      return;
    }
    panel.style.display = 'block';
    if (state.aiChatHistory.length === 0) {
      askAiTeacher('선생님, 이 문제 어떻게 시작해야 할지 첫 번째 힌트 질문을 던져주세요!', true);
    }
  }
  
  function quickAskAi(text) {
    askAiTeacher(text, false);
  }
  
  function parseSocraticResponse(rawText) {
    let cleanMsg = rawText.replace(/\*\*/g, '');
    let choices = [];
    let isFinished = false;
    if (cleanMsg.includes('[대화종료]')) {
      isFinished = true;
      cleanMsg = cleanMsg.replace(/[대화종료]/g, '').trim();
    }
    const match = cleanMsg.match(/\[선택\s*:\s*([^\]]+)\]/);
    if (match && match[1]) {
      cleanMsg = cleanMsg.replace(match[0], '').trim();
      choices = match[1].split('|').map(s => s.trim()).filter(Boolean);
    }
    return { cleanMsg, choices, isFinished };
  }
  
  function renderSocraticChoices(choices, isFinished) {
    const box = document.getElementById('socratic-reply-box');
    const row = document.getElementById('ai-quick-row');
    if (!box || !row) return;
    if (isFinished) {
      row.innerHTML = `<button type="button" class="ai-quick-chip" style="background:#0d9488; color:#fff;" onclick="exitAiPanelAndFocus(false)">⬆️ 위 빈칸에 정답 적으러 가기!</button>`;
      box.style.display = 'block';
      return;
    }
    const finalChoices = (choices && choices.length > 0) ? choices : ['이해했어요! 다음 단계는요?', '조금 더 쉽게 알려주세요'];
    if (!finalChoices.some(c => c.includes('모르겠'))) finalChoices.push('잘 모르겠어요 😅');
    row.innerHTML = finalChoices.map(c => `<button type="button" class="ai-quick-chip" onclick="quickAskAi('${c.replace(/'/g, "\\'")}')">💬 ${c}</button>`).join('');
    box.style.display = 'block';
  }
  
  async function askAiTeacher(presetText, isInitialStart = false) {
    const inputEl = document.getElementById('ai-question-input');
    const userText = presetText ? presetText.trim() : inputEl.value.trim();
    if (!userText) return;
  
    const logEl = document.getElementById('ai-chat-log');
    if (!isInitialStart) {
      logEl.innerHTML += `<div class="ai-msg student">🙋‍♂️ 나의 대답: ${userText}</div>`;
      if (!presetText && inputEl) inputEl.value = '';
      if (checkAndAutoSubmitIfCorrect(userText)) return;
    }
  
    const apiKey = getSavedApiKey();
    if (!apiKey) {
      alert('먼저 화면 오른쪽 위의 [⚙️ API 키 설정] 버튼을 눌러 키를 저장해 주세요!');
      openApiModal();
      return;
    }
  
    const replyBox = document.getElementById('socratic-reply-box');
    if (replyBox) replyBox.style.display = 'none';
  
    const loadingId = 'ai-loading-' + Date.now();
    logEl.innerHTML += `<div class="ai-msg teacher" id="${loadingId}">🤔 AI 선생님이 생각하고 있어요...</div>`;
    logEl.scrollTop = logEl.scrollHeight;
  
    const curQ = state.currentItem ? state.currentItem.q : "";
    const curAnsInfo = state.currentItem ? (state.currentItem.num ? `${state.currentItem.num}/${state.currentItem.den}` : state.currentItem.ans) : "";
    const historyText = state.aiChatHistory.map(h => `${h.role}: ${h.text}`).join('\n');
  
    const promptText = `당신은 초등학교 6학년 수학을 가르치는 다정한 '소크라테스식 산파술(문답법) AI 튜터'입니다.
  현재 공부 중인 학생 이름: ${state.studentName || '학생'}
  현재 문제: ${curQ}
  참고용 최종 정답(학생이 먼저 말하기 전까지 노출 금지): ${curAnsInfo}
  ${getStudentCurrentInputText()}
  [지금까지의 대화 기록]
  ${historyText || '(첫 대화 시작)'}
  [상황 또는 학생의 말]: "${userText}"
  [규칙]
  1. 원리를 한 번에 다 설명하거나 정답(${curAnsInfo})을 먼저 말하지 마세요.
  2. 1~2문장으로 다정하게 공감한 뒤, 현재 막힌 계단이나 문제를 풀기 위한 '아주 쉬운 단답형 유도 질문 1개'로 끝내세요.
  3. 만약 학생이 빈칸의 답이나 최종 정답을 찾아냈다면 추가 질문을 멈추고 "완벽하게 찾아냈어! 👏 위 빈칸에 답을 적어보자! [대화종료]"라고 끝내세요.
  4. '역수', '단위분수', 별표(**) 사용 금지.
  5. 진행 중일 때만 맨 마지막 줄에 터치 선택지 2~3개를 아래 형식으로 작성:
  [선택: 짧은대답1 | 짧은대답2]`;
  
    state.aiChatHistory.push({ role: '학생', text: userText });
    const startTime = Date.now();
    let firstCharTime = null, isStreamingText = false;
    const loadingEl = document.getElementById(loadingId);
  
    const timerInterval = setInterval(() => {
      if (!isStreamingText && loadingEl) {
        loadingEl.innerText = `🧠 선생님이 눈높이 질문을 준비하고 있어요... (${((Date.now() - startTime) / 1000).toFixed(1)}초)`;
      }
    }, 200);
  
    try {
      let res = null, lastErr = '';
      for (const model of MODEL_LIST) {
        const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: promptText }] }],
            generationConfig: { temperature: 0.3, maxOutputTokens: 400 }
          })
        });
        if (r.ok) { res = r; break; }
        const errData = await r.json().catch(() => ({}));
        lastErr = `${model}: ${errData.error?.message || r.status}`;
      }
  
      if (!res) {
        clearInterval(timerInterval);
        loadingEl.innerText = `⚠️ 서버 요청이 많습니다. 잠시 후 다시 눌러 주세요.\n(${lastErr})`;
        return;
      }
  
      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let fullText = '', buffer = '';
  
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6).trim();
            if (!jsonStr || jsonStr === '[DONE]') continue;
            try {
              const parts = JSON.parse(jsonStr).candidates?.[0]?.content?.parts || [];
              for (const p of parts) {
                if (p.text && !p.thought) {
                  isStreamingText = true;
                  clearInterval(timerInterval);
                  if (!firstCharTime) firstCharTime = ((Date.now() - startTime) / 1000).toFixed(1);
                  fullText += p.text;
                  loadingEl.innerText = `👩‍🏫 소크라테스 AI 선생님 (${firstCharTime}초):\n${parseSocraticResponse(fullText).cleanMsg}`;
                  logEl.scrollTop = logEl.scrollHeight;
                }
              }
            } catch (e) {}
          }
        }
      }
  
      clearInterval(timerInterval);
      if (fullText) {
        const { cleanMsg, choices, isFinished } = parseSocraticResponse(fullText);
        loadingEl.innerText = `👩‍🏫 소크라테스 AI 선생님 (${((Date.now() - startTime) / 1000).toFixed(1)}초):\n${cleanMsg}`;
        state.aiChatHistory.push({ role: '선생님', text: cleanMsg });
        renderSocraticChoices(choices, isFinished);
      }
    } catch (err) {
      clearInterval(timerInterval);
      loadingEl.innerText = `⚠️ 네트워크 오류: ${err.message}`;
    }
    logEl.scrollTop = logEl.scrollHeight;
  }