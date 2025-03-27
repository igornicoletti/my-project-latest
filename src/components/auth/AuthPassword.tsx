import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface AuthProps {
  title: string
  description: string
  question?: string
  url?: string
  link?: string
}

interface FormProps {
  id: string
  label: string
  type: string
  required: boolean
}

type Props = {
  authData: AuthProps
  formData: FormProps[]
  schemaData: z.ZodObject<{ email: z.ZodString }, "strip", z.ZodTypeAny, { email: string }, { email: string }>
}

export const AuthPassword = ({ authData, formData, schemaData }: Props) => {

  const form = useForm<z.infer<typeof schemaData>>({
    resolver: zodResolver(schemaData),
    defaultValues: Object.fromEntries(
      Object.keys(schemaData.shape).map((key) => [key, ''])
    ) as z.infer<typeof schemaData>
  })

  const onSubmit = (values: z.infer<typeof schemaData>) => {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger className='text-sm hover:underline hover:underline-offset-4'>
        Forgot your password?
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{authData.title}</DialogTitle>
          <DialogDescription>{authData.description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4'>
            {formData.map((data) => (
              <FormField
                key={data.id}
                control={form.control}
                name={data.id as keyof z.infer<typeof schemaData>}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{data.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...formField}
                        type={data.type}
                        required={data.required} />
                    </FormControl>
                    <FormMessage className='-mt-1 ml-auto text-sm' />
                  </FormItem>
                )}
              />
            ))}
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
