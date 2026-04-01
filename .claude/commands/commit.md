---
description: 변경사항을 커밋하고 푸시
---

# Commit

변경사항을 커밋하고 원격에 푸시한다.

## 절차

1. `git status`와 `git diff --stat`으로 변경사항 확인.
2. 변경이 없으면 "커밋할 변경사항이 없습니다"를 안내하고 종료.
3. `git add`로 변경 파일을 명시적으로 스테이징 (민감 파일 제외, `git add -A` 금지).
4. 변경 내용을 분석하여 한국어 커밋 메시지를 작성한다 (`Co-Authored-By: Claude <noreply@anthropic.com>` 포함).
5. `git commit` 실행.
6. `git push` 실행 (원격 브랜치 없으면 `git push -u origin <branch>`).
7. 완료 안내.
