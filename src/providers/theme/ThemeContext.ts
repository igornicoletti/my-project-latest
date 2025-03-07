import { ThemeProps } from '@/types'
import { createContext } from 'react'

const initialState: ThemeProps = {
  theme: 'system',
  setTheme: () => null
}

export const ThemeProviderContext = createContext<ThemeProps>(initialState)
