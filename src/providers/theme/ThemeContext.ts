import { ThemeProps } from '@/types'
import { createContext } from 'react'

const initialState: ThemeProps = {
  theme: 'system',
  setTheme: () => null
}

/**
 * ThemeProviderContext
 *
 * The `ThemeProviderContext` is a context used to provide and manage the theme state of the application. It allows other
 * components to access and update the theme, including setting it to either 'system', 'light', or 'dark'.
 *
 * The context includes the `theme` state, which stores the current theme, and the `setTheme` function, which allows updating
 * the theme.
 *
 * @example
 * // Usage in a component to read or change the theme
 * const { theme, setTheme } = useContext(ThemeProviderContext);
 *
 * @remarks
 * The `ThemeProviderContext` should be wrapped around the root of the application or around any part that requires theme management.
 * The default theme is set to 'system' (i.e., respects the system's theme preference).
 */
export const ThemeProviderContext = createContext<ThemeProps>(initialState)
