export interface AuthFieldProps {
  id: string
  label: string
  type: string
  required: boolean
}

export interface AuthFieldData {
  login: AuthFieldProps[]
  register: AuthFieldProps[]
}
