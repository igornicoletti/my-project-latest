import { useAuth } from '@/providers'
import { Navigate } from 'react-router-dom'

interface PublicRouteProps {
  children: React.ReactNode
}

/**
 * PublicRoute
 *
 * The `PublicRoute` component is used to protect routes that should be accessible only by unauthenticated users. If the user is
 * already authenticated, it redirects them to the dashboard (`/dashboard`). If the user is not authenticated, it renders the
 * child components.
 *
 * @param {PublicRouteProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements (components or elements) that are conditionally rendered.
 *
 * @returns {JSX.Element} The `PublicRoute` component that either renders the child elements or redirects to the dashboard.
 *
 * @example
 * <PublicRoute>
 *   <SignIn />
 * </PublicRoute>
 *
 * @remarks
 * This component uses the `useAuth` hook to check the user's authentication status. If the user is already authenticated
 * (i.e., the `isAuthenticated` state is `true`), the user is redirected to the `/dashboard` page using the `Navigate` component
 * from `react-router-dom`. If not, the child components (like the sign-in form) are rendered.
 */
export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth()

  // Redirect to dashboard if authenticated, otherwise render children
  return isAuthenticated ? <Navigate to='/dashboard' /> : children
}
