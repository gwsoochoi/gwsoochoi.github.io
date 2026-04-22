# 기술 컨텍스트

> 현재 저장소의 실제 구조와 구현 패턴을 기준으로 정리한 기술 요약.

---

## 1. 스택 요약

| 영역 | 기술 |
|------|------|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| UI | React 19 + Tailwind CSS v4 |
| i18n | next-intl |
| Build | Static Export (`output: "export"`) |
| Deploy | GitHub Actions → GitHub Pages |

---

## 2. 주요 디렉토리

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  [locale]/
    layout.tsx
    page.tsx
    resume/page.tsx
    Header.tsx
    LangSwitcher.tsx
    HtmlLang.tsx
    ContactButton.tsx
    TechTag.tsx
    BulletList.tsx
    ChevronIcon.tsx

lib/
  constants.ts
  i18n.ts
  content/
    career.ts
    languages.ts
    skills.ts
    keyProjects.ts
    parseOverview.ts
    types.ts

i18n/
  routing.ts
  request.ts
  navigation.ts

messages/
  ko.json
  ja.json
  en.json
```

---

## 3. 렌더링 패턴

### 루트 진입

- `app/page.tsx`는 client component다.
- 브라우저 locale을 감지해 `/{locale}`로 이동한다.
- 브라우저 API(`navigator.language`)를 쓰므로 server component로 옮기면 안 된다.

### locale 레이아웃

- `app/[locale]/layout.tsx`가 `NextIntlClientProvider`, Header, Footer, metadata를 담당한다.
- locale 페이지는 `setRequestLocale(locale)`를 호출해 정적 렌더링 맥락을 맞춘다.

### locale 페이지

- `app/[locale]/page.tsx`, `app/[locale]/resume/page.tsx`는 async server component 패턴이다.
- `generateStaticParams`와 `generateMetadata`를 함께 유지한다.

---

## 4. 데이터 패턴

### 번역 문자열

- 공통 UI 문자열은 `messages/*.json`
- `getTranslations()` / `useTranslations()`를 통해 접근

### 정적 콘텐츠

- 경력: `lib/content/career.ts`
- 언어: `lib/content/languages.ts`
- 기술: `lib/content/skills.ts`

특히 `career.ts`는 locale별 텍스트와 공통 메타데이터를 합치는 구조라, 타입과 렌더링 양쪽을 함께 봐야 한다.

### 파서

- `lib/content/parseOverview.ts`는 긴 설명 문자열을 resume UI용 섹션으로 재구성한다.
- resume UI 구조를 손대면 이 파서도 같이 봐야 한다.

---

## 5. Scope 맵

| Scope | 읽어야 할 핵심 파일 |
|------|----------------------|
| `about` | `app/[locale]/page.tsx`, `lib/content/languages.ts`, `lib/content/skills.ts`, `messages/*.json` |
| `resume` | `app/[locale]/resume/page.tsx`, `lib/content/career.ts`, `lib/content/types.ts`, `lib/content/parseOverview.ts` |
| `career` | `lib/content/career.ts`, `lib/content/types.ts`, `app/[locale]/resume/page.tsx` |
| `header` | `app/[locale]/Header.tsx`, `app/[locale]/LangSwitcher.tsx`, `app/[locale]/layout.tsx` |
| `i18n` | `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`, `messages/*.json`, `app/page.tsx` |
| `theme` | `app/globals.css`, `app/[locale]/page.tsx`, `app/[locale]/resume/page.tsx` |
| `seo` | `app/layout.tsx`, `app/[locale]/layout.tsx`, `app/sitemap.ts`, `public/robots.txt` |
| `deploy` | `.github/workflows/deploy.yml`, `next.config.ts`, `package.json` |
| `assets` | `public/*`, `app/icon.svg` |
| `routing` | `app/page.tsx`, `app/[locale]/layout.tsx`, `i18n/*` |

---

## 6. 자주 생기는 실수

1. 새 텍스트를 넣고 `messages` 3개 파일을 모두 안 채움
2. locale 페이지에서 `setRequestLocale` 또는 metadata alternates를 빼먹음
3. server component 안에서 `window`, `navigator`, `localStorage`를 사용함
4. raw 색상값을 직접 넣어 기존 토큰 체계를 흐림
5. resume 페이지에서 긴 문장이나 표가 모바일에서 넘침
6. static export 제약을 잊고 런타임 의존 로직을 넣음

---

## 7. 검증 기준

| 변경 종류 | 필수 검증 |
|----------|-----------|
| UI/class 변경 | `npm run lint`, 모바일 폭 확인 |
| content/messages 변경 | `npm run build`, 3 locale 수동 확인 |
| routing/metadata 변경 | `npm run lint`, `npm run build`, canonical/alternates 확인 |
| deploy 설정 변경 | workflow diff 검토, `npm run build` |

