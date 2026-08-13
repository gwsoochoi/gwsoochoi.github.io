import type { ProjectCase } from "./types";

// 언어에 관계없이 동일한 공통 필드
type SharedProject = Pick<
  ProjectCase,
  | "slug"
  | "name"
  | "platforms"
  | "version"
  | "featured"
  | "url"
  | "appStoreUrl"
  | "playStoreUrl"
>;

const shared: SharedProject[] = [
  {
    slug: "saydraw",
    name: "SayDraw",
    platforms: "iOS · iPadOS",
    version: "v1.3.1",
    featured: true,
    url: "https://saydraw.com/",
    appStoreUrl: "https://apps.apple.com/us/app/saydraw/id6783574842",
  },
  {
    slug: "ponge",
    name: "PONGE",
    platforms: "iOS · Android",
    version: "v3.5.0",
    url: "https://ponge.app/",
    appStoreUrl: "https://apps.apple.com/us/app/ponge/id6747275359",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.greatearth.ponge",
  },
  {
    slug: "hafh",
    name: "HafH",
    platforms: "Web App",
    url: "https://www.hafh.com/",
  },
];

// 로케일별 번역 텍스트 (공통 필드 제외)
type LocaleText = Omit<ProjectCase, keyof SharedProject>;

const texts: Record<string, LocaleText[]> = {
  ko: [
    {
      summary:
        "아이의 음성을 안전한 색칠 도안으로 바꾸는 iOS · iPadOS 앱. SwiftUI · PencilKit 앱과 Rails 8 API로 구성했고 한국어 · 일본어 · 영어를 지원합니다.",
      status: "App Store 공개 중",
    },
    {
      summary:
        "지도에서 주변 사람을 발견하고 실시간 메시지 · 모임으로 이어지는 위치 기반 커뮤니티 앱. Rails 8 공통 API에 SwiftUI iOS와 Jetpack Compose Android, Admin을 함께 운영합니다.",
      status: "운영 중 · 지속 릴리즈",
    },
    {
      summary:
        "월정액으로 전 세계 숙소에 머무는 구독형 여행 플랫폼. 소규모 애자일 팀에서 Rails API 서버와 GCP 인프라를 담당하며, 플랜 개편에 따른 코인·결제 가격 무중단 마이그레이션, 캠페인 프로모션 로직, 여러 OTA 재고·가격 실시간 동기화, CS 지원 Admin 도구를 설계·구현했습니다.",
      status: "2021.01 ~ 2024.12 · 백엔드 담당",
    },
  ],
  ja: [
    {
      summary:
        "子どもの声を安全な塗り絵に変えるiOS・iPadOSアプリ。SwiftUI・PencilKitアプリとRails 8 APIで構成し、韓国語・日本語・英語に対応しています。",
      status: "App Store公開中",
    },
    {
      summary:
        "マップで周りの人を見つけ、リアルタイムメッセージや集まりにつながる位置情報コミュニティアプリ。Rails 8の共通APIにSwiftUI iOSとJetpack Compose Android、Adminを合わせて運用しています。",
      status: "運営中・継続リリース",
    },
    {
      summary:
        "月額定額で世界中の宿泊施設に泊まれるサブスク型旅行プラットフォーム。少人数のアジャイルチームでRails APIサーバーとGCPインフラを担当し、プラン改定に伴うコイン・決済価格の無停止マイグレーション、キャンペーンのプロモーションロジック、複数OTAの在庫・価格のリアルタイム同期、CS支援のAdminツールを設計・実装しました。",
      status: "2021.01 ~ 2024.12 · バックエンド担当",
    },
  ],
  en: [
    {
      summary:
        "An iOS/iPadOS app that turns a child's voice into safe coloring pages. Built with a SwiftUI/PencilKit app and a Rails 8 API, available in Korean, Japanese and English.",
      status: "Live on the App Store",
    },
    {
      summary:
        "A location-based community app for discovering people nearby and connecting through real-time messaging and meetups. A shared Rails 8 API runs alongside SwiftUI on iOS, Jetpack Compose on Android and an admin app.",
      status: "Live · shipping continuously",
    },
    {
      summary:
        "A subscription travel platform for staying at accommodations worldwide on a flat monthly fee. In a small agile team I owned the Rails API server and GCP infrastructure, delivering a zero-downtime coin and pricing migration for a plan overhaul, campaign promotion logic, real-time inventory and price sync across multiple OTAs, and admin tooling for customer support.",
      status: "2021.01 ~ 2024.12 · backend engineer",
    },
  ],
};

export function getProjectCases(locale: string): ProjectCase[] {
  const localeTexts = texts[locale] ?? texts.ja;
  return shared.map((project, idx) => ({ ...project, ...localeTexts[idx] }));
}
