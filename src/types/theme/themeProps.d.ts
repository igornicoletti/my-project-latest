/**
 * Type that defines the possible theme values for the application.
 * It can be 'dark', 'light', or 'system' (system's theme).
 */
export type Theme = 'dark' | 'light' | 'system'

/**
 * Interface for the properties of the ThemeProvider.
 * Defines how the theme will be managed in the application.
 */
export interface ThemeProviderProps {
  /**
   * The children (components) that will be rendered inside the provider.
   */
  children: React.ReactNode
  /**
   * Default theme to be used if there is no stored value.
   * If not provided, the default value will be 'system'.
   */
  defaultTheme?: Theme
  /**
   * Key to store the theme in localStorage.
   * Allows persisting the theme across sessions.
   */
  storageKey?: string
}

/**
 * Interface that defines the properties for the theme context.
 * Used to provide the theme state and the function to change it.
 */
export interface ThemeProps {
  /**
   * Current theme of the application ('dark', 'light', or 'system').
   */
  theme: Theme
  /**
   * Function to update the theme of the application.
   */
  setTheme: (theme: Theme) => void
}
