export interface Project {
  title: string;
  status: string;
  items: string[];
  tags: string[];
}

export interface Stage {
  number: number;
  title: string;
  duration: string;
  company?: string;
  companyUrl?: string;
  service?: { description: string; url: string; name: string };
  overview?: string[];
  tags?: string[];
  appInfo?: { name: string; url: string; period?: string };
  appDescription?: string;
  motivation?: string[];
  serviceOverview?: string[];
  features?: { name: string; description: string }[];
  techStack?: { layer: string; tech: string }[];
  timeline?: { period: string; milestone: string; description?: string[] }[];
  locations?: { name: string; duration: string; items: string[] }[];
  items?: string[];
  projects?: Project[];
  scope?: { label: string; value: string };
}

export interface Dictionary {
  meta: { title: string; description: string };
  profile: {
    name: string;
    role: string;
    imageAlt: string;
    bio: string[];
    bioSub: string;
    location: string;
  };
  career: {
    title: string;
    totalYears: string;
    stages: Stage[];
  };
  skills: {
    title: string;
    groups: { category: string; items: string[] }[];
  };
  footer: { copyright: string };
}

const ko: Dictionary = {
  meta: {
    title: "최광수 | 이력서",
    description: "최광수의 이력서 - 소프트웨어 엔지니어",
  },
  profile: {
    name: "최광수",
    role: "소프트웨어 엔지니어",
    imageAlt: "최광수 프로필 사진",
    bio: [
      "도쿄에 사는 한국인 개발자입니다.",
      "현재는 수익형 앱을 기획부터 운영까지 1인 개발하고 있습니다.",
      "AI를 활용한 생산성 극대화를 추구합니다.",
    ],
    bioSub: "프리랜서 풀스택 엔지니어로 중/장기 업무위탁도 가능합니다.",
    location: "도쿄 / 시부야",
  },
  career: {
    title: "경력",
    totalYears: "",
    stages: [
      {
        number: 1,
        title: "대학교 학사",
        duration: "— 4년",
        company: "멀티미디어학과 컴퓨터프로그래밍",
        companyUrl: "https://mm.nsu.ac.kr/?m1=page%25&menu_id=744%25",
        service: {
          description: "남서울대학교",
          url: "https://nsu.ac.kr/?m1=home",
          name: "남서울대학교",
        },
      },
      {
        number: 2,
        title: "병역",
        duration: "— 2년",
      },
      {
        number: 3,
        title: "SI/SE",
        duration: "— 6년",
        locations: [
          {
            name: "서울",
            duration: "5년",
            items: ["금융/공공 대규모 시스템 개발", "Java Spring 백엔드 개발"],
          },
          {
            name: "도쿄",
            duration: "1년",
            items: ["NTT DATA 산하 행정업무 처리 백엔드 시스템 개발"],
          },
        ],
      },
      {
        number: 4,
        title: "스타트업",
        duration: "— 3년 / 도쿄",
        company: "株式会社カブクスタイル (2021~2024)",
        service: {
          description: '구독형 여행 플랫폼 HafH (ハフ) 백엔드 개발',
          url: "https://www.hafh.com/",
          name: "HafH (ハフ)",
        },
        overview: [
          '월정액 구독으로 코인을 적립하고 호텔/항공권을 예약하는 "적립형 여행" 서비스',
          "국내외 다수의 숙박시설 연동, 항공권 예약 시스템 통합",
        ],
        items: [
          "Rails API 서버 설계/개발",
          "코인 기반 예약 시스템 개발",
          "구독 결제 연동",
          "숙박시설 OTA API 연동",
          "GCP 인프라 운영, OnCall 대응 (장애 대응 + 고객 문의 대응)",
          "소규모 팀 애자일 개발",
        ],
        tags: ["Ruby on Rails", "GCP", "API 연동", "결제 시스템"],
      },
      {
        number: 5,
        title: "수익형 모바일/웹앱 개발",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQ 라이프스타일 플랫폼",
        motivation: [
          "게이 당사자로서 LGBTQ 커뮤니티의 정보 분산 문제를 DX로 해결하고, 기획부터 수익화까지 1인 완결하는 서비스를 목표로 개발 중입니다.",
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Web", tech: "React, Zustand, TanStack Query" },
          { layer: "Backend", tech: "Ruby on Rails 8.0" },
          { layer: "Infra", tech: "GCP (Cloud Run, Cloud Build, Cloud Tasks)" },
          { layer: "Database", tech: "Supabase (Auth, DB, Realtime)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM, Analytics)" },

        ],
        timeline: [
          { period: "2025-01", milestone: "개발 시작" },
          {
            period: "2025-07",
            milestone: "1.0.0 버전 첫 출시, 유저 700명 돌파",
            description: [
              "지도/위치 기반 커뮤니티·소모임 정보 등록 및 탐색 구조 설계",
              "모임 참여 요청, 승인/거절 등 참여 관리 워크플로우 설계 및 구현",
              "그룹 단위 실시간 커뮤니케이션을 위한 단체 채팅 기능 설계/구현",
              "위치 기반 탐색과 커뮤니티 상호작용을 결합하여 사용자 참여도 및 모임 활성화 구조 개선",
            ],
          },
          {
            period: "2025-09",
            milestone: "2.0.0 버전 출시",
            description: [
              "핵심 사용자 플로우(탐색·참여·커뮤니케이션) 재설계로 사용자 친화적 구조 구현",
              "정보 구조 및 내비게이션 단순화로 사용 편의성 향상",
              "인터페이스 일관성 및 가독성 개선, 접근성 기준 반영",
              "다양한 디바이스 환경 대응 UI 최적화",
              "UX 개선을 통한 사용자 이탈 감소 및 서비스 사용성 향상",
            ],
          },

          {
            period: "2026-01",
            milestone: "3.0.0 버전 출시 (앱 리뉴얼 및 사용자 가이드 설계)",
            description: [
              "가게 검색 → 오너 신청 → 운영팀 승인으로 이어지는 비즈니스 온보딩 플로우 설계",
              "서비스/이벤트 정보 열람 및 사용자 간 1:1 메시징 구조 설계",
              "커뮤니티 게시판(카테고리, 댓글, 이미지 업로드 제한, AI 콘텐츠 필터) 정책 및 UX 정립",
              "프로필 기반 관심사 태그 시스템 설계로 사용자 매칭 및 표현 강화",
              "한국어/일본어/영어/중국어(간·번)/태국어 다국어 지원 구조 설계",
              "게시글·프로필·서비스 정보에 대한 AI 자동 번역 기능 적용",
              "## Admin WebApp",
              "관리자용 대시보드 설계 및 구현으로 사용자/콘텐츠/데이터 통합 관리 기능 구축",
              "유저 상태 관리, 콘텐츠 관리, 신고 처리 등 운영 기능 자동화",
              "로그·모니터링 기반 On-call 대응 프로세스 설계 및 운영",
            ],
          },
          {
            period: "2026-02",
            milestone: "3.2.3 버전 출시",
            description: [
              "익명 게시 및 익명 댓글 기능 추가",
              "댓글 멘션(@) 기능 지원",
              "게시글 및 프로필 자동 번역 성능 개선",
              "주변 항목 거리 표시 및 태그 필터 기능 추가",
              "주변 항목 더보기 기능 제공",
              "마이페이지 게시물 관리 기능 개선",
              "텍스트 선택 및 복사 기능 활성화",
              "위치 기반 지역 정렬 정확도 개선",
              "다크모드 UI 개선",
              "안정성 향상 및 기타 버그 수정",
            ],
          },

        ],
        scope: {
          label: "담당 범위:",
          value: "기획 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅 (UI/UX 디자인 제외 전 영역)",
        },
        tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "Stripe", "AI"],
      },
    ],
  },
  skills: {
    title: "기술 스택",
    groups: [
      {
        category: "Backend",
        items: ["Java Spring", "Ruby on Rails", "REST API"],
      },
      {
        category: "Frontend & Mobile",
        items: ["Flutter", "React", "Next.js", "TypeScript"],
      },
      {
        category: "Infra & Cloud",
        items: ["GCP", "Supabase", "Docker", "GitHub Actions"],
      },
      {
        category: "기타",
        items: ["AI 활용 (Claude, Cursor)"],
      },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default ko;
