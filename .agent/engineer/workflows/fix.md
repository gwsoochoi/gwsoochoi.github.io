# Fix

> 번역 누락, 레이아웃 깨짐, locale/routing 문제 같은 버그를 고칠 때 쓴다.

---

## 절차

1. 증상을 한 줄로 고정한다.
2. 재현 가능한 파일/locale/뷰포트를 확인한다.
3. 근본 원인을 찾는다.
4. 필요한 최소 수정만 적용한다.
5. `npm run lint`, `npm run build`로 회귀를 확인한다.
6. 문제가 나타난 locale/화면을 다시 수동 확인한다.

---

## 자주 있는 버그 유형

- `messages` 키 누락으로 빌드 실패
- locale별 문장 길이 차이로 레이아웃 깨짐
- Header 활성 상태 판정 오류
- metadata alternates 누락
- server/client 경계 오류

