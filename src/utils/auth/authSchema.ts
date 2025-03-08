import { z } from 'zod'

export const signUpSchema = z.object({
  username: z.string().min(3, 'Mínimo de 3 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'Mínimo de 6 caracteres.')
})

export const signInSchema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'Mínimo de 6 caracteres.')
})

export const forgotPasswordSchema = z.object({
  email: z.string().email('E-mail inválido.'),
})
