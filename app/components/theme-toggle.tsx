'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <button
      className="p-2 rounded-md"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
    </div>
  )
}