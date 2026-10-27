// ==========================================
// 📂 0. 5·6학년 전 단원 강제 활성화 보정기 & 5학년 데이터 자동 호환 로더
// ==========================================
function ensureCurriculumUnlocked() {
  if (typeof MATH_DB === 'undefined') {
    window.MATH_DB = window.MATH_DB || {};
  } else {
    window.MATH_DB = MATH_DB;
  }

  // 5학년·6학년 학년 선택 카드 모두 활성화
  if (Array.isArray(MATH_DB.grades)) {
    MATH_DB.grades.forEach(g => {
      if (String(g.id) === "5" || String(g.id) === "6") g.active = true;
    });
  }

  MATH_DB.semesters = MATH_DB.semesters || {};
  MATH_DB.semesters["5"] = [
    { id: "1", name: "1학기", active: true },
    { id: "2", name: "2학기", active: false }
  ];
  MATH_DB.semesters["6"] = [
    { id: "1", name: "1학기", active: true },
    { id: "2", name: "2학기", active: true }
  ];

  MATH_DB.units = MATH_DB.units || {};
  MATH_DB.units["5-1"] = [
    { id: "1", name: "1. 자연수의 혼합 계산", desc: "덧셈·뺄셈·곱셈·나눗셈과 괄호가 섞인 식의 계산 순서", active: true },
    { id: "2", name: "2. 약수와 배수", desc: "약수와 배수의 관계, 최대공약수와 최소공배수 구하기", active: true },
    { id: "3", name: "3. 규칙과 대응", desc: "두 양 사이의 대응 관계를 찾아 기호(□, △)로 식 세우기", active: true },
    { id: "4", name: "4. 약분과 통분", desc: "크기가 같은 분수, 약분과 기약분수, 통분과 크기 비교", active: true },
    { id: "5", name: "5. 분수의 덧셈과 뺄셈", desc: "받아올림과 받아내림이 있는 이분모 분수의 덧셈과 뺄셈", active: true },
    { id: "6", name: "6. 다각형의 둘레와 넓이", desc: "정다각형·사각형의 둘레와 평행사변형·삼각형·마름모·사다리꼴의 넓이", active: true }
  ];
  MATH_DB.units["6-1"] = [
    { id: "1", name: "1. 분수의 나눗셈", desc: "자연수÷자연수, 분수÷자연수의 계산 원리", active: true },
    { id: "2", name: "2. 각기둥과 각뿔", desc: "각기둥과 각뿔의 구성 요소와 전개도", active: true },
    { id: "3", name: "3. 소수의 나눗셈", desc: "소수÷자연수의 계산 원리와 활용", active: true },
    { id: "4", name: "4. 비와 비율", desc: "두 수의 비교, 비율, 백분율 알아보기", active: true },
    { id: "5", name: "5. 여러 가지 그래프", desc: "띠그래프와 원그래프 해석하기", active: true },
    { id: "6", name: "6. 직육면체의 부피와 겉넓이", desc: "부피와 겉넓이 구하는 방법", active: true }
  ];
  MATH_DB.units["6-2"] = [
    { id: "1", name: "1. 분수의 나눗셈", desc: "분수÷분수, 자연수÷분수의 계산 원리와 활용", active: true },
    { id: "2", name: "2. 소수의 나눗셈", desc: "소수÷소수, 자연수÷소수, 몫의 반올림과 남는 양", active: true },
    { id: "3", name: "3. 공간과 입체", desc: "위·앞·옆에서 본 모양과 층별 쌓기나무 개수 찾기", active: true },
    { id: "4", name: "4. 비례식과 비례배분", desc: "비의 성질, 비례식의 성질과 비례배분 활용", active: true },
    { id: "5", name: "5. 원의 둘레와 넓이", desc: "원주율의 뜻, 원주와 여러 가지 원의 넓이 구하기", active: true },
    { id: "6", name: "6. 원기둥, 원뿔, 구", desc: "원기둥의 전개도와 원뿔·구의 구성 요소와 성질", active: true }
  ];
  MATH_DB.lessons = MATH_DB.lessons || {};
}

// 5학년 배열 포맷(window.MATH_DB)을 앱 표준 객체 포맷(MATH_DB)으로 완벽하게 변환하는 어댑터
function normalizeLoadedUnitData(unitKey) {
  if (typeof MATH_DB === 'undefined') return;
  if (window.MATH_DB && window.MATH_DB !== MATH_DB) {
    if (window.MATH_DB.units) {
      MATH_DB.units = Object.assign(MATH_DB.units || {}, window.MATH_DB.units);
    }
    if (window.MATH_DB.lessons) {
      MATH_DB.lessons = Object.assign(MATH_DB.lessons || {}, window.MATH_DB.lessons);
    }
  }
  window.MATH_DB = MATH_DB;

  if (!MATH_DB.lessons || !MATH_DB.lessons[unitKey]) return;
  const raw = MATH_DB.lessons[unitKey];
  if (!Array.isArray(raw)) return; // 이미 6학년 객체 포맷이면 그대로 통과

  const [g, s, u] = unitKey.split('-');
  const unitMeta = (MATH_DB.units && MATH_DB.units[unitKey] && !Array.isArray(MATH_DB.units[unitKey]))
    ? MATH_DB.units[unitKey]
    : null;
  const unitListItem = (MATH_DB.units && Array.isArray(MATH_DB.units[`${g}-${s}`]))
    ? MATH_DB.units[`${g}-${s}`].find(item => String(item.id) === String(u))
    : null;

  const unitTitle = unitMeta
    ? `${g}학년 ${s}학기 ${unitMeta.title}`
    : (unitListItem ? `${g}학년 ${s}학기 ${unitListItem.name}` : `${g}학년 ${s}학기 ${u}단원`);

  const lessonOrder = [];
  const items = {};

  function convertItem(it) {
    if (!it) return null;
    const copy = { ...it };
    if (copy.ans === undefined && copy.a !== undefined) copy.ans = String(copy.a);
    if (copy.checkTip === undefined && copy.explain !== undefined) copy.checkTip = copy.explain;
    if (Array.isArray(copy.steps)) {
      copy.steps = copy.steps.map(st => ({
        q: st.q || st.prompt || "",
        ans: String(st.ans !== undefined ? st.ans : (st.a !== undefined ? st.a : ""))
      }));
    }
    return copy;
  }

  raw.forEach((les, idx) => {
    const code = `${u}-${idx + 1}`;
    lessonOrder.push(code);

    // 1) summaryCard HTML 변환
    let summaryHTML = '';
    if (typeof les.summaryCard === 'string') {
      summaryHTML = les.summaryCard;
    } else if (les.summaryCard && typeof les.summaryCard === 'object') {
      const rulesHTML = (les.summaryCard.rules || []).map(r => `<li>${r}</li>`).join('');
      const svgHTML = les.summaryCard.svg
        ? `<div style="display:flex; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">${les.summaryCard.svg}</div>`
        : '';
      summaryHTML = `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: ${les.summaryCard.title || les.title}</h4>
          ${svgHTML}
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">${rulesHTML}</ul>
        </div>
      `;
    }

    // 2) warmup 변환
    let warmupArr = null;
    if (les.warmup) {
      warmupArr = Array.isArray(les.warmup) ? les.warmup.map(convertItem) : [convertItem(les.warmup)];
    }

    // 3) step1Quiz 변환 (options 0-indexed -> choices 1-indexed)
    const step1Quiz = (les.step1Quiz || []).map(qObj => {
      if (qObj.choices) return qObj;
      const choices = (qObj.options || []).map((opt, oIdx) => `${oIdx + 1}번: ${opt}`);
      return {
        q: qObj.q,
        choices: choices,
        ans: String((typeof qObj.ans === 'number' ? qObj.ans + 1 : qObj.ans)),
        h1: qObj.h1 || "",
        h2: qObj.h2 || ""
      };
    });

    // 4) step2_1, step2_2 변환
    const step2_1 = (les.step2_1 || []).map(convertItem);
    const step2_2 = (les.step2_2 || []).map(convertItem);

    // 5) step3A, step4B (1차원 6문항 -> 3유형 × 2문항 2차원 배열로 그룹핑)
    function groupTo3x2(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return [[], [], []];
      if (Array.isArray(arr[0])) return arr.map(g => g.map(convertItem));
      const converted = arr.map(convertItem);
      return [
        converted.slice(0, 2),
        converted.slice(2, 4),
        converted.slice(4, 6)
      ];
    }
    const step3A = groupTo3x2(les.step3A);
    const step4B = groupTo3x2(les.step4B);

    // 6) step5A 변환 (문자열일 경우 step5B의 핵심 단어를 활용하여 빈칸 확인 문제 자동 구성)
    let step5AObj = les.step5A;
    if (typeof les.step5A === 'string') {
      const bSentence = (les.step5B && les.step5B.sentence) ? les.step5B.sentence : "";
      const bWord = (les.step5B && Array.isArray(les.step5B.blankWords) && les.step5B.blankWords[0])
        ? les.step5B.blankWords[0]
        : "";
      const dWord = (les.step5B && Array.isArray(les.step5B.distractors) && les.step5B.distractors[0])
        ? les.step5B.distractors[0]
        : "다른 수";
      if (bSentence && bWord && bSentence.includes(bWord)) {
        const replaced = bSentence.replace(bWord, `[ (1) ${bWord} / (2) ${dWord} ]`);
        step5AObj = {
          q: `${les.step5A}\n\n👉 핵심 정리: "${replaced}"`,
          ans: bWord,
          numAns: "1",
          hint: `💡 힌트: 오늘 배운 핵심 약속 문장("${bSentence}")을 떠올려 보세요! 정답은 (1)번 '${bWord}'입니다.`
        };
      } else {
        step5AObj = {
          q: `${les.step5A}\n\n👉 위 내용을 스스로 생각하며 정리해 보았나요? [ (1) 네, 정리했어요 / (2) 다시 볼래요 ]`,
          ans: "네, 정리했어요",
          numAns: "1",
          hint: "💡 힌트: 숫자 1을 입력하면 다음 단계로 넘어갑니다!"
        };
      }
    }

    const goalText = (les.summaryCard && Array.isArray(les.summaryCard.rules) && les.summaryCard.rules[0])
      ? les.summaryCard.rules[0].replace(/^\d+\.\s*/, '')
      : `${les.title}의 핵심 원리를 이해하고 문제를 해결할 수 있습니다.`;

    items[code] = {
      title: `${code}차시: ${les.title}`,
      goal: goalText,
      videoUrl: les.videoUrl || "",
      summaryCard: summaryHTML,
      warmup: warmupArr,
      step1Quiz: step1Quiz,
      step2_1: step2_1,
      step2_2: step2_2,
      step3A: step3A,
      step4Intro: (les.step5B && les.step5B.sentence) ? les.step5B.sentence : goalText,
      step4B: step4B,
      step5A: step5AObj,
      step5B: les.step5B || { sentence: goalText },
      nextUnit: idx < raw.length - 1 ? `${u}-${idx + 2}` : null
    };
  });

  MATH_DB.lessons[unitKey] = {
    unitTitle: unitTitle,
    lessonOrder: lessonOrder,
    items: items
  };
}

function ensureUnitDataLoaded(gradeId, semId, unitId) {
  return new Promise((resolve) => {
    if (typeof MATH_DB !== 'undefined') {
      window.MATH_DB = MATH_DB;
    }
    const unitKey = `${gradeId}-${semId}-${unitId}`;
    if (typeof MATH_DB !== 'undefined' && MATH_DB.lessons && MATH_DB.lessons[unitKey]) {
      normalizeLoadedUnitData(unitKey);
      resolve(true);
      return;
    }

    const pathsToTry = [
      `data/g${gradeId}/s${semId}-u${unitId}.js`,
      `g${gradeId}/s${semId}-u${unitId}.js`,
      `data/g${gradeId}/us-g${gradeId}/s${semId}-u${unitId}.js`,
      `g${gradeId}/us-g${gradeId}/s${semId}-u${unitId}.js`
    ];

    function tryNext(idx) {
      if (idx >= pathsToTry.length) {
        resolve(false);
        return;
      }
      const script = document.createElement('script');
      script.src = `${pathsToTry[idx]}?v=${Date.now()}`;
      script.onload = () => {
        normalizeLoadedUnitData(unitKey);
        if (MATH_DB.lessons && MATH_DB.lessons[unitKey]) {
          resolve(true);
        } else {
          tryNext(idx + 1);
        }
      };
      script.onerror = () => {
        tryNext(idx + 1);
      };
      document.head.appendChild(script);
    }

    tryNext(0);
  });
}

function isFractionItem(item) {
  return item && item.num !== undefined && item.den !== undefined;
}

function getItemCorrectDisplay(item) {
  if (isFractionItem(item)) return `${item.num}/${item.den}`;
  return `${item.ans}${item.unit ? item.unit : ''}`;
}

function getAnswerWidgetHTML(item, enterCallbackName) {
  if (isFractionItem(item)) {
    return getFractionHTML(enterCallbackName);
  }
  const keyAttr = enterCallbackName ? `onkeydown="if(event.key==='Enter') ${enterCallbackName}()"` : '';
  const unitLabel = item.unit ? `<span style="font-size:20px; font-weight:bold; color:#1e293b;">${item.unit}</span>` : '';
  const placeholder = item.placeholder || "정답을 입력하세요";
  return `
    <div style="display:flex; justify-content:center; align-items:center; gap:10px; margin:16px 0 8px 0; padding:18px; background:#f8fafc; border-radius:16px; border:1px solid #e2e8f0;">
      <input type="text" id="general-ans" class="text-input" style="max-width:320px; margin-bottom:0; text-align:center; font-size:20px; font-weight:bold; border-color:#2563eb;" placeholder="${placeholder}" ${keyAttr}>
      ${unitLabel}
    </div>
    <div class="helper-caption">* 알맞은 숫자나 말을 입력한 뒤 확인 버튼 또는 엔터(Enter)를 누르세요!</div>
  `;
}

function evaluateCurrentAnswer(item) {
  if (isFractionItem(item)) {
    const wEl = document.getElementById('frac-w');
    const nEl = document.getElementById('frac-n');
    const dEl = document.getElementById('frac-d');
    const wVal = wEl ? wEl.value.trim() : '';
    const nVal = nEl ? nEl.value.trim() : '';
    const dVal = dEl ? dEl.value.trim() : '';
    if (!nVal || !dVal) {
      return { empty: true, msg: '분자와 분모 칸에 숫자를 입력해 주세요!' };
    }
    const status = checkFractionStatus(item.num, item.den);
    const myAnsStr = (wVal ? `${wVal}과 ` : '') + `${nVal}/${dVal}`;
    return {
      empty: false,
      status: status,
      isRight: (status === 'correct' || status === 'unreduced'),
      myAns: myAnsStr,
      wVal, nVal, dVal
    };
  } else {
    const inp = document.getElementById('general-ans');
    const rawVal = inp ? inp.value.trim() : '';
    if (!rawVal) {
      return { empty: true, msg: '정답 칸에 답을 입력해 주세요!' };
    }
    const cleanUser = rawVal.replace(/\s+/g, '');
    const candidates = [String(item.ans), ...(item.accept || [])];
    if (item.unit) {
      candidates.push(`${item.ans}${item.unit}`);
    }
    const isRight = candidates.some(c => cleanUser === String(c).replace(/\s+/g, ''));
    return {
      empty: false,
      status: isRight ? 'correct' : 'wrong',
      isRight: isRight,
      myAns: rawVal + (item.unit && !rawVal.includes(item.unit) ? item.unit : '')
    };
  }
}

function diagnoseItemError(item, evalRes) {
  if (item.wrongDiag) {
    const rawClean = (evalRes.myAns || '').replace(/\s+/g, '');
    const withoutUnit = item.unit ? rawClean.replace(new RegExp(item.unit + '$'), '') : rawClean;
    if (item.wrongDiag[rawClean]) return item.wrongDiag[rawClean];
    if (item.wrongDiag[withoutUnit]) return item.wrongDiag[withoutUnit];
  }
  if (isFractionItem(item)) {
    return diagnoseFractionError(item, evalRes.wVal, evalRes.nVal, evalRes.dVal);
  }
  return item.diagDefault || `${item.h1} 원리를 다시 한번 떠올리며 차근차근 확인해 보세요!`;
}

// ==========================================
// ⏱️ 1. 단계별 소요 시간 측정 및 족집게 오답 진단 도구
// ==========================================
function resetLessonTimer() {
  state.lessonStartTime = Date.now();
  state.currentStepKey = null;
  state.currentStepStartTime = null;
  state.stepTimes = {
    warmup: 0,
    step1: 0,
    step2: 0,
    step3: 0,
    step4: 0,
    step5: 0
  };
}

function switchStepTimer(newKey) {
  const now = Date.now();
  if (state.currentStepKey && state.currentStepStartTime) {
    const elapsedSec = Math.max(1, Math.round((now - state.currentStepStartTime) / 1000));
    state.stepTimes[state.currentStepKey] = (state.stepTimes[state.currentStepKey] || 0) + elapsedSec;
  }
  state.currentStepKey = newKey;
  state.currentStepStartTime = newKey ? now : null;
}

function formatDuration(sec) {
  const s = Math.max(0, Math.round(sec || 0));
  if (s === 0) return "0초";
  const m = Math.floor(s / 60);
  const rem = s % 60;
  if (m === 0) return `${rem}초`;
  return `${m}분 ${rem}초`;
}

function cleanQuestionText(rawQ) {
  return String(rawQ || '')
    .replace(/^\[[^\]]+\]\s*/, '')
    .replace(/\n+/g, '<br>')
    .trim();
}

function toggleSolutionBox(boxId, btnId) {
  const box = document.getElementById(boxId);
  const btn = document.getElementById(btnId);
  if (!box || !btn) return;
  if (box.style.display === 'none') {
    box.style.display = 'block';
    btn.innerHTML = '📖 차근차근 풀어 보기 닫기 ▲';
    btn.style.background = '#fef3c7';
  } else {
    box.style.display = 'none';
    btn.innerHTML = '📖 스스로 먼저 생각해 봤나요? 차근차근 풀어 보기 (눌러서 펼치기 ▼)';
    btn.style.background = '#ffffff';
  }
}

function diagnoseFractionError(item, wVal, nVal, dVal) {
  const w = parseInt(wVal || "0", 10);
  const n = parseInt(nVal, 10);
  const d = parseInt(dVal, 10);
  const targetN = item.num;
  const targetD = item.den;
  const studentTotalN = w * d + n;

  const mixedMatch = item.q.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (mixedMatch) {
    const mw = parseInt(mixedMatch[1], 10);
    const mn = parseInt(mixedMatch[2], 10);
    const md = parseInt(mixedMatch[3], 10);
    const mc = parseInt(mixedMatch[4], 10);
    const impN = mw * md + mn;

    if (studentTotalN * md === impN * d) {
      return `문제에 있는 대분수(${mw}과 ${mn}/${md})를 그대로 적고, 아직 나누기 ${mc}를 계산하지 않았어요!`;
    }
    if (w === mw || (n === mn && d === md * mc) || (mn % mc === 0 && n === mn / mc && d === md)) {
      return `대분수(${mw}과 ${mn}/${md})를 가분수(${impN}/${md})로 먼저 바꾸지 않고, 자연수 ${mw}을 빼놓은 채 분수 부분만 나누었어요! 자연수 ${mw}도 함께 나누어야 합니다.`;
    }
    return `대분수 ${mw}과 ${mn}/${md}을 가분수 ${impN}/${md}로 바꾼 뒤 분모에 ${mc}를 곱하는 과정에서 작은 계산 실수가 있었어요.`;
  }

  const fracMatch = item.q.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (fracMatch) {
    const fn = parseInt(fracMatch[1], 10);
    const fd = parseInt(fracMatch[2], 10);
    const fc = parseInt(fracMatch[3], 10);

    if (studentTotalN === fn && d === fd) {
      return `문제에 있는 분수 ${fn}/${fd}를 그대로 옮겨 적었어요! 나누기 ${fc}를 아직 계산하지 않았습니다.`;
    }
    if (studentTotalN * fd === fn * d) {
      return `분자와 분모를 모두 ${fc}로 나누어 ${studentTotalN}/${d}이라고 적었네요! 분자와 분모를 같은 수로 나누면 '약분'만 한 셈이 되어 원래 분수(${fn}/${fd})와 크기가 똑같아져요. 분모 ${fd}는 나누지 말고 그대로 두어야 합니다!`;
    }
    if (studentTotalN === fn * fc && d === fd) {
      return `나누기 ${fc}를 해야 하는데 거꾸로 분자에 ${fc}를 곱해서 ${studentTotalN}/${d}이라고 적었어요! (÷ ${fc})는 분자를 ${fc}로 나누거나 분모에 ${fc}를 곱해야 합니다.`;
    }
    if (fn % fc === 0 && studentTotalN === fn / fc && d === fd * fc) {
      return `분자도 ${fc}로 나누고(${fn}÷${fc}=${studentTotalN}), 분모에도 ${fc}를 곱해서(${fd}×${fc}=${d}) 나누기를 두 번이나 계산했어요! 둘 중 한 가지 방법으로만 계산해야 합니다.`;
    }
    if (fd % fc === 0 && studentTotalN === fn && d === fd / fc) {
      return `분모(${fd})를 ${fc}로 나누어 ${studentTotalN}/${d}이라고 적었네요! 분모가 아니라 분자(${fn})를 ${fc}로 나누거나 분모에 ${fc}를 곱해야 합니다.`;
    }
    if (studentTotalN * targetN === d * targetD) {
      return `계산한 숫자는 맞았지만 분자(위)와 분모(아래)의 위치를 위아래 거꾸로 적었어요!`;
    }
    if (d === fd) {
      return `분모(${fd})는 그대로 잘 두었지만, 분자 ${fn}을 ${fc}로 나누는 계산(${fn} ÷ ${fc})을 다시 확인해 보세요!`;
    }
    return `분수 ${fn}/${fd}를 ${fc}로 나눌 때는 분자를 ${fc}로 나누거나, 분모 ${fd}에 ${fc}를 곱해서 계산해야 합니다.`;
  }

  if (studentTotalN * targetN === d * targetD) {
    if (item.q.includes('유형 3') || item.q.includes('똑같이 나누어') || item.q.includes('한 ')) {
      return `문장제 문제에서 '전체 양(${targetN})'과 '나누는 수(${targetD})'의 순서를 반대로 세웠어요! 전체 양 ${targetN}을 ${targetD}로 나누어야 하므로 분자에 ${targetN}, 분모에 ${targetD}를 적어야 합니다.`;
    }
    return `나눗셈 기호(÷) 앞의 수와 뒤의 수 위치가 위아래로 뒤바뀌었어요! 앞의 수(${targetN})가 분자(위)로, 뒤의 수(${targetD})가 분모(아래)로 가야 합니다.`;
  }

  return item.diagDefault || `나눗셈 식을 세우거나 분수로 바꾸는 과정에서 분자(${targetN}) 또는 분모(${targetD})의 숫자를 다시 확인해 보세요!`;
}

function buildDetailedExplanation(item) {
  if (!isFractionItem(item) || /÷\s*\d+\s*\/\s*\d+/.test(item.q)) {
    return [
      `① <b>먼저 알아 둘 것:</b> ${item.h1 || ''}`,
      `② <b>차근차근 계산하기:</b> ${item.h2 || ''}`,
      `③ <b>정답:</b> <b>${getItemCorrectDisplay(item)}</b>`,
      item.checkTip ? `④ <b>풀이 정리:</b> ${item.checkTip}` : ''
    ].filter(Boolean).join('<br>');
  }

  const mixedMatch = item.q.match(/(\d+)\s*[과와]\s*(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (mixedMatch) {
    const w = parseInt(mixedMatch[1], 10);
    const n = parseInt(mixedMatch[2], 10);
    const d = parseInt(mixedMatch[3], 10);
    const c = parseInt(mixedMatch[4], 10);
    const impN = w * d + n;
    const rawN = impN;
    const rawD = d * c;
    const reduceNote = (rawN !== item.num || rawD !== item.den) ? ` (약분하면 <b>${item.num}/${item.den}</b>)` : '';
    return [
      `① <b>먼저 알아 둘 것:</b> 대분수는 자연수까지 함께 나누어야 하므로 반드시 가분수로 먼저 바꿉니다.`,
      `② <b>차근차근 계산하기:</b> ${w}과 ${n}/${d}를 가분수로 바꾸면 ${impN}/${d}이고, ${impN}/${d} ÷ ${c} = ${impN}/${d} × 1/${c} = ${rawN}/${rawD}${reduceNote} 입니다.`,
      `③ <b>정답:</b> <b>${item.num}/${item.den}</b>`,
      `④ <b>거꾸로 확인하기(검산):</b> 구한 몫(${item.num}/${item.den})에 나누는 수 ${c}를 곱하면 원래 수(${impN}/${d} = ${w}과 ${n}/${d})가 되므로 맞습니다!`
    ].join('<br>');
  }

  const fracMatch = item.q.match(/(\d+)\s*\/\s*(\d+)\s*÷\s*(\d+)/);
  if (fracMatch) {
    const n = parseInt(fracMatch[1], 10);
    const d = parseInt(fracMatch[2], 10);
    const c = parseInt(fracMatch[3], 10);

    const extraMisconceptionTip = (item.q.includes('모두') && item.q.includes('나누어'))
      ? `<br>💡 <b>꼭 기억해요:</b> 분자와 분모를 모두 ${c}로 나누면 나눗셈을 한 것이 아니라 '약분'만 한 셈이 되어 원래 분수(${n}/${d})와 크기가 그대로 같아집니다!`
      : '';

    if (n % c === 0) {
      const divN = n / c;
      const isReducedFurther = (divN !== item.num || d !== item.den);
      const step2Str = isReducedFurther
        ? `${n}/${d} ÷ ${c} = (${n} ÷ ${c})/${d} = <b>${divN}/${d}</b> 이고, 분자와 분모를 한 번 더 약분하면 <b>${item.num}/${item.den}</b>이 됩니다.`
        : `${n}/${d} ÷ ${c} = (${n} ÷ ${c})/${d} = <b>${item.num}/${item.den}</b>`;
      const ansStr = isReducedFurther ? `<b>${item.num}/${item.den}</b> (약분하기 전인 <b>${divN}/${d}</b>도 정답!)` : `<b>${item.num}/${item.den}</b>`;

      return [
        `① <b>먼저 알아 둘 것:</b> 분자(${n})가 자연수(${c})로 나누어떨어질 때는 분모(${d})는 그대로 두고 분자만 ${c}로 나눕니다.${extraMisconceptionTip}`,
        `② <b>차근차근 계산하기:</b> ${step2Str}`,
        `③ <b>정답:</b> ${ansStr}`,
        `④ <b>거꾸로 확인하기(검산):</b> (몫 ${divN}/${d}) × (나누는 수 ${c}) = ${n}/${d}가 되므로 맞습니다!`
      ].join('<br>');
    }

    const rawD = d * c;
    const isReducedFurther = (n !== item.num || rawD !== item.den);
    const step2Str = isReducedFurther
      ? `${n}/${d} ÷ ${c} = ${n}/${d} × 1/${c} = <b>${n}/${rawD}</b> 이고, 약분하면 <b>${item.num}/${item.den}</b>이 됩니다.`
        : `${n}/${d} ÷ ${c} = ${n}/${d} × 1/${c} = ${n}/(${d} × ${c}) = <b>${item.num}/${item.den}</b>`;

    return [
      `① <b>먼저 알아 둘 것:</b> 나누기 자연수(÷ ${c})는 곱하기(× 1/${c})로 바꾸어 분모에 ${c}를 곱합니다.`,
      `② <b>차근차근 계산하기:</b> ${step2Str}`,
      `③ <b>정답:</b> <b>${item.num}/${item.den}</b>`,
      `④ <b>거꾸로 확인하기(검산):</b> (몫 ${item.num}/${item.den}) × (나누는 수 ${c}) = ${n}/${d}가 되므로 맞습니다!`
    ].join('<br>');
  }

  const natMatch = item.q.match(/(\d+)\s*÷\s*(\d+)/);
  if (natMatch) {
    const a = parseInt(natMatch[1], 10);
    const b = parseInt(natMatch[2], 10);
    return [
      `① <b>먼저 알아 둘 것:</b> 나눗셈 기호(÷) 앞의 수(${a})는 분자(위)에, 뒤의 수(${b})는 분모(아래)에 적습니다.`,
      `② <b>차근차근 계산하기:</b> ${a} ÷ ${b} = <b>${item.num}/${item.den}</b>`,
      `③ <b>정답:</b> <b>${item.num}/${item.den}</b>`,
      `④ <b>거꾸로 확인하기(검산):</b> (몫 ${item.num}/${item.den}) × (나누는 수 ${b}) = ${a}가 되므로 맞습니다!`
    ].join('<br>');
  }

  return [
    `① <b>먼저 알아 둘 것:</b> ${item.h1}`,
    `② <b>차근차근 계산하기:</b> ${item.h2}`,
    `③ <b>정답:</b> <b>${item.num}/${item.den}</b>`,
    `④ <b>거꾸로 확인하기(검산):</b> ${item.checkTip || `(몫 ${item.num}/${item.den}) × (나누는 수 ${item.den}) = ${item.num}이 되므로 맞습니다!`}`
  ].join('<br>');
}

// ==========================================
// 🏫 2. 메인 내비게이션 및 10문항 실전 모의고사(단원 테스트)
// ==========================================
async function initApp() {
  ensureCurriculumUnlocked();
  await loadCloudApiKey();
  updateApiBtnBadge();
  updateCloudBadge(Boolean(db));
  if (typeof MATH_DB === 'undefined') {
    document.getElementById('app-content').innerHTML = `<div class="error-box"><h3>⚠️ data/menu.js 파일을 불러오지 못했습니다!</h3></div>`;
    return;
  }
  await showAuthScreen();
}

async function showGradeSelect() {
  ensureCurriculumUnlocked();
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
  document.getElementById('step-badge').innerText = "🌟 전체 학년 탐색 모드";
  document.getElementById('score-board').innerText = "전체 학년 열람 가능";
  setBreadcrumb("전체 학년 선택");

  const cards = MATH_DB.grades.map(g => g.active
    ? `<div class="select-card" onclick="showSemesterSelect('${g.id}')"><div class="card-title">🎒 ${g.name}</div><div class="card-sub">학습 가능 👉</div></div>`
    : `<div class="select-card locked" onclick="alert('현재 5·6학년 과정부터 오픈되어 있습니다!')"><div class="card-title">🔒 ${g.name}</div><div class="card-sub">오픈 준비 중</div></div>`
  ).join('');

  document.getElementById('app-content').innerHTML = `
    <h2>🌟 몇 학년 수학을 공부할까요?</h2>
    <div class="goal-box">모든 학년과 단원을 자유롭게 탐색하며 학습해 볼 수 있습니다!</div>
    <div class="card-grid">${cards}</div>
  `;
}

function showSemesterSelect(gradeId) {
  ensureCurriculumUnlocked();
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
    <button class="btn btn-secondary" style="margin-top:20px;" onclick="showGradeSelect()">⬅️ 전체 학년 선택으로 돌아가기</button>
  `;
}

function showUnitSelect(gradeId, semId) {
  ensureCurriculumUnlocked();
  state.grade = gradeId;
  state.semester = semId;
  state.studentGrade = gradeId;
  state.studentSem = semId;
  updateUserBadge();

  try {
    const curSess = JSON.parse(localStorage.getItem('MATH_CURRENT_SESSION') || 'null');
    if (curSess) {
      curSess.grade = gradeId;
      curSess.semester = semId;
      localStorage.setItem('MATH_CURRENT_SESSION', JSON.stringify(curSess));
    }
  } catch (e) {}

  const homeBtn = document.getElementById('home-btn');
  if (homeBtn) {
    homeBtn.style.display = state.isAllAccess ? 'inline-block' : 'none';
    homeBtn.innerText = state.isAllAccess ? '🌟 전체 학년' : '🏠 내 단원 홈';
  }
  document.getElementById('unit-btn').style.display = 'none';
  document.getElementById('step-badge').innerText = `${gradeId}-${semId}학기 | 단원 선택`;
  setBreadcrumb(`${gradeId}학년 > ${semId}학기 > 단원 선택`);

  const semList = (MATH_DB.semesters[gradeId] || []).filter(s => s.active);
  const semSwitchHTML = semList.length > 1 ? `
    <div style="display:flex; gap:10px; margin-bottom:18px;">
      ${semList.map(s => {
        const isCur = String(s.id) === String(semId);
        return `
          <button type="button" onclick="showUnitSelect('${gradeId}', '${s.id}')" style="flex:1; padding:12px; border-radius:12px; font-size:16px; font-weight:800; cursor:pointer; border:2px solid ${isCur ? '#2563eb' : '#cbd5e1'}; background:${isCur ? '#2563eb' : '#ffffff'}; color:${isCur ? '#ffffff' : '#475569'};">
            ${s.id === '1' ? '📘' : '📙'} ${gradeId}학년 ${s.name} 단원
          </button>
        `;
      }).join('')}
    </div>
  ` : '';

  const itemsHTML = (MATH_DB.units[`${gradeId}-${semId}`] || []).map(u => u.active
    ? `<button class="menu-item" onclick="showLessonSelect('${gradeId}', '${semId}', '${u.id}')"><div><div class="menu-title">📗 ${u.name}</div><div class="menu-desc">${u.desc}</div></div><span class="menu-arrow">차시 선택 👉</span></button>`
    : `<button class="menu-item locked" onclick="alert('아직 오픈 준비 중인 단원입니다!')"><div><div class="menu-title">🔒 ${u.name}</div><div class="menu-desc">${u.desc}</div></div><span class="menu-arrow">준비 중</span></button>`
  ).join('');

  const bottomNavHTML = state.isAllAccess
    ? `<button class="btn btn-secondary" style="margin-top:20px;" onclick="showGradeSelect()">🌟 전체 학년 선택으로 돌아가기</button>`
    : '';

  document.getElementById('app-content').innerHTML = `
    <h2>👋 ${state.studentName} 학생의 [${gradeId}학년 ${semId}학기] 단원 목록</h2>
    ${semSwitchHTML}
    <div class="goal-box">☁️ 클라우드 학습방이 연결되었어요! 공부할 단원을 클릭해 주세요.</div>
    <div class="menu-list">${itemsHTML}</div>
    ${bottomNavHTML}
  `;
}

async function showLessonSelect(gradeId, semId, unitId) {
  switchStepTimer(null);
  state.grade = gradeId;
  state.semester = semId;
  state.unit = unitId;
  state.unitKey = `${gradeId}-${semId}-${unitId}`;

  document.getElementById('app-content').innerHTML = `<div class="goal-box">📂 단원 문제 데이터를 불러오는 중입니다... (data/g${gradeId}/s${semId}-u${unitId}.js)</div>`;
  const loaded = await ensureUnitDataLoaded(gradeId, semId, unitId);
  if (!loaded || !MATH_DB.lessons[state.unitKey]) {
    document.getElementById('app-content').innerHTML = `
      <div class="wrong-note-card">
        <h3>⚠️ 단원 데이터 파일을 찾을 수 없습니다!</h3>
        <p>GitHub의 <b>data/g${gradeId}/</b> 폴더 안에 <b>s${semId}-u${unitId}.js</b> 파일이 올라가 있는지 확인해 주세요.</p>
        <button class="btn btn-secondary" onclick="showUnitSelect('${gradeId}', '${semId}')">⬅️ 단원 목록으로 돌아가기</button>
      </div>
    `;
    return;
  }

  document.getElementById('home-btn').style.display = 'inline-block';
  document.getElementById('unit-btn').style.display = 'none';
  document.getElementById('step-badge').innerText = `${gradeId}-${semId} | ${unitId}단원 목차`;
  document.getElementById('score-board').innerText = "차시를 선택해 수업을 시작하세요!";
  setBreadcrumb(`${gradeId}학년 > ${semId}학기 > ${unitId}단원 > 차시 선택`);

  const unitObj = MATH_DB.lessons[state.unitKey];
  const savedRecords = getStudyRecords()[state.unitKey] || {};
  let completedCount = 0;

  const itemsHTML = unitObj.lessonOrder.map((code, idx) => {
    const les = unitObj.items[code];
    const rec = savedRecords[code];
    const isLastMaster = (idx === unitObj.lessonOrder.length - 1);
    let badgeHTML = `<span class="menu-arrow">${isLastMaster ? '총정리 시작 👉' : '수업 시작 👉'}</span>`;
    if (rec) {
      completedCount++;
      const timeTag = rec.totalTime ? ` | ⏱️${rec.totalTime}` : '';
      badgeHTML = rec.status === "완료"
        ? `<span class="complete-badge">✅ 학습 완료 (첫평가 ${rec.score}점${timeTag})</span>`
        : `<span class="review-badge">⚠️ 보충 필요 (첫평가 ${rec.score}점${timeTag})</span>`;
    }
    const masterStyle = isLastMaster ? 'border-color:#3b82f6; background:#f0f9ff;' : '';
    return `<button class="menu-item" style="${masterStyle}" onclick="startLesson('${code}')"><div><div class="menu-title">${isLastMaster ? '🌟' : '✏️'} ${les.title}</div><div class="menu-desc">${les.goal}</div></div><div class="menu-right">${badgeHTML}</div></button>`;
  }).join('');

  // 단원 테스트: 항상 열어두기 (언제든 실전 10문항 모의고사 응시 가능!)
  const examRec = savedRecords['UNIT_EXAM'];
  const examHistory = (examRec && Array.isArray(examRec.history)) ? examRec.history : (examRec ? [{ score: examRec.score }] : []);
  const attemptCnt = examHistory.length;
  const examScoreBadge = examRec
    ? `<span class="complete-badge">🏆 최고 ${examRec.score}점 (${attemptCnt}회 응시) 👉</span>`
    : `<span class="menu-arrow" style="color:#b45309; font-size:15px;">실전 시험장 입장 👉</span>`;

  const historySubText = attemptCnt > 0
    ? `📈 나의 응시 기록: 총 ${attemptCnt}회 응시 (최근 기록: ${examHistory.slice(-4).map((h, i) => `${attemptCnt - Math.min(4, attemptCnt) + i + 1}회차 ${h.score}점`).join(' ➔ ')})`
    : `1~6차시 전 범위(6차시 종합 마스터 포함)에서 응시할 때마다 매번 새로운 10문제가 출제됩니다!`;

  const examBannerHTML = `
    <button class="exam-banner unlocked" onclick="startUnitExam()">
      <div>
        <div class="exam-title">🏆 [학교 시험 대비] ${unitId}단원 실전 단원평가 모의고사 (10문항 · 상시 오픈)</div>
        <div class="exam-sub">${historySubText}</div>
      </div>
      <div class="menu-right">${examScoreBadge}</div>
    </button>
  `;

  document.getElementById('app-content').innerHTML = `
    <h2>${unitObj.unitTitle} (${state.studentName} 학생의 클라우드 학습방)</h2>
    <div class="goal-box">오늘 공부할 차시를 골라 클릭해 주세요. <b>마지막 6차시(단원 종합 마스터)</b>와 아래 <b>실전 단원평가 모의고사(10문항)</b>는 학교 시험 대비를 위해 언제든 반복해서 풀 수 있도록 항상 열려 있습니다!</div>
    <div class="menu-list">${itemsHTML}</div>
    ${examBannerHTML}
    <div class="demo-bar">
      <button class="btn-reset" onclick="unlockAllLessonsForDemo()">⚡ 시연용: 전 차시 완료 찍기 (클라우드 즉시 반영)</button>
      <button class="btn-reset" onclick="clearUnitRecords()">🔄 시연용: 기록 전체 초기화</button>
    </div>
    <button class="btn btn-secondary" style="margin-top:20px;" onclick="showUnitSelect('${gradeId}', '${semId}')">⬅️ 단원 목록으로 돌아가기</button>
  `;
}

// 배열 무작위 섞기 도구
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 전 차시(1~6차시)의 step2_2 + step3A + step4B 전체에서 매번 새로운 10문항 시험지 생성!
function buildFreshUnitExamQuestions(unitObj) {
  const codes = unitObj.lessonOrder || [];
  const lastSeenSet = new Set(state.lastExamQuestionTexts || []);
  const typeLabels = ["유형1(기본·계산)", "유형2(오개념 극복)", "유형3(실생활·응용)"];

  function collectPoolForLesson(code) {
    const les = unitObj.items[code];
    if (!les) return [];
    const pool = [];

    if (Array.isArray(les.step3A)) {
      les.step3A.forEach((group, tIdx) => {
        if (!Array.isArray(group)) return;
        group.forEach((qObj, subIdx) => {
          const twinObj = (les.step4B && les.step4B[tIdx] && les.step4B[tIdx][subIdx])
            ? les.step4B[tIdx][subIdx]
            : ((les.step4B && les.step4B[tIdx] && les.step4B[tIdx][0]) || qObj);
          pool.push({
            ...qObj,
            lessonCode: code,
            lessonTitle: les.title,
            sourceType: typeLabels[tIdx] || "핵심 유형",
            twinPartner: { ...twinObj, lessonCode: code, lessonTitle: les.title }
          });
        });
      });
    }

    if (Array.isArray(les.step4B)) {
      les.step4B.forEach((group, tIdx) => {
        if (!Array.isArray(group)) return;
        group.forEach((qObj, subIdx) => {
          const origObj = (les.step3A && les.step3A[tIdx] && les.step3A[tIdx][subIdx])
            ? les.step3A[tIdx][subIdx]
            : qObj;
          pool.push({
            ...qObj,
            lessonCode: code,
            lessonTitle: les.title,
            sourceType: `${typeLabels[tIdx] || "핵심"} 변형`,
            twinPartner: { ...origObj, lessonCode: code, lessonTitle: les.title }
          });
        });
      });
    }

    if (Array.isArray(les.step2_2)) {
      les.step2_2.forEach((qObj, sIdx) => {
        const altObj = les.step2_2[(sIdx + 1) % les.step2_2.length] || qObj;
        pool.push({
          ...qObj,
          lessonCode: code,
          lessonTitle: les.title,
          sourceType: "교과서 핵심",
          twinPartner: { ...altObj, lessonCode: code, lessonTitle: les.title }
        });
      });
    }

    return pool;
  }

  const selected = [];
  const usedQTexts = new Set();

  function pickOneFromPool(pool) {
    const unseen = shuffleArray(pool.filter(item => !usedQTexts.has(cleanQuestionText(item.q)) && !lastSeenSet.has(cleanQuestionText(item.q))));
    if (unseen.length > 0) {
      const chosen = unseen[0];
      usedQTexts.add(cleanQuestionText(chosen.q));
      return chosen;
    }
    const fallback = shuffleArray(pool.filter(item => !usedQTexts.has(cleanQuestionText(item.q))));
    if (fallback.length > 0) {
      const chosen = fallback[0];
      usedQTexts.add(cleanQuestionText(chosen.q));
      return chosen;
    }
    return null;
  }

  const allPoolsByCode = {};
  codes.forEach(c => {
    allPoolsByCode[c] = collectPoolForLesson(c);
  });

  codes.forEach((c, idx) => {
    const isLastMaster = (idx === codes.length - 1);
    const pickCount = isLastMaster ? 2 : 1;
    for (let k = 0; k < pickCount; k++) {
      const picked = pickOneFromPool(allPoolsByCode[c]);
      if (picked && selected.length < 10) selected.push(picked);
    }
  });

  const remainingPool = shuffleArray(codes.flatMap(c => allPoolsByCode[c]));
  for (const cand of remainingPool) {
    if (selected.length >= 10) break;
    const cText = cleanQuestionText(cand.q);
    if (!usedQTexts.has(cText) && !lastSeenSet.has(cText)) {
      usedQTexts.add(cText);
      selected.push(cand);
    }
  }
  for (const cand of remainingPool) {
    if (selected.length >= 10) break;
    const cText = cleanQuestionText(cand.q);
    if (!usedQTexts.has(cText)) {
      usedQTexts.add(cText);
      selected.push(cand);
    }
  }

  state.lastExamQuestionTexts = selected.map(q => cleanQuestionText(q.q));
  return selected;
}

function startUnitExam() {
  const unitObj = MATH_DB.lessons[state.unitKey];
  state.examQuestions = buildFreshUnitExamQuestions(unitObj);
  state.examIdx = 0;
  state.examScore = 0;
  state.examWrongList = [];
  state.examStartTime = Date.now();
  state.examRetryRecovered = false;
  document.getElementById('unit-btn').style.display = 'inline-block';
  showUnitExamQuestion();
}

function showUnitExamQuestion() {
  const idx = state.examIdx;
  const total = state.examQuestions.length;
  const item = state.examQuestions[idx];
  state.currentItem = item;
  state.currentCheckFn = submitUnitExamAnswer;
  document.getElementById('step-badge').innerText = `🏆 실전 단원평가 (${idx + 1}/${total})`;
  document.getElementById('score-board').innerText = `실전 모의고사 진행 중 (${idx + 1} / ${total}번 | 힌트·AI 없음)`;
  setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > 실전 단원평가 (${idx + 1}번/${total}문항)`);

  const demoSkipBtn = idx < total - 1
    ? `<div class="demo-bar"><button class="btn-reset" onclick="skipExamToLastForDemo()">⚡ 시연용: 1~${total - 1}번 정답 처리하고 마지막 ${total}번 문제로 점프</button></div>`
    : '';
  document.getElementById('app-content').innerHTML = `
    <h2>🏆 ${state.unit}단원 실전 단원평가 (${idx + 1}번 / 총 ${total}문항)</h2>
    <div class="goal-box">학교 시험 대비 실전 모의고사에서는 힌트와 AI 선생님이 제공되지 않습니다. (출제 범위: <b>${item.lessonCode}차시</b> · ${item.sourceType || '핵심 문항'})</div>
    <div class="question-box">${cleanQuestionText(item.q)}</div>
    ${getAnswerWidgetHTML(item, 'submitUnitExamAnswer')}
    <button class="btn" onclick="submitUnitExamAnswer()">답안 제출하기 (${idx + 1}/${total}) 👉</button>
    ${demoSkipBtn}
  `;
}

function submitUnitExamAnswer() {
  const item = state.examQuestions[state.examIdx];
  const evalRes = evaluateCurrentAnswer(item);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }

  const pointPerQuestion = Math.round(100 / state.examQuestions.length);
  if (evalRes.isRight) {
    state.examScore += pointPerQuestion;
  } else {
    const diag = diagnoseItemError(item, evalRes);
    const fullSol = buildDetailedExplanation(item);
    state.examWrongList.push({
      qNum: state.examIdx + 1,
      lessonCode: item.lessonCode,
      sourceType: item.sourceType || '핵심 유형',
      q: item.q,
      myAns: evalRes.myAns,
      correctAns: getItemCorrectDisplay(item),
      diag,
      sol: fullSol,
      origItem: item,
      twinItem: item.twinPartner || item
    });
  }
  state.examIdx++;
  if (state.examIdx < state.examQuestions.length) showUnitExamQuestion();
  else showUnitExamResult(false);
}

function skipExamToLastForDemo() {
  const total = state.examQuestions.length;
  const pointPerQuestion = Math.round(100 / total);
  state.examScore = pointPerQuestion * (total - 1);
  state.examWrongList = [];
  state.examIdx = total - 1;
  showUnitExamQuestion();
}

async function showUnitExamResult(fromRetry = false) {
  const total = state.examQuestions.length;
  const correctCnt = total - state.examWrongList.length;

  if (!fromRetry) {
    const elapsedSec = Math.max(1, Math.round((Date.now() - (state.examStartTime || Date.now())) / 1000));
    state.examDurationStr = formatDuration(elapsedSec);

    const prevRec = (getStudyRecords()[state.unitKey] || {})['UNIT_EXAM'];
    const prevHistory = (prevRec && Array.isArray(prevRec.history))
      ? prevRec.history
      : (prevRec ? [{ score: prevRec.score, time: prevRec.totalTime || '-' }] : []);

    const newHistory = [
      ...prevHistory,
      {
        score: state.examScore,
        time: state.examDurationStr,
        date: new Date().toLocaleDateString()
      }
    ].slice(-10);

    const bestScore = prevRec ? Math.max(prevRec.score, state.examScore) : state.examScore;
    state.examHistoryList = newHistory;
    state.examBestScore = bestScore;

    await saveStudyRecord(
      state.unitKey,
      'UNIT_EXAM',
      bestScore,
      bestScore >= 80 ? "완료" : "보충 필요",
      {
        lastScore: state.examScore,
        totalTime: state.examDurationStr,
        attemptCount: newHistory.length,
        history: newHistory
      }
    );
  }

  document.getElementById('step-badge').innerText = `🏆 실전 단원평가 성적표`;
  document.getElementById('score-board').innerText = `점수: ${state.examScore}점 / 100점 (소요 시간: ${state.examDurationStr || '-'})`;

  const historyArr = state.examHistoryList || [{ score: state.examScore, time: state.examDurationStr || '-' }];
  const historyBadgesHTML = historyArr.map((h, i) => `
    <span style="padding:5px 11px; border-radius:999px; font-size:13px; font-weight:bold; background:${h.score >= 80 ? '#dcfce7' : '#fef3c7'}; color:${h.score >= 80 ? '#166534' : '#92400e'}; border:1px solid ${h.score >= 80 ? '#86efac' : '#fde68a'};">
      ${i + 1}회차: ${h.score}점 (${h.time || '-'})
    </span>
  `).join(' ➡️ ');

  const retryClinicBannerHTML = state.examWrongList.length > 0
    ? (state.examRetryRecovered
        ? `<div class="goal-box" style="background:#dcfce7; border-left-color:#16a34a; color:#14532d;">
             🎉 <b>[오답 쌍둥이 재도전 완벽 통과!]</b> 이번 시험에서 틀렸던 ${state.examWrongList.length}문제를 쌍둥이 클리닉으로 모두 정복하여 100점 실력을 완성했습니다!
           </div>`
        : `<div class="wrong-note-card" style="background:#eff6ff; border-color:#3b82f6;">
             <strong style="color:#1d4ed8; font-size:17px;">🔥 [실전 오답 정복 클리닉] 틀린 ${state.examWrongList.length}문제를 지금 바로 내 것으로 만드세요!</strong><br>
             오답 노트의 <b>[차근차근 풀어 보기]</b>를 읽은 뒤, 아래 버튼을 눌러 <b>틀린 문제와 1:1로 매칭된 쌍둥이 문제</b>를 다시 풀어 100점을 완성해 보세요!
             <button class="btn" style="background:#dc2626; margin-top:10px;" onclick="startExamWrongRetry()">🔥 틀린 ${state.examWrongList.length}문제 쌍둥이로 다시 풀기 (오답 완전 정복) 👉</button>
           </div>`)
    : '';

  const wrongNotesHTML = state.examWrongList.length === 0
    ? `<div class="goal-box">🎉 완벽합니다, ${state.studentName} 학생! ${total}문제를 모두 맞혀 ${state.unit}단원 학교 시험 준비를 100점 만점으로 마스터했습니다!</div>`
    : `<h3>📓 ${state.studentName} 학생의 단원평가 오답 노트 (틀린 문항: ${state.examWrongList.length}개)</h3>` + state.examWrongList.map((w, i) => `
      <div class="wrong-note-card">
        <strong>❌ [${w.qNum}번 문항 왜 틀렸을까요?] (${w.lessonCode}차시 · ${w.sourceType})</strong><br>
        • <strong>문제:</strong> ${cleanQuestionText(w.q)}<br>
        • <strong>내가 적은 답:</strong> <span style="color:#dc2626; font-weight:bold;">${w.myAns}</span> | <strong>바른 정답:</strong> <span style="color:#166534; font-weight:bold;">${w.correctAns}</span><br>
        • <strong>🔍 내가 틀린 까닭:</strong> <span style="color:#b45309; font-weight:bold;">${w.diag}</span><br>
        <button type="button" id="exam-sol-btn-${i}" onclick="toggleSolutionBox('exam-sol-box-${i}', 'exam-sol-btn-${i}')" style="margin-top:10px; width:100%; padding:10px 14px; border-radius:10px; border:2px dashed #f59e0b; background:#ffffff; color:#92400e; font-size:15px; font-weight:bold; cursor:pointer;">
          📖 스스로 먼저 생각해 봤나요? 차근차근 풀어 보기 (눌러서 펼치기 ▼)
        </button>
        <div id="exam-sol-box-${i}" style="display:none; margin-top:8px; padding:12px 14px; background:#ffffff; border-radius:10px; border:1px solid #fcd34d; line-height:1.7;">
          <strong style="color:#1e3a8a;">📖 차근차근 풀어 보기:</strong><br>${w.sol}
        </div>
      </div>`).join('');

  document.getElementById('app-content').innerHTML = `
    <h2>🏆 ${state.studentName} 학생의 ${state.unit}단원 실전 단원평가 성적표 (☁️ 클라우드 저장됨)</h2>
    <div class="report-card">
      <strong>• 학생 이름:</strong> ${state.studentName} (${state.grade}학년 ${state.semester}학기 ${state.unit}단원)<br>
      <strong>• 이번 회차 점수:</strong> <span style="font-size:22px; color:#2563eb; font-weight:bold;">${state.examScore}점</span> / 100점 (${total}문항 중 ${correctCnt}개 정답)  |  <strong>⏱️ 소요 시간:</strong> <b>${state.examDurationStr || '-'}</b><br>
      <strong>• 최고 기록:</strong> <span style="color:#166534; font-weight:bold;">${state.examBestScore || state.examScore}점</span>  |  <strong>종합 판정:</strong> ${state.examScore >= 80 ? '🌟 학교 시험 대비 통과!' : '💪 오답 다시 풀기 및 재응시 권장'}<br>
      <hr style="border:none; border-top:1px dashed #cbd5e1; margin:12px 0;">
      <strong>📈 회차별 점수 성장 기록 (총 ${historyArr.length}회 응시):</strong><br>
      <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap; align-items:center;">${historyBadgesHTML}</div>
    </div>
    ${retryClinicBannerHTML}
    ${wrongNotesHTML}
    <button class="btn" onclick="startUnitExam()">🔄 새로운 10문제로 단원평가 다시 보기 (실전 모의고사 재응시) 👉</button>
    <button class="btn btn-share" onclick="copyExamReportForParent()">📋 학부모·선생님께 단원평가 성적표 보내기 (카톡용 복사)</button>
    <button class="btn btn-secondary" onclick="showLessonSelect(state.grade, state.semester, state.unit)">📋 차시 선택 목록으로 돌아가기</button>
  `;
}

function startExamWrongRetry() {
  if (!state.examWrongList || state.examWrongList.length === 0) return;
  state.examRetryQueue = state.examWrongList.map((w, idx) => ({
    wrongIdx: idx,
    origQNum: w.qNum,
    lessonCode: w.lessonCode,
    origQClean: cleanQuestionText(w.q),
    myWrongAns: w.myAns,
    origCorrectAns: w.correctAns,
    diagnosis: w.diag,
    retryItem: w.twinItem || w.origItem
  }));
  state.examRetryPos = 0;
  showNextExamWrongRetry();
}

function showNextExamWrongRetry() {
  if (state.examRetryPos >= state.examRetryQueue.length) {
    state.examRetryRecovered = true;
    showUnitExamResult(true);
    return;
  }
  const cur = state.examRetryQueue[state.examRetryPos];
  const totalRetry = state.examRetryQueue.length;
  state.attempt = 1;
  state.currentItem = cur.retryItem;
  state.currentCheckFn = checkExamWrongRetry;

  document.getElementById('step-badge').innerText = `🔥 단원평가 오답 정복 (${state.examRetryPos + 1}/${totalRetry})`;
  document.getElementById('score-board').innerText = `틀렸던 ${cur.origQNum}번 문항 쌍둥이 클리닉 (${cur.lessonCode}차시)`;
  setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > 단원평가 오답 정복 (${state.examRetryPos + 1}/${totalRetry})`);

  document.getElementById('app-content').innerHTML = `
    <h2>🔥 단원평가 오답 완전 정복 (${state.examRetryPos + 1} / ${totalRetry}번째 복습 — 아까 틀린 ${cur.origQNum}번 유형)</h2>
    <div class="wrong-note-card" style="margin-bottom:18px; background:#fff7ed; border-color:#fdba74;">
      <strong>📌 [아까 단원평가 ${cur.origQNum}번에서 내가 틀린 문제 & 까닭 돌아보기] (${cur.lessonCode}차시)</strong><br>
      • <strong>아까 틀린 문제:</strong> ${cur.origQClean}<br>
      • <strong>내가 적은 답:</strong> <span style="color:#dc2626; font-weight:bold;">${cur.myWrongAns}</span> ➡️ <strong>바른 정답:</strong> <span style="color:#166534; font-weight:bold;">${cur.origCorrectAns}</span><br>
      • <strong>내가 틀린 까닭:</strong> ${cur.diagnosis}
    </div>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    ${getAnswerWidgetHTML(state.currentItem, 'checkExamWrongRetry')}
    <button class="btn" id="exam-retry-btn" onclick="checkExamWrongRetry()">정답 확인하기 👉</button>
    <div id="feedback-box" class="feedback"></div>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
}

function checkExamWrongRetry() {
  const fb = document.getElementById('feedback-box');
  const evalRes = evaluateCurrentAnswer(state.currentItem);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }
  const correctDisp = getItemCorrectDisplay(state.currentItem);

  if (evalRes.isRight) {
    const btn = document.getElementById('exam-retry-btn');
    if (btn) btn.style.display = 'none';
    state.examRetryPos++;
    const nextBtnText = state.examRetryPos < state.examRetryQueue.length
      ? `다음 오답 쌍둥이 문제 풀러 가기 (${state.examRetryPos + 1}/${state.examRetryQueue.length}) 👉`
      : `🎉 틀린 문제 모두 정복 완료! 성적표로 돌아가기 👉`;
    fb.className = "feedback correct";
    fb.innerHTML = `정답이에요! 아까 실수했던 유형을 완벽하게 내 것으로 만들었어요! 👏 (정답: <strong>${correctDisp}</strong>)<br><br><button class="btn" onclick="showNextExamWrongRetry()">${nextBtnText}</button>`;
  } else {
    fb.className = "feedback hint";
    if (state.attempt === 1) {
      fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
      state.attempt++;
    } else {
      fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 열린 [1단계 도우미: 스몰 스텝 빈칸]과 [소크라테스 AI 선생님]의 도움을 받아 끝까지 해결해 보세요!`;
      state.attempt++;
      activateSmallStepIfNeeded();
    }
  }
}

function copyExamReportForParent() {
  const total = state.examQuestions.length;
  const correctCnt = total - state.examWrongList.length;
  const unitObj = MATH_DB.lessons[state.unitKey] || {};
  const historyArr = state.examHistoryList || [{ score: state.examScore, time: state.examDurationStr || '-' }];
  const historyLine = historyArr.map((h, i) => `${i + 1}회차 ${h.score}점(${h.time || '-'})`).join(' → ');

  const wrongLines = state.examWrongList.length === 0
    ? "  - 틀린 문항 없음 (10문항 전체 정답 만점!)"
    : state.examWrongList.map(w => `  - ${w.qNum}번(${w.lessonCode}차시): 내 답 ${w.myAns} → 정답 ${w.correctAns}\n    └ 오답 원인: ${w.diag}`).join('\n');

  const clinicLine = state.examWrongList.length === 0
    ? "만점 통과로 오답 클리닉 면제"
    : (state.examRetryRecovered ? "✅ 틀린 문항 1:1 쌍둥이 재도전 모두 통과 완료!" : "⚠️ 오답 노트 복습 진행 중");

  const shareText = [
    `[🏆 ${state.studentName} 학생(${state.grade}-${state.semester}) 실전 단원평가 모의고사 성적표]`,
    `• 응시 일시: ${new Date().toLocaleString()}`,
    `• 평가 단원: ${unitObj.unitTitle || `${state.grade}학년 ${state.semester}학기 ${state.unit}단원`}`,
    `• 이번 회차 점수: ${state.examScore}점 / 100점 (${total}문항 중 ${correctCnt}개 정답)`,
    `• 시험 소요 시간: ⏱️ ${state.examDurationStr || '-'}`,
    `• 회차별 성장 기록: ${historyLine}`,
    `• 오답 분석 기록:`,
    wrongLines,
    `• 오답 재도전 상태: ${clinicLine}`
  ].join('\n');

  navigator.clipboard.writeText(shareText)
    .then(() => alert('✅ 단원평가 성적표가 복사되었습니다! 카카오톡에 붙여넣기(Ctrl+V) 하세요.'))
    .catch(() => prompt('복사(Ctrl+C)해서 전달하세요:', shareText));
}

// ==========================================
// 🚀 3. 차시 수업 시작 및 1~2단계 진행
// ==========================================
function startLesson(lessonId) {
  state.lessonId = lessonId;
  state.lessonData = MATH_DB.lessons[state.unitKey].items[lessonId];
  state.records = ['➖', '➖', '➖'];
  state.step3Answers = [];
  state.score = 0;
  state.wrongIndices = [];
  state.bRetryQueue = [];
  state.bResults = [];
  state.bDetailedLogs = [];
  state.attempt = 1;
  resetLessonTimer();
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
  switchStepTimer('warmup');
  updateLessonHeader("워밍업: 지난 시간 복습");
  state.attempt = 1;
  state.currentItem = pick(state.lessonData.warmup);
  state.currentCheckFn = checkWarmup;
  document.getElementById('app-content').innerHTML = `
    <h2>🔥 워밍업: 지난 시간 복습 퀴즈</h2>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    ${getAnswerWidgetHTML(state.currentItem, 'checkWarmup')}
    <button class="btn" onclick="checkWarmup()">정답 확인하기</button>
    <div id="feedback-box" class="feedback"></div>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
}

function checkWarmup() {
  const fb = document.getElementById('feedback-box');
  const evalRes = evaluateCurrentAnswer(state.currentItem);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }
  if (evalRes.isRight) {
    const disp = getItemCorrectDisplay(state.currentItem);
    const reduceTip = evalRes.status === 'unreduced' ? `<br>💡 참고: 분자와 분모를 약분하면 기약분수 <strong>${disp}</strong>으로도 나타낼 수 있어요!` : '';
    fb.className = "feedback correct";
    fb.innerHTML = `지난 시간 내용을 완벽하게 기억하고 있네요! 👍 (정답: <strong>${disp}</strong>)${reduceTip}<br><br><button class="btn" onclick="showStep1Video()">오늘의 개념 보러 가기 👉</button>`;
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
  switchStepTimer('step1');
  updateLessonHeader("1단계: 개념 영상");
  const cleanUrl = getCleanYoutubeEmbedUrl(state.lessonData.videoUrl);
  const mediaHTML = cleanUrl
    ? `<div class="video-box"><div class="yt-shield-top"></div><div class="yt-shield-bottom"></div><iframe src="${cleanUrl}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-notice">💡 영상 가운데를 눌러 재생하세요!</div><div class="summary-card" style="margin-top:14px;">${state.lessonData.summaryCard}</div>`
    : `<div class="summary-card">${state.lessonData.summaryCard}</div>`;
  const btnText = cleanUrl ? "영상을 끝까지 다 봤어요! (개념 퀴즈 풀기) 👉" : "핵심 약속을 다 읽었어요! (개념 퀴즈 풀기) 👉";
  document.getElementById('app-content').innerHTML = `
    <h2>${state.lessonData.title}</h2>
    <div class="goal-box"><strong>오늘의 학습 목표:</strong> ${state.lessonData.goal}</div>
    ${mediaHTML}
    <button class="btn" onclick="showStep1Quiz()">${btnText}</button>
  `;
}

function showStep1Quiz() {
  switchStepTimer('step1');
  updateLessonHeader("1단계: 개념 확인 퀴즈");
  state.attempt = 1;
  state.currentItem = pick(state.lessonData.step1Quiz);
  state.currentCheckFn = null;
  const btns = state.currentItem.choices.map((c, idx) => `<button class="choice-btn" onclick="checkStep1Quiz('${idx + 1}')">${c}</button>`).join('');
  document.getElementById('app-content').innerHTML = `
    <h2>개념 확인 객관식 퀴즈</h2>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
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
  switchStepTimer('step2');
  updateLessonHeader("2단계: 함께 풀기 (1/2)");
  state.attempt = 1;
  state.currentItem = pick(state.lessonData.step2_1);
  state.currentCheckFn = checkStep2_1;
  const unitLabel = state.currentItem.unit ? `<span style="font-size:20px; font-weight:bold; color:#1e293b;">${state.currentItem.unit}</span>` : '';
  const placeholder = state.currentItem.placeholder || "알맞은 숫자나 말을 입력하세요";
  document.getElementById('app-content').innerHTML = `
    <h2>교과서 본문 문제 1 (함께 풀기)</h2>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    <div style="display:flex; justify-content:center; align-items:center; gap:10px; margin:16px 0;">
      <input type="text" id="ans-input" class="text-input" style="max-width:340px; margin-bottom:0; text-align:center; font-size:20px; font-weight:bold;" placeholder="${placeholder}" onkeydown="if(event.key==='Enter') checkStep2_1()">
      ${unitLabel}
    </div>
    <button class="btn" onclick="checkStep2_1()">정답 확인하기</button>
    <div id="feedback-box" class="feedback"></div>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
}

function checkStep2_1() {
  const rawVal = document.getElementById('ans-input').value.trim();
  const cleanVal = rawVal.replace(/\s+/g, '');
  const targetAns = String(state.currentItem.ans).replace(/\s+/g, '');
  const fb = document.getElementById('feedback-box');

  const isRight = cleanVal && (cleanVal === targetAns || (state.currentItem.unit && cleanVal === `${targetAns}${state.currentItem.unit}`) || rawVal.replace(/[^0-9.]/g, '') === targetAns);

  if (isRight) {
    const disp = `${state.currentItem.ans}${state.currentItem.unit ? ' ' + state.currentItem.unit : ''}`;
    fb.className = "feedback correct";
    fb.innerHTML = `정답이에요! 바른 답은 <strong>${disp}</strong>입니다.<br><br><button class="btn" onclick="showStep2_2()">다음 문제(혼자 풀기)로 이동 👉</button>`;
  } else {
    fb.className = "feedback hint";
    if (state.attempt === 1) {
      fb.innerText = `💡 1차 힌트: ${state.currentItem.h1}`;
      state.attempt++;
    } else {
      fb.innerText = `💡 2차 힌트: ${state.currentItem.h2}\n👇 아래에 나타난 도우미 또는 소크라테스 AI 선생님과 함께 답을 찾아보세요!`;
      state.attempt++;
      if (state.currentItem.steps && state.currentItem.steps.length > 0) {
        activateSmallStepIfNeeded();
      } else {
        openAiTutorForStep(`학생이 문제에서 "${rawVal || '빈칸'}"이라고 적어 2번 틀렸습니다. 정답(${state.currentItem.ans})을 직접 말하지 말고 쉬운 질문으로 유도해 주세요!`);
      }
    }
  }
}

function showStep2_2() {
  switchStepTimer('step2');
  updateLessonHeader("2단계: 혼자 풀기 (2/2)");
  state.attempt = 1;
  state.currentItem = pick(state.lessonData.step2_2);
  state.currentCheckFn = checkStep2_2;
  document.getElementById('app-content').innerHTML = `
    <h2>교과서 본문 문제 2 (혼자 풀기)</h2>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    ${getAnswerWidgetHTML(state.currentItem, 'checkStep2_2')}
    <button class="btn" onclick="checkStep2_2()">정답 확인하기</button>
    <div id="feedback-box" class="feedback"></div>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
}

function checkStep2_2() {
  const fb = document.getElementById('feedback-box');
  const evalRes = evaluateCurrentAnswer(state.currentItem);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }
  if (evalRes.isRight) {
    const disp = getItemCorrectDisplay(state.currentItem);
    const reduceTip = evalRes.status === 'unreduced' ? `<br>💡 참고: 약분하면 기약분수 <strong>${disp}</strong>으로도 나타낼 수 있어요!` : '';
    fb.className = "feedback correct";
    fb.innerHTML = `완벽해요! (정답: <strong>${disp}</strong>)${reduceTip}<br><br><button class="btn" onclick="showStep3(0)">3단계 실력 평가 시작하기 👉</button>`;
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
// 📝 4. 3단계: 블라인드 실력 평가 (하위 후보 번호 subIdx 기억!)
// ==========================================
function showStep3(idx) {
  switchStepTimer('step3');
  if (idx === 0) {
    state.step3Answers = [];
    state.records = ['➖', '➖', '➖'];
    state.score = 0;
    state.wrongIndices = [];
  }
  state.attempt = 1;

  const pool = state.lessonData.step3A[idx] || [];
  const subIdx = Math.floor(Math.random() * pool.length);
  state.currentStep3SubIdx = subIdx;
  state.currentItem = pool[subIdx];
  state.currentCheckFn = () => submitStep3Blind(idx);

  document.getElementById('step-badge').innerText = `${state.lessonId}차시 | 3단계: 실력 확인 (${idx + 1}/3)`;
  document.getElementById('score-board').innerText = `실력 확인 진행 중 (${idx + 1} / 3번 문항 | 3문제를 다 풀면 결과를 확인해요!)`;
  setBreadcrumb(`${state.grade}학년 > ${state.semester}학기 > ${state.unit}단원 > ${state.lessonId}차시 (3단계 실력 확인 ${idx + 1}번)`);

  const typeNames = ["유형 1: 기본 개념·계산", "유형 2: 오개념·원리 추론", "유형 3: 실생활 활용"];
  const btnLabel = idx < 2 ? `답안 제출하고 다음 문제(${idx + 2}번)로 이동 👉` : `3문제 모두 제출하고 실력 확인 결과 보기 👉`;

  document.getElementById('app-content').innerHTML = `
    <h2>📝 3단계 실력 확인 (${idx + 1}번 - ${typeNames[idx]})</h2>
    <div class="goal-box"><strong>스스로 풀어보는 시간입니다!</strong> 맞았는지 틀렸는지는 바로 알려주지 않으며, 3문제를 끝까지 다 풀고 난 뒤에 한꺼번에 확인합니다.</div>
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    ${getAnswerWidgetHTML(state.currentItem, `submitStep3Blind(${idx})`)}
    <button class="btn" id="submit-btn" onclick="submitStep3Blind(${idx})">${btnLabel}</button>
  `;
}

function submitStep3Blind(idx) {
  const item = state.currentItem;
  const evalRes = evaluateCurrentAnswer(item);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }

  const typeNames = ["유형 1: 기본 개념·계산", "유형 2: 오개념·원리 추론", "유형 3: 실생활 활용"];
  const correctDisp = getItemCorrectDisplay(item);

  let diagText = '';
  if (evalRes.status === 'correct') {
    diagText = '핵심 원리에 맞게 정확하게 잘 풀었어요!';
  } else if (evalRes.status === 'unreduced') {
    diagText = `정답이에요! (${evalRes.myAns}과 ${correctDisp}은 크기가 같은 분수예요. 분자와 분모를 한 번 더 약분하면 기약분수 ${correctDisp}로 더 깔끔하게 쓸 수 있어요!)`;
  } else {
    diagText = diagnoseItemError(item, evalRes);
  }

  state.step3Answers[idx] = {
    idx: idx,
    subIdx: state.currentStep3SubIdx || 0,
    typeName: typeNames[idx] || `문항 ${idx + 1}`,
    q: item.q,
    qClean: cleanQuestionText(item.q),
    myAns: evalRes.myAns,
    correctAns: correctDisp,
    isCorrect: evalRes.isRight,
    status: evalRes.status,
    diagnosis: diagText,
    detailedSol: buildDetailedExplanation(item)
  };

  if (idx < 2) {
    showStep3(idx + 1);
  } else {
    finalizeStep3AndShowReview();
  }
}

function finalizeStep3AndShowReview() {
  switchStepTimer('step3');
  state.wrongIndices = [];
  let correctCount = 0;

  state.step3Answers.forEach((ans, idx) => {
    if (ans.isCorrect) {
      state.records[idx] = '⭕';
      correctCount++;
    } else {
      state.records[idx] = '❌';
      state.wrongIndices.push(idx);
    }
  });

  state.score = Math.round((correctCount / 3) * 100);
  updateLessonHeader("3단계: 실력 확인 결과");

  const summaryBarHTML = `
    <div style="display:flex; gap:8px; margin-bottom:16px; flex-wrap:wrap;">
      ${state.step3Answers.map((a, i) => `
        <span style="padding:6px 12px; border-radius:999px; font-weight:bold; font-size:14px; background:${a.isCorrect ? '#dcfce7' : '#fee2e2'}; color:${a.isCorrect ? '#166534' : '#991b1b'};">
          ${i + 1}번(${a.typeName.split(':')[0]}): ${a.isCorrect ? `⭕ 맞음 (${a.myAns})` : `❌ 틀림 (내 답: ${a.myAns})`}
        </span>
      `).join('')}
    </div>
  `;

  const reviewCardsHTML = state.step3Answers.map((ans, idx) => {
    if (ans.isCorrect) {
      return `
        <div class="report-card" style="border-color:#22c55e; background:#f0fdf4; margin-bottom:16px; padding:16px;">
          <strong style="color:#166534; font-size:18px;">⭕ [${idx + 1}번 문제 - ${ans.typeName}] 잘했어요! 맞았습니다!</strong><br>
          • <strong>문제:</strong> ${ans.qClean}<br>
          • <strong>내가 적은 답:</strong> <span style="color:#166534; font-weight:bold;">${ans.myAns}</span>  |  <strong>바른 정답:</strong> <span style="color:#166534; font-weight:bold;">${ans.correctAns}</span><br>
          • <strong>칭찬 한마디:</strong> ${ans.diagnosis}
        </div>
      `;
    } else {
      return `
        <div class="wrong-note-card" style="margin-bottom:16px; padding:16px;">
          <strong style="color:#b45309; font-size:18px;">❌ [${idx + 1}번 문제 - ${ans.typeName}] 왜 틀렸을까요?</strong><br>
          • <strong>문제:</strong> ${ans.qClean}<br>
          • <strong>내가 적은 답:</strong> <span style="color:#dc2626; font-weight:bold;">${ans.myAns}</span><br>
          • <strong>🔍 내가 틀린 까닭:</strong> <span style="color:#b45309; font-weight:bold;">${ans.diagnosis}</span><br>
          <button type="button" id="step3-sol-btn-${idx}" onclick="toggleSolutionBox('step3-sol-box-${idx}', 'step3-sol-btn-${idx}')" style="margin-top:10px; width:100%; padding:11px 14px; border-radius:10px; border:2px dashed #f59e0b; background:#ffffff; color:#92400e; font-size:15px; font-weight:bold; cursor:pointer; transition:0.15s;">
            📖 스스로 먼저 생각해 봤나요? 차근차근 풀어 보기 (눌러서 펼치기 ▼)
          </button>
          <div id="step3-sol-box-${idx}" style="display:none; margin-top:10px; padding:12px 14px; background:#ffffff; border-radius:10px; border:1px solid #f59e0b; line-height:1.7;">
            <strong style="color:#1e3a8a;">📖 차근차근 풀어 보기 (바른 정답: <span style="color:#166534;">${ans.correctAns}</span>)</strong><br>
            ${ans.detailedSol}
          </div>
        </div>
      `;
    }
  }).join('');

  let bottomBtnHTML = '';
  if (state.wrongIndices.length === 0) {
    bottomBtnHTML = `
      <div class="goal-box">🎉 와우! 3문제를 모두 맞혔어요! 보충 학습 없이 바로 5단계 마무리로 이동합니다!</div>
      <button class="btn" onclick="showStep5A()">5단계 오늘 공부 마무리로 이동하기 👉</button>
    `;
  } else {
    state.bRetryQueue = [...state.wrongIndices];
    bottomBtnHTML = `
      <div class="goal-box">💪 틀린 문제(${state.wrongIndices.map(i => (i + 1) + '번').join(', ')})의 <strong>내가 틀린 까닭</strong>을 읽고 <strong>[차근차근 풀어 보기]</strong>도 펼쳐서 확인해 보았나요?<br>이제 4단계에서 <strong>비슷한 쌍둥이 문제</strong>를 풀며 완전히 내 것으로 만들어 봅시다!</div>
      <button class="btn" onclick="showStep4Intro()">4단계: 틀린 유형 쌍둥이 문제 풀러 가기 👉</button>
    `;
  }

  document.getElementById('app-content').innerHTML = `
    <h2>📊 3단계 실력 확인 결과 (3문제 중 ${correctCount}개 정답 | ${state.score}점)</h2>
    ${summaryBarHTML}
    ${reviewCardsHTML}
    ${bottomBtnHTML}
  `;
}

// ==========================================
// 🔄 5. 4단계: 1:1 매칭 쌍둥이 보충 및 상세 이력 추적
// ==========================================
function showStep4Intro() {
  switchStepTimer('step4');
  updateLessonHeader("4단계: 보충 및 쌍둥이 문제");
  document.getElementById('app-content').innerHTML = `
    <h2>4단계: 핵심 비법 보충 & 쌍둥이 문제 재도전</h2>
    <div class="goal-box">
      3단계에서 아쉬웠던 문제를 완벽히 이해하고 넘어가는 시간이에요!<br>
      막히면 <strong>1단계 스몰 스텝 빈칸</strong>과 <strong>2단계 소크라테스 AI 선생님</strong>이 도와주며, 3번까지 어려우면 풀이를 확인하고 다음으로 넘어갈 수 있어요.<br><br>
      <strong>[오늘의 핵심 비법]</strong> ${state.lessonData.step4Intro}
    </div>
    <button class="btn" onclick="showNextStep4B()">쌍둥이 문제 재도전 시작하기 👉</button>
  `;
}

function showNextStep4B() {
  switchStepTimer('step4');
  if (state.bRetryQueue.length === 0) {
    showStep5A();
    return;
  }
  const qIdx = state.bRetryQueue.shift();
  state.attempt = 1;

  const prevWrong = state.step3Answers && state.step3Answers[qIdx] ? state.step3Answers[qIdx] : null;
  const twinPool = state.lessonData.step4B[qIdx] || [];
  const matchedSubIdx = (prevWrong && prevWrong.subIdx !== undefined && twinPool[prevWrong.subIdx])
    ? prevWrong.subIdx
    : 0;
  state.currentItem = twinPool[matchedSubIdx] || pick(twinPool);

  state.currentCheckFn = () => checkStep4B(qIdx);
  updateLessonHeader(`4단계: 쌍둥이 문제 B-${qIdx + 1}번`);

  const prevReviewBanner = prevWrong ? `
    <div class="wrong-note-card" style="margin-bottom:18px; background:#fff7ed; border-color:#fdba74;">
      <strong>📌 [아까 3단계 ${qIdx + 1}번에서 내가 틀린 문제 & 까닭 돌아보기]</strong><br>
      • <strong>아까 틀린 문제:</strong> ${prevWrong.qClean}<br>
      • <strong>아까 내가 적은 답:</strong> <span style="color:#dc2626; font-weight:bold;">${prevWrong.myAns}</span> ➡️ <strong>바른 정답:</strong> <span style="color:#166534; font-weight:bold;">${prevWrong.correctAns}</span><br>
      • <strong>내가 틀린 까닭:</strong> ${prevWrong.diagnosis}
    </div>
  ` : '';

  document.getElementById('app-content').innerHTML = `
    <h2>쌍둥이 문제 재도전 (${qIdx + 1}번과 1:1 매칭된 쌍둥이 문제)</h2>
    ${prevReviewBanner}
    <div class="question-box">${cleanQuestionText(state.currentItem.q)}</div>
    ${getAnswerWidgetHTML(state.currentItem, `checkStep4B(${qIdx})`)}
    <button class="btn" id="b-submit-btn" onclick="checkStep4B(${qIdx})">정답 제출하기</button>
    <div id="feedback-box" class="feedback"></div>
    ${getSmallStepHTML()}
    ${getAiTutorHTML()}
  `;
}

function buildStep4HelperSummary() {
  const helpers = [];
  if (state.attempt >= 2) helpers.push("1차 힌트 열람");
  if (state.smallStepIdx > 0) helpers.push(`스몰스텝 빈칸(${state.smallStepIdx}계단) 수행`);
  const aiTurnCount = Math.floor((state.aiChatHistory ? state.aiChatHistory.length : 0) / 2);
  if (aiTurnCount > 0) helpers.push(`소크라테스 AI 선생님과 ${aiTurnCount}회 문답`);
  return helpers.length > 0 ? helpers.join(" + ") : "도우미 없이 스스로 해결";
}

function checkStep4B(qIdx) {
  const fb = document.getElementById('feedback-box');
  const evalRes = evaluateCurrentAnswer(state.currentItem);
  if (evalRes.empty) {
    alert(evalRes.msg);
    return;
  }
  const correctDisp = getItemCorrectDisplay(state.currentItem);

  if (evalRes.isRight) {
    const helperUsed = buildStep4HelperSummary();
    const passDetail = state.attempt === 1
      ? `${qIdx + 1}번 쌍둥이: 1차 시도에 도우미 없이 스스로 통과(⭕)`
      : `${qIdx + 1}번 쌍둥이: ${state.attempt}차 시도 만에 통과 [활용 도우미: ${helperUsed}] (⭕)`;

    state.bResults.push(passDetail);
    state.bDetailedLogs.push({
      qNum: qIdx + 1,
      twinQ: cleanQuestionText(state.currentItem.q),
      correctAns: correctDisp,
      attempts: state.attempt,
      helperUsed: helperUsed,
      passed: true
    });

    const submitBtn = document.getElementById('b-submit-btn');
    if (submitBtn) submitBtn.style.display = 'none';
    const reduceTip = evalRes.status === 'unreduced' ? `<br>💡 참고: 약분하면 기약분수 <strong>${correctDisp}</strong>으로도 쓸 수 있어요!` : '';
    fb.className = "feedback correct";
    fb.innerHTML = `정답이에요! 원리를 완벽하게 이해하고 쌍둥이 문제를 내 것으로 만들었어요! (정답: <strong>${correctDisp}</strong>)${reduceTip}<br><br><button class="btn" onclick="showNextStep4B()">다음 단계로 이동 👉</button>`;
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
      const helperUsed = buildStep4HelperSummary();
      const failDetail = `${qIdx + 1}번 쌍둥이: 3회 오답으로 풀이 확인 후 이동 [활용 도우미: ${helperUsed}] (⚠️ 추가 복습 필요)`;
      if (!state.bResults.some(r => r.startsWith(`${qIdx + 1}번`))) {
        state.bResults.push(failDetail);
        state.bDetailedLogs.push({
          qNum: qIdx + 1,
          twinQ: cleanQuestionText(state.currentItem.q),
          correctAns: correctDisp,
          attempts: 3,
          helperUsed: helperUsed,
          passed: false
        });
      }
      const submitBtn = document.getElementById('b-submit-btn');
      if (submitBtn) submitBtn.style.display = 'none';

      fb.className = "feedback hint";
      fb.innerHTML = `
        💡 <strong>[3차 시도 완료 - 차근차근 풀어 보기]</strong><br>
        이번 문제가 조금 까다로웠죠? 끝까지 포기하지 않고 도전한 점을 칭찬해요! 👏<br>
        • <strong>정답:</strong> <span style="color:#166534; font-weight:bold;">${correctDisp}</span><br>
        <div style="margin:8px 0; padding:10px; background:#fff; border-radius:8px; border:1px solid #f59e0b;">
          <strong>📖 차근차근 풀어 보기:</strong><br>${buildDetailedExplanation(state.currentItem)}
        </div>
        위 풀이 과정을 눈으로 꼭 익혀두고 다음 단계로 넘어가요! (이 기록은 완료 보고서에 상세히 저장됩니다)<br><br>
        <button class="btn" onclick="showNextStep4B()">풀이 확인 완료! 다음 단계로 이동하기 👉</button>
      `;
      fb.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

// ==========================================
// 🗣️ 6. 5단계 마무리 및 상세 완료 보고서(소요 시간 포함)
// ==========================================
function showStep5A() {
  switchStepTimer('step5');
  updateLessonHeader("5단계: 오늘 공부 마무리 (1/2)");
  const s5a = state.lessonData.step5A;
  state.currentItem = { q: s5a.q, ans: s5a.ans };
  state.currentCheckFn = checkStep5A;
  document.getElementById('app-content').innerHTML = `
    <h2>5단계: 오늘 배운 핵심 원리 정리</h2>
    <div class="question-box">${cleanQuestionText(s5a.q)}</div>
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
  switchStepTimer('step5');
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

function buildTeacherSynthesisComment(needHelp) {
  if (state.wrongIndices.length === 0) {
    return "오늘 배운 핵심 개념을 완벽하게 이해하여 3단계 실력 확인의 모든 문제를 첫 시도에 스스로 해결했습니다. 매우 훌륭합니다!";
  }
  const wrongTypes = state.wrongIndices.map(i => `${i + 1}번`).join(', ');
  if (!needHelp) {
    return `3단계 실력 확인의 ${wrongTypes} 문제에서 아쉬운 실수가 있었으나, '내가 틀린 까닭'을 확인하고 4단계 쌍둥이 보충 문제를 풀어보며 스스로 원리를 깨우치고 약점을 완벽하게 극복했습니다!`;
  }
  return `3단계(${wrongTypes} 문제)와 4단계 쌍둥이 보충 문제에서 다소 어려움을 겪어 풀이를 확인하고 통과했습니다. 오늘 틀렸던 문제의 원리를 한 번 더 복습해 보는 것을 권장합니다.`;
}

async function showFinalReport() {
  switchStepTimer(null);
  updateLessonHeader("학습 완료!");

  const st = state.stepTimes || {};
  const totalSec = (st.warmup || 0) + (st.step1 || 0) + (st.step2 || 0) + (st.step3 || 0) + (st.step4 || 0) + (st.step5 || 0);
  const totalTimeStr = formatDuration(totalSec);

  const needHelp = state.bResults.some(r => r.includes("필요"));
  const finalState = needHelp ? "추가 복습 필요" : "완료";
  const correctCnt = 3 - state.wrongIndices.length;

  await saveStudyRecord(state.unitKey, state.lessonId, state.score, finalState, {
    totalTime: totalTimeStr,
    stepTimes: st
  });

  const step3DetailHTML = [0, 1, 2].map(idx => {
    const a = state.step3Answers && state.step3Answers[idx];
    if (!a) return `<div style="margin-bottom:8px;">• ${idx + 1}번: 기록 없음</div>`;
    if (a.isCorrect) {
      return `
        <div style="margin-bottom:10px; padding:10px 12px; background:#f0fdf4; border-left:4px solid #22c55e; border-radius:6px;">
          <strong>⭕ ${idx + 1}번 [${a.typeName}] — 맞음</strong> (내가 적은 답: <b>${a.myAns}</b>)<br>
          <span style="font-size:14px; color:#475569;">• 문제: ${a.qClean}</span>
        </div>
      `;
    } else {
      return `
        <div style="margin-bottom:10px; padding:10px 12px; background:#fffbeb; border-left:4px solid #f59e0b; border-radius:6px;">
          <strong>❌ ${idx + 1}번 [${a.typeName}] — 틀림</strong> (내가 적은 답: <b style="color:#dc2626;">${a.myAns}</b> ➔ 바른 정답: <b style="color:#166534;">${a.correctAns}</b>)<br>
          <span style="font-size:14px; color:#475569;">• 문제: ${a.qClean}</span><br>
          <span style="font-size:14px; color:#b45309;">• <b>내가 틀린 까닭:</b> ${a.diagnosis}</span>
        </div>
      `;
    }
  }).join('');

  let step4DetailHTML = '';
  if (state.wrongIndices.length === 0) {
    step4DetailHTML = `<div style="padding:10px 12px; background:#eff6ff; border-radius:8px; color:#1e40af;">🎉 3단계 실력 확인 3문제를 모두 맞혀 보충 학습 없이 바로 통과했습니다!</div>`;
  } else {
    step4DetailHTML = (state.bDetailedLogs || []).map(log => `
      <div style="margin-bottom:8px; padding:10px 12px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
        <strong>🔄 ${log.qNum}번 쌍둥이 보충:</strong> ${log.passed ? `<span style="color:#166534; font-weight:bold;">${log.attempts}차 시도 만에 완벽 통과 (⭕)</span>` : `<span style="color:#dc2626; font-weight:bold;">3회 오답 후 풀이 학습 (⚠️ 복습 권장)</span>`}<br>
        <span style="font-size:14px; color:#475569;">• 보충 문제: ${log.twinQ} (정답: ${log.correctAns})</span><br>
        <span style="font-size:14px; color:#0f766e;">• 학습 과정 및 도우미 활용: <b>${log.helperUsed}</b></span>
      </div>
    `).join('');
  }

  const timeBreakdownHTML = `
    <table class="cloud-table" style="margin-top:8px; margin-bottom:14px;">
      <thead>
        <tr>
          ${state.lessonData.warmup ? '<th>워밍업</th>' : ''}
          <th>1단계(개념)</th>
          <th>2단계(교과서)</th>
          <th>3단계(실력확인)</th>
          <th>4단계(쌍둥이보충)</th>
          <th>5단계(정리·낭독)</th>
          <th style="background:#dbeafe; color:#1e3a8a;">전체 소요 시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          ${state.lessonData.warmup ? `<td>${formatDuration(st.warmup)}</td>` : ''}
          <td>${formatDuration(st.step1)}</td>
          <td>${formatDuration(st.step2)}</td>
          <td>${formatDuration(st.step3)}</td>
          <td>${state.wrongIndices.length === 0 ? '면제(모두 맞힘)' : formatDuration(st.step4)}</td>
          <td>${formatDuration(st.step5)}</td>
          <td style="font-weight:bold; color:#1d4ed8; background:#eff6ff;">⏱️ ${totalTimeStr}</td>
        </tr>
      </tbody>
    </table>
  `;

  const teacherComment = buildTeacherSynthesisComment(needHelp);
  const nextUnit = state.lessonData.nextUnit;
  const nextBtnHTML = nextUnit
    ? `<button class="btn" onclick="startLesson('${nextUnit}')">다음 시간 [${nextUnit}차시] 바로 이어서 공부하기 👉</button>`
    : `<button class="btn" style="background:#d97706;" onclick="startUnitExam()">🏆 ${state.unit}단원 완주! [실전 단원평가 모의고사(10문항)] 바로 응시하기 👉</button>`;

  document.getElementById('app-content').innerHTML = `
    <h2>📊 ${state.studentName} 학생의 완전학습 완료 보고서 (☁️ 클라우드 저장됨)</h2>
    <div class="report-card">
      <strong>👤 기본 학습 정보</strong><br>
      • <strong>학생 이름:</strong> ${state.studentName} (${state.studentGrade}학년 ${state.studentSem}학기)<br>
      • <strong>학습 차시:</strong> ${state.grade}학년 ${state.semester}학기 ${state.unit}단원 (${state.lessonData.title})<br>
      • <strong>최종 판정:</strong> <span style="font-weight:bold; color:${needHelp ? '#dc2626' : '#166534'};">[ ${finalState} ]</span>  |  <strong>3단계 실력 확인 결과:</strong> <span style="font-weight:bold; color:#2563eb;">3문제 중 ${correctCnt}개 정답 (${state.score}점)</span>
      
      <hr style="border:none; border-top:1px dashed #cbd5e1; margin:16px 0;">
      <strong>⏱️ 단계별 학습 소요 시간 (총 소요 시간: <span style="color:#2563eb;">${totalTimeStr}</span>)</strong>
      ${timeBreakdownHTML}

      <hr style="border:none; border-top:1px dashed #cbd5e1; margin:16px 0;">
      <strong>📝 3단계 실력 확인 문제별 결과</strong>
      <div style="margin-top:8px;">${step3DetailHTML}</div>

      <hr style="border:none; border-top:1px dashed #cbd5e1; margin:16px 0;">
      <strong>🔄 4단계 쌍둥이 보충 기록</strong>
      <div style="margin-top:8px;">${step4DetailHTML}</div>

      <hr style="border:none; border-top:1px dashed #cbd5e1; margin:16px 0;">
      <strong>👩‍🏫 선생님 총평</strong>
      <div style="margin-top:6px; padding:12px; background:#f0fdfa; border:1px solid #5eead4; border-radius:10px; color:#134e4a; font-size:15px;">
        "${teacherComment}"
      </div>
    </div>
    ${nextBtnHTML}
    <button class="btn btn-share" onclick="copyReportForParent()">📋 학부모·선생님께 결과 보고서 보내기 (카톡용 복사)</button>
    <button class="btn btn-secondary" onclick="showLessonSelect(state.grade, state.semester, state.unit)">📋 차시 선택 목록으로 돌아가기 (도장 확인)</button>
  `;
}

function copyReportForParent() {
  const st = state.stepTimes || {};
  const totalSec = (st.warmup || 0) + (st.step1 || 0) + (st.step2 || 0) + (st.step3 || 0) + (st.step4 || 0) + (st.step5 || 0);
  const totalTimeStr = formatDuration(totalSec);
  const needHelp = state.bResults.some(r => r.includes("필요"));
  const finalState = needHelp ? "추가 복습 필요" : "완전학습 통과";
  const correctCnt = 3 - state.wrongIndices.length;

  const step3Lines = [0, 1, 2].map(idx => {
    const a = state.step3Answers && state.step3Answers[idx];
    if (!a) return `  - ${idx + 1}번: 기록 없음`;
    if (a.isCorrect) return `  - ${idx + 1}번(${a.typeName}): ⭕ 맞음 (내가 적은 답: ${a.myAns})`;
    return `  - ${idx + 1}번(${a.typeName}): ❌ 틀림 (내가 적은 답: ${a.myAns} → 정답: ${a.correctAns})\n    └ 내가 틀린 까닭: ${a.diagnosis}`;
  }).join('\n');

  const step4Lines = state.wrongIndices.length === 0
    ? "  - 3단계 문제를 모두 맞혀 보충 면제"
    : (state.bDetailedLogs || []).map(l => `  - ${l.qNum}번 쌍둥이: ${l.passed ? `${l.attempts}차 시도 통과(⭕)` : '3회 오답 후 풀이 확인(⚠️)'} [과정: ${l.helperUsed}]`).join('\n');

  const timeLine = `1단계(${formatDuration(st.step1)}) / 2단계(${formatDuration(st.step2)}) / 3단계(${formatDuration(st.step3)}) / 4단계(${state.wrongIndices.length === 0 ? '면제' : formatDuration(st.step4)}) / 5단계(${formatDuration(st.step5)})`;

  const shareText = [
    `[📚 ${state.studentName} 학생(${state.studentGrade}-${state.studentSem}) 초등 수학 완전학습 보고서]`,
    `• 학습 일시: ${new Date().toLocaleString()}`,
    `• 학습 차시: ${state.grade}학년 ${state.semester}학기 ${state.lessonData.title}`,
    `• 전체 소요 시간: ⏱️ ${totalTimeStr}`,
    `  └ 단계별: ${timeLine}`,
    `• 3단계 실력 확인: 3문제 중 ${correctCnt}개 정답 (${state.score}점)`,
    step3Lines,
    `• 4단계 쌍둥이 보충 기록:`,
    step4Lines,
    `• 선생님 총평: ${buildTeacherSynthesisComment(needHelp)}`,
    `• 최종 판정: [${finalState}]`
  ].join('\n');

  navigator.clipboard.writeText(shareText).then(() => alert('✅ 학습 보고서가 복사되었습니다! 카카오톡에 붙여넣기(Ctrl+V) 하세요.')).catch(() => prompt('복사(Ctrl+C)해서 전달하세요:', shareText));
}

initApp();