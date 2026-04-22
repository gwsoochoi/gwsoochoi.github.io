# gwsoochoi.github.io 프로젝트 통합 규칙

> 이 문서는 이 저장소에서 AI 협업 시 항상 유지해야 할 전역 제약을 정리한다.

---

## 필수 준수 규칙

1. **읽고 나서 수정한다**  
   수정 전에는 관련 파일을 반드시 직접 읽는다.

2. **실제 파일 구조를 기준으로 판단한다**  
   오래된 문서나 기억을 기준으로 경로를 추정하지 않는다.

3. **변경 범위를 가능한 한 작게 유지한다**  
   단일 페이지/단일 콘텐츠 소스에 국한할 수 있으면 그렇게 한다.

4. **정적 export 제약을 깨지 않는다**  
   `next.config.ts`의 `output: "export"`를 전제로 설계한다.

5. **번역은 3개 locale을 같이 본다**  
   `messages/ko.json`, `messages/ja.json`, `messages/en.json`이 기준이다.

6. **색상은 CSS 변수 기반으로 유지한다**  
   새 스타일은 `globals.css`의 토큰과 기존 Tailwind 패턴을 우선 사용한다.

7. **코드 검증 없이 종료하지 않는다**  
   코드나 라우팅을 건드렸다면 최소 `npm run lint`, `npm run build`를 확인한다.

8. **구조적 결정은 기록한다**  
   라우팅, 데이터 구조, 빌드 방식에 영향을 주는 결정은 `.agent/shared/decisions/`에 남긴다.

---

## 현재 구조 요약

```text
app/                App Router 페이지와 공통 UI
i18n/               next-intl 라우팅/네비게이션 설정
lib/content/        경력/기술/언어 등 정적 데이터
messages/           번역 문자열
public/             이미지, 아이콘, robots.txt
.github/workflows/  GitHub Pages 배포
```

---

## 소스 오브 트루스

| 관심사 | 기준 파일 |
|--------|-----------|
| 페이지 UI | `app/[locale]/**` |
| 번역 텍스트 | `messages/*.json` |
| 경력/이력서 데이터 | `lib/content/career.ts` |
| 기술/언어 데이터 | `lib/content/skills.ts`, `lib/content/languages.ts` |
| 디자인 토큰 | `app/globals.css` |
| locale 정책 | `i18n/routing.ts`, `app/page.tsx` |
| 배포 정책 | `.github/workflows/deploy.yml`, `next.config.ts` |

---

## 변경 시 주의할 제약

### 라우팅

- locale 페이지는 `app/[locale]/` 하위에서 관리한다.
- 새 locale 관련 페이지는 정적 export 대상이어야 한다.
- 브라우저 API 사용은 `use client` 경계 안에서만 허용한다.

### i18n

- UI 문자열 하드코딩 금지.
- 새 번역 키 추가 시 3개 locale 동기화.
- `generateMetadata`에서 사용하는 텍스트도 locale별 일관성을 유지한다.

### UI

- 현재 사이트는 과장된 그래픽보다 차분한 dark editorial 톤이 우선이다.
- `max-w-3xl`, `px-6`, `border-border`, `text-muted`, `text-accent` 조합이 기본 패턴이다.
- 정보량이 많은 resume 페이지는 섹션 분리와 줄바꿈 안전성이 중요하다.

### 배포

- 정적 산출물은 GitHub Pages에 배포된다.
- `out/`은 빌드 결과물이므로 직접 수정하지 않는다.
- CI는 `npm ci` + `npm run build` 기준으로 성공해야 한다.

---

## 기본 검증 명령

```bash
npm run lint
npm run build
```

UI/콘텐츠 변경에서는 아래 수동 확인도 함께 본다.

- `ko`, `ja`, `en` 3개 locale에서 페이지가 모두 열린다.
- 모바일 폭에서 텍스트 overflow가 없다.
- 헤더 네비게이션과 언어 전환 동작이 깨지지 않는다.

