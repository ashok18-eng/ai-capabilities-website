'use client'

import { useState, useEffect } from 'react'
import { navigationStructure } from '@/lib/sections'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('s1')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let currentSection = 's1'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block"
        aria-label="Guide contents"
      >
        <p className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--muted)] mb-4 font-semibold">
          On this page
        </p>

        {navigationStructure.map((group) => (
          <div key={group.era}>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--accent)] mt-[22px] mb-2 font-medium first:mt-0">
              {group.era}
            </p>
            {group.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex gap-2.5 items-baseline text-sm leading-[1.35] py-1 pl-3 -ml-0.5 border-l-2 transition-colors no-underline ${
                  activeSection === section.id
                    ? 'text-[var(--accent)] border-[var(--accent)] font-medium'
                    : 'text-[var(--text-2)] border-transparent hover:text-[var(--text)]'
                } font-display`}
                onClick={() => setMobileOpen(false)}
              >
                <span className="font-mono text-[11px] text-[var(--muted)] min-w-5">
                  {String(section.num).padStart(2, '0')}
                </span>
                <span>{section.title}</span>
              </a>
            ))}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden mb-2 bg-[var(--card)] border border-[var(--line)] rounded-[var(--radius)]">
        <details
          open={mobileOpen}
          onToggle={(e) => setMobileOpen((e.target as HTMLDetailsElement).open)}
          className="group"
        >
          <summary className="cursor-pointer p-4 font-display font-medium text-[15px] list-none flex justify-between items-center hover:bg-[var(--paper)]">
            <span>Contents</span>
            <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
          </summary>

          <div className="p-4 pt-0 border-t border-[var(--line)]">
            {navigationStructure.map((group) => (
              <div key={group.era}>
                <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--accent)] mt-3 mb-2 font-medium">
                  {group.era}
                </p>
                {group.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block py-1.5 text-sm text-[var(--text-2)] no-underline font-display hover:text-[var(--accent)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-mono text-[11px] text-[var(--muted)] mr-2">
                      {String(section.num).padStart(2, '0')}
                    </span>
                    {section.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </details>
      </div>
    </>
  )
}
