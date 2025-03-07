export interface AuthConfigProps {
  title: string
  description: string
  buttonText: string
  question: string
  linkText: string
  linkTo: string
  socialButtons: boolean
  forgotPassword?: boolean
}

export interface AuthConfigData {
  login: AuthConfigProps
  register: AuthConfigProps
}
