import { AuthConfigProps } from './authConfig'
import { AuthFieldProps } from './authField'

/**
 * Interface defining the properties for the authentication form component.
 * This interface groups the configuration and fields required to render
 * the login or registration form.
 */
export interface AuthFormProps {
  /**
   * Configuration for the authentication screen (login or registration).
   * Contains title, description, button text, and other related data.
   */
  config: AuthConfigProps

  /**
   * List of form fields to be rendered, such as email, password, name, etc.
   * Each field is described by the `AuthFieldProps` interface.
   */
  fields: AuthFieldProps[]
}
