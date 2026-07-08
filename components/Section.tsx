interface SectionProps {
  id: string
  num: number
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function Section({ id, num, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-5 mb-[60px]">
      <div className="mb-5">
        <div className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.12em] uppercase text-[var(--accent)] mb-2.5">
          <span className="bg-[var(--accent-soft)] text-[var(--accent-ink)] rounded-sm px-2 py-0.5 font-medium">
            {String(num).padStart(2, '0')}
          </span>
        </div>

        <h2 className="font-display font-semibold text-[clamp(26px,3.6vw,34px)] leading-[1.12] tracking-[-0.015em] text-[var(--text)] m-0">
          {title}
        </h2>

        {subtitle && (
          <p className="font-body italic text-[var(--text-2)] text-[17px] mt-2.5 leading-[1.5]">
            {subtitle}
          </p>
        )}
      </div>

      {children && <div className="prose prose-invert max-w-none">{children}</div>}
    </section>
  )
}
