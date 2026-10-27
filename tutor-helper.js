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
  if (item.steps && Array.isArray(item.steps) && item.steps.length > 0) {
    return item.steps;
  }

  const q = item.q || "";

  // 2학기 (분수) ÷ (분수) 형태가 아닐 때만 1학기용 자동 분수 계단 적용
  if (!/÷\s*\d+\s*\/\s*\d+/.test(q)) {
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
  }

  if (item.num !== undefined && item.den !== undefined) {
    return [
      { q: `1계단: (${item.h1 || '핵심 원리를 떠올려 보세요'}) 구하려는 기약분수의 분자(위쪽 숫자)는 얼마인가요?`, ans: String(item.num) },
      { q: `2계단: 그렇다면 기약분수의 분모(아래쪽 숫자)는 얼마인가요?`, ans: String(item.den) }
    ];
  }

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
  if (normalizeMathText(val) === normalizeMathText(String(st.ans))) {
    state.smallStepIdx++;
    if (state.smallStepIdx < state.smallSteps.length) {
      renderCurrentSmallStep();
    } else {
      renderCurrentSmallStep();
      const list = document.getElementById('small-step-list');
      list.innerHTML += `
        <div style="margin-top:10px; padding:12px; background:#dcfce7; border-radius:10px; color:#166534; font-weight:bold;">
          🎉 모든 계단을 통과했어요! 이제 위쪽 원래 문제의 정답 입력 칸에 방금 찾은 답을 넣고 [정답 확인하기] 버튼을 눌러보세요!
        </div>
      `;
    }
  } else {
    msg.style.color = '#dc2626';
    msg.innerText = `아쉬워요! 아래에 나타난 소크라테스 AI 선생님과 대화하며 힌트를 얻어보세요!`;
    openAiTutorForStep(`학생이 스몰 스텝 계단 문제("${st.q}")에서 "${val || '빈칸'}"이라고 오답을 적어 막혔습니다. 정답(${st.ans})을 직접 말하지 말고 친절한 질문으로 유도해 주세요!`);
  }
}

// ==========================================
// 🤖 2. 소크라테스 AI 선생님 실시간 대화 모듈
// ==========================================
function getAiTutorHTML() {
  const item = (typeof state !== 'undefined' && state.currentItem) ? state.currentItem : {};
  const isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  const allText = `${item.q || ''} ${(item.choices || []).join(' ')} ${item.ans || ''}`;
  const needsMathSymbols = /[□×÷]/.test(allText);

  const symbolBtnStyle = "padding:5px 11px; border:1px solid #0d9488; background:#f0fdfa; color:#0f766e; border-radius:8px; font-weight:bold; font-size:14px; cursor:pointer;";
  let btns = [];

  if (needsMathSymbols) {
    if (allText.includes('□')) {
      btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('□')">□ (네모)</button>`);
    }
    btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('×')">× (곱하기)</button>`);
    btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('÷')">÷ (나누기)</button>`);
    btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('+')">+</button>`);
  }

  if (isChoice) {
    btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('1번')">1번</button>`);
    btns.push(`<button type="button" style="${symbolBtnStyle}" onclick="insertAiSymbol('2번')">2번</button>`);
  }

  const helperBarHTML = btns.length > 0
    ? `<div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px; align-items:center;">
         <span style="font-size:12px; color:#0f766e; font-weight:bold;">⌨️ 간편 입력:</span>
         ${btns.join('')}
       </div>`
    : '';

  return `
    <div id="ai-tutor-box" class="ai-tutor-box">
      <div class="ai-tutor-header">🤖 2단계 도우미: 소크라테스 AI 선생님과 문답하기</div>
      <div id="ai-chat-log" class="ai-chat-log"></div>
      ${helperBarHTML}
      <div class="ai-input-row">
        <input type="text" id="ai-user-input" class="ai-input" placeholder="선생님의 질문에 대답을 적어보세요..." onkeydown="if(event.key==='Enter') sendAiUserMessage()">
        <button type="button" class="ai-send-btn" onclick="sendAiUserMessage()">대답하기</button>
      </div>
    </div>
  `;
}

function insertAiSymbol(sym) {
  const inp = document.getElementById('ai-user-input');
  if (!inp) return;
  inp.value = inp.value + sym;
  inp.focus();
}

function normalizeMathText(str) {
  if (!str) return '';
  return String(str)
    .replace(/\s+/g, '')
    .replace(/네모|빈칸/g, '□')
    .replace(/곱하기|\*|x|X/g, '×')
    .replace(/나누기/g, '÷')
    .replace(/더하기/g, '+')
    .replace(/빼기/g, '-');
}

// 힌트 말투("~생각해 보세요", "~적어 보세요")를 정답 확인 후의 깔끔한 해설 말투로 변환!
function cleanHintIntoExplanation(rawText, targetAns) {
  if (!rawText) return '';
  return String(rawText)
    .replace(/[^.?!]*?(적어|입력해|골라|찾아|써)\s*보세요[.?!]?/g, '')
    .replace(/생각해\s*보세요[.?!]?/g, `생각하면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/구해\s*보세요[.?!]?/g, `구하면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/계산해\s*보세요[.?!]?/g, `계산하면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/더해\s*보세요[.?!]?/g, `더하면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/빼\s*보세요[.?!]?/g, `빼면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/곱해\s*보세요[.?!]?/g, `곱하면 정답은 ${targetAns}이(가) 됩니다.`)
    .replace(/나누어\s*보세요[.?!]?/g, `나누면 정답은 ${targetAns}이(가) 됩니다.`)
    .trim();
}

function getProblemContextForAI(item) {
  if (!item) return { qText: '', targetAns: '', choiceInfo: '', rawCorrectChoice: '', whyReason: '' };
  const isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  const targetAns = isChoice
    ? `${item.ans}번 (${item.choices[parseInt(item.ans, 10) - 1] || ''})`
    : ((item.num !== undefined && item.den !== undefined) ? `${item.num}/${item.den}` : String(item.ans || ''));

  // 1순위: checkTip(명쾌한 해설), 2순위: 다듬어진 h1(핵심 원리)
  let whyReason = '';
  if (item.checkTip) {
    whyReason = item.checkTip;
  } else {
    const cleanedH1 = cleanHintIntoExplanation(item.h1, targetAns);
    const cleanedH2 = cleanHintIntoExplanation(item.h2, targetAns);
    whyReason = [cleanedH1, cleanedH2].filter(Boolean).join(' ');
  }

  if (isChoice) {
    const ansIdx = parseInt(item.ans, 10) - 1;
    const rawChoice = item.choices[ansIdx] || `${item.ans}번`;
    return {
      isChoice: true,
      qText: item.q || '',
      choiceInfo: `선택지 목록: ${item.choices.join(' / ')}`,
      targetAns: `${item.ans}번 (${rawChoice})`,
      rawCorrectChoice: rawChoice.replace(/^\d+번:\s*/, '').trim(),
      whyReason: whyReason || `문제의 핵심 원리에 따라 ${rawChoice}이(가) 올바른 답이기 때문이에요.`
    };
  }

  return {
    isChoice: false,
    qText: item.q || '',
    choiceInfo: '',
    targetAns: targetAns,
    rawCorrectChoice: targetAns,
    whyReason: whyReason || `문제의 원리에 따라 차근차근 계산하면 정답은 ${targetAns}이(가) 됩니다.`
  };
}

function isStudentAnswerRight(userText, item) {
  if (!item || !userText) return false;
  const normUser = normalizeMathText(userText);
  const ctx = getProblemContextForAI(item);

  if (ctx.isChoice) {
    const ansNum = String(item.ans).trim();
    const normChoiceFormula = normalizeMathText(ctx.rawCorrectChoice);
    const corePart = normChoiceFormula.replace(/^□/, '');

    if (
      normUser === ansNum ||
      normUser === `${ansNum}번` ||
      normUser.includes(`${ansNum}번`) ||
      (normChoiceFormula && normUser.includes(normChoiceFormula)) ||
      (corePart && corePart.length >= 2 && normUser.includes(corePart))
    ) {
      return true;
    }
    return false;
  }

  const normTarget = normalizeMathText(ctx.targetAns);
  if (
    normUser === normTarget ||
    (item.unit && normUser === normalizeMathText(`${ctx.targetAns}${item.unit}`)) ||
    (Array.isArray(item.accept) && item.accept.some(a => normUser === normalizeMathText(a)))
  ) {
    return true;
  }
  return false;
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

  const ctx = getProblemContextForAI(state.currentItem);

  const firstPrompt = [
    `현재 문제: ${ctx.qText}`,
    ctx.choiceInfo ? `${ctx.choiceInfo}` : '',
    `이 문제의 실제 정답(절대 학생에게 먼저 말하지 말 것!): ${ctx.targetAns}`,
    `참고 원리: ${state.currentItem?.h1 || ''} / ${state.currentItem?.h2 || ''}`,
    `현재 상황: ${situationDesc}`,
    `규칙:`,
    `1. 초등학생 눈높이에 맞춰 다정하게 한 문장으로 격려하세요.`,
    `2. 정답("${ctx.targetAns}")을 절대 직접 알려주지 마세요.`,
    `3. 학생이 간단한 숫자나 단어로 쉽게 대답할 수 있는 첫 번째 징검다리 질문을 딱 한 가지만 던져주세요.`
  ].filter(Boolean).join('\n');

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

  // 직전 AI 선생님의 질문을 가져와서 맥락 파악에 활용
  const prevModelMessages = (state.aiChatHistory || []).filter(m => m.role === 'model');
  const lastAiQuestion = prevModelMessages.length > 0 ? prevModelMessages[prevModelMessages.length - 1].text : '';

  state.aiChatHistory.push({ role: 'user', text: userText });
  renderAiChatLog();

  const item = state.currentItem || {};
  const ctx = getProblemContextForAI(item);

  // 학생이 최종 정답을 정확히 말했을 때: 즉시 칭찬 + 깔끔한 원리 정리 + 위쪽 정답 칸 입력 안내!
  if (isStudentAnswerRight(userText, item)) {
    const actionGuide = ctx.isChoice
      ? `👉 <b>이제 위쪽 문제에서 [${ctx.targetAns}] 보기 버튼을 직접 눌러보세요!</b>`
      : `👉 <b>이제 위쪽 문제의 정답 입력 칸에 [${ctx.targetAns}]을(를) 입력하고 [정답 확인하기] 버튼을 눌러보세요!</b>`;

    const instantPraise = [
      `🎉 <b>딩동댕! 정확해요! 정답은 [${ctx.targetAns}]입니다!</b> 👏`,
      `<div style="margin-top:8px; padding:10px 12px; background:#ffffff; border-left:4px solid #0d9488; border-radius:6px; color:#134e4a; font-size:14px;">💡 <b>핵심 원리 정리:</b><br>${ctx.whyReason}</div>`,
      `<div style="margin-top:8px; padding:8px 12px; background:#fef08a; color:#854d0e; border-radius:8px; font-weight:bold;">${actionGuide}</div>`
    ].join('');

    state.aiChatHistory.push({ role: 'model', text: instantPraise });
    renderAiChatLog();
    return;
  }

  log.innerHTML += `<div class="chat-bubble chat-ai">⏳ AI 선생님이 답변을 적고 있어요...</div>`;
  log.scrollTop = log.scrollHeight;

  const systemGuide = [
    `당신은 친절하지만 정확한 초등 수학 소크라테스 AI 선생님입니다.`,
    `현재 원래 문제: "${ctx.qText}"`,
    ctx.choiceInfo ? `${ctx.choiceInfo}` : '',
    `원래 문제의 최종 정답(비밀): "${ctx.targetAns}" (핵심 원리: ${ctx.whyReason})`,
    `방금 직전에 당신(AI 선생님)이 학생에게 물었던 질문: "${lastAiQuestion}"`,
    `방금 학생이 입력한 대답: "${userText}" (주의: 이 대답은 아직 최종 정답 "${ctx.targetAns}"이 아닙니다!)`,
    `반드시 지킬 핵심 규칙:`,
    `1. [거짓 칭찬 및 스포일러 절대 금지] 학생이 방금 입력한 대답("${userText}")이 당신의 직전 질문에 대해 틀린 답이라면, 절대 맞았다고 칭찬하거나 학생이 정답을 알고 있다고 착각하지 마세요! 또한 최종 정답("${ctx.targetAns}")을 당신이 먼저 말하면 절대 안 됩니다.`,
    `2. [학생이 틀린 답을 말했을 때] "아하, ${userText}(이)라고 생각했군요! 하지만 다시 한번 살펴볼까요?"처럼 학생이 적은 숫자를 정확히 언급하며 왜 아닌지 짚어주고, 더 쉬운 힌트 질문을 던지세요.`,
    `3. [학생이 중간 징검다리 질문만 맞혔을 때] 그 징검다리 대답만 칭찬하고, 최종 정답("${ctx.targetAns}")을 구하기 위한 다음 단계 계산 질문을 이어서 던지세요.`,
    `4. 만약 학생이 "모르겠어요"라고 하면 가장 쉬운 덧셈·곱셈·나눗셈 단위로 쪼개어 질문하세요.`,
    `5. 만약 학생의 대답이 최종 정답("${ctx.targetAns}")과 완전히 같은 뜻이라면 칭찬 후 맨 끝에 "[완료]"라고 적으세요.`
  ].filter(Boolean).join('\n');

  let reply = await callGeminiSocraticAPI(systemGuide, state.aiChatHistory);

  if (reply.includes('[완료]')) {
    reply = reply.replace(/\[완료\]/g, '').trim();
    const appendGuide = ctx.isChoice
      ? `<div style="margin-top:8px; padding:8px 12px; background:#fef08a; color:#854d0e; border-radius:8px; font-weight:bold;">👉 이제 위쪽 문제에서 [${ctx.targetAns}] 보기 버튼을 직접 눌러보세요!</div>`
      : `<div style="margin-top:8px; padding:8px 12px; background:#fef08a; color:#854d0e; border-radius:8px; font-weight:bold;">👉 이제 위쪽 문제의 정답 입력 칸에 [${ctx.targetAns}]을(를) 입력하고 [정답 확인하기] 버튼을 눌러보세요!</div>`;
    reply += appendGuide;
  }

  state.aiChatHistory.push({ role: 'model', text: reply });
  renderAiChatLog();
}

async function callGeminiSocraticAPI(promptText, historyArr) {
  let apiKey = (typeof getSavedApiKey === 'function') ? getSavedApiKey() : '';
  if (!apiKey && typeof loadCloudApiKey === 'function') {
    await loadCloudApiKey();
    apiKey = (typeof getSavedApiKey === 'function') ? getSavedApiKey() : '';
  }

  if (!apiKey) {
    return `💡 (API 키 확인 필요) 우측 상단 [⚙️ API 키 설정]에서 키를 저장해 주세요. 지금은 아래 힌트를 참고해 보세요: ${state.currentItem ? (state.currentItem.h2 || state.currentItem.h1) : ''}`;
  }

  const models = [
    'gemini-2.5-flash-lite',
    'gemini-2.0-flash',
    'gemini-2.5-flash',
    'gemini-3.1-flash-lite-preview'
  ];

  const recentLogs = (historyArr || []).slice(-6).map(h => `${h.role === 'model' ? 'AI 선생님' : '학생'}: ${h.text}`).join('\n');
  const fullPrompt = recentLogs ? `[이전 대화 내역]\n${recentLogs}\n\n[현재 지시]\n${promptText}` : promptText;

  let lastErrorMsg = '';

  for (const modelName of models) {
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1024
          }
        })
      });

      const data = await res.json();

      if (!res.ok) {
        lastErrorMsg = data?.error?.message || `HTTP ${res.status}`;
        if (res.status === 400 || res.status === 403) {
          break;
        }
        continue;
      }

      const parts = data?.candidates?.[0]?.content?.parts || [];
      const text = parts.map(p => p.text || '').join('').trim();
      if (text) return text.trim();
    } catch (e) {
      lastErrorMsg = e.message;
    }
  }

  return `앗, AI 선생님 연결 확인이 필요해요! (원인: ${lastErrorMsg || '응답 지연'})<br>대신 결정적 힌트를 드릴게요: ${state.currentItem ? (state.currentItem.h2 || state.currentItem.h1) : '위 문제를 천천히 다시 읽어보세요!'}`;
}