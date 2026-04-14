import type { Stage } from "./types";

// 언어에 관계없이 동일한 공통 필드
interface SharedStage {
  number: number;
  employmentType?: "freelance" | "fulltime";
  tags?: string[];
  appInfo?: { name: string; url: string; period?: string };
  companyUrl?: string;
}

const shared: SharedStage[] = [
  { number: 1, employmentType: "freelance", tags: ["Ruby on Rails", "Flutter", "React", "Supabase Auth/DB/Realtime", "GCP Cloud Run/Build/Tasks", "Cloudflare R2/Turnstile", "Firebase FCM/Analytics", "Stripe", "Sentry", "Git", "GitHub", "RSpec"], appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025.01~" }, companyUrl: "https://greatearth.studio.site/" },
  { number: 2 },
  { number: 3 },
  { number: 4, companyUrl: "https://www.lgsciencepark.com/KR/" },
];

// 로케일별 번역 텍스트 (공통 필드 제외)
type LocaleText = Omit<Stage, "number" | "tags" | "appInfo" | "companyUrl">;

const texts: Record<string, LocaleText[]> = {
  ko: [
    {
      title: "LGBTQ 라이프스타일 플랫폼 개발",
      duration: "",
      company: "株式会社GREATEARTH",
      appDescription: "위치 기반 커뮤니티 · 이벤트 · 비즈니스 연결 플랫폼",
      serviceOverview: [
        "## PONGE가 무엇인가요?",
        "LGBTQ+ 커뮤니티를 위한 위치 기반 소셜 앱입니다. 지도에서 주변 사람을 발견하고 실시간 메시지로 대화를 시작하거나, 관심사가 맞는 사람들과 번개 모임을 만들어 온·오프라인으로 이어지는 만남을 돕습니다.",
        "## 왜 만들게 되었나요?",
        "기존 LGBT 앱의 대다수가 데이팅에 집중되어 있어 새로운 콘텐츠가 부족하고, 유저들이 지루함과 피로를 느끼기 쉬운 시장입니다. 데이팅 외의 목적을 해결해주는 앱도 거의 없습니다. PONGE는 커뮤니티 중심의 다양한 콘텐츠와 경험을 제공하고, 새로운 수익 모델을 만들어가기 위해 시작했습니다.",
        "## 무엇을 하고 있나요?",
        "6개 언어를 지원하며, 기획부터 개발·운영·수익화까지 혼자 만들어 운영하고 있습니다. 현재 누적 회원수 약 1,000명, 동시접속자 약 100명 규모입니다.",
        "## v3.5.0 (2026.03)",
        "운동 인증(오운완) 기능 출시 — 랭크 시스템으로 재방문 유도 / 홈 배너 CMS를 만들어 마케팅팀 없이 프로모션 직접 운영 / iOS·Android 각 플랫폼에 맞는 UX 최적화 및 공통 컴포넌트 정리",
        "## v3.4.0 (2026.03)",
        "샤우팅(Shouting) — 지도 기반 실시간 메시지로 주변 유저 발견율 향상 / 이벤트 연결·클러스터링으로 콘텐츠 탐색 편의 개선 / 문의 채팅 + 푸시알림으로 고객 응대 흐름 자동화",
        "## v3.2.3 (2026.02)",
        "익명 게시·멘션·자동 번역 등 커뮤니티 핵심 기능 강화 / 거리 표시·태그 필터로 원하는 콘텐츠를 더 빨리 찾도록 개선 / 접근성 대응으로 다양한 사용 환경 지원",
        "## v3.0.0 (2026.01) — 앱 리뉴얼",
        "가게 등록 → 승인 흐름을 설계해 B2B 수익 모델 기반 마련 / 6개 언어 + AI 자동 번역으로 해외 사용자도 바로 쓸 수 있게 구성 / 커뮤니티 게시판·관심사 태그·1:1 메시징으로 사용자 참여 구조 완성 / Admin WebApp — 관리자 대시보드로 사용자·콘텐츠·신고를 한곳에서 관리, 로그·모니터링 기반 On-call 대응 체계 구축",
        "## v2.0.0 (2025.09)",
        "UX 흐름을 처음부터 다시 설계해 이탈률 개선 / 정보 구조를 단순화하고 여러 디바이스에 맞게 UI 조정",
        "## v1.0.0 (2025.07) — 첫 출시",
        "위치 기반 커뮤니티 탐색·모임 참여·그룹 채팅 등 핵심 기능 구현 / iOS·Android 동시 출시",
        "## 개발 시작 (2025.01)",
        "기획·설계부터 시작하여 서비스 전체를 처음부터 구축",
      ],
      scope: { label: "담당 범위:", value: "기획 → UI/UX 디자인 → 개발 → 인프라 → 스토어 심사 → 운영 → 마케팅 (전 영역)" },
    },
    {
      title: "스타트업", duration: "— 약 4년 / 도쿄(2021.01 ~ 2024.12)",
      locations: [
        { name: "株式会社カブクスタイル", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance", items: ["구독형 여행 플랫폼 HafH 백엔드 개발", "유저 플랜(코인 기반 예약·결제) 시스템 설계·보수·구현 (Stripe 구독 연동)", "Admin 기능 설계·보수·구현", "여러 OTA(숙박시설) API를 연결해 재고·가격을 실시간 동기화", "Rails API 서버 설계·개발, GCP 인프라 운영", "On-call 장애 대응 및 고객 에스컬레이션 처리", "소규모 애자일 팀에서 기획부터 배포까지 전 과정 참여"], tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"] },
        { name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance", items: ["Minerva 투자정보 제공 플랫폼 개발", "3인 체제에서 PL로서 플랫폼 전반 백엔드, DB, REST API 설계 및 개발", "외부 플랫폼 데이터 통합 마이그레이션 진행"], tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"] },
      ],
    },
    {
      title: "SI/SE", duration: "— 약 7년(2013.06 ~ 2024.09)",
      locations: [
        { name: "株式会社リブゲート (도쿄)", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance", items: ["미쓰이스미토모은행 후루사토납세 사이트 리뉴얼 개발 참여", "회원가입 및 로그인, 유저정보 수정 백엔드 개발 참여"], tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"] },
        { name: "株式会社アクロスロード (도쿄)", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime", items: ["NTT DATA 산하 행정 시스템 백엔드 개발 참여"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "주식회사 자이로소프트 (서울)", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime", items: ["우리WON뱅킹 — 우리은행 모바일 뱅킹 앱 개발 참여 (계좌 조회·이체·금융상품 가입)", "포스텍 공간관리 — 포항공과대학교 캠퍼스 시설·공간 예약 관리 시스템 개발 참여"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "주식회사 라이트브레인 (서울)", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime", items: ["아모레퍼시픽몰 — 아모레퍼시픽 공식 뷰티 쇼핑몰 앱 개발 참여 (전 브랜드 통합 커머스)", "해피포인트 — SPC 그룹 통합 멤버십 앱 개발 참여 (전국 6,000여 매장 포인트 적립·사용)"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
      ],
    },
    { title: "LG Electronics 서초R&D캠퍼스", duration: "— 약 1년(2009.02 ~ 2010.02)", company: "웹스토리지 NAS 개발팀 — 테스터" },
  ],
  ja: [
    {
      title: "LGBTQライフスタイルプラットフォーム開発",
      duration: "",
      company: "株式会社GREATEARTH",
      appDescription: "位置情報ベースのコミュニティ・イベント・ビジネス接続プラットフォーム",
      serviceOverview: [
        "## PONGEとは？",
        "LGBTQ+コミュニティのための位置情報ソーシャルアプリです。マップで周りの人を見つけてリアルタイムメッセージで会話を始めたり、趣味が合う人と集まりを作ってオン・オフラインでつながる出会いをサポートします。",
        "## なぜ作ったのか？",
        "既存のLGBTアプリの大多数がデーティングに集中しており、新しいコンテンツが乏しく、ユーザーが飽きや疲れを感じやすいマーケットです。デーティング以外の目的に応えるアプリもほとんどありません。PONGEはコミュニティ中心の多様なコンテンツと体験を提供し、新しい収益モデルを作るために生まれました。",
        "## 何をしているのか？",
        "6言語に対応し、企画から開発・運営・収益化まで一人で作り運営しています。現在、累計会員数 約1,000人、同時接続者 約100人の規模です。",
        "## v3.5.0 (2026.03)",
        "筋トレ記録（オウンワン）機能リリース — ランクシステムでリピート訪問を促進 / ホームバナーCMSを作りマーケティングチームなしでプロモーションを自主運営 / iOS・Android各プラットフォームに合わせたUX最適化と共通コンポーネントの整理",
        "## v3.4.0 (2026.03)",
        "シャウティング（Shouting）— マップベースのリアルタイムメッセージで周辺ユーザー発見率向上 / イベント連携・クラスタリングでコンテンツ探索をしやすく改善 / 問い合わせチャット＋プッシュ通知で顧客対応フローを自動化",
        "## v3.2.3 (2026.02)",
        "匿名投稿・メンション・自動翻訳などコミュニティの主要機能を強化 / 距離表示・タグフィルターで欲しいコンテンツをすぐ見つけられるように改善 / アクセシビリティ対応で様々な利用環境をサポート",
        "## v3.0.0 (2026.01) — アプリリニューアル",
        "店舗登録→承認フローを設計しB2B収益モデルの土台を構築 / 6言語＋AI自動翻訳で海外ユーザーもすぐ使える構成に / コミュニティ掲示板・関心タグ・1:1メッセージングでユーザー参加構造を完成 / Admin WebApp — 管理者ダッシュボードでユーザー・コンテンツ・通報を一箇所で管理、ログ・モニタリングベースのOn-call対応体制を構築",
        "## v2.0.0 (2025.09)",
        "UXフローをゼロから再設計して離脱率を改善 / 情報構造をシンプルにし複数デバイスに合わせてUIを調整",
        "## v1.0.0 (2025.07) — 初回リリース",
        "位置ベースのコミュニティ探索・グループ参加・グループチャットなどコア機能を実装 / iOS・Android同時リリース",
        "## 開発開始 (2025.01)",
        "企画・設計からスタートし、サービス全体をゼロから構築",
      ],
      scope: { label: "担当範囲：", value: "企画 → UI/UXデザイン → 開発 → インフラ → ストア審査 → 運営 → マーケティング（全領域）" },
    },
    {
      title: "スタートアップ", duration: "— 約4年 / 東京（2021.01 ~ 2024.12）",
      locations: [
        { name: "株式会社カブクスタイル", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance", items: ["サブスク型旅行プラットフォーム HafH バックエンド開発", "ユーザープラン（コインベース予約・決済）システムの設計・保守・実装（Stripeサブスク連携）", "Admin機能の設計・保守・実装", "複数のOTA（宿泊施設）APIをつなぎ、在庫・価格をリアルタイム同期", "Rails APIサーバーの設計・開発、GCPインフラの運用", "On-call障害対応とカスタマーエスカレーション処理", "少人数アジャイルチームで企画からデプロイまで全工程に参加"], tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"] },
        { name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance", items: ["Minerva投資情報提供プラットフォーム開発", "3名体制でPLとしてプラットフォーム全般のバックエンド、DB、REST API設計・開発", "外部プラットフォームデータの統合マイグレーション実施"], tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"] },
      ],
    },
    {
      title: "SI/SE", duration: "— 約7年(2013.06 ~ 2024.09)",
      locations: [
        { name: "株式会社リブゲート（東京）", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance", items: ["三井住友銀行ふるさと納税サイトリニューアル開発に参加", "会員登録・ログイン、ユーザー情報修正のバックエンド開発に参加"], tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"] },
        { name: "株式会社アクロスロード（東京）", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime", items: ["NTT DATA傘下の行政システムバックエンド開発に参加"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "株式会社ジャイロソフト（ソウル）", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime", items: ["ウリWONバンキング — ウリ銀行モバイルバンキングアプリ開発に参加（口座照会・振込・金融商品加入）", "POSTECH空間管理 — 浦項工科大学キャンパス施設・空間予約管理システム開発に参加"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "株式会社ライトブレイン（ソウル）", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime", items: ["アモーレパシフィックモール — アモーレパシフィック公式ビューティーショッピングアプリ開発に参加（全ブランド統合コマース）", "ハッピーポイント — SPCグループ統合メンバーシップアプリ開発に参加（全国6,000店舗のポイント獲得・利用）"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
      ],
    },
    { title: "LG Electronics 瑞草R&Dキャンパス", duration: "— 約1年(2009.02 ~ 2010.02)", company: "WebストレージNAS開発チーム — テスター" },
  ],
  en: [
    {
      title: "LGBTQ Lifestyle Platform Development",
      duration: "",
      company: "株式会社GREATEARTH",
      appDescription: "Location-Based Community · Events · Business Connection Platform",
      serviceOverview: [
        "## What is PONGE?",
        "A location-based social app for the LGBTQ+ community. Discover people nearby on the map and start conversations through real-time messaging, or create meetups with like-minded people to turn online connections into real-life encounters.",
        "## Why was it created?",
        "The vast majority of existing LGBT apps are focused on dating, leaving little room for fresh content and causing users to feel bored and fatigued. There are almost no apps that serve purposes beyond dating. PONGE was built to offer community-driven content and diverse experiences, while creating a new business model for the market.",
        "## What am I doing?",
        "Available in 6 languages, built and operated solo from planning through development, operations, and monetization. Currently at ~1,000 registered users and ~100 concurrent users.",
        "## v3.5.0 (2026.03)",
        "Launched Workout Check-in feature — rank system to drive repeat visits / Built a banner CMS so promotions run without a marketing team / Optimized UX per platform (iOS/Android) and organized shared components",
        "## v3.4.0 (2026.03)",
        "Shouting — real-time map messaging to improve nearby user discovery rate / Event linking and clustering for easier content discovery / Inquiry chat + push notifications to streamline customer support",
        "## v3.2.3 (2026.02)",
        "Anonymous posting, mentions, and AI auto-translation to strengthen community features / Distance display and tag filters so users find relevant content faster / Accessibility support for more usage environments",
        "## v3.0.0 (2026.01) — App Renewal",
        "Designed store registration → approval flow for B2B revenue / 6-language support + AI auto-translation for international users / Community board, interest tags, and 1:1 messaging for user engagement / Admin WebApp — dashboard to manage users, content, and reports in one place with log-based On-call response",
        "## v2.0.0 (2025.09)",
        "Redesigned the entire UX flow to reduce drop-off / Simplified information structure and tuned UI for multiple devices",
        "## v1.0.0 (2025.07) — First Release",
        "Built core features: location-based discovery, group participation, and group chat / Launched on iOS and Android simultaneously",
        "## Development Started (2025.01)",
        "Kicked off planning and design, building the entire service from scratch",
      ],
      scope: { label: "Scope:", value: "Planning → UI/UX Design → Development → Infrastructure → Store Review → Operations → Marketing (all areas)" },
    },
    {
      title: "Startup", duration: "— ~4 years / Tokyo (2021.01 ~ 2024.12)",
      locations: [
        { name: "KabuKuStyle Inc.", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance", items: ["Subscription travel platform HafH — Backend development", "Designed, maintained, and implemented the user plan system (coin-based booking and payment, Stripe subscription)", "Designed, maintained, and implemented Admin features", "Connected multiple OTA (accommodation) APIs for real-time inventory and pricing sync", "Rails API server design and development, GCP infrastructure operation", "On-call incident response and customer escalation handling", "Involved in the full cycle from planning to deployment in a small agile team"], tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"] },
        { name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance", items: ["Minerva Investment Info Platform development", "Led as PL in a 3-person team — designed and built the full backend, DB, and REST API", "Executed data integration and migration from external platforms"], tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"] },
      ],
    },
    {
      title: "SI/SE", duration: "— ~7 years(2013.06 ~ 2024.09)",
      locations: [
        { name: "LibGate Inc. (Tokyo)", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance", items: ["Participated in SMBC Furusato Tax Site renewal development", "Participated in backend development for user registration, login, and profile management"], tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"] },
        { name: "Axrossroad Inc. (Tokyo)", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime", items: ["Participated in government operations backend development under NTT DATA"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "Gyrosoft Inc. (Seoul)", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime", items: ["Woori WON Banking — participated in Woori Bank mobile banking app development (account inquiry, transfers, financial products)", "POSTECH Space Management — participated in campus facility and space reservation management system development"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
        { name: "RightBrain Inc. (Seoul)", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime", items: ["AMORE MALL — participated in Amorepacific official beauty shopping app development (all-brand integrated commerce)", "Happy Point — participated in SPC Group integrated membership app development (earn/use points at 6,000+ stores nationwide)"], tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"] },
      ],
    },
    { title: "LG Electronics Seocho R&D Campus", duration: "— ~1 year(2009.02 ~ 2010.02)", company: "Web Storage NAS Dev Team — Tester" },
  ],
};

// 공통 필드 + 로케일 텍스트를 병합
function buildStages(locale: string): Stage[] {
  const localeTexts = texts[locale] ?? texts.ja;
  return shared.map((s, i) => ({ ...s, ...localeTexts[i] }) as Stage);
}

export function getCareerStages(locale: string): Stage[] {
  return buildStages(locale);
}
