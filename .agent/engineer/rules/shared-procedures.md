# 공통 절차

> 엔지니어 워크플로우가 공통으로 따르는 절차.

---

## 황금 경로

```text
Read → Context → Plan → Implement → Validate → Document → Ship
```

---

## Scope 파싱

입력에서 scope를 먼저 좁힌다.

```text
check about
fix i18n
refactor resume
```

scope가 모호하면 아래 후보 중 가장 가까운 것으로 묶는다.

- `about`
- `resume`
- `career`
- `header`
- `i18n`
- `theme`
- `seo`
- `routing`
- `deploy`
- `assets`
- `all`

---

## 컨텍스트 로딩

scope가 정해지면 관련 파일을 읽고 아래를 정리한다.

1. 현재 구현 파일 목록
2. source of truth
3. 변경 리스크
4. 필요한 검증 명령

출력 예시는 아래와 같다.

```text
[resume] 컨텍스트 로딩 완료
- 관련 파일: ...
- 현재 동작: ...
- 리스크: ...
- 검증: npm run lint / npm run build / mobile width 확인
```

---

## 계획 제시

코드 변경 전에는 최소 아래를 분명히 한다.

1. 왜 바꾸는지
2. 어떤 파일을 바꾸는지
3. 어떤 검증으로 끝낼지

변경이 다중 파일로 커지면 `.agent/shared/briefs/`에 brief를 남기는 편이 좋다.

---

## 구현 원칙

1. 기존 패턴을 재사용한다.
2. 변경 범위를 필요한 만큼으로 제한한다.
3. server/client 경계를 불필요하게 넓히지 않는다.
4. static export와 locale alternates를 항상 의식한다.

---

## 검증

### 필수

```bash
npm run lint
npm run build
```

### 수동

- `ko`, `ja`, `en` 페이지 렌더링 확인
- 헤더 활성 상태, 언어 전환, 링크 동작 확인
- 모바일 폭에서 tag, table, details 줄바꿈 확인

---

## Audit 체크리스트

`audit` 또는 리뷰 단계에서는 아래를 우선 본다.

1. locale 누락/불일치
2. static export를 깨는 런타임 코드
3. responsive overflow
4. metadata/canonical 누락
5. 중복된 콘텐츠 소스
6. 과도한 client boundary

---

## Ship 체크리스트

1. `git status`와 `git diff --stat`로 변경 범위를 확인한다.
2. lint/build 결과를 남긴다.
3. 필요 시 brief/decision 문서를 업데이트한다.
4. 커밋 메시지는 아래 형식을 따른다.

```text
<type>(web): <description>
```

예시:

```text
docs(web): add agent workflow hub
feat(web): refresh about introduction
fix(web): sync missing locale keys
```

