import { useContext } from 'react'
import { AuthProviderContext } from './AuthContext'

/**
 * useAuth
 *
 * This custom hook is used to access the authentication context. It provides access to the authentication state and actions
 * (login and logout) managed by the `AuthProviderContext`. If the context is not available, it throws an error.
 *
 * @throws {Error} If the `useAuth` hook is used outside of an `AuthProvider`, it throws an error indicating that the context is unavailable.
 *
 * @returns {AuthContextType} The authentication context containing:
 * - `isAuthenticated`: Boolean state indicating if the user is authenticated.
 * - `login`: Function to authenticate the user and store the state in `localStorage`.
 * - `logout`: Function to unauthenticate the user and remove the state from `localStorage`.
 *
 * @example
 * const { isAuthenticated, login, logout } = useAuth();
 *
 * @remarks
 * Make sure that `useAuth` is used within an `AuthProvider` so the context is available to the hook.
 */
export const useAuth = () => {
  const context = useContext(AuthProviderContext)

  // Ensure the context is provided by AuthProvider
  if (!context)
    throw new Error('useAuth must be used within an AuthProvider')

  return context
}
