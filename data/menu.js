// data/menu.js
// 전체 학년·학기·단원 목차 및 데이터 바구니 초기화 (5·6학년 1·2학기 전 단원 오픈 완본)
const MATH_DB = {
  grades: [
    { id: "1", name: "1학년", active: false },
    { id: "2", name: "2학년", active: false },
    { id: "3", name: "3학년", active: false },
    { id: "4", name: "4학년", active: false },
    { id: "5", name: "5학년", active: true },
    { id: "6", name: "6학년", active: true }
  ],
  semesters: {
    "5": [
      { id: "1", name: "1학기", active: true },
      { id: "2", name: "2학기", active: true }
    ],
    "6": [
      { id: "1", name: "1학기", active: true },
      { id: "2", name: "2학기", active: true }
    ]
  },
  units: {
    "5-1": [
      { id: "1", name: "1. 자연수의 혼합 계산", desc: "덧셈·뺄셈·곱셈·나눗셈과 괄호가 섞인 식의 계산 순서", active: true },
      { id: "2", name: "2. 약수와 배수", desc: "약수와 배수의 관계, 최대공약수와 최소공배수 구하기", active: true },
      { id: "3", name: "3. 규칙과 대응", desc: "두 양 사이의 대응 관계를 찾아 기호(□, △)로 식 세우기", active: true },
      { id: "4", name: "4. 약분과 통분", desc: "크기가 같은 분수, 약분과 기약분수, 통분과 크기 비교", active: true },
      { id: "5", name: "5. 분수의 덧셈과 뺄셈", desc: "받아올림과 받아내림이 있는 이분모 분수의 덧셈과 뺄셈", active: true },
      { id: "6", name: "6. 다각형의 둘레와 넓이", desc: "정다각형·사각형의 둘레와 평행사변형·삼각형·마름모·사다리꼴의 넓이", active: true }
    ],
    "5-2": [
      { id: "1", name: "1. 수의 범위와 어림하기", desc: "이상·이하·초과·미만의 뜻과 올림·버림·반올림 활용하기", active: true },
      { id: "2", name: "2. 분수의 곱셈", desc: "(분수)×(자연수), (자연수)×(분수), 진분수와 대분수의 곱셈", active: true },
      { id: "3", name: "3. 합동과 대칭", desc: "도형의 합동과 성질, 선대칭도형과 점대칭도형 알아보기", active: true },
      { id: "4", name: "4. 소수의 곱셈", desc: "(소수)×(자연수), (자연수)×(소수), 소수끼리의 곱셈과 소수점 위치", active: true },
      { id: "5", name: "5. 직육면체", desc: "직육면체와 정육면체의 구성 요소와 성질, 겨냥도와 전개도", active: true },
      { id: "6", name: "6. 평균과 가능성", desc: "평균의 뜻과 구하는 방법, 일이 일어날 가능성을 말과 수로 나타내기", active: true }
    ],
    "6-1": [
      { id: "1", name: "1. 분수의 나눗셈", desc: "자연수÷자연수, 분수÷자연수의 계산 원리", active: true },
      { id: "2", name: "2. 각기둥과 각뿔", desc: "각기둥과 각뿔의 구성 요소와 전개도", active: true },
      { id: "3", name: "3. 소수의 나눗셈", desc: "소수÷자연수의 계산 원리와 활용", active: true },
      { id: "4", name: "4. 비와 비율", desc: "두 수의 비교, 비율, 백분율 알아보기", active: true },
      { id: "5", name: "5. 여러 가지 그래프", desc: "띠그래프와 원그래프 해석하기", active: true },
      { id: "6", name: "6. 직육면체의 부피와 겉넓이", desc: "부피와 겉넓이 구하는 방법", active: true }
    ],
    "6-2": [
      { id: "1", name: "1. 분수의 나눗셈", desc: "분수÷분수, 자연수÷분수의 계산 원리와 활용", active: true },
      { id: "2", name: "2. 소수의 나눗셈", desc: "소수÷소수, 자연수÷소수, 몫의 반올림과 남는 양", active: true },
      { id: "3", name: "3. 공간과 입체", desc: "위·앞·옆에서 본 모양과 층별 쌓기나무 개수 찾기", active: true },
      { id: "4", name: "4. 비례식과 비례배분", desc: "비의 성질, 비례식의 성질과 비례배분 활용", active: true },
      { id: "5", name: "5. 원의 둘레와 넓이", desc: "원주율의 뜻, 원주와 여러 가지 원의 넓이 구하기", active: true },
      { id: "6", name: "6. 원기둥, 원뿔, 구", desc: "원기둥의 전개도와 원뿔·구의 구성 요소와 성질", active: true }
    ]
  },
  lessons: {}
};