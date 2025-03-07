import { Button, ForgotPassword, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components'
import { AuthFormProps } from '@/types'
import { authSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { AppleLogo, GoogleLogo, Spinner } from '@phosphor-icons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

/**
 * AuthForm component for rendering authentication forms like login and registration.
 * It manages form submission, validation, and rendering of social login buttons.
 *
 * @param config - Configuration for the authentication form, including title, description, button text, etc.
 * @param fields - An array of form fields to be rendered dynamically (e.g., email, password).
 *
 * @returns A form with the relevant fields and buttons, including social login options if enabled.
 */
export const AuthForm = ({ config, fields }: AuthFormProps) => {
  const [loading, setLoading] = useState<boolean>(false)

  // Initialize the form with react-hook-form and validation using Zod
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: '', password: '' }
  })

  /**
   * Handles form submission.
   * It sets loading to true, simulates a successful submission, and displays a toast message.
   *
   * @param data - The data submitted by the form, which includes email and password.
   */
  const onSubmit = (data: z.infer<typeof authSchema>) => {
    setLoading(true)

    setTimeout(() => {
      toast('Success!', {
        description: `Welcome, ${data.email}!`
      })

      setLoading(false)
    }, 5000)
  }

  return (
    <div className="grid gap-6">
      <div className={'grid gap-2'}>
        <h1 className={'text-2xl font-semibold'}>
          {config.title}
        </h1>
        <p className={'text-balance text-muted-foreground'}>
          {config.description}
        </p>
      </div>
      <Form {...form}>
        <form className={'grid gap-6'} onSubmit={form.handleSubmit(onSubmit)}>
          {fields.map((data) => (
            <FormField
              key={data.id}
              control={form.control}
              name={data.id as 'email' | 'password'}
              render={({ field }) => (
                <FormItem>
                  <div className={'grid gap-2'}>
                    <div className={'flex items-center justify-between'}>
                      <FormLabel>{data.label}</FormLabel>
                      {data.id === 'password' && config.forgotPassword &&
                        <ForgotPassword />
                      }
                    </div>
                    <FormControl>
                      <Input {...field} type={data.type} required={data.required} />
                    </FormControl>
                    <FormMessage className={'-mt-2 text-right'} />
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button type={'submit'}>
            {loading ? <Spinner className={'animate-spin size-5'} weight={'bold'} /> : config.buttonText}
          </Button>
        </form>
      </Form>
      <div className={'relative after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'}>
        <span className={'relative z-10 px-2 text-muted-foreground bg-background'}>
          or
        </span>
      </div>
      {config.socialButtons && (
        <div className={'grid sm:grid-cols-2 gap-4'}>
          <Button variant={'secondary'}>
            <AppleLogo size={24} weight={'duotone'} />{' '}
            Login via Apple
          </Button>
          <Button variant={'secondary'}>
            <GoogleLogo size={24} weight={'duotone'} />{' '}
            Login via Google
          </Button>
        </div>
      )}
      <p className={'text-balance text-muted-foreground [&_a]:text-primary hover:[&_a]:underline [&_a]:underline-offset-4'}>
        {config.question}{' '}
        <Link to={config.linkTo}>
          {config.linkText}
        </Link>
      </p>
    </div>
  )
}
