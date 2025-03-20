import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { passwordService } from '@/services'
import { forgotPasswordSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>

export const AuthPassword = () => {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' }
  })

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      const response = await passwordService(data.email)
      if (response?.error) throw new Error(response.error)

      toast.success(`Instruções enviadas para ${data.email}`)
      form.reset()
    } catch (error) {
      const errorMessage = error instanceof Error
        ? error.message.includes('not found')
          ? 'E-mail não encontrado. Verifique e tente novamente.'
          : error.message
        : 'Ocorreu um erro inesperado.'

      toast.error(errorMessage)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='h-auto py-0' variant='link'>Forgot your password?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Forgot your password?</DialogTitle>
          <DialogDescription>No problem! Enter the email address you used to register and follow the instructions you’ll receive by email.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name='email' render={({ field: formField }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input value={formField.value} onChange={formField.onChange} type='email' required />
                </FormControl>
                <FormMessage className='-mt-1 ml-auto text-xs' />
              </FormItem>
            )} />
            <DialogFooter>
              <Button className='w-full' type='submit'>Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
