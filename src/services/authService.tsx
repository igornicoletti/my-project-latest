import { axiosInstance } from './axiosInstance'

const authRequest = async (endpoint: string, data: Record<string, string>) => {
  try {
    const response = await axiosInstance.post(endpoint, data)
    return response.data
  } catch (err) {
    console.error('Erro na requisição:', err)
    return { error: 'Erro ao realizar a operação. Tente novamente.' }
  }
}

export const signinService = (email: string, password: string) => {
  return authRequest('/signin', { email, password })
}

export const signupService = (username: string, email: string, password: string) => {
  return authRequest('/signup', { username, email, password })
}

export const forgotPasswordService = (email: string) => {
  return authRequest('/forgot-password', { email })
}
