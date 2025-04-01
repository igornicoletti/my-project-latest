import { schemaPasswordData, schemaSignInData, schemaSignUpData } from '@/data'

export interface AuthProps {
  title: string
  description: string
  question?: string
  url?: string
  link?: string
}

export interface FormProps {
  id: string
  label: string
  type: string
  required: boolean
}

export interface AuthFormSchemaProps {
  '/signin': {
    authData: AuthProps
    formData: FormProps[]
    schemaData: z.infer<typeof schemaSignInData>
  }
  '/signup': {
    authData: AuthProps
    formData: FormProps[]
    schemaData: z.infer<typeof schemaSignUpData>
  }
}

export type SchemaProps = | typeof schemaSignInData | typeof schemaSignUpData | typeof schemaPasswordData
