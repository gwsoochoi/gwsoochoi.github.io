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
  appInfo?: { name: string; url: string };
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
        appInfo: { name: "PONGE", url: "https://pon-ge.com/" },
        items: [
          "개인 프로젝트를 진행중이며 UI/UX 디자인 외 모든 영역 총괄",
          "AI(Claude, Cursor 등)를 활용한 생산성 극대화 추구",
        ],
        projects: [
          {
            title: "v1.0 ~ v2.0: LGBTQ 커뮤니티 앱",
            status: "",
            items: [
              "2024년 1월 개발 시작",
              "2024년 7월 앱스토어, 구글 플레이 스토어 런칭",
              "유저 수 700명 돌파",
              "Flutter (iOS/Android) + Rails API + GCP",
            ],
            tags: ["Flutter", "Ruby on Rails", "GCP", "Firebase"],
          },
          {
            title: "v3.0: LGBTQ 커뮤니티 & 정보발신 라이프스타일 앱으로 리뉴얼",
            status: "현재 진행 중",
            items: [
              "모바일: 기존 앱 기능 개선",
              "GCP + Supabase 결합으로 비용 절감 및 경량화",
              "AI 번역 기능 추가로 글로벌 시장 진출 준비",
            ],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
          {
            title: "v3.1: 본격적 수익화 실시",
            status: "예정",
            items: [
              "광고 수익 모델 도입",
              "프리미엄 기능 유료화",
              "Web 어덜트 콘텐츠 서비스 런칭 (React)",
            ],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
        ],
        scope: {
          label: "담당 범위:",
          value: "기획 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅",
        },
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
