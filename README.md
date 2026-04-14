# gwsoochoi.github.io

Gwangsoo Choi의 개인 포트폴리오 사이트.
Next.js 16 (App Router, Static Export) + TypeScript + Tailwind CSS v4로 구축되며 GitHub Pages에 배포됩니다.

🌐 **https://gwsoochoi.github.io**

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

## 프로젝트 구조

```
app/
  layout.tsx                  # 루트 레이아웃 (/ → /ja 리다이렉트)
  globals.css                 # CSS 변수 기반 테마 + Tailwind import
  [locale]/
    layout.tsx                # 로케일 레이아웃 (Header, Footer)
    page.tsx                  # About 페이지
    resume/page.tsx           # 이력서 페이지
    posts/page.tsx            # 포스트 목록 (devOnly)
    posts/[slug]/page.tsx     # 포스트 상세
    Header.tsx                # 네비게이션 + LangSwitcher
    ContactButton.tsx         # 연락처 모달 (Client)
    TechTag.tsx               # 기술 태그 공통 컴포넌트
    BulletList.tsx            # 불릿 리스트 공통 컴포넌트
    ChevronIcon.tsx           # 화살표 아이콘 공통 컴포넌트
    LangSwitcher.tsx          # 언어 전환 (Client)
    HtmlLang.tsx              # <html lang> 동기화 (Client)

content/
  posts/                      # 블로그 포스트 Markdown 파일

lib/
  i18n.ts                     # getLocaleStaticParams 헬퍼
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
```

---

## i18n

- 지원 로케일: `ko` (한국어), `ja` (일본어), `en` (영어)
- **기본 로케일: `ja`** — `/` 접근 시 `/ja`로 리다이렉트
- 번역 키 추가 시 `ko.json`, `ja.json`, `en.json` 세 파일 모두 수정

---

## 테마

- **기본값: 다크 모드** (`app/layout.tsx`의 `<html className="dark">`)
- CSS 변수로 관리: `globals.css`의 `:root` (라이트) / `.dark` (다크)
- Tailwind에서 `bg-background`, `text-foreground`, `text-accent`, `text-muted` 등으로 사용

---

## 로컬 개발

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:3000)
npm run build     # 정적 빌드 → out/
npm run lint      # ESLint
```

---

## 배포

### GitHub Actions (자동)

`main` 브랜치 푸시 시 자동 배포:
1. `npm ci`로 의존성 설치
2. `next build`로 정적 빌드 (`out/` 디렉토리 생성)
3. `out/{ko,ja,en}/posts` 삭제 (devOnly 페이지 프로덕션 제거)
4. GitHub Pages에 배포

### Pre-push Hook (Husky)

로컬 푸시 전 자동 실행:
1. `npm ci`로 lock file 동기화 검증
2. `next build`로 빌드 성공 여부 검증

의존성 추가 후 lock file 불일치 시:
```bash
rm -rf node_modules package-lock.json && npm install
```

---

## 개발 규칙

- **서버 컴포넌트 기본** — `"use client"`는 이벤트 핸들러·useState·localStorage 등 필요한 경우에만
- **색상은 CSS 변수 클래스만** — `text-gray-500` 등 직접 색상값 사용 금지 (테마 전환 깨짐)
- **번역 하드코딩 금지** — 모든 UI 텍스트는 `useTranslations()` / `getTranslations()` 경유
- **정적 라우팅** — 동적 라우팅 추가 시 `generateStaticParams()` 필수

### 커밋 메시지 형식

```
<type>(web): <description>
```

예시: `feat(web): About 페이지 Hero 섹션 추가`
