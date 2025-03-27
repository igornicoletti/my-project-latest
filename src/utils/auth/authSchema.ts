import { z } from 'zod'

export const signUpSchema = z.object({
  username: z.string().min(3, 'Must be at least 3 characters long.'),
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(6, 'Must be at least 6 characters long.')
})

export const signInSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
  password: z.string().min(6, 'Must be at least 6 characters long.')
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Enter a valid email address.'),
})

export type SignUpData = z.infer<typeof signUpSchema>
export type SignInData = z.infer<typeof signInSchema>
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>
