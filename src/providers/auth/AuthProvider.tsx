import { useState } from 'react'
import { AuthProviderContext } from './AuthContext'

interface AuthProviderProps {
  children: React.ReactNode
}

/**
 * AuthProvider
 *
 * This component provides the authentication context to the rest of the application. It manages the authentication state
 * using React's `useState` hook and syncs the state with the `localStorage` to persist authentication status across page reloads.
 *
 * The context provides the following functionality:
 * - `isAuthenticated`: Boolean state indicating if the user is authenticated.
 * - `login`: Function to authenticate the user and store the state in `localStorage`.
 * - `logout`: Function to unauthenticate the user and remove the state from `localStorage`.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the `AuthProvider`.
 *
 * @returns {JSX.Element} The `AuthProvider` component that wraps the children with the authentication context.
 *
 * @example
 * <AuthProvider>
 *   <YourComponent />
 * </AuthProvider>
 *
 * @remarks
 * This provider should be placed at a higher level in the component tree to ensure that any descendant components
 * can access the authentication context using `useContext(AuthProviderContext)`.
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true'
  })

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('auth', 'true')
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('auth')
  }

  return (
    <AuthProviderContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthProviderContext.Provider>
  )
}
