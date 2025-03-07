/**
 * Interface defining the configuration properties for the login and registration screens.
 */
export interface AuthConfigProps {
  /**
   * Title displayed on the login or registration screen.
   */
  title: string

  /**
   * Brief description displayed below the title.
   */
  description: string

  /**
   * Text displayed on the main action button (Login or Register).
   */
  buttonText: string

  /**
   * Question displayed below the form (e.g., "Already have an account?").
   */
  question: string

  /**
   * Text of the link displayed below the form (e.g., "Sign up").
   */
  linkText: string

  /**
   * URL to which the link will direct.
   */
  linkTo: string

  /**
   * Determines if social login buttons (such as Google, Facebook) should be displayed.
   */
  socialButtons: boolean

  /**
   * Determines if the "Forgot password?" link will be displayed.
   */
  forgotPassword?: boolean
}

/**
 * Interface defining the configuration settings for the login and registration screens.
 */
export interface AuthConfigData {
  /**
   * Configuration for the login screen.
   */
  login: AuthConfigProps

  /**
   * Configuration for the registration screen.
   */
  register: AuthConfigProps
}
