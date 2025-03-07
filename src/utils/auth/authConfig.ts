import { AuthConfigData } from '@/types'

export const authConfig: AuthConfigData = {
  login: {
    title: 'Acesse sua conta 2Ti',
    description: 'Entre com seu e-mail ou uma das contas abaixo ',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Cadastre-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  },
  register: {
    title: 'Bem-vindo à 2Ti',
    description: 'Vamos começar! Preencha com as suas informações.',
    buttonText: 'Cadastrar',
    question: 'Já tem uma conta?',
    linkText: 'Faça login',
    linkTo: '/signin',
    socialButtons: false,
    forgotPassword: false,
  }
}
