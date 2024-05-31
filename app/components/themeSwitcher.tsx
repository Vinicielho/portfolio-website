'use client'

import { Sun, Moon, SunMoon } from 'tabler-icons-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <SunMoon/>
  )

  if (resolvedTheme === "dark") {
    return <Moon onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Sun onClick={() => setTheme("dark")} />;
  }
}