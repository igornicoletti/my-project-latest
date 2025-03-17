import { ThemeProviderContext } from '@/providers'
import { ThemeProviderProps, ThemeTypeProps } from '@/types'
import { useEffect, useState } from 'react'

export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeTypeProps>(defaultTheme)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = localStorage.getItem(storageKey) as ThemeTypeProps | null
    setTheme(storedTheme || defaultTheme)
  }, [defaultTheme, storageKey])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: ThemeTypeProps) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
