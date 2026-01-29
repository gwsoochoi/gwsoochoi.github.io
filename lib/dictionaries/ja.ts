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
        items: [
          "新規サービスのローンチから運営までフルスタック担当",
          "バックエンド開発（Rails APIサーバー設計・開発）",
          "管理画面開発",
          "GCPインフラ運用",
          "OnCall対応",
          "少人数チームでのアジャイル開発",
        ],
      },
      {
        number: 3,
        title: "収益型モバイル/Webアプリ開発",
        duration: "",
        items: [
          "個人プロジェクトを進行中で、UI/UXデザイン以外の全領域を統括",
          "AI（Claude、Cursorなど）を活用した生産性の最大化を追求",
        ],
        projects: [
          {
            title: "v1.0 ~ v2.0: LGBTQコミュニティアプリ",
            status: "",
            items: [
              "2024年1月 開発開始",
              "2024年7月 App Store、Google Playストアにリリース",
              "ユーザー数700人突破",
              "Flutter (iOS/Android) + Rails API + GCP",
            ],
            tags: ["Flutter", "Ruby on Rails", "GCP", "Firebase"],
          },
          {
            title: "v3.0: 拡張",
            status: "現在進行中",
            items: [
              "モバイル：既存アプリの機能改善",
              "Web版の新規追加（React）",
              "GCP + Supabase統合でコスト削減と軽量化",
              "AI翻訳機能の追加でグローバル市場進出準備",
            ],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
          {
            title: "v3.1: 本格的な収益化の実施",
            status: "予定",
            items: ["広告収益モデルの導入", "プレミアム機能の有料化"],
            tags: ["Flutter", "React", "Ruby on Rails", "GCP", "Supabase", "Firebase", "AI"],
          },
        ],
        scope: {
          label: "担当範囲：",
          value: "企画 → 開発 → インフラ → ストア審査 → 運用 → マーケティング",
        },
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
