import { useContext } from 'react'
import { ThemeProviderContext } from './ThemeContext'

/**
 * useTheme
 *
 * A custom hook that provides access to the current theme and the function to update it, by consuming the `ThemeProviderContext`.
 * It ensures that the hook is used within a `ThemeProvider` and throws an error if it is used outside of the context provider.
 *
 * @returns {ThemeProps} - Returns the current theme and the `setTheme` function to update the theme.
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme()
 *
 * const toggleTheme = () => {
 *   setTheme(theme === 'light' ? 'dark' : 'light')
 * }
 * ```
 *
 * @throws {Error} - Throws an error if the hook is used outside of the `ThemeProvider`.
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (!context)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
