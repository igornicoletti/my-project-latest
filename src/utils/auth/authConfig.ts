import { Auth, AuthConfigProps } from '@/types'

export const authConfig: Record<Auth, AuthConfigProps> = {
  signup: {
    title: 'Crie sua conta da 2Ti',
    description: 'Inscreva-se e tenha acesso à sua conta da 2Ti',
    buttonText: 'Continuar',
    question: 'Já tem uma conta?',
    linkText: 'Faça login',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  },
  signin: {
    title: 'Acesse sua conta da 2Ti',
    description: 'Faça login e tenha acesso à sua conta da 2Ti',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Inscreva-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  }
}
