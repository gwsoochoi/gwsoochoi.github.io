---
description: 리뷰 → 검증 → 커밋 → 푸시
---

# Ship

변경사항을 리뷰하고, 검증 → 커밋 → 푸시까지 한 번에 수행한다.
어느 단계에서든 실패하면 즉시 중단한다.

## 현재 상태 파악

```bash
git status
git diff --stat
git log main..HEAD --oneline 2>/dev/null
```

## 절차

### 1. 코드 리뷰 (Fix-First)

`/review`와 동일한 절차를 실행한다:
- **AUTO-FIX**: 파일 끝 개행, TypeScript 에러, ESLint 위반을 자동 수정
- **ASK**: DRY, 일관성, 타입 안전, 보안 등 판단 필요 항목을 번호로 보고

- ASK 항목이 없으면 **"추가 개선 포인트 없음"**을 보고하고 2단계로 진행.
- 있으면 번호 선택을 요청한다. 승인 항목만 구현 후 2단계로.

### 2. 빌드 검증

```bash
npx tsc --noEmit
npx next build
```

에러가 있으면 수정 후 재실행한다.

### 3. 커밋

커밋되지 않은 변경이 있을 때만 실행. 없으면 4단계로.

1. `git add`로 변경 파일을 명시적으로 스테이징 (민감 파일 제외, `git add -A` 금지).
2. 변경 내용을 분석하여 한국어 커밋 메시지를 작성한다.
3. `git commit` (`Co-Authored-By: Claude <noreply@anthropic.com>` 포함).

### 4. 푸시

1. 푸시되지 않은 커밋을 확인.
2. 없으면 종료.
3. `git push` (원격 브랜치 없으면 `git push -u origin <branch>`).
4. 완료 안내. GitHub Pages 배포는 자동으로 트리거된다.

## 규칙

- 인자 없이 실행.
- 변경 없고, 푸시할 커밋도 없으면 현재 상태만 안내.
