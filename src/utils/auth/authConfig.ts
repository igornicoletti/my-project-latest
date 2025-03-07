import { AuthConfigData } from '@/types'

/**
 * authConfig
 *
 * This configuration holds all the necessary details for the login and registration forms.
 * It includes titles, button text, links, and social login options.
 */
export const authConfig: AuthConfigData = {
  login: {
    title: 'Acesse sua conta 2Ti',
    description: 'Entre com seu e-mail ou uma das contas abaixo ',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Cadastre-se',
    linkTo: '/signup', // Link to the signup page
    socialButtons: true, // Enable social login buttons
    forgotPassword: true, // Show the "forgot password" option
  },
  register: {
    title: 'Bem-vindo à 2Ti',
    description: 'Vamos começar! Preencha com suas informações.',
    buttonText: 'Cadastrar',
    question: 'Já tem uma conta?',
    linkText: 'Faça login',
    linkTo: '/signin', // Link to the signin page
    socialButtons: false, // Disable social login buttons
    forgotPassword: false, // Do not show "forgot password" option
  }
}
