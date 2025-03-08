/**
 * authField
 *
 * This object contains the configuration for form fields in both login and registration forms.
 * Each field has attributes like id, label, type, and whether it is required.
 */
export const authField = {
  login: [
    { id: 'email', label: 'E-mail', type: 'email', required: true },
    { id: 'password', label: 'Senha', type: 'password', required: true }
  ],
  register: [
    { id: 'username', label: 'Nome', type: 'text', required: true },
    { id: 'email', label: 'E-mail', type: 'email', required: true },
    { id: 'password', label: 'Senha', type: 'password', required: true }
  ]
}
