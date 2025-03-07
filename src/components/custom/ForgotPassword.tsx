import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@/components'
import { axiosInstance } from '@/services'
import { useState } from 'react'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      // Realiza a requisição sem armazenar a resposta, apenas para verificar o status.
      await axiosInstance.post('/forgot-password', { email })
      setMessage('Instruções para recuperação de senha foram enviadas para o seu e-mail.')
    } catch (error) {
      // O erro é usado diretamente para exibir uma mensagem
      setMessage('Erro ao enviar a solicitação. Tente novamente.')
      console.error(error) // Você pode logar o erro, se necessário, para debug
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={'p-0 h-4 underline-offset-4 hover:underline'} variant={'link'}>
          Esqueceu sua senha?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Esqueceu a senha?</DialogTitle>
          <DialogDescription>
            Sem problemas! Indique o endereço de e-mail que utilizou quando se registou e, em seguida, siga as instruções que receberá por e-mail.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className={'grid gap-2'}>
          <Label htmlFor={'email'}>E-mail</Label>
          <Input id={'email'} type={'email'} required value={email} onChange={(e) => setEmail(e.target.value)} />
          {message && <div className="text-sm text-red-500">{message}</div>}
          <DialogFooter>
            <Button type={'submit'} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
