import type { Dictionary } from "./ko";

const ja: Dictionary = {
  meta: {
    title: "チェ・グァンス | 履歴書",
    description: "チェ・グァンスの履歴書 - ソフトウェアエンジニア",
  },
  profile: {
    name: "チェ・グァンス",
    role: "ソフトウェアエンジニア",
    imageAlt: "チェ・グァンス プロフィール写真",
    bio: [
      "東京在住の韓国人エンジニアです。",
      "現在は収益型アプリを企画から運営まで一人で開発しています。",
      "AIを活用した生産性の最大化を追求しています。",
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
        title: "大学 学士",
        duration: "— 4年",
        company: "マルチメディア学科 コンピュータプログラミング",
        companyUrl: "https://mm.nsu.ac.kr/?m1=page%25&menu_id=744%25",
        service: {
          description: "南ソウル大学校",
          url: "https://nsu.ac.kr/?m1=home",
          name: "南ソウル大学校",
        },
      },
      {
        number: 2,
        title: "兵役",
        duration: "— 2年",
      },
      {
        number: 3,
        title: "SI/SE",
        duration: "— 6年",
        locations: [
          {
            name: "ソウル",
            duration: "5年",
            items: ["金融・公共の大規模システム開発", "Java Springバックエンド開発"],
          },
          {
            name: "東京",
            duration: "1年",
            items: ["NTT DATA傘下の行政業務処理バックエンドシステム開発"],
          },
        ],
      },
      {
        number: 4,
        title: "スタートアップ",
        duration: "— 3年 / 東京",
        company: "株式会社カブクスタイル (2021~2024)",
        service: {
          description: "サブスク型旅行プラットフォーム HafH (ハフ) バックエンド開発",
          url: "https://www.hafh.com/",
          name: "HafH (ハフ)",
        },
        overview: [
          "月額サブスクでコインを貯めてホテル・航空券を予約する「積立型旅行」サービス",
          "国内外の多数の宿泊施設連携、航空券予約システム統合",
        ],
        items: [
          "Rails APIサーバー設計・開発",
          "コインベースの予約システム開発",
          "サブスク決済連携",
          "宿泊施設OTA API連携",
          "GCPインフラ運用、OnCall対応（障害対応＋顧客問い合わせ対応）",
          "少人数チームでのアジャイル開発",
        ],
        tags: ["Ruby on Rails", "GCP", "API連携", "決済システム"],
      },
      {
        number: 5,
        title: "収益型モバイル/Webアプリ開発",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQライフスタイルプラットフォーム",
        motivation: [
          "ゲイ当事者としてLGBTQコミュニティの情報分散問題をDXで解決し、企画から収益化まで一人で完結するサービスを目指して開発中です。",
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
          { period: "2025-01", milestone: "開発開始" },
          {
            period: "2025-07",
            milestone: "1.0.0 初回リリース、ユーザー700人突破",
            description: [
              "地図/位置情報ベースのコミュニティ・グループ情報登録および検索構造設計",
              "参加リクエスト、承認/拒否などの参加管理ワークフロー設計および実装",
              "グループ単位のリアルタイムコミュニケーションのためのグループチャット機能設計/実装",
              "位置情報ベースの検索とコミュニティインタラクションを融合し、ユーザー参加率およびグループ活性化構造を改善",
            ],
          },
          {
            period: "2025-09",
            milestone: "2.0.0 バージョンリリース",
            description: [
              "主要ユーザーフロー（検索・参加・コミュニケーション）の再設計によるユーザーフレンドリーな構造実現",
              "情報構造およびナビゲーションの簡素化による使いやすさ向上",
              "インターフェースの一貫性および可読性改善、アクセシビリティ基準対応",
              "多様なデバイス環境対応のUI最適化",
              "UX改善によるユーザー離脱低減およびサービスユーザビリティ向上",
            ],
          },

          {
            period: "2026-01",
            milestone: "3.0.0 バージョンリリース（アプリリニューアル及びユーザーガイド設計）",
            description: [
              "店舗検索 → オーナー申請 → 運営チーム承認のビジネスオンボーディングフロー設計",
              "サービス/イベント情報閲覧およびユーザー間1:1メッセージング構造設計",
              "コミュニティ掲示板（カテゴリ、コメント、画像アップロード制限、AIコンテンツフィルター）ポリシー及びUX策定",
              "プロフィールベースの関心タグシステム設計によるユーザーマッチング及び表現強化",
              "韓国語/日本語/英語/中国語（簡・繁）/タイ語の多言語対応構造設計",
              "投稿・プロフィール・サービス情報に対するAI自動翻訳機能適用",
              "## Admin WebApp",
              "管理者用ダッシュボード設計および実装によるユーザー/コンテンツ/データ統合管理機能構築",
              "ユーザー状態管理、コンテンツ管理、通報処理等の運営機能自動化",
              "ログ・モニタリングベースのOn-call対応プロセス設計および運営",
            ],
          },
          {
            period: "2026-02",
            milestone: "3.2.3 バージョンリリース",
            description: [
              "匿名投稿・匿名コメント機能を追加",
              "コメントメンション（@）機能に対応",
              "投稿・プロフィールの自動翻訳精度を改善",
              "周辺アイテムに距離表示とタグフィルターを追加",
              "周辺アイテムの「もっと見る」機能を追加",
              "マイページの投稿管理機能を改善",
              "テキスト選択・コピー機能を有効化",
              "位置情報ベースのエリア並び替えを改善",
              "ダークモードUIを改善",
              "安定性向上および各種バグ修正",
            ],
          },

        ],
        scope: {
          label: "担当範囲：",
          value: "企画 → 開発 → インフラ → ストア審査 → 運営 → マーケティング（UI/UXデザイン以外の全領域）",
        },
        tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "Stripe", "AI"],
      },
    ],
  },
  skills: {
    title: "技術スタック",
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
        category: "その他",
        items: ["AI活用（Claude、Cursor）"],
      },
    ],
  },
  footer: {
    copyright: "Gwangsoo Choi. All rights reserved.",
  },
};

export default ja;
