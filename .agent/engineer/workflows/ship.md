# Ship

> 변경사항을 마감 가능한 상태로 정리한다.

---

## 절차

1. `git status`, `git diff --stat`로 범위를 확인한다.
2. 현재 diff를 리뷰하고 남은 리스크가 있는지 본다.
3. `npm run lint`, `npm run build`를 실행한다.
4. 필요하면 brief/decision 문서를 업데이트한다.
5. 커밋 메시지를 정리한다.
6. 사용자 요청이 있으면 커밋/푸시/PR까지 진행한다.

---

## 종료 조건

- 변경 범위를 설명할 수 있다.
- lint/build가 정리되어 있다.
- locale/manual 확인 포인트가 누락되지 않았다.

