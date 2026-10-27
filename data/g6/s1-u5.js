MATH_DB.lessons["6-1-5"] = {
    unitTitle: "6학년 1학기 5단원: 여러 가지 그래프",
    lessonOrder: ["5-1", "5-2", "5-3", "5-4", "5-5", "5-6"],
    items: {
      "5-1": {
        title: "5-1차시: 그림그래프를 알아볼까요",
        goal: "자료의 수를 그림의 크기로 구분하여 나타낸 그림그래프를 읽고, 표의 자료를 그림그래프로 나타내는 방법을 이해합니다.",
        videoUrl: "https://youtube.com/shorts/2YkWjvN8Uds?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 그림그래프의 단위 읽기와 계산</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 125" style="width:100%; max-width:320px; height:auto;">
                <rect x="10" y="10" width="300" height="65" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
                <text x="22" y="48" fill="#1e293b" font-size="14" font-weight="bold">가 마을:</text>
                <circle cx="95" cy="43" r="14" fill="#3b82f6"/>
                <text x="86" y="47" fill="#fff" font-size="11" font-weight="bold">10</text>
                <circle cx="130" cy="43" r="14" fill="#3b82f6"/>
                <text x="121" y="47" fill="#fff" font-size="11" font-weight="bold">10</text>
                <circle cx="160" cy="46" r="8" fill="#60a5fa"/>
                <text x="157" y="50" fill="#fff" font-size="9" font-weight="bold">1</text>
                <circle cx="182" cy="46" r="8" fill="#60a5fa"/>
                <text x="179" y="50" fill="#fff" font-size="9" font-weight="bold">1</text>
                <circle cx="204" cy="46" r="8" fill="#60a5fa"/>
                <text x="201" y="50" fill="#fff" font-size="9" font-weight="bold">1</text>
                <text x="225" y="48" fill="#dc2626" font-size="14" font-weight="bold">➔ 23명!</text>
                <rect x="10" y="83" width="300" height="32" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="22" y="104" fill="#b45309" font-size="11" font-weight="bold">큰 원 = 10명, 작은 원 = 1명 (개수만 세면 안 돼요!)</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>그림그래프:</strong> 조사한 자료의 수를 <strong>큰 그림</strong>과 <strong>작은 그림</strong>으로 나누어 나타낸 그래프입니다. 어느 항목이 많고 적은지 한눈에 비교하기 편리합니다.</li>
              <li><strong>함정 주의:</strong> 위 그림에서 원이 5개 그려져 있다고 5명이라고 읽으면 안 됩니다! <strong>(10명 × 2개) + (1명 × 3개) = 23명</strong>으로 계산해야 합니다.</li>
            </ul>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "큰 사과 그림 1개가 10상자, 작은 사과 그림 1개가 1상자를 나타내는 그림그래프가 있습니다. 큰 사과 3개와 작은 사과 4개로 나타낸 수량은 모두 몇 상자인가요?",
            choices: ["1번: 7상자", "2번: 34상자"],
            ans: "2",
            h1: "큰 사과 3개는 30상자를 뜻하고, 작은 사과 4개는 4상자를 뜻합니다.",
            h2: "30상자와 4상자를 더한 값을 골라 보세요."
          },
          {
            q: "큰 그림이 100명, 작은 그림이 10명을 나타낼 때, '420명'을 나타내려면 큰 그림과 작은 그림을 각각 몇 개씩 그려야 하나요?",
            choices: ["1번: 큰 그림 4개, 작은 그림 2개", "2번: 큰 그림 2개, 작은 그림 4개"],
            ans: "1",
            h1: "백의 자리 숫자 4는 100명짜리 큰 그림으로, 십의 자리 숫자 2는 10명짜리 작은 그림으로 나타냅니다.",
            h2: "100명이 4개, 10명이 2개인 보기를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "조사한 자료의 수를 크기가 다른 그림으로 나타낸 그래프를 [ ① ]라고 합니다.",
            ans: "그림그래프",
            h1: "오늘 차시 제목에 들어 있는 다섯 글자 수학 용어입니다.",
            h2: "숫자 대신 '그림'을 사용하여 나타낸 그래프의 이름을 적어 보세요."
          },
          {
            q: "큰 별 그림 1개가 10명, 작은 별 그림 1개가 1명을 나타낼 때, 큰 별 5개와 작은 별 2개가 그려진 모둠의 학생 수는 모두 [ ① ]명입니다.",
            ans: "52",
            h1: "10명씩 5개와 1명씩 2개를 합하면 됩니다.",
            h2: "50 + 2 의 값을 숫자로 입력해 보세요."
          },
          {
            q: "큰 원이 100권, 작은 원이 10권을 나타내는 그림그래프에 '350권'을 나타내려면 큰 원 3개와 작은 원 [ ① ]개를 그려야 합니다.",
            ans: "5",
            h1: "350권에서 300권은 큰 원 3개로 나타냈으니, 남은 50권을 10권짜리 작은 원 몇 개로 나타낼지 생각해 보세요.",
            h2: "50을 10으로 나눈 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 마을별 사과 수확량을 나타낸 그림그래프입니다. (나) 마을의 사과 수확량은 몇 상자인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 280 120" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <line x1="85" y1="10" x2="85" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                    <line x1="10" y1="48" x2="270" y2="48" stroke="#cbd5e1" stroke-width="1.5"/>
                    <line x1="10" y1="85" x2="270" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                    <text x="22" y="34" fill="#1e293b" font-size="13" font-weight="bold">(가) 마을</text>
                    <circle cx="110" cy="29" r="11" fill="#ef4444"/><circle cx="138" cy="29" r="11" fill="#ef4444"/>
                    <circle cx="163" cy="32" r="6" fill="#f87171"/>
                    <text x="22" y="72" fill="#1e293b" font-size="13" font-weight="bold">(나) 마을</text>
                    <circle cx="110" cy="67" r="11" fill="#ef4444"/><circle cx="138" cy="67" r="11" fill="#ef4444"/><circle cx="166" cy="67" r="11" fill="#ef4444"/>
                    <circle cx="192" cy="70" r="6" fill="#f87171"/><circle cx="210" cy="70" r="6" fill="#f87171"/><circle cx="228" cy="70" r="6" fill="#f87171"/><circle cx="246" cy="70" r="6" fill="#f87171"/>
                    <circle cx="65" cy="103" r="8" fill="#ef4444"/><text x="78" y="107" fill="#334155" font-size="11" font-weight="bold">: 10상자</text>
                    <circle cx="155" cy="104" r="5" fill="#f87171"/><text x="165" y="107" fill="#334155" font-size="11" font-weight="bold">: 1상자</text>
                  </svg>
                </div>`,
            ans: "34",
            accept: ["34상자"],
            unit: "상자",
            placeholder: "숫자만 입력",
            h1: "(나) 마을에는 10상자를 나타내는 큰 원이 3개, 1상자를 나타내는 작은 원이 4개 있습니다.",
            h2: "(10 × 3) + (1 × 4) 를 계산해 보세요.",
            checkTip: "큰 원 3개(30상자) + 작은 원 4개(4상자) = 34상자입니다.",
            wrongDiag: {
              "7": "그림의 개수(3+4=7개)만 세었어요! 큰 원은 10상자, 작은 원은 1상자이므로 30 + 4 를 계산해야 합니다.",
              "21": "21상자는 (가) 마을의 수확량이에요! 아래쪽 (나) 마을을 확인해 보세요."
            },
            diagDefault: "큰 원 3개(30상자)와 작은 원 4개(4상자)를 합한 수를 적어 보세요.",
            steps: [
              { q: "1계단: (나) 마을의 큰 원 3개는 몇 상자를 나타내나요?", ans: "30" },
              { q: "2계단: 여기에 작은 원 4개(4상자)를 더하면 모두 몇 상자인가요?", ans: "34" }
            ]
          },
          {
            q: "큰 나무 그림이 100그루, 작은 나무 그림이 10그루를 나타내는 그림그래프가 있습니다. 숲에 심은 나무가 460그루일 때, 그림그래프에 그려야 하는 큰 나무와 작은 나무는 합하여 모두 몇 개인가요?",
            ans: "10",
            accept: ["10개"],
            unit: "개",
            placeholder: "숫자만 입력",
            h1: "460그루를 나타내려면 100그루짜리 큰 나무 4개와 10그루짜리 작은 나무 6개가 필요합니다.",
            h2: "큰 나무 개수(4개)와 작은 나무 개수(6개)를 더해 보세요.",
            checkTip: "큰 나무 4개(400그루) + 작은 나무 6개(60그루) = 총 10개의 그림을 그려야 합니다.",
            wrongDiag: {
              "4": "큰 나무의 개수(4개)만 적었어요! 작은 나무 6개까지 합한 전체 그림 개수를 구해 보세요.",
              "6": "작은 나무의 개수(6개)만 적었어요! 큰 나무 4개까지 합한 개수를 구해 보세요."
            },
            diagDefault: "큰 나무 4개와 작은 나무 6개를 더한 개수를 입력해 보세요.",
            steps: [
              { q: "1계단: 400그루를 나타내려면 100그루짜리 큰 나무를 몇 개 그려야 하나요?", ans: "4" },
              { q: "2계단: 60그루를 나타내려면 10그루짜리 작은 나무를 몇 개 그려야 하나요?", ans: "6" },
              { q: "3계단: 큰 나무와 작은 나무의 개수를 합하면 모두 몇 개인가요?", ans: "10" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음은 도서관의 요일별 방문자 수를 나타낸 그림그래프입니다. 월요일과 화요일의 방문자 수의 합은 모두 몇 명인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 280 120" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <line x1="75" y1="10" x2="75" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                      <line x1="10" y1="48" x2="270" y2="48" stroke="#cbd5e1" stroke-width="1.5"/>
                      <line x1="10" y1="85" x2="270" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                      <text x="20" y="34" fill="#1e293b" font-size="13" font-weight="bold">월요일</text>
                      <circle cx="100" cy="29" r="11" fill="#2563eb"/><circle cx="128" cy="29" r="11" fill="#2563eb"/>
                      <circle cx="154" cy="32" r="6" fill="#60a5fa"/><circle cx="172" cy="32" r="6" fill="#60a5fa"/><circle cx="190" cy="32" r="6" fill="#60a5fa"/>
                      <text x="20" y="72" fill="#1e293b" font-size="13" font-weight="bold">화요일</text>
                      <circle cx="100" cy="67" r="11" fill="#2563eb"/><circle cx="128" cy="67" r="11" fill="#2563eb"/><circle cx="156" cy="67" r="11" fill="#2563eb"/>
                      <circle cx="182" cy="70" r="6" fill="#60a5fa"/><circle cx="200" cy="70" r="6" fill="#60a5fa"/>
                      <circle cx="65" cy="103" r="8" fill="#2563eb"/><text x="78" y="107" fill="#334155" font-size="11" font-weight="bold">: 10명</text>
                      <circle cx="155" cy="104" r="5" fill="#60a5fa"/><text x="165" y="107" fill="#334155" font-size="11" font-weight="bold">: 1명</text>
                    </svg>
                  </div>`,
              ans: "55",
              accept: ["55명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "먼저 월요일 방문자 수(큰 원 2개, 작은 원 3개)와 화요일 방문자 수(큰 원 3개, 작은 원 2개)를 각각 구해 보세요.",
              h2: "월요일(23명)과 화요일(32명)을 더해 보세요.",
              checkTip: "월요일(23명) + 화요일(32명) = 55명입니다.",
              wrongDiag: {
                "10": "그림의 총개수(5개+5개=10개)만 세었어요! 큰 원은 10명, 작은 원은 1명으로 계산해야 합니다.",
                "23": "월요일 방문자 수만 구했어요! 화요일 방문자 수(32명)까지 더해보세요.",
                "32": "화요일 방문자 수만 구했어요! 월요일 방문자 수(23명)까지 더해보세요."
              },
              diagDefault: "월요일(23명)과 화요일(32명)을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 월요일 방문자 수는 큰 원 2개(20명)와 작은 원 3개(3명)이므로 몇 명인가요?", ans: "23" },
                { q: "2계단: 화요일 방문자 수는 큰 원 3개(30명)와 작은 원 2개(2명)이므로 몇 명인가요?", ans: "32" },
                { q: "3계단: 두 요일의 방문자 수를 합하면 모두 몇 명인가요?", ans: "55" }
              ]
            },
            {
              q: `[유형 1] 다음 도서관 방문자 수 그림그래프에서 화요일 방문자 수는 월요일 방문자 수보다 몇 명 더 많은가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 280 120" style="width:100%; max-width:280px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <line x1="75" y1="10" x2="75" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                      <line x1="10" y1="48" x2="270" y2="48" stroke="#cbd5e1" stroke-width="1.5"/>
                      <line x1="10" y1="85" x2="270" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
                      <text x="20" y="34" fill="#1e293b" font-size="13" font-weight="bold">월요일</text>
                      <circle cx="100" cy="29" r="11" fill="#2563eb"/><circle cx="128" cy="29" r="11" fill="#2563eb"/>
                      <circle cx="154" cy="32" r="6" fill="#60a5fa"/><circle cx="172" cy="32" r="6" fill="#60a5fa"/><circle cx="190" cy="32" r="6" fill="#60a5fa"/>
                      <text x="20" y="72" fill="#1e293b" font-size="13" font-weight="bold">화요일</text>
                      <circle cx="100" cy="67" r="11" fill="#2563eb"/><circle cx="128" cy="67" r="11" fill="#2563eb"/><circle cx="156" cy="67" r="11" fill="#2563eb"/>
                      <circle cx="182" cy="70" r="6" fill="#60a5fa"/><circle cx="200" cy="70" r="6" fill="#60a5fa"/>
                      <circle cx="65" cy="103" r="8" fill="#2563eb"/><text x="78" y="107" fill="#334155" font-size="11" font-weight="bold">: 10명</text>
                      <circle cx="155" cy="104" r="5" fill="#60a5fa"/><text x="165" y="107" fill="#334155" font-size="11" font-weight="bold">: 1명</text>
                    </svg>
                  </div>`,
              ans: "9",
              accept: ["9명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "화요일 방문자 수(32명)에서 월요일 방문자 수(23명)를 빼 보세요.",
              h2: "32 - 23 을 계산해 보세요.",
              checkTip: "화요일(32명) - 월요일(23명) = 9명입니다.",
              wrongDiag: {
                "0": "그림의 개수는 둘 다 5개로 같지만, 큰 원과 작은 원의 개수가 달라서 실제 인원수는 다릅니다! 32 - 23 을 계산해 보세요."
              },
              diagDefault: "화요일(32명)에서 월요일(23명)을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 화요일 방문자 수는 몇 명인가요?", ans: "32" },
                { q: "2계단: 월요일 방문자 수(23명)를 빼면 32 - 23 = 몇 명인가요?", ans: "9" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 큰 그림 1개가 100명, 작은 그림 1개가 10명을 나타내는 그림그래프가 있습니다. (가) 지역에는 큰 그림 2개와 작은 그림 5개가 그려져 있는데, 민수가 그림 개수만 세어 '7명'이라고 잘못 읽었습니다. (가) 지역의 올바른 인원수는 몇 명인가요?",
              ans: "250",
              accept: ["250명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "큰 그림 1개는 100명이고, 작은 그림 1개는 10명입니다!",
              h2: "(100 × 2) + (10 × 5) 를 계산해 보세요.",
              checkTip: "큰 그림 2개(200명) + 작은 그림 5개(50명) = 250명입니다.",
              wrongDiag: {
                "25": "큰 그림이 10명이 아니라 100명이고, 작은 그림이 10명입니다! 0을 하나 더 붙여야 해요.",
                "7": "7은 민수가 잘못 읽은 그림의 개수예요!"
              },
              diagDefault: "100명짜리 2개(200명)와 10명짜리 5개(50명)를 더해 보세요.",
              steps: [
                { q: "1계단: 100명을 나타내는 큰 그림 2개는 몇 명인가요?", ans: "200" },
                { q: "2계단: 10명을 나타내는 작은 그림 5개(50명)를 더하면 모두 몇 명인가요?", ans: "250" }
              ]
            },
            {
              q: "[유형 2] 큰 그림 1개가 10권, 작은 그림 1개가 1권을 나타내는 그림그래프에서, 지훈이는 큰 그림 1개와 작은 그림 6개가 그려진 칸을 보고, 수연이는 큰 그림 2개와 작은 그림 5개가 그려진 칸을 보았습니다. 두 칸의 전체 그림 개수는 모두 7개로 같지만, 실제 책의 권수는 몇 권 차이가 나나요?",
              ans: "9",
              accept: ["9권"],
              unit: "권",
              placeholder: "숫자만 입력",
              h1: "지훈이가 본 칸은 10 + 6 = 16권이고, 수연이가 본 칸은 20 + 5 = 25권입니다.",
              h2: "25권에서 16권을 빼 보세요.",
              checkTip: "수연(25권) - 지훈(16권) = 9권 차이가 납니다.",
              wrongDiag: {
                "0": "그림의 총개수는 둘 다 7개로 같지만, 큰 그림의 개수가 달라서 실제 권수는 차이가 납니다! 25 - 16 을 계산해 보세요."
              },
              diagDefault: "25권에서 16권을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 큰 그림 1개, 작은 그림 6개인 칸은 몇 권인가요?", ans: "16" },
                { q: "2계단: 큰 그림 2개, 작은 그림 5개인 칸은 몇 권인가요?", ans: "25" },
                { q: "3계단: 두 권수의 차는 25 - 16 = 몇 권인가요?", ans: "9" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 표에 조사된 (가) 도시의 도서관 수가 32개이고, (나) 도시의 도서관 수가 19개입니다. 큰 그림 1개를 10개, 작은 그림 1개를 1개로 하여 두 도시의 도서관 수를 그림그래프에 모두 나타내려면, 작은 그림(1개 단위)은 합하여 모두 몇 개 그려야 하나요?",
              ans: "11",
              accept: ["11개"],
              unit: "개",
              placeholder: "숫자만 입력",
              h1: "(가) 도시(32개)에서 일의 자리 숫자는 2이고, (나) 도시(19개)에서 일의 자리 숫자는 9입니다!",
              h2: "(가) 도시에 그릴 작은 그림(2개)과 (나) 도시에 그릴 작은 그림(9개)을 더해 보세요.",
              checkTip: "(가) 도시에 작은 그림 2개 + (나) 도시에 작은 그림 9개 = 총 11개의 작은 그림을 그려야 합니다.",
              wrongDiag: {
                "1": "두 수를 먼저 더해서(32+19=51) 일의 자리 1을 적으면 안 돼요! 각 도시의 칸에 따로 그림을 그리므로 2개와 9개를 더해야 합니다.",
                "15": "큰 그림(3+1=4개)까지 모두 더했어요! 문제에서는 '작은 그림'만 몇 개 그려야 하는지 묻고 있습니다."
              },
              diagDefault: "(가) 도시의 작은 그림 2개와 (나) 도시의 작은 그림 9개를 더해 보세요.",
              steps: [
                { q: "1계단: 32개를 나타낼 때 1개짜리 작은 그림은 몇 개 그려야 하나요?", ans: "2" },
                { q: "2계단: 19개를 나타낼 때 1개짜리 작은 그림은 몇 개 그려야 하나요?", ans: "9" },
                { q: "3계단: 두 도시에 그려야 할 작은 그림은 모두 몇 개인가요?", ans: "11" }
              ]
            },
            {
              q: "[유형 3] 큰 별이 10점, 작은 별이 1점을 나타내는 그림그래프에서 1모둠은 43점입니다. 2모둠은 1모둠보다 큰 별이 1개 더 많고 작은 별이 2개 더 적다면, 2모둠의 점수는 몇 점인가요?",
              ans: "51",
              accept: ["51점"],
              unit: "점",
              placeholder: "숫자만 입력",
              h1: "1모둠(43점)은 큰 별이 4개, 작은 별이 3개입니다.",
              h2: "2모둠은 큰 별이 4 + 1 = 5개이고, 작은 별이 3 - 2 = 1개입니다. 몇 점인지 구해 보세요.",
              checkTip: "2모둠은 큰 별 5개(50점) + 작은 별 1개(1점) = 51점입니다.",
              wrongDiag: {
                "42": "큰 별 1개는 10점이 늘어난 것이고, 작은 별 2개는 2점이 줄어든 것이에요!"
              },
              diagDefault: "큰 별 5개(50점)와 작은 별 1개(1점)를 합한 점수를 적어 보세요.",
              steps: [
                { q: "1계단: 1모둠(43점)보다 큰 별이 1개 더 많으므로 2모둠의 큰 별은 몇 개인가요?", ans: "5" },
                { q: "2계단: 작은 별이 2개 더 적으므로 2모둠의 작은 별은 3 - 2 = 몇 개인가요?", ans: "1" },
                { q: "3계단: 큰 별 5개와 작은 별 1개가 나타내는 점수는 몇 점인가요?", ans: "51" }
              ]
            }
          ]
        ],
        step4Intro: "그림그래프를 볼 때는 가장 먼저 아래쪽 범례를 보고 '큰 그림 1개와 작은 그림 1개가 각각 얼마를 나타내는지' 동그라미를 치고 시작하세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 큰 원이 10명, 작은 원이 1명을 나타내는 그림그래프에서, 수요일에는 큰 원 3개와 작은 원 5개가 그려져 있고 목요일에는 큰 원 2개와 작은 원 4개가 그려져 있습니다. 두 요일의 방문자 수의 합은 몇 명인가요?",
              ans: "59",
              accept: ["59명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "수요일은 35명이고, 목요일은 24명입니다.",
              h2: "35 + 24 를 계산해 보세요.",
              checkTip: "35 + 24 = 59명입니다.",
              wrongDiag: {},
              diagDefault: "35와 24를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 수요일(35명)과 목요일(24명)을 더하면 몇 명인가요?", ans: "59" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 위 문제에서 수요일 방문자 수(35명)는 목요일 방문자 수(24명)보다 몇 명 더 많은가요?",
              ans: "11",
              accept: ["11명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "35명에서 24명을 빼 보세요.",
              h2: "35 - 24 를 계산해 보세요.",
              checkTip: "35 - 24 = 11명입니다.",
              wrongDiag: {},
              diagDefault: "35에서 24를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 35 - 24 는 얼마인가요?", ans: "11" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 큰 그림 1개가 100명, 작은 그림 1개가 10명을 나타내는 그림그래프에서 큰 그림 4개와 작은 그림 3개가 그려진 지역의 인원수는 몇 명인가요?",
              ans: "430",
              accept: ["430명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "100명짜리 4개(400명)와 10명짜리 3개(30명)를 더해 보세요.",
              h2: "400 + 30 을 계산해 보세요.",
              checkTip: "400 + 30 = 430명입니다.",
              wrongDiag: {
                "43": "큰 그림이 100명, 작은 그림이 10명이므로 430명입니다!"
              },
              diagDefault: "400에 30을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 400 + 30 은 몇 명인가요?", ans: "430" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 큰 그림이 10개, 작은 그림이 1개를 나타낼 때, 큰 그림 3개와 작은 그림 1개인 칸(31개)은 큰 그림 1개와 작은 그림 3개인 칸(13개)보다 몇 개 더 많은가요?",
              ans: "18",
              accept: ["18개"],
              unit: "개",
              placeholder: "숫자만 입력",
              h1: "31개에서 13개를 빼 보세요.",
              h2: "31 - 13 을 계산해 보세요.",
              checkTip: "31 - 13 = 18개 차이가 납니다.",
              wrongDiag: {},
              diagDefault: "31에서 13을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 31 - 13 은 얼마인가요?", ans: "18" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 큰 그림을 10명, 작은 그림을 1명으로 하여 1반(24명)과 2반(27명)을 그림그래프에 각각 나타내려고 합니다. 두 반의 칸에 그려야 하는 '작은 그림(1명 단위)'은 합하여 모두 몇 개인가요?",
              ans: "11",
              accept: ["11개"],
              unit: "개",
              placeholder: "숫자만 입력",
              h1: "1반에는 작은 그림을 4개 그리고, 2반에는 작은 그림을 7개 그립니다.",
              h2: "4 + 7 을 계산해 보세요.",
              checkTip: "4개 + 7개 = 11개입니다.",
              wrongDiag: {},
              diagDefault: "4와 7을 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 1반의 작은 그림(4개)과 2반의 작은 그림(7개)을 더하면 몇 개인가요?", ans: "11" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 큰 별이 10점, 작은 별이 1점을 나타낼 때 가 모둠은 35점입니다. 나 모둠은 가 모둠보다 큰 별이 2개 더 많고 작은 별이 1개 더 적다면, 나 모둠의 점수는 몇 점인가요?",
              ans: "54",
              accept: ["54점"],
              unit: "점",
              placeholder: "숫자만 입력",
              h1: "가 모둠(35점)은 큰 별 3개, 작은 별 5개이므로, 나 모둠은 큰 별 5개, 작은 별 4개입니다.",
              h2: "큰 별 5개(50점)와 작은 별 4개(4점)를 더해 보세요.",
              checkTip: "50 + 4 = 54점입니다.",
              wrongDiag: {},
              diagDefault: "50에 4를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 나 모둠은 큰 별 5개, 작은 별 4개이므로 몇 점인가요?", ans: "54" }
              ]
            }
          ]
        ],
        step5A: {
          q: "조사한 자료의 수를 크기가 다른 그림으로 나타낸 그래프를 [ (1) 그림그래프 / (2) 띠그래프 ] 라고 하며, 자료의 많고 적음을 한눈에 비교하기 편리합니다.",
          ans: "그림그래프",
          numAns: "1",
          hint: "💡 힌트: 숫자 대신 크기가 다른 '그림'을 그려서 나타내는 그래프입니다."
        },
        step5B: {
          sentence: "그림그래프는 그림의 크기로 자료의 수를 나타내며 한눈에 비교하기 편리하다."
        },
        nextUnit: "5-2"
      },
  
      "5-2": {
        title: "5-2차시: 띠그래프를 알아볼까요",
        goal: "전체에 대한 각 부분의 비율을 띠 모양에 나타낸 띠그래프를 읽고, 백분율과 실제 수량을 구합니다.",
        videoUrl: "https://youtube.com/shorts/htsUKdP1-A4?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 띠그래프 읽기와 백분율 합계(100%)</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 115" style="width:100%; max-width:320px; height:auto;">
                <text x="16" y="22" fill="#475569" font-size="11" font-weight="bold">0</text>
                <text x="148" y="22" fill="#475569" font-size="11" font-weight="bold">50</text>
                <text x="275" y="22" fill="#475569" font-size="11" font-weight="bold">100(%)</text>
                <rect x="20" y="30" width="104" height="42" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                <text x="45" y="55" fill="#1e3a8a" font-size="12" font-weight="bold">사과(40%)</text>
                <rect x="124" y="30" width="91" height="42" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                <text x="142" y="55" fill="#854d0e" font-size="12" font-weight="bold">배(35%)</text>
                <rect x="215" y="30" width="65" height="42" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                <text x="220" y="55" fill="#14532d" font-size="11" font-weight="bold">포도(25%)</text>
                <rect x="15" y="82" width="290" height="26" rx="5" fill="#fef2f2" stroke="#f87171" stroke-width="1.2"/>
                <text x="32" y="99" fill="#dc2626" font-size="11" font-weight="bold">핵심: 백분율을 모두 더하면 40 + 35 + 25 = 100%!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>띠그래프:</strong> 전체에 대한 각 부분의 비율을 <strong>띠 모양</strong>에 백분율(%)로 나타낸 그래프입니다.</li>
              <li><strong>중요 규칙 1:</strong> 각 항목의 백분율을 모두 더하면 언제나 <strong>100%</strong>가 됩니다.</li>
              <li><strong>중요 규칙 2:</strong> 항목의 실제 수량 = <strong>(전체 수량) × (백분율 / 100)</strong> 으로 구합니다.</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 큰 그림이 10명, 작은 그림이 1명을 나타내는 그림그래프에서 큰 그림 4개와 작은 그림 5개가 나타내는 인원수는 몇 명인가요?",
            ans: "45",
            accept: ["45명"],
            unit: "명",
            placeholder: "숫자만 입력",
            h1: "10명씩 4개와 1명씩 5개를 더해 보세요.",
            h2: "40 + 5 를 계산해 보세요.",
            checkTip: "40 + 5 = 45명입니다.",
            wrongDiag: {},
            diagDefault: "45를 입력해 보세요.",
            steps: [
              { q: "1계단: 40 + 5 는 몇 명인가요?", ans: "45" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "전체에 대한 각 부분의 비율을 '띠 모양'에 백분율(%)로 나타낸 그래프를 무엇이라고 부르나요?",
            choices: ["1번: 띠그래프", "2번: 원그래프"],
            ans: "1",
            h1: "긴 띠 모양을 칸으로 나누어 나타낸 그래프입니다.",
            h2: "오늘 차시 제목에 있는 그래프 이름을 골라 보세요."
          },
          {
            q: "띠그래프에 나타난 모든 항목의 백분율(%)을 모두 더하면 항상 몇 %가 되나요?",
            choices: ["1번: 50%", "2번: 100%"],
            ans: "2",
            h1: "백분율은 전체(기준량)를 100으로 할 때의 비율입니다.",
            h2: "띠그래프의 오른쪽 끝 눈금에 적힌 숫자를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "전체에 대한 각 부분의 비율을 띠 모양에 나타낸 그래프를 [ ① ]라고 합니다.",
            ans: "띠그래프",
            h1: "긴 띠 모양으로 그린 비율 그래프의 이름(네 글자)입니다.",
            h2: "오늘 배우는 네 글자 그래프 이름을 적어 보세요."
          },
          {
            q: "좋아하는 계절을 조사한 띠그래프에서 봄이 30%, 여름이 25%, 가을이 25%일 때, 나머지 겨울의 백분율은 100%에서 세 계절의 합(80%)을 뺀 [ ① ]%입니다.",
            ans: "20",
            h1: "모든 항목의 백분율 합계는 항상 100%입니다.",
            h2: "100에서 80을 뺀 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 학생들의 장래 희망을 조사하여 나타낸 띠그래프입니다. '의사'를 희망하는 학생은 전체의 몇 %인지 구해 보세요.
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 320 90" style="width:100%; max-width:320px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <text x="16" y="22" fill="#475569" font-size="11" font-weight="bold">0</text>
                    <text x="148" y="22" fill="#475569" font-size="11" font-weight="bold">50</text>
                    <text x="275" y="22" fill="#475569" font-size="11" font-weight="bold">100(%)</text>
                    <rect x="20" y="30" width="91" height="42" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="28" y="55" fill="#1e3a8a" font-size="11" font-weight="bold">운동선수(35%)</text>
                    <rect x="111" y="30" width="78" height="42" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="120" y="55" fill="#854d0e" font-size="11" font-weight="bold">요리사(30%)</text>
                    <rect x="189" y="30" width="52" height="42" fill="#fdba74" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="192" y="55" fill="#9a3412" font-size="11" font-weight="bold">의사(?%)</text>
                    <rect x="241" y="30" width="39" height="42" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
                    <text x="249" y="48" fill="#334155" font-size="10" font-weight="bold">기타</text>
                    <text x="247" y="63" fill="#334155" font-size="10" font-weight="bold">15%</text>
                  </svg>
                </div>`,
            ans: "20",
            accept: ["20%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "전체 합계 100%에서 운동선수(35%), 요리사(30%), 기타(15%)의 백분율을 모두 빼면 됩니다!",
            h2: "35 + 30 + 15 = 80(%) 이므로, 100에서 80을 빼 보세요.",
            checkTip: "100 - (35 + 30 + 15) = 100 - 80 = 20(%)입니다.",
            wrongDiag: {
              "80": "80%는 나머지 세 항목을 더한 값이에요! 전체 100%에서 80%를 빼야 의사의 비율이 나옵니다."
            },
            diagDefault: "100에서 나머지 세 항목의 합(80)을 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 의사를 제외한 나머지 세 항목의 백분율 합은 35 + 30 + 15 = 몇 %인가요?", ans: "80" },
              { q: "2계단: 전체 100%에서 80%를 빼면 의사는 몇 %인가요?", ans: "20" }
            ]
          },
          {
            q: "위 장래 희망 조사에 참여한 전체 학생이 200명일 때, '요리사(30%)'를 희망하는 학생은 실제로 몇 명인지 구해 보세요.",
            ans: "60",
            accept: ["60명"],
            unit: "명",
            placeholder: "숫자만 입력",
            h1: "전체 200명의 30%이므로 200 × 0.3 을 계산하면 됩니다.",
            h2: "100명당 30명이므로, 200명일 때는 30 × 2 를 계산해 보세요.",
            checkTip: "200명의 30% = 200 × 0.3 = 60명입니다.",
            wrongDiag: {
              "30": "30은 백분율(30%)이에요! 전체 학생이 200명이므로 200 × 0.3 을 계산해야 합니다."
            },
            diagDefault: "200에 0.3을 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 30%를 소수로 나타내면 얼마인가요?", ans: "0.3" },
              { q: "2계단: 전체 200명에 0.3을 곱하면 요리사를 희망하는 학생은 몇 명인가요?", ans: "60" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음은 좋아하는 과목별 학생 비율을 나타낸 띠그래프입니다. 가장 많은 학생이 좋아하는 과목과 가장 적은 학생이 좋아하는 과목의 백분율의 차는 몇 %인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 320 90" style="width:100%; max-width:320px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="16" y="22" fill="#475569" font-size="11" font-weight="bold">0</text>
                      <text x="148" y="22" fill="#475569" font-size="11" font-weight="bold">50</text>
                      <text x="275" y="22" fill="#475569" font-size="11" font-weight="bold">100(%)</text>
                      <rect x="20" y="30" width="104" height="42" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="45" y="55" fill="#1e3a8a" font-size="12" font-weight="bold">체육(40%)</text>
                      <rect x="124" y="30" width="78" height="42" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="138" y="55" fill="#854d0e" font-size="12" font-weight="bold">수학(30%)</text>
                      <rect x="202" y="30" width="52" height="42" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="204" y="55" fill="#14532d" font-size="11" font-weight="bold">미술(20%)</text>
                      <rect x="254" y="30" width="26" height="42" fill="#cbd5e1" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="257" y="48" fill="#334155" font-size="10" font-weight="bold">국어</text>
                      <text x="257" y="63" fill="#334155" font-size="9" font-weight="bold">10%</text>
                    </svg>
                  </div>`,
              ans: "30",
              accept: ["30%", "30%p"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "가장 높은 과목은 체육(40%)이고, 가장 낮은 과목은 국어(10%)입니다.",
              h2: "40에서 10을 빼 보세요.",
              checkTip: "체육(40%)과 국어(10%)의 백분율의 차는 40% - 10% = 30%입니다.",
              wrongDiag: {
                "40": "체육의 비율(40%)만 적었어요! 가장 적은 국어(10%)와의 차를 구해 보세요.",
                "20": "미술(20%)을 뺐어요! 가장 적은 과목은 국어(10%)입니다."
              },
              diagDefault: "40에서 10을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 가장 비율이 높은 체육은 몇 %인가요?", ans: "40" },
                { q: "2계단: 가장 비율이 낮은 국어(10%)와의 차는 40 - 10 = 얼마인가요?", ans: "30" }
              ]
            },
            {
              q: "[유형 1] 어떤 띠그래프에서 '체육'의 비율이 40%이고 '국어'의 비율이 10%일 때, 체육을 좋아하는 학생의 비율은 국어를 좋아하는 학생의 비율의 몇 배인가요?",
              ans: "4",
              accept: ["4배"],
              unit: "배",
              placeholder: "숫자만 입력",
              h1: "체육의 비율(40%)을 국어의 비율(10%)로 나누어 보세요.",
              h2: "40 ÷ 10 을 계산해 보세요.",
              checkTip: "40 ÷ 10 = 4(배)입니다.",
              wrongDiag: {
                "30": "30은 뺄셈으로 구한 차예요! 몇 배인지 물었으므로 40 ÷ 10 을 계산해야 합니다."
              },
              diagDefault: "40을 10으로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 40 ÷ 10 은 얼마인가요?", ans: "4" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 다음 띠그래프에서 눈금만 보고 '독서' 항목이 차지하는 비율은 몇 %인지 구해 보세요. (독서 칸이 시작하는 눈금과 끝나는 눈금을 확인하세요!)
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 320 95" style="width:100%; max-width:320px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <text x="16" y="22" fill="#475569" font-size="11" font-weight="bold">0</text>
                      <text x="104" y="22" fill="#dc2626" font-size="11" font-weight="bold">35</text>
                      <text x="208" y="22" fill="#dc2626" font-size="11" font-weight="bold">75</text>
                      <text x="275" y="22" fill="#475569" font-size="11" font-weight="bold">100(%)</text>
                      <rect x="20" y="30" width="91" height="42" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="48" y="55" fill="#1e3a8a" font-size="12" font-weight="bold">운동</text>
                      <rect x="111" y="30" width="104" height="42" fill="#fde047" stroke="#dc2626" stroke-width="2"/>
                      <text x="142" y="55" fill="#dc2626" font-size="13" font-weight="bold">독서 (?%)</text>
                      <rect x="215" y="30" width="65" height="42" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="235" y="55" fill="#14532d" font-size="12" font-weight="bold">게임</text>
                    </svg>
                  </div>`,
              ans: "40",
              accept: ["40%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "독서 칸이 끝나는 눈금(75)을 그대로 답하면 안 됩니다! 독서 칸이 시작하는 눈금(35)을 빼야 독서 칸의 길이가 나옵니다.",
              h2: "끝나는 눈금(75)에서 시작하는 눈금(35)을 빼 보세요(75 - 35).",
              checkTip: "독서 칸은 눈금 35에서 시작하여 75에서 끝나므로 75 - 35 = 40(%)입니다.",
              wrongDiag: {
                "75": "앗! 75는 처음(0)부터 독서 끝까지의 누적 눈금이에요! 독서 칸만의 비율은 끝 눈금(75)에서 시작 눈금(35)을 빼야 합니다.",
                "35": "35%는 앞에 있는 '운동' 항목의 비율입니다! 75 - 35 를 계산해 보세요."
              },
              diagDefault: "독서 칸이 끝나는 눈금(75)에서 시작하는 눈금(35)을 빼 보세요.",
              steps: [
                { q: "1계단: 독서 칸이 끝나는 오른쪽 눈금은 얼마인가요?", ans: "75" },
                { q: "2계단: 여기서 시작하는 왼쪽 눈금(35)을 빼면 독서는 몇 %인가요?", ans: "40" }
              ]
            },
            {
              q: "[유형 2] 혈액형 비율을 나타낸 띠그래프에서 A형이 34%, B형이 27%, O형이 28%입니다. 나머지 AB형의 비율은 몇 %인가요?",
              ans: "11",
              accept: ["11%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "전체 100%에서 A형, B형, O형의 백분율 합을 빼면 됩니다.",
              h2: "34 + 27 + 28 = 89 이므로, 100 - 89 를 계산해 보세요.",
              checkTip: "100 - (34 + 27 + 28) = 100 - 89 = 11(%)입니다.",
              wrongDiag: {
                "89": "89%는 세 혈액형을 합한 값이에요! 100에서 89를 빼 보세요."
              },
              diagDefault: "100에서 89를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: A형(34), B형(27), O형(28)을 모두 더하면 얼마인가요?", ans: "89" },
                { q: "2계단: 100에서 89를 빼면 AB형은 몇 %인가요?", ans: "11" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 6학년 학생 150명을 대상으로 좋아하는 동물을 조사한 띠그래프에서 '강아지'가 40%, '고양이'가 30%를 차지했습니다. 강아지를 좋아하는 학생은 고양이를 좋아하는 학생보다 실제로 몇 명 더 많은가요?",
              ans: "15",
              accept: ["15명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "백분율 차이가 40% - 30% = 10%이므로, 전체 150명의 10%를 구하면 바로 알 수 있습니다! (또는 각각 인원수를 구해 빼도 됩니다.)",
              h2: "강아지(150 × 0.4 = 60명)에서 고양이(150 × 0.3 = 45명)를 빼 보세요.",
              checkTip: "강아지(60명) - 고양이(45명) = 15명 더 많습니다.",
              wrongDiag: {
                "10": "10은 백분율(%)의 차이예요! 전체 학생이 150명이므로 150명의 10%인 15명을 답해야 합니다.",
                "60": "60명은 강아지를 좋아하는 학생 수예요! 고양이를 좋아하는 학생 수(45명)와의 차이를 구해 보세요."
              },
              diagDefault: "강아지(60명)에서 고양이(45명)를 뺀 인원수를 적어 보세요.",
              steps: [
                { q: "1계단: 전체 150명 중 강아지(40%)를 좋아하는 학생은 150 × 0.4 = 몇 명인가요?", ans: "60" },
                { q: "2계단: 고양이(30%)를 좋아하는 학생은 150 × 0.3 = 몇 명인가요?", ans: "45" },
                { q: "3계단: 두 학생 수의 차이는 60 - 45 = 몇 명인가요?", ans: "15" }
              ]
            },
            {
              q: "[유형 3] 전체 학생 300명을 조사한 띠그래프에서 '태권도'를 선택한 학생이 25%였습니다. 태권도를 선택한 학생은 실제로 몇 명인가요?",
              ans: "75",
              accept: ["75명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "전체 300명의 25%이므로 300 × 0.25 를 계산합니다.",
              h2: "100명당 25명이므로 300명일 때는 25 × 3 을 계산해 보세요.",
              checkTip: "300 × 0.25 = 75명입니다.",
              wrongDiag: {
                "25": "25는 백분율(25%)이에요! 전체가 300명이므로 25 × 3 = 75명입니다."
              },
              diagDefault: "300에 0.25를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 100명당 25명이므로 전체가 300명이면 25 × 3 = 몇 명인가요?", ans: "75" }
              ]
            }
          ]
        ],
        step4Intro: "띠그래프에서 중간에 있는 항목의 비율을 읽을 때는 (끝나는 눈금) - (시작하는 눈금)으로 계산한다는 점을 꼭 기억하세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 좋아하는 계절 띠그래프에서 가장 높은 봄(45%)과 가장 낮은 겨울(15%)의 두 백분율의 차는 몇 %인가요?",
              ans: "30",
              accept: ["30%", "30%p"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "45에서 15를 빼 보세요.",
              h2: "45 - 15 를 계산해 보세요.",
              checkTip: "45% - 15% = 30%입니다.",
              wrongDiag: {},
              diagDefault: "45에서 15를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 45 - 15 는 얼마인가요?", ans: "30" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 위 띠그래프에서 봄(45%)을 좋아하는 학생의 비율은 겨울(15%)을 좋아하는 학생의 비율의 몇 배인가요?",
              ans: "3",
              accept: ["3배"],
              unit: "배",
              placeholder: "숫자만 입력",
              h1: "45 ÷ 15 를 계산해 보세요.",
              h2: "45 안에 15가 몇 번 들어가는지 적어 보세요.",
              checkTip: "45 ÷ 15 = 3(배)입니다.",
              wrongDiag: {},
              diagDefault: "45를 15로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 45 ÷ 15 는 얼마인가요?", ans: "3" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 띠그래프에서 '음악 감상' 칸이 눈금 25에서 시작하여 눈금 60에서 끝납니다. 음악 감상이 차지하는 비율은 전체의 몇 %인가요?",
              ans: "35",
              accept: ["35%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "끝나는 눈금(60)에서 시작하는 눈금(25)을 빼야 합니다.",
              h2: "60 - 25 를 계산해 보세요.",
              checkTip: "60 - 25 = 35(%)입니다.",
              wrongDiag: {
                "60": "60에서 시작 눈금 25를 빼야 합니다!"
              },
              diagDefault: "60에서 25를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 60 - 25 는 얼마인가요?", ans: "35" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 네 가지 과일의 선호도를 나타낸 띠그래프에서 사과가 35%, 딸기가 28%, 포도가 22%입니다. 나머지 귤의 비율은 몇 %인가요?",
              ans: "15",
              accept: ["15%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "100에서 (35 + 28 + 22 = 85)를 빼 보세요.",
              h2: "100 - 85 를 계산해 보세요.",
              checkTip: "100 - 85 = 15(%)입니다.",
              wrongDiag: {},
              diagDefault: "100에서 85를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 세 과일의 합은 35 + 28 + 22 = 85 입니다. 100 - 85 는 얼마인가요?", ans: "15" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 전체 학생 200명을 조사한 띠그래프에서 '축구'가 35%, '야구'가 20%였습니다. 축구를 좋아하는 학생은 야구를 좋아하는 학생보다 실제로 몇 명 더 많은가요?",
              ans: "30",
              accept: ["30명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "축구(200 × 0.35 = 70명)에서 야구(200 × 0.20 = 40명)를 빼 보세요.",
              h2: "70 - 40 을 계산해 보세요.",
              checkTip: "축구(70명) - 야구(40명) = 30명입니다.",
              wrongDiag: {
                "15": "15는 백분율 차이(15%)예요! 전체가 200명이므로 30명 차이가 납니다."
              },
              diagDefault: "70에서 40을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 축구(70명)에서 야구(40명)를 빼면 몇 명인가요?", ans: "30" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 전체 학생 400명을 조사한 띠그래프에서 '수영'을 선택한 학생이 15%였습니다. 수영을 선택한 학생은 실제로 몇 명인가요?",
              ans: "60",
              accept: ["60명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "400명의 15%이므로 400 × 0.15 (즉 15 × 4)를 계산합니다.",
              h2: "15 × 4 를 계산해 보세요.",
              checkTip: "400 × 0.15 = 60명입니다.",
              wrongDiag: {},
              diagDefault: "15에 4를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 15 × 4 는 몇 명인가요?", ans: "60" }
              ]
            }
          ]
        ],
        step5A: {
          q: "전체에 대한 각 부분의 비율을 띠 모양에 백분율로 나타낸 그래프를 띠그래프라고 하며, 각 항목의 백분율을 모두 더하면 항상 [ (1) 50% / (2) 100% ] 가 됩니다.",
          ans: "100%",
          numAns: "2",
          hint: "💡 힌트: 백분율은 전체 기준량을 얼마로 놓은 비율인지 떠올려 보세요."
        },
        step5B: {
          sentence: "띠그래프는 전체에 대한 각 부분의 비율을 띠 모양에 나타내며 백분율의 합은 항상 백 퍼센트이다."
        },
        nextUnit: "5-3"
      },
  
      "5-3": {
        title: "5-3차시: 띠그래프로 나타내어 볼까요",
        goal: "조사한 자료의 표를 보고 각 항목의 백분율을 구하여 합계가 100%인지 확인하고 띠그래프를 완성합니다.",
        videoUrl: "https://youtube.com/shorts/RluQ_akwDjQ?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 표를 보고 띠그래프를 그리는 4단계 순서</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 120" style="width:100%; max-width:320px; height:auto;">
                <rect x="10" y="10" width="300" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
                <text x="18" y="31" fill="#1e3a8a" font-size="11" font-weight="bold">1단계: 전체 수에 대한 각 항목의 백분율(%) 구하기</text>
                <rect x="10" y="48" width="300" height="32" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
                <text x="18" y="69" fill="#854d0e" font-size="11" font-weight="bold">2단계: 각 항목의 백분율 합계가 100%가 되는지 확인!</text>
                <rect x="10" y="86" width="300" height="28" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                <text x="18" y="105" fill="#14532d" font-size="11" font-weight="bold">3·4단계: 백분율만큼 선을 그어 나누고 항목·백분율 쓰기</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>백분율 구하기:</strong> (각 항목의 수 ÷ 전체 합계)에 <strong>100</strong>을 곱하여 나온 수에 <strong>%</strong>를 붙입니다.</li>
              <li><strong>구분선 긋기:</strong> 첫 번째 항목이 40%, 두 번째 항목이 35%라면 구분선은 눈금 <strong>40</strong>과 <strong>75(40+35)</strong>에 긋습니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 세 항목으로 이루어진 띠그래프에서 가 항목이 45%, 나 항목이 35%일 때, 다 항목은 몇 %인가요?",
            ans: "20",
            accept: ["20%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "100에서 (45 + 35)를 빼 보세요.",
            h2: "100 - 80 을 계산해 보세요.",
            checkTip: "100 - 80 = 20(%)입니다.",
            wrongDiag: {},
            diagDefault: "20을 입력해 보세요.",
            steps: [
              { q: "1계단: 100 - 80 은 얼마인가요?", ans: "20" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "조사한 자료를 보고 띠그래프를 그릴 때, 가장 먼저 구해야 하는 것은 무엇인가요?",
            choices: ["1번: 전체 수에 대한 각 항목의 백분율(%)", "2번: 큰 그림과 작은 그림의 크기"],
            ans: "1",
            h1: "띠그래프는 눈금이 0부터 100(%)까지 있는 비율 그래프입니다.",
            h2: "각 항목이 몇 %를 차지하는지 먼저 구하는 보기를 골라 보세요."
          },
          {
            q: "띠그래프에서 큰 눈금과 작은 눈금을 확인했더니 작은 눈금 1칸이 '5%'를 나타냅니다. 그렇다면 '20%'인 항목은 작은 눈금을 몇 칸 칠해야 하나요?",
            choices: ["1번: 4칸", "2번: 20칸"],
            ans: "1",
            h1: "1칸이 5%이므로 20% 안에 5%가 몇 번 들어가는지 나누어 보세요.",
            h2: "20 ÷ 5 를 계산한 칸 수를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "전체 학생 50명 중 김밥을 좋아하는 학생이 18명입니다. 전체에 대한 김밥의 비율은 분수로 50분의 18(100분의 36)이므로 백분율은 [ ① ]%입니다.",
            ans: "36",
            h1: "50명이 100%가 되려면 2배를 해야 하므로 18에도 2를 곱합니다.",
            h2: "18 × 2 의 값을 숫자로 적어 보세요."
          },
          {
            q: "띠그래프를 그리기 위해 각 항목의 백분율을 모두 구한 뒤에는, 구한 백분율들의 합계가 정확히 [ ① ]%가 되는지 반드시 확인해야 합니다.",
            ans: "100",
            h1: "모든 항목의 백분율을 더했을 때 나와야 하는 전체 기준량입니다.",
            h2: "백분율의 전체 합계를 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 6학년 학생 40명이 좋아하는 민속놀이를 조사한 표입니다. '윷놀이(14명)'의 백분율은 몇 %인지 구해 보세요.
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem; text-align:center; background:#fff; border:1px solid #cbd5e1;">
                  <tr style="background:#e0f2fe; font-weight:bold;">
                    <td style="padding:6px; border:1px solid #cbd5e1;">민속놀이</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">윷놀이</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">제기차기</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">연날리기</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">합계</td>
                  </tr>
                  <tr>
                    <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">학생 수(명)</td>
                    <td style="padding:6px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;">14</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">16</td>
                    <td style="padding:6px; border:1px solid #cbd5e1;">10</td>
                    <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">40</td>
                  </tr>
                </table>`,
            ans: "35",
            accept: ["35%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "전체 합계가 40명이므로 비율은 분수로 40분의 14입니다. 먼저 2로 약분하여 20분의 7로 만들어 보세요!",
            h2: "20분의 7에 100을 곱하면(7 × 5) 얼마인지 계산해 보세요.",
            checkTip: "14/40 = 7/20 = 35/100 이므로 윷놀이의 백분율은 35%입니다.",
            wrongDiag: {
              "14": "14는 학생 수(명)예요! 전체 40명에 대한 백분율((14/40) × 100)을 구해 보세요."
            },
            diagDefault: "40분의 14를 20분의 7로 약분한 뒤 100을 곱해 보세요.",
            steps: [
              { q: "1계단: 분수 40분의 14를 2로 약분하면 20분의 얼마인가요?", ans: "7" },
              { q: "2계단: 20분의 7에 100을 곱하면(7 × 5) 몇 %인가요?", ans: "35" }
            ]
          },
          {
            q: "위 민속놀이 표에서 윷놀이는 35%, 제기차기는 40%, 연날리기는 25%입니다. 이를 왼쪽부터 차례대로 띠그래프에 나타내려고 할 때, 첫 번째 구분선은 눈금 35에 긋고, 제기차기와 연날리기를 나누는 '두 번째 구분선'은 눈금 얼마에 그어야 하나요?",
            ans: "75",
            accept: ["75%", "눈금 75"],
            placeholder: "눈금 숫자만 입력",
            h1: "두 번째 구분선은 왼쪽에서부터 윷놀이(35%)와 제기차기(40%)를 합한 누적 눈금 위치에 그어야 합니다!",
            h2: "35에 40을 더한 눈금 위치를 구해 보세요(35 + 40).",
            checkTip: "윷놀이(35%) 다음에 제기차기(40%)가 이어지므로 두 번째 구분선은 35 + 40 = 75 눈금에 그어야 합니다.",
            wrongDiag: {
              "40": "40은 제기차기의 비율이에요! 눈금 35에서 오른쪽으로 40만큼 더 간 위치(35+40)에 선을 그어야 합니다."
            },
            diagDefault: "35에 40을 더한 누적 눈금을 입력해 보세요.",
            steps: [
              { q: "1계단: 첫 번째 구분선 눈금(35)에서 제기차기 비율(40)만큼 오른쪽으로 더 가면 눈금 얼마에 선을 그어야 하나요?", ans: "75" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: `[유형 1] 다음은 도서관에 있는 책 200권의 종류를 조사한 표입니다. 빈칸 (가)에 들어갈 '과학책(50권)'의 백분율은 몇 %인가요?
                  <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem; text-align:center; background:#fff; border:1px solid #cbd5e1;">
                    <tr style="background:#e0f2fe; font-weight:bold;">
                      <td style="padding:6px; border:1px solid #cbd5e1;">종류</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">동화책</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">과학책</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">위인전</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">합계</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">권수(권)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">90</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">50</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">60</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">200</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">백분율(%)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">45</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; color:#dc2626; font-weight:bold;">(가)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">30</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">100</td>
                    </tr>
                  </table>`,
              ans: "25",
              accept: ["25%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "전체가 200권이므로 200분의 50을 약분하여 분모를 100으로 만들거나, 합계 100%에서 (45 + 30)을 빼도 됩니다!",
              h2: "50 ÷ 2 를 계산하거나 100 - 75 를 계산해 보세요.",
              checkTip: "50/200 = 25/100 이므로 과학책의 백분율은 25%입니다.",
              wrongDiag: {
                "50": "50은 책의 권수예요! 전체가 200권이므로 백분율은 절반인 25%입니다."
              },
              diagDefault: "200분의 50을 분모가 100인 분수로 바꾸어 분자를 적어 보세요.",
              steps: [
                { q: "1계단: 분수 200분의 50의 분모와 분자를 2로 나누면 100분의 얼마인가요?", ans: "25" }
              ]
            },
            {
              q: `[유형 1] 다음은 과수원의 과일나무 50그루를 조사한 표입니다. '감나무'의 백분율은 몇 %인가요?
                  <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem; text-align:center; background:#fff; border:1px solid #cbd5e1;">
                    <tr style="background:#e0f2fe; font-weight:bold;">
                      <td style="padding:6px; border:1px solid #cbd5e1;">나무</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">사과나무</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">배나무</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">감나무</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">합계</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">나무 수(그루)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">22</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">15</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;">13</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">50</td>
                    </tr>
                  </table>`,
              ans: "26",
              accept: ["26%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "전체 합계가 50그루이므로, 분수 50분의 13의 분모와 분자에 2를 곱하면 분모가 100이 됩니다!",
              h2: "13 × 2 를 계산해 보세요.",
              checkTip: "13/50 = 26/100 이므로 감나무의 백분율은 26%입니다.",
              wrongDiag: {
                "13": "13은 나무의 그루 수예요! 전체가 50그루이므로 100을 기준으로 하면 13 × 2 = 26%가 됩니다."
              },
              diagDefault: "13에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 분모 50을 100으로 만들려면 분자 13에 2를 곱합니다. 13 × 2 는 얼마인가요?", ans: "26" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 전체 학생 100명에게 가고 싶은 현장체험학습 장소를 조사했더니 놀이공원 45명, 과학관 30명, 박물관 15명, 수목원 6명, 미술관 4명이었습니다. 학생 수가 적은 '수목원'과 '미술관' 두 항목을 합쳐서 '기타' 항목으로 묶어 띠그래프를 그린다면, '기타' 항목의 백분율은 몇 %인가요?",
              ans: "10",
              accept: ["10%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "먼저 수목원(6명)과 미술관(4명)의 학생 수를 합해 보세요.",
              h2: "전체가 100명일 때 기타 인원수(6 + 4 = 10명)가 차지하는 백분율을 구해 보세요.",
              checkTip: "기타 인원수 = 6 + 4 = 10명이고, 전체가 100명이므로 10/100 = 10%입니다.",
              wrongDiag: {
                "6": "수목원(6명)과 미술관(4명)을 합쳐서 기타로 묶었으므로 6 + 4 = 10%가 됩니다!"
              },
              diagDefault: "수목원(6)과 미술관(4)을 더한 백분율을 적어 보세요.",
              steps: [
                { q: "1계단: 수목원(6명)과 미술관(4명)을 합치면 기타는 모두 몇 명인가요?", ans: "10" },
                { q: "2계단: 전체 100명 중 10명이므로 백분율은 몇 %인가요?", ans: "10" }
              ]
            },
            {
              q: "[유형 2] 민지가 표를 보고 네 항목의 백분율을 구했더니 가 항목 38%, 나 항목 27%, 다 항목 20%, 라 항목 13%가 나왔습니다. 네 백분율을 모두 더해보니 합계가 100%보다 몇 % 부족하여 계산 실수가 있었음을 알게 되었나요?",
              ans: "2",
              accept: ["2%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "네 항목의 백분율(38 + 27 + 20 + 13)을 먼저 모두 더해 보세요.",
              h2: "네 수의 합(98%)을 100%에서 빼 보세요.",
              checkTip: "38 + 27 + 20 + 13 = 98(%)이므로 100%보다 2%가 부족합니다.",
              wrongDiag: {
                "98": "98%는 네 항목을 더한 합계예요! 100%보다 몇 % 부족한지 물었으니 100 - 98 을 계산해 보세요."
              },
              diagDefault: "100에서 네 백분율의 합(98)을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 38 + 27 + 20 + 13 을 계산하면 모두 몇 %인가요?", ans: "98" },
                { q: "2계단: 100%가 되려면 100 - 98 = 몇 %가 부족한가요?", ans: "2" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 전체 가로 길이가 20 cm인 띠그래프(0%부터 100%까지)를 그리려고 합니다. 백분율이 '30%'인 항목은 가로 길이를 몇 cm로 그려야 하나요?",
              ans: "6",
              accept: ["6cm", "6 cm"],
              unit: "cm",
              placeholder: "숫자만 입력",
              h1: "전체 길이 20 cm의 30%(0.3)를 구하면 됩니다! (또는 10%당 2 cm씩입니다.)",
              h2: "20 × 0.3 을 계산해 보세요.",
              checkTip: "20 cm의 30% = 20 × 0.3 = 6 cm 입니다.",
              wrongDiag: {
                "3": "전체 길이가 10 cm일 때는 3 cm이지만, 이 띠그래프는 전체 길이가 20 cm이므로 2배인 6 cm를 그려야 합니다!",
                "30": "30은 백분율(30%)이에요! 20 cm 중의 30% 길이를 구해 보세요."
              },
              diagDefault: "20 cm에 0.3을 곱한 길이를 입력해 보세요.",
              steps: [
                { q: "1계단: 100%가 20 cm이므로 10%는 몇 cm인가요?", ans: "2" },
                { q: "2계단: 그렇다면 30%는 2 × 3 = 몇 cm로 그려야 하나요?", ans: "6" }
              ]
            },
            {
              q: "[유형 3] 전체 학생 50명 중에서 혈액형이 O형인 학생이 16명입니다. 이를 작은 눈금 1칸이 '4%'인 띠그래프에 나타내려면, O형은 작은 눈금을 모두 몇 칸 칠해야 하나요?",
              ans: "8",
              accept: ["8칸"],
              unit: "칸",
              placeholder: "숫자만 입력",
              h1: "먼저 O형의 백분율((16/50) × 100 = 32%)을 구한 다음, 1칸의 크기인 4%로 나누어 보세요!",
              h2: "32%를 4%씩 나누면(32 ÷ 4) 몇 칸인지 구해 보세요.",
              checkTip: "O형의 백분율 = 16/50 = 32/100 = 32% ➔ 1칸이 4%이므로 32 ÷ 4 = 8칸입니다.",
              wrongDiag: {
                "32": "32는 O형의 백분율(32%)이에요! 작은 눈금 1칸이 4%이므로 32 ÷ 4 를 계산해 칸 수를 적어 보세요.",
                "16": "16은 O형인 학생 수(16명)예요! 백분율(32%)을 구한 뒤 4%로 나누어야 합니다."
              },
              diagDefault: "O형의 백분율(32%)을 1칸의 크기(4%)로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 50명 중 16명의 백분율은 (16/50) × 100 = 몇 %인가요?", ans: "32" },
                { q: "2계단: 작은 눈금 1칸이 4%이므로 32%를 나타내려면 32 ÷ 4 = 몇 칸을 칠해야 하나요?", ans: "8" }
              ]
            }
          ]
        ],
        step4Intro: "표를 보고 백분율을 구할 때는 분모(전체 합계)를 100으로 만들면 암산으로도 1초 만에 각 항목의 백분율을 구할 수 있어요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 전체 책 200권 중에서 위인전이 70권입니다. 전체 책 수에 대한 위인전 수의 백분율은 몇 %인가요?",
              ans: "35",
              accept: ["35%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "200분의 70을 2로 약분하면 분모가 100이 됩니다.",
              h2: "70 ÷ 2 를 계산해 보세요.",
              checkTip: "70/200 = 35/100 = 35% 입니다.",
              wrongDiag: {},
              diagDefault: "70을 2로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 70 ÷ 2 는 몇 %인가요?", ans: "35" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 전체 과일 50개 중에서 배가 14개입니다. 전체 과일 수에 대한 배의 수의 백분율은 몇 %인가요?",
              ans: "28",
              accept: ["28%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "50분의 14에서 분모와 분자에 2를 곱하면 분모가 100이 됩니다.",
              h2: "14 × 2 를 계산해 보세요.",
              checkTip: "14/50 = 28/100 = 28% 입니다.",
              wrongDiag: {},
              diagDefault: "14에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 14 × 2 는 몇 %인가요?", ans: "28" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 전체 100명에게 좋아하는 간식을 조사했더니 떡볶이 42명, 피자 30명, 치킨 16명, 어묵 7명, 만두 5명이었습니다. 수가 적은 '어묵'과 '만두'를 합쳐 '기타'로 묶는다면, '기타'의 백분율은 몇 %인가요?",
              ans: "12",
              accept: ["12%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "어묵(7명)과 만두(5명)를 더해 보세요.",
              h2: "7 + 5 를 계산해 보세요.",
              checkTip: "7 + 5 = 12명이므로 전체 100명 중 12%입니다.",
              wrongDiag: {},
              diagDefault: "7과 5를 더한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 7 + 5 는 몇 %인가요?", ans: "12" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 네 항목의 백분율을 구했더니 40%, 25%, 18%, 14%가 나왔습니다. 네 백분율의 합계는 100%보다 몇 % 부족한가요?",
              ans: "3",
              accept: ["3%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "네 수의 합(40 + 25 + 18 + 14 = 97)을 100에서 빼 보세요.",
              h2: "100 - 97 을 계산해 보세요.",
              checkTip: "100 - 97 = 3(%) 부족합니다.",
              wrongDiag: {},
              diagDefault: "100에서 97을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 네 수의 합은 97입니다. 100 - 97 은 얼마인가요?", ans: "3" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 전체 가로 길이가 20 cm인 띠그래프(0%부터 100%까지)에서 백분율이 '40%'인 항목은 가로 길이를 몇 cm로 그려야 하나요?",
              ans: "8",
              accept: ["8cm", "8 cm"],
              unit: "cm",
              placeholder: "숫자만 입력",
              h1: "20 cm의 40%(20 × 0.4)를 구하면 됩니다.",
              h2: "20 × 0.4 를 계산해 보세요.",
              checkTip: "20 × 0.4 = 8 cm 입니다.",
              wrongDiag: {},
              diagDefault: "20에 0.4를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 20 × 0.4 는 몇 cm인가요?", ans: "8" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 작은 눈금 1칸이 '5%'를 나타내는 띠그래프에서 백분율이 '45%'인 항목은 작은 눈금을 모두 몇 칸 칠해야 하나요?",
              ans: "9",
              accept: ["9칸"],
              unit: "칸",
              placeholder: "숫자만 입력",
              h1: "45%를 5%로 나누어 보세요.",
              h2: "45 ÷ 5 를 계산해 보세요.",
              checkTip: "45 ÷ 5 = 9칸입니다.",
              wrongDiag: {},
              diagDefault: "45를 5로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 45 ÷ 5 는 몇 칸인가요?", ans: "9" }
              ]
            }
          ]
        ],
        step5A: {
          q: "조사한 자료를 띠그래프로 나타낼 때는 먼저 각 항목의 백분율을 구한 뒤, 각 백분율의 합계가 [ (1) 100% / (2) 200% ] 가 되는지 확인하고 선을 그어 띠를 나눕니다.",
          ans: "100%",
          numAns: "1",
          hint: "💡 힌트: 백분율의 전체 합계가 항상 얼마여야 하는지 떠올려 보세요."
        },
        step5B: {
          sentence: "띠그래프를 그릴 때는 각 항목의 백분율을 구해 합계가 백 퍼센트인지 확인한 뒤 띠를 나눈다."
        },
        nextUnit: "5-4"
      },
  
      "5-4": {
        title: "5-4차시: 원그래프를 알아볼까요 / 원그래프로 나타내어 볼까요",
        goal: "전체에 대한 각 부분의 비율을 원 모양에 나타낸 원그래프의 특징을 알고, 자료를 원그래프로 나타냅니다.",
        videoUrl: "https://youtube.com/shorts/6Hap6hKRjjY?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 원그래프의 특징과 모양으로 비율 찾기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 280 140" style="width:100%; max-width:280px; height:auto;">
                <path d="M 85,70 L 85,15 A 55,55 0 0,0 85,125 Z" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                <path d="M 85,70 L 85,15 A 55,55 0 0,1 140,70 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                <path d="M 85,70 L 140,70 A 55,55 0 0,1 85,125 Z" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
                <polyline points="85,60 95,60 95,70" fill="none" stroke="#dc2626" stroke-width="1.8"/>
                <text x="40" y="74" fill="#1e3a8a" font-size="12" font-weight="bold">반원(50%)</text>
                <text x="93" y="48" fill="#854d0e" font-size="11" font-weight="bold">25%</text>
                <text x="93" y="98" fill="#14532d" font-size="11" font-weight="bold">25%</text>
                <text x="150" y="45" fill="#1d4ed8" font-size="11" font-weight="bold">● 반원(절반) = 50%</text>
                <text x="150" y="75" fill="#dc2626" font-size="11" font-weight="bold">● 직각(1/4원) = 25%</text>
                <text x="150" y="105" fill="#15803d" font-size="11" font-weight="bold">● 전체 합계 = 100%</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>원그래프:</strong> 전체에 대한 각 부분의 비율을 <strong>원 모양</strong>에 백분율(%)로 나타낸 그래프입니다.</li>
              <li><strong>모양 힌트:</strong> 숫자가 적혀 있지 않아도 원의 절반인 <strong>반원은 50%</strong>이고, 중심이 직각(90°)으로 표시된 원의 4분의 1은 <strong>25%</strong>입니다!</li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 전체 학생 50명 중 안경을 쓴 학생이 15명일 때, 전체에 대한 안경 쓴 학생의 백분율은 몇 %인가요?",
            ans: "30",
            accept: ["30%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "50분의 15에서 분모와 분자에 2를 곱하면 분모가 100이 됩니다.",
            h2: "15 × 2 를 계산해 보세요.",
            checkTip: "15/50 = 30/100 = 30% 입니다.",
            wrongDiag: {},
            diagDefault: "15에 2를 곱한 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 15 × 2 는 몇 %인가요?", ans: "30" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "전체에 대한 각 부분의 비율을 '원 모양'에 백분율(%)로 나타낸 그래프를 무엇이라고 부르나요?",
            choices: ["1번: 띠그래프", "2번: 원그래프"],
            ans: "2",
            h1: "둥근 원 모양을 중심에서 선을 그어 나누어 나타낸 그래프입니다.",
            h2: "원 모양의 그래프 이름을 골라 보세요."
          },
          {
            q: "원그래프에서 원의 정확히 4분의 1(중심 부분이 직각으로 표시된 칸)이 나타내는 백분율은 몇 %인가요?",
            choices: ["1번: 25%", "2번: 50%"],
            ans: "1",
            h1: "50%는 원의 절반(반원)이고, 그 절반을 한 번 더 반으로 나눈 것입니다.",
            h2: "100% ÷ 4 를 계산한 값을 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "전체에 대한 각 부분의 비율을 원 모양에 나타낸 그래프를 [ ① ]라고 합니다.",
            ans: "원그래프",
            h1: "오늘 차시 제목에 들어 있는 네 글자 그래프 이름입니다.",
            h2: "둥근 '원' 모양으로 그린 비율 그래프의 이름을 적어 보세요."
          },
          {
            q: "원그래프에서 원의 절반(반원)은 50%를 나타내고, 원의 4분의 1(중심이 직각인 조각)은 [ ① ]%를 나타냅니다.",
            ans: "25",
            h1: "100%를 똑같이 4등분 한 것 중 하나의 크기입니다.",
            h2: "100 ÷ 4 의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 민수네 반 학생들이 좋아하는 운동을 조사하여 나타낸 원그래프입니다. '농구'는 중심 부분이 직각(원의 4분의 1)으로 표시되어 있을 때, 나머지 '배드민턴'을 좋아하는 학생은 전체의 몇 %인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 240 135" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <circle cx="120" cy="68" r="55" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                    <path d="M 120,68 L 120,13 A 55,55 0 0,1 175,68 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                    <path d="M 120,68 L 175,68 A 55,55 0 0,1 103,120 Z" fill="#fdba74" stroke="#1e293b" stroke-width="1.8"/>
                    <polyline points="120,58 130,58 130,68" fill="none" stroke="#dc2626" stroke-width="1.8"/>
                    <text x="64" y="65" fill="#1e3a8a" font-size="12" font-weight="bold">축구(45%)</text>
                    <text x="132" y="48" fill="#854d0e" font-size="12" font-weight="bold">농구</text>
                    <text x="128" y="90" fill="#9a3412" font-size="10" font-weight="bold">배드민턴</text>
                    <text x="134" y="102" fill="#9a3412" font-size="10" font-weight="bold">(?%)</text>
                  </svg>
                </div>`,
            ans: "30",
            accept: ["30%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "농구 칸에 직각 기호가 있으므로 농구의 비율은 25%입니다!",
            h2: "전체 100%에서 축구(45%)와 농구(25%)를 합한 70%를 빼 보세요.",
            checkTip: "직각으로 표시된 농구는 25%이므로, 배드민턴은 100 - (45 + 25) = 30(%)입니다.",
            wrongDiag: {
              "55": "농구의 비율(직각 = 25%)도 빼주어야 해요! 100에서 45와 25를 모두 빼 보세요.",
              "25": "25%는 직각으로 표시된 농구의 비율입니다! 100 - (45 + 25)를 계산해 보세요."
            },
            diagDefault: "100에서 축구(45)와 농구(25)를 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 중심이 직각으로 표시된 '농구'는 전체의 몇 %인가요?", ans: "25" },
              { q: "2계단: 100%에서 축구(45%)와 농구(25%)를 빼면 배드민턴은 몇 %인가요?", ans: "30" }
            ]
          },
          {
            q: "지아의 한 달 용돈은 20000원입니다. 지아의 용돈 쓰임새를 나타낸 원그래프에서 '학용품 구입'이 35%일 때, 학용품을 사는 데 쓴 돈은 실제로 몇 원인가요?",
            ans: "7000",
            accept: ["7000원", "7,000", "7,000원"],
            unit: "원",
            placeholder: "숫자만 입력",
            h1: "전체 용돈 20000원의 35%이므로 20000 × 0.35 를 계산합니다.",
            h2: "200 × 35 를 계산해 보세요.",
            checkTip: "20000 × 0.35 = 7000원입니다.",
            wrongDiag: {
              "3500": "10000원일 때 3500원이고, 용돈이 20000원이므로 2배인 7000원입니다!"
            },
            diagDefault: "20000에 0.35를 곱한 금액을 입력해 보세요.",
            steps: [
              { q: "1계단: 20000원의 10%는 2000원입니다. 그렇다면 35%는 20000 × 0.35 = 몇 원인가요?", ans: "7000" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 독서 동아리 학생 25명이 좋아하는 책 종류를 조사했더니 판타지 소설이 11명, 추리 소설이 8명, 역사 소설이 4명, 과학 도서가 2명이었습니다. 이를 원그래프로 나타낼 때 가장 넓은 면적을 차지하는 '판타지 소설(11명)'의 백분율은 몇 %인가요?",
              ans: "44",
              accept: ["44%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "전체 학생이 25명이므로 비율은 분수로 25분의 11입니다.",
              h2: "분모 25가 100이 되도록 분자 11에 4를 곱해 보세요.",
              checkTip: "11/25 = 44/100 이므로 44%입니다.",
              wrongDiag: {
                "11": "11은 학생 수(명)예요! 전체가 25명이므로 4를 곱해 백분율(44%)로 나타내야 합니다."
              },
              diagDefault: "11에 4를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 25명 중 11명이므로 (11/25) × 100 을 계산하면 몇 %인가요?", ans: "44" }
              ]
            },
            {
              q: `[유형 1] 좋아하는 과일을 조사한 결과 사과가 50%, 배가 25%, 포도가 25%였습니다. 다음 두 원그래프 (가)와 (나) 중에서 이 자료를 바르게 나타낸 원그래프의 기호를 쓰세요.
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 290 135" style="width:100%; max-width:290px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <!-- (가) 사과 50%(반원), 배 25%(직각), 포도 25%(직각) -->
                      <path d="M 75,62 L 75,14 A 48,48 0 0,0 75,110 Z" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <path d="M 75,62 L 75,14 A 48,48 0 0,1 123,62 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <path d="M 75,62 L 123,62 A 48,48 0 0,1 75,110 Z" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="35" y="66" fill="#1e3a8a" font-size="11" font-weight="bold">사과 50%</text>
                      <text x="80" y="45" fill="#854d0e" font-size="10" font-weight="bold">배 25%</text>
                      <text x="78" y="85" fill="#14532d" font-size="10" font-weight="bold">포도 25%</text>
                      <text x="64" y="128" fill="#334155" font-size="13" font-weight="bold">(가)</text>
                      <!-- (나) 사과가 25%, 배가 50%(반원)로 잘못 그려진 원그래프 -->
                      <path d="M 215,62 L 215,14 A 48,48 0 0,0 215,110 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
                      <path d="M 215,62 L 215,14 A 48,48 0 0,1 263,62 Z" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
                      <path d="M 215,62 L 263,62 A 48,48 0 0,1 215,110 Z" fill="#86efac" stroke="#1e293b" stroke-width="1.5"/>
                      <text x="178" y="66" fill="#854d0e" font-size="11" font-weight="bold">배 50%</text>
                      <text x="218" y="45" fill="#1e3a8a" font-size="10" font-weight="bold">사과 25%</text>
                      <text x="218" y="85" fill="#14532d" font-size="10" font-weight="bold">포도 25%</text>
                      <text x="204" y="128" fill="#334155" font-size="13" font-weight="bold">(나)</text>
                    </svg>
                  </div>`,
              ans: "가",
              accept: ["(가)", "가번"],
              placeholder: "기호 입력 (가 또는 나)",
              h1: "사과가 50%이므로 원의 절반(반원)이 사과로 표시된 원그래프를 찾아야 합니다!",
              h2: "사과가 반원(50%)이고 배와 포도가 각각 원의 4분의 1(25%)로 그려진 기호를 골라 보세요.",
              checkTip: "사과가 50%(반원), 배와 포도가 각각 25%(원의 4분의 1)로 바르게 나타낸 것은 (가)입니다.",
              wrongDiag: {
                "나": "(나)는 배가 50%(반원)이고 사과가 25%로 잘못 표시되어 있어요!"
              },
              diagDefault: "사과가 반원(50%)을 차지하는 원그래프의 기호를 적어 보세요.",
              steps: [
                { q: "1계단: 사과가 50%이므로 원의 절반(반원)이 사과인 그림은 (가)와 (나) 중 어느 것인가요?", ans: "가" }
              ]
            }
          ],
          [
            {
              q: `[유형 2] 다음 원그래프에서 왼쪽의 '자전거'는 정확히 반원(원의 절반) 모양이고, '도보'는 32%입니다. 나머지 '버스'를 타고 통학하는 학생의 비율은 몇 %인가요?
                  <div style="text-align:center; margin:10px 0;">
                    <svg viewBox="0 0 240 135" style="width:100%; max-width:240px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                      <path d="M 120,68 L 120,13 A 55,55 0 0,0 120,123 Z" fill="#93c5fd" stroke="#1e293b" stroke-width="1.8"/>
                      <path d="M 120,68 L 120,13 A 55,55 0 0,1 170,92 Z" fill="#fde047" stroke="#1e293b" stroke-width="1.8"/>
                      <path d="M 120,68 L 170,92 A 55,55 0 0,1 120,123 Z" fill="#86efac" stroke="#1e293b" stroke-width="1.8"/>
                      <text x="72" y="72" fill="#1e3a8a" font-size="12" font-weight="bold">자전거</text>
                      <text x="124" y="55" fill="#854d0e" font-size="10" font-weight="bold">도보(32%)</text>
                      <text x="128" y="98" fill="#14532d" font-size="10" font-weight="bold">버스</text>
                      <text x="126" y="110" fill="#14532d" font-size="10" font-weight="bold">(?%)</text>
                    </svg>
                  </div>`,
              ans: "18",
              accept: ["18%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "자전거가 반원(50%)을 차지하므로, 오른쪽 반원(도보 + 버스)의 합도 50%입니다!",
              h2: "50%에서 도보(32%)를 빼 보세요(50 - 32).",
              checkTip: "오른쪽 반원의 합이 50%이므로 버스는 50 - 32 = 18(%)입니다.",
              wrongDiag: {
                "68": "자전거(반원 = 50%)도 빼주어야 해요! 100 - 50 - 32 = 18%입니다."
              },
              diagDefault: "50에서 32를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 반원 모양인 자전거는 전체의 몇 %인가요?", ans: "50" },
                { q: "2계단: 나머지 반원(50%)에서 도보(32%)를 빼면 버스는 몇 %인가요?", ans: "18" }
              ]
            },
            {
              q: "[유형 2] 원그래프의 바깥 둘레가 작은 눈금 100칸(1칸 = 1%)으로 나누어져 있습니다. 전체 학생 50명 중 17명이 선택한 항목은 원그래프에서 작은 눈금을 몇 칸 차지하게 그려야 하나요?",
              ans: "34",
              accept: ["34칸", "34%"],
              unit: "칸",
              placeholder: "숫자만 입력",
              h1: "작은 눈금 1칸이 1%이므로, 이 항목의 백분율(%)을 구하면 그대로 칸 수가 됩니다.",
              h2: "50명 중 17명의 백분율(17 × 2)을 구해 보세요.",
              checkTip: "17/50 = 34/100 = 34% 이므로 34칸을 차지합니다.",
              wrongDiag: {
                "17": "전체가 100명이 아니라 50명이므로, 100칸 기준으로는 17 × 2 = 34칸을 차지해야 합니다!"
              },
              diagDefault: "17에 2를 곱한 칸 수를 입력해 보세요.",
              steps: [
                { q: "1계단: 50명 중 17명을 백분율로 나타내면 17 × 2 = 몇 %인가요?", ans: "34" },
                { q: "2계단: 1칸이 1%이므로 몇 칸을 차지하나요?", ans: "34" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 과수원에서 수확한 과일 전체 무게가 500 kg입니다. 원그래프에서 '사과'가 42%, '배'가 28%를 차지할 때, 사과의 무게는 배의 무게보다 몇 kg 더 무거운가요?",
              ans: "70",
              accept: ["70kg", "70 kg"],
              unit: "kg",
              placeholder: "숫자만 입력",
              h1: "사과(500 × 0.42 = 210 kg)에서 배(500 × 0.28 = 140 kg)를 빼거나, 백분율의 차(42% - 28% = 14%)를 이용해 500 × 0.14 를 계산해 보세요!",
              h2: "210 - 140 (또는 5 × 14)을 계산해 보세요.",
              checkTip: "사과(210 kg) - 배(140 kg) = 70 kg 더 무겁습니다.",
              wrongDiag: {
                "14": "14는 두 백분율의 차(14%)예요! 전체 무게가 500 kg이므로 500 × 0.14 = 70 kg입니다.",
                "210": "210 kg은 사과의 무게예요! 배의 무게(140 kg)를 빼야 차이가 나옵니다."
              },
              diagDefault: "사과 무게(210 kg)에서 배 무게(140 kg)를 빼 보세요.",
              steps: [
                { q: "1계단: 사과의 비율(42%)과 배의 비율(28%)의 차는 얼마인가요? (42 - 28)", ans: "14" },
                { q: "2계단: 전체 500 kg의 14%는 500 × 0.14 = 몇 kg인가요?", ans: "70" }
              ]
            },
            {
              q: "[유형 3] 어머니께서 한 달 생활비 800000원을 쓴 내역을 원그래프로 나타내었더니 '식비'가 원의 4분의 1(25%)을 차지했습니다. 식비로 사용한 금액은 몇 원인가요?",
              ans: "200000",
              accept: ["200000원", "200,000", "200,000원", "20만원"],
              unit: "원",
              placeholder: "숫자만 입력",
              h1: "중심이 직각인 조각(25%)은 전체 원의 정확히 4분의 1입니다!",
              h2: "800000원을 4로 나누어 보세요(800000 ÷ 4).",
              checkTip: "25%는 전체의 1/4이므로 800000 ÷ 4 = 200000원입니다.",
              wrongDiag: {
                "20000": "0을 하나 빠뜨렸어요! 800000 ÷ 4 는 200000입니다."
              },
              diagDefault: "800000을 4로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 25%는 분수로 나타내면 4분의 1입니다. 800000을 4로 나누면 몇 원인가요?", ans: "200000" }
              ]
            }
          ]
        ],
        step4Intro: "원그래프에서 반원(50%)과 직각(25%=전체의 1/4) 모양만 눈에 익혀 두면 복잡한 계산 없이도 답이 바로 보여요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 전체 학생 25명 중에서 9명이 선택한 항목을 원그래프로 나타낼 때, 이 항목의 백분율은 몇 %인가요?",
              ans: "36",
              accept: ["36%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "25분의 9에서 분모와 분자에 4를 곱해 보세요.",
              h2: "9 × 4 를 계산해 보세요.",
              checkTip: "9/25 = 36/100 = 36% 입니다.",
              wrongDiag: {},
              diagDefault: "9에 4를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 9 × 4 는 몇 %인가요?", ans: "36" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 좋아하는 계절을 조사했더니 여름이 50%, 겨울이 25%, 봄이 25%였습니다. 이를 원그래프로 바르게 나타내려면 원의 절반(반원)에 어느 계절을 적어야 하나요?",
              ans: "여름",
              accept: ["여름입니다"],
              placeholder: "계절 이름 입력",
              h1: "원의 절반(반원)은 백분율 50%를 나타냅니다.",
              h2: "백분율이 50%인 계절의 이름을 적어 보세요.",
              checkTip: "50%를 차지하는 '여름'을 반원 영역에 적어야 합니다.",
              wrongDiag: {
                "겨울": "겨울은 25%이므로 원의 4분의 1(직각) 영역에 적어야 합니다!",
                "봄": "봄은 25%이므로 원의 4분의 1(직각) 영역에 적어야 합니다!"
              },
              diagDefault: "백분율이 50%인 계절 이름을 두 글자로 적어 보세요.",
              steps: [
                { q: "1계단: 반원(50%)을 차지하는 계절은 무엇인가요?", ans: "여름" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 세 항목(가, 나, 다)으로 이루어진 원그래프에서 '가' 항목이 정확히 반원(50%) 모양이고, '나' 항목이 28%입니다. 나머지 '다' 항목은 몇 %인가요?",
              ans: "22",
              accept: ["22%"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "나머지 반원(50%)에서 28%를 빼 보세요.",
              h2: "50 - 28 을 계산해 보세요.",
              checkTip: "50 - 28 = 22(%)입니다.",
              wrongDiag: {},
              diagDefault: "50에서 28을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 50 - 28 은 얼마인가요?", ans: "22" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 원의 둘레가 작은 눈금 100칸(1칸 = 1%)으로 나누어진 원그래프에 '전체 50명 중 19명'인 항목을 나타내려면 작은 눈금을 몇 칸 차지하게 그려야 하나요?",
              ans: "38",
              accept: ["38칸"],
              unit: "칸",
              placeholder: "숫자만 입력",
              h1: "50명 중 19명의 백분율(19 × 2)을 구하면 됩니다.",
              h2: "19 × 2 를 계산해 보세요.",
              checkTip: "19/50 = 38/100 = 38% 이므로 38칸입니다.",
              wrongDiag: {},
              diagDefault: "19에 2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 19 × 2 는 몇 칸인가요?", ans: "38" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 전체 무게가 300 kg인 채소 수확량 원그래프에서 배추가 45%, 무가 25%입니다. 배추는 무보다 몇 kg 더 무거운가요?",
              ans: "60",
              accept: ["60kg", "60 kg"],
              unit: "kg",
              placeholder: "숫자만 입력",
              h1: "백분율의 차가 45% - 25% = 20%이므로 300 kg의 20%를 구해 보세요.",
              h2: "300 × 0.2 를 계산해 보세요.",
              checkTip: "배추(135 kg) - 무(75 kg) = 60 kg 입니다.",
              wrongDiag: {},
              diagDefault: "300에 0.2를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 300 × 0.2 는 몇 kg인가요?", ans: "60" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 전체 모금액 400000원의 사용 내역을 나타낸 원그래프에서 '장학금' 항목이 원의 4분의 1(25%)을 차지합니다. 장학금으로 사용한 금액은 몇 원인가요?",
              ans: "100000",
              accept: ["100000원", "100,000", "100,000원", "10만원"],
              unit: "원",
              placeholder: "숫자만 입력",
              h1: "25%는 전체의 4분의 1이므로 400000원을 4로 나누어 보세요.",
              h2: "400000 ÷ 4 를 계산해 보세요.",
              checkTip: "400000 ÷ 4 = 100000원입니다.",
              wrongDiag: {},
              diagDefault: "400000을 4로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 400000 ÷ 4 는 몇 원인가요?", ans: "100000" }
              ]
            }
          ]
        ],
        step5A: {
          q: "전체에 대한 각 부분의 비율을 원 모양에 백분율로 나타낸 그래프를 [ (1) 띠그래프 / (2) 원그래프 ] 라고 하며, 원의 절반인 반원 모양은 50%를 나타냅니다.",
          ans: "원그래프",
          numAns: "2",
          hint: "💡 힌트: 둥근 원 모양에 비율을 나타낸 그래프입니다."
        },
        step5B: {
          sentence: "원그래프는 전체에 대한 각 부분의 비율을 원 모양에 나타내며 백분율의 합은 항상 백 퍼센트이다."
        },
        nextUnit: "5-5"
      },
  
      "5-5": {
        title: "5-5차시: 그래프를 해석해 볼까요",
        goal: "여러 가지 그래프를 해석하여 알 수 있는 사실을 찾고, 목적에 맞는 그래프를 선택합니다.",
        videoUrl: "https://youtube.com/shorts/qGwxTaMzt9k?feature=share",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">💡 핵심 개념: 그래프 해석의 대표 함정과 그래프 고르기</h4>
            <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; justify-content:center; margin:12px 0; background:#fff; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
              <svg viewBox="0 0 320 120" style="width:100%; max-width:320px; height:auto;">
                <rect x="10" y="10" width="145" height="65" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="20" y="34" fill="#0369a1" font-size="12" font-weight="bold">가 학교 (전체 100명)</text>
                <text x="20" y="56" fill="#1e293b" font-size="12">안경: <tspan fill="#dc2626" font-weight="bold">30%</tspan> → 30명</text>
                <rect x="165" y="10" width="145" height="65" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="175" y="34" fill="#b45309" font-size="12" font-weight="bold">나 학교 (전체 200명)</text>
                <text x="175" y="56" fill="#1e293b" font-size="12">안경: <tspan fill="#dc2626" font-weight="bold">30%</tspan> → 60명</text>
                <rect x="10" y="83" width="300" height="28" rx="6" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
                <text x="18" y="101" fill="#dc2626" font-size="11" font-weight="bold">함정: 백분율이 같아도 전체 수가 다르면 실제 수는 달라요!</text>
              </svg>
            </div>
            <ul style="margin:0; padding-left:20px; color:#334155; font-size:0.95rem;">
              <li><strong>비율과 실제 수 구분:</strong> 두 집단의 원그래프에서 백분율(%)이 똑같더라도, <strong>각 집단의 전체 인원수를 모르면 어느 쪽의 실제 인원이 더 많은지 알 수 없습니다!</strong></li>
              <li><strong>알맞은 그래프 선택:</strong>
                <br>👉 자료의 많고 적음을 그림 크기로 비교할 때: <strong>그림그래프</strong>
                <br>👉 전체에 대한 각 부분의 비율(%)을 한눈에 볼 때: <strong>띠그래프, 원그래프</strong>
              </li>
            </ul>
          </div>
        `,
        warmup: [
          {
            q: "[복습] 원그래프에서 원의 정확히 절반(반원)을 차지하는 항목의 백분율은 몇 %인가요?",
            ans: "50",
            accept: ["50%"],
            unit: "%",
            placeholder: "숫자만 입력",
            h1: "100%의 절반을 생각해 보세요.",
            h2: "100 ÷ 2 를 계산해 보세요.",
            checkTip: "반원은 50%입니다.",
            wrongDiag: {},
            diagDefault: "50을 입력해 보세요.",
            steps: [
              { q: "1계단: 100의 절반은 얼마인가요?", ans: "50" }
            ]
          }
        ],
        step1Quiz: [
          {
            q: "가 반과 나 반의 혈액형 원그래프에서 O형의 비율이 둘 다 '30%'로 같습니다. 만약 가 반의 전체 학생은 20명이고 나 반의 전체 학생은 30명이라면, O형인 실제 학생 수는 어떨까요?",
            choices: ["1번: 비율이 30%로 같으므로 실제 학생 수도 똑같다", "2번: 전체 학생 수가 다르므로 나 반의 O형 학생 수가 더 많다"],
            ans: "2",
            h1: "가 반은 20명의 30%(6명)이고, 나 반은 30명의 30%(9명)입니다!",
            h2: "전체 인원수가 다르면 백분율이 같아도 실제 인원수는 다르다는 보기를 골라 보세요."
          },
          {
            q: "우리 고장의 지역별 사과 생산량을 사과의 크기로 구분하여 어느 지역이 많은지 한눈에 알아보기 쉽게 나타내려고 합니다. 가장 알맞은 그래프는 어느 것인가요?",
            choices: ["1번: 그림그래프", "2번: 원그래프"],
            ans: "1",
            h1: "사과 모양 그림의 크기로 수량을 나타내는 그래프입니다.",
            h2: "그림의 크기로 자료의 수를 나타내는 그래프를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "전체에 대한 각 부분의 비율을 한눈에 알아보기에는 띠그래프나 [ ① ]가 편리합니다.",
            ans: "원그래프",
            h1: "띠그래프와 함께 백분율(%)을 사용하여 원 모양으로 나타내는 그래프입니다.",
            h2: "둥근 원 모양의 비율 그래프 이름을 네 글자로 적어 보세요."
          },
          {
            q: "원그래프에서 '동화책'의 비율이 45%이고 '만화책'의 비율이 15%일 때, 동화책을 좋아하는 학생은 만화책을 좋아하는 학생의 45 ÷ 15 = [ ① ]배입니다.",
            ans: "3",
            h1: "45를 15로 나누어 보세요.",
            h2: "45 ÷ 15 의 값을 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: `다음은 10년 전과 올해의 쓰레기 배출 비율을 비교한 두 개의 띠그래프입니다. 10년 전과 비교하여 올해 비율이 '가장 많이 늘어난' 항목은 무엇인가요?
                <div style="text-align:center; margin:10px 0;">
                  <svg viewBox="0 0 320 125" style="width:100%; max-width:320px; height:auto; background:#fff; border-radius:8px; border:1px solid #e2e8f0;">
                    <text x="15" y="36" fill="#1e293b" font-size="12" font-weight="bold">10년 전</text>
                    <rect x="68" y="18" width="115" height="28" fill="#93c5fd" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="95" y="36" fill="#1e3a8a" font-size="11" font-weight="bold">종이(50%)</text>
                    <rect x="183" y="18" width="69" height="28" fill="#fde047" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="196" y="30" fill="#854d0e" font-size="10" font-weight="bold">플라스틱</text>
                    <text x="204" y="42" fill="#854d0e" font-size="10" font-weight="bold">(30%)</text>
                    <rect x="252" y="18" width="46" height="28" fill="#86efac" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="255" y="36" fill="#14532d" font-size="11" font-weight="bold">캔(20%)</text>
                    <text x="20" y="88" fill="#1e293b" font-size="12" font-weight="bold">올해</text>
                    <rect x="68" y="70" width="69" height="28" fill="#93c5fd" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="80" y="88" fill="#1e3a8a" font-size="11" font-weight="bold">종이(30%)</text>
                    <rect x="137" y="70" width="115" height="28" fill="#fde047" stroke="#dc2626" stroke-width="1.8"/>
                    <text x="158" y="88" fill="#dc2626" font-size="11" font-weight="bold">플라스틱(50%)</text>
                    <rect x="252" y="70" width="46" height="28" fill="#86efac" stroke="#1e293b" stroke-width="1.2"/>
                    <text x="255" y="88" fill="#14532d" font-size="11" font-weight="bold">캔(20%)</text>
                  </svg>
                </div>`,
            ans: "플라스틱",
            accept: ["플라스틱류"],
            placeholder: "항목 이름 입력",
            h1: "종이는 50%에서 30%로 줄어들었고, 캔은 20%로 그대로입니다.",
            h2: "30%에서 50%로 비율이 크게 늘어난 노란색 칸의 항목 이름을 적어 보세요.",
            checkTip: "플라스틱의 비율이 30%에서 50%로 가장 많이 늘어났습니다.",
            wrongDiag: {
              "종이": "종이는 50%에서 30%로 오히려 줄어들었어요! 늘어난 항목을 찾아보세요."
            },
            diagDefault: "30%에서 50%로 늘어난 항목의 이름을 네 글자로 적어 보세요.",
            steps: [
              { q: "1계단: 10년 전 30%에서 올해 50%로 비율이 늘어난 항목의 이름은 무엇인가요?", ans: "플라스틱" }
            ]
          },
          {
            q: "위 두 띠그래프에서 10년 전 전체 쓰레기 배출량이 200 t이고 올해 전체 쓰레기 배출량도 200 t이라면, 올해 플라스틱 배출량(50%)은 10년 전 플라스틱 배출량(30%)보다 몇 t 더 늘어났나요?",
            ans: "40",
            accept: ["40t", "40 t"],
            unit: "t",
            placeholder: "숫자만 입력",
            h1: "올해는 200 t의 50%(100 t)이고, 10년 전은 200 t의 30%(60 t)입니다.",
            h2: "100 t에서 60 t을 빼 보세요.",
            checkTip: "올해(100 t) - 10년 전(60 t) = 40 t 더 늘어났습니다.",
            wrongDiag: {
              "20": "20은 백분율의 차(20%)예요! 전체가 200 t이므로 200 × 0.2 = 40 t입니다."
            },
            diagDefault: "100에서 60을 뺀 값을 입력해 보세요.",
            steps: [
              { q: "1계단: 올해 플라스틱(100 t)에서 10년 전 플라스틱(60 t)을 빼면 몇 t인가요?", ans: "40" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 장래 희망을 조사한 원그래프에서 '크리에이터'가 36%, '과학자'가 12%, '교사'가 18%였습니다. 크리에이터를 희망하는 학생 수는 과학자를 희망하는 학생 수의 몇 배인가요?",
              ans: "3",
              accept: ["3배"],
              unit: "배",
              placeholder: "숫자만 입력",
              h1: "같은 집단을 조사한 그래프에서는 백분율의 배수가 실제 학생 수의 배수와 같습니다!",
              h2: "크리에이터의 비율(36%)을 과학자의 비율(12%)로 나누어 보세요(36 ÷ 12).",
              checkTip: "36 ÷ 12 = 3(배)입니다.",
              wrongDiag: {
                "2": "18%(교사)로 나누었어요! 과학자는 12%이므로 36 ÷ 12 를 계산해 보세요.",
                "24": "24는 뺄셈(36-12)을 한 값이에요! 몇 배인지 물었으니 나눗셈을 해 보세요."
              },
              diagDefault: "36을 12로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 36 ÷ 12 는 얼마인가요?", ans: "3" }
              ]
            },
            {
              q: "[유형 1] 지난달과 이번 달의 도서관 대출 분야 비율을 나타낸 두 띠그래프에서, '역사책'의 비율은 지난달 16%에서 이번 달 28%로 변했습니다. 두 달의 역사책 백분율의 차는 몇 %인가요?",
              ans: "12",
              accept: ["12%", "12%p"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "이번 달 비율(28%)에서 지난달 비율(16%)을 빼면 됩니다.",
              h2: "28 - 16 을 계산해 보세요.",
              checkTip: "두 달 백분율의 차는 28% - 16% = 12%입니다.",
              wrongDiag: {},
              diagDefault: "28에서 16을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 28 - 16 은 얼마인가요?", ans: "12" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 5학년(전체 100명)과 6학년(전체 200명)의 좋아하는 급식 메뉴 원그래프에서, '카레'를 좋아하는 비율이 5학년은 25%이고 6학년은 20%입니다. 백분율 숫자는 5학년(25%)이 더 높지만, 실제로 카레를 좋아하는 학생 수는 어느 학년이 몇 명 더 많은지 '구한 인원수의 차이(큰 수 - 작은 수)'만 숫자로 써 보세요.",
              ans: "15",
              accept: ["15명"],
              unit: "명",
              placeholder: "인원수 차이만 숫자로 입력",
              h1: "백분율에 속지 말고 각 학년의 실제 학생 수를 구해 보세요! 5학년은 100명의 25%이고, 6학년은 200명의 20%입니다.",
              h2: "5학년(25명)과 6학년(200 × 0.2 = 40명)의 차이를 구해 보세요(40 - 25).",
              checkTip: "5학년은 100 × 0.25 = 25명이고, 6학년은 200 × 0.2 = 40명이므로 실제로는 6학년이 40 - 25 = 15명 더 많습니다!",
              wrongDiag: {
                "5": "5는 백분율 숫자(25% - 20% = 5%)의 차예요! 각 학년의 전체 인원수가 다르므로 실제 학생 수를 각각 구해서 빼야 합니다.",
                "40": "40명은 6학년 학생 수예요! 여기서 5학년 학생 수(25명)를 빼 보세요."
              },
              diagDefault: "6학년 카레 선호 학생 수(40명)에서 5학년 카레 선호 학생 수(25명)를 빼 보세요.",
              steps: [
                { q: "1계단: 5학년 전체 100명의 25%는 몇 명인가요?", ans: "25" },
                { q: "2계단: 6학년 전체 200명의 20%는 200 × 0.2 = 몇 명인가요?", ans: "40" },
                { q: "3계단: 두 학년의 실제 학생 수 차이는 40 - 25 = 몇 명인가요?", ans: "15" }
              ]
            },
            {
              q: "[유형 2] (가) 중학교와 (나) 중학교의 동아리 활동 비율 원그래프에서 '방송반'의 비율이 두 학교 모두 15%입니다. 이때 두 학교의 전체 학생 수를 모르더라도 두 학교의 방송반 실제 학생 수가 서로 같다고 말할 수 있나요? ('예' 또는 '아니오'로 입력)",
              ans: "아니오",
              accept: ["아니요", "없다", "없습니다"],
              placeholder: "예 또는 아니오 입력",
              h1: "핵심 개념 카드에서 보았듯이, 두 학교의 전체 학생 수가 다르면 같은 15%라도 실제 학생 수는 서로 다릅니다!",
              h2: "전체 학생 수를 모르면 실제 학생 수가 같은지 알 수 없으므로 '아니오'라고 답해야 합니다.",
              checkTip: "두 학교의 전체 학생 수가 같은지 다른지 모르므로, 백분율이 15%로 같아도 실제 학생 수가 같다고 할 수 없습니다.",
              wrongDiag: {
                "예": "함정에 빠졌어요! 만약 (가) 학교가 100명이면 15명이고, (나) 학교가 200명이면 30명이어서 실제 인원수는 다릅니다."
              },
              diagDefault: "전체 학생 수를 모르면 실제 인원이 같은지 알 수 없으므로 '아니오'를 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 인원수가 다르면 백분율이 같아도 실제 인원수는 다릅니다. 따라서 같다고 말할 수 있나요? (예/아니오)", ans: "아니오" }
              ]
            }
          ],
          [
            {
              q: "[유형 3] 다음 두 가지 조사 목적 (가)와 (나) 중에서 '원그래프(또는 띠그래프)'로 나타내기에 가장 알맞은 것의 기호를 쓰세요.<br>(가) 월별 기온의 변화하는 모습을 선으로 알아볼 때<br>(나) 우리 반 전체 학급 문고에서 각 종류의 책이 차지하는 비율을 한눈에 비교할 때",
              ans: "나",
              accept: ["(나)", "나번"],
              placeholder: "기호 입력 (가 또는 나)",
              h1: "(가)처럼 변화하는 모습을 선으로 나타내는 것은 '꺾은선그래프'입니다.",
              h2: "'전체에 대한 각 부분의 비율'을 비교할 때 쓰는 기호를 골라 보세요.",
              checkTip: "전체에 대한 각 부분의 비율을 비교할 때는 원그래프나 띠그래프가 가장 알맞습니다.",
              wrongDiag: {
                "가": "(가)는 4학년 때 배운 '꺾은선그래프'가 알맞아요! 원그래프는 전체에 대한 각 부분의 비율을 나타낼 때 씁니다."
              },
              diagDefault: "전체에 대한 각 부분의 비율을 비교하는 기호를 골라 보세요.",
              steps: [
                { q: "1계단: 전체에 대한 각 부분의 비율을 비교하는 것은 (가)와 (나) 중 어느 것인가요?", ans: "나" }
              ]
            },
            {
              q: "[유형 3] 도서관의 전체 책 400권을 종류별로 조사하여 원그래프로 나타내었습니다. '동화책'이 40%, '과학책'이 25%, '역사책'이 20%, '기타'가 15%일 때, 동화책과 과학책을 합한 권수는 모두 몇 권인가요?",
              ans: "260",
              accept: ["260권"],
              unit: "권",
              placeholder: "숫자만 입력",
              h1: "동화책(40%)과 과학책(25%)의 비율을 먼저 더하면 전체의 65%입니다!",
              h2: "전체 400권의 65%(400 × 0.65, 즉 4 × 65)를 계산해 보세요.",
              checkTip: "동화책 + 과학책 = 40% + 25% = 65% ➔ 400 × 0.65 = 260권입니다.",
              wrongDiag: {
                "65": "65는 두 책의 백분율 합(65%)이에요! 전체가 400권이므로 65 × 4 = 260권입니다."
              },
              diagDefault: "동화책(160권)과 과학책(100권)을 더한 권수를 입력해 보세요.",
              steps: [
                { q: "1계단: 동화책(40%)과 과학책(25%)의 백분율을 합하면 몇 %인가요?", ans: "65" },
                { q: "2계단: 전체 400권의 65%는 400 × 0.65 = 몇 권인가요?", ans: "260" }
              ]
            }
          ]
        ],
        step4Intro: "서로 다른 두 집단의 비율 그래프를 비교할 때는 '백분율 숫자만 보고 실제 수량을 단정 짓지 않는다'는 황금 원칙만 기억하세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 좋아하는 과일 원그래프에서 '딸기'가 48%, '포도'가 16%입니다. 딸기를 좋아하는 학생 수는 포도를 좋아하는 학생 수의 몇 배인가요?",
              ans: "3",
              accept: ["3배"],
              unit: "배",
              placeholder: "숫자만 입력",
              h1: "48 ÷ 16 을 계산해 보세요.",
              h2: "48 안에 16이 몇 번 들어가는지 적어 보세요.",
              checkTip: "48 ÷ 16 = 3(배)입니다.",
              wrongDiag: {},
              diagDefault: "48을 16으로 나눈 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 48 ÷ 16 은 얼마인가요?", ans: "3" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 1학기와 2학기에 실시한 학급 행사 개최 찬반 조사 띠그래프에서 '찬성' 비율이 1학기 62%에서 2학기 79%로 늘어났습니다. 두 학기 찬성 백분율의 차는 몇 %인가요?",
              ans: "17",
              accept: ["17%", "17%p"],
              unit: "%",
              placeholder: "숫자만 입력",
              h1: "79에서 62를 빼 보세요.",
              h2: "79 - 62 를 계산해 보세요.",
              checkTip: "두 학기 백분율의 차는 79% - 62% = 17%입니다.",
              wrongDiag: {},
              diagDefault: "79에서 62를 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 79 - 62 는 얼마인가요?", ans: "17" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 가 마을(전체 100가구)에서는 개를 키우는 가구가 30%이고, 나 마을(전체 300가구)에서는 개를 키우는 가구가 20%입니다. 실제로 개를 키우는 가구 수는 두 마을이 몇 가구 차이가 나나요?",
              ans: "30",
              accept: ["30가구"],
              unit: "가구",
              placeholder: "숫자만 입력",
              h1: "가 마을은 100 × 0.3 = 30가구이고, 나 마을은 300 × 0.2 = 60가구입니다.",
              h2: "60가구에서 30가구를 빼 보세요.",
              checkTip: "나 마을(60가구) - 가 마을(30가구) = 30가구 차이가 납니다.",
              wrongDiag: {
                "10": "10은 백분율의 차(10%)예요! 실제 가구 수는 60 - 30 = 30가구 차이입니다."
              },
              diagDefault: "60에서 30을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 나 마을(60가구)에서 가 마을(30가구)을 빼면 몇 가구 차이인가요?", ans: "30" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 1반과 2반의 혈액형 띠그래프에서 A형의 백분율이 둘 다 35%입니다. 두 반의 전체 학생 수가 서로 다르다면, A형인 실제 학생 수도 서로 같나요? ('예' 또는 '아니오'로 입력)",
              ans: "아니오",
              accept: ["아니요", "다르다", "다릅니다"],
              placeholder: "예 또는 아니오 입력",
              h1: "전체 학생 수가 다르면 같은 35%라도 실제 학생 수는 다릅니다.",
              h2: "같지 않으므로 '아니오'를 입력해 보세요.",
              checkTip: "전체 학생 수가 다르면 실제 학생 수도 다릅니다.",
              wrongDiag: {},
              diagDefault: "'아니오'를 입력해 보세요.",
              steps: [
                { q: "1계단: 전체 수가 다르면 실제 인원도 다르므로 같다고 할 수 있나요? (예/아니오)", ans: "아니오" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 자료의 많고 적음을 그림의 크기로 나타내어 지역별 수확량을 한눈에 비교하고 싶을 때 가장 알맞은 그래프는 무엇인가요? ('그림그래프' 또는 '원그래프' 중 입력)",
              ans: "그림그래프",
              accept: ["그림 그래프"],
              placeholder: "그래프 이름 입력",
              h1: "그림의 크기로 수량을 나타내는 그래프입니다.",
              h2: "다섯 글자로 된 그래프 이름을 적어 보세요.",
              checkTip: "그림의 크기로 수량을 비교할 때는 그림그래프가 알맞습니다.",
              wrongDiag: {},
              diagDefault: "'그림그래프'를 입력해 보세요.",
              steps: [
                { q: "1계단: 그림의 크기로 자료의 수를 나타내는 그래프는 무엇인가요?", ans: "그림그래프" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 전체 300명을 조사한 원그래프에서 '봄'이 35%, '가을'이 25%입니다. 봄과 가을을 선택한 학생을 합하면 모두 몇 명인가요?",
              ans: "180",
              accept: ["180명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "봄(35%)과 가을(25%)을 합하면 전체의 60%입니다.",
              h2: "300명의 60%(300 × 0.6)를 계산해 보세요.",
              checkTip: "300 × 0.6 = 180명입니다.",
              wrongDiag: {},
              diagDefault: "300에 0.6을 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 봄과 가을의 비율 합은 35 + 25 = 60(%)입니다. 300 × 0.6 은 몇 명인가요?", ans: "180" }
              ]
            }
          ]
        ],
        step5A: {
          q: "두 집단의 원그래프에서 어떤 항목의 백분율(%)이 서로 같더라도, 두 집단의 전체 인원수가 서로 다르면 그 항목의 실제 인원수는 서로 [ (1) 같습니다 / (2) 다릅니다 ].",
          ans: "다릅니다",
          numAns: "2",
          hint: "💡 힌트: 100명의 30%(30명)와 200명의 30%(60명)를 비교해 보세요."
        },
        step5B: {
          sentence: "목적에 맞게 알맞은 그래프를 고르며 전체 수가 다르면 백분율이 같아도 실제 수는 다르다."
        },
        nextUnit: "5-6"
      },
  
      "5-6": {
        title: "5-6차시: 5단원 종합 마스터 (여러 가지 그래프 완전 정복)",
        goal: "그림그래프, 띠그래프, 원그래프의 특징을 완벽히 비교하고 실생활 복합 응용문제를 해결합니다.",
        videoUrl: "",
        summaryCard: `
          <div style="background:#f8fafc; border:2px solid #cbd5e1; border-radius:12px; padding:16px; text-align:left; line-height:1.6;">
            <h4 style="margin-top:0; color:#1e40af; font-size:1.1rem;">🏆 5단원 총정리: 여러 가지 그래프 한눈에 비교하기</h4>
            <table style="width:100%; border-collapse:collapse; background:#fff; font-size:0.92rem; text-align:center; margin-top:10px; border:1px solid #cbd5e1;">
              <thead>
                <tr style="background:#e0f2fe; color:#1e3a8a;">
                  <th style="padding:8px; border:1px solid #cbd5e1; width:26%;">그래프 이름</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">나타내는 방법</th>
                  <th style="padding:8px; border:1px solid #cbd5e1;">가장 큰 장점 & 핵심 공식</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;">그림그래프</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">큰 그림과 작은 그림의 수</td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">자료의 많고 적음을 그림으로 한눈에 비교!</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#15803d;">띠그래프</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">긴 띠를 백분율(%)로 나눔</td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">시기별로 각 항목의 비율 변화를 비교하기에 편리!</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">원그래프</td>
                  <td style="padding:8px; border:1px solid #cbd5e1;">원을 백분율(%)로 나눔</td>
                  <td style="padding:8px; border:1px solid #cbd5e1; text-align:left;">전체에 대한 비율 비교! (반원=50%, 직각=25%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        warmup: null,
        step1Quiz: [
          {
            q: "다음 중 '전체에 대한 각 부분의 비율(%)'을 한눈에 알아보기 쉬운 그래프끼리 바르게 짝지은 것은 어느 것인가요?",
            choices: ["1번: 띠그래프, 원그래프", "2번: 그림그래프, 막대그래프"],
            ans: "1",
            h1: "백분율(%) 눈금을 사용하여 전체 100%를 나누어 나타내는 두 그래프입니다.",
            h2: "띠 모양과 원 모양의 비율 그래프를 골라 보세요."
          },
          {
            q: "어떤 원그래프에서 '찬성' 항목이 정확히 원의 4분의 1(25%)을 차지하고 있고, 찬성한 실제 인원수가 10명입니다. 그렇다면 투표에 참여한 '전체 인원수'는 몇 명일까요?",
            choices: ["1번: 40명 (10명의 4배)", "2번: 25명"],
            ans: "1",
            h1: "4분의 1조각이 10명이므로, 전체 원(4조각)은 10명의 4배가 됩니다!",
            h2: "10 × 4 를 계산한 인원수를 골라 보세요."
          }
        ],
        step2_1: [
          {
            q: "큰 그림이 100 t, 작은 그림이 10 t을 나타내는 그림그래프에서 큰 그림 3개와 작은 그림 8개로 나타낸 수확량은 모두 [ ① ] t입니다.",
            ans: "380",
            h1: "100 t씩 3개와 10 t씩 8개를 합하면 됩니다.",
            h2: "300 + 80 의 값을 숫자로 적어 보세요."
          },
          {
            q: "띠그래프와 원그래프에서 각 항목의 백분율은 (각 항목의 수 ÷ 전체 수)에 100을 곱하여 구하며, 모든 항목의 백분율 합계는 항상 [ ① ]%입니다.",
            ans: "100",
            h1: "비율 그래프의 전체 기준량입니다.",
            h2: "백분율의 전체 합계를 숫자로 적어 보세요."
          }
        ],
        step2_2: [
          {
            q: "6학년 학생 200명을 대상으로 조사한 원그래프에서 '안경을 쓴 학생'이 35%입니다. 안경을 쓰지 않은 학생은 실제로 몇 명인지 구해 보세요.",
            ans: "130",
            accept: ["130명"],
            unit: "명",
            placeholder: "숫자만 입력",
            h1: "안경을 쓴 학생이 35%이면, 안경을 쓰지 않은 학생은 100% - 35% = 65%입니다!",
            h2: "전체 200명의 65%(200 × 0.65)를 구하거나, 200명에서 안경 쓴 학생(70명)을 빼 보세요.",
            checkTip: "안경 쓴 학생 = 200 × 0.35 = 70명 ➔ 안경 쓰지 않은 학생 = 200 - 70 = 130명입니다.",
            wrongDiag: {
              "70": "70명은 '안경을 쓴 학생' 수예요! 문제에서는 '안경을 쓰지 않은 학생' 수를 물었으니 200 - 70 을 계산해 보세요.",
              "65": "65는 안경을 쓰지 않은 학생의 백분율(65%)이에요! 전체가 200명이므로 65 × 2 = 130명입니다."
            },
            diagDefault: "전체 200명에서 안경 쓴 학생(200 × 0.35 = 70명)을 빼 보세요.",
            steps: [
              { q: "1계단: 안경을 쓰지 않은 학생의 비율은 100 - 35 = 몇 %인가요?", ans: "65" },
              { q: "2계단: 전체 200명의 65%는 200 × 0.65 = 몇 명인가요?", ans: "130" }
            ]
          }
        ],
        step3A: [
          [
            {
              q: "[유형 1] 큰 사과가 100개, 작은 사과가 10개를 나타내는 그림그래프에서 (가) 과수원은 큰 사과 4개와 작은 사과 2개, (나) 과수원은 큰 사과 2개와 작은 사과 9개가 그려져 있습니다. (가) 과수원은 (나) 과수원보다 사과가 몇 개 더 많은가요?",
              ans: "130",
              accept: ["130개"],
              unit: "개",
              placeholder: "숫자만 입력",
              h1: "(가) 과수원은 420개이고, (나) 과수원은 290개입니다.",
              h2: "420 - 290 을 계산해 보세요.",
              checkTip: "(가) 420개 - (나) 290개 = 130개 더 많습니다.",
              wrongDiag: {
                "13": "큰 사과가 100개, 작은 사과가 10개 단위이므로 420 - 290 = 130개입니다!"
              },
              diagDefault: "420에서 290을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: (가) 과수원의 사과는 몇 개인가요?", ans: "420" },
                { q: "2계단: (나) 과수원의 사과(290개)를 빼면 420 - 290 = 몇 개인가요?", ans: "130" }
              ]
            },
            {
              q: "[유형 1] 띠그래프에서 '수학' 칸이 눈금 30에서 시작하여 눈금 65에서 끝납니다. 수학을 좋아하는 학생이 전체 200명 중 몇 명인지 구해 보세요.",
              ans: "70",
              accept: ["70명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "먼저 수학의 백분율(65 - 30 = 35%)을 구한 다음, 전체 200명의 35%를 구하세요!",
              h2: "수학의 비율은 35%입니다. 200 × 0.35 를 계산해 보세요.",
              checkTip: "수학의 백분율 = 65 - 30 = 35% ➔ 학생 수 = 200 × 0.35 = 70명입니다.",
              wrongDiag: {
                "35": "35는 수학의 백분율(35%)이에요! 전체 학생이 200명이므로 200 × 0.35 = 70명입니다.",
                "130": "끝 눈금 65%를 그대로 곱했어요! 시작 눈금 30%를 빼서 35%에 대해 계산해야 합니다."
              },
              diagDefault: "수학의 백분율(65-30=35%)을 구한 뒤 200명에 0.35를 곱해 보세요.",
              steps: [
                { q: "1계단: 눈금 30에서 65까지인 수학의 백분율은 65 - 30 = 몇 %인가요?", ans: "35" },
                { q: "2계단: 전체 200명의 35%는 200 × 0.35 = 몇 명인가요?", ans: "70" }
              ]
            }
          ],
          [
            {
              q: "[유형 2] 좋아하는 계절을 조사한 원그래프에서 '겨울'이 전체의 20%를 차지하고 있으며, 겨울을 좋아하는 실제 학생 수는 16명입니다. 이 조사에 참여한 '전체 학생 수'는 모두 몇 명인가요?",
              ans: "80",
              accept: ["80명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "20%가 5개 모이면 전체 100%가 됩니다! (20% × 5 = 100%)",
              h2: "20%에 해당하는 학생이 16명이므로, 전체(100%) 학생 수는 16명의 5배(16 × 5)입니다.",
              checkTip: "20%(전체의 1/5)가 16명이므로, 전체 학생 수는 16 × 5 = 80명입니다.",
              wrongDiag: {
                "320": "16에 20을 곱하면 안 돼요! 20%는 전체 100%의 5분의 1이므로 16에 5를 곱해야 합니다."
              },
              diagDefault: "20%의 5배가 100%이므로 16명에 5를 곱해 보세요.",
              steps: [
                { q: "1계단: 20%가 몇 개 모이면 전체 100%가 되나요? (100 ÷ 20)", ans: "5" },
                { q: "2계단: 따라서 20%가 16명일 때 전체 학생 수는 16 × 5 = 몇 명인가요?", ans: "80" }
              ]
            },
            {
              q: "[유형 2] 동아리별 학생 비율을 나타낸 원그래프에서 '축구부'는 원의 4분의 1(25%)을 차지하고 실제 학생 수가 15명입니다. 같은 원그래프에서 '합창부'의 비율이 40%라면, 합창부의 실제 학생 수는 몇 명인가요?",
              ans: "24",
              accept: ["24명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "1단계로 축구부(25% = 전체의 1/4)가 15명인 것을 이용해 '전체 학생 수(15 × 4 = 60명)'를 먼저 구하세요!",
              h2: "전체 학생 수가 60명입니다. 이제 60명의 40%(60 × 0.4)를 구해 보세요.",
              checkTip: "전체 학생 수 = 15 × 4 = 60명 ➔ 합창부(40%) 학생 수 = 60 × 0.4 = 24명입니다.",
              wrongDiag: {
                "60": "60명은 전체 학생 수를 아주 잘 구한 것이에요! 이제 합창부(40%)의 인원수(60 × 0.4)를 구해 보세요."
              },
              diagDefault: "전체 학생 수(15 × 4 = 60명)를 먼저 구한 뒤, 60 × 0.4 를 계산해 보세요.",
              steps: [
                { q: "1계단: 25%(전체의 1/4)가 15명이므로 전체 학생 수는 15 × 4 = 몇 명인가요?", ans: "60" },
                { q: "2계단: 전체 60명 중 합창부(40%)는 60 × 0.4 = 몇 명인가요?", ans: "24" }
              ]
            }
          ],
          [
            {
              q: `[유형 3] 다음 표의 빈칸에 들어갈 값을 구하려고 합니다. 먼저 전체 합계(50명)에서 나머지 인원을 빼서 '버스'의 학생 수 (가)를 구한 뒤, 버스의 백분율 (나)는 몇 %인지 구해 보세요. (구한 백분율 (나)의 숫자만 입력하세요)
                  <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:0.9rem; text-align:center; background:#fff; border:1px solid #cbd5e1;">
                    <tr style="background:#e0f2fe; font-weight:bold;">
                      <td style="padding:6px; border:1px solid #cbd5e1;">교통수단</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">지하철</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">버스</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">도보</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">합계</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">학생 수(명)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">21</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">(가)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">14</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">50</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">백분율(%)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">42</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; color:#dc2626; font-weight:bold;">(나)</td>
                      <td style="padding:6px; border:1px solid #cbd5e1;">28</td>
                      <td style="padding:6px; border:1px solid #cbd5e1; font-weight:bold;">100</td>
                    </tr>
                  </table>`,
              ans: "30",
              accept: ["30%"],
              unit: "%",
              placeholder: "(나)의 백분율 숫자 입력",
              h1: "백분율 합계가 100%이므로 100 - (42 + 28)로 바로 구해도 되고, 학생 수 (가)=50-(21+14)=15명을 구해 2배를 해도 됩니다!",
              h2: "100 - 70 (또는 15 × 2)을 계산해 보세요.",
              checkTip: "(가) 학생 수는 50 - 35 = 15명이고, (나) 백분율은 15/50 = 30/100 = 30%입니다.",
              wrongDiag: {
                "15": "15는 (가)에 들어갈 버스의 '학생 수(15명)'예요! 문제에서는 (나)에 들어갈 '백분율(%)'을 물었으니 15 × 2 = 30%를 적어 보세요."
              },
              diagDefault: "100에서 (42 + 28 = 70)을 뺀 백분율을 입력해 보세요.",
              steps: [
                { q: "1계단: 버스의 학생 수 (가)는 50 - (21 + 14) = 몇 명인가요?", ans: "15" },
                { q: "2계단: 전체 50명 중 15명이므로 버스의 백분율 (나)는 15 × 2 = 몇 %인가요?", ans: "30" }
              ]
            },
            {
              q: "[유형 3] 과수원의 전체 과일나무 중 사과나무가 45%, 배나무가 30%, 나머지가 복숭아나무입니다. 복숭아나무가 실제로 50그루일 때, 사과나무는 실제로 몇 그루인가요?",
              ans: "90",
              accept: ["90그루"],
              unit: "그루",
              placeholder: "숫자만 입력",
              h1: "먼저 복숭아나무의 백분율(100% - 45% - 30% = 25%)을 구해 보세요!",
              h2: "복숭아나무(25% = 전체의 1/4)가 50그루이므로 전체 나무는 50 × 4 = 200그루입니다. 이제 200그루의 45%인 사과나무 수를 구해 보세요.",
              checkTip: "복숭아나무 비율 = 25%(50그루) ➔ 전체 나무 = 200그루 ➔ 사과나무(45%) = 200 × 0.45 = 90그루입니다.",
              wrongDiag: {
                "25": "25는 복숭아나무의 백분율(25%)이에요! 전체 200그루의 45%인 사과나무 수를 구해 보세요.",
                "200": "200그루는 과수원의 '전체 나무 수'예요! 그중 45%인 사과나무 수(200 × 0.45)를 구해 보세요."
              },
              diagDefault: "전체 나무 수(50 × 4 = 200그루)에 사과나무 비율(0.45)을 곱해 보세요.",
              steps: [
                { q: "1계단: 복숭아나무의 백분율은 100 - (45 + 30) = 몇 %인가요?", ans: "25" },
                { q: "2계단: 25%(전체의 1/4)가 50그루이므로 전체 나무는 50 × 4 = 몇 그루인가요?", ans: "200" },
                { q: "3계단: 전체 200그루 중 사과나무(45%)는 200 × 0.45 = 몇 그루인가요?", ans: "90" }
              ]
            }
          ]
        ],
        step4Intro: "일부분의 백분율과 실제 수를 알면 언제든 '전체 수'를 거꾸로 찾아낼 수 있어요! 마지막 쌍둥이 문제로 확인해 보세요!",
        step4B: [
          [
            {
              q: "[쌍둥이 1-1] 큰 그림이 100개, 작은 그림이 10개를 나타내는 그림그래프에서 가 농장은 큰 그림 5개와 작은 그림 1개, 나 농장은 큰 그림 3개와 작은 그림 7개가 그려져 있습니다. 가 농장은 나 농장보다 몇 개 더 많은가요?",
              ans: "140",
              accept: ["140개"],
              unit: "개",
              placeholder: "숫자만 입력",
              h1: "가 농장은 510개이고, 나 농장은 370개입니다.",
              h2: "510 - 370 을 계산해 보세요.",
              checkTip: "510 - 370 = 140개입니다.",
              wrongDiag: {},
              diagDefault: "510에서 370을 뺀 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 510 - 370 은 몇 개인가요?", ans: "140" }
              ]
            },
            {
              q: "[쌍둥이 1-2] 띠그래프에서 '과학' 칸이 눈금 40에서 시작하여 눈금 65에서 끝납니다. 전체 학생 300명 중 과학을 좋아하는 학생은 몇 명인가요?",
              ans: "75",
              accept: ["75명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "과학의 백분율은 65 - 40 = 25%입니다. 300명의 25%를 구해 보세요.",
              h2: "300 × 0.25 를 계산해 보세요.",
              checkTip: "65 - 40 = 25% ➔ 300 × 0.25 = 75명입니다.",
              wrongDiag: {},
              diagDefault: "300에 0.25를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 과학의 백분율은 65 - 40 = 몇 %인가요?", ans: "25" },
                { q: "2계단: 300명의 25%는 몇 명인가요?", ans: "75" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 2-1] 원그래프에서 '합창부'가 전체의 25%(전체의 1/4)를 차지하고 있으며, 합창부의 실제 학생 수는 12명입니다. 동아리 전체 학생 수는 모두 몇 명인가요?",
              ans: "48",
              accept: ["48명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "25%가 4개 모이면 100%가 되므로 12명에 4를 곱합니다.",
              h2: "12 × 4 를 계산해 보세요.",
              checkTip: "12 × 4 = 48명입니다.",
              wrongDiag: {},
              diagDefault: "12에 4를 곱한 값을 입력해 보세요.",
              steps: [
                { q: "1계단: 12 × 4 는 몇 명인가요?", ans: "48" }
              ]
            },
            {
              q: "[쌍둥이 2-2] 원그래프에서 '미술부'가 전체의 20%(전체의 1/5)이고 실제 학생 수가 10명입니다. 같은 원그래프에서 '운동부'가 50%일 때, 운동부의 실제 학생 수는 몇 명인가요?",
              ans: "25",
              accept: ["25명"],
              unit: "명",
              placeholder: "숫자만 입력",
              h1: "20%가 10명이므로 전체 학생 수는 10 × 5 = 50명입니다.",
              h2: "전체 50명의 50%(절반)가 몇 명인지 구해 보세요.",
              checkTip: "전체 학생 수 = 50명 ➔ 운동부(50%) = 25명입니다.",
              wrongDiag: {},
              diagDefault: "전체 50명의 절반을 입력해 보세요.",
              steps: [
                { q: "1계단: 20%가 10명이므로 전체 학생 수는 10 × 5 = 몇 명인가요?", ans: "50" },
                { q: "2계단: 전체 50명의 50%(절반)는 몇 명인가요?", ans: "25" }
              ]
            }
          ],
          [
            {
              q: "[쌍둥이 3-1] 좋아하는 과일을 조사한 표에서 전체 학생이 50명이고, 사과가 19명, 딸기가 22명, 나머지가 포도입니다. 먼저 포도를 좋아하는 학생 수를 구한 뒤, 전체에 대한 포도의 백분율은 몇 %인지 구해 보세요.",
              ans: "18",
              accept: ["18%"],
              unit: "%",
              placeholder: "백분율 숫자만 입력",
              h1: "전체 50명에서 사과(19명)와 딸기(22명)를 빼면 포도는 9명입니다.",
              h2: "전체 50명 중 포도가 9명이므로, 분수 50분의 9의 분모와 분자에 2를 곱해(9 × 2) 백분율을 구해 보세요.",
              checkTip: "포도 학생 수 = 50 - (19 + 22) = 9명 ➔ 백분율 = 9/50 = 18/100 = 18%입니다.",
              wrongDiag: {
                "9": "9는 포도를 좋아하는 '학생 수(9명)'예요! 전체가 50명이므로 백분율은 9 × 2 = 18%입니다."
              },
              diagDefault: "포도 학생 수(9명)를 백분율(9 × 2 = 18%)로 바꾸어 입력해 보세요.",
              steps: [
                { q: "1계단: 포도를 좋아하는 학생 수는 50 - (19 + 22) = 몇 명인가요?", ans: "9" },
                { q: "2계단: 전체 50명 중 9명이므로 백분율은 9 × 2 = 몇 %인가요?", ans: "18" }
              ]
            },
            {
              q: "[쌍둥이 3-2] 농장의 동물 중 닭이 50%, 오리가 30%, 나머지가 거위입니다. 거위가 실제로 20마리일 때, 닭은 실제로 몇 마리인가요?",
              ans: "50",
              accept: ["50마리"],
              unit: "마리",
              placeholder: "숫자만 입력",
              h1: "거위의 비율은 100 - 50 - 30 = 20%입니다. 20%가 20마리이므로 1%당 1마리(전체 100마리)입니다!",
              h2: "전체 100마리의 50%인 닭의 수를 구해 보세요.",
              checkTip: "거위(20%) = 20마리 ➔ 전체 = 100마리 ➔ 닭(50%) = 50마리입니다.",
              wrongDiag: {},
              diagDefault: "전체 100마리의 50%를 입력해 보세요.",
              steps: [
                { q: "1계단: 거위의 백분율은 100 - (50 + 30) = 몇 %인가요?", ans: "20" },
                { q: "2계단: 20%가 20마리이면 전체는 100마리입니다. 닭(50%)은 몇 마리인가요?", ans: "50" }
              ]
            }
          ]
        ],
        step5A: {
          q: "자료의 수를 그림의 크기로 나타내어 많고 적음을 비교할 때는 그림그래프가 알맞고, 전체에 대한 각 부분의 비율을 비교할 때는 띠그래프나 [ (1) 원그래프 / (2) 꺾은선그래프 ] 가 알맞습니다.",
          ans: "원그래프",
          numAns: "1",
          hint: "💡 힌트: 띠그래프와 함께 백분율(%)로 전체에 대한 부분의 비율을 나타내는 원 모양 그래프입니다."
        },
        step5B: {
          sentence: "그림그래프는 그림 크기로 수량을 비교하고 띠그래프와 원그래프는 전체에 대한 각 부분의 비율을 비교한다."
        },
        nextUnit: null
      }
    }
  };