import { AuthPassword } from '@/components'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signinService, signupService } from '@/services'
import { AuthProps } from '@/types'
import { SignInData, signInSchema, SignUpData, signUpSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

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

      toast.success(`Auth: ${data.email}`)
      form.reset()
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message
        : 'An unexpected error occurred.'

      toast.error(errorMessage)
    }
  }

  return (
    <div className='grid gap-6 p-6'>
      <div className='grid gap-2'>
        <h1 className='truncate text-xl font-medium'>{config.title}{' '}</h1>
        <p className='text-balance text-muted-foreground'>{config.description}</p>
      </div>
      <div className='grid gap-4'>
        <Form {...form}>
          <form className='grid gap-4' onSubmit={form.handleSubmit(onSubmit)}>
            {fields.map((field) => (
              <FormField key={field.id} control={form.control} name={field.id as keyof z.infer<typeof schema>} render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input {...formField} type={field.type} required={field.required} />
                  </FormControl>
                  <FormMessage className='-mt-1 ml-auto text-sm' />
                </FormItem>
              )} />
            ))}
            <Button type='submit'>{config.buttonText}</Button>
          </form>
        </Form>
        <div className='grid gap-4'>
          <div className='relative after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
            <span className='relative z-10 px-2 text-muted-foreground bg-background'>
              or
            </span>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <Button variant='secondary'>
              <GithubLogo weight='light' /> GitHub
            </Button>
            <Button variant='secondary'>
              <GoogleLogo weight='light' /> Google
            </Button>
          </div>
        </div>
      </div>
      <div className='grid gap-2'>
        {!isSignup && (<AuthPassword />)}
        <div className='text-sm text-balance text-muted-foreground'>
          {config.question}{' '}
          <Link to={config.linkTo} className='text-primary hover:underline underline-offset-4'>
            {config.linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}
