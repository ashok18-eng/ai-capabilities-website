import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { ProgressBar } from '@/components/ProgressBar'
import { Section } from '@/components/Section'
import { Callout } from '@/components/Callout'
import { SectionContent } from '@/components/SectionContent'
import { navigationStructure } from '@/lib/sections'

export default function Page() {
  return (
    <>
      <ProgressBar />
      <Hero />

      <div className="flex">
        {/* Desktop Navigation - Fixed width sidebar */}
        <div className="hidden md:block w-[260px] flex-shrink-0 sticky top-0 h-screen overflow-hidden">
          <div className="px-6 py-[46px] overflow-y-auto h-full">
            <Navigation />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 max-w-[760px] px-6 py-[46px] pb-[90px] md:pb-[70px] md:max-w-full md:px-6 md:py-6">
          {/* How to read panel */}
          <div className="bg-[var(--card)] border border-[var(--line)] rounded-[var(--radius)] p-[26px_28px] mb-[46px]">
            <h3 className="font-display font-medium text-[20px] mt-0 mb-4">
              How to read this guide
            </h3>
            <p className="text-[16.5px] text-[var(--text-2)] leading-[1.6] mb-4">
              This is a learning narrative, not a glossary. Each stage explains{' '}
              <em>why</em> an idea was introduced, what real problem it solved, and
              what limitation it left behind — because modern LLMs didn&apos;t appear
              suddenly. They&apos;re the result of many earlier attempts to make
              machines work with human language.
            </p>
            <div className="space-y-3">
              <div className="flex gap-4 py-2 border-t border-[var(--line)] first:border-t-0">
                <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-[var(--accent)] font-medium shrink-0">
                  Who it&apos;s for
                </span>
                <span className="text-[16.5px] text-[var(--text-2)] leading-[1.5]">
                  Data scientists moving into AI engineering. You already know ML;
                  this fills in the language-modeling lineage that everything after
                  it assumes.
                </span>
              </div>
              <div className="flex gap-4 py-2 border-t border-[var(--line)]">
                <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-[var(--accent)] font-medium shrink-0">
                  Where it stops
                </span>
                <span className="text-[16.5px] text-[var(--text-2)] leading-[1.5]">
                  Deliberately at attention — the bridge between RNN/LSTM sequence
                  models and the Transformer architecture behind today&apos;s LLMs.
                  Get attention right and the Transformer story becomes easy.
                </span>
              </div>
              <div className="flex gap-4 py-2 border-t border-[var(--line)]">
                <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-[var(--accent)] font-medium shrink-0">
                  The ◆ notes
                </span>
                <span className="text-[16.5px] text-[var(--text-2)] leading-[1.5]">
                  Teal callouts connect each stage to tools you already use, to
                  speed up the transition.
                </span>
              </div>
            </div>
          </div>

          {/* Objective callout */}
          <Callout
            variant="objective"
            label="The one thing to be able to explain"
          >
            <p className="m-0">
              <strong>
                Rules → statistics → embeddings → RNNs → LSTMs/GRUs → Seq2Seq → the
                fixed-context bottleneck → attention.
              </strong>{' '}
              Each step improved something important, and each step exposed the next
              limitation. Older methods weren&apos;t useless — many still run in search,
              classification, and retrieval — they just weren&apos;t enough for
              flexible language intelligence.
            </p>
          </Callout>

          {/* Real content sections */}
          {navigationStructure.map((group, i) =>
            group.sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                num={section.num}
                title={section.title}
              >
                <SectionContent sectionNum={section.num} />
              </Section>
            ))
          )}

          {/* Footer */}
          <footer className="bg-[var(--ink)] text-[#9294B4] py-10 px-6 text-center font-mono text-[12.5px] tracking-[0.03em] mt-12">
            <p className="mb-4">
              Built with attention to detail and Vercel.{' '}
              <a href="#top" className="text-[var(--focus-2)] no-underline hover:underline">
                Back to top
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
