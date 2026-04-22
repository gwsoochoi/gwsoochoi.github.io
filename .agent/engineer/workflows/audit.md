# Audit

> 저장소나 특정 scope를 점검해 리스크를 우선순위대로 보고한다.

---

## 우선순위

1. build/lint를 깨는 문제
2. locale 누락/불일치
3. static export 리스크
4. 모바일 overflow/접근성
5. 유지보수성을 해치는 중복 구조

---

## 보고 형식

```markdown
1. [Severity] 파일/영역: 문제 설명
2. [Severity] 파일/영역: 문제 설명

열린 질문/가정
- ...

요약
- ...
```

findings가 없으면 명시적으로 `발견된 blocker 없음`이라고 쓴다.

