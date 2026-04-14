export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-muted/10 px-2 py-[2.9px] text-[13.2px] text-muted">
      {children}
    </span>
  );
}
