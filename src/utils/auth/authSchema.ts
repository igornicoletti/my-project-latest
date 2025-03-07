import { z } from 'zod'

/**
 * authSchema
 *
 * This is a Zod validation schema for validating user authentication inputs.
 * It defines the structure and validation rules for the login and registration forms.
 */
export const authSchema = z.object({
  email: z.string().email({
    message: 'E-mail inválido' // Custom error message for invalid email
  }),
  password: z.string().min(6, {
    message: 'A senha deve ter pelo menos 6 caracteres' // Custom error message for password too short
  })
})
