import { AuthForm } from '@/components'
import { authConfig, authField } from '@/utils'
import { useLocation } from 'react-router-dom'

export const AuthPage = () => {
  const location = useLocation()
  const isSignIn = location.pathname.includes('signin')

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
