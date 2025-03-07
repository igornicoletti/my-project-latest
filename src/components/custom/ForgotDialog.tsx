import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@/components'

export const ForgotDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={'p-0 h-4 underline-offset-4 hover:underline'} variant={'link'}>
          Esqueceu sua senha?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Esqueceu a senha?
          </DialogTitle>
          <DialogDescription>
            Sem problemas! Indique o endereço de e-mail que utilizou quando se registou e, em seguida, siga as instruções que receberá por email.
          </DialogDescription>
        </DialogHeader>
        <div className={'grid gap-2'}>
          <Label htmlFor={'email'}>
            E-mail
          </Label>
          <Input id={'email'} type={'email'} required />
        </div>
        <DialogFooter>
          <Button type={'submit'}>
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
