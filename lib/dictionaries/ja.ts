import type { Dictionary } from "./ko";

const careerYears = new Date().getFullYear() - 2013 - 1;
const tokyoYears = new Date().getFullYear() - 2018;

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
      `東京在住(${tokyoYears}年目)、開発経験${careerYears}年のプロダクトビルダー ・ ソフトウェアエンジニアです。`,
      "金融・公共SIからサブスク型旅行スタートアップを経て、今はモバイルアプリを一人で企画・開発・運営しています。",
      "AIを積極的に使い、開発だけでなく企画・デザイン・マーケティングまで自分でやりながら、一人ユニコーン企業を目指しています。",
      "Firebase Analyticsで登録・離脱の流れを追い、AdminダッシュボードでDAU・コンテンツ指標を確認し、Sentryでエラーを監視しながら、数字をもとに判断しています。",
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
        items: [
          "会員登録・ログイン、ユーザー情報修正のバックエンド開発",
        ],
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
    ],
  },
  languages: {
    title: "言語",
    items: [
      { name: "韓国語", level: "母国語" },
      { name: "日本語", level: "ビジネス・日常（2018.06〜 在留中、JLPT N2）" },
      { name: "英語", level: "日常" },
    ],
  },
  philosophy: {
    title: "開発スタイル",
    subtitle: "スタートアップでの実務経験をもとに自分なりの開発原則を作り、ゼロから設計・実装・インフラ・デプロイまで一人で完結してサービスをリリースしています。チーム開発ではメンバーとの円滑で密なコミュニケーションを重視し、プロジェクトの目標に一緒に向かうことを大切にしています。2025年から始めた個人プロジェクトではクリーンアーキテクチャの方法論をベースに、AIエージェントClaude Codeを積極的に活用し、開発だけでなくコード管理、レビュー、設計、インフラの各パートで一人では得られなかった成長と経験を実現。この経験とノウハウをもとに、最短時間で高品質なサービスを構築できるようになりました。",
    items: [],
  },
  skills: {
    title: "技術スタック",
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

export default ja;
