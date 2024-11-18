'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme() // Remove `theme` here

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200">
        <span className="text-lg">⌛</span>
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-lg 
                bg-white hover:bg-gray-50 
                dark:bg-zinc-800 dark:hover:bg-zinc-700
                border border-gray-200 dark:border-zinc-700
                shadow-sm transition-colors duration-200
                hover:border-[#9b0ffa] dark:hover:border-[#9b0ffa]"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-[#9b0ffa]" />
      ) : (
        <Moon className="w-5 h-5 text-[#9b0ffa]" />
      )}
    </button>
  )
}
