import { AuthProviderContext } from '@/providers'
import { deleteCookie, getCookie, setCookie } from '@/utils'
import { useEffect, useState } from 'react'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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
