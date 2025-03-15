import { useAuth } from '@/hooks'
import { Navigate, useLocation } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to='/signin' state={{ from: location.pathname }} />
  }

  return children
}
