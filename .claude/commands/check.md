---
description: 타입체크/린트/빌드 검증 또는 코드 리뷰
---

# Check

타입체크/린트/빌드 검증 또는 읽기 전용 코드 리뷰를 수행한다.

## 모드 판별

- `$ARGUMENTS`가 비어있거나 공백만 → **모드 1 (빌드 검증)**
- `$ARGUMENTS`에 `:`이 포함 → **모드 2 (코드 리뷰)**
- 판별 불가 → 사용자에게 확인

---

## 모드 1: 빌드 검증 (인자 없음)

1. TypeScript 타입 체크:
   ```bash
   npx tsc --noEmit
   ```

2. ESLint 검증:
   ```bash
   npx eslint .
   ```

3. Next.js 빌드:
   ```bash
   npx next build
   ```

4. 통과 시 **"All checks passed"**, 실패 시 오류 요약.

---

## 모드 2: 코드 리뷰 (feature 인자)

```
/check {feature}: {instruction}
```

- `feature`: 리뷰 대상 영역 — `resume`, `about`, `post`, `blog`, `layout`, `i18n` 등
- `instruction`: 리뷰 관점 또는 확인하고 싶은 내용

예시:
- `/check resume: 새로 추가한 경력 데이터 일관성 확인`
- `/check layout: 모바일 반응형 레이아웃 점검`

1. feature 영역의 관련 파일을 읽고 분석한다.
2. 분석 결과를 번호와 함께 보고한다:
   - 요청 내용에 대한 분석
   - 문제점/개선 포인트
   - 3개 언어 사전 간 일관성 여부
   - 보안 취약점 여부

**읽기 전용** — 파일을 절대 수정하지 않는다.

## 인자

$ARGUMENTS
