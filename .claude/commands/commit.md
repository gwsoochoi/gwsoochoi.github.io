---
description: 변경사항을 커밋하고 푸시
---

# Commit

변경사항을 커밋하고 원격에 푸시한다.

## 절차

1. `git status`와 `git diff --stat`으로 변경사항 확인.
2. 변경이 없으면 "커밋할 변경사항이 없습니다"를 안내하고 종료.
3. lock file 재생성 및 빌드 검증:
   - `rm -f package-lock.json && npm install` 실행 (CI `npm ci` 호환성 보장).
   - `npx next build` 실행하여 빌드 성공 확인. 실패 시 원인을 수정하고 재시도.
4. `git add`로 변경 파일을 명시적으로 스테이징 (민감 파일 제외, `git add -A` 금지). `package-lock.json` 변경이 있으면 함께 스테이징.
5. 변경 내용을 분석하여 한국어 커밋 메시지를 작성한다 (`Co-Authored-By: Claude <noreply@anthropic.com>` 포함).
6. `git commit` 실행.
7. `git push` 실행 (원격 브랜치 없으면 `git push -u origin <branch>`).
8. 완료 안내.
