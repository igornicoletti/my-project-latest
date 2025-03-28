import { ThemeProviderProps, ThemeTypeProps } from '@/types'
import { useEffect, useState } from 'react'
import { ThemeProviderContext } from './ThemeContext'

export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeTypeProps>(
    () => (localStorage.getItem(storageKey) as ThemeTypeProps) || defaultTheme
  )

  useEffect(() => {
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
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
