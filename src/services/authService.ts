import { AxiosError } from 'axios'
import { axiosInstance } from './axiosInstance'

const API_URL = 'http://localhost:5000/users'

/**
 * signinService
 *
 * Sends a login request to the API with the provided email and password.
 * On successful login, it stores the received token in `localStorage`.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 *
 * @returns {Promise<{ data: object | null, error: string | null }>} - The response object containing data and error message.
 * - If successful, the `data` will contain the server response, and `error` will be null.
 * - If an error occurs, `data` will be null, and the `error` will contain an error message.
 *
 * @example
 * ```ts
 * const { data, error } = await signinService('user@example.com', 'password123')
 * if (error) {
 *   console.error(error)
 * } else {
 *   console.log(data)
 * }
 * ```
 */
export const signinService = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/login`, { email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return { data: response.data, error: null }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Verifique seus dados.'
      return { data: null, error: errorMessage }
    }
    return { data: null, error: 'Erro desconhecido ao tentar fazer login.' }
  }
}

/**
 * signupService
 *
 * Sends a signup request to the API with the provided username, email, and password.
 *
 * @param {string} username - The username for the new user.
 * @param {string} email - The email for the new user.
 * @param {string} password - The password for the new user.
 *
 * @returns {Promise<{ data: object | null, error: string | null }>} - The response object containing data and error message.
 * - If successful, the `data` will contain the server response, and `error` will be null.
 * - If an error occurs, `data` will be null, and the `error` will contain an error message.
 *
 * @example
 * ```ts
 * const { data, error } = await signupService('username', 'user@example.com', 'password123')
 * if (error) {
 *   console.error(error)
 * } else {
 *   console.log(data)
 * }
 * ```
 */
export const signupService = async (username: string, email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/signup`, { username, email, password })
    return { data: response.data, error: null }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || 'Falha no cadastro. Verifique os dados e tente novamente.'
      return { data: null, error: errorMessage }
    }
    return { data: null, error: 'Erro desconhecido ao tentar se cadastrar.' }
  }
}
