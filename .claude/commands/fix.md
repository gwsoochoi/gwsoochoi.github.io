---
description: 버그 수정
---

# Fix

버그를 수정한다. 근본 원인을 찾고, 계획 승인 후 수정한다.
증상이 아닌 근본 원인을 수정한다.

## 인자

```
/fix {feature}: {instruction}
```

- `feature`: 버그 발생 영역 — `resume`, `about`, `post`, `blog`, `layout`, `i18n` 등
- `instruction`: 버그 증상 또는 수정할 내용

예시:
- `/fix resume: 경력 3번 태그가 표시되지 않음`
- `/fix i18n: 일본어 페이지에서 기간 텍스트 깨짐`
- `/fix layout: 모바일에서 프로필 이미지 잘림`

## 절차

### 1. 원인 분석

feature 영역의 코드를 탐색하여 버그의 근본 원인(root cause)을 파악하고 상세히 설명한다.
- 3개 언어(ko/ja/en) 사전 파일의 구조 불일치 여부 확인
- Dictionary 타입과 실제 데이터 불일치 여부 확인
- 컴포넌트 렌더링 조건 분기 확인

### 2. 수정 계획 제시 및 승인

수정할 파일과 변경 내용을 보고하고 사용자 승인을 받는다.
**승인 전까지 코드를 수정하지 않는다.**

### 3. 수정

승인된 항목만 수정한다.
- 3개 언어 모두 동기화하여 수정
- Dictionary 타입 변경이 필요하면 ko.ts의 인터페이스도 수정

### 4. 검증

```bash
npx tsc --noEmit
npx next build
```

### 5. 결과 보고

원인, 수정 내용, 검증 결과를 요약한다.

## 인자

$ARGUMENTS
