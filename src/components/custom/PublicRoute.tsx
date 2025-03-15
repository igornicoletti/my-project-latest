import { useAuth } from '@/hooks'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: React.ReactNode
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return children
}
