# CLAUDE.md — gwsoochoi.github.io

Gwangsoo Choi의 개인 포트폴리오 사이트. Next.js 16 + TypeScript + Tailwind CSS v4로 구축된 정적 사이트이며 GitHub Pages에 배포된다.

---

## 프로젝트 구조

```
app/
  layout.tsx                  # 루트 레이아웃 (redirect → defaultLocale)
  page.tsx                    # / → /ja 리다이렉트
  globals.css                 # CSS 변수 기반 테마 + Tailwind import
  [locale]/
    layout.tsx                # 로케일 레이아웃 (Header, Footer, NextIntlClientProvider)
    page.tsx                  # About 페이지
    resume/page.tsx           # 이력서 페이지
    posts/
      page.tsx                # 포스트 목록 (devOnly)
      [slug]/page.tsx         # 포스트 상세
      [slug]/PostBody.tsx     # Markdown 렌더러
    Header.tsx                # 네비게이션 + ThemeSwitcher + LangSwitcher
    ThemeSwitcher.tsx         # 라이트/다크 토글 (localStorage)
    LangSwitcher.tsx          # 언어 전환
    HtmlLang.tsx              # <html lang> 동기화 (Client)

content/
  posts/                      # 블로그 포스트 Markdown 파일

lib/
  posts.ts                    # 포스트 파일 읽기 유틸 (gray-matter)
  content/
    types.ts                  # 공통 타입
    career.ts                 # 경력 데이터
    languages.ts              # 언어 능력 데이터
    skills.ts                 # 기술 스택 데이터

i18n/
  routing.ts                  # 로케일 정의 (ko, ja, en / defaultLocale: ja)
  request.ts                  # next-intl 서버 설정
  navigation.ts               # next-intl Link/redirect 헬퍼

messages/
  ko.json                     # 한국어 번역
  ja.json                     # 일본어 번역
  en.json                     # 영어 번역

public/
  profile.jpg                 # 프로필 사진
```

---

## 기술 스택

| 항목 | 버전/내용 |
|------|----------|
| Next.js | 16.1.6 (App Router, Static Export) |
| React | 19.2.3 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) |
| next-intl | ^4.8.4 (i18n) |
| gray-matter | ^4 (Markdown frontmatter) |
| react-markdown | ^10 + rehype-highlight + remark-gfm |
| Husky | ^9 (pre-push hook) |

---

## i18n

- 로케일: `ko` (한국어), `ja` (일본어), `en` (영어)
- **기본 로케일: `ja`** — `/` 접근 시 `/ja`로 리다이렉트
- 모든 페이지는 `app/[locale]/` 하위에 위치
- 번역 키는 `messages/{locale}.json`에서 관리
- 번역 추가 시 `ko.json`, `ja.json`, `en.json` 세 파일 모두 수정

---

## 테마 (라이트/다크)

- CSS 변수로 관리: `globals.css`의 `:root` (라이트) / `.dark` (다크)
- 기본값: 다크 모드 (`app/layout.tsx`의 `<html className="dark">`)
- `ThemeSwitcher.tsx`: `localStorage("theme")` + `document.documentElement.classList` 조작
- Hydration mismatch 방지: `mounted` 상태로 서버/클라이언트 불일치 방지

### CSS 변수 목록

```css
--background, --foreground, --accent, --accent-light
--border, --muted, --tag-bg, --tag-text, --code-bg
```

Tailwind에서 `bg-background`, `text-foreground`, `text-accent`, `text-muted`, `border-border` 등으로 사용.

---

## 포스트 (블로그)

- 파일 위치: `content/posts/*.md`
- frontmatter 형식:
  ```yaml
  ---
  title: "포스트 제목"
  date: "2025-01-01"
  tags: ["tag1", "tag2"]
  ---
  ```
- **Posts 페이지는 devOnly** — `Header.tsx`에서 `process.env.NODE_ENV === "development"`일 때만 노출
- CI 배포 시 `out/{locale}/posts` 디렉토리를 삭제하여 프로덕션에서 완전 제거

---

## 정적 콘텐츠 데이터 (`lib/content/`)

About/Resume 페이지에 표시되는 경력/언어/기술 데이터는 TypeScript 파일로 관리:

| 파일 | 역할 |
|------|------|
| `career.ts` | 경력 항목 배열 (shared + locale별 텍스트 병합) |
| `languages.ts` | 언어 능력 (로케일별 레벨 텍스트 지원) |
| `skills.ts` | 기술 스택 섹션 배열 |
| `types.ts` | 공통 타입 정의 (`Stage`, `Project`, `LanguageItem`, `SkillSection`) |

### career.ts 구조

`shared` 배열(공통 필드: number, employmentType, tags, appInfo, companyUrl)과 `texts` 객체(로케일별 텍스트)를 `buildStages()`로 병합하는 패턴:

- **shared에 넣는 것:** 언어 무관 데이터 (번호, 고용형태, 태그, URL 등)
- **texts에 넣는 것:** 로케일별 번역이 필요한 텍스트 (title, duration, items, insights 등)
- 새 필드 추가 시: 번역 필요 → texts / 번역 불요 → shared

### Stage 타입 계층 구조 (insights 3단 계층)

```
Stage                          # 최상위 (PONGE, LG Electronics 등)
├── insights?                  # stage 레벨 성과/배운점
├── locations[]?               # 회사별 상세 (스타트업, SI/SE 등)
│   ├── insights?              # location 레벨 성과/배운점
│   └── subProjects[]?         # 회사 내 개별 프로젝트
│       └── insights?          # subProject 레벨 성과/배운점
└── serviceOverview[]?         # "## " prefix로 섹션 분할되는 마크다운 텍스트
```

### Resume 페이지 렌더링 조건

- **stage.insights**: `!("locations" in stage)` 일 때만 렌더링 → locations가 없는 stage(PONGE, LG)에서 표시
- **location.insights**: locations 배열 내 각 location에서 개별 렌더링
- **subProject.insights**: subProjects 배열 내 각 항목에서 개별 렌더링
- **serviceOverview**: `"## "` prefix를 감지해 접이식(details) 섹션으로 분할, 버전 패턴(`v\d`, `개발 시작` 등)은 collapsed

### messages JSON — career 관련 번역 키

```
career.title              # 섹션 제목 ("{years}년 동안 이런 일들을 해봤어요")
career.summary_title      # 핵심 역량 요약
career.summary_solo       # 제품 빌더
career.summary_solo_desc  # 제품 빌더 설명
career.summary_ai         # AI 고효율 엔지니어링
career.summary_ai_desc    # AI 엔지니어링 설명
career.summary_stack      # 풀스택 엔지니어
career.summary_stack_desc # 풀스택 설명
career.now                # "현재" 뱃지
career.freelance          # "프리랜서" 뱃지
career.fulltime           # "정규직" 뱃지
career.approx_years       # "약 {years}년"
career.achievements       # "성과" 라벨
career.learnings          # "배운점" 라벨
career.key_projects       # "주요 프로젝트" 라벨
```

---

## 빌드 & 배포

### 로컬 개발
```bash
npm run dev    # 개발 서버 (http://localhost:3000)
npm run build  # 정적 빌드 → out/
npm run lint   # ESLint
```

### pre-push hook (Husky)
푸시 전 자동 실행:
1. `npm ci`로 `package-lock.json` 동기화 검증
2. `next build`로 빌드 성공 여부 검증

의존성 추가 후 lock file이 맞지 않으면 훅이 실패한다:
```bash
rm -rf node_modules package-lock.json && npm install
```

### CI/CD (GitHub Actions)
- 브랜치: `main` 푸시 시 자동 배포
- Node.js: 25
- 배포 대상: GitHub Pages
- 빌드 후 `out/{ko,ja,en}/posts` 디렉토리 삭제 (devOnly 페이지 제거)

---

## 개발 규칙

### 컴포넌트 작성
- 서버 컴포넌트 기본 — `"use client"` 는 필요한 경우에만 (이벤트 핸들러, useState, useEffect, localStorage 등)
- 파일명: PascalCase (`ThemeSwitcher.tsx`)
- 페이지 파일: `page.tsx` (Next.js 컨벤션)

### 스타일
- Tailwind 유틸리티 클래스 사용
- 색상은 반드시 CSS 변수 기반 클래스 사용 (`text-muted`, `bg-background` 등)
- 직접 색상값 (`text-gray-500` 등) 사용 금지 — 테마 전환이 깨짐

### 번역
- 하드코딩된 한국어/일본어/영어 텍스트 금지
- 모든 UI 텍스트는 `useTranslations()` / `getTranslations()` 경유
- 번역 키 추가 시 세 locale JSON 파일 모두 업데이트

### 타입
- `lib/content/types.ts`에 공통 타입 정의
- `any` 사용 금지

### 커밋 메시지
```
<type>(web): <description>
```
- type: `feat`, `fix`, `refactor`, `chore`
- scope: `web` (이 프로젝트 전용)
- 예시: `feat(web): posts 태그 필터 추가`

---

## 폰트

- `Pretendard JP Variable` (일본어 지원) → `Pretendard Variable` fallback
- `globals.css`와 `@theme` 블록에서 `--font-sans`로 정의
- 폰트 파일은 CDN 로드 (public에 없음)

---

## 주의사항

- `next.config.ts`의 `output: "export"` — 동적 라우팅은 `generateStaticParams()` 필수
- `images.unoptimized: true` — Next.js Image Optimization 비활성화 (정적 사이트이므로)
- `defaultLocale: "ja"` — 영어가 아닌 일본어가 기본값임에 주의
