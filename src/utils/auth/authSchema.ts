import { z } from 'zod'

export const signUpSchema = z.object({
  username: z.string().min(3, 'Username deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.')
})

export const signInSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.')
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido.')
})
