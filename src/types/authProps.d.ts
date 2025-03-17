export interface AuthConfigProps {
  title: string
  description: string
  buttonText: string
  question: string
  linkText: string
  linkTo: string
  socialButtons: boolean
  forgotPassword: boolean
}

export interface AuthFieldProps {
  id: string
  label: string
  type: string
  required: boolean
}

export interface AuthProps {
  config: AuthConfigProps
  fields: AuthFieldProps[]
}

export type AuthTypeProps = 'signup' | 'signin'
