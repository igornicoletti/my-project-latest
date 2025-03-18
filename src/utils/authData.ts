import { AuthConfigProps, AuthFieldProps, AuthTypeProps } from '@/types'

export const authConfigData: Record<AuthTypeProps, AuthConfigProps> = {
  signin: {
    title: 'Sign in to your account',
    description: 'Welcome back! Please sign in to continue',
    buttonText: 'Continue',
    question: "Don't have an account?",
    linkText: 'Sign up',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  },
  signup: {
    title: 'Create your account',
    description: 'Welcome! Fill in your details to get started',
    buttonText: 'Continue',
    question: 'Already have an account?',
    linkText: 'Sign in',
    linkTo: '/signin',
    socialButtons: true,
    forgotPassword: false,
  },
}


export const authFieldData: Record<AuthTypeProps, AuthFieldProps[]> = {
  signin: [
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true
    }
  ],
  signup: [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      required: true
    },
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true
    }
  ]
}
