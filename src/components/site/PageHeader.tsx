import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  index?: string;
}

export const PageHeader = ({ eyebrow, title, description, index }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-tight relative pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="flex items-center justify-between mb-8">
          <span className="eyebrow">{eyebrow}</span>
          {index && (
            <span className="technical-mono text-xs text-muted-foreground">{index}</span>
          )}
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.95] text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};
