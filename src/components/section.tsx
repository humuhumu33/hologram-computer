"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-12 sm:py-16 lg:py-24", className)}
      style={{ contentVisibility: 'auto' }}
    >
      <div className="px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span
          className="gradient-text-animated"
          style={{
            backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {title}
        </span>
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
