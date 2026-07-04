interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default Section;