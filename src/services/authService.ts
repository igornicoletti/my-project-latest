import { axiosInstance } from './axiosInstance'

const API_URL = 'http://localhost:5000/users'

export const signinService = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}`, { email, password })
    return response.data
  } catch (error) {
    throw new Error(`Falha no signin: ${error}`)
  }
}

export const signupService = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/signup`, { email, password })
    return response.data
  } catch (error) {
    throw new Error(`Falha no cadastro: ${error}`)
  }
}
