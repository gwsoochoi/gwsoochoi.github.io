# gwsoochoi.github.io 프로젝트 개요

> 분석 기준: 2026-04-22

---

## 1. 프로젝트 성격

- 목적: 개인 포트폴리오와 이력서 정보를 다국어로 제공하는 정적 사이트
- 배포: GitHub Pages
- 특성: 서버 API나 CMS 없이 TypeScript 데이터와 번역 JSON으로 콘텐츠를 관리

이 저장소의 핵심은 "복잡한 기능"보다 "정적 export 제약 안에서 콘텐츠와 UI를 정확하게 유지하는 것"이다.

---

## 2. 기술 스택

| 영역 | 기술 |
|------|------|
| Framework | Next.js 16 App Router |
| Runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS variables |
| i18n | next-intl |
| Deploy | GitHub Actions + GitHub Pages |

---

## 3. 실제 디렉토리 맵

```text
app/
  layout.tsx                  루트 메타데이터, 폰트 preload
  page.tsx                    브라우저 locale 감지 후 /{locale} 이동
  globals.css                 디자인 토큰
  [locale]/
    layout.tsx                locale 메타데이터, Header/Footer, provider
    page.tsx                  About 페이지
    resume/page.tsx           Resume 페이지
    Header.tsx                네비게이션
    LangSwitcher.tsx          언어 전환
    ContactButton.tsx         연락 CTA
    BulletList.tsx            공통 리스트 UI
    TechTag.tsx               공통 태그 UI
    ChevronIcon.tsx           disclosure 아이콘
    HtmlLang.tsx              <html lang> 동기화

lib/content/
  career.ts                   이력서 핵심 데이터
  skills.ts                   기술 태그 데이터
  languages.ts                언어 능력 데이터
  parseOverview.ts            resume용 overview 파서
  types.ts                    공통 타입

i18n/
  routing.ts                  locale 정의
  request.ts                  next-intl 서버 설정
  navigation.ts               locale-aware navigation 헬퍼

messages/
  ko.json
  ja.json
  en.json
```

---

## 4. 핵심 페이지와 변경 포인트

| Scope | 핵심 파일 | 자주 깨지는 지점 |
|------|-----------|------------------|
| `about` | `app/[locale]/page.tsx` | 번역 누락, CTA 레이아웃, 소개 문장 길이 |
| `resume` | `app/[locale]/resume/page.tsx` | 긴 텍스트 줄바꿈, disclosure 구조, 표 overflow |
| `career` | `lib/content/career.ts` | locale 데이터 정합성, 타입 누락 |
| `header` | `app/[locale]/Header.tsx`, `LangSwitcher.tsx` | 활성 상태, locale 유지 |
| `theme` | `app/globals.css` | 대비비, CSS 토큰 누락, 기존 톤 이탈 |
| `seo` | `app/layout.tsx`, `app/[locale]/layout.tsx`, `app/sitemap.ts` | metadata/canonical/language alternates |
| `deploy` | `.github/workflows/deploy.yml`, `next.config.ts` | static export 제약, artifact 경로 |

---

## 5. 콘텐츠 구조 특징

### 경력 데이터

- `career.ts`는 언어 공통 데이터와 locale별 텍스트를 조합하는 구조다.
- resume 페이지의 많은 UI는 이 파일의 shape에 강하게 의존한다.
- 경력 관련 변경은 보통 다음 파일을 같이 본다.

```text
lib/content/career.ts
lib/content/types.ts
lib/content/parseOverview.ts
app/[locale]/resume/page.tsx
messages/*.json
```

### 번역

- UI 문자열은 `messages/*.json`에 있고, 실제 경력 본문 상당수는 `career.ts` 내부 locale 데이터에 있다.
- 따라서 "번역 수정"이라고 해도 JSON만 보면 안 되고, 어떤 텍스트가 어디 소스에 있는지 먼저 분리해야 한다.

---

## 6. 중요한 제약

1. 정적 export라서 서버 런타임 의존 코드는 피해야 한다.
2. locale 페이지는 `generateStaticParams` 또는 동등한 정적 경로 생성을 고려해야 한다.
3. 브라우저 API는 `app/page.tsx`처럼 client component 안에서만 써야 한다.
4. 새 UI 텍스트는 `ko`, `ja`, `en` 모두 채워야 한다.
5. 현재 디자인 언어는 다크 배경 + 얇은 border + teal accent 중심이다.

---

## 7. 검증 우선순위

### 자동 검증

```bash
npm run lint
npm run build
```

### 수동 검증

- `ko`, `ja`, `en` 각각 About/Resume 진입 확인
- 모바일 폭에서 헤더, 태그, details 영역 줄바꿈 확인
- 링크, canonical, footer 문구 등 locale별 메타 노출 확인

---

## 8. 문서 운영 원칙

- 다중 파일 변경이 예상되면 `briefs/`에 먼저 정리한다.
- 라우팅/데이터 shape/배포 방식 변경은 `decisions/`에 기록한다.
- `.agent` 문서는 현재 코드 구조를 따라야 하며, 실제 파일과 어긋나면 코드 기준으로 업데이트한다.

