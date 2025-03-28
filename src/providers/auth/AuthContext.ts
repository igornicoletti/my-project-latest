import { createContext } from 'react'

interface Props {
  isAuthenticated: boolean
  authLogin: (token: string) => void
  authLogout: () => void
}

export const AuthProviderContext = createContext<Props | undefined>(undefined)
