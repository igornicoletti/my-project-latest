import { ThemeContextProps } from '@/types'
import { createContext } from 'react'

const initialState: ThemeContextProps = {
  theme: 'system',
  setTheme: () => null
}

export const ThemeProviderContext = createContext<ThemeContextProps>(initialState)
