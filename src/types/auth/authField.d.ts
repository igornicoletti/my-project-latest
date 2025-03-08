export type AuthFieldType = 'email' | 'password' | 'text'

export interface AuthFieldProps {
  id: string
  label: string
  type: AuthFieldType
  required: boolean
}
