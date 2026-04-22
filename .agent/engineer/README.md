# Engineer

> 이 저장소의 구현, 수정, 품질 검증, 배포 점검을 담당하는 엔지니어 워크플로우.

---

## 빠른 시작

```text
check {scope}      현재 구조와 리스크 파악
feat {scope}       새 기능/섹션 추가
fix {scope}        버그 수정
refactor {scope}   구조 개선
improve {scope}    UX/성능/가독성 개선
audit {scope}      리스크 및 품질 점검
ship               마감 검증, 커밋/PR 준비
```

---

## 핵심 컨텍스트

| 파일 | 용도 |
|------|------|
| `context/tech-context.md` | 실제 디렉토리 구조, scope 맵, 정적 export 제약 |
| `../rules/project-rules.md` | 전역 제약 |
| `rules/shared-procedures.md` | 공통 절차 |
| `rules/code-quality.md` | 코드/문서 품질 규칙 |

---

## 이 저장소의 황금 경로

```text
읽기 → scope 좁히기 → 계획 → 구현 → lint/build → locale 수동 확인 → ship
```

이 프로젝트에는 별도 테스트 스위트가 거의 없으므로, `lint + build + locale/manual review`가 사실상 기본 검증선이다.

---

## 자주 다루는 Scope

| Scope | 주요 파일 |
|------|-----------|
| `about` | `app/[locale]/page.tsx`, `lib/content/languages.ts`, `lib/content/skills.ts`, `messages/*.json` |
| `resume` | `app/[locale]/resume/page.tsx`, `lib/content/career.ts`, `lib/content/parseOverview.ts`, `messages/*.json` |
| `header` | `app/[locale]/Header.tsx`, `app/[locale]/LangSwitcher.tsx`, `app/[locale]/layout.tsx` |
| `i18n` | `i18n/*`, `messages/*`, `app/page.tsx` |
| `theme` | `app/globals.css`, 각 페이지의 Tailwind 클래스 |
| `seo` | `app/layout.tsx`, `app/[locale]/layout.tsx`, `app/sitemap.ts`, `public/robots.txt` |
| `deploy` | `.github/workflows/deploy.yml`, `next.config.ts`, `package.json` |

---

## 기본 검증 명령

```bash
npm run lint
npm run build
```

추가 수동 확인:

- `ko`, `ja`, `en` 각 locale에서 주요 페이지 진입
- 좁은 폭에서 header/nav/tag/details 레이아웃 확인
- metadata/canonical/language alternates 확인

---

## 작업 전에 기억할 것

- 번역 문자열은 `messages/*.json`에만 있는 것이 아니다. 경력 본문은 `career.ts`에도 많다.
- `output: "export"` 환경이라 서버 전용 동작이나 런타임 데이터 의존을 쉽게 넣으면 안 된다.
- 새 UI는 기존 dark editorial 톤을 유지해야 한다.

