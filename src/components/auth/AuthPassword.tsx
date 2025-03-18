import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { passwordService } from '@/services'
import { forgotPasswordSchema } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

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
        <Button className='p-0 h-4 underline-offset-4 hover:underline' variant='link'>
          Esqueceu sua senha?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Esqueceu a senha?</DialogTitle>
          <DialogDescription>Sem problemas! Indique o endereço de e-mail que utilizou quando se registou e siga as instruções que receberá por e-mail.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className='grid gap-2' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name='email' render={({ field: formField }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input value={formField.value} onChange={formField.onChange} type='email' required />
                </FormControl>
                <FormMessage className='-mt-1 ml-auto text-xs' />
              </FormItem>
            )} />
            <DialogFooter>
              <Button type='submit'>Enviar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
