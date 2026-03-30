import type { Dictionary } from "./ko";

const careerYears = new Date().getFullYear() - 2013 - 1;

const ja: Dictionary = {
  meta: {
    title: "チェ・グァンス | 履歴書",
    description: "チェ・グァンスの履歴書 - プロダクトビルダー ・ ソフトウェアエンジニア",
  },
  profile: {
    name: "チェ・グァンス",
    role: "プロダクトビルダー ・ ソフトウェアエンジニア",
    imageAlt: "チェ・グァンス プロフィール写真",
    bio: [
      `東京在住、経験${careerYears}年のプロダクトビルダー ・ ソフトウェアエンジニアです。`,
      "金融・公共SIからサブスク型旅行スタートアップを経て、現在はモバイルアプリを一人で企画・開発・運営しています。",
      "AIを積極活用し、開発・インフラ・デプロイはもちろん企画・デザイン・マーケティングまで能力を拡張し、一人ユニコーン企業を目指して挑戦しています。",
    ],
    bioSub: "フリーランスのフルスタックエンジニアとして中・長期の業務委託も可能です。",
    location: "東京 / 渋谷",
  },
  career: {
    title: "経歴",
    totalYears: "",
    stages: [
      {
        number: 1,
        title: "AIフィットネスアプリ開発",
        duration: "",
        appInfo: { name: "HealthCrub", url: "", period: "2026.04~" },
        appDescription: "AI基盤の段階的ボディメイクソリューション",
        motivation: [
          "ウェイトトレーニング中心のデイリー運動日誌とAIを組み合わせ、パーソナライズされた段階的ボディメイクソリューションを提供するサービスです。",
          "PONGEで培ったノウハウと最適化された方法論をベースに、企画・デザイン・開発までAIを活用した完全な一人開発プロダクトとして進行中です。",
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
        tags: ["Flutter", "Ruby on Rails", "FastAPI", "GCP", "Supabase", "Firebase", "AI"],
      },
      {
        number: 2,
        title: "LGBTQライフスタイルプラットフォーム開発",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "位置情報ベースのコミュニティ・イベント・ビジネス接続プラットフォーム",
        motivation: [
          "LGBTQコミュニティの情報分散問題をDXで解決し、企画から収益化まで一人で完結するサービスを運営中です。",
          "6言語多言語対応、AI自動翻訳、リアルタイム地図ベースのソーシャル機能を備えたiOS/AndroidアプリとAdmin WebAppを一人で開発・運営しています。",
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
            milestone: "3.4.0 ~ 3.5.0 バージョンリリース",
            description: [
              "## v3.5.0",
              "筋トレ記録（オウンワン）機能リリース — ランクシステムでユーザーリテンション強化",
              "ホームバナーCMS構築でマーケティングチームなしにプロモーション自主運営可能",
              "iOS/Androidプラットフォーム別ネイティブUX最適化及び共通コンポーネント体系化",
              "## v3.4.0",
              "シャウティング（Shouting）— マップベースのリアルタイムメッセージで周辺ユーザー発見率向上",
              "イベント連携・クラスタリング導入でコンテンツ消費量増加",
              "問い合わせチャット＋プッシュ通知で顧客対応自動化",
            ],
          },
          {
            period: "2026-02",
            milestone: "3.2.3 バージョンリリース",
            description: [
              "匿名投稿・メンション・自動翻訳等のコミュニティ中核機能を強化",
              "位置ベースの距離表示及びタグフィルターでコンテンツ探索コンバージョン改善",
              "ダークモード・アクセシビリティ改善で多様な利用環境に対応",
            ],
          },
          {
            period: "2026-01",
            milestone: "3.0.0 バージョンリリース（アプリリニューアル）",
            description: [
              "ビジネスオンボーディングフロー（店舗登録→承認）設計でB2B収益モデル基盤構築",
              "6言語多言語対応＋AI自動翻訳でグローバルユーザーアクセシビリティ確保",
              "コミュニティ掲示板・関心タグ・1:1メッセージングでユーザー参加構造を完成",
              "## Admin WebApp",
              "管理者ダッシュボード構築でユーザー・コンテンツ・通報統合運営体制を確立",
              "ログ・モニタリングベースのOn-callプロセス設計および運営",
            ],
          },
          {
            period: "2025-09",
            milestone: "2.0.0 バージョンリリース",
            description: [
              "コアUXフロー全面再設計でユーザー離脱率を低減",
              "情報構造の簡素化及びマルチデバイスUI最適化",
            ],
          },
          {
            period: "2025-07",
            milestone: "1.0.0 初回リリース、ユーザー700人突破",
            description: [
              "位置ベースのコミュニティ探索・グループ参加・グループチャットのコア機能を設計・実装",
              "iOS/Android同時リリース、リリース直後にユーザー700人を獲得",
            ],
          },
          { period: "2025-01", milestone: "開発開始" },
        ],
        scope: {
          label: "担当範囲：",
          value: "企画 → 開発 → インフラ → ストア審査 → 運営 → マーケティング（UI/UXデザイン以外の全領域）",
        },
        tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "Stripe", "AI"],
      },
      {
        number: 3,
        title: "スタートアップ",
        duration: "— 3年 / 東京",
        company: "株式会社カブクスタイル (2021~2024)",
        service: {
          description: "サブスク型旅行プラットフォーム HafH (ハフ) バックエンド開発",
          url: "https://www.hafh.com/",
          name: "HafH (ハフ)",
        },
        overview: [
          "月額サブスクでコインを貯めてホテル・航空券を予約する旅行サービス",
          "国内外の多数の宿泊施設・航空券予約システム統合運営",
        ],
        items: [
          "コインベースの予約・決済システム設計及び実装（Stripeサブスク連携）",
          "複数OTA（宿泊施設）API統合で在庫・価格のリアルタイム同期",
          "Rails APIサーバー設計・開発及びGCPベースインフラ運用",
          "On-call障害対応及びカスタマーエスカレーション処理",
          "少人数アジャイルチームで機能企画からデプロイまで全工程に参加",
        ],
        tags: ["Ruby on Rails", "GCP", "API連携", "決済システム"],
      },
      {
        number: 4,
        title: "SE（東京）",
        duration: "— 1年",
        company: "NTT DATA傘下の行政システムバックエンド開発（日本語業務環境）",
      },
      {
        number: 5,
        title: "日本語学校",
        duration: "— 2018.06 ~ 2019.06",
        company: "日本国際大学付属日本語学校（東京）",
        service: {
          description: "日本国際大学付属日本語学校",
          url: "https://www.jpschool.ac.jp/",
          name: "日本国際大学付属日本語学校",
        },
      },
      {
        number: 6,
        title: "SI/SE（ソウル）",
        duration: "— 5年（初職 2013.06〜）",
        items: [
          "金融・公共分野の大規模システム構築（Java Spring）",
          "大量トランザクション処理及び安定性重視のバックエンド開発",
        ],
      },
      {
        number: 7,
        title: "LG Electronics アルバイト",
        duration: "— 2009.02 ~ 2010.02（大学休学中）",
        company: "WebストレージNAS開発チーム — テスター",
      },
      {
        number: 8,
        title: "兵役",
        duration: "— 2008.01 ~ 2010.01",
      },
      {
        number: 9,
        title: "大学 学士",
        duration: "— 2006.03 ~ 2013.02（休学含む）",
        company: "マルチメディア学科 コンピュータプログラミング",
        companyUrl: "https://mm.nsu.ac.kr/?m1=page%25&menu_id=744%25",
        service: {
          description: "南ソウル大学校",
          url: "https://nsu.ac.kr/?m1=home",
          name: "南ソウル大学校",
        },
      },
    ],
  },
  skills: {
    title: "技術スタック",
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

export default ja;
