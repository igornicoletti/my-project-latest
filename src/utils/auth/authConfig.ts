import { Auth, AuthConfigProps } from '@/types'

export const authConfig: Record<Auth, AuthConfigProps> = {
  signup: {
    title: 'Criar uma conta',
    description: 'Digite seus dados abaixo para criar sua conta',
    buttonText: 'Cadastrar',
    question: 'Já tem uma conta?',
    linkText: 'Entrar',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  },
  signin: {
    title: 'Acesse sua conta 2Ti',
    description: 'Digite seu e-mail abaixo para entrar na sua conta',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Cadastre-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  }
}
