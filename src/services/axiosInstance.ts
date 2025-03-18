import axios from 'axios'

const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) parts.pop()?.split(';').shift()

  return undefined
}

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie('token')
    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
