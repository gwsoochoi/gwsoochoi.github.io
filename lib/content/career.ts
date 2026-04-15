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
        "6개 언어를 지원하며, 프로젝트 오너이자 리더로서 디자인·UI/UX·신기능 기획을 담당하는 멤버와 2인 체제로 개발하고 있습니다. 프로덕트의 방향성과 기술 전반을 리드하며 기획부터 개발·운영·수익화까지 담당합니다. 현재 누적 회원수 약 1,000명, 동시접속자 약 100명 규모입니다.",
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
      insights: {
        achievements: [
          "출시 6개월 내 누적 회원 약 1,000명·동시접속자 약 100명 달성",
          "B2B 가게 등록·승인 수익 모델 설계·구현",
          "배너 CMS 구축으로 마케팅팀 없이 프로모션 직접 운영",
          "6개 언어 + AI 자동번역으로 해외 유저 온보딩 구조 구축",
        ],
        learnings: [
          "기획·개발·인프라·운영 전 영역의 기술을 리드하며 프로덕트 전 사이클 체득",
          "Flutter + Supabase Realtime 기반 위치 실시간 기능 설계·구현 역량 습득",
          "짧은 릴리즈 사이클로 사용자 피드백을 빠르게 반영하는 iteration 방식 체화",
          "AI 에이전트를 코드 관리·리뷰·설계에 통합해 소수 정예 체제에서도 높은 품질을 유지하는 워크플로우 구축",
        ],
      },
    },
    {
      title: "스타트업", duration: "— 약 4년 / 도쿄(2021.01 ~ 2024.12)",
      locations: [
        {
          name: "株式会社カブクスタイル", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance",
          items: ["구독형 여행 플랫폼 HafH 백엔드 개발", "유저 플랜(코인 기반 예약·결제) 시스템 설계·보수·구현 (Stripe 구독 연동)", "Admin 기능 설계·보수·구현", "여러 OTA(숙박시설) API를 연결해 재고·가격을 실시간 동기화", "Rails API 서버 설계·개발, GCP 인프라 운영", "On-call 장애 대응 및 고객 에스컬레이션 처리", "소규모 애자일 팀에서 기획부터 배포까지 전 과정 참여"],
          tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "Stripe 구독 연동 결제 시스템 설계·구현 및 안정적 운영 기여",
              "다수 OTA API 연동으로 재고·가격 실시간 동기화 구현",
              "Admin 기능 전반 설계·구현으로 운영 효율화 기여",
            ],
            learnings: [
              "소규모 애자일 팀에서 기획~배포 전 공정을 경험하며 End-to-End 개발 흐름 체득",
              "Rails + GCP 스택으로 대규모 구독형 서비스 운영 노하우 습득",
              "On-call 대응으로 프로덕션 장애 처리와 고객 에스컬레이션 경험 축적",
            ],
          },
        },
        {
          name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance",
          items: ["Minerva 투자정보 제공 플랫폼 개발", "3인 체제에서 PL로서 플랫폼 전반 백엔드, DB, REST API 설계 및 개발", "외부 플랫폼 데이터 통합 마이그레이션 진행"],
          tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "3인 팀 PL로 Minerva 투자정보 플랫폼 백엔드 전반 설계·개발 완수",
              "외부 플랫폼 데이터 통합 마이그레이션 성공적 완료",
            ],
            learnings: [
              "소규모 팀 리드로 요구사항 정의·설계·구현·납품 전 과정 주도 역량 강화",
              "프리랜서로서 커뮤니케이션·일정·품질 관리를 동시에 처리하는 방법 체득",
            ],
          },
        },
      ],
    },
    {
      title: "SI/SE", duration: "— 약 7년(2013.06 ~ 2024.09)",
      locations: [
        {
          name: "株式会社リブゲート (도쿄)", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance",
          items: ["미쓰이스미토모은행 후루사토납세 사이트 리뉴얼 개발 참여", "회원가입 및 로그인, 유저정보 수정 백엔드 개발 참여"],
          tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
          insights: {
            achievements: ["회원가입·로그인·유저정보 수정 백엔드 기능 개발 완료"],
            learnings: ["금융 서비스에서의 보안 중심 인증 로직 및 Java Spring 실무 경험"],
          },
        },
        {
          name: "株式会社アクロスロード (도쿄)", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime",
          items: ["NTT DATA 산하 행정 시스템 백엔드 개발 참여"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          insights: {
            achievements: ["NTT DATA 산하 대규모 행정 시스템 백엔드 개발 참여 완료"],
            learnings: [
              "대규모 엔터프라이즈 개발 프로세스, 코드 품질 기준, 문서화 경험",
              "레거시 Java Spring 시스템 유지보수 및 기능 확장 역량 습득",
            ],
          },
        },
        {
          name: "주식회사 자이로소프트 (서울)", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime",
          items: ["도면설계·공간관리 솔루션을 개발하는 회사. 기존 윈도우 패키지 솔루션을 웹 서비스로 이관하면서, 솔루션이 필요한 기업에 SI 형태로 웹 애플리케이션을 제공", "3~4명 규모의 팀에서 기획·설계·개발 전 과정을 긴밀하게 협업하며 프로젝트를 수행"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "우리WON뱅킹",
              items: ["은행 직원용 커뮤니티 게시판 및 업무관리 콘텐츠·어드민 개발 참여"],
              insights: {
                achievements: ["은행 직원용 커뮤니티 게시판 및 업무관리 콘텐츠·어드민 기능 개발 기여"],
                learnings: ["3~4명의 소규모 팀에서 역할을 나누고 밀도 높은 커뮤니케이션으로 프로젝트를 완수하는 협업 방식 체득", "모바일 서비스 백엔드 설계와 대규모 트랜잭션 처리 역량 강화"],
              },
            },
            {
              name: "포스텍 공간관리",
              items: ["포항공과대학교 캠퍼스 내 강의실·연구실·회의실 등 공용 시설의 예약·승인·이용 현황을 관리하는 시스템 개발 참여"],
              insights: {
                achievements: ["Java Spring 기반 신규 서비스를 초기 구축부터 개발까지 주도하며 개발자 커리어의 기반 확립"],
                learnings: ["공간관리 도메인(시설 예약·자원 배분·권한 관리) 이해도 향상"],
              },
            },
          ],
        },
        {
          name: "주식회사 라이트브레인 (서울)", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime",
          items: ["CRM 웹 애플리케이션 SI 개발을 주력으로 하는 회사에서 대형 고객사 프로젝트에 참여", "시스템 사양서를 기반으로 개발하는 업무가 메인이며, 설계 조정이 필요한 경우 PM·디자이너와 협업"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "아모레퍼시픽몰",
              items: ["전 브랜드 통합 커머스 앱에서 회원가입·정보수정·마이페이지 등 CRM 부가 기능 개발"],
              insights: {
                achievements: ["전 브랜드 통합 커머스 앱 주요 기능 개발 참여 완료"],
                learnings: ["커머스 도메인의 복잡한 비즈니스 로직 이해", "첫 실무 경험으로 팀 협업, 코드 리뷰, 품질 기준의 중요성 체득"],
              },
            },
            {
              name: "해피포인트",
              items: ["전국 6,000여 매장 멤버십 앱에서 회원가입·정보수정·마이페이지 등 CRM 부가 기능 개발"],
              insights: {
                achievements: ["전국 6,000여 매장 포인트 적립·사용 시스템 개발 참여 완료"],
                learnings: ["멤버십 도메인의 복잡한 비즈니스 로직 이해", "Java Spring 기반 대규모 모바일 서비스 백엔드 개발 기초 역량 습득"],
              },
            },
          ],
        },
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
        "6言語に対応し、プロジェクトオーナー兼リーダーとして、デザイン・UI/UX・新機能企画を担当するメンバーと2人体制で開発しています。プロダクトの方向性と技術面全般をリードしながら、企画から開発・運営・収益化まで担当しています。現在、累計会員数 約1,000人、同時接続者 約100人の規模です。",
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
      insights: {
        achievements: [
          "リリース後6ヶ月以内に累計会員数 約1,000人・同時接続者 約100人を達成",
          "B2B店舗登録・承認フローを設計しビジネス収益モデルを構築",
          "バナーCMS構築でマーケティングチームなしにプロモーションを自主運営",
          "6言語＋AI自動翻訳で海外ユーザーのオンボーディング構成を確立",
        ],
        learnings: [
          "企画・開発・インフラ・運営の全領域で技術をリードし、プロダクトの全サイクルを体得",
          "Flutter＋Supabase Realtimeによる位置情報リアルタイム機能の設計・実装ノウハウを習得",
          "短いリリースサイクルでユーザーフィードバックを迅速に反映するイテレーション手法を体得",
          "AIエージェントをコード管理・レビュー・設計に統合し、少人数体制でも高品質を維持するワークフローを構築",
        ],
      },
    },
    {
      title: "スタートアップ", duration: "— 約4年 / 東京（2021.01 ~ 2024.12）",
      locations: [
        {
          name: "株式会社カブクスタイル", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance",
          items: ["サブスク型旅行プラットフォーム HafH バックエンド開発", "ユーザープラン（コインベース予約・決済）システムの設計・保守・実装（Stripeサブスク連携）", "Admin機能の設計・保守・実装", "複数のOTA（宿泊施設）APIをつなぎ、在庫・価格をリアルタイム同期", "Rails APIサーバーの設計・開発、GCPインフラの運用", "On-call障害対応とカスタマーエスカレーション処理", "少人数アジャイルチームで企画からデプロイまで全工程に参加"],
          tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "Stripeサブスク連携の決済システムを設計・実装し安定運用を実現",
              "複数OTA APIを連携し在庫・価格のリアルタイム同期を構築",
              "Admin機能全般の設計・実装で運用効率化に貢献",
            ],
            learnings: [
              "少人数アジャイルチームで企画からデプロイまで全工程を経験し、End-to-End開発フローを体得",
              "Rails＋GCPスタックで大規模サブスクサービスを運用するノウハウを習得",
              "On-call対応を通じてプロダクション障害処理とカスタマーエスカレーションの対応力を積む",
            ],
          },
        },
        {
          name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance",
          items: ["Minerva投資情報提供プラットフォーム開発", "3名体制でPLとしてプラットフォーム全般のバックエンド、DB、REST API設計・開発", "外部プラットフォームデータの統合マイグレーション実施"],
          tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "3名体制でPLとしてMinerva投資情報プラットフォームのバックエンド全般を設計・開発を完遂",
              "外部プラットフォームデータの統合マイグレーションを完了",
            ],
            learnings: [
              "少人数チームのリードを通じて要件定義から納品まで全工程を主導する力を強化",
              "フリーランスとしてコミュニケーション・スケジュール・品質管理を同時にこなす方法を体得",
            ],
          },
        },
      ],
    },
    {
      title: "SI/SE", duration: "— 約7年(2013.06 ~ 2024.09)",
      locations: [
        {
          name: "株式会社リブゲート（東京）", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance",
          items: ["三井住友銀行ふるさと納税サイトリニューアル開発に参加", "会員登録・ログイン、ユーザー情報修正のバックエンド開発に参加"],
          tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
          insights: {
            achievements: ["会員登録・ログイン・ユーザー情報修正のバックエンド機能開発を完了"],
            learnings: ["金融サービスにおけるセキュリティ重視の認証ロジックとJava Springの実務経験を積む"],
          },
        },
        {
          name: "株式会社アクロスロード（東京）", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime",
          items: ["NTT DATA傘下の行政システムバックエンド開発に参加"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          insights: {
            achievements: ["NTT DATA傘下の大規模行政システムバックエンド開発に参加・完了"],
            learnings: [
              "大規模エンタープライズ開発プロセス・コード品質基準・ドキュメント化の経験を積む",
              "レガシーJava Springシステムの保守・機能拡張のスキルを習得",
            ],
          },
        },
        {
          name: "株式会社ジャイロソフト（ソウル）", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime",
          items: ["図面設計・空間管理ソリューションを開発する会社。既存のWindowsパッケージソリューションをWebサービスへ移行しつつ、ソリューションを必要とする企業にSI形式でWebアプリケーションを提供", "3〜4名規模のチームで企画・設計・開発の全工程を密に連携しながらプロジェクトを遂行"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "ウリWONバンキング",
              items: ["行員向けコミュニティ掲示板および業務管理コンテンツ・Admin開発に参加"],
              insights: {
                achievements: ["行員向けコミュニティ掲示板および業務管理コンテンツ・Admin機能の開発に貢献"],
                learnings: ["3〜4名の小規模チームで役割を分担し、密度の高いコミュニケーションでプロジェクトを完遂する協業スタイルを体得", "モバイルサービスのバックエンド設計と大規模トランザクション処理スキルを強化"],
              },
            },
            {
              name: "POSTECH空間管理",
              items: ["浦項工科大学キャンパス内の講義室・研究室・会議室など共用施設の予約・承認・利用状況を管理するシステム開発に参加"],
              insights: {
                achievements: ["Java Springベースの新規サービスを初期構築から開発まで主導し、開発者キャリアの基盤を確立"],
                learnings: ["空間管理ドメイン（施設予約・リソース配分・権限管理）の理解を深化"],
              },
            },
          ],
        },
        {
          name: "株式会社ライトブレイン（ソウル）", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime",
          items: ["CRM Webアプリケーションの SI開発を主力とする会社で、大手クライアントのプロジェクトに参加", "システム仕様書をもとに開発する業務がメインで、設計の調整が必要な場合はPM・デザイナーと協業"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "アモーレパシフィックモール",
              items: ["全ブランド統合コマースアプリで、会員登録・情報変更・マイページなどCRM付帯機能を開発"],
              insights: {
                achievements: ["全ブランド統合コマースアプリの主要機能開発を完了"],
                learnings: ["コマースドメインの複雑なビジネスロジックを習得", "初めての実務経験でチーム協働・コードレビュー・品質基準の重要性を体得"],
              },
            },
            {
              name: "ハッピーポイント",
              items: ["全国6,000店舗メンバーシップアプリで、会員登録・情報変更・マイページなどCRM付帯機能を開発"],
              insights: {
                achievements: ["全国6,000店舗のポイント積立・利用システム開発を完了"],
                learnings: ["メンバーシップドメインの複雑なビジネスロジックを習得", "Java Springベースの大規模モバイルサービスバックエンド開発の基礎を習得"],
              },
            },
          ],
        },
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
        "Available in 6 languages. As project owner and leader, I drive product direction and lead all technical aspects in a two-person team with a design/UI/UX member — covering planning through development, operations, and monetization. Currently at ~1,000 registered users and ~100 concurrent users.",
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
      insights: {
        achievements: [
          "Reached ~1,000 registered users and ~100 concurrent users within 6 months of launch",
          "Designed and implemented B2B store registration and approval revenue model",
          "Built a banner CMS to run promotions without a marketing team",
          "Established 6-language + AI auto-translation structure for seamless international onboarding",
        ],
        learnings: [
          "Led the technical side across planning, dev, infra, and ops — gaining end-to-end product ownership",
          "Developed hands-on expertise in location-based real-time features with Flutter + Supabase Realtime",
          "Refined rapid iteration skills by running short release cycles with quick user feedback loops",
          "Built a lean-team workflow that maintains high quality through deep AI agent integration",
        ],
      },
    },
    {
      title: "Startup", duration: "— ~4 years / Tokyo (2021.01 ~ 2024.12)",
      locations: [
        {
          name: "KabuKuStyle Inc.", url: "https://kabuk.co.jp/", duration: "2021.01 ~ 2024.12", employmentType: "fulltime-to-freelance",
          items: ["Subscription travel platform HafH — Backend development", "Designed, maintained, and implemented the user plan system (coin-based booking and payment, Stripe subscription)", "Designed, maintained, and implemented Admin features", "Connected multiple OTA (accommodation) APIs for real-time inventory and pricing sync", "Rails API server design and development, GCP infrastructure operation", "On-call incident response and customer escalation handling", "Involved in the full cycle from planning to deployment in a small agile team"],
          tags: ["Ruby on Rails", "React", "MySQL", "GCP", "Stripe", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "Designed and implemented Stripe subscription payment system, contributing to stable production operation",
              "Achieved real-time inventory and pricing sync by integrating multiple OTA APIs",
              "Improved operational efficiency through full design and implementation of Admin features",
            ],
            learnings: [
              "Gained end-to-end development experience from planning to deployment in a small agile team",
              "Acquired know-how for operating large-scale subscription services with Rails + GCP",
              "Built incident response and customer escalation skills through On-call rotations",
            ],
          },
        },
        {
          name: "PPB International", url: "https://www.linkedin.com/company/ppb-international", duration: "2023.01 ~ 2023.12", employmentType: "freelance",
          items: ["Minerva Investment Info Platform development", "Led as PL in a 3-person team — designed and built the full backend, DB, and REST API", "Executed data integration and migration from external platforms"],
          tags: ["Ruby on Rails", "React", "MySQL", "AWS Lightsail", "Git", "GitHub", "RSpec"],
          insights: {
            achievements: [
              "Led as PL in a 3-person team to complete full backend design and development of the Minerva platform",
              "Successfully completed data integration and migration from external platforms",
            ],
            learnings: [
              "Strengthened end-to-end project leadership from requirement definition through delivery",
              "Learned to simultaneously manage communication, scheduling, and quality as a freelancer",
            ],
          },
        },
      ],
    },
    {
      title: "SI/SE", duration: "— ~7 years(2013.06 ~ 2024.09)",
      locations: [
        {
          name: "LibGate Inc. (Tokyo)", url: "https://lib-gate.co.jp/", duration: "2024.06 ~ 2024.09", employmentType: "freelance",
          items: ["Participated in SMBC Furusato Tax Site renewal development", "Participated in backend development for user registration, login, and profile management"],
          tags: ["Java Spring", "PostgreSQL", "Git", "GitLab"],
          insights: {
            achievements: ["Completed backend development for user registration, login, and profile management"],
            learnings: ["Gained practical experience with security-focused authentication logic in a financial service using Java Spring"],
          },
        },
        {
          name: "Axrossroad Inc. (Tokyo)", url: "https://www.wantedly.com/companies/axrossroad", duration: "2019.07 ~ 2020.12", employmentType: "fulltime",
          items: ["Participated in government operations backend development under NTT DATA"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          insights: {
            achievements: ["Completed backend development contribution for large-scale government operations system under NTT DATA"],
            learnings: [
              "Gained experience with enterprise-scale development processes, code quality standards, and documentation",
              "Developed skills for maintaining and extending legacy Java Spring systems",
            ],
          },
        },
        {
          name: "Gyrosoft Inc. (Seoul)", url: "https://www.gyrosoft.co.kr/main", duration: "2015.06 ~ 2018.05", employmentType: "fulltime",
          items: ["A company developing floor-plan design and space management solutions. Migrating an existing Windows package solution to a web service, while delivering SI-based web applications to enterprises needing the solution", "Worked in 3–4 person teams, closely collaborating across planning, design, and development throughout each project"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "Woori WON Banking",
              items: ["Participated in developing internal community boards and business management content/admin for bank employees"],
              insights: {
                achievements: ["Contributed to internal community board and business management content/admin features for bank employees"],
                learnings: ["Learned to deliver projects through close-knit collaboration in small teams of 3–4, with clear role division and high-density communication", "Strengthened backend design and high-volume transaction processing skills for mobile services"],
              },
            },
            {
              name: "POSTECH Space Management",
              items: ["Participated in developing a system to manage booking, approval, and usage of shared campus facilities (classrooms, labs, meeting rooms)"],
              insights: {
                achievements: ["Led a new Java Spring service from initial setup through development, establishing a solid foundation for my engineering career"],
                learnings: ["Deepened domain understanding in space management (facility booking, resource allocation, access control)"],
              },
            },
          ],
        },
        {
          name: "RightBrain Inc. (Seoul)", url: "https://rightbrain.co.kr/", duration: "2013.06 ~ 2015.05", employmentType: "fulltime",
          items: ["An SI company specializing in CRM web application development — joined major enterprise client projects", "Primary workflow: developing based on system specification documents, collaborating with PMs and designers when design adjustments were needed"],
          tags: ["Java Spring", "JSP", "HTML", "CSS", "JavaScript", "Oracle"],
          subProjects: [
            {
              name: "AMORE MALL",
              items: ["Developed CRM features including signup, profile management, and My Page for the all-brand integrated commerce app"],
              insights: {
                achievements: ["Completed key feature development for all-brand integrated beauty commerce app"],
                learnings: ["Gained understanding of complex business logic in commerce domain", "Internalized the importance of team collaboration, code review, and quality standards in first professional experience"],
              },
            },
            {
              name: "Happy Point",
              items: ["Developed CRM features including signup, profile management, and My Page for the 6,000+ store membership app"],
              insights: {
                achievements: ["Completed point earn/use system development across 6,000+ stores nationwide"],
                learnings: ["Gained understanding of complex business logic in membership domain", "Built foundational skills in large-scale mobile service backend development with Java Spring"],
              },
            },
          ],
        },
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
