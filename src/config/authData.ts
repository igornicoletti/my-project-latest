import { z } from 'zod'

// Auth Data
export const authSignInData = {
  title: 'Sign in to your account',
  description: 'Welcome back! Please sign in to continue',
  question: "Don't have an account?",
  url: '/signup',
  link: 'Sign up',
}

export const authSignUpData = {
  title: 'Create your account',
  description: 'Welcome! Fill in your details to get started',
  question: 'Already have an account?',
  url: '/signin',
  link: 'Sign in',
}

export const authPasswordData = {
  title: 'Forgot your password?',
  description: 'No problem! Enter the email address you used to register and follow the instructions you’ll receive by email.',
}

// Form Data
export const formSignInData = [
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'password', label: 'Password', type: 'password', required: true },
]

export const formSignUpData = [
  { id: 'username', label: 'Name', type: 'text', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'password', label: 'Password', type: 'password', required: true },
]

export const formPasswordData = [
  { id: 'email', label: 'Email', type: 'email', required: true },
]

// Zod Schemas
export const schemaSignInData = z.object({
  email: z.string().email({
    message: 'Enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export const schemaSignUpData = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export const schemaPasswordData = z.object({
  email: z.string().email({
    message: 'Enter a valid email address.',
  }),
})
