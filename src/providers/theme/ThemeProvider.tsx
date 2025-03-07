import { Theme, ThemeProviderProps } from '@/types'
import { useEffect, useState } from 'react'
import { ThemeProviderContext } from './ThemeContext'

/**
 * ThemeProvider
 *
 * The `ThemeProvider` component is responsible for managing the application's theme and providing it through the `ThemeProviderContext`.
 * It allows you to dynamically switch between light, dark, or system themes, and persists the user's theme preference in `localStorage`.
 *
 * It utilizes the browser's `matchMedia` API to detect the system theme when the theme is set to 'system'. When the theme is set to a
 * specific value ('light' or 'dark'), it applies that theme to the root element of the document.
 *
 * @param {React.ReactNode} children - The child components that will have access to the theme context.
 * @param {string} [defaultTheme='system'] - The default theme to be used if no theme is stored in `localStorage`. Can be 'system', 'light', or 'dark'.
 * @param {string} [storageKey='vite-ui-theme'] - The key used to store the theme preference in `localStorage`.
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * @remarks
 * The `ThemeProvider` needs to be wrapped around the root of the application to ensure the theme context is accessible to all child components.
 */
export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'vite-ui-theme', ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

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
    setTheme: (theme: Theme) => {
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
