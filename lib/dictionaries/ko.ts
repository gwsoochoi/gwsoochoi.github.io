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
  nav: { about: string; resume: string; posts: string };
  profile: {
    name: string;
    role: string;
    imageAlt: string;
    bio: string[];
    bioSub: string;
    location: string;
  };
  about: {
    greeting: string;
    description: string[];
  };
  posts: {
    title: string;
    empty: string;
  };
  career: {
    title: string;
    totalYears: string;
    stages: Stage[];
  };
  languages: {
    title: string;
    items: { name: string; level: string }[];
  };
  philosophy: {
    title: string;
    subtitle: string;
    items: string[];
  };
  skills: {
    title: string;
    sections: { label: string; tags: string[] }[];
  };
  footer: { copyright: string };
}

// 경력 연차 자동 계산: 첫 직장 2013.06 기준, 일본어학교 1년 제외
const careerYears = new Date().getFullYear() - 2013 - 1;
const tokyoYears = new Date().getFullYear() - 2018;

const ko: Dictionary = {
  meta: {
    title: "최광수 | 프로덕트 빌더 ・ 소프트웨어 엔지니어",
    description: "최광수의 포트폴리오 - 프로덕트 빌더 ・ 소프트웨어 엔지니어",
  },
  nav: { about: "About", resume: "이력서", posts: "포스트" },
  profile: {
    name: "최광수",
    role: "프로덕트 빌더 ・ 소프트웨어 엔지니어",
    imageAlt: "최광수 프로필 사진",
    bio: [
      `도쿄 재류중(${tokyoYears}년차)인 개발 ${careerYears}년차 한국인 프로덕트 빌더 ・ 소프트웨어 엔지니어입니다.`,
      "금융·공공 SI부터 구독형 여행 플랫폼 스타트업을 거쳐, 지금은 모바일 앱을 혼자 기획·개발·운영하고 있습니다.",
      "AI를 적극 활용해 개발뿐 아니라 기획·디자인·마케팅까지 직접 하며, 1인 유니콘 기업을 목표로 도전 중입니다.",
      "Firebase Analytics로 가입·이탈 흐름을 추적하고, Admin 대시보드에서 DAU·콘텐츠 지표를 확인하며, Sentry로 에러를 모니터링해 숫자 기반으로 판단합니다.",
    ],
    bioSub: "프리랜서 풀스택 엔지니어로 중/장기 업무위탁도 가능합니다.",
    location: "도쿄 / 시부야",
  },
  about: {
    greeting: "안녕하세요",
    description: [
      "도쿄에서 모바일 앱을 혼자 기획·개발·운영하는 프로덕트 빌더입니다.",
      "AI를 적극 활용해 기획부터 마케팅까지 직접 하며, 1인 유니콘 기업을 목표로 도전하고 있습니다.",
      "프리랜서 풀스택 엔지니어로 중/장기 업무위탁도 가능합니다.",
    ],
  },
  posts: {
    title: "포스트",
    empty: "아직 작성된 포스트가 없습니다.",
  },
  career: {
    title: "경력",
    totalYears: "",
    stages: [
      {
        number: 1,
        title: "AI 피트니스 앱 개발",
        duration: "",
        company: "株式会社GREATEARTH",
        appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
        appDescription: "AI 기반 점진적 몸만들기 앱",
        motivation: [
          "매일의 웨이트 트레이닝 기록과 AI를 결합해, 나에게 맞는 운동 프로그램을 제안하는 서비스입니다.",
          "PONGE를 만들며 쌓은 경험을 살려, 기획부터 디자인·개발까지 AI와 함께 혼자 만들고 있습니다.",
        ],
        tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP Cloud Run", "Docker", "Terraform", "Supabase Auth/DB", "Cloudflare R2", "Firebase FCM", "Git", "GitHub", "RSpec"],
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
      },
      {
        number: 2,
        title: "LGBTQ 라이프스타일 플랫폼 개발",
        duration: "",
        company: "株式会社GREATEARTH",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025.01~" },
        appDescription: "위치 기반 커뮤니티 · 이벤트 · 비즈니스 연결 플랫폼",
        motivation: [
          "LGBTQ 커뮤니티에 흩어진 정보를 하나로 모으고, 기획부터 수익화까지 혼자 운영하는 서비스입니다.",
          "6개 언어 지원, AI 자동 번역, 실시간 지도 기반 소셜 기능을 갖춘 iOS/Android 앱과 Admin WebApp을 혼자 만들어 운영하고 있습니다.",
        ],
        tags: ["Flutter", "React", "Ruby on Rails", "GCP Cloud Run/Build/Tasks", "Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"],
        timeline: [
          {
            period: "2026-03",
            milestone: "3.4.0 ~ 3.5.0 버전 출시",
            description: [
              "## v3.5.0",
              "운동 인증(오운완) 기능 출시 — 랭크 시스템으로 재방문 유도",
              "홈 배너 CMS를 만들어 마케팅팀 없이 프로모션 직접 운영",
              "iOS/Android 각 플랫폼에 맞는 UX 최적화 및 공통 컴포넌트 정리",
              "## v3.4.0",
              "샤우팅(Shouting) — 지도 기반 실시간 메시지로 주변 유저 발견율 향상",
              "이벤트 연결·클러스터링으로 콘텐츠 탐색 편의 개선",
              "문의 채팅 + 푸시알림으로 고객 응대 흐름 자동화",
            ],
          },
          {
            period: "2026-02",
            milestone: "3.2.3 버전 출시",
            description: [
              "익명 게시·멘션·자동 번역 등 커뮤니티 핵심 기능 강화",
              "거리 표시·태그 필터로 원하는 콘텐츠를 더 빨리 찾도록 개선",
              "다크모드·접근성 대응으로 다양한 사용 환경 지원",
            ],
          },
          {
            period: "2026-01",
            milestone: "3.0.0 버전 출시 (앱 리뉴얼)",
            description: [
              "가게 등록 → 승인 흐름을 설계해 B2B 수익 모델 기반 마련",
              "6개 언어 + AI 자동 번역으로 해외 사용자도 바로 쓸 수 있게 구성",
              "커뮤니티 게시판·관심사 태그·1:1 메시징으로 사용자 참여 구조 완성",
              "## Admin WebApp",
              "관리자 대시보드를 만들어 사용자·콘텐츠·신고를 한곳에서 관리",
              "로그·모니터링 기반 On-call 대응 체계 구축",
            ],
          },
          {
            period: "2025-09",
            milestone: "2.0.0 버전 출시",
            description: [
              "UX 흐름을 처음부터 다시 설계해 이탈률 개선",
              "정보 구조를 단순화하고 여러 디바이스에 맞게 UI 조정",
            ],
          },
          {
            period: "2025-07",
            milestone: "1.0.0 첫 출시, 유저 700명 돌파",
            description: [
              "위치 기반 커뮤니티 탐색·모임 참여·그룹 채팅 등 핵심 기능 구현",
              "iOS/Android 동시 출시, 출시 직후 유저 700명 달성",
            ],
          },
          { period: "2025-01", milestone: "개발 시작" },
        ],
        scope: {
          label: "담당 범위:",
          value: "기획 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅 (UI/UX 디자인 제외 전 영역)",
        },
      },
      {
        number: 3,
        title: "미쓰이스미토모은행 후루사토납세 사이트 리뉴얼",
        duration: "— (프리랜서・2024.06 ~ 2024.09)",
        items: [
          "회원가입 및 로그인, 유저정보 수정 백엔드 개발",
        ],
        tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
      },
      {
        number: 4,
        title: "Minerva 투자정보 제공 플랫폼 개발",
        duration: "— (프리랜서・2023.01 ~ 2023.12)",
        items: [
          "3인 체제에서 PL로서 플랫폼 전반 백엔드, DB, REST API 설계 및 개발",
          "외부 플랫폼 데이터 통합 마이그레이션 진행",
        ],
        tags: ["Ruby on Rails", "MySQL", "React", "AWS Lightsail", "Git", "GitHub", "RSpec"],
      },
      {
        number: 5,
        title: "스타트업",
        duration: "— (프리랜서・2021.01~) / 도쿄",
        company: "株式会社カブクスタイル",
        service: {
          description: '구독형 여행 플랫폼 HafH (ハフ) 백엔드 개발',
          url: "https://www.hafh.com/",
          name: "HafH (ハフ)",
        },
        overview: [
          '월정액 구독으로 코인을 모아 호텔·항공권을 예약하는 여행 서비스',
          "국내외 숙박시설·항공권 예약 시스템을 하나로 통합 운영",
        ],
        items: [
          "코인 기반 예약·결제 시스템 설계 및 구현 (Stripe 구독 연동)",
          "여러 OTA(숙박시설) API를 연결해 재고·가격을 실시간 동기화",
          "Rails API 서버 설계·개발, GCP 인프라 운영",
          "On-call 장애 대응 및 고객 에스컬레이션 처리",
          "소규모 애자일 팀에서 기획부터 배포까지 전 과정 참여",
        ],
        tags: ["React", "Ruby on Rails", "MySQL", "Git", "GitHub", "RSpec", "etc."],
      },
      {
        number: 6,
        title: "SE (도쿄)",
        duration: "— 1년",
        company: "NTT DATA 산하 행정 시스템 백엔드 개발 (일본어 업무 환경)",
        tags: ["JSP", "Java Spring", "Oracle", "etc."],
      },
      {
        number: 7,
        title: "일본어학교",
        duration: "— 2018.06 ~ 2019.06",
        company: "일본국제대학부속일본어학교 (도쿄)",
        companyUrl: "https://www.jpschool.ac.jp/",
      },
      {
        number: 8,
        title: "SI/SE (서울)",
        duration: "— 5년 (첫 직장 2013.06~)",
        items: [
          "금융·공공 분야 대규모 시스템 구축 (Java Spring)",
          "대용량 트랜잭션 처리 및 안정성 중심 백엔드 개발",
        ],
        tags: ["JSP", "Java Spring", "Oracle", "etc."],
      },
      {
        number: 9,
        title: "LG Electronics 아르바이트",
        duration: "— 2009.02 ~ 2010.02 (대학 휴학 중)",
        company: "웹스토리지 NAS 개발팀 — 테스터",
      },
      {
        number: 10,
        title: "병역",
        duration: "— 2008.01 ~ 2010.01",
      },
      {
        number: 11,
        title: "대학교 학사",
        duration: "— 2006.03 ~ 2013.02 (휴학 포함)",
        company: "남서울대학교 멀티미디어학과 컴퓨터프로그래밍",
        companyUrl: "https://nsu.ac.kr/?m1=home",
      },
    ],
  },
  languages: {
    title: "언어",
    items: [
      { name: "한국어", level: "모국어" },
      { name: "일본어", level: "비즈니스 · 일상 (2018.06~ 재류 중, JLPT N2)" },
      { name: "영어", level: "일상" },
    ],
  },
  philosophy: {
    title: "개발 성향",
    subtitle: "스타트업에서 쌓은 실전 경험을 바탕으로 나만의 개발 원칙을 만들었고, 제로(0)부터 설계·구현·인프라·배포까지 혼자 완결해 서비스를 출시하고 있습니다. 팀 단위 개발에서는 팀원과의 원활하고 긴밀한 커뮤니케이션을 중요시하며, 프로젝트의 목표에 함께 접근하는 것을 지향합니다. 2025년부터 시작한 개인 프로젝트에서는 기본 클린 아키텍처 방법론에 기반하여 AI 에이전트 Claude Code를 적극 활용하여 개발뿐만 아니라 코드 관리, 리뷰, 설계 및 인프라 파트에서도 혼자서는 할 수 없었던 발전과 경험을 이루었으며, 이 경험과 노하우를 바탕으로 최단시간에 고퀄리티의 서비스를 구축할 수 있게 되었습니다.",
    items: [],
  },
  skills: {
    title: "기술 스택",
    sections: [
      { label: "Backend", tags: ["Java Spring", "Ruby on Rails", "FastAPI", "Python"] },
      { label: "Frontend & Mobile", tags: ["Flutter", "React", "Next.js", "TypeScript", "Vite"] },
      { label: "Database", tags: ["PostgreSQL", "PostGIS", "Oracle", "MySQL"] },
      { label: "Cloud & Infra", tags: ["GCP Cloud Run/Build/Tasks", "Docker", "Terraform"] },
      { label: "CI/CD", tags: ["GitHub Actions", "Git", "GitHub"] },
      { label: "BaaS", tags: ["Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Firestore/Analytics"] },
      { label: "Auth & Payment", tags: ["Google/Apple/Kakao/Line OAuth", "Stripe", "In-App Purchase"] },
      { label: "Monitoring", tags: ["Sentry"] },
      { label: "AI", tags: ["Claude", "Codex", "Gemini", "Cursor"] },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default ko;
