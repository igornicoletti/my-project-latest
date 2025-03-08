import { AuthForm } from '@/components'
import { AuthFormProps } from '@/types'
import { authConfig, authField } from '@/utils'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const AuthPage = () => {
  const location = useLocation()
  const isSignUp = location.pathname === '/signup'

  const { config, fields } = useMemo<AuthFormProps>(() => {
    return isSignUp
      ? { config: authConfig.register, fields: authField.register }
      : { config: authConfig.login, fields: authField.login }
  }, [isSignUp])

  return (
    <div className='min-h-screen grid place-items-center p-6'>
      <div className='w-full max-w-sm text-sm sm:text-base text-center'>
        <AuthForm config={config} fields={fields} />
      </div>
    </div>
  )
}
