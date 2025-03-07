import { useState } from 'react'
import { AuthProviderContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
