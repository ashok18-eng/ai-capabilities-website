'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  Eye,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  Lock,
  Network,
  PlayCircle,
  Search,
  Server,
  ShieldCheck,
} from 'lucide-react'
import {
  deepDives,
  getAllConcepts,
  guidedPaths,
  learningDomains,
  levelOrder,
  type ConceptLevel,
  type DeepDive,
} from '@/lib/learning'
import { ThemeToggle } from './ThemeToggle'
import type { LucideIcon } from 'lucide-react'

const levelStyles: Record<ConceptLevel, string> = {
  Basic: 'border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-100',
  Intermediate:
    'border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-100',
  Advanced:
    'border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100',
  Emerging:
    'border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-700 dark:bg-rose-950 dark:text-rose-100',
}

export function LearningApp() {
  const allConcepts = useMemo(() => getAllConcepts(), [])
  const [activeDomain, setActiveDomain] = useState('all')
  const [query, setQuery] = useState('')
  const [selectedDiveId, setSelectedDiveId] = useState(deepDives[0].id)
  const [completed, setCompleted] = useState<string[]>([])

  useEffect(() => {
    const stored = window.localStorage.getItem('enterprise-ai-progress')
    if (stored) {
      setCompleted(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('enterprise-ai-progress', JSON.stringify(completed))
  }, [completed])

  const filteredConcepts = allConcepts.filter((concept) => {
    const matchesDomain = activeDomain === 'all' || concept.domainId === activeDomain
    const haystack = `${concept.name} ${concept.domainTitle} ${concept.level}`.toLowerCase()
    return matchesDomain && haystack.includes(query.toLowerCase())
  })

  const selectedDive = deepDives.find((dive) => dive.id === selectedDiveId) ?? deepDives[0]
  const completedCount = completed.length
  const totalTrackable = deepDives.length + guidedPaths.length

  function toggleComplete(id: string) {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <span className="flex size-9 items-center justify-center rounded-md bg-[var(--ink)] text-white">
              <Brain size={19} />
            </span>
            <span>
              <span className="block font-display text-[15px] font-semibold leading-tight text-[var(--text)]">
                Enterprise AI Engineering
              </span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                Visual concept atlas
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {[
              ['Paths', '#paths'],
              ['Labs', '#labs'],
              ['Atlas', '#atlas'],
              ['Playbook', '#playbook'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 font-display text-sm text-[var(--text-2)] no-underline transition hover:bg-[var(--card)] hover:text-[var(--text)]"
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <section className="border-b border-[var(--line)] bg-[var(--paper)]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-12">
            <div className="flex flex-col justify-center">
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                Data scientist to enterprise AI engineer
              </p>
              <h1 className="font-display text-[42px] font-semibold leading-[1.02] tracking-normal text-[var(--text)] md:text-[62px]">
                Learn AI engineering by seeing the system work.
              </h1>
              <p className="mt-5 max-w-[740px] text-[19px] leading-8 text-[var(--text-2)]">
                This app turns your concept catalog into a visual workbench: guided paths,
                intuitive concept labs, enterprise examples, and production readiness checks.
                It teaches from first principles to advanced patterns without turning into an
                academic glossary.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <MetricCard value={`${allConcepts.length}+`} label="technical concepts" />
                <MetricCard value={String(guidedPaths.length)} label="guided paths" />
                <MetricCard value={String(deepDives.length)} label="visual labs" />
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#labs"
                  className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 font-display text-sm font-semibold text-white no-underline transition hover:brightness-95"
                >
                  Start with visual labs <PlayCircle size={17} />
                </a>
                <a
                  href="#atlas"
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--line-2)] bg-[var(--card)] px-4 py-2.5 font-display text-sm font-semibold text-[var(--text)] no-underline transition hover:border-[var(--accent)]"
                >
                  Browse concept atlas <Search size={17} />
                </a>
              </div>
            </div>

            <SystemMap completedCount={completedCount} totalTrackable={totalTrackable} />
          </div>
        </section>

        <section id="paths" className="border-b border-[var(--line)] bg-[var(--card)]">
          <SectionHeader
            eyebrow="Guided paths"
            title="Role-based routes through the atlas"
            body="The atlas covers everything, but working professionals need ordered routes. Each path turns concepts into a role-ready capability with an enterprise capstone."
          />
          <div className="mx-auto grid max-w-[1440px] gap-4 px-5 pb-12 lg:grid-cols-5 lg:px-8">
            {guidedPaths.map((path, index) => (
              <article
                key={path.id}
                className="flex min-h-[390px] flex-col rounded-lg border border-[var(--line)] bg-[var(--paper)] p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent-ink)]">
                    {index + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleComplete(path.id)}
                    className={`rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] transition ${
                      completed.includes(path.id)
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100'
                        : 'border-[var(--line-2)] text-[var(--muted)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {completed.includes(path.id) ? 'Done' : 'Track'}
                  </button>
                </div>
                <h2 className="font-display text-xl font-semibold leading-tight text-[var(--text)]">
                  {path.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{path.role}</p>
                <p className="mt-4 text-[15px] leading-6 text-[var(--text)]">{path.outcome}</p>
                <ul className="mt-5 space-y-3 text-sm leading-5 text-[var(--text-2)]">
                  {path.modules.map((module) => (
                    <li key={module} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--teal)]" size={16} />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-[var(--line)] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                    Capstone
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">{path.capstone}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="labs" className="border-b border-[var(--line)] bg-[var(--paper)]">
          <SectionHeader
            eyebrow="Visual labs"
            title="Core concepts explained as moving parts"
            body="Every major idea gets the same treatment: intuition, enterprise example, mechanics, production lens, failure modes, and a small practice task."
          />
          <div className="mx-auto grid min-w-0 max-w-[1440px] gap-6 px-5 pb-12 lg:grid-cols-[330px_1fr] lg:px-8">
            <div className="min-w-0 space-y-2">
              {deepDives.map((dive) => (
                <button
                  key={dive.id}
                  type="button"
                  onClick={() => setSelectedDiveId(dive.id)}
                  className={`w-full rounded-lg border p-4 text-left transition ${
                    selectedDive.id === dive.id
                      ? 'border-[var(--accent)] bg-[var(--card)] shadow-sm'
                      : 'border-[var(--line)] bg-[var(--card)] hover:border-[var(--line-2)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-[16px] font-semibold leading-5 text-[var(--text)]">
                      {dive.title}
                    </span>
                    <LevelBadge level={dive.level} />
                  </div>
                  <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">{dive.short}</p>
                </button>
              ))}
            </div>

              <ConceptDeepDive
              dive={selectedDive}
              isComplete={completed.includes(selectedDive.id)}
              onToggleComplete={() => toggleComplete(selectedDive.id)}
            />
          </div>
        </section>

        <section id="atlas" className="border-b border-[var(--line)] bg-[var(--card)]">
          <SectionHeader
            eyebrow="Concept atlas"
            title="Every catalog topic, organized for working professionals"
            body="Use this as the master map. Search concepts, filter by capability area, and connect each topic back to a visual lab or guided path."
          />
          <div className="mx-auto max-w-[1440px] px-5 pb-12 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
              <aside className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
                <label className="flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-2">
                  <Search size={16} className="text-[var(--muted)]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search concepts..."
                    className="w-full bg-transparent font-display text-sm outline-none placeholder:text-[var(--muted)]"
                  />
                </label>

                <div className="mt-4 space-y-2">
                  <DomainButton
                    active={activeDomain === 'all'}
                    title="All capability areas"
                    count={allConcepts.length}
                    onClick={() => setActiveDomain('all')}
                  />
                  {learningDomains.map((domain) => (
                    <DomainButton
                      key={domain.id}
                      active={activeDomain === domain.id}
                      title={domain.title}
                      count={domain.concepts.length}
                      onClick={() => setActiveDomain(domain.id)}
                    />
                  ))}
                </div>
              </aside>

              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-display text-sm text-[var(--text-2)]">
                    Showing <strong className="text-[var(--text)]">{filteredConcepts.length}</strong>{' '}
                    concepts
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {levelOrder.map((level) => (
                      <LevelBadge key={level} level={level} />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {filteredConcepts.map((concept) => (
                    <article
                      key={`${concept.domainId}-${concept.name}`}
                      className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[16px] font-semibold leading-5 text-[var(--text)]">
                          {concept.name}
                        </h3>
                        <LevelBadge level={concept.level} />
                      </div>
                      <p className="mt-3 text-sm leading-5 text-[var(--text-2)]">
                        {concept.domainTitle}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="playbook" className="bg-[var(--paper)]">
          <SectionHeader
            eyebrow="Production playbook"
            title="The teaching pattern every concept follows"
            body="This keeps the experience consistent while still letting advanced topics go deep."
          />
          <div className="mx-auto grid max-w-[1440px] gap-4 px-5 pb-14 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
            {[
              {
                icon: Eye,
                title: 'Make it visible',
                body: 'Show the mechanics: tokens filling a window, chunks entering an index, tools returning JSON, traces recording decisions.',
              },
              {
                icon: FileText,
                title: 'Use enterprise evidence',
                body: 'Teach with policies, contracts, support tickets, claims, invoices, CRM records, incident logs, and governed repositories.',
              },
              {
                icon: ClipboardCheck,
                title: 'Practice decisions',
                body: 'Ask learners to choose chunking methods, metadata fields, API safeguards, memory policies, eval cases, and approval gates.',
              },
              {
                icon: Gauge,
                title: 'Debug production failures',
                body: 'For each concept, show how things break and which trace, metric, eval, or control proves what happened.',
              },
            ].map((item) => (
              <PlaybookCard key={item.title} icon={item.icon} title={item.title} body={item.body} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
      <p className="font-display text-3xl font-semibold text-[var(--text)]">{value}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted)]">
        {label}
      </p>
    </div>
  )
}

function PlaybookCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon
  title: string
  body: string
}) {
  return (
    <article className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-5">
      <Icon className="text-[var(--accent)]" size={24} />
      <h3 className="mt-4 font-display text-xl font-semibold text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-[15px] leading-6 text-[var(--text-2)]">{body}</p>
    </article>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-8">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <div className="mt-3 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <h2 className="font-display text-[32px] font-semibold leading-tight tracking-normal text-[var(--text)] md:text-[44px]">
          {title}
        </h2>
        <p className="max-w-[760px] text-[18px] leading-8 text-[var(--text-2)]">{body}</p>
      </div>
    </div>
  )
}

function SystemMap({
  completedCount,
  totalTrackable,
}: {
  completedCount: number
  totalTrackable: number
}) {
  const mapItems = [
    { label: 'Concept Atlas', icon: BookOpen, detail: 'All core, advanced, and emerging topics' },
    { label: 'Guided Paths', icon: GitBranch, detail: 'Role-ready learning routes' },
    { label: 'Visual Labs', icon: PlayCircle, detail: 'Mechanics you can inspect' },
    { label: 'Production Playbook', icon: ShieldCheck, detail: 'Risks, evals, ops, and controls' },
  ]

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-5">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
            Learning system
          </p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-[var(--text)]">
            From concept to production judgment
          </h2>
        </div>
        <div className="rounded-md border border-[var(--line)] px-3 py-2 text-right">
          <p className="font-display text-xl font-semibold text-[var(--text)]">
            {completedCount}/{totalTrackable}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
            tracked
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {mapItems.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={item.label} className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-md bg-[var(--ink)] text-white">
                  <Icon size={17} />
                </span>
                <span className="font-display font-semibold text-[var(--text)]">{item.label}</span>
              </div>
              <p className="mt-3 text-sm leading-5 text-[var(--text-2)]">{item.detail}</p>
              {index < mapItems.length - 1 && (
                <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--accent)]">
                  feeds into <ArrowRight size={14} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
          Enterprise example spine
        </p>
        <div className="mt-4 grid grid-cols-5 gap-2 text-center font-display text-xs text-[var(--text-2)]">
          {['Policy', 'Tickets', 'CRM', 'APIs', 'Audit'].map((label) => (
            <span key={label} className="rounded-md border border-[var(--line)] bg-[var(--card)] px-2 py-3">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function DomainButton({
  active,
  title,
  count,
  onClick,
}: {
  active: boolean
  title: string
  count: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left transition ${
        active
          ? 'border-[var(--accent)] bg-[var(--card)] text-[var(--text)]'
          : 'border-transparent text-[var(--text-2)] hover:border-[var(--line)] hover:bg-[var(--card)]'
      }`}
    >
      <span className="font-display text-sm font-medium">{title}</span>
      <span className="font-mono text-[11px] text-[var(--muted)]">{count}</span>
    </button>
  )
}

function LevelBadge({ level }: { level: ConceptLevel }) {
  return (
    <span
      className={`shrink-0 rounded-md border px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${levelStyles[level]}`}
    >
      {level}
    </span>
  )
}

function ConceptDeepDive({
  dive,
  isComplete,
  onToggleComplete,
}: {
  dive: DeepDive
  isComplete: boolean
  onToggleComplete: () => void
}) {
  return (
    <article className="min-w-0 rounded-lg border border-[var(--line)] bg-[var(--card)]">
      <div className="border-b border-[var(--line)] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--accent)]">
              {dive.domain}
            </p>
            <h2 className="mt-2 font-display text-[32px] font-semibold leading-tight text-[var(--text)]">
              {dive.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onToggleComplete}
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 font-display text-sm font-semibold transition ${
              isComplete
                ? 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100'
                : 'border-[var(--line-2)] bg-[var(--paper)] text-[var(--text)] hover:border-[var(--accent)]'
            }`}
          >
            <CheckCircle2 size={16} />
            {isComplete ? 'Completed' : 'Mark learned'}
          </button>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <InfoBlock label="Plain-English intuition" body={dive.intuition} />
          <InfoBlock label="Enterprise example" body={dive.enterpriseExample} />
          <InfoBlock label="Practice task" body={dive.practice} />
        </div>
      </div>

      <div className="grid min-w-0 gap-0 lg:grid-cols-[1fr_1.1fr]">
        <div className="border-b border-[var(--line)] p-5 lg:border-b-0 lg:border-r">
          <ListBlock title="Under the hood" items={dive.mechanics} icon={Layers} />
          <ListBlock title="Production lens" items={dive.productionLens} icon={Server} />
          <ListBlock title="Failure modes" items={dive.failureModes} icon={ShieldCheck} />
        </div>
        <div className="min-w-0 p-5">
          <VisualLab lab={dive.lab} />
        </div>
      </div>
    </article>
  )
}

function InfoBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">{label}</p>
      <p className="mt-2 text-[15px] leading-6 text-[var(--text-2)]">{body}</p>
    </div>
  )
}

function ListBlock({
  title,
  items,
  icon: Icon,
}: {
  title: string
  items: string[]
  icon: LucideIcon
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-[var(--accent)]" />
        <h3 className="font-display text-lg font-semibold text-[var(--text)]">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-[15px] leading-6 text-[var(--text-2)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VisualLab({ lab }: { lab: DeepDive['lab'] }) {
  switch (lab) {
    case 'vector-db':
      return <VectorDatabaseLab />
    case 'context-window':
      return <ContextWindowLab />
    case 'memory':
      return <MemoryLab />
    case 'api':
      return <ApiLab />
    case 'rag':
      return <RagLab />
    case 'agent':
      return <AgentLab />
    case 'security':
      return <SecurityLab />
    case 'evals':
      return <EvalsLab />
    default:
      return null
  }
}

function VectorDatabaseLab() {
  const metadata = ['source_id', 'chunk_id', 'page', 'department', 'access_group', 'version', 'effective_date']
  const chunks = [
    { title: 'Travel policy p.12', score: '0.91', tag: 'Finance', access: 'Employee' },
    { title: 'Expense exception table', score: '0.84', tag: 'Finance', access: 'Manager' },
    { title: 'Old travel FAQ', score: '0.79', tag: 'HR', access: 'Archived' },
  ]

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Database} title="Vector storage, not just rows" />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <CompareBox
          title="Relational table"
          rows={['employee_id = 1048', 'country = India', 'status = active', 'match exact fields']}
        />
        <CompareBox
          title="Vector index"
          rows={['chunk text -> embedding', 'metadata travels with chunk', 'nearest meaning wins', 'filters enforce scope']}
        />
      </div>
      <FlowRow
        items={[
          'Policy PDF',
          'Parse',
          'Chunk',
          'Embed',
          'Store vector + metadata',
          'Retrieve + rerank',
          'Grounded answer',
        ]}
      />
      <div className="mt-4 grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            Metadata saved with every chunk
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {metadata.map((item) => (
              <span key={item} className="rounded-md border border-[var(--line)] px-2 py-1 font-mono text-[11px]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            Query: "Can I claim a hotel upgrade?"
          </p>
          <div className="mt-3 space-y-2">
            {chunks.map((chunk) => (
              <div key={chunk.title} className="grid grid-cols-[1fr_auto] gap-3 rounded-md border border-[var(--line)] p-3">
                <span className="font-display text-sm font-semibold text-[var(--text)]">{chunk.title}</span>
                <span className="font-mono text-xs text-[var(--accent)]">{chunk.score}</span>
                <span className="text-xs text-[var(--text-2)]">{chunk.tag}</span>
                <span className="text-xs text-[var(--text-2)]">{chunk.access}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ContextWindowLab() {
  const budget = [
    { label: 'System rules', tokens: 420, color: 'bg-slate-700' },
    { label: 'User request', tokens: 180, color: 'bg-emerald-500' },
    { label: 'Chat history', tokens: 760, color: 'bg-sky-500' },
    { label: 'Retrieved clauses', tokens: 2100, color: 'bg-amber-500' },
    { label: 'Tool results', tokens: 420, color: 'bg-rose-500' },
    { label: 'Output reserve', tokens: 900, color: 'bg-violet-500' },
  ]
  const total = budget.reduce((sum, item) => sum + item.tokens, 0)
  const limit = 8192

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Brain} title="Context is the model workspace" />
      <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-display font-semibold">Prompt budget</span>
          <span className="font-mono text-xs text-[var(--muted)]">
            {total} / {limit} tokens
          </span>
        </div>
        <div className="flex h-8 overflow-hidden rounded-md border border-[var(--line)]">
          {budget.map((item) => (
            <span
              key={item.label}
              className={`${item.color}`}
              style={{ width: `${(item.tokens / limit) * 100}%` }}
              title={`${item.label}: ${item.tokens} tokens`}
            />
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {budget.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-md border border-[var(--line)] px-3 py-2">
              <span className="text-sm text-[var(--text-2)]">{item.label}</span>
              <span className="font-mono text-xs text-[var(--text)]">{item.tokens}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <CompareBox
          title="1024 context tokens"
          rows={['Capacity in the prompt', 'Input + output budget', 'Affects truncation', 'Measured per request']}
        />
        <CompareBox
          title="1024 embedding dimensions"
          rows={['Size of a vector', 'Semantic coordinates', 'Stored in index', 'Not prompt capacity']}
        />
      </div>
    </div>
  )
}

function MemoryLab() {
  const columns = [
    {
      title: 'Context window',
      icon: Brain,
      body: 'What the model can see right now.',
      examples: ['Current question', 'Relevant history', 'Retrieved snippets', 'Tool result JSON'],
    },
    {
      title: 'RAG',
      icon: Database,
      body: 'Governed knowledge retrieved for this answer.',
      examples: ['Policy documents', 'Contract clauses', 'Ticket history', 'Source citations'],
    },
    {
      title: 'Memory',
      icon: BookOpen,
      body: 'Selected state remembered across turns or sessions.',
      examples: ['User preference', 'Workflow checkpoint', 'Prior decision', 'Team convention'],
    },
  ]

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={BookOpen} title="Do not mix up memory, RAG, and context" />
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {columns.map((column) => {
          const Icon = column.icon

          return (
            <div key={column.title} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
              <Icon size={20} className="text-[var(--accent)]" />
              <h3 className="mt-3 font-display font-semibold text-[var(--text)]">{column.title}</h3>
              <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">{column.body}</p>
              <div className="mt-3 space-y-2">
                {column.examples.map((example) => (
                  <p key={example} className="rounded-md border border-[var(--line)] px-2 py-1 text-xs text-[var(--text-2)]">
                    {example}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
        <p className="font-display font-semibold text-[var(--text)]">Procurement assistant example</p>
        <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">
          Memory stores "show risk summaries as bullets." RAG retrieves the latest supplier policy.
          Context engineering packs the user request, relevant memory, retrieved policy chunks, and
          output format into one prompt.
        </p>
      </div>
    </div>
  )
}

function ApiLab() {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Code2} title="Tool calling is controlled API execution" />
      <FlowRow items={['User asks', 'Model selects tool', 'App validates', 'API request', 'JSON response', 'Final answer']} />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--line)] bg-[var(--ink)] p-4 text-white">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--focus-2)]">
            Tool schema
          </p>
          <pre className="mt-3 overflow-x-auto text-xs leading-5 text-[#EDEDF6]">
{`{
  "name": "create_ticket",
  "input": {
    "customer_id": "C-1048",
    "priority": "high",
    "summary": "VPN outage"
  }
}`}
          </pre>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            API request
          </p>
          <div className="mt-3 space-y-2 font-mono text-xs">
            <p className="rounded-md bg-[var(--paper)] px-3 py-2">POST /api/tickets</p>
            <p className="rounded-md bg-[var(--paper)] px-3 py-2">Authorization: Bearer token</p>
            <p className="rounded-md bg-[var(--paper)] px-3 py-2">201 Created or 4xx/5xx error</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {['Auth', 'Validation', 'Retries', 'Approval'].map((item) => (
          <span key={item} className="rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-3 text-center font-display text-sm font-semibold">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function RagLab() {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Network} title="RAG quality is a pipeline property" />
      <FlowRow items={['Load', 'Parse', 'Chunk', 'Embed', 'Retrieve', 'Rerank', 'Generate', 'Evaluate']} />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {[
          ['Wrong answer', 'Check generation prompt and groundedness.'],
          ['Right answer, bad citation', 'Check chunk IDs, source mapping, and citation formatter.'],
          ['No relevant evidence', 'Check parsing, chunking, metadata filters, and query rewrite.'],
          ['Unauthorized source', 'Check identity propagation and access-aware retrieval.'],
        ].map(([symptom, diagnosis]) => (
          <div key={symptom} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
            <p className="font-display font-semibold text-[var(--text)]">{symptom}</p>
            <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">{diagnosis}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function AgentLab() {
  const steps = [
    ['Plan', 'Find invoices, compare policy, draft support, ask for approval.'],
    ['Tool call', 'read_invoice(invoice_id), fetch_policy(region), check_threshold(amount).'],
    ['State update', 'Evidence collected, exception found, approval required.'],
    ['Human gate', 'Finance lead approves before system write.'],
    ['Trace', 'Every step, tool input, output, and decision is replayable.'],
  ]

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={GitBranch} title="Agent trace, not agent magic" />
      <div className="mt-4 space-y-3">
        {steps.map(([title, body], index) => (
          <div key={title} className="grid grid-cols-[42px_1fr] gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-[var(--accent-soft)] font-mono text-sm font-semibold text-[var(--accent-ink)]">
              {index + 1}
            </span>
            <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-3">
              <p className="font-display font-semibold text-[var(--text)]">{title}</p>
              <p className="mt-1 text-sm leading-5 text-[var(--text-2)]">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SecurityLab() {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Lock} title="Guard every trust boundary" />
      <div className="mt-4 grid gap-3">
        {[
          ['User input', 'Moderation, scope, injection checks'],
          ['Retrieved content', 'Source trust, permission filters, instruction isolation'],
          ['Model output', 'Schema, PII, citation, policy validation'],
          ['Tool action', 'Argument validation, approval gate, audit log'],
        ].map(([boundary, controls]) => (
          <div key={boundary} className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[var(--accent)]" />
              <p className="font-display font-semibold text-[var(--text)]">{boundary}</p>
            </div>
            <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">{controls}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function EvalsLab() {
  const traces = [
    ['Prompt', 'version=v12, model=gpt-4.1, temperature=0.1'],
    ['Retrieval', 'top_k=12, filtered=country:IN, reranked=5'],
    ['Generation', 'groundedness=pass, citation_accuracy=fail'],
    ['Ops', 'latency=4.2s, cost=$0.018, tokens=4,780'],
  ]

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4">
      <LabTitle icon={Gauge} title="Evals turn AI quality into release evidence" />
      <div className="mt-4 grid gap-3">
        {traces.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[110px_1fr] gap-3 rounded-lg border border-[var(--line)] bg-[var(--card)] p-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
              {label}
            </span>
            <span className="font-mono text-xs text-[var(--text-2)]">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
        <p className="font-display font-semibold text-[var(--text)]">Release gate</p>
        <p className="mt-2 text-sm leading-5 text-[var(--text-2)]">
          Ship only when golden cases pass for answer relevance, retrieval recall, citation
          accuracy, safety, latency, and cost thresholds.
        </p>
      </div>
    </div>
  )
}

function LabTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-10 items-center justify-center rounded-md bg-[var(--ink)] text-white">
        <Icon size={18} />
      </span>
      <h3 className="font-display text-xl font-semibold text-[var(--text)]">{title}</h3>
    </div>
  )
}

function CompareBox({ title, rows }: { title: string; rows: string[] }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--card)] p-4">
      <p className="font-display font-semibold text-[var(--text)]">{title}</p>
      <div className="mt-3 space-y-2">
        {rows.map((row) => (
          <p key={row} className="rounded-md bg-[var(--paper)] px-3 py-2 text-sm text-[var(--text-2)]">
            {row}
          </p>
        ))}
      </div>
    </div>
  )
}

function FlowRow({ items }: { items: string[] }) {
  return (
    <div className="mt-4 max-w-full overflow-x-auto">
      <div className="flex min-w-max items-center gap-2">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span className="rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-2 font-display text-sm font-semibold text-[var(--text)]">
              {item}
            </span>
            {index < items.length - 1 && <ArrowRight size={15} className="text-[var(--muted)]" />}
          </div>
        ))}
      </div>
    </div>
  )
}
