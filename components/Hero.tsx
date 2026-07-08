import { ThemeToggle } from './ThemeToggle'

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-[var(--ink)] text-[#EDEDF6] py-[76px] px-6 md:py-[68px]">
      {/* Gradient glow background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px 300px at 88% 8%, rgba(87,79,214,.32), transparent 60%),
            radial-gradient(520px 280px at 12% 96%, rgba(222,150,31,.14), transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1120px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 flex-wrap mb-[22px] font-mono text-[12.5px] tracking-widest uppercase text-[var(--focus-2)]">
          <span>Foundations</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-2)]" />
          <span>Data Scientist</span>
          <span className="text-[var(--accent-2)]">→</span>
          <span>AI Engineer</span>
        </div>

        {/* Main title */}
        <h1 className="text-white font-display font-semibold text-[clamp(38px,6.4vw,74px)] leading-[1.02] tracking-[-0.02em] mb-2">
          The Road to<br />
          <span className="text-[var(--focus-2)]">Attention</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(18px,2.2vw,22px)] leading-[1.55] text-[#B9BAD0] max-w-[640px] mt-5 font-light">
          How language AI evolved from hand-written rules to the mechanism that made modern LLMs possible — built one problem, and one solution, at a time.
        </p>

        {/* Evolution chip strip */}
        <div className="flex flex-wrap gap-2 items-center mt-10 mb-10">
          {[
            'Rules',
            'Counts',
            'N-grams',
            'Embeddings',
            'RNNs',
            'LSTMs',
            'Seq2Seq',
            'Attention',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className={`font-mono text-[12.5px] px-[13px] py-[7px] rounded-full border whitespace-nowrap transition-colors ${
                  item === 'Attention'
                    ? 'border-[var(--focus)] text-[#F6E5C4] bg-[rgba(222,150,31,.1)]'
                    : 'border-[var(--ink-line)] text-[#C7C8DE] bg-[rgba(255,255,255,.02)]'
                }`}
              >
                {item}
              </span>
              {i < 7 && <span className="font-mono text-[13px] text-[#565A82]">→</span>}
            </div>
          ))}
        </div>

        {/* Meta information */}
        <div className="flex gap-[26px] flex-wrap font-mono text-[13px] text-[#9294B4]">
          <span>
            <b className="font-medium text-[#EDEDF6]">16</b> sections
          </span>
          <span>
            <b className="font-medium text-[#EDEDF6]">~35 min</b> read
          </span>
          <span>
            Stops at attention —{' '}
            <b className="font-medium text-[#EDEDF6]">the bridge to Transformers</b>
          </span>
        </div>

        {/* Theme toggle */}
        <div className="mt-10 flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
