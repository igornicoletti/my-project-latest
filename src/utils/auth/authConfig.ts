export const authConfig = {
  login: {
    title: 'Acesse sua conta 2Ti',
    description: 'Faça login via e-mail para acessar o sistema',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Cadastre-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  },
  register: {
    title: 'Bem-vindo à 2Ti',
    description: 'Cadastre-se para começar a usar o sistema',
    buttonText: 'Cadastrar',
    question: 'Já tem uma conta?',
    linkText: 'Entrar',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  }
}
