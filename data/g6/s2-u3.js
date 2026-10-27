MATH_DB.lessons["6-2-3"] = {
    unitTitle: "6학년 2학기 3단원: 공간과 입체",
    lessonOrder: ["3-1", "3-2", "3-3", "3-4", "3-5", "3-6"],
    items: {
      "3-1": {
        title: "3-1차시: 어느 방향에서 보았을까요 / 숨겨진 쌓기나무의 개수를 알아볼까요",
        goal: "바라보는 방향에 따라 물체가 보이는 위치를 이해하고, 위에서 본 모양을 함께 사용하여 숨겨진 쌓기나무의 개수를 구합니다.",
        videoUrl: "https://youtube.com/shorts/24XbeXELerg?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 관찰 방향과 위에서 본 모양으로 숨겨진 개수 찾기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 140" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 방향 변화 안내 -->
                <rect x="10" y="10" width="145" height="120" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="18" y="30" fill="#1e3a8a" font-size="11" font-weight="bold">① 바라보는 방향과 위치</text>
                <circle cx="52" cy="62" r="14" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <text x="41" y="66" fill="#991b1b" font-size="11" font-weight="bold">사과</text>
                <rect x="85" y="46" width="32" height="32" rx="4" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
                <text x="90" y="66" fill="#854d0e" font-size="11" font-weight="bold">상자</text>
                <text x="16" y="98" fill="#1d4ed8" font-size="10" font-weight="bold">• 앞: 사과(왼), 상자(오른)</text>
                <text x="16" y="116" fill="#dc2626" font-size="10" font-weight="bold">• 뒤: 상자(왼), 사과(오른)</text>
                <!-- 오른쪽: 위에서 본 모양 격자 -->
                <rect x="165" y="10" width="145" height="120" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
                <text x="175" y="30" fill="#854d0e" font-size="11" font-weight="bold">② 위에서 본 모양 확인</text>
                <rect x="205" y="42" width="24" height="24" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
                <text x="211" y="58" fill="#dc2626" font-size="11" font-weight="bold">?</text>
                <rect x="205" y="66" width="24" height="24" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
                <rect x="229" y="66" width="24" height="24" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
                <text x="222" y="104" fill="#1e293b" font-size="11" font-weight="bold">앞</text>
                <text x="175" y="120" fill="#b45309" font-size="10" font-weight="bold">• 칸이 있어야 뒤에 놓임!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>앞과 뒤에서 본 모양:</strong> 마주 보는 반대 방향(앞 ↔ 뒤, 왼쪽 ↔ 오른쪽)에서 보면 물체의 <strong>왼쪽과 오른쪽 위치가 서로 반대로</strong> 바뀝니다.</li>
              <li><strong>숨겨진 쌓기나무 찾기:</strong> 입체 그림 하나만 보고는 높은 기둥 뒤에 쌓기나무가 숨겨져 있는지 알 수 없지만, <strong>위에서 본 모양</strong>을 함께 보면 바닥에 놓인 자리를 정확히 알 수 있습니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[준비 학습] 5학년 때 배운 직육면체를 떠올려 볼까요? 상자 모양(직육면체)이나 주사위 모양(정육면체)의 면은 모두 몇 개인가요?",
            ans: "6", accept: ["6개"], unit: "개", placeholder: "숫자만 입력",
            h1: "위, 아래, 앞, 뒤, 왼쪽 옆, 오른쪽 옆에 있는 면의 개수를 세어 보세요.",
            h2: "주사위의 눈이 1부터 몇까지 있는지 떠올려 보세요.",
            checkTip: "직육면체와 정육면체의 면은 위, 아래, 앞, 뒤, 양옆으로 모두 6개입니다.",
            wrongDiag: {
              "8": "8개는 꼭짓점의 개수예요! 면의 개수는 6개입니다.",
              "12": "12개는 모서리의 개수예요! 면의 개수는 6개입니다."
            },
            diagDefault: "직육면체의 면의 개수(6)를 입력해 보세요.",
            steps: [
              { q: "1계단: 위아래 면 2개와 옆면 4개를 더하면 모두 몇 개인가요?", ans: "6" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "책상 위에 앞에서 보았을 때 왼쪽에는 연필꽂이, 오른쪽에는 시계가 놓여 있습니다. 책상의 맞은편(뒤쪽)에서 마주 보고 바라보면 시계는 어느 쪽에 보이나요?",
            choices: ["1번: 왼쪽", "2번: 오른쪽"],
            ans: "1",
            h1: "앞에서 볼 때와 뒤에서 볼 때는 왼쪽과 오른쪽 위치가 서로 반대로 바뀝니다.",
            h2: "앞에서 오른쪽에 있던 시계는 뒤에서 보면 어느 쪽에 보일지 골라 보세요."
          },
          {
            q: "앞쪽에 2층으로 쌓은 쌓기나무 기둥이 있습니다. 위에서 본 모양을 확인했더니 그 기둥의 바로 뒷자리에는 색칠된 칸이 없었습니다. 기둥 뒤에 숨겨진 쌓기나무는 몇 개인가요?",
            choices: ["1번: 0개 (없다)", "2번: 1개"],
            ans: "1",
            h1: "위에서 본 모양은 바닥(1층)에 놓인 모든 쌓기나무의 자리를 보여 줍니다.",
            h2: "위에서 본 모양에 칸이 없다면 그 자리에는 쌓기나무가 놓여 있지 않은 것입니다."
          }
        ],
        step2_1: [
          {
            q: "앞에서 바라보았을 때 왼쪽에 키가 큰 나무가 있고 오른쪽에 작은 집이 보입니다. 이 풍경을 뒤에서 바라보면 왼쪽에 작은 [ ① ]이 보이고 오른쪽에 키가 큰 나무가 보입니다.",
            ans: "집",
            h1: "뒤에서 보면 왼쪽과 오른쪽의 위치가 반대로 바뀝니다.",
            h2: "앞에서 오른쪽에 있던 물체의 이름을 한 글자로 적어 보세요."
          },
          {
            q: "위에서 본 모양에 색칠된 칸이 모두 5칸이고, 모든 자리에 쌓기나무가 1층으로만 놓여 있다면 사용한 쌓기나무는 모두 [ ① ]개입니다.",
            ans: "5",
            h1: "바닥에 놓인 5칸에 각각 1개씩 놓여 있습니다.",
            h2: "5칸 × 1층의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 쌓기나무로 쌓은 모양을 위에서 내려다본 모양입니다. 앞줄 왼쪽 자리에만 2층으로 쌓았고, 나머지 세 자리에는 모두 1층으로 쌓았습니다. 사용한 쌓기나무는 모두 몇 개인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <text x="72" y="20" fill="#1e3a8a" font-size="12" font-weight="bold">[위에서 본 모양]</text>
                    <rect x="75" y="28" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="75" y="56" width="28" height="28" fill="#60a5fa" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="81" y="74" fill="#fff" font-size="11" font-weight="bold">2층</text>
                    <rect x="103" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="131" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="110" y="102" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                  </svg>
                </div>`,
            ans: "5", accept: ["5개"], unit: "개", placeholder: "숫자만 입력",
            h1: "위에서 본 모양의 칸이 모두 4칸이므로 바닥(1층)에 4개가 깔려 있습니다.",
            h2: "바닥(1층) 4개에 2층에 올라간 1개를 더해 보세요.",
            checkTip: "1층에 4개, 2층에 1개가 있으므로 모두 4 + 1 = 5(개)입니다.",
            wrongDiag: {
              "4": "4개는 바닥(1층)에 놓인 개수예요! 앞줄 왼쪽 자리에 2층으로 올라간 1개를 더해야 합니다."
            },
            diagDefault: "바닥의 4개와 2층의 1개를 더한 개수를 입력해 보세요.",
            steps: [
              { q: "1계단: 위에서 본 모양의 칸은 모두 몇 칸(1층 개수)인가요?", ans: "4" },
              { q: "2계단: 한 자리에만 2층으로 쌓았으므로 1개를 더하면 전체는 몇 개인가요?", ans: "5" }
            ]
          },
          {
            q: "정면(앞)에서 수평 방향으로 똑바로 바라보았을 때, 앞줄에 3층 기둥이 서 있어서 같은 세로줄의 바로 뒷자리가 가려져 보이지 않습니다. 만약 그 뒷자리에 쌓기나무가 숨겨져 있다면, 앞의 3층 기둥에 완전히 가려지기 위해 뒷자리에는 최대 몇 층까지 쌓여 있을 수 있나요?",
            ans: "3", accept: ["3층", "3개"], unit: "층", placeholder: "숫자만 입력",
            h1: "정면에서 수평으로 볼 때 앞에 있는 3층 기둥보다 높게(4층 이상) 쌓으면 위로 튀어나와 보이게 됩니다.",
            h2: "3층 기둥 뒤에 완전히 가려지려면 최대 몇 층까지 가능한지 적어 보세요.",
            checkTip: "정면에서 보았을 때 앞의 3층 기둥에 가려져 보이지 않으려면 뒷자리에는 1층, 2층, 또는 최대 3층까지 쌓여 있을 수 있습니다.",
            wrongDiag: {
              "2": "2층도 가려지지만, 앞 기둥과 똑같은 높이인 3층까지도 정면에서 수평으로 볼 때 가려져서 보이지 않을 수 있어요!"
            },
            diagDefault: "앞에 있는 기둥의 층수(3층)와 같을 때까지 가려질 수 있습니다.",
            steps: [
              { q: "1계단: 앞줄 기둥이 몇 층인가요?", ans: "3" },
              { q: "2계단: 앞줄 기둥 위로 튀어나오지 않으려면 뒷자리에는 최대 몇 층까지 쌓을 수 있나요?", ans: "3" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 그림과 같이 원기둥(빨강)과 사각기둥(파랑)을 나란히 놓고 (가), (나) 방향에서 바라보았습니다. (가) 방향(뒤쪽)에서 바라보았을 때 왼쪽에 보이는 도형은 무엇인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 115" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="95" y="20" fill="#dc2626" font-size="12" font-weight="bold">⬇️ (가) 뒤</text>
                      <circle cx="80" cy="58" r="18" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
                      <text x="63" y="62" fill="#991b1b" font-size="11" font-weight="bold">원기둥</text>
                      <rect x="132" y="40" width="36" height="36" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
                      <text x="129" y="62" fill="#1e3a8a" font-size="11" font-weight="bold">사각기둥</text>
                      <text x="95" y="102" fill="#1d4ed8" font-size="12" font-weight="bold">⬆️ (나) 앞</text>
                    </svg>
                  </div>`,
              ans: "사각기둥", accept: ["파랑", "파란색", "사각기둥(파랑)"], placeholder: "도형 이름 입력",
              h1: "(나) 앞쪽에서 볼 때는 원기둥이 왼쪽, 사각기둥이 오른쪽에 보입니다.",
              h2: "맞은편인 (가) 뒤쪽에서 마주 보고 서면 왼쪽과 오른쪽이 반대로 바뀝니다. 왼쪽에 보이는 도형 이름을 적어 보세요.",
              checkTip: "(가) 뒤쪽에서 바라보면 오른쪽의 사각기둥이 관찰자의 왼쪽에 보이게 됩니다.",
              wrongDiag: {
                "원기둥": "원기둥은 (나) 앞쪽에서 보았을 때 왼쪽에 보이는 도형이에요! (가) 뒤쪽에서 보면 반대로 사각기둥이 왼쪽에 보입니다."
              },
              diagDefault: "(가) 뒤쪽에서 바라보았을 때 왼쪽에 놓이는 '사각기둥'을 입력해 보세요.",
              steps: [
                { q: "1계단: (나) 앞쪽에서 볼 때 오른쪽에 있는 도형은 무엇인가요?", ans: "사각기둥" },
                { q: "2계단: (가) 뒤쪽에서 보면 좌우가 바뀌므로 왼쪽에 보이는 도형은 무엇인가요?", ans: "사각기둥" }
              ]
            },
            {
              q: `[유형 1] 다음은 쌓기나무로 쌓은 모양을 위에서 본 모양입니다. 뒷줄 가운데 자리(★)와 앞줄 오른쪽 자리(●)에만 2층으로 쌓고, 나머지 세 자리에는 1층으로 쌓았습니다. 사용한 쌓기나무는 모두 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="72" y="20" fill="#1e3a8a" font-size="12" font-weight="bold">[위에서 본 모양]</text>
                      <rect x="96" y="28" width="28" height="28" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="104" y="47" fill="#b45309" font-size="13" font-weight="bold">★</text>
                      <rect x="124" y="28" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="68" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="96" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="124" y="56" width="28" height="28" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="132" y="75" fill="#dc2626" font-size="13" font-weight="bold">●</text>
                      <text x="104" y="102" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                    </svg>
                  </div>`,
              ans: "7", accept: ["7개"], unit: "개", placeholder: "숫자만 입력",
              h1: "먼저 위에서 본 모양의 전체 칸수(1층에 깔린 개수)를 세어 보세요.",
              h2: "전체 5칸 중에서 2곳(★, ●)만 2층이고 나머지 3곳은 1층입니다. 모두 몇 개인지 더해 보세요.",
              checkTip: "1층에 5개, 2층에 2개(★, ●)가 있으므로 모두 5 + 2 = 7(개)입니다.",
              wrongDiag: {
                "5": "5개는 바닥(1층)에 놓인 개수예요! 2층으로 쌓은 두 자리(★, ●)의 2개를 더해야 합니다.",
                "6": "2층으로 쌓은 자리가 두 곳(★, ●)이므로 5 + 2 = 7개입니다!"
              },
              diagDefault: "바닥(1층)의 5개와 2층의 2개를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 위에서 본 모양의 칸은 모두 몇 칸인가요?", ans: "5" },
                { q: "2계단: 두 자리에 1개씩 더 올라가므로 전체는 5 + 2 = 몇 개인가요?", ans: "7" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 민수는 아래 왼쪽의 [입체 그림]만 보고 눈에 보이는 3개(왼쪽 앞 2층, 오른쪽 앞 1층)가 전부라고 생각하여 '3개'라고 답했습니다. 그런데 [위에서 본 모양]을 확인해 보니 왼쪽 뒷자리(★)에도 1층짜리 쌓기나무 1개가 숨겨져 있었습니다. 실제 사용한 쌓기나무는 모두 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 280 115" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 왼쪽: 3D 등각투영 입체 그림 (왼쪽 앞 2층 + 오른쪽 앞 1층) -->
                      <text x="28" y="18" fill="#1e3a8a" font-size="11" font-weight="bold">[입체 그림]</text>
                      <!-- 왼쪽 1층 큐브 -->
                      <polygon points="35,62 55,52 75,62 55,72" fill="#fde047" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="35,62 55,72 55,94 35,84" fill="#facc15" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="55,72 75,62 75,84 55,94" fill="#eab308" stroke="#1e293b" stroke-width="1.2"/>
                      <!-- 왼쪽 2층 큐브 -->
                      <polygon points="35,40 55,30 75,40 55,50" fill="#fde047" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="35,40 55,50 55,72 35,62" fill="#facc15" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="55,50 75,40 75,62 55,72" fill="#eab308" stroke="#1e293b" stroke-width="1.2"/>
                      <!-- 오른쪽 1층 큐브 -->
                      <polygon points="55,72 75,62 95,72 75,82" fill="#fde047" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="55,72 75,82 75,104 55,94" fill="#facc15" stroke="#1e293b" stroke-width="1.2"/>
                      <polygon points="75,82 95,72 95,94 75,104" fill="#eab308" stroke="#1e293b" stroke-width="1.2"/>
                      <text x="25" y="106" fill="#dc2626" font-size="10" font-weight="bold">↗ 앞</text>
                      <!-- 오른쪽: 위에서 본 모양 -->
                      <text x="165" y="18" fill="#1e3a8a" font-size="11" font-weight="bold">[위에서 본 모양]</text>
                      <rect x="175" y="30" width="26" height="26" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <text x="182" y="48" fill="#dc2626" font-size="12" font-weight="bold">★</text>
                      <rect x="175" y="56" width="26" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="201" y="56" width="26" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="195" y="98" fill="#1e293b" font-size="11" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "4", accept: ["4개"], unit: "개", placeholder: "숫자만 입력",
              h1: "눈에 보이는 쌓기나무 개수(3개)에 2층 기둥 뒤에 가려져 보이지 않는 개수(★ 자리 1개)를 더해야 합니다!",
              h2: "앞줄의 3개(2층 + 1층)와 뒤에 숨겨진 1개를 더해 보세요.",
              checkTip: "보이는 3개 + 숨겨진 1개 = 4(개)입니다.",
              wrongDiag: {
                "3": "3개는 앞에 보이는 개수만 센 것이에요! 2층 기둥 뒤(★)에 가려진 1개를 더해야 합니다."
              },
              diagDefault: "보이는 3개에 숨겨진 1개를 더한 값을 적어 보세요.",
              steps: [
                { q: "1계단: 앞줄에 보이는 3개에 뒤에 숨겨진 1개를 더하면 모두 몇 개인가요?", ans: "4" }
              ]
            },
            {
              q: `[유형 2] 정면(앞)에서 수평 방향으로 바라보았을 때 앞줄에 2층 기둥 2개가 나란히 서 있고, 왼쪽 뒷자리는 앞줄의 2층 기둥에 완전히 가려져 보이지 않습니다. 위에서 본 모양이 아래와 같을 때, 위·앞·옆에서 본 모양이 같은 입체를 만드는 데 필요한 쌓기나무의 '최소 개수'와 '최대 개수'를 순서대로 쓰세요 (쉼표로 구분하여 입력).
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="72" y="18" fill="#1e3a8a" font-size="12" font-weight="bold">[위에서 본 모양]</text>
                      <rect x="82" y="26" width="28" height="26" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
                      <text x="87" y="43" fill="#b45309" font-size="9" font-weight="bold">가려짐</text>
                      <rect x="82" y="52" width="28" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="88" y="69" fill="#1e3a8a" font-size="11" font-weight="bold">2층</text>
                      <rect x="110" y="52" width="28" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="116" y="69" fill="#1e3a8a" font-size="11" font-weight="bold">2층</text>
                      <text x="104" y="95" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                    </svg>
                  </div>`,
              ans: "5, 6", accept: ["5,6", "5 6", "5개, 6개"], placeholder: "최소 개수, 최대 개수 순서로 입력",
              h1: "위에서 본 모양의 뒷줄 왼쪽에 칸이 있으므로, 가려진 자리에는 적어도 1개(1층)는 놓여 있어야 하고, 앞줄(2층)에 가려지려면 최대 2개(2층)까지 놓일 수 있습니다!",
              h2: "앞줄의 4개(2층 + 2층)에 가려진 자리의 최소(1개)와 최대(2개)를 각각 더해 순서대로 적어 보세요.",
              checkTip: "앞줄에 2 + 2 = 4개가 있고, 가려진 뒷자리에 1개이면 최소 5개, 2개이면 최대 6개입니다.",
              wrongDiag: {
                "4, 6": "위에서 본 모양에 뒷자리 칸이 색칠되어 있으므로 0개일 수는 없어요! 최소 1개가 있어야 하므로 최소 개수는 4 + 1 = 5개입니다.",
                "4, 5": "앞줄에 이미 4개가 있으므로 뒷자리에 1개일 때 최소 5개, 2개일 때 최대 6개입니다!"
              },
              diagDefault: "최소 개수(5)와 최대 개수(6)를 '5, 6' 형태로 적어 보세요.",
              steps: [
                { q: "1계단: 앞줄 두 자리에 놓인 쌓기나무(2층 + 2층)는 모두 몇 개인가요?", ans: "4" },
                { q: "2계단: 가려진 뒷자리에 1층(1개)이 있을 때 최소 개수는 4 + 1 = 몇 개인가요?", ans: "5" },
                { q: "3계단: 가려진 뒷자리에 2층(2개)이 있을 때 최대 개수는 6개입니다. 최소와 최대를 순서대로 쓰면 무엇인가요?", ans: "5, 6" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 공원 한가운데에 탑이 서 있고, 탑의 동쪽에는 분수대, 서쪽에는 벤치가 있습니다. 공원의 북쪽에서 남쪽을 바라보며 사진을 찍으면, 분수대는 사진의 어느 쪽(왼쪽 / 오른쪽)에 찍히나요?",
              ans: "왼쪽", accept: ["왼편"], placeholder: "왼쪽 또는 오른쪽 입력",
              h1: "지도에서 북쪽이 위, 남쪽이 아래, 동쪽이 오른쪽, 서쪽이 왼쪽입니다.",
              h2: "북쪽(위)에서 남쪽(아래)을 마주 보고 내려다보면 좌우가 반대로 바뀝니다. 동쪽(분수대)이 어느 쪽에 보일지 적어 보세요.",
              checkTip: "남쪽에서 북쪽을 볼 때는 동쪽(분수대)이 오른쪽이지만, 북쪽에서 남쪽을 바라보면 반대로 왼쪽에 보입니다.",
              wrongDiag: {
                "오른쪽": "남쪽에서 북쪽을 바라볼 때 동쪽이 오른쪽이에요! 북쪽에서 남쪽을 마주 보고 바라보면 좌우가 바뀌어 왼쪽에 보입니다."
              },
              diagDefault: "'왼쪽' 또는 '오른쪽' 중 알맞은 말을 입력해 보세요.",
              steps: [
                { q: "1계단: 남쪽에서 북쪽을 볼 때 동쪽(분수대)은 오른쪽입니다. 반대 방향인 북쪽에서 남쪽을 보면 어느 쪽에 보이나요?", ans: "왼쪽" }
              ]
            },
            {
              q: `[유형 3] 다음 [위에서 본 모양]을 보고 쌓기나무의 개수를 구하려고 합니다. 색칠된 6칸 중 ★ 표시된 한 자리만 3층이고, 나머지 다섯 자리는 모두 1층일 때, 전체 쌓기나무는 모두 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="72" y="20" fill="#1e3a8a" font-size="12" font-weight="bold">[위에서 본 모양]</text>
                      <rect x="68" y="28" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="96" y="28" width="28" height="28" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="104" y="47" fill="#dc2626" font-size="13" font-weight="bold">★</text>
                      <rect x="124" y="28" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="68" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="96" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="124" y="56" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="104" y="102" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                    </svg>
                  </div>`,
              ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
              h1: "1층인 다섯 자리에는 5개가 놓이고, ★ 자리에는 3개가 놓입니다.",
              h2: "5 + 3을 계산해 보세요.",
              checkTip: "1층 다섯 자리(5개) + 3층 한 자리(3개) = 8(개)입니다.",
              wrongDiag: {
                "6": "6개는 바닥(1층)에만 깔린 개수예요! ★ 자리에 올라간 2층, 3층의 2개를 더해야 합니다."
              },
              diagDefault: "5개와 3개를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층인 다섯 자리에 놓인 쌓기나무는 모두 몇 개인가요?", ans: "5" },
                { q: "2계단: ★ 자리의 3개를 더하면 전체는 몇 개인가요?", ans: "8" }
              ]
            }
          ]
        ],
        step4Intro: "앞과 뒤에서 볼 때는 왼쪽과 오른쪽이 반대로 바뀌며, '위에서 본 모양'을 확인하면 바닥(1층)에 놓인 자리를 빠짐없이 찾을 수 있어요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 식탁 위에 앞에서 보았을 때 왼쪽에는 물컵, 오른쪽에는 꽃병이 놓여 있습니다. 식탁의 뒤쪽에서 마주 보고 바라보았을 때 왼쪽에 보이는 물건은 무엇인가요?",
              ans: "꽃병", placeholder: "물건 이름 입력",
              h1: "뒤쪽에서 바라보면 왼쪽과 오른쪽의 위치가 반대로 바뀝니다.",
              h2: "앞에서 오른쪽에 있던 물건 이름을 적어 보세요.",
              checkTip: "뒤에서 보면 오른쪽에 있던 꽃병이 왼쪽에 보입니다.",
              wrongDiag: {
                "물컵": "물컵은 앞에서 볼 때 왼쪽에 보이는 물건이에요! 뒤에서 보면 꽃병이 왼쪽에 보입니다."
              },
              diagDefault: "'꽃병'을 입력해 보세요.",
              steps: [
                { q: "1계단: 뒤에서 보면 좌우가 바뀌므로 왼쪽에 보이는 것은 무엇인가요?", ans: "꽃병" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 위에서 본 모양의 칸이 모두 6칸인 쌓기나무 모양이 있습니다. 그중 두 자리에만 2층으로 쌓고, 나머지 네 자리에는 1층으로 쌓았다면 사용한 쌓기나무는 모두 몇 개인가요?",
              ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
              h1: "바닥(1층)에 6개가 깔려 있고, 2층에 2개가 더 올라가 있습니다.",
              h2: "6 + 2를 계산해 보세요.",
              checkTip: "1층 6개 + 2층 2개 = 8(개)입니다.",
              wrongDiag: {},
              diagDefault: "6에 2를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 6 + 2는 몇 개인가요?", ans: "8" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 입체 그림에서 눈에 보이는 쌓기나무가 8개이고, 위에서 본 모양을 확인했더니 앞줄 기둥 뒤에 가려져 보이지 않는 1층 쌓기나무가 2개 더 있었습니다. 실제 사용한 쌓기나무는 모두 몇 개인가요?",
              ans: "10", accept: ["10개"], unit: "개", placeholder: "숫자만 입력",
              h1: "보이는 개수와 숨겨진 개수를 더합니다.",
              h2: "8 + 2를 계산해 보세요.",
              checkTip: "8 + 2 = 10(개)입니다.",
              wrongDiag: {},
              diagDefault: "8과 2를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 8 + 2는 몇 개인가요?", ans: "10" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 정면(앞)에서 수평 방향으로 보았을 때 앞줄에 3층 기둥 1개와 2층 기둥 1개가 서 있어서 총 5개가 보이고, 3층 기둥 바로 뒷자리(위에서 본 모양에 칸이 있음)는 앞의 3층 기둥에 완전히 가려져 보이지 않습니다. 필요한 쌓기나무의 '최소 개수'와 '최대 개수'를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "6, 8", accept: ["6,8", "6 8", "6개, 8개"], placeholder: "최소 개수, 최대 개수 순서로 입력",
              h1: "3층 기둥 뒤의 가려진 자리에는 최소 1개(1층)부터 최대 3개(3층)까지 놓일 수 있습니다.",
              h2: "앞줄의 5개에 1개를 더한 값(최소)과 3개를 더한 값(최대)을 순서대로 적어 보세요.",
              checkTip: "최소는 5 + 1 = 6개, 최대는 5 + 3 = 8개입니다.",
              wrongDiag: {},
              diagDefault: "'6, 8'을 입력해 보세요.",
              steps: [
                { q: "1계단: 가려진 자리에 1개가 있을 때 최소 개수는 5 + 1 = 몇 개인가요?", ans: "6" },
                { q: "2계단: 가려진 자리에 3개가 있을 때 최대 개수는 5 + 3 = 8개입니다. 순서대로 쓰면 무엇인가요?", ans: "6, 8" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 운동장 한가운데에 국기 게양대가 있고, 동쪽에는 철봉, 서쪽에는 구름사다리가 있습니다. 북쪽에서 남쪽을 바라보며 사진을 찍으면, 구름사다리(서쪽)는 사진의 어느 쪽(왼쪽 / 오른쪽)에 찍히나요?",
              ans: "오른쪽", accept: ["오른편"], placeholder: "왼쪽 또는 오른쪽 입력",
              h1: "남쪽에서 북쪽을 볼 때 서쪽은 왼쪽이지만, 북쪽에서 남쪽을 마주 보고 바라보면 좌우가 반대로 바뀝니다.",
              h2: "왼쪽의 반대쪽을 적어 보세요.",
              checkTip: "북쪽에서 남쪽을 바라보면 서쪽(구름사다리)은 오른쪽에 보입니다.",
              wrongDiag: {
                "왼쪽": "북쪽에서 남쪽을 내려다보면 동서 방향의 좌우가 바뀌어 서쪽이 오른쪽에 보입니다!"
              },
              diagDefault: "'오른쪽'을 입력해 보세요.",
              steps: [
                { q: "1계단: 북쪽에서 남쪽을 바라볼 때 서쪽은 어느 쪽에 보이나요?", ans: "오른쪽" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 위에서 본 모양이 5칸인 쌓기나무 모양이 있습니다. 그중 한 자리만 3층이고 나머지 네 자리는 모두 1층일 때, 전체 쌓기나무는 모두 몇 개인가요?",
              ans: "7", accept: ["7개"], unit: "개", placeholder: "숫자만 입력",
              h1: "1층인 네 자리(4개)와 3층인 한 자리(3개)를 더합니다.",
              h2: "4 + 3을 계산해 보세요.",
              checkTip: "4 + 3 = 7(개)입니다.",
              wrongDiag: {},
              diagDefault: "4와 3을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 4 + 3은 몇 개인가요?", ans: "7" }
              ]
            }
          ]
        ],
        step5A: {
          q: "쌓기나무 모양에서 앞기둥 뒤에 숨겨진 쌓기나무가 있는지 정확히 알아보려면 바닥의 자리를 모두 보여 주는 [ (1) 위 / (2) 옆 ] 에서 본 모양을 확인해야 합니다.",
          ans: "위", numAns: "1",
          hint: "💡 힌트: 하늘에서 내려다보면 앞기둥 뒤에 바닥 칸이 있는지 한눈에 보입니다."
        },
        step5B: {
          sentence: "바라보는 방향에 따라 보이는 모양이 달라지며 위에서 본 모양을 알면 숨겨진 쌓기나무를 찾을 수 있다."
        },
        nextUnit: "3-2"
      },
  
      "3-2": {
        title: "3-2차시: 쌓기나무로 쌓은 모양을 위, 앞, 옆에서 본 모양으로 나타내어 볼까요",
        goal: "쌓기나무로 쌓은 모양을 위, 앞, 옆에서 본 모양으로 나타내고, 각 줄에서 가장 높은 층수가 보임을 이해합니다.",
        videoUrl: "https://youtube.com/shorts/06J3efnMs0Q?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 위, 앞, 옆에서 본 모양은 '가장 높은 층수'가 결정!</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 위에서 본 모양과 층수 안내 -->
                <rect x="8" y="10" width="104" height="115" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
                <text x="16" y="28" fill="#1e293b" font-size="10" font-weight="bold">[위 (각 자리 층수)]</text>
                <rect x="24" y="38" width="26" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <text x="29" y="55" fill="#1e3a8a" font-size="11" font-weight="bold">3층</text>
                <rect x="50" y="38" width="26" height="26" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                <text x="55" y="55" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                <rect x="24" y="64" width="26" height="26" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                <text x="29" y="81" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                <rect x="50" y="64" width="26" height="26" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <text x="55" y="81" fill="#1e3a8a" font-size="11" font-weight="bold">2층</text>
                <text x="40" y="108" fill="#dc2626" font-size="11" font-weight="bold">⬆️앞</text>
                <text x="80" y="70" fill="#15803d" font-size="10" font-weight="bold">⬅️옆</text>
                <!-- 가운데: 앞에서 본 모양 -->
                <rect x="118" y="10" width="92" height="115" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
                <text x="128" y="28" fill="#dc2626" font-size="11" font-weight="bold">[앞에서 본 모양]</text>
                <rect x="138" y="38" width="24" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <rect x="138" y="60" width="24" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <rect x="138" y="82" width="24" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <rect x="162" y="60" width="24" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <rect x="162" y="82" width="24" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                <text x="122" y="118" fill="#991b1b" font-size="9" font-weight="bold">왼쪽 3층, 오른쪽 2층</text>
                <!-- 오른쪽: 옆에서 본 모양 -->
                <rect x="216" y="10" width="96" height="115" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
                <text x="228" y="28" fill="#15803d" font-size="11" font-weight="bold">[옆에서 본 모양]</text>
                <rect x="238" y="60" width="24" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <rect x="238" y="82" width="24" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <rect x="262" y="38" width="24" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <rect x="262" y="60" width="24" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <rect x="262" y="82" width="24" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                <text x="224" y="118" fill="#166534" font-size="9" font-weight="bold">앞줄 2층, 뒷줄 3층</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>앞에서 본 모양:</strong> 각 세로줄(왼쪽 줄, 오른쪽 줄)에서 <strong>가장 높게 쌓인 층수</strong>만큼 보입니다.</li>
              <li><strong>옆(오른쪽 옆)에서 본 모양:</strong> 오른쪽 옆에서 바라보면 <strong>앞줄이 왼쪽에, 뒷줄이 오른쪽에</strong> 놓이며, 각 가로줄에서 가장 높게 쌓인 층수만큼 보입니다.</li>
              <li><strong>최고 층수 일치:</strong> 앞에서 본 모양의 가장 높은 층수와 옆에서 본 모양의 가장 높은 층수는 항상 같습니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 위에서 본 모양이 4칸인 쌓기나무 모양에서 한 자리만 2층이고 나머지 세 자리는 1층입니다. 전체 쌓기나무는 모두 몇 개인가요?",
            ans: "5", accept: ["5개"], unit: "개", placeholder: "숫자만 입력",
            h1: "1층에 4개가 깔려 있고 2층에 1개가 올라가 있습니다.",
            h2: "4 + 1을 계산해 보세요.",
            checkTip: "4 + 1 = 5(개)입니다.",
            wrongDiag: {},
            diagDefault: "4와 1을 더한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 4 + 1은 몇 개인가요?", ans: "5" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "앞줄에 1층, 그 바로 뒷줄에 3층으로 쌓기나무가 놓여 있습니다. 정면(앞)에서 바라보았을 때 이 줄은 몇 층으로 보이나요?",
            choices: ["1번: 3층 (가장 높은 층수만큼 보인다)", "2번: 4층 (1층과 3층을 더한 만큼 보인다)"],
            ans: "1",
            h1: "앞에 있는 1층은 뒤에 서 있는 3층의 맨 아래층과 겹쳐서 보입니다.",
            h2: "더하는 것이 아니라 가장 높은 층수인 3층으로 보인다는 보기를 골라 보세요."
          },
          {
            q: "쌓기나무 모양을 '오른쪽 옆'에서 바라보았을 때, 원래 모양의 '앞줄'은 옆에서 본 모양의 어느 쪽에 위치하게 되나요?",
            choices: ["1번: 왼쪽", "2번: 오른쪽"],
            ans: "1",
            h1: "오른쪽 옆에 서서 왼쪽(쌓기나무 쪽)을 바라보는 모습을 상상해 보세요.",
            h2: "오른쪽 옆에서 보면 앞줄이 왼쪽에, 뒷줄이 오른쪽에 놓입니다."
          }
        ],
        step2_1: [
          {
            q: "앞에서 보았을 때 가장 높은 곳이 3층이라면, 같은 쌓기나무 모양을 옆에서 보았을 때 가장 높은 곳도 반드시 [ ① ]층입니다.",
            ans: "3",
            h1: "바라보는 방향이 달라져도 가장 높게 쌓은 기둥의 높이는 변하지 않습니다.",
            h2: "앞에서 본 최고 층수와 같은 숫자를 적어 보세요."
          },
          {
            q: "왼쪽 줄에는 2층, 가운데 줄에는 1층, 오른쪽 줄에는 3층이 가장 높게 쌓여 있습니다. 앞에서 본 모양의 칸(정사각형)은 모두 2 + 1 + 3 = [ ① ]칸입니다.",
            ans: "6",
            h1: "왼쪽부터 2칸, 1칸, 3칸이 보이므로 모두 더해 보세요.",
            h2: "2 + 1 + 3의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 쌓기나무로 쌓은 모양의 각 자리 층수를 나타낸 것입니다. 이 모양을 '앞'에서 보았을 때 왼쪽 줄과 오른쪽 줄은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="82" y="20" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="87" y="38" fill="#1e3a8a" font-size="11" font-weight="bold">2층</text>
                    <rect x="110" y="20" width="28" height="28" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="115" y="38" fill="#1e3a8a" font-size="11" font-weight="bold">3층</text>
                    <rect x="82" y="48" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="87" y="66" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                    <text x="104" y="96" fill="#dc2626" font-size="12" font-weight="bold">⬆️ 앞</text>
                  </svg>
                </div>`,
            ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "왼쪽 층수, 오른쪽 층수 순서로 입력",
            h1: "앞에서 볼 때는 각 세로줄에서 가장 높은 층수가 보입니다.",
            h2: "왼쪽 세로줄(1층, 2층)에서 가장 높은 층수와 오른쪽 세로줄(3층)의 층수를 순서대로 적어 보세요.",
            checkTip: "왼쪽 줄은 1층과 2층 중 높은 2층이 보이고, 오른쪽 줄은 3층이 보여 '2, 3'입니다.",
            wrongDiag: {
              "3, 3": "앗! 왼쪽 줄의 1층과 2층을 더해서 3층이라고 적었어요! 앞뒤로 놓인 층수는 더하지 않고 가장 높은 층수(2층)만 보입니다.",
              "1, 3": "앞줄의 1층 뒤로 뒷줄의 2층이 위로 솟아 보이므로 왼쪽 줄은 2층으로 보입니다!"
            },
            diagDefault: "왼쪽 줄의 최고 층수(2)와 오른쪽 줄의 최고 층수(3)를 '2, 3' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: 왼쪽 세로줄에는 1층과 2층이 있습니다. 앞에서 보면 몇 층으로 보이나요?", ans: "2" },
              { q: "2계단: 오른쪽 세로줄은 3층입니다. 왼쪽과 오른쪽 층수를 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
            ]
          },
          {
            q: `다음은 쌓기나무로 쌓은 모양의 각 자리 층수를 나타낸 것입니다. 이 모양을 '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 110" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="75" y="20" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="80" y="38" fill="#1e3a8a" font-size="11" font-weight="bold">2층</text>
                    <rect x="103" y="20" width="28" height="28" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="108" y="38" fill="#1e3a8a" font-size="11" font-weight="bold">3층</text>
                    <rect x="75" y="48" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="80" y="66" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                    <text x="96" y="96" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                    <text x="142" y="55" fill="#15803d" font-size="12" font-weight="bold">⬅️ 옆</text>
                  </svg>
                </div>`,
            ans: "1, 3", accept: ["1,3", "1 3", "1층, 3층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
            h1: "오른쪽 옆에서 바라보면 '앞줄(아래쪽 가로줄)'이 왼쪽에 보이고, '뒷줄(위쪽 가로줄)'이 오른쪽에 보입니다!",
            h2: "앞줄의 최고 층수(1층)와 뒷줄(2층, 3층)의 최고 층수(3층)를 순서대로 적어 보세요.",
            checkTip: "오른쪽 옆에서 보면 왼쪽(앞줄)은 1층, 오른쪽(뒷줄)은 2층과 3층 중 높은 3층이 보여 '1, 3'입니다.",
            wrongDiag: {
              "3, 1": "순서가 거꾸로 되었어요! 오른쪽 옆에서 바라보면 앞줄(1층)이 왼쪽에 놓이고 뒷줄(3층)이 오른쪽에 놓입니다."
            },
            diagDefault: "앞줄의 최고 층수(1)와 뒷줄의 최고 층수(3)를 '1, 3' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: 오른쪽 옆에서 볼 때 왼쪽에 놓이는 앞줄의 최고 층수는 몇 층인가요?", ans: "1" },
              { q: "2계단: 오른쪽에 놓이는 뒷줄(2층, 3층)의 최고 층수는 3층입니다. 순서대로 쓰면 무엇인가요?", ans: "1, 3" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음 쌓기나무 모양을 '앞'에서 보았을 때의 모양으로 알맞은 것의 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 120" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 문제 격자 -->
                      <rect x="18" y="25" width="24" height="24" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="23" y="41" fill="#1e3a8a" font-size="10" font-weight="bold">1층</text>
                      <rect x="42" y="25" width="24" height="24" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="47" y="41" fill="#1e3a8a" font-size="10" font-weight="bold">3층</text>
                      <rect x="66" y="25" width="24" height="24" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="71" y="41" fill="#1e3a8a" font-size="10" font-weight="bold">2층</text>
                      <rect x="18" y="49" width="24" height="24" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="23" y="65" fill="#1e3a8a" font-size="10" font-weight="bold">2층</text>
                      <text x="45" y="92" fill="#dc2626" font-size="11" font-weight="bold">⬆️ 앞</text>
                      <!-- 보기 (가): 2, 3, 2 -->
                      <text x="128" y="22" fill="#1e293b" font-size="11" font-weight="bold">(가)</text>
                      <rect x="115" y="54" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="115" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="133" y="36" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="133" y="54" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="133" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="151" y="54" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="151" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <!-- 보기 (나): 1, 3, 2 -->
                      <text x="225" y="22" fill="#1e293b" font-size="11" font-weight="bold">(나)</text>
                      <rect x="210" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="228" y="36" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="228" y="54" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="228" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="246" y="54" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                      <rect x="246" y="72" width="18" height="18" fill="#fca5a5" stroke="#dc2626" stroke-width="1.2"/>
                    </svg>
                  </div>`,
              ans: "가", accept: ["(가)", "가번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "앞에서 볼 때는 왼쪽 세로줄, 가운데 세로줄, 오른쪽 세로줄에서 각각 가장 높은 층수를 찾습니다.",
              h2: "왼쪽 줄은 1층과 2층 중 2층, 가운데 줄은 3층, 오른쪽 줄은 2층입니다. (2층, 3층, 2층)인 기호를 골라 보세요.",
              checkTip: "왼쪽부터 가장 높은 층수가 2층, 3층, 2층이므로 (가)입니다.",
              wrongDiag: {
                "나": "(나)는 왼쪽 줄을 1층으로 그린 모양이에요! 왼쪽 앞줄에 2층이 있으므로 앞에서 보면 왼쪽 줄은 2층으로 보입니다."
              },
              diagDefault: "왼쪽부터 2층, 3층, 2층으로 그려진 (가)와 (나) 중 알맞은 기호를 적어 보세요.",
              steps: [
                { q: "1계단: 왼쪽 세로줄(1층, 2층)에서 가장 높은 층수는 몇 층인가요?", ans: "2" },
                { q: "2계단: 따라서 왼쪽부터 2층, 3층, 2층인 기호는 무엇인가요?", ans: "가" }
              ]
            },
            {
              q: `[유형 1] 다음은 쌓기나무로 쌓은 모양을 위, 앞, 옆에서 본 모양입니다. 이 모양을 만드는 데 사용된 쌓기나무는 모두 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 115" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 위 -->
                      <text x="38" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[위]</text>
                      <rect x="22" y="32" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="22" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="44" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="38" y="95" fill="#64748b" font-size="10" font-weight="bold">앞</text>
                      <!-- 앞 -->
                      <text x="135" y="20" fill="#dc2626" font-size="11" font-weight="bold">[앞]</text>
                      <rect x="122" y="32" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="122" y="54" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="144" y="54" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <!-- 옆 -->
                      <text x="235" y="20" fill="#15803d" font-size="11" font-weight="bold">[옆]</text>
                      <rect x="222" y="54" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="244" y="32" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="244" y="54" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "4", accept: ["4개"], unit: "개", placeholder: "숫자만 입력",
              h1: "위에서 본 모양이 3칸이므로 바닥(1층)에는 3개가 놓여 있습니다. 이제 어느 자리가 2층인지 찾아보세요!",
              h2: "[앞]에서 볼 때 왼쪽 줄이 2층이고, [옆]에서 볼 때 오른쪽(뒷줄)이 2층이므로 '왼쪽 뒷자리' 딱 한 곳만 2층입니다.",
              checkTip: "바닥(1층) 3칸 중 왼쪽 뒷자리만 2층이고 나머지 두 자리는 1층이므로 2 + 1 + 1 = 4(개)입니다.",
              wrongDiag: {
                "3": "3개는 1층에 놓인 개수예요! 앞과 옆에서 본 모양에 2층이 있으므로 1개를 더해야 합니다.",
                "5": "[옆]에서 본 모양의 왼쪽(앞줄)이 1층이므로 앞줄에는 2층이 없습니다! 왼쪽 뒷자리만 2층이어서 총 4개입니다."
              },
              diagDefault: "바닥(1층) 3개에 2층 1개를 더한 개수를 입력해 보세요.",
              steps: [
                { q: "1계단: [위]에서 본 모양의 칸수(1층에 놓인 개수)는 몇 개인가요?", ans: "3" },
                { q: "2계단: 왼쪽 뒷자리 한 곳만 2층이므로 2층에 놓인 1개를 더하면 모두 몇 개인가요?", ans: "4" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 다은이는 쌓기나무 모양을 '앞'에서 보았을 때 가장 높은 층수가 4층인데, '오른쪽 옆'에서 본 모양을 그릴 때는 가장 높은 층수를 3층으로 잘못 그렸습니다. 오른쪽 옆에서 본 모양의 가장 높은 층수는 몇 층이어야 하나요?",
              ans: "4", accept: ["4층"], unit: "층", placeholder: "숫자만 입력",
              h1: "바라보는 방향이 앞이든 옆이든, 가장 높게 쌓인 기둥의 층수는 변하지 않습니다!",
              h2: "앞에서 본 최고 층수(4층)와 같아야 하므로 몇 층인지 적어 보세요.",
              checkTip: "앞에서 본 모양과 옆에서 본 모양의 가장 높은 층수는 언제나 4층으로 같습니다.",
              wrongDiag: {
                "3": "3층은 다은이가 잘못 그린 층수예요! 앞에서 보았을 때 최고 층수인 4층과 같아야 합니다."
              },
              diagDefault: "앞에서 본 모양의 가장 높은 층수(4)를 입력해 보세요.",
              steps: [
                { q: "1계단: 앞에서 본 모양의 가장 높은 층수가 4층이면, 옆에서 본 모양의 가장 높은 층수도 몇 층인가요?", ans: "4" }
              ]
            },
            {
              q: "[유형 2] 어떤 쌓기나무 모양을 위에서 보았을 때 세로줄이 3줄(왼쪽, 가운데, 오른쪽), 가로줄이 2줄(앞줄, 뒷줄)입니다. 이 모양을 '앞'에서 본 모양의 가로 칸수(㉠)와 '오른쪽 옆'에서 본 모양의 가로 칸수(㉡)를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "3, 2", accept: ["3,2", "3 2", "3칸, 2칸"], placeholder: "앞의 가로 칸수, 옆의 가로 칸수 입력",
              h1: "앞에서 보면 왼쪽·가운데·오른쪽 세로줄 3줄이 나란히 보이고, 옆에서 보면 앞줄·뒷줄 가로줄 2줄이 나란히 보입니다!",
              h2: "앞에서 본 가로 칸수(3)와 옆에서 본 가로 칸수(2)를 쉼표로 구분하여 적어 보세요.",
              checkTip: "앞에서 본 가로 칸수는 세로줄 수인 3칸이고, 옆에서 본 가로 칸수는 가로줄 수인 2칸입니다.",
              wrongDiag: {
                "2, 3": "앞과 옆의 줄 수가 반대로 바뀌었어요! 앞에서 보면 세로줄 3줄(3칸), 옆에서 보면 가로줄 2줄(2칸)이 보입니다."
              },
              diagDefault: "'3, 2' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 앞에서 보았을 때 가로로 몇 줄(세로줄 수)이 보이나요?", ans: "3" },
                { q: "2계단: 옆에서 보았을 때는 앞줄과 뒷줄 2줄이 보입니다. 순서대로 쓰면 무엇인가요?", ans: "3, 2" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 어떤 쌓기나무 모양을 앞에서 보았더니 왼쪽부터 1층, 3층, 2층으로 보였습니다. 앞에서 본 모양에 그려진 작은 정사각형은 모두 몇 칸인가요?",
              ans: "6", accept: ["6칸", "6개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "각 줄에 보이는 층수만큼 정사각형 칸이 그려집니다.",
              h2: "1 + 3 + 2를 계산해 보세요.",
              checkTip: "1 + 3 + 2 = 6(칸)입니다.",
              wrongDiag: {},
              diagDefault: "1, 3, 2를 모두 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1 + 3 + 2는 모두 몇 칸인가요?", ans: "6" }
              ]
            },
            {
              q: `[유형 3] 다음과 같이 쌓기나무 6개로 쌓은 모양이 있습니다. 맨 위(3층)에 있는 빨간색 쌓기나무 1개를 빼내었을 때, 위, 앞, 옆에서 본 모양 중에서 처음과 모양이 '변하지 않는' 방향은 어디인가요? (위 / 앞 / 옆 중 택1)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="68" y="25" width="28" height="28" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/>
                      <text x="73" y="43" fill="#991b1b" font-size="11" font-weight="bold">3층</text>
                      <rect x="96" y="25" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="101" y="43" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                      <rect x="68" y="53" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="73" y="71" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                      <rect x="96" y="53" width="28" height="28" fill="#bfdbfe" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="101" y="71" fill="#1e3a8a" font-size="11" font-weight="bold">1층</text>
                      <text x="90" y="100" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "위", accept: ["위쪽", "위에서 본 모양"], placeholder: "위, 앞, 옆 중 하나 입력",
              h1: "3층 자리에서 맨 위의 1개를 빼내어도 그 자리에는 여전히 2층(2개)이 남아 있어서 바닥(1층) 자리는 비지 않습니다!",
              h2: "앞이나 옆에서 보면 최고 층수가 3층에서 2층으로 줄어들지만, 하늘에서 내려다본 바닥 모양은 그대로입니다. 어느 방향인지 적어 보세요.",
              checkTip: "3층에서 1개를 빼도 그 자리에 2개가 남아 있으므로 '위'에서 본 모양은 변하지 않습니다.",
              wrongDiag: {
                "앞": "앞에서 보면 왼쪽 줄이 3층에서 2층으로 낮아져서 모양이 변해요! 바닥 칸이 그대로 유지되는 '위'를 적어 보세요.",
                "옆": "옆에서 보면 오른쪽(뒷줄)이 3층에서 2층으로 낮아져서 모양이 변해요!"
              },
              diagDefault: "'위', '앞', '옆' 중 바닥 모양이 그대로 유지되는 방향을 적어 보세요.",
              steps: [
                { q: "1계단: 3층에서 1개를 빼내어도 그 자리에 2개가 남아 있으므로 바닥 칸은 그대로입니다. 변하지 않는 방향은 어디인가요?", ans: "위" }
              ]
            }
          ]
        ],
        step4Intro: "앞에서 볼 때는 세로줄마다 가장 높은 층수를, 오른쪽 옆에서 볼 때는 앞줄(왼쪽)과 뒷줄(오른쪽)의 가장 높은 층수를 찾으면 언제나 정확해요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 왼쪽 줄에는 앞뒤로 1층과 3층이 놓여 있고, 오른쪽 줄에는 2층이 놓여 있습니다. 이 모양을 '앞'에서 보았을 때 왼쪽 줄과 오른쪽 줄은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "3, 2", accept: ["3,2", "3 2", "3층, 2층"], placeholder: "왼쪽 층수, 오른쪽 층수 입력",
              h1: "왼쪽 줄은 1층과 3층 중 더 높은 3층이 보입니다.",
              h2: "'3, 2' 형태로 적어 보세요.",
              checkTip: "왼쪽 줄 3층, 오른쪽 줄 2층으로 보입니다.",
              wrongDiag: {},
              diagDefault: "'3, 2'를 입력해 보세요.",
              steps: [
                { q: "1계단: 왼쪽 줄(3층)과 오른쪽 줄(2층)을 순서대로 쓰면 무엇인가요?", ans: "3, 2" }
              ]
            },
            {
              q: `[쌍둥이 1-2] 다음은 쌓기나무로 쌓은 모양을 위, 앞, 옆에서 본 모양입니다. 사용된 쌓기나무는 모두 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 115" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="38" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[위]</text>
                      <rect x="22" y="32" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="44" y="32" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="22" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="44" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="38" y="95" fill="#64748b" font-size="10" font-weight="bold">앞</text>
                      <text x="135" y="20" fill="#dc2626" font-size="11" font-weight="bold">[앞]</text>
                      <rect x="122" y="32" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="122" y="54" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="144" y="54" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <text x="235" y="20" fill="#15803d" font-size="11" font-weight="bold">[옆]</text>
                      <rect x="222" y="54" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="244" y="32" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="244" y="54" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "5", accept: ["5개"], unit: "개", placeholder: "숫자만 입력",
              h1: "위에서 본 모양이 4칸이므로 1층에 4개가 있고, 왼쪽 뒷자리 한 곳만 2층입니다.",
              h2: "4 + 1을 계산해 보세요.",
              checkTip: "1층 4개 + 2층 1개 = 5(개)입니다.",
              wrongDiag: {},
              diagDefault: "4에 1을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층 4개에 2층 1개를 더하면 모두 몇 개인가요?", ans: "5" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 어떤 쌓기나무 모양을 '오른쪽 옆'에서 보았을 때 가장 높은 층수가 3층이었습니다. 이 모양을 '앞'에서 보았을 때 가장 높은 층수는 몇 층인가요?",
              ans: "3", accept: ["3층"], unit: "층", placeholder: "숫자만 입력",
              h1: "앞에서 본 최고 층수와 옆에서 본 최고 층수는 언제나 같습니다.",
              h2: "옆에서 본 최고 층수와 같은 숫자를 적어 보세요.",
              checkTip: "가장 높은 층수는 3층으로 같습니다.",
              wrongDiag: {},
              diagDefault: "3을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞에서 본 가장 높은 층수는 몇 층인가요?", ans: "3" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 위에서 보았을 때 세로줄이 2줄(왼쪽, 오른쪽), 가로줄이 3줄(앞줄, 가운데 줄, 뒷줄)인 쌓기나무 모양이 있습니다. '앞'에서 본 모양의 가로 칸수와 '오른쪽 옆'에서 본 모양의 가로 칸수를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "2, 3", accept: ["2,3", "2 3", "2칸, 3칸"], placeholder: "앞의 가로 칸수, 옆의 가로 칸수 입력",
              h1: "앞에서 보면 세로줄 2줄이 보이고, 옆에서 보면 가로줄 3줄이 보입니다.",
              h2: "'2, 3' 형태로 적어 보세요.",
              checkTip: "앞에서 본 가로 칸수는 세로줄 수인 2칸, 옆에서 본 가로 칸수는 가로줄 수인 3칸입니다.",
              wrongDiag: {},
              diagDefault: "'2, 3'을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞의 가로 칸수(2)와 옆의 가로 칸수(3)를 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 어떤 쌓기나무 모양을 옆에서 보았더니 왼쪽부터 2층, 3층, 2층으로 보였습니다. 옆에서 본 모양에 그려진 작은 정사각형은 모두 몇 칸인가요?",
              ans: "7", accept: ["7칸", "7개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "2 + 3 + 2를 계산합니다.",
              h2: "세 층수를 모두 더해 보세요.",
              checkTip: "2 + 3 + 2 = 7(칸)입니다.",
              wrongDiag: {},
              diagDefault: "7을 입력해 보세요.",
              steps: [
                { q: "1계단: 2 + 3 + 2는 모두 몇 칸인가요?", ans: "7" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 바닥(1층) 4자리에 모두 쌓기나무가 놓여 있고, 그중 한 자리만 2층으로 쌓여 있습니다. 2층에 있는 쌓기나무 1개를 빼내어 모두 1층으로 만들었을 때, 위, 앞, 옆에서 본 모양 중 처음과 모양이 '변하지 않는' 방향은 어디인가요? (위 / 앞 / 옆 중 택1)",
              ans: "위", accept: ["위쪽", "위에서 본 모양"], placeholder: "위, 앞, 옆 중 하나 입력",
              h1: "2층에 있던 1개를 빼내어도 바닥 1층의 4개는 그대로 남아 있습니다.",
              h2: "하늘에서 내려다본 모양이 변하지 않으므로 어느 방향인지 적어 보세요.",
              checkTip: "바닥(1층)의 4칸은 그대로이므로 '위'에서 본 모양은 변하지 않습니다.",
              wrongDiag: {},
              diagDefault: "'위'를 입력해 보세요.",
              steps: [
                { q: "1계단: 바닥 모양이 그대로이므로 변하지 않는 방향은 어디인가요?", ans: "위" }
              ]
            }
          ]
        ],
        step5A: {
          q: "쌓기나무 모양을 앞이나 옆에서 보았을 때는 각 줄에서 [ (1) 가장 높게 쌓인 층수 / (2) 모든 칸을 더한 층수 ] 만큼 보입니다.",
          ans: "가장 높게 쌓인 층수", numAns: "1",
          hint: "💡 힌트: 낮은 기둥은 높은 기둥에 가려지므로 가장 높은 기둥의 높이만큼 보입니다."
        },
        step5B: {
          sentence: "앞과 옆에서 본 모양은 각 줄에서 가장 높게 쌓인 쌓기나무의 층수만큼 보인다."
        },
        nextUnit: "3-3"
      },
  
      "3-3": {
        title: "3-3차시: 위에서 본 모양에 수를 쓰는 방법을 알아볼까요",
        goal: "위에서 본 모양에 각 자리의 쌓기나무 개수를 숫자로 나타내고, 이를 통해 앞·옆에서 본 모양과 전체 개수를 구합니다.",
        videoUrl: "https://youtube.com/shorts/QmzoMZE6fmI?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 위에서 본 모양에 적힌 숫자 완벽 해독법</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 숫자판 -->
                <rect x="10" y="10" width="128" height="115" rx="8" fill="#fefce8" stroke="#facc15" stroke-width="1.5"/>
                <text x="18" y="28" fill="#854d0e" font-size="11" font-weight="bold">[위에서 본 모양 수 쓰기]</text>
                <rect x="35" y="38" width="28" height="28" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="45" y="57" fill="#1d4ed8" font-size="15" font-weight="bold">2</text>
                <rect x="63" y="38" width="28" height="28" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="73" y="57" fill="#dc2626" font-size="15" font-weight="bold">3</text>
                <rect x="35" y="66" width="28" height="28" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="45" y="85" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                <rect x="63" y="66" width="28" height="28" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="73" y="85" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                <text x="53" y="112" fill="#1e293b" font-size="11" font-weight="bold">⬆️ 앞</text>
                <text x="96" y="75" fill="#15803d" font-size="10" font-weight="bold">⬅️옆</text>
                <!-- 오른쪽: 3가지 해독 규칙 -->
                <rect x="145" y="10" width="165" height="115" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="153" y="34" fill="#1e3a8a" font-size="11" font-weight="bold">① 전체 개수 = 숫자의 합</text>
                <text x="163" y="50" fill="#0369a1" font-size="11">➔ 2 + 3 + 1 + 1 = 7(개)</text>
                <text x="153" y="74" fill="#dc2626" font-size="11" font-weight="bold">② 앞 = 세로줄 가장 큰 수</text>
                <text x="163" y="90" fill="#991b1b" font-size="11">➔ 왼쪽 2층, 오른쪽 3층</text>
                <text x="153" y="112" fill="#15803d" font-size="11" font-weight="bold">③ 옆 = 가로줄 큰 수(1, 3)</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>전체 쌓기나무 개수:</strong> 칸 안에 적힌 <strong>모든 숫자를 더하면</strong> 전체 개수가 됩니다.</li>
              <li><strong>앞에서 본 층수:</strong> 각 세로줄에 적힌 숫자 중 <strong>가장 큰 수</strong>를 찾습니다.</li>
              <li><strong>옆에서 본 층수:</strong> 각 가로줄에 적힌 숫자 중 <strong>가장 큰 수</strong>를 찾습니다 (앞줄이 왼쪽, 뒷줄이 오른쪽!).</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 앞에서 보았을 때 왼쪽부터 2층, 1층, 3층으로 보이는 쌓기나무 모양이 있습니다. 이 모양을 오른쪽 옆에서 보았을 때 가장 높은 곳은 몇 층인가요?",
            ans: "3", accept: ["3층"], unit: "층", placeholder: "숫자만 입력",
            h1: "앞에서 본 최고 층수와 옆에서 본 최고 층수는 같습니다.",
            h2: "2, 1, 3 중 가장 큰 수를 적어 보세요.",
            checkTip: "가장 높은 층수는 3층입니다.",
            wrongDiag: {},
            diagDefault: "3을 입력해 보세요.",
            steps: [
              { q: "1계단: 가장 높은 층수는 몇 층인가요?", ans: "3" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "위에서 본 모양의 네 칸에 각각 '1, 2, 3, 2'라고 적혀 있습니다. 이 모양을 만드는 데 사용한 쌓기나무는 모두 몇 개인가요?",
            choices: ["1번: 4개 (칸의 개수)", "2번: 8개 (적힌 수를 모두 더한 값)"],
            ans: "2",
            h1: "각 칸에 적힌 숫자가 그 자리에 쌓인 쌓기나무의 개수입니다.",
            h2: "1 + 2 + 3 + 2를 계산한 값을 골라 보세요."
          },
          {
            q: "위에서 본 모양의 왼쪽 세로줄에 앞줄은 '2', 뒷줄은 '3'이라고 적혀 있습니다. 앞에서 바라보았을 때 왼쪽 줄은 몇 층으로 보이나요?",
            choices: ["1번: 3층 (두 수 중 큰 수)", "2번: 5층 (2 + 3)"],
            ans: "1",
            h1: "앞에서 볼 때는 그 줄에서 가장 큰 수만큼 층수가 보입니다.",
            h2: "2와 3 중 더 큰 수를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "위에서 본 모양의 다섯 칸에 각각 3, 1, 2, 1, 2가 적혀 있습니다. 똑같은 모양으로 쌓는 데 필요한 쌓기나무는 모두 3 + 1 + 2 + 1 + 2 = [ ① ]개입니다.",
            ans: "9",
            h1: "다섯 개의 숫자를 모두 더해 보세요.",
            h2: "3 + 1 + 2 + 1 + 2의 값을 숫자로 적어 보세요."
          },
          {
            q: "위에서 본 모양의 앞줄(가로줄)에 '1, 2, 1'이 적혀 있고, 뒷줄(가로줄)에 '2, 3, 1'이 적혀 있습니다. 오른쪽 옆에서 보았을 때 오른쪽(뒷줄)은 가장 큰 수인 [ ① ]층으로 보입니다.",
            ans: "3",
            h1: "뒷줄에 적힌 숫자 '2, 3, 1' 중에서 가장 큰 수를 찾아보세요.",
            h2: "2, 3, 1 중 가장 큰 숫자를 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 위에서 본 모양에 각 자리의 쌓기나무 개수를 쓴 것입니다. 똑같은 모양으로 쌓는 데 필요한 쌓기나무는 모두 몇 개인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="68" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="42" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                    <rect x="96" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="42" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="124" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="134" y="42" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="68" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="70" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="124" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="134" y="70" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <text x="104" y="98" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                  </svg>
                </div>`,
            ans: "9", accept: ["9개"], unit: "개", placeholder: "숫자만 입력",
            h1: "칸 안에 적힌 모든 숫자를 더하면 전체 쌓기나무 개수가 됩니다.",
            h2: "뒷줄의 (3 + 2 + 1)과 앞줄의 (1 + 2)를 더해 보세요.",
            checkTip: "3 + 2 + 1 + 1 + 2 = 9(개)입니다.",
            wrongDiag: {
              "5": "5개는 칸의 개수(1층의 개수)예요! 각 칸에 적힌 숫자들을 모두 더해야 합니다."
            },
            diagDefault: "3 + 2 + 1 + 1 + 2를 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 뒷줄에 적힌 수들의 합(3 + 2 + 1)은 얼마인가요?", ans: "6" },
              { q: "2계단: 앞줄에 적힌 수들의 합(1 + 2 = 3)을 더하면 전체는 몇 개인가요?", ans: "9" }
            ]
          },
          {
            q: `다음과 같이 위에서 본 모양에 수를 썼습니다. 이 모양을 '앞'에서 보았을 때 왼쪽, 가운데, 오른쪽 줄은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="68" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="42" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                    <rect x="96" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="42" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="124" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="134" y="42" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="68" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="70" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="96" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="70" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <text x="104" y="98" fill="#dc2626" font-size="12" font-weight="bold">⬆️ 앞</text>
                  </svg>
                </div>`,
            ans: "3, 2, 2", accept: ["3,2,2", "3 2 2"], placeholder: "왼쪽, 가운데, 오른쪽 층수 입력",
            h1: "앞에서 볼 때는 각 세로줄에 적힌 숫자 중 '가장 큰 수'를 찾습니다.",
            h2: "왼쪽 줄(3, 2 중 큰 수), 가운데 줄(1, 2 중 큰 수), 오른쪽 줄(2)을 순서대로 적어 보세요.",
            checkTip: "왼쪽 줄은 3, 가운데 줄은 2, 오른쪽 줄은 2이므로 '3, 2, 2'입니다.",
            wrongDiag: {
              "5, 3, 2": "앗! 세로줄의 숫자를 더했어요! 앞뒤에 놓인 쌓기나무는 겹쳐 보이므로 더하지 않고 '가장 큰 수'만 적어야 합니다.",
              "2, 2, 2": "앞줄 숫자만 읽으면 안 돼요! 뒷줄에 더 높은 3층이 있으므로 왼쪽 줄은 3층으로 보입니다."
            },
            diagDefault: "각 세로줄에서 가장 큰 수를 찾아 '3, 2, 2' 형태로 적어 보세요.",
            steps: [
              { q: "1계단: 왼쪽 세로줄(3, 2)에서 더 큰 수는 얼마인가요?", ans: "3" },
              { q: "2계단: 가운데 세로줄(1, 2)에서 더 큰 수는 얼마인가요?", ans: "2" },
              { q: "3계단: 오른쪽 줄은 2입니다. 세 줄의 층수를 쉼표로 구분해 쓰면 무엇인가요?", ans: "3, 2, 2" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음은 위에서 본 모양에 수를 쓴 것입니다. 이 모양을 '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 110" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="60" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="70" y="42" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="88" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="98" y="42" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                      <rect x="116" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="126" y="42" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="60" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="70" y="70" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="88" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="98" y="70" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <text x="96" y="98" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                      <text x="152" y="55" fill="#15803d" font-size="12" font-weight="bold">⬅️ 옆</text>
                    </svg>
                  </div>`,
              ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
              h1: "오른쪽 옆에서 보면 아래쪽 가로줄(앞줄: 2, 1)이 왼쪽에, 위쪽 가로줄(뒷줄: 1, 3, 2)이 오른쪽에 보입니다.",
              h2: "앞줄(2, 1)에서 가장 큰 수와 뒷줄(1, 3, 2)에서 가장 큰 수를 순서대로 적어 보세요.",
              checkTip: "앞줄에서 가장 큰 수는 2, 뒷줄에서 가장 큰 수는 3이므로 옆에서 보면 '2, 3'으로 보입니다.",
              wrongDiag: {
                "3, 2": "앞줄과 뒷줄의 위치가 바뀌었어요! 오른쪽 옆에서 바라보면 앞줄(2층)이 왼쪽에, 뒷줄(3층)이 오른쪽에 보입니다.",
                "3, 6": "가로줄의 숫자를 더하면 안 돼요! 각 가로줄에서 가장 큰 수(2와 3)를 찾아야 합니다."
              },
              diagDefault: "앞줄의 가장 큰 수(2)와 뒷줄의 가장 큰 수(3)를 '2, 3' 형태로 적어 보세요.",
              steps: [
                { q: "1계단: 앞줄(2, 1)에서 가장 큰 수는 얼마인가요?", ans: "2" },
                { q: "2계단: 뒷줄(1, 3, 2)에서 가장 큰 수는 3입니다. 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            },
            {
              q: `[유형 1] 다음은 위에서 본 모양에 수를 쓴 것입니다. 이 모양을 '앞'에서 보았을 때의 모양에 그려지는 정사각형 칸의 수와 '옆'에서 보았을 때의 모양에 그려지는 정사각형 칸의 수의 합은 모두 몇 칸인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 110" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="82" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="92" y="42" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="110" y="22" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="120" y="42" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                      <rect x="82" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="92" y="70" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="110" y="50" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="120" y="70" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <text x="104" y="98" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "10", accept: ["10칸", "10개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "먼저 [앞]에서 본 층수(세로줄 최댓값: 2층, 3층)의 합과 [옆]에서 본 층수(가로줄 최댓값: 2층, 3층)의 합을 각각 구해 보세요.",
              h2: "앞에서 본 칸수(2 + 3 = 5칸)와 옆에서 본 칸수(2 + 3 = 5칸)를 더해 보세요.",
              checkTip: "앞에서 본 칸수(2 + 3 = 5칸) + 옆에서 본 칸수(2 + 3 = 5칸) = 10(칸)입니다.",
              wrongDiag: {
                "5": "5칸은 앞(또는 옆) 한 방향에서 본 칸수예요! 앞과 옆에서 본 칸수를 더해야 합니다.",
                "8": "8은 전체 쌓기나무의 개수(2+3+1+2)예요! 문제에서는 앞과 옆에서 본 모양의 칸수의 합을 물었습니다."
              },
              diagDefault: "앞에서 본 칸수(5)와 옆에서 본 칸수(5)를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞에서 본 모양은 왼쪽 2층, 오른쪽 3층이므로 모두 몇 칸인가요?", ans: "5" },
                { q: "2계단: 옆에서 본 모양은 왼쪽(앞줄) 2층, 오른쪽(뒷줄) 3층이므로 5칸입니다. 두 칸수의 합은 얼마인가요?", ans: "10" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 시우는 위에서 본 모양의 왼쪽 세로줄에 '2'와 '3'이 적혀 있는 것을 보고, 앞에서 보았을 때 왼쪽 줄이 '2 + 3 = 5층'으로 보인다고 잘못 생각했습니다. 실제로 앞에서 보았을 때 왼쪽 줄은 몇 층으로 보이나요?",
              ans: "3", accept: ["3층"], unit: "층", placeholder: "숫자만 입력",
              h1: "앞뒤에 놓인 기둥은 한 줄로 겹쳐서 보이므로 층수를 더하면 안 됩니다!",
              h2: "2층과 3층 중 더 높은 기둥의 층수를 적어 보세요.",
              checkTip: "2층 기둥은 3층 기둥과 겹쳐 보이므로 더 큰 수인 3층으로 보입니다.",
              wrongDiag: {
                "5": "5층은 시우가 잘못 더한 값이에요! 2와 3 중 더 큰 수를 적어 보세요."
              },
              diagDefault: "2와 3 중 더 큰 수를 입력해 보세요.",
              steps: [
                { q: "1계단: 2와 3 중에서 더 큰 수는 얼마인가요?", ans: "3" }
              ]
            },
            {
              q: `[유형 2] 다음은 위에서 본 모양에 수를 쓴 것과 앞에서 본 모양입니다. 칸에 적힌 '㉠'에 들어갈 알맞은 수는 얼마인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 260 115" style="width:100%; max-width:260px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="35" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[위에서 본 모양]</text>
                      <rect x="42" y="30" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="52" y="50" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="70" y="30" width="28" height="28" fill="#fde047" stroke="#dc2626" stroke-width="2"/>
                      <text x="78" y="50" fill="#dc2626" font-size="14" font-weight="bold">㉠</text>
                      <rect x="42" y="58" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="52" y="78" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="70" y="58" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="80" y="78" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <text x="62" y="104" fill="#1e293b" font-size="11" font-weight="bold">⬆️ 앞</text>
                      <!-- 앞에서 본 모양: 왼쪽 2, 오른쪽 3 -->
                      <text x="155" y="20" fill="#dc2626" font-size="11" font-weight="bold">[앞에서 본 모양]</text>
                      <rect x="165" y="52" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="165" y="74" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="187" y="30" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="187" y="52" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="187" y="74" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "3", accept: ["3개", "3층"], placeholder: "숫자만 입력",
              h1: "[앞에서 본 모양]의 오른쪽 줄이 3층입니다. 따라서 오른쪽 세로줄(㉠과 1)에서 가장 큰 수가 3이어야 합니다!",
              h2: "오른쪽 앞줄이 1이므로, 뒷줄인 ㉠은 몇이어야 오른쪽 줄이 3층으로 보일지 적어 보세요.",
              checkTip: "오른쪽 세로줄의 최댓값이 3이어야 하므로 ㉠ = 3입니다.",
              wrongDiag: {
                "2": "오른쪽 앞줄(1)과 ㉠을 더해서 3층이 되는 것이 아니에요! 두 수 중 큰 수가 3이어야 하므로 ㉠은 3입니다."
              },
              diagDefault: "오른쪽 줄이 3층으로 보이도록 ㉠에 들어갈 수를 입력해 보세요.",
              steps: [
                { q: "1계단: [앞에서 본 모양]에서 오른쪽 줄은 몇 층인가요?", ans: "3" },
                { q: "2계단: 오른쪽 세로줄(㉠, 1)에서 가장 큰 수가 3이 되려면 ㉠은 얼마여야 하나요?", ans: "3" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 쌓기나무 10개로 쌓은 모양을 위에서 본 모양에 수를 썼더니 다섯 칸에 각각 '3, 2, 1, ★, 1'이라고 적혀 있었습니다. ★에 들어갈 수는 얼마인가요?",
              ans: "3", accept: ["3개", "3층"], placeholder: "숫자만 입력",
              h1: "위에서 본 모양에 적힌 수들을 모두 더하면 전체 쌓기나무 개수(10개)가 됩니다.",
              h2: "3 + 2 + 1 + ★ + 1 = 10에서 ★의 값을 구해 보세요.",
              checkTip: "3 + 2 + 1 + 1 = 7이므로 ★ = 10 - 7 = 3입니다.",
              wrongDiag: {
                "7": "7은 ★을 제외한 나머지 네 칸의 합이에요! 전체 10개에서 7개를 빼 보세요."
              },
              diagDefault: "10에서 (3 + 2 + 1 + 1 = 7)을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: ★을 제외한 나머지 숫자들의 합(3 + 2 + 1 + 1)은 얼마인가요?", ans: "7" },
                { q: "2계단: 전체가 10개이므로 ★에 들어갈 수는 10 - 7 = 얼마인가요?", ans: "3" }
              ]
            },
            {
              q: `[유형 3] 다음은 위에서 본 모양과 앞, 오른쪽 옆에서 본 모양입니다. 위에서 본 모양의 '★' 자리에 쌓인 쌓기나무는 몇 개인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 115" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 위 -->
                      <text x="38" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[위]</text>
                      <rect x="22" y="32" width="24" height="24" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="22" y="56" width="24" height="24" fill="#fde047" stroke="#dc2626" stroke-width="2"/>
                      <text x="28" y="73" fill="#dc2626" font-size="13" font-weight="bold">★</text>
                      <rect x="46" y="56" width="24" height="24" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="38" y="98" fill="#64748b" font-size="10" font-weight="bold">앞</text>
                      <!-- 앞: 왼쪽 1, 오른쪽 2 -->
                      <text x="135" y="20" fill="#dc2626" font-size="11" font-weight="bold">[앞]</text>
                      <rect x="122" y="56" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="144" y="34" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <rect x="144" y="56" width="22" height="22" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
                      <!-- 옆: 왼쪽(앞) 2, 오른쪽(뒤) 1 -->
                      <text x="235" y="20" fill="#15803d" font-size="11" font-weight="bold">[옆]</text>
                      <rect x="222" y="34" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="222" y="56" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                      <rect x="244" y="56" width="22" height="22" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "1", accept: ["1개", "1층"], unit: "개", placeholder: "숫자만 입력",
              h1: "★ 자리는 '왼쪽 세로줄'에 있습니다. [앞]에서 본 모양의 왼쪽 줄이 몇 층인지 확인해 보세요!",
              h2: "[앞]에서 본 모양의 왼쪽 줄이 1층이므로, 왼쪽 세로줄에 있는 두 칸(뒷자리와 ★ 자리)은 모두 1개씩만 놓여 있습니다.",
              checkTip: "[앞]에서 볼 때 왼쪽 줄의 최고 높이가 1층이므로 ★ 자리에는 1개가 놓여 있습니다.",
              wrongDiag: {
                "2": "2층은 오른쪽 앞자리에 놓인 개수예요! ★은 왼쪽 줄에 있는데, [앞]에서 본 왼쪽 줄이 1층이므로 ★은 1개입니다."
              },
              diagDefault: "[앞]에서 본 모양의 왼쪽 줄 층수(1)를 입력해 보세요.",
              steps: [
                { q: "1계단: ★이 속한 왼쪽 세로줄은 [앞]에서 볼 때 몇 층인가요?", ans: "1" },
                { q: "2계단: 따라서 ★ 자리에 쌓인 쌓기나무는 몇 개인가요?", ans: "1" }
              ]
            }
          ]
        ],
        step4Intro: "위에서 본 모양에 적힌 숫자를 모두 더하면 '전체 개수'가 되고, 각 줄에서 가장 큰 수를 찾으면 '앞과 옆에서 본 층수'가 됩니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 위에서 본 모양의 앞줄(가로줄)에 '3, 1'이 적혀 있고, 뒷줄(가로줄)에 '2, 2'가 적혀 있습니다. 이 모양을 '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "3, 2", accept: ["3,2", "3 2", "3층, 2층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
              h1: "앞줄(3, 1)에서 가장 큰 수와 뒷줄(2, 2)에서 가장 큰 수를 순서대로 씁니다.",
              h2: "'3, 2'로 적어 보세요.",
              checkTip: "앞줄 최고 3층, 뒷줄 최고 2층이므로 '3, 2'입니다.",
              wrongDiag: {},
              diagDefault: "'3, 2'를 입력해 보세요.",
              steps: [
                { q: "1계단: 앞줄(3)과 뒷줄(2)의 최고 층수를 순서대로 쓰면 무엇인가요?", ans: "3, 2" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 2칸 × 2칸 모양의 위에서 본 모양에서 뒷줄에는 '1, 2', 앞줄에는 '3, 1'이 적혀 있습니다. [앞]에서 본 모양의 칸수와 [옆]에서 본 모양의 칸수의 합은 모두 몇 칸인가요?",
              ans: "10", accept: ["10칸", "10개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "앞에서 본 층수는 왼쪽 3층, 오른쪽 2층(합 5칸)이고, 옆에서 본 층수는 앞줄 3층, 뒷줄 2층(합 5칸)입니다.",
              h2: "5 + 5를 계산해 보세요.",
              checkTip: "5 + 5 = 10(칸)입니다.",
              wrongDiag: {},
              diagDefault: "5와 5를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞에서 본 칸수(5)와 옆에서 본 칸수(5)를 더하면 몇 칸인가요?", ans: "10" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 위에서 본 모양의 오른쪽 세로줄에 '1'과 '4'가 적혀 있습니다. 앞에서 보았을 때 오른쪽 줄은 몇 층으로 보이나요?",
              ans: "4", accept: ["4층"], unit: "층", placeholder: "숫자만 입력",
              h1: "1과 4를 더하지 않고 더 큰 수를 찾습니다.",
              h2: "1과 4 중 큰 수를 적어 보세요.",
              checkTip: "더 큰 수인 4층으로 보입니다.",
              wrongDiag: {
                "5": "더하지 않고 가장 큰 수(4)만큼 보입니다!"
              },
              diagDefault: "4를 입력해 보세요.",
              steps: [
                { q: "1계단: 1과 4 중 더 큰 수는 얼마인가요?", ans: "4" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 위에서 본 모양의 왼쪽 세로줄에 앞줄은 '2', 뒷줄은 '㉠'이 적혀 있습니다. 앞에서 보았을 때 왼쪽 줄이 4층으로 보인다면, ㉠에 들어갈 수는 얼마인가요?",
              ans: "4", accept: ["4개", "4층"], placeholder: "숫자만 입력",
              h1: "왼쪽 세로줄(2와 ㉠)에서 가장 큰 수가 4가 되어야 합니다.",
              h2: "㉠에 들어갈 수를 적어 보세요.",
              checkTip: "2와 ㉠ 중 큰 수가 4이므로 ㉠ = 4입니다.",
              wrongDiag: {
                "2": "2 + 2 = 4가 아니라 큰 수가 4여야 하므로 ㉠은 4입니다!"
              },
              diagDefault: "4를 입력해 보세요.",
              steps: [
                { q: "1계단: 2와 ㉠ 중 큰 수가 4가 되려면 ㉠은 얼마인가요?", ans: "4" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 쌓기나무 9개로 쌓은 모양을 위에서 본 모양에 수를 썼더니 네 칸에 각각 '3, 2, ★, 1'이라고 적혀 있었습니다. ★에 들어갈 수는 얼마인가요?",
              ans: "3", accept: ["3개", "3층"], placeholder: "숫자만 입력",
              h1: "3 + 2 + ★ + 1 = 9입니다.",
              h2: "9에서 (3 + 2 + 1 = 6)을 빼 보세요.",
              checkTip: "9 - 6 = 3입니다.",
              wrongDiag: {},
              diagDefault: "9에서 6을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 9 - 6은 얼마인가요?", ans: "3" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 위에서 본 모양의 오른쪽 세로줄에 앞자리는 ★, 뒷자리는 1이 적혀 있습니다. 앞에서 보았을 때 오른쪽 줄이 2층으로 보인다면 ★ 자리에 쌓인 쌓기나무는 몇 개인가요?",
              ans: "2", accept: ["2개", "2층"], unit: "개", placeholder: "숫자만 입력",
              h1: "오른쪽 세로줄(★과 1)에서 가장 큰 수가 2여야 합니다.",
              h2: "★에 들어갈 수를 적어 보세요.",
              checkTip: "★과 1 중 큰 수가 2이므로 ★ = 2(개)입니다.",
              wrongDiag: {},
              diagDefault: "2를 입력해 보세요.",
              steps: [
                { q: "1계단: 오른쪽 줄이 2층이므로 ★은 몇 개인가요?", ans: "2" }
              ]
            }
          ]
        ],
        step5A: {
          q: "위에서 본 모양에 적힌 수들을 모두 더하면 전체 쌓기나무의 개수가 되고, 앞이나 옆에서 본 모양은 각 줄에 적힌 수 중에서 [ (1) 가장 작은 수 / (2) 가장 큰 수 ] 만큼 층수가 보입니다.",
          ans: "가장 큰 수", numAns: "2",
          hint: "💡 힌트: 가장 높게 솟은 기둥의 높이가 보이는 층수를 결정합니다."
        },
        step5B: {
          sentence: "위에서 본 모양에 적힌 수들을 모두 더하면 전체 개수이고 각 줄에서 가장 큰 수가 보이는 층수이다."
        },
        nextUnit: "3-4"
      },
  
      "3-4": {
        title: "3-4차시: 층별로 나타낸 모양을 알아볼까요",
        goal: "쌓기나무 모양을 1층, 2층, 3층으로 나누어 층별 모양을 이해하고, 위에서 본 모양에 수를 쓰는 방법과 연결합니다.",
        videoUrl: "https://youtube.com/shorts/ncMvxCwZUIo?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 1층 모양 = 위에서 본 모양! 층별 칸수를 합치면 숫자판!</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 1층 -->
                <text x="25" y="24" fill="#1e3a8a" font-size="11" font-weight="bold">[1층: 4개]</text>
                <rect x="22" y="34" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="44" y="34" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="22" y="56" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="44" y="56" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <!-- 2층 -->
                <text x="100" y="24" fill="#15803d" font-size="11" font-weight="bold">[2층: 2개]</text>
                <rect x="97" y="34" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="119" y="34" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                <rect x="97" y="56" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="119" y="56" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                <!-- 3층 -->
                <text x="175" y="24" fill="#dc2626" font-size="11" font-weight="bold">[3층: 1개]</text>
                <rect x="172" y="34" width="22" height="22" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                <rect x="194" y="34" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                <rect x="172" y="56" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                <rect x="194" y="56" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                <!-- 화살표 및 합친 숫자판 -->
                <text x="226" y="60" fill="#1e293b" font-size="14" font-weight="bold">➔</text>
                <text x="248" y="24" fill="#b45309" font-size="11" font-weight="bold">[수 쓰기]</text>
                <rect x="248" y="34" width="22" height="22" fill="#fef08a" stroke="#1e293b" stroke-width="1.5"/>
                <text x="255" y="50" fill="#dc2626" font-size="13" font-weight="bold">3</text>
                <rect x="270" y="34" width="22" height="22" fill="#fef08a" stroke="#1e293b" stroke-width="1.5"/>
                <text x="277" y="50" fill="#1e293b" font-size="13" font-weight="bold">1</text>
                <rect x="248" y="56" width="22" height="22" fill="#fef08a" stroke="#1e293b" stroke-width="1.5"/>
                <text x="255" y="72" fill="#15803d" font-size="13" font-weight="bold">2</text>
                <rect x="270" y="56" width="22" height="22" fill="#fef08a" stroke="#1e293b" stroke-width="1.5"/>
                <text x="277" y="72" fill="#1e293b" font-size="13" font-weight="bold">1</text>
                <rect x="15" y="92" width="290" height="32" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.2"/>
                <text x="24" y="112" fill="#1e3a8a" font-size="10.5" font-weight="bold">• 1층 모양 = 위에서 본 모양 | 전체 = 4 + 2 + 1 = 7개</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>1층 모양의 비밀:</strong> 아래층에 쌓기나무가 있어야 위층에 쌓을 수 있으므로, 가장 넓은 <strong>1층 모양이 곧 '위에서 본 모양'과 똑같습니다!</strong></li>
              <li><strong>위에서 본 모양에 수 쓰기로 바꾸기:</strong> 같은 자리에 1층, 2층, 3층까지 모두 색칠되어 있으면 그 자리의 숫자는 <strong>3</strong>이 됩니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 위에서 본 모양의 네 칸에 '2, 3, 1, 2'가 적혀 있을 때, 사용한 쌓기나무는 모두 몇 개인가요?",
            ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
            h1: "칸에 적힌 숫자를 모두 더합니다.",
            h2: "2 + 3 + 1 + 2를 계산해 보세요.",
            checkTip: "2 + 3 + 1 + 2 = 8(개)입니다.",
            wrongDiag: {},
            diagDefault: "8을 입력해 보세요.",
            steps: [
              { q: "1계단: 2 + 3 + 1 + 2는 얼마인가요?", ans: "8" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "층별로 나타낸 모양에서 전체를 '위에서 내려다본 모양'과 항상 똑같은 층은 몇 층인가요?",
            choices: ["1번: 1층", "2번: 3층"],
            ans: "1",
            h1: "모든 쌓기나무 기둥의 맨 아래 바닥에는 반드시 1층 쌓기나무가 놓여 있어야 합니다.",
            h2: "바닥에 깔린 1층을 골라 보세요."
          },
          {
            q: "어떤 쌓기나무 모양을 층별로 나타내었더니 1층에 5개, 2층에 3개, 3층에 1개가 놓여 있었습니다. 전체 쌓기나무는 모두 몇 개인가요?",
            choices: ["1번: 5개", "2번: 9개 (5 + 3 + 1)"],
            ans: "2",
            h1: "각 층에 놓인 쌓기나무의 개수를 모두 더하면 전체 개수가 됩니다.",
            h2: "5 + 3 + 1을 계산한 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "쌓기나무는 공중에 떠 있을 수 없으므로, 2층에 쌓기나무가 놓인 자리의 바로 아래인 [ ① ]층에도 반드시 쌓기나무가 놓여 있어야 합니다.",
            ans: "1",
            h1: "2층을 받쳐 주는 바로 아래층이 몇 층인지 생각해 보세요.",
            h2: "2보다 1 작은 층수를 숫자로 적어 보세요."
          },
          {
            q: "층별로 나타낸 모양에서 왼쪽 뒷자리에 1층과 2층에만 쌓기나무가 있고 3층에는 없다면, 위에서 본 모양의 왼쪽 뒷자리에 쓸 숫자는 [ ① ]입니다.",
            ans: "2",
            h1: "1층과 2층까지 쌓여 있으므로 모두 몇 개인지 생각해 보세요.",
            h2: "그 자리에 놓인 층수를 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 쌓기나무로 쌓은 모양을 층별로 나타낸 것입니다. 똑같은 모양으로 쌓는 데 필요한 쌓기나무는 모두 몇 개인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 280 105" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <text x="32" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[1층]</text>
                    <rect x="20" y="30" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="40" y="30" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="60" y="30" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="20" y="50" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="40" y="50" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="125" y="20" fill="#15803d" font-size="11" font-weight="bold">[2층]</text>
                    <rect x="110" y="30" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="130" y="30" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="150" y="30" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <rect x="110" y="50" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <rect x="130" y="50" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="215" y="20" fill="#dc2626" font-size="11" font-weight="bold">[3층]</text>
                    <rect x="200" y="30" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                    <rect x="220" y="30" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <rect x="240" y="30" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <rect x="200" y="50" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <rect x="220" y="50" width="20" height="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    <text x="130" y="92" fill="#64748b" font-size="11" font-weight="bold">⬆️ 앞</text>
                  </svg>
                </div>`,
            ans: "9", accept: ["9개"], unit: "개", placeholder: "숫자만 입력",
            h1: "1층, 2층, 3층에 색칠된 칸의 개수를 각각 세어 모두 더합니다.",
            h2: "1층(5개) + 2층(3개) + 3층(1개)을 계산해 보세요.",
            checkTip: "1층 5개 + 2층 3개 + 3층 1개 = 9(개)입니다.",
            wrongDiag: {
              "5": "5개는 1층에만 놓인 개수예요! 2층(3개)과 3층(1개)도 모두 더해야 합니다."
            },
            diagDefault: "5 + 3 + 1을 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 1층에 놓인 쌓기나무는 모두 몇 개인가요?", ans: "5" },
              { q: "2계단: 2층(3개)과 3층(1개)을 모두 더하면 전체는 몇 개인가요?", ans: "9" }
            ]
          },
          {
            q: `다음은 위에서 본 모양에 각 자리의 쌓기나무 개수를 쓴 것입니다. 이 모양의 '2층'에만 놓인 쌓기나무는 모두 몇 개인가요? (주의: 3층으로 쌓인 자리에도 2층에 쌓기나무가 1개 지나갑니다!)
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="68" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="40" fill="#dc2626" font-size="15" font-weight="bold">3</text>
                    <rect x="96" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="40" fill="#1d4ed8" font-size="15" font-weight="bold">2</text>
                    <rect x="124" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="134" y="40" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="68" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="68" fill="#1d4ed8" font-size="15" font-weight="bold">2</text>
                    <rect x="96" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="68" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <text x="104" y="94" fill="#1e293b" font-size="12" font-weight="bold">앞</text>
                  </svg>
                </div>`,
            ans: "3", accept: ["3개", "3칸"], unit: "개", placeholder: "숫자만 입력",
            h1: "2층에 쌓기나무가 있으려면 그 자리에 적힌 숫자가 '2 이상(2 또는 3)'이어야 합니다!",
            h2: "적힌 숫자가 2 또는 3인 칸이 모두 몇 칸인지 세어 보세요.",
            checkTip: "숫자가 2 이상인 자리(3, 2, 2)마다 2층에 쌓기나무가 1개씩 놓여 있으므로 2층에는 모두 3개가 있습니다.",
            wrongDiag: {
              "2": "앗! 숫자 '2'가 적힌 두 칸만 세었어요! 숫자 '3'이 적힌 자리에도 2층에 쌓기나무가 있어야 3층을 올릴 수 있으므로 총 3개입니다."
            },
            diagDefault: "숫자가 2 또는 3인 칸의 개수(3)를 입력해 보세요.",
            steps: [
              { q: "1계단: 숫자 2가 적힌 칸은 2칸이고, 숫자 3이 적힌 칸은 1칸입니다. 2층에 쌓기나무가 있는 자리는 모두 몇 곳인가요?", ans: "3" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음 층별로 나타낸 모양을 보고, 이 모양을 '앞'에서 보았을 때 왼쪽 줄과 오른쪽 줄은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 270 105" style="width:100%; max-width:270px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="28" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[1층]</text>
                      <rect x="20" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="42" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="20" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="42" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="118" y="20" fill="#15803d" font-size="11" font-weight="bold">[2층]</text>
                      <rect x="110" y="30" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="132" y="30" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="110" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="132" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="208" y="20" fill="#dc2626" font-size="11" font-weight="bold">[3층]</text>
                      <rect x="200" y="30" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="222" y="30" width="22" height="22" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="200" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="222" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="122" y="94" fill="#64748b" font-size="11" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "왼쪽 층수, 오른쪽 층수 입력",
              h1: "왼쪽 세로줄은 2층까지만 색칠되어 있고, 오른쪽 세로줄은 3층까지 색칠되어 있습니다.",
              h2: "왼쪽 줄의 최고 층수(2)와 오른쪽 줄의 최고 층수(3)를 '2, 3'으로 적어 보세요.",
              checkTip: "왼쪽 뒷자리가 2층, 오른쪽 뒷자리가 3층이므로 앞에서 보면 왼쪽 2층, 오른쪽 3층('2, 3')으로 보입니다.",
              wrongDiag: {
                "3, 2": "3층에 색칠된 칸이 오른쪽 줄에 있으므로 왼쪽 2층, 오른쪽 3층('2, 3')입니다!"
              },
              diagDefault: "'2, 3' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 왼쪽 세로줄은 최대 몇 층까지 색칠되어 있나요?", ans: "2" },
                { q: "2계단: 오른쪽 세로줄은 최대 3층까지 색칠되어 있습니다. 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            },
            {
              q: "[유형 1] 어떤 쌓기나무 모양을 층별로 나타내었더니 1층에 6개, 2층에 4개, 3층에 2개가 놓여 있었습니다. 이 모양을 '위에서 본 모양'으로 그렸을 때 그려지는 정사각형은 모두 몇 칸인가요?",
              ans: "6", accept: ["6칸", "6개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "위에서 내려다본 모양은 가장 바닥에 깔린 '1층 모양'과 완전히 똑같습니다!",
              h2: "1층에 놓인 쌓기나무의 개수를 적어 보세요.",
              checkTip: "위에서 본 모양은 1층 모양과 같으므로 1층의 개수인 6칸입니다.",
              wrongDiag: {
                "12": "12개는 전체 쌓기나무의 개수(6+4+2)예요! '위에서 본 모양'의 칸수는 1층 모양의 칸수인 6칸입니다."
              },
              diagDefault: "1층 모양의 칸수(6)를 입력해 보세요.",
              steps: [
                { q: "1계단: 위에서 본 모양은 1층 모양과 같습니다. 1층은 몇 칸인가요?", ans: "6" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 현서는 1층 모양이 아래와 같을 때, 2층 모양으로 (가)와 (나) 중 하나를 골라야 합니다. 공중에 떠 있는 쌓기나무가 없도록 바르게 나타낸 2층 모양의 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 290 110" style="width:100%; max-width:290px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="25" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[1층 모양]</text>
                      <rect x="28" y="32" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="50" y="32" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="28" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="50" y="54" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (가) -->
                      <text x="122" y="20" fill="#15803d" font-size="11" font-weight="bold">(가) 2층</text>
                      <rect x="120" y="32" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="142" y="32" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="120" y="54" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="142" y="54" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (나) -->
                      <text x="212" y="20" fill="#dc2626" font-size="11" font-weight="bold">(나) 2층</text>
                      <rect x="210" y="32" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="232" y="32" width="22" height="22" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="210" y="54" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="232" y="54" width="22" height="22" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "가", accept: ["(가)", "가번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "1층에 쌓기나무가 없는 빈자리(오른쪽 뒷자리) 위에는 2층 쌓기나무를 올려놓을 수 없습니다!",
              h2: "(나)는 1층이 비어 있는 오른쪽 뒷자리에 2층이 색칠되어 있어 불가능합니다. 가능한 기호를 적어 보세요.",
              checkTip: "1층에 쌓기나무가 놓인 자리 위에만 2층을 쌓은 것은 (가)입니다.",
              wrongDiag: {
                "나": "(나)는 1층의 오른쪽 뒷자리가 비어 있는데 2층에 쌓기나무가 놓여 있어서 공중에 떠 있게 돼요!"
              },
              diagDefault: "1층에 색칠된 자리 안에서만 2층이 색칠된 기호를 찾아보세요.",
              steps: [
                { q: "1계단: 1층에 쌓기나무가 있는 자리 위에만 2층을 올려놓은 기호는 무엇인가요?", ans: "가" }
              ]
            },
            {
              q: "[유형 2] 지호는 위에서 본 모양의 네 칸에 '3, 2, 2, 1'이 적혀 있는 것을 보고, 3층에 놓인 쌓기나무가 '3개'라고 잘못 답했습니다. 실제로 '3층'에만 놓여 있는 쌓기나무는 몇 개인가요?",
              ans: "1", accept: ["1개", "1칸"], unit: "개", placeholder: "숫자만 입력",
              h1: "숫자 '3'은 그 자리에 1층(1개), 2층(1개), 3층(1개)이 쌓여 있다는 뜻입니다!",
              h2: "네 자리(3, 2, 2, 1) 중 3층까지 올라간 자리는 '3'이 적힌 딱 한 곳뿐이므로 3층에는 몇 개가 있는지 적어 보세요.",
              checkTip: "'3'이 적힌 자리가 한 곳뿐이므로 3층에 놓인 쌓기나무는 1개입니다.",
              wrongDiag: {
                "3": "3개는 그 기둥 하나(1층+2층+3층)의 전체 개수예요! '3층' 높이에만 놓인 쌓기나무는 1개입니다."
              },
              diagDefault: "숫자 3이 적힌 칸의 개수(1)를 입력해 보세요.",
              steps: [
                { q: "1계단: 네 칸(3, 2, 2, 1) 중 3층 높이에 쌓기나무가 있는 칸은 몇 칸인가요?", ans: "1" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 어떤 쌓기나무 모양을 위에서 본 모양에 수를 썼더니 다섯 칸에 각각 '3, 3, 2, 1, 1'이라고 적혀 있었습니다. 이 모양을 층별로 나타내었을 때 '1층의 개수'와 '2층의 개수'를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "5, 3", accept: ["5,3", "5 3", "5개, 3개"], placeholder: "1층 개수, 2층 개수 순서로 입력",
              h1: "1층에는 다섯 자리 모두 1개씩 놓여 있고(5개), 2층에는 숫자가 '2 이상(3, 3, 2)'인 자리에 1개씩 놓여 있습니다!",
              h2: "1층의 개수(5)와 2층의 개수(3, 3, 2인 세 자리 = 3)를 '5, 3'으로 적어 보세요.",
              checkTip: "1층에는 5개, 2층에는 2 이상인 자리(3, 3, 2) 3곳에 1개씩 총 3개가 놓여 있습니다.",
              wrongDiag: {
                "5, 1": "앗! 숫자 '2'가 적힌 한 곳만 세었어요! 숫자 '3'이 적힌 두 곳에도 2층에 쌓기나무가 있으므로 2층은 3개입니다."
              },
              diagDefault: "1층 개수(5)와 2층 개수(3)를 '5, 3' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 다섯 칸 모두 1층에 쌓기나무가 있으므로 1층은 몇 개인가요?", ans: "5" },
                { q: "2계단: 숫자가 2 이상(3, 3, 2)인 칸은 3칸이므로 2층은 3개입니다. 순서대로 쓰면 무엇인가요?", ans: "5, 3" }
              ]
            },
            {
              q: `[유형 3] 다음 층별로 나타낸 모양으로 쌓은 입체도형이 있습니다. 이 모양을 '가지고 있던 모양을 무너뜨리지 않고' 가로 2칸, 세로 2칸, 높이 2층인 정육면체 모양(총 8개)으로 만들려면 쌓기나무가 몇 개 더 필요한가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 100" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="42" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[1층: 4개]</text>
                      <rect x="42" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="64" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="42" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="64" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="132" y="20" fill="#15803d" font-size="11" font-weight="bold">[2층: 1개]</text>
                      <rect x="132" y="30" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="154" y="30" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="132" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="154" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                    </svg>
                  </div>`,
              ans: "3", accept: ["3개"], unit: "개", placeholder: "숫자만 입력",
              h1: "1층은 4칸이 모두 채워져 있고, 2층에는 4칸 중 1칸만 채워져 있습니다.",
              h2: "전체 8개에서 현재 놓여 있는 개수(4 + 1 = 5개)를 빼 보세요(또는 2층의 빈칸 3칸을 세어 보세요).",
              checkTip: "정육면체 전체 8개 - 현재 개수(4 + 1 = 5개) = 3(개)가 더 필요합니다.",
              wrongDiag: {
                "5": "5개는 현재 놓여 있는 쌓기나무의 개수예요! 8개가 되려면 8 - 5 = 3개가 더 필요합니다."
              },
              diagDefault: "8에서 현재 개수(5)를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 현재 1층(4개)과 2층(1개)에 놓인 쌓기나무는 모두 몇 개인가요?", ans: "5" },
                { q: "2계단: 8개짜리 정육면체를 만들려면 8 - 5 = 몇 개가 더 필요한가요?", ans: "3" }
              ]
            }
          ]
        ],
        step4Intro: "층별 모양에서는 '1층 모양 = 위에서 본 모양'이고, '2층 개수 = 숫자가 2 이상인 칸의 개수'라는 점만 기억하면 완벽해요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 2칸 × 2칸 모양에서 1층은 네 자리 모두 채워져 있고, 2층은 왼쪽 줄과 오른쪽 줄 모두 채워져 있으며, 3층은 왼쪽 줄에만 1개 놓여 있습니다. 이 모양을 '앞'에서 보았을 때 왼쪽 줄과 오른쪽 줄은 각각 몇 층으로 보이는지 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "3, 2", accept: ["3,2", "3 2", "3층, 2층"], placeholder: "왼쪽 층수, 오른쪽 층수 입력",
              h1: "왼쪽 줄은 3층까지 있고, 오른쪽 줄은 2층까지 있습니다.",
              h2: "'3, 2' 형태로 적어 보세요.",
              checkTip: "왼쪽 줄 3층, 오른쪽 줄 2층이므로 '3, 2'입니다.",
              wrongDiag: {},
              diagDefault: "'3, 2'를 입력해 보세요.",
              steps: [
                { q: "1계단: 왼쪽 줄(3층)과 오른쪽 줄(2층)을 순서대로 쓰면 무엇인가요?", ans: "3, 2" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 층별로 나타낸 모양에서 1층에 5개, 2층에 2개, 3층에 1개가 놓여 있습니다. 이 모양을 '위에서 본 모양'으로 그렸을 때 정사각형은 모두 몇 칸인가요?",
              ans: "5", accept: ["5칸", "5개"], unit: "칸", placeholder: "숫자만 입력",
              h1: "위에서 본 모양은 1층 모양과 같습니다.",
              h2: "1층에 놓인 개수를 적어 보세요.",
              checkTip: "1층 모양과 같으므로 5칸입니다.",
              wrongDiag: {},
              diagDefault: "5를 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에 놓인 칸수는 몇 칸인가요?", ans: "5" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 1층의 왼쪽 앞자리가 비어 있습니다. 이 모양의 2층 왼쪽 앞자리에 쌓기나무를 놓을 수 있나요? (예: 있다 / 없다)",
              ans: "없다", accept: ["없습니다", "불가능하다"], placeholder: "있다 또는 없다 입력",
              h1: "1층에 받쳐 주는 쌓기나무가 없으면 2층에 쌓을 수 없습니다.",
              h2: "'없다'를 적어 보세요.",
              checkTip: "1층이 비어 있으므로 2층에 놓을 수 없습니다.",
              wrongDiag: {},
              diagDefault: "'없다'를 입력해 보세요.",
              steps: [
                { q: "1계단: 1층이 비어 있으면 2층에 놓을 수 있나요? (있다 / 없다)", ans: "없다" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 위에서 본 모양의 다섯 칸에 '3, 3, 2, 1, 1'이 적혀 있습니다. 실제로 '3층' 높이에만 놓여 있는 쌓기나무는 모두 몇 개인가요?",
              ans: "2", accept: ["2개", "2칸"], unit: "개", placeholder: "숫자만 입력",
              h1: "숫자 '3'이 적힌 칸마다 3층에 1개씩 놓여 있습니다.",
              h2: "숫자 3이 적힌 칸이 몇 칸인지 세어 보세요.",
              checkTip: "숫자 3이 적힌 자리가 두 곳이므로 3층에는 2개가 놓여 있습니다.",
              wrongDiag: {
                "6": "3 + 3 = 6은 두 기둥의 전체 개수예요! 3층 높이에만 놓인 개수는 2개입니다."
              },
              diagDefault: "숫자 3이 적힌 칸의 개수(2)를 입력해 보세요.",
              steps: [
                { q: "1계단: 숫자 3이 적힌 칸은 모두 몇 칸인가요?", ans: "2" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 위에서 본 모양의 네 칸에 '3, 2, 2, 1'이 적혀 있습니다. 층별로 나타내었을 때 '1층의 개수'와 '2층의 개수'를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "4, 3", accept: ["4,3", "4 3", "4개, 3개"], placeholder: "1층 개수, 2층 개수 순서로 입력",
              h1: "1층은 전체 칸수인 4개이고, 2층은 숫자가 2 이상(3, 2, 2)인 3개입니다.",
              h2: "'4, 3'으로 적어 보세요.",
              checkTip: "1층 4개, 2층 3개입니다.",
              wrongDiag: {},
              diagDefault: "'4, 3'을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층 개수(4)와 2층 개수(3)를 순서대로 쓰면 무엇인가요?", ans: "4, 3" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 가로 2칸, 세로 2칸인 모양에서 현재 1층에 4개, 2층에 2개가 놓여 있습니다. 가로 2칸, 세로 2칸, 높이 2층인 정육면체(총 8개)를 만들려면 쌓기나무가 몇 개 더 필요한가요?",
              ans: "2", accept: ["2개"], unit: "개", placeholder: "숫자만 입력",
              h1: "전체 8개에서 현재 개수(4 + 2 = 6개)를 뺍니다.",
              h2: "8 - 6을 계산해 보세요.",
              checkTip: "8 - 6 = 2(개)가 더 필요합니다.",
              wrongDiag: {},
              diagDefault: "8에서 6을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 8 - 6은 몇 개인가요?", ans: "2" }
              ]
            }
          ]
        ],
        step5A: {
          q: "층별로 나타낸 모양에서 바닥에 놓인 [ (1) 1층 / (2) 3층 ] 의 모양은 전체를 위에서 내려다본 모양과 언제나 같습니다.",
          ans: "1층", numAns: "1",
          hint: "💡 힌트: 모든 기둥의 맨 아래를 받쳐 주는 층입니다."
        },
        step5B: {
          sentence: "층별로 나타낸 모양에서 일층 모양은 위에서 본 모양과 같으며 각 층의 개수를 더하면 전체 개수이다."
        },
        nextUnit: "3-5"
      },
  
      "3-5": {
        title: "3-5차시: 여러 가지 모양을 만들어 볼까요",
        goal: "기본 조각을 돌리거나 결합하여 새로운 모양을 만들고, 위·앞·옆에서 본 모양을 만족하는 최소·최대 개수를 구합니다.",
        videoUrl: "https://youtube.com/shorts/9Abs7u2jlWs?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 기본 조각 결합하기와 가능한 모양의 개수</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 135" style="width:100%; max-width:320px; height:auto;">
                <!-- 왼쪽: 조각 결합 -->
                <rect x="10" y="10" width="145" height="115" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                <text x="18" y="30" fill="#1e3a8a" font-size="11" font-weight="bold">① 두 조각 이어 붙이기</text>
                <rect x="24" y="44" width="18" height="18" fill="#60a5fa" stroke="#1e293b" stroke-width="1.2"/>
                <rect x="24" y="62" width="18" height="18" fill="#60a5fa" stroke="#1e293b" stroke-width="1.2"/>
                <rect x="42" y="62" width="18" height="18" fill="#60a5fa" stroke="#1e293b" stroke-width="1.2"/>
                <text x="66" y="66" fill="#1e293b" font-size="13" font-weight="bold">+</text>
                <rect x="82" y="44" width="18" height="18" fill="#fca5a5" stroke="#1e293b" stroke-width="1.2"/>
                <rect x="100" y="44" width="18" height="18" fill="#fca5a5" stroke="#1e293b" stroke-width="1.2"/>
                <rect x="100" y="62" width="18" height="18" fill="#fca5a5" stroke="#1e293b" stroke-width="1.2"/>
                <text x="18" y="106" fill="#0369a1" font-size="11" font-weight="bold">• 3개 + 3개 = 6개 모양 완성!</text>
                <!-- 오른쪽: 최소/최대 개수 -->
                <rect x="165" y="10" width="145" height="115" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.5"/>
                <text x="173" y="30" fill="#854d0e" font-size="11" font-weight="bold">② 조건에 맞는 최소·최대</text>
                <rect x="195" y="42" width="24" height="24" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
                <text x="200" y="58" fill="#dc2626" font-size="11" font-weight="bold">1~2</text>
                <rect x="219" y="42" width="24" height="24" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="227" y="58" fill="#1e293b" font-size="12" font-weight="bold">2</text>
                <rect x="195" y="66" width="24" height="24" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="203" y="82" fill="#1e293b" font-size="12" font-weight="bold">2</text>
                <rect x="219" y="66" width="24" height="24" fill="#fff" stroke="#1e293b" stroke-width="1.5"/>
                <text x="227" y="82" fill="#1e293b" font-size="12" font-weight="bold">1</text>
                <text x="173" y="110" fill="#b45309" font-size="10" font-weight="bold">• 가려진 칸(1~2) ➔ 여러 가지!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>기본 조각 돌리기:</strong> 쌓기나무 조각을 돌려서 같아지는 모양은 같은 모양으로 봅니다. (단, 끝부분이 꺾인 조각을 아무리 돌려도 가운데가 솟은 'ㅜ' 자나 일직선 'ㅡ' 자 모양은 될 수 없습니다!)</li>
              <li><strong>여러 가지 모양 만들기:</strong> 위, 앞, 옆에서 본 모양만 주어졌을 때, 다른 높은 기둥에 가려지는 자리는 1층이어도 되고 2층이어도 되어 <strong>여러 가지 모양(최소 개수 ~ 최대 개수)</strong>을 만들 수 있습니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 층별로 나타낸 모양에서 1층에 4개, 2층에 2개, 3층에 1개가 놓여 있을 때, 전체 쌓기나무는 모두 몇 개인가요?",
            ans: "7", accept: ["7개"], unit: "개", placeholder: "숫자만 입력",
            h1: "각 층의 개수를 모두 더합니다.",
            h2: "4 + 2 + 1을 계산해 보세요.",
            checkTip: "4 + 2 + 1 = 7(개)입니다.",
            wrongDiag: {},
            diagDefault: "7을 입력해 보세요.",
            steps: [
              { q: "1계단: 4 + 2 + 1은 몇 개인가요?", ans: "7" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "쌓기나무 3개를 'ㄴ' 자 모양으로 꺾이게 이어 붙인 조각이 있습니다. 이 조각을 돌려서 만들 수 '없는' 모양은 어느 것인가요?",
            choices: ["1번: 'ㄱ' 자 모양", "2번: 3개가 반듯하게 일직선('ㅡ' 자)으로 이어진 모양"],
            ans: "2",
            h1: "이미 'ㄴ' 자로 꺾여서 붙어 있는 조각은 아무리 돌려도 반듯한 일직선이 될 수 없습니다.",
            h2: "일직선 모양을 골라 보세요."
          },
          {
            q: "쌓기나무 4개로 만든 (가) 조각과 쌓기나무 3개로 만든 (나) 조각을 빠짐없이 이어 붙여 새로운 모양을 만들었습니다. 새로 만든 모양의 쌓기나무는 모두 몇 개인가요?",
            choices: ["1번: 7개 (4 + 3)", "2번: 12개 (4 × 3)"],
            ans: "1",
            h1: "두 조각을 합쳤으므로 두 조각의 쌓기나무 개수를 더하면 됩니다.",
            h2: "4 + 3을 계산한 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "쌓기나무 4개로 만든 기본 조각 2개를 이어 붙여 새로운 모양을 만들면, 완성된 모양에 사용된 쌓기나무는 모두 4 + 4 = [ ① ]개입니다.",
            ans: "8",
            h1: "4개짜리 조각 2개를 합쳤을 때의 개수를 구해 보세요.",
            h2: "4 + 4의 값을 숫자로 적어 보세요."
          },
          {
            q: "위, 앞, 옆에서 본 모양이 모두 같더라도, 높은 기둥에 가려지는 자리에는 1층을 놓을 수도 있고 2층을 놓을 수도 있어서 만들 수 있는 모양이 [ ① ]가지 이상일 수 있습니다. (숫자로 입력)",
            ans: "2",
            h1: "1층일 때의 모양 1가지와 2층일 때의 모양 1가지를 합하면 몇 가지인지 생각해 보세요.",
            h2: "1 + 1의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "쌓기나무 3개로 만든 조각 1개와 쌓기나무 4개로 만든 조각 2개를 모두 사용하여 새로운 입체 모양을 만들었습니다. 완성된 모양의 쌓기나무는 모두 몇 개인가요?",
            ans: "11", accept: ["11개"], unit: "개", placeholder: "숫자만 입력",
            h1: "3개짜리 1개와 4개짜리 2개의 쌓기나무 개수를 모두 더합니다.",
            h2: "3 + 4 + 4를 계산해 보세요.",
            checkTip: "3 + (4 × 2) = 3 + 8 = 11(개)입니다.",
            wrongDiag: {
              "7": "4개짜리 조각이 '2개' 있으므로 3 + 4 = 7에 4를 한 번 더 더해야 합니다!"
            },
            diagDefault: "3 + 4 + 4를 계산한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 4개짜리 조각 2개에 들어 있는 쌓기나무는 모두 몇 개인가요?", ans: "8" },
              { q: "2계단: 여기에 3개짜리 조각 1개를 더하면 모두 몇 개인가요?", ans: "11" }
            ]
          },
          {
            q: `다음은 위에서 본 모양에 수를 쓴 것입니다. '★' 자리에 1을 넣어도 되고 2를 넣어도 앞과 옆에서 본 모양이 전혀 변하지 않는다고 합니다. 이 조건을 만족하는 쌓기나무 모양의 '최소 개수'와 '최대 개수'를 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="82" y="20" width="28" height="28" fill="#fde047" stroke="#dc2626" stroke-width="2"/>
                    <text x="90" y="40" fill="#dc2626" font-size="13" font-weight="bold">★</text>
                    <rect x="110" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="120" y="40" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="82" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="92" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="110" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="120" y="68" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <text x="104" y="94" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                  </svg>
                </div>`,
            ans: "6, 7", accept: ["6,7", "6 7", "6개, 7개"], placeholder: "최소 개수, 최대 개수 순서로 입력",
            h1: "★을 제외한 나머지 세 자리의 합은 2 + 2 + 1 = 5개입니다.",
            h2: "★이 1일 때(5 + 1)와 ★이 2일 때(5 + 2)의 전체 개수를 순서대로 적어 보세요.",
            checkTip: "★ = 1이면 5 + 1 = 6개(최소), ★ = 2이면 5 + 2 = 7개(최대)입니다.",
            wrongDiag: {},
            diagDefault: "최소 개수(6)와 최대 개수(7)를 '6, 7' 형태로 입력해 보세요.",
            steps: [
              { q: "1계단: ★을 제외한 나머지 세 칸의 합(2 + 2 + 1)은 얼마인가요?", ans: "5" },
              { q: "2계단: ★이 1일 때 최소 개수는 5 + 1 = 6개이고, ★이 2일 때 최대 개수는 7개입니다. 순서대로 쓰면 무엇인가요?", ans: "6, 7" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음 (가) 모양(5개)을 만들기 위해 아래 [기본 조각](3개짜리 'ㄴ' 모양)에 쌓기나무 몇 개짜리 조각을 더 이어 붙여야 하나요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 250 100" style="width:100%; max-width:250px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="22" y="22" fill="#1e3a8a" font-size="11" font-weight="bold">[(가) 완성 모양: 5개]</text>
                      <rect x="28" y="34" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="50" y="34" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="72" y="34" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="28" y="56" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="72" y="56" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="150" y="22" fill="#15803d" font-size="11" font-weight="bold">[기본 조각: 3개]</text>
                      <rect x="160" y="34" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="182" y="34" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="160" y="56" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "2", accept: ["2개"], unit: "개", placeholder: "숫자만 입력",
              h1: "완성 모양(5개)에서 기본 조각(3개)을 제외한 나머지 개수를 구하면 됩니다.",
              h2: "5 - 3을 계산해 보세요.",
              checkTip: "5 - 3 = 2(개)짜리 조각을 더 이어 붙여야 합니다.",
              wrongDiag: {},
              diagDefault: "5에서 3을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 5 - 3은 몇 개인가요?", ans: "2" }
              ]
            },
            {
              q: `[유형 1] 다음 왼쪽의 [기준 조각]은 쌓기나무 4개를 1층에 'ㄴ' 모양으로 이어 붙인 것입니다. 이 조각을 바닥에서 돌렸을 때 '같은 모양'이 되는 것을 (가)와 (나) 중에서 찾아 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 105" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 기준 조각: 3칸 가로 + 왼쪽 위 1칸 -->
                      <text x="18" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[기준 조각]</text>
                      <rect x="18" y="32" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="18" y="52" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="38" y="52" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="58" y="52" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (가) 시계방향 180도 회전('ㄱ' 모양: 3칸 가로 + 오른쪽 아래 1칸) -->
                      <text x="128" y="20" fill="#15803d" font-size="11" font-weight="bold">(가)</text>
                      <rect x="112" y="32" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="132" y="32" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="152" y="32" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="152" y="52" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (나) 가운데가 튀어나온 'ㅜ' 모양 -->
                      <text x="232" y="20" fill="#dc2626" font-size="11" font-weight="bold">(나)</text>
                      <rect x="212" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="232" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="252" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="232" y="52" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "가", accept: ["(가)", "가번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "[기준 조각]은 3칸이 일렬로 이어진 한쪽 끝에서 1칸이 꺾여 있는 모양입니다.",
              h2: "기준 조각을 시계 방향으로 반 바퀴(180도) 돌리면 (가)와 똑같아집니다. (나)는 가운데 칸에 붙어 있어 돌려도 같아질 수 없습니다.",
              checkTip: "[기준 조각]을 반 바퀴 돌리면 (가)와 겹쳐지므로 같은 모양은 (가)입니다.",
              wrongDiag: {
                "나": "(나)는 3칸의 한가운데에 1칸이 붙어 있는 'ㅜ' 자 모양이어서, 끝부분이 꺾인 기준 조각을 아무리 돌려도 만들 수 없어요!"
              },
              diagDefault: "끝부분에서 1칸이 꺾여 있는 (가)를 입력해 보세요.",
              steps: [
                { q: "1계단: 3칸의 끝부분에서 1칸이 꺾인 기준 조각을 돌려서 만들 수 있는 기호는 무엇인가요?", ans: "가" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 다음 [위에서 본 모양]의 빈칸 ㉠에 어떤 숫자를 넣어도 [앞]과 [옆]에서 본 최고 층수가 모두 '3층'으로 유지되도록 하려고 합니다. ㉠ 자리에 들어갈 수 있는 자연수는 모두 몇 가지인가요? (단, 위에서 본 모양에 칸이 있으므로 ㉠은 1 이상입니다.)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="82" y="20" width="28" height="28" fill="#fde047" stroke="#dc2626" stroke-width="2"/>
                      <text x="90" y="40" fill="#dc2626" font-size="14" font-weight="bold">㉠</text>
                      <rect x="110" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="120" y="40" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                      <rect x="82" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="92" y="68" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                      <rect x="110" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="120" y="68" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <text x="104" y="94" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "3", accept: ["3가지", "3개"], unit: "가지", placeholder: "숫자만 입력",
              h1: "왼쪽 세로줄의 앞자리에 이미 '3'이 있고, 뒷줄(가로줄)의 오른쪽에도 이미 '3'이 있습니다!",
              h2: "따라서 ㉠ 자리에는 1, 2, 3 중 어떤 수가 들어가도 그 줄의 가장 큰 수는 3으로 유지됩니다. 모두 몇 가지인지 적어 보세요.",
              checkTip: "㉠에는 1, 2, 3이 모두 들어갈 수 있으므로 만들 수 있는 모양은 모두 3가지입니다.",
              wrongDiag: {
                "1": "㉠이 1일 때뿐만 아니라 2나 3일 때도 앞과 옆의 3층 기둥에 가려져 보이는 모양이 똑같아요! 1, 2, 3으로 총 3가지입니다."
              },
              diagDefault: "㉠에 들어갈 수 있는 수(1, 2, 3)의 가짓수(3)를 입력해 보세요.",
              steps: [
                { q: "1계단: ㉠이 속한 세로줄과 가로줄의 최고 층수가 3층을 넘지 않으려면 ㉠은 1부터 최대 얼마까지 가능한가요?", ans: "3" },
                { q: "2계단: 따라서 가능한 자연수(1, 2, 3)는 모두 몇 가지인가요?", ans: "3" }
              ]
            },
            {
              q: "[유형 2] 위에서 본 모양이 가로 2칸, 세로 2칸(총 4칸)인 정사각형이고, 앞에서 본 모양과 옆에서 본 모양도 모두 가로 2칸, 세로 2층(총 4칸)인 정사각형입니다. 이 조건을 만족하는 쌓기나무 모양을 만들 때 필요한 '최대 개수'는 몇 개인가요?",
              ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
              h1: "최대 개수가 되려면 바닥의 4자리 모두에 가능한 가장 높은 층수(2층)를 꽉 채워 쌓으면 됩니다!",
              h2: "4자리에 모두 2개씩 쌓았을 때의 개수(4 × 2)를 구해 보세요.",
              checkTip: "네 자리에 모두 2층씩 쌓으면 2 + 2 + 2 + 2 = 8(개)가 되어 최대가 됩니다. (참고: 대각선 두 자리에만 2층을 놓으면 최소 6개로도 만들 수 있습니다!)",
              wrongDiag: {
                "6": "6개는 대각선 두 자리에만 2층을 놓았을 때의 '최소 개수'예요! 문제에서는 꽉 채웠을 때의 '최대 개수(4 × 2 = 8개)'를 물었습니다."
              },
              diagDefault: "4자리에 모두 2층씩 꽉 채운 개수(4 × 2)를 입력해 보세요.",
              steps: [
                { q: "1계단: 바닥 4자리에 모두 2개씩 쌓으면 최대 몇 개인가요?", ans: "8" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 위에서 본 모양이 가로 2칸, 세로 2칸(총 4칸)이고, 앞과 옆에서 보았을 때 모든 줄이 2층으로 보입니다. 이때 쌓기나무를 '가장 적게' 사용하여 이 모양을 만들려면 최소 몇 개가 필요한가요?",
              ans: "6", accept: ["6개"], unit: "개", placeholder: "숫자만 입력",
              h1: "바닥 4자리에 기본적으로 1개씩(4개) 놓고, 앞과 옆의 모든 줄이 2층으로 보이도록 대각선으로 마주 보는 두 자리에만 1개씩(2개) 더 올리면 됩니다!",
              h2: "바닥 4개에 2층 2개를 더한 최소 개수를 구해 보세요.",
              checkTip: "대각선 두 자리에 2개씩, 나머지 두 자리에 1개씩 놓으면(2 + 1 + 1 + 2 = 6개) 앞과 옆에서 모두 2층으로 보입니다.",
              wrongDiag: {
                "8": "8개는 가장 많이 사용했을 때(최대 개수)예요! 대각선 두 곳에만 2층을 쌓으면 6개로도 같은 모양이 보입니다."
              },
              diagDefault: "2 + 1 + 1 + 2를 계산한 최소 개수(6)를 입력해 보세요.",
              steps: [
                { q: "1계단: 바닥 4자리에 1개씩 놓으면 몇 개인가요?", ans: "4" },
                { q: "2계단: 모든 줄이 2층으로 보이도록 대각선 두 자리에 1개씩(2개) 더 올리면 최소 몇 개인가요?", ans: "6" }
              ]
            },
            {
              q: "[유형 3] 쌓기나무로 가로 3칸, 세로 3칸, 높이 3층인 큰 정육면체 모양을 빈틈없이 꽉 채워 만들려면 쌓기나무는 모두 몇 개가 필요한가요?",
              ans: "27", accept: ["27개"], unit: "개", placeholder: "숫자만 입력",
              h1: "1층에 가로 3칸 × 세로 3칸 = 9개가 놓이고, 그런 층이 3층까지 있습니다.",
              h2: "9 × 3을 계산해 보세요.",
              checkTip: "(1층 9개) × 3층 = 27(개)입니다.",
              wrongDiag: {
                "9": "9개는 1층에만 놓인 개수예요! 3층까지 있으므로 9 × 3 = 27개입니다."
              },
              diagDefault: "3 × 3 × 3 = 27을 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에 놓이는 쌓기나무는 3 × 3 = 몇 개인가요?", ans: "9" },
                { q: "2계단: 3층까지 꽉 채우면 9 × 3 = 모두 몇 개인가요?", ans: "27" }
              ]
            }
          ]
        ],
        step4Intro: "조각을 돌릴 때는 꺾인 위치 관계를 확인하고, 위·앞·옆 모양만 주어졌을 때는 가려진 자리에 1층부터 최고 층수까지 넣어 보며 최소·최대 개수를 찾으면 됩니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 쌓기나무 7개로 만든 완성 모양이 있습니다. 이미 4개짜리 기본 조각 1개를 놓았다면, 나머지 부분에는 몇 개짜리 조각을 이어 붙여야 하나요?",
              ans: "3", accept: ["3개"], unit: "개", placeholder: "숫자만 입력",
              h1: "7 - 4를 계산합니다.",
              h2: "7에서 4를 뺀 값을 적어 보세요.",
              checkTip: "7 - 4 = 3(개)입니다.",
              wrongDiag: {},
              diagDefault: "3을 입력해 보세요.",
              steps: [
                { q: "1계단: 7 - 4는 몇 개인가요?", ans: "3" }
              ]
            },
            {
              q: `[쌍둥이 1-2] 다음 [기준 조각]은 쌓기나무 4개를 1층에 'ㅜ' 모양(가운데 칸이 볼록 튀어나온 모양)으로 이어 붙인 것입니다. 이 조각을 바닥에서 돌렸을 때 '같은 모양'이 되는 것을 (가)와 (나) 중에서 찾아 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 300 105" style="width:100%; max-width:300px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- 기준 조각: 'ㅜ' 모양 -->
                      <text x="18" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[기준 조각]</text>
                      <rect x="18" y="32" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="38" y="32" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="58" y="32" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="38" y="52" width="20" height="20" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (가) 끝에서 꺾인 'ㄱ' 모양 -->
                      <text x="128" y="20" fill="#dc2626" font-size="11" font-weight="bold">(가)</text>
                      <rect x="112" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="132" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="152" y="32" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="152" y="52" width="20" height="20" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <!-- (나) 반 바퀴 돌린 'ㅗ' 모양 -->
                      <text x="232" y="20" fill="#15803d" font-size="11" font-weight="bold">(나)</text>
                      <rect x="232" y="32" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="212" y="52" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="232" y="52" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="252" y="52" width="20" height="20" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                    </svg>
                  </div>`,
              ans: "나", accept: ["(나)", "나번"], placeholder: "기호 입력 (가 또는 나)",
              h1: "[기준 조각]은 3칸의 한가운데에 1칸이 붙어 있는 'ㅜ' 모양입니다.",
              h2: "반 바퀴 돌리면 'ㅗ' 모양인 (나)가 됩니다. 알맞은 기호를 적어 보세요.",
              checkTip: "'ㅜ' 모양을 반 바퀴 돌리면 'ㅗ' 모양인 (나)와 같아집니다.",
              wrongDiag: {
                "가": "(가)는 끝부분이 꺾인 모양이라 가운데가 튀어나온 기준 조각을 돌려서는 만들 수 없어요!"
              },
              diagDefault: "(나)를 입력해 보세요.",
              steps: [
                { q: "1계단: 가운데가 볼록한 기준 조각을 돌려서 같아지는 기호는 무엇인가요?", ans: "나" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 위에서 본 모양(2칸 × 2칸)에서 왼쪽 앞자리와 오른쪽 뒷자리에 이미 '2'가 적혀 있어서 모든 가로줄과 세로줄의 최고 층수가 2층입니다. 이때 왼쪽 뒷자리(㉠)에 들어갈 수 있는 자연수(1 이상 2 이하)는 모두 몇 가지인가요?",
              ans: "2", accept: ["2가지", "2개"], unit: "가지", placeholder: "숫자만 입력",
              h1: "㉠ 자리에는 1이 들어가도 되고 2가 들어가도 최고 층수 2층이 유지됩니다.",
              h2: "1과 2로 모두 몇 가지인지 적어 보세요.",
              checkTip: "1 또는 2가 들어갈 수 있으므로 2가지입니다.",
              wrongDiag: {},
              diagDefault: "2를 입력해 보세요.",
              steps: [
                { q: "1계단: 가능한 자연수(1, 2)는 모두 몇 가지인가요?", ans: "2" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 위에서 본 모양이 가로 2칸, 세로 2칸(총 4칸)이고, 앞과 옆에서 보았을 때 모든 줄이 3층으로 보입니다. 이 조건을 만족하는 쌓기나무의 '최대 개수'(네 자리 모두 3층으로 꽉 채운 개수)는 몇 개인가요?",
              ans: "12", accept: ["12개"], unit: "개", placeholder: "숫자만 입력",
              h1: "4자리에 모두 3개씩 쌓으면 됩니다.",
              h2: "4 × 3을 계산해 보세요.",
              checkTip: "4 × 3 = 12(개)입니다.",
              wrongDiag: {},
              diagDefault: "12를 입력해 보세요.",
              steps: [
                { q: "1계단: 4 × 3은 몇 개인가요?", ans: "12" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 위에서 본 모양이 가로 2칸, 세로 2칸(총 4칸)이고, 앞과 옆에서 보았을 때 모든 줄이 3층으로 보입니다. 대각선 두 자리에만 3층을 놓고 나머지 두 자리에는 1층을 놓았을 때, 필요한 쌓기나무의 '최소 개수'는 몇 개인가요?",
              ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
              h1: "두 자리에는 3개씩(6개), 나머지 두 자리에는 1개씩(2개) 놓습니다.",
              h2: "3 + 3 + 1 + 1을 계산해 보세요.",
              checkTip: "3 + 3 + 1 + 1 = 8(개)입니다.",
              wrongDiag: {},
              diagDefault: "8을 입력해 보세요.",
              steps: [
                { q: "1계단: 3 + 3 + 1 + 1은 몇 개인가요?", ans: "8" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 쌓기나무로 가로 3칸, 세로 2칸, 높이 2층인 직육면체 모양을 빈틈없이 꽉 채워 만들려면 쌓기나무는 모두 몇 개가 필요한가요?",
              ans: "12", accept: ["12개"], unit: "개", placeholder: "숫자만 입력",
              h1: "1층에 3 × 2 = 6개가 놓이고, 2층까지 있습니다.",
              h2: "6 × 2를 계산해 보세요.",
              checkTip: "(3 × 2) × 2 = 12(개)입니다.",
              wrongDiag: {},
              diagDefault: "12를 입력해 보세요.",
              steps: [
                { q: "1계단: 1층에 6개씩 2층이면 모두 몇 개인가요?", ans: "12" }
              ]
            }
          ]
        ],
        step5A: {
          q: "위, 앞, 옆에서 본 모양만 주어졌을 때는 높은 기둥에 가려지는 자리의 층수에 따라 만들 수 있는 모양이 여러 가지가 될 수 있으므로 필요한 쌓기나무의 [ (1) 최소 개수와 최대 개수 / (2) 한 가지 모양 ] 를 구할 수 있습니다.",
          ans: "최소 개수와 최대 개수", numAns: "1",
          hint: "💡 힌트: 가장 적게 쓸 때와 가장 많이 쓸 때의 개수를 각각 찾을 수 있습니다."
        },
        step5B: {
          sentence: "기본 조각을 돌리거나 이어 붙여 새로운 모양을 만들고 조건에 맞는 쌓기나무 개수를 찾을 수 있다."
        },
        nextUnit: "3-6"
      },
  
      "3-6": {
        title: "3-6차시: 3단원 종합 마스터 (공간과 입체 완전 정복)",
        goal: "관찰 방향, 위·앞·옆에서 본 모양, 위에서 본 모양에 수 쓰기, 층별 모양을 종합하여 입체 추론 문제를 해결합니다.",
        videoUrl: "",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">🏆 3단원 총정리: 공간과 입체 3가지 표현 방법 완벽 연결</h4>
            <table style="width:100%; border-collapse:collapse; background:#fff; font-size:0.92rem; text-align:center; margin-top:10px; border:1px solid #cbd5e1;">
              <thead>
                <tr style="background:#e0f2fe; color:#1e3a8a;">
                  <th style="padding:8px; border:1px solid #cbd5e1;">표현 방법</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">전체 개수 구하기</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">핵심 연결 규칙</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;">위·앞·옆에서 본 모양</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">위에서 본 칸에<br>앞·옆 층수 매칭</td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">• 앞 = 세로줄 <strong>최고 층수</strong><br>• 옆(오른쪽) = 왼쪽(앞줄), 오른쪽(뒷줄) <strong>최고 층수</strong></td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#15803d;">위에서 본 모양에 수 쓰기</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">칸에 적힌<br><strong>모든 숫자의 합</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">• 숨겨진 쌓기나무 없이 <strong>단 한 가지 모양</strong>으로 결정됨!</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">층별로 나타낸 모양</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">1층 + 2층 + 3층<br><strong>칸수의 합</strong></td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">• <strong>1층 모양 = 위에서 본 모양</strong><br>• 2층 개수 = 숫자가 <strong>2 이상</strong>인 칸의 개수<br>• 이 방법도 <strong>단 한 가지 모양</strong>으로 결정됨!</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "다음 중 숨겨진 부분 없이 쌓기나무의 모양과 전체 개수를 언제나 '단 한 가지'로 정확하게 알 수 있는 방법은 어느 것인가요?",
            choices: ["1번: 위에서 본 모양에 각 자리의 쌓기나무 개수(숫자)를 쓴 그림", "2번: 앞에서 본 모양과 옆에서 본 모양만 그린 그림"],
            ans: "1",
            h1: "위에서 본 모양의 각 칸에 숫자를 쓰면 모든 자리에 몇 층씩 쌓여 있는지 빠짐없이 알 수 있습니다.",
            h2: "위에서 본 모양에 수를 쓴 그림을 골라 보세요."
          },
          {
            q: "가로 3칸, 세로 3칸 범위 안에 쌓기나무 7개를(높이 3층 이하로) 쌓아 만든 모양이 있습니다. 기존 모양을 옮기지 않고 쌓기나무를 더 붙여서 가로 3칸, 세로 3칸, 높이 3층인 정육면체(27개)를 만들려면 몇 개가 더 필요한가요?",
            choices: ["1번: 20개 (27 - 7)", "2번: 27개"],
            ans: "1",
            h1: "전체 필요한 개수(27개)에서 현재 있는 개수(7개)를 빼면 됩니다.",
            h2: "27 - 7을 계산한 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "위에서 본 모양의 네 칸에 각각 '3, 2, 1, 2'가 적혀 있을 때, 사용한 쌓기나무의 전체 개수는 [ ① ]개입니다.",
            ans: "8",
            h1: "네 칸의 숫자를 모두 더해 보세요.",
            h2: "3 + 2 + 1 + 2의 값을 숫자로 적어 보세요."
          },
          {
            q: "위에서 본 모양의 네 칸에 '3, 2, 1, 2'가 적혀 있을 때, 층별 모양에서 '2층'에 놓인 쌓기나무는 숫자가 2 이상(3, 2, 2)인 칸의 개수와 같으므로 모두 [ ① ]개입니다.",
            ans: "3",
            h1: "'3, 2, 1, 2' 중에서 2 이상인 숫자가 몇 개인지 세어 보세요.",
            h2: "3, 2, 2의 개수를 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 위에서 본 모양에 수를 쓴 것입니다. 이 모양을 '앞'에서 보았을 때의 모양에 그려지는 칸수(㉠)와 '오른쪽 옆'에서 보았을 때의 모양에 그려지는 칸수(㉡)를 순서대로 쓰세요 (쉼표로 구분하여 입력).
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <rect x="68" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="40" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                    <rect x="96" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="40" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <rect x="124" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="134" y="40" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="68" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="78" y="68" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                    <rect x="96" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="106" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                    <text x="104" y="94" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                  </svg>
                </div>`,
            ans: "6, 5", accept: ["6,5", "6 5", "6칸, 5칸"], placeholder: "앞의 칸수, 옆의 칸수 순서로 입력",
            h1: "앞에서 본 층수는 세로줄 최댓값(3층, 2층, 1층)이고, 옆에서 본 층수는 가로줄 최댓값(앞줄 2층, 뒷줄 3층)입니다.",
            h2: "앞에서 본 칸수(3 + 2 + 1 = 6칸)와 옆에서 본 칸수(2 + 3 = 5칸)를 '6, 5'로 적어 보세요.",
            checkTip: "앞에서 본 칸수는 3 + 2 + 1 = 6칸이고, 옆에서 본 칸수는 2 + 3 = 5칸이므로 '6, 5'입니다.",
            wrongDiag: {
              "5, 6": "앞에서 본 칸수(6)와 옆에서 본 칸수(5)의 순서가 바뀌었어요!"
            },
            diagDefault: "앞의 칸수(6)와 옆의 칸수(5)를 '6, 5' 형태로 적어 보세요.",
            steps: [
              { q: "1계단: 앞에서 본 세 줄의 최고 층수 합(3 + 2 + 1)은 몇 칸인가요?", ans: "6" },
              { q: "2계단: 옆에서 본 앞줄(2층)과 뒷줄(3층)의 합은 5칸입니다. 순서대로 쓰면 무엇인가요?", ans: "6, 5" }
            ]
          },
          {
            q: "층별로 나타낸 모양에서 1층은 가로 3칸, 세로 2칸(6개)을 빈틈없이 채웠고, 그 위에 2층 3개, 3층 1개가 쌓여 있습니다. 기존 쌓기나무를 옮기지 않고 가로 3칸, 세로 2칸, 높이 3층인 직육면체(총 18개)로 완성하려면 쌓기나무가 몇 개 더 필요한가요?",
            ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
            h1: "먼저 현재 놓여 있는 쌓기나무의 전체 개수(6 + 3 + 1)를 구한 뒤, 완성할 직육면체의 개수(18개)에서 빼 보세요.",
            h2: "18 - (6 + 3 + 1) = 18 - 10을 계산해 보세요.",
            checkTip: "현재 개수는 6 + 3 + 1 = 10개이므로, 18 - 10 = 8(개)가 더 필요합니다.",
            wrongDiag: {
              "10": "10개는 현재 놓여 있는 개수예요! 전체 18개에서 10개를 빼야 더 필요한 개수가 됩니다."
            },
            diagDefault: "18에서 현재 개수(10)를 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 현재 놓여 있는 쌓기나무는 6 + 3 + 1 = 모두 몇 개인가요?", ans: "10" },
              { q: "2계단: 18개짜리 직육면체를 만들려면 18 - 10 = 몇 개가 더 필요한가요?", ans: "8" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음은 쌓기나무로 쌓은 모양을 층별로 나타낸 것입니다. 이 모양을 '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)의 층수를 순서대로 쓰세요 (쉼표로 구분하여 입력).
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 270 105" style="width:100%; max-width:270px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="28" y="20" fill="#1e3a8a" font-size="11" font-weight="bold">[1층]</text>
                      <rect x="20" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="42" y="30" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="20" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="42" y="52" width="22" height="22" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="118" y="20" fill="#15803d" font-size="11" font-weight="bold">[2층]</text>
                      <rect x="110" y="30" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="132" y="30" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="110" y="52" width="22" height="22" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="132" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="208" y="20" fill="#dc2626" font-size="11" font-weight="bold">[3층]</text>
                      <rect x="200" y="30" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="222" y="30" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="200" y="52" width="22" height="22" fill="#fca5a5" stroke="#1e293b" stroke-width="1.5"/>
                      <rect x="222" y="52" width="22" height="22" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="122" y="94" fill="#64748b" font-size="11" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "3, 2", accept: ["3,2", "3 2", "3층, 2층"], placeholder: "옆에서 본 왼쪽(앞줄), 오른쪽(뒷줄) 층수 입력",
              h1: "오른쪽 옆에서 보면 앞줄(아래쪽 가로줄)이 왼쪽에, 뒷줄(위쪽 가로줄)이 오른쪽에 놓입니다.",
              h2: "앞줄은 3층까지 색칠되어 있고, 뒷줄은 2층까지 색칠되어 있습니다. 순서대로 적어 보세요.",
              checkTip: "앞줄(왼쪽)은 최고 3층, 뒷줄(오른쪽)은 최고 2층이므로 '3, 2'입니다.",
              wrongDiag: {
                "2, 3": "오른쪽 옆에서 보면 앞줄(3층)이 왼쪽에 오고 뒷줄(2층)이 오른쪽에 오므로 '3, 2'입니다!"
              },
              diagDefault: "'3, 2' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 앞줄(아래쪽 가로줄)은 최대 몇 층까지 색칠되어 있나요?", ans: "3" },
                { q: "2계단: 뒷줄(위쪽 가로줄)은 최대 2층까지 색칠되어 있습니다. 순서대로 쓰면 무엇인가요?", ans: "3, 2" }
              ]
            },
            {
              q: "[유형 1] 위에서 본 모양의 다섯 칸에 각각 '3, 2, 2, 1, 1'이라고 적혀 있습니다. 이 모양의 전체 쌓기나무 개수(㉠)와 층별로 나타내었을 때 2층에 놓인 개수(㉡)의 합(㉠ + ㉡)은 얼마인가요?",
              ans: "12", placeholder: "두 수의 합 입력",
              h1: "전체 개수(㉠)는 다섯 숫자를 모두 더한 값이고, 2층 개수(㉡)는 숫자가 2 이상(3, 2, 2)인 칸의 개수입니다.",
              h2: "㉠(3+2+2+1+1 = 9)과 ㉡(3)을 각각 구해 더해 보세요.",
              checkTip: "전체 개수 ㉠ = 9개, 2층 개수 ㉡ = 3개이므로 합은 9 + 3 = 12입니다.",
              wrongDiag: {
                "9": "9는 전체 개수(㉠)만 구한 것이에요! 여기에 2층에 놓인 개수(㉡ = 3)를 더해 보세요."
              },
              diagDefault: "전체 개수(9)와 2층 개수(3)를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 쌓기나무 개수 ㉠(3 + 2 + 2 + 1 + 1)은 몇 개인가요?", ans: "9" },
                { q: "2계단: 숫자가 2 이상(3, 2, 2)인 2층의 개수 ㉡은 몇 개인가요?", ans: "3" },
                { q: "3계단: ㉠과 ㉡을 더하면(9 + 3) 얼마인가요?", ans: "12" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 윤아는 아래 [위에서 본 모양에 수 쓰기]를 보고 '오른쪽 옆'에서 본 모양을 그릴 때, 앞줄과 뒷줄의 위치를 반대로 착각하여 왼쪽을 3층, 오른쪽을 2층으로 잘못 그렸습니다. 바르게 그린 '오른쪽 옆'에서 본 모양은 왼쪽과 오른쪽이 각각 몇 층이어야 하나요? (쉼표로 구분하여 입력)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 230 105" style="width:100%; max-width:230px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="75" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="85" y="40" fill="#dc2626" font-size="15" font-weight="bold">3</text>
                      <rect x="103" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="113" y="40" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="75" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="85" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="103" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="113" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <text x="95" y="94" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                      <text x="140" y="52" fill="#15803d" font-size="12" font-weight="bold">⬅️ 옆</text>
                    </svg>
                  </div>`,
              ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
              h1: "오른쪽 옆에서 바라보면 앞줄(2, 2)이 왼쪽에 오고, 뒷줄(3, 1)이 오른쪽에 옵니다!",
              h2: "앞줄의 최고 층수(2)를 왼쪽에, 뒷줄의 최고 층수(3)를 오른쪽에 놓아 '2, 3'으로 적어 보세요.",
              checkTip: "오른쪽 옆에서 보면 왼쪽(앞줄)은 2층, 오른쪽(뒷줄)은 3층이므로 '2, 3'입니다.",
              wrongDiag: {
                "3, 2": "3, 2는 윤아가 앞뒤를 거꾸로 착각해 잘못 그린 답이에요! 앞줄(2층)이 왼쪽에 오므로 '2, 3'입니다."
              },
              diagDefault: "'2, 3' 형태로 입력해 보세요.",
              steps: [
                { q: "1계단: 오른쪽 옆에서 볼 때 왼쪽에 놓이는 앞줄(2, 2)의 최고 층수는 몇 층인가요?", ans: "2" },
                { q: "2계단: 오른쪽에 놓이는 뒷줄(3, 1)의 최고 층수는 3층입니다. 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            },
            {
              q: "[유형 2] 위에서 본 모양이 5칸이고, 앞에서 보았을 때 각 줄의 층수가 '2층, 3층, 1층'입니다. 찬영이는 이 두 가지만 보고 전체 쌓기나무가 '5 + 2 + 3 + 1 = 11개'라고 잘못 구했습니다. 만약 5칸 중 한 자리만 3층, 한 자리는 2층, 나머지 세 자리는 모두 1층이라면 실제 전체 쌓기나무는 몇 개인가요?",
              ans: "8", accept: ["8개"], unit: "개", placeholder: "숫자만 입력",
              h1: "위에서 본 칸수와 앞에서 본 층수를 그냥 더하면 1층이 중복으로 더해집니다! 각 자리의 층수를 직접 더해야 합니다.",
              h2: "3층 한 자리(3개) + 2층 한 자리(2개) + 1층 세 자리(3개)를 모두 더해 보세요.",
              checkTip: "3 + 2 + 1 + 1 + 1 = 8(개)입니다.",
              wrongDiag: {
                "11": "11개는 찬영이가 1층을 중복해서 잘못 더한 값이에요! 3 + 2 + 1 + 1 + 1을 계산해 보세요."
              },
              diagDefault: "3 + 2 + 1 + 1 + 1을 계산한 값(8)을 입력해 보세요.",
              steps: [
                { q: "1계단: 3층 한 자리(3개)와 2층 한 자리(2개)를 더하면 몇 개인가요?", ans: "5" },
                { q: "2계단: 여기에 1층 세 자리(3개)를 더하면 모두 몇 개인가요?", ans: "8" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 다음 [위에서 본 모양에 수 쓰기]로 나타낸 입체 모양이 있습니다. 기존 모양을 옮기지 않고 쌓기나무를 더 쌓아서 가로 3칸, 세로 2칸, 높이 3층인 큰 직육면체 모양을 만들려면 쌓기나무가 몇 개 더 필요한가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 105" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="68" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="78" y="40" fill="#1e293b" font-size="15" font-weight="bold">3</text>
                      <rect x="96" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="106" y="40" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="124" y="20" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="134" y="40" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="68" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="78" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <rect x="96" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="106" y="68" fill="#1e293b" font-size="15" font-weight="bold">1</text>
                      <rect x="124" y="48" width="28" height="28" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="134" y="68" fill="#1e293b" font-size="15" font-weight="bold">2</text>
                      <text x="104" y="94" fill="#1e293b" font-size="12" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "7", accept: ["7개"], unit: "개", placeholder: "숫자만 입력",
              h1: "가로 3칸, 세로 2칸, 높이 3층인 직육면체의 전체 개수는 3 × 2 × 3 = 18개입니다.",
              h2: "18개에서 현재 놓여 있는 개수(3 + 2 + 1 + 2 + 1 + 2 = 11개)를 빼 보세요.",
              checkTip: "완성 직육면체(18개) - 현재 개수(11개) = 7(개)가 더 필요합니다.",
              wrongDiag: {
                "11": "11개는 현재 놓여 있는 쌓기나무의 개수예요! 18개에서 11개를 빼야 더 필요한 개수가 됩니다."
              },
              diagDefault: "18에서 현재 개수(11)를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 현재 칸에 적힌 모든 숫자의 합(3 + 2 + 1 + 2 + 1 + 2)은 몇 개인가요?", ans: "11" },
                { q: "2계단: 전체 18개에서 11개를 빼면 몇 개가 더 필요한가요?", ans: "7" }
              ]
            },
            {
              q: `[유형 3] 다음 [위에서 본 모양에 수 쓰기]로 나타낸 입체 모양이 있습니다. 기존 모양을 옮기지 않고 빈자리와 위쪽에 쌓기나무를 더 붙여서 가로 3칸, 세로 3칸, 높이 3층인 큰 정육면체(총 27개)를 만들려면 쌓기나무가 몇 개 더 필요한가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 220 120" style="width:100%; max-width:220px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <rect x="68" y="16" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="77" y="34" fill="#1e293b" font-size="14" font-weight="bold">3</text>
                      <rect x="94" y="16" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="103" y="34" fill="#1e293b" font-size="14" font-weight="bold">2</text>
                      <rect x="120" y="16" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="129" y="34" fill="#1e293b" font-size="14" font-weight="bold">1</text>
                      <rect x="68" y="42" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="77" y="60" fill="#1e293b" font-size="14" font-weight="bold">2</text>
                      <rect x="94" y="42" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="103" y="60" fill="#1e293b" font-size="14" font-weight="bold">1</text>
                      <rect x="120" y="42" width="26" height="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="68" y="68" width="26" height="26" fill="#fef9c3" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="77" y="86" fill="#1e293b" font-size="14" font-weight="bold">1</text>
                      <rect x="94" y="68" width="26" height="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <rect x="120" y="68" width="26" height="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
                      <text x="100" y="112" fill="#1e293b" font-size="11" font-weight="bold">⬆️ 앞</text>
                    </svg>
                  </div>`,
              ans: "17", accept: ["17개"], unit: "개", placeholder: "숫자만 입력",
              h1: "먼저 위에서 본 모양에 적힌 숫자를 모두 더하여 현재 놓여 있는 쌓기나무 개수부터 구해 보세요!",
              h2: "현재 개수는 3 + 2 + 1 + 2 + 1 + 1 = 10개입니다. 전체 27개에서 10개를 빼 보세요.",
              checkTip: "현재 개수(10개)를 전체 27개에서 빼면 27 - 10 = 17(개)가 더 필요합니다.",
              wrongDiag: {
                "10": "10개는 현재 놓여 있는 쌓기나무의 개수예요! 27개에서 10개를 빼야 더 필요한 개수가 됩니다.",
                "27": "27개는 완성된 정육면체의 전체 개수예요! 이미 놓여 있는 10개를 빼야 합니다."
              },
              diagDefault: "27에서 현재 개수(3+2+1+2+1+1 = 10)를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 현재 칸에 적힌 숫자들의 합(3 + 2 + 1 + 2 + 1 + 1)은 몇 개인가요?", ans: "10" },
                { q: "2계단: 27개짜리 정육면체를 만들려면 27 - 10 = 몇 개가 더 필요한가요?", ans: "17" }
              ]
            }
          ]
        ],
        step4Intro: "위에서 본 모양에 적힌 숫자의 합(전체 개수), 각 줄의 가장 큰 수(앞·옆 모양), 그리고 1층 모양 = 위에서 본 모양이라는 핵심 고리만 연결하면 3단원은 완전 정복입니다!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 2칸 × 2칸 모양에서 층별로 나타내었을 때 앞줄에는 최대 2층까지, 뒷줄에는 최대 3층까지 쌓기나무가 놓여 있습니다. 이 모양을 '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)의 층수를 순서대로 쓰세요 (쉼표로 구분하여 입력).",
              ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
              h1: "오른쪽 옆에서 보면 앞줄(2층)이 왼쪽에, 뒷줄(3층)이 오른쪽에 놓입니다.",
              h2: "'2, 3'으로 적어 보세요.",
              checkTip: "왼쪽(앞줄) 2층, 오른쪽(뒷줄) 3층이므로 '2, 3'입니다.",
              wrongDiag: {},
              diagDefault: "'2, 3'을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞줄(2)과 뒷줄(3)을 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 위에서 본 모양의 네 칸에 각각 '3, 2, 1, 1'이라고 적혀 있습니다. 전체 쌓기나무 개수(㉠)와 2층에 놓인 개수(㉡)의 합(㉠ + ㉡)은 얼마인가요?",
              ans: "9", placeholder: "두 수의 합 입력",
              h1: "전체 개수 ㉠은 3 + 2 + 1 + 1 = 7개이고, 2층 개수 ㉡은 2 이상(3, 2)인 2개입니다.",
              h2: "7 + 2를 계산해 보세요.",
              checkTip: "㉠ = 7, ㉡ = 2이므로 합은 9입니다.",
              wrongDiag: {},
              diagDefault: "7과 2를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 개수 ㉠은 몇 개인가요?", ans: "7" },
                { q: "2계단: 2층 개수 ㉡은 2개입니다. 두 수의 합은 얼마인가요?", ans: "9" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 위에서 본 모양의 앞줄에 '1, 2'가 적혀 있고, 뒷줄에 '3, 2'가 적혀 있습니다. '오른쪽 옆'에서 보았을 때 왼쪽(앞줄)과 오른쪽(뒷줄)은 각각 몇 층으로 보이는지 바르게 쓰세요 (쉼표로 구분하여 입력).",
              ans: "2, 3", accept: ["2,3", "2 3", "2층, 3층"], placeholder: "옆에서 본 왼쪽, 오른쪽 층수 입력",
              h1: "앞줄(1, 2)의 최댓값은 2이고, 뒷줄(3, 2)의 최댓값은 3입니다.",
              h2: "'2, 3'으로 적어 보세요.",
              checkTip: "앞줄 최고 2층, 뒷줄 최고 3층이므로 '2, 3'입니다.",
              wrongDiag: {},
              diagDefault: "'2, 3'을 입력해 보세요.",
              steps: [
                { q: "1계단: 앞줄 최고 층수(2)와 뒷줄 최고 층수(3)를 순서대로 쓰면 무엇인가요?", ans: "2, 3" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 위에서 본 모양이 4칸이고, 한 자리는 3층, 한 자리는 2층, 나머지 두 자리는 1층입니다. 전체 쌓기나무는 모두 몇 개인가요?",
              ans: "7", accept: ["7개"], unit: "개", placeholder: "숫자만 입력",
              h1: "3 + 2 + 1 + 1을 계산합니다.",
              h2: "네 자리의 층수를 모두 더해 보세요.",
              checkTip: "3 + 2 + 1 + 1 = 7(개)입니다.",
              wrongDiag: {},
              diagDefault: "7을 입력해 보세요.",
              steps: [
                { q: "1계단: 3 + 2 + 1 + 1은 몇 개인가요?", ans: "7" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 가로 3칸, 세로 2칸인 위에서 본 모양의 여섯 칸에 '2, 2, 1, 1, 2, 1'이 적혀 있습니다(현재 총 9개). 기존 모양을 옮기지 않고 쌓기나무를 더 쌓아서 가로 3칸, 세로 2칸, 높이 2층인 직육면체(총 12개)를 만들려면 몇 개가 더 필요한가요?",
              ans: "3", accept: ["3개"], unit: "개", placeholder: "숫자만 입력",
              h1: "완성할 직육면체(12개)에서 현재 개수(9개)를 뺍니다.",
              h2: "12 - 9를 계산해 보세요.",
              checkTip: "12 - 9 = 3(개)가 더 필요합니다.",
              wrongDiag: {},
              diagDefault: "12에서 9를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 12 - 9는 몇 개인가요?", ans: "3" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 가로 3칸, 세로 3칸 범위 안에 6개의 자리(3, 3, 2, 2, 1, 1)에 쌓기나무가 놓여 있습니다. 기존 모양을 옮기지 않고 쌓기나무를 더 붙여서 가로 3칸, 세로 3칸, 높이 3층인 정육면체(총 27개)를 만들려면 쌓기나무가 몇 개 더 필요한가요?",
              ans: "15", accept: ["15개"], unit: "개", placeholder: "숫자만 입력",
              h1: "현재 개수(3+3+2+2+1+1 = 12개)를 전체 27개에서 빼면 됩니다.",
              h2: "27 - 12를 계산해 보세요.",
              checkTip: "27 - 12 = 15(개)가 더 필요합니다.",
              wrongDiag: {},
              diagDefault: "27에서 현재 개수(12)를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 현재 놓여 있는 쌓기나무(3+3+2+2+1+1)는 모두 몇 개인가요?", ans: "12" },
                { q: "2계단: 27 - 12는 몇 개인가요?", ans: "15" }
              ]
            }
          ]
        ],
        step5A: {
          q: "위에서 본 모양에 적힌 수들을 모두 더하면 전체 쌓기나무의 개수가 되며, 층별로 나타낸 모양에서 바닥에 깔린 [ (1) 1층 / (2) 2층 ] 모양은 위에서 본 모양과 같습니다.",
          ans: "1층", numAns: "1",
          hint: "💡 힌트: 가장 아래에 놓여 전체 바닥 자리를 보여 주는 층입니다."
        },
        step5B: {
          sentence: "위에서 본 모양에 적힌 수의 합은 전체 개수이고 일층 모양은 위에서 본 모양과 같다."
        },
        nextUnit: null
      }
    }
  };