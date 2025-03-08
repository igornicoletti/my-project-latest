import { createContext } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

/**
 * AuthProviderContext
 *
 * This context is used to manage authentication state in the application.
 * It provides methods for logging in, logging out, and checking if the user is authenticated.
 *
 * @typedef {Object} AuthContextType
 * @property {boolean} isAuthenticated - A boolean indicating whether the user is authenticated.
 * @property {Function} login - A function to log the user in, setting `isAuthenticated` to `true`.
 * @property {Function} logout - A function to log the user out, setting `isAuthenticated` to `false`.
 *
 * @example
 * const { isAuthenticated, login, logout } = useContext(AuthProviderContext);
 *
 * @remarks
 * This context must be provided higher up in the component tree using `AuthProvider` to function properly.
 */
export const AuthProviderContext = createContext<AuthContextType | undefined>(undefined)
