import LangSwitcher from "./LangSwitcher";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-end px-6 py-4">
        <LangSwitcher />
      </div>
    </header>
  );
}
