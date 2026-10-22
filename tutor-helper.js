// ==========================================
// 🪜 1. 스몰 스텝(계단식 빈칸 채우기) 도우미 모듈
// ==========================================
function getSmallStepHTML() {
  return `
    <div id="small-step-box" class="small-step-box">
      <div class="small-step-title">🪜 1단계 도우미: 차근차근 빈칸 채우기 (스몰 스텝)</div>
      <div id="small-step-list"></div>
    </div>
  `;
}

function buildSmallSteps(item) {
  // 단원 데이터에 맞춤형 steps 배열이 있으면 그대로 사용 (2단원~6단원 확장용)
  if (item.steps && Array.isArray(item.steps) && item.steps.length > 0) {
    return item.steps;
  }

  const q = item.q || "";

  // 1) 대분수 ÷ 자연수
  const mixedMatch = q.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (mixedMatch) {
    const w = parseInt(mixedMatch[1], 10);
    const n = parseInt(mixedMatch[2], 10);
    const d = parseInt(mixedMatch[3], 10);
    const c = parseInt(mixedMatch[4], 10);
    const impN = w * d + n;
    const rawD = d * c;
    return [
      { q: `1계단: 대분수 ${w}과 ${n}/${d}을 가분수로 바꾸면 몇 분의 몇일까요? 분자(${w}×${d}+${n})에 들어갈 숫자를 적어보세요.`, ans: String(impN) },
      { q: `2계단: 나누기 ${c}(÷ ${c})를 곱셈(× 1/${c})으로 바꾸어 분모 ${d}에 ${c}를 곱하면(${d}×${c}) 분모는 얼마가 될까요?`, ans: String(rawD) }
    ];
  }

  // 2) 진분수/가분수 ÷ 자연수
  const fracMatch = q.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (fracMatch) {
    const n = parseInt(fracMatch[1], 10);
    const d = parseInt(fracMatch[2], 10);
    const c = parseInt(fracMatch[3], 10);
    if (n % c === 0) {
      return [
        { q: `1계단: 분모(${d})는 그대로 두고, 분자 ${n}을 ${c}로 나누면(${n} ÷ ${c}) 분자는 얼마가 될까요?`, ans: String(n / c) },
        { q: `2계단: 분모 자리에 그대로 적어야 할 숫자는 얼마일까요?`, ans: String(d) }
      ];
    }
    return [
      { q: `1계단: 나누기 ${c}(÷ ${c})를 곱하기 1/${c}로 바꾸면 분자(${n}×1)는 얼마가 될까요?`, ans: String(n) },
      { q: `2계단: 분모 ${d}에 ${c}를 곱하면(${d} × ${c}) 분모는 얼마가 될까요?`, ans: String(d * c) }
    ];
  }

  // 3) 자연수 ÷ 자연수 (분수 몫)
  if (item.num !== undefined && item.den !== undefined) {
    return [
      { q: `1계단: 나눗셈 기호(÷) 앞에 있는 수(전체 양)를 찾아 분자(위쪽)에 적어보세요. 얼마인가요?`, ans: String(item.num) },
      { q: `2계단: 나눗셈 기호(÷) 뒤에 있는 수(나누는 수)를 찾아 분모(아래쪽)에 적어보세요. 얼마인가요?`, ans: String(item.den) }
    ];
  }

  // 4) 일반 단답형/숫자형 문제 기본 스몰 스텝
  return [
    { q: `1계단: 힌트를 다시 살펴보며 문제에서 구하려는 정답을 천천히 적어보세요. (${item.h1 || ''})`, ans: String(item.ans || '') }
  ];
}

function activateSmallStepIfNeeded() {
  const box = document.getElementById('small-step-box');
  const list = document.getElementById('small-step-list');
  if (!box || !list || !state.currentItem) return;

  state.smallSteps = buildSmallSteps(state.currentItem);
  state.smallStepIdx = 0;
  box.style.display = 'block';
  renderCurrentSmallStep();
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderCurrentSmallStep() {
  const list = document.getElementById('small-step-list');
  if (!list) return;

  const stepsHTML = state.smallSteps.map((st, idx) => {
    if (idx > state.smallStepIdx) return '';
    const isDone = idx < state.smallStepIdx;
    return `
      <div class="step-item">
        <div class="step-q">${st.q}</div>
        <div class="step-input-row">
          <input type="text" id="ss-input-${idx}" class="step-mini-input" value="${isDone ? st.ans : ''}" ${isDone ? 'disabled' : ''} placeholder="답 입력" onkeydown="if(event.key==='Enter') checkSmallStep(${idx})">
          ${isDone ? `<span style="color:#166534; font-weight:bold;">✅ 통과!</span>` : `<button type="button" class="step-mini-btn" onclick="checkSmallStep(${idx})">확인</button>`}
        </div>
        <div id="ss-msg-${idx}" class="step-mini-msg"></div>
      </div>
    `;
  }).join('');

  list.innerHTML = stepsHTML;
  const curInput = document.getElementById(`ss-input-${state.smallStepIdx}`);
  if (curInput) curInput.focus();
}

function checkSmallStep(idx) {
  const st = state.smallSteps[idx];
  const inp = document.getElementById(`ss-input-${idx}`);
  const msg = document.getElementById(`ss-msg-${idx}`);
  if (!st || !inp || !msg) return;

  const val = inp.value.trim();
  if (val === String(st.ans).trim()) {
    state.smallStepIdx++;
    if (state.smallStepIdx < state.smallSteps.length) {
      renderCurrentSmallStep();
    } else {
      renderCurrentSmallStep();
      const list = document.getElementById('small-step-list');
      list.innerHTML += `
        <div style="margin-top:10px; padding:12px; background:#dcfce7; border-radius:10px; color:#166534; font-weight:bold;">
          🎉 모든 계단을 통과했어요! 이제 위쪽 원래 문제의 정답 칸에 방금 찾은 숫자를 넣고 제출 버튼을 눌러보세요!
        </div>
      `;
    }
  } else {
    msg.style.color = '#dc2626';
    msg.innerText = `아쉬워요! 아래에 나타난 소크라테스 AI 선생님과 대화하며 힌트를 얻어보세요!`;
    openAiTutorForStep(`학생이 스몰 스텝 계단 문제("${st.q}")에서 "${val || '빈칸'}"이라고 답해 막혔습니다. 정답(${st.ans})을 직접 말하지 말고 친절한 질문으로 유도해 주세요!`);
  }
}

// ==========================================
// 🤖 2. 소크라테스 AI 선생님 실시간 대화 모듈
// ==========================================
function getAiTutorHTML() {
  return `
    <div id="ai-tutor-box" class="ai-tutor-box">
      <div class="ai-tutor-header">🤖 2단계 도우미: 소크라테스 AI 선생님과 문답하기</div>
      <div id="ai-chat-log" class="ai-chat-log"></div>
      <div class="ai-input-row">
        <input type="text" id="ai-user-input" class="ai-input" placeholder="선생님의 질문에 대답을 적어보세요..." onkeydown="if(event.key==='Enter') sendAiUserMessage()">
        <button type="button" class="ai-send-btn" onclick="sendAiUserMessage()">대답하기</button>
      </div>
    </div>
  `;
}

async function openAiTutorForStep(situationDesc) {
  const box = document.getElementById('ai-tutor-box');
  const log = document.getElementById('ai-chat-log');
  if (!box || !log) return;

  if (box.style.display === 'block' && state.aiChatHistory && state.aiChatHistory.length > 0) {
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  box.style.display = 'block';
  state.aiChatHistory = [];
  log.innerHTML = `<div class="chat-bubble chat-ai">⏳ 소크라테스 AI 선생님이 생각 중이에요...</div>`;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const item = state.currentItem || {};
  const targetAns = (item.num !== undefined && item.den !== undefined) ? `${item.num}/${item.den}` : (item.ans || '');

  const firstPrompt = [
    `현재 문제: ${item.q || ''}`,
    `숨겨진 실제 정답(학생에게 절대 직접 말하지 말 것): ${targetAns}`,
    `상황: ${situationDesc}`,
    `규칙: 초등학교 학생 눈높이에 맞춰 다정하게 격려하고, 정답을 직접 알려주지 말고 학생이 스스로 생각할 수 있는 아주 쉬운 첫 번째 질문을 2문장 이내로 던져주세요.`
  ].join('\n');

  const reply = await callGeminiSocraticAPI(firstPrompt, []);
  state.aiChatHistory.push({ role: 'user', text: firstPrompt });
  state.aiChatHistory.push({ role: 'model', text: reply });

  renderAiChatLog();
}

function renderAiChatLog() {
  const log = document.getElementById('ai-chat-log');
  if (!log) return;

  const visibleMessages = (state.aiChatHistory || []).slice(1);
  log.innerHTML = visibleMessages.map(m => {
    const cls = m.role === 'model' ? 'chat-ai' : 'chat-user';
    const prefix = m.role === 'model' ? '🤖 <b>AI 선생님:</b> ' : '🙋 <b>나:</b> ';
    return `<div class="chat-bubble ${cls}">${prefix}${m.text}</div>`;
  }).join('');

  log.scrollTop = log.scrollHeight;
}

async function sendAiUserMessage() {
  const inp = document.getElementById('ai-user-input');
  const log = document.getElementById('ai-chat-log');
  if (!inp || !log) return;

  const userText = inp.value.trim();
  if (!userText) return;
  inp.value = '';

  state.aiChatHistory.push({ role: 'user', text: userText });
  renderAiChatLog();

  log.innerHTML += `<div class="chat-bubble chat-ai">⏳ AI 선생님이 답변을 적고 있어요...</div>`;
  log.scrollTop = log.scrollHeight;

  const item = state.currentItem || {};
  const targetAns = (item.num !== undefined && item.den !== undefined) ? `${item.num}/${item.den}` : (item.ans || '');

  const systemGuide = `당신은 초등 수학 소크라테스 AI 튜터입니다. 현재 문제는 "${item.q || ''}"이며 최종 정답은 "${targetAns}"입니다. 학생이 방금 "${userText}"라고 대답했습니다. 학생이 핵심 숫자를 맞혔다면 크게 칭찬하고 "이제 위쪽 원래 문제의 정답 칸에 그 답을 적고 제출 버튼을 눌러보세요!"라고 안내하세요. 아직 헷갈려한다면 더 쉬운 힌트 질문을 2문장 이내로 해주세요.`;

  const reply = await callGeminiSocraticAPI(systemGuide, state.aiChatHistory);
  state.aiChatHistory.push({ role: 'model', text: reply });
  renderAiChatLog();
}

async function callGeminiSocraticAPI(promptText, historyArr) {
  const apiKey = state.geminiApiKey || localStorage.getItem('MATH_GEMINI_API_KEY') || '';
  if (!apiKey) {
    return `💡 (API 키 미설정 안내) 우측 상단 [⚙️ API 키 설정]에서 키를 등록하면 실시간 AI 대화와 연결됩니다! 지금은 아래 힌트를 참고해 보세요: ${state.currentItem ? (state.currentItem.h2 || state.currentItem.h1) : ''}`;
  }

  const models = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-latest',
    'gemini-2.5-flash',
    'gemini-2.0-flash'
  ];

  const contents = [];
  if (historyArr && historyArr.length > 0) {
    historyArr.forEach(h => {
      contents.push({ role: h.role === 'model' ? 'model' : 'user', parts: [{ text: h.text }] });
    });
  }
  contents.push({ role: 'user', parts: [{ text: promptText }] });

  for (const modelName of models) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: contents,
          generationConfig: { temperature: 0.4, maxOutputTokens: 220 }
        })
      });
      if (!res.ok) continue;
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) return text.trim();
    } catch (e) {}
  }

  return `앗, 지금 AI 선생님과 통신이 잠시 지연되고 있어요! 대신 결정적 힌트를 드릴게요: ${state.currentItem ? (state.currentItem.h2 || state.currentItem.h1) : '위 문제를 천천히 다시 읽어보세요!'}`;
}