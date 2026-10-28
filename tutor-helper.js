// =========================================================================
// tutor-helper.js - 클로드 & 챗GPT 2차 심층 검수 100% 완벽 반영 완본
// =========================================================================

function escapeHtml(s) {
  if (s === undefined || s === null) return "";
  return String(s)
    .replace(/&/g, "\x26amp;")
    .replace(/</g, "\x26lt;")
    .replace(/>/g, "\x26gt;")
    .replace(/\x22/g, "\x26quot;")
    .replace(/\x27/g, "\x26#39;");
}

function normalizeMathText(str) {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/\s+/g, "")
    .replace(/네모|빈칸/g, "□")
    .replace(/곱하기|\*|x|X/g, "×")
    .replace(/나누기/g, "÷")
    .replace(/더하기/g, "+")
    .replace(/빼기/g, "-");
}

// ★ 2번 지적 완벽 해결: 원본(state.currentItem)을 절대 건드리지 않고 복사본(Object.assign)만 만들어 반환!
function ensureNormalizedItem(item) {
  if (!item || typeof item !== "object") return item;
  if (item.__normalized) return item;

  var copy = Object.assign({}, item, { __normalized: true });

  if (Array.isArray(item.steps)) {
    copy.steps = item.steps.map(function(st) {
      if (!st || typeof st !== "object") return st;
      var stCopy = Object.assign({}, st);
      if (stCopy.ans === undefined && stCopy.a !== undefined) stCopy.ans = String(stCopy.a);
      if (stCopy.a === undefined && stCopy.ans !== undefined) stCopy.a = String(stCopy.ans);
      return stCopy;
    });
  }

  if (Array.isArray(copy.options) && !copy.choices) {
    copy.choices = copy.options.map(function(opt, idx) {
      var clean = String(opt !== undefined && opt !== null ? opt : "").replace(/^\d+번\s*[:.]?\s*/, "");
      return (idx + 1) + "번: " + clean;
    });
    if (typeof copy.ans === "number") {
      copy.ans = String(copy.ans + 1);
    } else if (copy.a !== undefined && copy.ans === undefined && !isNaN(Number(copy.a))) {
      copy.ans = String(Number(copy.a) + 1);
    }
  } else if (Array.isArray(copy.choices)) {
    copy.choices = copy.choices.map(function(opt, idx) {
      var str = String(opt !== undefined && opt !== null ? opt : "");
      return /^\d+번/.test(str) ? str : ((idx + 1) + "번: " + str);
    });
  }

  if (copy.ans === undefined && copy.a !== undefined) {
    copy.ans = String(copy.a);
  }
  if (copy.a === undefined && copy.ans !== undefined) {
    copy.a = String(copy.ans);
  }

  if (copy.num !== undefined && copy.den !== undefined && (copy.ans === undefined || copy.ans === "")) {
    copy.ans = copy.whole ? (copy.whole + "과 " + copy.num + "/" + copy.den) : (copy.num + "/" + copy.den);
    copy.a = copy.ans;
  }

  return copy;
}

function isSmallStepAnswerMatch(userVal, st) {
  if (!st || userVal === undefined || userVal === null) return false;
  var rawVal = String(userVal).trim();
  if (rawVal === "") return false;

  var targetStepAns = String(st.ans !== undefined ? st.ans : (st.a !== undefined ? st.a : ""));
  var stepAccepts = [targetStepAns].concat(Array.isArray(st.accept) ? st.accept.map(String) : []);
  var normUser = normalizeMathText(rawVal);

  return stepAccepts.some(function(a) {
    return a !== "" && normalizeMathText(a) === normUser;
  });
}

// -------------------------------------------------------------------------
// 1. 스몰 스텝(계단식 빈칸 채우기) 도우미 모듈
// -------------------------------------------------------------------------
function getSmallStepHTML() {
  return "<div id=\x22small-step-box\x22 class=\x22small-step-box\x22>" +
    "<div class=\x22small-step-title\x22>🪜 1단계 도우미: 차근차근 빈칸 채우기 (스몰 스텝)</div>" +
    "<div id=\x22small-step-list\x22></div>" +
    "</div>";
}

function gcdTwoNums(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b > 0) {
    var t = a % b;
    a = b;
    b = t;
  }
  return a || 1;
}

function buildSmallSteps(rawItem) {
  var item = ensureNormalizedItem(rawItem);
  if (!item) return [];

  if (item.steps && Array.isArray(item.steps) && item.steps.length > 0) {
    return item.steps;
  }

  var q = String(item.q || "");

  // ★ 6번 지적 반영: 덧셈(+)이나 뺄셈(-), 다른 연산이 섞인 복합식이 아닐 때만 자동 분수 계단 생성 + 마지막 기약분수 확인 단계 포함!
  var hasOtherOps = /[+\-]/.test(q) || (q.match(/[÷×]/g) || []).length > 1;

  if (!hasOtherOps && !/÷\s*\d+\s*[./과와]/.test(q)) {
    var mixedMatch = q.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)(?![.\d/과와])/);
    if (mixedMatch) {
      var w = parseInt(mixedMatch[1], 10);
      var n = parseInt(mixedMatch[2], 10);
      var d = parseInt(mixedMatch[3], 10);
      var c = parseInt(mixedMatch[4], 10);
      if (c > 0) {
        var impN = w * d + n;
        var rawD = d * c;
        var g1 = gcdTwoNums(impN, rawD);
        var simpN = impN / g1;
        var simpD = rawD / g1;
        var stepsArr = [
          { q: "1계단: 대분수 " + w + "과 " + n + "/" + d + "을 가분수로 바꾸면 분자(" + w + "×" + d + "+" + n + ")는 얼마인가요?", ans: String(impN) },
          { q: "2계단: 나누기 " + c + "(÷ " + c + ")를 곱셈(× 1/" + c + ")으로 바꾸어 분모 " + d + "에 " + c + "를 곱하면 분모는 얼마인가요?", ans: String(rawD) }
        ];
        if (g1 > 1) {
          stepsArr.push({ q: "3계단: " + impN + "/" + rawD + "을 기약분수로 약분하면 몇 분의 몇인가요? (분자/분모 형식으로 입력)", ans: simpN + "/" + simpD });
        }
        return stepsArr;
      }
    }

    var fracMatch = q.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)(?![.\d/과와])/);
    if (fracMatch) {
      var fn = parseInt(fracMatch[1], 10);
      var fd = parseInt(fracMatch[2], 10);
      var fc = parseInt(fracMatch[3], 10);
      if (fc > 0) {
        if (fn % fc === 0) {
          return [
            { q: "1계단: 분모(" + fd + ")는 그대로 두고, 분자 " + fn + "을 " + fc + "로 나누면(" + fn + " ÷ " + fc + ") 분자는 얼마가 될까요?", ans: String(fn / fc) },
            { q: "2계단: 분모 자리에 그대로 적어야 할 숫자는 얼마일까요?", ans: String(fd) }
          ];
        }
        var rawD2 = fd * fc;
        var g2 = gcdTwoNums(fn, rawD2);
        var fSteps = [
          { q: "1계단: 나누기 " + fc + "(÷ " + fc + ")를 곱하기 1/" + fc + "로 바꾸면 분자(" + fn + "×1)는 얼마가 될까요?", ans: String(fn) },
          { q: "2계단: 분모 " + fd + "에 " + fc + "를 곱하면(" + fd + " × " + fc + ") 분모는 얼마가 될까요?", ans: String(rawD2) }
        ];
        if (g2 > 1) {
          fSteps.push({ q: "3계단: " + fn + "/" + rawD2 + "을 약분하여 기약분수로 나타내면 얼마인가요? (분자/분모 형식)", ans: (fn / g2) + "/" + (rawD2 / g2) });
        }
        return fSteps;
      }
    }
  }

  if (item.num !== undefined && item.den !== undefined) {
    return [
      { q: "1계단: (" + (item.h1 || "핵심 원리를 떠올려 보세요") + ") 구하려는 기약분수의 분자(위쪽 숫자)는 얼마인가요?", ans: String(item.num) },
      { q: "2계단: 그렇다면 기약분수의 분모(아래쪽 숫자)는 얼마인가요?", ans: String(item.den) }
    ];
  }

  var fallbackAns = String(item.ans !== undefined ? item.ans : (item.a !== undefined ? item.a : ""));
  return [
    {
      q: "1계단: 힌트를 다시 살펴보며 문제에서 구하려는 정답을 천천히 적어보세요. (" + (item.h1 || "") + ")",
      ans: fallbackAns,
      accept: Array.isArray(item.accept) ? item.accept : []
    }
  ];
}

function activateSmallStepIfNeeded() {
  var box = document.getElementById("small-step-box");
  var list = document.getElementById("small-step-list");
  if (!box || !list || !state.currentItem) return;

  // ★ 2번 & 4번 지적 반영: state.currentItem 원본 변경 호출 제거 + 진행 중이던 이전 AI 요청 무효화!
  cancelPendingAiRequests();
  state.smallSteps = buildSmallSteps(state.currentItem);
  state.smallStepIdx = 0;
  state.activeSmallStepForAI = null;
  box.style.display = "block";
  renderCurrentSmallStep();
  box.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderCurrentSmallStep() {
  var list = document.getElementById("small-step-list");
  if (!list) return;

  var stepsHTML = state.smallSteps.map(function(st, idx) {
    if (idx > state.smallStepIdx) return "";
    var isDone = idx < state.smallStepIdx;
    var stepAns = st.ans !== undefined ? st.ans : (st.a !== undefined ? st.a : "");
    return "<div class=\x22step-item\x22>" +
      "<div class=\x22step-q\x22>" + st.q + "</div>" +
      "<div class=\x22step-input-row\x22>" +
      "<input type=\x22text\x22 id=\x22ss-input-" + idx + "\x22 class=\x22step-mini-input\x22 value=\x22" + (isDone ? escapeHtml(stepAns) : "") + "\x22 " + (isDone ? "disabled" : "") + " placeholder=\x22답 입력\x22 onkeydown=\x22if(event.key===\x27Enter\x27) checkSmallStep(" + idx + ")\x22>" +
      (isDone ? "<span style=\x22color:#166534; font-weight:bold;\x22>✅ 통과!</span>" : "<button type=\x22button\x22 class=\x22step-mini-btn\x22 onclick=\x22checkSmallStep(" + idx + ")\x22>확인</button>") +
      "</div>" +
      "<div id=\x22ss-msg-" + idx + "\x22 class=\x22step-mini-msg\x22></div>" +
      "</div>";
  }).join("");

  list.innerHTML = stepsHTML;
  var curInput = document.getElementById("ss-input-" + state.smallStepIdx);
  if (curInput) curInput.focus();
}

function checkSmallStep(idx) {
  if (idx !== state.smallStepIdx) return;

  var st = state.smallSteps[idx];
  var inp = document.getElementById("ss-input-" + idx);
  var msg = document.getElementById("ss-msg-" + idx);
  if (!st || !inp || !msg) return;

  var val = inp.value.trim();
  if (!val) {
    msg.style.color = "#dc2626";
    msg.innerText = "빈칸에 알맞은 답을 먼저 적어보세요!";
    return;
  }

  var targetStepAns = String(st.ans !== undefined ? st.ans : (st.a !== undefined ? st.a : ""));

  if (isSmallStepAnswerMatch(val, st)) {
    // ★ 4번 지적 반영: 계단을 통과하는 순간 대기 중이던 이전 계단 AI 응답 폐기!
    cancelPendingAiRequests();
    state.activeSmallStepForAI = null;
    state.smallStepIdx++;
    if (state.smallStepIdx < state.smallSteps.length) {
      renderCurrentSmallStep();
    } else {
      renderCurrentSmallStep();
      var list = document.getElementById("small-step-list");
      list.innerHTML += "<div style=\x22margin-top:10px; padding:12px; background:#dcfce7; border-radius:10px; color:#166534; font-weight:bold;\x22>" +
        "🎉 모든 계단을 통과했어요! 이제 위쪽 원래 문제의 정답 입력 칸에 방금 찾은 답을 넣고 [정답 확인하기] 버튼을 눌러보세요!" +
        "</div>";
    }
  } else {
    msg.style.color = "#dc2626";
    msg.innerText = "아쉬워요! 아래에 나타난 소크라테스 AI 선생님과 대화하며 힌트를 얻어보세요!";
    state.activeSmallStepForAI = {
      idx: idx,
      q: st.q,
      ans: targetStepAns,
      accept: Array.isArray(st.accept) ? st.accept : []
    };
    openAiTutorForStep(
      "학생이 현재 스몰 스텝 " + (idx + 1) + "계단 질문(\x22" + st.q + "\x22)을 푸는 중인데, 정답(\x22" + targetStepAns + "\x22) 대신 \x22" + val + "\x22(오답)이라고 답했습니다.",
      val,
      st.q,
      targetStepAns
    );
  }
}

// -------------------------------------------------------------------------
// 2. 소크라테스 AI 선생님 실시간 대화 모듈
// -------------------------------------------------------------------------
var aiIsRequesting = false;
var aiRequestSeq = 0;

function setAiSendButtonDisabled(disabled) {
  var sendBtn = document.getElementById("ai-send-btn");
  if (sendBtn) sendBtn.disabled = Boolean(disabled);
}

function cancelPendingAiRequests() {
  aiRequestSeq++;
  aiIsRequesting = false;
  setAiSendButtonDisabled(false);
}

// ★ 3번 지적 완벽 반영: 새 문제로 넘어갈 때 AI 상태와 진행 중인 비동기 요청을 완전히 초기화!
function resetAiTutorState() {
  aiRequestSeq++;
  aiIsRequesting = false;
  if (typeof state !== "undefined" && state) {
    state.aiChatHistory = [];
    state.activeSmallStepForAI = null;
  }
  setAiSendButtonDisabled(false);
}

function getAiTutorHTML() {
  var rawItem = (typeof state !== "undefined" && state.currentItem) ? state.currentItem : {};
  var item = ensureNormalizedItem(rawItem) || {};
  var isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  var ansText = item.ans !== undefined ? item.ans : "";
  var allText = (item.q || "") + " " + (item.choices || []).join(" ") + " " + ansText;
  var needsMathSymbols = /[□×÷]/.test(allText);

  var symbolBtnStyle = "padding:5px 11px; border:1px solid #0d9488; background:#f0fdfa; color:#0f766e; border-radius:8px; font-weight:bold; font-size:14px; cursor:pointer;";
  var btns = [];

  if (needsMathSymbols) {
    if (allText.indexOf("□") !== -1) {
      btns.push("<button type=\x22button\x22 style=\x22" + symbolBtnStyle + "\x22 onclick=\x22insertAiSymbol(\x27□\x27)\x22>□ (네모)</button>");
    }
    btns.push("<button type=\x22button\x22 style=\x22" + symbolBtnStyle + "\x22 onclick=\x22insertAiSymbol(\x27×\x27)\x22>× (곱하기)</button>");
    btns.push("<button type=\x22button\x22 style=\x22" + symbolBtnStyle + "\x22 onclick=\x22insertAiSymbol(\x27÷\x27)\x22>÷ (나누기)</button>");
    btns.push("<button type=\x22button\x22 style=\x22" + symbolBtnStyle + "\x22 onclick=\x22insertAiSymbol(\x27+\x27)\x22>+</button>");
  }

  // ★ 7번 지적 반영: 객관식 보기가 몇 개든 실제 보기 개수(1번~4번 등)만큼 간편 입력 버튼 생성!
  if (isChoice) {
    for (var cIdx = 0; cIdx < item.choices.length; cIdx++) {
      var numLabel = (cIdx + 1) + "번";
      btns.push("<button type=\x22button\x22 style=\x22" + symbolBtnStyle + "\x22 onclick=\x22insertAiSymbol(\x27" + numLabel + "\x27)\x22>" + numLabel + "</button>");
    }
  }

  var helperBarHTML = btns.length > 0
    ? "<div style=\x22display:flex; gap:6px; flex-wrap:wrap; margin-bottom:8px; align-items:center;\x22>" +
      "<span style=\x22font-size:12px; color:#0f766e; font-weight:bold;\x22>⌨️ 간편 입력:</span>" +
      btns.join("") +
      "</div>"
    : "";

  return "<div id=\x22ai-tutor-box\x22 class=\x22ai-tutor-box\x22>" +
    "<div class=\x22ai-tutor-header\x22>🤖 2단계 도우미: 소크라테스 AI 선생님과 문답하기</div>" +
    "<div id=\x22ai-chat-log\x22 class=\x22ai-chat-log\x22></div>" +
    helperBarHTML +
    "<div class=\x22ai-input-row\x22>" +
    "<input type=\x22text\x22 id=\x22ai-user-input\x22 class=\x22ai-input\x22 placeholder=\x22선생님의 질문에 대답을 적어보세요...\x22 onkeydown=\x22if(event.key===\x27Enter\x27) sendAiUserMessage()\x22>" +
    "<button type=\x22button\x22 id=\x22ai-send-btn\x22 class=\x22ai-send-btn\x22 onclick=\x22sendAiUserMessage()\x22>대답하기</button>" +
    "</div>" +
    "</div>";
}

function insertAiSymbol(sym) {
  var inp = document.getElementById("ai-user-input");
  if (!inp) return;
  inp.value = inp.value + sym;
  inp.focus();
}

function cleanHintIntoExplanation(rawText, targetAns) {
  if (!rawText) return "";
  return String(rawText)
    .replace(/[^.?!]*?(적어|입력해|골라|찾아|써)\s*보세요[.?!]?/g, "")
    .replace(/(생각|구|계산|더|곱|확인|비교)해\s*보세요[.?!]?/g, "$1하면 정답은 " + targetAns + "입니다.")
    .replace(/빼\s*보세요[.?!]?/g, "빼면 정답은 " + targetAns + "입니다.")
    .replace(/나누어\s*보세요[.?!]?/g, "나누면 정답은 " + targetAns + "입니다.")
    .replace(/세어\s*보세요[.?!]?/g, "세어 보면 정답은 " + targetAns + "입니다.")
    .replace(/옮겨\s*보세요[.?!]?/g, "옮기면 정답은 " + targetAns + "입니다.")
    .replace(/떠올려\s*보세요[.?!]?/g, "떠올리면 쉽게 구할 수 있습니다.")
    .replace(/([가-힣]+)\s*보세요[.?!]?/g, "$1 봅니다.")
    .trim();
}

function getProblemContextForAI(rawItem) {
  var item = ensureNormalizedItem(rawItem);
  if (!item) return { qText: "", targetAns: "", choiceInfo: "", rawCorrectChoice: "", whyReason: "", diagramInfo: "" };

  var rawQ = String(item.q || "");
  // ★ 8번 지적 반영: SVG 안의 텍스트나 diagramDescription이 있으면 추출하여 AI에게 그림 정보로 제공!
  var svgTexts = [];
  rawQ.replace(/<text[^>]*>([\s\S]*?)<\/text>/gi, function(_, inner) {
    var t = inner.replace(/<[^>]*>/g, "").trim();
    if (t) svgTexts.push(t);
    return "";
  });
  var diagramInfo = item.diagramDescription
    ? String(item.diagramDescription)
    : (svgTexts.length > 0 ? ("그림 속 표시된 텍스트/수치: " + svgTexts.join(", ")) : "");

  var cleanQText = rawQ.replace(/<svg[\s\S]*?<\/svg>/gi, " [그림 참조] ").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  var isChoice = Array.isArray(item.choices) && item.choices.length > 0;
  var rawAnsStr = String(item.ans !== undefined ? item.ans : (item.a !== undefined ? item.a : ""));

  var targetAns = isChoice
    ? (rawAnsStr + "번 (" + (item.choices[parseInt(rawAnsStr, 10) - 1] || "") + ")")
    : ((item.num !== undefined && item.den !== undefined && !rawAnsStr) ? (item.num + "/" + item.den) : rawAnsStr);

  var whyReason = "";
  if (item.checkTip) {
    whyReason = String(item.checkTip);
  } else if (item.h2) {
    whyReason = String(item.h2);
  } else if (item.h1) {
    whyReason = cleanHintIntoExplanation(item.h1, targetAns);
  }

  if (isChoice) {
    var ansIdx = parseInt(rawAnsStr, 10) - 1;
    var rawChoice = item.choices[ansIdx] || (rawAnsStr + "번");
    return {
      isChoice: true,
      qText: cleanQText,
      diagramInfo: diagramInfo,
      choiceInfo: "선택지 목록: " + item.choices.join(" / "),
      targetAns: rawAnsStr + "번 (" + rawChoice + ")",
      rawCorrectChoice: rawChoice.replace(/^\d+번\s*[:.]?\s*/, "").trim(),
      whyReason: whyReason || ("문제의 핵심 원리에 따라 " + rawChoice + "이(가) 올바른 답이기 때문이에요.")
    };
  }

  return {
    isChoice: false,
    qText: cleanQText,
    diagramInfo: diagramInfo,
    choiceInfo: "",
    targetAns: targetAns,
    rawCorrectChoice: targetAns,
    whyReason: whyReason || ("문제의 원리에 따라 차근차근 계산하면 정답은 " + targetAns + "이(가) 됩니다.")
  };
}

function isStudentAnswerRight(userText, rawItem) {
  var item = ensureNormalizedItem(rawItem);
  if (!item || userText === undefined || userText === null) return false;
  var rawStr = String(userText).trim();
  if (!rawStr) return false;

  if (/아니고|아닌|아닙니다|말고/.test(rawStr)) return false;

  var normUser = normalizeMathText(rawStr);
  var ctx = getProblemContextForAI(item);

  if (ctx.isChoice) {
    var ansNum = String(item.ans !== undefined ? item.ans : "").trim();
    var normChoiceFormula = normalizeMathText(ctx.rawCorrectChoice);

    var mentionedNums = rawStr.match(/\d+(?=\s*번)/g);
    if (mentionedNums && mentionedNums.some(function(n) { return n !== ansNum; })) {
      return false;
    }

    if (
      normUser === ansNum ||
      normUser === (ansNum + "번") ||
      normUser === (ansNum + "번입니다") ||
      (normChoiceFormula && normUser === normChoiceFormula)
    ) {
      return true;
    }
    return false;
  }

  var normTarget = normalizeMathText(ctx.targetAns);
  if (
    normUser === normTarget ||
    (item.unit && normUser === normalizeMathText(ctx.targetAns + item.unit)) ||
    (Array.isArray(item.accept) && item.accept.some(function(a) { return normUser === normalizeMathText(String(a)); }))
  ) {
    return true;
  }
  return false;
}

function getPreviousSmallStepsSummary() {
  if (!state.activeSmallStepForAI || !Array.isArray(state.smallSteps)) return "";
  var curIdx = state.activeSmallStepForAI.idx;
  if (curIdx <= 0) return "";
  var prevLines = [];
  for (var i = 0; i < curIdx; i++) {
    var st = state.smallSteps[i];
    if (st) {
      var aVal = st.ans !== undefined ? st.ans : st.a;
      prevLines.push("- " + st.q + " ➔ 확인된 답: " + aVal);
    }
  }
  return prevLines.length > 0 ? ("앞 단계에서 이미 확인한 사실:\n" + prevLines.join("\n")) : "";
}

async function openAiTutorForStep(situationDesc, wrongVal, stepQ, stepAns) {
  wrongVal = wrongVal !== undefined ? wrongVal : "";
  stepQ = stepQ !== undefined ? stepQ : "";
  stepAns = stepAns !== undefined ? stepAns : "";

  var box = document.getElementById("ai-tutor-box");
  var log = document.getElementById("ai-chat-log");
  if (!box || !log) return;

  var myReqId = ++aiRequestSeq;
  var myItemRef = state.currentItem;
  var myStepIdx = state.activeSmallStepForAI ? state.activeSmallStepForAI.idx : -1;

  aiIsRequesting = true;
  setAiSendButtonDisabled(true);

  box.style.display = "block";
  state.aiChatHistory = [];
  log.innerHTML = "<div class=\x22chat-bubble chat-ai\x22>⏳ 소크라테스 AI 선생님이 생각 중이에요...</div>";
  box.scrollIntoView({ behavior: "smooth", block: "center" });

  var ctx = getProblemContextForAI(state.currentItem);
  var focusQ = stepQ || ctx.qText;
  var focusAns = (stepAns !== undefined && stepAns !== "") ? stepAns : ctx.targetAns;
  var prevStepsInfo = getPreviousSmallStepsSummary();

  var firstPrompt = [
    "[원래 본문제]: \x22" + ctx.qText + "\x22",
    ctx.diagramInfo ? ("[그림/도형 정보]: " + ctx.diagramInfo) : "",
    ctx.choiceInfo ? ctx.choiceInfo : "",
    prevStepsInfo ? prevStepsInfo : "",
    "[현재 학생이 풀고 있는 질문]: \x22" + focusQ + "\x22",
    "[이 질문의 목표 정답(절대 학생에게 먼저 말하지 말 것!)]: \x22" + focusAns + "\x22",
    "[참고 개념]: " + (state.currentItem && state.currentItem.h1 ? state.currentItem.h1 : ""),
    "[현재 상황]: " + situationDesc,
    "반드시 지킬 규칙:",
    "1. [거짓 칭찬 절대 금지] 학생은 방금 틀려서 도움을 받으러 왔으므로 잘했어요, 맞았어요 같은 칭찬으로 시작하지 마세요.",
    "2. " + (wrongVal !== "" ? ("아하, " + wrongVal + "(이)라고 생각했군요! 아쉽지만 다시 한번 차근차근 살펴볼까요? 처럼 학생의 오답(" + wrongVal + ")을 부드럽게 짚어주며 시작하세요.") : "조금 헷갈렸군요! 선생님과 함께 차근차근 풀어 볼까요? 처럼 다정하게 시작하세요."),
    "3. 목표 정답(\x22" + focusAns + "\x22)을 직접 말하지 말고, \x22" + focusQ + "\x22를 해결하기 위해 가장 먼저 해야 할 아주 쉬운 첫 번째 계산 질문을 딱 한 가지만 던져주세요."
  ].filter(Boolean).join("\n");

  var fallbackHint = stepQ
    ? ("현재 단계 질문(\x22" + stepQ + "\x22)을 위 원래 문제의 숫자와 비교하며 다시 한번 천천히 계산해 보세요!")
    : ((state.currentItem && state.currentItem.h1) ? state.currentItem.h1 : "위 문제를 천천히 다시 읽어보세요!");

  try {
    var reply = await callGeminiSocraticAPI(firstPrompt, [], fallbackHint);
    var curStepIdx = state.activeSmallStepForAI ? state.activeSmallStepForAI.idx : -1;
    if (myReqId !== aiRequestSeq || myItemRef !== state.currentItem || myStepIdx !== curStepIdx) return;

    // ★ 4번 지적 완벽 반영: 첫 응답도 escapeHtml(reply)로 통일하여 태그 깨짐 및 이중 이스케이프 방지!
    state.aiChatHistory.push({ role: "model", text: escapeHtml(reply) });
    renderAiChatLog();
  } finally {
    if (myReqId === aiRequestSeq) {
      aiIsRequesting = false;
      setAiSendButtonDisabled(false);
    }
  }
}

function renderAiChatLog() {
  var log = document.getElementById("ai-chat-log");
  if (!log) return;

  var visibleMessages = state.aiChatHistory || [];
  log.innerHTML = visibleMessages.map(function(m) {
    var cls = m.role === "model" ? "chat-ai" : "chat-user";
    var prefix = m.role === "model" ? "🤖 <b>AI 선생님:</b> " : "🙋 <b>나:</b> ";
    var body = m.role === "model" ? m.text : escapeHtml(m.text);
    return "<div class=\x22chat-bubble " + cls + "\x22>" + prefix + body + "</div>";
  }).join("");

  log.scrollTop = log.scrollHeight;
}

async function sendAiUserMessage() {
  if (aiIsRequesting) return;

  var inp = document.getElementById("ai-user-input");
  var log = document.getElementById("ai-chat-log");
  if (!inp || !log) return;

  var userText = inp.value.trim();
  if (!userText) return;
  inp.value = "";

  var prevModelMessages = (state.aiChatHistory || []).filter(function(m) { return m.role === "model"; });
  var lastAiQuestion = prevModelMessages.length > 0 ? prevModelMessages[prevModelMessages.length - 1].text : "";

  state.aiChatHistory.push({ role: "user", text: userText });
  renderAiChatLog();

  var item = ensureNormalizedItem(state.currentItem || {});
  var ctx = getProblemContextForAI(item);
  var activeStep = state.activeSmallStepForAI;

  if (activeStep && isSmallStepAnswerMatch(userText, activeStep)) {
    var stepIdx = activeStep.idx;
    var stepAns = activeStep.ans;
    var stepInput = document.getElementById("ss-input-" + stepIdx);
    if (stepInput) stepInput.value = stepAns;

    var praiseStep = [
      "🎉 <b>딩동댕! 맞아요! \x22" + escapeHtml(activeStep.q) + "\x22의 정답은 [" + escapeHtml(stepAns) + "]입니다!</b> 👏",
      "<div style=\x22margin-top:8px; padding:8px 12px; background:#dcfce7; color:#166534; border-radius:8px; font-weight:bold;\x22>✅ 위쪽 스몰 스텝 " + (stepIdx + 1) + "계단 빈칸에 [" + escapeHtml(stepAns) + "]을(를) 자동으로 채워 통과했어요! 이어서 다음 계단이나 위쪽 본문제의 정답을 입력해 보세요!</div>"
    ].join("");

    state.aiChatHistory.push({ role: "model", text: praiseStep });
    renderAiChatLog();

    checkSmallStep(stepIdx);
    return;
  }

  if (!activeStep && isStudentAnswerRight(userText, item)) {
    var actionGuide = ctx.isChoice
      ? ("👉 <b>이제 위쪽 문제에서 [" + escapeHtml(ctx.targetAns) + "] 보기 버튼을 직접 눌러보세요!</b>")
      : ("👉 <b>이제 위쪽 문제의 정답 입력 칸에 [" + escapeHtml(ctx.targetAns) + "]을(를) 입력하고 [정답 확인하기] 버튼을 눌러보세요!</b>");

    var instantPraise = [
      "🎉 <b>딩동댕! 정확해요! 구하려는 최종 정답은 [" + escapeHtml(ctx.targetAns) + "]입니다!</b> 👏",
      "<div style=\x22margin-top:8px; padding:10px 12px; background:#ffffff; border-left:4px solid #0d9488; border-radius:6px; color:#134e4a; font-size:14px;\x22>💡 <b>핵심 원리 정리:</b><br>" + escapeHtml(ctx.whyReason) + "</div>",
      "<div style=\x22margin-top:8px; padding:8px 12px; background:#fef08a; color:#854d0e; border-radius:8px; font-weight:bold;\x22>" + actionGuide + "</div>"
    ].join("");

    state.aiChatHistory.push({ role: "model", text: instantPraise });
    renderAiChatLog();
    return;
  }

  var myReqId = ++aiRequestSeq;
  var myItemRef = state.currentItem;
  var myStepIdx = activeStep ? activeStep.idx : -1;

  aiIsRequesting = true;
  setAiSendButtonDisabled(true);

  log.innerHTML += "<div class=\x22chat-bubble chat-ai\x22>⏳ AI 선생님이 답변을 적고 있어요...</div>";
  log.scrollTop = log.scrollHeight;

  var currentGoalQ = activeStep ? activeStep.q : ctx.qText;
  var currentGoalAns = activeStep ? activeStep.ans : ctx.targetAns;
  var currentAccepts = (activeStep && Array.isArray(activeStep.accept) && activeStep.accept.length > 0)
    ? (" (허용 정답: " + activeStep.accept.join(", ") + ")")
    : "";
  var prevStepsInfo = getPreviousSmallStepsSummary();

  // ★ 7번 & 8번 지적 반영: 후속 대화에서도 객관식 보기 목록(choiceInfo)과 그림 정보(diagramInfo)를 항상 포함!
  var systemGuide = [
    "당신은 다정하고 정확한 초등 수학 소크라테스 AI 선생님입니다.",
    "[원래 본문제]: \x22" + ctx.qText + "\x22",
    ctx.diagramInfo ? ("[그림/도형 정보]: " + ctx.diagramInfo) : "",
    ctx.choiceInfo ? ctx.choiceInfo : "",
    prevStepsInfo ? prevStepsInfo : "",
    "[현재 우리가 풀어야 할 목표 질문]: \x22" + currentGoalQ + "\x22",
    "[이 목표 질문의 최종 답(비밀)]: \x22" + currentGoalAns + "\x22" + currentAccepts + " (절대 학생에게 먼저 말하지 마세요!)",
    "---",
    "★ [가장 중요한 판정 기준]",
    "방금 직전에 당신(AI 선생님)이 학생에게 물었던 징검다리 질문: \x22" + lastAiQuestion + "\x22",
    "방금 학생이 입력한 대답: \x22" + userText + "\x22",
    "---",
    "반드시 아래 순서대로 생각하고 답변하세요:",
    "1단계 (징검다리 정답 판별): 당신이 직전에 물었던 질문(\x22" + lastAiQuestion + "\x22)에 대해 학생의 대답(\x22" + userText + "\x22)이 수학적으로 맞는지 먼저 계산하세요!",
    "   - 직전 질문에 맞는 답을 했을 때는 절대 틀렸다고 하지 말고 맞아요! 라고 꼭 칭찬하세요!",
    "2단계 (다음 질문 이어가기): 학생이 직전 징검다리 질문을 맞혔다면, 칭찬한 뒤 곧바로 목표 질문(\x22" + currentGoalQ + "\x22)의 최종 답(\x22" + currentGoalAns + "\x22)을 구하기 위한 다음 단계 계산 질문을 던지세요.",
    "3단계 (틀렸을 때만 교정): 만약 당신이 직전에 물었던 질문(\x22" + lastAiQuestion + "\x22)에 대해 학생의 대답(\x22" + userText + "\x22)이 실제로 틀렸을 때만 아하, " + userText + "(이)라고 생각했군요! 하지만 다시 계산해 볼까요? 라고 바로잡아 주세요.",
    "4단계 (목표 도달 안내): 만약 학생이 목표 질문의 답을 스스로 깨우쳤다면 위쪽 입력 칸에 직접 적어 확인 버튼을 눌러보라고 안내하세요."
  ].filter(Boolean).join("\n");

  var fallbackHint = activeStep
    ? ("위쪽 스몰 스텝 질문(\x22" + activeStep.q + "\x22)의 힌트를 보고 빈칸에 알맞은 수를 직접 입력해 보세요!")
    : (item.h1 || "위 문제를 천천히 다시 읽어보세요!");

  try {
    var reply = await callGeminiSocraticAPI(systemGuide, state.aiChatHistory, fallbackHint);
    var curStepIdx = state.activeSmallStepForAI ? state.activeSmallStepForAI.idx : -1;
    if (myReqId !== aiRequestSeq || myItemRef !== state.currentItem || myStepIdx !== curStepIdx) return;

    reply = reply.replace(/\[완료\]/g, "").trim();
    state.aiChatHistory.push({ role: "model", text: escapeHtml(reply) });
    renderAiChatLog();
  } finally {
    if (myReqId === aiRequestSeq) {
      aiIsRequesting = false;
      setAiSendButtonDisabled(false);
    }
  }
}

// ★ 4번 지적 완벽 반영: callGeminiSocraticAPI는 순수 텍스트만 반환하고, 화면 저장 직전에 딱 한 번만 escapeHtml 처리!
async function callGeminiSocraticAPI(promptText, historyArr, fallbackHintText) {
  fallbackHintText = fallbackHintText !== undefined ? fallbackHintText : "";

  var apiKey = (typeof getSavedApiKey === "function") ? getSavedApiKey() : "";
  if (!apiKey && typeof loadCloudApiKey === "function") {
    try {
      await loadCloudApiKey();
    } catch (e) {}
    apiKey = (typeof getSavedApiKey === "function") ? getSavedApiKey() : "";
  }

  var safeHint = fallbackHintText || (state.currentItem ? state.currentItem.h1 : "위 문제를 천천히 다시 읽어보세요!");

  if (!apiKey) {
    return "💡 (API 키 확인 필요) 우측 상단 [⚙️ API 키 설정]에서 키를 확인해 주세요. 지금은 이 힌트를 참고해 보세요: " + safeHint;
  }

  var models = [
    "gemini-2.5-flash-lite",
    "gemini-3.1-flash-lite",
    "gemini-2.5-flash"
  ];

  var recentLogs = (historyArr || []).slice(-6).map(function(h) {
    return (h.role === "model" ? "AI 선생님" : "학생") + ": " + h.text;
  }).join("\n");
  var fullPrompt = recentLogs ? ("[지금까지의 대화 내역]\n" + recentLogs + "\n\n[현재 지시]\n" + promptText) : promptText;

  var lastErrorMsg = "";

  for (var i = 0; i < models.length; i++) {
    var modelName = models[i];
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, 10000);

    try {
      var res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + modelName + ":generateContent?key=" + apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024
          }
        })
      });
      clearTimeout(timeoutId);

      var data = await res.json();

      if (!res.ok) {
        lastErrorMsg = (data && data.error && data.error.message) ? data.error.message : ("HTTP " + res.status);
        if (res.status === 400 || res.status === 403) {
          break;
        }
        continue;
      }

      var parts = (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) ? data.candidates[0].content.parts : [];
      var text = parts.map(function(p) { return p.text || ""; }).join("").trim();
      if (text) return text.trim();
    } catch (e) {
      clearTimeout(timeoutId);
      lastErrorMsg = e.name === "AbortError" ? "응답 시간 초과(10초)" : e.message;
    }
  }

  return "앗, AI 선생님 연결이 잠시 지연되고 있어요! (" + (lastErrorMsg || "응답 지연") + ") 대신 징검다리 힌트를 드릴게요: " + safeHint;
}