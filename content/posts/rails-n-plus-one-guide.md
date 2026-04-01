---
title: "Rails N+1 방지 가이드"
date: "2026-04-01"
tags: ["Rails", "ActiveRecord", "Performance"]
---

## 1. 핵심 3가지 메서드 비교

|  | `preload` | `eager_load` | `includes` |
|---|---|---|---|
| 전략 | 별도 쿼리 2개 | LEFT OUTER JOIN 1개 | Rails가 자동 선택 |
| 연관 테이블 필터링 | 불가 | 가능 | 조건에 따라 전환 |

- `includes`는 `where`에 연관 테이블 컬럼이 들어가면 `eager_load`로, 아니면 `preload`로 자동 전환

```ruby
# preload — 별도 쿼리
Post.preload(:comments)
# SELECT * FROM posts
# SELECT * FROM comments WHERE post_id IN (1,2,3...)

# eager_load — JOIN
Post.eager_load(:comments).where(comments: { visible: true })
# SELECT posts.*, comments.* FROM posts LEFT OUTER JOIN comments ON ...

# includes — 자동 선택
Post.includes(:comments)                                    # → preload
Post.includes(:comments).where(comments: { visible: true }) # → eager_load
```

## 2. 선택 기준

| 상황 | 선택 |
|---|---|
| 연관 데이터 미리 로드만 | `preload` |
| 연관 테이블로 필터/정렬 | `eager_load` |
| 판단 귀찮으면 | `includes` |
| 연관 데이터 필요 없고 필터만 | `joins` |

## 3. 페이징에서는 preload

`eager_load` + `has_many` + `LIMIT` 사용 시 JOIN 행 뻥튀기로 LIMIT이 꼬임.

```ruby
# ❌ eager_load — Post 1개에 Comment 5개면 LIMIT 10이 Post 2~3개만 반환
Post.eager_load(:comments).limit(10)

# ✅ preload — LIMIT이 Post 테이블에 정확히 적용
Post.preload(:comments).limit(10).offset(20)
# SELECT * FROM posts LIMIT 10 OFFSET 20
# SELECT * FROM comments WHERE post_id IN (...)
```

- 단, `belongs_to`(1:1) 필터링은 `eager_load` 써도 행 뻥튀기 없어서 문제없음

## 4. 대량 데이터에서는 preload

JOIN은 행 중복으로 메모리/전송량 폭증.

```
Post 1,000개 × Comment 평균 20개
- eager_load (JOIN): 20,000행, posts 컬럼 매 행 중복
- preload (별도 쿼리): 1,000 + 20,000 = 21,000행, 중복 없음
```

IN절이 너무 길어지면 배치 처리:

```ruby
Post.preload(:comments).find_each(batch_size: 500) do |post|
  # 500개씩 배치 처리
end
```

## 5. preload 이후 데이터 가공 원칙

### Ruby 메서드 — 추가 쿼리 없음 (메모리 처리)

```ruby
posts = Post.preload(:comments).load

# 정렬
posts.sort_by { |p| p.created_at }
posts.sort_by { |p| p.comments.size }.reverse

# 필터링
posts.select { |p| p.active? }
posts.reject { |p| p.comments.empty? }
posts.filter_map { |p| p if p.published? }

# 변환
posts.map { |p| p.title }
posts.flat_map { |p| p.comments }
posts.each_with_object({}) { |p, h| h[p.id] = p.title }

# 그룹/집계
posts.group_by { |p| p.category }
posts.min_by { |p| p.created_at }
posts.max_by { |p| p.comments.size }
posts.sum { |p| p.comments.size }

# 탐색
posts.find { |p| p.id == 5 }
posts.any? { |p| p.featured? }
posts.none? { |p| p.draft? }
posts.first / posts.last

# 분할
posts.partition { |p| p.active? }
posts.uniq { |p| p.user_id }
posts.each_slice(10) { |batch| ... }
```

### ActiveRecord 메서드 — 새 쿼리 발생

```ruby
# 조건
posts.where(active: true)
posts.where.not(status: :draft)
posts.find_by(id: 5)

# 정렬/제한
posts.order(:created_at)
posts.limit(10)
posts.offset(20)

# 집계 (DB에서 계산)
posts.count         # SELECT COUNT(*)
posts.sum(:score)   # SELECT SUM(score)
posts.average(:score)
posts.minimum(:created_at)
posts.maximum(:score)
posts.pluck(:id, :title)
posts.ids

# 존재 확인
posts.exists?(active: true)

# 갱신/삭제
posts.update_all(active: false)
posts.destroy_all
posts.delete_all
```

### 연관 객체에 ActiveRecord 메서드 체이닝 주의

```ruby
post.comments                            # ✅ preload 캐시 사용
post.comments.where(visible: true)       # ⚠️ 새 쿼리 발생!
post.comments.select { |c| c.visible }   # ✅ Ruby 필터, 쿼리 없음
```

## 6. size / length / count 차이

| 메서드 | 동작 |
|---|---|
| `.size` | 로드됐으면 메모리, 아니면 `COUNT` 쿼리 |
| `.length` | 항상 전부 로드 후 메모리 카운트 |
| `.count` | 항상 `SELECT COUNT(*)` 쿼리 |

## 7. 기타 N+1 방지 도구

### strict_loading — lazy load 시 에러 발생

```ruby
# 모델 레벨
class Post < ApplicationRecord
  self.strict_loading_by_default = true
end

# 쿼리 레벨
Post.strict_loading.all
```

### counter_cache — count 쿼리 제거

```ruby
# migration
add_column :users, :posts_count, :integer, default: 0

# model
class Post < ApplicationRecord
  belongs_to :user, counter_cache: true
end
```

### Bullet gem — 개발 환경 N+1 탐지

```ruby
# Gemfile
gem 'bullet', group: :development
```
