---
description: PR을 main에 squash 머지
---

# Merge

현재 브랜치의 PR을 `main`에 squash 머지한다.
변경사항 요약 후 사용자 확인 없이 바로 머지를 진행한다.

## 절차

### 1. PR 확인

1. `git fetch origin`
2. `gh pr list --head <현재브랜치> --base main --state open --json number,url,title`로 열린 PR 확인.
3. PR이 없으면 "머지할 PR이 없습니다"를 안내하고 종료.

### 2. 로컬/리모트 동기화 검증

1. `git diff HEAD origin/<현재브랜치> --name-only`로 차이 확인.
2. 차이가 없으면 → 다음 단계로 진행.
3. 차이가 있으면 → 차이 파일 목록을 보여주고, `git add` + `git commit` + `git push`로 동기화한 뒤 다음 단계로 진행.

### 3. 변경사항 요약

1. `git log origin/main..HEAD --oneline`으로 커밋 목록 확인.
2. feature별로 분류하여 보고:

```
## 변경사항 요약

### New Features (feat)
- feat(web): About 페이지 Hero 섹션 추가

### Bug Fixes (fix)
- fix(web): 모바일 레이아웃 깨짐 수정

### Refactoring (refactor)
- refactor(web): 공통 컴포넌트 추출
```

3. 사용자 확인 없이 바로 4단계로 진행한다.

### 4. 빌드 검증 및 머지

1. `npx tsc --noEmit`으로 TypeScript 검증.
2. 실패 시 경고하고 사용자 확인을 받는다.
3. `gh pr merge <PR번호> --squash --delete-branch`로 squash 머지.
4. `git checkout main && git pull origin main`으로 로컬 main 최신화.
5. 완료: `머지 완료! — PR: <PR URL>`
