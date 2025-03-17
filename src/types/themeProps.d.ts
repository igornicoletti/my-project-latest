export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export type ThemeTypeProps = 'dark' | 'light' | 'system'
