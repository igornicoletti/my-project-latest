import { useAuth } from '@/providers'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: React.ReactNode
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated)
    <Navigate to='/dashboard' />

  return children
}
