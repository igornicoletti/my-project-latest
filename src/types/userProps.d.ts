export interface User {
  name: string
  fallback: string
  email: string
  avatar: string
}

export type UserProps = {
  user: User
}
