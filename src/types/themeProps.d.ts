export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeTypeProps
  storageKey?: string
}

export interface ThemeContextProps {
  theme: ThemeTypeProps
  setTheme: (theme: ThemeTypeProps) => void
}

export type ThemeTypeProps = 'dark' | 'light' | 'system'
