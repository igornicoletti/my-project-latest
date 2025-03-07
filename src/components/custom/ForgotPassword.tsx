import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@/components'
import { axiosInstance } from '@/services'
import { useState } from 'react'

/**
 * ForgotPassword
 *
 * The `ForgotPassword` component provides a dialog for users to request a password recovery by entering their email address.
 * It uses a form to capture the user's email, sends a request to the server to initiate the password reset process, and displays
 * a success or error message based on the response.
 *
 * @returns {JSX.Element} The `ForgotPassword` component that renders a dialog for password recovery.
 *
 * @example
 * <ForgotPassword />
 *
 * @remarks
 * The component uses the `axiosInstance` to send a POST request to the `/forgot-password` endpoint. The dialog is triggered by
 * the "Esqueceu sua senha?" button, which opens the dialog with the input form. The user can submit their email, and the component
 * will handle the form submission, show loading states, and display appropriate messages.
 */
export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  /**
   * Handles the form submission for password recovery.
   * Sends a POST request to the server with the user's email to initiate the recovery process.
   *
   * @param {React.FormEvent} event - The form submit event.
   * @returns {void}
   */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      // Send request to the server for password reset
      await axiosInstance.post('/forgot-password', { email })
      setMessage('Instruções para recuperação de senha foram enviadas para o seu e-mail.')
    } catch (error) {
      // Handle error if request fails
      setMessage('Erro ao enviar a solicitação. Tente novamente.')
      console.error(error)
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
