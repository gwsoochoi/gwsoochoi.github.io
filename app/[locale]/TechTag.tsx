export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-tag-text bg-tag-bg px-2 py-[2.6px] text-xs text-tag-text">
      {children}
    </span>
  );
}
