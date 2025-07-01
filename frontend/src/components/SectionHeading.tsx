interface SectionHeadingProps {
  title: string;
  children?: React.ReactNode;
}

export function SectionHeading({ title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-stone-600">{children}</p>}
    </div>
  );
} 