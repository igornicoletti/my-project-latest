import { AuthFieldData } from '@/types'

export const authField: AuthFieldData = {
  login: [
    { id: 'email', label: 'E-mail', type: 'email', required: true },
    { id: 'password', label: 'Senha', type: 'password', required: true }
  ],
  register: [
    { id: 'username', label: 'Nome', type: 'text', required: false },
    { id: 'email', label: 'E-mail', type: 'email', required: true },
    { id: 'password', label: 'Senha', type: 'password', required: true }
  ]
}
