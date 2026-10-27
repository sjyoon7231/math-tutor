MATH_DB.lessons["6-1-6"] = {
    unitTitle: "6학년 1학기 6단원: 직육면체의 부피와 겉넓이",
    lessonOrder: ["6-1", "6-2", "6-3", "6-4", "6-5", "6-6"],
    items: {
      "6-1": {
        title: "6-1차시: 직육면체의 부피를 비교해 볼까요 / 부피의 단위(cm³)를 알아볼까요",
        goal: "부피의 뜻을 알고, 한 모서리의 길이가 1 cm인 정육면체(1 cm³)의 개수를 세어 직육면체의 부피를 구합니다.",
        videoUrl: "https://youtube.com/shorts/6uE3X_084Qo?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 부피의 단위 1 cm³와 쌓기나무 세기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
                <polygon points="35,45 75,45 90,30 50,30" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
                <polygon points="35,45 75,45 75,85 35,85" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                <polygon points="75,45 90,30 90,70 75,85" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.8"/>
                <text x="42" y="102" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
                <text x="82" y="88" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
                <text x="95" y="55" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
                <text x="15" y="120" fill="#1d4ed8" font-size="11" font-weight="bold">부피 = 1 cm³ (1 세제곱센티미터)</text>
                <rect x="165" y="15" width="145" height="95" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
                <text x="175" y="38" fill="#0f766e" font-size="12" font-weight="bold">쌓기나무로 부피 구하기</text>
                <text x="175" y="60" fill="#334155" font-size="11">● 1층에 6개씩 2층이면</text>
                <text x="175" y="78" fill="#334155" font-size="11">👉 전체 6 × 2 = 12개</text>
                <text x="175" y="98" fill="#dc2626" font-size="12" font-weight="bold">👉 부피 = 12 cm³!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>부피의 단위:</strong> 한 모서리의 길이가 <strong>1 cm</strong>인 정육면체의 부피를 <strong>1 cm³</strong>라 쓰고, <strong>1 세제곱센티미터</strong>라고 읽습니다.</li>
              <li><strong>직육면체의 부피:</strong> 부피가 1 cm³인 쌓기나무가 빈틈없이 <strong>□개</strong> 들어가면 그 직육면체의 부피는 <strong>□ cm³</strong>입니다.</li>
            </ul>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 기호 '1 cm³'로 쓰고 어떻게 읽나요?",
            choices: ["1번: 1 제곱센티미터", "2번: 1 세제곱센티미터"],
            ans: "2",
            h1: "cm 오른쪽 위에 작은 숫자 '3'이 적혀 있습니다!",
            h2: "숫자 3을 뜻하는 '세제곱'이 들어간 보기를 골라 보세요."
          },
          {
            q: "부피가 1 cm³인 쌓기나무 15개를 빈틈없이 쌓아 만든 직육면체의 부피는 몇 cm³인가요?",
            choices: ["1번: 15 cm³", "2번: 45 cm³"],
            ans: "1",
            h1: "1 cm³가 15개 모이면 부피도 그대로 15배가 됩니다.",
            h2: "쌓기나무의 개수와 같은 숫자를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 1 cm³라 쓰고, 1 [ ① ]라고 읽습니다. (일곱 글자로 입력)",
            ans: "세제곱센티미터",
            h1: "넓이 단위(cm²)는 제곱센티미터이고, 부피 단위(cm³)는 앞에 '세'가 붙습니다.",
            h2: "핵심 개념 카드에서 1 cm³ 옆의 괄호 안에 적힌 한글 일곱 글자를 적어 보세요."
          },
          {
            q: "부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 2개씩 놓으면 1층에 8개가 놓입니다. 이를 똑같이 3층으로 쌓으면 쌓기나무는 모두 8 × 3 = 24개이므로 직육면체의 부피는 [ ① ] cm³입니다.",
            ans: "24",
            h1: "1 cm³ 쌓기나무의 전체 개수가 곧 부피(cm³)의 숫자입니다.",
            h2: "8 × 3 으로 구한 쌓기나무의 개수를 숫자로 입력해 보세요."
          }
        ],
        step2_2: [
          {
            q: `부피가 1 cm³인 쌓기나무로 다음과 같은 직육면체를 만들었습니다. 가로에 3개, 세로에 2개씩 2층으로 쌓았을 때, 이 직육면체의 부피는 몇 cm³인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="50,45 140,45 170,25 80,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="50,45 140,45 140,95 50,95" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="140,45 170,25 170,75 140,95" fill="#60a5fa" stroke="#1e293b" stroke-width="1.8"/>
                    <line x1="80" y1="45" x2="80" y2="95" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="110" y1="45" x2="110" y2="95" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="50" y1="70" x2="140" y2="70" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="80" y1="45" x2="110" y2="25" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="110" y1="45" x2="140" y2="25" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="65" y1="35" x2="155" y2="35" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="155" y1="35" x2="155" y2="85" stroke="#1e293b" stroke-width="1.2"/>
                    <line x1="140" y1="70" x2="170" y2="50" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="65" y="112" fill="#1e293b" font-size="11" font-weight="bold">가로 3개, 세로 2개, 2층</text>
                  </svg>
                </div>`,
            ans: "12", accept: ["12cm³", "12 cm³", "12개"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1층에 (가로 3개 × 세로 2개 = 6개)가 놓여 있고, 이것이 2층으로 쌓여 있습니다!",
            h2: "1층의 개수(6개)에 층수(2층)를 곱해 보세요(6 × 2).",
            checkTip: "1층에 3 × 2 = 6개씩 2층이므로, 전체 쌓기나무는 6 × 2 = 12개이고 부피는 12 cm³입니다.",
            wrongDiag: {
              "6": "앞면(또는 1층)에 보이는 6개만 세었어요! 뒤쪽 줄까지 합쳐 1층에 6개씩 2층이 있으므로 2를 곱해야 합니다.",
              "7": "3 + 2 + 2 로 더하면 안 돼요! 가로 3개씩 2줄(3×2=6개)이 2층 있으므로 곱셈으로 구해야 합니다."
            },
            diagDefault: "1층의 개수(3 × 2 = 6개)에 2층을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 1층에는 가로 3개씩 2줄이므로 3 × 2 = 몇 개가 있나요?", ans: "6" },
              { q: "2계단: 6개씩 2층이므로 전체 부피는 6 × 2 = 몇 cm³인가요?", ans: "12" }
            ]
          },
          {
            q: "부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 3개씩 1층으로만 늘어놓아 만든 직육면체의 부피는 몇 cm³인가요?",
            ans: "15", accept: ["15cm³", "15 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "가로로 5개씩 3줄이 놓여 있으므로 5 × 3 을 계산하면 됩니다.",
            h2: "5에 3을 곱한 값을 적어 보세요.",
            checkTip: "5 × 3 × 1 = 15개이므로 부피는 15 cm³입니다.",
            wrongDiag: { "8": "5와 3을 더했어요! 5개씩 3줄이므로 5 × 3 을 계산해야 합니다." },
            diagDefault: "5에 3을 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 5개씩 3줄이므로 쌓기나무는 모두 5 × 3 = 몇 개인가요?", ans: "15" } ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 3개씩 2층으로 빈틈없이 쌓아 직육면체를 만들었습니다. 이 직육면체의 부피는 몇 cm³인가요?",
              ans: "24", accept: ["24cm³", "24 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "먼저 1층에 놓인 쌓기나무 수(4 × 3)를 구한 뒤, 2층을 곱해 보세요.",
              h2: "1층에 12개가 놓여 있고 2층이므로 12 × 2 를 계산해 보세요.",
              checkTip: "(4 × 3) × 2 = 12 × 2 = 24개이므로 24 cm³입니다.",
              wrongDiag: {
                "12": "1층의 개수(12개)만 구했어요! 2층으로 쌓았으므로 2를 곱해야 합니다.",
                "9": "4 + 3 + 2 를 계산했어요! 덧셈이 아니라 곱셈(4 × 3 × 2)으로 구해야 합니다."
              },
              diagDefault: "4 × 3 × 2 를 계산한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에 놓인 쌓기나무는 4 × 3 = 몇 개인가요?", ans: "12" },
                { q: "2계단: 2층까지 합하면 전체 부피는 12 × 2 = 몇 cm³인가요?", ans: "24" }
              ]
            },
            {
              q: "[유형 1] 부피가 1 cm³인 쌓기나무를 가로로 3개, 세로로 3개씩 3층으로 쌓아 정육면체를 만들었습니다. 이 정육면체의 부피는 몇 cm³인가요?",
              ans: "27", accept: ["27cm³", "27 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1층에 3 × 3 = 9개가 놓여 있고, 그것이 3층으로 쌓여 있습니다.",
              h2: "9 × 3 을 계산해 보세요.",
              checkTip: "3 × 3 × 3 = 27개이므로 부피는 27 cm³입니다.",
              wrongDiag: { "9": "3 × 3 만 계산했거나 3 + 3 + 3 을 계산했어요! 1층에 9개씩 3층이므로 9 × 3 = 27 cm³입니다." },
              diagDefault: "3 × 3 × 3 을 계산한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에 놓인 쌓기나무는 3 × 3 = 몇 개인가요?", ans: "9" },
                { q: "2계단: 3층까지 모두 합하면 9 × 3 = 몇 cm³인가요?", ans: "27" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 지훈이는 부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 2개씩 3층으로 쌓은 직육면체를 보고, 앞면에 보이는 15개(가로 5개 × 3층)만 세어 부피를 15 cm³라고 잘못 말했습니다. 뒤쪽 줄까지 모두 포함한 올바른 부피는 몇 cm³인가요?",
              ans: "30", accept: ["30cm³", "30 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "세로가 2개이므로 앞줄(15개) 뒤에 똑같은 뒷줄(15개)이 한 줄 더 숨어 있습니다!",
              h2: "1층에 5 × 2 = 10개씩 3층이므로 10 × 3 을 계산해 보세요.",
              checkTip: "(5 × 2) × 3 = 30개이므로 올바른 부피는 30 cm³입니다.",
              wrongDiag: { "15": "15 cm³는 지훈이가 뒷줄을 빼먹고 잘못 구한 값이에요! 세로가 2줄이므로 15 × 2 = 30 cm³가 되어야 합니다." },
              diagDefault: "5 × 2 × 3 을 계산한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에는 가로 5개씩 세로 2줄이므로 5 × 2 = 몇 개가 있나요?", ans: "10" },
                { q: "2계단: 10개씩 3층이므로 전체 부피는 몇 cm³인가요?", ans: "30" }
              ]
            },
            {
              q: "[유형 2] 한 층에 부피가 1 cm³인 쌓기나무를 8개씩 똑같이 쌓아 올렸더니 전체 부피가 32 cm³가 되었습니다. 쌓기나무를 모두 몇 층으로 쌓았나요?",
              ans: "4", accept: ["4층"], unit: "층", placeholder: "숫자만 입력",
              h1: "전체 부피가 32 cm³이므로 사용된 쌓기나무는 모두 32개입니다.",
              h2: "한 층에 8개씩이므로, 전체 32개를 8로 나누어 보세요(32 ÷ 8).",
              checkTip: "32 ÷ 8 = 4이므로 4층으로 쌓았습니다.",
              wrongDiag: { "24": "뺄셈(32-8=24)이 아니라 나눗셈(32 ÷ 8)으로 층수를 구해야 합니다!" },
              diagDefault: "32를 8로 나눈 값을 입력해 보세요.",
              steps: [ { q: "1계단: 전체 32개를 한 층에 8개씩 놓았으므로 32 ÷ 8 = 몇 층인가요?", ans: "4" } ]
            }
          ],
          [
            {
              q: "[유형 3] 부피가 1 cm³인 쌓기나무를 사용하여, (가) 상자 모양은 가로 4개, 세로 3개, 높이 2층으로 쌓았고, (나) 상자 모양은 가로 3개, 세로 3개, 높이 3층으로 쌓았습니다. 두 상자 모양 중 부피가 더 큰 것의 기호를 쓰세요.",
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "(가)의 부피(4 × 3 × 2)와 (나)의 부피(3 × 3 × 3)를 각각 구해 비교해 보세요.",
              h2: "(가)는 24 cm³이고, (나)는 27 cm³입니다. 더 큰 기호를 골라 보세요.",
              checkTip: "(가) = 24 cm³, (나) = 27 cm³ 이므로 (나)의 부피가 더 큽니다.",
              wrongDiag: { "가": "(가)는 4×3×2 = 24 cm³이고, (나)는 3×3×3 = 27 cm³이므로 (나)가 3 cm³ 더 큽니다!" },
              diagDefault: "24 cm³인 (가)와 27 cm³인 (나) 중 더 큰 기호를 적어 보세요.",
              steps: [
                { q: "1계단: (가)의 부피는 4 × 3 × 2 = 몇 cm³인가요?", ans: "24" },
                { q: "2계단: (나)의 부피는 27 cm³입니다. 더 큰 상자의 기호는 무엇인가요?", ans: "나" }
              ]
            },
            {
              q: "[유형 3] 안쪽 공간의 부피가 40 cm³이고, 부피가 1 cm³인 쌓기나무로 빈틈없이 채울 수 있는 직육면체 상자가 있습니다. 이미 상자 안에 쌓기나무 26개를 넣었다면, 상자를 가득 채우기 위해 더 넣어야 하는 쌓기나무는 몇 개인가요?",
              ans: "14", accept: ["14개"], unit: "개", placeholder: "숫자만 입력",
              h1: "안쪽 공간의 부피가 40 cm³인 상자에는 1 cm³ 쌓기나무가 모두 40개 들어갑니다.",
              h2: "전체 40개에서 이미 넣은 26개를 빼 보세요(40 - 26).",
              checkTip: "전체 40개 중 26개를 넣었으므로 40 - 26 = 14개를 더 넣어야 합니다.",
              wrongDiag: {},
              diagDefault: "40에서 26을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 안쪽 공간의 부피가 40 cm³인 상자에 들어가는 전체 쌓기나무는 몇 개인가요?", ans: "40" },
                { q: "2계단: 이미 26개를 넣었으므로 더 넣어야 할 개수는 40 - 26 = 몇 개인가요?", ans: "14" }
              ]
            }
          ]
        ],
        step4Intro: "1층에 놓인 개수(가로 × 세로)에 층수(높이)를 곱하면 보이지 않는 곳의 쌓기나무까지 단 한 개도 빠뜨리지 않고 정확히 셀 수 있어요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 2개씩 2층으로 쌓아 만든 직육면체의 부피는 몇 cm³인가요?",
              ans: "20", accept: ["20cm³", "20 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1층에 5 × 2 = 10개씩 2층입니다.", h2: "10 × 2 를 계산해 보세요.",
              checkTip: "5 × 2 × 2 = 20 cm³입니다.", wrongDiag: {}, diagDefault: "10에 2를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 5 × 2 × 2 는 얼마인가요?", ans: "20" } ]
            },
            {
              q: "[쌍둥이 1-2] 부피가 1 cm³인 쌓기나무를 가로로 2개, 세로로 2개씩 2층으로 쌓아 만든 정육면체의 부피는 몇 cm³인가요?",
              ans: "8", accept: ["8cm³", "8 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1층에 2 × 2 = 4개씩 2층입니다.", h2: "4 × 2 를 계산해 보세요.",
              checkTip: "2 × 2 × 2 = 8 cm³입니다.", wrongDiag: { "6": "2 + 2 + 2 가 아니라 2 × 2 × 2 = 8 cm³입니다!" },
              diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
              steps: [ { q: "1계단: 2 × 2 × 2 는 얼마인가요?", ans: "8" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 2개씩 4층으로 쌓은 직육면체의 올바른 부피는 몇 cm³인가요?",
              ans: "32", accept: ["32cm³", "32 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1층에 4 × 2 = 8개씩 4층입니다.", h2: "8 × 4 를 계산해 보세요.",
              checkTip: "4 × 2 × 4 = 32 cm³입니다.", wrongDiag: { "16": "앞줄(4×4=16개)만 세었어요! 세로가 2줄이므로 2를 곱해 32 cm³가 됩니다." },
              diagDefault: "8에 4를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 1층(8개) × 4층 = 몇 cm³인가요?", ans: "32" } ]
            },
            {
              q: "[쌍둥이 2-2] 한 층에 부피가 1 cm³인 쌓기나무를 9개씩 똑같이 쌓아 올렸더니 전체 부피가 45 cm³가 되었습니다. 모두 몇 층으로 쌓았나요?",
              ans: "5", accept: ["5층"], unit: "층", placeholder: "숫자만 입력",
              h1: "전체 45개를 한 층의 개수인 9개로 나누어 보세요.", h2: "45 ÷ 9 를 계산해 보세요.",
              checkTip: "45 ÷ 9 = 5층입니다.", wrongDiag: {}, diagDefault: "45를 9로 나눈 값을 입력해 보세요.",
              steps: [ { q: "1계단: 45 ÷ 9 는 몇 층인가요?", ans: "5" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 1 cm³ 쌓기나무로 만든 (가) 직육면체는 가로 5개, 세로 3개, 2층이고, (나) 직육면체는 가로 4개, 세로 4개, 2층입니다. 부피가 더 큰 것의 기호를 쓰세요.",
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "(가)는 5 × 3 × 2 = 30 cm³이고, (나)는 4 × 4 × 2 = 32 cm³입니다.", h2: "30 cm³와 32 cm³ 중 더 큰 기호를 골라 보세요.",
              checkTip: "(가)=30 cm³, (나)=32 cm³ 이므로 (나)가 더 큽니다.", wrongDiag: {}, diagDefault: "부피가 32 cm³인 기호를 적어 보세요.",
              steps: [ { q: "1계단: 30 cm³인 (가)와 32 cm³인 (나) 중 더 큰 것은 어느 것인가요?", ans: "나" } ]
            },
            {
              q: "[쌍둥이 3-2] 안쪽 공간의 부피가 50 cm³이고, 1 cm³ 쌓기나무로 빈틈없이 채울 수 있는 상자 안에 쌓기나무를 32개 넣었습니다. 상자를 가득 채우려면 쌓기나무를 몇 개 더 넣어야 하나요?",
              ans: "18", accept: ["18개"], unit: "개", placeholder: "숫자만 입력",
              h1: "전체 50개에서 32개를 빼 보세요.", h2: "50 - 32 를 계산해 보세요.",
              checkTip: "50 - 32 = 18개입니다.", wrongDiag: {}, diagDefault: "50에서 32를 뺀 값을 입력해 보세요.",
              steps: [ { q: "1계단: 50 - 32 는 몇 개인가요?", ans: "18" } ]
            }
          ]
        ],
        step5A: {
          q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 [ (1) 1 cm² / (2) 1 cm³ ] 라 쓰고, 1 세제곱센티미터라고 읽습니다.",
          ans: "1 cm³", numAns: "2",
          hint: "💡 힌트: 가로, 세로, 높이 세 번 곱하는 부피 단위이므로 오른쪽 위에 작은 3이 붙습니다."
        },
        step5B: { sentence: "한 모서리가 일 센티미터인 정육면체의 부피를 일 세제곱센티미터라 하고 쌓기나무 개수로 부피를 구한다." },
        nextUnit: "6-2"
      },
  
      "6-2": {
        title: "6-2차시: 직육면체와 정육면체의 부피 구하는 방법을 알아볼까요",
        goal: "직육면체와 정육면체의 부피 구하는 공식을 이해하고 부피를 구합니다.",
        videoUrl: "https://youtube.com/shorts/J6P9UZwfaOc?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 직육면체와 정육면체의 부피 공식</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
                <polygon points="20,45 95,45 115,25 40,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                <polygon points="20,45 95,45 95,95 20,95" fill="#bfdbfe" fill-opacity="0.5" stroke="#1e293b" stroke-width="1.8"/>
                <polygon points="95,45 115,25 115,75 95,95" fill="#93c5fd" fill-opacity="0.6" stroke="#1e293b" stroke-width="1.8"/>
                <line x1="40" y1="25" x2="40" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="20" y1="95" x2="40" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="40" y1="75" x2="115" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                <text x="42" y="112" fill="#1d4ed8" font-size="11" font-weight="bold">가로</text>
                <text x="108" y="92" fill="#15803d" font-size="11" font-weight="bold">세로</text>
                <text x="120" y="55" fill="#dc2626" font-size="11" font-weight="bold">높이</text>
                <rect x="150" y="12" width="160" height="50" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="158" y="32" fill="#0369a1" font-size="11" font-weight="bold">① 직육면체의 부피</text>
                <text x="158" y="50" fill="#1e293b" font-size="12" font-weight="bold">= 가로 × 세로 × 높이</text>
                <rect x="150" y="70" width="160" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="158" y="90" fill="#b45309" font-size="11" font-weight="bold">② 정육면체의 부피</text>
                <text x="158" y="108" fill="#dc2626" font-size="11" font-weight="bold">= 한 모서리를 세 번 곱하기</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>직육면체의 부피:</strong> <strong>(가로) × (세로) × (높이)</strong> = <strong>(한 밑면의 넓이) × (높이)</strong></li>
              <li><strong>정육면체의 부피 주의:</strong> 한 모서리가 4 cm일 때 4 × 3 = 12가 아니라, <strong>4 × 4 × 4 = 64(cm³)</strong>처럼 한 모서리의 길이를 세 번 곱해야 합니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 부피가 1 cm³인 쌓기나무 18개로 만든 직육면체의 부피는 몇 cm³인가요?",
            ans: "18", accept: ["18cm³", "18 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1 cm³ 쌓기나무의 개수가 곧 부피입니다.", h2: "18을 입력해 보세요.",
            checkTip: "18개이므로 18 cm³입니다.", wrongDiag: {}, diagDefault: "18을 입력해 보세요.",
            steps: [ { q: "1계단: 1 cm³가 18개이면 몇 cm³인가요?", ans: "18" } ]
          }
        ],
        step1Quiz: [
          {
            q: "직육면체의 부피를 구하는 공식으로 올바른 것은 어느 것인가요?",
            choices: ["1번: (가로) + (세로) + (높이)", "2번: (가로) × (세로) × (높이)"],
            ans: "2",
            h1: "1층에 놓인 개수(가로 × 세로)에 층수(높이)를 곱했던 것을 떠올려 보세요.",
            h2: "세 길이를 모두 곱하는 보기를 골라 보세요."
          },
          {
            q: "한 모서리의 길이가 3 cm인 정육면체의 부피를 구하는 올바른 식은 어느 것인가요?",
            choices: ["1번: 3 × 3 = 9 (cm³)", "2번: 3 × 3 × 3 = 27 (cm³)"],
            ans: "2",
            h1: "정육면체는 가로도 3 cm, 세로도 3 cm, 높이도 3 cm입니다!",
            h2: "3을 세 번 곱한 식을 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "직육면체의 부피는 (가로) × (세로) × ([ ① ])로 구합니다.",
            ans: "높이",
            h1: "가로, 세로와 함께 직육면체의 키를 나타내는 두 글자 용어입니다.",
            h2: "핵심 개념 카드의 첫 번째 공식 끝에 있는 두 글자 단어를 적어 보세요."
          },
          {
            q: "직육면체에서 (가로) × (세로)는 '한 밑면의 넓이'와 같으므로, 직육면체의 부피는 (한 밑면의 넓이) × (높이)로도 구할 수 있습니다. 한 밑면의 넓이가 15 cm² 이고 높이가 4 cm인 직육면체의 부피는 15 × 4 = [ ① ] cm³입니다.",
            ans: "60",
            h1: "15에 4를 곱해 보세요.",
            h2: "15 × 4 의 값을 숫자로 입력해 보세요."
          }
        ],
        step2_2: [
          {
            q: "가로가 5 cm, 세로가 4 cm, 높이가 3 cm인 직육면체의 부피는 몇 cm³인지 구해 보세요.",
            ans: "60", accept: ["60cm³", "60 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "직육면체의 부피는 (가로) × (세로) × (높이)입니다.",
            h2: "5 × 4 × 3 을 계산해 보세요.",
            checkTip: "5 × 4 × 3 = 20 × 3 = 60(cm³)입니다.",
            wrongDiag: {
              "12": "세 길이를 더했어요(5+4+3=12)! 부피는 곱셈(5 × 4 × 3)으로 구해야 합니다.",
              "20": "가로와 세로만 곱했어요(5×4=20)! 여기에 높이 3 cm까지 곱해주어야 합니다."
            },
            diagDefault: "5 × 4 × 3 을 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 가로(5 cm)와 세로(4 cm)를 곱하면 5 × 4 = 얼마인가요?", ans: "20" },
              { q: "2계단: 여기에 높이(3 cm)를 곱하면 부피는 20 × 3 = 몇 cm³인가요?", ans: "60" }
            ]
          },
          {
            q: "한 모서리의 길이가 4 cm인 정육면체의 부피는 몇 cm³인지 구해 보세요.",
            ans: "64", accept: ["64cm³", "64 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "정육면체는 가로, 세로, 높이가 모두 4 cm입니다.",
            h2: "4 × 4 × 4 를 계산해 보세요. (4 × 3 이 아닙니다!)",
            checkTip: "4 × 4 × 4 = 16 × 4 = 64(cm³)입니다.",
            wrongDiag: {
              "12": "앗! 4에 3을 곱했어요(4×3=12). 정육면체의 부피는 4를 세 번 곱하는 4 × 4 × 4 로 구해야 합니다!",
              "16": "4를 두 번만 곱했어요(4×4=16)! 높이인 4를 한 번 더 곱해 보세요."
            },
            diagDefault: "4 × 4 = 16 에 4를 한 번 더 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 밑면의 넓이는 4 × 4 = 몇 cm²인가요?", ans: "16" },
              { q: "2계단: 여기에 높이 4 cm를 곱하면 부피는 16 × 4 = 몇 cm³인가요?", ans: "64" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음 직육면체의 부피는 몇 cm³인지 구해 보세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <polygon points="35,45 125,45 150,25 60,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                      <polygon points="35,45 125,45 125,95 35,95" fill="#bfdbfe" fill-opacity="0.5" stroke="#1e293b" stroke-width="1.8"/>
                      <polygon points="125,45 150,25 150,75 125,95" fill="#93c5fd" fill-opacity="0.6" stroke="#1e293b" stroke-width="1.8"/>
                      <line x1="60" y1="25" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                      <line x1="35" y1="95" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                      <line x1="60" y1="75" x2="150" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                      <text x="68" y="112" fill="#1e293b" font-size="12" font-weight="bold">6 cm</text>
                      <text x="142" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 cm</text>
                      <text x="158" y="55" fill="#dc2626" font-size="12" font-weight="bold">5 cm</text>
                    </svg>
                  </div>`,
              ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "(가로 6 cm) × (세로 4 cm) × (높이 5 cm)를 계산하면 됩니다.",
              h2: "6 × 4 × 5 를 계산해 보세요. (4 × 5 = 20 을 먼저 곱하면 암산이 쉬워요!)",
              checkTip: "6 × 4 × 5 = 6 × 20 = 120(cm³)입니다.",
              wrongDiag: {
                "15": "세 모서리를 더했어요(6+4+5)! 모두 곱해야 합니다.",
                "24": "밑면의 넓이(6×4=24)만 구했어요! 높이 5를 곱해 보세요."
              },
              diagDefault: "6 × 4 × 5 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 6 × 4 는 얼마인가요?", ans: "24" },
                { q: "2계단: 24에 높이 5를 곱하면 몇 cm³인가요?", ans: "120" }
              ]
            },
            {
              q: "[유형 1] 한 밑면의 넓이가 25 cm² 이고 높이가 6 cm인 직육면체의 부피는 몇 cm³인가요?",
              ans: "150", accept: ["150cm³", "150 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "직육면체의 부피는 (한 밑면의 넓이) × (높이)로 구합니다!",
              h2: "25 × 6 을 계산해 보세요.",
              checkTip: "(한 밑면의 넓이 25) × (높이 6) = 150(cm³)입니다.",
              wrongDiag: { "31": "25와 6을 더했어요! 두 수를 곱해야 부피가 나옵니다." },
              diagDefault: "25에 6을 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 한 밑면의 넓이(25)에 높이(6)를 곱하면 25 × 6 = 몇 cm³인가요?", ans: "150" } ]
            }
          ],
          [
            {
              q: "[유형 2] 한 모서리의 길이가 5 cm인 정육면체가 있습니다. 민수가 이 정육면체의 부피를 5 × 3 = 15(cm³)라고 잘못 계산했습니다. 바르게 계산한 정육면체의 부피는 몇 cm³인가요?",
              ans: "125", accept: ["125cm³", "125 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "정육면체의 부피는 (한 모서리) × 3 이 아니라, (한 모서리) × (한 모서리) × (한 모서리)입니다!",
              h2: "5 × 5 × 5 를 계산해 보세요.",
              checkTip: "5 × 5 × 5 = 25 × 5 = 125(cm³)입니다.",
              wrongDiag: {
                "15": "15는 민수가 잘못 구한 값이에요! 5를 세 번 곱해야 합니다(5 × 5 × 5).",
                "25": "5 × 5 는 한 면의 넓이예요! 여기에 높이 5를 한 번 더 곱해 보세요."
              },
              diagDefault: "5 × 5 = 25 에 5를 한 번 더 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 5 × 5 는 얼마인가요?", ans: "25" },
                { q: "2계단: 25에 5를 한 번 더 곱하면 정육면체의 부피는 몇 cm³인가요?", ans: "125" }
              ]
            },
            {
              q: "[유형 2] 가로가 8 cm, 세로가 5 cm, 높이가 2 cm인 직육면체의 부피와, 한 모서리의 길이가 4 cm인 정육면체의 부피의 차(큰 수 - 작은 수)는 몇 cm³인가요?",
              ans: "16", accept: ["16cm³", "16 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "먼저 직육면체의 부피(8 × 5 × 2)와 정육면체의 부피(4 × 4 × 4)를 각각 구해 보세요.",
              h2: "직육면체 부피(80 cm³)에서 정육면체 부피(64 cm³)를 빼 보세요.",
              checkTip: "직육면체(8×5×2=80 cm³) - 정육면체(4×4×4=64 cm³) = 16 cm³입니다.",
              wrongDiag: {
                "80": "직육면체의 부피(80 cm³)만 구했어요! 정육면체의 부피(64 cm³)를 빼야 합니다.",
                "68": "정육면체 부피를 4×3=12로 잘못 계산해서 뺐어요! 정육면체 부피는 4×4×4 = 64입니다."
              },
              diagDefault: "80에서 64를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 직육면체의 부피는 8 × 5 × 2 = 몇 cm³인가요?", ans: "80" },
                { q: "2계단: 정육면체의 부피는 4 × 4 × 4 = 몇 cm³인가요?", ans: "64" },
                { q: "3계단: 두 부피의 차는 80 - 64 = 몇 cm³인가요?", ans: "16" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 다음 직육면체의 부피가 140 cm³ 일 때, 높이(□)는 몇 cm인지 구해 보세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <polygon points="30,45 120,45 145,25 55,25" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
                      <polygon points="30,45 120,45 120,95 30,95" fill="#bbf7d0" fill-opacity="0.5" stroke="#15803d" stroke-width="1.8"/>
                      <polygon points="120,45 145,25 145,75 120,95" fill="#86efac" fill-opacity="0.6" stroke="#15803d" stroke-width="1.8"/>
                      <text x="38" y="75" fill="#1e293b" font-size="11" font-weight="bold">부피: 140 cm³</text>
                      <text x="62" y="112" fill="#1e293b" font-size="12" font-weight="bold">7 cm</text>
                      <text x="136" y="92" fill="#1e293b" font-size="12" font-weight="bold">5 cm</text>
                      <text x="153" y="55" fill="#dc2626" font-size="13" font-weight="bold">□ cm</text>
                    </svg>
                  </div>`,
              ans: "4", accept: ["4cm", "4 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "7 × 5 × □ = 140 입니다! 먼저 한 밑면의 넓이(7 × 5 = 35)를 구해 보세요.",
              h2: "35 × □ = 140 이므로, 140을 35로 나누어 보세요(140 ÷ 35).",
              checkTip: "한 밑면의 넓이 = 7 × 5 = 35(cm²) ➔ 높이 = 140 ÷ 35 = 4(cm)입니다.",
              wrongDiag: { "35": "35는 가로와 세로를 곱한 한 밑면의 넓이예요! 전체 부피 140을 35로 나누어야 높이가 나옵니다." },
              diagDefault: "전체 부피(140)를 밑면의 넓이(7 × 5 = 35)로 나누어 보세요.",
              steps: [
                { q: "1계단: 가로(7 cm)와 세로(5 cm)를 곱한 밑면의 넓이는 몇 cm²인가요?", ans: "35" },
                { q: "2계단: 35 × □ = 140 이므로, 높이 □는 140 ÷ 35 = 몇 cm인가요?", ans: "4" }
              ]
            },
            {
              q: "[유형 3] 가로가 6 cm, 세로가 5 cm, 높이가 4 cm인 직육면체에서 가로와 세로는 그대로 두고 높이만 2배(8 cm)로 늘렸습니다. 늘어난 직육면체의 부피는 원래 부피의 몇 배가 되나요?",
              ans: "2", accept: ["2배"], unit: "배", placeholder: "숫자만 입력",
              h1: "가로와 세로가 그대로일 때 높이가 2배가 되면, 층수가 2배가 되는 것과 같습니다!",
              h2: "원래 부피는 6×5×4 = 120이고, 늘어난 부피는 6×5×8 = 240입니다. 몇 배인지 구해 보세요.",
              checkTip: "가로와 세로가 같을 때 높이가 2배가 되면 부피도 2배가 됩니다.",
              wrongDiag: { "8": "세 모서리가 모두 2배가 될 때 8배가 되고, 지금은 '높이만' 2배가 되었으므로 부피도 2배가 됩니다!" },
              diagDefault: "높이만 2배가 되었으므로 부피가 몇 배가 되는지 적어 보세요.",
              steps: [ { q: "1계단: 원래 부피(120 cm³)와 높이를 2배로 늘린 부피(240 cm³)를 비교하면 몇 배인가요?", ans: "2" } ]
            }
          ]
        ],
        step4Intro: "직육면체의 부피를 알고 한 모서리의 길이를 거꾸로 구할 때는, 먼저 알고 있는 두 모서리를 곱해 '한 면의 넓이'를 구한 뒤 전체 부피를 그 넓이로 나누어 주면 됩니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 가로가 7 cm, 세로가 3 cm, 높이가 4 cm인 직육면체의 부피는 몇 cm³인가요?",
              ans: "84", accept: ["84cm³", "84 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "7 × 3 × 4 를 계산해 보세요.", h2: "21 × 4 를 계산해 보세요.",
              checkTip: "7 × 3 × 4 = 84(cm³)입니다.", wrongDiag: {}, diagDefault: "7 × 3 × 4 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 7 × 3 은 얼마인가요?", ans: "21" },
                { q: "2계단: 21 × 4 는 몇 cm³인가요?", ans: "84" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 한 밑면의 넓이가 32 cm² 이고 높이가 5 cm인 직육면체의 부피는 몇 cm³인가요?",
              ans: "160", accept: ["160cm³", "160 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "(한 밑면의 넓이) × (높이)를 계산합니다.", h2: "32 × 5 를 계산해 보세요.",
              checkTip: "32 × 5 = 160(cm³)입니다.", wrongDiag: {}, diagDefault: "32에 5를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 32 × 5 는 몇 cm³인가요?", ans: "160" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 한 모서리의 길이가 6 cm인 정육면체의 부피는 몇 cm³인가요? (6 × 3 이 아니라 6 × 6 × 6 으로 계산하세요!)",
              ans: "216", accept: ["216cm³", "216 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "6 × 6 = 36 에 6을 한 번 더 곱해 보세요.", h2: "36 × 6 을 계산해 보세요.",
              checkTip: "6 × 6 × 6 = 216(cm³)입니다.",
              wrongDiag: { "18": "6 × 3 이 아니라 6 × 6 × 6 을 계산해야 합니다!", "36": "36에 높이 6을 한 번 더 곱해 보세요." },
              diagDefault: "36에 6을 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 6 × 6 은 얼마인가요?", ans: "36" },
                { q: "2계단: 36 × 6 은 몇 cm³인가요?", ans: "216" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 가로가 5 cm, 세로가 3 cm, 높이가 4 cm인 직육면체의 부피와, 한 모서리의 길이가 3 cm인 정육면체의 부피의 차는 몇 cm³인가요?",
              ans: "33", accept: ["33cm³", "33 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "직육면체의 부피(5×3×4 = 60)에서 정육면체의 부피(3×3×3 = 27)를 빼 보세요.", h2: "60 - 27 을 계산해 보세요.",
              checkTip: "60 - 27 = 33(cm³)입니다.", wrongDiag: {}, diagDefault: "60에서 27을 뺀 값을 입력해 보세요.",
              steps: [ { q: "1계단: 직육면체 부피(60)에서 정육면체 부피(27)를 빼면 얼마인가요?", ans: "33" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 부피가 180 cm³ 인 직육면체의 가로가 9 cm, 세로가 4 cm일 때, 높이는 몇 cm인가요?",
              ans: "5", accept: ["5cm", "5 cm"], unit: "cm", placeholder: "숫자만 입력",
              h1: "한 밑면의 넓이는 9 × 4 = 36(cm²)입니다.", h2: "180 ÷ 36 을 계산해 보세요.",
              checkTip: "180 ÷ (9 × 4) = 180 ÷ 36 = 5(cm)입니다.", wrongDiag: {}, diagDefault: "180을 36으로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 밑면의 넓이는 9 × 4 = 몇 cm²인가요?", ans: "36" },
                { q: "2계단: 높이는 180 ÷ 36 = 몇 cm인가요?", ans: "5" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 직육면체에서 가로와 세로의 길이는 그대로 두고 높이만 3배로 늘리면, 부피는 원래 부피의 몇 배가 되나요?",
              ans: "3", accept: ["3배"], unit: "배", placeholder: "숫자만 입력",
              h1: "밑면의 넓이가 같을 때 높이가 3배가 되면 부피도 똑같이 3배가 됩니다.", h2: "3을 입력해 보세요.",
              checkTip: "높이만 3배가 되면 부피도 3배가 됩니다.", wrongDiag: {}, diagDefault: "3을 입력해 보세요.",
              steps: [ { q: "1계단: 높이가 3배가 되면 부피는 몇 배가 되나요?", ans: "3" } ]
            }
          ]
        ],
        step5A: {
          q: "직육면체의 부피는 (가로) × (세로) × (높이)로 구하며, 모든 모서리의 길이가 같은 정육면체의 부피는 (한 모서리의 길이) × (한 모서리의 길이) × [ (1) 3 / (2) 한 모서리의 길이 ] 로 구합니다.",
          ans: "한 모서리의 길이", numAns: "2",
          hint: "💡 힌트: 정육면체는 가로, 세로, 높이가 모두 '한 모서리의 길이'와 같습니다."
        },
        step5B: { sentence: "직육면체의 부피는 가로 곱하기 세로 곱하기 높이이고 정육면체는 한 모서리를 세 번 곱한다." },
        nextUnit: "6-3"
      },
  
      "6-3": {
        title: "6-3차시: 부피의 큰 단위(m³)를 알아볼까요",
        goal: "부피의 큰 단위인 1 m³를 알고, 1 m³ = 1000000 cm³의 관계를 이해하여 단위를 변환합니다.",
        videoUrl: "https://youtube.com/shorts/OXs0cj0C26A?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 1 m³(세제곱미터)는 왜 1,000,000 cm³일까요?</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
                <polygon points="20,40 75,40 95,20 40,20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
                <polygon points="20,40 75,40 75,95 20,95" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
                <polygon points="75,40 95,20 95,75 75,95" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.8"/>
                <text x="16" y="114" fill="#1e293b" font-size="11" font-weight="bold">1 m (= 100 cm)</text>
                <rect x="115" y="15" width="195" height="100" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
                <text x="125" y="38" fill="#dc2626" font-size="12" font-weight="bold">⚡ 1 m³ = 몇 cm³ 일까?</text>
                <text x="125" y="60" fill="#1e293b" font-size="11">가로·세로·높이에 각각 100개씩</text>
                <text x="125" y="80" fill="#1e293b" font-size="11">= 100 × 100 × 100</text>
                <text x="125" y="102" fill="#dc2626" font-size="12" font-weight="bold">= 1,000,000 cm³ (백만)</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>1 m³의 뜻:</strong> 한 모서리의 길이가 <strong>1 m</strong>인 정육면체의 부피를 <strong>1 m³</strong>라 쓰고, <strong>1 세제곱미터</strong>라고 읽습니다.</li>
              <li><strong>가장 많이 틀리는 함정:</strong> 1 m = 100 cm 라고 해서 1 m³ = 100 cm³가 아닙니다! 가로·세로·높이에 각각 100개씩 들어가므로 <strong>0이 6개인 1,000,000(백만) cm³</strong>입니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 부피는 몇 cm³인가요?",
            ans: "24", accept: ["24cm³", "24 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "4 × 3 × 2 를 계산해 보세요.", h2: "12 × 2 를 계산해 보세요.",
            checkTip: "4 × 3 × 2 = 24(cm³)입니다.", wrongDiag: {}, diagDefault: "24를 입력해 보세요.",
            steps: [ { q: "1계단: 4 × 3 × 2 는 얼마인가요?", ans: "24" } ]
          }
        ],
        step1Quiz: [
          {
            q: "한 모서리의 길이가 1 m인 정육면체의 부피 단위를 '1 m³'라 쓰고 어떻게 읽나요?",
            choices: ["1번: 1 세제곱센티미터", "2번: 1 세제곱미터"],
            ans: "2",
            h1: "단위가 cm가 아니라 m(미터)입니다!",
            h2: "세제곱 뒤에 '미터'가 붙은 보기를 골라 보세요."
          },
          {
            q: "한 모서리가 1 m(100 cm)인 정육면체 모양의 상자에는 부피가 1 cm³인 쌓기나무가 모두 몇 개 들어갈까요?",
            choices: ["1번: 100개 (100 cm³)", "2번: 1000000개 (백만 개, 1000000 cm³)"],
            ans: "2",
            h1: "가로에 100개, 세로에 100개, 높이에 100층이 들어갑니다(100 × 100 × 100)!",
            h2: "1 뒤에 0이 6개 붙은 백만 개를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "한 모서리의 길이가 1 m인 정육면체의 부피를 1 m³라 쓰고, 1 [ ① ]라고 읽습니다. (다섯 글자로 입력)",
            ans: "세제곱미터",
            h1: "m(미터)에 작은 3(세제곱)이 붙어 있는 단위입니다.",
            h2: "'세제곱' 뒤에 '미터'를 붙여 다섯 글자로 적어 보세요."
          },
          {
            q: "1 m = 100 cm 이므로 한 모서리가 1 m인 정육면체의 부피는 100 × 100 × 100 = 1000000(cm³)입니다. 따라서 3 m³를 cm³ 단위로 바꾸면 [ ① ] cm³입니다. (숫자만 입력, 0이 6개!)",
            ans: "3000000",
            h1: "1 m³가 1000000 cm³이므로, 3 m³는 3 뒤에 0을 6개 붙이면 됩니다.",
            h2: "3000000을 정확히 입력해 보세요."
          }
        ],
        step2_2: [
          {
            q: "가로가 4 m, 세로가 3 m, 높이가 2 m인 컨테이너 상자의 부피는 몇 m³인지 구해 보세요.",
            ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "단위가 모두 m이므로 그대로 가로 × 세로 × 높이를 계산하면 m³가 됩니다.",
            h2: "4 × 3 × 2 를 계산해 보세요.",
            checkTip: "4 × 3 × 2 = 24(m³)입니다.",
            wrongDiag: { "9": "4 + 3 + 2 를 더했어요! 세 길이를 곱해야 부피가 됩니다." },
            diagDefault: "4 × 3 × 2 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 4 × 3 은 얼마인가요?", ans: "12" },
              { q: "2계단: 12에 높이 2를 곱하면 몇 m³인가요?", ans: "24" }
            ]
          },
          {
            q: "5000000 cm³(오백만 세제곱센티미터)는 몇 m³와 같은지 구해 보세요.",
            ans: "5", accept: ["5m³", "5 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "1000000 cm³(0이 6개)가 1 m³와 같습니다.",
            h2: "5000000에서 뒤에 있는 0을 6개 지우면 얼마가 남는지 보세요.",
            checkTip: "1000000 cm³ = 1 m³ 이므로 5000000 cm³ = 5 m³입니다.",
            wrongDiag: {
              "50": "0을 5개만 지웠어요! 1 m³ = 1000000 cm³ 이므로 0을 6개 모두 지워야 합니다.",
              "500": "0을 6개 지워야 하므로 5 m³가 됩니다."
            },
            diagDefault: "5000000을 1000000으로 나눈 값을 입력해 보세요.",
            steps: [ { q: "1계단: 1000000 cm³는 1 m³입니다. 그렇다면 5000000 cm³는 몇 m³인가요?", ans: "5" } ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 한 모서리의 길이가 2 m인 정육면체 모양의 물탱크가 있습니다. 이 물탱크의 부피는 몇 m³인가요?",
              ans: "8", accept: ["8m³", "8 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "정육면체의 부피는 (한 모서리) × (한 모서리) × (한 모서리)입니다.",
              h2: "2 × 2 × 2 를 계산해 보세요.",
              checkTip: "2 × 2 × 2 = 8(m³)입니다.",
              wrongDiag: { "6": "2 × 3 = 6 으로 계산했어요! 2를 세 번 곱하는 2 × 2 × 2 = 8(m³)입니다." },
              diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
              steps: [ { q: "1계단: 2 × 2 × 2 는 몇 m³인가요?", ans: "8" } ]
            },
            {
              q: "[유형 1] 부피가 '2.5 m³'인 돌덩이가 있습니다. 이 돌덩이의 부피를 cm³ 단위로 나타내면 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
              ans: "2500000", accept: ["2,500,000", "2500000cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1 m³ = 1000000 cm³ 이므로 2.5에 1000000을 곱해 소수점을 오른쪽으로 6칸 옮깁니다!",
              h2: "2 m³는 2000000 cm³이고, 0.5 m³는 500000 cm³입니다. 합쳐서 적어 보세요.",
              checkTip: "2.5 × 1000000 = 2500000(cm³)입니다.",
              wrongDiag: {
                "250000": "0이 하나 부족해요! 25 뒤에 0이 5개 붙어서 2500000(이백오십만)이 되어야 합니다.",
                "250": "100만 곱했어요! 부피 단위는 1000000(백만)을 곱해야 합니다."
              },
              diagDefault: "25 뒤에 0을 5개 붙인 2500000을 입력해 보세요.",
              steps: [
                { q: "1계단: 1 m³는 1000000 cm³입니다. 2 m³는 몇 cm³인가요?", ans: "2000000" },
                { q: "2계단: 여기에 0.5 m³(500000 cm³)를 더하면 모두 몇 cm³인가요?", ans: "2500000" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 현우는 '4 m³'를 cm³ 단위로 바꿀 때, 1 m = 100 cm 니까 4에 100을 곱해 400 cm³라고 잘못 적었습니다. 바르게 고친 값은 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
              ans: "4000000", accept: ["4,000,000", "4000000cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "부피 단위는 100을 세 번 곱한 1000000(백만)배 차이가 납니다!",
              h2: "4 뒤에 0을 6개 붙여서 입력해 보세요.",
              checkTip: "4 m³ = 4000000 cm³(사백만 세제곱센티미터)입니다.",
              wrongDiag: {
                "40000": "0을 4개만 붙였어요(넓이 단위와 혼동)! 부피는 100×100×100 이므로 0을 6개 붙여야 합니다.",
                "400000": "0이 5개예요! 0을 1개 더 붙여 6개가 되도록 해 보세요."
              },
              diagDefault: "4 뒤에 0을 6개 붙인 4000000을 입력해 보세요.",
              steps: [
                { q: "1계단: 1 m³는 1 뒤에 0이 몇 개 붙는 cm³인가요?", ans: "6" },
                { q: "2계단: 따라서 4 m³를 cm³로 바꾸면 4 뒤에 0을 6개 붙여 얼마인가요?", ans: "4000000" }
              ]
            },
            {
              q: "[유형 2] 다음 두 부피 (가)와 (나) 중에서 더 큰 것의 기호를 쓰세요.<br>(가) 3 m³ &nbsp;&nbsp;&nbsp; (나) 300000 cm³(삼십만 세제곱센티미터)",
              ans: "가", accept: ["(가)", "가번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "0의 개수를 정확히 세어 보세요! (가) 3 m³를 cm³로 바꾸면 0이 6개 붙습니다.",
              h2: "(가)는 3000000 cm³(삼백만, 0이 6개)이고, (나)는 300000 cm³(삼십만, 0이 5개)입니다.",
              checkTip: "(가) 3 m³ = 3,000,000 cm³ 이므로 300,000 cm³인 (나)보다 10배 더 큽니다!",
              wrongDiag: { "나": "(나)는 0이 5개뿐인 300,000(삼십만) cm³예요! (가) 3 m³는 0이 6개인 3,000,000(삼백만) cm³이므로 (가)가 훨씬 더 큽니다!" },
              diagDefault: "3,000,000 cm³인 (가)와 300,000 cm³인 (나) 중 더 큰 기호를 골라 보세요.",
              steps: [ { q: "1계단: (가) 3 m³는 3000000 cm³(삼백만)입니다. 삼십만인 (나)와 비교할 때 어느 쪽이 더 큰가요?", ans: "가" } ]
            }
          ],
          [
            {
              q: `[유형 3] 다음 직육면체 모양의 창고는 가로와 세로는 m 단위로, 높이는 cm 단위로 적혀 있습니다. 단위를 모두 m로 통일하여 구한 이 창고의 부피는 몇 m³인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <polygon points="30,45 120,45 145,25 55,25" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
                      <polygon points="30,45 120,45 120,95 30,95" fill="#fde68a" fill-opacity="0.6" stroke="#b45309" stroke-width="1.8"/>
                      <polygon points="120,45 145,25 145,75 120,95" fill="#fcd34d" fill-opacity="0.7" stroke="#b45309" stroke-width="1.8"/>
                      <text x="62" y="112" fill="#1e293b" font-size="12" font-weight="bold">5 m</text>
                      <text x="136" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 m</text>
                      <text x="150" y="55" fill="#dc2626" font-size="12" font-weight="bold">300 cm</text>
                    </svg>
                  </div>`,
              ans: "60", accept: ["60m³", "60 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "단위가 다를 때는 절대 그대로 곱하면 안 됩니다! 먼저 높이 '300 cm'를 m 단위로 바꾸어 보세요.",
              h2: "100 cm = 1 m 이므로 300 cm = 3 m 입니다. 이제 5 × 4 × 3 을 계산해 보세요!",
              checkTip: "300 cm = 3 m 이므로, 부피는 5 × 4 × 3 = 60(m³)입니다.",
              wrongDiag: { "6000": "앗! 300 cm를 m로 바꾸지 않고 5 × 4 × 300 을 그대로 곱했어요! 300 cm = 3 m로 바꾼 뒤 곱해야 합니다." },
              diagDefault: "300 cm를 3 m로 바꾼 뒤 5 × 4 × 3 을 계산해 보세요.",
              steps: [
                { q: "1계단: 높이 300 cm를 m 단위로 바꾸면 몇 m인가요?", ans: "3" },
                { q: "2계단: 가로(5 m) × 세로(4 m) × 높이(3 m)를 계산하면 몇 m³인가요?", ans: "60" }
              ]
            },
            {
              q: "[유형 3] 가로가 200 cm, 세로가 300 cm, 높이가 2 m인 직육면체 모양의 구조물이 있습니다. 이 구조물의 부피는 몇 m³인가요?",
              ans: "12", accept: ["12m³", "12 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "가로 200 cm와 세로 300 cm를 먼저 각각 m 단위로 바꾸면 훨씬 쉽게 구할 수 있습니다!",
              h2: "200 cm = 2 m, 300 cm = 3 m 입니다. 2 × 3 × 2 를 계산해 보세요.",
              checkTip: "가로 2 m × 세로 3 m × 높이 2 m = 12(m³)입니다.",
              wrongDiag: { "120000": "200과 300을 m로 바꾸지 않고 그대로 곱했어요! 200 cm = 2 m, 300 cm = 3 m로 바꾸어 곱해 보세요." },
              diagDefault: "2 m × 3 m × 2 m 를 계산한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 가로 200 cm는 2 m이고, 세로 300 cm는 몇 m인가요?", ans: "3" },
                { q: "2계단: 2 × 3 × 2 를 계산하면 부피는 몇 m³인가요?", ans: "12" }
              ]
            }
          ]
        ],
        step4Intro: "1 m³ = 1,000,000 cm³(0이 6개!)라는 점과, m와 cm가 섞여 있을 때는 먼저 단위를 통일한 뒤에 곱한다는 원칙만 지키면 실수할 일이 없어요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 한 모서리의 길이가 3 m인 정육면체 모양의 방이 있습니다. 이 방의 부피는 몇 m³인가요?",
              ans: "27", accept: ["27m³", "27 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "3 × 3 × 3 을 계산해 보세요.", h2: "9 × 3 을 계산해 보세요.",
              checkTip: "3 × 3 × 3 = 27(m³)입니다.", wrongDiag: { "9": "3 × 3 × 3 = 27(m³)입니다!" },
              diagDefault: "27을 입력해 보세요.",
              steps: [ { q: "1계단: 3 × 3 × 3 은 몇 m³인가요?", ans: "27" } ]
            },
            {
              q: "[쌍둥이 1-2] 부피 '1.8 m³'를 cm³ 단위로 나타내면 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
              ans: "1800000", accept: ["1,800,000", "1800000cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1.8에 1000000을 곱해 18 뒤에 0을 5개 붙이면 됩니다.", h2: "1800000을 입력해 보세요.",
              checkTip: "1.8 m³ = 1800000 cm³입니다.", wrongDiag: {}, diagDefault: "1800000을 입력해 보세요.",
              steps: [ { q: "1계단: 1.8 × 1000000 은 얼마인가요?", ans: "1800000" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] '7 m³'를 cm³ 단위로 바르게 고치면 몇 cm³인가요? (쉼표 없이 숫자만 입력, 0이 6개!)",
              ans: "7000000", accept: ["7,000,000", "7000000cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "7 뒤에 0을 6개 붙여 보세요.", h2: "7000000을 입력해 보세요.",
              checkTip: "7 m³ = 7000000 cm³입니다.", wrongDiag: {}, diagDefault: "7 뒤에 0을 6개 붙인 수를 입력해 보세요.",
              steps: [ { q: "1계단: 7 뒤에 0을 6개 붙이면 얼마인가요?", ans: "7000000" } ]
            },
            {
              q: "[쌍둥이 2-2] 다음 두 부피 (가)와 (나) 중에서 더 큰 것의 기호를 쓰세요.<br>(가) 500000 cm³ &nbsp;&nbsp;&nbsp; (나) 2 m³",
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "(가)는 0.5 m³(오십만 cm³)이고, (나)는 2000000 cm³(이백만 cm³)입니다.", h2: "더 큰 부피의 기호를 골라 보세요.",
              checkTip: "(나) 2 m³ = 2,000,000 cm³ 이므로 (나)가 더 큽니다.",
              wrongDiag: { "가": "(가)는 0이 5개뿐인 500,000 cm³(0.5 m³)예요! 2 m³인 (나)가 더 큽니다." },
              diagDefault: "2,000,000 cm³인 (나)를 골라 보세요.",
              steps: [ { q: "1계단: 0.5 m³인 (가)와 2 m³인 (나) 중 더 큰 것은 어느 것인가요?", ans: "나" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 가로가 6 m, 세로가 3 m, 높이가 200 cm인 직육면체 모양의 수영장이 있습니다. 이 수영장의 부피는 몇 m³인가요?",
              ans: "36", accept: ["36m³", "36 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "높이 200 cm를 2 m로 바꾼 뒤 곱하세요.", h2: "6 × 3 × 2 를 계산해 보세요.",
              checkTip: "200 cm = 2 m 이므로 6 × 3 × 2 = 36(m³)입니다.",
              wrongDiag: { "3600": "200 cm를 2 m로 바꾼 뒤 곱해야 합니다!" },
              diagDefault: "6 × 3 × 2 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 200 cm는 몇 m인가요?", ans: "2" },
                { q: "2계단: 6 × 3 × 2 는 몇 m³인가요?", ans: "36" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 가로가 400 cm, 세로가 200 cm, 높이가 3 m인 직육면체의 부피는 몇 m³인가요?",
              ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "400 cm = 4 m, 200 cm = 2 m로 바꾼 뒤 곱하세요.", h2: "4 × 2 × 3 을 계산해 보세요.",
              checkTip: "4 m × 2 m × 3 m = 24(m³)입니다.", wrongDiag: {}, diagDefault: "4 × 2 × 3 의 값을 입력해 보세요.",
              steps: [ { q: "1계단: 4 × 2 × 3 은 몇 m³인가요?", ans: "24" } ]
            }
          ]
        ],
        step5A: {
          q: "한 모서리의 길이가 1 m(100 cm)인 정육면체의 부피는 1 m³이며, 이를 cm³ 단위로 바꾸면 100을 세 번 곱한 [ (1) 10000 cm³ / (2) 1000000 cm³ ] 와 같습니다.",
          ans: "1000000 cm³", numAns: "2",
          hint: "💡 힌트: 100 × 100 × 100 은 1 뒤에 0이 6개 붙는 백만입니다."
        },
        step5B: { sentence: "한 모서리가 일 미터인 정육면체의 부피는 일 세제곱미터이며 백만 세제곱센티미터와 같다." },
        nextUnit: "6-4"
      },
  
      "6-4": {
        title: "6-4차시: 직육면체의 겉넓이 구하는 방법을 알아볼까요 (1)",
        goal: "직육면체의 여섯 면의 넓이의 합인 겉넓이의 뜻을 알고, 세 쌍의 합동인 면을 이용해 겉넓이를 구합니다.",
        videoUrl: "https://youtube.com/shorts/JeGBm6otYRc?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 직육면체와 정육면체의 겉넓이 공식 (1)</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
                <polygon points="20,45 85,45 105,25 40,25" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                <polygon points="20,45 85,45 85,95 20,95" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                <polygon points="85,45 105,25 105,75 85,95" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
                <text x="45" y="38" fill="#1e3a8a" font-size="10" font-weight="bold">윗면(ㄱ)</text>
                <text x="38" y="74" fill="#854d0e" font-size="10" font-weight="bold">앞면(ㄴ)</text>
                <text x="86" y="65" fill="#14532d" font-size="9" font-weight="bold">옆(ㄷ)</text>
                <rect x="122" y="12" width="188" height="52" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="130" y="32" fill="#0369a1" font-size="11" font-weight="bold">① 직육면체의 겉넓이 (6면의 합)</text>
                <text x="130" y="52" fill="#dc2626" font-size="11" font-weight="bold">= (ㄱ + ㄴ + ㄷ) × 2</text>
                <rect x="122" y="72" width="188" height="48" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="130" y="91" fill="#b45309" font-size="11" font-weight="bold">② 정육면체의 겉넓이 (6면이 합동)</text>
                <text x="130" y="109" fill="#1e293b" font-size="11" font-weight="bold">= (한 면의 넓이) × 6</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>겉넓이의 뜻:</strong> 직육면체를 둘러싸고 있는 <strong>여섯 면의 넓이를 모두 더한 것</strong>입니다. (단위는 넓이 단위인 <strong>cm², m²</strong>를 씁니다!)</li>
              <li><strong>핵심 비법:</strong> 직육면체는 마주 보는 두 면끼리 서로 합동이므로, <strong>한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이를 더한 뒤 마지막에 꼭 2를 곱합니다!</strong></li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 1 m³는 몇 cm³와 같나요? (쉼표 없이 숫자만 입력, 0이 6개!)",
            ans: "1000000", accept: ["1,000,000"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "100 × 100 × 100 을 생각해 보세요.", h2: "1 뒤에 0을 6개 붙여 보세요.",
            checkTip: "1 m³ = 1000000 cm³입니다.", wrongDiag: {}, diagDefault: "1000000을 입력해 보세요.",
            steps: [ { q: "1계단: 1 뒤에 0을 6개 붙인 수는 얼마인가요?", ans: "1000000" } ]
          }
        ],
        step1Quiz: [
          {
            q: "직육면체에서 한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이를 각각 구하여 더했더니 25 cm²가 되었습니다. 이 직육면체의 전체 '겉넓이(여섯 면의 넓이의 합)'는 몇 cm²인가요?",
            choices: ["1번: 25 cm²", "2번: 50 cm² (25 × 2)"],
            ans: "2",
            h1: "직육면체는 마주 보는 합동인 면이 2개씩 총 6개의 면으로 이루어져 있습니다!",
            h2: "세 면의 넓이의 합(25 cm²)에 2를 곱한 값을 골라 보세요."
          },
          {
            q: "정육면체는 합동인 정사각형 6개로 둘러싸여 있습니다. 한 면의 넓이가 10 cm²인 정육면체의 겉넓이는 몇 cm²인가요?",
            choices: ["1번: 40 cm²", "2번: 60 cm² (10 × 6)"],
            ans: "2",
            h1: "똑같은 면이 6개 있으므로 한 면의 넓이에 6을 곱하면 됩니다.",
            h2: "10 × 6 을 계산한 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "직육면체의 여섯 면의 넓이의 합을 직육면체의 [ ① ]라고 합니다.",
            ans: "겉넓이",
            h1: "오늘 차시 제목에 들어 있는 세 글자 수학 용어입니다.",
            h2: "겉을 둘러싼 여섯 면의 넓이의 합을 부르는 세 글자 단어를 적어 보세요."
          },
          {
            q: "한 모서리의 길이가 3 cm인 정육면체에서 한 면(정사각형)의 넓이는 3 × 3 = 9(cm²)이고, 합동인 면이 6개이므로 정육면체의 겉넓이는 9 × 6 = [ ① ] cm²입니다.",
            ans: "54",
            h1: "한 면의 넓이 9 cm²에 면의 개수 6을 곱해 보세요.",
            h2: "9 × 6 의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음 직육면체에서 한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이는 각각 (5×4=20), (5×3=15), (4×3=12)입니다. 이 직육면체의 전체 '겉넓이'는 몇 cm²인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="35,45 125,45 150,25 60,25" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="35,45 125,45 125,95 35,95" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="125,45 150,25 150,75 125,95" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
                    <text x="68" y="112" fill="#1e293b" font-size="12" font-weight="bold">5 cm</text>
                    <text x="142" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 cm</text>
                    <text x="158" y="55" fill="#dc2626" font-size="12" font-weight="bold">3 cm</text>
                  </svg>
                </div>`,
            ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 꼭짓점에서 만나는 세 면의 넓이(20, 15, 12)를 먼저 모두 더한 다음, 마주 보는 면이 하나씩 더 있으므로 마지막에 2를 곱하세요!",
            h2: "(20 + 15 + 12) × 2 를 계산해 보세요.",
            checkTip: "(20 + 15 + 12) × 2 = 47 × 2 = 94(cm²)입니다.",
            wrongDiag: {
              "47": "앗! 세 면의 넓이의 합(47 cm²)만 구했어요. 마주 보는 합동인 면이 2쌍씩 있으므로 마지막에 꼭 2를 곱해 94 cm²가 되어야 합니다!",
              "60": "60은 부피(5×4×3)예요! 지금은 겉넓이를 구하는 문제입니다."
            },
            diagDefault: "세 면의 합(20+15+12=47)에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 세 면의 넓이 20, 15, 12를 모두 더하면 얼마인가요?", ans: "47" },
              { q: "2계단: 마주 보는 면까지 합쳐 47에 2를 곱하면 전체 겉넓이는 몇 cm²인가요?", ans: "94" }
            ]
          },
          {
            q: "한 모서리의 길이가 5 cm인 정육면체의 겉넓이는 몇 cm²인지 구해 보세요.",
            ans: "150", accept: ["150cm²", "150 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "정육면체의 겉넓이는 (한 면의 넓이) × 6 으로 구합니다.",
            h2: "한 면의 넓이는 5 × 5 = 25(cm²)입니다. 여기에 6을 곱해 보세요(25 × 6).",
            checkTip: "(한 면의 넓이 5 × 5 = 25) × 6 = 150(cm²)입니다.",
            wrongDiag: {
              "125": "125는 정육면체의 '부피(5×5×5)'예요! '겉넓이'는 한 면의 넓이(25)에 면의 개수 6을 곱해야 합니다.",
              "25": "한 면의 넓이(25 cm²)만 구했어요! 정육면체는 면이 6개이므로 6을 곱해 보세요."
            },
            diagDefault: "한 면의 넓이(5 × 5 = 25)에 6을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 모서리가 5 cm인 정사각형 한 면의 넓이는 5 × 5 = 몇 cm²인가요?", ans: "25" },
              { q: "2계단: 똑같은 면이 6개이므로 25 × 6 = 몇 cm²인가요?", ans: "150" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 겉넓이는 몇 cm²인가요?",
              ans: "52", accept: ["52cm²", "52 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (4×3=12), (4×2=8), (3×2=6)입니다.",
              h2: "(12 + 8 + 6) × 2 를 계산해 보세요.",
              checkTip: "(12 + 8 + 6) × 2 = 26 × 2 = 52(cm²)입니다.",
              wrongDiag: {
                "26": "세 면의 넓이의 합(26)만 구했어요! 마지막에 2를 곱해야 여섯 면의 넓이의 합이 됩니다.",
                "24": "24는 부피(4×3×2)예요! 겉넓이는 (12 + 8 + 6) × 2 로 구합니다."
              },
              diagDefault: "(12 + 8 + 6)에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 꼭짓점에서 만나는 세 면의 넓이 12, 8, 6을 더하면 얼마인가요?", ans: "26" },
                { q: "2계단: 여기에 2를 곱하면 전체 겉넓이는 몇 cm²인가요?", ans: "52" }
              ]
            },
            {
              q: "[유형 1] 한 모서리의 길이가 4 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
              ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 면의 넓이(4 × 4 = 16)에 6을 곱하면 됩니다.",
              h2: "16 × 6 을 계산해 보세요.",
              checkTip: "(4 × 4) × 6 = 16 × 6 = 96(cm²)입니다.",
              wrongDiag: {
                "64": "64는 정육면체의 부피(4×4×4)예요! 겉넓이는 (4 × 4) × 6 = 96(cm²)입니다.",
                "16": "한 면의 넓이(16)에 6을 곱해야 합니다!"
              },
              diagDefault: "16에 6을 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 면의 넓이는 4 × 4 = 몇 cm²인가요?", ans: "16" },
                { q: "2계단: 16 × 6 은 몇 cm²인가요?", ans: "96" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 슬기는 가로가 6 cm, 세로가 5 cm, 높이가 2 cm인 직육면체의 겉넓이를 구할 때, 한 꼭짓점에서 만나는 세 면의 넓이(30 + 12 + 10)만 더해서 52 cm²라고 잘못 적었습니다. 바르게 구한 전체 겉넓이는 몇 cm²인가요?",
              ans: "104", accept: ["104cm²", "104 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "슬기는 여섯 면 중 세 면의 넓이만 더했습니다! 마주 보는 합동인 면이 하나씩 더 있으므로 2를 곱해야 합니다.",
              h2: "52 × 2 를 계산해 보세요.",
              checkTip: "(30 + 12 + 10) × 2 = 52 × 2 = 104(cm²)입니다.",
              wrongDiag: {
                "52": "52는 슬기가 2를 곱하지 않아 틀린 답이에요! 52에 2를 곱해 보세요.",
                "60": "60은 부피(6×5×2)입니다!"
              },
              diagDefault: "52에 2를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 세 면의 넓이의 합이 52이므로, 여섯 면의 넓이의 합은 52 × 2 = 몇 cm²인가요?", ans: "104" } ]
            },
            {
              q: "[유형 2] 한 모서리의 길이가 6 cm인 정육면체의 겉넓이와 한 모서리의 길이가 2 cm인 정육면체의 겉넓이의 차는 몇 cm²인가요?",
              ans: "192", accept: ["192cm²", "192 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "큰 정육면체의 겉넓이((6×6)×6 = 216)에서 작은 정육면체의 겉넓이((2×2)×6 = 24)를 빼 보세요.",
              h2: "216 - 24 를 계산해 보세요.",
              checkTip: "큰 정육면체 겉넓이(36×6=216) - 작은 정육면체 겉넓이(4×6=24) = 192(cm²)입니다.",
              wrongDiag: { "216": "큰 정육면체의 겉넓이만 구했어요! 작은 정육면체의 겉넓이(24)를 빼 보세요." },
              diagDefault: "216에서 24를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 모서리가 6 cm인 정육면체의 겉넓이는 (6×6)×6 = 몇 cm²인가요?", ans: "216" },
                { q: "2계단: 한 모서리가 2 cm인 정육면체의 겉넓이는 (2×2)×6 = 몇 cm²인가요?", ans: "24" },
                { q: "3계단: 두 겉넓이의 차는 216 - 24 = 몇 cm²인가요?", ans: "192" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 가로가 10 cm, 세로가 6 cm, 높이가 5 cm인 직육면체 모양의 선물 상자가 있습니다. 이 상자의 모든 면을 포장지로 겹치지 않게 빈틈없이 감싸려면 최소 몇 cm²의 포장지가 필요한가요?",
              ans: "280", accept: ["280cm²", "280 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "상자를 빈틈없이 감싸는 포장지의 넓이는 직육면체의 '겉넓이'와 같습니다!",
              h2: "한 꼭짓점에서 만나는 세 면의 넓이는 (10×6=60), (10×5=50), (6×5=30)입니다. (60 + 50 + 30) × 2 를 계산해 보세요.",
              checkTip: "(60 + 50 + 30) × 2 = 140 × 2 = 280(cm²)입니다.",
              wrongDiag: {
                "140": "세 면의 넓이의 합(140)만 구했어요! 마지막에 2를 곱해야 합니다.",
                "300": "300은 상자의 부피(10×6×5)예요! 포장지의 넓이는 겉넓이로 구해야 합니다."
              },
              diagDefault: "(60 + 50 + 30) × 2 를 계산한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 세 면의 넓이 60, 50, 30을 모두 더하면 얼마인가요?", ans: "140" },
                { q: "2계단: 여기에 2를 곱하면 필요한 포장지의 넓이는 몇 cm²인가요?", ans: "280" }
              ]
            },
            {
              q: "[유형 3] 정육면체 모양의 나무 블록의 겉넓이를 구했더니 54 cm²였습니다. 이 정육면체 나무 블록의 '한 면의 넓이'는 몇 cm²인가요?",
              ans: "9", accept: ["9cm²", "9 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "정육면체는 똑같은 정사각형 면 6개로 이루어져 있습니다!",
              h2: "전체 겉넓이(54 cm²)를 면의 개수(6개)로 나누어 보세요(54 ÷ 6).",
              checkTip: "54 ÷ 6 = 9(cm²)입니다. (따라서 한 모서리의 길이는 3 cm입니다.)",
              wrongDiag: { "3": "3 cm는 한 모서리의 길이예요! 문제에서는 '한 면의 넓이(cm²)'를 물었으니 54 ÷ 6 = 9(cm²)를 답해야 합니다." },
              diagDefault: "전체 겉넓이 54를 6으로 나눈 값을 입력해 보세요.",
              steps: [ { q: "1계단: 여섯 면의 넓이의 합이 54 cm²이므로, 한 면의 넓이는 54 ÷ 6 = 몇 cm²인가요?", ans: "9" } ]
            }
          ]
        ],
        step4Intro: "직육면체의 겉넓이는 (한 꼭짓점에서 만나는 세 면의 넓이의 합) × 2, 정육면체의 겉넓이는 (한 면의 넓이) × 6 이라는 공식만 정확히 기억하면 부피와 절대 헷갈리지 않아요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 가로가 5 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 겉넓이는 몇 cm²인가요?",
              ans: "62", accept: ["62cm²", "62 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (5×3=15), (5×2=10), (3×2=6)입니다.", h2: "(15 + 10 + 6) × 2 를 계산해 보세요.",
              checkTip: "(15 + 10 + 6) × 2 = 31 × 2 = 62(cm²)입니다.",
              wrongDiag: { "31": "마지막에 2를 곱해야 여섯 면의 합이 됩니다!", "30": "30은 부피(5×3×2)입니다!" },
              diagDefault: "31에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 15 + 10 + 6 은 얼마인가요?", ans: "31" },
                { q: "2계단: 31 × 2 는 몇 cm²인가요?", ans: "62" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 한 모서리의 길이가 7 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
              ans: "294", accept: ["294cm²", "294 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 면의 넓이(7 × 7 = 49)에 6을 곱해 보세요.", h2: "49 × 6 을 계산해 보세요.",
              checkTip: "49 × 6 = 294(cm²)입니다.", wrongDiag: { "49": "한 면의 넓이(49)에 6을 곱해야 합니다!" },
              diagDefault: "49에 6을 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 면의 넓이는 7 × 7 = 몇 cm²인가요?", ans: "49" },
                { q: "2계단: 49 × 6 은 몇 cm²인가요?", ans: "294" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 가로가 7 cm, 세로가 4 cm, 높이가 2 cm인 직육면체에서 한 꼭짓점에서 만나는 세 면의 넓이의 합이 28 + 14 + 8 = 50(cm²)입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
              ans: "100", accept: ["100cm²", "100 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "세 면의 넓이의 합(50 cm²)에 2를 곱하면 됩니다.", h2: "50 × 2 를 계산해 보세요.",
              checkTip: "50 × 2 = 100(cm²)입니다.", wrongDiag: {}, diagDefault: "50에 2를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 50 × 2 는 몇 cm²인가요?", ans: "100" } ]
            },
            {
              q: "[쌍둥이 2-2] 한 모서리의 길이가 5 cm인 정육면체의 겉넓이(150 cm²)와 한 모서리의 길이가 3 cm인 정육면체의 겉넓이의 차는 몇 cm²인가요?",
              ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 모서리가 3 cm인 정육면체의 겉넓이는 (3 × 3) × 6 = 54(cm²)입니다.", h2: "150 - 54 를 계산해 보세요.",
              checkTip: "150 - 54 = 96(cm²)입니다.", wrongDiag: {}, diagDefault: "150에서 54를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 작은 정육면체의 겉넓이는 9 × 6 = 몇 cm²인가요?", ans: "54" },
                { q: "2계단: 150 - 54 는 몇 cm²인가요?", ans: "96" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 가로가 8 cm, 세로가 5 cm, 높이가 3 cm인 직육면체 상자의 모든 면을 색종이로 빈틈없이 붙이려고 합니다. 필요한 색종이의 넓이는 최소 몇 cm²인가요?",
              ans: "158", accept: ["158cm²", "158 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (8×5=40), (8×3=24), (5×3=15)입니다.", h2: "(40 + 24 + 15) × 2 를 계산해 보세요.",
              checkTip: "79 × 2 = 158(cm²)입니다.", wrongDiag: { "79": "79에 2를 곱해야 합니다!" },
              diagDefault: "79에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 40 + 24 + 15 는 얼마인가요?", ans: "79" },
                { q: "2계단: 79 × 2 는 몇 cm²인가요?", ans: "158" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 겉넓이가 150 cm²인 정육면체 상자의 '한 면의 넓이'는 몇 cm²인가요?",
              ans: "25", accept: ["25cm²", "25 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "전체 겉넓이 150 cm²를 면의 개수 6으로 나누어 보세요.", h2: "150 ÷ 6 을 계산해 보세요.",
              checkTip: "150 ÷ 6 = 25(cm²)입니다.", wrongDiag: {}, diagDefault: "150을 6으로 나눈 값을 입력해 보세요.",
              steps: [ { q: "1계단: 150 ÷ 6 은 몇 cm²인가요?", ans: "25" } ]
            }
          ]
        ],
        step5A: {
          q: "직육면체의 여섯 면의 넓이의 합을 겉넓이라고 하며, 한 꼭짓점에서 만나는 서로 다른 세 면의 넓이의 합에 [ (1) 2 / (2) 6 ] 를 곱하여 구합니다.",
          ans: "2", numAns: "1",
          hint: "💡 힌트: 마주 보는 합동인 면이 한 쌍씩 더 있으므로 세 면의 넓이의 합을 몇 배 해야 할까요?"
        },
        step5B: { sentence: "직육면체의 겉넓이는 한 꼭짓점에서 만나는 세 면의 넓이의 합을 두 배 하고 정육면체는 한 면의 넓이를 여섯 배 한다." },
        nextUnit: "6-5"
      },
  
      "6-5": {
        title: "6-5차시: 직육면체의 겉넓이 구하는 방법을 알아볼까요 (2)",
        goal: "직육면체의 전개도를 이용하여 (두 밑면의 넓이) + (옆면 전체의 넓이)로 겉넓이를 구합니다.",
        videoUrl: "https://youtube.com/shorts/Y3WEqmjg3TM?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 전개도를 이용하여 직육면체의 겉넓이 구하기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 155" style="width:100%; max-width:320px; height:auto;">
                <rect x="20" y="50" width="160" height="45" fill="#fde047" fill-opacity="0.7"/>
                <rect x="45" y="25" width="55" height="25" fill="#93c5fd"/>
                <rect x="45" y="95" width="55" height="25" fill="#93c5fd"/>
                <polyline points="45,50 20,50 20,95 45,95 45,120 100,120 100,95 180,95 180,50 100,50 100,25 45,25 45,50" fill="none" stroke="#1e293b" stroke-width="1.8"/>
                <line x1="45" y1="50" x2="100" y2="50" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
                <line x1="45" y1="95" x2="100" y2="95" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
                <line x1="45" y1="50" x2="45" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                <line x1="100" y1="50" x2="100" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                <line x1="125" y1="50" x2="125" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                <text x="58" y="42" fill="#1e3a8a" font-size="11" font-weight="bold">밑면</text>
                <text x="58" y="112" fill="#1e3a8a" font-size="11" font-weight="bold">밑면</text>
                <text x="55" y="77" fill="#854d0e" font-size="11" font-weight="bold">옆면 전체 (큰 직사각형)</text>
                <line x1="20" y1="138" x2="180" y2="138" stroke="#16a34a" stroke-width="2"/>
                <text x="35" y="151" fill="#15803d" font-size="11" font-weight="bold">가로 합 = 한 밑면의 둘레!</text>
                <text x="190" y="55" fill="#1e293b" font-size="11" font-weight="bold">● 겉넓이</text>
                <text x="190" y="75" fill="#1d4ed8" font-size="11" font-weight="bold">= (한 밑면 넓이)×2</text>
                <text x="190" y="95" fill="#b45309" font-size="11" font-weight="bold">+ (옆면 전체 넓이)</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>전개도로 겉넓이 구하기:</strong> <strong>(한 밑면의 넓이) × 2 + (옆면 전체의 넓이)</strong></li>
              <li><strong>옆면 전체의 넓이 공식:</strong> 옆면 4개를 따로 구하지 않고 큰 직사각형 하나로 보면, <strong>(한 밑면의 둘레) × (높이)</strong>로 한 번에 구할 수 있습니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 한 모서리의 길이가 4 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
            ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "(한 면의 넓이 4 × 4 = 16) × 6 을 계산해 보세요.", h2: "16 × 6 의 값을 적어 보세요.",
            checkTip: "16 × 6 = 96(cm²)입니다.", wrongDiag: {}, diagDefault: "96을 입력해 보세요.",
            steps: [ { q: "1계단: 16 × 6 은 얼마인가요?", ans: "96" } ]
          }
        ],
        step1Quiz: [
          {
            q: "직육면체의 전개도에서 옆면 4개를 이어 붙인 '큰 직사각형의 가로 길이'는 무엇과 같나요?",
            choices: ["1번: 한 밑면의 둘레의 길이", "2번: 한 밑면의 넓이"],
            ans: "1",
            h1: "2단원 각기둥의 전개도에서 배웠던 성질과 똑같습니다!",
            h2: "옆면들이 밑면의 네 변을 따라 한 바퀴 감싸므로 밑면의 '둘레'와 같습니다."
          },
          {
            q: "어떤 직육면체의 전개도에서 '한 밑면의 넓이'가 15 cm² 이고, 네 옆면을 합친 '옆면 전체의 넓이'가 70 cm² 입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
            choices: ["1번: 85 cm² (15 + 70)", "2번: 100 cm² (15 × 2 + 70)"],
            ans: "2",
            h1: "직육면체의 밑면은 위아래 2개입니다!",
            h2: "한 밑면의 넓이(15 cm²)를 2배 한 뒤 옆면 전체 넓이(70 cm²)를 더한 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "밑면의 가로가 5 cm, 세로가 3 cm이고 높이가 4 cm인 직육면체의 전개도를 펼쳤을 때, 옆면 전체를 이루는 큰 직사각형의 가로 길이는 한 밑면의 둘레인 (5 + 3 + 5 + 3) = [ ① ] cm입니다.",
            ans: "16",
            h1: "가로 5 cm가 2개, 세로 3 cm가 2개 있습니다.",
            h2: "(5 + 3) × 2 를 계산한 값을 숫자로 적어 보세요."
          },
          {
            q: "위 전개도에서 옆면 전체의 가로 길이가 16 cm이고 세로 길이(높이)가 4 cm이므로, 옆면 전체의 넓이는 16 × 4 = [ ① ] cm²입니다.",
            ans: "64",
            h1: "16에 4를 곱해 보세요.",
            h2: "16 × 4 의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음 직육면체의 전개도를 보고, 이 직육면체의 전체 '겉넓이'는 몇 cm²인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 280 150" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="35" y="50" width="170" height="45" fill="#fde047" fill-opacity="0.6"/>
                    <rect x="65" y="20" width="55" height="30" fill="#93c5fd"/>
                    <rect x="65" y="95" width="55" height="30" fill="#93c5fd"/>
                    <polyline points="65,50 35,50 35,95 65,95 65,125 120,125 120,95 205,95 205,50 120,50 120,20 65,20 65,50" fill="none" stroke="#1e293b" stroke-width="1.8"/>
                    <line x1="65" y1="50" x2="120" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <line x1="65" y1="95" x2="120" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <line x1="65" y1="50" x2="65" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <line x1="120" y1="50" x2="120" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <line x1="150" y1="50" x2="150" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <text x="80" y="16" fill="#1d4ed8" font-size="12" font-weight="bold">4 cm</text>
                    <text x="38" y="45" fill="#1d4ed8" font-size="12" font-weight="bold">2 cm</text>
                    <text x="211" y="77" fill="#dc2626" font-size="12" font-weight="bold">3 cm</text>
                  </svg>
                </div>`,
            ans: "52", accept: ["52cm²", "52 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "① 두 밑면의 넓이의 합은 (4 × 2) × 2 = 16(cm²)이고, ② 옆면 전체의 넓이는 (밑면의 둘레 12 cm) × (높이 3 cm) = 36(cm²)입니다.",
            h2: "두 밑면의 넓이 합(16)과 옆면 전체의 넓이(36)를 더해 보세요.",
            checkTip: "두 밑면의 넓이(8 × 2 = 16) + 옆면 전체의 넓이((4+2+4+2) × 3 = 36) = 52(cm²)입니다.",
            wrongDiag: {
              "44": "한 밑면의 넓이(8)를 한 번만 더했어요! 밑면은 위아래 2개이므로 16 + 36 = 52(cm²)입니다.",
              "36": "36은 옆면 전체의 넓이예요! 여기에 두 밑면의 넓이(16)를 더해야 합니다."
            },
            diagDefault: "두 밑면의 넓이(16)와 옆면 전체의 넓이(36)를 더해 보세요.",
            steps: [
              { q: "1계단: 가로 4 cm, 세로 2 cm인 두 밑면의 넓이의 합은 (4 × 2) × 2 = 몇 cm²인가요?", ans: "16" },
              { q: "2계단: 옆면 전체의 가로는 밑면의 둘레인 4+2+4+2 = 12 cm입니다. 높이 3 cm를 곱하면 옆면 전체 넓이는 몇 cm²인가요?", ans: "36" },
              { q: "3계단: 두 밑면의 넓이 합(16)과 옆면 전체 넓이(36)를 더하면 몇 cm²인가요?", ans: "52" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 한 밑면의 가로가 6 cm, 세로가 4 cm이고 높이가 5 cm인 직육면체의 전개도가 있습니다. 이 전개도에서 '옆면 전체의 넓이(네 옆면의 넓이의 합)'만 구하면 몇 cm²인가요?",
              ans: "100", accept: ["100cm²", "100 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "전체 겉넓이가 아니라 '옆면 전체의 넓이'만 묻고 있습니다! 옆면 전체의 가로는 한 밑면의 둘레(6+4+6+4 = 20 cm)입니다.",
              h2: "(한 밑면의 둘레 20 cm) × (높이 5 cm)를 계산해 보세요.",
              checkTip: "한 밑면의 둘레 = (6 + 4) × 2 = 20(cm) ➔ 옆면 전체의 넓이 = 20 × 5 = 100(cm²)입니다.",
              wrongDiag: {
                "148": "148은 두 밑면의 넓이(48)까지 더한 전체 겉넓이예요! 이 문제는 '옆면 전체의 넓이'만 묻고 있습니다.",
                "50": "가로(6)와 세로(4)를 한 번씩만 더해서(10 × 5 = 50) 구했어요! 밑면의 둘레는 네 변의 합인 20 cm입니다."
              },
              diagDefault: "밑면의 둘레(6+4+6+4 = 20)에 높이(5)를 곱해 보세요.",
              steps: [
                { q: "1계단: 가로 6 cm, 세로 4 cm인 밑면의 둘레는 (6 + 4) × 2 = 몇 cm인가요?", ans: "20" },
                { q: "2계단: 옆면 전체의 넓이는 20 × 5 = 몇 cm²인가요?", ans: "100" }
              ]
            },
            {
              q: "[유형 1] 위 직육면체(가로 6 cm, 세로 4 cm, 높이 5 cm)에서 옆면 전체의 넓이(100 cm²)에 두 밑면의 넓이의 합을 더한 '전체 겉넓이'는 몇 cm²인가요?",
              ans: "148", accept: ["148cm²", "148 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 밑면의 넓이는 6 × 4 = 24(cm²)이고, 밑면이 2개이므로 두 밑면의 넓이의 합은 48 cm²입니다.",
              h2: "두 밑면의 넓이 합(48)에 옆면 전체 넓이(100)를 더해 보세요.",
              checkTip: "두 밑면의 넓이(24 × 2 = 48) + 옆면 전체의 넓이(100) = 148(cm²)입니다.",
              wrongDiag: { "124": "한 밑면의 넓이(24)를 한 번만 더했어요! 밑면이 2개이므로 48을 더해야 합니다." },
              diagDefault: "48에 100을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 밑면의 넓이는 6 × 4 = 24입니다. 두 밑면의 넓이의 합은 몇 cm²인가요?", ans: "48" },
                { q: "2계단: 옆면 전체 넓이(100)와 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "148" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 밑면이 한 변의 길이가 5 cm인 정사각형이고 높이가 8 cm인 직육면체의 전개도를 펼쳤습니다. 태호는 옆면 전체의 가로 길이를 5 cm라고 잘못 생각하여 옆면 전체 넓이를 5 × 8 = 40(cm²)으로 구했습니다. 바르게 구한 '옆면 전체의 넓이'는 몇 cm²인가요?",
              ans: "160", accept: ["160cm²", "160 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "40 cm²는 옆면 1개의 넓이입니다! 정사각형 밑면의 네 변에 옆면이 4개 붙어 있으므로 옆면 전체 가로는 5 × 4 = 20(cm)입니다.",
              h2: "20 × 8 (또는 40 × 4)을 계산해 보세요.",
              checkTip: "밑면의 둘레(5 × 4 = 20 cm) × 높이(8 cm) = 160(cm²)입니다.",
              wrongDiag: {
                "40": "40은 옆면 1개의 넓이예요! 옆면이 4개 있으므로 40 × 4 = 160(cm²)입니다.",
                "210": "210은 두 밑면의 넓이(50)까지 더한 전체 겉넓이예요! '옆면 전체의 넓이'만 구해 보세요."
              },
              diagDefault: "밑면의 둘레(20 cm)에 높이(8 cm)를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 변이 5 cm인 정사각형 밑면의 둘레는 5 × 4 = 몇 cm인가요?", ans: "20" },
                { q: "2계단: 옆면 전체의 넓이는 20 × 8 = 몇 cm²인가요?", ans: "160" }
              ]
            },
            {
              q: "[유형 2] 직육면체의 전개도에서 한 밑면의 넓이가 18 cm² 이고, 한 밑면의 둘레가 18 cm, 높이가 4 cm입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
              ans: "108", accept: ["108cm²", "108 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "① 두 밑면의 넓이의 합은 18 × 2 = 36(cm²)이고, ② 옆면 전체의 넓이는 (밑면의 둘레 18) × (높이 4) = 72(cm²)입니다.",
              h2: "36 + 72 를 계산해 보세요.",
              checkTip: "두 밑면(18 × 2 = 36) + 옆면 전체(18 × 4 = 72) = 108(cm²)입니다.",
              wrongDiag: { "90": "한 밑면의 넓이(18)를 2배 하지 않고 한 번만 더했어요(18+72=90)! 밑면은 2개이므로 36 + 72 = 108입니다." },
              diagDefault: "두 밑면의 넓이(36)와 옆면 전체의 넓이(72)를 더해 보세요.",
              steps: [
                { q: "1계단: 한 밑면의 넓이가 18 cm²이므로 두 밑면의 넓이의 합은 몇 cm²인가요?", ans: "36" },
                { q: "2계단: 옆면 전체의 넓이는 (둘레 18) × (높이 4) = 몇 cm²인가요?", ans: "72" },
                { q: "3계단: 두 값을 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "108" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 밑면이 한 변의 길이가 4 cm인 정사각형이고 높이가 6 cm인 사각기둥(직육면체)의 전체 겉넓이는 몇 cm²인가요?",
              ans: "128", accept: ["128cm²", "128 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면의 넓이의 합은 (4 × 4) × 2 = 32(cm²)이고, 옆면 전체의 넓이는 (둘레 16) × (높이 6) = 96(cm²)입니다.",
              h2: "32 + 96 을 계산해 보세요.",
              checkTip: "두 밑면(16 × 2 = 32) + 옆면 전체(16 × 6 = 96) = 128(cm²)입니다.",
              wrongDiag: {
                "96": "96은 부피(4×4×6)이자 옆면 전체의 넓이예요! 여기에 두 밑면의 넓이(32)를 더해야 전체 겉넓이가 됩니다.",
                "112": "밑면 1개의 넓이(16)만 더했어요! 밑면 2개의 넓이(32)를 더해야 합니다."
              },
              diagDefault: "두 밑면의 넓이(32)와 옆면 전체의 넓이(96)를 더해 보세요.",
              steps: [
                { q: "1계단: 한 변이 4 cm인 정사각형 밑면 2개의 넓이의 합은 16 × 2 = 몇 cm²인가요?", ans: "32" },
                { q: "2계단: 옆면 전체의 넓이는 (둘레 16) × (높이 6) = 몇 cm²인가요?", ans: "96" },
                { q: "3계단: 두 값을 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "128" }
              ]
            },
            {
              q: "[유형 3] 가로가 5 cm, 세로가 4 cm, 높이가 3 cm인 직육면체 모양의 나무 상자가 있습니다. 이 상자의 '위쪽 뚜껑(윗밑면 1개)'이 열려 있어서 없다고 할 때, 바깥쪽 나머지 5개의 면(아랫밑면 1개 + 옆면 4개)에 페인트를 칠하는 넓이는 모두 몇 cm²인가요?",
              ans: "74", accept: ["74cm²", "74 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "위쪽 뚜껑이 없으므로 밑면은 바닥에 1개(5 × 4 = 20 cm²)뿐입니다! 여기에 옆면 4개의 넓이 합을 더하면 됩니다.",
              h2: "아랫밑면 1개의 넓이(20) + 옆면 전체 넓이((5+4+5+4) × 3 = 54)를 계산해 보세요.",
              checkTip: "아랫밑면 1개(20 cm²) + 옆면 전체(18 × 3 = 54 cm²) = 74(cm²)입니다.",
              wrongDiag: { "94": "94는 뚜껑까지 포함한 6개 면의 겉넓이예요! 뚜껑(윗면 20 cm²)이 없으므로 94에서 20을 빼야 합니다." },
              diagDefault: "아랫밑면 1개의 넓이(20)와 옆면 전체의 넓이(54)를 더해 보세요.",
              steps: [
                { q: "1계단: 바닥에 있는 밑면 1개의 넓이는 5 × 4 = 몇 cm²인가요?", ans: "20" },
                { q: "2계단: 옆면 전체의 넓이는 (밑면 둘레 18) × (높이 3) = 몇 cm²인가요?", ans: "54" },
                { q: "3계단: 뚜껑을 제외한 5개 면의 넓이의 합은 20 + 54 = 몇 cm²인가요?", ans: "74" }
              ]
            }
          ]
        ],
        step4Intro: "전개도를 이용할 때는 옆면 4개를 일일이 구하지 말고 '(한 밑면의 둘레) × (높이)'로 옆면 전체를 한 방에 구하는 것이 핵심 기술입니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 한 밑면의 가로가 5 cm, 세로가 3 cm이고 높이가 4 cm인 직육면체의 전개도에서 '옆면 전체의 넓이'만 구하면 몇 cm²인가요?",
              ans: "64", accept: ["64cm²", "64 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "한 밑면의 둘레는 (5 + 3) × 2 = 16(cm)입니다.", h2: "16 × 4 를 계산해 보세요.",
              checkTip: "밑면의 둘레(16 cm) × 높이(4 cm) = 64(cm²)입니다.", wrongDiag: {}, diagDefault: "16에 4를 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 밑면의 둘레(16) × 높이(4) = 몇 cm²인가요?", ans: "64" } ]
            },
            {
              q: "[쌍둥이 1-2] 위 직육면체(가로 5 cm, 세로 3 cm, 높이 4 cm)에서 옆면 전체의 넓이(64 cm²)에 두 밑면의 넓이의 합(30 cm²)을 더한 '전체 겉넓이'는 몇 cm²인가요?",
              ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "64에 30을 더하면 됩니다.", h2: "64 + 30 을 계산해 보세요.",
              checkTip: "64 + 30 = 94(cm²)입니다.", wrongDiag: {}, diagDefault: "64와 30을 더한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 64 + 30 은 몇 cm²인가요?", ans: "94" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 밑면이 한 변의 길이가 3 cm인 정사각형이고 높이가 7 cm인 직육면체의 전개도에서 '옆면 전체의 넓이'는 몇 cm²인가요?",
              ans: "84", accept: ["84cm²", "84 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "정사각형 밑면의 둘레는 3 × 4 = 12(cm)입니다.", h2: "12 × 7 을 계산해 보세요.",
              checkTip: "밑면의 둘레(12 cm) × 높이(7 cm) = 84(cm²)입니다.", wrongDiag: { "21": "21은 옆면 1개의 넓이예요! 4개이므로 21 × 4 = 84입니다." },
              diagDefault: "12에 7을 곱한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 12 × 7 은 몇 cm²인가요?", ans: "84" } ]
            },
            {
              q: "[쌍둥이 2-2] 직육면체의 전개도에서 한 밑면의 넓이가 12 cm² 이고, 한 밑면의 둘레가 14 cm, 높이가 5 cm입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
              ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면의 넓이 합(12 × 2 = 24)에 옆면 전체 넓이(14 × 5 = 70)를 더해 보세요.", h2: "24 + 70 을 계산해 보세요.",
              checkTip: "24 + 70 = 94(cm²)입니다.", wrongDiag: {}, diagDefault: "24에 70을 더한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 두 밑면의 합(24) + 옆면 전체(70) = 몇 cm²인가요?", ans: "94" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 밑면이 한 변의 길이가 5 cm인 정사각형이고 높이가 4 cm인 사각기둥(직육면체)의 전체 겉넓이는 몇 cm²인가요?",
              ans: "130", accept: ["130cm²", "130 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "두 밑면의 넓이 합은 (5×5)×2 = 50이고, 옆면 전체 넓이는 (5×4)×4 = 80입니다.", h2: "50 + 80 을 계산해 보세요.",
              checkTip: "50 + 80 = 130(cm²)입니다.", wrongDiag: {}, diagDefault: "50과 80을 더한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 두 밑면(50) + 옆면 전체(80) = 몇 cm²인가요?", ans: "130" } ]
            },
            {
              q: "[쌍둥이 3-2] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체 상자에서 '위쪽 뚜껑(윗면 1개)'을 제외한 나머지 5개 면(아랫면 1개 + 옆면 4개)의 넓이의 합은 몇 cm²인가요?",
              ans: "40", accept: ["40cm²", "40 cm²"], unit: "cm²", placeholder: "숫자만 입력",
              h1: "아랫면 1개(4 × 3 = 12)에 옆면 전체 넓이((4+3+4+3) × 2 = 28)를 더해 보세요.", h2: "12 + 28 을 계산해 보세요.",
              checkTip: "아랫면 1개(12 cm²) + 옆면 전체(14 × 2 = 28 cm²) = 40(cm²)입니다.",
              wrongDiag: { "52": "52는 뚜껑까지 포함한 6개 면의 합이에요! 뚜껑(12 cm²)을 빼야 합니다." },
              diagDefault: "12와 28을 더한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 아랫면 1개(12) + 옆면 전체(28) = 몇 cm²인가요?", ans: "40" } ]
            }
          ]
        ],
        step5A: {
          q: "직육면체의 전개도에서 전체 겉넓이는 (두 밑면의 넓이의 합)에 (옆면 전체의 넓이)를 더하여 구하며, 옆면 전체의 가로 길이는 한 밑면의 [ (1) 둘레 / (2) 넓이 ] 와 같습니다.",
          ans: "둘레", numAns: "1",
          hint: "💡 힌트: 옆면들이 밑면의 네 변 테두리를 따라 감싸고 있습니다."
        },
        step5B: { sentence: "전개도에서 직육면체의 겉넓이는 두 밑면의 넓이의 합에 옆면 전체의 넓이를 더하여 구한다." },
        nextUnit: "6-6"
      },
  
      "6-6": {
        title: "6-6차시: 6단원 종합 마스터 (부피와 겉넓이 완전 정복)",
        goal: "직육면체와 정육면체의 부피와 겉넓이 공식을 완벽히 구분하고 복합 응용문제를 해결합니다.",
        videoUrl: "",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">🏆 6단원 총정리: 부피 vs 겉넓이 공식 한눈에 비교하기</h4>
            <table style="width:100%; border-collapse:collapse; background:#fff; font-size:0.92rem; text-align:center; margin-top:10px; border:1px solid #cbd5e1;">
              <thead>
                <tr style="background:#e0f2fe; color:#1e3a8a;">
                  <th style="padding:8px; border:1px solid #cbd5e1; width:24%;">구분</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">부피 (단위: cm³, m³)</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">겉넓이 (단위: cm², m²)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;">직육면체</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>가로 × 세로 × 높이</strong><br>(= 한 밑면의 넓이 × 높이)</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>(한 꼭짓점에서 만나는 세 면의 넓이의 합) × 2</strong><br>(= 두 밑면 넓이 + 옆면 전체 넓이)</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">정육면체</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>한 모서리 × 한 모서리 × 한 모서리</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1;"><strong>(한 면의 넓이) × 6</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#15803d;">핵심 단위</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;" colspan="2"><strong>1 m³ = 1,000,000 cm³</strong> (100 × 100 × 100 ➔ 0이 6개!)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "한 모서리의 길이가 6 cm인 정육면체에서 '부피(cm³)'의 숫자와 '겉넓이(cm²)'의 숫자를 비교하면 어떨까요?",
            choices: ["1번: 둘 다 216으로 숫자가 같다", "2번: 겉넓이가 더 작다"],
            ans: "1",
            h1: "부피는 6 × 6 × 6 이고, 겉넓이는 (한 면의 넓이 6 × 6) × 6 입니다!",
            h2: "단위는 cm³와 cm²로 다르지만 부피 6×6×6과 겉넓이 (6×6)×6의 결과 숫자가 둘 다 216으로 같습니다."
          },
          {
            q: "물탱크에 물이 2 m³ 들어 있습니다. 여기에 물 500000 cm³(0.5 m³)를 더 부었고, 물은 넘치지 않았습니다. 물의 전체 부피는 몇 m³인가요?",
            choices: ["1번: 2.5 m³", "2번: 7 m³"],
            ans: "1",
            h1: "1000000 cm³가 1 m³이므로, 500000 cm³는 0.5 m³입니다!",
            h2: "2 m³에 0.5 m³를 더한 값을 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "한 모서리의 길이가 3 cm인 정육면체의 부피는 3 × 3 × 3 = 27(cm³)이고, 겉넓이는 (3 × 3) × 6 = [ ① ] cm²입니다.",
            ans: "54",
            h1: "한 면의 넓이(9 cm²)에 면의 개수 6을 곱해 보세요.",
            h2: "9 × 6 의 값을 숫자로 적어 보세요."
          },
          {
            q: "정육면체는 길이가 같은 모서리가 모두 12개 있습니다. 모든 모서리의 길이의 합이 48 cm인 정육면체의 한 모서리의 길이는 48 ÷ 12 = [ ① ] cm입니다.",
            ans: "4",
            h1: "48을 모서리의 개수인 12로 나누어 보세요.",
            h2: "48 ÷ 12 의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "가로가 5 cm, 세로가 4 cm, 높이가 2 cm인 직육면체가 있습니다. 부피와 헷갈리지 않고 이 직육면체의 '겉넓이'는 몇 cm²인지 구해 보세요.",
            ans: "76", accept: ["76cm²", "76 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 꼭짓점에서 만나는 세 면의 넓이(5×4=20, 5×2=10, 4×2=8)를 더한 뒤 2를 곱하세요.",
            h2: "(20 + 10 + 8) × 2 를 계산해 보세요.",
            checkTip: "(20 + 10 + 8) × 2 = 38 × 2 = 76(cm²)입니다.",
            wrongDiag: {
              "40": "40은 부피(5×4×2)예요! 겉넓이는 (20 + 10 + 8) × 2 로 구합니다.",
              "38": "세 면의 넓이의 합(38)만 구했어요! 마지막에 2를 곱해 76 cm²가 되어야 합니다."
            },
            diagDefault: "세 면의 넓이 합(38)에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 꼭짓점에서 만나는 세 면의 넓이 20, 10, 8을 더하면 얼마인가요?", ans: "38" },
              { q: "2계단: 38에 2를 곱하면 겉넓이는 몇 cm²인가요?", ans: "76" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 가로가 6 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 '부피'와 '겉넓이'를 차례대로 구하여 쉼표로 구분해 쓰세요 (예: 30, 62).",
              ans: "36, 72", accept: ["36,72", "36 72"], placeholder: "부피, 겉넓이 순서로 입력",
              h1: "① 부피는 6 × 3 × 2 이고, ② 겉넓이는 (18 + 12 + 6) × 2 입니다.",
              h2: "구한 부피와 겉넓이를 쉼표로 구분하여 순서대로 적어 보세요.",
              checkTip: "부피는 6 × 3 × 2 = 36(cm³)이고, 겉넓이는 (18 + 12 + 6) × 2 = 72(cm²)입니다.",
              wrongDiag: {
                "72, 36": "순서가 바뀌었어요! 문제에서 '부피'를 먼저 묻고 '겉넓이'를 나중에 물었습니다.",
                "36, 36": "겉넓이를 구할 때 세 면의 넓이 합(36)에 2를 곱하는 것을 잊었어요! 겉넓이는 72입니다."
              },
              diagDefault: "부피(36)와 겉넓이(72)를 '36, 72'로 입력해 보세요.",
              steps: [
                { q: "1계단: 직육면체의 부피는 6 × 3 × 2 = 몇 cm³인가요?", ans: "36" },
                { q: "2계단: 겉넓이는 (18 + 12 + 6) × 2 = 몇 cm²인가요?", ans: "72" },
                { q: "3계단: 부피와 겉넓이를 쉼표로 구분해 순서대로 쓰면 무엇인가요?", ans: "36, 72" }
              ]
            },
            {
              q: "[유형 1] 가로가 500 cm, 세로가 200 cm, 높이가 3 m인 직육면체 모양의 컨테이너 부피는 몇 m³인가요?",
              ans: "30", accept: ["30m³", "30 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "500 cm = 5 m, 200 cm = 2 m로 단위를 통일한 뒤 곱하세요.",
              h2: "5 × 2 × 3 을 계산해 보세요.",
              checkTip: "5 m × 2 m × 3 m = 30(m³)입니다.", wrongDiag: {}, diagDefault: "5 × 2 × 3 의 값을 입력해 보세요.",
              steps: [ { q: "1계단: 5 m × 2 m × 3 m 는 몇 m³인가요?", ans: "30" } ]
            }
          ],
          [
            {
              q: "[유형 2] 모든 모서리의 길이의 합이 36 cm인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
              ans: "27", accept: ["27cm³", "27 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "정육면체의 모서리는 모두 12개입니다! 먼저 36 ÷ 12 로 '한 모서리의 길이(3 cm)'를 구하세요.",
              h2: "한 모서리가 3 cm이므로 부피는 3 × 3 × 3 으로 구합니다.",
              checkTip: "한 모서리의 길이 = 36 ÷ 12 = 3(cm) ➔ 부피 = 3 × 3 × 3 = 27(cm³)입니다.",
              wrongDiag: {
                "3": "3 cm는 한 모서리의 길이를 아주 잘 구한 것이에요! 이제 부피(3 × 3 × 3)를 구해 보세요.",
                "54": "54는 이 정육면체의 겉넓이(9×6)예요! 부피는 3 × 3 × 3 = 27(cm³)입니다."
              },
              diagDefault: "한 모서리의 길이(36 ÷ 12 = 3 cm)를 세 번 곱해 보세요.",
              steps: [
                { q: "1계단: 정육면체의 모서리는 12개이므로 한 모서리의 길이는 36 ÷ 12 = 몇 cm인가요?", ans: "3" },
                { q: "2계단: 한 모서리가 3 cm인 정육면체의 부피는 3 × 3 × 3 = 몇 cm³인가요?", ans: "27" }
              ]
            },
            {
              q: "[유형 2] 겉넓이가 96 cm²인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
              ans: "64", accept: ["64cm³", "64 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "1단계로 겉넓이(96 cm²)를 6으로 나누어 '한 면의 넓이(16 cm²)'를 구하고, 2단계로 어떤 수를 두 번 곱해 16이 되는지 찾아 '한 모서리의 길이(4 cm)'를 구합니다!",
              h2: "한 모서리의 길이가 4 cm이므로, 부피는 4 × 4 × 4 로 구해 보세요.",
              checkTip: "한 면의 넓이 = 96 ÷ 6 = 16(cm²) ➔ 한 모서리의 길이 = 4 cm ➔ 부피 = 4 × 4 × 4 = 64(cm³)입니다.",
              wrongDiag: {
                "16": "16 cm²는 정육면체의 '한 면의 넓이'예요! 한 모서리가 4 cm이므로 부피는 4 × 4 × 4 = 64(cm³)입니다.",
                "4": "4 cm는 한 모서리의 길이예요! 부피를 구하려면 4 × 4 × 4 를 계산해야 합니다."
              },
              diagDefault: "한 모서리의 길이(4 cm)를 세 번 곱한 부피(64)를 입력해 보세요.",
              steps: [
                { q: "1계단: 겉넓이가 96 cm²이므로 한 면의 넓이는 96 ÷ 6 = 몇 cm²인가요?", ans: "16" },
                { q: "2계단: 넓이가 16 cm²인 정사각형의 한 변(모서리)의 길이는 몇 cm인가요?", ans: "4" },
                { q: "3계단: 한 모서리가 4 cm인 정육면체의 부피는 4 × 4 × 4 = 몇 cm³인가요?", ans: "64" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 다음 그림과 같이 직육면체 모양의 나무 블록에서 작은 직육면체 부분을 잘라 내어 'ㄱ자 모양'의 입체도형을 만들었습니다. 왼쪽 기둥 모양(가로 2 cm, 세로 3 cm, 높이 5 cm)과 오른쪽 바닥 모양(가로 4 cm, 세로 3 cm, 높이 2 cm)으로 나누어 구한 이 입체도형의 전체 부피는 몇 cm³인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 260 135" style="width:100%; max-width:260px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <polygon points="35,35 75,35 95,18 55,18" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <polygon points="35,35 75,35 75,75 155,75 155,105 35,105" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                      <polygon points="75,35 95,18 95,58 75,75" fill="#60a5fa" stroke="#1e293b" stroke-width="1.5"/>
                      <polygon points="75,75 155,75 175,58 95,58" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <polygon points="155,75 175,58 175,88 155,105" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
                      <line x1="75" y1="75" x2="75" y2="105" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
                      <text x="45" y="30" fill="#1e3a8a" font-size="11" font-weight="bold">2 cm</text>
                      <text x="8" y="75" fill="#1e3a8a" font-size="11" font-weight="bold">5 cm</text>
                      <text x="105" y="120" fill="#854d0e" font-size="11" font-weight="bold">오른쪽 가로 4 cm</text>
                      <text x="168" y="102" fill="#1e293b" font-size="11" font-weight="bold">세로 3 cm</text>
                      <text x="180" y="78" fill="#dc2626" font-size="11" font-weight="bold">2 cm</text>
                    </svg>
                  </div>`,
              ans: "54", accept: ["54cm³", "54 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "점선을 따라 두 직육면체로 나누어 각각의 부피를 구한 뒤 더하면 됩니다! ① 왼쪽 직육면체는 2 × 3 × 5 = 30(cm³)이고, ② 오른쪽 직육면체는 4 × 3 × 2 = 24(cm³)입니다.",
              h2: "왼쪽 부피(30 cm³)와 오른쪽 부피(24 cm³)를 더해 보세요.",
              checkTip: "왼쪽(2×3×5 = 30 cm³) + 오른쪽(4×3×2 = 24 cm³) = 54(cm³)입니다.",
              wrongDiag: {
                "30": "왼쪽 기둥의 부피(30 cm³)만 구했어요! 오른쪽 부분의 부피(24 cm³)까지 더해보세요.",
                "24": "오른쪽 부분의 부피(24 cm³)만 구했어요! 왼쪽 기둥의 부피(30 cm³)까지 더해보세요."
              },
              diagDefault: "30과 24를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 왼쪽 직육면체의 부피는 2 × 3 × 5 = 몇 cm³인가요?", ans: "30" },
                { q: "2계단: 오른쪽 직육면체의 부피는 4 × 3 × 2 = 몇 cm³인가요?", ans: "24" },
                { q: "3계단: 두 부피를 더하면 전체 부피는 몇 cm³인가요?", ans: "54" }
              ]
            },
            {
              q: "[유형 3] 안쪽 가로가 8 cm, 안쪽 세로가 5 cm인 직육면체 모양의 수조에 물이 들어 있습니다. 이 수조에 돌멩이 한 개를 완전히 잠기도록 넣었더니 물의 높이가 전보다 3 cm만큼 올라갔습니다(물은 넘치지 않았습니다). 이 돌멩이의 부피는 몇 cm³인가요?",
              ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "돌멩이가 차지한 공간만큼 수면이 올라갑니다! 돌멩이의 부피는 수조 안쪽 밑면의 넓이(8 × 5)에 올라간 물의 높이(3 cm)를 곱하여 구합니다.",
              h2: "8 × 5 × 3 을 계산해 보세요.",
              checkTip: "수조 안쪽 밑면의 넓이(8 × 5 = 40 cm²) × 올라간 물의 높이(3 cm) = 120(cm³)이므로 돌멩이의 부피는 120 cm³입니다.",
              wrongDiag: { "40": "수조 밑면의 넓이(8×5=40)만 구했어요! 올라간 물의 높이 3 cm를 곱해야 합니다." },
              diagDefault: "8 × 5 × 3 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 수조 안쪽 밑면의 넓이는 8 × 5 = 몇 cm²인가요?", ans: "40" },
                { q: "2계단: 물의 높이가 3 cm 올라갔으므로 돌멩이의 부피는 40 × 3 = 몇 cm³인가요?", ans: "120" }
              ]
            }
          ]
        ],
        step4Intro: "부피와 겉넓이 공식 구분부터 두 직육면체로 나누어 부피 구하기까지 모두 다루었습니다. 마지막 쌍둥이 문제로 확인해 보세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 '부피'와 '겉넓이'를 차례대로 구하여 쉼표로 구분해 쓰세요 (예: 20, 50).",
              ans: "24, 52", accept: ["24,52", "24 52"], placeholder: "부피, 겉넓이 순서로 입력",
              h1: "부피는 4 × 3 × 2 = 24이고, 겉넓이는 (12 + 8 + 6) × 2 = 52입니다.", h2: "24, 52 를 입력해 보세요.",
              checkTip: "부피 = 24 cm³, 겉넓이 = 52 cm²입니다.",
              wrongDiag: { "52, 24": "부피를 먼저 쓰고 겉넓이를 뒤에 써 보세요!" },
              diagDefault: "'24, 52'로 입력해 보세요.",
              steps: [
                { q: "1계단: 부피는 4 × 3 × 2 = 얼마인가요?", ans: "24" },
                { q: "2계단: 겉넓이는 52입니다. 순서대로 쉼표로 구분해 쓰면 무엇인가요?", ans: "24, 52" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 가로가 400 cm, 세로가 300 cm, 높이가 2 m인 직육면체 창고의 부피는 몇 m³인가요?",
              ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
              h1: "400 cm = 4 m, 300 cm = 3 m로 바꾼 뒤 곱하세요.", h2: "4 × 3 × 2 를 계산해 보세요.",
              checkTip: "4 × 3 × 2 = 24(m³)입니다.", wrongDiag: {}, diagDefault: "24를 입력해 보세요.",
              steps: [ { q: "1계단: 4 × 3 × 2 는 몇 m³인가요?", ans: "24" } ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 모든 모서리의 길이의 합이 24 cm인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
              ans: "8", accept: ["8cm³", "8 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "한 모서리의 길이는 24 ÷ 12 = 2(cm)입니다.", h2: "2 × 2 × 2 를 계산해 보세요.",
              checkTip: "한 모서리 = 2 cm ➔ 부피 = 2 × 2 × 2 = 8(cm³)입니다.",
              wrongDiag: { "2": "2 cm는 한 모서리의 길이예요! 부피는 2 × 2 × 2 = 8(cm³)입니다." },
              diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 모서리의 길이는 24 ÷ 12 = 몇 cm인가요?", ans: "2" },
                { q: "2계단: 부피는 2 × 2 × 2 = 몇 cm³인가요?", ans: "8" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 겉넓이가 150 cm²인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
              ans: "125", accept: ["125cm³", "125 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "한 면의 넓이는 150 ÷ 6 = 25(cm²)이므로 한 모서리의 길이는 5 cm입니다.", h2: "5 × 5 × 5 를 계산해 보세요.",
              checkTip: "한 면의 넓이 = 25 cm² ➔ 한 모서리 = 5 cm ➔ 부피 = 5 × 5 × 5 = 125(cm³)입니다.",
              wrongDiag: { "25": "25는 한 면의 넓이예요! 한 모서리가 5 cm이므로 부피는 5 × 5 × 5 = 125입니다." },
              diagDefault: "5 × 5 × 5 의 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 한 면의 넓이는 150 ÷ 6 = 25이므로 한 모서리는 몇 cm인가요?", ans: "5" },
                { q: "2계단: 부피는 5 × 5 × 5 = 몇 cm³인가요?", ans: "125" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 두 직육면체를 이어 붙여 만든 입체도형이 있습니다. 왼쪽 직육면체는 가로 3 cm, 세로 2 cm, 높이 5 cm이고, 오른쪽 직육면체는 가로 4 cm, 세로 2 cm, 높이 3 cm입니다. 이 입체도형의 전체 부피는 몇 cm³인가요?",
              ans: "54", accept: ["54cm³", "54 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "왼쪽 부피(3 × 2 × 5 = 30)와 오른쪽 부피(4 × 2 × 3 = 24)를 더해 보세요.", h2: "30 + 24 를 계산해 보세요.",
              checkTip: "30 + 24 = 54(cm³)입니다.", wrongDiag: {}, diagDefault: "30과 24를 더한 값을 입력해 보세요.",
              steps: [ { q: "1계단: 30 + 24 는 몇 cm³인가요?", ans: "54" } ]
            },
            {
              q: "[쌍둥이 3-2] 안쪽 가로가 10 cm, 안쪽 세로가 6 cm인 직육면체 모양의 수조에 물이 들어 있습니다. 이 수조에 쇠구슬을 완전히 잠기도록 넣었더니 물의 높이가 2 cm만큼 올라갔습니다(물은 넘치지 않았습니다). 이 쇠구슬의 부피는 몇 cm³인가요?",
              ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
              h1: "쇠구슬이 차지한 공간만큼 수면이 올라가므로, 수조 안쪽 밑면의 넓이(10 × 6)에 올라간 물의 높이(2 cm)를 곱하면 됩니다.", h2: "60 × 2 를 계산해 보세요.",
              checkTip: "수조 안쪽 밑면의 넓이(60 cm²) × 올라간 높이(2 cm) = 120(cm³)입니다.", wrongDiag: {}, diagDefault: "10 × 6 × 2 의 값을 입력해 보세요.",
              steps: [ { q: "1계단: 10 × 6 × 2 는 몇 cm³인가요?", ans: "120" } ]
            }
          ]
        ],
        step5A: {
          q: "직육면체의 부피는 (가로) × (세로) × (높이)로 구하며 단위는 cm³이고, 여섯 면의 넓이의 합인 겉넓이는 한 꼭짓점에서 만나는 세 면의 넓이의 합에 [ (1) 2 / (2) 6 ] 를 곱하여 구하며 단위는 cm²입니다.",
          ans: "2", numAns: "1",
          hint: "💡 힌트: 직육면체는 마주 보는 합동인 면이 2개씩 짝을 이루고 있습니다."
        },
        step5B: { sentence: "직육면체의 부피는 가로와 세로와 높이를 곱하고 겉넓이는 여섯 면의 넓이를 모두 더하여 구한다." },
        nextUnit: null
      }
    }
  };MATH_DB.lessons["6-1-6"] = {
  unitTitle: "6학년 1학기 6단원: 직육면체의 부피와 겉넓이",
  lessonOrder: ["6-1", "6-2", "6-3", "6-4", "6-5", "6-6"],
  items: {
    "6-1": {
      title: "6-1차시: 직육면체의 부피를 비교해 볼까요 / 부피의 단위(cm³)를 알아볼까요",
      goal: "부피의 뜻을 알고, 한 모서리의 길이가 1 cm인 정육면체(1 cm³)의 개수를 세어 직육면체의 부피를 구합니다.",
      videoUrl: "https://youtube.com/shorts/6uE3X_084Qo?feature=share",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 부피의 단위 1 cm³와 쌓기나무 세기</h4>
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
            <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
              <polygon points="35,45 75,45 90,30 50,30" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
              <polygon points="35,45 75,45 75,85 35,85" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
              <polygon points="75,45 90,30 90,70 75,85" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.8"/>
              <text x="42" y="102" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
              <text x="82" y="88" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
              <text x="95" y="55" fill="#1e293b" font-size="11" font-weight="bold">1 cm</text>
              <text x="15" y="120" fill="#1d4ed8" font-size="11" font-weight="bold">부피 = 1 cm³ (1 세제곱센티미터)</text>
              <rect x="165" y="15" width="145" height="95" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="175" y="38" fill="#0f766e" font-size="12" font-weight="bold">쌓기나무로 부피 구하기</text>
              <text x="175" y="60" fill="#334155" font-size="11">● 1층에 6개씩 2층이면</text>
              <text x="175" y="78" fill="#334155" font-size="11">👉 전체 6 × 2 = 12개</text>
              <text x="175" y="98" fill="#dc2626" font-size="12" font-weight="bold">👉 부피 = 12 cm³!</text>
            </svg>
          </div>
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
            <li><strong>부피의 단위:</strong> 한 모서리의 길이가 <strong>1 cm</strong>인 정육면체의 부피를 <strong>1 cm³</strong>라 쓰고, <strong>1 세제곱센티미터</strong>라고 읽습니다.</li>
            <li><strong>직육면체의 부피:</strong> 부피가 1 cm³인 쌓기나무가 빈틈없이 <strong>□개</strong> 들어가면 그 직육면체의 부피는 <strong>□ cm³</strong>입니다.</li>
          </ul>
        </div>
      `,
      warmup: null,
      step1Quiz: [
        {
          q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 기호 '1 cm³'로 쓰고 어떻게 읽나요?",
          choices: ["1번: 1 제곱센티미터", "2번: 1 세제곱센티미터"],
          ans: "2",
          h1: "cm 오른쪽 위에 작은 숫자 '3'이 적혀 있습니다!",
          h2: "숫자 3을 뜻하는 '세제곱'이 들어간 보기를 골라 보세요."
        },
        {
          q: "부피가 1 cm³인 쌓기나무 15개를 빈틈없이 쌓아 만든 직육면체의 부피는 몇 cm³인가요?",
          choices: ["1번: 15 cm³", "2번: 45 cm³"],
          ans: "1",
          h1: "1 cm³가 15개 모이면 부피도 그대로 15배가 됩니다.",
          h2: "쌓기나무의 개수와 같은 숫자를 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 1 cm³라 쓰고, 1 [ ① ]라고 읽습니다. (일곱 글자로 입력)",
          ans: "세제곱센티미터",
          h1: "넓이 단위(cm²)는 제곱센티미터이고, 부피 단위(cm³)는 앞에 '세'가 붙습니다.",
          h2: "핵심 개념 카드에서 1 cm³ 옆의 괄호 안에 적힌 한글 일곱 글자를 적어 보세요."
        },
        {
          q: "부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 2개씩 놓으면 1층에 8개가 놓입니다. 이를 똑같이 3층으로 쌓으면 쌓기나무는 모두 8 × 3 = 24개이므로 직육면체의 부피는 [ ① ] cm³입니다.",
          ans: "24",
          h1: "1 cm³ 쌓기나무의 전체 개수가 곧 부피(cm³)의 숫자입니다.",
          h2: "8 × 3 으로 구한 쌓기나무의 개수를 숫자로 입력해 보세요."
        }
      ],
      step2_2: [
        {
          q: `부피가 1 cm³인 쌓기나무로 다음과 같은 직육면체를 만들었습니다. 가로에 3개, 세로에 2개씩 2층으로 쌓았을 때, 이 직육면체의 부피는 몇 cm³인지 구해 보세요.
              <div style="text-align:center; margin:10px 0;">
                <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                  <polygon points="50,45 140,45 170,25 80,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                  <polygon points="50,45 140,45 140,95 50,95" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                  <polygon points="140,45 170,25 170,75 140,95" fill="#60a5fa" stroke="#1e293b" stroke-width="1.8"/>
                  <line x1="80" y1="45" x2="80" y2="95" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="110" y1="45" x2="110" y2="95" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="50" y1="70" x2="140" y2="70" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="80" y1="45" x2="110" y2="25" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="110" y1="45" x2="140" y2="25" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="65" y1="35" x2="155" y2="35" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="155" y1="35" x2="155" y2="85" stroke="#1e293b" stroke-width="1.2"/>
                  <line x1="140" y1="70" x2="170" y2="50" stroke="#1e293b" stroke-width="1.2"/>
                  <text x="65" y="112" fill="#1e293b" font-size="11" font-weight="bold">가로 3개, 세로 2개, 2층</text>
                </svg>
              </div>`,
          ans: "12", accept: ["12cm³", "12 cm³", "12개"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "1층에 (가로 3개 × 세로 2개 = 6개)가 놓여 있고, 이것이 2층으로 쌓여 있습니다!",
          h2: "1층의 개수(6개)에 층수(2층)를 곱해 보세요(6 × 2).",
          checkTip: "1층에 3 × 2 = 6개씩 2층이므로, 전체 쌓기나무는 6 × 2 = 12개이고 부피는 12 cm³입니다.",
          wrongDiag: {
            "6": "앞면(또는 1층)에 보이는 6개만 세었어요! 뒤쪽 줄까지 합쳐 1층에 6개씩 2층이 있으므로 2를 곱해야 합니다.",
            "7": "3 + 2 + 2 로 더하면 안 돼요! 가로 3개씩 2줄(3×2=6개)이 2층 있으므로 곱셈으로 구해야 합니다."
          },
          diagDefault: "1층의 개수(3 × 2 = 6개)에 2층을 곱한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 1층에는 가로 3개씩 2줄이므로 3 × 2 = 몇 개가 있나요?", ans: "6" },
            { q: "2계단: 6개씩 2층이므로 전체 부피는 6 × 2 = 몇 cm³인가요?", ans: "12" }
          ]
        },
        {
          q: "부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 3개씩 1층으로만 늘어놓아 만든 직육면체의 부피는 몇 cm³인가요?",
          ans: "15", accept: ["15cm³", "15 cm³"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "가로로 5개씩 3줄이 놓여 있으므로 5 × 3 을 계산하면 됩니다.",
          h2: "5에 3을 곱한 값을 적어 보세요.",
          checkTip: "5 × 3 × 1 = 15개이므로 부피는 15 cm³입니다.",
          wrongDiag: { "8": "5와 3을 더했어요! 5개씩 3줄이므로 5 × 3 을 계산해야 합니다." },
          diagDefault: "5에 3을 곱한 값을 입력해 보세요.",
          steps: [ { q: "1계단: 5개씩 3줄이므로 쌓기나무는 모두 5 × 3 = 몇 개인가요?", ans: "15" } ]
        }
      ],
      step3A: [
        [
          {
            q: "[유형 1] 부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 3개씩 2층으로 빈틈없이 쌓아 직육면체를 만들었습니다. 이 직육면체의 부피는 몇 cm³인가요?",
            ans: "24", accept: ["24cm³", "24 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "먼저 1층에 놓인 쌓기나무 수(4 × 3)를 구한 뒤, 2층을 곱해 보세요.",
            h2: "1층에 12개가 놓여 있고 2층이므로 12 × 2 를 계산해 보세요.",
            checkTip: "(4 × 3) × 2 = 12 × 2 = 24개이므로 24 cm³입니다.",
            wrongDiag: {
              "12": "1층의 개수(12개)만 구했어요! 2층으로 쌓았으므로 2를 곱해야 합니다.",
              "9": "4 + 3 + 2 를 계산했어요! 덧셈이 아니라 곱셈(4 × 3 × 2)으로 구해야 합니다."
            },
            diagDefault: "4 × 3 × 2 를 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 1층에 놓인 쌓기나무는 4 × 3 = 몇 개인가요?", ans: "12" },
              { q: "2계단: 2층까지 합하면 전체 부피는 12 × 2 = 몇 cm³인가요?", ans: "24" }
            ]
          },
          {
            q: "[유형 1] 부피가 1 cm³인 쌓기나무를 가로로 3개, 세로로 3개씩 3층으로 쌓아 정육면체를 만들었습니다. 이 정육면체의 부피는 몇 cm³인가요?",
            ans: "27", accept: ["27cm³", "27 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1층에 3 × 3 = 9개가 놓여 있고, 그것이 3층으로 쌓여 있습니다.",
            h2: "9 × 3 을 계산해 보세요.",
            checkTip: "3 × 3 × 3 = 27개이므로 부피는 27 cm³입니다.",
            wrongDiag: { "9": "3 × 3 만 계산했거나 3 + 3 + 3 을 계산했어요! 1층에 9개씩 3층이므로 9 × 3 = 27 cm³입니다." },
            diagDefault: "3 × 3 × 3 을 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 1층에 놓인 쌓기나무는 3 × 3 = 몇 개인가요?", ans: "9" },
              { q: "2계단: 3층까지 모두 합하면 9 × 3 = 몇 cm³인가요?", ans: "27" }
            ]
          }
        ],
        [
          {
            q: "[유형 2] 지훈이는 부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 2개씩 3층으로 쌓은 직육면체를 보고, 앞면에 보이는 15개(가로 5개 × 3층)만 세어 부피를 15 cm³라고 잘못 말했습니다. 뒤쪽 줄까지 모두 포함한 올바른 부피는 몇 cm³인가요?",
            ans: "30", accept: ["30cm³", "30 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "세로가 2개이므로 앞줄(15개) 뒤에 똑같은 뒷줄(15개)이 한 줄 더 숨어 있습니다!",
            h2: "1층에 5 × 2 = 10개씩 3층이므로 10 × 3 을 계산해 보세요.",
            checkTip: "(5 × 2) × 3 = 30개이므로 올바른 부피는 30 cm³입니다.",
            wrongDiag: { "15": "15 cm³는 지훈이가 뒷줄을 빼먹고 잘못 구한 값이에요! 세로가 2줄이므로 15 × 2 = 30 cm³가 되어야 합니다." },
            diagDefault: "5 × 2 × 3 을 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 1층에는 가로 5개씩 세로 2줄이므로 5 × 2 = 몇 개가 있나요?", ans: "10" },
              { q: "2계단: 10개씩 3층이므로 전체 부피는 몇 cm³인가요?", ans: "30" }
            ]
          },
          {
            q: "[유형 2] 한 층에 부피가 1 cm³인 쌓기나무를 8개씩 똑같이 쌓아 올렸더니 전체 부피가 32 cm³가 되었습니다. 쌓기나무를 모두 몇 층으로 쌓았나요?",
            ans: "4", accept: ["4층"], unit: "층", placeholder: "숫자만 입력",
            h1: "전체 부피가 32 cm³이므로 사용된 쌓기나무는 모두 32개입니다.",
            h2: "한 층에 8개씩이므로, 전체 32개를 8로 나누어 보세요(32 ÷ 8).",
            checkTip: "32 ÷ 8 = 4이므로 4층으로 쌓았습니다.",
            wrongDiag: { "24": "뺄셈(32-8=24)이 아니라 나눗셈(32 ÷ 8)으로 층수를 구해야 합니다!" },
            diagDefault: "32를 8로 나눈 값을 입력해 보세요.",
            steps: [ { q: "1계단: 전체 32개를 한 층에 8개씩 놓았으므로 32 ÷ 8 = 몇 층인가요?", ans: "4" } ]
          }
        ],
        [
          {
            q: "[유형 3] 부피가 1 cm³인 쌓기나무를 사용하여, (가) 상자 모양은 가로 4개, 세로 3개, 높이 2층으로 쌓았고, (나) 상자 모양은 가로 3개, 세로 3개, 높이 3층으로 쌓았습니다. 두 상자 모양 중 부피가 더 큰 것의 기호를 쓰세요.",
            ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
            h1: "(가)의 부피(4 × 3 × 2)와 (나)의 부피(3 × 3 × 3)를 각각 구해 비교해 보세요.",
            h2: "(가)는 24 cm³이고, (나)는 27 cm³입니다. 더 큰 기호를 골라 보세요.",
            checkTip: "(가) = 24 cm³, (나) = 27 cm³ 이므로 (나)의 부피가 더 큽니다.",
            wrongDiag: { "가": "(가)는 4×3×2 = 24 cm³이고, (나)는 3×3×3 = 27 cm³이므로 (나)가 3 cm³ 더 큽니다!" },
            diagDefault: "24 cm³인 (가)와 27 cm³인 (나) 중 더 큰 기호를 적어 보세요.",
            steps: [
              { q: "1계단: (가)의 부피는 4 × 3 × 2 = 몇 cm³인가요?", ans: "24" },
              { q: "2계단: (나)의 부피는 27 cm³입니다. 더 큰 상자의 기호는 무엇인가요?", ans: "나" }
            ]
          },
          {
            q: "[유형 3] 안쪽 공간의 부피가 40 cm³이고, 부피가 1 cm³인 쌓기나무로 빈틈없이 채울 수 있는 직육면체 상자가 있습니다. 이미 상자 안에 쌓기나무 26개를 넣었다면, 상자를 가득 채우기 위해 더 넣어야 하는 쌓기나무는 몇 개인가요?",
            ans: "14", accept: ["14개"], unit: "개", placeholder: "숫자만 입력",
            h1: "안쪽 공간의 부피가 40 cm³인 상자에는 1 cm³ 쌓기나무가 모두 40개 들어갑니다.",
            h2: "전체 40개에서 이미 넣은 26개를 빼 보세요(40 - 26).",
            checkTip: "전체 40개 중 26개를 넣었으므로 40 - 26 = 14개를 더 넣어야 합니다.",
            wrongDiag: {},
            diagDefault: "40에서 26을 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 안쪽 공간의 부피가 40 cm³인 상자에 들어가는 전체 쌓기나무는 몇 개인가요?", ans: "40" },
              { q: "2계단: 이미 26개를 넣었으므로 더 넣어야 할 개수는 40 - 26 = 몇 개인가요?", ans: "14" }
            ]
          }
        ]
      ],
      step4Intro: "1층에 놓인 개수(가로 × 세로)에 층수(높이)를 곱하면 보이지 않는 곳의 쌓기나무까지 단 한 개도 빠뜨리지 않고 정확히 셀 수 있어요!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 부피가 1 cm³인 쌓기나무를 가로로 5개, 세로로 2개씩 2층으로 쌓아 만든 직육면체의 부피는 몇 cm³인가요?",
            ans: "20", accept: ["20cm³", "20 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1층에 5 × 2 = 10개씩 2층입니다.", h2: "10 × 2 를 계산해 보세요.",
            checkTip: "5 × 2 × 2 = 20 cm³입니다.", wrongDiag: {}, diagDefault: "10에 2를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 5 × 2 × 2 는 얼마인가요?", ans: "20" } ]
          },
          {
            q: "[쌍둥이 1-2] 부피가 1 cm³인 쌓기나무를 가로로 2개, 세로로 2개씩 2층으로 쌓아 만든 정육면체의 부피는 몇 cm³인가요?",
            ans: "8", accept: ["8cm³", "8 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1층에 2 × 2 = 4개씩 2층입니다.", h2: "4 × 2 를 계산해 보세요.",
            checkTip: "2 × 2 × 2 = 8 cm³입니다.", wrongDiag: { "6": "2 + 2 + 2 가 아니라 2 × 2 × 2 = 8 cm³입니다!" },
            diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
            steps: [ { q: "1계단: 2 × 2 × 2 는 얼마인가요?", ans: "8" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] 부피가 1 cm³인 쌓기나무를 가로로 4개, 세로로 2개씩 4층으로 쌓은 직육면체의 올바른 부피는 몇 cm³인가요?",
            ans: "32", accept: ["32cm³", "32 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1층에 4 × 2 = 8개씩 4층입니다.", h2: "8 × 4 를 계산해 보세요.",
            checkTip: "4 × 2 × 4 = 32 cm³입니다.", wrongDiag: { "16": "앞줄(4×4=16개)만 세었어요! 세로가 2줄이므로 2를 곱해 32 cm³가 됩니다." },
            diagDefault: "8에 4를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 1층(8개) × 4층 = 몇 cm³인가요?", ans: "32" } ]
          },
          {
            q: "[쌍둥이 2-2] 한 층에 부피가 1 cm³인 쌓기나무를 9개씩 똑같이 쌓아 올렸더니 전체 부피가 45 cm³가 되었습니다. 모두 몇 층으로 쌓았나요?",
            ans: "5", accept: ["5층"], unit: "층", placeholder: "숫자만 입력",
            h1: "전체 45개를 한 층의 개수인 9개로 나누어 보세요.", h2: "45 ÷ 9 를 계산해 보세요.",
            checkTip: "45 ÷ 9 = 5층입니다.", wrongDiag: {}, diagDefault: "45를 9로 나눈 값을 입력해 보세요.",
            steps: [ { q: "1계단: 45 ÷ 9 는 몇 층인가요?", ans: "5" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 1 cm³ 쌓기나무로 만든 (가) 직육면체는 가로 5개, 세로 3개, 2층이고, (나) 직육면체는 가로 4개, 세로 4개, 2층입니다. 부피가 더 큰 것의 기호를 쓰세요.",
            ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
            h1: "(가)는 5 × 3 × 2 = 30 cm³이고, (나)는 4 × 4 × 2 = 32 cm³입니다.", h2: "30 cm³와 32 cm³ 중 더 큰 기호를 골라 보세요.",
            checkTip: "(가)=30 cm³, (나)=32 cm³ 이므로 (나)가 더 큽니다.", wrongDiag: {}, diagDefault: "부피가 32 cm³인 기호를 적어 보세요.",
            steps: [ { q: "1계단: 30 cm³인 (가)와 32 cm³인 (나) 중 더 큰 것은 어느 것인가요?", ans: "나" } ]
          },
          {
            q: "[쌍둥이 3-2] 안쪽 공간의 부피가 50 cm³이고, 1 cm³ 쌓기나무로 빈틈없이 채울 수 있는 상자 안에 쌓기나무를 32개 넣었습니다. 상자를 가득 채우려면 쌓기나무를 몇 개 더 넣어야 하나요?",
            ans: "18", accept: ["18개"], unit: "개", placeholder: "숫자만 입력",
            h1: "전체 50개에서 32개를 빼 보세요.", h2: "50 - 32 를 계산해 보세요.",
            checkTip: "50 - 32 = 18개입니다.", wrongDiag: {}, diagDefault: "50에서 32를 뺀 값을 입력해 보세요.",
            steps: [ { q: "1계단: 50 - 32 는 몇 개인가요?", ans: "18" } ]
          }
        ]
      ],
      step5A: {
        q: "한 모서리의 길이가 1 cm인 정육면체의 부피를 [ (1) 1 cm² / (2) 1 cm³ ] 라 쓰고, 1 세제곱센티미터라고 읽습니다.",
        ans: "1 cm³", numAns: "2",
        hint: "💡 힌트: 가로, 세로, 높이 세 번 곱하는 부피 단위이므로 오른쪽 위에 작은 3이 붙습니다."
      },
      step5B: { sentence: "한 모서리가 일 센티미터인 정육면체의 부피를 일 세제곱센티미터라 하고 쌓기나무 개수로 부피를 구한다." },
      nextUnit: "6-2"
    },

    "6-2": {
      title: "6-2차시: 직육면체와 정육면체의 부피 구하는 방법을 알아볼까요",
      goal: "직육면체와 정육면체의 부피 구하는 공식을 이해하고 부피를 구합니다.",
      videoUrl: "https://youtube.com/shorts/J6P9UZwfaOc?feature=share",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 직육면체와 정육면체의 부피 공식</h4>
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
            <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
              <polygon points="20,45 95,45 115,25 40,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
              <polygon points="20,45 95,45 95,95 20,95" fill="#bfdbfe" fill-opacity="0.5" stroke="#1e293b" stroke-width="1.8"/>
              <polygon points="95,45 115,25 115,75 95,95" fill="#93c5fd" fill-opacity="0.6" stroke="#1e293b" stroke-width="1.8"/>
              <line x1="40" y1="25" x2="40" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
              <line x1="20" y1="95" x2="40" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
              <line x1="40" y1="75" x2="115" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
              <text x="42" y="112" fill="#1d4ed8" font-size="11" font-weight="bold">가로</text>
              <text x="108" y="92" fill="#15803d" font-size="11" font-weight="bold">세로</text>
              <text x="120" y="55" fill="#dc2626" font-size="11" font-weight="bold">높이</text>
              <rect x="150" y="12" width="160" height="50" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
              <text x="158" y="32" fill="#0369a1" font-size="11" font-weight="bold">① 직육면체의 부피</text>
              <text x="158" y="50" fill="#1e293b" font-size="12" font-weight="bold">= 가로 × 세로 × 높이</text>
              <rect x="150" y="70" width="160" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="158" y="90" fill="#b45309" font-size="11" font-weight="bold">② 정육면체의 부피</text>
              <text x="158" y="108" fill="#dc2626" font-size="11" font-weight="bold">= 한 모서리를 세 번 곱하기</text>
            </svg>
          </div>
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
            <li><strong>직육면체의 부피:</strong> <strong>(가로) × (세로) × (높이)</strong> = <strong>(한 밑면의 넓이) × (높이)</strong></li>
            <li><strong>정육면체의 부피 주의:</strong> 한 모서리가 4 cm일 때 4 × 3 = 12가 아니라, <strong>4 × 4 × 4 = 64(cm³)</strong>처럼 한 모서리의 길이를 세 번 곱해야 합니다!</li>
          </ul>
        </div>
      `,
      warmup: [
        {
          q: "[복습] 부피가 1 cm³인 쌓기나무 18개로 만든 직육면체의 부피는 몇 cm³인가요?",
          ans: "18", accept: ["18cm³", "18 cm³"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "1 cm³ 쌓기나무의 개수가 곧 부피입니다.", h2: "18을 입력해 보세요.",
          checkTip: "18개이므로 18 cm³입니다.", wrongDiag: {}, diagDefault: "18을 입력해 보세요.",
          steps: [ { q: "1계단: 1 cm³가 18개이면 몇 cm³인가요?", ans: "18" } ]
        }
      ],
      step1Quiz: [
        {
          q: "직육면체의 부피를 구하는 공식으로 올바른 것은 어느 것인가요?",
          choices: ["1번: (가로) + (세로) + (높이)", "2번: (가로) × (세로) × (높이)"],
          ans: "2",
          h1: "1층에 놓인 개수(가로 × 세로)에 층수(높이)를 곱했던 것을 떠올려 보세요.",
          h2: "세 길이를 모두 곱하는 보기를 골라 보세요."
        },
        {
          q: "한 모서리의 길이가 3 cm인 정육면체의 부피를 구하는 올바른 식은 어느 것인가요?",
          choices: ["1번: 3 × 3 = 9 (cm³)", "2번: 3 × 3 × 3 = 27 (cm³)"],
          ans: "2",
          h1: "정육면체는 가로도 3 cm, 세로도 3 cm, 높이도 3 cm입니다!",
          h2: "3을 세 번 곱한 식을 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "직육면체의 부피는 (가로) × (세로) × ([ ① ])로 구합니다.",
          ans: "높이",
          h1: "가로, 세로와 함께 직육면체의 키를 나타내는 두 글자 용어입니다.",
          h2: "핵심 개념 카드의 첫 번째 공식 끝에 있는 두 글자 단어를 적어 보세요."
        },
        {
          q: "직육면체에서 (가로) × (세로)는 '한 밑면의 넓이'와 같으므로, 직육면체의 부피는 (한 밑면의 넓이) × (높이)로도 구할 수 있습니다. 한 밑면의 넓이가 15 cm² 이고 높이가 4 cm인 직육면체의 부피는 15 × 4 = [ ① ] cm³입니다.",
          ans: "60",
          h1: "15에 4를 곱해 보세요.",
          h2: "15 × 4 의 값을 숫자로 입력해 보세요."
        }
      ],
      step2_2: [
        {
          q: "가로가 5 cm, 세로가 4 cm, 높이가 3 cm인 직육면체의 부피는 몇 cm³인지 구해 보세요.",
          ans: "60", accept: ["60cm³", "60 cm³"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "직육면체의 부피는 (가로) × (세로) × (높이)입니다.",
          h2: "5 × 4 × 3 을 계산해 보세요.",
          checkTip: "5 × 4 × 3 = 20 × 3 = 60(cm³)입니다.",
          wrongDiag: {
            "12": "세 길이를 더했어요(5+4+3=12)! 부피는 곱셈(5 × 4 × 3)으로 구해야 합니다.",
            "20": "가로와 세로만 곱했어요(5×4=20)! 여기에 높이 3 cm까지 곱해주어야 합니다."
          },
          diagDefault: "5 × 4 × 3 을 계산한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 가로(5 cm)와 세로(4 cm)를 곱하면 5 × 4 = 얼마인가요?", ans: "20" },
            { q: "2계단: 여기에 높이(3 cm)를 곱하면 부피는 20 × 3 = 몇 cm³인가요?", ans: "60" }
          ]
        },
        {
          q: "한 모서리의 길이가 4 cm인 정육면체의 부피는 몇 cm³인지 구해 보세요.",
          ans: "64", accept: ["64cm³", "64 cm³"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "정육면체는 가로, 세로, 높이가 모두 4 cm입니다.",
          h2: "4 × 4 × 4 를 계산해 보세요. (4 × 3 이 아닙니다!)",
          checkTip: "4 × 4 × 4 = 16 × 4 = 64(cm³)입니다.",
          wrongDiag: {
            "12": "앗! 4에 3을 곱했어요(4×3=12). 정육면체의 부피는 4를 세 번 곱하는 4 × 4 × 4 로 구해야 합니다!",
            "16": "4를 두 번만 곱했어요(4×4=16)! 높이인 4를 한 번 더 곱해 보세요."
          },
          diagDefault: "4 × 4 = 16 에 4를 한 번 더 곱한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 한 밑면의 넓이는 4 × 4 = 몇 cm²인가요?", ans: "16" },
            { q: "2계단: 여기에 높이 4 cm를 곱하면 부피는 16 × 4 = 몇 cm³인가요?", ans: "64" }
          ]
        }
      ],
      step3A: [
        [
          {
            q: `[유형 1] 다음 직육면체의 부피는 몇 cm³인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="35,45 125,45 150,25 60,25" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="35,45 125,45 125,95 35,95" fill="#bfdbfe" fill-opacity="0.5" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="125,45 150,25 150,75 125,95" fill="#93c5fd" fill-opacity="0.6" stroke="#1e293b" stroke-width="1.8"/>
                    <line x1="60" y1="25" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <line x1="35" y1="95" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <line x1="60" y1="75" x2="150" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="68" y="112" fill="#1e293b" font-size="12" font-weight="bold">6 cm</text>
                    <text x="142" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 cm</text>
                    <text x="158" y="55" fill="#dc2626" font-size="12" font-weight="bold">5 cm</text>
                  </svg>
                </div>`,
            ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "(가로 6 cm) × (세로 4 cm) × (높이 5 cm)를 계산하면 됩니다.",
            h2: "6 × 4 × 5 를 계산해 보세요. (4 × 5 = 20 을 먼저 곱하면 암산이 쉬워요!)",
            checkTip: "6 × 4 × 5 = 6 × 20 = 120(cm³)입니다.",
            wrongDiag: {
              "15": "세 모서리를 더했어요(6+4+5)! 모두 곱해야 합니다.",
              "24": "밑면의 넓이(6×4=24)만 구했어요! 높이 5를 곱해 보세요."
            },
            diagDefault: "6 × 4 × 5 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 6 × 4 는 얼마인가요?", ans: "24" },
              { q: "2계단: 24에 높이 5를 곱하면 몇 cm³인가요?", ans: "120" }
            ]
          },
          {
            q: "[유형 1] 한 밑면의 넓이가 25 cm² 이고 높이가 6 cm인 직육면체의 부피는 몇 cm³인가요?",
            ans: "150", accept: ["150cm³", "150 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "직육면체의 부피는 (한 밑면의 넓이) × (높이)로 구합니다!",
            h2: "25 × 6 을 계산해 보세요.",
            checkTip: "(한 밑면의 넓이 25) × (높이 6) = 150(cm³)입니다.",
            wrongDiag: { "31": "25와 6을 더했어요! 두 수를 곱해야 부피가 나옵니다." },
            diagDefault: "25에 6을 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 한 밑면의 넓이(25)에 높이(6)를 곱하면 25 × 6 = 몇 cm³인가요?", ans: "150" } ]
          }
        ],
        [
          {
            q: "[유형 2] 한 모서리의 길이가 5 cm인 정육면체가 있습니다. 민수가 이 정육면체의 부피를 5 × 3 = 15(cm³)라고 잘못 계산했습니다. 바르게 계산한 정육면체의 부피는 몇 cm³인가요?",
            ans: "125", accept: ["125cm³", "125 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "정육면체의 부피는 (한 모서리) × 3 이 아니라, (한 모서리) × (한 모서리) × (한 모서리)입니다!",
            h2: "5 × 5 × 5 를 계산해 보세요.",
            checkTip: "5 × 5 × 5 = 25 × 5 = 125(cm³)입니다.",
            wrongDiag: {
              "15": "15는 민수가 잘못 구한 값이에요! 5를 세 번 곱해야 합니다(5 × 5 × 5).",
              "25": "5 × 5 는 한 면의 넓이예요! 여기에 높이 5를 한 번 더 곱해 보세요."
            },
            diagDefault: "5 × 5 = 25 에 5를 한 번 더 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 5 × 5 는 얼마인가요?", ans: "25" },
              { q: "2계단: 25에 5를 한 번 더 곱하면 정육면체의 부피는 몇 cm³인가요?", ans: "125" }
            ]
          },
          {
            q: "[유형 2] 가로가 8 cm, 세로가 5 cm, 높이가 2 cm인 직육면체의 부피와, 한 모서리의 길이가 4 cm인 정육면체의 부피의 차(큰 수 - 작은 수)는 몇 cm³인가요?",
            ans: "16", accept: ["16cm³", "16 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "먼저 직육면체의 부피(8 × 5 × 2)와 정육면체의 부피(4 × 4 × 4)를 각각 구해 보세요.",
            h2: "직육면체 부피(80 cm³)에서 정육면체 부피(64 cm³)를 빼 보세요.",
            checkTip: "직육면체(8×5×2=80 cm³) - 정육면체(4×4×4=64 cm³) = 16 cm³입니다.",
            wrongDiag: {
              "80": "직육면체의 부피(80 cm³)만 구했어요! 정육면체의 부피(64 cm³)를 빼야 합니다.",
              "68": "정육면체 부피를 4×3=12로 잘못 계산해서 뺐어요! 정육면체 부피는 4×4×4 = 64입니다."
            },
            diagDefault: "80에서 64를 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 직육면체의 부피는 8 × 5 × 2 = 몇 cm³인가요?", ans: "80" },
              { q: "2계단: 정육면체의 부피는 4 × 4 × 4 = 몇 cm³인가요?", ans: "64" },
              { q: "3계단: 두 부피의 차는 80 - 64 = 몇 cm³인가요?", ans: "16" }
            ]
          }
        ],
        [
          {
            q: `[유형 3] 다음 직육면체의 부피가 140 cm³ 일 때, 높이(□)는 몇 cm인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="30,45 120,45 145,25 55,25" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>
                    <polygon points="30,45 120,45 120,95 30,95" fill="#bbf7d0" fill-opacity="0.5" stroke="#15803d" stroke-width="1.8"/>
                    <polygon points="120,45 145,25 145,75 120,95" fill="#86efac" fill-opacity="0.6" stroke="#15803d" stroke-width="1.8"/>
                    <text x="38" y="75" fill="#1e293b" font-size="11" font-weight="bold">부피: 140 cm³</text>
                    <text x="62" y="112" fill="#1e293b" font-size="12" font-weight="bold">7 cm</text>
                    <text x="136" y="92" fill="#1e293b" font-size="12" font-weight="bold">5 cm</text>
                    <text x="153" y="55" fill="#dc2626" font-size="13" font-weight="bold">□ cm</text>
                  </svg>
                </div>`,
            ans: "4", accept: ["4cm", "4 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "7 × 5 × □ = 140 입니다! 먼저 한 밑면의 넓이(7 × 5 = 35)를 구해 보세요.",
            h2: "35 × □ = 140 이므로, 140을 35로 나누어 보세요(140 ÷ 35).",
            checkTip: "한 밑면의 넓이 = 7 × 5 = 35(cm²) ➔ 높이 = 140 ÷ 35 = 4(cm)입니다.",
            wrongDiag: { "35": "35는 가로와 세로를 곱한 한 밑면의 넓이예요! 전체 부피 140을 35로 나누어야 높이가 나옵니다." },
            diagDefault: "전체 부피(140)를 밑면의 넓이(7 × 5 = 35)로 나누어 보세요.",
            steps: [
              { q: "1계단: 가로(7 cm)와 세로(5 cm)를 곱한 밑면의 넓이는 몇 cm²인가요?", ans: "35" },
              { q: "2계단: 35 × □ = 140 이므로, 높이 □는 140 ÷ 35 = 몇 cm인가요?", ans: "4" }
            ]
          },
          {
            q: "[유형 3] 가로가 6 cm, 세로가 5 cm, 높이가 4 cm인 직육면체에서 가로와 세로는 그대로 두고 높이만 2배(8 cm)로 늘렸습니다. 늘어난 직육면체의 부피는 원래 부피의 몇 배가 되나요?",
            ans: "2", accept: ["2배"], unit: "배", placeholder: "숫자만 입력",
            h1: "가로와 세로가 그대로일 때 높이가 2배가 되면, 층수가 2배가 되는 것과 같습니다!",
            h2: "원래 부피는 6×5×4 = 120이고, 늘어난 부피는 6×5×8 = 240입니다. 몇 배인지 구해 보세요.",
            checkTip: "가로와 세로가 같을 때 높이가 2배가 되면 부피도 2배가 됩니다.",
            wrongDiag: { "8": "세 모서리가 모두 2배가 될 때 8배가 되고, 지금은 '높이만' 2배가 되었으므로 부피도 2배가 됩니다!" },
            diagDefault: "높이만 2배가 되었으므로 부피가 몇 배가 되는지 적어 보세요.",
            steps: [ { q: "1계단: 원래 부피(120 cm³)와 높이를 2배로 늘린 부피(240 cm³)를 비교하면 몇 배인가요?", ans: "2" } ]
          }
        ]
      ],
      step4Intro: "직육면체의 부피를 알고 한 모서리의 길이를 거꾸로 구할 때는, 먼저 알고 있는 두 모서리를 곱해 '한 면의 넓이'를 구한 뒤 전체 부피를 그 넓이로 나누어 주면 됩니다!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 가로가 7 cm, 세로가 3 cm, 높이가 4 cm인 직육면체의 부피는 몇 cm³인가요?",
            ans: "84", accept: ["84cm³", "84 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "7 × 3 × 4 를 계산해 보세요.", h2: "21 × 4 를 계산해 보세요.",
            checkTip: "7 × 3 × 4 = 84(cm³)입니다.", wrongDiag: {}, diagDefault: "7 × 3 × 4 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 7 × 3 은 얼마인가요?", ans: "21" },
              { q: "2계단: 21 × 4 는 몇 cm³인가요?", ans: "84" }
            ]
          },
          {
            q: "[쌍둥이 1-2] 한 밑면의 넓이가 32 cm² 이고 높이가 5 cm인 직육면체의 부피는 몇 cm³인가요?",
            ans: "160", accept: ["160cm³", "160 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "(한 밑면의 넓이) × (높이)를 계산합니다.", h2: "32 × 5 를 계산해 보세요.",
            checkTip: "32 × 5 = 160(cm³)입니다.", wrongDiag: {}, diagDefault: "32에 5를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 32 × 5 는 몇 cm³인가요?", ans: "160" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] 한 모서리의 길이가 6 cm인 정육면체의 부피는 몇 cm³인가요? (6 × 3 이 아니라 6 × 6 × 6 으로 계산하세요!)",
            ans: "216", accept: ["216cm³", "216 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "6 × 6 = 36 에 6을 한 번 더 곱해 보세요.", h2: "36 × 6 을 계산해 보세요.",
            checkTip: "6 × 6 × 6 = 216(cm³)입니다.",
            wrongDiag: { "18": "6 × 3 이 아니라 6 × 6 × 6 을 계산해야 합니다!", "36": "36에 높이 6을 한 번 더 곱해 보세요." },
            diagDefault: "36에 6을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 6 × 6 은 얼마인가요?", ans: "36" },
              { q: "2계단: 36 × 6 은 몇 cm³인가요?", ans: "216" }
            ]
          },
          {
            q: "[쌍둥이 2-2] 가로가 5 cm, 세로가 3 cm, 높이가 4 cm인 직육면체의 부피와, 한 모서리의 길이가 3 cm인 정육면체의 부피의 차는 몇 cm³인가요?",
            ans: "33", accept: ["33cm³", "33 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "직육면체의 부피(5×3×4 = 60)에서 정육면체의 부피(3×3×3 = 27)를 빼 보세요.", h2: "60 - 27 을 계산해 보세요.",
            checkTip: "60 - 27 = 33(cm³)입니다.", wrongDiag: {}, diagDefault: "60에서 27을 뺀 값을 입력해 보세요.",
            steps: [ { q: "1계단: 직육면체 부피(60)에서 정육면체 부피(27)를 빼면 얼마인가요?", ans: "33" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 부피가 180 cm³ 인 직육면체의 가로가 9 cm, 세로가 4 cm일 때, 높이는 몇 cm인가요?",
            ans: "5", accept: ["5cm", "5 cm"], unit: "cm", placeholder: "숫자만 입력",
            h1: "한 밑면의 넓이는 9 × 4 = 36(cm²)입니다.", h2: "180 ÷ 36 을 계산해 보세요.",
            checkTip: "180 ÷ (9 × 4) = 180 ÷ 36 = 5(cm)입니다.", wrongDiag: {}, diagDefault: "180을 36으로 나눈 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 밑면의 넓이는 9 × 4 = 몇 cm²인가요?", ans: "36" },
              { q: "2계단: 높이는 180 ÷ 36 = 몇 cm인가요?", ans: "5" }
            ]
          },
          {
            q: "[쌍둥이 3-2] 직육면체에서 가로와 세로의 길이는 그대로 두고 높이만 3배로 늘리면, 부피는 원래 부피의 몇 배가 되나요?",
            ans: "3", accept: ["3배"], unit: "배", placeholder: "숫자만 입력",
            h1: "밑면의 넓이가 같을 때 높이가 3배가 되면 부피도 똑같이 3배가 됩니다.", h2: "3을 입력해 보세요.",
            checkTip: "높이만 3배가 되면 부피도 3배가 됩니다.", wrongDiag: {}, diagDefault: "3을 입력해 보세요.",
            steps: [ { q: "1계단: 높이가 3배가 되면 부피는 몇 배가 되나요?", ans: "3" } ]
          }
        ]
      ],
      step5A: {
        q: "직육면체의 부피는 (가로) × (세로) × (높이)로 구하며, 모든 모서리의 길이가 같은 정육면체의 부피는 (한 모서리의 길이) × (한 모서리의 길이) × [ (1) 3 / (2) 한 모서리의 길이 ] 로 구합니다.",
        ans: "한 모서리의 길이", numAns: "2",
        hint: "💡 힌트: 정육면체는 가로, 세로, 높이가 모두 '한 모서리의 길이'와 같습니다."
      },
      step5B: { sentence: "직육면체의 부피는 가로 곱하기 세로 곱하기 높이이고 정육면체는 한 모서리를 세 번 곱한다." },
      nextUnit: "6-3"
    },

    "6-3": {
      title: "6-3차시: 부피의 큰 단위(m³)를 알아볼까요",
      goal: "부피의 큰 단위인 1 m³를 알고, 1 m³ = 1000000 cm³의 관계를 이해하여 단위를 변환합니다.",
      videoUrl: "https://youtube.com/shorts/OXs0cj0C26A?feature=share",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 1 m³(세제곱미터)는 왜 1,000,000 cm³일까요?</h4>
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
            <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
              <polygon points="20,40 75,40 95,20 40,20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
              <polygon points="20,40 75,40 75,95 20,95" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.8"/>
              <polygon points="75,40 95,20 95,75 75,95" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.8"/>
              <text x="16" y="114" fill="#1e293b" font-size="11" font-weight="bold">1 m (= 100 cm)</text>
              <rect x="115" y="15" width="195" height="100" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
              <text x="125" y="38" fill="#dc2626" font-size="12" font-weight="bold">⚡ 1 m³ = 몇 cm³ 일까?</text>
              <text x="125" y="60" fill="#1e293b" font-size="11">가로·세로·높이에 각각 100개씩</text>
              <text x="125" y="80" fill="#1e293b" font-size="11">= 100 × 100 × 100</text>
              <text x="125" y="102" fill="#dc2626" font-size="12" font-weight="bold">= 1,000,000 cm³ (백만)</text>
            </svg>
          </div>
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
            <li><strong>1 m³의 뜻:</strong> 한 모서리의 길이가 <strong>1 m</strong>인 정육면체의 부피를 <strong>1 m³</strong>라 쓰고, <strong>1 세제곱미터</strong>라고 읽습니다.</li>
            <li><strong>가장 많이 틀리는 함정:</strong> 1 m = 100 cm 라고 해서 1 m³ = 100 cm³가 아닙니다! 가로·세로·높이에 각각 100개씩 들어가므로 <strong>0이 6개인 1,000,000(백만) cm³</strong>입니다.</li>
          </ul>
        </div>
      `,
      warmup: [
        {
          q: "[복습] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 부피는 몇 cm³인가요?",
          ans: "24", accept: ["24cm³", "24 cm³"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "4 × 3 × 2 를 계산해 보세요.", h2: "12 × 2 를 계산해 보세요.",
          checkTip: "4 × 3 × 2 = 24(cm³)입니다.", wrongDiag: {}, diagDefault: "24를 입력해 보세요.",
          steps: [ { q: "1계단: 4 × 3 × 2 는 얼마인가요?", ans: "24" } ]
        }
      ],
      step1Quiz: [
        {
          q: "한 모서리의 길이가 1 m인 정육면체의 부피 단위를 '1 m³'라 쓰고 어떻게 읽나요?",
          choices: ["1번: 1 세제곱센티미터", "2번: 1 세제곱미터"],
          ans: "2",
          h1: "단위가 cm가 아니라 m(미터)입니다!",
          h2: "세제곱 뒤에 '미터'가 붙은 보기를 골라 보세요."
        },
        {
          q: "한 모서리가 1 m(100 cm)인 정육면체 모양의 상자에는 부피가 1 cm³인 쌓기나무가 모두 몇 개 들어갈까요?",
          choices: ["1번: 100개 (100 cm³)", "2번: 1000000개 (백만 개, 1000000 cm³)"],
          ans: "2",
          h1: "가로에 100개, 세로에 100개, 높이에 100층이 들어갑니다(100 × 100 × 100)!",
          h2: "1 뒤에 0이 6개 붙은 백만 개를 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "한 모서리의 길이가 1 m인 정육면체의 부피를 1 m³라 쓰고, 1 [ ① ]라고 읽습니다. (다섯 글자로 입력)",
          ans: "세제곱미터",
          h1: "m(미터)에 작은 3(세제곱)이 붙어 있는 단위입니다.",
          h2: "'세제곱' 뒤에 '미터'를 붙여 다섯 글자로 적어 보세요."
        },
        {
          q: "1 m = 100 cm 이므로 한 모서리가 1 m인 정육면체의 부피는 100 × 100 × 100 = 1000000(cm³)입니다. 따라서 3 m³를 cm³ 단위로 바꾸면 [ ① ] cm³입니다. (숫자만 입력, 0이 6개!)",
          ans: "3000000",
          h1: "1 m³가 1000000 cm³이므로, 3 m³는 3 뒤에 0을 6개 붙이면 됩니다.",
          h2: "3000000을 정확히 입력해 보세요."
        }
      ],
      step2_2: [
        {
          q: "가로가 4 m, 세로가 3 m, 높이가 2 m인 컨테이너 상자의 부피는 몇 m³인지 구해 보세요.",
          ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
          h1: "단위가 모두 m이므로 그대로 가로 × 세로 × 높이를 계산하면 m³가 됩니다.",
          h2: "4 × 3 × 2 를 계산해 보세요.",
          checkTip: "4 × 3 × 2 = 24(m³)입니다.",
          wrongDiag: { "9": "4 + 3 + 2 를 더했어요! 세 길이를 곱해야 부피가 됩니다." },
          diagDefault: "4 × 3 × 2 의 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 4 × 3 은 얼마인가요?", ans: "12" },
            { q: "2계단: 12에 높이 2를 곱하면 몇 m³인가요?", ans: "24" }
          ]
        },
        {
          q: "5000000 cm³(오백만 세제곱센티미터)는 몇 m³와 같은지 구해 보세요.",
          ans: "5", accept: ["5m³", "5 m³"], unit: "m³", placeholder: "숫자만 입력",
          h1: "1000000 cm³(0이 6개)가 1 m³와 같습니다.",
          h2: "5000000에서 뒤에 있는 0을 6개 지우면 얼마가 남는지 보세요.",
          checkTip: "1000000 cm³ = 1 m³ 이므로 5000000 cm³ = 5 m³입니다.",
          wrongDiag: {
            "50": "0을 5개만 지웠어요! 1 m³ = 1000000 cm³ 이므로 0을 6개 모두 지워야 합니다.",
            "500": "0을 6개 지워야 하므로 5 m³가 됩니다."
          },
          diagDefault: "5000000을 1000000으로 나눈 값을 입력해 보세요.",
          steps: [ { q: "1계단: 1000000 cm³는 1 m³입니다. 그렇다면 5000000 cm³는 몇 m³인가요?", ans: "5" } ]
        }
      ],
      step3A: [
        [
          {
            q: "[유형 1] 한 모서리의 길이가 2 m인 정육면체 모양의 물탱크가 있습니다. 이 물탱크의 부피는 몇 m³인가요?",
            ans: "8", accept: ["8m³", "8 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "정육면체의 부피는 (한 모서리) × (한 모서리) × (한 모서리)입니다.",
            h2: "2 × 2 × 2 를 계산해 보세요.",
            checkTip: "2 × 2 × 2 = 8(m³)입니다.",
            wrongDiag: { "6": "2 × 3 = 6 으로 계산했어요! 2를 세 번 곱하는 2 × 2 × 2 = 8(m³)입니다." },
            diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
            steps: [ { q: "1계단: 2 × 2 × 2 는 몇 m³인가요?", ans: "8" } ]
          },
          {
            q: "[유형 1] 부피가 '2.5 m³'인 돌덩이가 있습니다. 이 돌덩이의 부피를 cm³ 단위로 나타내면 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
            ans: "2500000", accept: ["2,500,000", "2500000cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1 m³ = 1000000 cm³ 이므로 2.5에 1000000을 곱해 소수점을 오른쪽으로 6칸 옮깁니다!",
            h2: "2 m³는 2000000 cm³이고, 0.5 m³는 500000 cm³입니다. 합쳐서 적어 보세요.",
            checkTip: "2.5 × 1000000 = 2500000(cm³)입니다.",
            wrongDiag: {
              "250000": "0이 하나 부족해요! 25 뒤에 0이 5개 붙어서 2500000(이백오십만)이 되어야 합니다.",
              "250": "100만 곱했어요! 부피 단위는 1000000(백만)을 곱해야 합니다."
            },
            diagDefault: "25 뒤에 0을 5개 붙인 2500000을 입력해 보세요.",
            steps: [
              { q: "1계단: 1 m³는 1000000 cm³입니다. 2 m³는 몇 cm³인가요?", ans: "2000000" },
              { q: "2계단: 여기에 0.5 m³(500000 cm³)를 더하면 모두 몇 cm³인가요?", ans: "2500000" }
            ]
          }
        ],
        [
          {
            q: "[유형 2] 현우는 '4 m³'를 cm³ 단위로 바꿀 때, 1 m = 100 cm 니까 4에 100을 곱해 400 cm³라고 잘못 적었습니다. 바르게 고친 값은 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
            ans: "4000000", accept: ["4,000,000", "4000000cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "부피 단위는 100을 세 번 곱한 1000000(백만)배 차이가 납니다!",
            h2: "4 뒤에 0을 6개 붙여서 입력해 보세요.",
            checkTip: "4 m³ = 4000000 cm³(사백만 세제곱센티미터)입니다.",
            wrongDiag: {
              "40000": "0을 4개만 붙였어요(넓이 단위와 혼동)! 부피는 100×100×100 이므로 0을 6개 붙여야 합니다.",
              "400000": "0이 5개예요! 0을 1개 더 붙여 6개가 되도록 해 보세요."
            },
            diagDefault: "4 뒤에 0을 6개 붙인 4000000을 입력해 보세요.",
            steps: [
              { q: "1계단: 1 m³는 1 뒤에 0이 몇 개 붙는 cm³인가요?", ans: "6" },
              { q: "2계단: 따라서 4 m³를 cm³로 바꾸면 4 뒤에 0을 6개 붙여 얼마인가요?", ans: "4000000" }
            ]
          },
          {
            q: "[유형 2] 다음 두 부피 (가)와 (나) 중에서 더 큰 것의 기호를 쓰세요.<br>(가) 3 m³ &nbsp;&nbsp;&nbsp; (나) 300000 cm³(삼십만 세제곱센티미터)",
            ans: "가", accept: ["(가)", "가번"], placeholder: "기호 입력 (가 또는 나)",
            h1: "0의 개수를 정확히 세어 보세요! (가) 3 m³를 cm³로 바꾸면 0이 6개 붙습니다.",
            h2: "(가)는 3000000 cm³(삼백만, 0이 6개)이고, (나)는 300000 cm³(삼십만, 0이 5개)입니다.",
            checkTip: "(가) 3 m³ = 3,000,000 cm³ 이므로 300,000 cm³인 (나)보다 10배 더 큽니다!",
            wrongDiag: { "나": "(나)는 0이 5개뿐인 300,000(삼십만) cm³예요! (가) 3 m³는 0이 6개인 3,000,000(삼백만) cm³이므로 (가)가 훨씬 더 큽니다!" },
            diagDefault: "3,000,000 cm³인 (가)와 300,000 cm³인 (나) 중 더 큰 기호를 골라 보세요.",
            steps: [ { q: "1계단: (가) 3 m³는 3000000 cm³(삼백만)입니다. 삼십만인 (나)와 비교할 때 어느 쪽이 더 큰가요?", ans: "가" } ]
          }
        ],
        [
          {
            q: `[유형 3] 다음 직육면체 모양의 창고는 가로와 세로는 m 단위로, 높이는 cm 단위로 적혀 있습니다. 단위를 모두 m로 통일하여 구한 이 창고의 부피는 몇 m³인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="30,45 120,45 145,25 55,25" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
                    <polygon points="30,45 120,45 120,95 30,95" fill="#fde68a" fill-opacity="0.6" stroke="#b45309" stroke-width="1.8"/>
                    <polygon points="120,45 145,25 145,75 120,95" fill="#fcd34d" fill-opacity="0.7" stroke="#b45309" stroke-width="1.8"/>
                    <text x="62" y="112" fill="#1e293b" font-size="12" font-weight="bold">5 m</text>
                    <text x="136" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 m</text>
                    <text x="150" y="55" fill="#dc2626" font-size="12" font-weight="bold">300 cm</text>
                  </svg>
                </div>`,
            ans: "60", accept: ["60m³", "60 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "단위가 다를 때는 절대 그대로 곱하면 안 됩니다! 먼저 높이 '300 cm'를 m 단위로 바꾸어 보세요.",
            h2: "100 cm = 1 m 이므로 300 cm = 3 m 입니다. 이제 5 × 4 × 3 을 계산해 보세요!",
            checkTip: "300 cm = 3 m 이므로, 부피는 5 × 4 × 3 = 60(m³)입니다.",
            wrongDiag: { "6000": "앗! 300 cm를 m로 바꾸지 않고 5 × 4 × 300 을 그대로 곱했어요! 300 cm = 3 m로 바꾼 뒤 곱해야 합니다." },
            diagDefault: "300 cm를 3 m로 바꾼 뒤 5 × 4 × 3 을 계산해 보세요.",
            steps: [
              { q: "1계단: 높이 300 cm를 m 단위로 바꾸면 몇 m인가요?", ans: "3" },
              { q: "2계단: 가로(5 m) × 세로(4 m) × 높이(3 m)를 계산하면 몇 m³인가요?", ans: "60" }
            ]
          },
          {
            q: "[유형 3] 가로가 200 cm, 세로가 300 cm, 높이가 2 m인 직육면체 모양의 구조물이 있습니다. 이 구조물의 부피는 몇 m³인가요?",
            ans: "12", accept: ["12m³", "12 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "가로 200 cm와 세로 300 cm를 먼저 각각 m 단위로 바꾸면 훨씬 쉽게 구할 수 있습니다!",
            h2: "200 cm = 2 m, 300 cm = 3 m 입니다. 2 × 3 × 2 를 계산해 보세요.",
            checkTip: "가로 2 m × 세로 3 m × 높이 2 m = 12(m³)입니다.",
            wrongDiag: { "120000": "200과 300을 m로 바꾸지 않고 그대로 곱했어요! 200 cm = 2 m, 300 cm = 3 m로 바꾸어 곱해 보세요." },
            diagDefault: "2 m × 3 m × 2 m 를 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 가로 200 cm는 2 m이고, 세로 300 cm는 몇 m인가요?", ans: "3" },
              { q: "2계단: 2 × 3 × 2 를 계산하면 부피는 몇 m³인가요?", ans: "12" }
            ]
          }
        ]
      ],
      step4Intro: "1 m³ = 1,000,000 cm³(0이 6개!)라는 점과, m와 cm가 섞여 있을 때는 먼저 단위를 통일한 뒤에 곱한다는 원칙만 지키면 실수할 일이 없어요!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 한 모서리의 길이가 3 m인 정육면체 모양의 방이 있습니다. 이 방의 부피는 몇 m³인가요?",
            ans: "27", accept: ["27m³", "27 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "3 × 3 × 3 을 계산해 보세요.", h2: "9 × 3 을 계산해 보세요.",
            checkTip: "3 × 3 × 3 = 27(m³)입니다.", wrongDiag: { "9": "3 × 3 × 3 = 27(m³)입니다!" },
            diagDefault: "27을 입력해 보세요.",
            steps: [ { q: "1계단: 3 × 3 × 3 은 몇 m³인가요?", ans: "27" } ]
          },
          {
            q: "[쌍둥이 1-2] 부피 '1.8 m³'를 cm³ 단위로 나타내면 몇 cm³인가요? (쉼표 없이 숫자만 입력)",
            ans: "1800000", accept: ["1,800,000", "1800000cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1.8에 1000000을 곱해 18 뒤에 0을 5개 붙이면 됩니다.", h2: "1800000을 입력해 보세요.",
            checkTip: "1.8 m³ = 1800000 cm³입니다.", wrongDiag: {}, diagDefault: "1800000을 입력해 보세요.",
            steps: [ { q: "1계단: 1.8 × 1000000 은 얼마인가요?", ans: "1800000" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] '7 m³'를 cm³ 단위로 바르게 고치면 몇 cm³인가요? (쉼표 없이 숫자만 입력, 0이 6개!)",
            ans: "7000000", accept: ["7,000,000", "7000000cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "7 뒤에 0을 6개 붙여 보세요.", h2: "7000000을 입력해 보세요.",
            checkTip: "7 m³ = 7000000 cm³입니다.", wrongDiag: {}, diagDefault: "7 뒤에 0을 6개 붙인 수를 입력해 보세요.",
            steps: [ { q: "1계단: 7 뒤에 0을 6개 붙이면 얼마인가요?", ans: "7000000" } ]
          },
          {
            q: "[쌍둥이 2-2] 다음 두 부피 (가)와 (나) 중에서 더 큰 것의 기호를 쓰세요.<br>(가) 500000 cm³ &nbsp;&nbsp;&nbsp; (나) 2 m³",
            ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
            h1: "(가)는 0.5 m³(오십만 cm³)이고, (나)는 2000000 cm³(이백만 cm³)입니다.", h2: "더 큰 부피의 기호를 골라 보세요.",
            checkTip: "(나) 2 m³ = 2,000,000 cm³ 이므로 (나)가 더 큽니다.",
            wrongDiag: { "가": "(가)는 0이 5개뿐인 500,000 cm³(0.5 m³)예요! 2 m³인 (나)가 더 큽니다." },
            diagDefault: "2,000,000 cm³인 (나)를 골라 보세요.",
            steps: [ { q: "1계단: 0.5 m³인 (가)와 2 m³인 (나) 중 더 큰 것은 어느 것인가요?", ans: "나" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 가로가 6 m, 세로가 3 m, 높이가 200 cm인 직육면체 모양의 수영장이 있습니다. 이 수영장의 부피는 몇 m³인가요?",
            ans: "36", accept: ["36m³", "36 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "높이 200 cm를 2 m로 바꾼 뒤 곱하세요.", h2: "6 × 3 × 2 를 계산해 보세요.",
            checkTip: "200 cm = 2 m 이므로 6 × 3 × 2 = 36(m³)입니다.",
            wrongDiag: { "3600": "200 cm를 2 m로 바꾼 뒤 곱해야 합니다!" },
            diagDefault: "6 × 3 × 2 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 200 cm는 몇 m인가요?", ans: "2" },
              { q: "2계단: 6 × 3 × 2 는 몇 m³인가요?", ans: "36" }
            ]
          },
          {
            q: "[쌍둥이 3-2] 가로가 400 cm, 세로가 200 cm, 높이가 3 m인 직육면체의 부피는 몇 m³인가요?",
            ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "400 cm = 4 m, 200 cm = 2 m로 바꾼 뒤 곱하세요.", h2: "4 × 2 × 3 을 계산해 보세요.",
            checkTip: "4 m × 2 m × 3 m = 24(m³)입니다.", wrongDiag: {}, diagDefault: "4 × 2 × 3 의 값을 입력해 보세요.",
            steps: [ { q: "1계단: 4 × 2 × 3 은 몇 m³인가요?", ans: "24" } ]
          }
        ]
      ],
      step5A: {
        q: "한 모서리의 길이가 1 m(100 cm)인 정육면체의 부피는 1 m³이며, 이를 cm³ 단위로 바꾸면 100을 세 번 곱한 [ (1) 10000 cm³ / (2) 1000000 cm³ ] 와 같습니다.",
        ans: "1000000 cm³", numAns: "2",
        hint: "💡 힌트: 100 × 100 × 100 은 1 뒤에 0이 6개 붙는 백만입니다."
      },
      step5B: { sentence: "한 모서리가 일 미터인 정육면체의 부피는 일 세제곱미터이며 백만 세제곱센티미터와 같다." },
      nextUnit: "6-4"
    },

    "6-4": {
      title: "6-4차시: 직육면체의 겉넓이 구하는 방법을 알아볼까요 (1)",
      goal: "직육면체의 여섯 면의 넓이의 합인 겉넓이의 뜻을 알고, 세 쌍의 합동인 면을 이용해 겉넓이를 구합니다.",
      videoUrl: "https://youtube.com/shorts/JeGBm6otYRc?feature=share",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 직육면체와 정육면체의 겉넓이 공식 (1)</h4>
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
            <svg viewBox="0 0 320 130" style="width:100%; max-width:320px; height:auto;">
              <polygon points="20,45 85,45 105,25 40,25" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
              <polygon points="20,45 85,45 85,95 20,95" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
              <polygon points="85,45 105,25 105,75 85,95" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
              <text x="45" y="38" fill="#1e3a8a" font-size="10" font-weight="bold">윗면(ㄱ)</text>
              <text x="38" y="74" fill="#854d0e" font-size="10" font-weight="bold">앞면(ㄴ)</text>
              <text x="86" y="65" fill="#14532d" font-size="9" font-weight="bold">옆(ㄷ)</text>
              <rect x="122" y="12" width="188" height="52" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
              <text x="130" y="32" fill="#0369a1" font-size="11" font-weight="bold">① 직육면체의 겉넓이 (6면의 합)</text>
              <text x="130" y="52" fill="#dc2626" font-size="11" font-weight="bold">= (ㄱ + ㄴ + ㄷ) × 2</text>
              <rect x="122" y="72" width="188" height="48" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="130" y="91" fill="#b45309" font-size="11" font-weight="bold">② 정육면체의 겉넓이 (6면이 합동)</text>
              <text x="130" y="109" fill="#1e293b" font-size="11" font-weight="bold">= (한 면의 넓이) × 6</text>
            </svg>
          </div>
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
            <li><strong>겉넓이의 뜻:</strong> 직육면체를 둘러싸고 있는 <strong>여섯 면의 넓이를 모두 더한 것</strong>입니다. (단위는 넓이 단위인 <strong>cm², m²</strong>를 씁니다!)</li>
            <li><strong>핵심 비법:</strong> 직육면체는 마주 보는 두 면끼리 서로 합동이므로, <strong>한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이를 더한 뒤 마지막에 꼭 2를 곱합니다!</strong></li>
          </ul>
        </div>
      `,
      warmup: [
        {
          q: "[복습] 1 m³는 몇 cm³와 같나요? (쉼표 없이 숫자만 입력, 0이 6개!)",
          ans: "1000000", accept: ["1,000,000"], unit: "cm³", placeholder: "숫자만 입력",
          h1: "100 × 100 × 100 을 생각해 보세요.", h2: "1 뒤에 0을 6개 붙여 보세요.",
          checkTip: "1 m³ = 1000000 cm³입니다.", wrongDiag: {}, diagDefault: "1000000을 입력해 보세요.",
          steps: [ { q: "1계단: 1 뒤에 0을 6개 붙인 수는 얼마인가요?", ans: "1000000" } ]
        }
      ],
      step1Quiz: [
        {
          q: "직육면체에서 한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이를 각각 구하여 더했더니 25 cm²가 되었습니다. 이 직육면체의 전체 '겉넓이(여섯 면의 넓이의 합)'는 몇 cm²인가요?",
          choices: ["1번: 25 cm²", "2번: 50 cm² (25 × 2)"],
          ans: "2",
          h1: "직육면체는 마주 보는 합동인 면이 2개씩 총 6개의 면으로 이루어져 있습니다!",
          h2: "세 면의 넓이의 합(25 cm²)에 2를 곱한 값을 골라 보세요."
        },
        {
          q: "정육면체는 합동인 정사각형 6개로 둘러싸여 있습니다. 한 면의 넓이가 10 cm²인 정육면체의 겉넓이는 몇 cm²인가요?",
          choices: ["1번: 40 cm²", "2번: 60 cm² (10 × 6)"],
          ans: "2",
          h1: "똑같은 면이 6개 있으므로 한 면의 넓이에 6을 곱하면 됩니다.",
          h2: "10 × 6 을 계산한 보기를 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "직육면체의 여섯 면의 넓이의 합을 직육면체의 [ ① ]라고 합니다.",
          ans: "겉넓이",
          h1: "오늘 차시 제목에 들어 있는 세 글자 수학 용어입니다.",
          h2: "겉을 둘러싼 여섯 면의 넓이의 합을 부르는 세 글자 단어를 적어 보세요."
        },
        {
          q: "한 모서리의 길이가 3 cm인 정육면체에서 한 면(정사각형)의 넓이는 3 × 3 = 9(cm²)이고, 합동인 면이 6개이므로 정육면체의 겉넓이는 9 × 6 = [ ① ] cm²입니다.",
          ans: "54",
          h1: "한 면의 넓이 9 cm²에 면의 개수 6을 곱해 보세요.",
          h2: "9 × 6 의 값을 숫자로 적어 보세요."
        }
      ],
      step2_2: [
        {
          q: `다음 직육면체에서 한 꼭짓점에서 만나는 세 면(윗면, 앞면, 옆면)의 넓이는 각각 (5×4=20), (5×3=15), (4×3=12)입니다. 이 직육면체의 전체 '겉넓이'는 몇 cm²인지 구해 보세요.
              <div style="text-align:center; margin:10px 0;">
                <svg viewBox="0 0 240 120" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                  <polygon points="35,45 125,45 150,25 60,25" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                  <polygon points="35,45 125,45 125,95 35,95" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                  <polygon points="125,45 150,25 150,75 125,95" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
                  <text x="68" y="112" fill="#1e293b" font-size="12" font-weight="bold">5 cm</text>
                  <text x="142" y="92" fill="#1e293b" font-size="12" font-weight="bold">4 cm</text>
                  <text x="158" y="55" fill="#dc2626" font-size="12" font-weight="bold">3 cm</text>
                </svg>
              </div>`,
          ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
          h1: "한 꼭짓점에서 만나는 세 면의 넓이(20, 15, 12)를 먼저 모두 더한 다음, 마주 보는 면이 하나씩 더 있으므로 마지막에 2를 곱하세요!",
          h2: "(20 + 15 + 12) × 2 를 계산해 보세요.",
          checkTip: "(20 + 15 + 12) × 2 = 47 × 2 = 94(cm²)입니다.",
          wrongDiag: {
            "47": "앗! 세 면의 넓이의 합(47 cm²)만 구했어요. 마주 보는 합동인 면이 2쌍씩 있으므로 마지막에 꼭 2를 곱해 94 cm²가 되어야 합니다!",
            "60": "60은 부피(5×4×3)예요! 지금은 겉넓이를 구하는 문제입니다."
          },
          diagDefault: "세 면의 합(20+15+12=47)에 2를 곱한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 세 면의 넓이 20, 15, 12를 모두 더하면 얼마인가요?", ans: "47" },
            { q: "2계단: 마주 보는 면까지 합쳐 47에 2를 곱하면 전체 겉넓이는 몇 cm²인가요?", ans: "94" }
          ]
        },
        {
          q: "한 모서리의 길이가 5 cm인 정육면체의 겉넓이는 몇 cm²인지 구해 보세요.",
          ans: "150", accept: ["150cm²", "150 cm²"], unit: "cm²", placeholder: "숫자만 입력",
          h1: "정육면체의 겉넓이는 (한 면의 넓이) × 6 으로 구합니다.",
          h2: "한 면의 넓이는 5 × 5 = 25(cm²)입니다. 여기에 6을 곱해 보세요(25 × 6).",
          checkTip: "(한 면의 넓이 5 × 5 = 25) × 6 = 150(cm²)입니다.",
          wrongDiag: {
            "125": "125는 정육면체의 '부피(5×5×5)'예요! '겉넓이'는 한 면의 넓이(25)에 면의 개수 6을 곱해야 합니다.",
            "25": "한 면의 넓이(25 cm²)만 구했어요! 정육면체는 면이 6개이므로 6을 곱해 보세요."
          },
          diagDefault: "한 면의 넓이(5 × 5 = 25)에 6을 곱한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 한 모서리가 5 cm인 정사각형 한 면의 넓이는 5 × 5 = 몇 cm²인가요?", ans: "25" },
            { q: "2계단: 똑같은 면이 6개이므로 25 × 6 = 몇 cm²인가요?", ans: "150" }
          ]
        }
      ],
      step3A: [
        [
          {
            q: "[유형 1] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 겉넓이는 몇 cm²인가요?",
            ans: "52", accept: ["52cm²", "52 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (4×3=12), (4×2=8), (3×2=6)입니다.",
            h2: "(12 + 8 + 6) × 2 를 계산해 보세요.",
            checkTip: "(12 + 8 + 6) × 2 = 26 × 2 = 52(cm²)입니다.",
            wrongDiag: {
              "26": "세 면의 넓이의 합(26)만 구했어요! 마지막에 2를 곱해야 여섯 면의 넓이의 합이 됩니다.",
              "24": "24는 부피(4×3×2)예요! 겉넓이는 (12 + 8 + 6) × 2 로 구합니다."
            },
            diagDefault: "(12 + 8 + 6)에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 꼭짓점에서 만나는 세 면의 넓이 12, 8, 6을 더하면 얼마인가요?", ans: "26" },
              { q: "2계단: 여기에 2를 곱하면 전체 겉넓이는 몇 cm²인가요?", ans: "52" }
            ]
          },
          {
            q: "[유형 1] 한 모서리의 길이가 4 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
            ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 면의 넓이(4 × 4 = 16)에 6을 곱하면 됩니다.",
            h2: "16 × 6 을 계산해 보세요.",
            checkTip: "(4 × 4) × 6 = 16 × 6 = 96(cm²)입니다.",
            wrongDiag: {
              "64": "64는 정육면체의 부피(4×4×4)예요! 겉넓이는 (4 × 4) × 6 = 96(cm²)입니다.",
              "16": "한 면의 넓이(16)에 6을 곱해야 합니다!"
            },
            diagDefault: "16에 6을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 면의 넓이는 4 × 4 = 몇 cm²인가요?", ans: "16" },
              { q: "2계단: 16 × 6 은 몇 cm²인가요?", ans: "96" }
            ]
          }
        ],
        [
          {
            q: "[유형 2] 슬기는 가로가 6 cm, 세로가 5 cm, 높이가 2 cm인 직육면체의 겉넓이를 구할 때, 한 꼭짓점에서 만나는 세 면의 넓이(30 + 12 + 10)만 더해서 52 cm²라고 잘못 적었습니다. 바르게 구한 전체 겉넓이는 몇 cm²인가요?",
            ans: "104", accept: ["104cm²", "104 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "슬기는 여섯 면 중 세 면의 넓이만 더했습니다! 마주 보는 합동인 면이 하나씩 더 있으므로 2를 곱해야 합니다.",
            h2: "52 × 2 를 계산해 보세요.",
            checkTip: "(30 + 12 + 10) × 2 = 52 × 2 = 104(cm²)입니다.",
            wrongDiag: {
              "52": "52는 슬기가 2를 곱하지 않아 틀린 답이에요! 52에 2를 곱해 보세요.",
              "60": "60은 부피(6×5×2)입니다!"
            },
            diagDefault: "52에 2를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 세 면의 넓이의 합이 52이므로, 여섯 면의 넓이의 합은 52 × 2 = 몇 cm²인가요?", ans: "104" } ]
          },
          {
            q: "[유형 2] 한 모서리의 길이가 6 cm인 정육면체의 겉넓이와 한 모서리의 길이가 2 cm인 정육면체의 겉넓이의 차는 몇 cm²인가요?",
            ans: "192", accept: ["192cm²", "192 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "큰 정육면체의 겉넓이((6×6)×6 = 216)에서 작은 정육면체의 겉넓이((2×2)×6 = 24)를 빼 보세요.",
            h2: "216 - 24 를 계산해 보세요.",
            checkTip: "큰 정육면체 겉넓이(36×6=216) - 작은 정육면체 겉넓이(4×6=24) = 192(cm²)입니다.",
            wrongDiag: { "216": "큰 정육면체의 겉넓이만 구했어요! 작은 정육면체의 겉넓이(24)를 빼 보세요." },
            diagDefault: "216에서 24를 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 모서리가 6 cm인 정육면체의 겉넓이는 (6×6)×6 = 몇 cm²인가요?", ans: "216" },
              { q: "2계단: 한 모서리가 2 cm인 정육면체의 겉넓이는 (2×2)×6 = 몇 cm²인가요?", ans: "24" },
              { q: "3계단: 두 겉넓이의 차는 216 - 24 = 몇 cm²인가요?", ans: "192" }
            ]
          }
        ],
        [
          {
            q: "[유형 3] 가로가 10 cm, 세로가 6 cm, 높이가 5 cm인 직육면체 모양의 선물 상자가 있습니다. 이 상자의 모든 면을 포장지로 겹치지 않게 빈틈없이 감싸려면 최소 몇 cm²의 포장지가 필요한가요?",
            ans: "280", accept: ["280cm²", "280 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "상자를 빈틈없이 감싸는 포장지의 넓이는 직육면체의 '겉넓이'와 같습니다!",
            h2: "한 꼭짓점에서 만나는 세 면의 넓이는 (10×6=60), (10×5=50), (6×5=30)입니다. (60 + 50 + 30) × 2 를 계산해 보세요.",
            checkTip: "(60 + 50 + 30) × 2 = 140 × 2 = 280(cm²)입니다.",
            wrongDiag: {
              "140": "세 면의 넓이의 합(140)만 구했어요! 마지막에 2를 곱해야 합니다.",
              "300": "300은 상자의 부피(10×6×5)예요! 포장지의 넓이는 겉넓이로 구해야 합니다."
            },
            diagDefault: "(60 + 50 + 30) × 2 를 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 세 면의 넓이 60, 50, 30을 모두 더하면 얼마인가요?", ans: "140" },
              { q: "2계단: 여기에 2를 곱하면 필요한 포장지의 넓이는 몇 cm²인가요?", ans: "280" }
            ]
          },
          {
            q: "[유형 3] 정육면체 모양의 나무 블록의 겉넓이를 구했더니 54 cm²였습니다. 이 정육면체 나무 블록의 '한 면의 넓이'는 몇 cm²인가요?",
            ans: "9", accept: ["9cm²", "9 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "정육면체는 똑같은 정사각형 면 6개로 이루어져 있습니다!",
            h2: "전체 겉넓이(54 cm²)를 면의 개수(6개)로 나누어 보세요(54 ÷ 6).",
            checkTip: "54 ÷ 6 = 9(cm²)입니다. (따라서 한 모서리의 길이는 3 cm입니다.)",
            wrongDiag: { "3": "3 cm는 한 모서리의 길이예요! 문제에서는 '한 면의 넓이(cm²)'를 물었으니 54 ÷ 6 = 9(cm²)를 답해야 합니다." },
            diagDefault: "전체 겉넓이 54를 6으로 나눈 값을 입력해 보세요.",
            steps: [ { q: "1계단: 여섯 면의 넓이의 합이 54 cm²이므로, 한 면의 넓이는 54 ÷ 6 = 몇 cm²인가요?", ans: "9" } ]
          }
        ]
      ],
      step4Intro: "직육면체의 겉넓이는 (한 꼭짓점에서 만나는 세 면의 넓이의 합) × 2, 정육면체의 겉넓이는 (한 면의 넓이) × 6 이라는 공식만 정확히 기억하면 부피와 절대 헷갈리지 않아요!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 가로가 5 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 겉넓이는 몇 cm²인가요?",
            ans: "62", accept: ["62cm²", "62 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (5×3=15), (5×2=10), (3×2=6)입니다.", h2: "(15 + 10 + 6) × 2 를 계산해 보세요.",
            checkTip: "(15 + 10 + 6) × 2 = 31 × 2 = 62(cm²)입니다.",
            wrongDiag: { "31": "마지막에 2를 곱해야 여섯 면의 합이 됩니다!", "30": "30은 부피(5×3×2)입니다!" },
            diagDefault: "31에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 15 + 10 + 6 은 얼마인가요?", ans: "31" },
              { q: "2계단: 31 × 2 는 몇 cm²인가요?", ans: "62" }
            ]
          },
          {
            q: "[쌍둥이 1-2] 한 모서리의 길이가 7 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
            ans: "294", accept: ["294cm²", "294 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 면의 넓이(7 × 7 = 49)에 6을 곱해 보세요.", h2: "49 × 6 을 계산해 보세요.",
            checkTip: "49 × 6 = 294(cm²)입니다.", wrongDiag: { "49": "한 면의 넓이(49)에 6을 곱해야 합니다!" },
            diagDefault: "49에 6을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 면의 넓이는 7 × 7 = 몇 cm²인가요?", ans: "49" },
              { q: "2계단: 49 × 6 은 몇 cm²인가요?", ans: "294" }
            ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] 가로가 7 cm, 세로가 4 cm, 높이가 2 cm인 직육면체에서 한 꼭짓점에서 만나는 세 면의 넓이의 합이 28 + 14 + 8 = 50(cm²)입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
            ans: "100", accept: ["100cm²", "100 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "세 면의 넓이의 합(50 cm²)에 2를 곱하면 됩니다.", h2: "50 × 2 를 계산해 보세요.",
            checkTip: "50 × 2 = 100(cm²)입니다.", wrongDiag: {}, diagDefault: "50에 2를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 50 × 2 는 몇 cm²인가요?", ans: "100" } ]
          },
          {
            q: "[쌍둥이 2-2] 한 모서리의 길이가 5 cm인 정육면체의 겉넓이(150 cm²)와 한 모서리의 길이가 3 cm인 정육면체의 겉넓이의 차는 몇 cm²인가요?",
            ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 모서리가 3 cm인 정육면체의 겉넓이는 (3 × 3) × 6 = 54(cm²)입니다.", h2: "150 - 54 를 계산해 보세요.",
            checkTip: "150 - 54 = 96(cm²)입니다.", wrongDiag: {}, diagDefault: "150에서 54를 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 작은 정육면체의 겉넓이는 9 × 6 = 몇 cm²인가요?", ans: "54" },
              { q: "2계단: 150 - 54 는 몇 cm²인가요?", ans: "96" }
            ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 가로가 8 cm, 세로가 5 cm, 높이가 3 cm인 직육면체 상자의 모든 면을 색종이로 빈틈없이 붙이려고 합니다. 필요한 색종이의 넓이는 최소 몇 cm²인가요?",
            ans: "158", accept: ["158cm²", "158 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 꼭짓점에서 만나는 세 면의 넓이는 (8×5=40), (8×3=24), (5×3=15)입니다.", h2: "(40 + 24 + 15) × 2 를 계산해 보세요.",
            checkTip: "79 × 2 = 158(cm²)입니다.", wrongDiag: { "79": "79에 2를 곱해야 합니다!" },
            diagDefault: "79에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 40 + 24 + 15 는 얼마인가요?", ans: "79" },
              { q: "2계단: 79 × 2 는 몇 cm²인가요?", ans: "158" }
            ]
          },
          {
            q: "[쌍둥이 3-2] 겉넓이가 150 cm²인 정육면체 상자의 '한 면의 넓이'는 몇 cm²인가요?",
            ans: "25", accept: ["25cm²", "25 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "전체 겉넓이 150 cm²를 면의 개수 6으로 나누어 보세요.", h2: "150 ÷ 6 을 계산해 보세요.",
            checkTip: "150 ÷ 6 = 25(cm²)입니다.", wrongDiag: {}, diagDefault: "150을 6으로 나눈 값을 입력해 보세요.",
            steps: [ { q: "1계단: 150 ÷ 6 은 몇 cm²인가요?", ans: "25" } ]
          }
        ]
      ],
      step5A: {
        q: "직육면체의 여섯 면의 넓이의 합을 겉넓이라고 하며, 한 꼭짓점에서 만나는 서로 다른 세 면의 넓이의 합에 [ (1) 2 / (2) 6 ] 를 곱하여 구합니다.",
        ans: "2", numAns: "1",
        hint: "💡 힌트: 마주 보는 합동인 면이 한 쌍씩 더 있으므로 세 면의 넓이의 합을 몇 배 해야 할까요?"
      },
      step5B: { sentence: "직육면체의 겉넓이는 한 꼭짓점에서 만나는 세 면의 넓이의 합을 두 배 하고 정육면체는 한 면의 넓이를 여섯 배 한다." },
      nextUnit: "6-5"
    },

    "6-5": {
      title: "6-5차시: 직육면체의 겉넓이 구하는 방법을 알아볼까요 (2)",
      goal: "직육면체의 전개도를 이용하여 (두 밑면의 넓이) + (옆면 전체의 넓이)로 겉넓이를 구합니다.",
      videoUrl: "https://youtube.com/shorts/Y3WEqmjg3TM?feature=share",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 전개도를 이용하여 직육면체의 겉넓이 구하기</h4>
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
            <svg viewBox="0 0 320 155" style="width:100%; max-width:320px; height:auto;">
              <rect x="20" y="50" width="160" height="45" fill="#fde047" fill-opacity="0.7"/>
              <rect x="45" y="25" width="55" height="25" fill="#93c5fd"/>
              <rect x="45" y="95" width="55" height="25" fill="#93c5fd"/>
              <polyline points="45,50 20,50 20,95 45,95 45,120 100,120 100,95 180,95 180,50 100,50 100,25 45,25 45,50" fill="none" stroke="#1e293b" stroke-width="1.8"/>
              <line x1="45" y1="50" x2="100" y2="50" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
              <line x1="45" y1="95" x2="100" y2="95" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
              <line x1="45" y1="50" x2="45" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="100" y1="50" x2="100" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="125" y1="50" x2="125" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
              <text x="58" y="42" fill="#1e3a8a" font-size="11" font-weight="bold">밑면</text>
              <text x="58" y="112" fill="#1e3a8a" font-size="11" font-weight="bold">밑면</text>
              <text x="55" y="77" fill="#854d0e" font-size="11" font-weight="bold">옆면 전체 (큰 직사각형)</text>
              <line x1="20" y1="138" x2="180" y2="138" stroke="#16a34a" stroke-width="2"/>
              <text x="35" y="151" fill="#15803d" font-size="11" font-weight="bold">가로 합 = 한 밑면의 둘레!</text>
              <text x="190" y="55" fill="#1e293b" font-size="11" font-weight="bold">● 겉넓이</text>
              <text x="190" y="75" fill="#1d4ed8" font-size="11" font-weight="bold">= (한 밑면 넓이)×2</text>
              <text x="190" y="95" fill="#b45309" font-size="11" font-weight="bold">+ (옆면 전체 넓이)</text>
            </svg>
          </div>
          <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
            <li><strong>전개도로 겉넓이 구하기:</strong> <strong>(한 밑면의 넓이) × 2 + (옆면 전체의 넓이)</strong></li>
            <li><strong>옆면 전체의 넓이 공식:</strong> 옆면 4개를 따로 구하지 않고 큰 직사각형 하나로 보면, <strong>(한 밑면의 둘레) × (높이)</strong>로 한 번에 구할 수 있습니다!</li>
          </ul>
        </div>
      `,
      warmup: [
        {
          q: "[복습] 한 모서리의 길이가 4 cm인 정육면체의 겉넓이는 몇 cm²인가요?",
          ans: "96", accept: ["96cm²", "96 cm²"], unit: "cm²", placeholder: "숫자만 입력",
          h1: "(한 면의 넓이 4 × 4 = 16) × 6 을 계산해 보세요.", h2: "16 × 6 의 값을 적어 보세요.",
          checkTip: "16 × 6 = 96(cm²)입니다.", wrongDiag: {}, diagDefault: "96을 입력해 보세요.",
          steps: [ { q: "1계단: 16 × 6 은 얼마인가요?", ans: "96" } ]
        }
      ],
      step1Quiz: [
        {
          q: "직육면체의 전개도에서 옆면 4개를 이어 붙인 '큰 직사각형의 가로 길이'는 무엇과 같나요?",
          choices: ["1번: 한 밑면의 둘레의 길이", "2번: 한 밑면의 넓이"],
          ans: "1",
          h1: "2단원 각기둥의 전개도에서 배웠던 성질과 똑같습니다!",
          h2: "옆면들이 밑면의 네 변을 따라 한 바퀴 감싸므로 밑면의 '둘레'와 같습니다."
        },
        {
          q: "어떤 직육면체의 전개도에서 '한 밑면의 넓이'가 15 cm² 이고, 네 옆면을 합친 '옆면 전체의 넓이'가 70 cm² 입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
          choices: ["1번: 85 cm² (15 + 70)", "2번: 100 cm² (15 × 2 + 70)"],
          ans: "2",
          h1: "직육면체의 밑면은 위아래 2개입니다!",
          h2: "한 밑면의 넓이(15 cm²)를 2배 한 뒤 옆면 전체 넓이(70 cm²)를 더한 보기를 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "밑면의 가로가 5 cm, 세로가 3 cm이고 높이가 4 cm인 직육면체의 전개도를 펼쳤을 때, 옆면 전체를 이루는 큰 직사각형의 가로 길이는 한 밑면의 둘레인 (5 + 3 + 5 + 3) = [ ① ] cm입니다.",
          ans: "16",
          h1: "가로 5 cm가 2개, 세로 3 cm가 2개 있습니다.",
          h2: "(5 + 3) × 2 를 계산한 값을 숫자로 적어 보세요."
        },
        {
          q: "위 전개도에서 옆면 전체의 가로 길이가 16 cm이고 세로 길이(높이)가 4 cm이므로, 옆면 전체의 넓이는 16 × 4 = [ ① ] cm²입니다.",
          ans: "64",
          h1: "16에 4를 곱해 보세요.",
          h2: "16 × 4 의 값을 숫자로 적어 보세요."
        }
      ],
      step2_2: [
        {
          q: `다음 직육면체의 전개도를 보고, 이 직육면체의 전체 '겉넓이'는 몇 cm²인지 구해 보세요.
              <div style="text-align:center; margin:10px 0;">
                <svg viewBox="0 0 280 150" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                  <rect x="35" y="50" width="170" height="45" fill="#fde047" fill-opacity="0.6"/>
                  <rect x="65" y="20" width="55" height="30" fill="#93c5fd"/>
                  <rect x="65" y="95" width="55" height="30" fill="#93c5fd"/>
                  <polyline points="65,50 35,50 35,95 65,95 65,125 120,125 120,95 205,95 205,50 120,50 120,20 65,20 65,50" fill="none" stroke="#1e293b" stroke-width="1.8"/>
                  <line x1="65" y1="50" x2="120" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="65" y1="95" x2="120" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="65" y1="50" x2="65" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="120" y1="50" x2="120" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <line x1="150" y1="50" x2="150" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <text x="80" y="16" fill="#1d4ed8" font-size="12" font-weight="bold">4 cm</text>
                  <text x="38" y="45" fill="#1d4ed8" font-size="12" font-weight="bold">2 cm</text>
                  <text x="211" y="77" fill="#dc2626" font-size="12" font-weight="bold">3 cm</text>
                </svg>
              </div>`,
          ans: "52", accept: ["52cm²", "52 cm²"], unit: "cm²", placeholder: "숫자만 입력",
          h1: "① 두 밑면의 넓이의 합은 (4 × 2) × 2 = 16(cm²)이고, ② 옆면 전체의 넓이는 (밑면의 둘레 12 cm) × (높이 3 cm) = 36(cm²)입니다.",
          h2: "두 밑면의 넓이 합(16)과 옆면 전체의 넓이(36)를 더해 보세요.",
          checkTip: "두 밑면의 넓이(8 × 2 = 16) + 옆면 전체의 넓이((4+2+4+2) × 3 = 36) = 52(cm²)입니다.",
          wrongDiag: {
            "44": "한 밑면의 넓이(8)를 한 번만 더했어요! 밑면은 위아래 2개이므로 16 + 36 = 52(cm²)입니다.",
            "36": "36은 옆면 전체의 넓이예요! 여기에 두 밑면의 넓이(16)를 더해야 합니다."
          },
          diagDefault: "두 밑면의 넓이(16)와 옆면 전체의 넓이(36)를 더해 보세요.",
          steps: [
            { q: "1계단: 가로 4 cm, 세로 2 cm인 두 밑면의 넓이의 합은 (4 × 2) × 2 = 몇 cm²인가요?", ans: "16" },
            { q: "2계단: 옆면 전체의 가로는 밑면의 둘레인 4+2+4+2 = 12 cm입니다. 높이 3 cm를 곱하면 옆면 전체 넓이는 몇 cm²인가요?", ans: "36" },
            { q: "3계단: 두 밑면의 넓이 합(16)과 옆면 전체 넓이(36)를 더하면 몇 cm²인가요?", ans: "52" }
          ]
        }
      ],
      step3A: [
        [
          {
            q: "[유형 1] 한 밑면의 가로가 6 cm, 세로가 4 cm이고 높이가 5 cm인 직육면체의 전개도가 있습니다. 이 전개도에서 '옆면 전체의 넓이(네 옆면의 넓이의 합)'만 구하면 몇 cm²인가요?",
            ans: "100", accept: ["100cm²", "100 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "전체 겉넓이가 아니라 '옆면 전체의 넓이'만 묻고 있습니다! 옆면 전체의 가로는 한 밑면의 둘레(6+4+6+4 = 20 cm)입니다.",
            h2: "(한 밑면의 둘레 20 cm) × (높이 5 cm)를 계산해 보세요.",
            checkTip: "한 밑면의 둘레 = (6 + 4) × 2 = 20(cm) ➔ 옆면 전체의 넓이 = 20 × 5 = 100(cm²)입니다.",
            wrongDiag: {
              "148": "148은 두 밑면의 넓이(48)까지 더한 전체 겉넓이예요! 이 문제는 '옆면 전체의 넓이'만 묻고 있습니다.",
              "50": "가로(6)와 세로(4)를 한 번씩만 더해서(10 × 5 = 50) 구했어요! 밑면의 둘레는 네 변의 합인 20 cm입니다."
            },
            diagDefault: "밑면의 둘레(6+4+6+4 = 20)에 높이(5)를 곱해 보세요.",
            steps: [
              { q: "1계단: 가로 6 cm, 세로 4 cm인 밑면의 둘레는 (6 + 4) × 2 = 몇 cm인가요?", ans: "20" },
              { q: "2계단: 옆면 전체의 넓이는 20 × 5 = 몇 cm²인가요?", ans: "100" }
            ]
          },
          {
            q: "[유형 1] 위 직육면체(가로 6 cm, 세로 4 cm, 높이 5 cm)에서 옆면 전체의 넓이(100 cm²)에 두 밑면의 넓이의 합을 더한 '전체 겉넓이'는 몇 cm²인가요?",
            ans: "148", accept: ["148cm²", "148 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 밑면의 넓이는 6 × 4 = 24(cm²)이고, 밑면이 2개이므로 두 밑면의 넓이의 합은 48 cm²입니다.",
            h2: "두 밑면의 넓이 합(48)에 옆면 전체 넓이(100)를 더해 보세요.",
            checkTip: "두 밑면의 넓이(24 × 2 = 48) + 옆면 전체의 넓이(100) = 148(cm²)입니다.",
            wrongDiag: { "124": "한 밑면의 넓이(24)를 한 번만 더했어요! 밑면이 2개이므로 48을 더해야 합니다." },
            diagDefault: "48에 100을 더한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 밑면의 넓이는 6 × 4 = 24입니다. 두 밑면의 넓이의 합은 몇 cm²인가요?", ans: "48" },
              { q: "2계단: 옆면 전체 넓이(100)와 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "148" }
            ]
          }
        ],
        [
          {
            q: "[유형 2] 밑면이 한 변의 길이가 5 cm인 정사각형이고 높이가 8 cm인 직육면체의 전개도를 펼쳤습니다. 태호는 옆면 전체의 가로 길이를 5 cm라고 잘못 생각하여 옆면 전체 넓이를 5 × 8 = 40(cm²)으로 구했습니다. 바르게 구한 '옆면 전체의 넓이'는 몇 cm²인가요?",
            ans: "160", accept: ["160cm²", "160 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "40 cm²는 옆면 1개의 넓이입니다! 정사각형 밑면의 네 변에 옆면이 4개 붙어 있으므로 옆면 전체 가로는 5 × 4 = 20(cm)입니다.",
            h2: "20 × 8 (또는 40 × 4)을 계산해 보세요.",
            checkTip: "밑면의 둘레(5 × 4 = 20 cm) × 높이(8 cm) = 160(cm²)입니다.",
            wrongDiag: {
              "40": "40은 옆면 1개의 넓이예요! 옆면이 4개 있으므로 40 × 4 = 160(cm²)입니다.",
              "210": "210은 두 밑면의 넓이(50)까지 더한 전체 겉넓이예요! '옆면 전체의 넓이'만 구해 보세요."
            },
            diagDefault: "밑면의 둘레(20 cm)에 높이(8 cm)를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 변이 5 cm인 정사각형 밑면의 둘레는 5 × 4 = 몇 cm인가요?", ans: "20" },
              { q: "2계단: 옆면 전체의 넓이는 20 × 8 = 몇 cm²인가요?", ans: "160" }
            ]
          },
          {
            q: "[유형 2] 직육면체의 전개도에서 한 밑면의 넓이가 18 cm² 이고, 한 밑면의 둘레가 18 cm, 높이가 4 cm입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
            ans: "108", accept: ["108cm²", "108 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "① 두 밑면의 넓이의 합은 18 × 2 = 36(cm²)이고, ② 옆면 전체의 넓이는 (밑면의 둘레 18) × (높이 4) = 72(cm²)입니다.",
            h2: "36 + 72 를 계산해 보세요.",
            checkTip: "두 밑면(18 × 2 = 36) + 옆면 전체(18 × 4 = 72) = 108(cm²)입니다.",
            wrongDiag: { "90": "한 밑면의 넓이(18)를 2배 하지 않고 한 번만 더했어요(18+72=90)! 밑면은 2개이므로 36 + 72 = 108입니다." },
            diagDefault: "두 밑면의 넓이(36)와 옆면 전체의 넓이(72)를 더해 보세요.",
            steps: [
              { q: "1계단: 한 밑면의 넓이가 18 cm²이므로 두 밑면의 넓이의 합은 몇 cm²인가요?", ans: "36" },
              { q: "2계단: 옆면 전체의 넓이는 (둘레 18) × (높이 4) = 몇 cm²인가요?", ans: "72" },
              { q: "3계단: 두 값을 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "108" }
            ]
          }
        ],
        [
          {
            q: "[유형 3] 밑면이 한 변의 길이가 4 cm인 정사각형이고 높이가 6 cm인 사각기둥(직육면체)의 전체 겉넓이는 몇 cm²인가요?",
            ans: "128", accept: ["128cm²", "128 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "두 밑면의 넓이의 합은 (4 × 4) × 2 = 32(cm²)이고, 옆면 전체의 넓이는 (둘레 16) × (높이 6) = 96(cm²)입니다.",
            h2: "32 + 96 을 계산해 보세요.",
            checkTip: "두 밑면(16 × 2 = 32) + 옆면 전체(16 × 6 = 96) = 128(cm²)입니다.",
            wrongDiag: {
              "96": "96은 부피(4×4×6)이자 옆면 전체의 넓이예요! 여기에 두 밑면의 넓이(32)를 더해야 전체 겉넓이가 됩니다.",
              "112": "밑면 1개의 넓이(16)만 더했어요! 밑면 2개의 넓이(32)를 더해야 합니다."
            },
            diagDefault: "두 밑면의 넓이(32)와 옆면 전체의 넓이(96)를 더해 보세요.",
            steps: [
              { q: "1계단: 한 변이 4 cm인 정사각형 밑면 2개의 넓이의 합은 16 × 2 = 몇 cm²인가요?", ans: "32" },
              { q: "2계단: 옆면 전체의 넓이는 (둘레 16) × (높이 6) = 몇 cm²인가요?", ans: "96" },
              { q: "3계단: 두 값을 더하면 전체 겉넓이는 몇 cm²인가요?", ans: "128" }
            ]
          },
          {
            q: "[유형 3] 가로가 5 cm, 세로가 4 cm, 높이가 3 cm인 직육면체 모양의 나무 상자가 있습니다. 이 상자의 '위쪽 뚜껑(윗밑면 1개)'이 열려 있어서 없다고 할 때, 바깥쪽 나머지 5개의 면(아랫밑면 1개 + 옆면 4개)에 페인트를 칠하는 넓이는 모두 몇 cm²인가요?",
            ans: "74", accept: ["74cm²", "74 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "위쪽 뚜껑이 없으므로 밑면은 바닥에 1개(5 × 4 = 20 cm²)뿐입니다! 여기에 옆면 4개의 넓이 합을 더하면 됩니다.",
            h2: "아랫밑면 1개의 넓이(20) + 옆면 전체 넓이((5+4+5+4) × 3 = 54)를 계산해 보세요.",
            checkTip: "아랫밑면 1개(20 cm²) + 옆면 전체(18 × 3 = 54 cm²) = 74(cm²)입니다.",
            wrongDiag: { "94": "94는 뚜껑까지 포함한 6개 면의 겉넓이예요! 뚜껑(윗면 20 cm²)이 없으므로 94에서 20을 빼야 합니다." },
            diagDefault: "아랫밑면 1개의 넓이(20)와 옆면 전체의 넓이(54)를 더해 보세요.",
            steps: [
              { q: "1계단: 바닥에 있는 밑면 1개의 넓이는 5 × 4 = 몇 cm²인가요?", ans: "20" },
              { q: "2계단: 옆면 전체의 넓이는 (밑면 둘레 18) × (높이 3) = 몇 cm²인가요?", ans: "54" },
              { q: "3계단: 뚜껑을 제외한 5개 면의 넓이의 합은 20 + 54 = 몇 cm²인가요?", ans: "74" }
            ]
          }
        ]
      ],
      step4Intro: "전개도를 이용할 때는 옆면 4개를 일일이 구하지 말고 '(한 밑면의 둘레) × (높이)'로 옆면 전체를 한 방에 구하는 것이 핵심 기술입니다!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 한 밑면의 가로가 5 cm, 세로가 3 cm이고 높이가 4 cm인 직육면체의 전개도에서 '옆면 전체의 넓이'만 구하면 몇 cm²인가요?",
            ans: "64", accept: ["64cm²", "64 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "한 밑면의 둘레는 (5 + 3) × 2 = 16(cm)입니다.", h2: "16 × 4 를 계산해 보세요.",
            checkTip: "밑면의 둘레(16 cm) × 높이(4 cm) = 64(cm²)입니다.", wrongDiag: {}, diagDefault: "16에 4를 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 밑면의 둘레(16) × 높이(4) = 몇 cm²인가요?", ans: "64" } ]
          },
          {
            q: "[쌍둥이 1-2] 위 직육면체(가로 5 cm, 세로 3 cm, 높이 4 cm)에서 옆면 전체의 넓이(64 cm²)에 두 밑면의 넓이의 합(30 cm²)을 더한 '전체 겉넓이'는 몇 cm²인가요?",
            ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "64에 30을 더하면 됩니다.", h2: "64 + 30 을 계산해 보세요.",
            checkTip: "64 + 30 = 94(cm²)입니다.", wrongDiag: {}, diagDefault: "64와 30을 더한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 64 + 30 은 몇 cm²인가요?", ans: "94" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] 밑면이 한 변의 길이가 3 cm인 정사각형이고 높이가 7 cm인 직육면체의 전개도에서 '옆면 전체의 넓이'는 몇 cm²인가요?",
            ans: "84", accept: ["84cm²", "84 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "정사각형 밑면의 둘레는 3 × 4 = 12(cm)입니다.", h2: "12 × 7 을 계산해 보세요.",
            checkTip: "밑면의 둘레(12 cm) × 높이(7 cm) = 84(cm²)입니다.", wrongDiag: { "21": "21은 옆면 1개의 넓이예요! 4개이므로 21 × 4 = 84입니다." },
            diagDefault: "12에 7을 곱한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 12 × 7 은 몇 cm²인가요?", ans: "84" } ]
          },
          {
            q: "[쌍둥이 2-2] 직육면체의 전개도에서 한 밑면의 넓이가 12 cm² 이고, 한 밑면의 둘레가 14 cm, 높이가 5 cm입니다. 이 직육면체의 전체 겉넓이는 몇 cm²인가요?",
            ans: "94", accept: ["94cm²", "94 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "두 밑면의 넓이 합(12 × 2 = 24)에 옆면 전체 넓이(14 × 5 = 70)를 더해 보세요.", h2: "24 + 70 을 계산해 보세요.",
            checkTip: "24 + 70 = 94(cm²)입니다.", wrongDiag: {}, diagDefault: "24에 70을 더한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 두 밑면의 합(24) + 옆면 전체(70) = 몇 cm²인가요?", ans: "94" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 밑면이 한 변의 길이가 5 cm인 정사각형이고 높이가 4 cm인 사각기둥(직육면체)의 전체 겉넓이는 몇 cm²인가요?",
            ans: "130", accept: ["130cm²", "130 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "두 밑면의 넓이 합은 (5×5)×2 = 50이고, 옆면 전체 넓이는 (5×4)×4 = 80입니다.", h2: "50 + 80 을 계산해 보세요.",
            checkTip: "50 + 80 = 130(cm²)입니다.", wrongDiag: {}, diagDefault: "50과 80을 더한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 두 밑면(50) + 옆면 전체(80) = 몇 cm²인가요?", ans: "130" } ]
          },
          {
            q: "[쌍둥이 3-2] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체 상자에서 '위쪽 뚜껑(윗면 1개)'을 제외한 나머지 5개 면(아랫면 1개 + 옆면 4개)의 넓이의 합은 몇 cm²인가요?",
            ans: "40", accept: ["40cm²", "40 cm²"], unit: "cm²", placeholder: "숫자만 입력",
            h1: "아랫면 1개(4 × 3 = 12)에 옆면 전체 넓이((4+3+4+3) × 2 = 28)를 더해 보세요.", h2: "12 + 28 을 계산해 보세요.",
            checkTip: "아랫면 1개(12 cm²) + 옆면 전체(14 × 2 = 28 cm²) = 40(cm²)입니다.",
            wrongDiag: { "52": "52는 뚜껑까지 포함한 6개 면의 합이에요! 뚜껑(12 cm²)을 빼야 합니다." },
            diagDefault: "12와 28을 더한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 아랫면 1개(12) + 옆면 전체(28) = 몇 cm²인가요?", ans: "40" } ]
          }
        ]
      ],
      step5A: {
        q: "직육면체의 전개도에서 전체 겉넓이는 (두 밑면의 넓이의 합)에 (옆면 전체의 넓이)를 더하여 구하며, 옆면 전체의 가로 길이는 한 밑면의 [ (1) 둘레 / (2) 넓이 ] 와 같습니다.",
        ans: "둘레", numAns: "1",
        hint: "💡 힌트: 옆면들이 밑면의 네 변 테두리를 따라 감싸고 있습니다."
      },
      step5B: { sentence: "전개도에서 직육면체의 겉넓이는 두 밑면의 넓이의 합에 옆면 전체의 넓이를 더하여 구한다." },
      nextUnit: "6-6"
    },

    "6-6": {
      title: "6-6차시: 6단원 종합 마스터 (부피와 겉넓이 완전 정복)",
      goal: "직육면체와 정육면체의 부피와 겉넓이 공식을 완벽히 구분하고 복합 응용문제를 해결합니다.",
      videoUrl: "",
      summaryCard: `
        <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
          <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">🏆 6단원 총정리: 부피 vs 겉넓이 공식 한눈에 비교하기</h4>
          <table style="width:100%; border-collapse:collapse; background:#fff; font-size:0.92rem; text-align:center; margin-top:10px; border:1px solid #cbd5e1;">
            <thead>
              <tr style="background:#e0f2fe; color:#1e3a8a;">
                <th style="padding:8px; border:1px solid #cbd5e1; width:24%;">구분</th>
                <th style="padding:8px; border:1px solid #cbd5e1;">부피 (단위: cm³, m³)</th>
                <th style="padding:8px; border:1px solid #cbd5e1;">겉넓이 (단위: cm², m²)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;">직육면체</td>
                <td style="padding:8px; border:1px solid #cbd5e1;"><strong>가로 × 세로 × 높이</strong><br>(= 한 밑면의 넓이 × 높이)</td>
                <td style="padding:8px; border:1px solid #cbd5e1;"><strong>(한 꼭짓점에서 만나는 세 면의 넓이의 합) × 2</strong><br>(= 두 밑면 넓이 + 옆면 전체 넓이)</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">정육면체</td>
                <td style="padding:8px; border:1px solid #cbd5e1;"><strong>한 모서리 × 한 모서리 × 한 모서리</strong></td>
                <td style="padding:8px; border:1px solid #cbd5e1;"><strong>(한 면의 넓이) × 6</strong></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#15803d;">핵심 단위</td>
                <td style="padding:8px; border:1px solid #cbd5e1;" colspan="2"><strong>1 m³ = 1,000,000 cm³</strong> (100 × 100 × 100 ➔ 0이 6개!)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      warmup: null,
      step1Quiz: [
        {
          q: "한 모서리의 길이가 6 cm인 정육면체에서 '부피(cm³)'의 숫자와 '겉넓이(cm²)'의 숫자를 비교하면 어떨까요?",
          choices: ["1번: 둘 다 216으로 숫자가 같다", "2번: 겉넓이가 더 작다"],
          ans: "1",
          h1: "부피는 6 × 6 × 6 이고, 겉넓이는 (한 면의 넓이 6 × 6) × 6 입니다!",
          h2: "단위는 cm³와 cm²로 다르지만 부피 6×6×6과 겉넓이 (6×6)×6의 결과 숫자가 둘 다 216으로 같습니다."
        },
        {
          q: "물탱크에 물이 2 m³ 들어 있습니다. 여기에 물 500000 cm³(0.5 m³)를 더 부었고, 물은 넘치지 않았습니다. 물의 전체 부피는 몇 m³인가요?",
          choices: ["1번: 2.5 m³", "2번: 7 m³"],
          ans: "1",
          h1: "1000000 cm³가 1 m³이므로, 500000 cm³는 0.5 m³입니다!",
          h2: "2 m³에 0.5 m³를 더한 값을 골라 보세요."
        }
      ],
      step2_1: [
        {
          q: "한 모서리의 길이가 3 cm인 정육면체의 부피는 3 × 3 × 3 = 27(cm³)이고, 겉넓이는 (3 × 3) × 6 = [ ① ] cm²입니다.",
          ans: "54",
          h1: "한 면의 넓이(9 cm²)에 면의 개수 6을 곱해 보세요.",
          h2: "9 × 6 의 값을 숫자로 적어 보세요."
        },
        {
          q: "정육면체는 길이가 같은 모서리가 모두 12개 있습니다. 모든 모서리의 길이의 합이 48 cm인 정육면체의 한 모서리의 길이는 48 ÷ 12 = [ ① ] cm입니다.",
          ans: "4",
          h1: "48을 모서리의 개수인 12로 나누어 보세요.",
          h2: "48 ÷ 12 의 값을 숫자로 적어 보세요."
        }
      ],
      step2_2: [
        {
          q: "가로가 5 cm, 세로가 4 cm, 높이가 2 cm인 직육면체가 있습니다. 부피와 헷갈리지 않고 이 직육면체의 '겉넓이'는 몇 cm²인지 구해 보세요.",
          ans: "76", accept: ["76cm²", "76 cm²"], unit: "cm²", placeholder: "숫자만 입력",
          h1: "한 꼭짓점에서 만나는 세 면의 넓이(5×4=20, 5×2=10, 4×2=8)를 더한 뒤 2를 곱하세요.",
          h2: "(20 + 10 + 8) × 2 를 계산해 보세요.",
          checkTip: "(20 + 10 + 8) × 2 = 38 × 2 = 76(cm²)입니다.",
          wrongDiag: {
            "40": "40은 부피(5×4×2)예요! 겉넓이는 (20 + 10 + 8) × 2 로 구합니다.",
            "38": "세 면의 넓이의 합(38)만 구했어요! 마지막에 2를 곱해 76 cm²가 되어야 합니다."
          },
          diagDefault: "세 면의 넓이 합(38)에 2를 곱한 값을 입력해 보세요.",
          steps: [
            { q: "1계단: 한 꼭짓점에서 만나는 세 면의 넓이 20, 10, 8을 더하면 얼마인가요?", ans: "38" },
            { q: "2계단: 38에 2를 곱하면 겉넓이는 몇 cm²인가요?", ans: "76" }
          ]
        }
      ],
      step3A: [
        [
          {
            q: "[유형 1] 가로가 6 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 '부피'와 '겉넓이'를 차례대로 구하여 쉼표로 구분해 쓰세요 (예: 30, 62).",
            ans: "36, 72", accept: ["36,72", "36 72"], placeholder: "부피, 겉넓이 순서로 입력",
            h1: "① 부피는 6 × 3 × 2 이고, ② 겉넓이는 (18 + 12 + 6) × 2 입니다.",
            h2: "구한 부피와 겉넓이를 쉼표로 구분하여 순서대로 적어 보세요.",
            checkTip: "부피는 6 × 3 × 2 = 36(cm³)이고, 겉넓이는 (18 + 12 + 6) × 2 = 72(cm²)입니다.",
            wrongDiag: {
              "72, 36": "순서가 바뀌었어요! 문제에서 '부피'를 먼저 묻고 '겉넓이'를 나중에 물었습니다.",
              "36, 36": "겉넓이를 구할 때 세 면의 넓이 합(36)에 2를 곱하는 것을 잊었어요! 겉넓이는 72입니다."
            },
            diagDefault: "부피(36)와 겉넓이(72)를 '36, 72'로 입력해 보세요.",
            steps: [
              { q: "1계단: 직육면체의 부피는 6 × 3 × 2 = 몇 cm³인가요?", ans: "36" },
              { q: "2계단: 겉넓이는 (18 + 12 + 6) × 2 = 몇 cm²인가요?", ans: "72" },
              { q: "3계단: 부피와 겉넓이를 쉼표로 구분해 순서대로 쓰면 무엇인가요?", ans: "36, 72" }
            ]
          },
          {
            q: "[유형 1] 가로가 500 cm, 세로가 200 cm, 높이가 3 m인 직육면체 모양의 컨테이너 부피는 몇 m³인가요?",
            ans: "30", accept: ["30m³", "30 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "500 cm = 5 m, 200 cm = 2 m로 단위를 통일한 뒤 곱하세요.",
            h2: "5 × 2 × 3 을 계산해 보세요.",
            checkTip: "5 m × 2 m × 3 m = 30(m³)입니다.", wrongDiag: {}, diagDefault: "5 × 2 × 3 의 값을 입력해 보세요.",
            steps: [ { q: "1계단: 5 m × 2 m × 3 m 는 몇 m³인가요?", ans: "30" } ]
          }
        ],
        [
          {
            q: "[유형 2] 모든 모서리의 길이의 합이 36 cm인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
            ans: "27", accept: ["27cm³", "27 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "정육면체의 모서리는 모두 12개입니다! 먼저 36 ÷ 12 로 '한 모서리의 길이(3 cm)'를 구하세요.",
            h2: "한 모서리가 3 cm이므로 부피는 3 × 3 × 3 으로 구합니다.",
            checkTip: "한 모서리의 길이 = 36 ÷ 12 = 3(cm) ➔ 부피 = 3 × 3 × 3 = 27(cm³)입니다.",
            wrongDiag: {
              "3": "3 cm는 한 모서리의 길이를 아주 잘 구한 것이에요! 이제 부피(3 × 3 × 3)를 구해 보세요.",
              "54": "54는 이 정육면체의 겉넓이(9×6)예요! 부피는 3 × 3 × 3 = 27(cm³)입니다."
            },
            diagDefault: "한 모서리의 길이(36 ÷ 12 = 3 cm)를 세 번 곱해 보세요.",
            steps: [
              { q: "1계단: 정육면체의 모서리는 12개이므로 한 모서리의 길이는 36 ÷ 12 = 몇 cm인가요?", ans: "3" },
              { q: "2계단: 한 모서리가 3 cm인 정육면체의 부피는 3 × 3 × 3 = 몇 cm³인가요?", ans: "27" }
            ]
          },
          {
            q: "[유형 2] 겉넓이가 96 cm²인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
            ans: "64", accept: ["64cm³", "64 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "1단계로 겉넓이(96 cm²)를 6으로 나누어 '한 면의 넓이(16 cm²)'를 구하고, 2단계로 어떤 수를 두 번 곱해 16이 되는지 찾아 '한 모서리의 길이(4 cm)'를 구합니다!",
            h2: "한 모서리의 길이가 4 cm이므로, 부피는 4 × 4 × 4 로 구해 보세요.",
            checkTip: "한 면의 넓이 = 96 ÷ 6 = 16(cm²) ➔ 한 모서리의 길이 = 4 cm ➔ 부피 = 4 × 4 × 4 = 64(cm³)입니다.",
            wrongDiag: {
              "16": "16 cm²는 정육면체의 '한 면의 넓이'예요! 한 모서리가 4 cm이므로 부피는 4 × 4 × 4 = 64(cm³)입니다.",
              "4": "4 cm는 한 모서리의 길이예요! 부피를 구하려면 4 × 4 × 4 를 계산해야 합니다."
            },
            diagDefault: "한 모서리의 길이(4 cm)를 세 번 곱한 부피(64)를 입력해 보세요.",
            steps: [
              { q: "1계단: 겉넓이가 96 cm²이므로 한 면의 넓이는 96 ÷ 6 = 몇 cm²인가요?", ans: "16" },
              { q: "2계단: 넓이가 16 cm²인 정사각형의 한 변(모서리)의 길이는 몇 cm인가요?", ans: "4" },
              { q: "3계단: 한 모서리가 4 cm인 정육면체의 부피는 4 × 4 × 4 = 몇 cm³인가요?", ans: "64" }
            ]
          }
        ],
        [
          {
            q: `[유형 3] 다음 그림과 같이 직육면체 모양의 나무 블록에서 작은 직육면체 부분을 잘라 내어 'ㄱ자 모양'의 입체도형을 만들었습니다. 왼쪽 기둥 모양(가로 2 cm, 세로 3 cm, 높이 5 cm)과 오른쪽 바닥 모양(가로 4 cm, 세로 3 cm, 높이 2 cm)으로 나누어 구한 이 입체도형의 전체 부피는 몇 cm³인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 260 135" style="width:100%; max-width:260px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <polygon points="35,35 75,35 95,18 55,18" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <polygon points="35,35 75,35 75,75 155,75 155,105 35,105" fill="#dbeafe" stroke="#1e293b" stroke-width="1.8"/>
                    <polygon points="75,35 95,18 95,58 75,75" fill="#60a5fa" stroke="#1e293b" stroke-width="1.5"/>
                    <polygon points="75,75 155,75 175,58 95,58" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                    <polygon points="155,75 175,58 175,88 155,105" fill="#facc15" stroke="#1e293b" stroke-width="1.5"/>
                    <line x1="75" y1="75" x2="75" y2="105" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
                    <text x="45" y="30" fill="#1e3a8a" font-size="11" font-weight="bold">2 cm</text>
                    <text x="8" y="75" fill="#1e3a8a" font-size="11" font-weight="bold">5 cm</text>
                    <text x="105" y="120" fill="#854d0e" font-size="11" font-weight="bold">오른쪽 가로 4 cm</text>
                    <text x="168" y="102" fill="#1e293b" font-size="11" font-weight="bold">세로 3 cm</text>
                    <text x="180" y="78" fill="#dc2626" font-size="11" font-weight="bold">2 cm</text>
                  </svg>
                </div>`,
            ans: "54", accept: ["54cm³", "54 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "점선을 따라 두 직육면체로 나누어 각각의 부피를 구한 뒤 더하면 됩니다! ① 왼쪽 직육면체는 2 × 3 × 5 = 30(cm³)이고, ② 오른쪽 직육면체는 4 × 3 × 2 = 24(cm³)입니다.",
            h2: "왼쪽 부피(30 cm³)와 오른쪽 부피(24 cm³)를 더해 보세요.",
            checkTip: "왼쪽(2×3×5 = 30 cm³) + 오른쪽(4×3×2 = 24 cm³) = 54(cm³)입니다.",
            wrongDiag: {
              "30": "왼쪽 기둥의 부피(30 cm³)만 구했어요! 오른쪽 부분의 부피(24 cm³)까지 더해보세요.",
              "24": "오른쪽 부분의 부피(24 cm³)만 구했어요! 왼쪽 기둥의 부피(30 cm³)까지 더해보세요."
            },
            diagDefault: "30과 24를 더한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 왼쪽 직육면체의 부피는 2 × 3 × 5 = 몇 cm³인가요?", ans: "30" },
              { q: "2계단: 오른쪽 직육면체의 부피는 4 × 3 × 2 = 몇 cm³인가요?", ans: "24" },
              { q: "3계단: 두 부피를 더하면 전체 부피는 몇 cm³인가요?", ans: "54" }
            ]
          },
          {
            q: "[유형 3] 안쪽 가로가 8 cm, 안쪽 세로가 5 cm인 직육면체 모양의 수조에 물이 들어 있습니다. 이 수조에 돌멩이 한 개를 완전히 잠기도록 넣었더니 물의 높이가 전보다 3 cm만큼 올라갔습니다(물은 넘치지 않았습니다). 이 돌멩이의 부피는 몇 cm³인가요?",
            ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "돌멩이가 차지한 공간만큼 수면이 올라갑니다! 돌멩이의 부피는 수조 안쪽 밑면의 넓이(8 × 5)에 올라간 물의 높이(3 cm)를 곱하여 구합니다.",
            h2: "8 × 5 × 3 을 계산해 보세요.",
            checkTip: "수조 안쪽 밑면의 넓이(8 × 5 = 40 cm²) × 올라간 물의 높이(3 cm) = 120(cm³)이므로 돌멩이의 부피는 120 cm³입니다.",
            wrongDiag: { "40": "수조 밑면의 넓이(8×5=40)만 구했어요! 올라간 물의 높이 3 cm를 곱해야 합니다." },
            diagDefault: "8 × 5 × 3 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 수조 안쪽 밑면의 넓이는 8 × 5 = 몇 cm²인가요?", ans: "40" },
              { q: "2계단: 물의 높이가 3 cm 올라갔으므로 돌멩이의 부피는 40 × 3 = 몇 cm³인가요?", ans: "120" }
            ]
          }
        ]
      ],
      step4Intro: "부피와 겉넓이 공식 구분부터 두 직육면체로 나누어 부피 구하기까지 모두 다루었습니다. 마지막 쌍둥이 문제로 확인해 보세요!",
      step4B: [
        [
          {
            q: "[쌍둥이 1-1] 가로가 4 cm, 세로가 3 cm, 높이가 2 cm인 직육면체의 '부피'와 '겉넓이'를 차례대로 구하여 쉼표로 구분해 쓰세요 (예: 20, 50).",
            ans: "24, 52", accept: ["24,52", "24 52"], placeholder: "부피, 겉넓이 순서로 입력",
            h1: "부피는 4 × 3 × 2 = 24이고, 겉넓이는 (12 + 8 + 6) × 2 = 52입니다.", h2: "24, 52 를 입력해 보세요.",
            checkTip: "부피 = 24 cm³, 겉넓이 = 52 cm²입니다.",
            wrongDiag: { "52, 24": "부피를 먼저 쓰고 겉넓이를 뒤에 써 보세요!" },
            diagDefault: "'24, 52'로 입력해 보세요.",
            steps: [
              { q: "1계단: 부피는 4 × 3 × 2 = 얼마인가요?", ans: "24" },
              { q: "2계단: 겉넓이는 52입니다. 순서대로 쉼표로 구분해 쓰면 무엇인가요?", ans: "24, 52" }
            ]
          },
          {
            q: "[쌍둥이 1-2] 가로가 400 cm, 세로가 300 cm, 높이가 2 m인 직육면체 창고의 부피는 몇 m³인가요?",
            ans: "24", accept: ["24m³", "24 m³"], unit: "m³", placeholder: "숫자만 입력",
            h1: "400 cm = 4 m, 300 cm = 3 m로 바꾼 뒤 곱하세요.", h2: "4 × 3 × 2 를 계산해 보세요.",
            checkTip: "4 × 3 × 2 = 24(m³)입니다.", wrongDiag: {}, diagDefault: "24를 입력해 보세요.",
            steps: [ { q: "1계단: 4 × 3 × 2 는 몇 m³인가요?", ans: "24" } ]
          }
        ],
        [
          {
            q: "[쌍둥이 2-1] 모든 모서리의 길이의 합이 24 cm인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
            ans: "8", accept: ["8cm³", "8 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "한 모서리의 길이는 24 ÷ 12 = 2(cm)입니다.", h2: "2 × 2 × 2 를 계산해 보세요.",
            checkTip: "한 모서리 = 2 cm ➔ 부피 = 2 × 2 × 2 = 8(cm³)입니다.",
            wrongDiag: { "2": "2 cm는 한 모서리의 길이예요! 부피는 2 × 2 × 2 = 8(cm³)입니다." },
            diagDefault: "2 × 2 × 2 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 모서리의 길이는 24 ÷ 12 = 몇 cm인가요?", ans: "2" },
              { q: "2계단: 부피는 2 × 2 × 2 = 몇 cm³인가요?", ans: "8" }
            ]
          },
          {
            q: "[쌍둥이 2-2] 겉넓이가 150 cm²인 정육면체가 있습니다. 이 정육면체의 '부피'는 몇 cm³인가요?",
            ans: "125", accept: ["125cm³", "125 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "한 면의 넓이는 150 ÷ 6 = 25(cm²)이므로 한 모서리의 길이는 5 cm입니다.", h2: "5 × 5 × 5 를 계산해 보세요.",
            checkTip: "한 면의 넓이 = 25 cm² ➔ 한 모서리 = 5 cm ➔ 부피 = 5 × 5 × 5 = 125(cm³)입니다.",
            wrongDiag: { "25": "25는 한 면의 넓이예요! 한 모서리가 5 cm이므로 부피는 5 × 5 × 5 = 125입니다." },
            diagDefault: "5 × 5 × 5 의 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 한 면의 넓이는 150 ÷ 6 = 25이므로 한 모서리는 몇 cm인가요?", ans: "5" },
              { q: "2계단: 부피는 5 × 5 × 5 = 몇 cm³인가요?", ans: "125" }
            ]
          }
        ],
        [
          {
            q: "[쌍둥이 3-1] 두 직육면체를 이어 붙여 만든 입체도형이 있습니다. 왼쪽 직육면체는 가로 3 cm, 세로 2 cm, 높이 5 cm이고, 오른쪽 직육면체는 가로 4 cm, 세로 2 cm, 높이 3 cm입니다. 이 입체도형의 전체 부피는 몇 cm³인가요?",
            ans: "54", accept: ["54cm³", "54 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "왼쪽 부피(3 × 2 × 5 = 30)와 오른쪽 부피(4 × 2 × 3 = 24)를 더해 보세요.", h2: "30 + 24 를 계산해 보세요.",
            checkTip: "30 + 24 = 54(cm³)입니다.", wrongDiag: {}, diagDefault: "30과 24를 더한 값을 입력해 보세요.",
            steps: [ { q: "1계단: 30 + 24 는 몇 cm³인가요?", ans: "54" } ]
          },
          {
            q: "[쌍둥이 3-2] 안쪽 가로가 10 cm, 안쪽 세로가 6 cm인 직육면체 모양의 수조에 물이 들어 있습니다. 이 수조에 쇠구슬을 완전히 잠기도록 넣었더니 물의 높이가 2 cm만큼 올라갔습니다(물은 넘치지 않았습니다). 이 쇠구슬의 부피는 몇 cm³인가요?",
            ans: "120", accept: ["120cm³", "120 cm³"], unit: "cm³", placeholder: "숫자만 입력",
            h1: "쇠구슬이 차지한 공간만큼 수면이 올라가므로, 수조 안쪽 밑면의 넓이(10 × 6)에 올라간 물의 높이(2 cm)를 곱하면 됩니다.", h2: "60 × 2 를 계산해 보세요.",
            checkTip: "수조 안쪽 밑면의 넓이(60 cm²) × 올라간 높이(2 cm) = 120(cm³)입니다.", wrongDiag: {}, diagDefault: "10 × 6 × 2 의 값을 입력해 보세요.",
            steps: [ { q: "1계단: 10 × 6 × 2 는 몇 cm³인가요?", ans: "120" } ]
          }
        ]
      ],
      step5A: {
        q: "직육면체의 부피는 (가로) × (세로) × (높이)로 구하며 단위는 cm³이고, 여섯 면의 넓이의 합인 겉넓이는 한 꼭짓점에서 만나는 세 면의 넓이의 합에 [ (1) 2 / (2) 6 ] 를 곱하여 구하며 단위는 cm²입니다.",
        ans: "2", numAns: "1",
        hint: "💡 힌트: 직육면체는 마주 보는 합동인 면이 2개씩 짝을 이루고 있습니다."
      },
      step5B: { sentence: "직육면체의 부피는 가로와 세로와 높이를 곱하고 겉넓이는 여섯 면의 넓이를 모두 더하여 구한다." },
      nextUnit: null
    }
  }
};