import type { Stage } from "./types";

const ko: Stage[] = [
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
    items: ["회원가입 및 로그인, 유저정보 수정 백엔드 개발"],
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
      description: "구독형 여행 플랫폼 HafH (ハフ) 백엔드 개발",
      url: "https://www.hafh.com/",
      name: "HafH (ハフ)",
    },
    overview: [
      "월정액 구독으로 코인을 모아 호텔·항공권을 예약하는 여행 서비스",
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
];

const ja: Stage[] = [
  {
    number: 1,
    title: "AIフィットネスアプリ開発",
    duration: "",
    company: "株式会社GREATEARTH",
    appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
    appDescription: "AIを活用した段階的ボディメイクアプリ",
    motivation: [
      "毎日のウェイトトレーニング記録とAIを組み合わせ、自分に合ったワークアウトプログラムを提案するサービスです。",
      "PONGEで得た経験を活かし、企画からデザイン・開発までAIと一緒に一人で作っています。",
    ],
    tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP Cloud Run", "Docker", "Terraform", "Supabase Auth/DB", "Cloudflare R2", "Firebase FCM", "Git", "GitHub", "RSpec"],
    timeline: [
      {
        period: "2026-04",
        milestone: "1.0.0 Google Play / App Store 同時リリース予定",
        description: [
          "ウェイトトレーニングのデイリー運動日誌記録及び履歴管理",
          "AIベースのパーソナライズされたワークアウトプログラム提案",
          "漸進的過負荷トラッキング及び成長の可視化",
        ],
      },
      { period: "2026-04", milestone: "開発開始" },
    ],
    scope: {
      label: "担当範囲：",
      value: "企画 → デザイン → 開発 → インフラ → ストア審査 → 運営（AI活用の完全一人開発）",
    },
  },
  {
    number: 2,
    title: "LGBTQライフスタイルプラットフォーム開発",
    duration: "",
    company: "株式会社GREATEARTH",
    appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025.01~" },
    appDescription: "位置情報ベースのコミュニティ・イベント・ビジネス接続プラットフォーム",
    motivation: [
      "LGBTQコミュニティに散らばった情報を一つにまとめ、企画から収益化まで一人で回しているサービスです。",
      "6言語対応、AI自動翻訳、リアルタイム地図ベースのソーシャル機能を持つiOS/AndroidアプリとAdmin WebAppを一人で開発・運営しています。",
    ],
    tags: ["Flutter", "React", "Ruby on Rails", "GCP Cloud Run/Build/Tasks", "Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"],
    timeline: [
      {
        period: "2026-03",
        milestone: "3.4.0 ~ 3.5.0 バージョンリリース",
        description: [
          "## v3.5.0",
          "筋トレ記録（オウンワン）機能リリース — ランクシステムでリピート訪問を促進",
          "ホームバナーCMSを作り、マーケティングチームなしでプロモーションを自主運営",
          "iOS/Android各プラットフォームに合わせたUX最適化と共通コンポーネントの整理",
          "## v3.4.0",
          "シャウティング（Shouting）— マップベースのリアルタイムメッセージで周辺ユーザー発見率向上",
          "イベント連携・クラスタリングでコンテンツ探索をしやすく改善",
          "問い合わせチャット＋プッシュ通知で顧客対応フローを自動化",
        ],
      },
      {
        period: "2026-02",
        milestone: "3.2.3 バージョンリリース",
        description: [
          "匿名投稿・メンション・自動翻訳などコミュニティの主要機能を強化",
          "距離表示・タグフィルターで欲しいコンテンツをすぐ見つけられるように改善",
          "ダークモード・アクセシビリティ対応で様々な利用環境をサポート",
        ],
      },
      {
        period: "2026-01",
        milestone: "3.0.0 バージョンリリース（アプリリニューアル）",
        description: [
          "店舗登録→承認フローを設計し、B2B収益モデルの土台を構築",
          "6言語＋AI自動翻訳で海外ユーザーもすぐ使える構成に",
          "コミュニティ掲示板・関心タグ・1:1メッセージングでユーザー参加構造を完成",
          "## Admin WebApp",
          "管理者ダッシュボードを作り、ユーザー・コンテンツ・通報を一箇所で管理",
          "ログ・モニタリングベースのOn-call対応体制を構築",
        ],
      },
      {
        period: "2025-09",
        milestone: "2.0.0 バージョンリリース",
        description: [
          "UXフローをゼロから再設計して離脱率を改善",
          "情報構造をシンプルにし、複数デバイスに合わせてUIを調整",
        ],
      },
      {
        period: "2025-07",
        milestone: "1.0.0 初回リリース、ユーザー700人突破",
        description: [
          "位置ベースのコミュニティ探索・グループ参加・グループチャットなどコア機能を実装",
          "iOS/Android同時リリース、リリース直後にユーザー700人を達成",
        ],
      },
      { period: "2025-01", milestone: "開発開始" },
    ],
    scope: {
      label: "担当範囲：",
      value: "企画 → 開発 → インフラ → ストア審査 → 運営 → マーケティング（UI/UXデザイン以外の全領域）",
    },
  },
  {
    number: 3,
    title: "三井住友銀行ふるさと納税サイトリニューアル",
    duration: "— (フリーランス・2024.06 ~ 2024.09)",
    items: ["会員登録・ログイン、ユーザー情報修正のバックエンド開発"],
    tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
  },
  {
    number: 4,
    title: "Minerva投資情報提供プラットフォーム開発",
    duration: "— (フリーランス・2023.01 ~ 2023.12)",
    items: [
      "3名体制でPLとしてプラットフォーム全般のバックエンド、DB、REST API設計・開発",
      "外部プラットフォームデータの統合マイグレーション実施",
    ],
    tags: ["Ruby on Rails", "MySQL", "React", "AWS Lightsail", "Git", "GitHub", "RSpec"],
  },
  {
    number: 5,
    title: "スタートアップ",
    duration: "— (フリーランス・2021.01~) / 東京",
    company: "株式会社カブクスタイル",
    service: {
      description: "サブスク型旅行プラットフォーム HafH (ハフ) バックエンド開発",
      url: "https://www.hafh.com/",
      name: "HafH (ハフ)",
    },
    overview: [
      "月額サブスクでコインを貯めてホテル・航空券を予約する旅行サービス",
      "国内外の宿泊施設・航空券予約システムを一つに統合運営",
    ],
    items: [
      "コインベースの予約・決済システムの設計と実装（Stripeサブスク連携）",
      "複数のOTA（宿泊施設）APIをつなぎ、在庫・価格をリアルタイム同期",
      "Rails APIサーバーの設計・開発、GCPインフラの運用",
      "On-call障害対応とカスタマーエスカレーション処理",
      "少人数アジャイルチームで企画からデプロイまで全工程に参加",
    ],
    tags: ["React", "Ruby on Rails", "MySQL", "Git", "GitHub", "RSpec", "etc."],
  },
  {
    number: 6,
    title: "SE（東京）",
    duration: "— 1年",
    company: "NTT DATA傘下の行政システムバックエンド開発（日本語業務環境）",
    tags: ["JSP", "Java Spring", "Oracle", "etc."],
  },
  {
    number: 7,
    title: "日本語学校",
    duration: "— 2018.06 ~ 2019.06",
    company: "日本国際大学付属日本語学校（東京）",
    companyUrl: "https://www.jpschool.ac.jp/",
  },
  {
    number: 8,
    title: "SI/SE（ソウル）",
    duration: "— 5年（初職 2013.06〜）",
    items: [
      "金融・公共分野の大規模システム構築（Java Spring）",
      "大量トランザクション処理及び安定性重視のバックエンド開発",
    ],
    tags: ["JSP", "Java Spring", "Oracle", "etc."],
  },
  {
    number: 9,
    title: "LG Electronics アルバイト",
    duration: "— 2009.02 ~ 2010.02（大学休学中）",
    company: "WebストレージNAS開発チーム — テスター",
  },
  {
    number: 10,
    title: "兵役",
    duration: "— 2008.01 ~ 2010.01",
  },
  {
    number: 11,
    title: "大学 学士",
    duration: "— 2006.03 ~ 2013.02（休学含む）",
    company: "南ソウル大学校 マルチメディア学科 コンピュータプログラミング",
    companyUrl: "https://nsu.ac.kr/?m1=home",
  },
];

const en: Stage[] = [
  {
    number: 1,
    title: "AI Fitness App Development",
    duration: "",
    company: "株式会社GREATEARTH",
    appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
    appDescription: "AI-powered progressive fitness app",
    motivation: [
      "A service that pairs daily weight training logs with AI to suggest workout programs tailored to each user.",
      "Built on what I learned from PONGE — planning, design, and development all done solo with AI.",
    ],
    tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP Cloud Run", "Docker", "Terraform", "Supabase Auth/DB", "Cloudflare R2", "Firebase FCM", "Git", "GitHub", "RSpec"],
    timeline: [
      {
        period: "2026-04",
        milestone: "Version 1.0.0 Google Play / App Store simultaneous launch planned",
        description: [
          "Daily weight training log and history management",
          "AI-based personalized workout program recommendations",
          "Progressive overload tracking and growth visualization",
        ],
      },
      { period: "2026-04", milestone: "Development started" },
    ],
    scope: {
      label: "Scope:",
      value: "Planning → Design → Development → Infrastructure → Store review → Operations (fully AI-assisted solo development)",
    },
  },
  {
    number: 2,
    title: "LGBTQ Lifestyle Platform Development",
    duration: "",
    company: "株式会社GREATEARTH",
    appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025.01~" },
    appDescription: "Location-Based Community · Events · Business Connection Platform",
    motivation: [
      "Bringing scattered LGBTQ community info into one place — running the full service solo, from planning to monetization.",
      "Solo-building and operating an iOS/Android app and Admin WebApp with 6-language support, AI auto-translation, and real-time map-based social features.",
    ],
    tags: ["Flutter", "React", "Ruby on Rails", "GCP Cloud Run/Build/Tasks", "Supabase Auth/DB/Realtime", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"],
    timeline: [
      {
        period: "2026-03",
        milestone: "Version 3.4.0 ~ 3.5.0 release",
        description: [
          "## v3.5.0",
          "Launched Workout Check-in feature — rank system to drive repeat visits",
          "Built a banner CMS so promotions can run without a marketing team",
          "Optimized UX per platform (iOS/Android) and organized shared components",
          "## v3.4.0",
          "Shouting — real-time map messaging to improve nearby user discovery rate",
          "Event linking and clustering for easier content discovery",
          "Inquiry chat + push notifications to streamline customer support",
        ],
      },
      {
        period: "2026-02",
        milestone: "Version 3.2.3 release",
        description: [
          "Added anonymous posting, mentions, and AI auto-translation to strengthen community features",
          "Distance display and tag filters so users find relevant content faster",
          "Dark mode and accessibility support for more usage environments",
        ],
      },
      {
        period: "2026-01",
        milestone: "Version 3.0.0 release (app renewal)",
        description: [
          "Designed store registration → approval flow to lay the groundwork for B2B revenue",
          "6-language support + AI auto-translation so international users can jump right in",
          "Community board, interest tags, and 1:1 messaging to round out user engagement",
          "## Admin WebApp",
          "Built an admin dashboard to manage users, content, and reports in one place",
          "Set up On-call response workflow based on logging and monitoring",
        ],
      },
      {
        period: "2025-09",
        milestone: "Version 2.0.0 release",
        description: [
          "Redesigned the entire UX flow to reduce drop-off",
          "Simplified the information structure and tuned the UI for multiple devices",
        ],
      },
      {
        period: "2025-07",
        milestone: "Version 1.0.0 first release, 700+ users",
        description: [
          "Built core features: location-based discovery, group participation, and group chat",
          "Launched on iOS and Android at the same time, hit 700+ users right after release",
        ],
      },
      { period: "2025-01", milestone: "Development started" },
    ],
    scope: {
      label: "Scope:",
      value: "Planning → Development → Infrastructure → Store review → Operations → Marketing (all areas except UI/UX design)",
    },
  },
  {
    number: 3,
    title: "SMBC Furusato Tax Site Renewal",
    duration: "— (Freelance・2024.06 ~ 2024.09)",
    items: ["Backend development for user registration, login, and profile management"],
    tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
  },
  {
    number: 4,
    title: "Minerva Investment Info Platform",
    duration: "— (Freelance・2023.01 ~ 2023.12)",
    items: [
      "Led as PL in a 3-person team — designed and built the full backend, DB, and REST API",
      "Executed data integration and migration from external platforms",
    ],
    tags: ["Ruby on Rails", "MySQL", "React", "AWS Lightsail", "Git", "GitHub", "RSpec"],
  },
  {
    number: 5,
    title: "Startup",
    duration: "— (Freelance・2021.01~) / Tokyo",
    company: "KabuKuStyle Inc.",
    service: {
      description: "Subscription travel platform HafH — Backend development",
      url: "https://www.hafh.com/",
      name: "HafH",
    },
    overview: [
      "A subscription travel service — users earn coins monthly and use them to book hotels and flights",
      "Connects multiple domestic and international accommodation and flight booking systems",
    ],
    items: [
      "Built the coin-based booking and payment system (Stripe subscription integration)",
      "Connected multiple OTA (accommodation) APIs for real-time inventory and pricing sync",
      "Designed and developed the Rails API server, ran GCP infrastructure",
      "On-call incident response and customer escalation handling",
      "Involved in the full cycle from planning to deployment in a small agile team",
    ],
    tags: ["React", "Ruby on Rails", "MySQL", "Git", "GitHub", "RSpec", "etc."],
  },
  {
    number: 6,
    title: "SE (Tokyo)",
    duration: "— 1 year",
    company: "Government operations backend development under NTT DATA (Japanese work environment)",
    tags: ["JSP", "Java Spring", "Oracle", "etc."],
  },
  {
    number: 7,
    title: "Japanese Language School",
    duration: "— 2018.06 ~ 2019.06",
    company: "Japan International University Japanese Language School (Tokyo)",
    companyUrl: "https://www.jpschool.ac.jp/",
  },
  {
    number: 8,
    title: "SI/SE (Seoul)",
    duration: "— 5 years (first job from 2013.06)",
    items: [
      "Large-scale financial and public sector system development (Java Spring)",
      "High-volume transaction processing and reliability-focused backend development",
    ],
    tags: ["JSP", "Java Spring", "Oracle", "etc."],
  },
  {
    number: 9,
    title: "LG Electronics (Part-time)",
    duration: "— 2009.02 ~ 2010.02 (during university leave)",
    company: "Web Storage NAS Dev Team — Tester",
  },
  {
    number: 10,
    title: "Military Service",
    duration: "— 2008.01 ~ 2010.01",
  },
  {
    number: 11,
    title: "University (Bachelor's)",
    duration: "— 2006.03 ~ 2013.02 (incl. leave)",
    company: "Namseoul University — Dept. of Multimedia, Computer Programming",
    companyUrl: "https://nsu.ac.kr/?m1=home",
  },
];

const stages: Record<string, Stage[]> = { ko, ja, en };

export function getCareerStages(locale: string): Stage[] {
  return stages[locale] ?? stages.ja;
}
