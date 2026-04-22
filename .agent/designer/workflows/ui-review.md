# UI Review

> 현재 화면의 문제점과 유지 포인트를 정리하는 절차.

---

## 대상

```text
Designer ui-review about
Designer ui-review resume
Designer ui-review header
Designer ui-review all
```

---

## 절차

### 1. 컨텍스트 로딩

1. `context/design-spec.md` 확인
2. 관련 페이지와 공통 컴포넌트 읽기
3. 필요하면 번역 길이도 함께 확인

### 2. 체크 항목

#### 위계

- 제목, 본문, 보조 문구 구분이 명확한가
- CTA가 과하지 않게 눈에 띄는가

#### 반응형

- 좁은 폭에서 nav/tag/table/details가 넘치지 않는가
- 긴 locale 문자열이 레이아웃을 깨지 않는가

#### 시각 일관성

- accent, border, muted 톤이 일관적인가
- 새 요소가 기존 dark editorial 톤을 유지하는가

#### 접근성

- 링크/버튼 구분이 충분한가
- focus 이동과 skip link 흐름이 자연스러운가
- 이미지 alt 또는 텍스트 대체가 적절한가

---

## 보고 형식

```markdown
## UI Review — {scope}

### 유지할 점
- ...

### 수정 필요
1. ...
2. ...

### 권장 개선
1. ...
2. ...
```

blocker가 없으면 `수정 필요 없음`을 명시한다.

