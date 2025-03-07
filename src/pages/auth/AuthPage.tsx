import { AuthForm } from '@/components'
import { authConfig, authField } from '@/utils'
import { useLocation } from 'react-router-dom'

/**
 * AuthPage
 *
 * The `AuthPage` component renders the authentication form for either signing in or registering, depending on the current
 * page route. It uses the `useLocation` hook from `react-router-dom` to determine whether the user is on the sign-in or
 * sign-up page. Based on the URL, the component selects the appropriate configuration and form fields for the form.
 *
 * It then passes the selected configuration (`config`) and fields (`fields`) to the `AuthForm` component to render the form
 * accordingly.
 *
 * @returns {JSX.Element} The `AuthPage` component that renders the authentication form, either for sign-in or sign-up.
 *
 * @example
 * <AuthPage />
 *
 * @remarks
 * The component relies on the route path to determine if the user is on the sign-in or sign-up page. This assumes the
 * `authConfig` and `authField` utilities are correctly configured for each type of authentication.
 */
export const AuthPage = () => {
  const location = useLocation()

  // Determine if the current page is for signing in or registering
  const isSignIn = location.pathname.includes('signin')

  // Set the appropriate config and fields based on the page
  const config = isSignIn ? authConfig.login : authConfig.register
  const fields = isSignIn ? authField.login : authField.register

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm text-sm sm:text-base text-center">
        <AuthForm config={config} fields={fields} />
      </div>
    </div>
  )
}
