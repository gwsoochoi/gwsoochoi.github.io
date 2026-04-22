# gwsoochoi.github.io Agent System

> `/Users/gwangsoochoi/dev/pon-ge/.agent`의 운영 방식을 참고해, 이 저장소에 필요한 역할과 절차만 남긴 협업 허브.
> 이 프로젝트는 단일 Next.js 정적 사이트이므로 `Shared + Engineer + Designer` 3축만 유지한다.

---

## 역할 구성

| 역할 | 책임 | 디렉토리 |
|------|------|---------|
| `Shared` | 프로젝트 개요, 변경 브리프, ADR | [`shared/`](shared/README.md) |
| `Engineer` | 구현, 버그 수정, 리팩터링, 품질 검증, 배포 점검 | [`engineer/`](engineer/README.md) |
| `Designer` | UI 리뷰, 시각 일관성 점검 | [`designer/`](designer/README.md) |

빠르게 시작하려면 [`usage-guide.md`](usage-guide.md)를 먼저 읽는다.

---

## 디렉토리 맵

```text
.agent/
├── README.md
├── usage-guide.md
├── rules/
│   └── project-rules.md
│
├── shared/
│   ├── README.md
│   ├── project-overview.md
│   ├── briefs/
│   │   ├── README.md
│   │   └── _template.md
│   └── decisions/
│       ├── README.md
│       └── _template.md
│
├── engineer/
│   ├── README.md
│   ├── project-prompt.md
│   ├── context/
│   │   └── tech-context.md
│   ├── rules/
│   │   ├── code-quality.md
│   │   └── shared-procedures.md
│   └── workflows/
│       ├── check.md
│       ├── feat.md
│       ├── fix.md
│       ├── refactor.md
│       ├── improve.md
│       ├── audit.md
│       └── ship.md
│
└── designer/
    ├── README.md
    ├── context/
    │   └── design-spec.md
    └── workflows/
        └── ui-review.md
```

---

## 왜 이렇게 줄였는가

- 이 저장소는 `Next.js + next-intl + TypeScript` 단일 앱이라 API/Mobile/Admin 분리가 없다.
- 기능 사양(spec)보다 실제 변경 브리프와 UI 리뷰가 더 자주 필요하다.
- 콘텐츠 수정이 많아도 별도 마케터 역할까지 둘 정도의 복잡도는 아니다.

즉, `pon-ge`의 구조를 그대로 복제하지 않고 다음만 유지한다.

- 구현 전에 읽고 범위를 좁히는 절차
- `check → feat/fix/refactor/improve → ship` 흐름
- UI 변경 시 별도 `Designer ui-review`
- 프로젝트 개요, 브리프, ADR를 한곳에 모으는 허브

---

## 권장 작업 흐름

### 코드/콘텐츠 변경

```text
1. Shared   → 필요 시 briefs/에 변경 브리프 작성
2. Engineer → check {scope} 로 현재 구조와 리스크 파악
3. Engineer → feat | fix | refactor | improve 실행
4. Engineer → lint/build/manual 검증 후 ship
```

### UI 개편

```text
1. Shared   → 변경 목적과 완료 조건 정리
2. Designer → ui-review {scope} 로 현재 UI 문제점 정리
3. Engineer → improve {scope} 또는 feat {scope}
4. Designer → 필요 시 후속 ui-review
```

---

## CLAUDE.md 와의 관계

| 문서 | 역할 |
|------|------|
| `CLAUDE.md` | 전역 구조, 기술 제약, 빠른 참조 |
| `.agent/` | 실제 작업 절차, 역할별 진입점, 브리프/결정 기록 |

`CLAUDE.md`가 프로젝트의 정적 사실을 설명한다면, `.agent/`는 "이 저장소에서 어떤 순서로 일할지"를 정리한다.

