import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const Section = ({
  children,
  className = "",
  id,
  containerClassName = "",
  ...props
}: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`} {...props}>
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
