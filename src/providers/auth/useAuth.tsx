import { AuthProviderContext } from '@/providers'
import { useContext } from 'react'

export const useAuth = () => {
  const context = useContext(AuthProviderContext)
  if (!context)
    throw new Error('useAuth must be used within an AuthProvider')

  return context
}
