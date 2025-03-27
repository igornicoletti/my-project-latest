import { AuthContextProps } from '@/types'
import { createContext } from 'react'

export const AuthProviderContext = createContext<AuthContextProps | undefined>(undefined)
