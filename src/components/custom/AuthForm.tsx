import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormProps, SchemaProps } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface Props {
  formData: FormProps[]
  schemaData: SchemaProps
  hideSocial?: boolean
}

export const AuthForm = ({ formData, schemaData, hideSocial }: Props) => {
  type FormValues = z.infer<typeof schemaData>

  const form = useForm<FormValues>({
    resolver: zodResolver(schemaData),
    defaultValues: Object.fromEntries(
      Object.keys(schemaData.shape).map((key) => [String(key), ''])
    ) as FormValues,
  })

  const onSubmit = (values: FormValues) => {
    toast.success('Authenticate', { description: values.email })
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        {formData.map((data) => (
          <FormField
            key={data.id}
            control={form.control}
            name={data.id as keyof FormValues}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{data.label}</FormLabel>
                <FormControl>
                  <Input {...formField} type={data.type} required={data.required} />
                </FormControl>
                <FormMessage className="-mt-1 ml-auto" />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Continue</Button>
        {!hideSocial && (
          <div className="grid gap-4">
            <div className="relative after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 px-2 text-muted-foreground bg-background">or</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary">
                <GithubLogo weight="light" /> GitHub
              </Button>
              <Button variant="secondary">
                <GoogleLogo weight="light" /> Google
              </Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  )
}
