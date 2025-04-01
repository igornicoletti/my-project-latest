import { FormAuth } from '@/components'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { authPasswordData, authSignInData, authSignUpData, formPasswordData, formSignInData, formSignUpData, schemaPasswordData, schemaSignInData, schemaSignUpData } from '@/data'
import { AuthFormSchemaProps } from '@/types'
import { Link, useLocation } from 'react-router-dom'

export const AuthPage = () => {
  const location = useLocation()
  const pathname = location.pathname

  const authFormSchema: AuthFormSchemaProps = {
    '/signin': {
      authData: authSignInData,
      formData: formSignInData,
      schemaData: schemaSignInData
    },
    '/signup': {
      authData: authSignUpData,
      formData: formSignUpData,
      schemaData: schemaSignUpData
    }
  }

  const { authData, formData, schemaData } = authFormSchema[pathname as keyof AuthFormSchemaProps] || {
    authData: authSignInData,
    formData: formSignInData,
    schemaData: schemaSignInData
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-md text-center text-sm">
        <div className="grid gap-6 p-6">
          <div className="grid gap-2">
            <h1 className="truncate text-xl font-medium">{authData.title}</h1>
            <p className="text-balance text-muted-foreground">{authData.description}</p>
          </div>
          <FormAuth
            formData={formData}
            schemaData={schemaData} />
          <div className="grid gap-2">
            {pathname === '/signin' && (
              <Dialog>
                <DialogTrigger className="text-balance text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                  {authPasswordData.title}
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{authPasswordData.title}</DialogTitle>
                    <DialogDescription>{authPasswordData.description}</DialogDescription>
                  </DialogHeader>
                  <FormAuth
                    hideSocial={true}
                    formData={formPasswordData}
                    schemaData={schemaPasswordData}
                  />
                </DialogContent>
              </Dialog>
            )}
            {authData.url && (
              <div className="text-balance text-muted-foreground">
                {authData.question}{' '}
                <Link to={authData.url} className="text-primary hover:underline underline-offset-4">
                  {authData.link}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
