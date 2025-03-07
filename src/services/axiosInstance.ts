import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
})

// Configurar um interceptor para adicionar o token nas requisições
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // Adicionando o token no cabeçalho
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
