import { ThemeContextProps } from '@/types'
import { createContext } from 'react'

export const ThemeProviderContext = createContext<ThemeContextProps | null>(null)
