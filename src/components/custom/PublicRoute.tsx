import { useAuth } from '@/hooks'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Navigate to='/dashboard' />

  return children
}
