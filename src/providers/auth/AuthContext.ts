import { createContext } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

export const AuthProviderContext = createContext<AuthContextType | undefined>(undefined)
