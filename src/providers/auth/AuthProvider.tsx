import { deleteCookie, getCookie, setCookie } from '@/utils'
import { useEffect, useState } from 'react'
import { AuthProviderContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const token = getCookie('authToken')

    if (token) {
      const isValid = token.length > 0
      setIsAuthenticated(isValid)
    }
  }, [])

  const authLogin = (token: string) => {
    setIsAuthenticated(true)
    setCookie('authToken', token, 7)
  }

  const authLogout = () => {
    setIsAuthenticated(false)
    deleteCookie('authToken')
  }

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, authLogin, authLogout }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
