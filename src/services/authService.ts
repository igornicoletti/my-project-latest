import { AxiosError } from 'axios'
import { axiosInstance } from './axiosInstance'

const API_URL = 'http://localhost:5000/users'

export const signinService = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/login`, { email, password })
    return { data: response.data, error: null }
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || 'Erro ao fazer login. Verifique seus dados.'
      return { data: null, error: errorMessage }
    }
    return { data: null, error: 'Erro desconhecido ao tentar fazer login.' }
  }
}

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
