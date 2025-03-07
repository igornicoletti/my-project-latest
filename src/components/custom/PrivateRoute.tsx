import { useAuth } from '@/providers'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? children : <Navigate to={'/signin'} />
}
