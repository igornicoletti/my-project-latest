import { createContext } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

export const AuthProviderContext = createContext<AuthContextType | undefined>(undefined)
