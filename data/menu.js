// 전체 학년·학기·단원 목차 및 데이터 바구니 초기화
const MATH_DB = {
  grades: [
    { id: "1", name: "1학년", active: false },
    { id: "2", name: "2학년", active: false },
    { id: "3", name: "3학년", active: false },
    { id: "4", name: "4학년", active: false },
    { id: "5", name: "5학년", active: false },
    { id: "6", name: "6학년", active: true }
  ],
  semesters: {
    "6": [
      { id: "1", name: "1학기", active: true },
      { id: "2", name: "2학기", active: true }
    ]
  },
  units: {
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