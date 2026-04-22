# 코드 품질 규칙

## 기본 원칙

1. **Server Component 기본**
   브라우저 API나 이벤트 핸들러가 필요할 때만 `"use client"`를 사용한다.

2. **번역 하드코딩 금지**
   UI 문자열은 `messages/*.json` 또는 정적 콘텐츠 소스에서 관리한다.

3. **디자인 토큰 재사용**
   색상과 핵심 시각 언어는 `app/globals.css`의 변수와 기존 Tailwind 패턴을 우선 사용한다.

4. **기존 데이터 구조 존중**
   `career.ts`의 shared/texts 패턴, `types.ts` 타입 정의, 공통 UI 컴포넌트 패턴을 먼저 따른다.

5. **타입 안전성 유지**
   `any`를 피하고, 공통 타입은 `lib/content/types.ts`로 모은다.

---

## 구현 가이드

### 컴포넌트

- 한 파일이 너무 커지면 렌더링 조각을 분리하되, 근거 없이 파일을 잘게 쪼개지 않는다.
- className은 레이아웃/간격/타이포/상태 순으로 읽기 쉽게 유지한다.
- 반복 UI는 `TechTag`, `BulletList`, `ChevronIcon` 같은 기존 조각을 우선 재사용한다.

### 콘텐츠

- locale별 긴 본문은 JSON보다 `career.ts` 같은 구조화된 TS 데이터가 더 적합한지 먼저 판단한다.
- 문자열이 여러 곳에서 반복되면 source of truth를 하나로 정리한다.

### 문서

- 구조가 바뀌면 `CLAUDE.md` 또는 `.agent`도 같이 갱신한다.
- 실제 코드와 어긋나는 설명은 남기지 않는다.

---

## 변경 후 체크리스트

```text
□ 새 텍스트가 3개 locale에 모두 반영되었는가
□ static export 제약을 깨지 않았는가
□ 기존 dark editorial 톤과 spacing을 해치지 않았는가
□ lint/build로 기본 검증을 마쳤는가
```

