import { useState } from 'react'
import { AuthProviderContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true'
  })

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('auth', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('auth')
  }

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
