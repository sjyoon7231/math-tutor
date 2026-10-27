MATH_DB.lessons["6-2-6"] = {
    unitTitle: "6학년 2학기 6단원: 원기둥, 원뿔, 구",
    lessonOrder: ["6-1", "6-2", "6-3", "6-4", "6-5", "6-6"],
    items: {
      "6-1": {
        title: "6-1차시: 원기둥을 알아볼까요",
        goal: "원기둥의 뜻과 구성 요소(밑면, 옆면, 높이)를 알고, 직사각형을 한 바퀴 돌려 만든 원기둥의 크기를 구합니다.",
        videoUrl: "https://youtube.com/shorts/KGpN0ZZXt6Q?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 원기둥의 구성 요소와 직사각형 돌리기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 140" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 원기둥 구성 요소 -->
                <rect x="10" y="10" width="145" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 38 38 L 38 98 A 34 12 0 0 0 106 98 L 106 38 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
                <ellipse cx="72" cy="38" rx="34" ry="12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                <path d="M 38 98 A 34 12 0 0 1 106 98" fill="none" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="3,2"/>
                <line x1="116" y1="38" x2="116" y2="98" stroke="#dc2626" stroke-width="1.8"/>
                <line x1="111" y1="38" x2="121" y2="38" stroke="#dc2626" stroke-width="1.5"/>
                <line x1="111" y1="98" x2="121" y2="98" stroke="#dc2626" stroke-width="1.5"/>
                <text x="60" y="42" fill="#1e3a8a" font-size="10.5" font-weight="bold">밑면</text>
                <text x="60" y="74" fill="#1d4ed8" font-size="10.5" font-weight="bold">옆면</text>
                <text x="122" y="72" fill="#dc2626" font-size="10.5" font-weight="bold">높이</text>
                <text x="20" y="122" fill="#475569" font-size="9.5" font-weight="bold">• 밑면 2개(평행·합동인 원)</text>
                <!-- 오른쪽: 직사각형 돌리기 -->
                <rect x="163" y="10" width="147" height="120" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="171" y="28" fill="#1e3a8a" font-size="10.5" font-weight="bold">• 직사각형 1바퀴 돌리기</text>
                <line x1="210" y1="36" x2="210" y2="105" stroke="#1e293b" stroke-width="2"/>
                <rect x="210" y="46" width="32" height="46" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
                <text x="215" y="42" fill="#dc2626" font-size="10" font-weight="bold">4 cm</text>
                <text x="246" y="73" fill="#15803d" font-size="10" font-weight="bold">7 cm</text>
                <text x="171" y="118" fill="#b45309" font-size="9.5" font-weight="bold">➔ 반지름 4(지름 8), 높이 7</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>원기둥의 특징:</strong> 위아래에 있는 두 <strong>밑면은 서로 평행하고 합동인 원</strong>이며, 옆면은 <strong>굽은 면</strong>이어서 꼭짓점과 모서리가 없습니다. (두 밑면 사이의 수직 거리가 <strong>높이</strong>입니다.)</li>
              <li><strong>직사각형 돌리기 주의:</strong> 가로가 4 cm, 세로가 7 cm인 직사각형을 <strong>세로인 한 변을 기준으로 하여</strong> 한 바퀴 돌리면, 가로 4 cm는 원기둥 밑면의 <strong>반지름</strong>이 되므로 밑면의 <strong>지름은 2배인 8 cm</strong>가 됩니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[준비 학습] 6학년 1학기에 배운 각기둥을 떠올려 볼까요? 위아래에 있는 두 면이 서로 평행하고 합동인 다각형으로 이루어진 기둥 모양의 입체도형에서, 평행한 두 면을 무엇이라고 부르나요?",
            ans: "밑면", placeholder: "두 글자 용어 입력",
            h1: "기둥의 위와 아래에 놓인 기준이 되는 면의 이름입니다.",
            h2: "'밑면'을 적어 보세요.",
            checkTip: "서로 평행하고 합동인 두 면을 '밑면'이라고 합니다.",
            wrongDiag: {
              "옆면": "옆면은 두 밑면을 둘러싸고 있는 면이에요! 평행하고 합동인 위아래 두 면은 '밑면'입니다."
            },
            diagDefault: "'밑면'을 입력해 보세요.",
            steps: [
              { q: "1계단: 기둥에서 서로 평행하고 합동인 두 면을 무엇이라고 하나요?", ans: "밑면" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "원기둥에 대한 설명으로 옳은 것은 어느 것인가요?",
            choices: ["1번: 두 밑면은 서로 평행하고 합동인 원이다.", "2번: 옆면은 평평한 사각형이고 꼭짓점이 있다."],
            ans: "1",
            h1: "원기둥은 밑면이 합동인 원이고 옆면은 굽은 면이어서 꼭짓점이 없습니다.",
            h2: "두 밑면이 서로 평행하고 합동인 원이라는 1번 보기를 골라 보세요."
          },
          {
            q: "원기둥의 두 밑면 사이의 거리를 재어 '높이'를 구하려고 합니다. 어떻게 재어야 올바른 높이가 되나요?",
            choices: ["1번: 두 밑면에 수직인 선분의 길이를 잰다.", "2번: 두 밑면을 비스듬하게 이은 가장 긴 선분의 길이를 잰다."],
            ans: "1",
            h1: "도형의 높이는 언제나 밑면에 수직으로 가장 짧게 이은 길이입니다.",
            h2: "두 밑면에 수직인 선분의 길이를 재는 1번 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "원기둥에서 서로 평행하고 합동인 두 원을 밑면이라 하고, 두 밑면과 만나는 굽은 면을 [ ① ]이라고 합니다.",
            ans: "옆면",
            h1: "밑면의 둘레를 감싸고 있는 옆쪽의 굽은 면입니다.",
            h2: "두 글자 수학 용어를 적어 보세요."
          },
          {
            q: "원기둥에서 두 밑면에 수직인 선분의 길이를 원기둥의 [ ① ]라고 합니다.",
            ans: "높이",
            h1: "원기둥이 얼마나 높은지 나타내는 두 글자 용어입니다.",
            h2: "두 밑면 사이의 수직 거리를 뜻하는 두 글자 단어를 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "밑면의 반지름이 5 cm이고 높이가 12 cm인 원기둥이 있습니다. 이 원기둥의 한 밑면의 '지름'과 원기둥의 '높이'를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
            ans: "10, 12", accept: ["10,12", "10 12", "10cm, 12cm"], placeholder: "밑면의 지름, 높이 순서로 입력",
            h1: "밑면의 반지름이 5 cm이므로 밑면의 지름은 5 × 2 = 10 cm입니다!",
            h2: "지름(10)과 높이(12)를 '10, 12'로 적어 보세요.",
            checkTip: "밑면의 지름은 5 × 2 = 10(cm)이고, 높이는 12(cm)입니다.",
            wrongDiag: {
              "5, 12": "5 cm는 밑면의 '반지름'이에요! 문제에서는 밑면의 '지름(10 cm)'과 높이를 물었습니다."
            },
            diagDefault: "밑면의 지름(10)과 높이(12)를 '10, 12' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: 반지름이 5 cm인 밑면의 지름은 몇 cm인가요?", ans: "10" },
              { q: "2계단: 지름(10)과 높이(12)를 쉼표로 구분해 쓰면 무엇인가요?", ans: "10, 12" }
            ]
          },
          {
            q: "가로가 3 cm, 세로가 8 cm인 직사각형 모양의 종이를 세로(8 cm)를 기준으로 하여 한 바퀴 돌려 원기둥을 만들었습니다. 만들어진 원기둥의 '밑면의 지름'은 몇 cm인가요?",
            ans: "6", accept: ["6cm", "6 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "직사각형의 가로(3 cm)가 한 바퀴 돌면 원기둥 밑면의 '반지름'이 됩니다!",
            h2: "밑면의 반지름이 3 cm이므로, 2를 곱해 밑면의 '지름'을 구해 보세요.",
            checkTip: "밑면의 반지름이 3 cm가 되므로 밑면의 지름은 3 × 2 = 6(cm)입니다.",
            wrongDiag: {
              "3": "3 cm는 만들어진 원기둥 밑면의 '반지름'이에요! 문제에서는 밑면의 '지름'을 물었으니 3 × 2 = 6 cm가 되어야 합니다.",
              "8": "8 cm는 원기둥의 '높이'예요! 밑면의 지름은 3 × 2 = 6 cm입니다."
            },
            diagDefault: "반지름(3 cm)의 2배인 지름(6)을 입력해 보세요.",
            steps: [
              { q: "1계단: 가로가 3 cm인 직사각형을 돌리면 밑면의 반지름은 몇 cm가 되나요?", ans: "3" },
              { q: "2계단: 따라서 밑면의 지름은 3 × 2 = 몇 cm인가요?", ans: "6" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 그림과 같이 원기둥을 옆으로 눕혀 놓았습니다. 바닥에 닿아 있는 굽은 면이 아니라, 왼쪽과 오른쪽에 마주 보고 있는 평행하고 합동인 두 원(색칠한 면)을 원기둥의 무엇이라고 부르나요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 95" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <path d="M 55 22 L 165 22 A 14 28 0 0 1 165 78 L 55 78 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
                      <ellipse cx="55" cy="50" rx="14" ry="28" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                      <path d="M 165 22 A 14 28 0 0 0 165 78" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" stroke-dasharray="3,2"/>
                      <text x="85" y="54" fill="#1e3a8a" font-size="11" font-weight="bold">굽은 옆면</text>
                    </svg>
                  </div>`,
              ans: "밑면", placeholder: "두 글자 용어 입력",
              h1: "원기둥을 옆으로 눕혀 놓아도 서로 평행하고 합동인 두 원은 항상 '밑면'이라고 부릅니다!",
              h2: "두 글자 용어를 적어 보세요.",
              checkTip: "놓인 방향에 상관없이 평행하고 합동인 두 원은 원기둥의 '밑면'입니다.",
              wrongDiag: {
                "옆면": "바닥에 닿아 있는 굽은 면이 옆면이고, 양옆의 평행하고 합동인 두 원은 '밑면'입니다!"
              },
              diagDefault: "'밑면'을 입력해 보세요.",
              steps: [
                { q: "1계단: 원기둥에서 서로 평행하고 합동인 두 원을 무엇이라고 부르나요?", ans: "밑면" }
              ]
            },
            {
              q: "[유형 1] 밑면의 지름이 14 cm이고 높이가 20 cm인 원기둥이 있습니다. 이 원기둥의 '다른 쪽 밑면의 반지름'은 몇 cm인가요?",
              ans: "7", accept: ["7cm", "7 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "원기둥의 두 밑면은 서로 '합동(모양과 크기가 같음)'입니다!",
              h2: "다른 쪽 밑면의 지름도 14 cm이므로, 이를 2로 나누어 반지름을 구해 보세요.",
              checkTip: "두 밑면은 합동이므로 다른 쪽 밑면의 반지름도 14 ÷ 2 = 7(cm)입니다.",
              wrongDiag: {
                "14": "14 cm는 밑면의 '지름'이에요! 문제에서는 '반지름'을 물었으니 14 ÷ 2 = 7 cm입니다."
              },
              diagDefault: "14 ÷ 2 = 7을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름 14 cm를 2로 나누면 반지름은 몇 cm인가요?", ans: "7" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 준서는 '원기둥과 육각기둥은 모두 기둥 모양이므로 옆면이 모두 직사각형이고 꼭짓점이 있다'고 잘못 말했습니다. 원기둥의 전체 면의 개수(밑면 + 옆면)와 꼭짓점의 개수를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "3, 0", accept: ["3,0", "3 0", "3개, 0개"], placeholder: "전체 면의 수, 꼭짓점의 수 입력",
              h1: "원기둥은 위아래 밑면 2개와 굽은 옆면 1개로 이루어져 있으며, 뾰족한 꼭짓점은 하나도 없습니다!",
              h2: "전체 면의 개수(2 + 1 = 3개)와 꼭짓점의 개수(0개)를 '3, 0'으로 적어 보세요.",
              checkTip: "원기둥의 전체 면은 3개(밑면 2개 + 옆면 1개)이고, 꼭짓점은 0개입니다.",
              wrongDiag: {
                "2, 0": "2개는 밑면의 개수예요! 옆면 1개까지 합치면 원기둥의 전체 면은 3개입니다."
              },
              diagDefault: "전체 면의 수(3)와 꼭짓점의 수(0)를 '3, 0' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 원기둥의 밑면 2개와 옆면 1개를 합한 전체 면은 몇 개인가요?", ans: "3" },
                { q: "2계단: 원기둥의 꼭짓점은 0개입니다. 면의 수와 꼭짓점의 수를 순서대로 쓰면 무엇인가요?", ans: "3, 0" }
              ]
            },
            {
              q: `[유형 2] 그림과 같이 가로가 5 cm, 세로가 9 cm인 직사각형 모양의 종이를 세로(9 cm)를 기준으로 하여 한 바퀴 돌려 원기둥을 만들었습니다. 지민이는 이 원기둥을 앞에서 보았을 때 보이는 직사각형의 가로가 '5 cm'라고 잘못 답했습니다. 실제로 이 원기둥을 앞에서 보았을 때 보이는 직사각형의 넓이(밑면의 지름 × 높이)는 몇 cm² 인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <line x1="95" y1="12" x2="95" y2="98" stroke="#1e293b" stroke-width="2"/>
                      <rect x="95" y="25" width="42" height="58" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                      <path d="M 85 18 A 12 6 0 1 1 105 18" fill="none" stroke="#dc2626" stroke-width="1.5"/>
                      <text x="103" y="42" fill="#dc2626" font-size="11" font-weight="bold">5 cm</text>
                      <text x="143" y="58" fill="#1e3a8a" font-size="11" font-weight="bold">9 cm</text>
                    </svg>
                  </div>`,
              ans: "90", accept: ["90cm²", "90 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "가로 5 cm인 직사각형을 한 바퀴 돌리면 왼쪽과 오른쪽으로 모두 5 cm씩 펼쳐져서 밑면의 지름(앞에서 본 가로)은 '5 × 2 = 10 cm'가 됩니다!",
              h2: "앞에서 본 직사각형의 가로(지름 10 cm)와 세로(높이 9 cm)를 곱해 넓이를 구해 보세요.",
              checkTip: "앞에서 본 모양은 가로가 5 × 2 = 10 cm, 세로가 9 cm인 직사각형이므로 넓이는 10 × 9 = 90(cm²)입니다.",
              wrongDiag: {
                "45": "앗! 5 × 9 = 45는 돌리기 전 종이 한 장의 넓이예요! 한 바퀴 돌리면 가로가 지름(10 cm)이 되므로 앞에서 본 직사각형의 넓이는 10 × 9 = 90 cm² 입니다.",
                "10": "10 cm는 앞에서 본 직사각형의 가로(밑면의 지름)를 잘 구한 것이에요! 여기에 높이 9 cm를 곱해 넓이(90 cm²)를 구해 보세요."
              },
              diagDefault: "밑면의 지름(5 × 2 = 10 cm)에 높이(9 cm)를 곱한 값(90)을 입력해 보세요.",
              steps: [
                { q: "1계단: 가로 5 cm인 종이를 한 바퀴 돌리면 원기둥 밑면의 지름은 몇 cm가 되나요?", ans: "10" },
                { q: "2계단: 앞에서 본 직사각형의 넓이(가로 10 cm × 세로 9 cm)는 몇 cm² 인가요?", ans: "90" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 밑면의 반지름이 4 cm이고 높이가 10 cm인 원기둥 모양의 통조림 캔이 있습니다. 이 캔의 한 밑면의 둘레(원주)는 몇 cm인가요? (원주율: 3.1)",
              ans: "24.8", accept: ["24.8cm", "24.8 cm"], unit: "cm", placeholder: "소수로 입력",
              h1: "원기둥의 밑면은 반지름이 4 cm(지름 8 cm)인 원입니다! 5단원에서 배운 원주 공식을 적용해 보세요.",
              h2: "지름(8 cm) × 원주율(3.1)을 계산해 보세요.",
              checkTip: "밑면의 지름이 4 × 2 = 8 cm이므로, 밑면의 둘레는 8 × 3.1 = 24.8(cm)입니다.",
              wrongDiag: {
                "12.4": "반지름(4 cm)이 아니라 지름(8 cm)에 3.1을 곱해야 합니다!"
              },
              diagDefault: "8 × 3.1 = 24.8을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 반지름이 4 cm이므로 지름은 몇 cm인가요?", ans: "8" },
                { q: "2계단: 한 밑면의 둘레(8 × 3.1)는 몇 cm인가요?", ans: "24.8" }
              ]
            },
            {
              q: "[유형 3] 똑같은 원기둥 모양의 음료수 캔 3개를 옆으로 나란히 빈틈없이 붙여 상자에 담았더니 상자의 가로 길이가 18 cm가 되었고, 높이는 11 cm가 되었습니다. 음료수 캔 '1개'의 밑면의 반지름은 몇 cm인가요?",
              ans: "3", accept: ["3cm", "3 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "캔 3개의 밑면의 지름을 합한 길이가 18 cm이므로, 먼저 18을 3으로 나누어 캔 1개의 '지름'을 구하세요!",
              h2: "캔 1개의 지름은 18 ÷ 3 = 6 cm입니다. 이를 2로 나누어 '반지름'을 구해 보세요.",
              checkTip: "캔 1개의 지름 = 18 ÷ 3 = 6 cm ➔ 반지름 = 6 ÷ 2 = 3(cm)입니다.",
              wrongDiag: {
                "6": "6 cm는 캔 1개의 '지름'이에요! 문제에서는 '반지름'을 물었으니 6 ÷ 2 = 3 cm가 되어야 합니다."
              },
              diagDefault: "(18 ÷ 3) ÷ 2 = 3을 입력해 보세요.",
              steps: [
                { q: "1계단: 캔 3개의 지름의 합이 18 cm이므로 캔 1개의 지름은 18 ÷ 3 = 몇 cm인가요?", ans: "6" },
                { q: "2계단: 캔 1개의 반지름은 6 ÷ 2 = 몇 cm인가요?", ans: "3" }
              ]
            }
          ]
        ],
        step4Intro: "원기둥은 평행하고 합동인 두 원(밑면)과 굽은 옆면으로 이루어져 있고, 직사각형을 세로를 기준으로 돌릴 때는 가로가 '반지름'이 되어 지름은 그 2배가 된다는 점을 꼭 기억하세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 옆으로 눕혀 놓은 원기둥에서, 왼쪽과 오른쪽의 두 밑면(원)을 수직으로 이은 선분의 길이는 원기둥의 무엇이 되나요? (예: 지름 / 높이)",
              ans: "높이", placeholder: "두 글자 용어 입력",
              h1: "두 밑면에 수직인 선분의 길이는 원기둥이 놓인 방향에 상관없이 항상 '높이'입니다.",
              h2: "'높이'를 적어 보세요.",
              checkTip: "두 밑면에 수직인 선분의 길이는 원기둥의 '높이'입니다.",
              wrongDiag: {},
              diagDefault: "'높이'를 입력해 보세요.",
              steps: [
                { q: "1계단: 두 밑면에 수직인 선분의 길이를 무엇이라고 하나요?", ans: "높이" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 밑면의 지름이 18 cm이고 높이가 15 cm인 원기둥에서, 다른 쪽 밑면의 '반지름'은 몇 cm인가요?",
              ans: "9", accept: ["9cm", "9 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "지름 18 cm를 2로 나눕니다.",
              h2: "18 ÷ 2를 계산해 보세요.",
              checkTip: "18 ÷ 2 = 9(cm)입니다.",
              wrongDiag: {},
              diagDefault: "9를 입력해 보세요.",
              steps: [
                { q: "1계단: 18 ÷ 2는 몇 cm인가요?", ans: "9" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 원기둥의 밑면의 개수와 옆면의 개수를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "2, 1", accept: ["2,1", "2 1", "2개, 1개"], placeholder: "밑면의 수, 옆면의 수 입력",
              h1: "원기둥은 위아래 밑면 2개와 옆면 1개로 이루어져 있습니다.",
              h2: "'2, 1'로 적어 보세요.",
              checkTip: "밑면 2개, 옆면 1개입니다.",
              wrongDiag: {},
              diagDefault: "'2, 1'을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 수(2)와 옆면의 수(1)를 순서대로 쓰면 무엇인가요?", ans: "2, 1" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 가로가 4 cm, 세로가 10 cm인 직사각형 모양의 종이를 세로(10 cm)를 기준으로 하여 한 바퀴 돌려 원기둥을 만들었습니다. 이 원기둥을 앞에서 보았을 때 보이는 직사각형의 넓이(밑면의 지름 × 높이)는 몇 cm² 인가요?",
              ans: "80", accept: ["80cm²", "80 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "밑면의 반지름이 4 cm이므로 지름은 4 × 2 = 8 cm입니다.",
              h2: "지름(8 cm) × 높이(10 cm)를 계산해 보세요.",
              checkTip: "8 × 10 = 80(cm²)입니다.",
              wrongDiag: {
                "40": "한 바퀴 돌리면 가로가 지름(8 cm)이 되므로 8 × 10 = 80 cm² 입니다!"
              },
              diagDefault: "8 × 10 = 80을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 지름은 4 × 2 = 몇 cm인가요?", ans: "8" },
                { q: "2계단: 앞에서 본 넓이는 8 × 10 = 몇 cm² 인가요?", ans: "80" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면의 반지름이 5 cm이고 높이가 8 cm인 원기둥의 한 밑면의 둘레(원주)는 몇 cm인가요? (원주율: 3.14)",
              ans: "31.4", accept: ["31.4cm", "31.4 cm"], unit: "cm", placeholder: "소수로 입력",
              h1: "밑면의 지름은 10 cm이므로 10 × 3.14를 계산합니다.",
              h2: "10 × 3.14의 값을 적어 보세요.",
              checkTip: "10 × 3.14 = 31.4(cm)입니다.",
              wrongDiag: {},
              diagDefault: "31.4를 입력해 보세요.",
              steps: [
                { q: "1계단: 지름 10 cm × 3.14는 몇 cm인가요?", ans: "31.4" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 똑같은 원기둥 모양의 통 2개를 옆으로 나란히 빈틈없이 붙였더니 가로 길이가 20 cm가 되었습니다. 통 1개의 밑면의 '반지름'은 몇 cm인가요?",
              ans: "5", accept: ["5cm", "5 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "통 1개의 지름은 20 ÷ 2 = 10 cm이고, 반지름은 지름의 절반입니다.",
              h2: "10 ÷ 2를 계산해 보세요.",
              checkTip: "지름 10 cm ÷ 2 = 5(cm)입니다.",
              wrongDiag: {
                "10": "10 cm는 통 1개의 지름이에요! 반지름은 5 cm입니다."
              },
              diagDefault: "5를 입력해 보세요.",
              steps: [
                { q: "1계단: 통 1개의 지름은 20 ÷ 2 = 몇 cm인가요?", ans: "10" },
                { q: "2계단: 반지름은 10 ÷ 2 = 몇 cm인가요?", ans: "5" }
              ]
            }
          ]
        ],
        step5A: {
          q: "원기둥에서 서로 평행하고 합동인 두 원을 밑면이라 하고, 두 밑면에 [ (1) 수직인 / (2) 비스듬한 ] 선분의 길이를 높이라고 합니다.",
          ans: "수직인", numAns: "1",
          hint: "💡 힌트: 두 밑면 사이의 가장 짧은 직각 거리를 재는 방법입니다."
        },
        step5B: {
          sentence: "원기둥은 두 밑면이 서로 평행하고 합동인 원이며 옆면이 굽은 면인 기둥 모양이다."
        },
        nextUnit: "6-2"
      },
  
      "6-2": {
        title: "6-2차시: 원기둥의 전개도를 알아볼까요",
        goal: "원기둥의 전개도에서 옆면의 가로는 밑면의 둘레(원주)와 같고, 옆면의 세로는 원기둥의 높이와 같음을 이해합니다.",
        videoUrl: "https://youtube.com/shorts/Re9mXtNXf7E?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 원기둥 전개도에서 (옆면의 가로) = (밑면의 원주)!</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 145" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 원기둥 전개도 -->
                <rect x="10" y="8" width="145" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="82" cy="28" r="16" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
                <rect x="32" y="44" width="100" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                <line x1="32" y1="44" x2="132" y2="44" stroke="#dc2626" stroke-width="2.5"/>
                <circle cx="82" cy="110" r="16" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
                <text x="50" y="72" fill="#dc2626" font-size="10.5" font-weight="bold">가로 = 밑면 원주</text>
                <text x="135" y="72" fill="#15803d" font-size="10" font-weight="bold">높이</text>
                <!-- 오른쪽: 핵심 공식 -->
                <rect x="163" y="8" width="147" height="130" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="171" y="30" fill="#dc2626" font-size="10.5" font-weight="bold">① 밑면과 맞닿는 가로</text>
                <text x="173" y="48" fill="#991b1b" font-size="10" font-weight="bold">= 밑면의 둘레 (원주)</text>
                <text x="173" y="64" fill="#991b1b" font-size="10" font-weight="bold">= 지름 × 원주율</text>
                <line x1="171" y1="74" x2="300" y2="74" stroke="#bfdbfe" stroke-width="1.5"/>
                <text x="171" y="94" fill="#15803d" font-size="10.5" font-weight="bold">② 옆면의 세로 = 높이</text>
                <text x="171" y="114" fill="#1e3a8a" font-size="10.5" font-weight="bold">③ 옆면 넓이 = 가로 × 세로</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>올바른 전개도의 조건:</strong> ① 합동인 두 밑면(원)이 옆면(직사각형)의 <strong>서로 반대쪽(위와 아래)</strong>에 붙어 있어야 하고, ② 옆면을 펼친 직사각형에서 <strong>밑면의 둘레와 이어지는 변(위 그림의 가로)의 길이는 밑면의 원주</strong>와 같아야 합니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 밑면의 반지름이 4 cm이고 높이가 9 cm인 원기둥에서, 밑면의 지름은 몇 cm인가요?",
            ans: "8", accept: ["8cm", "8 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "지름은 반지름의 2배입니다.",
            h2: "4 × 2를 계산해 보세요.",
            checkTip: "4 × 2 = 8(cm)입니다.",
            wrongDiag: {},
            diagDefault: "8을 입력해 보세요.",
            steps: [
              { q: "1계단: 4 × 2는 몇 cm인가요?", ans: "8" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "원기둥을 세워 놓고 펼친 전개도에서, 직사각형 모양인 옆면의 위아래 '가로 길이'(밑면의 둘레와 맞닿는 부분)는 원기둥의 어느 부분의 길이와 같나요?",
            choices: ["1번: 밑면인 원의 둘레 (원주)", "2번: 밑면인 원의 지름"],
            ans: "1",
            h1: "옆면의 가로가 밑면인 원의 둘레를 한 바퀴 빈틈없이 감싸야 원기둥이 만들어집니다.",
            h2: "밑면인 원의 둘레(원주)를 골라 보세요."
          },
          {
            q: "다음 중 접었을 때 원기둥이 만들어지지 '않는' 전개도는 어느 것인가요?",
            choices: ["1번: 합동인 두 밑면(원)이 옆면(직사각형)의 위쪽과 아래쪽에 각각 1개씩 붙어 있는 전개도", "2번: 두 밑면(원)이 옆면의 같은 쪽(위쪽에만 2개)에 나란히 붙어 있는 전개도"],
            ans: "2",
            h1: "두 밑면이 같은 쪽에 붙어 있으면 접었을 때 두 밑면이 서로 겹쳐지고 반대쪽은 뚫리게 됩니다.",
            h2: "두 밑면이 같은 쪽에 붙어 있는 2번 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "원기둥을 잘라서 평면 위에 펼쳐 놓은 그림을 원기둥의 [ ① ]라고 하며, 합동인 원 2개와 직사각형 1개로 이루어집니다.",
            ans: "전개도",
            h1: "오늘 차시 제목에 들어 있는 세 글자 수학 용어입니다.",
            h2: "입체도형을 펼쳐 놓은 그림을 부르는 세 글자 단어를 적어 보세요."
          },
          {
            q: "밑면의 지름이 10 cm이고 높이가 7 cm인 원기둥의 전개도에서, 옆면의 세로는 7 cm이고 옆면의 가로는 밑면의 원주와 같으므로 (원주율 3일 때) 10 × 3 = [ ① ] cm입니다.",
            ans: "30",
            h1: "10에 3을 곱해 보세요.",
            h2: "10 × 3의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 밑면의 반지름이 5 cm이고 높이가 8 cm인 원기둥의 전개도입니다. 옆면인 직사각형의 '가로의 길이(㉠)'와 '세로의 길이(㉡)'를 순서대로 쓰세요 (쉼표로 구분하여 입력, 원주율: 3.14).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <circle cx="110" cy="21" r="19" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                    <line x1="110" y1="21" x2="129" y2="21" stroke="#dc2626" stroke-width="1.5"/>
                    <circle cx="110" cy="21" r="2" fill="#1e293b"/>
                    <text x="101" y="17" fill="#1e3a8a" font-size="9.5" font-weight="bold">5cm</text>
                    <rect x="50" y="40" width="120" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
                    <circle cx="110" cy="89" r="19" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                    <text x="88" y="60" fill="#dc2626" font-size="11" font-weight="bold">가로 ㉠ cm</text>
                    <text x="176" y="60" fill="#15803d" font-size="11" font-weight="bold">㉡ cm</text>
                  </svg>
                </div>`,
            ans: "31.4, 8", accept: ["31.4,8", "31.4 8", "31.4cm, 8cm"], placeholder: "옆면의 가로, 세로 순서로 입력",
            h1: "옆면의 가로(㉠)는 밑면의 원주(반지름 5 × 2 × 3.14)이고, 옆면의 세로(㉡)는 원기둥의 높이(8 cm)입니다!",
            h2: "옆면의 가로(10 × 3.14 = 31.4)와 세로(8)를 '31.4, 8'로 적어 보세요.",
            checkTip: "옆면의 가로는 5 × 2 × 3.14 = 31.4(cm)이고, 세로는 8(cm)입니다.",
            wrongDiag: {
              "15.7, 8": "앗! 옆면의 가로를 구할 때 반지름(5)에 2를 곱하지 않고 5 × 3.14를 계산했어요! 지름(10) × 3.14 = 31.4입니다.",
              "10, 8": "10 cm는 밑면의 지름이에요! 옆면의 가로는 밑면의 원주인 10 × 3.14 = 31.4 cm입니다."
            },
            diagDefault: "옆면의 가로(31.4)와 세로(8)를 '31.4, 8' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: 반지름이 5 cm인 밑면의 둘레(옆면의 가로 = 10 × 3.14)는 몇 cm인가요?", ans: "31.4" },
              { q: "2계단: 옆면의 세로는 원기둥의 높이인 8 cm입니다. 가로와 세로를 순서대로 쓰면 무엇인가요?", ans: "31.4, 8" }
            ]
          },
          {
            q: "밑면의 지름이 6 cm이고 높이가 10 cm인 원기둥의 전개도에서, 직사각형 모양인 '옆면의 넓이'는 몇 cm² 인가요? (원주율: 3)",
            ans: "180", accept: ["180cm²", "180 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "옆면은 직사각형이므로 (옆면의 넓이) = (옆면의 가로) × (옆면의 세로)입니다.",
            h2: "옆면의 가로(밑면의 원주 = 6 × 3 = 18 cm)에 세로(높이 10 cm)를 곱해 보세요.",
            checkTip: "옆면의 가로 = 6 × 3 = 18 cm ➔ 옆면의 넓이 = 18 × 10 = 180(cm²)입니다.",
            wrongDiag: {
              "60": "앗! 옆면의 가로를 원주(18 cm)가 아니라 지름(6 cm)으로 계산하여 6 × 10 = 60을 구했어요! 18 × 10 = 180 cm² 입니다.",
              "18": "18 cm는 옆면의 가로 길이예요! 여기에 세로(10 cm)를 곱해 넓이(180 cm²)를 구해 보세요."
            },
            diagDefault: "옆면의 가로(6 × 3 = 18 cm)에 세로(10 cm)를 곱한 값(180)을 입력해 보세요.",
            steps: [
              { q: "1계단: 옆면의 가로는 밑면의 원주(6 × 3)와 같으므로 몇 cm인가요?", ans: "18" },
              { q: "2계단: 옆면의 넓이(가로 18 cm × 세로 10 cm)는 몇 cm² 인가요?", ans: "180" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음 (가)와 (나) 중에서 접었을 때 원기둥을 만들 수 있는 올바른 전개도의 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 280 115" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- (가) 위쪽에 2개 붙은 틀린 전개도 -->
                      <text x="55" y="18" fill="#dc2626" font-size="11" font-weight="bold">(가)</text>
                      <circle cx="45" cy="36" r="13" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <circle cx="85" cy="36" r="13" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="25" y="49" width="80" height="40" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
                      <!-- (나) 위아래에 1개씩 붙은 바른 전개도 -->
                      <text x="195" y="18" fill="#15803d" font-size="11" font-weight="bold">(나)</text>
                      <circle cx="185" cy="34" r="13" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="165" y="47" width="80" height="36" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                      <circle cx="225" cy="96" r="13" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "원기둥의 전개도에서는 두 밑면(원)이 옆면(직사각형)의 서로 반대쪽(위와 아래)에 1개씩 붙어 있어야 합니다!",
              h2: "(가)는 두 밑면이 위쪽에 함께 붙어 있어 접으면 겹쳐집니다. 바른 기호를 골라 보세요.",
              checkTip: "두 밑면이 위아래 반대쪽에 1개씩 붙어 있는 (나)가 올바른 전개도입니다.",
              wrongDiag: {
                "가": "(가)는 두 원이 같은 쪽(위쪽)에 붙어 있어서 접었을 때 두 원이 겹쳐지고 아래쪽이 뚫리게 돼요!"
              },
              diagDefault: "두 밑면이 서로 반대쪽에 붙어 있는 (나)를 입력해 보세요.",
              steps: [
                { q: "1계단: 두 밑면이 위쪽과 아래쪽에 하나씩 바르게 붙어 있는 기호는 무엇인가요?", ans: "나" }
              ]
            },
            {
              q: "[유형 1] 원기둥의 전개도를 펼쳤더니 옆면인 직사각형의 가로(밑면과 맞닿는 변)가 37.2 cm이고 세로가 15 cm였습니다. 이 원기둥의 '밑면의 지름'은 몇 cm인가요? (원주율: 3.1)",
              ans: "12", accept: ["12cm", "12 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "옆면의 가로(37.2 cm)가 곧 밑면의 둘레(원주)입니다!",
              h2: "원주(37.2)를 원주율(3.1)로 나누어 밑면의 지름을 구해 보세요.",
              checkTip: "밑면의 지름 = (옆면의 가로 37.2) ÷ 3.1 = 12(cm)입니다.",
              wrongDiag: {
                "6": "6 cm는 밑면의 '반지름'이에요! 문제에서는 '지름'을 물었으니 12 cm입니다."
              },
              diagDefault: "37.2 ÷ 3.1 = 12를 입력해 보세요.",
              steps: [
                { q: "1계단: 옆면의 가로(37.2)를 원주율(3.1)로 나누면 밑면의 지름은 몇 cm인가요?", ans: "12" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 현수는 밑면의 반지름이 3 cm이고 높이가 7 cm인 원기둥의 전개도를 그릴 때(원주율: 3), 옆면의 가로를 밑면의 지름과 같다고 착각하여 '6 cm'로 잘못 그렸습니다. 바르게 그린 옆면의 가로는 몇 cm이어야 하나요?",
              ans: "18", accept: ["18cm", "18 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "옆면의 가로는 밑면의 지름(6 cm)이 아니라 '밑면의 원주(지름 × 원주율)'와 같아야 합니다!",
              h2: "지름(6 cm)에 원주율(3)을 곱한 값을 적어 보세요.",
              checkTip: "옆면의 가로 = 6 × 3 = 18(cm)입니다.",
              wrongDiag: {
                "6": "6 cm는 현수가 잘못 그린 밑면의 지름이에요! 여기에 원주율 3을 곱해 18 cm가 되어야 합니다.",
                "9": "반지름(3 cm)이 아니라 지름(6 cm)에 원주율 3을 곱해야 합니다!"
              },
              diagDefault: "6 × 3 = 18을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 3 cm인 밑면의 지름은 6 cm입니다. 여기에 원주율 3을 곱하면 옆면의 가로는 몇 cm인가요?", ans: "18" }
              ]
            },
            {
              q: `[유형 2] 다음은 밑면의 반지름이 4 cm이고 높이가 10 cm인 원기둥의 전개도입니다. 직사각형 모양인 '옆면의 둘레'(직사각형 네 변의 길이의 합)는 모두 몇 cm인가요? (원주율: 3)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 136" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <circle cx="110" cy="22" r="20" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                      <line x1="110" y1="22" x2="130" y2="22" stroke="#dc2626" stroke-width="1.5"/>
                      <circle cx="110" cy="22" r="2" fill="#1e293b"/>
                      <text x="102" y="18" fill="#1e3a8a" font-size="9.5" font-weight="bold">4cm</text>
                      <rect x="50" y="42" width="120" height="50" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                      <circle cx="110" cy="112" r="20" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                      <text x="82" y="71" fill="#b45309" font-size="11" font-weight="bold">옆면의 둘레는?</text>
                      <text x="176" y="71" fill="#15803d" font-size="11" font-weight="bold">10 cm</text>
                    </svg>
                  </div>`,
              ans: "68", accept: ["68cm", "68 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "먼저 옆면의 가로(밑면 반지름 4 × 2 × 3 = 24 cm)를 구한 뒤, 직사각형의 둘레 공식인 '(가로 + 세로) × 2'를 계산하세요!",
              h2: "옆면의 가로(24 cm)와 세로(10 cm)를 더한 뒤 2를 곱해 보세요.",
              checkTip: "옆면의 가로 = 8 × 3 = 24 cm ➔ 옆면의 둘레 = (24 + 10) × 2 = 68(cm)입니다.",
              wrongDiag: {
                "34": "34 cm는 (가로 + 세로) 한 번만 더한 값이에요! 직사각형의 둘레는 가로 2개, 세로 2개이므로 2를 곱해 68 cm가 되어야 합니다.",
                "240": "240은 옆면의 넓이(24 × 10)예요! 문제에서는 '옆면의 둘레((24 + 10) × 2)'를 물었습니다."
              },
              diagDefault: "(가로 24 + 세로 10) × 2 = 68을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 4 cm(지름 8 cm)인 밑면의 원주(옆면의 가로 = 8 × 3)는 몇 cm인가요?", ans: "24" },
                { q: "2계단: 옆면 직사각형의 둘레는 (24 + 10) × 2 = 몇 cm인가요?", ans: "68" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 밑면의 반지름이 3 cm이고 높이가 5 cm인 원기둥의 전개도가 있습니다. 이 전개도의 '두 밑면의 넓이의 합'과 '옆면의 넓이'를 모두 더한 전개도 전체의 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "144", accept: ["144cm²", "144 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "1단계: 한 밑면의 넓이(3 × 3 × 3 = 27 cm²)에 2를 곱해 두 밑면의 넓이 합(54 cm²)을 구합니다. 2단계: 옆면의 넓이(가로 18 × 세로 5 = 90 cm²)를 구해 더합니다!",
              h2: "두 밑면의 넓이의 합(54 cm²)과 옆면의 넓이(90 cm²)를 더해 보세요.",
              checkTip: "두 밑면 넓이 합(27 × 2 = 54 cm²) + 옆면 넓이(6 × 3 × 5 = 90 cm²) = 144(cm²)입니다.",
              wrongDiag: {
                "117": "앗! 밑면이 위아래 2개인데 1개의 넓이(27)만 더했어요(27 + 90 = 117)! 두 밑면의 넓이(54)와 옆면 넓이(90)를 더해 144 cm² 입니다.",
                "90": "90 cm² 는 옆면의 넓이만 구한 것이에요! 두 밑면의 넓이(54 cm²)를 더해야 합니다."
              },
              diagDefault: "두 밑면 넓이(54) + 옆면 넓이(90) = 144를 입력해 보세요.",
              steps: [
                { q: "1계단: 한 밑면의 넓이는 3 × 3 × 3 = 27 cm² 입니다. 밑면 2개의 넓이의 합은 몇 cm² 인가요?", ans: "54" },
                { q: "2계단: 옆면의 가로(6 × 3 = 18 cm)에 세로(5 cm)를 곱한 옆면의 넓이는 몇 cm² 인가요?", ans: "90" },
                { q: "3계단: 두 밑면의 넓이(54)와 옆면의 넓이(90)를 더하면 전체 넓이는 몇 cm² 인가요?", ans: "144" }
              ]
            },
            {
              q: "[유형 3] 원기둥 모양의 선물 상자 옆면에 빈틈없이 겹치지 않게 색종이를 한 바퀴 둘러 붙이려고 합니다. 상자의 밑면의 지름이 10 cm이고 높이가 12 cm일 때, 필요한 색종이의 넓이(옆면의 넓이)는 몇 cm² 인가요? (원주율: 3.14)",
              ans: "376.8", accept: ["376.8cm²", "376.8 cm²"], unit: "cm²", placeholder: "소수로 입력",
              h1: "옆면에 붙이는 색종이는 가로가 밑면의 원주(10 × 3.14)이고 세로가 높이(12 cm)인 직사각형입니다.",
              h2: "(10 × 3.14) × 12 = 31.4 × 12를 계산해 보세요.",
              checkTip: "옆면의 가로 = 31.4 cm ➔ 넓이 = 31.4 × 12 = 376.8(cm²)입니다.",
              wrongDiag: {
                "31.4": "31.4 cm는 색종이의 가로 길이예요! 여기에 높이 12 cm를 곱해 넓이(376.8 cm²)를 구해 보세요."
              },
              diagDefault: "31.4 × 12 = 376.8을 입력해 보세요.",
              steps: [
                { q: "1계단: 색종이의 가로 길이(10 × 3.14)는 몇 cm인가요?", ans: "31.4" },
                { q: "2계단: 색종이의 넓이(31.4 × 12)는 몇 cm² 인가요?", ans: "376.8" }
              ]
            }
          ]
        ],
        step4Intro: "원기둥 전개도에서 가장 중요한 핵심 공식은 '(밑면과 맞닿는 옆면의 가로) = (밑면의 원주)'입니다! 이 공식만 기억하면 옆면의 둘레와 넓이도 모두 구할 수 있어요.",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 밑면의 반지름이 3 cm이고 높이가 8 cm인 원기둥의 전개도에서, 옆면인 직사각형의 '가로의 길이(밑면의 둘레)'는 몇 cm인가요? (원주율: 3.1)",
              ans: "18.6", accept: ["18.6cm", "18.6 cm"], unit: "cm", placeholder: "소수로 입력",
              h1: "지름은 3 × 2 = 6 cm이므로 6 × 3.1을 계산합니다.",
              h2: "6 × 3.1을 계산해 보세요.",
              checkTip: "6 × 3.1 = 18.6(cm)입니다.",
              wrongDiag: {},
              diagDefault: "18.6을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름(6 cm) × 3.1은 몇 cm인가요?", ans: "18.6" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 원기둥의 전개도에서 옆면인 직사각형의 가로가 43.4 cm이고 세로가 10 cm입니다. 이 원기둥의 '밑면의 지름'은 몇 cm인가요? (원주율: 3.1)",
              ans: "14", accept: ["14cm", "14 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "43.4 ÷ 3.1을 계산합니다.",
              h2: "434 ÷ 31을 계산해 보세요.",
              checkTip: "43.4 ÷ 3.1 = 14(cm)입니다.",
              wrongDiag: {},
              diagDefault: "14를 입력해 보세요.",
              steps: [
                { q: "1계단: 43.4 ÷ 3.1은 몇 cm인가요?", ans: "14" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 밑면의 반지름이 4 cm이고 높이가 6 cm인 원기둥의 전개도에서, 옆면의 가로는 바르게 구하면 몇 cm인가요? (원주율: 3)",
              ans: "24", accept: ["24cm", "24 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "지름(8 cm) × 원주율(3)을 계산합니다.",
              h2: "8 × 3을 계산해 보세요.",
              checkTip: "8 × 3 = 24(cm)입니다.",
              wrongDiag: {
                "8": "8 cm는 지름이에요! 원주율 3을 곱해 24 cm입니다."
              },
              diagDefault: "24를 입력해 보세요.",
              steps: [
                { q: "1계단: 8 × 3은 몇 cm인가요?", ans: "24" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 밑면의 반지름이 3 cm이고 높이가 7 cm인 원기둥의 전개도에서, 직사각형 모양인 '옆면의 둘레'는 모두 몇 cm인가요? (원주율: 3)",
              ans: "50", accept: ["50cm", "50 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "옆면의 가로는 6 × 3 = 18 cm이고 세로는 7 cm이므로, 둘레는 (18 + 7) × 2입니다.",
              h2: "25 × 2를 계산해 보세요.",
              checkTip: "(18 + 7) × 2 = 50(cm)입니다.",
              wrongDiag: {},
              diagDefault: "50을 입력해 보세요.",
              steps: [
                { q: "1계단: 옆면의 가로는 6 × 3 = 몇 cm인가요?", ans: "18" },
                { q: "2계단: 옆면의 둘레는 (18 + 7) × 2 = 몇 cm인가요?", ans: "50" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면의 반지름이 2 cm이고 높이가 5 cm인 원기둥의 전개도에서, '두 밑면의 넓이의 합'과 '옆면의 넓이'를 모두 더한 전체 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "84", accept: ["84cm²", "84 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면 넓이 합(2 × 2 × 3 × 2 = 24)과 옆면 넓이(4 × 3 × 5 = 60)를 더합니다.",
              h2: "24 + 60을 계산해 보세요.",
              checkTip: "24 + 60 = 84(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "84를 입력해 보세요.",
              steps: [
                { q: "1계단: 두 밑면의 넓이의 합은 몇 cm² 인가요?", ans: "24" },
                { q: "2계단: 옆면 넓이(60)를 더하면 24 + 60 = 몇 cm² 인가요?", ans: "84" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 밑면의 지름이 8 cm이고 높이가 10 cm인 원기둥 모양의 캔 옆면에 상표를 한 바퀴 빈틈없이 둘러 붙이려고 합니다. 상표의 넓이(옆면의 넓이)는 몇 cm² 인가요? (원주율: 3.1)",
              ans: "248", accept: ["248cm²", "248 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "옆면의 가로(8 × 3.1 = 24.8 cm)에 높이(10 cm)를 곱합니다.",
              h2: "24.8 × 10을 계산해 보세요.",
              checkTip: "24.8 × 10 = 248(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "248을 입력해 보세요.",
              steps: [
                { q: "1계단: 24.8 × 10은 몇 cm² 인가요?", ans: "248" }
              ]
            }
          ]
        ],
        step5A: {
          q: "원기둥의 전개도에서 옆면은 직사각형 모양이며, 옆면의 가로는 [ (1) 밑면의 둘레 / (2) 밑면의 지름 ] 와 같고 옆면의 세로는 원기둥의 높이와 같습니다.",
          ans: "밑면의 둘레", numAns: "1",
          hint: "💡 힌트: 옆면의 가로가 밑면인 원의 테두리를 한 바퀴 감싸는 것을 떠올려 보세요."
        },
        step5B: {
          sentence: "원기둥의 전개도에서 옆면의 가로는 밑면의 둘레와 같고 옆면의 세로는 높이와 같다."
        },
        nextUnit: "6-3"
      },
  
      "6-3": {
        title: "6-3차시: 원뿔을 알아볼까요",
        goal: "원뿔의 뜻과 구성 요소(원뿔의 꼭짓점, 밑면, 옆면, 모선, 높이)를 알고, 직각삼각형을 돌려 만든 원뿔의 크기를 구합니다.",
        videoUrl: "https://youtube.com/shorts/XcApwcjvQwM?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 원뿔의 구성 요소 (수직인 '높이' vs 비스듬한 '모선')</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 140" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 원뿔 구성 요소 -->
                <rect x="10" y="10" width="150" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                <path d="M 85 24 L 45 98 A 40 12 0 0 0 125 98 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
                <path d="M 45 98 A 40 12 0 0 1 125 98" fill="none" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,2"/>
                <line x1="85" y1="24" x2="85" y2="98" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="3,2"/>
                <rect x="85" y="90" width="7" height="8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                <line x1="85" y1="98" x2="125" y2="98" stroke="#16a34a" stroke-width="1.8"/>
                <circle cx="85" cy="24" r="3" fill="#dc2626"/>
                <text x="52" y="19" fill="#dc2626" font-size="9.5" font-weight="bold">원뿔의 꼭짓점</text>
                <text x="60" y="68" fill="#1d4ed8" font-size="10" font-weight="bold">높이</text>
                <text x="112" y="64" fill="#b45309" font-size="10.5" font-weight="bold">모선</text>
                <text x="90" y="114" fill="#15803d" font-size="9.5" font-weight="bold">반지름</text>
                <!-- 오른쪽: 직각삼각형 돌리기 -->
                <rect x="168" y="10" width="142" height="120" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="176" y="28" fill="#1e3a8a" font-size="10.5" font-weight="bold">• 직각삼각형 1바퀴 돌리기</text>
                <line x1="210" y1="34" x2="210" y2="104" stroke="#1e293b" stroke-width="2"/>
                <polygon points="210,40 210,92 250,92" fill="#93c5fd" stroke="#2563eb" stroke-width="1.8"/>
                <text x="185" y="70" fill="#1d4ed8" font-size="9.5" font-weight="bold">높이4</text>
                <text x="234" y="66" fill="#dc2626" font-size="9.5" font-weight="bold">모선5</text>
                <text x="220" y="104" fill="#15803d" font-size="9.5" font-weight="bold">반지름3</text>
                <text x="176" y="120" fill="#b45309" font-size="9.5" font-weight="bold">• 모선(5) &gt; 높이(4) 항상 김!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>원뿔의 특징:</strong> 원 모양의 <strong>밑면이 1개</strong>이고 옆면은 굽은 면이며, 뾰족한 <strong>원뿔의 꼭짓점이 1개</strong> 있습니다.</li>
              <li><strong>모선 vs 높이:</strong> 원뿔의 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 비스듬한 선분을 <strong>모선</strong>이라고 합니다. (모선은 무수히 많고 길이가 모두 같으며, 수직인 <strong>높이보다 항상 더 깁니다!</strong>)</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 밑면의 지름이 8 cm이고 높이가 10 cm인 원기둥의 전개도에서, 옆면의 가로는 몇 cm인가요? (원주율: 3)",
            ans: "24", accept: ["24cm", "24 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "옆면의 가로는 밑면의 원주(8 × 3)와 같습니다.",
            h2: "8 × 3을 계산해 보세요.",
            checkTip: "8 × 3 = 24(cm)입니다.",
            wrongDiag: {},
            diagDefault: "24를 입력해 보세요.",
            steps: [
              { q: "1계단: 8 × 3은 몇 cm인가요?", ans: "24" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "원뿔에서 원뿔의 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 선분을 무엇이라고 부르나요?",
            choices: ["1번: 모선", "2번: 높이"],
            ans: "1",
            h1: "옆면을 따라 비스듬하게 내려오는 선분의 이름입니다.",
            h2: "'모선'을 골라 보세요."
          },
          {
            q: "한 원뿔에서 '높이'와 '모선의 길이'를 비교한 설명으로 옳은 것은 어느 것인가요?",
            choices: ["1번: 높이와 모선의 길이는 언제나 같다.", "2번: 비스듬한 모선의 길이가 수직인 높이보다 언제나 더 길다."],
            ans: "2",
            h1: "높이는 수직으로 가장 짧게 내려온 선분이고, 모선은 직각삼각형의 빗변처럼 비스듬히 내려온 선분입니다.",
            h2: "모선의 길이가 높이보다 더 길다는 2번 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "평평한 면이 원이고 옆면이 굽은 면인 뿔 모양의 입체도형을 [ ① ]이라고 하며, 밑면은 1개뿐입니다.",
            ans: "원뿔",
            h1: "오늘 차시 제목에 있는 두 글자 도형 이름입니다.",
            h2: "'원'과 '뿔'을 합친 두 글자 단어를 적어 보세요."
          },
          {
            q: "원뿔에서 원뿔의 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 선분을 [ ① ]이라고 하며, 한 원뿔에서 이 선분의 길이는 모두 같습니다.",
            ans: "모선",
            h1: "원뿔의 꼭짓점에서 밑면 둘레까지 비스듬히 이은 선분을 부르는 두 글자 용어입니다.",
            h2: "'모'로 시작하는 두 글자 수학 용어를 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음 원뿔을 보고 밑면의 '지름', 원뿔의 '높이', '모선의 길이'를 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 115" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <path d="M 110 18 L 62 92 A 48 14 0 0 0 158 92 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
                    <path d="M 62 92 A 48 14 0 0 1 158 92" fill="none" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,2"/>
                    <line x1="110" y1="18" x2="110" y2="92" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="3,2"/>
                    <rect x="110" y="84" width="7" height="8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <line x1="110" y1="92" x2="158" y2="92" stroke="#16a34a" stroke-width="2"/>
                    <text x="82" y="62" fill="#1d4ed8" font-size="11" font-weight="bold">8 cm</text>
                    <text x="142" y="55" fill="#dc2626" font-size="11" font-weight="bold">10 cm</text>
                    <text x="122" y="106" fill="#15803d" font-size="11" font-weight="bold">6 cm</text>
                  </svg>
                </div>`,
            ans: "12, 8, 10", accept: ["12,8,10", "12 8 10"], placeholder: "지름, 높이, 모선 길이 순서로 입력",
            h1: "밑면의 반지름이 6 cm이므로 '지름'은 6 × 2 = 12 cm입니다! 수직인 선분이 높이(8 cm), 비스듬한 선분이 모선(10 cm)입니다.",
            h2: "지름(12), 높이(8), 모선(10)을 '12, 8, 10'으로 적어 보세요.",
            checkTip: "밑면의 지름은 6 × 2 = 12(cm), 높이는 8(cm), 모선의 길이는 10(cm)입니다.",
            wrongDiag: {
              "6, 8, 10": "6 cm는 밑면의 '반지름'이에요! 문제에서는 밑면의 '지름(12 cm)'을 먼저 물었습니다.",
              "12, 10, 8": "높이(8 cm)와 모선(10 cm)의 순서가 바뀌었어요! 수직인 8 cm가 높이이고 비스듬한 10 cm가 모선입니다."
            },
            diagDefault: "밑면의 지름(12), 높이(8), 모선(10)을 '12, 8, 10' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: 반지름이 6 cm인 밑면의 지름은 몇 cm인가요?", ans: "12" },
              { q: "2계단: 높이는 8 cm, 모선은 10 cm입니다. 지름, 높이, 모선을 순서대로 쓰면 무엇인가요?", ans: "12, 8, 10" }
            ]
          },
          {
            q: "밑변이 5 cm, 높이가 12 cm이고 가장 긴 변(빗변)이 13 cm인 직각삼각형 모양의 종이를 높이(12 cm)를 기준으로 하여 한 바퀴 돌려 원뿔을 만들었습니다. 만들어진 원뿔의 '모선의 길이'는 몇 cm인가요?",
            ans: "13", accept: ["13cm", "13 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "직각삼각형을 돌렸을 때 비스듬한 가장 긴 변(빗변)이 원뿔의 옆면을 만드는 '모선'이 됩니다!",
            h2: "5, 12, 13 중 가장 긴 변의 길이를 적어 보세요.",
            checkTip: "직각삼각형의 빗변(13 cm)이 원뿔의 모선이 되므로 13 cm입니다.",
            wrongDiag: {
              "12": "12 cm는 원뿔의 수직인 '높이'예요! 모선은 비스듬한 선분인 13 cm입니다.",
              "5": "5 cm는 밑면의 반지름이에요! 모선은 13 cm입니다."
            },
            diagDefault: "직각삼각형의 비스듬한 변의 길이(13)를 입력해 보세요.",
            steps: [
              { q: "1계단: 높이가 12 cm일 때 비스듬한 모선의 길이는 몇 cm인가요?", ans: "13" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 원기둥의 밑면의 개수(㉠)와 원뿔의 밑면의 개수(㉡), 그리고 원뿔의 꼭짓점의 개수(㉢)를 모두 더한 값(㉠ + ㉡ + ㉢)은 얼마인가요?",
              ans: "4", accept: ["4개"], unit: "개", placeholder: "숫자만 입력",
              h1: "원기둥의 밑면은 2개, 원뿔의 밑면은 1개, 원뿔의 꼭짓점은 1개입니다.",
              h2: "2 + 1 + 1을 계산해 보세요.",
              checkTip: "원기둥 밑면(2개) + 원뿔 밑면(1개) + 원뿔 꼭짓점(1개) = 4(개)입니다.",
              wrongDiag: {
                "3": "원기둥의 밑면은 2개이고 원뿔의 밑면(1개)과 꼭짓점(1개)을 모두 더하면 2 + 1 + 1 = 4개입니다!"
              },
              diagDefault: "2 + 1 + 1 = 4를 입력해 보세요.",
              steps: [
                { q: "1계단: 원기둥의 밑면은 몇 개인가요?", ans: "2" },
                { q: "2계단: 원뿔의 밑면(1개)과 꼭짓점(1개)을 더하면 2 + 1 + 1 = 얼마인가요?", ans: "4" }
              ]
            },
            {
              q: "[유형 1] 어떤 원뿔의 밑면의 반지름, 높이, 모선의 길이를 재었더니 각각 9 cm, 15 cm, 12 cm 중 하나였습니다. 이 원뿔의 '모선의 길이'에서 '높이'를 뺀 값은 몇 cm인가요? (밑면의 반지름이 9 cm입니다.)",
              ans: "3", accept: ["3cm", "3 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "반지름이 9 cm이므로, 남은 두 길이(15 cm와 12 cm) 중에서 더 긴 것이 '모선'이고 더 짧은 것이 '높이'입니다!",
              h2: "모선(15 cm)에서 높이(12 cm)를 빼 보세요.",
              checkTip: "모선은 높이보다 항상 길므로 모선이 15 cm, 높이가 12 cm입니다. 차는 15 - 12 = 3(cm)입니다.",
              wrongDiag: {
                "15": "15 cm는 모선의 길이예요! 여기서 높이(12 cm)를 뺀 값(3 cm)을 적어야 합니다."
              },
              diagDefault: "모선(15 cm)에서 높이(12 cm)를 뺀 값(3)을 입력해 보세요.",
              steps: [
                { q: "1계단: 15 cm와 12 cm 중 더 긴 모선의 길이는 몇 cm인가요?", ans: "15" },
                { q: "2계단: 높이는 12 cm입니다. 15 - 12는 몇 cm인가요?", ans: "3" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 서진이는 '원뿔의 꼭짓점은 1개뿐이므로 원뿔의 모선도 1개뿐이다'라고 잘못 생각했습니다. 다음 중 원뿔의 모선에 대한 바른 설명의 기호를 쓰세요.<br>(가) 원뿔의 모선은 2개뿐이다.<br>(나) 원뿔의 모선은 셀 수 없이(무수히) 많으며 길이가 모두 같다.<br>(다) 원뿔의 모선은 위치에 따라 길이가 모두 다르다.",
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가, 나, 다 중 택1)",
              h1: "밑면인 원의 둘레에는 점이 무수히 많으므로, 꼭짓점과 원 둘레의 점을 잇는 모선도 무수히 많고 길이가 모두 같습니다!",
              h2: "무수히 많고 길이가 모두 같다는 기호를 골라 보세요.",
              checkTip: "(나) 원뿔의 모선은 무수히 많고 길이가 모두 같습니다.",
              wrongDiag: {},
              diagDefault: "(나)를 입력해 보세요.",
              steps: [
                { q: "1계단: 원뿔의 모선에 대한 바른 설명의 기호는 무엇인가요?", ans: "나" }
              ]
            },
            {
              q: `[유형 2] 그림과 같이 밑변이 6 cm, 높이가 8 cm, 빗변이 10 cm인 직각삼각형을 높이(8 cm)를 기준으로 하여 한 바퀴 돌려 원뿔을 만들었습니다. 이 원뿔을 '앞에서 보았을 때 보이는 이등변삼각형'의 세 변의 길이의 합(둘레)은 모두 몇 cm인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <line x1="95" y1="12" x2="95" y2="98" stroke="#1e293b" stroke-width="2"/>
                      <polygon points="95,22 95,84 142,84" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
                      <path d="M 85 16 A 12 6 0 1 1 105 16" fill="none" stroke="#dc2626" stroke-width="1.5"/>
                      <text x="68" y="58" fill="#1e3a8a" font-size="10.5" font-weight="bold">8 cm</text>
                      <text x="122" y="52" fill="#dc2626" font-size="10.5" font-weight="bold">10 cm</text>
                      <text x="108" y="96" fill="#15803d" font-size="10.5" font-weight="bold">6 cm</text>
                    </svg>
                  </div>`,
              ans: "32", accept: ["32cm", "32 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "원뿔을 앞에서 보면 밑변은 '밑면의 지름(6 × 2 = 12 cm)'이 되고, 양쪽 옆변 2개는 각각 '모선(10 cm)'이 되는 이등변삼각형으로 보입니다!",
              h2: "밑변(12 cm) + 왼쪽 모선(10 cm) + 오른쪽 모선(10 cm)을 모두 더해 보세요.",
              checkTip: "앞에서 본 이등변삼각형의 둘레 = 지름(12 cm) + 모선 2개(10 + 10 = 20 cm) = 32(cm)입니다. (높이 8 cm는 안쪽 선이므로 둘레에 더하지 않습니다!)",
              wrongDiag: {
                "24": "24 cm는 돌리기 전 직각삼각형 1개의 둘레(6+8+10)예요! 한 바퀴 돌리면 밑변이 12 cm가 되고 양쪽 변이 10 cm씩 되어 12 + 10 + 10 = 32 cm입니다.",
                "40": "안쪽에 있는 높이(8 cm)는 바깥 둘레가 아니므로 더하면 안 돼요! 12 + 10 + 10 = 32 cm입니다."
              },
              diagDefault: "밑면의 지름(12 cm)에 양쪽 모선(10 cm × 2)을 더한 값(32)을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 6 cm가 한 바퀴 돌면 밑면의 지름(이등변삼각형의 밑변)은 몇 cm가 되나요?", ans: "12" },
                { q: "2계단: 양쪽 모선(10 cm + 10 cm = 20 cm)을 더하면 이등변삼각형의 둘레는 몇 cm인가요?", ans: "32" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 밑면의 지름이 10 cm이고 모선의 길이가 13 cm인 고깔모자(원뿔 모양)가 있습니다. 이 고깔모자의 밑면인 원의 둘레(원주)를 따라 반짝이 테이프를 한 바퀴 붙이려고 할 때, 필요한 테이프의 길이는 몇 cm인가요? (원주율: 3.14)",
              ans: "31.4", accept: ["31.4cm", "31.4 cm"], unit: "cm", placeholder: "소수로 입력",
              h1: "밑면인 원의 둘레(원주)는 모선의 길이(13 cm)와 상관없이 '(밑면의 지름 10 cm) × (원주율 3.14)'로 구합니다!",
              h2: "10 × 3.14를 계산해 보세요.",
              checkTip: "밑면의 원주 = 10 × 3.14 = 31.4(cm)입니다.",
              wrongDiag: {},
              diagDefault: "10 × 3.14 = 31.4를 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 지름 10 cm에 원주율 3.14를 곱하면 몇 cm인가요?", ans: "31.4" }
              ]
            },
            {
              q: "[유형 3] 밑면의 반지름이 4 cm이고 높이가 9 cm인 원뿔을 위에서 내려다보았을 때 보이는 원의 '넓이'는 몇 cm² 인가요? (원주율: 3)",
              ans: "48", accept: ["48cm²", "48 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "원뿔을 위에서 내려다보면 밑면인 '반지름 4 cm인 원'으로 보입니다.",
              h2: "반지름이 4 cm인 원의 넓이(4 × 4 × 3)를 구해 보세요.",
              checkTip: "4 × 4 × 3 = 48(cm²)입니다.",
              wrongDiag: {
                "36": "36은 4 × 9를 계산한 값이에요! 위에서 본 모양은 반지름 4 cm인 원이므로 4 × 4 × 3 = 48 cm² 입니다."
              },
              diagDefault: "4 × 4 × 3 = 48을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 4 cm인 원의 넓이(4 × 4 × 3)는 몇 cm² 인가요?", ans: "48" }
              ]
            }
          ]
        ],
        step4Intro: "원뿔에서는 수직으로 내려온 '높이'와 비스듬한 옆면 길이인 '모선'을 구분하는 것이 핵심이고, 모선이 높이보다 언제나 더 길다는 점만 기억하면 됩니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 원뿔의 밑면의 개수(㉠)와 원뿔의 꼭짓점의 개수(㉡)를 더한 값(㉠ + ㉡)은 모두 몇 개인가요?",
              ans: "2", accept: ["2개"], unit: "개", placeholder: "숫자만 입력",
              h1: "원뿔의 밑면은 1개이고 꼭짓점도 1개입니다.",
              h2: "1 + 1을 계산해 보세요.",
              checkTip: "1 + 1 = 2(개)입니다.",
              wrongDiag: {},
              diagDefault: "2를 입력해 보세요.",
              steps: [
                { q: "1계단: 1 + 1은 몇 개인가요?", ans: "2" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 밑면의 반지름이 5 cm인 원뿔에서 높이와 모선의 길이를 재었더니 각각 13 cm, 12 cm 중 하나였습니다. 이 원뿔의 '모선의 길이'는 몇 cm인가요?",
              ans: "13", accept: ["13cm", "13 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "모선의 길이는 높이보다 항상 더 깁니다.",
              h2: "13과 12 중 더 큰 수를 적어 보세요.",
              checkTip: "더 긴 13 cm가 모선의 길이입니다.",
              wrongDiag: {
                "12": "12 cm는 수직인 높이이고, 더 긴 13 cm가 비스듬한 모선입니다!"
              },
              diagDefault: "13을 입력해 보세요.",
              steps: [
                { q: "1계단: 13과 12 중 더 긴 모선의 길이는 몇 cm인가요?", ans: "13" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 한 원뿔에서 어느 한 모선의 길이를 재었더니 15 cm였습니다. 이 원뿔의 반대편에 있는 다른 모선의 길이는 몇 cm인가요?",
              ans: "15", accept: ["15cm", "15 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "한 원뿔에서 모든 모선의 길이는 서로 같습니다.",
              h2: "15를 적어 보세요.",
              checkTip: "모든 모선의 길이는 15 cm로 같습니다.",
              wrongDiag: {},
              diagDefault: "15를 입력해 보세요.",
              steps: [
                { q: "1계단: 다른 모선의 길이도 똑같이 몇 cm인가요?", ans: "15" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 밑변이 3 cm, 높이가 4 cm, 빗변이 5 cm인 직각삼각형을 높이(4 cm)를 기준으로 하여 한 바퀴 돌려 원뿔을 만들었습니다. 이 원뿔을 앞에서 보았을 때 보이는 이등변삼각형의 둘레(밑면의 지름 + 양쪽 모선 2개)는 모두 몇 cm인가요?",
              ans: "16", accept: ["16cm", "16 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "밑면의 지름은 3 × 2 = 6 cm이고, 양쪽 모선은 5 cm씩 2개입니다.",
              h2: "6 + 5 + 5를 계산해 보세요.",
              checkTip: "6 + 5 + 5 = 16(cm)입니다.",
              wrongDiag: {
                "12": "12 cm는 직각삼각형 1개의 둘레예요! 원뿔을 앞에서 보면 6 + 5 + 5 = 16 cm입니다."
              },
              diagDefault: "6 + 5 + 5 = 16을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 지름은 3 × 2 = 몇 cm인가요?", ans: "6" },
                { q: "2계단: 양쪽 모선(5 + 5 = 10 cm)을 더하면 몇 cm인가요?", ans: "16" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면의 반지름이 5 cm이고 모선의 길이가 12 cm인 원뿔의 밑면의 둘레(원주)는 몇 cm인가요? (원주율: 3.1)",
              ans: "31", accept: ["31cm", "31 cm", "31.0"], unit: "cm", placeholder: "숫자만 입력",
              h1: "밑면의 지름은 5 × 2 = 10 cm이므로 10 × 3.1을 계산합니다.",
              h2: "10 × 3.1을 계산해 보세요.",
              checkTip: "10 × 3.1 = 31(cm)입니다.",
              wrongDiag: {},
              diagDefault: "31을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름(10 cm) × 3.1은 몇 cm인가요?", ans: "31" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 밑면의 반지름이 5 cm이고 높이가 10 cm인 원뿔을 위에서 내려다보았을 때 보이는 원의 '넓이'는 몇 cm² 인가요? (원주율: 3)",
              ans: "75", accept: ["75cm²", "75 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "5 × 5 × 3을 계산합니다.",
              h2: "25 × 3을 계산해 보세요.",
              checkTip: "5 × 5 × 3 = 75(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "75를 입력해 보세요.",
              steps: [
                { q: "1계단: 5 × 5 × 3은 몇 cm² 인가요?", ans: "75" }
              ]
            }
          ]
        ],
        step5A: {
          q: "원뿔에서 원뿔의 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 선분을 [ (1) 모선 / (2) 높이 ] 이라고 합니다.",
          ans: "모선", numAns: "1",
          hint: "💡 힌트: 원뿔의 옆면을 따라 비스듬히 내려오는 선분입니다."
        },
        step5B: {
          sentence: "원뿔은 밑면이 원이고 옆면이 굽은 면인 뿔 모양이며 꼭짓점과 밑면 둘레를 이은 선분을 모선이라 한다."
        },
        nextUnit: "6-4"
      },
  
      "6-4": {
        title: "6-4차시: 구를 알아볼까요",
        goal: "공 모양의 입체도형인 구의 구성 요소(구의 중심, 구의 반지름)를 알고, 구를 바라본 모양과 단면의 특징을 이해합니다.",
        videoUrl: "https://youtube.com/shorts/Gi9E3WWNc64?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 어느 방향에서 보아도 항상 '원'인 구!</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 구의 중심과 반지름 -->
                <rect x="10" y="10" width="145" height="115" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="82" cy="68" r="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                <ellipse cx="82" cy="68" rx="40" ry="13" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="3,2"/>
                <line x1="82" y1="68" x2="122" y2="68" stroke="#dc2626" stroke-width="2.2"/>
                <circle cx="82" cy="68" r="3" fill="#1e293b"/>
                <text x="48" y="62" fill="#1e293b" font-size="9.5" font-weight="bold">구의 중심</text>
                <text x="86" y="82" fill="#dc2626" font-size="9.5" font-weight="bold">구의 반지름</text>
                <!-- 오른쪽: 반원 돌리기 및 단면 -->
                <rect x="163" y="10" width="147" height="115" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="171" y="30" fill="#1e3a8a" font-size="10.5" font-weight="bold">• 반원 1바퀴 돌리기 ➔ 구!</text>
                <line x1="196" y1="38" x2="196" y2="100" stroke="#1e293b" stroke-width="2"/>
                <path d="M 196 44 A 24 24 0 0 1 196 92 Z" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
                <text x="225" y="62" fill="#dc2626" font-size="9.5" font-weight="bold">반지름</text>
                <text x="225" y="80" fill="#15803d" font-size="9.5" font-weight="bold">지름 = 반지름×2</text>
                <text x="171" y="116" fill="#b45309" font-size="9.5" font-weight="bold">• 중심을 자른 단면이 가장 큼!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>구의 중심과 반지름:</strong> 구의 가장 안쪽에 있는 점을 <strong>구의 중심</strong>이라 하고, 구의 중심에서 구의 겉면의 한 점을 이은 선분을 <strong>구의 반지름</strong>이라고 합니다.</li>
              <li><strong>구의 단면:</strong> 구를 평면으로 자르면 단면은 언제나 <strong>원</strong>이 되며, <strong>구의 중심을 지나도록 자를 때 단면인 원의 크기가 가장 큽니다!</strong></li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 원뿔에서 원뿔의 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 비스듬한 선분을 무엇이라고 하나요?",
            ans: "모선", placeholder: "두 글자 용어 입력",
            h1: "높이보다 항상 더 긴 옆면의 선분입니다.",
            h2: "'모선'을 적어 보세요.",
            checkTip: "원뿔의 꼭짓점과 밑면 둘레를 이은 선분은 '모선'입니다.",
            wrongDiag: {},
            diagDefault: "'모선'을 입력해 보세요.",
            steps: [
              { q: "1계단: 이 선분의 이름은 무엇인가요?", ans: "모선" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "공 모양의 입체도형인 '구'를 위, 앞, 오른쪽 옆에서 바라보았을 때 보이는 모양은 각각 어떠한가요?",
            choices: ["1번: 위, 앞, 옆 어느 방향에서 보아도 항상 똑같은 원 모양으로 보인다.", "2번: 위에서 보면 원이지만 앞에서 보면 직사각형으로 보인다."],
            ans: "1",
            h1: "구는 모든 방향이 똑같이 둥근 공 모양입니다.",
            h2: "어느 방향에서 보아도 항상 원 모양으로 보인다는 1번 보기를 골라 보세요."
          },
          {
            q: "오렌지(구 모양)를 칼로 평평하게 잘라 단면인 원을 만들려고 합니다. 단면인 원의 크기가 '가장 크게' 되려면 어디를 지나도록 잘라야 하나요?",
            choices: ["1번: 구의 중심을 지나도록 한가운데를 자른다.", "2번: 구의 가장자리 끝부분을 살짝 자른다."],
            ans: "1",
            h1: "구의 중심을 지나도록 자를 때 단면의 반지름이 구의 반지름과 같아져서 가장 큰 원이 됩니다.",
            h2: "구의 중심을 지나도록 자르는 1번 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "공 모양의 입체도형을 구라고 하며, 구의 가장 안쪽에 있는 중심을 구의 중심이라 하고, 구의 중심에서 구의 겉면의 한 점을 이은 선분을 구의 [ ① ]이라고 합니다.",
            ans: "반지름",
            h1: "원에서도 중심과 둘레를 이은 선분을 부르던 세 글자 용어입니다.",
            h2: "지름의 절반인 세 글자 단어를 적어 보세요."
          },
          {
            q: "반지름이 6 cm인 반원 모양의 종이를 지름을 기준으로 하여 한 바퀴 돌리면 구가 만들어지며, 이 구의 지름은 6 × 2 = [ ① ] cm입니다.",
            ans: "12",
            h1: "반지름 6 cm에 2를 곱해 보세요.",
            h2: "6 × 2의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "반지름이 9 cm인 구를 구의 중심을 지나도록 똑바로 잘랐습니다. 잘린 단면인 원의 '지름'은 몇 cm인가요?",
            ans: "18", accept: ["18cm", "18 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "구의 중심을 지나도록 자른 단면의 반지름은 구의 반지름(9 cm)과 같습니다.",
            h2: "반지름 9 cm에 2를 곱해 단면의 지름을 구해 보세요.",
            checkTip: "단면의 반지름이 9 cm이므로 단면의 지름은 9 × 2 = 18(cm)입니다.",
            wrongDiag: {
              "9": "9 cm는 단면의 '반지름'이에요! 문제에서는 '지름'을 물었으니 9 × 2 = 18 cm입니다."
            },
            diagDefault: "9 × 2 = 18을 입력해 보세요.",
            steps: [
              { q: "1계단: 반지름이 9 cm인 구의 지름은 9 × 2 = 몇 cm인가요?", ans: "18" }
            ]
          },
          {
            q: `다음 그림과 같이 원기둥 모양의 통 안에 반지름이 5 cm인 구 모양의 공 1개가 들어 있습니다. 통의 안쪽 지름은 공의 지름과 같고, 공이 통의 바닥과 뚜껑에 꼭 맞게 닿아 있을 때, 이 원기둥 통의 '안쪽 높이'는 몇 cm인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 210 115" style="width:100%; max-width:210px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <text x="62" y="16" fill="#64748b" font-size="9.5" font-weight="bold">[앞에서 본 모양]</text>
                    <rect x="64" y="24" width="68" height="68" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
                    <circle cx="98" cy="58" r="34" fill="#fde047" stroke="#ca8a04" stroke-width="2"/>
                    <line x1="98" y1="58" x2="132" y2="58" stroke="#dc2626" stroke-width="1.8"/>
                    <circle cx="98" cy="58" r="2.5" fill="#1e293b"/>
                    <text x="103" y="54" fill="#dc2626" font-size="10" font-weight="bold">5 cm</text>
                    <text x="138" y="62" fill="#1e3a8a" font-size="11" font-weight="bold">높이 ? cm</text>
                  </svg>
                </div>`,
            ans: "10", accept: ["10cm", "10 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "구가 원기둥의 바닥과 뚜껑에 꼭 맞게 닿아 있으므로, 원기둥의 높이는 구의 '지름'과 같습니다!",
            h2: "구의 반지름이 5 cm이므로 구의 지름(5 × 2)을 구해 보세요.",
            checkTip: "원기둥의 높이는 구의 지름과 같으므로 5 × 2 = 10(cm)입니다.",
            wrongDiag: {
              "5": "5 cm는 구의 반지름(중심에서 위쪽 끝까지의 길이)이에요! 바닥부터 맨 위까지의 높이는 지름인 10 cm입니다."
            },
            diagDefault: "구의 지름(5 × 2 = 10)을 입력해 보세요.",
            steps: [
              { q: "1계단: 반지름이 5 cm인 구의 지름(원기둥의 높이)은 5 × 2 = 몇 cm인가요?", ans: "10" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 지름이 16 cm인 반원 모양의 종이를 지름을 기준으로 하여 한 바퀴 돌리면 구가 만들어집니다. 만들어진 구의 '반지름'은 몇 cm인가요?",
              ans: "8", accept: ["8cm", "8 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "지름이 16 cm인 반원을 돌리면 지름이 16 cm인 구가 만들어집니다.",
              h2: "구의 지름(16 cm)을 2로 나누어 구의 반지름을 적어 보세요.",
              checkTip: "구의 지름이 16 cm이므로 반지름은 16 ÷ 2 = 8(cm)입니다.",
              wrongDiag: {
                "16": "16 cm는 구의 '지름'이에요! 문제에서는 '반지름'을 물었으니 16 ÷ 2 = 8 cm입니다."
              },
              diagDefault: "16 ÷ 2 = 8을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름 16 cm를 2로 나누면 구의 반지름은 몇 cm인가요?", ans: "8" }
              ]
            },
            {
              q: "[유형 1] 반지름이 6 cm인 구를 구의 중심을 지나도록 잘랐을 때 생기는 가장 큰 단면(원)의 '넓이'는 몇 cm² 인가요? (원주율: 3.1)",
              ans: "111.6", accept: ["111.6cm²", "111.6 cm²"], unit: "cm²", placeholder: "소수로 입력",
              h1: "구의 중심을 지나도록 자른 단면은 반지름이 6 cm인 원입니다.",
              h2: "5단원에서 배운 원의 넓이 공식(6 × 6 × 3.1)을 계산해 보세요.",
              checkTip: "반지름이 6 cm인 원의 넓이이므로 6 × 6 × 3.1 = 36 × 3.1 = 111.6(cm²)입니다.",
              wrongDiag: {
                "37.2": "37.2 cm는 단면의 둘레(원주)예요! 넓이는 6 × 6 × 3.1 = 111.6 cm² 입니다."
              },
              diagDefault: "6 × 6 × 3.1 = 111.6을 입력해 보세요.",
              steps: [
                { q: "1계단: 단면인 원의 반지름은 6 cm입니다. 6 × 6은 얼마인가요?", ans: "36" },
                { q: "2계단: 36 × 3.1은 몇 cm² 인가요?", ans: "111.6" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 다음 중 '구'에 대한 설명으로 틀린 것을 찾아 기호를 쓰세요.<br>(가) 구의 중심에서 구의 겉면의 한 점을 이은 선분은 구의 반지름이며 길이가 모두 같습니다.<br>(나) 구는 위, 앞, 옆 어느 방향에서 보아도 항상 원 모양입니다.<br>(다) 구는 원기둥처럼 평평한 밑면이 1개 있습니다.",
              ans: "다", accept: ["(다)", "다번"], placeholder: "기호 입력 (가, 나, 다 중 택1)",
              h1: "구는 전체가 둥근 곡면으로만 이루어져 있어서 평평한 밑면이나 뾰족한 꼭짓점이 하나도 없습니다!",
              h2: "밑면이 1개 있다고 잘못 설명한 기호를 골라 보세요. (밑면이 1개인 것은 원뿔입니다!)",
              checkTip: "(다) 구에는 평평한 밑면이 없습니다.",
              wrongDiag: {},
              diagDefault: "틀린 설명인 (다)를 입력해 보세요.",
              steps: [
                { q: "1계단: 구에 밑면이 있다고 잘못 설명한 기호는 무엇인가요?", ans: "다" }
              ]
            },
            {
              q: "[유형 2] 태호는 '반원 모양의 종이를 지름을 기준으로 한 바퀴 돌리면 구가 만들어지므로, 직사각형이나 직각삼각형을 돌려도 구가 만들어진다'고 잘못 생각했습니다. 직사각형의 한 변을 기준으로 하여 한 바퀴 돌리면 ( ㉠ )이 만들어지고, 직각삼각형의 직각을 이루는 두 변 중 한 변을 기준으로 하여 한 바퀴 돌리면 ( ㉡ )이 만들어집니다. ㉠과 ㉡에 들어갈 입체도형 이름을 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "원기둥, 원뿔", accept: ["원기둥,원뿔", "원기둥 원뿔"], placeholder: "㉠, ㉡ 도형 이름 순서로 입력",
              h1: "직사각형을 한 변을 기준으로 돌리면 기둥 모양인 '원기둥'이 되고, 직각삼각형을 직각을 낀 변을 기준으로 돌리면 뾰족한 뿔 모양인 '원뿔'이 됩니다.",
              h2: "'원기둥, 원뿔'을 적어 보세요.",
              checkTip: "직사각형을 돌리면 원기둥(㉠), 직각삼각형을 돌리면 원뿔(㉡)이 만들어집니다.",
              wrongDiag: {
                "원뿔, 원기둥": "순서가 바뀌었어요! 직사각형은 원기둥, 직각삼각형은 원뿔이 됩니다."
              },
              diagDefault: "'원기둥, 원뿔'을 입력해 보세요.",
              steps: [
                { q: "1계단: 직사각형을 한 변을 기준으로 한 바퀴 돌리면 어떤 입체도형이 되나요?", ans: "원기둥" },
                { q: "2계단: 직각삼각형을 직각을 낀 변을 기준으로 돌리면 원뿔이 됩니다. 두 도형 이름을 순서대로 쓰면 무엇인가요?", ans: "원기둥, 원뿔" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 그림과 같이 원기둥 모양의 통 안에 반지름이 4 cm인 똑같은 구 모양의 테니스공 3개가 위아래로 한 줄로 쌓여 서로 맞닿아 있습니다. 통의 안쪽 지름은 공의 지름과 같고, 맨 아래 공과 맨 위 공은 각각 통의 바닥과 뚜껑에 닿습니다. 이 원기둥 통의 안쪽 '높이'는 몇 cm인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 190 140" style="width:100%; max-width:190px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="42" y="14" fill="#64748b" font-size="9.5" font-weight="bold">[앞에서 본 모양]</text>
                      <rect x="55" y="20" width="36" height="108" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
                      <circle cx="73" cy="38" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
                      <circle cx="73" cy="74" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
                      <circle cx="73" cy="110" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="1.8"/>
                      <line x1="73" y1="38" x2="91" y2="38" stroke="#dc2626" stroke-width="1.8"/>
                      <text x="98" y="42" fill="#dc2626" font-size="10" font-weight="bold">반지름 4cm</text>
                      <text x="98" y="82" fill="#1e3a8a" font-size="11" font-weight="bold">높이 ? cm</text>
                    </svg>
                  </div>`,
              ans: "24", accept: ["24cm", "24 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "공 1개의 반지름이 4 cm이므로, 공 1개의 높이(지름)는 '4 × 2 = 8 cm'입니다!",
              h2: "지름이 8 cm인 공 3개가 위아래로 맞닿아 쌓여 있으므로 8 × 3을 계산해 보세요.",
              checkTip: "공 1개의 지름 = 4 × 2 = 8 cm ➔ 공 3개의 높이 = 8 × 3 = 24(cm)입니다.",
              wrongDiag: {
                "12": "앗! 지름(8 cm)이 아니라 반지름(4 cm)에 3을 곱해 12 cm라고 적었어요! 공 1개의 높이는 지름인 8 cm이므로 8 × 3 = 24 cm입니다.",
                "8": "8 cm는 공 1개의 지름이에요! 공이 3개 들어 있으므로 8 × 3 = 24 cm입니다."
              },
              diagDefault: "공 1개의 지름(8 cm) × 3 = 24를 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름이 4 cm인 공 1개의 지름은 몇 cm인가요?", ans: "8" },
                { q: "2계단: 공 3개가 쌓인 원기둥 통의 높이는 8 × 3 = 몇 cm인가요?", ans: "24" }
              ]
            },
            {
              q: "[유형 3] 정육면체 모양의 상자 안에 구 모양의 축구공 1개가 상자의 여섯 면에 모두 닿도록 꼭 맞게 들어 있습니다. 상자의 안쪽 한 모서리의 길이가 22 cm일 때, 축구공의 '반지름'은 몇 cm인가요?",
              ans: "11", accept: ["11cm", "11 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "상자의 한 모서리의 길이(22 cm)가 곧 축구공(구)의 '지름'과 같습니다!",
              h2: "지름 22 cm를 2로 나누어 반지름을 구해 보세요.",
              checkTip: "구의 지름이 22 cm이므로 반지름은 22 ÷ 2 = 11(cm)입니다.",
              wrongDiag: {
                "22": "22 cm는 축구공의 '지름'이에요! 반지름은 22 ÷ 2 = 11 cm입니다."
              },
              diagDefault: "22 ÷ 2 = 11을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름 22 cm를 2로 나누면 반지름은 몇 cm인가요?", ans: "11" }
              ]
            }
          ]
        ],
        step4Intro: "구는 어느 방향에서 보아도 원이고, 상자나 통 안에 구가 꼭 맞게 들어 있을 때는 '통의 안쪽 지름·높이 = 구의 지름(반지름 × 2)'이라는 점만 기억하면 쉽게 풀 수 있어요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 지름이 14 cm인 반원 모양의 종이를 지름을 기준으로 하여 한 바퀴 돌려 만든 구의 '반지름'은 몇 cm인가요?",
              ans: "7", accept: ["7cm", "7 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "14 ÷ 2를 계산합니다.",
              h2: "14를 2로 나눈 값을 적어 보세요.",
              checkTip: "14 ÷ 2 = 7(cm)입니다.",
              wrongDiag: {},
              diagDefault: "7을 입력해 보세요.",
              steps: [
                { q: "1계단: 14 ÷ 2는 몇 cm인가요?", ans: "7" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 반지름이 5 cm인 구를 구의 중심을 지나도록 잘랐을 때 생기는 가장 큰 단면(원)의 '넓이'는 몇 cm² 인가요? (원주율: 3.14)",
              ans: "78.5", accept: ["78.5cm²", "78.5 cm²"], unit: "cm²", placeholder: "소수로 입력",
              h1: "5 × 5 × 3.14를 계산합니다.",
              h2: "25 × 3.14를 계산해 보세요.",
              checkTip: "5 × 5 × 3.14 = 78.5(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "78.5를 입력해 보세요.",
              steps: [
                { q: "1계단: 5 × 5 × 3.14는 몇 cm² 인가요?", ans: "78.5" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 구에서 구의 중심과 구의 겉면의 한 점을 이은 선분을 무엇이라고 부르나요? (예: 반지름 / 모선)",
              ans: "반지름", accept: ["구의 반지름"], placeholder: "세 글자 용어 입력",
              h1: "구의 중심에서 겉면까지 이은 선분입니다.",
              h2: "'반지름'을 적어 보세요.",
              checkTip: "구의 반지름입니다.",
              wrongDiag: {},
              diagDefault: "'반지름'을 입력해 보세요.",
              steps: [
                { q: "1계단: 이 선분을 무엇이라고 하나요?", ans: "반지름" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 지름을 기준으로 하여 한 바퀴 돌렸을 때 '구'가 만들어지는 평면도형은 무엇인가요? (예: 직사각형 / 직각삼각형 / 반원)",
              ans: "반원", placeholder: "도형 이름 입력",
              h1: "원의 절반 모양인 도형을 돌리면 구가 됩니다.",
              h2: "'반원'을 적어 보세요.",
              checkTip: "반원을 한 바퀴 돌리면 구가 만들어집니다.",
              wrongDiag: {},
              diagDefault: "'반원'을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 바퀴 돌려 구를 만드는 평면도형은 무엇인가요?", ans: "반원" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 원기둥 모양의 통 안에 반지름이 3 cm인 똑같은 구 모양의 공 4개가 위아래로 한 줄로 쌓여 서로 맞닿아 있습니다. 맨 아래 공과 맨 위 공이 각각 통의 바닥과 뚜껑에 닿을 때, 이 원기둥 통의 안쪽 '높이'는 몇 cm인가요?",
              ans: "24", accept: ["24cm", "24 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "공 1개의 지름은 3 × 2 = 6 cm이고, 그런 공이 4개 쌓여 있습니다.",
              h2: "6 × 4를 계산해 보세요.",
              checkTip: "6 × 4 = 24(cm)입니다.",
              wrongDiag: {
                "12": "반지름(3 cm)이 아니라 지름(6 cm)에 4를 곱해야 합니다!"
              },
              diagDefault: "6 × 4 = 24를 입력해 보세요.",
              steps: [
                { q: "1계단: 공 1개의 지름은 3 × 2 = 몇 cm인가요?", ans: "6" },
                { q: "2계단: 공 4개의 높이는 6 × 4 = 몇 cm인가요?", ans: "24" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 정육면체 모양의 상자 안에 구슬 1개가 여섯 면에 모두 닿도록 꼭 맞게 들어 있습니다. 상자의 안쪽 한 모서리의 길이가 16 cm일 때, 구슬의 '반지름'은 몇 cm인가요?",
              ans: "8", accept: ["8cm", "8 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "구슬의 지름이 16 cm이므로 2로 나눕니다.",
              h2: "16 ÷ 2를 계산해 보세요.",
              checkTip: "16 ÷ 2 = 8(cm)입니다.",
              wrongDiag: {},
              diagDefault: "8을 입력해 보세요.",
              steps: [
                { q: "1계단: 16 ÷ 2는 몇 cm인가요?", ans: "8" }
              ]
            }
          ]
        ],
        step5A: {
          q: "공 모양의 입체도형을 구라고 하며, 구는 위, 앞, 옆 어느 방향에서 바라보아도 항상 [ (1) 원 / (2) 직사각형 ] 모양으로 보입니다.",
          ans: "원", numAns: "1",
          hint: "💡 힌트: 공을 어느 쪽에서 보아도 동그랗게 보이는 도형 이름을 골라 보세요."
        },
        step5B: {
          sentence: "공 모양의 입체도형을 구라고 하며 구는 어느 방향에서 보아도 항상 원 모양으로 보인다."
        },
        nextUnit: "6-5"
      },
  
      "6-5": {
        title: "6-5차시: 여러 가지 모양을 만들어 볼까요 (원기둥, 원뿔, 구 비교)",
        goal: "원기둥, 원뿔, 구를 위, 앞, 옆에서 본 모양으로 구별하고 세 입체도형의 성질을 비교합니다.",
        videoUrl: "https://youtube.com/shorts/0WWiMyqepq8?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 원기둥 · 원뿔 · 구를 위, 앞, 옆에서 본 모양 비교</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 원기둥 -->
                <rect x="8" y="10" width="96" height="115" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="32" y="28" fill="#1e3a8a" font-size="11" font-weight="bold">[원기둥]</text>
                <circle cx="34" cy="58" r="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
                <rect x="58" y="42" width="28" height="32" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
                <text x="16" y="96" fill="#1e3a8a" font-size="9.5" font-weight="bold">• 위: 원</text>
                <text x="16" y="114" fill="#dc2626" font-size="9.5" font-weight="bold">• 앞·옆: 직사각형</text>
                <!-- 원뿔 -->
                <rect x="112" y="10" width="96" height="115" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
                <text x="142" y="28" fill="#854d0e" font-size="11" font-weight="bold">[원뿔]</text>
                <circle cx="138" cy="58" r="14" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
                <polygon points="176,40 160,74 192,74" fill="#fef08a" stroke="#d97706" stroke-width="1.5"/>
                <text x="120" y="96" fill="#854d0e" font-size="9.5" font-weight="bold">• 위: 원</text>
                <text x="120" y="114" fill="#dc2626" font-size="9.5" font-weight="bold">• 앞·옆: 삼각형</text>
                <!-- 구 -->
                <rect x="216" y="10" width="96" height="115" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
                <text x="252" y="28" fill="#15803d" font-size="11" font-weight="bold">[구]</text>
                <circle cx="242" cy="58" r="14" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <circle cx="280" cy="58" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                <text x="224" y="96" fill="#15803d" font-size="9.5" font-weight="bold">• 위: 원</text>
                <text x="224" y="114" fill="#dc2626" font-size="9.5" font-weight="bold">• 앞·옆: 모두 원!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>공통점:</strong> 원기둥, 원뿔, 구는 모두 굽은 면이 있고, 바닥에 똑바로 놓았을 때 <strong>위에서 본 모양이 모두 '원'</strong>입니다.</li>
              <li><strong>차이점(앞·옆에서 본 모양):</strong> 앞이나 옆에서 보면 원기둥은 <strong>직사각형</strong>, 원뿔은 <strong>이등변삼각형(삼각형)</strong>, 구는 <strong>원</strong>으로 보입니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 반지름이 7 cm인 구의 지름은 몇 cm인가요?",
            ans: "14", accept: ["14cm", "14 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "7 × 2를 계산합니다.",
            h2: "7에 2를 곱한 값을 적어 보세요.",
            checkTip: "7 × 2 = 14(cm)입니다.",
            wrongDiag: {},
            diagDefault: "14를 입력해 보세요.",
            steps: [
              { q: "1계단: 7 × 2는 몇 cm인가요?", ans: "14" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "바닥에 똑바로 세워 놓았을 때, 위에서 본 모양은 '원'이고 앞과 옆에서 본 모양은 모두 '이등변삼각형'인 입체도형은 무엇인가요?",
            choices: ["1번: 원기둥", "2번: 원뿔"],
            ans: "2",
            h1: "앞에서 보았을 때 위쪽이 뾰족한 삼각형으로 보이는 입체도형입니다.",
            h2: "'원뿔'을 골라 보세요."
          },
          {
            q: "원기둥, 원뿔, 구 중에서 '꼭짓점'이 있는 도형은 어느 것인가요?",
            choices: ["1번: 원뿔 (원뿔의 꼭짓점 1개)", "2번: 원기둥 (꼭짓점 2개)"],
            ans: "1",
            h1: "원기둥과 구에는 꼭짓점이 없고, 원뿔에만 뾰족한 원뿔의 꼭짓점이 1개 있습니다.",
            h2: "원뿔을 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "바닥에 똑바로 놓인 어떤 입체도형을 위에서 보았더니 원이었고, 앞과 옆에서 보았더니 모두 직사각형이었습니다. 이 입체도형은 [ ① ]입니다.",
            ans: "원기둥",
            h1: "앞과 옆에서 직사각형으로 보이는 둥근 기둥 모양 도형입니다.",
            h2: "세 글자 도형 이름을 적어 보세요."
          },
          {
            q: "원기둥, 원뿔, 구 중에서 어느 방향으로 밀어도 데구루루 잘 굴러가는 공 모양의 도형은 [ ① ]입니다.",
            ans: "구",
            h1: "모든 방향이 둥글어서 사방으로 굴러가는 한 글자 도형 이름입니다.",
            h2: "한 글자 도형 이름을 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "원기둥, 원뿔, 구의 '밑면의 개수'를 차례대로 쓰세요 (쉼표로 구분하여 입력).",
            ans: "2, 1, 0", accept: ["2,1,0", "2 1 0"], placeholder: "원기둥, 원뿔, 구의 밑면 수 입력",
            h1: "원기둥은 위아래 2개, 원뿔은 바닥에 1개, 구는 평평한 면이 없으므로 0개입니다.",
            h2: "'2, 1, 0'을 적어 보세요.",
            checkTip: "밑면의 개수는 원기둥 2개, 원뿔 1개, 구 0개입니다.",
            wrongDiag: {},
            diagDefault: "'2, 1, 0'을 입력해 보세요.",
            steps: [
              { q: "1계단: 원기둥의 밑면은 몇 개인가요?", ans: "2" },
              { q: "2계단: 원뿔은 1개, 구는 0개입니다. 세 수를 쉼표로 구분해 쓰면 무엇인가요?", ans: "2, 1, 0" }
            ]
          },
          {
            q: "밑면의 지름이 8 cm이고 높이가 10 cm인 원뿔을 정면(앞)에서 바라보았을 때 보이는 도형은 이등변삼각형입니다. 이 이등변삼각형의 '넓이(밑변 × 높이 ÷ 2)'는 몇 cm² 인가요?",
            ans: "40", accept: ["40cm²", "40 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "원뿔을 앞에서 본 이등변삼각형의 밑변은 '밑면의 지름(8 cm)'이고, 높이는 '원뿔의 높이(10 cm)'입니다!",
            h2: "삼각형의 넓이 공식인 (밑변 8 × 높이 10) ÷ 2를 계산해 보세요.",
            checkTip: "(8 × 10) ÷ 2 = 40(cm²)입니다.",
            wrongDiag: {
              "80": "앗! 삼각형의 넓이 공식에는 '÷ 2'가 들어 있어요! 8 × 10 ÷ 2 = 40 cm² 가 되어야 합니다."
            },
            diagDefault: "(8 × 10) ÷ 2 = 40을 입력해 보세요.",
            steps: [
              { q: "1계단: 앞에서 본 삼각형의 밑변(8 cm)과 높이(10 cm)를 곱하면 얼마인가요?", ans: "80" },
              { q: "2계단: 삼각형이므로 2로 나누면(80 ÷ 2) 넓이는 몇 cm² 인가요?", ans: "40" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 수수께끼를 읽고 어떤 입체도형인지 이름을 쓰세요.<br><br>• 나는 굽은 면으로 둘러싸여 있습니다.<br>• 나를 위에서 보면 원 모양입니다.<br>• 나를 앞이나 옆에서 보면 이등변삼각형 모양입니다.<br>• 나에게는 뾰족한 꼭짓점이 1개 있습니다.",
              ans: "원뿔", placeholder: "도형 이름 입력",
              h1: "위에서 보면 원, 앞과 옆에서 보면 이등변삼각형이고 꼭짓점이 1개인 뿔 모양 도형입니다.",
              h2: "두 글자 도형 이름을 적어 보세요.",
              checkTip: "위에서 보면 원, 앞·옆에서 보면 이등변삼각형인 도형은 '원뿔'입니다.",
              wrongDiag: {
                "원기둥": "원기둥은 앞·옆에서 보면 직사각형이고 꼭짓점이 없어요! 삼각형으로 보이는 '원뿔'입니다."
              },
              diagDefault: "'원뿔'을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞과 옆에서 삼각형으로 보이는 이 도형은 무엇인가요?", ans: "원뿔" }
              ]
            },
            {
              q: "[유형 1] 밑면의 반지름이 6 cm이고 높이가 10 cm인 원기둥을 '앞'에서 보았을 때 보이는 직사각형의 넓이는 몇 cm² 인가요?",
              ans: "120", accept: ["120cm²", "120 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "원기둥을 앞에서 보면 가로가 '밑면의 지름(6 × 2 = 12 cm)'이고 세로가 '높이(10 cm)'인 직사각형으로 보입니다!",
              h2: "12 × 10을 계산해 보세요.",
              checkTip: "가로(지름 12 cm) × 세로(높이 10 cm) = 120(cm²)입니다.",
              wrongDiag: {
                "60": "앗! 반지름(6 cm)에 높이(10 cm)를 곱했어요! 앞에서 보면 가로가 지름(12 cm)이므로 12 × 10 = 120 cm² 입니다."
              },
              diagDefault: "지름(12 cm) × 높이(10 cm) = 120을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름이 6 cm인 원기둥을 앞에서 볼 때 가로(지름)는 몇 cm인가요?", ans: "12" },
                { q: "2계단: 앞에서 본 직사각형의 넓이(12 × 10)는 몇 cm² 인가요?", ans: "120" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 다현이는 '바닥에 똑바로 세워 놓은 어떤 입체도형을 위에서 보았더니 원 모양이었으므로, 이 도형은 무조건 구이다'라고 단정했습니다. 이 단원에서 배운 세 가지 입체도형 중, 구를 제외하고 위에서 보았을 때 원 모양으로 보이는 나머지 두 도형의 이름을 쓰세요 (쉼표로 구분하여 입력).",
              ans: "원기둥, 원뿔", accept: ["원기둥,원뿔", "원기둥 원뿔", "원뿔, 원기둥", "원뿔,원기둥", "원뿔 원기둥"], placeholder: "두 입체도형 이름을 쉼표로 구분해 입력",
              h1: "바닥에 똑바로 세워 놓았을 때 위에서 내려다보면 기둥 모양과 뿔 모양의 둥근 입체도형도 모두 원으로 보입니다!",
              h2: "구를 제외한 나머지 두 도형의 이름을 적어 보세요.",
              checkTip: "원기둥과 원뿔도 똑바로 놓으면 위에서 본 모양이 원입니다.",
              wrongDiag: {},
              diagDefault: "'원기둥, 원뿔'을 입력해 보세요.",
              steps: [
                { q: "1계단: 위에서 볼 때 원으로 보이는 기둥 모양 도형은 무엇인가요?", ans: "원기둥" },
                { q: "2계단: 뿔 모양 도형은 원뿔입니다. 두 도형 이름을 쉼표로 구분해 쓰면 무엇인가요?", ans: "원기둥, 원뿔" }
              ]
            },
            {
              q: "[유형 2] 다음은 육각기둥, 원기둥, 원뿔에 대한 설명입니다. 설명이 틀린 것의 기호를 쓰세요.<br>• (가) 육각기둥의 밑면의 모양: 육각형<br>• (나) 원기둥의 옆면의 모양(입체 상태): 굽은 면<br>• (다) 원뿔의 밑면의 개수: 2개",
              ans: "다", accept: ["(다)", "다번"], placeholder: "기호 입력 (가, 나, 다 중 택1)",
              h1: "기둥은 밑면이 2개이지만, 뿔(각뿔, 원뿔)은 밑면이 바닥에 1개뿐입니다!",
              h2: "원뿔의 밑면이 2개라고 잘못 적힌 기호를 골라 보세요.",
              checkTip: "(다) 원뿔의 밑면은 1개입니다.",
              wrongDiag: {},
              diagDefault: "(다)를 입력해 보세요.",
              steps: [
                { q: "1계단: 원뿔의 밑면 개수가 틀린 기호는 무엇인가요?", ans: "다" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 그림과 같이 반지름이 5 cm이고 높이가 12 cm인 원뿔을 앞에서 본 모양(이등변삼각형)의 넓이는 몇 cm² 인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <path d="M 110 16 L 66 90 A 44 12 0 0 0 154 90 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
                      <line x1="110" y1="16" x2="110" y2="90" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="3,2"/>
                      <line x1="110" y1="90" x2="154" y2="90" stroke="#dc2626" stroke-width="2"/>
                      <text x="78" y="60" fill="#1d4ed8" font-size="11" font-weight="bold">12 cm</text>
                      <text x="120" y="104" fill="#dc2626" font-size="11" font-weight="bold">반지름 5 cm</text>
                    </svg>
                  </div>`,
              ans: "60", accept: ["60cm²", "60 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "원뿔을 앞에서 본 이등변삼각형의 밑변은 반지름(5 cm)이 아니라 '지름(5 × 2 = 10 cm)'이고, 높이는 12 cm입니다!",
              h2: "(밑변 10 × 높이 12) ÷ 2를 계산해 보세요.",
              checkTip: "밑변(지름 10 cm) × 높이(12 cm) ÷ 2 = 60(cm²)입니다.",
              wrongDiag: {
                "30": "30은 밑변을 지름(10 cm)이 아니라 반지름(5 cm)으로 계산한 값(5 × 12 ÷ 2)이에요! 밑변이 10 cm이므로 60 cm² 입니다.",
                "120": "삼각형의 넓이이므로 2로 나누어야 합니다! 120 ÷ 2 = 60 cm² 입니다."
              },
              diagDefault: "(10 × 12) ÷ 2 = 60을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름이 5 cm이므로 앞에서 본 삼각형의 밑변(지름)은 몇 cm인가요?", ans: "10" },
                { q: "2계단: 삼각형의 넓이(10 × 12 ÷ 2)는 몇 cm² 인가요?", ans: "60" }
              ]
            },
            {
              q: "[유형 3] 밑면의 반지름이 6 cm이고 높이가 15 cm인 원기둥 모양의 케이크가 흔들리지 않게 꼭 맞는 직육면체 모양의 상자에 넣으려고 합니다. 상자의 안쪽 '가로, 세로, 높이'의 합은 최소 몇 cm이어야 하나요?",
              ans: "39", accept: ["39cm", "39 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "원기둥의 밑면(반지름 6 cm)이 상자 바닥에 꼭 맞게 들어가려면, 상자의 가로와 세로는 각각 밑면의 '지름(6 × 2 = 12 cm)'과 같아야 합니다!",
              h2: "상자의 가로(12 cm) + 세로(12 cm) + 높이(15 cm)를 계산해 보세요.",
              checkTip: "상자의 가로 = 12 cm, 세로 = 12 cm, 높이 = 15 cm이므로 합은 12 + 12 + 15 = 39(cm)입니다.",
              wrongDiag: {
                "27": "앗! 상자의 가로와 세로를 반지름(6 cm)으로 계산했어요(6 + 6 + 15 = 27). 지름이 12 cm이므로 12 + 12 + 15 = 39 cm입니다."
              },
              diagDefault: "가로(12) + 세로(12) + 높이(15) = 39를 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 6 cm인 원이 꼭 맞게 들어가려면 상자의 가로와 세로는 각각 몇 cm(지름)여야 하나요?", ans: "12" },
                { q: "2계단: 가로(12) + 세로(12) + 높이(15)는 몇 cm인가요?", ans: "39" }
              ]
            }
          ]
        ],
        step4Intro: "원기둥, 원뿔, 구는 위에서 보면 모두 '원'이지만, 앞에서 보면 각각 '직사각형(가로=지름, 세로=높이)', '이등변삼각형(밑변=지름, 높이=높이)', '원(지름=구의 지름)'으로 보인다는 점을 연결하면 끝이에요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 위에서 보면 원 모양이고, 앞이나 옆에서 보면 직사각형 모양이며, 평행하고 합동인 밑면이 2개인 입체도형은 무엇인가요?",
              ans: "원기둥", placeholder: "도형 이름 입력",
              h1: "앞과 옆에서 직사각형으로 보이는 기둥 모양 도형입니다.",
              h2: "'원기둥'을 적어 보세요.",
              checkTip: "원기둥입니다.",
              wrongDiag: {},
              diagDefault: "'원기둥'을 입력해 보세요.",
              steps: [
                { q: "1계단: 이 입체도형의 이름은 무엇인가요?", ans: "원기둥" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 밑면의 반지름이 4 cm이고 높이가 10 cm인 원기둥을 '앞'에서 보았을 때 보이는 직사각형의 넓이는 몇 cm² 인가요?",
              ans: "80", accept: ["80cm²", "80 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "앞에서 본 가로는 지름(4 × 2 = 8 cm)이고 세로는 10 cm입니다.",
              h2: "8 × 10을 계산해 보세요.",
              checkTip: "8 × 10 = 80(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "80을 입력해 보세요.",
              steps: [
                { q: "1계단: 지름(8 cm) × 높이(10 cm)는 몇 cm² 인가요?", ans: "80" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 위, 앞, 옆 어느 방향에서 바라보아도 항상 똑같은 '원' 모양으로 보이는 입체도형은 무엇인가요?",
              ans: "구", placeholder: "도형 이름 입력",
              h1: "공 모양의 입체도형입니다.",
              h2: "'구'를 적어 보세요.",
              checkTip: "구입니다.",
              wrongDiag: {},
              diagDefault: "'구'를 입력해 보세요.",
              steps: [
                { q: "1계단: 어느 방향에서 보아도 원인 도형은 무엇인가요?", ans: "구" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 원기둥, 원뿔, 구 중에서 '꼭짓점의 개수'가 1개인 입체도형의 이름을 쓰세요.",
              ans: "원뿔", placeholder: "도형 이름 입력",
              h1: "뾰족한 꼭짓점이 1개 있는 도형입니다.",
              h2: "'원뿔'을 적어 보세요.",
              checkTip: "원뿔입니다.",
              wrongDiag: {},
              diagDefault: "'원뿔'을 입력해 보세요.",
              steps: [
                { q: "1계단: 꼭짓점이 1개인 입체도형은 무엇인가요?", ans: "원뿔" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면의 반지름이 4 cm이고 높이가 9 cm인 원뿔을 앞에서 본 모양(이등변삼각형)의 넓이는 몇 cm² 인가요?",
              ans: "36", accept: ["36cm²", "36 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "밑변은 지름(8 cm)이고 높이는 9 cm이므로 (8 × 9) ÷ 2를 계산합니다.",
              h2: "72 ÷ 2를 계산해 보세요.",
              checkTip: "(8 × 9) ÷ 2 = 36(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "36을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑변(8 cm) × 높이(9 cm) ÷ 2는 몇 cm² 인가요?", ans: "36" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 밑면의 반지름이 5 cm이고 높이가 12 cm인 원기둥이 꼭 맞게 들어가는 직육면체 상자의 안쪽 '가로, 세로, 높이'의 합은 최소 몇 cm인가요?",
              ans: "32", accept: ["32cm", "32 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "가로와 세로는 밑면의 지름(10 cm)과 같고, 높이는 12 cm입니다.",
              h2: "10 + 10 + 12를 계산해 보세요.",
              checkTip: "10 + 10 + 12 = 32(cm)입니다.",
              wrongDiag: {},
              diagDefault: "32를 입력해 보세요.",
              steps: [
                { q: "1계단: 10 + 10 + 12는 몇 cm인가요?", ans: "32" }
              ]
            }
          ]
        ],
        step5A: {
          q: "원기둥, 원뿔, 구를 바닥에 똑바로 놓았을 때 위에서 본 모양은 모두 원이지만, 앞에서 본 모양은 원기둥은 직사각형, 원뿔은 [ (1) 이등변삼각형 / (2) 오각형 ], 구는 원으로 각각 다르게 보입니다.",
          ans: "이등변삼각형", numAns: "1",
          hint: "💡 힌트: 원뿔의 양쪽 모선의 길이가 같아서 앞에서 보면 두 변의 길이가 같은 삼각형으로 보입니다."
        },
        step5B: {
          sentence: "원기둥과 원뿔과 구는 위에서 보면 모두 원이지만 앞과 옆에서 보면 직사각형과 삼각형과 원으로 각각 다르게 보인다."
        },
        nextUnit: "6-6"
      },
  
      "6-6": {
        title: "6-6차시: 6단원 종합 마스터 (원기둥, 원뿔, 구 완전 정복)",
        goal: "원기둥과 전개도, 원뿔, 구의 구성 요소와 성질을 종합하여 복합 응용문제를 해결합니다.",
        videoUrl: "",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">🏆 6단원 총정리: 원기둥 · 원뿔 · 구 한눈에 완벽 비교</h4>
            <table style="width:100%; border-collapse:collapse; background:#fff; font-size:0.92rem; text-align:center; margin-top:10px; border:1px solid #cbd5e1;">
              <thead>
                <tr style="background:#e0f2fe; color:#1e3a8a;">
                  <th style="padding:8px; border:1px solid #cbd5e1;">구분</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">원기둥</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">원뿔</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">구</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e293b;">밑면 모양·개수</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">합동인 원 <strong>2개</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">원 <strong>1개</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>없음 (0개)</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e293b;">꼭짓점 개수</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>0개</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>1개</strong> (원뿔의 꼭짓점)</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>0개</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;">위 / 앞·옆 모양</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">원 / <strong>직사각형</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">원 / <strong>이등변삼각형</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">원 / <strong>원</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">한 바퀴 돌려 만들기</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>직사각형</strong> 돌리기<br>(옆면 가로 = 원주)</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>직각삼각형</strong> 돌리기<br>(모선 &gt; 높이)</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>반원</strong> 돌리기<br>(중심 단면 최대)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "원기둥, 원뿔, 구 세 입체도형의 '공통점'으로 옳은 것은 어느 것인가요?",
            choices: ["1번: 모두 굽은 면이 있고 위에서 본 모양이 원이다.", "2번: 모두 평평한 밑면과 꼭짓점이 있다."],
            ans: "1",
            h1: "구에는 밑면이 없고 원기둥과 구에는 꼭짓점이 없지만, 세 도형 모두 굽은 면이 있고 위에서 보면 원입니다.",
            h2: "1번 보기를 골라 보세요."
          },
          {
            q: "원기둥의 전개도에서 옆면인 직사각형의 넓이를 구하는 올바른 식은 어느 것인가요?",
            choices: ["1번: (밑면의 둘레인 원주) × (원기둥의 높이)", "2번: (밑면의 넓이) × (원기둥의 높이)"],
            ans: "1",
            h1: "밑면과 맞닿는 옆면의 가로가 밑면의 원주이고, 세로가 원기둥의 높이입니다.",
            h2: "(밑면의 둘레인 원주) × (원기둥의 높이)를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "밑면의 반지름이 5 cm이고 높이가 10 cm인 원기둥의 전개도에서, 원주율을 3.14라고 할 때 옆면의 가로는 5 × 2 × 3.14 = 31.4 cm이므로 옆면의 넓이는 31.4 × 10 = [ ① ] cm² 입니다.",
            ans: "314",
            h1: "31.4에 10을 곱해 보세요.",
            h2: "31.4 × 10의 값을 숫자로 적어 보세요."
          },
          {
            q: "밑변이 4 cm, 높이가 3 cm, 빗변이 5 cm인 직각삼각형을 높이(3 cm)를 기준으로 하여 한 바퀴 돌려 원뿔을 만들면, 이 원뿔의 밑면의 지름은 4 × 2 = [ ① ] cm이고 모선의 길이는 5 cm입니다.",
            ans: "8",
            h1: "반지름 4 cm에 2를 곱해 지름을 구해 보세요.",
            h2: "4 × 2의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "원기둥의 전개도를 펼쳤더니 옆면인 직사각형의 가로(밑면과 맞닿는 변)가 49.6 cm이고 세로가 10 cm였습니다. 이 원기둥의 한 '밑면의 넓이'는 몇 cm² 인가요? (원주율: 3.1)",
            ans: "198.4", accept: ["198.4cm²", "198.4 cm²"], unit: "cm²", placeholder: "소수로 입력",
            h1: "1단계: 옆면의 가로(49.6 cm)를 원주율(3.1)로 나누어 밑면의 지름(16 cm)과 반지름(8 cm)을 구합니다! 2단계: 반지름 8 cm인 원의 넓이를 구합니다.",
            h2: "밑면의 반지름이 8 cm이므로 8 × 8 × 3.1을 계산해 보세요.",
            checkTip: "지름 = 49.6 ÷ 3.1 = 16 cm ➔ 반지름 = 8 cm ➔ 밑면의 넓이 = 8 × 8 × 3.1 = 198.4(cm²)입니다.",
            wrongDiag: {
              "16": "16 cm는 밑면의 지름이에요! 반지름(8 cm)을 구한 뒤 8 × 8 × 3.1로 밑면의 넓이를 구해 보세요.",
              "496": "496 cm² 는 옆면의 넓이(49.6 × 10)예요! 문제에서는 '한 밑면(원)의 넓이'를 물었습니다."
            },
            diagDefault: "밑면의 반지름(8 cm)을 구한 뒤 8 × 8 × 3.1 = 198.4를 입력해 보세요.",
            steps: [
              { q: "1계단: 옆면의 가로(49.6)를 3.1로 나누면 지름은 16 cm입니다. 반지름은 몇 cm인가요?", ans: "8" },
              { q: "2계단: 한 밑면의 넓이(8 × 8 × 3.1)는 몇 cm² 인가요?", ans: "198.4" }
            ]
          },
          {
            q: "가로가 5 cm, 세로가 8 cm인 직사각형을 세로(8 cm)를 기준으로 하여 한 바퀴 돌려 만든 원기둥이 있습니다. 이 원기둥을 '위에서 본 모양의 넓이(㉠)'와 '앞에서 본 모양의 넓이(㉡)'를 순서대로 쓰세요 (쉼표로 구분하여 입력, 원주율: 3).",
            ans: "75, 80", accept: ["75,80", "75 80"], placeholder: "위에서 본 넓이, 앞에서 본 넓이 입력",
            h1: "위에서 본 모양은 '반지름 5 cm인 원(5 × 5 × 3)'이고, 앞에서 본 모양은 '가로가 지름(10 cm), 세로가 높이(8 cm)인 직사각형(10 × 8)'입니다!",
            h2: "위에서 본 넓이(75)와 앞에서 본 넓이(80)를 '75, 80'으로 적어 보세요.",
            checkTip: "위에서 본 원의 넓이 = 5 × 5 × 3 = 75(cm²), 앞에서 본 직사각형의 넓이 = 10 × 8 = 80(cm²)입니다.",
            wrongDiag: {
              "75, 40": "앞에서 본 직사각형의 가로는 반지름(5 cm)이 아니라 지름(10 cm)이므로 10 × 8 = 80 cm² 입니다!"
            },
            diagDefault: "'75, 80'을 입력해 보세요.",
            steps: [
              { q: "1계단: 위에서 본 모양(반지름 5 cm인 원)의 넓이(5 × 5 × 3)는 몇 cm² 인가요?", ans: "75" },
              { q: "2계단: 앞에서 본 직사각형(가로 10 cm × 세로 8 cm)의 넓이는 80 cm² 입니다. 순서대로 쓰면 무엇인가요?", ans: "75, 80" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 밑면의 반지름이 4 cm이고 높이가 6 cm인 원기둥의 전개도에서, '두 밑면의 넓이의 합'과 '옆면의 넓이'를 모두 더한 전개도 전체의 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "240", accept: ["240cm²", "240 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면의 넓이의 합은 (4 × 4 × 3) × 2이고, 옆면의 넓이는 (지름 8 × 3) × 6입니다.",
              h2: "두 밑면 넓이 합(48 × 2 = 96 cm²)과 옆면 넓이(24 × 6 = 144 cm²)를 더해 보세요.",
              checkTip: "두 밑면 넓이 합(96 cm²) + 옆면 넓이(144 cm²) = 240(cm²)입니다.",
              wrongDiag: {
                "192": "밑면이 2개이므로 한 밑면 넓이(48)가 아니라 두 밑면 넓이(96)를 옆면 넓이(144)에 더해야 합니다!"
              },
              diagDefault: "96 + 144 = 240을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 밑면의 넓이(48 cm²)에 2를 곱한 두 밑면의 넓이의 합은 몇 cm² 인가요?", ans: "96" },
                { q: "2계단: 옆면의 넓이는 (8 × 3) × 6 = 144 cm² 입니다. 96 + 144는 몇 cm² 인가요?", ans: "240" }
              ]
            },
            {
              q: "[유형 1] 밑면의 지름이 12 cm, 높이가 8 cm, 모선의 길이가 10 cm인 원뿔이 있습니다. 이 원뿔을 '위에서 본 모양의 둘레(원주)'와 '앞에서 본 모양(이등변삼각형)의 둘레'의 합은 모두 몇 cm인가요? (원주율: 3)",
              ans: "68", accept: ["68cm", "68 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "위에서 본 원의 둘레는 (지름 12 × 3)이고, 앞에서 본 이등변삼각형의 둘레는 (지름 12 + 모선 10 + 모선 10)입니다!",
              h2: "위에서 본 둘레(36 cm)와 앞에서 본 둘레(12 + 10 + 10 = 32 cm)를 더해 보세요.",
              checkTip: "위에서 본 원주(36 cm) + 앞에서 본 삼각형 둘레(32 cm) = 68(cm)입니다.",
              wrongDiag: {
                "36": "36 cm는 위에서 본 원주만 구한 값이에요! 앞에서 본 이등변삼각형의 둘레(32 cm)를 더해 보세요."
              },
              diagDefault: "36 + 32 = 68을 입력해 보세요.",
              steps: [
                { q: "1계단: 위에서 본 원의 둘레(12 × 3)는 몇 cm인가요?", ans: "36" },
                { q: "2계단: 앞에서 본 이등변삼각형의 둘레(12 + 10 + 10)는 몇 cm인가요?", ans: "32" },
                { q: "3계단: 두 둘레를 더하면(36 + 32) 몇 cm인가요?", ans: "68" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 민호는 반지름이 6 cm인 반원 모양의 종이를 지름을 기준으로 하여 한 바퀴 돌려 구를 만들었습니다. 민호는 이 구를 앞에서 보았을 때 보이는 원의 넓이를 구할 때, 반지름이 2배인 12 cm가 된다고 착각하여 '12 × 12 × 3 = 432 cm²'라고 잘못 구했습니다. 바르게 구한 앞에서 본 원의 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "108", accept: ["108cm²", "108 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "반지름이 6 cm인 반원을 돌리면 구의 반지름은 그대로 '6 cm'(지름이 12 cm)입니다!",
              h2: "반지름이 6 cm인 원의 넓이(6 × 6 × 3)를 계산해 보세요.",
              checkTip: "구의 반지름은 6 cm이므로 앞에서 본 원의 넓이는 6 × 6 × 3 = 108(cm²)입니다.",
              wrongDiag: {
                "432": "432는 지름(12 cm)을 반지름으로 착각해 잘못 구한 값이에요! 반지름은 6 cm이므로 6 × 6 × 3 = 108 cm² 입니다."
              },
              diagDefault: "6 × 6 × 3 = 108을 입력해 보세요.",
              steps: [
                { q: "1계단: 만들어진 구의 반지름은 몇 cm인가요?", ans: "6" },
                { q: "2계단: 앞에서 본 원의 넓이(6 × 6 × 3)는 몇 cm² 인가요?", ans: "108" }
              ]
            },
            {
              q: "[유형 2] 밑면의 반지름이 5 cm이고 높이가 8 cm인 원기둥과, 밑면의 반지름이 5 cm이고 높이가 8 cm인 원뿔이 있습니다. 두 입체도형을 각각 '앞에서 본 모양의 넓이'를 비교할 때, 원기둥을 앞에서 본 넓이는 원뿔을 앞에서 본 넓이의 몇 배인가요?",
              ans: "2", accept: ["2배"], unit: "배", placeholder: "숫자만 입력",
              h1: "원기둥을 앞에서 본 모양은 직사각형(지름 10 × 높이 8)이고, 원뿔을 앞에서 본 모양은 이등변삼각형(지름 10 × 높이 8 ÷ 2)입니다!",
              h2: "직사각형의 넓이(80 cm²)는 밑변과 높이가 같은 삼각형의 넓이(40 cm²)의 몇 배인지 적어 보세요.",
              checkTip: "직사각형 넓이(80 cm²) ÷ 삼각형 넓이(40 cm²) = 2(배)입니다.",
              wrongDiag: {},
              diagDefault: "80 ÷ 40 = 2를 입력해 보세요.",
              steps: [
                { q: "1계단: 원기둥을 앞에서 본 직사각형의 넓이(10 × 8)는 몇 cm² 인가요?", ans: "80" },
                { q: "2계단: 원뿔을 앞에서 본 삼각형의 넓이는 40 cm² 입니다. 80은 40의 몇 배인가요?", ans: "2" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 그림과 같이 밑면의 반지름이 5 cm이고 높이가 12 cm인 원기둥 모양의 선물 상자를 리본으로 십자(+) 모양이 되도록 한 번씩 둘러 묶었습니다. 매듭을 묶는 데 30 cm를 더 사용했다면, 사용한 리본의 전체 길이는 몇 cm인가요? (주의: 위아래로 한 바퀴 감을 때는 지름 2개와 높이 2개를 지나갑니다!)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 120" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <path d="M 65 32 L 65 92 A 45 14 0 0 0 155 92 L 155 32 Z" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
                      <ellipse cx="110" cy="32" rx="45" ry="14" fill="#fde047" stroke="#d97706" stroke-width="1.8"/>
                      <!-- 십자 리본 -->
                      <line x1="65" y1="32" x2="155" y2="32" stroke="#dc2626" stroke-width="2.5"/>
                      <ellipse cx="110" cy="32" rx="14" ry="14" fill="none" stroke="#dc2626" stroke-width="2"/>
                      <line x1="110" y1="46" x2="110" y2="106" stroke="#dc2626" stroke-width="2.5"/>
                      <line x1="65" y1="32" x2="65" y2="92" stroke="#dc2626" stroke-width="2.5"/>
                      <line x1="155" y1="32" x2="155" y2="92" stroke="#dc2626" stroke-width="2.5"/>
                      <text x="162" y="66" fill="#1e3a8a" font-size="10.5" font-weight="bold">높이 12cm</text>
                      <text x="80" y="116" fill="#dc2626" font-size="10.5" font-weight="bold">반지름 5cm (지름 10cm)</text>
                    </svg>
                  </div>`,
              ans: "118", accept: ["118cm", "118 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "십자(+)로 두 번 감았으므로, 윗면에 지름(10 cm)이 2줄, 아랫면에 지름(10 cm)이 2줄(총 지름 4줄), 그리고 옆면에 높이(12 cm)가 4줄 지나갑니다!",
              h2: "(지름 10 cm × 4) + (높이 12 cm × 4) + (매듭 30 cm)를 계산해 보세요.",
              checkTip: "(지름 10 × 4 = 40 cm) + (높이 12 × 4 = 48 cm) + (매듭 30 cm) = 118(cm)입니다.",
              wrongDiag: {
                "88": "88 cm는 상자를 감싼 리본 길이(40 + 48)만 구한 것이에요! 여기에 매듭 길이 30 cm를 더해 118 cm가 되어야 합니다.",
                "74": "십자(+)로 감으면 지름이 4번(40 cm), 높이가 4번(48 cm) 들어가고 매듭 30 cm를 더해 118 cm입니다!"
              },
              diagDefault: "40 + 48 + 30 = 118을 입력해 보세요.",
              steps: [
                { q: "1계단: 위아래 밑면을 십자로 지나가는 지름 4줄의 길이(10 × 4)는 몇 cm인가요?", ans: "40" },
                { q: "2계단: 옆면을 지나가는 높이 4줄의 길이(12 × 4)는 몇 cm인가요?", ans: "48" },
                { q: "3계단: 매듭 30 cm까지 모두 더하면(40 + 48 + 30) 전체 리본은 몇 cm인가요?", ans: "118" }
              ]
            },
            {
              q: "[유형 3] 원기둥 모양의 통 안에 반지름이 5 cm인 구 모양의 공 2개가 위아래로 한 줄로 쌓여 서로 맞닿아 있습니다. 통의 안쪽 지름은 공의 지름과 같고, 아래 공과 위 공은 각각 통의 바닥과 뚜껑에 닿습니다. 이 원기둥 통의 전개도에서 직사각형 모양인 '옆면의 넓이'는 몇 cm² 인가요? (원주율: 3.14)",
              ans: "628", accept: ["628cm²", "628 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "공 1개의 지름이 5 × 2 = 10 cm이므로: ① 원기둥 밑면의 지름은 10 cm이고, ② 공 2개가 들어간 원기둥의 높이는 10 × 2 = 20 cm입니다!",
              h2: "옆면의 가로(밑면 원주 = 10 × 3.14 = 31.4 cm)에 옆면의 세로(높이 20 cm)를 곱해 보세요.",
              checkTip: "밑면 지름 = 10 cm(가로 = 31.4 cm), 높이 = 20 cm ➔ 옆면의 넓이 = 31.4 × 20 = 628(cm²)입니다.",
              wrongDiag: {
                "314": "314는 공 1개 높이(10 cm)만 곱한 값이에요! 공 2개가 들어 있으므로 높이는 20 cm여서 31.4 × 20 = 628 cm² 입니다."
              },
              diagDefault: "옆면의 가로(31.4 cm) × 높이(20 cm) = 628을 입력해 보세요.",
              steps: [
                { q: "1계단: 반지름 5 cm인 공이 꼭 맞게 들어가므로 원기둥 밑면의 둘레(10 × 3.14)는 몇 cm인가요?", ans: "31.4" },
                { q: "2계단: 지름 10 cm인 공 2개가 쌓인 원기둥의 높이는 몇 cm인가요?", ans: "20" },
                { q: "3계단: 옆면의 넓이(31.4 × 20)는 몇 cm² 인가요?", ans: "628" }
              ]
            }
          ]
        ],
        step4Intro: "원기둥의 전개도(옆면 가로=원주), 원뿔의 모선과 높이, 구의 단면과 방향별 모양까지 모두 다루었습니다. 마지막 쌍둥이 문제로 확인해 보세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 밑면의 반지름이 3 cm이고 높이가 4 cm인 원기둥의 전개도에서, '두 밑면의 넓이의 합'과 '옆면의 넓이'를 모두 더한 전체 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "126", accept: ["126cm²", "126 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면 넓이 합(3 × 3 × 3 × 2 = 54)과 옆면 넓이(6 × 3 × 4 = 72)를 더합니다.",
              h2: "54 + 72를 계산해 보세요.",
              checkTip: "54 + 72 = 126(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "126을 입력해 보세요.",
              steps: [
                { q: "1계단: 두 밑면 넓이의 합은 몇 cm² 인가요?", ans: "54" },
                { q: "2계단: 옆면 넓이(72)를 더하면 54 + 72 = 몇 cm² 인가요?", ans: "126" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 밑면의 지름이 6 cm, 높이가 4 cm, 모선의 길이가 5 cm인 원뿔이 있습니다. 이 원뿔을 '위에서 본 모양의 둘레(원주)'와 '앞에서 본 모양(이등변삼각형)의 둘레'의 합은 모두 몇 cm인가요? (원주율: 3)",
              ans: "34", accept: ["34cm", "34 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "위에서 본 원주(6 × 3 = 18 cm)와 앞에서 본 삼각형 둘레(6 + 5 + 5 = 16 cm)를 더합니다.",
              h2: "18 + 16을 계산해 보세요.",
              checkTip: "18 + 16 = 34(cm)입니다.",
              wrongDiag: {},
              diagDefault: "34를 입력해 보세요.",
              steps: [
                { q: "1계단: 위에서 본 원주는 18 cm이고 앞에서 본 둘레는 16 cm입니다. 합은 몇 cm인가요?", ans: "34" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 반지름이 4 cm인 반원 모양의 종이를 지름을 기준으로 하여 한 바퀴 돌려 만든 구를 앞에서 보았을 때 보이는 원의 넓이는 몇 cm² 인가요? (원주율: 3)",
              ans: "48", accept: ["48cm²", "48 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "반지름이 4 cm인 원의 넓이(4 × 4 × 3)를 구합니다.",
              h2: "16 × 3을 계산해 보세요.",
              checkTip: "4 × 4 × 3 = 48(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "48을 입력해 보세요.",
              steps: [
                { q: "1계단: 4 × 4 × 3은 몇 cm² 인가요?", ans: "48" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 밑면의 지름이 8 cm이고 높이가 6 cm인 원기둥을 앞에서 본 넓이(8 × 6)는, 밑면의 지름이 8 cm이고 높이가 6 cm인 원뿔을 앞에서 본 넓이(8 × 6 ÷ 2)보다 몇 cm² 더 넓나요?",
              ans: "24", accept: ["24cm²", "24 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "원기둥은 48 cm² 이고, 원뿔은 24 cm² 입니다.",
              h2: "48 - 24를 계산해 보세요.",
              checkTip: "48 - 24 = 24(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "24를 입력해 보세요.",
              steps: [
                { q: "1계단: 48 - 24는 몇 cm² 인가요?", ans: "24" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면의 지름이 8 cm이고 높이가 10 cm인 원기둥 모양의 상자를 리본으로 십자(+) 모양이 되도록 한 번씩 둘러 묶었습니다(지름 4줄 + 높이 4줄). 매듭을 묶는 데 20 cm를 더 사용했다면, 사용한 리본의 전체 길이는 몇 cm인가요?",
              ans: "92", accept: ["92cm", "92 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "(지름 8 × 4 = 32 cm) + (높이 10 × 4 = 40 cm) + (매듭 20 cm)를 계산합니다.",
              h2: "32 + 40 + 20을 계산해 보세요.",
              checkTip: "32 + 40 + 20 = 92(cm)입니다.",
              wrongDiag: {},
              diagDefault: "92를 입력해 보세요.",
              steps: [
                { q: "1계단: 32 + 40 + 20은 몇 cm인가요?", ans: "92" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 원기둥 모양의 통 안에 반지름이 3 cm인 구 모양의 공 2개가 위아래로 한 줄로 쌓여 서로 맞닿아 있습니다. 통의 안쪽 지름은 공의 지름과 같고, 아래 공과 위 공은 각각 통의 바닥과 뚜껑에 닿을 때, 이 원기둥 통의 전개도에서 '옆면의 넓이'는 몇 cm² 인가요? (원주율: 3)",
              ans: "216", accept: ["216cm²", "216 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "공 1개의 지름이 6 cm이므로 밑면의 원주는 6 × 3 = 18 cm이고, 공 2개가 들어간 높이는 6 × 2 = 12 cm입니다.",
              h2: "18 × 12를 계산해 보세요.",
              checkTip: "옆면의 가로(18 cm) × 높이(12 cm) = 216(cm²)입니다.",
              wrongDiag: {},
              diagDefault: "18 × 12 = 216을 입력해 보세요.",
              steps: [
                { q: "1계단: 옆면의 가로는 6 × 3 = 몇 cm인가요?", ans: "18" },
                { q: "2계단: 높이는 6 × 2 = 12 cm이므로 옆면의 넓이(18 × 12)는 몇 cm² 인가요?", ans: "216" }
              ]
            }
          ]
        ],
        step5A: {
          q: "원기둥의 전개도에서 옆면의 가로는 밑면의 둘레와 같으며, 원뿔에서 꼭짓점과 밑면인 원의 둘레의 한 점을 이은 선분은 [ (1) 모선 / (2) 높이 ] 이고, 구는 어느 방향에서 보아도 원 모양입니다.",
          ans: "모선", numAns: "1",
          hint: "💡 힌트: 원뿔의 옆면을 이루는 비스듬한 선분의 이름입니다."
        },
        step5B: {
          sentence: "원기둥 옆면의 가로는 밑면의 둘레와 같고 원뿔의 옆면 선분은 모선이며 구는 어느 방향에서 보아도 원이다."
        },
        nextUnit: null
      }
    }
  };