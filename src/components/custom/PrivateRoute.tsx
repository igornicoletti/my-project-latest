import { useAuth } from '@/hooks'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to='/signin' state={{ from: location.pathname }} />

  return children
}
