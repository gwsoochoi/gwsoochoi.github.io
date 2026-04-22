# 디자인 스펙

> 현재 구현된 UI를 기준으로 정리한 시각 언어 요약.

---

## 1. 전체 톤

- 방향: `dark editorial portfolio`
- 인상: 차분함, 전문성, 이력서형 정보 구조
- 금지: 과한 그래디언트, 네온 컬러, 과장된 카드 그림자, 랜딩페이지식 과장 연출

이 사이트는 "개인 브랜딩"이 목적이지만, 화려함보다 신뢰감과 정보 정리가 우선이다.

---

## 2. 색상 토큰

`app/globals.css` 기준:

| 토큰 | 값 | 용도 |
|------|----|------|
| `--background` | `#13171D` | 전체 배경 |
| `--foreground` | `#E2EAF0` | 기본 텍스트 |
| `--accent` | `#4DC4AF` | CTA, 링크, 활성 상태 |
| `--accent-light` | `#163F3A` | accent 배경 보조 |
| `--border` | `#2C2F3A` | 경계선 |
| `--muted` | `#9198A6` | 보조 텍스트 |
| `--tag-bg` | `rgba(77, 196, 175, 0.12)` | 태그/배지 배경 |
| `--tag-text` | `#52A896` | 태그 텍스트 |

규칙:

- 새 색상값 하드코딩보다 토큰 재사용을 우선한다.
- accent는 포인트에만 쓰고, 화면 전체를 초록 계열로 덮지 않는다.

---

## 3. 타이포그래피

- 폰트: `Pretendard JP Variable` 중심
- 헤드라인: `font-bold`, `tracking-tight`
- 본문: `text-sm` 또는 `text-base`, `leading-relaxed`
- 보조 정보: `text-muted`, 작은 크기

locale 길이 차이가 크므로 타이포 조정보다 줄바꿈 안정성이 더 중요하다.

---

## 4. 레이아웃 패턴

### 공통 컨테이너

```text
mx-auto max-w-3xl px-6 pt-6 pb-16
```

### 헤더

- 하단 border 존재
- 우측 정렬 네비게이션
- 활성 메뉴는 `bg-accent/10 + text-accent`

### 섹션

- resume는 `details` 기반 disclosure를 적극 사용
- 카드류는 `rounded-lg + border`
- 간격은 크지 않지만 섹션 구분은 명확해야 한다

---

## 5. 핵심 UI 요소

| 요소 | 현재 패턴 |
|------|-----------|
| CTA 버튼 | `bg-accent`, `text-background`, `rounded-lg` |
| 태그 | muted 계열 pill |
| 이력서 카드 | border + subtle accent background |
| 링크 | `text-accent`, hover underline |
| 보조 문구 | `text-muted` |

---

## 6. 리뷰 기준

1. 정보 위계가 명확한가
2. 모바일에서 줄바꿈이 안전한가
3. 긴 일본어/영어 문장이 깨지지 않는가
4. accent 사용이 과하지 않은가
5. details/summary 상호작용이 직관적인가
6. 접근성 텍스트와 focus 흐름이 유지되는가

---

## 7. 변경 시 피할 것

- 밝은 테마로 급격히 전환
- 카드 그림자 남용
- hero에 불필요한 큰 일러스트 추가
- 각 섹션마다 다른 스타일 언어 적용
- 태그/배지/버튼 반경과 border 스타일을 제각각으로 바꾸기

