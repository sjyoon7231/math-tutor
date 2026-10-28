// =========================================================================
// 🪜 tutor-helper.js - 스몰 스텝 & 소크라테스 AI 선생님 (클로드·챗GPT 10대 검수 완벽 반영본)
// =========================================================================

// -------------------------------------------------------------------------
// 0. 공통 유틸리티: HTML 이스케이프, 수학 텍스트 정규화, 데이터 형식 자체 표준화
// -------------------------------------------------------------------------
function escapeHtml(s) {
  if (s === undefined || s === null) return '';
  return String(s)
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, ''');
}

function normalizeMathText(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/\s+/g, '')
    .replace(/네모|빈칸/g, '□')
    .replace(/곱하기|\*|x|X/g, '×')
    .replace(/나누기/g, '÷')
    .replace(/더하기/g, '+')
    .replace(/빼기/g, '-');
}

// app.js를 거치지 않고 원본 데이터(a, options, 0-index ans)가 바로 들어와도 완벽히 호환되도록 보장!
function ensureNormalizedItem(item) {
  if (!item || typeof item !== 'object') return item;

  // 1) 객관식 options(0부터 시작) -> choices(1부터 시작) 변환
  if (Array.isArray(item.options) && !item.choices) {
    item.choices = item.options.map((opt, idx) => {
      const clean = String(opt ?? '').replace(/^\d+번\s*[:.]?\s*/, '');
      return `${idx + 1}번: ${clean}`;
    });
    if (typeof item.ans === 'number') {
      item.ans = String(item.ans + 1);
    } else if (item.a !== undefined && item.ans === undefined && !isNaN(Number(item.a))) {
      item.ans = String(Number(item.a) + 1);
    }
  }

  // 2) 주관식 정답 a <-> ans 통일 (숫자 0이 사라지지 않도록 !== undefined 체크)
  if (item.ans === undefined && item.a !== undefined) {
    item.ans = String(item.a);
  }
  if (item.a === undefined && item.ans !== undefined) {
    item.a = String(item.ans);
  }

  // 3) 분수(num/den) 정답 문자열 생성
  if (item.num !== undefined && item.den !== undefined && (item.ans === undefined || item.ans === '')) {
    item.ans = item.whole ? `${item.whole}과 ${item.num}/${item.den}` : `${item.num}/${item.den}`;
    item.a = item.ans;
  }

  // 4) 스몰 스텝(steps) 내부의 a <-> ans 통일
  if (Array.isArray(item.steps)) {
    item.steps.forEach(st => {
      if (!st || typeof st !== 'object') return;
      if (st.ans === undefined && st.a !== undefined) st.ans = String(st.a);
      if (st.a === undefined && st.ans !== undefined) st.a = String(st.ans);
    });
  }

  return item;
}

// 스몰 스텝 단일 계단 정답 판정 (기본 정답 + accept 배열 모두 검사)
function isSmallStepAnswerMatch(userVal, st) {
  if (!st || userVal === undefined || userVal === null) return false;
  const rawVal = String(userVal).trim();
  if (rawVal === '') return false;

  const targetStepAns = String(st.ans ?? st.a ?? '');
  const stepAccepts = [targetStepAns].concat(Array.isArray(st.accept) ? st.accept.map(String) : []);
  const normUser = normalizeMathText(rawVal);

  return stepAccepts.some(a => a !== '' && normalizeMathText(a) === normUser);
}

// -------------------------------------------------------------------------
// 🪜 1. 스몰 스텝(계단식 빈칸 채우기) 도우미 모듈
// -------------------------------------------------------------------------
function getSmallStepHTML() {
  return `
    <div id="small-step-box" class="small-step-box">
      <div class="small-step-title">🪜 1단계 도우미: 차근차근 빈칸 채우기 (스몰 스텝)</div>
      <div id="small-step-list"></div>
    </div>
  `;
}

function buildSmallSteps(rawItem) {
  const item = ensureNormalizedItem(rawItem);
  if (!item) return [];

  if (item.steps && Array.isArray(item.steps) && item.steps.length > 0) {
    return item.steps;
  }

  const q = item.q || "";

  // 뒤에 소수점(.)이나 분수(/), 대분수('과', '와')가 붙지 않은 순수 '(분수) ÷ (자연수)'일 때만 자동 계단 생성!
  if (!/÷\s*\d+\s*[./과와]/.test(q)) {
    const mixedMatch = q.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)(?![.\d/과와])/);
    if (mixedMatch) {
      const w = parseInt(mixedMatch[1], 10);
      const n = parseInt(mixedMatch[2], 10);
      const d = parseInt(mixedMatch[3], 10);
      const c = parseInt(mixedMatch[4], 10);
      if (c > 0) {
        const impN = w * d + n;
        const rawD = d * c;
        return [
          { q: `1계단: 대분수 ${w}과 ${n}/${d}을 가분수로 바꾸면 몇 분의 몇일까요? 분자(${w}×${d}+${n})에 들어갈 숫자를 적어보세요.`, ans: String(impN) },
          { q: `2계단: 나누기 ${c}(÷ ${c})를 곱셈(× 1/${c})으로 바꾸어 분모 ${d}에 ${c}를 곱하면(${d}×${c}) 분모는 얼마가 될까요?`, ans: String(rawD) }
        ];
      }
    }

    const fracMatch = q.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)(?![.\d/과와])/);
    if (fracMatch) {
      const n = parseInt(fracMatch[1], 10);
      const d = parseInt(fracMatch[2], 10);
      const c = parseInt(fracMatch[3], 10);
      if (c > 0) {
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
  }

  if (item.num !== undefined && item.den !== undefined) {
    return [
      { q: `1계단: (${item.h1 || '핵심 원리를 떠올려 보세요'}) 구하려는 기약분수의 분자(위쪽 숫자)는 얼마인가요?`, ans: String(item.num) },
      { q: `2계단: 그렇다면 기약분수의 분모(아래쪽 숫자)는 얼마인가요?`, ans: String(item.den) }
    ];
  }

  const fallbackAns = String(item.ans ?? item.a ?? '');
  return [
    {
      q: `1계단: 힌트를 다시 살펴보며 문제에서 구하려는 정답을 천천히 적어보세요. (${item.h1 || ''})`,
      ans: fallbackAns,
      accept: Array.isArray(item.accept) ? item.accept : []
    }
  ];
}

function activateSmallStepIfNeeded() {
  const box = document.getElementById('small-step-box');
  const list = document.getElementById('small-step-list');
  if (!box || !list || !state.currentItem) return;

  ensureNormalizedItem(state.currentItem);
  state.smallSteps = buildSmallSteps(state.currentItem);
  state.smallStepIdx = 0;
  state.activeSmallStepForAI = null;
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
    const stepAns = st.ans ?? st.a ?? '';
    return `
      <div class="step-item">
        <div class="step-q">${st.q}</div>
        <div class="step-input-row">
          <input type="text" id="ss-input-${idx}" class="step-mini-input" value="${isDone ? escapeHtml(stepAns) : ''}" ${isDone ? 'disabled' : ''} placeholder="답 입력" onkeydown="if(event.key==='Enter') checkSmallStep(${idx})">
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
  // 이미 지나간 계단이나 미래 계단의 중복 호출 방지
  if (idx !== state.smallStepIdx) return;

  const st = state.smallSteps[idx];
  const inp = document.getElementById(`ss-input-${idx}`);
  const msg = document.getElementById(`ss-msg-${idx}`);
  if (!st || !inp || !msg) return;

  const val = inp.value.trim();
  if (!val) {
    msg.style.color = '#dc2626';
    msg.innerText = '빈칸에 알맞은 답을 먼저 적어보세요!';
    return;
  }

  const targetStepAns = String(st.ans ?? st.a ?? '');

  // 기본 정답 또는 accept 배열 안의 허용 정답과 일치하면 통과!
  if (isSmallStepAnswerMatch(val, st)) {
    state.activeSmallStepForAI = null;
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
    state.activeSmallStepForAI = {
      idx: idx,
      q: st.q,
      ans: targetStepAns,
      accept: Array.isArray(st.accept) ? st.accept : []
    };
    openAiTutorForStep(
      `학생이 현재 스몰 스텝 ${idx + 1}계단 질문("${st.q}")을 푸는 중인데, 정답("${targetStepAns}") 대신 "${val}"(오답)이라고 답했습니다.`,
      val,
      st.q,
      targetStepAns
    );
  }
}

// -------------------------------------------------------------------------
// 🤖 2. 소크라테스 AI 선생님 실시간 대화 모듈
// -------------------------------------------------------------------------
let aiIsRequesting = false;
let aiRequestSeq = 0;

function getAiTutorHTML() {
  const rawItem = (typeof state !== 'undefined' && state.currentItem) ? state.currentItem : {};
  const item = ensureNormalizedItem(rawItem) || {};
  const isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  const allText = `${item.q || ''} ${(item.choices || []).join(' ')} ${item.ans ?? ''}`;
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
        <button type="button" id="ai-send-btn" class="ai-send-btn" onclick="sendAiUserMessage()">대답하기</button>
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

// 힌트 말투("~확인해 보세요", "~세어 보세요" 등 모든 "~보세요" 어미)를 깔끔한 설명문으로 변환!
function cleanHintIntoExplanation(rawText, targetAns) {
  if (!rawText) return '';
  return String(rawText)
    .replace(/[^.?!]*?(적어|입력해|골라|찾아|써)\s*보세요[.?!]?/g, '')
    .replace(/(생각|구|계산|더|곱|확인|비교)해\s*보세요[.?!]?/g, `$1하면 정답은 ${targetAns}입니다.`)
    .replace(/빼\s*보세요[.?!]?/g, `빼면 정답은 ${targetAns}입니다.`)
    .replace(/나누어\s*보세요[.?!]?/g, `나누면 정답은 ${targetAns}입니다.`)
    .replace(/세어\s*보세요[.?!]?/g, `세어 보면 정답은 ${targetAns}입니다.`)
    .replace(/옮겨\s*보세요[.?!]?/g, `옮기면 정답은 ${targetAns}입니다.`)
    .replace(/떠올려\s*보세요[.?!]?/g, '떠올리면 쉽게 구할 수 있습니다.')
    .replace(/([가-힣]+)\s*보세요[.?!]?/g, '$1 봅니다.')
    .trim();
}

function getProblemContextForAI(rawItem) {
  const item = ensureNormalizedItem(rawItem);
  if (!item) return { qText: '', targetAns: '', choiceInfo: '', rawCorrectChoice: '', whyReason: '' };

  const cleanQText = String(item.q || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  const rawAnsStr = String(item.ans ?? item.a ?? '');

  const targetAns = isChoice
    ? `${rawAnsStr}번 (${item.choices[parseInt(rawAnsStr, 10) - 1] || ''})`
    : ((item.num !== undefined && item.den !== undefined && !rawAnsStr) ? `${item.num}/${item.den}` : rawAnsStr);

  // 1순위: checkTip, 2순위: 설명문 형태인 item.h2 단독 사용 (지시문 어미가 남는 h1 결합 방지!)
  let whyReason = '';
  if (item.checkTip) {
    whyReason = String(item.checkTip);
  } else if (item.h2) {
    whyReason = String(item.h2);
  } else if (item.h1) {
    whyReason = cleanHintIntoExplanation(item.h1, targetAns);
  }

  if (isChoice) {
    const ansIdx = parseInt(rawAnsStr, 10) - 1;
    const rawChoice = item.choices[ansIdx] || `${rawAnsStr}번`;
    return {
      isChoice: true,
      qText: cleanQText,
      choiceInfo: `선택지 목록: ${item.choices.join(' / ')}`,
      targetAns: `${rawAnsStr}번 (${rawChoice})`,
      rawCorrectChoice: rawChoice.replace(/^\d+번\s*[:.]?\s*/, '').trim(),
      whyReason: whyReason || `문제의 핵심 원리에 따라 ${rawChoice}이(가) 올바른 답이기 때문이에요.`
    };
  }

  return {
    isChoice: false,
    qText: cleanQText,
    choiceInfo: '',
    targetAns: targetAns,
    rawCorrectChoice: targetAns,
    whyReason: whyReason || `문제의 원리에 따라 차근차근 계산하면 정답은 ${targetAns}이(가) 됩니다.`
  };
}

// 본문제 최종 정답 판정 ("1번은 아니고 2번" 같은 부정문이나 다중 번호 오판 방지)
function isStudentAnswerRight(userText, rawItem) {
  const item = ensureNormalizedItem(rawItem);
  if (!item || userText === undefined || userText === null) return false;
  const rawStr = String(userText).trim();
  if (!rawStr) return false;

  // 부정 표현("아니고", "아니다", "말고")이 섞여 있으면 자동 통과시키지 않음
  if (/아니고|아닌|아닙니다|말고/.test(rawStr)) return false;

  const normUser = normalizeMathText(rawStr);
  const ctx = getProblemContextForAI(item);

  if (ctx.isChoice) {
    const ansNum = String(item.ans ?? '').trim();
    const normChoiceFormula = normalizeMathText(ctx.rawCorrectChoice);

    // 학생이 입력한 문장에 여러 개의 보기 번호(예: "1번, 2번")가 들어있으면 자동 통과 제외
    const mentionedNums = rawStr.match(/\d+(?=\s*번)/g);
    if (mentionedNums && mentionedNums.some(n => n !== ansNum)) {
      return false;
    }

    if (
      normUser === ansNum ||
      normUser === `${ansNum}번` ||
      normUser === `${ansNum}번입니다` ||
      (normChoiceFormula && normUser === normChoiceFormula)
    ) {
      return true;
    }
    return false;
  }

  const normTarget = normalizeMathText(ctx.targetAns);
  if (
    normUser === normTarget ||
    (item.unit && normUser === normalizeMathText(`${ctx.targetAns}${item.unit}`)) ||
    (Array.isArray(item.accept) && item.accept.some(a => normUser === normalizeMathText(String(a))))
  ) {
    return true;
  }
  return false;
}

// 이전 스몰 스텝에서 이미 확인한 계단 결과 요약 생성 (AI에게 맥락 제공)
function getPreviousSmallStepsSummary() {
  if (!state.activeSmallStepForAI || !Array.isArray(state.smallSteps)) return '';
  const curIdx = state.activeSmallStepForAI.idx;
  if (curIdx <= 0) return '';
  const prevLines = [];
  for (let i = 0; i < curIdx; i++) {
    const st = state.smallSteps[i];
    if (st) prevLines.push(`- ${st.q} ➔ 확인된 답: ${st.ans ?? st.a}`);
  }
  return prevLines.length > 0 ? `앞 단계에서 이미 확인한 사실:\n${prevLines.join('\n')}` : '';
}

async function openAiTutorForStep(situationDesc, wrongVal = '', stepQ = '', stepAns = '') {
  const box = document.getElementById('ai-tutor-box');
  const log = document.getElementById('ai-chat-log');
  if (!box || !log) return;

  const myReqId = ++aiRequestSeq;
  aiIsRequesting = true;

  box.style.display = 'block';
  state.aiChatHistory = [];
  log.innerHTML = `<div class="chat-bubble chat-ai">⏳ 소크라테스 AI 선생님이 생각 중이에요...</div>`;
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const ctx = getProblemContextForAI(state.currentItem);
  const focusQ = stepQ || ctx.qText;
  const focusAns = (stepAns !== undefined && stepAns !== '') ? stepAns : ctx.targetAns;
  const prevStepsInfo = getPreviousSmallStepsSummary();

  const firstPrompt = [
    `[원래 본문제]: "${ctx.qText}"`,
    ctx.choiceInfo && !stepQ ? `${ctx.choiceInfo}` : '',
    prevStepsInfo ? `${prevStepsInfo}` : '',
    `[현재 학생이 풀고 있는 질문]: "${focusQ}"`,
    `[이 질문의 목표 정답(절대 학생에게 먼저 말하지 말 것!)]: "${focusAns}"`,
    `[참고 개념]: ${state.currentItem?.h1 || ''}`,
    `[현재 상황]: ${situationDesc}`,
    `반드시 지킬 규칙:`,
    `1. [거짓 칭찬 절대 금지] 학생은 방금 틀려서 도움을 받으러 왔으므로 "잘했어요!", "맞았어요!" 같은 칭찬으로 시작하지 마세요.`,
    `2. ${wrongVal !== '' ? `"아하, ${wrongVal}(이)라고 생각했군요! 아쉽지만 다시 한번 차근차근 살펴볼까요?"처럼 학생의 오답(${wrongVal})을 부드럽게 짚어주며 시작하세요.` : `"조금 헷갈렸군요! 선생님과 함께 차근차근 풀어 볼까요?"처럼 다정하게 시작하세요.`}`,
    `3. 목표 정답("${focusAns}")을 직접 말하지 말고, "${focusQ}"를 해결하기 위해 가장 먼저 해야 할 아주 쉬운 첫 번째 계산 질문을 딱 한 가지만 던져주세요.`
  ].filter(Boolean).join('\n');

  const fallbackHint = stepQ
    ? `현재 단계 질문("${stepQ}")을 위 원래 문제의 숫자와 비교하며 다시 한번 천천히 계산해 보세요!`
    : (state.currentItem?.h1 || '위 문제를 천천히 다시 읽어보세요!');

  const reply = await callGeminiSocraticAPI(firstPrompt, [], fallbackHint);

  // 응답 대기 중에 다른 문제로 이동했거나 새 요청이 들어왔다면 이전 응답 폐기!
  if (myReqId !== aiRequestSeq) return;
  aiIsRequesting = false;

  state.aiChatHistory.push({ role: 'model', text: reply });
  renderAiChatLog();
}

function renderAiChatLog() {
  const log = document.getElementById('ai-chat-log');
  if (!log) return;

  const visibleMessages = state.aiChatHistory || [];
  log.innerHTML = visibleMessages.map(m => {
    const cls = m.role === 'model' ? 'chat-ai' : 'chat-user';
    const prefix = m.role === 'model' ? '🤖 <b>AI 선생님:</b> ' : '🙋 <b>나:</b> ';
    // 학생 입력은 HTML 태그/부등호(<, >)가 깨지지 않도록 반드시 escapeHtml 적용!
    const body = m.role === 'model' ? m.text : escapeHtml(m.text);
    return `<div class="chat-bubble ${cls}">${prefix}${body}</div>`;
  }).join('');

  log.scrollTop = log.scrollHeight;
}

async function sendAiUserMessage() {
  // 중복 전송(연타) 방지
  if (aiIsRequesting) return;

  const inp = document.getElementById('ai-user-input');
  const log = document.getElementById('ai-chat-log');
  if (!inp || !log) return;

  const userText = inp.value.trim();
  if (!userText) return;
  inp.value = '';

  const prevModelMessages = (state.aiChatHistory || []).filter(m => m.role === 'model');
  const lastAiQuestion = prevModelMessages.length > 0 ? prevModelMessages[prevModelMessages.length - 1].text : '';

  state.aiChatHistory.push({ role: 'user', text: userText });
  renderAiChatLog();

  const item = ensureNormalizedItem(state.currentItem || {});
  const ctx = getProblemContextForAI(item);
  const activeStep = state.activeSmallStepForAI;

  // 1) 만약 현재 '스몰 스텝 계단 문제'를 푸는 중이고, 학생이 그 계단의 정답(또는 accept 허용 답)을 맞혔을 때!
  if (activeStep && isSmallStepAnswerMatch(userText, activeStep)) {
    const stepIdx = activeStep.idx;
    const stepAns = activeStep.ans;
    const stepInput = document.getElementById(`ss-input-${stepIdx}`);
    if (stepInput) stepInput.value = stepAns;

    const praiseStep = [
      `🎉 <b>딩동댕! 맞아요! "${escapeHtml(activeStep.q)}"의 정답은 [${escapeHtml(stepAns)}]입니다!</b> 👏`,
      `<div style="margin-top:8px; padding:8px 12px; background:#dcfce7; color:#166534; border-radius:8px; font-weight:bold;">✅ 위쪽 스몰 스텝 ${stepIdx + 1}계단 빈칸에 [${escapeHtml(stepAns)}]을(를) 자동으로 채워 통과했어요! 이어서 다음 계단이나 위쪽 본문제의 정답을 입력해 보세요!</div>`
    ].join('');

    state.aiChatHistory.push({ role: 'model', text: praiseStep });
    renderAiChatLog();

    checkSmallStep(stepIdx);
    return;
  }

  // 2) 학생이 원래 본문제의 최종 정답을 정확히 말했을 때 (단, 스몰스텝 도중이 아닐 때)
  if (!activeStep && isStudentAnswerRight(userText, item)) {
    const actionGuide = ctx.isChoice
      ? `👉 <b>이제 위쪽 문제에서 [${escapeHtml(ctx.targetAns)}] 보기 버튼을 직접 눌러보세요!</b>`
      : `👉 <b>이제 위쪽 문제의 정답 입력 칸에 [${escapeHtml(ctx.targetAns)}]을(를) 입력하고 [정답 확인하기] 버튼을 눌러보세요!</b>`;

    const instantPraise = [
      `🎉 <b>딩동댕! 정확해요! 구하려는 최종 정답은 [${escapeHtml(ctx.targetAns)}]입니다!</b> 👏`,
      `<div style="margin-top:8px; padding:10px 12px; background:#ffffff; border-left:4px solid #0d9488; border-radius:6px; color:#134e4a; font-size:14px;">💡 <b>핵심 원리 정리:</b><br>${escapeHtml(ctx.whyReason)}</div>`,
      `<div style="margin-top:8px; padding:8px 12px; background:#fef08a; color:#854d0e; border-radius:8px; font-weight:bold;">${actionGuide}</div>`
    ].join('');

    state.aiChatHistory.push({ role: 'model', text: instantPraise });
    renderAiChatLog();
    return;
  }

  const myReqId = ++aiRequestSeq;
  aiIsRequesting = true;
  const sendBtn = document.getElementById('ai-send-btn');
  if (sendBtn) sendBtn.disabled = true;

  log.innerHTML += `<div class="chat-bubble chat-ai">⏳ AI 선생님이 답변을 적고 있어요...</div>`;
  log.scrollTop = log.scrollHeight;

  const currentGoalQ = activeStep ? activeStep.q : ctx.qText;
  const currentGoalAns = activeStep ? activeStep.ans : ctx.targetAns;
  const currentAccepts = activeStep && Array.isArray(activeStep.accept) && activeStep.accept.length > 0
    ? ` (허용 정답: ${activeStep.accept.join(', ')})`
    : '';
  const prevStepsInfo = getPreviousSmallStepsSummary();

  const systemGuide = [
    `당신은 다정하고 정확한 초등 수학 소크라테스 AI 선생님입니다.`,
    `[원래 본문제]: "${ctx.qText}"`,
    prevStepsInfo ? `${prevStepsInfo}` : '',
    `[현재 우리가 풀어야 할 목표 질문]: "${currentGoalQ}"`,
    `[이 목표 질문의 최종 답(비밀)]: "${currentGoalAns}"${currentAccepts} (절대 학생에게 먼저 말하지 마세요!)`,
    `---`,
    `★ [가장 중요한 판정 기준]`,
    `방금 직전에 당신(AI 선생님)이 학생에게 물었던 징검다리 질문: "${lastAiQuestion}"`,
    `방금 학생이 입력한 대답: "${userText}"`,
    `---`,
    `반드시 아래 순서대로 생각하고 답변하세요:`,
    `1단계 (징검다리 정답 판별): 당신이 직전에 물었던 질문("${lastAiQuestion}")에 대해 학생의 대답("${userText}")이 수학적으로 맞는지 먼저 계산하세요!`,
    `   - 직전 질문에 맞는 답을 했을 때는 절대 틀렸다고 하지 말고 "맞아요!"라고 꼭 칭찬하세요!`,
    `2단계 (다음 질문 이어가기): 학생이 직전 징검다리 질문을 맞혔다면, 칭찬한 뒤 곧바로 목표 질문("${currentGoalQ}")의 최종 답("${currentGoalAns}")을 구하기 위한 다음 단계 계산 질문을 던지세요.`,
    `3단계 (틀렸을 때만 교정): 만약 당신이 직전에 물었던 질문("${lastAiQuestion}")에 대해 학생의 대답("${userText}")이 실제로 틀렸을 때만 "아하, ${userText}(이)라고 생각했군요! 하지만 다시 계산해 볼까요?"라고 바로잡아 주세요.`,
    `4단계 (목표 도달 안내): 만약 학생이 목표 질문의 답을 스스로 깨우쳤다면 위쪽 입력 칸에 직접 적어 확인 버튼을 눌러보라고 안내하세요.`
  ].filter(Boolean).join('\n');

  const fallbackHint = activeStep
    ? `위쪽 스몰 스텝 질문("${activeStep.q}")의 힌트를 보고 빈칸에 알맞은 수를 직접 입력해 보세요!`
    : (item.h1 || '위 문제를 천천히 다시 읽어보세요!');

  let reply = await callGeminiSocraticAPI(systemGuide, state.aiChatHistory, fallbackHint);

  if (myReqId !== aiRequestSeq) return;
  aiIsRequesting = false;
  if (sendBtn) sendBtn.disabled = false;

  // AI가 자체 판단한 [완료] 표시는 텍스트에서만 제거하고, 자동 계단 통과는 프로그램 채점(checkSmallStep)으로만 처리!
  reply = reply.replace(/\[완료\]/g, '').trim();

  state.aiChatHistory.push({ role: 'model', text: escapeHtml(reply) });
  renderAiChatLog();
}

async function callGeminiSocraticAPI(promptText, historyArr, fallbackHintText = '') {
  let apiKey = (typeof getSavedApiKey === 'function') ? getSavedApiKey() : '';
  if (!apiKey && typeof loadCloudApiKey === 'function') {
    await loadCloudApiKey();
    apiKey = (typeof getSavedApiKey === 'function') ? getSavedApiKey() : '';
  }

  const safeHint = escapeHtml(fallbackHintText || (state.currentItem ? state.currentItem.h1 : '위 문제를 천천히 다시 읽어보세요!'));

  if (!apiKey) {
    return `💡 (API 키 확인 필요) 우측 상단 [⚙️ API 키 설정]에서 키를 확인해 주세요. 지금은 이 힌트를 참고해 보세요: ${safeHint}`;
  }

  // ★ 종료된 2.0-flash와 preview 모델을 제거하고 최신 정식 모델 3종으로 구성!
  const models = [
    'gemini-2.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-2.5-flash'
  ];

  const recentLogs = (historyArr || []).slice(-6).map(h => `${h.role === 'model' ? 'AI 선생님' : '학생'}: ${h.text}`).join('\n');
  const fullPrompt = recentLogs ? `[지금까지의 대화 내역]\n${recentLogs}\n\n[현재 지시]\n${promptText}` : promptText;

  let lastErrorMsg = '';

  for (const modelName of models) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10초 타임아웃으로 무한 대기 방지

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024
          }
        })
      });
      clearTimeout(timeoutId);

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
      clearTimeout(timeoutId);
      lastErrorMsg = e.name === 'AbortError' ? '응답 시간 초과(10초)' : e.message;
    }
  }

  return `앗, AI 선생님 연결이 잠시 지연되고 있어요! (${escapeHtml(lastErrorMsg || '응답 지연')})<br>대신 징검다리 힌트를 드릴게요: ${safeHint}`;
}