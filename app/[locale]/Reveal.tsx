"use client";

import { useEffect, useRef } from "react";

/**
 * 화면에 들어오면 안쪽 `.reveal-item`(과 연표의 `.tl-on`)이 왼쪽부터 차례로 나타난다.
 *
 * 클래스는 state가 아니라 DOM에 직접 건다 — 리렌더가 필요 없는 표시일 뿐이고,
 * JS가 없으면 아예 붙지 않아 내용이 그냥 보인다.
 */
export default function Reveal({
  children,
  ...rest
}: React.ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("reveal-armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("reveal-in");
        observer.disconnect();
      },
      { rootMargin: "-10% 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}
