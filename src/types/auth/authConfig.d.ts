export type Auth = 'signup' | 'signin'

export interface AuthConfigProps {
  type: Auth
  title: string
  description: string
  buttonText: string
  question: string
  linkText: string
  linkTo: string
  socialButtons: boolean
  forgotPassword?: boolean
}
