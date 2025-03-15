import { Auth, AuthConfigProps } from '@/types'

export const authConfig: Record<Auth, AuthConfigProps> = {
  signup: {
    title: 'Criar uma conta',
    description: 'Informe seus dados para obter sua conta.',
    buttonText: 'Inscrever-se',
    question: 'Já tem uma conta?',
    linkText: 'Entrar',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  },
  signin: {
    title: 'Entre na sua conta',
    description: 'Insira suas credenciais para acessar sua conta.',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Inscreva-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  }
}
