'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--line-2)] bg-[var(--card)] text-[var(--text-2)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] text-sm"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark</span>
        </>
      )}
    </button>
  )
}
