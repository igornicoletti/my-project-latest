import { forgotPasswordSchema, signInSchema, signUpSchema } from '@/utils'

export type SignUpData = z.infer<typeof signUpSchema>
export type SignInData = z.infer<typeof signInSchema>
export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>
