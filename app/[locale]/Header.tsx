import LangSwitcher from "./LangSwitcher";

export default function Header() {
  return (
    /* 높이를 --header-h로 고정한다. 패널 높이와 scroll-padding-top이 이 값을 기준으로 잡혀
       로케일마다 헤더가 몇 px 달라지면 스냅 위치가 어긋난다. */
    <header className="sticky top-0 z-40 h-[var(--header-h)] border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-3xl items-center justify-end px-6">
        <LangSwitcher />
      </div>
    </header>
  );
}
