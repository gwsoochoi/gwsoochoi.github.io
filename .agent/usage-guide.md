# gwsoochoi.github.io Agent 사용 가이드

> 이 저장소에서는 긴 설명보다 `모드 + 범위 + 완료 조건` 형식이 가장 효율적이다.
> 채팅 입력은 `/feat` 대신 `feat`처럼 바로 시작하면 된다.

---

## 기본 형식

### Engineer 요청

```text
[Mode] check | feat | fix | refactor | improve | audit | ship
[Scope] about | resume | career | skills | header | i18n | theme | seo | routing | deploy | assets | all
[Source] 파일 경로 | GitHub issue 링크 | .agent/shared/briefs/... (선택)
[Done] 완료 조건 2~4개
[Constraint] 변경 제한 조건 (선택)
```

### Designer 요청

```text
[Role] Designer
[Mode] ui-review
[Scope] about | resume | header | all
[Source] 파일 경로 또는 브리프 (선택)
[Done] blocker / 권장 개선 / 유지해야 할 포인트
```

---

## 가장 중요한 원칙

1. scope는 한 번에 하나만 잡는다.
2. `Source`에는 가능한 한 실제 파일이나 브리프 경로를 넣는다.
3. `Done`은 "어떻게 보일지/무엇이 통과해야 하는지" 기준으로 쓴다.
4. i18n 관련 변경이면 `ko`, `ja`, `en` 동기화 여부를 `Done`이나 `Constraint`에 명시한다.
5. UI 변경이면 `Designer ui-review`를 먼저 쓰는 편이 안전하다.

---

## 언제 `check`를 먼저 쓰나

- 수정 위치가 불명확할 때
- `career.ts`와 `messages/*.json` 중 어디가 source of truth인지 헷갈릴 때
- static export 제약 때문에 어느 파일까지 영향을 받는지 먼저 보고 싶을 때

예시:

```text
check resume
Source: app/[locale]/resume/page.tsx
Done: 관련 데이터 파일, 현재 UI 구조, locale 영향 범위, 검증 명령 정리
```

---

## 추천 요청 패턴

### 새 섹션/기능 추가

```text
feat about
Source: .agent/shared/briefs/_template.md
Done:
- About 페이지 소개 블록을 재구성할 것
- ko/ja/en 번역이 모두 추가될 것
- npm run lint, npm run build 가 통과할 것
Constraint:
- 기존 다크 톤과 max-w-3xl 레이아웃 유지
```

### 버그 수정

```text
fix i18n
문제: 특정 locale에서 메시지 키 누락으로 빌드가 깨짐
Done:
- 누락 키를 정리할 것
- 관련 페이지 렌더링이 깨지지 않을 것
- npm run build 가 통과할 것
```

### UI 점검

```text
Designer ui-review resume
Done:
- 모바일에서 줄바꿈/정보 밀도 문제만 우선순위대로 정리
- 유지해야 할 현재 장점도 같이 적기
Constraint:
- 시각 언어는 현재 dark editorial 톤 유지
```

### 배포 전 마감

```text
ship
Done:
- 현재 변경 diff 리뷰
- lint/build 결과 확인
- 커밋 메시지 후보 정리
```

---

## 자주 쓰는 Scope

| Scope | 의미 |
|------|------|
| `about` | 메인 소개 페이지 |
| `resume` | 경력/이력서 페이지 전체 |
| `career` | `lib/content/career.ts` 중심의 경력 데이터 |
| `skills` | 기술 스택 태그/콘텐츠 |
| `header` | 상단 네비게이션, 언어 전환 |
| `i18n` | `messages/`, `i18n/`, locale 처리 |
| `theme` | `globals.css`, 색상/타이포/레이아웃 스타일 |
| `seo` | metadata, sitemap, robots, canonical |
| `routing` | locale 라우팅, `/` 진입 처리 |
| `deploy` | GitHub Actions Pages 배포 |
| `assets` | `public/` 이미지, 아이콘 |
| `all` | 저장소 전반 점검 |

---

## 운영 팁

### 가볍게 시작할 때

1. `check {scope}`
2. 다음 턴에 `feat`, `fix`, `improve` 중 하나
3. 변경이 커졌으면 brief 또는 decision 문서 추가
4. 마지막에 `ship`

### UI 비중이 큰 작업

1. `Designer ui-review {scope}`
2. `improve {scope}` 또는 `feat {scope}`
3. 필요하면 다시 `Designer ui-review {scope}`

---

## 복붙용 한 줄 예시

```text
check resume - Source: app/[locale]/resume/page.tsx - Done: 관련 데이터 구조, locale 영향 범위, 검증 명령 요약
```

```text
fix header - Done: 현재 locale 유지한 채 언어 전환 동작 안정화, build 통과
```

```text
Designer ui-review about - Done: 위계/spacing/모바일 줄바꿈 문제만 정리
```

