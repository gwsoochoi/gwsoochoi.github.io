"use client";

import { useRef } from "react";

/**
 * 감싼 영역 안의 `<details>`를 한 번에 열고 닫는다.
 *
 * 열림 상태를 state로 들지 않고 DOM의 `open`을 직접 건드린다. state로 관리하면
 * 사용자가 개별로 열어 둔 그룹까지 리렌더마다 되돌려야 해서 얻는 것 없이 복잡해진다.
 */
export default function CollapseControls({
  expandAll,
  collapseAll,
  children,
}: {
  expandAll: string;
  collapseAll: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-end gap-3 text-[11px] text-muted">
        {[
          { label: expandAll, open: true },
          { label: collapseAll, open: false },
        ].map((action) => (
          <button
            key={action.label}
            type="button"
            className="transition-colors hover:text-foreground"
            onClick={() => {
              ref.current
                ?.querySelectorAll("details")
                .forEach((element) => (element.open = action.open));
            }}
          >
            {action.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
