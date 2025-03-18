import { axiosInstance } from '@/services'

const setTokenCookie = (token: string) => {
  document.cookie = `token=${token}; path=/; secure; samesite=strict`
}

const authRequest = async (endpoint: string, data: Record<string, string>) => {
  try {
    const response = await axiosInstance.post(endpoint, data)
    return response.data
  } catch (err) {
    console.error('Erro na requisição:', err)
    return { error: 'Erro ao realizar a operação. Tente novamente.' }
  }
}

export const signinService = async (email: string, password: string) => {
  const response = await authRequest('/signin', { email, password })
  if (response.token) setTokenCookie(response.token)
  return response
}

export const signupService = async (username: string, email: string, password: string) => {
  const response = await authRequest('/signup', { username, email, password })
  if (response.token) setTokenCookie(response.token)
  return response
}

export const passwordService = (email: string) => {
  return authRequest('/forgot-password', { email })
}

export const logoutService = () => {
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
}
