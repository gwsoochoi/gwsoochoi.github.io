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
      "도쿄 기반 15년차 소프트웨어 엔지니어입니다.",
      "금융·공공 SI부터 구독형 여행 플랫폼 스타트업, 현재는 모바일 앱을 1인 기획·개발·운영하고 있습니다.",
      "AI를 적극 활용하여 개발·인프라·배포는 물론 기획·디자인·마케팅까지 역량을 확장하며, 1인 유니콘 기업을 목표로 도전하고 있습니다.",
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
        title: "AI 피트니스 앱 개발",
        duration: "",
        appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
        appDescription: "AI 기반 점진적 몸만들기 솔루션",
        motivation: [
          "웨이트 트레이닝 중심의 데일리 운동일지와 AI를 결합하여, 개인 맞춤형 점진적 몸만들기 솔루션을 제공하는 서비스입니다.",
          "PONGE에서 습득한 노하우와 최적화된 방법론을 바탕으로, 기획·디자인·개발까지 AI를 활용한 완전한 1인 개발 프로덕트로 진행 중입니다.",
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Backend", tech: "Ruby on Rails 8.1, FastAPI" },
          { layer: "Infra", tech: "GCP (Cloud Run), Docker, Terraform" },
          { layer: "Database", tech: "Supabase (Auth, DB)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM)" },
        ],
        timeline: [
          {
            period: "2026-04",
            milestone: "1.0.0 Google Play / App Store 동시 출시 예정",
            description: [
              "웨이트 트레이닝 데일리 운동일지 기록 및 히스토리 관리",
              "AI 기반 개인 맞춤형 운동 프로그램 제안",
              "점진적 과부하 트래킹 및 성장 시각화",
            ],
          },
          { period: "2026-04", milestone: "개발 시작" },
        ],
        scope: {
          label: "담당 범위:",
          value: "기획 → 디자인 → 개발 → 인프라 → 스토어 심사 → 운영 (AI 활용 완전 1인 개발)",
        },
        tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP", "Supabase", "Firebase", "AI"],
      },
      {
        number: 2,
        title: "LGBTQ 라이프스타일 플랫폼 개발",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "위치 기반 커뮤니티 · 이벤트 · 비즈니스 연결 플랫폼",
        motivation: [
          "LGBTQ 커뮤니티의 정보 분산 문제를 DX로 해결하고, 기획부터 수익화까지 1인 완결하는 서비스를 운영 중입니다.",
          "6개 언어 다국어 지원, AI 자동 번역, 실시간 지도 기반 소셜 기능을 갖춘 iOS/Android 앱과 Admin WebApp을 1인 개발·운영하고 있습니다.",
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
          {
            period: "2026-03",
            milestone: "3.4.0 ~ 3.5.0 버전 출시",
            description: [
              "## v3.5.0",
              "운동 인증(오운완) 기능 출시 — 랭크 시스템으로 유저 리텐션 강화",
              "홈 배너 CMS 구축으로 마케팅팀 없이 프로모션 자체 운영 가능",
              "iOS/Android 플랫폼별 네이티브 UX 최적화 및 공통 컴포넌트 체계화",
              "## v3.4.0",
              "샤우팅(Shouting) — 지도 기반 실시간 메시지로 주변 유저 발견율 향상",
              "이벤트 연결·클러스터링 도입으로 콘텐츠 소비량 증가",
              "문의 채팅 + 푸시알림으로 고객 응대 자동화",
            ],
          },
          {
            period: "2026-02",
            milestone: "3.2.3 버전 출시",
            description: [
              "익명 게시·멘션·자동 번역 등 커뮤니티 핵심 기능 강화",
              "위치 기반 거리 표시 및 태그 필터로 콘텐츠 탐색 전환율 개선",
              "다크모드·접근성 개선으로 다양한 사용 환경 대응",
            ],
          },
          {
            period: "2026-01",
            milestone: "3.0.0 버전 출시 (앱 리뉴얼)",
            description: [
              "비즈니스 온보딩 플로우(가게 등록 → 승인) 설계로 B2B 수익 모델 기반 구축",
              "6개 언어 다국어 지원 + AI 자동 번역으로 글로벌 사용자 접근성 확보",
              "커뮤니티 게시판·관심사 태그·1:1 메시징으로 사용자 참여 구조 완성",
              "## Admin WebApp",
              "관리자 대시보드 구축으로 사용자·콘텐츠·신고 통합 운영 체계 확립",
              "로그·모니터링 기반 On-call 프로세스 설계 및 운영",
            ],
          },
          {
            period: "2025-09",
            milestone: "2.0.0 버전 출시",
            description: [
              "핵심 UX 플로우 전면 재설계로 사용자 이탈률 감소",
              "정보 구조 단순화 및 멀티 디바이스 UI 최적화",
            ],
          },
          {
            period: "2025-07",
            milestone: "1.0.0 첫 출시, 유저 700명 돌파",
            description: [
              "위치 기반 커뮤니티 탐색·모임 참여·그룹 채팅 핵심 기능 설계 및 구현",
              "iOS/Android 동시 출시, 출시 직후 유저 700명 확보",
            ],
          },
          { period: "2025-01", milestone: "개발 시작" },
        ],
        scope: {
          label: "담당 범위:",
          value: "기획 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅 (UI/UX 디자인 제외 전 영역)",
        },
        tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "Stripe", "AI"],
      },
      {
        number: 3,
        title: "스타트업",
        duration: "— 3년 / 도쿄",
        company: "株式会社カブクスタイル (2021~2024)",
        service: {
          description: '구독형 여행 플랫폼 HafH (ハフ) 백엔드 개발',
          url: "https://www.hafh.com/",
          name: "HafH (ハフ)",
        },
        overview: [
          '월정액 구독으로 코인을 적립하고 호텔/항공권을 예약하는 여행 서비스',
          "국내외 다수의 숙박시설·항공권 예약 시스템 통합 운영",
        ],
        items: [
          "코인 기반 예약·결제 시스템 설계 및 구현 (Stripe 구독 연동)",
          "복수 OTA(숙박시설) API 통합으로 재고·가격 실시간 동기화",
          "Rails API 서버 설계·개발 및 GCP 기반 인프라 운영",
          "On-call 장애 대응 및 고객 에스컬레이션 처리",
          "소규모 팀 애자일 환경에서 기능 기획부터 배포까지 전 과정 참여",
        ],
        tags: ["Ruby on Rails", "GCP", "API 연동", "결제 시스템"],
      },
      {
        number: 4,
        title: "SE (도쿄)",
        duration: "— 1년",
        company: "NTT DATA 산하 행정 시스템 백엔드 개발 (일본어 업무 환경)",
      },
      {
        number: 5,
        title: "일본어학교",
        duration: "— 2018.06 ~ 2019.06",
        company: "일본국제대학부속일본어학교 (도쿄)",
        service: {
          description: "일본국제대학부속일본어학교",
          url: "https://www.jpschool.ac.jp/",
          name: "일본국제대학부속일본어학교",
        },
      },
      {
        number: 6,
        title: "SI/SE (서울)",
        duration: "— 5년 (첫 직장 2013.06~)",
        items: [
          "금융·공공 분야 대규모 시스템 구축 (Java Spring)",
          "대용량 트랜잭션 처리 및 안정성 중심 백엔드 개발",
        ],
      },
      {
        number: 7,
        title: "LG Electronics 아르바이트",
        duration: "— 2009.02 ~ 2010.02 (대학 휴학 중)",
        company: "웹스토리지 NAS 개발팀 — 테스터",
      },
      {
        number: 8,
        title: "병역",
        duration: "— 2008.01 ~ 2010.01",
      },
      {
        number: 9,
        title: "대학교 학사",
        duration: "— 2006.03 ~ 2013.02 (휴학 포함)",
        company: "멀티미디어학과 컴퓨터프로그래밍",
        companyUrl: "https://mm.nsu.ac.kr/?m1=page%25&menu_id=744%25",
        service: {
          description: "남서울대학교",
          url: "https://nsu.ac.kr/?m1=home",
          name: "남서울대학교",
        },
      },
    ],
  },
  skills: {
    title: "기술 스택",
    groups: [
      {
        category: "Backend",
        items: ["Java Spring", "Ruby on Rails", "FastAPI", "Python"],
      },
      {
        category: "Database",
        items: ["PostgreSQL", "PostGIS", "Oracle", "MySQL"],
      },
      {
        category: "Frontend & Mobile",
        items: ["Flutter", "React", "Next.js", "TypeScript", "Vite"],
      },
      {
        category: "Google Cloud Platform",
        items: ["Cloud Run", "Cloud Build", "Cloud Tasks"],
      },
      {
        category: "Cloudflare",
        items: ["Domains", "CDN (R2)", "Turnstile"],
      },
      {
        category: "DevOps",
        items: ["Docker", "GitHub Actions", "Terraform"],
      },
      {
        category: "Supabase",
        items: ["Database", "Realtime", "Authentication", "Google/Apple OAuth"],
      },
      {
        category: "Firebase",
        items: ["FCM", "Firestore", "Authentication", "Analytics", "Google/Apple/Kakao/Line OAuth"],
      },
      {
        category: "Payment",
        items: ["Stripe", "In-App Purchase (iOS/Android)"],
      },
      {
        category: "Monitoring",
        items: ["Sentry"],
      },
      {
        category: "AI",
        items: ["Claude", "Codex", "Gemini", "Cursor"],
      },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default ko;
