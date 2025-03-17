import { AuthForm } from '@/components'
import { authConfigData, authFieldData } from '@/utils'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const useIsSignUp = () => {
  const location = useLocation()
  return location.pathname === '/signup'
}

export const AuthPage = () => {
  const isSignUp = useIsSignUp()

  const { config, fields } = useMemo(() => {
    return isSignUp
      ? { config: authConfigData.signup, fields: authFieldData.signup }
      : { config: authConfigData.signin, fields: authFieldData.signin }
  }, [isSignUp])

  return (
    <div className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-md text-sm sm:text-base text-center'>
        <AuthForm config={config} fields={fields} />
      </div>
    </div>
  )
}
