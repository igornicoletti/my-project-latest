import { AuthProviderContext } from '@/providers'
import { deleteCookie, getCookie, setCookie } from '@/utils'
import { useEffect, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const token = getCookie('authToken')
    setIsAuthenticated(!!token)
  }, [])

  const login = (token: string) => {
    setIsAuthenticated(true)
    setCookie('authToken', token)
  }

  const logout = () => {
    setIsAuthenticated(false)
    deleteCookie('authToken')
  }

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
