export interface AuthFormProps {
  config: {
    title: string
    description: string
    buttonText: string
    question: string
    linkText: string
    linkTo: string
    socialButtons: boolean
    forgotPassword?: boolean
  }
  fields: {
    id: string
    label: string
    type: string
    required: boolean
  }[]
}
