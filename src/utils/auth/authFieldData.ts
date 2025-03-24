import { AuthFieldProps, AuthTypeProps } from '@/types'

export const authFieldData: Record<AuthTypeProps, AuthFieldProps[]> = {
  signin: [
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true
    }
  ],
  signup: [
    {
      id: 'username',
      label: 'Username',
      type: 'text',
      required: true
    },
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      required: true
    }
  ],
  forgot: [
    {
      id: 'email',
      label: 'Email address',
      type: 'email',
      required: true
    },
  ],
}
