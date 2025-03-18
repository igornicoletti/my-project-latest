import { AuthPassword } from '@/components'
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { signinService, signupService } from '@/services'
import { AuthProps } from '@/types'
import { signInSchema, signUpSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

type SignUpData = z.infer<typeof signUpSchema>
type SignInData = z.infer<typeof signInSchema>

export const AuthForm = ({ config, fields }: AuthProps) => {
  const location = useLocation()
  const isSignup = location.pathname.includes('signup')
  const schema = isSignup ? signUpSchema : signInSchema

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: Object
      .fromEntries(Object.keys(schema.shape)
        .map(key => [key, ''])) as z.infer<typeof schema>
  })

  const onSubmit = async (data: SignUpData | SignInData) => {
    try {
      const response = 'username' in data
        ? await signupService(data.username, data.email, data.password)
        : await signinService(data.email, data.password)

      if (response?.error) throw new Error(response.error)

      toast.success(`Autenticado: ${data.email}`)
      form.reset()
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : 'Ocorreu um erro inesperado.'

      toast.error(errorMessage)
    }
  }

  return (
    <div className='grid gap-6 px-6 py-16'>
      <div className='grid gap-2'>
        <h1 className='text-2xl font-medium'>{config.title}</h1>
        <p className='text-balance text-muted-foreground'>{config.description}</p>
      </div>
      <Form {...form}>
        <form className='grid gap-6' onSubmit={form.handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <FormField key={field.id} control={form.control} name={field.id as keyof z.infer<typeof schema>} render={({ field: formField }) => (
              <FormItem>
                <div className='grid gap-2'>
                  <div className='flex items-center justify-between'>
                    <FormLabel>{field.label}</FormLabel>
                    {field.id === 'password' && config.forgotPassword && (
                      <AuthPassword />
                    )}
                  </div>
                  <FormControl>
                    <Input {...formField} type={field.type} required={field.required} />
                  </FormControl>
                  <FormMessage className='-mt-1 ml-auto text-xs' />
                </div>
              </FormItem>
            )} />
          ))}
          <Button type='submit'>{config.buttonText}</Button>
        </form>
      </Form>
      {config.socialButtons && !isSignup && (
        <div className='grid gap-6'>
          <div className='relative after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
            <span className='relative z-10 px-2 text-muted-foreground bg-background'>
              ou
            </span>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Button className='flex items-center gap-2' variant='secondary'>
              <GithubLogo className='shrink-0' weight='duotone' />
              <span>GitHub</span>
            </Button>
            <Button className='flex items-center gap-2' variant='secondary'>
              <GoogleLogo className='shrink-0' weight='duotone' />
              <span>Google</span>
            </Button>
          </div>
        </div>
      )}
      <p className='text-balance text-muted-foreground [&_a]:text-primary hover:[&_a]:underline [&_a]:underline-offset-4'>
        {config.question}{' '}
        <Link to={config.linkTo}>{config.linkText}</Link>
      </p>
    </div>
  )
}
