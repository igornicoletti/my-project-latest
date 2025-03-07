import { useAuth } from '@/providers'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

/**
 * PrivateRoute
 *
 * The `PrivateRoute` component is used to protect routes that require authentication. If the user is authenticated, it renders
 * the child components. If not, it redirects the user to the login page (`/signin`).
 *
 * @param {PrivateRouteProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements (components or elements) that are conditionally rendered.
 *
 * @returns {JSX.Element} The `PrivateRoute` component that either renders the child elements or redirects to the login page.
 *
 * @example
 * <PrivateRoute>
 *   <Dashboard />
 * </PrivateRoute>
 *
 * @remarks
 * This component uses the `useAuth` hook to check the user's authentication status. If the user is authenticated (i.e., the
 * `isAuthenticated` state is `true`), the children are rendered. If not, the user is redirected to the `/signin` page using
 * the `Navigate` component from `react-router-dom`.
 */
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth()

  // Render children if authenticated, otherwise redirect to signin page
  return isAuthenticated ? children : <Navigate to={'/signin'} />
}
