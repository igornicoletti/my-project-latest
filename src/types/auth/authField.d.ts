/**
 * Interface defining the properties of a form field (login or registration).
 */
export interface AuthFieldProps {
  /**
   * Unique identifier for the field (e.g., 'email', 'password').
   */
  id: string

  /**
   * Text displayed next to the field, typically as the label.
   */
  label: string

  /**
   * Type of the field (e.g., 'email', 'password', 'text').
   */
  type: string

  /**
   * Defines whether the field is required or not.
   */
  required: boolean
}

/**
 * Interface defining the form fields for the login and registration screens.
 */
export interface AuthFieldData {
  /**
   * Fields for the login screen.
   */
  login: AuthFieldProps[]

  /**
   * Fields for the registration screen.
   */
  register: AuthFieldProps[]
}
