import { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  rightText?: string;
  children: ReactNode;
};

export default function Section({
  title,
  subtitle,
  rightText,
  children,
}: SectionProps) {
  return (
    <section className="mb-20">

      <div className="mb-10 flex items-end justify-between">

        <div>

          <h2 className="text-5xl font-light">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-white/60">
              {subtitle}
            </p>
          )}

        </div>

        {rightText && (
          <p className="text-white/40">
            {rightText}
          </p>
        )}

      </div>

      {children}

    </section>
  );
}