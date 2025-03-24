import { AuthConfigProps, AuthTypeProps } from '@/types'

export const authConfigData: Record<AuthTypeProps, AuthConfigProps> = {
  signin: {
    title: 'Sign in to your account',
    description: 'Welcome back! Please sign in to continue',
    buttonText: 'Sign in',
    question: "Don't have an account?",
    linkText: 'Sign up',
    linkTo: '/signup',
    socialButtons: true,
    forgotPassword: true,
  },
  signup: {
    title: 'Create your account',
    description: 'Welcome! Fill in your details to get started',
    buttonText: 'Create account',
    question: 'Already have an account?',
    linkText: 'Sign in',
    linkTo: '/signin',
    socialButtons: false,
    forgotPassword: false,
  },
  forgot: {
    title: 'Create your account',
    description: 'Welcome! Fill in your details to get started',
    buttonText: 'Create account',
    question: '',
    linkText: '',
    linkTo: '',
    socialButtons: false,
    forgotPassword: false,
  },
}
