# CLAUDE.md — gwsoochoi.github.io

Gwangsoo Choi의 개인 포트폴리오 사이트. Next.js 16 + TypeScript + Tailwind CSS v4 + next-intl 기반의 정적 사이트이며 GitHub Pages에 배포된다.

---

## `.agent/` 진입점

이 저장소에는 `pon-ge/.agent` 구조를 축소 적용한 작업 허브가 있다.

- 전체 허브: `.agent/README.md`
- 요청 형식: `.agent/usage-guide.md`
- 구현 워크플로우: `.agent/engineer/`
- UI 리뷰 워크플로우: `.agent/designer/`
- 프로젝트 개요: `.agent/shared/project-overview.md`

`CLAUDE.md`는 전역 구조와 제약을 설명하고, 실제 작업 절차는 `.agent/`에 둔다.

---

## 실제 프로젝트 구조

```text
app/
  layout.tsx                  # 루트 메타데이터, 폰트 preload
  page.tsx                    # 브라우저 locale 감지 후 /{locale} 이동
  globals.css                 # CSS 변수 기반 디자인 토큰
  sitemap.ts                  # 정적 sitemap
  [locale]/
    layout.tsx                # locale 레이아웃, metadata, Header/Footer
    page.tsx                  # About 페이지
    resume/page.tsx           # Resume 페이지
    Header.tsx                # 네비게이션
    LangSwitcher.tsx          # 언어 전환
    HtmlLang.tsx              # <html lang> 동기화
    ContactButton.tsx         # 연락 CTA
    TechTag.tsx               # 태그 UI
    BulletList.tsx            # 리스트 UI
    ChevronIcon.tsx           # details 아이콘

lib/
  constants.ts
  i18n.ts
  content/
    career.ts                 # 경력 데이터
    languages.ts              # 언어 능력 데이터
    skills.ts                 # 기술 스택 데이터
    keyProjects.ts            # 주요 프로젝트 보조 데이터
    parseOverview.ts          # Resume overview 파서
    types.ts                  # 공통 타입

i18n/
  routing.ts                  # locale 정의
  request.ts                  # next-intl 서버 설정
  navigation.ts               # locale-aware navigation helper

messages/
  ko.json
  ja.json
  en.json

public/
  profile.jpg
  robots.txt
  *.svg
```

---

## 기술 스택

| 항목 | 버전/내용 |
|------|----------|
| Next.js | 16.1.6 (App Router, Static Export) |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) |
| next-intl | ^4.8.4 |
| Husky | ^9 |

---

## i18n

- 지원 locale: `ko`, `ja`, `en`
- 기본 locale: `ja`
- `/` 진입 시 `app/page.tsx`가 브라우저 언어를 감지해 `/{locale}`로 이동
- locale 페이지는 `app/[locale]/` 하위에 위치
- UI 문자열은 `messages/{locale}.json`에서 관리
- 경력 본문 일부는 `lib/content/career.ts` 내부 locale 데이터에 있음

---

## 디자인 토큰

`app/globals.css` 기준:

```css
--background: #13171D;
--foreground: #E2EAF0;
--accent: #4DC4AF;
--accent-light: #163F3A;
--border: #2C2F3A;
--muted: #9198A6;
--tag-bg: rgba(77, 196, 175, 0.12);
--tag-text: #52A896;
--code-bg: #17191F;
```

- 현재 사이트는 dark editorial 톤이 기본이다.
- 새 UI는 위 토큰과 기존 Tailwind 패턴을 우선 재사용한다.

---

## 정적 콘텐츠 데이터

| 파일 | 역할 |
|------|------|
| `lib/content/career.ts` | 경력/프로젝트/성과 데이터 |
| `lib/content/languages.ts` | 언어 능력 |
| `lib/content/skills.ts` | 기술 태그 |
| `lib/content/types.ts` | 공통 타입 |
| `lib/content/parseOverview.ts` | 긴 설명을 Resume UI용 섹션으로 파싱 |

### `career.ts` 패턴

- 공통 메타데이터와 locale별 텍스트를 합치는 구조
- 새 필드 추가 시 "번역 필요 여부"를 먼저 판단해야 한다
- Resume 변경은 보통 아래 파일을 함께 본다

```text
lib/content/career.ts
lib/content/types.ts
lib/content/parseOverview.ts
app/[locale]/resume/page.tsx
messages/*.json
```

---

## 빌드 & 배포

### 로컬

```bash
npm run dev
npm run lint
npm run build
```

### GitHub Actions

- 파일: `.github/workflows/deploy.yml`
- 트리거: `main` push 또는 수동 실행
- Node.js: 25
- 절차: `npm ci` → `npm run build` → `out/` 업로드 → GitHub Pages 배포

### Husky

- `prepare` 스크립트로 훅을 설치한다.
- 구조/번역/라우팅을 바꿨다면 push 전에 `npm run lint`, `npm run build`를 직접 확인하는 것이 안전하다.

---

## 개발 규칙

1. 서버 컴포넌트를 기본으로 한다.
2. 브라우저 API 사용 시에만 `"use client"`를 붙인다.
3. 하드코딩된 UI 텍스트를 추가하지 않는다.
4. 새 번역 키는 `ko`, `ja`, `en` 모두 추가한다.
5. 색상은 CSS 변수 기반 클래스를 우선 사용한다.
6. `any` 사용을 피하고 공통 타입은 `lib/content/types.ts`에 둔다.
7. 구조가 바뀌면 `.agent` 또는 `CLAUDE.md`도 같이 갱신한다.

### 커밋 메시지

```text
<type>(web): <description>
```

예시:

```text
feat(web): refresh resume highlights
fix(web): sync missing locale keys
docs(web): add agent workflow hub
```

---

## 주의사항

- `next.config.ts`의 `output: "export"`를 전제로 작업한다.
- locale 페이지는 정적 경로 생성을 고려해야 한다.
- metadata와 language alternates는 locale별로 함께 봐야 한다.
- 긴 일본어/영어 문장은 모바일 줄바꿈을 쉽게 깨뜨리므로 수동 확인이 중요하다.
