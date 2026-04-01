---
description: 새 기능/섹션 구현
---

# Feat

이력서에 새 기능이나 섹션을 구현한다.

## 인자

```
/feat {feature}: {instruction}
```

- `feature`: 작업 대상 영역 — `resume`, `about`, `post`, `blog`, `layout`, `i18n` 등
- `instruction`: 구현할 내용

예시:
- `/feat resume: 프로젝트 포트폴리오 섹션 추가`
- `/feat blog: 마크다운 기반 블로그 페이지 구현`
- `/feat layout: 다크모드 토글 추가`

## 절차

### 1. 기존 사양 확인

feature에 해당하는 코드, 컴포넌트, 사전 파일의 현재 구조를 파악한다.

### 2. 변경 계획 제시 및 승인

변경할 파일과 내용을 보고하고 사용자 승인을 받는다:
- Dictionary 타입 변경이 필요한지
- 3개 언어 사전에 추가할 데이터
- page.tsx 컴포넌트 변경 사항
- 스타일(Tailwind) 변경 사항

**승인 전까지 코드를 수정하지 않는다.**

### 3. 구현

승인된 계획에 따라 구현한다:
1. Dictionary 타입 수정 (ko.ts 인터페이스)
2. 3개 언어 사전 데이터 추가 (ko/ja/en)
3. page.tsx 컴포넌트 구현
4. 스타일 적용

### 4. 검증

```bash
npx tsc --noEmit
npx next build
```

### 5. 결과 보고

변경된 파일 목록과 요약을 제시한다.

## 인자

$ARGUMENTS
