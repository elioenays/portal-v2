'use client'

import { useTheme } from 'next-themes'
import { Toggle } from './ui/toggle'
import { Moon, Sun } from 'lucide-react'

export function TogleTheme() {
  const { setTheme, theme } = useTheme()

  return (
    <div>
      <Toggle
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Toggle>
    </div>
  )
}
