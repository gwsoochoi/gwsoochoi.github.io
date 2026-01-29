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
    totalYears: "実務9年以上",
    stages: [
      {
        number: 1,
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
        number: 2,
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
        number: 3,
        title: "収益型モバイル/Webアプリ開発",
        duration: "",
        appInfo: { name: "PONGE", url: "https://pon-ge.com/", period: "2025~" },
        appDescription: "LGBTQライフスタイルプラットフォーム",
        motivation: [
          "ゲイ当事者としてLGBTQコミュニティの情報分散問題をDXで解決し、企画から収益化まで一人で完結するサービスを目指して開発中です。",
        ],
        serviceOverview: [
          "LGBTQ フレンドリーな場所情報 + コミュニティ + チャットを融合したプラットフォーム",
          "モバイルアプリ (iOS/Android) + Webアプリを同時運営",
          "6言語対応、AI翻訳機能",
        ],
        features: [
          { name: "PonGe", description: "LGBTQフレンドリーな場所の登録/検索/ブックマーク（位置情報ベース）" },
          { name: "掲示板", description: "コミュニティ投稿、いいね、コメント" },
          { name: "リアルタイムチャット", description: "1対1チャット (Supabase Realtime)" },
          { name: "購読/決済", description: "モバイルIAP + Web Stripe連携" },
          { name: "管理者", description: "ダッシュボード、ユーザー/コンテンツ/通報管理" },
        ],
        techStack: [
          { layer: "Mobile", tech: "Flutter (iOS/Android)" },
          { layer: "Web", tech: "React, Zustand, TanStack Query" },
          { layer: "Backend", tech: "Ruby on Rails 8.0" },
          { layer: "Infra", tech: "GCP (Cloud Run, Cloud Build, Cloud Tasks)" },
          { layer: "Database", tech: "Supabase (Auth, DB, Realtime)" },
          { layer: "Storage", tech: "Cloudflare R2" },
          { layer: "Push", tech: "Firebase (FCM, Analytics)" },
          { layer: "決済", tech: "App Store IAP, Google Play IAP, Stripe" },
        ],
        timeline: [
          { period: "2024.01", milestone: "開発開始" },
          { period: "2024.07", milestone: "App Store / Play Store リリース" },
          { period: "2024.12", milestone: "ユーザー700人突破" },
          { period: "2025~", milestone: "収益化開始（広告、プレミアム購読）" },
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
    copyright: "チェ・グァンス. All rights reserved.",
  },
};

export default ja;
