import { AuthConfigProps, AuthFieldProps, AuthTypeProps } from '@/types'

export const authConfigData: Record<AuthTypeProps, AuthConfigProps> = {
  signup: {
    title: 'Crie sua conta',
    description: 'Informe seus dados para obter sua conta',
    buttonText: 'Inscrever-se',
    question: 'Já tem uma conta?',
    linkText: 'Entrar',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  },
  signin: {
    title: 'Entre na sua conta',
    description: 'Insira suas credenciais para acessar sua conta',
    buttonText: 'Entrar',
    question: 'Não tem uma conta?',
    linkText: 'Inscreva-se',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  }
}

export const authFieldData: Record<AuthTypeProps, AuthFieldProps[]> = {
  signin: [
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      required: true
    }
  ],
  signup: [
    {
      id: 'username',
      label: 'Nome',
      type: 'text',
      required: true
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Senha',
      type: 'password',
      required: true
    }
  ]
}
