# Check

> 구현 전에 현재 구조와 리스크를 빠르게 파악한다.

---

## 목적

- scope와 source of truth를 확정한다.
- 어디까지 읽어야 하는지 범위를 제한한다.
- 다음 단계에서 `feat`, `fix`, `refactor`, `improve` 중 무엇이 맞는지 결정한다.

---

## 절차

1. scope 관련 파일 탐색
2. 현재 동작 요약
3. 변경 시 영향 범위 정리
4. 필요한 검증 명령 정리
5. 후속 모드 제안

---

## 출력 예시

```text
[about] 컨텍스트 로딩 완료
- 관련 파일: app/[locale]/page.tsx, lib/content/languages.ts, lib/content/skills.ts, messages/*.json
- 현재 동작: 소개, 태그, CTA가 한 페이지에 정리되어 있음
- 리스크: 긴 번역 문장 줄바꿈, CTA 레이아웃, 3개 locale 동기화
- 추천 후속 작업: improve about
```

