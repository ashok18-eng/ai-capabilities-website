interface CalloutProps {
  variant: 'example' | 'insight' | 'objective' | 'ds'
  label: string
  children: React.ReactNode
}

const variantStyles = {
  example: {
    container: 'bg-[var(--focus-soft)] border-[#EFDCB2]',
    label: 'text-[var(--focus-ink)]',
  },
  insight: {
    container: 'bg-[var(--accent-soft)] border-[#DAD7F6]',
    label: 'text-[var(--accent-ink)]',
  },
  objective: {
    container: 'bg-[var(--ink)] border-[var(--ink)] text-[#DBDCEC]',
    label: 'text-[var(--focus-2)]',
  },
  ds: {
    container: 'bg-[var(--teal-soft)] border-[#BFE6DE]',
    label: 'text-[var(--teal-ink)]',
  },
}

export function Callout({ variant, label, children }: CalloutProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={`rounded-[var(--radius)] p-[18px_22px] my-6 border border-[var(--line)] text-[16.5px] leading-[1.62] ${styles.container}`}
    >
      <span
        className={`font-mono text-[11.5px] tracking-[0.09em] uppercase font-medium block mb-2 ${styles.label} ${
          variant === 'ds' ? 'before:content-["◆_"]' : ''
        }`}
      >
        {label}
      </span>
      <div className={variant === 'objective' ? 'text-white' : ''}>
        {typeof children === 'string' ? (
          <p className="m-0">{children}</p>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
