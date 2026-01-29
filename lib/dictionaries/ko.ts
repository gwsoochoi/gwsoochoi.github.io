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
  service?: { description: string; url: string; name: string };
  overview?: string[];
  tags?: string[];
  appInfo?: { name: string; url: string; period?: string };
  appDescription?: string;
  motivation?: string[];
  serviceOverview?: string[];
  features?: { name: string; description: string }[];
  techStack?: { layer: string; tech: string }[];
  timeline?: { period: string; milestone: string }[];
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
    totalYears: "실무 9년+",
    stages: [
      {
        number: 1,
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
        number: 2,
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
        number: 3,
        title: "수익형 모바일/웹앱 개발",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQ 라이프스타일 플랫폼",
        motivation: [
          "게이 당사자로서 LGBTQ 커뮤니티의 정보 분산 문제를 DX로 해결하고, 기획부터 수익화까지 1인 완결하는 서비스를 목표로 개발 중입니다.",
        ],
        serviceOverview: [
          "LGBTQ 친화 장소 정보 + 커뮤니티 + 채팅을 결합한 플랫폼",
          "모바일 앱 (iOS/Android) + 웹앱 동시 운영",
          "6개 언어 지원, AI 번역 기능",
        ],
        features: [
          { name: "PonGe", description: "LGBTQ 친화 장소 등록/검색/북마크 (위치 기반)" },
          { name: "게시판", description: "커뮤니티 게시물, 좋아요, 댓글" },
          { name: "실시간 채팅", description: "1:1 채팅 (Supabase Realtime)" },
          { name: "구독/결제", description: "모바일 IAP + Web Stripe 연동" },
          { name: "관리자", description: "대시보드, 사용자/콘텐츠/신고 관리" },
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Web", tech: "React, Zustand, TanStack Query" },
          { layer: "Backend", tech: "Ruby on Rails 8.0" },
          { layer: "Infra", tech: "GCP (Cloud Run, Cloud Build, Cloud Tasks)" },
          { layer: "Database", tech: "Supabase (Auth, DB, Realtime)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM, Analytics)" },
          { layer: "결제", tech: "App Store IAP, Google Play IAP, Stripe" },
        ],
        timeline: [
          { period: "2025.01", milestone: "개발 시작" },
          { period: "2025.07", milestone: "앱스토어/플레이스토어 런칭, 유저 700명 돌파" },
          { period: "2025.12", milestone: "버전 3.0 모바일 앱 리뉴얼" },
          { period: "2026.03", milestone: "수익화 시작 (광고, 프리미엄 구독)" },
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
    copyright: "최광수. All rights reserved.",
  },
};

export default ko;
